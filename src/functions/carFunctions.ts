export const computeValue = (model: string, year: number) => {
	const mdl = computeModel(checkModel(model));
	const yr = checkYear(year);

	if (typeof mdl !== 'number' || typeof yr !== 'number') {
		throw 'Make sure to input model (string) and year (number) correctly.';
	}

	const result = mdl + yr;

	if (!result) {
		throw 'Make sure to input model and year correctly.';
	}

	if (result === Infinity) {
		throw new RangeError('The result is infinity');
	}

	return result;
};

const checkModel = (str: string) => {
	if (str === '') throw 'Model is empty.';
	if (typeof str === 'string' && /^[a-zA-Z]+$/.test(str)) {
		return str;
	} else {
		throw 'Please input a valid model. A string of alphabet with no spaces is accepted.';
	}
};

const checkYear = (num: number) => {
	const currentDate = new Date();
	if (num === undefined) throw 'Year is empty.';
	if (num < 1950 || num > currentDate.getFullYear())
		throw `Please input a valid year from 1950 to ${currentDate.getFullYear()}`;
	if (typeof num !== 'number') throw 'Year should be a number.';
	return num;
};

const computeModel = (str: string) => {
	checkModel(str);
	let output = 0;
	const char = str.toUpperCase().split('');
	char.map((char) => {
		output += char.charCodeAt(0) - 64;
	});
	return output * 100;
};
