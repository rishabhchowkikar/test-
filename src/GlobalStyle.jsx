import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    boz-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
}
html {
    font-size: 50.5%
    overflow-x: hidden;
} 

h1{
    color: ${({ theme }) => theme.colors.heading};
    font-size: 6rem
    font-weight: 500;
}

h2{
    color: ${({ theme }) => theme.colors.heading};
    font-size: 4.4rem;
    font-weight: 300;
    white-space: normal;
    text-align: center;
}

h3{
    font-size: 1.6rem;
    font-weight: 400;
}

p{
    color: ${({ theme }) => theme.colors.text};
    opacity: .7;
    font-size: 1.4rem;
    line-height: 1.5;
    margin-top: 1rem;
    font-weight: 400;
}
a{
    text-decoration: none;
    list-style:none;
}
li {
    list-style: none;
}

.container {
    max-width: 160rem;
    margin: 0 2.9rem;
    height: 45rem;
    
    
}

.grid {
    display: grid;
    gap: 9rem;
    margin: 0 3rem;
}

.grid-two-column {
    grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
    grid-template-column: repeat(3, 1fr);
}

.grid-four-column {
    grid-template-column: 1fr 1.2fr .5fr .8fr ;
    // margin: 0;
}

.common-heading {
    font-size: 3.8rem;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 6rem;
}

input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}

input[type="submit"]{
    max-width: 16rem;
    max-height: 6rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding : 1.4rem 2.2rem;
    border-style: solid;
    border-width: 0.1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
}

`;
