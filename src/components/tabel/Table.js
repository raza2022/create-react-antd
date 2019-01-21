import React, { Component } from 'react';
import {Layout} from "antd";
import './TableStyle.scss';
import { Table, Divider, Tag, Card } from 'antd';
import Functions from '../../common/Functions';

class CustomTable extends Component {
    render() {
        return (
            <Layout>
                <div    >
                    <Card title="Positions" bordered={false}>
                        <Table columns={Functions.getColumnsData()} dataSource={Functions.getData()} />
                    </Card>
                </div>
            </Layout>
        );
    }
}

export default CustomTable;
