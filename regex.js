	// Regexp Part
  //Email Validation
	function checkemail(attr) {
          var input = $("#"+attr).val();
		    var regex = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})([^\s]*)$");
		    if(regex.test(input)) {

		        return true;
		    }else {
				  $("#registration_status").html("<strong><i class='fa fa-warning'></i> Diqqət!</strong> Email is wrong. Please check and try again. ");
				  $("#registration_status").html("* Email format incorrect");
		        return false;
		    }
    }

// Limited number validation
	function checkpoctid(attr){
		var input = $("#"+attr).val();
		var regex = new RegExp("^([0-9]){4}");
			if(regex.test(input)) {
			    return true;
		    }
			else if(input==""){
				return true;
			}
			else {
				$("#registration_status").addClass("alert-warning");
			    $("#registration_status").html("<strong><i class='fa fa-warning'></i> Post index is wrong. Please check and try again.");
				return false;
			}
	}	
  // Check Aplhabetic validation
	function checkalphabetic(attr){
			 var input = $("#"+attr).val();

			    var regex = new RegExp("^([a-zA-Z]+$)([^\s]*)$");
			    if(regex.test(input)) {
			        return true;
			    }
				else {
					$("#registration_status").addClass("alert-warning");
					switch (attr) {
						case 'name':
							$("#registration_status").html("<strong><i class='fa fa-warning'></i> The name is wrong. Please check and try again.");
							break;
						case 'surname':
							$("#registration_status").html("<strong><i class='fa fa-warning'></i> The Surname is wrong. Please check and try again. ");
							break;
						case 'order_brend':
							$("#registration_status").html("<strong><i class='fa fa-warning'></i> The Brend name is wrong. Please check and try again.");
							break;
						case 'order_color':
							$("#registration_status").html("<strong><i class='fa fa-warning'></i> The color is wrong. Please check and try again.");
							break;
						case 'order_shipping_type':
							$("#registration_status").html("<strong><i class='fa fa-warning'></i>Shipping type is wrong. Please check and try again.");
							break;
						case 'order_type':
							$("#registration_status").html("<strong><i class='fa fa-warning'></i>Order type is wrong. Please check and try again.");
							break;							
						default:
							break;
					}	
					return false;
					}		
	}
	function checknumeric(attr,number){
			 var input = $("#"+attr).val();

			    var regex = new RegExp("^\\d{"+number+"}$");
			    if(regex.test(input)) {
			        return true;
			    }
				else {
					$("#registration_status").addClass("alert-warning");
					switch (attr) {
						case 'cabinet_id_number':
							$("#registration_status").html("<strong><i class='fa fa-warning'></i>  ID number is wrong. Please check and try again.");
							break;
						case 'cabinet_phone':
							$("#registration_status").html("<strong><i class='fa fa-warning'></i> Phone number is wrong. Please check and try again.");
							break;
						case 'order_count':
							$("#registration_status").html("<strong><i class='fa fa-warning'></i> Order count is wrong.Please check and try again.");
							break;
						case 'order_price':
							$("#registration_status").html("<strong><i class='fa fa-warning'></i> Order price is wrong. Please check and try again.");							
							break;
						default:
							break;
					}	
					return false;
					}			
	}  
    function checkpassword(attr) {
          var input = $("#"+attr).val();
			// var regex = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})([^\s]*)$");
		    //var pass=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
		    var pass=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		    //^[a-zA-Z0-9]+$
		    if(pass.test(input)) {

		        return true;
		    }else {
				$("#registration_status").addClass("alert-warning");
		        $("#registration_status").html("<strong><i class='fa fa-warning'></i> Diqqət!</strong>The password must be at least 8 characters including numbers and letters.");
		        return false;
		    }
    } 
    function checkempty(attr){
    	var input = $("#"+attr).val();
    	if(input){
    		return true;
    	}
    	else{
    			$("#registration_status").addClass("alert-warning");
		        $("#registration_status").html("<strong><i class='fa fa-warning'></i> Diqqət!</strong> Order size is wrong. Please check and try again.  ");
		        return false		
    	}
    }
	function checklink(attr) {
          var input = $("#"+attr).val();
			// var regex = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})([^\s]*)$");
		    var regex = new RegExp("^https?://.+");
		    if(regex.test(input)) {

		        return true;
		    }else {
				$("#registration_status").addClass("alert-warning");
		        $("#registration_status").html("<strong><i class='fa fa-warning'></i> Diqqət!</strong> Link must start with the  http:// or ya https:// .  ");
		        return false;
		    }
    } 
	// Regexp PART END
	
