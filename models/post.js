const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// creazione post
const createPost = (data, cf) => {
  prisma.post
    .create({ data })
    .then((newPost) => cf(newPost))
    .catch((err) => console.error(err));
};

// lettura post tramite slug
const readPostById = (slug, cf) => {
  prisma.post
    .findUnique({
      where: { slug },
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
    .then((p) => cf(p))
    .catch((err) => console.error(err));
};

// elenco di tutti i post
const readPosts = (cf) => {
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
  readPostById,
  readPosts,
};
