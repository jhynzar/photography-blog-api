const url = require('url');

const galleryPath = '/images/';

const gallery = [
    {
        img: 'img1.jpg',
        title: 'The Title',
        description: 'lorem ipsum dalar set'
    },
    {
        img: 'img2.jpg',
        title: 'The Title',
        description: 'lorem ipsum dalar set'
    },
    {
        img: 'img3.jpg',
        title: 'The Title',
        description: 'lorem ipsum dalar set'
    },
    {
        img: 'img4.jpg',
        title: 'The Title',
        description: 'lorem ipsum dalar set'
    },
];

module.exports = gallery.map(value => Object.assign({}, value, {imgPath: `${galleryPath}${value.img}`}));
