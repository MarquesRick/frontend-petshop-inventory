import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="text-light">
          App desenvolvido por:{' '}
          <a
            href="https://github.com/MarquesRick"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#DF6923' }}
          >
            Henrique Marques
          </a>
          👾
        </p>
        <p className="text-light">
          <small>
            <strong style={{ color: '#DF6923' }}>
              ©PetShop Inventory LTDA 🐾
            </strong>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
