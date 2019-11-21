/*
import { Button } from 'antd';
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-20 14:22:06
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-21 14:02:38
 */

import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidCatch(error, info) {
    
  }

  render() {
    return this.props.children
  }
}

export default Button