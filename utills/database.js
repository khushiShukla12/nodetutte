let mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

mongoose.connection
.on('open',()=>{
    console.log("Database COnnected ")
})
.on('error',()=>{
    console.log("Database Disconnected")
})

// (()=>{

// })
