<!--
 * @Description: electron 笔记
 * @Author: 鲁大师
 * @Date: 2020-03-17 10:31:00
 * @LastEditors: 鲁大师
 * @LastEditTime: 2020-03-17 20:35:07
 -->
MainProcess主线程模块
app: 控制你的应用程序的事件生命周期。
autoUpdater: 使应用程序能够自动更新
BrowserView: 创建和控制视图, BrowserView 被用来让 BrowserWindow 嵌入更多的 web 内容。 它就像一个子窗口，除了它的位置是相对于父窗口。 这意味着可以替代webview标签.
BrowserWindow: 创建和控制浏览器窗口。
contentTracing: 从Chromium收集跟踪数据以查找性能瓶颈和运行缓慢。
dialog: 显示用于打开和保存文件、警报等的本机系统对话框。
globalShortcut: 在应用程序没有键盘焦点时，监听键盘事件。
globalShortcut: 模块可以在操作系统中注册/注销全局快捷键, 以便可以为操作定制各种快捷键。
inAppPurchase: Mac App Store中的应用内购买。
ipcMain: 从主进程到渲染进程的异步通信。
Menu: 创建原生应用菜单和上下文菜单。
MenuItem: 添加菜单项到应用程序菜单和上下文菜单中。
net: 使用Chromium的原生网络库发出HTTP / HTTPS请求。
netLog: 记录会话的网络事件。
Notification: 创建OS(操作系统)桌面通知
powerMonitor: 监视电源状态的改变
powerSaveBlocker: 阻止系统进入低功耗 (休眠) 模式。
protocol: 注册自定义协议并拦截基于现有协议的请求。
screen: 检索有关屏幕大小、显示器、光标位置等的信息。
session: 管理浏览器会话、cookie、缓存、代理设置等。
systemPreferences: 获取system preferences.
touchBar: 为原生macOS应用创建TouchBar布局，以后可能更改和删除
tray: 添加图标和上下文菜单到系统通知区
webContents: 渲染以及控制web页面


