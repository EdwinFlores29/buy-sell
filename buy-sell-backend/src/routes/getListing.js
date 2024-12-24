const Boom = require('@hapi/boom');
import { fakeListings } from "./fake-data";

export const getListingRoute =  {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: (request, h) => {

      const id = request.params.id;
        const listing = fakeListings.find(listing => listing.id === id);
        if (!listing) throw Boom.notFound(`Listing with id ${id} not found`);
        return listing;
    }
};
