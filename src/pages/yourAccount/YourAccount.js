import React, { Component } from 'react';
import {Col, Layout, Row} from "antd";
import './YourAccountStyle.scss';
import CustomTable from "../../components/tabel/Table";

class YourAccount extends Component {
    render() {
        return (
            <Layout>
                <Row>
                    <Col span={20} offset={2}>
                        <h1 className="pageHeading"> Portfolio </h1>
                        <Row>
                            <Col span={18}>
                                <CustomTable/>
                            </Col>
                            <Col span={6}>col-12</Col>
                        </Row>
                    </Col>
                </Row>

            </Layout>
        );
    }
}

export default YourAccount;
