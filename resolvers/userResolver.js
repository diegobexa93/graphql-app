const users = []; // In-memory data for simplicity
let idCounter = 1;

const userResolver = {
  getUser: ({ id }) => {
    return users.find((user) => user.id === parseInt(id));
  },
  createUser: ({ name, email }) => {
    const newUser = { id: idCounter++, name, email };
    users.push(newUser);
    return newUser;
  },
};

module.exports = userResolver;