import albers1 from '../images/albers_untitled.png';
import albers2 from '../images/albers_variant.jpg';
import pattern from  '../images/dvf_pattern4.png';
import fairey from '../images/fairey_yen.png';
import saville1 from '../images/saville_manchester.jpg';
import saville2 from '../images/saville_waste.jpg';
import saville3 from '../images/saville_waste_2.jpg';
import vector from  '../images/vector_circles.png';

export default [
  {
    src: albers1,
    style: {
      left: '5%',
      transform: 'rotate(-10deg)',
    },
    description: "Anni Albers, Untitled, 1969"
  },
  {
    src: albers2,
    style: {
      left: '40%',
      transform: 'rotate(6deg)',
    },
    description: "Josef Albers, Variant/Adobe, 1947"
  },
  {
    src: pattern,
    style: {
      right: '15%',
      transform: 'rotate(-9deg)',
    },
    description: "unknown pattern"
  },
  {
    src: fairey,
    style: {
      top: '28%',
      left: '8%',
      transform: 'rotate(8deg)',
    },
    description: "Shepard Fairey, Yen-Gold, 2007"
  },
  {
    src: saville1,
    style: {
      top: '25%',
      left: '37%',
      transform: 'rotate(-12deg)',
    },
    description: "Peter Saville, Manchester Original, 2010"
  },
  {
    src: saville2,
    style: {
      top: '26%',
      right: '12%',
      transform: 'rotate(10deg)',
    },
    description: "Peter Saville, Waste #1, 2003"
  },
  {
    src: saville3,
    style: {
      top: '48%',
      left: '25%',
      transform: 'rotate(-5deg)',
    },
    description: "Peter Saville, Waste #2, 2003"
  },
  {
    src: vector,
    style: {
      right: '25%',
      top: '52%',
      transform: 'rotate(16deg)',
    },
    description: "unknown pattern"
  },
];
