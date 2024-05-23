import React from 'react';

const Display = ({ input, result }) => {
    return (
        <div className="display">
            <div className="input">{input}</div>
            <div className="result">{result}</div>
        </div>
    );
};

export default Display;

/*
import React from 'react';

const Display = ({ input, result }) => {
    return (
        <div className="display">
            <div className="input">{input}</div>
            <div className="result">{result}</div>
        </div>
    );
};

export default Display;
*/
/*
import React from 'react';

const Display = ({ value }) => {
  return <div className="calculator-display">{value}</div>;
};

export default Display;
*/