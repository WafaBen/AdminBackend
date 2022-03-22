const db = require("../models");
const adminTC = db.adminTC;
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};
exports.delete = (req, res) => {
    adminTC.destroy({
      where: {
        email: req.body.email
      }
  })
  return res.status(200).send({
      message: "deleted successfully"
  });
  
  }