import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root
    {
        --maxWidth:1280px;
        /* Backgrouds */

        --highlight:#e76f51;
        /* /SECTION - Dark color scheme */
        --dark-primary-bg:#2B3848;
        --dark-secondary-bg:#006d77;
        --dark-text-color:#F9FAF8;
        --dark-color1:#9a8c98;
        --dark-color2:#c9ada7;
        /* /SECTION - Dark color end */

        /* SECTION - Light color scheme */
        
        --light-primary-bg:#98c1d9;
        --light-secondary-bg:#e76f51;
        --light-text-color:#14213d;
        --light-color1:#9a8c98;
        --light-color2:#c9ada7;
        /* /SECTION - Light color end */


        /* font sizes */
        --fontHero: 4rem;
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
