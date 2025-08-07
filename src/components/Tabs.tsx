import React, { useState } from 'react';
import './Tabs.css';

const Tabs: React.FC = () => {
    const [active, setActive] = useState(0);
    return (
        <div className="tabs">
            {[0, 1].map((i) => (
                <div
                    key={i}
                    className={`tab ${active === i ? 'active' : ''}`}
                    onClick={() => setActive(i)}
                >
                    New Tab
                </div>
            ))}
            <div className="tab new-tab">+</div>
        </div>
    );
};
export default Tabs;
