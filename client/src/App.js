import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserLandingPage from './components/UserLandingPage';
import ViewRestaurant from './components/ViewRestaurant';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/userLandingPage' element={<UserLandingPage/>}/>
          <Route path='/viewRestaurant/:id' element={<ViewRestaurant/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
