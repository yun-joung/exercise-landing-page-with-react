import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from 'react-bootstrap/jumbotron';
import Button from 'react-bootstrap/button';

function jumbotron() {
    return (
        <Jumbotron>
            <h1>A Warm Welcome!</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto ea nostrum in reiciendis optio numquam a adipisci saepe fugit sequi qui officia, mollitia voluptatem assumenda accusantium vel nisi amet.
            </p>
            <p>
                <Button variant="primary">Call to action!</Button>
            </p>
        </Jumbotron>
    )
}
export default jumbotron
