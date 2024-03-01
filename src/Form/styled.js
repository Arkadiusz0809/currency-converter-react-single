import styled from "styled-components";

export const Header = styled.h2`
    color: #05abc4;
    text-align: center;
`;

export const LabelText = styled.div`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
`;

export const Field = styled.input`
    max-width: 150px;
    word-break: keep-all;
`;

export const SetButton = styled.p`
    text-align: center;
    max-width: 600px;
`;

export const Button = styled.button`
     width: 100%;
    padding: 10px;
    border-radius: 10px;
    background-color: beige;
`;

export const Info = styled.p`
    font-size: 14;
    text-align: center;
    color: #555;
    padding-top: 10px;
`;

export const Container = styled.div`
    @media(max-width: 460px) 
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

`;

export const Label = styled.p`
    display: flex;
`;