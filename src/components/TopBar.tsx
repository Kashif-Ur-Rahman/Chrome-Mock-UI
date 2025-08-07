import React from 'react';
import './TopBar.css';
import WindowControls from './WindowControls';
import Tabs from './Tabs';
import AddressBar from './AddressBar';
import RightActions from './RightActions';

const TopBar: React.FC = () => (
  <div className="top-bar">
    <WindowControls />
    <Tabs />
    <AddressBar />
    <RightActions />
  </div>
);

export default TopBar;
