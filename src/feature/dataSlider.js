import { v4 as uuidv4 } from 'uuid';
import Slide2 from '../img/2.jpg';
import Slide3 from '../img/3.jpg';
import Slide1 from '../img/1.jpg';

const dataSlider = [
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    slide: Slide1,
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    slide: Slide2,
  },

  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    slide: Slide3,
  },
];

export default dataSlider;
