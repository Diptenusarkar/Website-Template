const todos = require('../../../schema/todo')
const router = {
    Query: {
        todos: async (_, { }) => {
            let todosData = await todos.find();
            console.log(todosData);
            return todosData;
        }
    }
}
module.exports = router

