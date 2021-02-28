import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './OurExpert.css';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'

const OurExpert = () => {

  const [expertCarousel, setExpertCarousel] = useState([])


  useEffect(() => {
    fetch('https://peaceful-lake-24732.herokuapp.com/allExperts')
      .then(response => response.json())
      .then(data => setExpertCarousel(data))
  }, [])

  const options = {
    rewind: true,
    autoplay: true,
    loop: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };
console.log('expertCarousel',expertCarousel);
  return (
    <div className="common__bg__dark__blue">
      <h1 className="text-center pt-5">OUR EXPERTS</h1>
      <OwlCarousel options={options}  >
        {
          expertCarousel.map(expert => (
            <div className="row  pt-5">
              <div className="col-md-6 offset-md-1  align-self-center">
                <h1>{expert.fullName}</h1>
                <h3>{expert.details}</h3>
                <Link to={`expertDetails/${expert._id}`} className="detailsBtn"><Button className="button" height="40px" variant="contained">Details</Button></Link>
              </div>
              <div className="col-md-4">
                <div>
                  <img
                    className="d-block w-100 carousel-img"
                    src={expert.img}
                    alt="First slide"
                  />
                </div>
              </div>
            </div>
          ))

        }

      </OwlCarousel>
    </div>
  );
};

export default OurExpert;