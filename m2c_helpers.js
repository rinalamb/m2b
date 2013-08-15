function get_url_parameter( param_name )
{
    param_name = param_name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regex_str = "[\\?&#]"+ param_name +"=([^&#]*)";
    var regex = new RegExp( regex_str );
    var results = regex.exec( window.location.href );
    if( results == null )
        return "";
    else
        return results[1];
}
