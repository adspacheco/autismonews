function status(request, response) {
  response.status(200).json({ Hello: "World" });
}

export default status;
