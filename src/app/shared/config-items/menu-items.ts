import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
  rolesCannotSee?: string[];
}

const MENUITEMS = [
  {
    state: 'survey',
    name: '慢性病档案管理',
    type: 'sub',
    icon: 'insert_drive_file',
    children: [
      {state: 'hypertensionMS', name: '高血压档案管理'},
      {state: 'diabetesMS', name: '糖尿病档案管理'},
    ]
  },
  {
    state: 'follow',
    name: '随访管理',
    type: 'sub',
    icon: 'web',
    children: [
      {state: 'hypertensionFollowOverview', name: '高血压患者随访管理'},
      {state: 'diabetesFollowOverview', name: '糖尿病患者随访管理'},
    ]
  },
  {
    state: 'personnel',
    name: '人员管理',
    type: 'link',
    icon: 'perm_contact_calendar',
    rolesCannotSee: ['patient']
  }
  // {
  //   state: 'feedback',
  //   name: '消息反馈',
  //   type: 'link',
  //   icon: 'perm_contact_calendar',
  //   rolesCannotSee: []
  // }
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
