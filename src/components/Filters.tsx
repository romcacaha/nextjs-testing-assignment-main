import React from 'react'
import { vehicleTypes } from '../constants'
import { Box, Flex, Grid, Select, Separator } from '@radix-ui/themes'
import { DescText, FilterTitle, Track } from './LayoutComponents'
import Image from 'next/image'
import ReactSlider from 'react-slider'
import PriceInput from './PriceInput'
import CardCheckbox from './CardCheckbox'
import { useFilter } from '../FilterContext'

const Filters = () => {
    const { filters, setFilters } = useFilter()
    console.log(filters);

    return (
        <Box px={{ xs: "9" }}>
            <Flex direction={{ initial: 'column', xs: 'row' }}>
                <Box py={"5"} px={"4"} pl={{ xs: "0" }}>
                    <FilterTitle>Cena za den</FilterTitle>
                    <ReactSlider
                        value={[filters.minPrice, filters.maxPrice]}
                        min={100}
                        max={10000}
                        step={10}
                        orientation='horizontal'
                        className='rangeSlider'
                        thumbClassName='thumb'
                        renderTrack={Track}
                        onChange={(values) => {
                            setFilters((prev) => { return { ...prev, minPrice: values[0], maxPrice: values[1] } })
                        }}
                    />
                    <Grid columns={"2"} gap={"4"}>
                        <PriceInput
                            min={100}
                            max={filters.maxPrice}
                            value={filters.minPrice}
                            onChange={(e) => {
                                setFilters((prev) => { return { ...prev, minPrice: parseInt(e.target.value) } })
                            }}
                            onBlur={(e) => {
                                const value = parseInt(e.target.value)
                                if (value < 100) return setFilters((prev) => { return { ...prev, minPrice: 100 } })
                                if (value > filters.maxPrice) return setFilters((prev) => { return { ...prev, minPrice: filters.maxPrice } })
                            }}
                        />
                        <PriceInput
                            min={filters.minPrice}
                            max={10000}
                            value={filters.maxPrice}
                            onChange={(e) => {
                                setFilters((prev) => { return { ...prev, maxPrice: parseInt(e.target.value) } })
                            }}
                            onBlur={(e) => {
                                const value = parseInt(e.target.value)
                                if (value > 10000) return setFilters((prev) => { return { ...prev, maxPrice: 100 } })
                                if (value < filters.minPrice) return setFilters((prev) => { return { ...prev, maxPrice: filters.minPrice } })
                            }}
                        />
                    </Grid>
                </Box>
                <Separator orientation={'horizontal'} size="4" className='desktopHidden' />
                <Separator orientation={'vertical'} className='mobileHidden' />
                <Box py={"5"} px={"4"}>
                    <FilterTitle>Typ karavanu</FilterTitle>
                    <Grid columns={{ initial: "2", xs: "4" }} gap={"4"} pt={"4"}>
                        {
                            Object.keys(vehicleTypes).map((type) => (
                                <CardCheckbox
                                    name='vehicleType'
                                    id={type}
                                    key={type}
                                    onChange={(e) => {
                                        const vehicleTypes = filters.vehicleType
                                        if (e.target.checked) {
                                            if (vehicleTypes.includes(type)) return
                                            vehicleTypes.push(type)
                                        } else {
                                            if (!vehicleTypes.includes(type)) return
                                            vehicleTypes.splice(vehicleTypes.indexOf(type), 1)
                                        }
                                        setFilters((prev) => { return { ...prev, vehicleType: vehicleTypes } })
                                    }}
                                >
                                    {vehicleTypes[type].title}
                                    <DescText>
                                        {vehicleTypes[type].desc}
                                    </DescText>
                                </CardCheckbox>
                            ))
                        }
                    </Grid>
                </Box>
                <Separator orientation={'horizontal'} size="4" className='desktopHidden' />
                <Separator orientation={'vertical'} className='mobileHidden' />
                <Box py={"5"} px={"4"} pr={{ xs: "0" }}>
                    <Flex gap={"2"}>
                        <FilterTitle>Okamžitá rezervace</FilterTitle>
                        <Image src='/lightning.svg' alt='lightning' width={16} height={16} />
                    </Flex>
                    <Box pt={"4"}>
                        <Select.Root
                            defaultValue='true'
                            onValueChange={(value) => {
                                if (value === 'true') {
                                    setFilters((prev) => { return { ...prev, instantBookable: true } })
                                } else {
                                    setFilters((prev) => { return { ...prev, instantBookable: false } })
                                }
                            }}>
                            <Select.Trigger />
                            <Select.Content position='item-aligned'>
                                <Select.Item value='true'>Ano</Select.Item>
                                <Select.Item value='false'>Ne</Select.Item>
                            </Select.Content>
                        </Select.Root>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default Filters