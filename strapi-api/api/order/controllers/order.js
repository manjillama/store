"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findUuid(ctx) {
    const { uuid } = ctx.params;

    const entity = await strapi.services.order.findOne({ uuid });
    return sanitizeEntity(entity, { model: strapi.models.order });
  },
};
