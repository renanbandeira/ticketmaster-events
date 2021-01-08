import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(`@ticket:${key}`, String(value));
  } catch (error) {
    console.log('Error on storing data', error);
  }
};

export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(`@ticket:${key}`);
    if (value !== null) {
      return value;
    }
    return null;
  } catch (error) {
    console.log('', error);
    return null;
  }
};
