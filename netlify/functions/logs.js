let logs = [];

export async function handler(event) {
  if(event.httpMethod === "POST"){
    const body = JSON.parse(event.body);
    logs.push(body.message);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  }

  if(event.httpMethod === "GET"){
    return {
      statusCode: 200,
      body: JSON.stringify({ logs })
    };
  }

  return { statusCode: 405 };
}
