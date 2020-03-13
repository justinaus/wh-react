import { Server, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = new Server({
    environment,

    models: {
      user: Model,
      todo: Model,
    },

    seeds(server) {
      server.create('user', { name: 'Bob' });
      server.create('user', { name: 'Alice' });

      server.create('todo', {
        userId: 1,
        id: 1,
        title: 'electus aut autem',
        completed: false,
      });
      server.create('todo', {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false,
      });
    },

    routes() {
      // this.namespace = 'api';

      this.get('/users', schema => {
        return schema.users.all();
      });

      this.get('/todos', schema => {
        const result = schema.todos.all();

        // return schema.todos.all();
        return result.models;
      });

      this.get('/todos/:id', (schema, request) => {
        const id = request.params.id;

        const result = schema.todos.find(id);

        return result.attrs;
      });
    },
  });

  return server;
}
