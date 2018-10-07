import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Message } from './message';
import { FeedbackService } from './feedback.service';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { log } from 'util';

import { SettingsService } from '../shared/service/settings.service';
import { HttpForNowService } from '../shared/service/http-for-now.service';
import { PageEvent } from '@angular/material';

// mock data
// import { users2email } from "./mock-data";
import { formatDate } from '@angular/common';
import { roleDict } from '../shared/config-items/static-item';

interface UserPublicInfo {
  avatar?: string;
  name: string;
  role: string;
  id: string;
}
interface Email {
  receiver: UserPublicInfo;
  sender: UserPublicInfo;
  content: string;
  subject: string;
  sendTime: number;
  emailId: string;
  read: boolean;
}
@Component({
  selector: 'app-dialog-data-example-dialog',
  templateUrl: './email-dialog.html'
})
export class DialogDataExampleDialogComponent implements OnInit, AfterViewInit {
  public editor;
  public text;
  public selection;
  email: Email;
  users2email = [];
  oriEmail;

  roleDict = roleDict;

  // email to send
  receiverID = '';
  subject = '';
  emailBody = '';

  // @ViewChild('eidtor') editor: QuillEditorComponent;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public setting: SettingsService, public httpService: HttpForNowService,
    public dialogRef: MatDialogRef<DialogDataExampleDialogComponent>) {
    console.log(data);
    if (data.oriEmail) {
      this.oriEmail = data.oriEmail;
      this.emailBody = `<br/><p>-----------------------------------------原始邮件----------------------------------------------</p>
      <p>&nbsp;&nbsp;  <em>发件人：` + this.oriEmail.sender.name + `</em></p>
      <p>&nbsp;&nbsp;  <em>发送时间：` + formatDate(this.oriEmail.sendTime, 'yyyy-MM-dd hh:mm:ss', 'en') + `</em></p>
      <p>&nbsp;&nbsp;  <em>收件人：` + this.oriEmail.receiver.name + `</em></p>
      <p>&nbsp;&nbsp;  <em>主题：` + this.oriEmail.subject + `</em></p>
      <p>&nbsp;&nbsp;   ` + this.oriEmail.content + `</p>`;
      if (data.type === 'transfer') {
        this.subject = '转发： ' + this.oriEmail.subject;
      } else if (data.type === 'reply') {
        this.subject = '回复： ' + this.oriEmail.subject;
        this.receiverID = this.setting.user.id === this.oriEmail.sender.id ? this.oriEmail.receiver.id : this.oriEmail.sender.id;
        console.log(this.receiverID);
      }
    }
    this.getUsers2Email();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log(this.editor);
    // this.editor.setText(this.oriMessage.body);
  }

  editorCreated(editor) {
    // console.log(editor);
    // editor.html = this.oriMessage.body;
    this.editor = editor;
    // this.editor
    // .onContentChanged
    // .pipe(
    //   debounceTime(400),
    //   distinctUntilChanged()
    // )
    // .subscribe(data => {
    //   console.log('view child + directly subscription', data)
    // });
  }
  contentChanged(text) {
    // console.log(text);
    this.text = text;
  }
  selectionChanged(selection) {
    // console.log(selection);
    this.selection = selection;
  }

  send() {
    this.httpService.sendEmail(this.receiverID, this.subject, this.emailBody).then(res => {
      console.log(res);
      // console.log(this.oriMessage);
      console.log('sended!');
      this.dialogRef.close('sended');
    });
  }

  cancel() {
    console.log('canceled!');
    this.dialogRef.close('canceled!');
  }

  getUsers2Email() {
    this.users2email = [];
    this.httpService.getUsers2Email(this.setting.user.id).then(res => {
      console.log(res);
      res['User list'].forEach(n => {
        console.log(n);
        this.users2email.push({
          name: n.name,
          role: n.role,
          id: n.receiver_ID
        });
      });
      console.log(this.users2email);
    });
  }
}


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers: [FeedbackService]
})
export class FeedbackComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: 960px)`);

  public config: PerfectScrollbarConfigInterface = {};

  displayMode = 'default';
  messages: Message[];
  selectedMessage: Message;
  formerMessages;
  messageOpen = false;
  sidePanelOpened = true;
  filterDate1;
  filterDate2;
  filters = {
    subject: '',
    receiverName: '',
    senderName: '',
    startDate: '',
    endDate: ''
  };

  email: Email;
  emailList: Email[] = [];
  selectedEmail: Email;
  paginatorConfig = {
    length: 15,
    pageSize: 5,
    index: 0
  };
  role2labelDict = {
    doctor: 'info',
    patient: 'success',
    community: 'warning',
    administrator: 'danger'
  };
  roleDict = roleDict;


  constructor(private feedbackService: FeedbackService, public dialog: MatDialog, public httpService: HttpForNowService,
    public settings: SettingsService) { }

  ngOnInit(): void {
    this.getMessages();
    this.getEmailList();
  }

  isOver(): boolean {
    return this.mediaMatcher.matches;
  }

  getMessages(): void {
    this.feedbackService.getMessages().then(messages => {
      this.messages = messages;
      console.log(this.messages);
      this.selectedMessage = this.messages[0];
    });
  }

  onSelect(email: Email): void {
    this.httpService.readEmail(email.emailId).then(res => {
      if (email.read === false) {
        email.read = true;
        this.settings.unreadEmailNumber -= 1;
      }
      console.log(res);
      const n = res.Message;
      const email2 = <Email>{
        receiver: {
          name: n.receiver_ID.full_name,
          role: n.receiver_ID.role,
          id: n.receiver_ID.username
        },
        sender: {
          name: n.sender_ID.full_name,
          role: n.sender_ID.role,
          id: n.sender_ID.username
        },
        content: n.content,
        subject: n.theme,
        // sendTime: formatDate(+n.send_time, 'yyyy-MM-dd hh:mm:ss', 'en'),
        sendTime: +n.send_time,
        emailId: n.EID,
        read: n.read === '1' ? true : false,
      };
      this.selectedEmail = email2;
    });
  }

  // Compose button
  openDialog() {
    const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
      data: {
        type: 'reply',
        oriMessage: this.selectedMessage
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  reply() {
    const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
      data: {
        type: 'reply',
        oriEmail: this.selectedEmail
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  transfer() {
    const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
      data: {
        type: 'transfer',
        oriEmail: this.selectedEmail
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  delete() {
    this.httpService.deleteEmail(this.selectedEmail.emailId).then(res => {
      this.selectedEmail = undefined;
      this.getEmailList();
    });
  }

  create() {
    const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
      data: {
        type: 'create'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 'sended') {
        this.getEmailList();
      }
    });
  }

  getEmailList() {
    const start = this.paginatorConfig.index * this.paginatorConfig.pageSize;
    const offset = this.paginatorConfig.pageSize;
    this.emailList = [];
    this.httpService.getEmailList(start, this.settings.user.id, {}, offset).then(res => {
      this.paginatorConfig.length = res.Count_total;
      console.log(res);
      res.Email_list.forEach(n => {
        console.log(n);
        const email = <Email>{
          receiver: {
            name: n.receiver.full_name,
            role: n.receiver.role,
            id: n.receiver.username
          },
          sender: {
            name: n.sender.full_name,
            role: n.sender.role,
            id: n.sender.username
          },
          content: 'loading',
          subject: n.theme,
          // sendTime: formatDate(+n.send_time, 'yyyy-MM-dd hh:mm:ss', 'en'),
          sendTime: +n.send_time,
          emailId: n.EID,
          read: (n.read === '1' || n.sender.username === this.settings.user.id) ? true : false,
        };
        this.emailList.push(email);
        this.onSelect(this.emailList[0]);
        this.selectedEmail = this.emailList[0];
      });
    });
  }

  pageChanged(e: PageEvent) {
    this.paginatorConfig.pageSize = e.pageSize;
    this.paginatorConfig.index = e.pageIndex;
    this.getEmailList();
  }
}
