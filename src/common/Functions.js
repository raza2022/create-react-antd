import React from "react";
import {Divider, Tag} from "antd";

export class Functions {
    getColumnsData(){
        return [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="javascript:">{text}</a>,
            },
            {
                title: '% of portfolio',
                dataIndex: 'pOfPortfolio',
                key: 'pOfPortfolio',
            },
            {
                title: 'Est. value of shares',
                dataIndex: 'shares',
                key: 'shares',
            },
            {
                title: 'Position Total',
                key: 'tags',
                dataIndex: 'tags'
            }
        ];
    };

    getData(){
        return [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: 'developer',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: 'loser',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: 'teacher',
        }];
    }
}
export default new Functions();
