import { FilmDetailsInfo, FilmDetailsLinks, FilmTableInfo } from '../models/films';
import { PeopleDetailsInfo, PeopleDetailsLinks, PeopleTableInfo } from '../models/people';
import { PlanetDetailsInfo, PlanetDetailsLinks, PlanetTableInfo } from '../models/planets';
import { SpeciesDetailsInfo, SpeciesDetailsLinks, SpeciesTableInfo } from '../models/species';
import { VehiclesDetailsInfo, VehiclesTableInfo, VehiclesDetailsLinks } from '../models/vehicles';
import { StarshipsDetailsInfo, StarshipsDetailsLinks, StarshipsTableInfo } from '../models/starships';

const CATEGORIES = {
    FILMS: 'films',
    PEOPLE: 'people',
    PLANETS: 'planets',
    SPECIES: 'species',
    VEHICLES: 'vehicles',
    STARSHIPS: 'starships'
}

export const convertDetailInfo = (identifier, data) => {
    switch (identifier) {
        case CATEGORIES.FILMS:
            return {
                info: new FilmDetailsInfo(
                    data.title,
                    data.episode_id,
                    data.release_date,
                    data.producer,
                    data.director,
                    data.opening_crawl
                ),
                links: new FilmDetailsLinks(
                    data.characters,
                    data.planets,
                    data.starships,
                    data.vehicles,
                    data.species
                )
            };
        case CATEGORIES.PEOPLE:
            return {
                info: new PeopleDetailsInfo(
                    data.name,
                    data.gender,
                    data.birth_year,
                    data.homeworld,
                    data.height,
                    data.mass,
                    data.hair_color,
                    data.skin_color,
                    data.eye_color
                ),
                links: new PeopleDetailsLinks(
                    data.films,
                    data.starships,
                    data.vehicles,
                    data.species
                )
            }
        case CATEGORIES.PLANETS:
            return {
                info: new PlanetDetailsInfo(
                    data.name,
                    data.population,
                    data.terrain,
                    data.climate,
                    data.rotation_period,
                    data.orbital_period,
                    data.diameter,
                    data.surface_water,
                    data.gravity
                ),
                links: new PlanetDetailsLinks(
                    data.films,
                    data.residents,
                )
            }
        case CATEGORIES.SPECIES:
            return {
                info: new SpeciesDetailsInfo(
                    data.name,
                    data.classification,
                    data.homeworld,
                    data.language,
                    data.designation,
                    data.average_lifespan,
                    data.average_height,
                    data.skin_colors,
                    data.hair_colors,
                    data.eye_colors
                ),
                links: new SpeciesDetailsLinks(
                    data.people,
                    data.films,
                )
            }
        case CATEGORIES.VEHICLES:
            return {
                info: new VehiclesDetailsInfo(
                    data.name,
                    data.model,
                    data.cost_in_credits,
                    data.vehicle_class,
                    data.manufacturer,
                    data.length,
                    data.max_atmosphering_speed,
                    data.crew,
                    data.passengers,
                    data.cargo_capacity,
                    data.consumables
                ),
                links: new VehiclesDetailsLinks(
                    data.pilots,
                    data.films,
                )
            }
        case CATEGORIES.STARSHIPS:
            return {
                info: new StarshipsDetailsInfo(
                    data.name,
                    data.model,
                    data.manufacturer,
                    data.starship_class,
                    data.cost_in_credits,
                    data.length,
                    data.max_atmosphering_speed,
                    data.crew,
                    data.passengers,
                    data.cargo_capacity,
                    data.consumables,
                    data.hyperdrive_rating,
                    data.MGLT
                ),
                links: new StarshipsDetailsLinks(
                    data.pilots,
                    data.films,
                )
            }
        default:
            return;
    }
}

export const convertTableInfo = (identifier, data) => {
    switch (identifier) {
        case CATEGORIES.FILMS:
            return new FilmTableInfo(data.title, data.episode_id, data.release_date);
        case CATEGORIES.PEOPLE:
            return new PeopleTableInfo(data.name, data.gender, data.birth_year);
        case CATEGORIES.PLANETS:
            return new PlanetTableInfo(data.name, data.population, data.terrain, data.climate);
        case CATEGORIES.SPECIES:
            return new SpeciesTableInfo(data.name, data.classification, data.homeworld, data.language);
        case CATEGORIES.VEHICLES:
            return new VehiclesTableInfo(data.name, data.model, data.manufacturer, data.cost_in_credits, data.vehicle_class);
        case CATEGORIES.STARSHIPS:
            return new StarshipsTableInfo(data.name, data.model, data.manufacturer, data.starship_class, data.cost_in_credits);
        default:
            return;
    }
}