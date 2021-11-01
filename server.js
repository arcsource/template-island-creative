const express = require('express')
const app = express()
const PORT = process.env.PORT || 3003

app.use(express.static('island'))

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})