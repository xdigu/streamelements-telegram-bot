'use strict';

const axios = require('axios');


class StreamElements {
    constructor(twitchStreamerNick) {
        this.twitchStreamerNick = twitchStreamerNick;
        this.twitchStreamerId = '';
        this.baseURL = 'https://api.streamelements.com/kappa/v2/';

        const options = {
            method: 'GET',
            baseURL: this.baseURL,
            url: `/channels/${this.twitchStreamerNick}`,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        };

        axios(options)
            .then(response => this.twitchStreamerId = response.data._id)
            .catch(error => console.log(error));
    }

    getStoreItemsURL() {
        const storeURL = `/store/${this.twitchStreamerId}/items`;

        return storeURL;
    }

    getPointsURL(nickName) {
        const pointsURL = `/points/${this.twitchStreamerId}/${nickName}`;

        return pointsURL;
    }

    getStoreURL() {
        const storeURL = `https://streamelements.com/${this.twitchStreamerNick}/store`;

        return storeURL;
    }
}

module.exports = StreamElements;
