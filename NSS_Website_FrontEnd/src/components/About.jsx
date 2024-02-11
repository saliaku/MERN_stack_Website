import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header"; // Import header component from homepage
import Footer from "./Footer"; // Import footer component from homepage

const About = (props) => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  });

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8082/api/books", book)
      .then((res) => {
        setBook({
          title: "",
          isbn: "",
          author: "",
          description: "",
          published_date: "",
          publisher: "",
        });
        // Push to /
        navigate("/");
      })
      .catch((err) => {
        console.log("Error in About!");
      });
  };

  return (
    <>
      <Header /> {/* Include header component */}
      <div className="About">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show BooK List
              </Link>
            </div>
            <div className="col-md-10 m-auto">
              <h1 className="display-4 text-center">Add Book</h1>
              <p className="lead text-center">Create new book</p>
              <form noValidate onSubmit={onSubmit}>
                {/* Form for adding a new book */}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Include footer component */}
    </>
  );
};

export default About;
