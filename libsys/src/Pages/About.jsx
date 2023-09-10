import React from "react";
import Navbar from "../components/Navbar";
import './About.css'
function About() {
  return (
    <>
      <Navbar />
      <div className="mt-4 container">
        <h2 className="text-center border-bottom w-70 mt-2">About </h2>
      <div className="col text-center w-80 container "> 
          <img
            className="About-img"
            src="https://img.freepik.com/free-vector/about-us-page-concept-illustration_114360-3931.jpg?w=996&t=st=1694334690~exp=1694335290~hmac=5928c525f0f556bd3aec85d7a03765a76623714f4a83f5c8ec6b99215ebc32cb" class="img-fluid1" ></img>
      </div>
      <h2 className="container text-center"> LibSys: Library Management System, Your Library's Digital Hub</h2>
      <h3 className="mt-3 container"> Overview</h3>
      <p className="text-justify container">
        LibSys, short for "Library Management System," is a comprehensive software solution designed to streamline and enhance the management of library resources. It serves as the digital backbone of libraries, offering librarians and users a sophisticated and user-friendly platform to interact with books and related services. It is a sophisticated software solution designed to streamline and enhance the management of library resources. Its primary objectives are to simplify the library's administrative tasks, reduce operational overhead, and provide an improved user experience.
      </p>

      <h3 className="mt-4 container" container> Purpose </h3>

      <p className="text-justify container">
        The primary purpose of LibSys is to simplify and optimize the various facets of library operations. It addresses the complex needs of libraries by automating and digitizing many manual processes, ultimately providing a more efficient, secure, and accessible library experience for both library staff and patrons.
      </p>


      <h3 className="mt-4 container">Conclusion</h3>
        <p className="text-justify container">LibSys, the Library Management System, is an essential tool for modern libraries, enhancing their functionality and accessibility. With its comprehensive features and benefits, it empowers libraries to efficiently manage their resources and provide an exceptional experience to their users.</p>
        </div>
      </>
  );
}

export default About;
