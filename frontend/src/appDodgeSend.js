import { packetDodgeSend } from './packetDodgeSend';

export const getReviews = () => packetDodgeSend('/api/reviews', 'GET');
export const sendReview = (name, rating, comment) => packetDodgeSend('/api/reviews', 'POST', { name, rating, comment });
