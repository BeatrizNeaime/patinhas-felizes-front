import styled from "styled-components";
import { colors } from "../../../styles/constants";

const CardTitle = styled.p`
    font-size: 14px;
    color: #808080;
    font-weight: 500;
    text-transform: uppercase;
`

const CardContent = styled.p`
    font-size: 24px;
    color: black;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 0px;
`


const CardLink = styled.p`
    width: max-content;
    border-bottom: 1.5px solid ${colors.green};
    text-align: left;
    cursor: pointer;
`

const Counter = styled.p`
    font-size: 24px;
    color: gray;
    font-weight: 700;
    padding: 5px 10px;
`

export { CardTitle, CardContent, CardLink, Counter}

