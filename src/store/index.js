import { configureStore } from "@reduxjs/toolkit";

import {
  ServicesReducer,
  modifyService,
  captureServices,
} from "./slices/ServicesSlice";

import { setupListeners } from "@reduxjs/toolkit/query";
import {
  TestimonialsReducer,
  addTestimonial,
  captureTestimonials,
} from "./slices/testimonials-slice";
import {
  servicesApi,
  useFetchServicesQuery,
  useUpdateServiesMutation,
} from "./apis/services-api";
import {
  testimonialsApi,
  useFetchTestimonialsQuery,
  useAddTestimonialMutation,
} from "./apis/testimonials-api";
import { faqReducer, addFAQ, changeFAQ, captureFAQs } from "./slices/faq-slice";
import {
  faqsApi,
  useFetchFAQsQuery,
  useUpdateFAQsMutation,
} from "./apis/faqs-api";
import { colorReducer, changeColor } from "./slices/color-slice";
import {
  requestsApi,
  useFetchRequestsQuery,
  useUpdateRequestsMutation,
} from "./apis/requests-api";
import {
  requestsReducer,
  addRequest,
  changeRequest,
  captureRequests,
} from "./slices/requests-slice";
import {
  blogsReducer,
  changeBlog,
  addBlog,
  captureBlogs,
} from "./slices/blogs-slice";
import { adminReducer, verifyUser } from "./slices/admin-slice";

export const store = configureStore({
  reducer: {
    services: ServicesReducer,
    requests: requestsReducer,
    testimonials: TestimonialsReducer,
    faqs: faqReducer,
    color: colorReducer,
    blogs: blogsReducer,
    admin: adminReducer,
    [requestsApi.reducerPath]: requestsApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [testimonialsApi.reducerPath]: testimonialsApi.reducer,
    [faqsApi.reducerPath]: faqsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(servicesApi.middleware)
      .concat(testimonialsApi.middleware)
      .concat(faqsApi.middleware)
      .concat(requestsApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  modifyService,
  addTestimonial,
  captureServices,
  captureTestimonials,
  useFetchServicesQuery,
  useUpdateServiesMutation,
  useFetchTestimonialsQuery,
  useAddTestimonialMutation,
  addFAQ,
  changeFAQ,
  captureFAQs,
  useFetchFAQsQuery,
  useUpdateFAQsMutation,
  changeColor,
  useFetchRequestsQuery,
  useUpdateRequestsMutation,
  addRequest,
  changeRequest,
  captureRequests,
  changeBlog,
  addBlog,
  captureBlogs,
  verifyUser,
};
