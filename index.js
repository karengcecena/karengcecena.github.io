'use strict';

// Function to retrieve a DOM element by its ID
const $ = function(id) {
    return document.getElementById(id);
};

// Function to show an element by setting its display style to 'block'
const show = function(id) {
    $(id).style.display = 'block';
};

// Function to hide an element by setting its display style to 'none'
const hide = function(id) {
    $(id).style.display = 'none';
};