'use strict';

var Transaction = require('dw/system/Transaction');

function setEmbroideryProductLineItem(embroideryText, productLineItem) {
    Transaction.wrap(function () {
        if (embroideryText) {
            productLineItem.custom.embroidery = embroideryText; // eslint-disable-line
        }
    });
}

module.exports = {
    setEmbroideryProductLineItem: setEmbroideryProductLineItem
};