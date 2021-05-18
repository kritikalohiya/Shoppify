import React from 'react'
import Spinner from '../../Images/4V0b.gif';
export default function FullPageLoader() {
    return (
        <div className="fp-container">
            <img src={Spinner} className="fp-spinner" alt="loading"/>
        </div>
    );
}

// export default FullPageLoader;