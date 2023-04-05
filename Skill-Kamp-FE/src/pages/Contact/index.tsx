import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContactForm from '../../components/ContactFrom';
import Map from '../../components/Map'
import "./style.scss";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '50px 0'
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    '& h2': {
      marginTop: 0
    }
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  item: {
    flex: '0 0 32%',
    marginBottom: '20px',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '5px'
  },
  centeredText: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px'
  }
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2>Contact Us</h2>

        <div className={classes.grid}>
          <div className={classes.item}>
            <h3>Visit Us</h3>
            <p>123 Main St</p>
            <p>Seattle, WA 98101</p>
          </div>
          <div className={classes.item}>
            <h3>Opening Hours</h3>
            <p>Monday-Friday: 9am-5pm</p>
            <p>Saturday: 10am-3pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div className={classes.item}>
            <h3>Customer Service</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@yourstore.com</p>
          </div>
        </div>
        <div className={classes.centeredText}>
          <p>Feel free to get in touch with us.</p>
        </div>
        <ContactForm />
        <div><Map latitude={47.6062} longitude={-122.3321} /></div>
      </div>
    </section>
  );
};

export default Contact;
