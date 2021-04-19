const apiMocker = require("connect-api-mocker");

module.exports = function(app) {
  app.use(
    apiMocker('/api', {
      target: "mocks/api",
      nextOnNotFound: true,
    })
  );
};