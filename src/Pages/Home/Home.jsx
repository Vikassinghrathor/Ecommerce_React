import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import classes from './Home.module.css';  // Import CSS module

const tourData = [
  { date: 'JUL16', place: 'DETROIT, MI', specPlace: 'DTE ENERGY MUSIC THEATRE' },
  { date: 'JUL19', place: 'TORONTO, ON', specPlace: 'BUDWEISER STAGE' },
  { date: 'JUL22', place: 'BRISTOW, VA', specPlace: 'JIGGY LUBE LIVE' },
  { date: 'JUL29', place: 'PHOENIX, AZ', specPlace: 'AK-CHIN PAVILION' },
  { date: 'AUG2', place: 'LAS VEGAS, NV', specPlace: 'T-MOBILE ARENA' },
  { date: 'AUG7', place: 'CONCORD, CA', specPlace: 'CONCORD PAVILION' },
];

const TourItem = ({ date, place, specPlace }) => (
  <div className={classes['tour-item']}> {/* Use the correct syntax for accessing class names */}
    <span className={classes['tour-date']}>{date}</span> {/* Use the correct syntax for accessing class names */}
    <span className={classes['tour-place']}>{place}</span> {/* Use the correct syntax for accessing class names */}
    <span className={classes['tour-spec-place']}>{specPlace}</span> {/* Use the correct syntax for accessing class names */}
    <button className={classes['buy-btn']}>BUY TICKETS</button> {/* Use the correct syntax for accessing class names */}
  </div>
);

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <section id='tours' className={classes.container}> {/* Use the correct syntax for accessing class names */}
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
