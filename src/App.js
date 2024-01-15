import React from "react";
import Nav from "./components/navbar/Nav";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// const Home = React.lazy(()=>import("./pages/Home"));
// const Contact = React.lazy(()=>import("./pages/Contact"));
// const About = React.lazy(()=>import("./pages/About"));
// const Gallery = React.lazy(()=>import("./pages/Gallery"));


function App() {
  return (
      <>
      <BrowserRouter>
        <Nav/>
        <div>
          <Routes>
          {/* <Route path='/' exact element={<Suspense fallback={"loading...."}><Home/></Suspense>} /> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          {/* <Route path='/About' element={<Suspense fallback={"loading...."}><About/></Suspense>}/>
          <Route path='/Contact' element={<Suspense fallback={"loading...."}><Contact/></Suspense>} /> 
          <Route path='/Gallery'element={<Suspense fallback={"loading...."}><Gallery/></Suspense>} /> */}
          </Routes>
        </div>
      </BrowserRouter>
      </>
    );
}

export default App;
