import React, { useContext, useState } from 'react';
import firebase from 'firebase/app'
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import LoginBg from '../../assets/images/loginBg.png';
import { Card, Form } from 'react-bootstrap';
import { UserContext } from '../../App/App';
import './Login.css'
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';


const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email, photoURL } = result.user;
      const signedInUser = { name: displayName, email, photoURL }
      setLoggedInUser(signedInUser);
      storeAuthToken(signedInUser);
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = (signedInUser) => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        sessionStorage.setItem('email', signedInUser.email);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  const storeAuthTokenEmailLogin = (newUserInfo) => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        sessionStorage.setItem('email', newUserInfo.email);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length >= 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value)
      const validPass = isPasswordValid && passwordHasNumber;
      isFieldValid = isPasswordValid && passwordHasNumber
    }

    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo)
    }
  }

  //form submit
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo)
          updateProfile(user.name)
          setLoggedInUser(newUserInfo)
          history.replace(from);
        })
        .catch(error => {
          const newUserInfo = { ...user }
          newUserInfo.error = error.message;
          newUserInfo.success = false
          setUser(newUserInfo)
        });
    }

    //new user
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo)
          setLoggedInUser(newUserInfo)
          storeAuthTokenEmailLogin(newUserInfo);
          history.replace(from);
        })
        .catch(error => {
          const newUserInfo = { ...user }
          newUserInfo.error = error.message;
          newUserInfo.success = false
          setUser(newUserInfo)
        });
    }
    e.preventDefault();
  }

  //profile name update
  const updateProfile = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    }).then(function () {
      console.log("user name updated successfully");
    }).catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className="common__bg__cyan">
      <NavBar />
      <div className="login-page container">
        <div className="row align-items-center">
          <div className="col-md-6 shadow p-5">
            {/* log in and register form  */}
            <Card className="card__style">
              <Card.Body>
                {newUser ? <h3>Create an account</h3> : <h3>Login</h3>}

                <Form onSubmit={handleSubmit}>
                  {newUser && <Form.Group controlId="formBasicText">
                    <Form.Control onBlur={handleBlur} type="text" name="name" placeholder="First Name" required />
                  </Form.Group>}
                  {newUser && <Form.Group controlId="formBasicText">
                    <Form.Control onBlur={handleBlur} type="text" name="name" placeholder="Last Name" required />
                  </Form.Group>}


                  <Form.Group controlId="formBasicEmail">
                    <Form.Control onBlur={handleBlur} type="text" name="email" placeholder="Enter email" required />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control onBlur={handleBlur} type="password" name="password" placeholder="Password" required />
                  </Form.Group>
                  
                  <input className="BtnDesign" type="submit" value={newUser ? 'Create an account' : 'Login'} />

                  {newUser ? <p>Already have an account?<span className="text-brand" onClick={() => setNewUser(!newUser)}>Login</span></p> :
                    <p className="text-brand">Don't have account?<span className="text-brand" onClick={() => setNewUser(!newUser)}>Create a account</span></p>}
                </Form>
              </Card.Body>
            </Card>
            <button className="google-button" onClick={handleGoogleSignIn}>Continue with Google</button>
          </div>
          <div className="col-md-6 d-none d-md-block align-self-end">
            <img className="img-fluid" src={LoginBg} alt="" />
          </div>
        </div>
      </div>
      <div className={`${window.location.pathname === '/login' ? 'common__bg__dark__blue' : 'common__bg__cyan '}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Login;