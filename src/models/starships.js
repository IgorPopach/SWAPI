export class StarshipsTableInfo {
    constructor(name, model, manufacturer, starship_class, cost_in_credits) {
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
        this.starship_class = starship_class;
        this.cost_in_credits = cost_in_credits;
    }
};

export class StarshipsDetailsInfo {
    constructor(
        name,
        model,
        manufacturer,
        starship_class,
        cost_in_credits,
        length,
        max_atmosphering_speed,
        crew,
        passengers,
        cargo_capacity,
        consumables,
        hyperdrive_rating,
        MGLT
    ) {
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
        this.starship_class = starship_class;
        this.cost_in_credits = cost_in_credits;
        this.length = length;
        this.max_atmosphering_speed = max_atmosphering_speed;
        this.crew = crew;
        this.passengers = passengers;
        this.cargo_capacity = cargo_capacity;
        this.consumables = consumables;
        this.hyperdrive_rating = hyperdrive_rating;
        this.MGLT = MGLT;
    }
};

export class StarshipsDetailsLinks {
    constructor(pilots, films) {
        this.pilots = pilots;
        this.films = films;
    }
};