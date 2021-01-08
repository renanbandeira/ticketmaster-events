import axios from 'axios';
import { fetchEvents } from '../events';

jest.mock('axios');
jest.mock('expo-constants', () => ({
  manifest: {
    extra: {
      ticketmasterApiKey: 'apiKey'
    }
  }
}));

describe('fetch events', () => {
  it('fetches successfully events from server', async () => {
    const response = {
      _embedded: {
        events: [{
          name: 'Disney'
        }]
      }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    await expect(fetchEvents(0, 'Disney')).resolves.toEqual(response);
  });

  it('fetches erroneously events from server', async () => {
    const errorMessage = 'Network Error';
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
    await expect(fetchEvents()).rejects.toThrow(errorMessage);
  });
});
