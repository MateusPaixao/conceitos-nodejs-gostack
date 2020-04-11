const express = require('express')
const routes = express.Router()

const repositoryController = require('./controllers/repositoryController')
const likeController = require('./controllers/likeController')

const repositories = [];

// Routes form repositories
routes.get("/repositories", (request, response) => repositoryController.index(request, response, repositories));

routes.post("/repositories", (request, response) => repositoryController.create(request, response, repositories));

routes.put("/repositories/:id", (request, response) => repositoryController.update(request, response, repositories));

routes.delete("/repositories/:id", (request, response) => repositoryController.remove(request, response, repositories));

// Routes form likes
routes.post("/repositories/:id/like", (request, response) => likeController.create(request, response, repositories));


module.exports = routes