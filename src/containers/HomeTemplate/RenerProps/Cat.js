import React, { Component } from 'react';

export default class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
          <img src="/logo192.png" alt="" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}
