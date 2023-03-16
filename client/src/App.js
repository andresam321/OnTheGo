import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserLandingPage from './components/UserLandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/userLandingPage' element={<UserLandingPage/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
