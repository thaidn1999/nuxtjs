import type { ListType } from "../../interfaces";

export default defineEventHandler(async (event): Promise<ListType> => {
  const TMDB_API_URL = process.env.BASE_URL;

  const { category, type, ...rest } = getQuery(event);
  try {
    return await $fetch(`${type}/${category}`, {
      baseURL: TMDB_API_URL,
      params: {
        api_key: process.env.API_KEY,
        language: "en-US",
        ...rest,
      },
    });
  } catch (error: any) {
    const status = error?.response?.status || 500;
    event.res.statusCode = status;
    return error.message?.replace(/\?api_key=.*/, "");
  }
});
