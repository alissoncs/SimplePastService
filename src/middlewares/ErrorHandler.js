module.exports = () => {
  return (err, req, res, next) => {
    console.error(err);
    return res.json({
      error: err.message,
      details: err,
    }).status(500);
  }
}
