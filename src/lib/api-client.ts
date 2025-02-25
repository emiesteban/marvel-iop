import CryptoJS from "crypto-js";
import { HttpStatusCodes } from "../constants/http-status-codes";

interface RequestInit {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  credentials?: RequestCredentials;
}
const HttpStatusWithNoContent = [
  HttpStatusCodes.NO_CONTENT,
  HttpStatusCodes.RESET_CONTENT,
];

type MethodType = "GET" | "POST" | "PUT" | "DELETE";

const headers: HeadersInit = {};

export const setApiHeaders = (newHeaders: HeadersInit) => {
  Object.assign(headers, newHeaders);
};

export const apiClient = async (
  url: string,
  method?: MethodType,
  body?: unknown
) => {
  let requestOptions: RequestInit = {
    headers,
    method,
  };

  if (method === "POST" || method === "PUT" || method === "DELETE") {
    requestOptions = {
      ...requestOptions,
      headers: {
        ...requestOptions.headers,
        "Content-Type": "application/json",
      },
    } as RequestInit;
  }
  if (body) {
    requestOptions = {
      ...requestOptions,
      body: JSON.stringify(body),
    } as RequestInit;
  }
  const timestamp = new Date().getTime();
  const publicKey = "";
  const privateKey = "";
  const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
  const getUrl = () =>
    url.concat(
      url.indexOf("?") === -1 ? "?" : "&",
      `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
    );

  const response = await fetch(getUrl(), requestOptions);

  if (!response?.ok) {
    throw new Error(response.status?.toString());
  }
  return !HttpStatusWithNoContent.includes(response.status)
    ? await response.json()
    : response;
};
