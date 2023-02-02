import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCategoryData, updateData } from "../../utils/firebase-utils";

export const testimonialsApi = createApi({
  reducerPath: "main/testimonials",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchTestimonials: builder.query({
      async queryFn() {
        try {
          const categoriesData = await getCategoryData("testimonials");
          return categoriesData;
        } catch (error) {
          return { error: error };
        }
      },
    }),
    addTestimonial: builder.mutation({
      async queryFn(data) {
        await updateData("testimonials", data);
      },
    }),
  }),
});

export const { useFetchTestimonialsQuery, useAddTestimonialMutation } =
  testimonialsApi;
