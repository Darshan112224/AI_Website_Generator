import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api'; // Ensure the base URL matches the backend configuration

export const generate_Website = async (description, techStack) => {
  try {
    const response = await axios.post(`${BASE_URL}/generate_website/`, {
      description: description, // This matches the backend key
      tech_stack: techStack,    // This matches the backend key
    });
    return response.data.generated_code;  // Assuming the response has 'generated_code'
  } catch (error) {
    console.error('Error generating code:', error.response?.data || error.message);
    throw error;
  }
};
