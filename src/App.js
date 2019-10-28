import React,{Component}from 'react';
import './App.css';
class InputNumber extends Component{
  state = {
    num: 1,
    aaa:'egeg',
    value:"first",    
}
render() {
    return (
        <div>
            <input type="text" value={this.state.value} onChange={()=>{console.log("this",this.value);this.setState({value:this.state='lala'})}}/>
        </div>
    );
}
}
function change(){
  console.log("变了")
  this.setState({value:this.state='lala'})
}
function useState(){
  return ['geg','setValue']
}
function App(){
  const [value] = useState('aaa')
  return (
      <div>
      <InputNumber value={value} onChange={e=>{}}/>
      <InputNumber defaultValue={value} onChange={e=>{}}/>
      </div>
  )
}

export default App;
