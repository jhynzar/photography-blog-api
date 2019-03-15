const url = require('url');

const galleryPath = '/images/';

const gallery = [
    {
        img: 'img1.jpg',
        title: 'Berserk of Gluttony',
        description: 'Manga'
    },
    {
        img: 'img2.jpg',
        title: 'Riven',
        description: 'The Broken Sword'
    },
    {
        img: 'img3.jpg',
        title: 'Zed',
        description: 'The Darkened Shadow'
    },
    {
        img: 'img4.jpg',
        title: 'Random Cutie',
        description: 'UwU'
    },
];

module.exports = gallery.map(value => Object.assign({}, value, {imgPath: `${galleryPath}${value.img}`}));
