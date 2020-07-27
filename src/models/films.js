export class FilmTableInfo {
    constructor(name, episode, release) {
        this.name = name;
        this.episode = episode;
        this.release = release;
    }
};

export class FilmDetailsLinks {
    constructor(characters, planets, starships, vehicles, species) {
        this.characters = characters;
        this.planets = planets;
        this.starships = starships;
        this.vehicles = vehicles;
        this.species = species;
    }
};

export class FilmDetailsInfo {
    constructor(name, episode, release, producer, director, description) {
        this.name = name;
        this.episode = episode;
        this.release = release;
        this.producer = producer;
        this.director = director;
        this.description = description;
    }
};