$ ( document ) .ready (function () {
	console.log ("DOM is ready")
	$ ('.thumb').on ('click', function( ){
		var clickedBook = $ (this).attr ('title')
		console.log ("You sir clicked " + clickedBook)
		var ajaxdata = {
			title: clickedbook
		}
		$.get ('/api', ajaxdata, function (data){
			console.log (data)
			$ ('#title').text (data.title)
			$ ('#author').text (data.author)
			$ ('#description').text (data.desc)
			$ ('#cover').attr ({"src" : "/images/" + data.cover})
		})
	})
})