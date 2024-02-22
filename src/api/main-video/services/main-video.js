'use strict';

/**
 * main-video service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-video.main-video');
