import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deleteuser } from '../redux/Action';
import Edituser from './Edituser';

function Usercard({user}) {
    const dispatch=useDispatch()
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.image} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.email}
        </Card.Text>
        <Button variant="danger"onClick={()=>dispatch(deleteuser(user._id))}>Delete</Button>
      <Edituser user={user}/>
      </Card.Body>
    </Card>
  );
}
export default Usercard