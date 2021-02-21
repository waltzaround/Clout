async function handleGetUserInfo(req, res) {
  return res.status(200).json({ user: req.user }).end()
}

module.exports = {
  handleGetUserInfo,
}
