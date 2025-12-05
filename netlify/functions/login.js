let connectedUsers = [];

exports.handler = async function(event) {
  if(event.httpMethod === "POST"){
    const { user, code } = JSON.parse(event.body);
    if(code === "Backrooms-ADMIN-2025"){
      if(!connectedUsers.includes(user)) connectedUsers.push(user);
      return {
        statusCode: 200,
        body: JSON.stringify({ success:true, users: connectedUsers })
      }
    } else {
      return { statusCode: 401, body: JSON.stringify({ success:false }) };
    }
  }

  if(event.httpMethod === "GET"){
    return {
      statusCode: 200,
      body: JSON.stringify({ users: connectedUsers })
    }
  }

  return { statusCode: 405, body: "Method Not Allowed" }
}
