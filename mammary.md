**Mammary-Readme**

*目录*

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

* [一、所用技术](#一-所用技术)
* [二、项目模块与执行流程](#二-项目模块与执行流程)
* [三、项目体系结构](#三-项目体系结构)
* [四、模块化与组件封装的实现](#四-模块化与组件封装的实现)
* [五、项目进度](#五-项目进度)
* [六、框架模式](#六-框架模式)

<!-- /code_chunk_output -->

----
###一、所用技术
* [html 教程](http://www.w3school.com.cn/html/index.asp)
* [css 教程](http://www.w3school.com.cn/css/index.asp)
* [javascript 教程](http://www.w3school.com.cn/js/index.asp)
* [Angular 官网](https://angular.cn)
* [Material 官网](https://material.angular.io)

###二、项目模块与执行流程

* <font color="CornflowerBlue" size=4>乳腺癌患者管理</font>
在数据管理页面，当登录者有相关权限时，可查询或清空患者的数据记录，页面上方设置了五个过滤条件输入框来确定查询对象，包括所属社区、负责医师、患者姓名、患者身份证号以及录入时间段，同时页面下方显示了病人基本信息的列表，当登录者有相关权限时，还可对列表条目进行查看和删除操作，当点击表中某一个病人的操作列中查看按钮时，可跳转至患者数据录入页面，该页面显示了患者的住院病案首页提取信息、入院病历、一般检查项目、特殊检查项目、治疗方式、随访一般项目和出院记录的详细表单信息，也可对表单信息进行修改完善。
* <font color="CornflowerBlue" size=4>随访管理</font>
在随访管理页面，当登录者有相关权限时，可查询或清空患者的随访记录，页面上方设置了五个过滤条件输入框来确定查询对象，包括所属社区、负责医师、患者姓名、患者身份证号以及录入时间段，同时页面下方显示了病人基本信息的列表，当登录者有相关权限时，当点击列表条目中的查看随访记录按钮时，可跳转至患者随访记录页面，该页面显示了患者基本信息以及随访记录，当点击表下方的添加按钮时，可添加新的随访记录，所填写的有常规检查、症状、新发事件、饮食生活习惯、体征、实验室检查的详细表单信息。
* <font color="CornflowerBlue" size=4>人员管理</font>
在人员管理页面，当登录者有相关权限时，可查询该系统中注册的所有人员的基本信息，页面上方设置了六个过滤条件输入框来确定查询对象，包括用户名、姓名、角色、负责人、社区以及注册时间，同时页面下方显示了人员基本信息的列表，当点击表下方的添加按钮时，可新建用户，所填写的一些基本信息有用户名、密码、姓名、社区及邮箱，新用户即可通过用户名和密码登录本系统。
* <font color="CornflowerBlue" size=4>医疗表单组件</font>
在表单组件一览中，可查看每个自定义组件的作用和显示效果。

###三、项目体系结构

####3.1框架结构
![结构](https://img-blog.csdn.net/20171229104026472?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvRWRpc29uXzAz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast "angualr结构")

####3.2代码结构
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
<summary>feedback-反馈信息</summary>
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

###四、模块化与组件封装的实现

#### 自定义组件
* dynamic-row-table 自定义动态表单
* file-upload 上传文件
* general-address 地址选择
* general-card-group 证件填写
* general-checkbox 多选框
* general-date 日期选择
* general-date-year 年份选择
* general-date-year-month 年月选择
* general-expansional-panel 自定义折叠窗
* general-input 输入框
* general-input-condition 自定义输入
* general-radio 自定义单选多选
* general-select 多选弹出输入框
* general-selector 自定义勾选
* general-stepper 自定义步进器
* general-table 自定义表格


#### 组件封装的实现

首先，在generalComponents文件夹中，建了一个cmpList.ts类文件，该文件创建了一个包含了所有自定义组件的components_list的json常量数组，并导出了它。每个自定义表单组件用step_description属性定义其名称，具体的自定义设计由items属性实现，items可包含多个基本组件，其中type来选择基本组件，title来定义基本组件名，key_value来匹配键值对。
general-component-list组件用来展示自定义的表单组件，首先在类文件中导入该组件列表components_list，再在类中添加一个components_list属性，以供绑定，components_list = components_list; 然后在模板文件中用ngFor来实现对components_list数组的遍历，再用ngFor和ngSwitch实现对每个自定义组件中所包含基础组件的显示，其中ngSwitchcase都是shared文件夹下general-components模块中的每一个封装好的基本组件，通过[conf]属性绑定基本组件，实现组件之间的通信。

#####代码如下：
``` javascript

<mat-tab-group (selectedTabChange)="changeTab($event)">
<mat-tab *ngFor="let tab of components_list" [label]="tab.step_description">
<ng-template mat-tab-label style="font-size: large; color: #232a37">{{tab.step_description}}</ng-template>
<ng-template matTabContent>
<div *ngFor="let cmp of tab.items">
<div [ngSwitch]="cmp.type">
<app-dc-general-selector *ngSwitchCase="'selector'" [conf]="cmp" ></app-dc-general-selector>
<app-dc-general-input *ngSwitchCase="'input'" [conf]="cmp"></app-dc-general-input>
<app-dc-general-radio *ngSwitchCase="'radio'" [conf]="cmp"></app-dc-general-radio>
<app-dc-general-checkbox *ngSwitchCase="'checkbox'" [conf]="cmp"></app-dc-general-checkbox>
<app-dc-general-table *ngSwitchCase="'table'" [conf]="cmp"></app-dc-general-table>
<app-dc-general-date *ngSwitchCase="'date'" [conf]="cmp" ></app-dc-general-date>
<app-dc-general-date-year *ngSwitchCase="'date-year'" [conf]="cmp" ></app-dc-general-date-year>
<app-dc-general-date-year-month *ngSwitchCase="'date-year-month'" [conf]="cmp" ></app-dc-general-date-year-month>
<app-dc-general-card-group *ngSwitchCase="'card-group'" [conf]="cmp" ></app-dc-general-card-group>
<app-dc-general-address *ngSwitchCase="'address'" [conf]="cmp" ></app-dc-general-address>
<app-dc-dynamic-row-table *ngSwitchCase="'dynamic-row-table'" [conf]="cmp" ></app-dc-dynamic-row-table>
<app-general-select *ngSwitchCase="'select'" [conf]="cmp"></app-general-select>
<app-general-expansion-panel *ngSwitchCase="'panel-table'" [conf]="cmp"></app-general-expansion-panel>
<app-general-stepper *ngSwitchCase="'stepper'" [conf]="cmp"></app-general-stepper>
</div>
</div>

```
然后在shared文件夹中，包含子系统之间共享的一些内容，其中general-components中包含的是所有基本组件的实现，需要注意的是这些组件在shared.mudule.ts模板文件中必须保证导入、声明以及导出。另外在conf-interface.ts类文件中,导出了一个带有@Input（）装饰器的输入属性conf，用来让外部的general-component-list组件来绑定到它，其他valid_confirmed属性表验证确认以及edit_disabled输入属性表示组件是否可编辑。

#####代码如下：
```javascript
import { Input } from '@angular/core';

export class ConfInterface {
@Input() conf: any; // 配置项
public valid_confirmed = false;
@Input() edit_disabled = false;
}
```

----

### 五、项目进度

- [x] 已完成模块
  - [x] 医疗表单组件
  - [x] 人员管理
- [ ] 待完成模块
  - [ ] 数据录入
  - [ ] 随访管理


gantt
  dateFormat YYYY-MM-DD
  title 进展与计划
  section 初期阶段
  系统初步完善组件模块的封装和接口设计:2018-10-01,10d
  section 中期阶段
  拿到数据后跟进开发，完善表单:2018-12-01,10d
  section 后期阶段
  性能测试，调整优化:2018-01-01,10d

---

### 六、框架模式

模型层|视图层|视图模型层
---|:--:|:---:
Model|View|ViewModel

Angular引入数据结构并复用组件模块生成GUI

![MVVM](../../../../../home/xujingqin/Picture.png "MVVM")

