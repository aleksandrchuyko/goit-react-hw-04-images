export function countTotalFeedback(feedbacks) {
    return (Object.values(feedbacks)).reduce((total, feedback) => (total += feedback), 0);
}