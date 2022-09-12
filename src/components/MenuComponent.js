import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody} from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {
  constructor(props) {
      super(props);

      this.state = {
        selectedDish: null
      }
  }

  onDishSelect = (dish) => {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null)
      return(
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>

      );
    else
      return(
        <div></div>
      );
  }

  renderComment(dish) {
    if (dish == null){
        <div></div> 
    } else if (dish != null){
        if (dish.comment != null){
          this.props.dish.comments.map((comment) => {
            return(
              <Card>
                <CardBody>
                    <CardTitle><h4>Comments</h4></CardTitle>
                    <div key={comment.id} className="col-12">
                        <CardText>{comment.comment}</CardText>
                    </div>
                </CardBody>
              </Card>
            )
          })
        }
    }   
  }

  render() {
      const menu = this.props.dishes.map((dish) => {
          return (
            <div className="col-12 col-md-5 m-1">
              <Card key={dish.id} 
                onClick={() => this.onDishSelect(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                  <CardTitle><h4>{dish.name}</h4></CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          );
      });

      return (
        <div className="container">
          <div className="row">
            {menu}
          </div>
          <div className="row">
              <DishDetail dish={this.state.selectedDish} /> 
          </div>
        </div>
      );
  }
}

export default Menu;