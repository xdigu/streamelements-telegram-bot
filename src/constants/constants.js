'use strict'

const
    StreamElements = require('./../streamElements'),
    streamer = process.env.STREAMER || require('./envConfig.json').STREAMER;


const constants = {
    getPointsRequestOptions: getPointsRequestOptions,
    getStoreRequestOptions: getStoreRequestOptions,
    getStoreURL: getStoreURL
};


const streamElements = new StreamElements(streamer);


/**
 * Function to get axios options
 * 
 * @param {string} nickName Twitch user nickname
 * 
 * @returns {object} return an object to do a axios request 
 */
function getPointsRequestOptions(nickName) {
    const options = {
        method: 'GET',
        baseURL: streamElements.baseURL,
        url: streamElements.getPointsURL(nickName)
    };

    return options;
}

/**
 * Function to get axios options
 * 
 * @returns {object} return an object to do a axios request 
 */
function getStoreRequestOptions() {
    const options = {
        method: 'GET',
        baseURL: streamElements.baseURL,
        url: streamElements.getStoreItemsURL()
    };

    return options;
}

function getStoreURL() {
    const storeURL = streamElements.getStoreURL();

    return storeURL;
}

module.exports = constants;
