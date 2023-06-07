import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { BrowserRoutes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      
      </Routes>



      <Footer/>
    </div>
  );
}

export default App;
