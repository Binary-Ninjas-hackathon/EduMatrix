const Route = {
    Home: "home",
    Lresources: "learningresources",
    Scholarships: "scholarships",
    Internships: "internships",
  };
  const RoutePrefix='/edumatrix';
  if (typeof module !== 'undefined' && module.exports) 
  module.exports={Route,RoutePrefix}
  if (typeof exports !== 'undefined') 
  exports.myVariable = {Route,RoutePrefix}