import {Route,Routes} from 'react-router-dom' 
import Home from './Home';
import AddEmp from './AddEmp';
import './App.css';
import Header from './Header';
import EditEmp from './EditEmp';
import Brand from './Brand';

function App() {
  return (
    <div>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/addEmp" element={<AddEmp/>}></Route>
    <Route path="/editEmp/:id" element={<EditEmp/>}></Route>
    <Route path="/brand" element={<Brand/>}></Route>
    </Routes>
    </div>
  
   
  );
}

export default App;
