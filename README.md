# Linux基本使用
## 基本操作
| 名称 | 功能 |
| --- | --- |
| ls | 查看目录 |
| ll | 查看目录 |
| pwd | 查看路径 |
| cd | 进入文件夹 |
| cd .. | 返回上级目录 |
| cp |  复制文件 |
| rm | 删除文件 |
| mv | 移动文件（重命名）|
| cat | 查看文件内容 |

## 项目部署
1. 从github上将项目clone到服务器端
```  sh
$ git clone http://github.com/lixiaoyu0575/oncology
``` 
2. 进入项目文件夹下
``` sh
$ cd oncology/
```
3. 安装依赖项
``` sh
$ npm install
```
4. 产品模式编译
``` sh 
$ ng build --prod
```
5. (如果没有安装pm2) 安装pm2
``` sh
$ npm install -g pm2
``` 
6. 项目运行
``` sh
$ pm2 start oncology.js
```

## git与github基本使用
1. 下载到本地
``` sh
$ git clone <url>
```
2. 提交到暂存区
``` sh
$ git add <filename>
```
3. 提交
``` sh 
$ git commit -m "<your log>"
```
4. 查看分支
``` sh
$ git branch
```
5. 创建分支
``` sh
$ git branch <branch name>
```
6. 切换分支
``` sh
$ git checkout <branch name>
```
7. 删除分支(本地)
``` sh
$ git branch -d <branch name>
```
8. 删除分支（远程）
``` sh
$ git push <url> --delete <branch name>
```
9. 提交到远程仓库
``` sh
$ git push <url>
```

## vim 使用
1. 三种模式
![](http://www.runoob.com/wp-content/uploads/2014/07/vim-vi-workmodel.png) 
2. 保存退出

| 命令 |  功能 |
| --- | --- |
| :w | 保存 |
|：q| 退出|
|：q!|强制退出 |
|:wq|保存退出|

3. 常用快捷键

|输入|功能|
|---|---|
|dd|删除光标所在的整行|
|ndd|删除光标所在的向下n行|
|yy|复制光标所在的行|
|nyy|复制光标所在的向下n行|
|p|粘贴到光标下一行|
|P|粘贴到光标上一行|
|u|复原前一个动作|
|[ctrl]+r|重做上一个动作|
|0|移动到这一行的最前面字符处|
|$|移动到这一行的最后面字符处|
|G|移动到最后一行|
|nG|移动到第n行|
|gg|移动到首行|
|n[Enter]|光标向下移动n行|