import type { Genre } from "../../interfaces";

export default defineEventHandler(async (event): Promise<Genre[]> => {
  const config = useRuntimeConfig();
  const TMDB_API_URL = config.public.api_url;

  const { type } = getQuery(event);
  try {
    return await $fetch(`genre/${type}/list`, {
      baseURL: TMDB_API_URL,
      params: {
        api_key: config.public.api_key,
        language: "en-US",
      },
    });
  } catch (error: any) {
    const status = error?.response?.status || 500;
    event.res.statusCode = status;
    return error.message?.replace(/\?api_key=.*/, "");
  }
});
