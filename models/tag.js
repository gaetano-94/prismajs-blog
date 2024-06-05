const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createTags = (tags, cf) => {
  prisma.tag
    .createMany({
      data: tags.map((tag) => ({ name: tag })),
    })
    .then((count) => cf(count))
    .catch((err) => console.error(err));
};

const readTags = (cf) => {
  prisma.tag
    .findMany()
    .then((tg) => cf(tg))
    .catch((err) => console.error(err));
};

module.exports = {
  createTags,
  readTags,
};
