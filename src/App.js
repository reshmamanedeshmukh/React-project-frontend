
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ContactUsComponent from './components/ContactUsComponent';

function App() {
  return (
    <div >
     <Router>
      <HeaderComponent/>
      <div className='container' >
        <Routes>
          <Route path="/" element={<ListEmployeeComponent/>}></Route>
          <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
          <Route path="/add-employee" element={<AddEmployeeComponent/>}></Route>
          <Route path="/edit-employee/:id" element={<AddEmployeeComponent/>}></Route>
          <Route path="/contact-employees" element={<ContactUsComponent/>}></Route>
          </Routes>
      </div>
   
      </Router>
    </div>
  );
}

export default App;
