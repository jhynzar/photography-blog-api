const collectionsPath = '/images/collections';

const collections = [
    {
        title: 'The First Collection',
        coverImg: 'img1.jpg',
        folderName: 'first-collection',
        link: '/single'
    },
    {
        title: 'Is this the 2nd collection?',
        coverImg: 'img2.jpg',
        folderName: 'second-collection',
        link: '/single'
    },
    {
        title: 'oops 3rd',
        coverImg: 'img3.jpg',
        folderName: 'third-collection',
        link: '/single'
    },
    {
        title: 'hahaha last.',
        coverImg: 'img4.jpg',
        folderName: 'fourth-collection',
        link: '/single'
    },
    {
        title: 'Same Cover',
        coverImg: 'img4.jpg',
        folderName: 'fourth-collection',
        link: '/single'
    },
    {
        title: 'ALT IMAGE',
        coverImg: 'img5.jpg',
        folderName: 'fourth-collection',
        link: '/single'
    },
];

module.exports = collections.map(
    value => Object.assign({}, value, {imgPath: `${collectionsPath}/${value.folderName}/${value.coverImg}`})
);
