import React from 'react';
import './style.css';

function Home() {
    return (
        <div>
            <header className="header">
                <div className="toolbar">
                    <div>
                        <a href="/">Social Dev</a>
                        <input type="text"/>
                    </div>
                    <div>
                        <button></button>
                        <span>img1</span>
                        <span>img2</span>
                    </div>
                </div>
            </header>

            <div className="toolbar"></div>
            <main className="main">
                <div className="navbar">
                    navbar
                </div>
                <div className="feed">
                    feed
                </div>
            </main>
        </div>
    )
}

export default Home;