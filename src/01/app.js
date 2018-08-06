export default () => {
	return new Promise((resolve, reject) => {
		const version = 'v1';
		const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam eligendi quam.';

		resolve({version, description});
	});
};
