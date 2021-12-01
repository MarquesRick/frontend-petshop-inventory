import React from 'react';
//useRouteMatch = pega a rota que da match que é passado na queryString da página
import { useRouteMatch } from 'react-router';

interface IShowcaseParams {
  id: string;
}

const Showcase: React.FC = () => {
  const { params } = useRouteMatch<IShowcaseParams>();
  return <></>;
};

export default Showcase;
