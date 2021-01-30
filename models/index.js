const User = require('./User');
const Post = require("./Post");

// create associates between posts and users
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };