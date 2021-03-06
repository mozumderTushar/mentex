import React from 'react';
import Icon from '@material-ui/core/Icon';
import Controls from "../Controls/Controls";
import './NewPost.css';
import NavBar from '../Shared/NavBar/NavBar';

const NewPost = () => {

  return (
    <div className="common__bg__cyan">
      <div className="post__container container">
        <NavBar />
        <div className="post-form mt-4 mb-3">
          <div className="card card-info">
            <div className="card-header bg-info text-white font-italic font-weight-bold"> Share Your Story...
         </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <Controls.Input
                    label="What's on your mind?"
                    name="post"
                    multiline="multiline"
                    row="10"
                  />
                  <button className="btn btn-brand mt-3 upload"><i className="fas fa-cloud-upload-alt"></i> <input
                    type="file"
                  /></button>
                </div>
                <Controls.Button
                  type="submit"
                  text="Post"
                  endIcon={<Icon>send</Icon>} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;