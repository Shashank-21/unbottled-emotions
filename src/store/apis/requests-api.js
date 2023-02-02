import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCategoryData, updateData } from "../../utils/firebase-utils";

export const requestsApi = createApi({
  reducerPath: "main/requests",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchRequests: builder.query({
      async queryFn() {
        try {
          const requestsData = await getCategoryData("requests");
          return requestsData;
        } catch (error) {
          return { error: error };
        }
      },
    }),
    updateRequests: builder.mutation({
      async queryFn(data) {
        await updateData("requests", data);
      },
    }),
  }),
});

export const { useFetchRequestsQuery, useUpdateRequestsMutation } = requestsApi;
