import { SetStateAction, useState, useContext } from 'react';
import { AuthUserContext } from '../../contexts/AuthUserContext';
import ButtonPrimary from '../buttons/ButtonPrimary';
import { ExcepionArea } from './style';

interface ExceptionMessageProps{
    status:string;
    message:string
}

const ExceptionMessage = ({status, message}:ExceptionMessageProps): JSX.Element => {


    return(      
        <>
            <ExcepionArea>
                <h1>{message}</h1>
            </ExcepionArea>
        </>
    )
};

export default ExceptionMessage;