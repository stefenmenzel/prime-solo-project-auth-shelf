const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('/ GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    let queryText = `SELECT "item".id, "user".username, "item".image_url, "item".description FROM "user"
    JOIN "item" ON "item".user_id = "user".id`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });; // For testing only, can be removed
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/',  (req, res) => {

});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.params.id: ' + req.params.id + ' req.user.id: ' + req.user.id);
    let queryText = `DELETE FROM "item" WHERE( "item".id=$1 AND "item".user_id=$2)`;
    pool.query(queryText, [req.params.id, req.user.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });;

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