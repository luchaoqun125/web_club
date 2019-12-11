/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-29 18:31:19
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-29 18:41:49
 */
(function() {
  function myPromise(params) {
    return new Promise((resolve, reject) =>  {
      if(params) {
        resolve(params)
      } else {
        reject(params);
      }
    }).catch(err => {
      console.log(err)
    })
  }

  try {
    var result = myPromise(false)
    result.then(r => {
      console.log(r)
    })
  } catch (error) {
    console.log(error, 'err')
  }
})()