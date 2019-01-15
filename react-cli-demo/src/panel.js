import React, { Component } from 'react';
import {ThemeContext} from './theme-context';
class Mypanel extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hideFlag: true
          };
        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.clearData = this.clearData.bind(this);
        this.checkboxChange = this.checkboxChange.bind(this);
        this.textbut = React.createRef();
    }
    componentDidMount() {
        
    }
    componentWillUnmount() {
        
    }
    componentWillReceiveProps(nextProps) {
       
    }
    clearData(event){
        this.props.clearData(this.props.id);
    }
    checkboxChange(event) {
        this.props.sonToFather(
            {
                id:event.target.id,
                checked:event.target.checked,
                mypanelIndex:this.props.id
            }
        );
    }
    render(){
        if(!this.state.hideFlag){
            return null;
        }
        let mypanel = {
            width:'100%'
        };
        let center = {
            width:'200px',
            margin:'0 auto'
        };
        let ul = {
            'listStyle':'none'
        };
        let li =  {
            "textAlign":'left',
            'wordBreak':'break-all'
        };

      return (
        <>
        <div style={mypanel}>
            <div style={center}>
                {this.props.name}
            <button ref={this.textbut} onClick={this.clearData} >清空</button>
            </div>
            <div style={center}>
                <ul style={ul}>
                { this.props.list.map((number,index) =>
                    <li style={li} key={index.toString()}>
                         <input type="checkbox" checked={number.flag} id={index.toString()} value={number.value} onChange={this.checkboxChange} /> {number.value}
                    </li>
                    )}
                </ul>
            </div>
        </div>
        </>
      );
    }
}
export default Mypanel;