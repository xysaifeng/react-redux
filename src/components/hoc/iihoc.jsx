import React, { Component } from 'react'

let iihoc = Comp => class Child extends Comp {
    constructor(props) {
        super(props);
        // this.clickComponent = this.clickComponent.bind(this);
        this.state = {
            num: 2020
        }
    }

    componentDidMount() {
        console.log(this, '=========== this');
        // console.log(this === super);
        console.log('iihoc did mount')
        // this.clickComponent()
        // super.fatherAdd()
    }

    childFn() {
        console.log('======== child Fn');
    }

    iihocFn = () => {
        console.log('iihoc Fn');
    }

    render() {
        // 1.父类:Comp 子类:Child
        return (
            <div>
                {/* clickComponent方法定义在父类实例中,在当前组件(类)中通过super(props)方法调用,给当前组件(类)实例赋予该方法,所以可以通过this.clickComponent调用 */}
                <div onClick={this.clickComponent}>iihoc 点击</div>
                {/* 用的父组件的state*/}
                <div><Comp /></div>
                {/*反向继承,用的子组件的state, render方法定义在父类Comp中*/}
                <div>{super.render(101)}</div>
            </div>
        );
    }
}
export default iihoc;
