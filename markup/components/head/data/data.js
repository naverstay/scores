let data = {
    head: {
        defaults: {
            title: 'default title',
            useSocialMetaTags: false,
            favicons: 'full',
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
                } else if (pages[i].name === 'rules') {
                    result[pages[i].name] = {
                        name: pages[i].name,
                        title: 'Rules'
                    }
                } else if (pages[i].name === 'contacts') {
                    result[pages[i].name] = {
                        name: pages[i].name,
                        title: 'Contacts'
                    }
                } else if (pages[i].name === 'about') {
                    result[pages[i].name] = {
                        name: pages[i].name,
                        title: 'About'
                    }
                } else if (pages[i].name === 'experts') {
                    result[pages[i].name] = {
                        name: pages[i].name,
                        title: 'Experts'
                    }
                }
            }

            return result;
        },
        dev: tars.options.watch.isActive
    }
};
