import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import UpdateCourse from './components/UpdateCourse';
import { Col, Container, Row } from 'reactstrap';
import Header from './components/Header';
import Menus from './components/Menus';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  // const onClick = () => {
  //   toast.success("Done ",{
  //     position:"bottom-right",

  //   });
  // };


  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
            <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/add-course' element={<AddCourse/>} exact/>
            <Route path='/view-courses' element={<AllCourses/>} exact/>
           
            
            </Routes>

            </Col>
          </Row>

        </Container>
      </Router>
    </div>
  );
}

export default App;
