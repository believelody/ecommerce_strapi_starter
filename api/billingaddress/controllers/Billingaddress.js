'use strict';

/**
 * Billingaddress.js controller
 *
 * @description: A set of functions called "actions" for managing `Billingaddress`.
 */

module.exports = {

  /**
   * Retrieve billingaddress records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.billingaddress.search(ctx.query);
    } else {
      return strapi.services.billingaddress.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a billingaddress record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.billingaddress.fetch(ctx.params);
  },

  /**
   * Count billingaddress records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.billingaddress.count(ctx.query);
  },

  /**
   * Create a/an billingaddress record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.billingaddress.add(ctx.request.body);
  },

  /**
   * Update a/an billingaddress record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.billingaddress.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an billingaddress record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.billingaddress.remove(ctx.params);
  }
};
