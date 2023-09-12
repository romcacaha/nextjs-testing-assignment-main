import { Flex } from '@radix-ui/themes'
import { Card, FilterTitle, NumberInput } from './LayoutComponents'
import React, { InputHTMLAttributes } from 'react'

const PriceInput = React.forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function PriceInput(props, ref) {
    return (
        <Card style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
            <Flex gap={"2"}>
                <NumberInput {...props} ref={ref} />
                <FilterTitle>Kč</FilterTitle>
            </Flex>
        </Card>
    )
})

export default PriceInput