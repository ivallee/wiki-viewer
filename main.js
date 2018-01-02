
// var request = `action=query&list=search&srsearch=${SEARCH}&format=json&utf8=`;
// api.php?action=opensearch&search=api&limit=10&namespace=0&format=jsonfm

$(document).ready(function() {
  var api = 'https://en.wikipedia.org/w/api.php?';

  function search(query){
    $.ajax({
      url: `${api}action=opensearch&search=${query}&limit=10&namespace=0&format=json`,
      method: 'GET',
      data: {
        origin: '*'
      }
    }).then(function(data) {
      for (let i = 0; i < data[1].length; i++) {
        var title = data[1][i];
        var subtitle = data[2][i];
        var link = data[3][i];
        $('#results-list').append(`<a href=\'${link}\'><li class=\'list-group-item\'><h2>${title}</h2><p>${subtitle}...</p></li></a>`);
      }
    });
  }
  
  $("#search-button").on("click", function() {
    var query = encodeURI($('#search-text').val());
    search(query);
  });

});
