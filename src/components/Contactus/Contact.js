import React from 'react';
import './Contact.css'
import getImg from '../assets/images/5.png';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';
import emailjs from "emailjs-com";

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_29c3zcc', e.target, 'user_fWIrDadiL8TMGqs6d0rV5')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
        alert('Your Message Successfully Send')
        e.target.reset()
      }
    

    return (
        <div className="common__bg__cyan">
            <NavBar />
          <div className="container">
          <div className="row mt-3 mb-5">
          <div className="col-md-6 align-self-center">
            <h3 className="about-title">Get In Touch</h3>
            <p className="lead">If you want to share your thoughts or give any kinds of suggestions in general,you can feel free to contact with us.</p>
            <p className="lead">If you have any types of Queries.you are welcome to send messages to us.we will reply you shortly.</p>
            <p className="lead feel">Feel Free to contact with us...</p>
          </div>
          <div className="col-md-6 text-center">
            <img className="img-fluid rounded-circle ml-3 getImg" src={getImg} alt="" />
          </div>
        </div>
        </div>

          <div className="common__bg__dark__blue">
          <h1 className="text-center pt-5 contact__us__header contact__title">CONTACT US</h1>
          <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input type="text" className="form-control" placeholder="Name" name="name" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="email" className="form-control" placeholder="Email Address" name="email" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="text" className="form-control" placeholder="Subject" name="subject" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto mb-5">
              <input type="submit" className="btn btn-info mb-2" value="Send Message"></input>
            </div>
          </div>
        </form>
      </div>

    <Footer />
    </div>
    );
};

export default Contact;
