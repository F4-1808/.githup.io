import React, { Component } from 'react'
// 引入模板组件
import MyLayout from './components/layout/'
// 引入react基础部分组件
import ReactBase from './components/ReactBase/'
// 引入组件类型部分组件
import ComponentType from './components/componentType/'
export default class inde extends Component {
  constructor() {
    super()
    this.state = {
      isCom: 'reactBase' //要渲染的组件标识
    }

    window.onhashchange = () => {
      this.setState({
        isCom: window.location.hash.slice(1)
      })
    }
  }

  // 根据点击的菜单通过改变hash值来显示相应的页面
  changeHash = id => {
    // 改变页面hash值
    window.location.hash = id

    // console.log(window.location.hash.slice(1))
  }

  render() {
    // 通过判断state中isCom从而渲染相应的组件
    let Dom = ''
    // eslint-disable-next-line default-case
    switch (this.state.isCom) {
      case 'reactBase':
        Dom = <ReactBase />
        break
      case 'ComponentType':
        Dom = <ComponentType />
        break
    }
    return (
      <div>
        {/* 引入模板 */}
        <MyLayout changehash={this.changeHash}>
          {/* 渲染点击的菜单对应的组件 */}
          {Dom}
        </MyLayout>
      </div>
    )
  }
}
