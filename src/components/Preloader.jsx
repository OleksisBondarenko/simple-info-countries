import React from 'react';
import styled from 'styled-components';

const PreloaderEl = styled.div`
  /* display: grid;
  place-items: center; */
    position: absolute;
    left: 0;
    right: 0;
    top: 0;  
    bottom: 0;

    display: flex;
  justify-content: center;
  align-items: center;
`;


export default function Preloader() {
  return (
    <PreloaderEl>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </PreloaderEl>
  );
}
