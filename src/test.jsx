import React from 'react';
const Component=React.Component;
class tChild extends Component{
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
    componentDidMount() {
        console.log('mount',this.props.name)
    }
    componentDidUpdate() {
        console.log('update',this.props.name)
    }
    componentWillUnmount() {
        console.log('unmount',this.props.name)
    }
 
}
class tApp extends Component{
    state = {
        list: ['a','b','c']
    }
    render() {
        return (
            <div>
                {this.state.list.map(item => <tChild  name={item}/>)}
                <button onClick={e => {
                    this.setState({
                        list: ['b','c','d']
                    })
                }}>set</button>
            </div>
        );
    }
}

export default {tChild,tApp};