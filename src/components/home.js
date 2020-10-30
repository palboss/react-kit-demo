import React, { Component } from "react"
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import './css/home.css'

import Demo3 from "./vtimeline";
import Demo4 from "./vtevent";
import Demo5 from "./adtimeline";
import Demo6 from "./d3c";
import Demo7 from "./ht";
import Demo8 from "./ht2";
import Demo9 from "./BarChart";
import Demo10 from "./PieChart";
import Demo11 from "./RadarChart";
import Demo12 from "./Legend";

const {Content, Sider } = Layout;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comp: Demo9,
        }
        this.handleclick = this.handleclick.bind(this)
    }

  handleclick = (key) => {
        let comp = Demo8
        switch (key) {
            case "3":
                comp = Demo3;
                break
            case "4":
                comp = Demo4;
                break
            case "5":
                comp = Demo5;
                break
            case "6":
                comp = Demo6;
                break
            case "7":
                comp = Demo7;
                break
            case "8":
                comp = Demo8;
                break
            case "9":
                comp = Demo9;
                break
            case "10":
                comp = Demo10;
                break
            case "11":
                comp = Demo11;
                break
            case "12":
                comp = Demo12;
                break
            default:
                comp = Demo8;
        }
        this.setState({comp: comp})
  }

  render() {
        return (
            <Layout>
                <Sider className = "sider_menu" theme="light" >
                  <Menu mode="inline" defaultSelectedKeys={['4']}
                    onClick={({key}) => this.handleclick(key)}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                      Demo 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                      Demo 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                      Demo 3
                    </Menu.Item>
                    <Menu.Item key="4" icon={<BarChartOutlined />}>
                      Demo 4
                    </Menu.Item>
                    <Menu.Item key="5" icon={<CloudOutlined />}>
                      Demo 5
                    </Menu.Item>
                    <Menu.Item key="6" icon={<AppstoreOutlined />}>
                      Demo 6
                    </Menu.Item>
                    <Menu.Item key="7" icon={<TeamOutlined />}>
                      Demo 7
                    </Menu.Item>
                    <Menu.Item key="8" icon={<ShopOutlined />}>
                      Demo 8
                    </Menu.Item>
                    <Menu.Item key="9" icon={<AppstoreOutlined />}>
                      Demo 9
                    </Menu.Item>
                    <Menu.Item key="10" icon={<UploadOutlined />}>
                      Demo 10
                    </Menu.Item>
                    <Menu.Item key="11" icon={<ShopOutlined />}>
                      Demo 11
                    </Menu.Item>
                    <Menu.Item key="12" icon={<CloudOutlined />}>
                      Demo 12
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                  <Content style={{ padding: 24, textAlign: 'center'}}>
                    <this.state.comp />
                  </Content>
                </Layout>
            </Layout>
        );
  }
}

export default Home
