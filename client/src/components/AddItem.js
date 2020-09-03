import React, {  useState } from 'react'

import {Button,Modal,ModalHeader,ModalBody,Form,FormGroup,Label,Input} from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions'

function AddItem(props) {
    const [modal,setModal] = useState(false);
    const [name,setName] = useState("");


   const toggle = () => {
        setModal(!modal)
    }

   const onChange = (e) => {
        setName(e.target.value);
   } 


   const onSubmit = (e) => {
    e.preventDefault();
    
    const newItem = {

        name : name
    }

    props.addItem(newItem);
    toggle();     
   }

    return (
        <div>
            <Button
            color="dark"
            style={{marginBottom:'2rem'}}
            onClick={toggle}
            > Add Item 
            </Button>

            <Modal
            isOpen={modal}
            toggle = {toggle}
            >

                <ModalHeader toggle={toggle}>Add to shopping list</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="item">New item : </Label>
                            <Input type ="text" name="name" id="item" placeholder="add an item here" required onChange={onChange}/>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}




export default connect(null,{addItem}) (AddItem);
