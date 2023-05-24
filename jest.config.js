/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverage: true,
	coverageThreshold: {
		global: {
			lines: 90,
		},
	},
};
  