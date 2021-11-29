import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root
    {
        --maxWidth:1280px;
        /* Backgrouds */

        --orange:#F4743B;
        --white: #fff;

        --darkBg:#10121e;
        --lightGrey: #2f334c;
        --lightPurple: #9562af;
        --lightTomato:#fa4a56;
        --bg:#5C9EAD;

        /* font sizes */
        --fontMax:2.5rem;
        --fontBig:1.5rem;
        --fontMed:1.2rem;
        --fontSmall:1rem;
        

        --success: #4BB543;
        --failure: #FC100D;
    }

    *{
        /* visibility: ; */
        box-sizing: border-box;
    /* overflow-y: hidden; */
        font-family: 'M PLUS Code Latin', sans-serif;   //Font family 
    }

    body
    {
        margin:0;
        padding: 0;
        background: var(--lightGrey);
        h1
        {
            font-size:2rem;
            font-weight:600;
            color: var(--white);
        }

        h3
        {
            font-size:1.1rem;
            font-weight:600;
        }

        p
        {
            font-size: 1rem;
            color: var(--white);
        }
    }

    a
    {
        text-decoration: none;
        color: inherit;
    }

`;
