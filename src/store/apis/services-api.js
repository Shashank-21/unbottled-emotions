import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCategoryData, updateData } from "../../utils/firebase-utils";

export const servicesApi = createApi({
  reducerPath: "main/services",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchServices: builder.query({
      async queryFn() {
        try {
          const categoriesData = await getCategoryData("services");
          return categoriesData;
        } catch (error) {
          return { error: error };
        }
      },
    }),
    updateServies: builder.mutation({
      async queryFn(data) {
        await updateData("services", data);
      },
    }),
  }),
});

export const { useFetchServicesQuery, useUpdateServiesMutation } = servicesApi;
