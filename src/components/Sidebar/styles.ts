import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.aside`
  position: relative;
  overflow: hidden;
  grid-area: SIDEBAR;
  border-right: 0.01rem solid #e7e9ee;
  box-shadow: 0px 0px 2px 0px rgba(51, 225, 237, 0.3);

  display: flex;
  flex-direction: column;

  padding: 0 3.2rem 3.2rem;
`;

export const ContainerLogo = styled.div`
  > img {
    width: 10rem;
  }

  margin: 2.4rem 0;
`;

export const MenuContainer = styled.nav`
  margin-top: 4rem;
  display: block;
  flex: 1;
`;

export const MenuButton = styled(NavLink).attrs({
  activeClassname: 'active',
})`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  border-radius: 1rem;
  background: none;
  text-decoration: none;
  color: #1e1e2c;

  padding: 1.2rem 1.6rem;

  transition: 0.2s ease-out;

  svg {
    width: 2rem;
  }

  &.active {
    background-color: rgba(51, 225, 237, 0.2);
    color: #25b3cb;

    &:hover {
      background-color: rgba(51, 225, 237, 0.3);
    }
  }

  &:hover {
    color: #25b3cb;
  }

  & + a {
    margin-top: 0.4rem;
  }
`;

export const ToggleButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: 0.1rem solid #e7e9ee;
  background: #fff;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #1e1e2c;

  position: absolute;
  top: 2.4rem;
  right: -1.5rem;

  svg {
    width: 1.6rem;
  }
`;

export const ProfileButton = styled.button`
  width: 100%;
  border: 0;
  border-radius: 1rem;

  background: #fff;
  padding: 1.2rem 1.6rem;

  display: flex;
  gap: 2rem;

  transition: transform 0.3s ease-in-out;

  > img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > strong {
      font-size: 1.4rem;
      font-weight: 500;
      color: #25b3cb;
    }

    > span {
      font-weight: 300;
      font-size: 1.2rem;
      color: #c5cbd3;
    }
  }

  &:hover {
    transform: translateX(0.5rem);
  }
`;
