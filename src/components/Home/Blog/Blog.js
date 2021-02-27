import React from 'react';
import './Blog.css'
import wilson from '../../assets/images/wilson.png';
import BlogPost from './BlogPost';

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
    <section className="blogs p-5 common__bg__dark__blue">
      <div className="container">
        <div className="section-header text-center">
          <h1 className="blog__title">From Our Blog News</h1>
        </div>
        <div className="card-deck my-5">
          {
            blogData.map(blog => <BlogPost blog={blog} key={blog.title} />)
          }
        </div>
      </div>
    </section>
  );
};

export default Blog;