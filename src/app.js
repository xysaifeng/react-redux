import React, { Component } from 'react'
import Hoc from './components/hoc/index';
import Renders from './components/RendeProp/index';

function Demo() {
    return (
        <div>demo</div>
    )
}

export default class App extends Component {
    componentDidMount() {
        console.log(7890)
    }
    
    render() {
        return (
            <div>
                <div></div>
                <Demo />
                <Demo></Demo>
                <Demo></Demo>
                app2
                <App2></App2>
                <Renders></Renders>
                <Hoc></Hoc>
            </div>
        )
    }
}

class App2 extends Component {
    componentDidMount() {
        console.log(7890)
    }
    
    render() {
        return (
            <div>
                app3
            </div>
        )
    }
}
