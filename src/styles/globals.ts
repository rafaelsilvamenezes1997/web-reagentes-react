import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  outline:0;
}

body{
  background:#081A51;
  //color: #FFFFFF;
  color:#081a51;
  -webkit-font-smoothing:antialiased;
}


body, input, button{
  font-family: 'Roboto Slab', serif;
  font-size: 16px;

}

h1,h2,h3,h4,h5,h6, strong {
  font-weight: 500;
}

button{
  cursor: pointer;
}

img{

margin-top:20px;
max-width:100%;
max-height:100%;
border-radius: 5px;
}

`;
