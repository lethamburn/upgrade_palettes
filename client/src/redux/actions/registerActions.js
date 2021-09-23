export const REGISTER_OK = "REGISTER_OK";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const registerOk = (post) => ({
  type: REGISTER_OK,
  payload: post,
});

export const registerError = () => ({
  type: REGISTER_ERROR,
});

export function register(user) {
  return async (dispatch) => {
    try {
      const data = user;
      /*  const response = await fetch(
        `http://localhost:4000/users/register`
      );
      const data = await response.json(); */

      dispatch(registerOk(data));
    } catch (error) {
      dispatch(registerError());
    }
  };
}
