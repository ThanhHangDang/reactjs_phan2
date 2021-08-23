import React from 'react';
import Navbar from "./_component/Navbar";
import {Route} from "react-router-dom";

function LayoutAdmin(props){
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}

export default function AdminTemplate({Component, ...props}) {
    return (
        <Route 
            {...props} //thay thế cho exact vs path
            render={(propsRoute) => (
                <LayoutAdmin>
                    <Component {...propsRoute}/>
                </LayoutAdmin>
            )}
        />
    )
}
