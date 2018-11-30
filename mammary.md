**Mammary-Readme**

*目录*

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

* [一、项目所用技术](#一-项目所用技术)
* [二、项目体系结构](#二-项目体系结构)
	* [2.1 模块结构](#21-模块结构)
	* [2.1代码结构](#21代码结构)
		* [（1）Angular整体目录结构](#1angular整体目录结构)
		* [（2）app项目目录结构](#2app项目目录结构)
* [三、组件封装的实现](#三-组件封装的实现)
	* [3.1 自定义组件](#31-自定义组件)
	* [3.2 组件封装的实现](#32-组件封装的实现)
* [四、项目进度与计划](#四-项目进度与计划)
	* [4.1 项目进度](#41-项目进度)
	* [4.2 项目计划](#42-项目计划)

<!-- /code_chunk_output -->

----
### 一、项目所用技术
* [Angular 官网](https://angular.cn)

*Angular是一个JavaScript前端框架，可以把静态页面和动态数据绑定起来，实现了模块化、组件化，我们的页面是由不同的组件动态组成的，通过调用服务来与后台服务器进行交互。Angular的开发环境确保包含 Node.js和 npm 包管理器。Angular 需要 Node.js 的 8.x 或 10.x 版本。Angular、Angular CLI 和 Angular 应用都依赖于由一些库所提供的特性和功能，它们主要是 npm 包。Angular 工作空间就是你开发应用的上下文环境。 每个工作空间包含一些供一个或多个项目使用的文件。 每个项目都是一组由应用、库或端到端（e2e）测试构成的文件。组件 是 Angular 应用中的基本构造块。 它们在屏幕上显示数据、监听用户输入，并根据这些输入采取行动。具体内容及教程请参考Angular官网*
Angular 框架模式

模型层|视图层|视图模型层
---|:--:|:---:
Model|View|ViewModel

>本项目中的MVVM模式体现如下：
![MVVM](../../../../../home/xujingqin/Picture.png "MVVM")

* [Angular Material 官网](https://material.angular.io)
*Angular Material的目标是使用Angular及TypeScript打造出高品质的UI元件，同时这些元件必须遵守Material Design的设计标准。直觉的API，在大部分通用的情况下，是不会有bug的，所有的元件都有撰写良好的单元测试及整合测试，让所有使用者都能够轻易与这些元件互动。可以依照Material Design准则客观化这些元件的细节，高效能、干净的程式码且所有元件都有清楚的文件及范例。*

### 二、项目体系结构

#### 2.1 模块结构

* <font color="CornflowerBlue" size=4>乳腺癌患者管理</font>
在数据管理页面，当登录者有相关权限时，可查询或清空患者的数据记录，页面上方设置了五个过滤条件输入框来确定查询对象，包括所属社区、负责医师、患者姓名、患者身份证号以及录入时间段，同时页面下方显示了病人基本信息的列表，当登录者有相关权限时，还可对列表条目进行查看和删除操作，当点击表中某一个病人的操作列中查看按钮时，可跳转至患者数据录入页面，该页面显示了患者的住院病案首页提取信息、入院病历、一般检查项目、特殊检查项目、治疗方式、随访一般项目和出院记录的详细表单信息，也可对表单信息进行修改完善。
* <font color="CornflowerBlue" size=4>随访管理</font>
在随访管理页面，当登录者有相关权限时，可查询或清空患者的随访记录，页面上方设置了五个过滤条件输入框来确定查询对象，包括所属社区、负责医师、患者姓名、患者身份证号以及录入时间段，同时页面下方显示了病人基本信息的列表，当登录者有相关权限时，当点击列表条目中的查看随访记录按钮时，可跳转至患者随访记录页面，该页面显示了患者基本信息以及随访记录，当点击表下方的添加按钮时，可添加新的随访记录，所填写的有常规检查、症状、新发事件、饮食生活习惯、体征、实验室检查的详细表单信息。（这里按慢性病项目写的，乳腺癌的随访暂定是放在表单中）
* <font color="CornflowerBlue" size=4>人员管理</font>
在人员管理页面，当登录者有相关权限时，可查询该系统中注册的所有人员的基本信息，页面上方设置了六个过滤条件输入框来确定查询对象，包括用户名、姓名、角色、负责人、社区以及注册时间，同时页面下方显示了人员基本信息的列表，当点击表下方的添加按钮时，可新建用户，所填写的一些基本信息有用户名、密码、姓名、社区及邮箱，新用户即可通过用户名和密码登录本系统。
* <font color="CornflowerBlue" size=4>医疗表单组件</font>
在表单组件一览中，可查看每个自定义组件的作用和显示效果。
* <font color="CornflowerBlue" size=4>自定义可视化</font>
在自定义可视化页面中，能在可视化图像中直观清晰地查看数据并分析。


#### 2.1代码结构
##### （1）Angular整体目录结构
![结构](https://img-blog.csdn.net/20171229104026472?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvRWRpc29uXzAz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast "angualr结构")

##### （2）app项目目录结构
<details>
<summary>app-根组件（可点击展开）</summary>
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
<summary>follow-随访管理</summary>
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

### 三、组件封装的实现

#### 3.1 自定义组件
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


#### 3.2 组件封装的实现

首先，在generalComponents文件夹中，建了一个cmpList.ts类文件，该文件创建了一个包含了所有自定义组件的components_list的json常量数组，并导出了它。每个自定义表单组件用step_description属性定义其名称，具体的自定义设计由items属性实现，items可包含多个基本组件，其中type来选择基本组件，title来定义基本组件名，key_value来匹配键值对。
general-component-list组件用来展示自定义的表单组件，首先在类文件中导入该组件列表components_list，再在类中添加一个components_list属性，以供绑定，components_list = components_list; 然后在模板文件中用ngFor来实现对components_list数组的遍历，再用ngFor和ngSwitch实现对每个自定义组件中所包含基础组件的显示，其中ngSwitchcase都是shared文件夹下general-components模块中的每一个封装好的基本组件，通过[conf]属性绑定基本组件，实现组件之间的通信。

>代码如下：
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

>代码如下：
```javascript
import { Input } from '@angular/core';

export class ConfInterface {
@Input() conf: any; // 配置项
public valid_confirmed = false;
@Input() edit_disabled = false;
}
```

----

### 四、项目进度与计划
#### 4.1 项目进度
- [x] 已完成模块
  - [x] 医疗表单组件
  - [x] 人员管理
- [ ] 待完成模块
  - [ ] 数据录入
  - [ ] 随访管理


#### 4.2 项目计划
初期阶段|中期阶段|后期阶段
:--:|:--:|:--:
系统初步完善模块,组件的封装和接口设计|拿到数据后跟进开发，完善表单|性能测试，调整优化
---


