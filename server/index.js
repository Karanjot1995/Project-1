const express = require('express')
const port = 8001

const app = express()



app.get('/', (req,res)=>{
  res.send('success')
})



app.listen(port, ()=>console.log('app listening on port: ', port))



// const path = require('path')
// const fs = require('fs')
// const express = require('express')


// const PORT = 8081
// const app = express()

// const router = express.Router()

// const serverRenderer = require('./renderhtml')


// app.use('^/$', serverRenderer)

// router.use(
//   express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
// )


// app.use("/api", require("./routes"));



// console.log(__dirname, path.resolve('./'))

// // tell the app to use the above rules
// app.use(router)

// // app.use(express.static('./build'))


