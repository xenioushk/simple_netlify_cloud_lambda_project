exports.handler = function (event, context, callback) {
  // Extract data.

  let body
  const secretContent = `<h2>Welcome to the admin area</h2>
  <p>My username is: Himel</p>`

  if (event.body) {
    body = JSON.parse(event.body)
  } else {
    body = {}
  }

  if (body.password == "javascipt") {
    callback(null, {
      statusCode: 200,
      body: secretContent,
    })
  } else {
    callback(null, {
      statusCode: 401,
      body: "Incorrect password!",
    })
  }
}
