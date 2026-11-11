
import { test, expect } from '@playwright/test';

test.describe('Day 11 - API Testing Basics', () => {

    test('GET all posts', async ({ request }) => {

        const response = await request.get(
            'https://jsonplaceholder.typicode.com/posts'
        );

        expect(response.status()).toBe(200);

        const posts = await response.json();

        expect(posts.length).toBe(100);

        console.log('Total posts:', posts.length);

    });

    test('GET single post', async ({ request }) => {

        const response = await request.get(
            'https://jsonplaceholder.typicode.com/posts/1'
        );

        expect(response.status()).toBe(200);

        const post = await response.json();

        expect(post.id).toBe(1);

        expect(post.title).toBeTruthy();

        console.log('Post title:', post.title);

    });

    test('GET posts using query parameters', async ({ request }) => {

        const response = await request.get(
            'https://jsonplaceholder.typicode.com/posts',
            {
                params: {
                    userId: 1
                }
            }
        );

        expect(response.status()).toBe(200);

        const posts = await response.json();

        expect(posts.length).toBeGreaterThan(0);

        expect(
            posts.every(post => post.userId === 1)
        ).toBeTruthy();

        console.log('Filtered posts:', posts.length);

    });

});
