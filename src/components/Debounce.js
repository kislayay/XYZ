import React from 'react';

const Debounce = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick}>call</button>
        </div>
    )
}

export default Debounce;