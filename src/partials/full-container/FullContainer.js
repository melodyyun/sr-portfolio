import React from 'react';
import styled from 'styled-components';
import SectionContainer from './SectionContainer';
import Logo from './hero-section/Logo';
import LeftNav from './hero-section/LeftNav';


const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const FullContainer = (props) => {
  return(
    <Container>
      <SectionContainer 
        logo={ 
          <Logo />
        }
        leftNav = {
          <LeftNav /> 
        }
      />
    </Container>
  )
};

export default FullContainer;