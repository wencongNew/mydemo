import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mypanel from './panel.js';
import './customInput.css';
import './common.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.mypanel = React.createRef();
    this.state = {
      isToggleOn: true,
      value:"TODOList",
      panel:[
        {
            id:0,
            Mypanel:{
              "name":"未完成",
              list:[]
            }
        },
        {
            id:1,
              Mypanel:{
              "name":"已完成",
              list:[]
            }
        }
      ]
    };
     this.addTODOList = this.addTODOList.bind(this);
     this.clearData = this.clearData.bind(this);
     this.sonToFather = this.sonToFather.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({value:e.target.value});

  }
  addTODOList(){
    let data = this.state.panel;
    data[0].Mypanel.list.push(
      {
        value:this.state.value,
        flag:false
      }
    );
    this.setState({
      panel:data
    });
  }
  sonToFather(event){
   let data = this.setPanel(this.state.panel,event.id,{flag:event.checked},event.mypanelIndex);
   this.setState({
      panel:data
    });
  }
  clearData(id){
    let data = this.clearPanel(this.state.panel,id);
    this.setState({
      panel:data
    });

  }
  clearPanel(data,id){
    data[id].Mypanel.list = [];
    return data;
  }
  setPanel(data,index,keyValueObj,myPanelIndex){
    // 操作对象Mypanel0还是Mypanel1
    for(let key in keyValueObj ){
      data[myPanelIndex].Mypanel.list[index][key] = keyValueObj[key];
    }
    let Paneled = myPanelIndex ? 0 :1; // 带新增元素的数组
    data[Paneled].Mypanel.list.push( data[myPanelIndex].Mypanel.list[index]); 
    data[myPanelIndex].Mypanel.list.splice(index,1); 
    return data;
  }
  render() {
    return (
      <div className="App">
        添加TODOList
        <div>
        <input className="customInput" type="text" value={this.state.value} onChange={this.handleChange}></input>
        <button className="button" onClick={this.addTODOList}>添加</button>
        </div>
        { this.state.panel.map((panel,index) =>
    <Mypanel key={index.toString()} id={index} list={this.state.panel[index].Mypanel.list} name={panel.Mypanel.name} clearData={this.clearData} sonToFather={this.sonToFather}/>
  )}
      </div>
    );
  }
}

export default App;
