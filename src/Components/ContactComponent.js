import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ContactComponentStyle from '../Styles/ContactComponentStyle';
import { Button } from '@material-ui/core';
const ContactComponent = (props) => {
  const { classes } = props;
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [feeback, setFeedback] = useState('');
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const HandleMessage =()=>{
    console.log("handle message here")
  }



  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Contact Me</h2>
      <div className={classes.contentcontainer}>
<div style={{flexBasis:'50%'}}>
        <div className={classes.row}>
          <div className={classes.col}>
            <div className={classes.formgroup}>
              <label for='fname'>First Name</label>
              <input type='text' className={classes.formcontrol} id='fname' value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
          </div>
          <div className={classes.col}>
            <div className={classes.formgroup}>
              <label for='fname'>Last Name</label>
              <input type='text' className={classes.formcontrol} id='fname' value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col1}>
            <div className={classes.formgroup}>
              <label for='fname'>Email</label>
              <input type='text' className={classes.formcontrol} id='fname' value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
          </div>
          
        </div>
        <div className={classes.row}>
          <div className={classes.col1}>
            <div className={classes.formgroup}>
              <label for='fname'>Message</label>
              <textarea  col='19' type='text' className={classes.formcontroltextarea} id='fname' value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
          </div>
          
        </div>
        <Button onClick={HandleMessage}className={classes.message}>Send Message</Button>

        </div>
        <div>
        <h2 className={classes.info}>Contact Info</h2>

        </div>
      </div>

    </div>
  )
}
ContactComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(ContactComponentStyle)(ContactComponent)
