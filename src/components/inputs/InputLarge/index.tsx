import React from 'react'
import { Container, Title, InputStyled }  from './style'

const InputLarge = ({ children, action }: {children: string, action: any | null}): JSX.Element => {
  return (

    <Container>
        <Title> { children } </Title>
        <InputStyled 
        type="email" 
        onChange={action}
        />
    </Container>

  )
}

export default InputLarge