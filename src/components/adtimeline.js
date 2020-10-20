import React from "react"
import { Timeline} from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

function Demo5() {
  return (
    <>
      <h3>Demo5</h3>
      <Timeline mode="left" style={{ marginLeft: -1000}}>
        <Timeline.Item label="09-01">Create a services</Timeline.Item>
        <Timeline.Item label="2020" dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
            react-timeline</Timeline.Item>
        <Timeline.Item label="09-02">Solve initial network problems</Timeline.Item>
        <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
            Technical testing</Timeline.Item>
        <Timeline.Item label={<p>09-03<br/>2020</p>}>Network problems being solved</Timeline.Item>
      </Timeline>
    </>
  );
}

export default Demo5
