module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			example: {
				port: 1337,
				base: '.'
			}
		},
		open: {
			dev: {
				path: 'http://localhost:1337/app/'
			}
		},
		tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            files: {
                src: [
                    "app/src/*.ts",
										"app/src/controllers/*.ts",
										"app/src/config/*.ts",
										"app/components/**/*.ts",
                ]
            }
      },
			protractor: {
		    options: {
		      configFile: "tests/e2e/protractor.conf.js",
		      keepAlive: true,
		      noColor: false,
		      args: {}
		    },
		    your_target: {
		      options: {
		        configFile: "tests/e2e/protractor.conf.js",
		        args: {}
		      }
		    }
		  },
			karma: {
			  unit: {
			    options: {
			      frameworks: ['jasmine'],
			      singleRun: true,
			      browsers: ['PhantomJS'],
			      files: [
			        'node_modules/angular/angular.js',
							'node_modules/angular-aria/angular-aria.js',
							'node_modules/angular-animate/angular-animate.js',							
							'node_modules/angular-material/angular-material.js',
			        'node_modules/angular-mocks/angular-mocks.js',
							'app/components/test/*.js',
			        'app/components/test/**/*.js',

							'tests/unit/*.spec.js'
			      ]
			    }
			  }
			}
	});

	grunt.loadNpmTasks('grunt-connect');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks("grunt-tslint");
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('run', ['open', 'connect']);
	grunt.registerTask('test', ['tslint', 'karma', 'protractor']);
	grunt.registerTask('default', ['run']);
};
