import React, { Component } from 'react';
// import Mouse from './Mouse';
// import MouseWithCat from './MouseWithCat';
import Cat from './Cat';
import withMouse from './withMouse';

const WrapperMouse = withMouse(Cat);

export default class MouseTracker extends Component {

    // getXY = (mouse) => {
    //     return <Cat mouse={mouse} />
    // }

    render() {
        return (
            <>
                {/* <Mouse render={(mouse) => <Cat mouse={mouse} />}/> */}
                {/* <MouseWithCat /> */}
                <WrapperMouse />
            </>
        );
    }
}
