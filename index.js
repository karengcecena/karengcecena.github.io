'use strict';

const $ = function(id) {
    return document.getElementById(id);
};

const show = function(id) {
    $(id).style.display = 'block';
};

const hide = function(id) {
    $(id).style.display = 'none';
};