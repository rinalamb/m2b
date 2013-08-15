function Linkedin_Req_Builder(api_key,
	                          secret_key,
	                          state,
	                          redirect_uri)
 {
  	this.api_key    	= api_key;
	this.secret_key 	= secret_key;
	this.state      	= state;
	this.redirect_uri   = redirect_uri;
	
	this.set_access_token = function(access_token) 
	{
		this.access_token = access_token;
	};

	this.req_get_auth_code = function()
	{
		return "https://linkedin.com/oauth/authorize/?client_id=" + 
		this.client_id    + 
		"&redirect_uri="  +
		this.redirect_uri +
		"&response_type=token";
		return "https://www.linkedin.com/uas/oauth2/authorization?response_type=code"
                                           "&client_id=" + this.api_key +
                                           "&state=" + this.state +
                                           "&redirect_uri=" + this.redirect_uri;
	};

	this.req_get_access_token = function(auth_code)
	{
		return "https://www.linkedin.com/uas/oauth2/accessToken?grant_type=authorization_code" +
                                           "&code=" 		 + auth_code +
                                           "&redirect_uri="  + this.redirect_uri + 
                                           "&client_id=" 	 + this.api_key +
                                           "&client_secret=" + this.secret_key;

	};

/*
	this.req_get_popular_media = function()
	{
		if (this.access_token ||
			this.access_token.length())
		{
			return "https://api.linkedin.com/v1/media/popular?access_token=" + this.access_token;
		}
		return "";
	};
*/
};
