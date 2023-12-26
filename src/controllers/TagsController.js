const knex = require("../database/knex");

class TagsController {
  async index(request, responde) {
    const { user_id } = request.params;

    const tags = await knex("tags")
    .where({ user_id })

    return responde.json(tags);
  }
}

module.exports = TagsController;
