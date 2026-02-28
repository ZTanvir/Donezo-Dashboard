import type { LoginResponse } from "../types";

const baseUrl = import.meta.env.VITE_API_ENDPOINT;

type LoginData = {
  email: string;
  password: string;
};

export const login = async (
  url: string,
  { arg }: { arg: LoginData },
): Promise<LoginResponse> => {
  const fullUrl = `${baseUrl}${url}`;

  const response = await fetch(fullUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
  if (!response.ok) throw new Error("Login failed, please try again.");
  return response.json();
};

export const fetchDashboard = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }
  return await res.json();
};
