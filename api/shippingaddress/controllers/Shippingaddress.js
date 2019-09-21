'use strict';

/**
 * Shippingaddress.js controller
 *
 * @description: A set of functions called "actions" for managing `Shippingaddress`.
 */

module.exports = {

  /**
   * Retrieve shippingaddress records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.shippingaddress.search(ctx.query);
    } else {
      return strapi.services.shippingaddress.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a shippingaddress record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.shippingaddress.fetch(ctx.params);
  },

  /**
   * Count shippingaddress records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.shippingaddress.count(ctx.query);
  },

  /**
   * Create a/an shippingaddress record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.shippingaddress.add(ctx.request.body);
  },

  /**
   * Update a/an shippingaddress record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.shippingaddress.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an shippingaddress record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.shippingaddress.remove(ctx.params);
  }
};
