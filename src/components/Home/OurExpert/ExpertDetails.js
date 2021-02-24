import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ExpertDetails = () => {
  const { DetailsID } = useParams()
  const [expertDetails, setExpertDetails] = useState({})

  useEffect(() => {
    fetch('https://peaceful-lake-24732.herokuapp.com/allExperts')
      .then(response => response.json())
      .then(data => {
        const expert = data.find(data => data._id === DetailsID)
        setExpertDetails(expert)
      })
  }, [DetailsID])

  console.log('expertDetails', expertDetails);
  return (
    <div>
      <h1>Expert {DetailsID}</h1>
    </div>
  );
};

export default ExpertDetails;