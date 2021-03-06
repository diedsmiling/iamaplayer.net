var rootDir = 'frontend';
var bc = rootDir + '/bower_components';
var vendorJs = [
    bc + '/angular/angular.js',
    bc + '/ngstorage/ngStorage.js',
    bc + '/angular-animate/angular-animate.js',
    bc + '/angular-route/angular-route.js',
    bc + '/angular-cookies/angular-cookies.js'
];

module.exports = {
    front: {

        /**
         * Sources
         */

        jsSrc:      [rootDir + '/app/js/app.js', rootDir + '/app/js/**/*.js'],
        scssSrc:    rootDir + '/app/scss/',
        cssSrc:     rootDir + '/app/css',
        indexSrc:   rootDir + '/app/index.html',
        spriteSrc:  rootDir + '/app/sprite_src/*',
        tplSrc:     rootDir + '/app/js/**/*.tpl.html',
        vendorJs:   vendorJs,

        /**
         * Destinations
         */

        jsDest:     'public/js/',
        cssDest:    'public/css/',
        indexDest:  'public/app.html',
        destDir:    'public',
        imgsDest:   'public/img'
    },
    admin: {

        /**
         *  Sources
         */

        jsSrc:      [rootDir + '/admin_app/js/app.js', rootDir + '/admin_app/js/**/*.js'],
        jsAppSrc:   rootDir + 'admin_app/js/**/*.js',
        cssSrc:     rootDir + '/admin_app/css/',
        scssSrc:    rootDir + '/admin_app/scss/*.scss',
        indexSrc:   rootDir + '/admin_app/index.html',
        spriteSrc:  rootDir + '/admin_app/sprite_src/*',
        tplSrc:     rootDir + '/admin_app/js/**/*.tpl.html',
        vendorJs:   vendorJs,

        /**
         * Destinations
         */

        jsDest:     'public/admin/js/',
        cssDest:    'public/admin/css',
        indexDest:  'public/admin/app.html',
        DestDir:    'public/admin',
        imgsDest:   'public/admin/img'
    }
};
