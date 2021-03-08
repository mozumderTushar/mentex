import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../App/App';
import NavBar from '../Shared/NavBar/NavBar';
import Button from '@material-ui/core/Button';
import Notification from '../Alert/Notification/Notification';
import ConfirmDialog from '../Alert/ConfirmDialog/ConfirmDialog';
import { useHistory } from 'react-router-dom';

const PostDetails = () => {
  const { postID } = useParams()
  const [postDetails, setPostDetails] = useState({})
  const userLoggedInSession = sessionStorage.getItem('email');
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  let history = useHistory();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  })
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
  })


  useEffect(() => {
    fetch('https://peaceful-lake-24732.herokuapp.com/allPost')
      .then(res => res.json())
      .then(data => {
        const details = data.find(data => data._id === postID)
        setPostDetails(details)
      })
  }, [])

  const handlePostDelete = (id) => { /* delete api*/
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    })
    fetch(`https://peaceful-lake-24732.herokuapp.com/deletePost/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(result => {
        if (result) {
          console.log(result)
        }
      })
    setNotify({
      isOpen: true,
      message: 'Deleted Successfully',
      type: 'error'
    })
    setTimeout(function () { history.push('/allPost') }, 2000);
  }

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
        {
          postDetails.postEmail === (userLoggedInSession || loggedInUser.email) ?
          <button type="button"
          onClick={() =>
            setConfirmDialog({
              isOpen: true,
              title: 'Are you sure to delete this record?',
              subTitle: "You can't undo this operation",
              onConfirm: () => { handlePostDelete(postDetails._id) }
            })
          }
          class="btn btn-danger my-3">Delete</button> :''
        }
        <div class="fb-comments" data-href={`https://mentex-5b2ed.web.app/${postID}`} data-width="300px" data-numposts="5">comment</div>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
    </div>
  );
};

export default PostDetails;