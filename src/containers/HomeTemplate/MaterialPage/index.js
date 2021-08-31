import React from 'react';
import Button from '@material-ui/core/Button';
import useStyle from './../../../style';

export default function MaterialPage() {
    const classes = useStyle();

    return (
        <div className={classes.content}>
            <h3 className={classes.title}>Material Page</h3>
            <span>Hàng</span>
            <Button variant="contained" color="primary">
                Primary
            </Button>
        </div>
    )
}
