const app = require('express')()

app.get('/', (req, res) =>{
    res.status(200).send('Ihuu')
})

app.listen(3000, () => {
    console.log('Executando')
})