import React, { Fragment } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const UpdateCourse = () => {
    return (
        <Fragment>
            <h1 className="text-center my-3">Update Course</h1>
            <Form>
                <FormGroup>
                    <Label for="userId">
                        Course Id
                    </Label>
                    <Input
                        id="userid"
                        name="userid"
                        placeholder="Enter here"
                        type="text"
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
                        style={{ height: 150 }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button color="success m-2" outline>Update Course</Button>
                    <Button color="warning m-2" outline> clear</Button>
                </Container>
            </Form>

        </Fragment>
    )
}

export default UpdateCourse;