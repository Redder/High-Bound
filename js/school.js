function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$(document).ready(function () {
    var code = getUrlVars()["code"];
    
    $.getJSON('https://data.cityofnewyork.us/resource/4isn-xf7m.json?dbn=' + code , function(data) {
        console.log(data);
        $('.school-name').text(data['0'].school_name);
        $('.overview').text(data['0'].overview_paragraph);
        $('.boro > span').text(data['0'].boro);
        $('.address > span').text(data['0'].primary_address_line_1);
    });
});