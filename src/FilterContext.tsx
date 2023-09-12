import React, { createContext, useContext, useState } from "react";
import { FiltersType } from "./types";
import { defaultFilters } from "./constants";

type FilterContextType = {
    filters: FiltersType;
    setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error('useFilters must be used within a FiltersProvider');
    }
    return context;
}

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
    const [filters, setFilters] = useState<FiltersType>(defaultFilters)

    return (
        <FilterContext.Provider value={{ filters, setFilters }}>
            {children}
        </FilterContext.Provider>
    )
}