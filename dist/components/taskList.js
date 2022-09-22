"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var data = [
    {
        title: 'Ant Design Title 1',
    },
];
var TaskList = function () { return (<antd_1.List itemLayout="horizontal" style={{ width: "500px" }} dataSource={data} renderItem={function (item) { return (<antd_1.List.Item>
        <antd_1.List.Item.Meta avatar={<antd_1.Avatar src="https://joeschmoe.io/api/v1/random"/>} title={<a href="https://ant.design">{item.title}</a>} description="Ant Design, a design language for background applications, is refined by Ant UED Team"/>
      </antd_1.List.Item>); }}/>); };
exports.default = TaskList;
