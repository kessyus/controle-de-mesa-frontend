import { createGlobalStyle } from 'styled-components';
import fontQuicksand from '../assets/fonts/Quicksand.woff';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Quicksand';
        src: local('Quicksand'), local('Quicksand'),
        url(${fontQuicksand}) format('woff');
        font-weight: 500;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        color: white;
        font-family: 'Quicksand', sans-serif;
    }

    #root {
        display:flex;
        flex-direction:column;
        height: 100vh;
        background-color: rgb(23,23,23);
    }

`;

export default GlobalStyle;
