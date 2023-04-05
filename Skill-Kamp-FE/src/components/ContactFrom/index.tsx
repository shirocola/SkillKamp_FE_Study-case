import React, { useState, FormEvent, ChangeEvent } from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Do something with formValues, such as sending an email
    console.log(formValues);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="firstName"
            label="First Name"
            fullWidth
            required
            value={formValues.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="lastName"
            label="Last Name"
            fullWidth
            required
            value={formValues.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            type="email"
            label="Email"
            fullWidth
            required
            value={formValues.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="subject"
            label="Subject"
            fullWidth
            required
            value={formValues.subject}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="message"
            label="Message"
            fullWidth
            multiline
            required
            rows={4}
            value={formValues.message}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
