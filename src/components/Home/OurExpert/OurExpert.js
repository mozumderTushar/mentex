import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './OurExpert.css'

const OurExpert = () => {
  const [index, setIndex] = useState(0);
  const [ourExpert, setOurExpert] = useState([])
  const [expertCarousel, setExpertCarousel] = useState([])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  useEffect(() => {
    fetch('https://peaceful-lake-24732.herokuapp.com/allExperts')
      .then(response => response.json())
      .then(data => {
        const expert = data.find(data => Number(data.id) === index)
        setOurExpert(expert)
      })

    fetch('https://peaceful-lake-24732.herokuapp.com/allExperts')
      .then(response => response.json())
      .then(data => setExpertCarousel(data))
  }, [index])

  const handleDetails = (id) => {
    console.log(id);
  }

  return (
    <div className="bg">
      <div className="row carousel-info">
        <div className="col-md-8 details">
          <div>
            <h1>{ourExpert.fullName}</h1>
            <h3>{ourExpert.details}</h3>
            <Link to={`expertDetails/${ourExpert._id}`} className="detailsBtn"><Button onClick={()=> handleDetails(ourExpert._id)} className="button" height="40px" variant="contained">Details</Button></Link>
          </div>
        </div>
        <div className="col-md-4">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {
              expertCarousel.map(expert => (
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src={expert.img}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{expert.fullName}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            }
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurExpert;