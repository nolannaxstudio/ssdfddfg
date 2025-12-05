let logs = [];

exports.handler = async function(event, context) {
  if(event.httpMethod === "POST"){
    const data = JSON.parse(event.body);
    logs.push({
      user: data.user,
      message: data.message,
      time: new Date().toISOString()
    });
    return { statusCode: 200, body: JSON.stringify({ success:true }) };
  }

  if(event.httpMethod === "GET"){
    return { statusCode: 200, body: JSON.stringify(logs) };
  }

  return { statusCode: 405, body: "Method Not Allowed" };
}
