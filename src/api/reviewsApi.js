import axios from 'axios';

const reviewsApi = axios.create ({
    baseURL: process.env.REACT_APP_REVIEWS_API_BASE_URL
});

export const fetchReviews = async (limit) => {
    try {
        const response = await reviewsApi.get(`/comments?limit=${limit}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed api request')
    }
};

export default reviewsApi;