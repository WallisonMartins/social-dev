import React from 'react';
// import './style.css';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import Feed from './components/Feed';
import NavBar from './components/Navbar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: '100vh',
        padding: 24,
    },
    toolbar: {
        minHeight: 64,
    }
})

function Home() {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Header />
            <div>
                <div className={classes.toolbar}></div>
                <main className={classes.main}>
                    <Container maxWidth="md">
                        <Box display="flex">
                            <NavBar />
                            <Feed />
                        </Box>
                    </Container>
                </main>
            </div>
        </div>
    )
}

export default Home;