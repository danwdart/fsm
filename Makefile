all:
	node_modules/babel-cli/bin/babel.js test.es > test.js
	node_modules/babel-cli/bin/babel.js index.es > index.js
