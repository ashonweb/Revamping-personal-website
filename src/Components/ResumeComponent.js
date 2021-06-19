import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ResumeComponentStyle from '../Styles/ResumeComponentStyle';
import dp from '../Assests/dp.jpg';
import PlaceIcon from '@material-ui/icons/Place';
import BusinessIcon from '@material-ui/icons/Business';
import EventIcon from '@material-ui/icons/Event';
const ResumeComponent = (props) => {
  const { classes } = props;
  const [exp, ] = useState([
    {
      position: 'Analyst',
      type: 'FULL TIME',
      company: 'Dell Technologies',
      place: 'Bangalore',
      time: 'February 2020 - August 2021'
    },
    {
      position: 'System Engineer',
      type: 'FULL TIME',
      company: 'TCS Pvt Ltd',
      place: 'Bangalore',
      time: 'November 2015 - January 2020'
    },

  ])
  const [edu, ] = useState([
    {
      degree: 'Bachelor of Engineering (Computer Science)',
      branch: 'FULL TIME',
      school: 'SJCE',
      place: 'Mysore',
      time: 'September 2011 - May 2015'
    },
    {
      degree: 'PUC (PCME)',
      branch: 'FULL TIME',
      school: 'St.Aloysius College',
      place: 'Mangalore',
      time: 'June 2009 - May 2011'
    },
    {
      degree: 'SSLC (Maths,Science,Social)',
      branch: 'FULL TIME',
      school: 'GJCS',
      place: 'Kudremukh',
      time: 'June 2008 - May 2009'
    }

  ])
  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.heading}>My Resume</h2>
        <div className={classes.contentcontainer}>

          <img src={dp} alt={'profic  not available'} className={classes.image} />


          <div className={classes.exp}>
            <div>
              <h2 className={classes.workexp}>Work Experience</h2>
              {exp.map((item, i) => (
                <div key={i}>
                  <div  className={classes.position_type}>
                    <h2 className={classes.position}>{item.position}</h2>
                    <h2 className={classes.type}>{item.type}</h2>

                  </div>
                  <div className={classes.otherdetails}>

                    <span className={classes.company_place}>
                      <BusinessIcon style={{ color: '#ccc' }} />
                      <span style={{ width: '140px' }} >{item.company}</span>
                      &nbsp;&nbsp;
                      <PlaceIcon style={{ color: '#ccc' }} />
                      <span >{item.place}</span>

                    </span>


                    <span className={classes.company_place}>
                      <EventIcon style={{ color: '#ccc' }} />
                      <span>{item.time}</span></span>

                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className={classes.workexp}>Education</h2>
              {edu.map((item, i) => (
                <div key={i}>
                  <div className={classes.position_type}>
                    <h2 className={classes.position}>{item.degree}</h2>
                    <h2 className={classes.type}>{item.branch}</h2>

                  </div>
                  <div className={classes.otherdetails}>

                    <span className={classes.company_place}>
                      <BusinessIcon style={{ color: '#ccc' }} />
                      <span style={{ width: '140px' }} >{item.school}</span>
                      &nbsp;&nbsp;
                      <PlaceIcon style={{ color: '#ccc' }} />
                      <span >{item.place}</span>

                    </span>


                    <span className={classes.company_place}>
                      <EventIcon style={{ color: '#ccc' }} />
                      <span>{item.time}</span></span>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div >


    </>
  )

}
ResumeComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(ResumeComponentStyle)(ResumeComponent)

