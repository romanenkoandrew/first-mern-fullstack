import { makeStyles } from '@mui/styles';

export default makeStyles({
  paper: {
    marginTop: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '4px',
  },
  root: {
    '& .MuiTextField-root': {
      margin: '2px',
    },
  },
  avatar: {
    margin: '2px',
    backgroundColor: 'red',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '6px',
  },
  submit: {
    margin: '6px 0 4px',
  },
  googleButton: {
    marginBottom: '4px',
  },
});
