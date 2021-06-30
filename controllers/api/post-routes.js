const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id', 
            'post_title', 
            'post_content',
            'user_id',
            'created_at'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id', 
            'post_title', 
            'post_content',
            'user_id',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Post.create({
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        user_id: req.body.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Post.update(
        {
            post_title: req.body.post_title
        },
        {
            where: {
            id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});  

module.exports = router;