import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';


export const CardCountryEl = styled.div`
  background-color: var(--colors-el);
  border-radius: 3px;
  overflow: hidden;
  padding-bottom: 20px;
  box-shadow: var(--shadow);
`;



export const CardInfo = styled.div`
  color: var(--colors-ft);
  padding: 0 20px 20px 30px;
`;

export const CardHeader = styled.h2``;

export const CardImage = styled.img`
  width: 100%;
  box-shadow: var(--shadow);
`;

 const CardInfoKey = styled.span`
  margin-right: 10px;
`;

 const CardInfoValue = styled.span`
  color: var(--colors-input);
`;

export const CardInfoItem = ({left, right}) => {
  return <div>
    <CardInfoKey>{left}:</CardInfoKey>
    <CardInfoValue>{right}</CardInfoValue>
  </div>
}

CardInfoItem.propTypes = {
  left: propTypes.string,
  right: propTypes.any,
  
}

function CardCountry(
  {
    flags,
    population,
    region,
    capital,
    name,
  },
) {
  return (
    <CardCountryEl>
      <CardImage src={flags.svg}></CardImage>
      <CardInfo>
        <CardHeader>{name.common}</CardHeader>
        <CardInfoItem left="Population" right={population.toLocaleString('en-US')}></CardInfoItem>
        <CardInfoItem left="Region" right={region}></CardInfoItem>
        <CardInfoItem left="Capital" right={capital.join(', ')}></CardInfoItem>
      </CardInfo>
    </CardCountryEl>
  );
}

CardCountry.propTypes = {
  flags: propTypes.shape({ svg: propTypes.string }).isRequired,
  population: propTypes.number.isRequired,
  region: propTypes.string.isRequired,
  name: propTypes.shape({ common: propTypes.string }).isRequired,
  capital: propTypes.array.isRequired,
};

export default CardCountry;
