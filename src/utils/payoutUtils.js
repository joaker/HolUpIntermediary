const generateSenderBatchId = () => {
    return `HolUp_Payout_${Math.random()}`;
}

const generateSenderItemId = () => {
    const senderItemId = Math.random().toString().slice(2, 62 + 2);
    return senderItemId;
}

module.exports = {
    generateSenderBatchId,
    generateSenderItemId,
}