const { uuid } = require("uuidv4");

module.exports = {
    index(request, response, repositories) {
        return response.json(repositories)
    },

    create(request, response, repositories) {
        const { title, url, techs } = request.body
  
        const repository = {
            id: uuid(),
            title,
            url,
            techs,
            likes: 0
        }

        repositories.push(repository)
        return response.json(repository)
    },

    update(request, response, repositories) {
        const { id } = request.params
        const { title, url, techs } = request.body

        const repositoryIndex = repositories.findIndex(repository => repository.id === id)


        if(repositoryIndex < 0){
            return response.status(400).json({ error: "Repository not found." })
        }

        repositories[repositoryIndex] = {
            id,
            title,
            url,
            techs,
            likes: repositories[repositoryIndex].likes
        }
        
        return response.json(repositories[repositoryIndex])
    },

    remove(request, response, repositories) {
        const { id } = request.params

        const repositoryIndex = repositories.findIndex(repository => repository.id === id)

        if(repositoryIndex < 0){
            return response.status(400).json({ error: "Repository not found." })
        }

        repositories.splice(repositoryIndex, 1)

        return response.status(204).send()
    },
}