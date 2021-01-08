require('dotenv').config();

export default {
  // All values in extra will be passed to your app.
  extra: {
    ticketmasterApiKey: process.env.TICKETMASTER_API_KEY,
  },
};
