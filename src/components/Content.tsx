
import React from 'react';
import './Content.css';
import { FaSearch, FaMicrophone, FaCamera } from 'react-icons/fa';
import {
    FaReact,
    FaCode,
    FaCog,
    FaChrome,
    FaPlus,
} from 'react-icons/fa';


const shortcuts = [
    { label: 'OpenJS', icon: <FaReact /> },
    { label: 'VS', icon: <FaCode /> },
    { label: 'Tachibie', icon: <FaCog /> },
    { label: 'Web Store', icon: <FaChrome /> },
    { label: 'Add shortcut', icon: <FaPlus /> },
];


const Content: React.FC = () => {
    return (
        <div className="main-content">
            <div className="google-logo">Google</div>
            <div className="search-bar">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search Google or type a URL"
                    className="search-input"
                />
                <div className="action-icons">
                    <FaMicrophone />
                    <FaCamera />
                </div>
            </div>

            <div className="shortcut-grid">
                {shortcuts.map((item, i) => (
                    <div className="shortcut" key={i}>
                        <div className="shortcut-icon">{item.icon}</div>
                        <div className="shortcut-label">{item.label}</div>
                    </div>
                ))}
            </div>

            <button className="customize-btn">Customize Chrome</button>
        </div>
    );
};

export default Content;
