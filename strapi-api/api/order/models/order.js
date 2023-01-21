"use strict";
const { v4: uuid } = require("uuid");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      data.published_at = new Date();
      if (!data.uuid) {
        data.uuid = uuid();
      }
    },
  },
};
