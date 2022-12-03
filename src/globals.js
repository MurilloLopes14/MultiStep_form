import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
    /* Light colors pallet */
    --light-color-1: #F4FCFA;
    --light-color-2:#181818;
    --light-color-3: #777;
    --light-shadow:#201d1d 0px 0px 15px 5px;
    --light-input-shadow: rgba(99,99,99, .2) 0px 2px 8px 0px;

    /* Dark colors pallet */
    --dark-color-1:#1F2322;
    --dark-color-2:#E0E5E4;
    --dark-color-3:#D0D0D0;
    --dark-shadow:#6c6a6a 0px 0px 15px 5px;
    --dark-input-shadow: none;
    /* Other colors */
    --color-1: #3E35C0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .2s;
}

p{
    color: ${({ theme }) => theme.subText};
}

a{
    text-decoration: none;
}

ul, li{
    list-style: none;
}

h1, h2, h3, h4{
    font-weight: 600;
}






`;
