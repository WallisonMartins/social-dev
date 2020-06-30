import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Wallison Martins',
            username: 'wallisonmartins',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: "Criando um App do zero utilizando React.Js",
        date: "April 7, 2020",
        description: 'Fala pessoal, qual o framework preferido de vocês?',
        hashtags: "#dotnet, #javascript, #reactjs, developer",
        image: "/images/posts/post9.jpeg"
    },
    {
        id: 2,
        author: {
            id: 1,
            name: 'Wallison Martins',
            username: 'wallisonmartins',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: "Comparativo entre React.js e Vue.js - Peformance",
        date: "April 1, 2020",
        description: 'Quero criar um bootcamp gratuito para passar um pouco da minha expreiência pra vcs! Quem topa?',
        hashtags: "#framework, #javascript, #reactjs, #vue",
        image: "/images/posts/post8.png"
    },

];


function Feed(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post}/>
                ))
            }
        </div>
    )
}

export default Feed;