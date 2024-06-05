const {
  createPost,
  readPostById,
  readPosts,
  updatePostById,
  deletePostById,
} = require('./models/post.js');

const { createCategories, readCategories } = require('./models/category.js');

const { createTags, readTags } = require('./models/tag.js');
