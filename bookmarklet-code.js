javascript:
function defineUrl(){
    var url = document.URL.toLowerCase();

    if( url.indexOf('youtube') < 0 ){
        return 0;
    }else{
        if(url.indexOf('user') > 0 || url.indexOf('channel') > 0){
            return 1;
        }else if( url.indexOf('watch') > 0 ){
            return 2;
        }else{
            return 0;
        }
    }
}

function getName(url){
    url = url.split('/');
    return url[4];
}

function openSB(ytName){
    window.open('http://socialblade.com/youtube/user/'+ytName);
}

if( (result = defineUrl()) > 0 ) {
    switch( result ){
        case 1:
            var url = document.querySelector('#channel-navigation-menu a').href;
        break;
        case 2:
            var url = document.querySelector('.watch-content > span[itemprop="author"] > link').href;
        break;
    }

    openSB(getName(url));
}