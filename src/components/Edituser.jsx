import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { edituser } from "../redux/Action";

function Edituser({user}) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(user.image);
  const [password, setPassword] = useState(user.password);
  const [gender, setGender] = useState(user.gender);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch()
const Edit=()=>{dispatch(edituser({name,email,password,image,gender},user._id))
handleClose()

}
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Edit User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="name@example.com"
                defaultValue={user.email}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                defaultValue={user.name}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                onChange={(e) => setImage(e.target.value)}
                type="file"
                placeholder="Image URL"
                defaultValue={user.image}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                defaultValue={user.password}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Gender</Form.Label>
              <select
                style={{ marginLeft: 10 }}
                onChange={(e) => setGender(e.target.value)}
                defaultValue={user.gender}
              >
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
              </select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Edit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edituser;
