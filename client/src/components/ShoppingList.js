import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Container, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import {connect} from 'react-redux'
import {getItems, deleteItem} from '../actions/itemActions'

class ShoppingList extends Component {

        componentDidMount() {
            this.props.getItems();
            console.log(this.props)
        }

        addItem = () => {
        const name = prompt('Add an item');
        const newItem = {id:Math.random(),name:name};
        console.log(newItem)
        if(name) {
            this.setState(state => ({
                items : [...state.items,newItem]
             }))
          }
        }

        
        removeItem = (id) => {
         this.props.deleteItem(id)
        }
    


    render() {
        const {items} = this.props;
        return (
            
                <Container>
                    <ListGroup>
                        <TransitionGroup className="shopping-list">
                            {items.map(item => {
                                return (
                                    <CSSTransition timeout={500} classNames="fade" key={item.id}>
                                        <ListGroupItem >
                                            <Button color="danger" size="sm" className="remove-btn" onClick={() => {this.removeItem(item.id)} } >&times;</Button>
                                            {item.name} 
                                        </ListGroupItem>
                                    </CSSTransition>        
                                )
                            })}
                        </TransitionGroup>
                    </ListGroup>
                 </Container>
            
        )
    }
  
}



const mapStateToProps = (state) => ({
    items : state.items
})

export default connect(mapStateToProps, {getItems,deleteItem}) (ShoppingList);
