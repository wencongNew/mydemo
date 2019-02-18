import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mypanel from './panel.js';
import JavaScriptTc from './JavaScriptTc.jsx';
import './customInput.css';
import './common.css';
import { Menu, Tree } from 'antd';
import { Card, Tabs } from 'antd';
import "antd/dist/antd.css"; // 要引入ant 样式
class App extends Component {
  constructor(props) {
    super(props);
    this.mypanel = React.createRef();

    this.state = {
      isToggleOn: true,
      value: "TODOList",
      panel: [
        {
          id: 0,
          Mypanel: {
            "name": "未完成",
            list: []
          }
        },
        {
          id: 1,
          Mypanel: {
            "name": "已完成",
            list: []
          }
        }
      ]
    };
    this.addTODOList = this.addTODOList.bind(this);
    this.clearData = this.clearData.bind(this);
    this.sonToFather = this.sonToFather.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });

  }
  addTODOList() {
    let data = this.state.panel;
    data[0].Mypanel.list.push(
      {
        value: this.state.value,
        flag: false
      }
    );
    this.setState({
      panel: data
    });
  }
  sonToFather(event) {
    let data = this.setPanel(this.state.panel, event.id, { flag: event.checked }, event.mypanelIndex);
    this.setState({
      panel: data
    });
  }
  clearData(id) {
    let data = this.clearPanel(this.state.panel, id);
    this.setState({
      panel: data
    });

  }
  clearPanel(data, id) {
    data[id].Mypanel.list = [];
    return data;
  }
  setPanel(data, index, keyValueObj, myPanelIndex) {
    // 操作对象Mypanel0还是Mypanel1
    for (let key in keyValueObj) {
      data[myPanelIndex].Mypanel.list[index][key] = keyValueObj[key];
    }
    let Paneled = myPanelIndex ? 0 : 1; // 带新增元素的数组
    data[Paneled].Mypanel.list.push(data[myPanelIndex].Mypanel.list[index]);
    data[myPanelIndex].Mypanel.list.splice(index, 1);
    return data;
  }
  render() {
    const style = {
      width: '400px',
      margin: '30px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      border: '1px solid #e8e8e8',
    };
    const MenuStyle = {
      width: '400px',
      margin: '30px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      border: '1px solid #e8e8e8',
    };
    const TreeNode = Tree.TreeNode;
    return (
      <div className='APP'>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Tab 1" key="1">
            <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
            </Card>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="2">
            <Menu style={MenuStyle}>
              <Menu.Item>菜单项</Menu.Item>
              <Menu.SubMenu title="子菜单">
                <Menu.Item>子菜单项</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="子菜单">
                <Menu.Item>子菜单项1</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="子菜单">
                <Menu.Item>子菜单项2</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="子菜单">
                <Menu.Item>子菜单项3</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 3" key="3">
            <Tree
              showLine
              defaultExpandedKeys={['0-0-0']}
              onSelect={this.onSelect}
            >
              <TreeNode title="parent 1" key="0-0">
                <TreeNode title="parent 1-0" key="0-0-0">
                  <TreeNode title="leaf" key="0-0-0-0" />
                  <TreeNode title="leaf" key="0-0-0-1" />
                  <TreeNode title="leaf" key="0-0-0-2" />
                </TreeNode>
                <TreeNode title="parent 1-1" key="0-0-1">
                  <TreeNode title="leaf" key="0-0-1-0" />
                </TreeNode>
                <TreeNode title="parent 1-2" key="0-0-2">
                  <TreeNode title="leaf" key="0-0-2-0" />
                  <TreeNode title="leaf" key="0-0-2-1" />
                </TreeNode>
              </TreeNode>
            </Tree>
          </Tabs.TabPane>
          <Tabs.TabPane tab="你不知道的Javacript上卷" key="4">
            <JavaScriptTc></JavaScriptTc>
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;
