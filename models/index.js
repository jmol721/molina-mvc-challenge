const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_username'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    through: User,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: 'username'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: 'user_id'
});

module.exports = { User, Post, Comment };