import * as React from 'react';

function SvgWindows(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
        >
            <path fill="#7dc800" d="M242.5 40.4L512 0v239.8H242.5V40.4z" />
            <path fill="#ea3700" d="M0 75.5l206.6-30.6v197.6H0v-167z" />
            <path fill="#ffc700" d="M242.5 471.6L512 512V278.5H242.5v193.1z" />
            <path fill="#4342e7" d="M0 436.5l206.6 30.6V278.5H0v158z" />
        </svg>
    );
}

export default SvgWindows;
