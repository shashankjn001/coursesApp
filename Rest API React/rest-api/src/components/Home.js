import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";

const Home =()=>{

    useEffect(()=>{
        document.title="Home";
    },[]);
    return(
        <div className="text-center mt-3">
            <h1 className="display-3">CRUD Courses App</h1>
            <p>You can now add courses, delete courses and update courses with the 
                help of this Application.
            </p>
            <Container>
                <Button color='primary' outline>Start Using my App</Button>
            </Container>
        
        </div>
    );
};

export default Home;