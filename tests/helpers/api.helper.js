export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getPosts(request) {
    return await request.get(`${BASE_URL}/posts`);
}

export async function getPostById(request, id) {
    return await request.get(`${BASE_URL}/posts/${id}`);
}

export async function createPost(request, data) {
    return await request.post(`${BASE_URL}/posts`, {
        data
    });
}

export async function updatePost(request, id, data) {
    return await request.put(`${BASE_URL}/posts/${id}`, {
        data
    });
}

export async function patchPost(request, id, data) {
    return await request.patch(`${BASE_URL}/posts/${id}`, {
        data
    });
}

export async function deletePost(request, id) {
    return await request.delete(`${BASE_URL}/posts/${id}`);
}