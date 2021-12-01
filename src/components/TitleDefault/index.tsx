import React from 'react';
import { Title } from './styles';

const TitleDefault = (props: any) => {
  console.log(props);
  const { name } = props;
  return (
    <>
      <Title>{name}</Title>
    </>
  );
};

export default TitleDefault;
