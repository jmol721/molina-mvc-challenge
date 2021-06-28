const { Post } = require('../models');

const postData = [
    {
        post_title: 'footy',
        post_content: 'Footy is the best.',
        user_username: 'jmolina'
    },
    {
        post_title: 'arsenal',
        post_content: 'arsenal is the best.',
        user_username: 'eemu'
    },
    {
        post_title: 'cats',
        post_content: 'cats are the best.',
        user_username: 'lhunter'
    },
    {
        post_title: 'travis',
        post_content: 'Travis is the best.',
        user_username: 'kho'
    },
];

const seedPosts = () => Post.bulkcreate(postData);

module.exports = seedPosts;