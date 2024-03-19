import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudent from './students/AddStudent';
import EditStudent from './students/EditStudent';
import ViewStudent from './students/ViewStudent';
import Register from './teacher/Register';
import Login from './teacher/Login';
import Home1 from './pages/Home1';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route exact path='/' element={<Home1/>}/>
          <Route exact path="/home" element ={<Home/>}/>
          <Route exact path="/addstudent" element ={<AddStudent/>}/>
          <Route exact path="/editstudent/:id" element ={<EditStudent/>}/>
          <Route exact path="/viewstudent/:id" element ={<ViewStudent/>}/>
          <Route exact path="/register" element ={<Register/>}/>
          <Route exact path="/login" element ={<Login/>}/>
          
        </Routes>
        
      </Router>

    </div>
  );
}

export default App;
