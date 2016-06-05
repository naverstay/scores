let data = {
    head: {
        defaults: {
            title: 'default title',
            useSocialMetaTags: false,
            favicons: 'short',
            showSpecials: false,
            ie9: false
        }
    },
    pages: {
        list: function (fullData) {
            'use strict';

            let pages = fullData.__pages;
            let result = {};

            for (let i = 0; i < pages.length; i++) {
                if (pages[i].name === 'index') {
                    result[pages[i].name] = {
                        name: pages[i].name,
                        title: 'Index'
                    }
                } else if (pages[i].name === '_template') {
                    result[pages[i].name] = {
                        name: pages[i].name,
                        title: 'Default Title'
                    }
                }
            }

            return result;
        }
    }
};