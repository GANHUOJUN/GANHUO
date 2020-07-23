const PostsController = require('../controllers/posts_controller');

exports.plugin = {
    pkg: require('../package.json'),
    register: async function(server, options) {

        server.route({ path: '/posts', method: 'GET', handler: PostsController.getAll });
        server.route({ path: '/posts/{id}', method: 'GET', handler: PostsController.findById });
        server.route({ path: '/posts', method: 'POST', handler: PostsController.create });
        server.route({ path: '/posts/{id}', method: 'PATCH', handler: PostsController.edit });
        server.route({ path: '/posts/{id}', method: 'DELETE', handler: PostsController.delete });

    }
}