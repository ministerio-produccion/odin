"use strict";

const _ = require('lodash');

/**
 * 401 (Unauthorized) Response
 *
 * Similar to 403 Forbidden.
 * Specifically for use when authentication is possible but has failed or not yet been provided.
 * Error code response for missing or invalid authentication token.
 */

module.exports = function(data, config) {
    const response = _.assign({
        code: _.get(config, 'code', 'E_UNAUTHORIZED'),
        message: _.get(config, 'message', 'Missing or invalid authentication token'),
        data: data || {}
    }, _.get(config, 'root', {}));

    LogService.winstonLog('verbose', 'Unauthorized', {
        ip: this.req.ip,
        code: response.code,
        message: response.message
    });

    this.res.set({
        'Content-Type': 'application/json'
    });
    this.res.status(401);

    LogService.winstonLogResponse('Unauthorized', response.code, response.message,
        this.res.headers, response, this.req.ip);

    this.res.send(response);
};
