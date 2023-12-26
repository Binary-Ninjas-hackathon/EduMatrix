import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import LazyLoadComp from './LazyLoadComp';
import { Route as RouteNames, RoutePrefix } from './roots';

function App() {
  return (
    <Router>
      <Navbar/>
      <main>
      <Routes>
        <Route path='*' element={<LazyLoadComp filePath='./pages/Home/Home'/>} />
        <Route path={RoutePrefix} element={<LazyLoadComp filePath='./pages/Home/Home'/>} />
        <Route path={`${RoutePrefix}/${RouteNames.Home}`} element={<LazyLoadComp filePath='./pages/Home/Home'/>}/>
        <Route path={`${RoutePrefix}/${RouteNames.Internships}`} element={<LazyLoadComp filePath='./pages/Internships/Internships'/>} />
        <Route path={`${RoutePrefix}/${RouteNames.Lresources}`} element={<LazyLoadComp filePath='./pages/Lresources/Lresources.jsx'/>} />
        <Route path={`${RoutePrefix}/${RouteNames.Scholarships}`} element={<LazyLoadComp filePath='./pages/Scholarships/Scholarships.jsx'/>} />
      </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
