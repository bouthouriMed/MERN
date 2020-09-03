import React, { useEffect } from "react";
import { ListGroup, ListGroupItem, Container, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { connect, useSelector, useDispatch } from "react-redux";
import { getItems, deleteItem, deleteAll } from "../actions/itemActions";

const ShoppingList = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  const removeItem = (id) => {
    dispatch(deleteItem(id));
  };

  const removeAll = () => {
    dispatch(deleteAll());
  };

  const shoppingList = items.length ? (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map((item) => {
            return (
              <CSSTransition timeout={500} classNames="fade" key={item._id}>
                <ListGroupItem>
                  <Button
                    color="danger"
                    size="sm"
                    className="remove-btn"
                    onClick={() => {
                      removeItem(item._id);
                    }}
                  >
                    &times;
                  </Button>
                  {item.name}
                </ListGroupItem>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </ListGroup>
      <Button
        color="danger"
        size="sm"
        className="removeAll-btn"
        onClick={removeAll}
      >
        Delete all
      </Button>
    </Container>
  ) : (
    <ListGroupItem style={{ textAlign: "center" }}>
      No items found
    </ListGroupItem>
  );

  return <React.Fragment>{shoppingList}</React.Fragment>;
};

export default connect(null, { getItems, deleteItem, deleteAll })(ShoppingList);
