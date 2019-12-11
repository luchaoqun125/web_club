/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-12-06 20:43:15
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-06 20:48:17
 */
import DataWorker from 'web-worker:./worker';
const dataWorker = new DataWorker();

export function MyPostMessage(data) {
  dataWorker.postMessage(data)
}