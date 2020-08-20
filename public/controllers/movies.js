const { Movies , Reviews } = require('../models');
const{ mapValues, isUndefined } = require('lodash');

const getMovies = (req, res) => {

    const where = getWhereStatements(req.query);
    
    const order = getOrder(req.query);

    const pagination = getPagination(req.query);

    const filters = { 
                        ...where,
                        ...order, 
                        ...pagination,
                        include: 'Reviews'
    };
    
    Movies.findAll(filters)
          .then(result => res.status(200).json(result))
          .catch(err =>  res.status(400).json({mgs: err}));
};

const getWhereStatements = ({title, director, writer, visible, createAt}) => {

    const conditionValues = removeUndefined({ title, 
                                              director, 
                                              writer, 
                                              visible, createAt });

    return {where : {...conditionValues}};
};

const getPagination = ({ limit, offSet }) => {
    
    return mapValues(removeUndefined({ limit, offSet }), value => +value );
};

const getOrder = ({sortBy, orderBy}) => {

    const orderParams = [sortBy, orderBy].filter(value => !isUndefined(value));
    const order = orderParams.length > 0 ? { order : [order]} : {order : []};

    return order;
};

const getMovie = (req, res) => {

    const { id } = req.params;

    Movies.findByPk(id)
          .then(result => res.status(200).json(movie))
          .catch(err => res.status(400)
                            .json({mgs: `No movie found w/ id: ${id}.`}));
};

const createMovie = (req, res) => {

    Movies.create(req.body)
    .then(result => res.status(201).json(result))
    .catch(err => res.status(400).json({msg: 'Title field is required.'}));
};

const updateMovie = (req, res) => {

    const { id } = req.params;
    
    const {...update} = req.body;
    
    const whereStatement = { where : { id } };
    
    Movies.update(update, whereStatement)
          .then(result =>  res.status(201).json(result))
          .catch(err => res.status(400).json({msg: 'Please specify a valid id.'}));
}

const getReviews = (req, res) => {

    const { id } = req.params;    

    const whereStatement = { where :{ movie_id : id } }
    
    Reviews.findAll(whereStatement)
           .then(result => res.status(200).json(result))
           .catch(err => res.status(400).json({msg: 'Please specify a valid id.'}));

};

const createReview = (req, res) => {
    
    const { id } = req.params;    

    const { comment } = req.body;
    
    // This should be handle by sequelize
    if((!comment || comment === '') || !id) 
    {
        return res.status(400)
                  .json({msg: 'Require a valid movie id AND comment'});
    }
    
    const newReview = { comment, movie_id : +id };
    
    Reviews.create(newReview)
            .then(result => res.status(201).json(result))
            .catch(err => console.log(err));
}

module.exports = {
    getMovies,
    getMovie,
    createMovie,
    updateMovie,
    getReviews,
    createReview
}