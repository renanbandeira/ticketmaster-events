import Constants from 'expo-constants';
// import * as RNLocalize from 'react-native-localize';

// const currentCountry = RNLocalize.getCountry();

const apiKey = Constants.manifest.extra.ticketmasterApiKey;
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
export const commonParams = `apikey=${apiKey}`; // countryCode=${currentCountry}

export default BASE_URL;
