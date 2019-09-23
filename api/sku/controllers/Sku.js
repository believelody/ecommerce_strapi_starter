'use strict';

/**
 * Sku.js controller
 *
 * @description: A set of functions called "actions" for managing `Sku`.
 */

module.exports = {

  /**
   * Retrieve sku records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.sku.search(ctx.query);
    } else {
      return strapi.services.sku.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a sku record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.sku.fetch(ctx.params);
  },

  /**
   * Count sku records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.sku.count(ctx.query);
  },

  /**
   * Create a/an sku record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.sku.add(ctx.request.body);
  },

  /**
   * Update a/an sku record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.sku.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an sku record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.sku.remove(ctx.params);
  }
};
