import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Userlist from './components/Userlist';
import Adduser from './components/Adduser';

function App() {
  return (
    <div className="App">
      <Adduser/>
     <Userlist/>
    </div>
  );
}

export default App;
