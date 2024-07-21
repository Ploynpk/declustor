import React from 'react';
import Slider from 'react-slick';
import { Box, useTheme } from '@mui/material';
import pic3 from '../assets/12.png';
import pic4 from '../assets/4.png';
import pic5 from '../assets/5.png';;
import pic7 from '../assets/logs.png';
import pic8 from '../assets/noti.png';
import pic10 from '../assets/10.png';
import pic12 from '../assets/11.png';
import pic9 from '../assets/9.png';
import pic13 from '../assets/13.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Picture = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

  return (
    <Box sx={{ width: '600px', margin: '0 auto', padding: '20px' }}>
      <Slider {...settings}>
        {itemData.map((item) => (
          <Box key={item.img} sx={{ padding: '0 10px', overflow: 'hidden' }}>
            <img
              src={item.img}
              alt={item.title}
              style={{ width: '100%', height: 'auto', maxHeight: '400px', borderRadius: '10px' , boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',}}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

const itemData = [

  {
    img: pic3,
    title: 'line',
  },
  {
    img: pic13,
    title: 'line',
  },
  {
    img: pic4,
    title: 'line',
  },
  {
    img: pic5,
    title: 'line',
  },
  {
    img: pic7,
    title: 'line',
  },
  {
    img: pic8,
    title: 'line',
  },
  {
    img: pic12,
    title: 'line',
  },
  {
    img: pic9,
    title: 'line',
  },
  {
    img: pic10,
    title: 'line',
  },
];

export default Picture;
