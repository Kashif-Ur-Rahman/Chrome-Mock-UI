import './IconsBar.css';
import { ArrowLeft, ArrowRight, RefreshCw, MoreVertical } from 'lucide-react';

const IconsBar = () => {
    return (
        <div className="icons-bar">
            <ArrowLeft size={18} />
            <ArrowRight size={18} />
            <RefreshCw size={18} />
            <MoreVertical size={18} />
        </div>
    );
};

export default IconsBar;
