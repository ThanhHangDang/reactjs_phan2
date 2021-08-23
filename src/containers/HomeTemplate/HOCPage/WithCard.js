import React from 'react';

//HOC chỉ tồn tại trong function
export default function WithCard(Component) {
    return function(){
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        Header
                    </div>
                    <div className="card-body">
                        <Component />
                    </div>
                    <div className="card-footer text-muted">
                        Footer
                    </div>
                </div>
            </div>
        )
    }
}
