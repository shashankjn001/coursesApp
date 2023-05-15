import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/BootApi";

const AddCourse = () => {

    useEffect(() => {
        document.title = "Add Course";
    }, []);

    const [course, setCourse] = useState({});

    const handleForm = (e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    };
    //creating function to post data on server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (success) => {
                toast.success("Data Submitted");
                setCourse({ id: "", title: "", description: "" });
            },
            (error) => {
                toast.error("Something Went wrong");
            }
        )
    };

    return (
        <div className="mt-3">
            <Fragment >
                <h1 className="text-center my-3">Add Course</h1>
                <Form onSubmit={handleForm}>
                    <FormGroup>
                        <Label for="userId">
                            Course Id
                        </Label>
                        <Input
                            id="userid"
                            name="userid"
                            placeholder="Enter here"
                            type="text"
                            required
                            onChange={(e) => {
                                setCourse({ ...course, id: e.target.value })
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">
                            Title
                        </Label>
                        <Input
                            id="title"
                            name="title"
                            placeholder="Enter title"
                            type="text"
                            required
                            onChange={(e) => {
                                setCourse({ ...course, title: e.target.value })
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">
                            Description
                        </Label>
                        <Input
                            id="description"
                            name="description"
                            type="textarea"
                            placeholder="Enter Course Description"
                            required
                            style={{ height: 150 }}
                            onChange={(e) => {
                                setCourse({ ...course, description: e.target.value })
                            }}
                        />
                    </FormGroup>
                    <Container className="text-center">
                        <Button type="submit" color="success m-2" outline>Add Course</Button>
                        <Button color="warning m-2" outline type="reset"> clear</Button>
                    </Container>
                </Form>

            </Fragment>
        </div>
    )
};

export default AddCourse;