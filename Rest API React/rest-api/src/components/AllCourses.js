import axios from "axios";
import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/BootApi";
import { toast } from "react-toastify";

const AllCourses = () => {

    useEffect(() => {
        document.title = "All Courses";
    }, []);

    //function to call server

    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response.data);
                setCourses(response.data);

            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong")
            }
        )
    }

    //Calling server function

    useEffect(() => {
        getAllCoursesFromServer();
    }, []);


    const [courses, setCourses] = useState([


    ])

    //deleting course

    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id !== id));
    }

    return (
        <div className="mt-3">
            <h1 className="text-center">All Courses</h1>
            {
                courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses}/>) : "No Courses"
            }
        </div>
    )
};

export default AllCourses;