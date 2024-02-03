import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Home.css';

const tourData = [
  { date: 'JUL16', place: 'DETROIT, MI', specPlace: 'DTE ENERGY MUSIC THEATRE' },
  { date: 'JUL19', place: 'TORONTO, ON', specPlace: 'BUDWEISER STAGE' },
  { date: 'JUL22', place: 'BRISTOW, VA', specPlace: 'JIGGY LUBE LIVE' },
  { date: 'JUL29', place: 'PHOENIX, AZ', specPlace: 'AK-CHIN PAVILION' },
  { date: 'AUG2', place: 'LAS VEGAS, NV', specPlace: 'T-MOBILE ARENA' },
  { date: 'AUG7', place: 'CONCORD, CA', specPlace: 'CONCORD PAVILION' },
];

const TourItem = ({ date, place, specPlace }) => (
  <div className='tour-item'>
    <span className='tour-date'>{date}</span>
    <span className='tour-place'>{place}</span>
    <span className='tour-spec-place'>{specPlace}</span>
    <button className='buy-btn'>BUY TICKETS</button>
  </div>
);

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <section id='tours' className='container'>
        <h2 style={{ fontFamily: 'Metal Mania' }}>Tours</h2>
        <div>
          {tourData.map((tour, index) => (
            <TourItem key={index} {...tour} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
