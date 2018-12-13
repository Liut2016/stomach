**Mammary-Readme**

*目录*

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

* [一、项目所用技术](#一-项目所用技术)
* [二、项目体系结构](#二-项目体系结构)
	* [2.1 页面结构](#21-页面结构)
	* [2.2 代码结构](#22-代码结构)
		* [（1）Angular-cli初始结构](#1angular-cli初始结构)
		* [（2）app根组件目录结构](#2app根组件目录结构)
	* [2.3 模块结构](#23-模块结构)
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

如图所示：
![MVVM](assets/images/markdown/mvvm.png "具体实施")

MVVM是Model-View-ViewModel的简写。它本质上就是MVC 的改进版。MVVM 就是将其中的View 的状态和行为抽象化，让我们将视图 UI 和业务逻辑分开。当然这些事 ViewModel 已经帮我们做了，它可以取出 Model 的数据同时帮忙处理 View 中由于需要展示内容而涉及的业务逻辑。
单向绑定非常简单，用[]实现，就是把Model层赋予的值绑定到View层，当我们用JavaScript代码更新Model时，View就会自动更新。在Angular中，可以直接写{{ name }}绑定某个属性。如果属性关联的是对象，还可以用多个.引用。如果用户更新了View，Model的数据也自动被更新了，这种情况就是双向绑定。双向绑定用[()]来实现，一般是绑定ngModel属性，用法是[(ngModel)]="变量名"，即HTML对应控件的状态改变会反射设置到组件的model中。

MVVM模式主要目的是分离视图（View）和模型（Model），有几大优点:
1. 低耦合。View可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。
2. 可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。
3. 独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。
4. 可测试。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。

* [Angular Material 官网](https://material.angular.io)

*Angular Material的目标是使用Angular及TypeScript打造出高品质的UI元件，同时这些元件必须遵守Material Design的设计标准。直觉的API，在大部分通用的情况下，是不会有bug的，所有的元件都有撰写良好的单元测试及整合测试，让所有使用者都能够轻易与这些元件互动。可以依照Material Design准则客观化这些元件的细节，高效能、干净的程式码且所有元件都有清楚的文件及范例。*

### 二、项目体系结构

#### 2.1 页面结构

* <font color="CornflowerBlue" size=4>乳腺癌患者管理</font>

在数据管理页面，当登录者有相关权限时，可查询或清空患者的数据记录，页面上方设置了五个过滤条件输入框来确定查询对象，包括所属社区、负责医师、患者姓名、患者身份证号以及录入时间段，同时页面下方显示了病人基本信息的列表，当登录者有相关权限时，还可对列表条目进行查看和删除操作，当点击表中某一个病人的操作列中查看按钮时，可跳转至患者数据录入页面，该页面显示了患者的住院病案首页提取信息、入院病历、一般检查项目、特殊检查项目、治疗方式、随访一般项目和出院记录、随访记录的详细表单信息，也可对表单信息进行修改完善。

* <font color="CornflowerBlue" size=4>人员管理</font>

在人员管理页面，当登录者有相关权限时，可查询该系统中注册的所有人员的基本信息，页面上方设置了六个过滤条件输入框来确定查询对象，包括用户名、姓名、角色、负责人、社区以及注册时间，同时页面下方显示了人员基本信息的列表，当点击表下方的添加按钮时，可新建用户，所填写的一些基本信息有用户名、密码、姓名、社区及邮箱，新用户即可通过用户名和密码登录本系统。

* <font color="CornflowerBlue" size=4>医疗表单组件</font>

在表单组件一览中，可查看每个自定义组件的作用和显示效果。

* <font color="CornflowerBlue" size=4>自定义可视化</font>

在自定义可视化页面中，能在可视化图像中直观清晰地查看数据并分析。


#### 2.2 代码结构
##### （1）Angular-cli初始结构

```
src/
|
+- app/  <--根组件
 |
   +- app.component.css  <-- 根组件CSS样式
   |
   +- app.component.html  <-- 根组件HTML模板
   |
   +- app.component.spec.ts  <-- 根组件单元测试
   |
   +- app.component.ts  <--  根组件TS文件
   |
   +- app.module.ts  <-- 根模块（定义AppModule,告诉angular如何组装你的应用）
   |
+- assets/  <-- 存放静态资源
|
+- environments  <-- 目标环境配置
|
+- favicon.ico  <-- 书签图标
|
+- main.ts  <-- 应用主入口
|
+- styles.css  <-- 全局样式
|
+- test.ts  <-- 测试入口
|
+- tsconfig.app.json  <-- TypeScript编译器的配置文件
|
+- environments  <-- 目标环境
|
+- package.json  <-- 项目描述文件
|
node_modules/  <--  npm安装的所有依赖包

```

##### （2）app根组件目录结构


```
src/
|
+- app/  <--根组件
 |
   +- authentication/  <-- 用户管理
   |
   +- core/  <-- 底层服务
   |
   +- generalcomponent/  <-- 组件表单
   |
   +- personal/  <-- 人员管理
   |
   +- setting/  <-- 系统主题设置
   |
   +- layout/  <-- 页面通用布局
   |
   +-shared/  <-- 所有子系统共享
   |
   +- survey/  <-- 患者信息管理
   |
   +- app.routing.ts  <-- 页面路由
   |
   +- demo-material-module.ts  <-- 基本模块导入导出

```

#### 2.3 模块结构

app中主要有三个子模块，分别是表单，人员，组件。我们把所有组件单独抽出来作为一个模块，供“表单模块”和“组件库模块”两个模块去共享。
![Module Structure](assets/images/markdown/module_explanation.jpeg "模块结构")

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

部分代码如下：

``` javascript
<mat-tab-group (selectedTabChange)="changeTab($event)">
<mat-tab *ngFor="let tab of components_list" [label]="tab.step_description">
<ng-template mat-tab-label style="font-size: large; color: #232a37">{{tab.step_description}}</ng-template>
<ng-template matTabContent>
<div *ngFor="let cmp of tab.items">
<div [ngSwitch]="cmp.type">
<app-dc-general-select *ngSwitchCase="'select'" [conf]="cmp" ></app-dc-general-select>
<app-general-expansion-panel *ngSwitchCase="'panel-table'" [conf]="cmp"></app-general-expansion-panel>
</div>
</div
```

然后在shared文件夹中，包含子系统之间共享的一些内容，其中general-components中包含的是所有基本组件的实现，需要注意的是这些组件在shared.mudule.ts模板文件中必须保证导入、声明以及导出。另外在conf-interface.ts类文件中,导出了一个带有@Input（）装饰器的输入属性conf，用来让外部的general-component-list组件来绑定到它，其他valid_confirmed属性表验证确认以及edit_disabled输入属性表示组件是否可编辑。

代码如下：

```javascript
import { Input } from '@angular/core';

export class ConfInterface {
@Input() conf: any; // 配置项
public valid_confirmed = false;
@Input() edit_disabled = false;
}
```
这里以general-select组件为例进行组件封装的具体说明：

(1)开始我们在*general-components*文件夹中创建一个名叫*general-select*的新组件，该组件要实现的功能是在一个下拉多选框中当用户选择condition1时，自动弹出一个输入框，当用户选择condition2时弹出两个输入框。

(2)若想让该组件在表单页面中显示时，首先我们需要将其加到*cmpList.ts*文件中定义导出的*components_list*常量数组中，数组中每个元素的step_description属性描述其在表单显示时的组件名，items属性中可选择将该组件加进去，type属性表示基础组件的类型select，title属性表示基础组件的名字“地址选择”，key_value属性表示其绑定的键值对为地址，还有select组件中所需的placeholder与options属性，同时我们定义两个目标值target_value去实现用户选择值与目标值相同时，进行不同的操作与显示。

(3)然后我们需要在负责表单页面显示的*general-components-list*组件的模板文件中,把select组件作为一个遍历项ngSwitchCase加进去。同时将它与conf属性绑定与其他组件间进行通信。

(4)最后我们就去实现select组件的页面逻辑与功能，先在组件的模板文件HTML中，运用material将该功能的UI静态页面效果实现，在下拉选项和选择值属性中我们用*conf-interface.ts*文件中的@input装饰器下定义的conf属性与其他组件实现通信，从而可在表单中显示。在*general-select*组件中我们将用户选择的选项值与conf.key_value._value双向绑定，用（ngModelChange）输出监听元素值的变化，并同步到view value和Model value，主要是用*checkAnswer*函数实现页面逻辑，即当conf.key_value._value与*cmp.list*文件中定义的target_value两个值匹配相等时，页面有不同的响应显示。

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


