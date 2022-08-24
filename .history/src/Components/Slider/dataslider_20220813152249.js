import uuid from 'uuid';

console.log(uuid.v4());
const dataSlider = [
    {
        id: uuid.v4(),
        title: 'Lorem ipsum',
        subTitle: 'Lorem',
        imgURL: require('~/asset/image/slider1.jpeg'),
    },
    {
        id: uuid.v4(),
        title: 'Lorem ipsum',
        subTitle: 'Lorem',
        imgURL: require('~/asset/image/slider2.jpeg'),
    },
    {
        id: uuid.v4(),
        title: 'Lorem ipsum',
        subTitle: 'Lorem',
        imgURL: require('~/asset/image/slider3.jpeg'),
    },
    // {
    //     id: uuid.v4(),
    //     title: 'Lorem ipsum',
    //     subTitle: 'Lorem',
    // },
    // {
    //     id: uuid.v4(),
    //     title: 'Lorem ipsum',
    //     subTitle: 'Lorem',
    // },
];

export default dataSlider;
