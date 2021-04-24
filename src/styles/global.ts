import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: #f0f5f1;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 400 1.6rem 'Poppins', sans-serif;
    color: #1e1e2c;
  }

  button {
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    position: relative;
    width: 100%;
    max-width: 576px;
    padding: 3rem;

    background:#f0f5f1;
    border-radius: 1rem;
  }
`;
