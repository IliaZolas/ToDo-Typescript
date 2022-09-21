import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';

const TaskInput: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ width: "500px" }}
    >
      <Form.Item
        name="task"
        rules={[{ required: true, message: 'Please input your task!' }]}
      >
        <Input placeholder="Add your task..." />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskInput;