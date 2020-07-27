export class SpeciesTableInfo {
    constructor(name, classification, homeworld, language) {
        this.name = name;
        this.classification = classification;
        this.homeworld = homeworld;
        this.language = language;
    }
};

export class SpeciesDetailsInfo {
    constructor(
        name,
        classification,
        homeworld,
        language,
        designation,
        average_lifespan,
        average_height,
        skin_colors,
        hair_colors,
        eye_colors
    ) {
        this.name = name;
        this.classification = classification;
        this.homeworld = homeworld;
        this.language = language;
        this.designation = designation;
        this.average_lifespan = average_lifespan;
        this.average_height = average_height;
        this.skin_colors = skin_colors;
        this.hair_colors = hair_colors;
        this.eye_colors = eye_colors;
    }
};

export class SpeciesDetailsLinks {
    constructor(people, films) {
        this.people = people;
        this.films = films;
    }
};