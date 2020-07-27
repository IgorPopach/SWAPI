export class VehiclesTableInfo {
    constructor(name, model, manufacturer, cost_in_credits, vehicle_class) {
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
        this.cost_in_credits = cost_in_credits;
        this.vehicle_class = vehicle_class;
    }
};

export class VehiclesDetailsInfo {
    constructor(
        name,
        model,
        cost_in_credits,
        vehicle_class,
        manufacturer,
        length,
        max_atmosphering_speed,
        crew,
        passengers,
        cargo_capacity,
        consumables
    ) {
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
        this.cost_in_credits = cost_in_credits;
        this.vehicle_class = vehicle_class;
        this.length = length;
        this.max_atmosphering_speed = max_atmosphering_speed;
        this.crew = crew;
        this.passengers = passengers;
        this.cargo_capacity = cargo_capacity;
        this.consumables = consumables;
    }
};

export class VehiclesDetailsLinks {
    constructor(pilots, films) {
        this.pilots = pilots;
        this.films = films;
    }
};