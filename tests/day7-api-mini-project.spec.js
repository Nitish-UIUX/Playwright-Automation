import { test, expect } from '@playwright/test';

import {
    BASE_URL,
    getPosts,
    getPostById,
    createPost,
    updatePost,
    patchPost,
    deletePost
} from './helpers/api.helper.js';


test.describe('Day 7 - Complete API Testing Project', () => {

    // Test 1 - GET all posts
    test('GET - Fetch all posts', async ({ request }) => {

        const response = await getPosts(request);

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(Array.isArray(responseBody)).toBeTruthy();

        expect(responseBody.length).toBe(100);

        console.log('Total Posts:', responseBody.length);

    });


    // Test 2 - GET single post
    test('GET - Fetch single post', async ({ request }) => {

        const response = await getPostById(request, 1);

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody.id).toBe(1);

        expect(responseBody.userId).toBe(1);

        expect(responseBody.title).toBeTruthy();

        console.log('Single Post:', responseBody);

    });


    // Test 3 - POST create post
    test('POST - Create new post', async ({ request }) => {

        const postData = {
            title: 'Playwright API Testing',
            body: 'Learning API automation with Playwright',
            userId: 1
        };

        const response = await createPost(request, postData);

        expect(response.status()).toBe(201);

        const responseBody = await response.json();

        expect(responseBody.title).toBe(postData.title);

        expect(responseBody.body).toBe(postData.body);

        expect(responseBody.userId).toBe(1);

        expect(responseBody.id).toBeTruthy();

        console.log('Created Post:', responseBody);

    });


    // Test 4 - PUT update post
    test('PUT - Update complete post', async ({ request }) => {

        const updateData = {
            id: 1,
            title: 'Updated Playwright Post',
            body: 'Complete post updated',
            userId: 1
        };

        const response = await updatePost(request, 1, updateData);

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody.title).toBe(updateData.title);

        expect(responseBody.body).toBe(updateData.body);

        console.log('Updated Post:', responseBody);

    });


    // Test 5 - PATCH update title
    test('PATCH - Update post title', async ({ request }) => {

        const response = await patchPost(request, 1, {
            title: 'Only Title Updated'
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody.title).toBe('Only Title Updated');

        console.log('PATCH Response:', responseBody);

    });


    // Test 6 - DELETE post
    test('DELETE - Delete post', async ({ request }) => {

        const response = await deletePost(request, 1);

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        console.log('DELETE Status:', response.status());

        console.log('DELETE Response:', responseBody);

    });


    // Test 7 - Validate API response headers
    test('GET - Validate response headers', async ({ request }) => {

        const response = await getPostById(request, 1);

        const headers = response.headers();

        expect(headers['content-type']).toContain('application/json');

        console.log('Content Type:', headers['content-type']);

    });

});

// GET all posts	---> 200
// GET single post	---> 200
// POST create post	---> 201
// PUT update post	---> 200
// PATCH update post	---> 200
// DELETE post	---> 200
// Validate headers	---> 200


