/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-17 22:45:14
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-20 17:53:20
 */
import React from 'react';
import {hot} from 'react-hot-loader/root';
import styles from './css.less'
import img1 from './assets/img1.jpg'
import img from './assets/img.jpg'
import { Button } from 'antd'

function App(){
    return (
        <div className={styles.text}>
            hello reactfffsssf
            <img src={img} alt=""/>
            <img src={img1} alt=""/>
            <Button type="danger">click me2</Button>
        </div>
    )
}

export default hot(App);