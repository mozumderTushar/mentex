import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol';

const Footer = () => {
  const noNamed = [
    { name: "Mentex Health Organization", link: "/about" },
    { name: "Support", link: "/static" },
    { name: "Cookies Policy" ,link: "/cookies" }
  ]
  const ourAddress = [
    { name: "Zindabazar,Sylhet - 3100", link: "//google.com/map" },
    { name: "Bangladesh", link: "//google.com/map" },

  ]
  const oralHealth = [
    { name: "Emergency Mental Care", link: "https://www.nhs.uk/service-search/mental-health/find-an-urgent-mental-health-helpline" },
    { name: "Articles", link: "https://www.medicalnewstoday.com/articles/154543" },
    { name: "Researches", link: "/static" }
   
  ]
  const services = [
    { name: "Experts Support", link: "/static" },
    { name: "Get Advice From Experts", link: "/static" },
    { name: "Interact with Other Users", link: "/static" },
    { name: "Real Time Chat with Organization", link: "/static" },
    { name: "Feedback", link: "/static" }
  ]
  return (
    <footer className="footer__area clear-both">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol key={1} menuTitle={""} menuItems={noNamed} />
          <FooterCol key={2} menuTitle="Services" menuItems={services} />
          <FooterCol key={3} menuTitle="Mental Health" menuItems={oralHealth} />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social__media list-inline">
              <li className="list-inline-item"><a href="https://www.facebook.com/Mentex-111697810970649" target="_blank"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
              <li className="list-inline-item"><a href="https://www.gmail.com" target="_blank"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
              <li className="list-inline-item"><a href="/instagram.com" target="_blank"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
            </ul>
            <div className="mt-3">
              <h6>Call now</h6>
              <button className="btn btn-primary">+8801757110249</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
          <p>&copy;Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;