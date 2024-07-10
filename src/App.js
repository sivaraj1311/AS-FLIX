import {Route, Routes} from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import LibraryPage from './components/pages/LibraryPage';
import SearchPage from './components/pages/SearchPage';
import AboutPage from './components/pages/AboutPage';
import ResetPwd from './components/loginPage/ResetPwd';
import SignUp from './components/loginPage/SignUp';
import Index from './components/loginPage/Index';
import HomePage from './components/pages/HomePage';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import ErrorPage from './components/ErrorPage';
import LogoutPage from './components/LogoutPage';
import Movie1 from './components/PostPages/Movie1';

// import { Link } from 'react-router-dom';
function App() {
 
  const [auth,setAuth]=useState(false);
  // const[auth1,setAuth1]=useState(false);

  // const handleLogout=()=>{
  //   setAuth(false);
  //   setAuth1(false);
    
  // }

  return ( 
<Routes>
<Route path="/home" element={auth? <HomePage /> : <Index setAuth={setAuth}/>}/>
  <Route path="/" element={<Index setAuth={setAuth} />}/>
  <Route path="/signup" element={ <SignUp setAuth={setAuth}/>} />
  <Route path="/resetpwd" element={<ResetPwd />}/>
 
  <Route path="/search" element={<SearchPage/>}/>
  <Route path="/library" element={<LibraryPage />}/>
  <Route path="/about" element={<AboutPage />}/>
  <Route path="/section1" element={<Section1 />}/>
  <Route path="/section1/:id" element={<Movie1 />}/>

  <Route path="/section2" element={<Section2 />}/>
  <Route path="/section2/:id" element={<Movie1 />}/>

  <Route path="/*" element={<ErrorPage />}/>
  <Route path='/logout' element={<LogoutPage />}/>

</Routes>
  );
}

export default App;
