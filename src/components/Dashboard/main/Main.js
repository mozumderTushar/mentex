import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css'
import hello from '../../assets/images/hello.png'
import Chart from '../Charts/Chart';
import { UserContext } from '../../App/App';

const Main = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [prescription, setPrescription] = useState({})
  const [isExpert, setIsExpert] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [numberExpert, setNumberExpert] = useState('')
  const [numberAdmin, setNumberAdmin] = useState('')
  const [numberPost, setNumberPost] = useState('')
  const [numberPrescription, setNumberPrescription] = useState('')
  const userLoggedInSession = sessionStorage.getItem('email');

  useEffect(() => { /** Experts */
    fetch('https://peaceful-lake-24732.herokuapp.com/allExperts')
      .then(response => response.json())
      .then(data => {
        setNumberExpert(data)
        const isExpert = data.find(expert => expert.email === (loggedInUser.email || userLoggedInSession));
        if (isExpert) {
          setIsExpert(true)
          setIsAdmin(false)
        }
      })
  }, [])

  useEffect(() => { /** Admin */
    fetch('https://peaceful-lake-24732.herokuapp.com/allAdmins')
      .then(response => response.json())
      .then(data => {
        setNumberAdmin(data)
        const isAdmin = data.find(admin => admin.email === (loggedInUser.email || userLoggedInSession));
        if (isAdmin) {
          setIsAdmin(true)
          setIsExpert(false)
        }
      })
  }, [])

  useEffect(() => { /** Prescription */
    fetch('https://peaceful-lake-24732.herokuapp.com/allPrescription')
      .then(response => response.json())
      .then(data => {
        setNumberPrescription(data)
        const prescriptionData = data.filter(SinglePrescription => SinglePrescription.patientEmail === (loggedInUser.email || userLoggedInSession));
        setPrescription(prescriptionData)
        console.log('prescriptionData', prescriptionData);
      })
  }, [])

  useEffect(() => {  /** Post */
    fetch('https://peaceful-lake-24732.herokuapp.com/allPost')
      .then(res => res.json())
      .then(data => setNumberPost(data))
  }, [])

  console.log('prescription', prescription);
  return (
    <main className="main-bg">
      <div className="main__container">
        <div className="main__title">
          <img src={loggedInUser.photoURL || hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello {loggedInUser.name}</h1>
            <p>Welcome To Your Dashboard</p>
          </div>
        </div>
        <div className="main__cards">

          <div className="card-main">
            <i className="fa fa-user fa-2x text-lightblue"></i>
            <div className="card__inner">
              <p className="text-primary-p">Number Of Advices</p>
              <span className="font-bold text-title">{numberPrescription.length}</span>
            </div>
          </div>
          <div className="card-main">
            <i className="fas fa-sort-amount-up fa-2x text-red"></i>
            <div className="card__inner">
              <p className="text-primary-p">Number Of Post</p>
              <span className="font-bold text-title">{numberPost.length}</span>
            </div>
          </div>

          <div className="card-main">
            <i className="fas fa-user-md fa-2x text-yellow"></i>
            <div className="card__inner">
              <p className="text-primary-p">Number Of Expert</p>
              <span className="font-bold text-title"> {numberExpert.length}</span>
            </div>
          </div>

          <div className="card-main">
            <i className="fa fa-users fa-2x text-green"></i>
            <div className="card__inner">
              <p className="text-primary-p">Number Of Admins</p>
              <span className="font-bold text-title">{numberAdmin.length}</span>
            </div>
          </div>

        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <Chart />
          </div>
          <div className="charts__right">

            {
              prescription.length > 0 && <div className="charts__right__cards">
                {
                  (!isExpert && !isAdmin) &&
                  <div>
                    <div className="charts__right__title">
                      <div>
                        <h1>Experts Advices</h1>
                        <p>Mentex-Health Organization</p>
                      </div>
                      <i className="fa fa-use"></i>
                    </div>
                    <div className="sidebar__link">
                      <div className="charts__right__cards">
                        {
                          prescription?.map(single => (
                            <Link to={`prescription/${single._id}`} style={{ textDecoration: 'none' }}>
                              <div className="card1">
                                <h1>Advice</h1>
                                <p>view</p>
                              </div>
                            </Link>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                }
              </div>
            }
            {
              (!isAdmin && isExpert) &&
              <div>
                <div className="charts__right__title">
                  <div>
                    <h1>Reports</h1>
                    <p>Mentex-Health Organization</p>
                  </div>
                  <i className="fa fa-use"></i>
                </div>
                <div className="charts__right__cards">
                  <div className="card1">
                    <h1>Post</h1>
                    <p>{numberPost.length}</p>
                  </div>

                  <div className="card2">
                    <h1>Experts</h1>
                    <p>{numberExpert.length}</p>
                  </div>

                  <div className="card3">
                    <h1>Admins</h1>
                    <p>{numberAdmin.length}</p>
                  </div>

                  <div className="card4">
                    <h1>Advice</h1>
                    <p>{numberPrescription.length}</p>
                  </div>
                </div>
              </div>
            }
            {
              (isAdmin && !isExpert) &&
              <div>
                <div className="charts__right__title">
                  <div>
                    <h1>Reports</h1>
                    <p>Mentex-Health Organization</p>
                  </div>
                  <i className="fa fa-use"></i>
                </div>
                <div className="charts__right__cards">
                  <div className="card1">
                    <h1>Post</h1>
                    <p>{numberPost.length}</p>
                  </div>

                  <div className="card2">
                    <h1>Experts</h1>
                    <p>{numberExpert.length}</p>
                  </div>

                  <div className="card3">
                    <h1>Admins</h1>
                    <p>{numberAdmin.length}</p>
                  </div>

                  <div className="card4">
                    <h1>Advice</h1>
                    <p>{numberPrescription.length}</p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </main >
  );
};

export default Main;

