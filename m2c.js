function Instagram_Req_Builder()
 {
  	this.client_id    = "";
	this.redirect_uri = "";
	this.access_token = "";

	this.init = function(client_id, redirect_uri) 
	{
		this.client_id    = client_id;
		this.redirect_uri = redirect_uri;
	};
	
	this.set_access_token = function(access_token) 
	{
		this.access_token = access_token;
	};

	this.req_get_access_token = function()
	{
		return "https://instagram.com/oauth/authorize/?client_id=" + 
		this.client_id    + 
		"&redirect_uri="  +
		this.redirect_uri +
		"&response_type=token";
	};

	this.req_get_popular_media = function()
	{
		if (this.access_token ||
			this.access_token.length())
		{
			return "https://api.instagram.com/v1/media/popular?access_token=" + this.access_token;
		}
		return "";
	};

	this.req_get_all_self_medias= function()
	{
		if (this.access_token ||
			this.access_token.length())
		{
			return "https://api.instagram.com/v1/users/self/media/recent?count=-1&access_token=" + this.access_token;
		}
		return "";
	};
};
