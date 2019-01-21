import React, { Component } from 'react';
import './HeaderStyle.scss';
import { Layout, Dropdown, Button, Icon, message, Menu, Avatar, Row, Col } from "antd";


const { Header } = Layout;
const { SubMenu } = Menu;

function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
}
function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
        <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
        <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
    </Menu>
);
class CustomHeader extends Component {

    render() {

        return (
            <Layout>

                <Header className="header">
                    <Row>
                        <Col span={20} offset={2}>
                            <div className="headerContainer">
                                <Menu
                                    className="left-menu"
                                    theme="light"
                                    mode="horizontal"
                                    defaultSelectedKeys={['2']}
                                    style={{ lineHeight: '64px' }}>
                                    <Menu.Item key="1">
                                        <Dropdown overlay={menu}>
                                            <div>
                                                Your Account
                                                <Icon type="caret-down" />
                                            </div>
                                        </Dropdown>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Dropdown overlay={menu}>
                                            <div>
                                                Invest
                                                <Icon type="caret-down" />
                                            </div>
                                        </Dropdown>
                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <Dropdown overlay={menu}>
                                            <div>
                                                Resources
                                                <Icon type="caret-down" />
                                            </div>
                                        </Dropdown>
                                    </Menu.Item>
                                </Menu>
                                <Menu
                                    className="right-menu"
                                    theme="light"
                                    mode="horizontal"
                                    defaultSelectedKeys={['2']}
                                    style={{ lineHeight: '64px' }}>
                                    <Menu.Item key="1">
                                        <Dropdown overlay={menu}>
                                            <div>
                                                <Icon size='large' type="bell" />
                                            </div>
                                        </Dropdown>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Dropdown overlay={menu}>
            <span>
              <Avatar
                  size="large"
                  src={require('../../assets/images/user.png')}
                  alt="avatar"/>
              <span className='name'>
                  Joseph
                 <Icon type="caret-down" />
              </span>
              </span>
                                        </Dropdown>
                                    </Menu.Item>
                                </Menu>
                            </div>
                        </Col>
                    </Row>
                </Header>

            </Layout>
        );
    }
}

export default CustomHeader;
