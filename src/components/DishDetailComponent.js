import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { DISHES } from '../shared/dishes';

    function RenderDish( {dish} ) {
        if (dish != null) {
            return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle><h4>{dish.name}</h4></CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    function RenderComment( {comments} ){
        const dishComment = comments.map((commnt) => {
            return(
                <li key={commnt.id} style={{listStyle: 'none'}}>
                    <p>{commnt.comment}</p>
                    <p>-- {commnt.author}, {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(commnt.date))}</p>
                 </li>    
            )
        });

        return (
            <div className="col-12 col-md-5">
                <h4>Comments</h4>
                {dishComment}
            </div>
        )
    }

    const DishDetail = (props) => {
        const dish = props.dish;
        if(dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish={dish} />
                        <RenderComment comments={dish.comments} />
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }


export default DishDetail;