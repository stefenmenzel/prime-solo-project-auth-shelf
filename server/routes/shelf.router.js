const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    res.sendStatus(200); // For testing only, can be removed
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
   console.log('in post', req.body)
   let queryText = 
   `INSERT INTO "item" ("description", "image_url", "user_id") 
    SELECT ($1, $2, $3)`; 
    pool.query(queryText, [req.body.description, req.body.image_url, req.user.id] )
    .then( () => {
        res.sendStatus(201); 
    }).catch (error => {
        console.log('error in post', error)
        res.sendStatus(500)
    })
        

});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;