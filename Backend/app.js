const express = require('express')
const cors = require('cors')

require('dotenv').config()

const PORT = process.env.PORT

const server = () => {
    console.log('you are listening to port', PORT)
}

server()