export class PlanetTableInfo {
    constructor(name, population, terrain, climate) {
        this.name = name;
        this.population = population;
        this.terrain = terrain;
        this.climate = climate;
    }
};

export class PlanetDetailsInfo {
    constructor(
        name,
        population,
        terrain,
        climate,
        rotation_period,
        orbital_period,
        diameter,
        surface_water,
        gravity
    ) {
        this.name = name;
        this.population = population;
        this.terrain = terrain;
        this.climate = climate;
        this.rotation_period = rotation_period;
        this.orbital_period = orbital_period;
        this.diameter = diameter;
        this.surface_water = surface_water;
        this.gravity = gravity;
    }
};

export class PlanetDetailsLinks {
    constructor(films, residents) {
        this.films = films;
        this.residents = residents;
    }
};