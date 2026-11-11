export const loginTestData = [
    {
        testName: 'Valid login',
        username: 'standard_user',
        password: 'secret_sauce',
        expectedResult: 'success'
    },
    {
        testName: 'Invalid username',
        username: 'invalid_user',
        password: 'secret_sauce',
        expectedResult: 'failure'
    },
    {
        testName: 'Invalid password',
        username: 'standard_user',
        password: 'wrong_password',
        expectedResult: 'failure'
    },
    {
        testName: 'Locked out user',
        username: 'locked_out_user',
        password: 'secret_sauce',
        expectedResult: 'failure'
    }
];

export const checkoutTestData = {
    username: 'standard_user',
    password: 'secret_sauce',

    customer: {
        firstName: 'John',
        lastName: 'Smith',
        postalCode: '110001'
    },

    product: 'Sauce Labs Backpack'
};