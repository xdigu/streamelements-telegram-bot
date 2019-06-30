'use strict';

const
    axios = require('axios'),
    constants = require('./constants/constants'),
    bot = require('./telegram');


const pluginsModules = {
    getUserPoints: getUserPoints,
    getStoreitems: getStoreitems
};

/**
 * Function to get how much the user has on points on Stream Elements.
 * 
 * @param {string} nickName NickName of twitch.tv.
 * 
 * @returns {string} Return how much point the user has.
 */
function getUserPoints(nickName) {
    return new Promise((resolve, reject) => {
        axios(constants.getPointsRequestOptions(nickName))
            .then(success => {
                const data = success.data;

                success.status == 200
                    ? resolve(`You have: ${data.points} points \nYour rank is: ${data.rank}`)
                    : reject(false)
            })
            .catch(error => {
                reject(error);
            });
    });
}

/**
 * Function to get items on the Stream Elements store.
 * 
 * @param {number} chatId Telegram chat id.
 * 
 * @returns {boolean} True if there is items on store and False if not.
 */
function getStoreitems(chatId) {
    return new Promise((resolve, reject) => {

        axios(constants.getStoreRequestOptions())
            .then(success => {
                const avaliable = success.data.filter(element => element.enabled == true);

                if (avaliable.length == 0 || !avaliable) {
                    resolve(false);
                } else {
                    avaliable.forEach(element => {
                        element.preview
                            ? bot.sendPhoto(
                                chatId,
                                element.preview,
                                {
                                    caption: `Name: ${element.name}\nDescription: ${element.description}\nCost: ${element.cost} points\nAvaliable quantity: ${element.quantity.current}`,
                                }
                            )
                            : bot.sendMessage(
                                chatId,
                                `There is a new Iten on Store!\nName: ${element.name}\nDescription: ${element.description}\nCost: {element.cost} points\nAvaliable quantity: ${element.quantity.current}`
                            )
                    });

                    setTimeout(() => {
                        bot.sendMessage(chatId, `Streamelements store link:\n${constants.getStoreURL()}`);
                    }, 2000);

                    resolve(true);
                }
            })
            .catch(error => reject(error));
    });
}


module.exports = pluginsModules;
