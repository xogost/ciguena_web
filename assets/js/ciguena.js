function globalAjaxMessage(Purl, Pdata, Pmsgsuccess, Pmsgerror, reload){
	$.ajax({
		url: Purl,
		type: 'POST',
		data: Pdata,
		success: function(){
			alert(Pmsgsuccess);
			if(reload){
				window.location.reload();
			}
		},
		error: function(){
			alert(Pmsgerror);	
		}
	});
};