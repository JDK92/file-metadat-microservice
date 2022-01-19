const checkFile = (req, res, next) => {
  if (!req.file) {
    return res.json({err: "You must select a file"});
  }

  next();
}

module.exports = { checkFile };