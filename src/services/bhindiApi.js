import { config } from '../config.js';

/**
 * Send a message to Bhindi API
 * @param {string} input - User message
 * @param {Array} images - Array of image URLs (optional)
 * @param {Array} pdfs - Array of PDF URLs (optional)
 * @returns {Promise<Object>} API response
 */
export async function sendToBhindiAPI(input, images = [], pdfs = []) {
  try {
    const response = await fetch(config.bhindi.apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.bhindi.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input,
        images,
        pdfs,
      }),
    });

    if (!response.ok) {
      throw new Error(`Bhindi API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error calling Bhindi API:', error);
    throw error;
  }
}
