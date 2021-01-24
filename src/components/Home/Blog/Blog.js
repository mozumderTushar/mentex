import React from 'react';
import './Blog.css'
import wilson from '../../assets/images/wilson.png';

const blogData = [
  {
    title: 'Check at least a doctor in a year for your teeth',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    author: 'Dr. Cudi',
    authorImg: wilson,
    date: '23 April 2019'
  },
  {
    title: 'Two time brush in a day can keep you healthy',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    author: 'Dr. Sinthia',
    authorImg: wilson,
    date: '23 April 2019'
  },
  {
    title: 'The tooth cancer is taking a challenge',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    author: 'Dr. Cudi',
    authorImg: wilson,
    date: '23 April 2019'
  },
]

const Blog = () => {
  return (
    <div>
      <section className="blogs my-5">
        <div className="container">
          <div className="section-header text-center">
            <h5 className="text-primary text-uppercase">our blog</h5>
            <h1>From Our Blog News</h1>
          </div>
          <div className="card-deck mt-5">
            {
              blogData.map(blog => (
                <div className="card shadow-sm">
                  <div className="card-header d-flex  align-items-center">
                    <img className="mx-3" src={blog.authorImg} alt="" width="60" />
                    <div>
                      <h6 className="text-primary">{blog.author}</h6>
                      <p className="m-0">{blog.date}</p>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5>{blog.title}</h5>
                    <p className="card-text text-secondary mt-4">{blog.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;