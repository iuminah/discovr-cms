'use strict';

/**
 * cookie-setting service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cookie-setting.cookie-setting');
