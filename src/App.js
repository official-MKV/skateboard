import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Content from './components/Content';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='header'><Header /></div>
        <div className='page'>
           <div className='sidebar'> <SideBar /></div>
          <Routes>
            <Route path='/home' element={<Content />} />
          </Routes>
        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;
