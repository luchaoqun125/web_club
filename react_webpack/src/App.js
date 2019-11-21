/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-17 22:45:14
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-21 14:04:11
 */
import React from 'react';
// import {hot} from 'react-hot-loader/root';
import styles from './css.less'
import img1 from './assets/img1.jpg'
import img from './assets/img.jpg'
import { Button } from 'rollup-react-library';
function App(){
    return (
        <div className={styles.text}>
            hello react
            <img src={img} alt=""/>
            <img src={img1} alt=""/>
            <Button type="danger">click me2</Button>
        </div>
    )
}

export default App;