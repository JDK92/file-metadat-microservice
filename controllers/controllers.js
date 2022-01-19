const getIndex = (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
};

const postFile = (req, res) => {
  const { originalname: name, mimetype: type, size } = req.file;
  res.json({ name, type, size });
};


module.exports = {
  getIndex,
  postFile
}