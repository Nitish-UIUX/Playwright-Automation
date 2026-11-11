import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { loginTestData } from '../data/login-data.js';

test.describe('Day 9 - POM Data Driven Login', () => {

    for (const data of loginTestData) {

        test(data.testName, async ({ page }) => {

            const loginPage = new LoginPage(page);

            await loginPage.open();

            await loginPage.login(
                data.username,
                data.password
            );

            if (data.expectedResult === 'success') {

                await expect(page).toHaveURL(/inventory.html/);

            } else {

                await expect(loginPage.errorMessage).toBeVisible();

            }

        });

    }

});


// Why separate test data ? 
//  Without separation                   	    With separation

// Data mixed with test logic  ------------>  Data stored independently
// Difficult to update scenarios ---------->  Easy to add or modify data
// Repeated test code  -------------------->  Reusable test structure
// Harder to maintain  -------------------->  Easier to maintain