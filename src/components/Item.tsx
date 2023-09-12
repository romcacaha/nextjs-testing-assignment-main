import React from 'react'
import { CatalogImg, FilterTitle, SimpleCard } from './LayoutComponents'
import { Box, Flex, Separator } from '@radix-ui/themes'
import { Vehicle } from '../types'
import Image from 'next/image'
import { vehicleTypes } from '../constants'
import { Carousel } from 'react-responsive-carousel'

const Item = ({ vehicle }: { vehicle: Vehicle }) => {
    return (
        <SimpleCard>
            <div style={{ position: "relative" }}>

                <Carousel autoPlay={false} showArrows={true} infiniteLoop={true} showIndicators={false} showStatus={false} showThumbs={false} width={"100%"} >
                    {vehicle.pictures.map((pic, index) => <CatalogImg key={index} src={pic} alt={vehicle.name} height={"190px"} />)}
                    {/* Error 502 (Bad gateway) */}
                    {/* {vehicle.pictures.map((pic, index) => <Image key={index} src={pic} alt={vehicle.name} height={"190px"} layout='fill' />)} */}
                </Carousel>
            </div>
            <div style={{ padding: "0.75rem" }}>
                <Flex direction={"column"}>
                    <span className='textType'>{vehicleTypes[vehicle.vehicleType].title}</span>
                    <h2 className='textName'>{vehicle.name}</h2>
                    <Separator size={"4"} />
                    <Box py={"2"}>
                        <span>{vehicle.location}</span>
                        <Flex gap={"2"}>
                            <Flex gap={"1"}>
                                <Image src="/seat.svg" alt='seat' width={20} height={20} />
                                <span>{vehicle.passengersCapacity}</span>
                            </Flex>
                            <Flex gap={"1"}>
                                <Image src="/bed.svg" alt='bed' width={20} height={20} />
                                <span>{vehicle.sleepCapacity}</span>
                            </Flex>
                            {vehicle.toilet &&
                                <Image src="/toilet.svg" alt='bed' width={20} height={20} />
                            }
                            {vehicle.shower &&
                                <Image src="/shower.svg" alt='bed' width={20} height={20} />
                            }
                        </Flex>
                    </Box>
                    <Separator size={"4"} />
                    <Box pt={"2"}>
                        <Flex justify={"between"}>
                            <FilterTitle>Cena od</FilterTitle>
                            <Flex gap={"2"}>
                                <span className='priceText'>{vehicle.price.toLocaleString('cs-CZ')} Kč/den</span>
                                {vehicle.instantBookable &&
                                    <Image src="/lightning.svg" alt='bed' width={16} height={16} />
                                }
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </div>
        </SimpleCard>
    )
}

export default Item
