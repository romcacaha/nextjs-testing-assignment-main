export type FiltersType = {
    minPrice: number,
    maxPrice: number,
    instantBookable: boolean,
    vehicleType: string[],
}

export type Vehicle = {
    location: string;
    instantBookable: boolean;
    name: string;
    passengersCapacity: number;
    sleepCapacity: number;
    price: number;
    toilet: boolean;
    shower: boolean;
    vehicleType: string;
    pictures: string[];
}