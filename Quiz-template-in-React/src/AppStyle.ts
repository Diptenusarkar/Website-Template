import styled , {createGlobalStyle} from "styled-components";
import background from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%
    }

    body{
        background-image: url(${background});
    }
`