import React from 'react';
import './RightActions.css';
import { FaTh } from 'react-icons/fa';

const RightActions: React.FC = () => {
    return (
        <div className="right-actions">
            <a href="#" className="action-link">Gmail</a>
            <a href="#" className="action-link">Images</a>
            <div className="apps-icon">
                <FaTh />
            </div>
        </div>
    );
};

export default RightActions;
