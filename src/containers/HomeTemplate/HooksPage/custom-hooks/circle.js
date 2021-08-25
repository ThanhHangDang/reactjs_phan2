import React from 'react';
import "./style.css";
import { useMagicColor } from '../useMagicColor';

export default function Circle() {

    const state = useMagicColor();

    return (
        <div className="circle" style={{backgroundColor: state}}>
            Circle
        </div>
    )
}
