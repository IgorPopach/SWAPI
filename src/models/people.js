export class PeopleTableInfo {
    constructor(name, gender, birth_year) {
        this.name = name;
        this.gender = gender;
        this.birth_year = birth_year;
    }
};

export class PeopleDetailsLinks {
    constructor(films, starships, vehicles, species) {
        this.films = films;
        this.starships = starships;
        this.vehicles = vehicles;
        this.species = species;
    }
};

export class PeopleDetailsInfo {
    constructor(name, gender, birth_year, homeworld, height, mass, hair_color, skin_color, eye_color) {
        this.name = name;
        this.gender = gender;
        this.birth_year = birth_year;
        this.homeworld = homeworld;
        this.height = height;
        this.mass = mass;
        this.hair_color = hair_color;
        this.skin_color = skin_color;
        this.eyes_color = eye_color;
    }
};