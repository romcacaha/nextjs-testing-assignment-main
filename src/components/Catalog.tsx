import React, { useEffect, useState } from 'react'
import Item from './Item'
import { Vehicle } from '../types'
import { Box, Flex, Grid } from '@radix-ui/themes'
import { LoadMoreBtn } from './LayoutComponents'
import { useFilter } from '../FilterContext'
import axios, { AxiosResponse } from 'axios'

const Catalog = () => {
    const itemsPerLoad = 6
    const { filters } = useFilter()
    const [vehicles, setVehicles] = useState<Vehicle[]>([])
    const [numberOfItems, setNumberOfItems] = useState(itemsPerLoad)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse<{ count: number, items: Vehicle[] }> = await axios.get('http://localhost:3000/api/data')
                setVehicles(response.data.items)
            } catch (error) {
                console.log('Chyba při získávání dat:', error);
            }
        }

        fetchData()
    }, [])

    useEffect(() => {

    }, [filters])

    const filterItems = (value: Vehicle) => {
        if (value.price < filters.minPrice || value.price > filters.maxPrice) return false;

        if (!filters.vehicleType.includes(value.vehicleType) && filters.vehicleType.length > 0) return false;

        if (value.instantBookable !== filters.instantBookable) return false;
        return true;
    }


    return (
        <section className='p-vertical'>
            <Box px={{ initial: "4", xs: "9" }}>
                <Grid gap={"6"} columns={{ initial: '1', xs: '3' }}>
                    {vehicles.filter(filterItems).slice(0, numberOfItems).map((vehicle, index) =>
                        (<Item vehicle={vehicle} key={index} />)
                    )}
                </Grid>
                <Flex justify={"center"}>
                    {numberOfItems < vehicles.filter(filterItems).length &&
                        <LoadMoreBtn
                            onClick={() => {
                                setNumberOfItems((prev) => prev + itemsPerLoad)
                            }}
                        >
                            Načíst další
                        </LoadMoreBtn>
                    }
                </Flex>
            </Box>
        </section>
    )
}

export default Catalog