import React, { useState } from 'react';

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        [isOn,setIsOn,toggleSwitch]
    );
};

export default ToggleSwitch;
