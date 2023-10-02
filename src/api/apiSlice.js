//Slice for all requests.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const messagesApi = createApi({
    reducerPath: 'messagesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3500'}),
    endpoints: (builder) => ({
        getMessages: builder.query({
            query: (messages) => '/messages'
        }) 
    })
});

export const {useGetMessagesQuery} = messagesApi;

