import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 800px;
    align-items: center;
    justify-content: center;
`;

export const FormH1 = styled.h1`
    color: black;
    font-size: 48px;
    text-align: center;
    margin-bottom: 20px;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const FormP = styled.p`
    margin-top: 10px;
    margin-bottom: 5px;
    color: #960303;
`;

export const FormButton = styled.button`
    border-radius: 50px;
    background: ${({lightBg}) => (lightBg ? '#63dbff' : '#010001')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({lightBg}) => (lightBg ? '#010001' : '#63dbff')};
    }
    &:disabled{
        background: #dddddd;
    }
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const FormSendMessage = styled.p`

    color: green;
    margin-top: 20px;
`;