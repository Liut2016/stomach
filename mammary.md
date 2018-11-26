**Mammary-Readme**
>*目录*
>1.所采用的技术
>2.项目体系结构
>3.具体执行流程
>4.前端模块化的显示
>5.组件封装的实现
----
##第一部分


####所用框架及组件库
* [Angular](https://angular.cn)
* [Angular Material](https://material.angular.io)

####项目模块

* 乳腺癌患者管理
* 随访管理
* 人员管理
* 医疗表单组件

####框架结构

![结构](https://img-blog.csdn.net/20171229104026472?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvRWRpc29uXzAz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast "angualr结构")

####代码结构
<details>
<summary>src（可点击展开）</summary>
<details>
<summary>app-根组件</summary>
<details>
<summary>authentication-用户管理</summary>
</details>
<details>
<summary>core-底层服务</summary>
</details>
<details>
<summary>feedback-</summary>
</details>
<details>
<summary>follow-随访管理模块</summary>
</details>
<details>
<summary>generalcomponents-组件表单</summary>
</details>
<details>
<summary>personal-人员管理</summary>
</details>
<details>
<summary>setting-系统设置</summary>
</details>
<details>
<summary>layout-通用布局</summary>
</details>
<details>
<summary>shared-所有子系统共享</summary>
</details>
<details>
<summary>survey-患者信息管理</summary>
</details>
</details>
</details>

----



组件|服务|接口
---|:--:|:---:
conponent|service|confInterface

* 自定义组件
  * dynamic-row-table 自定义动态表单
  * file-upload 上传文件
  * general-address 地址选择
  * general-card-group 证件填写
  * general-checkbox 多选框
  * general-date 日期选择
  * general-date-year 年份选择
  * general-date-year-month  年月选择
  * general-expansional-panel 自定义折叠窗
  * general-input 输入框
  * general-input-condition 自定义输入
  * general-radio 自定义单选多选
  * general-select 多选弹出输入框
  * general-selector 自定义勾选
  * general-stepper 自定义步进器
  * general-table 自定义表格


```
<div>
  <mat-card>
    <mat-card-header>
      <h3>
        表单组件一览
      </h3>
    </mat-card-header>
    <mat-card-content>
      <div>
        <mat-tab-group (selectedTabChange)="changeTab($event)">
          <mat-tab *ngFor="let tab of components_list" [label]="tab.step_description">
            <ng-template mat-tab-label style="font-size: large; color: #232a37">{{tab.step_description}}</ng-template>
            <ng-template matTabContent>
              <div *ngFor="let cmp of tab.items">
                <div [ngSwitch]="cmp.type">
                  <app-dc-general-selector        *ngSwitchCase="'selector'"        [conf]="cmp" ></app-dc-general-selector>
                  <app-dc-general-input *ngSwitchCase="'input'" [conf]="cmp"></app-dc-general-input>
                  <app-dc-general-radio *ngSwitchCase="'radio'" [conf]="cmp"></app-dc-general-radio>
                  <app-dc-general-checkbox *ngSwitchCase="'checkbox'" [conf]="cmp"></app-dc-general-checkbox>
                  <app-dc-general-table           *ngSwitchCase="'table'"           [conf]="cmp"></app-dc-general-table>
                  <app-dc-general-date            *ngSwitchCase="'date'"            [conf]="cmp" ></app-dc-general-date>
                  <app-dc-general-date-year       *ngSwitchCase="'date-year'"       [conf]="cmp" ></app-dc-general-date-year>
                  <app-dc-general-date-year-month *ngSwitchCase="'date-year-month'" [conf]="cmp" ></app-dc-general-date-year-month>
                  <app-dc-general-card-group      *ngSwitchCase="'card-group'"      [conf]="cmp" ></app-dc-general-card-group>
                  <app-dc-general-address         *ngSwitchCase="'address'"         [conf]="cmp" ></app-dc-general-address>
                  <app-dc-dynamic-row-table       *ngSwitchCase="'dynamic-row-table'" [conf]="cmp" ></app-dc-dynamic-row-table>
                  <app-general-select *ngSwitchCase="'select'" [conf]="cmp"></app-general-select>
                  <app-general-expansion-panel *ngSwitchCase="'panel-table'" [conf]="cmp"></app-general-expansion-panel>
                  <app-general-stepper *ngSwitchCase="'stepper'" [conf]="cmp"></app-general-stepper>
                </div>
              </div>
              <div class="source-button">
                <button  mat-icon-button (click)="showSource()">
                  <mat-icon>code</mat-icon>
                </button>
              </div>

              <mat-card style="border-top: 1px solid gainsboro" *ngIf="show_source">
                <ngx-json-viewer [json]="source_code"></ngx-json-viewer>
              </mat-card>
            </ng-template>
          </mat-tab>
        </mat-tab-group>
      </div>
    </mat-card-content>
  </mat-card>
</div>

```

----

## 第二部分

- [x] 已完成模块
  - [x] 医疗表单组件
  - [x] 人员管理
- [ ] 待完成模块
  - [ ] 数据录入
  - [ ] 随访管理

```flow
st=>start: 开始
op=>operation: 人员管理
cond=>condition: 添加 or 删除?
e=>end
st->op->cond
cond(yes)=>e
cond(no)->op
&```

