import React from 'react';
import { Container } from 'react-bootstrap';
import CarouselTickets from '../../components/CarouselTickets';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
// import TableTicketType from '../../components/TableTicketType';
import '../Home/styles.css';

const Home: React.FC = () => {
  const userName = 'Henrique Marques';
  return (
    <>
      <header>
        <NavBar username={userName ? userName : ''} />
      </header>
      <main role="main" className="flex-shrink-0">
        <div className="container">
          <Container>
            <CarouselTickets />
            {/* <TableTicketType /> */}
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
