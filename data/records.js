import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
export default [
    {
        id: uuidv4(),
        title: "Continuum",
        artist: "John Mayer",
        year: 2006,
        genre: "Pop"
    },
    {
        id: uuidv4(),
        title: "Stadium Arcadium",
        artist: "Red Hot Chili Peppers",
        year: 2006,
        genre: "Rock"
    },
    {
        id: uuidv4(),
        title: "So Long Forever",
        artist: "Palace",
        year: 2016,
        genre: "Indie"
    }
];