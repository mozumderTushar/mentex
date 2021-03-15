import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { UserContext } from '../App/App';
import NavBar from '../Shared/NavBar/NavBar';
import './AllPost.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height:430,
    marginTop:20,
    boxShadow: "0 0 0.5em grey"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


const MyStories = () => {
  const classes = useStyles();
  const [allPost, setAllPost] = useState([])
  const userLoggedInSession = sessionStorage.getItem('email');
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [specifiedPost, setSpecifiedPost] = useState([])
  const [email, setEmail] = useState(false)

  useEffect(() => {
    fetch('https://peaceful-lake-24732.herokuapp.com/allPost')
      .then(res => res.json())
      .then(data => {
        const details = data.filter(data => (data.postEmail) === (loggedInUser.email || userLoggedInSession))
        setAllPost(details)
      })
  }, [])
  return (
<div className="common__bg__cyan post__container">
    <div className="container">
      <NavBar />
      <Grid container spacing={1} className="my-5">
        {
          allPost?.map(singlePost => (
            <Grid item sm={4} xs={12}>
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
               </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={singlePost.postName}
                  subheader={singlePost.postDate}
                />
                <CardMedia
                  className={classes.media}
                  image={singlePost.img}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {singlePost.post.slice(0, 100)}...
                  </Typography>
                </CardContent>
                <CardContent>

                </CardContent>
                <CardActions disableSpacing>
                  <Link to={`postDetails/${singlePost._id}`}>
                  <button className="btn btn-primary">See Details</button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </div>
    </div>
  );
};

export default MyStories;