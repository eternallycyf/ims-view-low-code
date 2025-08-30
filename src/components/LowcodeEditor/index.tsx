import { Flex, Splitter, Typography } from 'antd';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import EditArea from './components/EditArea';
import { Header } from './components/Header';
import { Material } from './components/Material';
import { Setting } from './components/Setting';

const LowcodeEditor: React.FC = () => (
  <DndProvider backend={HTML5Backend}>
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
  </DndProvider>
);

export default LowcodeEditor;
