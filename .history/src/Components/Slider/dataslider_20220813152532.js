import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4());
const dataSlider = [
    {
        id: uuidv4(),
        title: 'Lorem ipsum',
        subTitle: 'Lorem',
        imgURL: require('~/asset/image/slider1.jpeg'),
    },
    {
        id: uuidv4(),
        title: 'Lorem ipsum',
        subTitle: 'Lorem',
        imgURL: require('~/asset/image/slider2.jpeg'),
    },
    {
        id: uuidv4(),
        title: 'Lorem ipsum',
        subTitle: 'Lorem',
        imgURL: require('~/asset/image/slider3.jpeg'),
    },
    // {
    //     id: uuidv4(),
    //     title: 'Lorem ipsum',
    //     subTitle: 'Lorem',
    // },
    // {
    //     id: uuidv4(),
    //     title: 'Lorem ipsum',
    //     subTitle: 'Lorem',
    // },
];

export default dataSlider;
