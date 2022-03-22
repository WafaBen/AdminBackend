module.exports = {
    HOST: "ec2-52-214-125-106.eu-west-1.compute.amazonaws.com",
    USER: "lelzuksfwpqhwa",
    PASSWORD: "b8fb418aedd51450cc5f834e5b19dc7e4baf2350abc143327ebbc199ab47",
    DB: "d9",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };