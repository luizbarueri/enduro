const db = require('./db.json')

export default function cadastro(request, response) {
    request.id = '2'
    const id = request.id
    const result = db.find((cliente) => cliente.id === id)
    if (!result) {
        return response.status(404).send("Id não encontrada")
    }
    return response.status(200).send(result)   
}