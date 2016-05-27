"use strict";

/**
 * Dataset
 * @description :: Model for storing Dataset records
 */

var shortId = require('shortid');

module.exports = {
    schema: true,

    attributes: {
        id: {
            type: 'string',
            unique: true,
            index: true,
            defaultsTo: shortId.generate,
            primaryKey: true,
            size: 15,
            minLength: 14
        },
        name: {
            type: 'string',
            required: true,
            size: 150,
            minLength: 1
        },
        description: {
            type: 'string',
            size: 350,
            minLength: 3
        },
        notes: {
            type: 'string',
            size: 500,
            minLength: 3
        },
        visible: {
            type: 'boolean',
            defaultsTo: false
        },
        starred: {
            type: 'boolean',
            defaultsTo: false
        },
        optional1: {
            type: 'string',
            size: 500,
            minLength: 1
        },
        optional2: {
            type: 'string',
            size: 500,
            minLength: 1
        },
        optional3: {
            type: 'string',
            size: 500,
            minLength: 1
        },
        optional4: {
            type: 'string',
            size: 500,
            minLength: 1
        },
        optional5: {
            type: 'string',
            size: 500,
            minLength: 1
        },
        optional6: {
            type: 'string',
            size: 500,
            minLength: 1
        },
        optional7: {
            type: 'string',
            size: 500,
            minLength: 1
        },
        optional8: {
            type: 'string',
            size: 500,
            minLength: 1
        },
        optional9: {
            type: 'string',
            size: 500,
            minLength: 1
        },
        optional10: {
            type: 'string',
            size: 500,
            minLength: 1
        },
        publishedAt: {
            type: 'datetime'
        },
        category: {
            model: 'category'
        },
        status: {
            model: 'status'
        },
        files: {
            collection: 'file',
            via: 'dataset'
        },
        tags: {
            collection: 'tag',
            via: 'datasets',
            dominant: true
        },
        owner: {
            model: 'user',
            required: true
        },
        createdBy: {
            model: 'user'
        },

        toJSON() {
            return this.toObject();
        }
    },

    beforeUpdate: (values, next) => next(),
    beforeCreate: (values, next) => next()
};