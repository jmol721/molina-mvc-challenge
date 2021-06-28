const { Comment } = require('../models');

const commmentData = [
    {
        comment_text: 'Awesome!',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Wack',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'kinda',
        user_id: 4,
        post_id: 3
    },
    {
        comment_text: 'lol',
        user_id: 3,
        post_id: 4
    },
];

const seedComments = () => Comment.bulkcreate(commmentData);

module.exports = seedComments;