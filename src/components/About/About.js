import React from 'react';
import './About.css'
import whatImg from '../assets/images/2-1.png';
import impactImg from '../assets/images/3.png';
import whyImg from '../assets/images/why.png';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';

const About = () => {
  return (
    <div className="common__bg__cyan">
      <NavBar />
      <div className="container about-us">
        <div className="row">
          <div className="col-12 about-us">
            <div>
              <h1 className="title text-center">Why This Platform?</h1>
              <p class="lead text-center why-slogan">You don't have to struggle in silence!Think Less,Sleep Better.Be Happier...</p>
            </div>
          </div>
          <div className="col-md-6 mt-lg-5 pt-lg-3">
            <div id="accordion" class="mt-3 text-center" role="tablist">
              <div class="card">
                <div class="card-header" role="tab">
                  <h5 class="mb-0">
                    <div data-toggle="collapse" href="#collapse1">
                      <i class="fa fa-arrow-circle-down"></i> Get Inspired
                  </div>
                  </h5>
                </div>
                <div id="collapse1" class="collapse show" data-parent="#accordion">
                  <div class="card-body">
                    <p class="lead">"Just because no one else can heal or do your inner work for you doesn't mean you can,should,or need to do it alone."</p>
                  </div>
                </div>
              </div>
              <div class="card" role="tablist">
                <div class="card-header" role="tab">
                  <h5 class="mb-0">
                    <div data-toggle="collapse" href="#collapse2">
                      <i class="fa fa-arrow-circle-down"></i> Gain The Knowledge
              </div>
                  </h5>
                </div>
                <div id="collapse2" class="collapse" data-parent="#accordion">
                  <div class="card-body">
                    <p class="lead">"Don't let your happiness depend on something you may lose".</p>
                  </div>
                </div>
              </div>
              <div class="card" role="tablist">
                <div class="card-header" role="tab">
                  <h5 class="mb-0">
                    <div data-toggle="collapse" href="#collapse3">
                      <i class="fa fa-arrow-circle-down"></i> Open Your Mind
              </div>
                  </h5>
                </div>
                <div id="collapse3" class="collapse" data-parent="#accordion">
                  <div class="card-body">
                    <p class="lead">"The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it".</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img className="img-fluid rounded-circle ml-3" src={whyImg} alt="" />
          </div>
        </div>


        <div className="row">
          <div className="col-md-6 align-self-center mt-3">
            <h3 className="about-title">What We Do</h3>
            <p className="lead mt-2">Mental health is one of the most underrated topics that we all discuss. It is as important as physical health. The people suffering from it are not confident enough to speak about it and society still considers it as a stigma...</p>
            <p className="lead">We give them a platform where they can match themselves.They can express their feelings and stories with their friends and they can also get suggestions from experts...</p>
          </div>
          <div className="col-md-6 text-center">
            <img className="img-fluid rounded-circle mt-5 ml-3" style={{height:"90%"}} src={whatImg} alt="" />
          </div>
        </div>

        <div className="row ">
          <div className="col-md-6 text-center">
            <img className="img-fluid rounded-circle mt-5 pt-5" src={impactImg} alt="" />
          </div>
          <div className="col-md-6 align-self-center mt-3">
            <h3 className="about-title">Our Impact</h3>
            <p className="lead mt-2"><b>Unstoppable in Uncertain Times:</b>
            Unstoppable means we never give up. It means we work to make sure everyone can get mental health support, whoever they are, whatever their race, gender, sexuality, disability or beliefs.
            It means we design our services together with the people who use them. It means we stand up to the injustices that make life harder for people with mental health problems. It means we build on the incredible power of our local Mind network and our shops right across Bangladesh.</p>
            <p className="lead">And when a global pandemic suddenly strikes and creates a mental health emergency it means we act fast and do all we can to make sure everyone with a mental health problem gets support and respect.
            There is much to celebrate and build on from our 2019/20 review, but the coronavirus and the urgent need to tackle racial disparities within mental health will also now define our work going forward.
            Our world has changed, but our commitment to do everything we can to support better mental health has never been stronger.
            This is what unstoppable looks like.</p>
          </div>
        </div>
      </div>
      <div className={`${window.location.pathname === '/about' ? 'common__bg__dark__blue' : 'common__bg__cyan '}`}>
        <Footer />
      </div>
    </div>
  );
};

export default About;