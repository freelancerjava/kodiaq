function GetURLParameter(sParam)
	{
		var sPageURL = window.location.search.substring(1);
		var sURLVariables = sPageURL.split('&');
		for (var i = 0; i < sURLVariables.length; i++) 
		{
			var sParameterName = sURLVariables[i].split('=');
			if (sParameterName[0] == sParam) 
			{
				return sParameterName[1];
			}
		}
}

	var VIN = GetURLParameter('vin');

	$('.stock-car-detail').on('click','.agreement-label a', function(e) {
//		e.preventDefault();
		console.log('click on detail');

		var VIN = GetURLParameter('vin');
		$(this).attr('href','//webapps.skoda-auto.sk/stock-cars/' + window.location.search + '&suhlas=true&StockCars=true');
		return;

	});


function GenerateDealerAgreement() {

	var VIN = GetURLParameter('vin');
	
	if (VIN!='TMBCJ9NP9J7603736') return;

}
