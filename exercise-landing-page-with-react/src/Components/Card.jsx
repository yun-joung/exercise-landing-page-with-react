import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';

function card(props) {
    return (
        <Card className ="card text-center">
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title style={{textAlign:'center'}}>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                 </Card.Text >
            </Card.Body>  
            <Card.Body style={{borderTop:'1px solid lightgray'}}>             
                <Button variant="primary" >Go somewhere</Button>
            </Card.Body>  
        </Card>
    )
}

export default card
