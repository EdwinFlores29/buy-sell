import { fakeListings} from "./fake-data";

export const getAllListingsRoute =  {
    method: 'GET',
    path: '/api/listings',
    handler: (request, h) => {
        return fakeListings;
    }
};
