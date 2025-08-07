import React from 'react';
import './Window.css';
import TopBar from './TopBar';
import Content from './Content';

const Window: React.FC = () => (
  <div className="chrome-window">
    <TopBar />


    <div className="content-area">
      <Content />
    </div>
  </div>
);

export default Window;
