import React from 'react';
import './WindowControls.css';

const WindowControls: React.FC = () => (
  <div className="window-controls">
    <div className="control-btn minimize" />
    <div className="control-btn maximize" />
    <div className="control-btn close" />
  </div>
);
export default WindowControls;
