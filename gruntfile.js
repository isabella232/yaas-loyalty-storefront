

    var path = require('path');

    var host = process.env.VCAP_APP_HOST || 'localhost';
    var port = process.env.VCAP_APP_PORT || 9099;

    module.exports = function (grunt) {

        var paths = {

            cwd: './',

            dists: {

                prepare: './dist',
                dev: './dist/dev',
                test: './dist/test'
            }
        };

        paths['publicSource'] = './public';
        paths['webLibs'] = paths.publicSource + '/js/vendor';
        paths['storeConfig'] = paths.publicSource + '/js/app/shared/app-config.js';
        paths['manifestConfig'] = paths.cwd + '/manifest.yml';
        paths['loyaltyConfigsSrc'] = paths.publicSource + '/js/app/loyalty/services/loyalty-config-raw.js';
        paths['loyaltyConfigsDest'] = paths.publicSource + '/js/app/loyalty/services/loyalty-config.js';
        paths['loyaltyLangsSrc'] = paths.publicSource + '/js/app/loyalty/constants/src';
        paths['loyaltyLangsDest'] = paths.publicSource + '/js/app/loyalty/constants';





        var appConfigs = {

            test: {

                baseUrl: 'api.yaas.io',
                tenant: 'saploytest',
                clientId: 'jrNTWJ3gklQe5m3MAJ8J7MWsR4tM1q5b',
                redirectURI: 'https://loyaltyshoptest.yaas.io'
            },

            dev: {

                baseUrl: 'api.stage.yaas.io',
                tenant: 'saploydev',
                clientId: 'T2kXYhbrAOCntbgN7lwwxxi6xOfyIFAE',
                redirectURI: 'https://loyaltystoredev.stage.yaas.io'
            },

            live: {

                baseUrl: 'api.yaas.io',
                tenant: 'cecloyaltylive',
                clientId: 'bgEPWS2OwUsK5lXoZ1oXfJFwY9smlBf4',
                redirectURI: 'https://loyaltyshop.yaas.io'
            },

            hfx: {

                baseUrl: 'api.yaas.io',
                tenant: 'saployaltytest',
                clientId: 'gvv4VTDHbTAzooa6Td3vVZEnpxfdiQLV',
                redirectURI: 'https://loyaltyshoptest.yaas.io'
            }
        };

        var manifestConfigs = {

            test: {
               
                name: 'loyaltyshoptest',
                host: 'loyaltyshoptest',
                domain: 'yaas.io',
                url: 'loyaltyshoptest.yaas.io'
            },

            dev: {
               
                name: 'loyaltystoredev',
                host: 'loyaltystoredev',
                domain: 'stage.yaas.io',
                url: 'loyaltystoredev.stage.yaas.io'
            },

            live: {
               
                name: 'loyaltyshop',
                host: 'loyaltyshop',
                domain: 'yaas.io',
                url: 'loyaltyshop.yaas.io'
            },

            hfx: {
               
                name: 'loyaltystorehfx',
                host: 'loyaltystorehfx',
                domain: 'yaas.io',
                url: 'loyaltyshoptest.yaas.io'
            }
        };


        var configs = {

            app: {

                baseUrl: '',
                tenant: '',
                clientId: '',
                redirectURI: '',
            },

            manifest: {

                name: '',
                host: '',
                domain: '',
                url: ''
            },
           
            urls: '',

            langs: {

                supported: [ 'en', 'de' ],
                filePrefix: '',
                fileSuffix: '.json'
            }
        };



       




        grunt.initConfig({


            pkg: grunt.file.readJSON('package.json'),


            exec: {

                bowerInstall: 'bower install',
            },

            wiredep: {
 
                task: {

                    directory: paths.webLibs,

                    src: [
                        paths.publicSource + '/index.html'
                    ],

                    overrides: {

                        'jquery-ui': {
                            main: [
                                'jquery-ui.js',
                                'themes/base/jquery-ui.min.css'
                            ]
                        },

                        'algoliasearch': {

                            main: [
                                'dist/algoliasearch.angular.js'
                            ]
                        }
                    }
                }
            },

            replace: {

                urlConfig: {

                    src: [ paths.loyaltyConfigsSrc ],
                    dest: [ paths.loyaltyConfigsDest ],
                    replacements: [{
                        from: /<Configs>/g,
                        to: function () {
                            return ' Dynamic Configurations\n<%= configs.urls %>';
                        }
                    }]
                },

                appConfig: {

                    src: [ paths.storeConfig ],
                    overwrite: true,
                    replacements: [{
                        from: /StartDynamicDomain(.*)EndDynamicDomain/g,
                        to: 'StartDynamicDomain*/ \'<%= configs.app.baseUrl %>\' /*EndDynamicDomain'
                    }, {
                        from: /StartProjectId(.*)EndProjectId/g,
                        to: 'StartProjectId*/ \'<%= configs.app.tenant %>\' /*EndProjectId'
                    }, {
                        from: /StartClientId(.*)EndClientId/g,
                        to: 'StartClientId*/ \'<%= configs.app.clientId %>\' /*EndClientId'
                    }, {
                        from: /StartRedirectURI(.*)EndRedirectURI/g,
                        to: 'StartRedirectURI*/ \'<%= configs.app.redirectURI %>\' /*EndRedirectURI'
                    }]
                },

                manifestConfig: {

                    src: [ paths.manifestConfig ],
                    overwrite: true,
                    replacements: [{
                        from: /name:(.*)(\n)?/g,
                        to: 'name: <%= configs.manifest.name %>'
                    },{
                        from: /host:(.*)(\n)?/g,
                        to: 'host: <%= configs.manifest.host %>'
                    },{
                        from: /domain:(.*)(\n)?/g,
                        to:  'domain: <%= configs.manifest.domain %>'
                    },{
                        from: /url:(.*)(\n)?/g,
                        to:  'url: <%= configs.manifest.url %>'
                    }]
                },
            },

            cssmin: {

                prepare: {

                    files: [

                        {
                            dest: paths.publicSource + '/css/app/store.min.css',

                            src: [

                                paths.publicSource + '/css/app/style.css',
                                paths.publicSource + '/js/app/loyalty/css/loyalty.css'
                            ]
                        }
                    ]
                }
            },
           
            ngtemplates: {

                app: {

                    cwd: paths.publicSource,
                    src: 'js/app/**/*.html',
                    dest: paths.publicSource + '/js/app/templates.js',
                    options: {
                        module: 'ds.app'
                    }
                }
            },

            concat: {

                prepare: {

                    files: [

                        {
                            dest: paths.publicSource + '/js/app/store.min.js',

                            src: [

                                paths.publicSource + '/js/app/auth/auth-index.js',
                                paths.publicSource + '/js/app/auth/controllers/auth-modal-dialog-ctrl.js',
                                paths.publicSource + '/js/app/auth/controllers/password-reset-ctrl.js',
                                paths.publicSource + '/js/app/auth/controllers/password-update-ctrl.js',
                                paths.publicSource + '/js/app/auth/controllers/password-reset-update-ctrl.js',
                                paths.publicSource + '/js/app/auth/directives/confirm-input.js',
                                paths.publicSource + '/js/app/auth/directives/create-account.js',
                                paths.publicSource + '/js/app/auth/services/auth-rest.js',
                                paths.publicSource + '/js/app/auth/services/token-service.js',
                                paths.publicSource + '/js/app/auth/services/session-service.js',
                                paths.publicSource + '/js/app/auth/services/auth-service.js',
                                paths.publicSource + '/js/app/auth/services/anon-auth-service.js',
                                paths.publicSource + '/js/app/auth/services/auth-dialog-manager.js',

                                paths.publicSource + '/js/app/addresses/addresses-index.js',

                                paths.publicSource + '/js/app/addresses/directives/localized-addresses.js',



                                paths.publicSource + '/js/app/account/account-index.js',
                                paths.publicSource + '/js/app/account/controllers/account-ctrl.js',
                                paths.publicSource + '/js/app/account/controllers/account-order-detail-ctrl.js',

                                paths.publicSource + '/js/app/account/controllers/dialogs/address-remove-dialog-ctrl.js',
                                paths.publicSource + '/js/app/account/controllers/modals/edit-user-email-dialog-ctrl.js',
                                paths.publicSource + '/js/app/account/controllers/modals/edit-user-name-dialog-ctrl.js',

                                paths.publicSource + '/js/app/account/services/account-service.js',
                                
                                paths.publicSource + '/js/app/account/directives/customer-details/customer-details-ctrl.js',
                                paths.publicSource + '/js/app/account/directives/customer-details/customer-details-directive.js',


                                paths.publicSource + '/js/app/home/home-index.js',
                                paths.publicSource + '/js/app/home/controllers/home-ctrl.js',
                                paths.publicSource + '/js/app/home/services/home-svc.js',
                                paths.publicSource + '/js/app/home/directives/site-content-image-directive.js',



                                paths.publicSource + '/js/app/products/products-index.js',
                                paths.publicSource + '/js/app/products/controllers/browse-products-ctrl.js',
                                paths.publicSource + '/js/app/products/controllers/product-detail-ctrl.js',
                                paths.publicSource + '/js/app/products/services/product-service.js',
                                paths.publicSource + '/js/app/products/services/price-service.js',
                                paths.publicSource + '/js/app/products/services/price-product-rest.js',
                                paths.publicSource + '/js/app/products/services/category-service.js',
                                paths.publicSource + '/js/app/products/services/product-attribute-service.js',
                                paths.publicSource + '/js/app/products/directives/product-attribute.js',
                                paths.publicSource + '/js/app/products/directives/product-attribute-group.js',
                                paths.publicSource + '/js/app/products/directives/product-attribute-groups.js',




                                paths.publicSource + '/js/app/cart/cart-index.js',
                                paths.publicSource + '/js/app/cart/controllers/cart-ctrl.js',
                                paths.publicSource + '/js/app/cart/directives/cart-auto-toggle.js',
                                paths.publicSource + '/js/app/cart/services/cart-rest.js',
                                paths.publicSource + '/js/app/cart/services/cart-service.js',

                                paths.publicSource + '/js/app/orders/orders-index.js',
                                paths.publicSource + '/js/app/orders/services/order-list-service.js',
                                paths.publicSource + '/js/app/orders/services/orders-rest.js',

                                paths.publicSource + '/js/app/checkout/checkout-index.js',
                                paths.publicSource + '/js/app/checkout/controllers/checkout-base-ctrl.js',
                                paths.publicSource + '/js/app/checkout/controllers/checkout-ctrl.js',
                                paths.publicSource + '/js/app/checkout/controllers/checkout-cart-ctrl.js',
                                paths.publicSource + '/js/app/checkout/controllers/checkout-edit-cart-ctrl.js',
                                paths.publicSource + '/js/app/checkout/services/checkout-service.js',
                                paths.publicSource + '/js/app/checkout/directives/address-decorator.js',
                                paths.publicSource + '/js/app/checkout/directives/inline-error-input.js',
                                paths.publicSource + '/js/app/checkout/directives/mobile-checkout-wizard.js',
                                paths.publicSource + '/js/app/checkout/services/checkout-rest.js',
                                paths.publicSource + '/js/app/checkout/services/checkout-service.js',

                                paths.publicSource + '/js/app/confirmation/confirmation-index.js',
                                paths.publicSource + '/js/app/confirmation/controllers/confirmation-ctrl.js',
                                paths.publicSource + '/js/app/confirmation/services/order-details-svc.js',
                                paths.publicSource + '/js/app/confirmation/services/order-details-rest.js',
                                paths.publicSource + '/js/app/confirmation/directives/summary-align.js',


                                paths.publicSource + '/js/app/coupons/coupon-index.js',
                                paths.publicSource + '/js/app/coupons/controllers/coupon-ctrl.js',
                                paths.publicSource + '/js/app/coupons/services/coupon-service.js',
                                paths.publicSource + '/js/app/coupons/services/coupon-rest.js',

                                paths.publicSource + '/js/app/errors/backendStub.js',
                                paths.publicSource + '/js/app/errors/controllers/errors-ctrl.js',

                                paths.publicSource + '/js/app/search/search-index.js',
                                paths.publicSource + '/js/app/search/controllers/search-list-ctrl.js',


                                paths.publicSource + '/js/app/shipping/services/shipping-rest.js',
                                paths.publicSource + '/js/app/shipping/services/shipping-service.js',


                                paths.publicSource + '/js/app/shared/shared-index.js',
                                paths.publicSource + '/js/app/shared/router.js',
                                paths.publicSource + '/js/app/shared/settings.js',
                                paths.publicSource + '/js/app/shared/app-config.js',
                                paths.publicSource + '/js/app/shared/site-config.js',
                                paths.publicSource + '/js/app/shared/http-proxy.js',
                                paths.publicSource + '/js/app/shared/directives/quantity-input.js',
                                paths.publicSource + '/js/app/shared/directives/menu-aim.js',
                                paths.publicSource + '/js/app/shared/directives/match-background.js',
                                paths.publicSource + '/js/app/shared/directives/sticky-navigation.js',
                                paths.publicSource + '/js/app/shared/directives/infinite-scrolling-visible-items.js',
                                paths.publicSource + '/js/app/shared/directives/ngRepeat-rendering-finished.js',
                                paths.publicSource + '/js/app/shared/directives/y-breadcrumb.js',
                                paths.publicSource + '/js/app/shared/directives/y-tracking.js',
                                paths.publicSource + '/js/app/shared/directives/y-search.js',
                                paths.publicSource + '/js/app/shared/directives/popover.js',
                                paths.publicSource + '/js/app/shared/directives/y-inputs-dir.js',

                                paths.publicSource + '/js/app/shared/directives/force-scroll.js',
                                paths.publicSource + '/js/app/shared/directives/site-selector/site-selector-ctrl.js',
                                paths.publicSource + '/js/app/shared/directives/site-selector/site-selector-directive.js',
                                paths.publicSource + '/js/app/shared/directives/site-selector/site-selector-service.js',

                                paths.publicSource + '/js/app/shared/services/cookie-svc.js',
                                paths.publicSource + '/js/app/shared/services/global-data.js',
                                paths.publicSource + '/js/app/shared/services/configuration-service.js',
                                paths.publicSource + '/js/app/shared/services/configuration-rest.js',
                                paths.publicSource + '/js/app/shared/services/site-settings-rest.js',
                                paths.publicSource + '/js/app/shared/services/http-queue.js',
                                paths.publicSource + '/js/app/shared/services/event-service.js',
                                paths.publicSource + '/js/app/shared/services/local-storage.js',

                                paths.publicSource + '/js/app/shared/services/site-selector-service.js', 

                                paths.publicSource + '/js/app/shared/controllers/sidebar-navigation-ctrl.js',
                                paths.publicSource + '/js/app/shared/controllers/top-navigation-ctrl.js',
                                paths.publicSource + '/js/app/shared/controllers/site-selector-ctrl.js', 

                                paths.publicSource + '/js/app/shared/filters/filters.js',
                                paths.publicSource + '/js/app/shared/filters/show-number-of-items-filter.js',
                                paths.publicSource + '/js/app/shared/filters/sum-by-key-filter.js',

                                paths.publicSource + '/js/app/shared/i18n/i18-index.js',
                                paths.publicSource + '/js/app/shared/i18n/i18-constants.js',
                                paths.publicSource + '/js/app/shared/i18n/lang/en.js',
                                paths.publicSource + '/js/app/shared/i18n/lang/de.js',
                                paths.publicSource + '/js/app/shared/i18n/providers/translation-provider.js',


                                paths.publicSource + '/js/app/loyalty/loyalty-index.js',

                                paths.publicSource + '/js/app/loyalty/constants/de.js',
                                paths.publicSource + '/js/app/loyalty/constants/en.js',

                                paths.publicSource + '/js/app/loyalty/services/loyalty-config.js',
                                paths.publicSource + '/js/app/loyalty/services/loyalty-service.js',
                                paths.publicSource + '/js/app/loyalty/services/loyalty-rest.js',
                                paths.publicSource + '/js/app/loyalty/services/rest-service.js',
                                paths.publicSource + '/js/app/loyalty/services/token-service.js',
                                paths.publicSource + '/js/app/loyalty/services/utilities.js',

                                paths.publicSource + '/js/app/loyalty/controllers/loyalty-program-ctrl.js',
                                paths.publicSource + '/js/app/loyalty/controllers/checkout-ctrl.js',
                                paths.publicSource + '/js/app/loyalty/controllers/loyalty-user-ctrl.js',
                                paths.publicSource + '/js/app/loyalty/controllers/reward-history-ctrl.js',
                                paths.publicSource + '/js/app/loyalty/controllers/rewards-points-ctrl.js',
                                paths.publicSource + '/js/app/loyalty/controllers/cart-ctrl.js',
                                paths.publicSource + '/js/app/loyalty/controllers/confirmation-ctrl.js',
                                paths.publicSource + '/js/app/loyalty/controllers/signup-checkout-ctrl.js',
                                paths.publicSource + '/js/app/loyalty/controllers/checkout-cart-ctrl.js',
                                paths.publicSource + '/js/app/loyalty/controllers/review-rating-ctrl.js',
                                paths.publicSource + '/js/app/loyalty/controllers/order-detail-ctrl.js',
                                paths.publicSource + '/js/app/loyalty/controllers/google-wallet-ctrl.js',

                                paths.publicSource + '/js/app/loyalty/directives/multipleEmails.js',
                                paths.publicSource + '/js/app/loyalty/directives/ng-tags-input.js',

                                paths.publicSource + '/js/bootstrap.js',
                                paths.publicSource + '/js/app/app.js',
                                paths.publicSource + '/js/app/templates.js',
                            ]
                        },
                    ]
                }
            },

            uglify: {

                options: {
                    mangle: false
                },

                prepare: {
                    src : paths.publicSource + '/js/app/store.min.js',
                    dest : paths.publicSource + '/js/app/store.min.js'
                }
            },

            clean: {

                prepare: {
                    files: [
                        {
                            dot: true,
                            src: [ '.tmp', 'dist/*' ]
                        }
                    ]
                }
            },

            copy: {

                prepare: {

                    dot: true,
                    expand: true,
                    cwd: paths.cwd,
                    src: [ '!**', 'server.js', 'bower.json', 'package_dist.json', 'gruntfile_dist.js', '*.cfignore', '*.buildpacks', '*.bowerrc', '*.yml' ],
                    dest: paths.dists.prepare,
                    rename: function (dest, src) {

                        var isDist = src.indexOf('_dist');

                        if ( isDist >= 0 ) {
                            src = src.substr(0, isDist) + '.' + src.split('.')[1]
                        }

                        var file = dest + '/' + src;
                        return file;
                    }
                },

                forEnv: {

                    dot: true,
                    expand: true,
                    cwd: paths.publicSource,
                    src: [ '!**', 'index.html', 'favicon.ico', 'img', 'img/**', 'img/*.*', 'css', 'css/fonts', 'css/fonts/**', '!css/app/*.*', 'js', 'js/**', '!js/bootstrap.js', '!js/app/**', '!js/app/**/*.html', 'js/app/store.min.js', 'css/app/store.min.css' ],
                    dest: paths.dists.prepare + '/public'
                }
            },

            express: {

                options: {
                    port: port,
                    hostname: host
                },

                run: {

                    options: {
                        server: path.resolve('./server.js'),
                        serverreload: true,
                        bases: [path.resolve('./server.js')]
                    }
                },
            },

            watch: {

                prepare: {

                    files: [

                        paths.publicSource + '/js/app/**',

                        '!' + paths.publicSource + '/js/app/templates.js',
                        '!' + paths.publicSource + '/js/app/store.min.js',
                        '!' + paths.publicSource + '/css/app/store.min.css'
                    ],

                    tasks: [ 'watcher' ]
                }
            },

            concurrent: {

                run: {

                    tasks: ['express:run', 'watch:prepare'],

                    options: {
                        logConcurrentOutput: true
                    }
                }
            }
        });





        grunt.option('force', true);

        require('load-grunt-tasks')(grunt);

        
        
        grunt.registerTask('default', 'Hello', function() {
            grunt.log.writeln('Loyalty Store.').ok();            
        });

        grunt.registerTask('resolve', [
            'exec:bowerInstall',
            'wiredep'
        ]);

        grunt.registerTask('config', 'Load the configuration into the file', function(env) {

            configs.app = appConfigs[env];
            configs.manifest = manifestConfigs[env];
            configs.urls = grunt.file.read('./configs/urls/' + env + '.js');

            grunt.config('configs', configs);
            grunt.config('currentEnv', env);

            grunt.task.run( [ 'replace:urlConfig', 'replace:appConfig', 'replace:manifestConfig' ] );
        });

        grunt.registerTask('translation', 'Load the translation files', function() {

            var fs = require('fs');
            var stripJSONComments = require('strip-json-comments');

            for (var i = 0; i < configs.langs.supported.length; i++ ) {

                var sourceFile = paths.loyaltyLangsSrc + '/' + configs.langs.filePrefix + configs.langs.supported[i] + configs.langs.fileSuffix;
                var destFile = paths.loyaltyLangsDest + '/' + configs.langs.filePrefix + configs.langs.supported[i] + '.js';

                var translationWithComments = fs.readFileSync(sourceFile, 'utf8');
                var translationWithoutComments = JSON.parse(stripJSONComments(translationWithComments));

                var finalTranslation = 'angular.module(\'ds.loyalty\')' + '.constant(\'TranslationLoyalty' + configs.langs.supported[i].toUpperCase() + '\', ' + JSON.stringify(translationWithoutComments, null, 2) + ');';

                fs.writeFileSync(destFile, finalTranslation);
            }
        });

        grunt.registerTask('watcher', 'watch the envinronment for local development', function () {            
            grunt.task.run( [ 'ngtemplates', 'cssmin:prepare', 'concat:prepare' ]);
        });

        grunt.registerTask('prepare', 'Prepare the envinronment for local development', function (env) {

            var configForEnv = 'config:' + env;
            grunt.task.run( [ 'ngtemplates', 'cssmin:prepare', configForEnv, 'concat:prepare' ]);
        });

        grunt.registerTask('build', 'Build for the envinronment for the deployement', function (env) {

            var configForEnv = 'config:' + env;
            var copyForEnv = 'copy:' + 'forEnv';
            grunt.task.run( [ 'ngtemplates', 'cssmin:prepare', configForEnv, 'translation', 'concat:prepare', 'uglify:prepare', 'clean:prepare', 'copy:prepare', copyForEnv ] );
        });

        grunt.registerTask('run', 'Run for the envinronment for the deployement', function (env) {

            var prepareForEnv = 'prepare:' + env;
            grunt.task.run( [ prepareForEnv, 'concurrent:run' ] );
        });
    };
