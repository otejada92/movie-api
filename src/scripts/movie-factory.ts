import { LoremIpsum } from "lorem-ipsum";
import fs from 'fs';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 2,
      min: 2
    },
    wordsPerSentence: {
      max: 2,
      min: 2
    }
});

let data = {movies : new Array() }; 

for (let index = 0; index <= 200; index++) {
    
    const movie = {
        title: `Movie Title # ${index}`, 
        synopsis: lorem.generateSentences(), 
        director: lorem.generateWords(),
        writer: lorem.generateWords(),
        visible: true,
        createdAt: '2020-11-10',
        updatedAt: '2020-11-10'
    };    

    data.movies = [...data.movies, movie];
}

fs.writeFileSync('./dist/seeders/movie-books.json', JSON.stringify(data));


