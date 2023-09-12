import { Box, Flex } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <header>
            <Box py={"5"} px={{ xs: "9" }}>
                <Flex justify={{ initial: 'center', xs: 'start' }}>
                    <Image src="/Prague-Labs-logo.svg" alt="logo" width={200} height={35} />
                </Flex>
            </Box>
        </header>
    )
}

export default Header