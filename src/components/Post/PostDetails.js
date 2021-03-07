import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
  const { postID } = useParams()
  const [postDetails, setPostDetails] = useState({})


  useEffect(() => {
    fetch('https://peaceful-lake-24732.herokuapp.com/allPost')
      .then(res => res.json())
      .then(data => {
        const details = data.find(data => data._id === postID)
        setPostDetails(details)
      })
  }, [])
  console.log('postDetails', postDetails);


  return (
    <div>
      <h1>hi{postID}</h1>
      <div class="fb-comments" data-href={`https://mentex-5b2ed.web.app/${postID}`} data-width="300px" data-numposts="5">comment</div>
    </div>
  );
};

export default PostDetails;