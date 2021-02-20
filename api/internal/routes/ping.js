
function handlePing(req, res) {
  return res.status(200).end();
}

module.exports = {
  handlePing,
}