const phoneNumber = "234 916 080 5492"; // Nigeria +234
const textMessage = encodeURIComponent(
  "Hi! I'm interested in your products. Can you help me?"
);
export const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${textMessage}`;
