async function handleGetUserInfo(_, res) {
  return res.status(200).end()
}

module.exports = {
  handleGetUserInfo,
}