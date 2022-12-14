import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam-core.p.rapidapi.com/v1' ,
      prepareHeaders: () => {
        headers.set('X-RapidAPI-Key', 'e109ad6c06msh0ab894d66961cfdp1afebcjsncff94e2dcaa2');

        return headers;
      }
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => '/charts/world' }),
    })
  });

  export const { useGetTopChartsQuery } = shazamCoreApi;