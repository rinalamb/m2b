function Application()
{
	this.main_anchor;
	this.api_key      = "heao7wu8gz6e";
	this.secret_key   = "EDUqj42mbZwmM0EX";
	this.state        = "008123412356";
	this.auth_code;
	this.redirect_url = "http://people.ischool.berkeley.edu/~i153-040/i153/major2career/major2career.html";

	this.linkedin_req_builder = new Linkedin_Req_Builder(this.api_key,
														 this.secret_key,
														 this.state,
														 this.redirect_url);

	//Dbg
	this.debug_button_ctrl;
	this.spinner_pacman;

	this.init = function(anchor)
	{
		var self = this;
		self.main_anchor  = anchor;
		self.spinner_pacman = $("<img/>")
							  .attr('src', './ajax-loader.gif');

        self.main_anchor.after(this.spinner_pacman);

        //Initial initialization
		self.auth_code = get_url_parameter('code');
		if ( self.auth_code.length == 0 ) 
		{
			//alert("Waaaayyaaa... I need token");
			var linkedin_req_token_uri = self.linkedin_req_builder.req_get_auth_code();
			window.location.replace(linkedin_req_token_uri);
		}
		else
		{
			$.ajax({
	        	method: "GET",
	        	url: self.linkedin_req_builder.req_get_access_token(self.auth_code),
	        	dataType: "jsonp",
	        	jsonp: "callback",
	        	jsonpCallback: "jsonpcallback",
	        	success: function(data) 
	        	{
	        		alert(data);
	        	},
	        	error: function(jqXHR, textStatus, errorThrown) {
	        		alert("something terrible happened");
	        	}
	    	});
		};
	};
};

$(function()
{
	//__Application
	var application = new Application();
	application.init($("#MainAnchor"));
});

