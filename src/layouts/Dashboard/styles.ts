import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: 'SIDEBAR CONTENT';
  grid-template-columns: 30rem auto;
  overflow: hidden;
`;

export const Content = styled.main``;
