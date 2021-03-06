import React, { useCallback } from 'react';
import moment from 'moment';
import useStyles from './styles';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import {
  CardActions,
  Card,
  CardMedia,
  Typography,
  Button,
  CardContent,
} from '@mui/material';
import { deletePost, likePost } from '../../../actions/posts';
import { useDispatch } from 'react-redux';

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const isPostCreatedByCurrentUser = useCallback(
    () =>
      user?.result?.googleId === post?.creator ||
      user?.result?._id === post?.creator,
    [user, post]
  );
  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize='small' />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlinedIcon fontSize='small' />
          &nbsp;{post.likes.length} {post.likes === 1 ? 'Like' : 'Likes'}
        </>
      );
    }
    return (
      <>
        <ThumbUpAltOutlinedIcon fontSize='small' />
        &nbsp;Like
      </>
    );
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.name}</Typography>
        <Typography variant='body2'>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {isPostCreatedByCurrentUser() && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: 'white' }}
            size='small'
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize='default' />
          </Button>
        </div>
      )}
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant='h5' gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          gutterBottom
        >
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size='small'
          color='primary'
          onClick={() => dispatch(likePost(post._id))}
          disabled={!user?.result?.name}
        >
          <Likes />
        </Button>
        {isPostCreatedByCurrentUser() && (
          <Button
            size='small'
            color='primary'
            onClick={() => dispatch(deletePost(post._id))}
            disabled={!user?.result?.name}
          >
            <DeleteIcon fontSize='small' />
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
