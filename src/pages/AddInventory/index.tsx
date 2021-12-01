import React from 'react';
import Footer from '../../components/Footer';
import FormInventory from '../../components/FormInventory';

import NavBar from '../../components/NavBar';

const AddInventory: React.FC = () => {
  const userName = 'Henrique Marques';
  return (
    <>
      <header>
        <NavBar username={userName ? userName : ''} />
      </header>
      <main role="main" className="flex-shrink-0">
        <div className="container">
          <FormInventory />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AddInventory;
