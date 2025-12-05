let logs = [];

exports.handler = async function(event) {
  if(event.httpMethod === "POST"){
    const { user, message } = JSON.parse(event.body);
    logs.unshift({ time: new Date().toLocaleTimeString(), user, message });
    if(logs.length > 50) logs.pop();
    return { statusCode: 200, body: JSON.stringify({ success:true }) };
  }

  if(event.httpMethod === "GET"){
    return { statusCode: 200, body: JSON.stringify(logs) };
  }

  return { statusCode: 405, body: "Method Not Allowed" };
}
