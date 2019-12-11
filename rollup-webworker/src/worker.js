/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-12-06 17:39:48
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-10 20:29:34
 */
onmessage = (e) => {

  const { url, data } = e.data
  
  fetch(url, data)
}

function fetch(url, data) {
  if(!url) return
  if(typeof data !== 'string') data = JSON.stringify(data)
  // 判断是否存在sendBeacon
  if(navigator.sendBeacon && data.length < 65536) {
    navigator.sendBeacon(url, data)
  } else {
    createXHL(url, data)
  }
}

// XMLHttpRequest同步上传
function createXHL(url, data) {
  if(typeof data !== 'string') data = JSON.stringify(data)
  const xhr = new XMLHttpRequest()
  xhr.open('POST', url)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  xhr.send(data)
}