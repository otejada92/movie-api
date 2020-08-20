const express = require('express');
const { getMovies, 
        getMovie, 
        createMovie, 
        updateMovie,
        getReviews, 
        createReview } = require('../controllers/movies');

const router = express.Router();

/**
 *  @route  GET /movies
 *  @desc   Get movies information
 *  @access Public
 */
router.get('/', getMovies);

/**
 *  @route  GET /movies/:id
 *  @desc   Get a movie information
 *  @access Public
 */
router.get('/:id', getMovie);

/**
 *  @route  POST /movies
 *  @desc   Create a movie
 *  @access Public
 */
router.post('/', createMovie);

/**
 *  @route  PUT /movies/:id
 *  @desc   Update movie information
 *  @access Public
 */
router.put('/:id', updateMovie);

/**
 *  @route  GET /movies/:id/reviews
 *  @desc   Get reviews from a movie
 *  @access Public
 */
router.get('/:id/reviews/', getReviews);

/**
 *  @route  POST /movies/:id/reviews
 *  @desc   Create a review for a movie
 *  @access Public
 */
router.post('/:id/reviews/', createReview);


module.exports = router;