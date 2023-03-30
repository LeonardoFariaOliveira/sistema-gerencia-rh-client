import React from 'react'
import { Container, Title, InputStyled }  from './style'

const InputLarge = ({ children }: {children: string}): JSX.Element => {
  return (

    <Container>
        <Title> { children } </Title>
        <InputStyled 
        type="email" 
        />
    </Container>

  )
}

export default InputLarge