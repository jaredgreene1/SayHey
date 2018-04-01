
get_config = () => {
  var config = {
    host: "localhost",
    user: "root",
    password: "touchpoint",
    database: "touchpoint"
  }

  if (process.env.TP_TESTING) {
    console.log("using testing db")
    config.database = "touchpoint_test_db"
  }

  return config
}

module.exports = {
  config: get_config()
}
