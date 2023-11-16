import axios from 'axios';

const feedbackApi = axios.create({
  baseURL: process.env.REACT_APP_FEEDBACK_API_BASE_URL
});

export const submitFeedback = async (data) => {
  try {
    const response = await feedbackApi.post(`/bot${process.env.REACT_APP_BOT_TOKEN}/sendMessage`, {
      chat_id: process.env.REACT_APP_CHAT_ID,
      text: `${data.name}\n${data.text}\n${data.phone}`,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to post feedback');
  }
};

export default feedbackApi;
