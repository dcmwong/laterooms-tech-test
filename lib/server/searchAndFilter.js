const R = require("ramda");

module.exports = function(data, query) {
  const filters = query.Facilities;

  var returnData;

  // const filterFacilities = R.compose(R.not,R.isEmpty,R.intersection(filters), R.prop("Facilities"));
  const filterFacilities = R.compose(R.equals(filters), R.prop("Facilities"));
  if(R.isEmpty(filters)) {
    returnData= data.items;
  }else{
    returnData = R.filter(filterFacilities, data.items);
  }


  var sortByStarRating = (query.Sort===1) ? R.ascend(R.prop('StarRating')) : R.descend(R.prop('StarRating'));

  if (query.Sort>0) {
     returnData = R.sort(sortByStarRating, returnData); 
  }
     
  return returnData;
}
