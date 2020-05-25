
 var queryUrl = "https://api.data.charitynavigator.org/v2??state=IL&city=Chicago&zip=60620&apikey=29a94a54bbc061ac94c79edbf7941078"



$.ajax({
    url: queryUrl,
    method:"GET"
  }).done(function(response){
    console.log(response);
  });

