
// var request = `action=query&list=search&srsearch=${SEARCH}&format=json&utf8=`;
// api.php?action=opensearch&search=api&limit=10&namespace=0&format=jsonfm

$(document).ready(function() {
  var api = 'https://en.wikipedia.org/w/api.php?';
  
  $("#search-button").on("click", function() {
    var query = encodeURI($('#search-text').val());
    $.ajax({
      url: `${api}action=query&list=search&srsearch=${query}&format=json&utf8=`,
      method: 'GET',
      data: {
        origin: '*'
      }
    }).then(function(data) {
      console.log(data.query.search);
      data.query.search.forEach(function(result) {
        $('#results-list').append('<li class=\'list-group-item\'></li>').append('<h2>'+result.title+'</h2>').append(`<p>${result.snippet}...</p>`);
      });
      
    });
  });

});
