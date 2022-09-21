import { Avatar, List } from 'antd';
import React from 'react';

const data = [
  {
    title: 'Ant Design Title 1',
  },
];

const TaskList: React.FC = () => (
  <List
    itemLayout="horizontal"
    style={{ width: "500px"}}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
);

export default TaskList;