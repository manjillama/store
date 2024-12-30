'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) =>  ({
  async findBySlug(ctx) {
    await this.validateQuery(ctx);
    
    const { slug } = ctx.params;
    const query = await this.sanitizeQuery(ctx);
    if (!query.filters) query.filters = {}
    query.filters.slug = { '$eq': slug }

    const entity = await strapi.documents('api::product.product').findFirst(query);
    const sanitizedResults = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedResults);
  }
}));
