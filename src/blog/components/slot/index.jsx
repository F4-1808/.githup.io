import React, { Component } from 'react'
import './index.scss'
export default class index extends Component {
  render() {
    return (
      <div className="slot">
        <h1>插槽</h1>
        <h3>隐式渲染</h3>
        <p>主要利用组件中的props.children属性进行渲染</p>
        <h3>显式渲染</h3>
        主要利用顶级api中的React.children.map、React.cloneElement方法进行显式渲染
      </div>
    )
  }
}
