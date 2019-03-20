const fs = require('fs');

const collectionsPath = '/images/collections';

/**
 * Defaults
 */
/**
 * {
 *      title: required,
 *      coverImg: required,
 *      folderName: required,
 *      link: optional || '/{{kebabCase(this.title)}}',
 *      gallery: optional || {
 *          'img1.jpg': {
 *              title: optional || '{{this.key}}',
 *              description: optional || ' '
 *          }
 *      }
 *  
 * }
 */

const collectionsData = [
    {
        title: 'The First Collection',
        coverImg: 'img1.jpg',
        folderName: 'first-collection',
        link: 'deeemn-first',
        gallery: {
            'img1.jpg': {
                title: 'The First One.',
                description: 'This is the first picture of the first collection.'
            }
        }
    },
    {
        title: 'The 2nd',
        coverImg: 'img3.jpg',
        folderName: 'second-collection',
    },
    {
        title: 'oops 3rd',
        coverImg: 'img4.jpg',
        folderName: 'third-collection',
    },
    {
        title: 'hahaha last.',
        coverImg: 'img2.jpg',
        folderName: 'fourth-collection',
    },
];

/**
 * Setting defaults
 */
let getGallery = (folderName) => {
    let files = fs.readdirSync(`public${collectionsPath}/${folderName}`);
    let gallery = {};
    //console.log(files);

    files.forEach((value) => {
        gallery[value] = {
            title: value,
            description: ''
        };
    });

    return gallery;
};

let collections = [];
let collectionsGallery = {};

collectionsData.forEach(
    value => {
        let link = value.link || `${value.title.toLowerCase().replace(/ /g,'-')}`;
        /**
         * Collections
         */
        let collection = Object.assign(
            {},
            value, 
            {
                link,
                coverImgPath: `${collectionsPath}/${value.folderName}/${value.coverImg}`,
            }
        );

        delete collection.gallery; //delete gallery info first, to reduce data size
        collections.push(collection);

        /**
         * collectionsGallery
         */

        let gallery = Object.assign(
            getGallery(value.folderName),
            value.gallery,
        )


        //add imgPath
        for (const key in gallery) {
            if (gallery.hasOwnProperty(key)) {
                gallery[key]['imgPath'] = `${collectionsPath}/${value.folderName}/${key}`;
            }
        }

        collectionsGallery[link] = Object.assign(
            collection,
            {
                gallery,
            }
        );
    }
);


module.exports = {
    list: collections,
    galleries: collectionsGallery
}
