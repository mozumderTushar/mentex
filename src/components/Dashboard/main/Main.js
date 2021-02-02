import React from 'react';
import './Main.css'
import hello from '../../assets/images/hello.png'
import Chart from '../charts/Chart';

const Main = () => {
    return (
        <main className="main-bg">
        <div className="main__container">
            <div className="main__title">
                <img src={hello} alt="hello" />
                <div className="main__greeting">
                    <h1>Hello MenTex</h1>
                    <p>Welcome to your Professional Dashboard</p>
                </div>
            </div>
            <div className="main__cards">

                <div className="card-main">
                    <i className="fa fa-user fa-2x text-lightblue"></i>
                    <div className="card__inner">
                        <p className="text-primary-p">Number Of Subscribers</p>
                        <span className="font-bold text-title">574</span>
                    </div>
                </div>
                <div className="card-main">
                    <i className="fa fa-calendar-alt fa-2x text-red"></i>
                    <div className="card__inner">
                        <p className="text-primary-p">Times Of Watching</p>
                        <span className="font-bold text-title">2467</span>
                    </div>
                </div>

                <div className="card-main">
                    <i className="fa fa-video fa-2x text-yellow"></i>
                    <div className="card__inner">
                        <p className="text-primary-p">Number Of Videos</p>
                        <span className="font-bold text-title"> 340</span>
                    </div>
                </div>

                <div className="card-main">
                    <i className="fa fa-thumbs-up fa-2x text-green"></i>
                    <div className="card__inner">
                        <p className="text-primary-p">Number Of Likes</p>
                        <span className="font-bold text-title">645</span>
                    </div>
                </div>

            </div>

            <div className="charts">
                <div className="charts__left">
                    <div className="charts__left__title">
                        <div>
                            <h1>Daily Reports</h1>
                            <p>Cupertino, California, USA</p>
                        </div>
                        <i className="fa fa-usd"></i>
                    </div>
                    <Chart />
                </div>
                <div className="charts__right">
                    <div className="charts__right__title">
                        <div>
                            <h1>Stats Reports</h1>
                            <p>Cupertino, California, USA</p>
                        </div>
                        <i className="fa fa-use"></i>
                    </div>
                    <div className="charts__right__cards">
                        <div className="card1">
                            <h1>Income</h1>
                            <p>$75,300</p>
                        </div>

                        <div className="card2">
                            <h1>Sales</h1>
                            <p>$125,300</p>
                        </div>

                        <div className="card3">
                            <h1>Users</h1>
                            <p>3900</p>
                        </div>

                        <div className="card4">
                            <h1>Orders</h1>
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