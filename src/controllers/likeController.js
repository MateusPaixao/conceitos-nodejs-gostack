module.exports = {
    create(request, response, repositories) {
        const { id } = request.params

        const repository = repositories.find(repository => repository.id === id)

        if(!repository) {
            return response.status(400).json({ error: "Repository not found." })
        }

        repository.likes++
        return response.json(repository)
    },

    remove(request, response, repositories) {
        const { id } = request.params

        const repository = repositories.find(repository => repository.id === id)

        if(!repository) {
            return response.status(400).json({ error: "Repository not found." })
        }

        if(repository.likes > 0) {
            repository.likes--
        }
        return response.json(repository)
    },
}