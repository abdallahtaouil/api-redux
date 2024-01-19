import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { adduser } from "../redux/Action";
import axios from "axios";

function Adduser() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState([]);
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch()
const Add=async()=>{
  const formatdata = new FormData();
  formatdata.append("file", image);
  formatdata.append("upload_preset", "ml_default");
  if (image.length === undefined) {
    await axios
      .post("https://api.cloudinary.com/v1_1/doz46nowq/upload", formatdata)
      .then((res) => {
        console.log(res.data.url)
    dispatch(adduser({name,email,password,image:res.data.url,gender}))})
handleClose()

   }}
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add Users
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
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                accept="image/*"
                placeholder="Image URL"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Gender</Form.Label>
              <select
                style={{ marginLeft: 10 }}
                onChange={(e) => setGender(e.target.value)}
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
          <Button variant="primary" onClick={Add}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Adduser;
