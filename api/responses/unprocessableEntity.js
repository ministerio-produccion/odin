"use strict";

const _ = require('lodash');

/**
 * 422 (Unprocessable Entity) Response
 *
 */

module.exports = function () {
    const response = _.assign({
        meta: {
            code: 'E_UNPROCESSABLE_ENTITY',
            message: 'One or more of the provided parameters are invalid.'
        }
    });

    this.res.set({
        'Content-Type': 'application/json'
    });
    this.res.status(422);

    this.res.send(response);
};

