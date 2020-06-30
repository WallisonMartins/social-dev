import React from 'react';
import { Button } from '@material-ui/core';
import '../style.css';

function Header() {
    return (
        <header className="header">
            <div className="toolbar">
                <div>
                    <a href="/">Social Dev</a>
                    <input type="text"/>
                </div>
                <div>
                    <Button variant="contained" color="primary">
                        Novo post
                    </Button>
                    <span>img1</span>
                    <span>img2</span>
                </div>
            </div>
        </header>
    )
}

export default Header;