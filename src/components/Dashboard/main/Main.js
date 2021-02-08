import React, { useContext } from 'react';
import './Main.css'
import hello from '../../assets/images/hello.png'
import Chart from '../Charts/Chart';
import { UserContext } from '../../App/App';

const Main = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log('loggedInUser',loggedInUser);
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
                        <p className="text-primary-p">Number Of Appointment</p>
                        <span className="font-bold text-title">574</span>
                    </div>
                </div>
                <div className="card-main">
                    <i className="fas fa-sort-amount-up fa-2x text-red"></i>
                    <div className="card__inner">
                        <p className="text-primary-p">Number Of Post</p>
                        <span className="font-bold text-title">2467</span>
                    </div>
                </div>

                <div className="card-main">
                    <i className="fas fa-user-md fa-2x text-yellow"></i>
                    <div className="card__inner">
                        <p className="text-primary-p">Number Of Professional</p>
                        <span className="font-bold text-title"> 340</span>
                    </div>
                </div>

                <div className="card-main">
                    <i className="fa fa-users fa-2x text-green"></i>
                    <div className="card__inner">
                        <p className="text-primary-p">Number Of Admins</p>
                        <span className="font-bold text-title">5</span>
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
                    <div className="charts__right__title">
                        <div>
                            <h1> Reports</h1>
                            <p>Mentex-Health Organization</p>
                        </div>
                        <i className="fa fa-use"></i>
                    </div>
                    <div className="charts__right__cards">
                        <div className="card1">
                            <h1>Post</h1>
                            <p>$75,300</p>
                        </div>

                        <div className="card2">
                            <h1>Experts</h1>
                            <p>$125,300</p>
                        </div>

                        <div className="card3">
                            <h1>Users</h1>
                            <p>3900</p>
                        </div>

                        <div className="card4">
                            <h1>Booked</h1>
                            <p>1881</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </main>
    );
};

export default Main;