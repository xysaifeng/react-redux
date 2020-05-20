import React, { Component } from 'react'

function Demo() {
    return (
        <div>demo</div>
    )
}

export default class App extends Component {
    componentDidMount() {
        console.log(789)
    }
    
    render() {
        return (
            <div>
                <div></div>
                <Demo />
                <Demo></Demo>
                <Demo></Demo>
                app
            </div>
        )
    }
}
