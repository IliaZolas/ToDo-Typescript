"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var TaskInput = function () {
    var onFinish = function (values) {
        console.log('Success:', values);
    };
    var onFinishFailed = function (errorInfo) {
        console.log('Failed:', errorInfo);
    };
    return (<antd_1.Form name="basic" labelCol={{ span: 8 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" style={{ width: "500px" }}>
      <antd_1.Form.Item name="task" rules={[{ required: true, message: 'Please input your task!' }]}>
        <antd_1.Input placeholder="Add your task..."/>
      </antd_1.Form.Item>

      <antd_1.Form.Item>
        <antd_1.Button type="primary" htmlType="submit">
          Submit
        </antd_1.Button>
      </antd_1.Form.Item>
    </antd_1.Form>);
};
exports.default = TaskInput;
