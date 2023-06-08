import type { Media } from "../../interfaces";

export default defineEventHandler(async (event): Promise<Media> => {
  const config = useRuntimeConfig();
  const TMDB_API_URL = config.public.api_url;

  const { type, id } = getQuery(event);
  try {
    return await $fetch(`${type}/${id}`, {
      baseURL: TMDB_API_URL,
      params: {
        api_key: config.public.api_key,
        include_image_language: "en",
        append_to_response: "videos,credits,images,external_ids,release_dates",
      },
    });
  } catch (error: any) {
    const status = error?.response?.status || 500;
    event.res.statusCode = status;
    return error.message?.replace(/\?api_key=.*/, "");
  }
});
