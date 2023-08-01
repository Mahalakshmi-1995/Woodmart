import logo from './logo.svg';
//import './App.css';
import { Route , Routes} from 'react-router-dom';
import Navbars from './Components/Navbars';
import Login from './Components/Login';
import Orders from './Components/Orders';
import Form from './Components/Form';


function App() {
  return (
    <div className="App">
    <Navbars />
  <Routes>
<Route path='/' element={<Login />} />
<Route path='form' element={<Form />} />
<Route path='order' element={<Orders />} />
  </Routes>
    </div>
  );
}

export default App;
