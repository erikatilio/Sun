import React, { useState } from "react";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3.5em;
`;

function DigitalClock() {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(updateTime, 1000);
return (<Title>{ctime}</Title>);
};

export default DigitalClock;