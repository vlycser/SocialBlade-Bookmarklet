# SocialBlade Bookmarklet #
* * *
## Install ##
Select and drag the javascript code on to your bookmark bar.
```
javascript:functiondefineUrl(){varurl=document.URL.toLowerCase();if(url.indexOf('youtube')<0){return0;}else{if(url.indexOf('user')>0||url.indexOf('channel')>0){return1;}elseif(url.indexOf('watch')>0){return2;}else{return0;}}}functiongetName(url){url=url.split('/');returnurl[4];}functionopenSB(ytName){window.open('http://socialblade.com/youtube/user/'+ytName);}if((result=defineUrl())>0){switch(result){case1:varurl=document.querySelector('#channel-navigation-menua').href;break;case2:varurl=document.querySelector('.watch-content>span[itemprop="author"]>link').href;break;}openSB(getName(url));}
```

## Usage ##
Go to a Youtube video of channel and make click on the new bookmark.

## License ##
SocialBlade Bookmarklet by [vlycser](https://github.com/vlycser/SocialBlade-Bookmarklet) is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

## Contact ##
Twitter: <http://twitter.com/vlycser>

Email: <vlycser@gmail.com>