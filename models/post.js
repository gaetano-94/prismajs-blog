const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createPost = (data, cf) => {
  //Creare una pizza
  prisma.post
    .create({ data })
    .then((newPost) => cf(newPost))
    .catch((err) => console.error(err));
};

const readPosts = (cf) => {
  //Creare una pizza
  prisma.post
    .findMany({
      include: {
        category: {
          select: {
            name: true,
          },
        },
        tag: {
          select: {
            name: true,
          },
        },
      },
    })
    .then((ps) => cf(ps))
    .catch((err) => console.error(err));
};

module.exports = {
  createPost,
  readPosts,
};
