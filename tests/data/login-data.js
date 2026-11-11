export const loginTestData = [
    {
        testName: 'Valid login',
        username: 'standard_user',
        password: 'secret_sauce',
        expectedResult: 'success'
    },
    {
        testName: 'Invalid username',
        username: 'wrong_user',
        password: 'secret_sauce',
        expectedResult: 'error'
    },
    {
        testName: 'Invalid password',
        username: 'standard_user',
        password: 'wrong_password',
        expectedResult: 'error'
    },
    {
        testName: 'Locked out user',
        username: 'locked_out_user',
        password: 'secret_sauce',
        expectedResult: 'locked'
    }
];