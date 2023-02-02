import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCategoryData, updateData } from "../../utils/firebase-utils";

export const faqsApi = createApi({
  reducerPath: "main/faqs",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchFAQs: builder.query({
      async queryFn() {
        try {
          const faqsData = await getCategoryData("faqs");
          return faqsData;
        } catch (error) {
          return { error: error };
        }
      },
    }),
    updateFAQs: builder.mutation({
      async queryFn(data) {
        await updateData("faqs", data);
      },
    }),
  }),
});

export const { useFetchFAQsQuery, useUpdateFAQsMutation } = faqsApi;
