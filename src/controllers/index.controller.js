const standAlive = (request, response) => {
  response.statusCode(200).send("I'm Alive!")
}

module.exports = {
  standAlive
}