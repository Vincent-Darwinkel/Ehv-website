import Cookies from "universal-cookie";

export const Get = async (action) => {
  try {
    const response = await fetch(action, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Jwt: new Cookies().get("Jwt")?.jwt,
      },

      redirect: "follow",
      referrerPolicy: "no-referrer",
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const Post = async (action, data = null) => {
  try {
    const response = await fetch(action, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Jwt: new Cookies().get("Jwt")?.jwt,
      },

      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: data,
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const Put = async (action, data = null) => {
  try {
    const response = await fetch(action, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Jwt: new Cookies().get("Jwt")?.jwt,
      },

      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: data,
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const Delete = async (action, data = null) => {
  try {
    const response = await fetch(action, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Jwt: new Cookies().get("Jwt")?.jwt,
      },

      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: data,
    });

    return response;
  } catch (error) {
    return error;
  }
};
