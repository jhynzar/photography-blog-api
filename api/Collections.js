const collectionsPath = '/images/collections';

const collections = [
    {
        title: 'The First Collection',
        coverImg: 'img1.jpg',
        folderName: 'first-collection'
    },
    {
        title: 'Is this the 2nd collection?',
        coverImg: 'img2.jpg',
        folderName: 'second-collection'
    },
    {
        title: 'oops 3rd',
        coverImg: 'img3.jpg',
        folderName: 'third-collection'
    },
    {
        title: 'hahaha last.',
        coverImg: 'img4.jpg',
        folderName: 'fourth-collection'
    },
    {
        title: 'Same Cover',
        coverImg: 'img4.jpg',
        folderName: 'fourth-collection'
    },
    {
        title: 'ALT IMAGE',
        coverImg: 'img5.jpg',
        folderName: 'fourth-collection'
    },
];

module.exports = collections.map(
    value => Object.assign({}, value, {imgPath: `${collectionsPath}/${value.folderName}/${value.coverImg}`})
);
