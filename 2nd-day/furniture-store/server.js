const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.get(`/priceCheck/:name`, function (request, response) {
    const name = request.params.name
    const price = store.find(s => s.name == name) || { price: null }
    const data = { price: price.price }
    response.send(
        `<p> price :${data.price} </p>`)
})

app.get('/buy/:name', function (request, response) {
    const name = request.params.name
    const item = store.find(s => s.name == name)
    item.inventory--
    response.send(
        `<p>Congratulations, you've just bought ${item.name}
         for ${item.price}. There are ${item.inventory} left now in the store. </p>`
    )
})

app.get('/sale', function (request, response) {
    const user = request.query
    if (user.admin =='true') {
        for (let item of store) {
            if (item.inventory > 10){
                item.price *=0.5
            }
        }
        response.send(store)
    }
})
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.listen(port, function (request, response) {
    console.log("Server is up and running smoothly");
})