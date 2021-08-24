import React from 'react';
import { connect } from 'react-redux';
import ImageWithSlide from './ImageWithSlide';
import Content from './Content';
import { useEffect } from 'react';
const Home: React.FC<any> = (props) => {
  return (
    <div style={{ background: 'red' }} onClick={() => console.log('Clicked')}>
      <ImageWithSlide />
      <Content />
    </div>
  );
};
export default Home;
