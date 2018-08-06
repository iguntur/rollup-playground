export default [
	{
		input: 'src/00/index.js',
		output: {
			name: 'awesomeApp',
			file: 'dist/00-bundle.js',
			format: 'iife'
		}
	},
	{
		input: 'src/01/index.js',
		output: {
			file: 'dist/01-bundle.js',
			format: 'cjs'
		}
	},
	{
		input: 'src/03/index.js',
		output: {
			file: 'dist/03-bundle.js',
			format: 'es'
		}
	}
];
