import React from "react";
import BookCard from "../components/Book/BookCard";
import Navbar from "../components/Navbar";

function LandingPage() {
  const books = [
    {
      link: "https://images2.penguinrandomhouse.com/cover/9780593336823",
      title: "The Love Hypotheses",
      description: "A love story by Ali Hazelwood",
    },
    {
      link: "https://images3.penguinrandomhouse.com/cover/9780593441275",
      title: "Happy Place",
      description: "A Book by Emily Henry",
    },
    {
      link: "https://images3.penguinrandomhouse.com/cover/9780593449981",
      title: "A most Agreeable Murder ",
      description: "A Book by Julia Seales",
    },
    {
      link: "https://images3.penguinrandomhouse.com/cover/9780593422786",
      title: "Tom Clancy Flash Point ",
      description: "A Book by Don Bentley",
    },
    {
      link: "https://images-na.ssl-images-amazon.com/images/I/41ntJIuaFaL._SL500_._AC_SL500_.jpg",
      title: "Twisted Series ",
      description: "A love stories by Ana Huang ",
    },
    {
      link: "https://images2.penguinrandomhouse.com/cover/9781637743669",
      title: "The 32 Principles",
      description: "A Book by Rener Gracie & Paul Volponi",
    },
    {
      link: "https://images3.penguinrandomhouse.com/cover/9780593442746",
      title: "Life in Five Senses ",
      description: "A Book by Gretchen Rubin",
    },
    {
      link: "https://images1.penguinrandomhouse.com/cover/9780593489307",
      title: "Life Worth Living ",
      description: "Miroslav Volf, Ryan McAnnally-Linz & Matthew Croasmun",
    },
    {
      link: "https://images2.penguinrandomhouse.com/cover/9781984806666",
      title: "The Queen's Weapons",
      description: "Anne Bishop",
    },
    {
      link: "https://images1.penguinrandomhouse.com/cover/9780593237465",
      title: "The Light We Carry ",
      description: "Michelle Obama",
    },
    {
      link: "https://images1.penguinrandomhouse.com/cover/9780593685211",
      title: "Tiny Beautiful Things ",
      description: "Cheryl Strayed",
    },
    {
      link: "https://images4.penguinrandomhouse.com/cover/9780143104872",
      title: "Excellent Women ",
      description: "Barbara Pym",
    },
    {
      link: "https://images3.penguinrandomhouse.com/cover/9780525565970",
      title: "The Lioness",
      description: "Chris Bohjalian",
    },
    {
      link: "https://images3.penguinrandomhouse.com/cover/9780525566106",
      title: "The Secrets We Kept ",
      description: "Lara Prescott",
    },
    {
      link: "https://images2.penguinrandomhouse.com/cover/9780593336489",
      title: "The Dead Romance ",
      description: "Ashley Poston",
    },
    {
      link: "https://images2.penguinrandomhouse.com/cover/9780593238127",
      title: "What My Bone Know",
      description: "Shephanie Foo",
    },


  ];
  return (
    <div className="mb-4">
      <Navbar />
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.pottermorepublishing.com/wp-content/uploads/Website_Banner.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Some more Books from Harry Potter Universe</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://s.yimg.com/ny/api/res/1.2/z6EPwZc7xYZKN7l_kWflVQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://media.zenfs.com/en/stylecaster_ecomm_507/cc96432c46fa18c920754b96189a9b53"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Romance Books</h5>
              
              
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://assets.penguinrandomhouse.com/wp-content/uploads/2018/08/27161108/PRH_Thrillers_site_1200x628.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5></h5>
              
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className="text-center my-4">Books</h2>
      <div className="container d-flex flex-wrap grid gap-7" >
        {books.map((book, index) => (
          <div key ={index} className="col-3">
            <BookCard
              title={book.title}
              link={book.link}
              description={book.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
