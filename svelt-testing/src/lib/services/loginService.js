const BASE_URL = 'http://localhost:8080/api/';

/**
 @param {string} endpoint
 @param {Object} data
 @returns {Promise<Object>}
 */
export async function login(endpoint, data) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',},
            //body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        //return await response.json();
        return await response;
    } 
    catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}
