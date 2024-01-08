const knex = require("../database/knex");

class TagsController {
  async index(request, responde) {
    const user_id = request.user.id;

    const tags = await knex("tags")
    .where({ user_id })
    .groupBy("name")

    return responde.json(tags);
  }
}

module.exports = TagsController;
