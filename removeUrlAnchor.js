function removeUrlAnchor(url){
    let newUrl = url.split('#');
    return newUrl[0];
}