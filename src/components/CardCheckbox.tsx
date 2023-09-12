import React, { InputHTMLAttributes } from 'react'
import { Card } from './LayoutComponents'

const CardCheckbox = React.forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function CardCheckbox(props, ref) {
    const { children, id, ...other } = props
    return (
        <label htmlFor={id}>
            <input type="checkbox" className='checkbox' {...other} id={id} hidden ref={ref} />
            <Card className='checkboxCard'>
                {children}
            </Card>
        </label>
    )
})

export default CardCheckbox