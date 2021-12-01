const { Post } = require('../models');

const postData = [{
        title: 'Cookies',
        content: 'like cookies',
        user_id: 1

    },
    {
        title: 'thought',
        content: 'Steaks are bloodys',
        user_id: 2
    },
    {
        title: 'yes ',
        content: 'nonono',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;