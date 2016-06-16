"use strict";

/**
 * File
 * @description :: Model for storing File records
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
            size: 15
        },
        name: {
            type: 'string',
            required: true,
            size: 150,
            minLength: 1
        },
        description: {
            type: 'string',
            size: 350
        },
        notes: {
            type: 'string',
            size: 500
        },
        collection: {
            type: 'string',
            size: 500
        },
        visible: {
            type: 'boolean',
            defaultsTo: false
        },
        url: {
            type: 'string',
            url: true,
            size: 500
        },
        publishedAt: {
            type: 'datetime'
        },
        type: {
            model: 'filetype',
            required: true
        },
        updateFrequency: {
            model: 'updatefrequency',
            required: true
        },
        status: {
            model: 'status',
            required: true
        },
        organization: {
            model: 'organization',
            required: true
        },
        dataset: {
            model: 'dataset',
            required: true
        },
        tags: {
            collection: 'tag',
            via: 'files',
            dominant: true
        },
        owner: {
            model: 'user',
            required: true
        },
        createdBy: {
            model: 'user',
            required: true
        },

        toJSON() {
            return this.toObject();
        }
    },
    baseAttributes: {
        name: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        notes: {
            type: 'string'
        },
        collection: {
            type: 'string'
        },
        visible: {
            type: 'boolean'
        },
        url: {
            type: 'string'
        },
        publishedAt: {
            type: 'string'
        },
        type: {
            type: 'object'
        },
        updateFrequency: {
            type: 'object'
        },
        status: {
            type: 'object'
        },
        organization: {
            type: 'object'
        },
        dataset: {
            type: 'object'
        },
        tags: {
            type: 'object'
        },
        owner: {
            type: 'object'
        },
        createdBy: {
            type: 'object'
        },
    },
    setAttributes() {
        return this.baseAttributes
    },
    getAttributes() {
        return _.merge({
            id: {
                type: 'string'
            },
            createdAt: {
                type: 'datetime'
            },
            updatedAt: {
                type: 'datetime'
            }
        }, this.baseAttributes)
    },
    searchables: ['name', 'description'],

    beforeUpdate: (values, next) => next(),
    beforeCreate: (values, next) => next(),
    afterUpdate: (values, next) => {
        ZipService.createZip(values.dataset)
        next()
    },
    afterCreate: (values, next) => {
        ZipService.createZip(values.dataset)
        next();
    },
};