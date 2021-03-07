import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NavBar from '../Shared/NavBar/NavBar';

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
    <div className="common__bg__cyan">
      <NavBar />
    <div className="container mt-5">
      <div className="card">
     <div className="row mt-3 text-center">
       <div className="col-md-12">
       <img src={postDetails.img} width={"30%"} />
       </div>
     </div>
     <div className="row text-center">
       <div className="col-md-12 col-md-offset-2">
       <h3>{postDetails.post}</h3>
     </div>
     </div>
     <div className="row text-center">
       <div className="col-md-12">
       <h3>Posted On:{postDetails.postDate}</h3>
       <p>Posted By:{postDetails.postName}</p>
     </div>
     </div>
     </div>
      <div class="fb-comments" data-href={`https://mentex-5b2ed.web.app/${postID}`} data-width="300px" data-numposts="5">comment</div>
    </div>
    </div>
  );
};

export default PostDetails;