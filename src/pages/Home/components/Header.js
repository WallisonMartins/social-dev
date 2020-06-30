import React from 'react';
import { Button } from '@material-ui/core';
// import '../style.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginRight: 10,
    },
    bell: {
        marginRight: 10,
    }
})


function Header() {
    const classes = useStyles();
    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <ToolBar className="toolbar">
                <img src="/images/logo.png" alt="logo" className={classes.img}/>
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Novo post
                    </Button>
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Retyr Shard" src="/"/>
                </div>
                {/* <div>
                    <a href="/">Social Dev</a>
                    <input type="text"/>
                </div>
                <div>
                    <Button variant="contained" color="primary">
                        Novo post
                    </Button>
                    <span>img1</span>
                    <span>img2</span>
                </div> */}
            </ToolBar>
        </AppBar>
    )
}

export default Header;