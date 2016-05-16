$(document).ready(function(){
	getQuote();

	$('#new-quote').on('click', function(){
		getQuote();
	})
});

function getQuote(){


	$.ajax({
		headers: {
			"X-Mashape-Key": "oLEOWxghNfmshxtjEwSaJVoPEvCgp1eonWIjsn9OND95lOePpL"
		},
		url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
		method: "post",
		success: function(response){
			var r = JSON.parse(response);

console.log(r);

			$('#quoteParagraph').html(r.quote);
			$('#quoteAuthor').html(r.author);
		}

	});
}