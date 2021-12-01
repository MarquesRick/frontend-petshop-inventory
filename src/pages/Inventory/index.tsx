import React from 'react';
import Footer from '../../components/Footer';

import NavBar from '../../components/NavBar';
import TableInventory from '../../components/TableInventory';
import TitleDefault from '../../components/TitleDefault';

const Inventory: React.FC = () => {
  const userName = 'Henrique Marques';
  return (
    <>
      <header>
        <NavBar username={userName ? userName : ''} />
      </header>
      <main role="main" className="flex-shrink-0">
        <div className="container">
          <TitleDefault name="Bem-vindo ao estoque 📦" />
          <TableInventory />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Inventory;
