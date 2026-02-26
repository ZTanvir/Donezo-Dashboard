const baseUrl = import.meta.env.VITE_API_ENDPOINT;

export const login = async (url: string, { arg }) => {
  const fullUrl = `${baseUrl}${url}`;

  const response = await fetch(fullUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
  if (!response.ok) throw new Error("Login failed");
  return response.json();
};
