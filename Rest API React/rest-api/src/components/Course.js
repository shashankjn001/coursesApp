import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Button,
    Container
} from "reactstrap";
import base_url from "../api/BootApi";


const Course = ({ course, update }) => {
    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                toast.success("Course Deleted");
                update(id);
            },
            (error) => {
                toast.error("Something! went Wrong");
            }
        )
    };


    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle style={{ fontWeight: 'bold' }}>
                    {course.title}
                </CardSubtitle>
                <CardText>
                    {course.description}
                </CardText>
                <Container className="text-center" >
                    <Button color="danger m-2" onClick={() => {
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning m-2" >Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;
