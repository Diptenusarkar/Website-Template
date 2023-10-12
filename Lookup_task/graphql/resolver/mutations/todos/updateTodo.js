const todos = require("../../../../schema/todo");
const resolvers = {
  Mutation: {
    createTodo: async (parent, args) => {
      let { todo, status } = (args && args.input) || {};
      // Add the new todo to the data store
      try {
        const newTodo = await todos.create({ todo, status });
        console.log(newTodo);
        return newTodo;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to create todo");
      }
    },
    deleteTodo: async (parent, args) => {
      const { id } = args && args;
      try {
        const deletedTodo = await todos.findByIdAndRemove(id);
        console.log(deletedTodo);
        return deletedTodo;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to delete's todo");
      }
    },
    updateTodoData: async (parent, args) => {
      const { id, todo, status } = (args && args.input) || {};
      console.log(args);
      try {
        const update = await todos.findByIdAndUpdate(
          id,
          { todo, status },
          { new: true }
        );
        console.log(update);
        return update;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to update's todo");
      }
    },
  },
};
module.exports = resolvers;
