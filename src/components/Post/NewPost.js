import React, { useContext, useState } from 'react';
import Icon from '@material-ui/core/Icon';
import Controls from "../Controls/Controls";
import './NewPost.css';
import NavBar from '../Shared/NavBar/NavBar';
import { useForm, Form } from '../FormMaterialUi/useForm'
import { useHistory } from 'react-router-dom';
import Notification from '../Alert/Notification/Notification';
import ConfirmDialog from '../Alert/ConfirmDialog/ConfirmDialog';
import { UserContext } from '../App/App';

const initialFValues = {
  post: '',
}

const NewPost = () => {
  const [image, setImage] = useState("")
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const userLoggedInSession = sessionStorage.getItem('email');
  let history = useHistory();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',

  })
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  })

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('post' in fieldValues)
      temp.post = fieldValues.post.length > 0 ? "" : "Add your post."
    setErrors({
      ...temp
    })

    if (fieldValues == values)
      return Object.values(temp).every(x => x == "")
  }
  const {
    values,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);

  const uploadImage = (files) => {
    const formData = new FormData()
    formData.append('file', files[0])
    formData.append('upload_preset', 'xobhnc8v')

    return fetch('https://api.cloudinary.com/v1_1/mentex/image/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => setImage(data.url))
  }
  console.log('image', image);
  console.log('loggedInUser',loggedInUser);
  console.log('userLoggedInSession',userLoggedInSession);
  const handleSubmit = e => {
    e.preventDefault()
    values.img = image;
    values.postName = loggedInUser.name || userLoggedInSession;
    values.postEmail = loggedInUser.email || userLoggedInSession;
    values.postDate = (new Date()).toISOString().slice(0,10)
    console.log('values', values);
    if (validate()) {
      fetch('https://peaceful-lake-24732.herokuapp.com/addPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            setNotify({
              isOpen: true,
              message: 'Post Submitted Successfully',
              type: 'success'
            })
            setConfirmDialog({
              isOpen: true,
              title: 'Do You Want To See All Post?',
              subTitle: "You can't undo this operation",
              onConfirm: () => { history.push('/allPost') }
            })
          }
        })
      resetForm();
    }
  }
  return (
    <div className="common__bg__cyan">
      <div className="post__container container">
        <NavBar />
        <div className="post-form mt-4 mb-3">
          <div className="card card-info">
            <div className="card-header bg-info text-white font-italic font-weight-bold"> Share Your Story...
         </div>
            <div className="card-body">
              <Form onSubmit={handleSubmit}>
                <div className="form-group">
                  <Controls.Input
                    label="What's on your mind?"
                    name="post"
                    value={values.post}
                    onChange={handleInputChange}
                    multiline="multiline"
                    row="10"
                    error={errors.post}
                  />
                  <button className="btn btn-brand mt-3 upload"><i className="fas fa-cloud-upload-alt"></i> <input
                    type="file"
                    onChange={(e) => {
                      uploadImage(e.target.files)
                    }}
                  /></button>
                </div>
                <Controls.Button
                  type="submit"
                  text="Post"
                  endIcon={<Icon>send</Icon>} />
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
    </div>
  );
};

export default NewPost;