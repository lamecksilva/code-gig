const express = require('express');
const router = express.Router();

const db = require('../config/database');
const Gig = require('../models/Gig');

router.get('/', (req, res) => {
  Gig.findAll()
    .then(gigs => {
      res.render('gigs', {
        gigs
      });
    })
    .catch(err => console.log(err));
});

// Display add gig form
router.get('/add', (req, res) => res.render('add'));

// Add a gig
router.post('/add', (req, res) => {
  const data = {
    title: 'Simple wordpress website',
    technologies: 'wordpress, php, html, css',
    budget: '$1000',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt dolor eget nulla tempus pulvinar. Sed eget risus in leo ornare vestibulum sit amet at urna. Nulla facilisis urna ac vulputate ornare. Cras dictum ante vel est pharetra, non finibus massa lobortis. Donec bibendum quam eget ipsum faucibus, ac varius ligula eleifend. In eu semper nisl.',
    contact_email: 'user2@lsdev.com'
  };

  let { title, technologies, budget, description, contact_email } = data;

  // Insert into table
  Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email
  })
    .then(gig => {
      res.redirect('/gigs');
    })
    .catch(err => console.log(err));
});

module.exports = router;
