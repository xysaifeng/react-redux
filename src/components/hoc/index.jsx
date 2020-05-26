import React, { Component } from 'react';
import iihoc from './iihoc';

class ComponentFather extends Component {
    state =  {
        num: 90,
        age: 100
    }

    obj = {
        name: 'tom'
    }

    static type = 'father'

    componentDidMount() {
        console.log(this, '======== Father this');
        console.log('Father did mount');        
    }
    
    clickComponent = () => {
        console.log('Father click =======');
        console.log(this, '============= child this');
        this.setState(prevState => ({
            num: prevState.num + 1
        }))
        this.fatherAdd(); 
    }

    fatherAdd() {
        console.log('======= fatherAdd');
        console.log(this, '============ father this');
        this.setState(prevState => ({
            num: prevState.num + 1
        }))
    }
    
    render(n) {
        console.log('父组件 render: '+ n);
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

export default iihoc(ComponentFather);