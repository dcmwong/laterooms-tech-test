import { join, concat, filter, tap, compose, composeP, invoker, lift, map, prop } from "ramda";
import Either from "data.either";
import Maybe from "data.maybe";
import Task from "data.task";
import daggy from "daggy";
import React from "react";
import SearchInstructions from "./SearchInstructions.js";

const Hotel = daggy.tagged("id", "StarRating", "Facilities", "Name");
const trace = msg => tap(x => console.log(msg, x));

export const Empty = Either.Left(<SearchInstructions />);

//makeQuery :: Array -> Int -> String
export const makeQuery = (filters, sortDirection) => {
  const url = compose(concat("?facilities="),join("&facilities="));
  return `${url(filters)}&sort=${sortDirection}`;
}

// makeUrl :: String -> Url
const makeUrl = (query) => `/data${query}`;

// maybeMakeUrl :: String -> Maybe Url
const maybeMakeUrl = (query) =>
  query && query.length > 0
    ? Maybe.Just(compose(makeUrl)(query))
    : Maybe.Nothing()
  ;

// getJson -> HttpResponse -> Promise JSON
const getJson = invoker(0, "json");

// httpGet :: String -> Task Error JSON
const httpGet = (url) =>
  new Task((rej, res) =>
    fetch(url).then(composeP(res, getJson)).catch(rej)
  );

// maybeHttpGet :: e -> Maybe String -> Task Error (Either e JSON)
const maybeHttpGet = (e) => (url) =>
  url.cata({
    Just: compose(lift(Either.Right), httpGet),
    Nothing: () => Task.of(e)
  });

// toHotel :: JSON -> Hotel
const toHotel = json => {
  const {
    id : hotelId,
    Name: name,
    StarRating: rating,
    Facilities: facilities
  } = json;
  return Hotel(hotelId, rating, facilities, name);
};

// toHotels :: JSON -> [Hotels]
export const toHotels = compose( map(toHotel), prop("items")); 

// searchHotels :: String -> Task Error (Either Empty [Video])
export const searchHotels = compose(lift(lift(toHotels)), maybeHttpGet(Empty), maybeMakeUrl);
