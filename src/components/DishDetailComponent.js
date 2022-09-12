import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { DISHES } from '../shared/dishes';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
        };
    }

    renderDish(dish, comments) {
        const dishComment = comments.map((commnt) => {
            return(
                <li key={commnt.id} style={{listStyle: 'none'}}>
                    <p>{commnt.comment}</p>
                    <p>-- {commnt.author}, {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(commnt.date))}</p>
                 </li>    
            )
        });

        if (dish != null) {
            return (
                <div key={dish.id} className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle><h4>{dish.name}</h4></CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5">
                        <h4>Comments</h4>
                        {dishComment}
                    </div>
                </div>  
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const dish = this.props.dish;
        if(dish != null) {
            const dishItem = this.renderDish(dish, dish.comments);
            return (
                <div className="container">
                    {dishItem}
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default DishDetail;