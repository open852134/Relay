function slider(op){
		switch(op){
			case "home":
				if($( window ).width() < 767){
					$("#mmm").css("display","none");
					$("#mmm").css("position","static");
					$("#mmm").css("margin-top","0px");
					$("#mmm").css("background-color","#ffffff");
				}

				//change menu
				$("#menu").animate({ "bottom": 0 }, "slow" );
				$("#menu").animate({ "background-color":"#fff"},"slow");
				$("#menu a").css("color","#000000");
				$("#menu p").css("color","#000000");
				$("#logo_header img").attr("src", "images/324.png");
				$("#menu_togo").attr("src", "images/black.png");
				
				//change background
				if($( window ).width() < 767){
					setTimeout(function() {
			      	$("#content").animate({opacity: 0}, 'slow', function() {
				        $(this).css({'background-image':'url(images/mobile_image.png)'}).animate({opacity: 1});
				        $(this).css("background-size","100% 100%")
				    	});
			     	},400);
				}else{
					setTimeout(function() {
			      	$("#content").animate({opacity: 0}, 'slow', function() {
				        $(this).css({'background-image':'url(images/taipei_night.jpg)'}).animate({opacity: 1});
				        $(this).css("background-size","100% 100%")
				    	});
			     	},400);
				}

				setTimeout(function() {
		      	// Do something after 5 seconds
		      		$("#firm").css("display","none");
		      		$("#about").css("display","none");
		      		$("#map_point").css("display","none");
					$( "#home").show('slide', {direction: 'right'}, 1000);
				},900);	
				
			break;
			case "about":
				if($( window ).width() < 767){
					$("#mmm").css("display","none");
					$("#mmm").css("position","absolute");
					$("#mmm").css("margin-top",$("#menu").css("height"));
					$("#mmm").css("background-color","#151718");


					var height_mv = $( window ).height() - $("#menu").height();
					$("#menu").animate({ "bottom": height_mv }, "slow" );
					$("#menu").animate({ "background-color":"#151718"},"slow");
					$("#menu a").css("color","#FDFEFF");
					$("#menu p").css("color","#FDFEFF");
					$("#logo_header img").attr("src", "images/323.png");
					$("#menu_togo").attr("src", "images/bb.png");
				}else{
					var height_mv = $( window ).height() - $("#menu").height();
					$("#menu").animate({ "bottom": height_mv }, "slow" );
					$("#menu").animate({ "background-color":"#151718"},"slow");
					$("#menu a").css("color","#FDFEFF");
					$("#menu p").css("color","#FDFEFF");
					$("#logo_header img").attr("src", "images/323.png");
					$("#menu_togo").attr("src", "images/bb.png");
				}
				
				setTimeout(function() {
		      	$("#content").animate({opacity: 0}, 'slow', function() {
			        $(this).css({'background-image':'none'}).animate({opacity: 1});
			        //'background-image':'url(images/bokeh_car_lights_bg.jpg)'}).animate({opacity: 1});
			    	});
		     	},400);


				setTimeout(function() {
		      	// Do something after 5 seconds
		      		$("#firm").css("display","none");
		      		$("#home").css("display","none");
		      		$("#map_point").css("display","none");
					$( "#about").show('slide', {direction: 'right'}, 1000);
				},900);
			break;

			case "map":
				if($( window ).width() < 767){

					$("#mmm").css("display","none");
					$("#mmm").css("position","absolute");
					$("#mmm").css("margin-top",$("#menu").css("height"));
					$("#mmm").css("background-color","#151718");

					var height_mv = $( window ).height() - $("#menu").height();
					$("#menu").animate({ "bottom": height_mv }, "slow" );
					$("#menu").animate({ "background-color":"#151718"},"slow");
					$("#menu a").css("color","#FDFEFF");
					$("#menu p").css("color","#FDFEFF");
					$("#logo_header img").attr("src", "images/323.png");
					$("#menu_togo").attr("src", "images/bb.png");
				}else{
					var x = $( menu ).css( "backgroundColor" );
					var height_mv = $( window ).height() - $("#menu").height();
					$("#menu").animate({ "bottom": height_mv }, "slow" );
					$("#menu").animate({ "background-color":"#151718"},"slow");
					$("#menu a").css("color","#FDFEFF");
					$("#menu p").css("color","#FDFEFF");
					$("#logo_header img").attr("src", "images/323.png");
					$("#menu_togo").attr("src", "images/bb.png");
				}


					setTimeout(function() {
			      	$("#content").animate({opacity: 0}, 'slow', function() {
				        $(this).css({'background-image':'none'}).animate({opacity: 1});
				        //'background-image':'url(images/bokeh_car_lights_bg.jpg)'}).animate({opacity: 1});
				    	});
			     	},400);


					setTimeout(function() {
			      	// Do something after 5 seconds
			      		$("#firm").css("display","none");
			      		$("#home").css("display","none");
			      		$("#about").css("display","none");
						$("#map_point").show('slide', {direction: 'right'}, 1000);
					},900);
					
					//show map
					setTimeout(function() {
						//show map
					
						$("#map_point").css("display","block");
						var infowindow = new google.maps.InfoWindow();
						var myLatlng = new google.maps.LatLng(25.072757, 121.513219);
						directionsDisplay = new google.maps.DirectionsRenderer();
			         	var mapOptions = {
			            	zoom: 10,    /*地圖呈現縮放大小*/
			            	center: new google.maps.LatLng(25.072757, 121.513219),  /*地圖初始畫的位置*/
			            	mapTypeId: google.maps.MapTypeId.ROADMAP        /*地圖的樣板*/
			         	};
			          	map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);  /*地圖呈現的DIV設定*/
			          	/* 新增座標 */    
						
						$.getJSON("js/map.json", function(json) {
						    $.each(json.universities, function (key, data) {
						    	setTimeout(function() {
							        var latLng = new google.maps.LatLng(data.lat, data.lng);
							        var marker = new google.maps.Marker({
							            position: latLng,
							            map: map,
							            title: data.title
							        });
								    var details = data.content;
						        	bindInfoWindow(marker, map, infowindow, details);
							    },500);
						        
						    });
						});
			        },950);
			break;
			case "firm":
				if($( window ).width() < 767){
					
					$("#mmm").css("display","none");
					$("#mmm").css("position","absolute");
					$("#mmm").css("margin-top",$("#menu").css("height"));
					$("#mmm").css("background-color","#151718");

					var height_mv = $( window ).height() - $("#menu").height();
					$("#menu").animate({ "bottom": height_mv }, "slow" );
					$("#menu").animate({ "background-color":"#151718"},"slow");
					$("#menu a").css("color","#FDFEFF");
					$("#menu p").css("color","#FDFEFF");
					$("#logo_header img").attr("src", "images/323.png");
					$("#menu_togo").attr("src", "images/bb.png");
				}else{
					var height_mv = $( window ).height() - $("#menu").height();
					$("#menu").animate({ "bottom": height_mv }, "slow" );
					$("#menu").animate({ "background-color":"#151718"},"slow");
					$("#menu a").css("color","#FDFEFF");
					$("#menu p").css("color","#FDFEFF");
					$("#logo_header img").attr("src", "images/323.png");
					$("#menu_togo").attr("src", "images/bb.png");
				}

					setTimeout(function() {
			      	$("#content").animate({opacity: 0}, 'slow', function() {
				        $(this).css({'background-image':'none'}).animate({opacity: 1});
				        //'background-image':'url(images/bokeh_car_lights_bg.jpg)'}).animate({opacity: 1});
				    	});
			     	},400);


					setTimeout(function() {
			      	// Do something after 5 seconds

			      		$("#home").css("display","none");
			      		$("#about").css("display","none");
			      		$("#map_point").css("display","none");
						$("#firm").show('slide', {direction: 'right'}, 1000);
					},900);
			break;

		}	
	}



//change color
function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    return('#' + parts.join(''));
}

function bindInfoWindow(marker, map, infowindow, strDescription) {
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(strDescription);
        infowindow.open(map, marker);
    });
}

function bindInfoWindow(marker, map, infowindow, strDescription) {
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(strDescription);
        infowindow.open(map, marker);
    });
}

$(function() {
	$( "#menu_togo" ).click(function() {
		$("#mmm").slideToggle( "slow")
  	});
});

$(window).resize(function() {
	//location.reload();
	var chk_color = hexc($("#menu").css("backgroundColor"));
	if(chk_color == "#ffffff"){
		//$("#menu").animate({ "bottom": 0 }, "slow" );
		$("#menu").css("bottom",0);
	}else{
		var height_mv = $( window ).height() - $("#menu").height();
		//$("#menu").animate({ "bottom": height_mv }, "slow" );
		$("#menu").css("bottom",height_mv)
	}

	if($( window ).width() > 767){
		$("#mmm").css("display","inline");
	}
});
