import express, { json } from 'express';
// import movies from './routers/movies';

const app: express.Application = express();

const port = 5000;

app.use(json());

app.get('/', (req, res) => {
    res.redirect("/movies");
})

// app.use('/movies', movies);

app.use((req, res) => res.send(404));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

