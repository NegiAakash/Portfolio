import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root
    {
        --maxWidth:1280px;
        /* Backgrouds */

        --orange:#F4743B;
        --white: #fff;
        --navBg:#3C6E71;
        --lightGrey: #eee;
        --medGrey:#353535;
        --darkGrey:#1c1c1c;
        --lightYellow: #FFC15E;
        --blue1:#ACACDE;
        --blue2:#4E5166;
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
