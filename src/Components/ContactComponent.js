import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ContactComponentStyle from '../Styles/ContactComponentStyle';
import { Button } from '@material-ui/core';
import PlaceIcon from '@material-ui/icons/Place';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useForm, ValidationError } from '@formspree/react';
import Snackbar from '@material-ui/core/Snackbar';

import axios from "axios";
require('dotenv/config');

const ContactComponent = (props) => {
  const { classes } = props;
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [open,setOpen]=useState(false)

  const [state, ] = useForm(`${process.env.REACT_APP_NOT_SECRET_CODE}`);

  
  const handleClose =()=>{
    setOpen(false)
  }



  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      setOpen(true);
      setMail('');
      setName('');
      setLastName('');
      setMessage('');
    }
  };
  const handleOnSubmit = event => {
    console.log(`https://formspree.io/f/${process.env.REACT_APP_NOT_SECRET_CODE}`,`${process.env.NODE_ENV}`,"dsdsf")
    event.preventDefault();
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: `https://formspree.io/f/${process.env.REACT_APP_NOT_SECRET_CODE}`,
      data: {
        "First Name": name,
        "Last Name" : lastname,
        "Email":mail,
        'Message': message,
      }
    })
      .then(r => {
        handleServerResponse(true, "Thanks for the Message !!");
      })
      .catch(r => {
        console.log(r,"rr")
        handleServerResponse(false, r.response.data.error);
      });
  };

 
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Contact Me</h2>
      <div className={classes.contentcontainer}>
        <div style={{ flexBasis: '50%' }}>

          {/* <Check/> */}
          <form onSubmit={handleOnSubmit}>
            <div className={classes.row}>
              <div className={classes.col}>
                <div className={classes.formgroup}>
                  <label for='fname'>First Name</label>
                  <input type='text' name="First Name" className={classes.formcontrol} id='fname' value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
              </div>
              <div className={classes.col}>
                <div className={classes.formgroup}>
                  <label for='lname'>Last Name</label>
                  <input type='text' name="Last Name" className={classes.formcontrol} id='lname' value={lastname} onChange={(e) => { setLastName(e.target.value) }} />
                </div>
              </div>
            </div>



            <div className={classes.row}>
              <div className={classes.col1}>
                <div className={classes.formgroup}>
                  <label htmlfor='email'>Email</label>
                  <input type='email' name="Email" className={classes.formcontrol} id='email' value={mail} onChange={(e) => { setMail(e.target.value) }} />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

            </div>

            <div className={classes.row}>
              <div className={classes.col1}>
                <div className={classes.formgroup}>
                  <label id='message' for='message'>Message</label>
                  <textarea col='19' name="Message" type='text' className={classes.formcontroltextarea} id='message' value={message} onChange={(e) => { setMessage(e.target.value) }} />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>

            </div>
            <Button type='submit' disabled={state.submitting} className={classes.message}>Send Message</Button>

          </form>

        </div>
        <div>
          <h2 className={classes.info}>Contact Info</h2>
          <h6 className={classes.location}>

            <PlaceIcon style={{ color: '#96bb7c', marginRight: '10px' }} />
            <span>Bangalore : 560037,Karnataka,India</span></h6>

          <h6 className={classes.location}>

            <a href="mailto:meghpalbhagya@gmail.com" style={{ marginRight: '10px' }}>          <MailIcon style={{ color: '#96bb7c' }} /></a>

            <a href="https://twitter.com/meghpalbhagya" style={{ marginRight: '10px' }} >          <TwitterIcon style={{ color: '#96bb7c' }} /></a>
            <a href="https://github.com/ashonweb" style={{ marginRight: '10px' }}>          <GitHubIcon style={{ color: '#96bb7c' }} /></a>

          </h6>

        </div>

      </div>
      {/* {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )} */}
      {serverState.status && (
        <>
       <Snackbar
       anchorOrigin={{
         vertical: 'top',
         horizontal: 'center',
       }}
       open={open}
       
       autoHideDuration={1000}
       onClose={handleClose}
       message={serverState.status.msg}
       
     />
     </>
      )}
    </div>
  )
}
ContactComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(ContactComponentStyle)(ContactComponent)
