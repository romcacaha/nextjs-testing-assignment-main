import { FiltersType } from "./types"

export const vehicleTypes: Record<string, { title: string; desc: string }> = {
    'Campervan': {
        title: "Campervan",
        desc: "Obytka s rozměry osobáku, se kterou dojedete všude."
    },
    'Intergrated': {
        title: "Integrál",
        desc: "Král mezi karavany. Luxus na kolech."
    },
    'BuiltIn': {
        title: "Vestavba",
        desc: "Celý byt geniálně poskládaný do dodávky."
    },
    'Alcove': {
        title: "Přívěs",
        desc: "Tažný karavan za vaše auto. Od kapkovitých až po rodinné."
    },
}

export const defaultFilters: FiltersType = {
    minPrice: 100,
    maxPrice: 10000,
    instantBookable: true,
    vehicleType: [],
}