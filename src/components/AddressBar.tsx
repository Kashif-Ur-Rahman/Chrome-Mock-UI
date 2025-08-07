import React from 'react';
import './AddressBar.css';
import {
  FaArrowLeft,
  FaArrowRight,
  FaRedo,
  FaLock,
  FaStar,
  FaEllipsisV,
} from 'react-icons/fa';

const AddressBar: React.FC = () => {
  return (
    <div className="address-bar">
      <div className="nav-icons">
        <FaArrowLeft />
        <FaArrowRight />
        <FaRedo />
      </div>
      <div className="url-bar">
        <FaLock className="lock-icon" />
        <input type="text" placeholder="Search Google or type a URL" />
      </div>
      <div className="action-icons">
        <FaStar />
        <FaEllipsisV />
      </div>
    </div>
  );
};

export default AddressBar;
