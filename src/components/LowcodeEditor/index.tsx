import { Flex, Splitter, Typography } from 'antd';
import React from 'react';
import EditArea from './components/EditArea';
import { Header } from './components/Header';
import Material from './components/Material';
import Setting from './components/Setting';

const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);

const LowcodeEditor: React.FC = () => (
  <div className="h-[100vh] flex flex-col">
    <div className="">
      <Header />
    </div>
    <Splitter style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <Splitter.Panel defaultSize={300} max={400}>
        <Material />
      </Splitter.Panel>
      <Splitter.Panel>
        <EditArea />
      </Splitter.Panel>
      <Splitter.Panel defaultSize={300} max={400}>
        <Setting />
      </Splitter.Panel>
    </Splitter>
  </div>
);

export default LowcodeEditor;
