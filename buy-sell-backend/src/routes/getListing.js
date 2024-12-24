import { fakeListings} from "./fake-data";

export const getListingRoute =  {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: (request, h) => {
      const id = request.params.id;
        return fakeListings.find(listing => listing.id === id);
    }
};
