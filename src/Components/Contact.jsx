import React, { Component } from "react";
import {useParams} from 'react-router-dom';

export default function Post() {
    let { postId } = useParams();
    return (
        <h3>The contact page for the {postId}</h3>
    )
}