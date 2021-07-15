import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
  --primary-color: #0066ff;
  --light-color: #f1f1f1;
  --dark-color: #333;
  --danger-color: #c00000;
  --transparent-dark: rgba(0, 102, 255, 0.5);
  --transparent-light: rgba(241, 241, 241, 0.2);
  --box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.3), -0.2rem -0.2rem 0.5rem rgba(0, 0, 0, 0.2),
    inset 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1), inset -0.2rem -0.2rem 0.5rem rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  color: var(--primary-color);
}

main {
  position: relative;
  max-width: 30rem;
  min-height: 85vh;
  margin: 5rem auto;
  background: var(--primary-color);
  border-radius: 3rem;
  border: 0.2rem solid var(--primary-color);
  overflow: hidden;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  display: inline-block;
}

button,
input {
  border: none;
  outline: none;
  font-family: inherit;
  color: inherit;
}

::-webkit-scrollbar {
  background: var(--primary-color);
}
::-webkit-scrollbar-thumb {
  background: var(--light-color);
}
`;
