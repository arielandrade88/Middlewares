module.exports = {
  admin: (req, res) => {
    let name = req.query.user
    res.render("admin", {
      name
    });
  },

};