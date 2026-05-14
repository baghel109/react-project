import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Hello from "./Hello";
import Bye from "./Bye";
import Test from "./Test";
import ArrayWorld from "./ArrayWorld";
import PropsWorld from "./PropsWorld";
import Button from "./Button";
import StateManagement from "./StateManagement";
import SimpleForm from "./SimpleForm";
import MultiInputForm from "./MultiInputForm";
import UncontrolledForm from "./UncontrolledForm";
import Todo from "./Todo";
import First from "./First";
import ApiCallTask from "./ApiCallTask";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import Home from './Home'
import Contact from './Contact'
import AboutUs from './AboutUs'

function App() {
  const fruits = ["apple", "orange", "banana"];

  function Message() {
    alert("click on me");
  }

  function JustMessage() {
    alert("hit me just message");
  }

  return (
    // <>
    <BrowserRouter>
      {/* <Hello /> */}
      {/* <h2>React js developer  hello world.......</h2> */}
      {/* <img src={reactLogo} width="200px"/> */}
      {/* <Bye /> */}
      {/* <Test /> */}
      {/* <ArrayWorld /> */}
      {/* <PropsWorld name="tk" age={20} email="tk@gmail.com" color="red" fruits={fruits}/>
       <PropsWorld name="test" />
       <PropsWorld name="bhism" age={50} email="bhism@gmail.com" color="yellow" fruits={fruits}/>
       <PropsWorld name="bhism" age={50} email="bhism@gmail.com" color="green" fruits={fruits}/>
       <PropsWorld name="bhism" age={50} email="bhism@gmail.com" color="pink" fruits={fruits}/>
       <PropsWorld name="bhism" age={50} email="bhism@gmail.com" color="brown" fruits={fruits}/>
       <PropsWorld name="test" />

       <Button label="click Me" clickMethod={Message}/>
       <Button label="Hit Me" clickMethod={JustMessage}/> */}

      {/* <StateManagement /> */}

      {/* <SimpleForm /> */}

      {/* <MultiInputForm /> */}

      {/* <UncontrolledForm /> */}

      {/* <Todo /> */}
      {/* <First /> */}

      {/* <ApiCallTask /> */}
       <nav style={{display:'flex'}}>
    <Link to="/home/hemant">Home |  </Link>
    <br />

    <Link to="/contact"> Contact | </Link>
    <br />

    <Link to="/about-us"> About Us </Link>
  </nav>
      <Routes>
        
        <Route path="/home/:param" element={<Home />}>
          Home
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact
        </Route>
        <Route path='/about-us' element={<AboutUs />}>
        About Us
        </Route>
      </Routes>
    </BrowserRouter>

    // </>
  );
}

export default App;
