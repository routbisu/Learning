const assert = require('assert');
const User = require('../src/user');

describe('Creating users', () => {
    it('Saves a user', () => {
        const joe = new User({ name: 'Joe' });
        joe.save();

        assert(joe.isNew);
    });
});