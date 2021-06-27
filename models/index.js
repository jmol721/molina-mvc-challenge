const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post);

Post.belongsTo(User, {
    through: User,
    onDelete: "CASCADE",
    onUpdate: "CASCASE",
    foreignKey: 'username'
});

Comment.belongsTo(Post, {
    through: Post,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: 'id'
});

Comment.belongsTo(User, {
    through: User,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: 'id'
});