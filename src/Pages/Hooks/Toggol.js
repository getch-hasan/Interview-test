import React, { useState } from 'react';

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer ${isOn ? 'ms-4 ' : ''} `}
                checked={isOn}
                onChange={toggleSwitch}
            />
            <label
                htmlFor="toggle"
                className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${isOn ? 'bg-green-500 ' : ''
                    }`}
            ></label>
        </div>
    );
};

export default ToggleSwitch;
