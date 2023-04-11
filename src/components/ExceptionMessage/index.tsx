import { SetStateAction, useState, useContext } from 'react';
import { AuthUserContext } from '../../contexts/AuthUserContext';
import ButtonPrimary from '../buttons/ButtonPrimary';
import { ExecepionArea } from './style';

interface ExceptionMessageProps{
    status:string;
    message:string
}

const ExceptionMessage = ({status, message}:ExceptionMessageProps): JSX.Element => {


    return(      
        <>
            <ExecepionArea>
                <h1>{message}</h1>
            </ExecepionArea>
        </>
    )
};

export default ExceptionMessage;