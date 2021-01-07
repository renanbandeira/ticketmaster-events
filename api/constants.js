import Constants from 'expo-constants';

const apiKey = Constants.manifest.extra.ticketmasterApiKey;
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
export const commonParams = `apikey=${apiKey}`;

export default BASE_URL;
