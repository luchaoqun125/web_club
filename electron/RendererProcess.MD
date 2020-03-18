<!--
 * @Description: 渲染进程
 * @Author: 鲁大师
 * @Date: 2020-03-18 10:25:22
 * @LastEditors: 鲁大师
 * @LastEditTime: 2020-03-18 11:33:58
 -->
desktopCapturer: 通过[navigator.mediaDevices.getUserMedia] API ，可以访问那些用于从桌面上捕获音频和视频的媒体源信息。
ipcRenderer: 从渲染器进程到主进程的异步通信。ipcRenderer 是一个 EventEmitter 的实例。 你可以使用它提供的一些方法从渲染进程 (web 页面) 发送同步或异步的消息到主进程。 也可以接收主进程回复的消息。
remote: 在渲染进程中使用主进程模块。remote 模块为渲染进程（web页面）和主进程通信（IPC）提供了一种简单方法。
webFrame: 自定义渲染当前页面
