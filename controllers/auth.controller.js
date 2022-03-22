const db = require("../models");
const config = require("../config/auth.config");
const adminTC = db.adminTC;
//const Role = db.role;
//const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
exports.signup = (req, res) => {
  // Save user to Database
  console.log("hello**************************************************\n");
  adminTC.create({
    email: req.body.email,
    motPasse: bcrypt.hashSync(req.body.motPasse, 8)
  });
  return res.status(200).send({
    accessToken: null,
    message: "created"
});
};
exports.signin = (req, res) => {
  console.log("hello**************************************************\n");
  adminTC.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(adminTC => {
        if (!adminTC) {
        return res.status(404).send({ message: "user Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(
        req.body.motPasse,
        adminTC.motPasse
        );
        if (!passwordIsValid) {
        return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
        });
        }
        var token = jwt.sign({ id: adminTC.id }, config.secret, {
          expiresIn: 86400 // 24 hours
        });
        return res.status(200).send({
          accessToken: null,
          message: "connected"
      });
    })
};
exports.register = (req, res) => {
  console.log("hey----------------------------------");
  return res.status(200).send({
    accessToken: null,
    message: "yes"
});
}

