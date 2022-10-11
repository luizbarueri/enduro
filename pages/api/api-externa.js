async function titulo(request, response) {

    //const id = Math.floor(Math.random() * (100 + 1));
    const idSecret = process.env.ID_API_SECRET
    const url = "https://jsonplaceholder.typicode.com/todos/"
    //const tituloResponse = await fetch(`${url}${id}`)
    const tituloResponse = await fetch(`${url}${idSecret}`)
    //.then(response => response.json())
    //.then(json => console.log(json))
    const tituloResponseJson = await tituloResponse.json()
    //const result = tituloResponseJson

    response.json({
        "userId": tituloResponseJson.userID,
        "id": tituloResponseJson.id,
        "title": tituloResponseJson.title,
        "completed": tituloResponseJson.completed
    })
}
export default titulo