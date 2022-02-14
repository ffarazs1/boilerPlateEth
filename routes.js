const routes = require("next-routes")();

//these are old methods of routing
//update it
routes
  .add("/campaigns/new", "/campaigns/new")//it needs to be added as second line means new is also address
  .add("/campaigns/:address", "/campaigns/show")
  .add("/campaigns/:address/requests", "/campaigns/requests/index")
  .add("/campaigns/:address/requests/new", "/campaigns/requests/new");

module.exports = routes;
