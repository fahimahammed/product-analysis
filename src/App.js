import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AllReview from './Components/AllReview/AllReview';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route> 
        <Route path='review' element={<AllReview/>}></Route> 
        <Route path='dashboard' element={<Dashboard/>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
