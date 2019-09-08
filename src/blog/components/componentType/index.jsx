import React, { Component } from 'react'

export default class biji extends Component {
    render() {
        return (
            <div>
            
9.生命周期和状态以及属性的配合使用   每个钩子函数都是做什么功能的
            首先react有10个生命周期钩子函数

            挂载期
            constructor 数据接收 实现继承super(props) 
            componentWillMount 数据挂载之前 可以操作数据 不可以操作dom 
            componentDidMount 数据挂载之后 可以操作数据和dom 
            render 渲染组件 和 html 标签

            更新期
            shouldComponentUpdate 检测组件内的变化 可以用作页面性能的优化(默认值为true) 
            componentReceiveProps 接收组件传入输入数据 
            componentWillUpdate 组件更新之前调用 
            componentDidUpdate 组件更新之后调用 
            render 组件更新之后渲染组件

            销毁期
            componentWillUnmount 组件销毁时调用 可以做一些内存的优化 (全局变量,闭包,计时器,事件)

10.逻辑上 我们预习了事件写法   跨域的使用
11.jsconfig.json  配置组件引入时  使用绝对路径  该知识点  在脚手架官网
12.了解了与一下antd框架
            </div>
        )
    }
}
