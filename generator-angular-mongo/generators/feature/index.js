'use strict';
const Generator = require('yeoman-generator');
const _ = require('lodash');
const featureGenerator = require('./generator');

_.mixin(require('lodash-inflection'));

module.exports = class extends Generator {
	prompting() {


		const prompts = [{
			type: 'input',
			name: 'feature',
			message: 'Enter a name for the Feature',
			default: 'Comment'
		},
		{
			type: 'input',
			name: 'useAuth0',
			message: 'Use Auth0',
			default: 'false'
		}
		];

		return this.prompt(prompts).then(props => {
			this.props = props;
});
	}
	writing() {


		var feature = require('../models/' + this.props.feature + '.json');

		featureGenerator.generate(this, feature);
	}
};
