import MovieAttributes from "../interfaces/movie.interface";
import ReviewAttributes from "../interfaces/review.interface";

const movieData:any = {
    title: "Mocha test data",
    synopsis: "A dog story",
    director: "Mulla shin",
    writer: "Sin ban",
};

const reviewData:any = {
    "comment" : "Mocha movie review",
    "rate" : "3.5"
};

export const dummyMovie: MovieAttributes = movieData;

export const dummyReview: ReviewAttributes = reviewData;