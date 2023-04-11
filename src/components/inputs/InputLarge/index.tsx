import React from 'react'
import { Container, Title, InputStyled }  from './style'

const InputLarge = ({ children, action, type }: {children: string, action: any | null, type:string}): JSX.Element => {
  return (

    <Container>
        <Title> { children } </Title>
        <InputStyled 
        type={type} 
        onChange={action}
        />
    </Container>

  )
}

export default InputLarge