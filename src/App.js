
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import Articles from './Components/Body/Articles/Articles';
import MainPage from './Components/Body/MainPage/MainPage';
import Tests from './Components/Body/TestsConteiner/Tests/Tests';
import TestsConteiner from './Components/Body/TestsConteiner/TestsConteiner';
import Header from './Components/Header/Header';

const  App= () => {

  return<div className={style.App}>
   <BrowserRouter>
   <Header/>
    <div className={style.wrapper}>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/Articles" element={<Articles/>}></Route>
        <Route path="/Tests" element={<TestsConteiner/>}></Route>
        <Route path={"test/:id"} element={<Tests/>}></Route>
      </Routes>

    </div>
    </BrowserRouter> 
  </div>
}

export default App;
