export const RECEBER_API = 'RECEBER_API';

const receiveApi = (payload) => ({
  type: RECEBER_API,
  payload });
export function fetchAPI() {
  return async (dispatch) => {
    try {
      const request = await fetch('https://economia.awesomeapi.com.br/json/all');
      const response = await request.json();
      dispatch(receiveApi(response));
    } catch (error) {
      console.error(error);
    }
  };
}
