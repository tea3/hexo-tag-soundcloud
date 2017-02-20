'use strict';


hexo.extend.tag.register('soundcloud', function(args, content){

    var returnHTML = "";
    var url        = "";
    var playerSettings = {
      height  : 450 ,
      visual  : true ,
      color   : "ff5500" ,
      related : true ,
      comments: true ,
      user    : true ,
      reposts : false ,
      autoplay: false
    };
    
  	if(args[0] && args[0].match(/https\:\/\/soundcloud\.com\//)){
	  	url = args[0];
  	}else if(args[0] && args[0].match(/[0-9A-Za-z\_\-\/]+/)){
		  url = "https://soundcloud.com/" + args[0];
  	}
    
    if(hexo.config.soundcloud){
      playerSettings = {
        height  : (hexo.config.soundcloud.height && hexo.config.soundcloud.height > 0 ) ? hexo.config.soundcloud.height : playerSettings.height ,
        visual  : (hexo.config.soundcloud.visual != undefined ) ? hexo.config.soundcloud.visual === true : playerSettings.visual ,
        color   : (hexo.config.soundcloud.color && hexo.config.soundcloud.color.match(/([0-9A-Za-z]{3}|[0-9A-Za-z]{6})/) ) ? hexo.config.soundcloud.color : playerSettings.color,
        related : (hexo.config.soundcloud.related != undefined ) ? hexo.config.soundcloud.related === true : playerSettings.related ,
        comments: (hexo.config.soundcloud.comments != undefined ) ? hexo.config.soundcloud.comments === true : playerSettings.comments ,
        user    : (hexo.config.soundcloud.user != undefined ) ? hexo.config.soundcloud.user === true : playerSettings.user ,
        reposts : (hexo.config.soundcloud.reposts != undefined ) ? hexo.config.soundcloud.reposts === true : playerSettings.reposts ,
        autoplay: (hexo.config.soundcloud.autoplay != undefined ) ? hexo.config.soundcloud.autoplay === true : playerSettings.autoplay
      }
    }
    
    playerSettings = {
      height  : (args[1] && args[1].match(/[0-9]+/) ) ? Number(args[1]) : playerSettings.height ,
      visual  : (args[2] && args[2].match(/(true|false)/) ) ? args[2] == "true" : playerSettings.visual ,
      color   : (args[3] && args[3].match(/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/) ) ? args[3] : playerSettings.color,
      related : (args[4] && args[4].match(/(true|false)/) ) ? args[4] == "true" : playerSettings.related ,
      comments: (args[5] && args[5].match(/(true|false)/) ) ? args[5] == "true" : playerSettings.comments ,
      user    : (args[6] && args[6].match(/(true|false)/) ) ? args[6] == "true" : playerSettings.user ,
      reposts : (args[7] && args[7].match(/(true|false)/) ) ? args[7] == "true" : playerSettings.reposts ,
      autoplay: (args[8] && args[8].match(/(true|false)/) ) ? args[8] == "true" : playerSettings.autoplay
    }

    returnHTML = '<div class="soundcloud-wrapper"><iframe width="100%" height="'+ playerSettings.height +'" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url='+ encodeURIComponent(url) +'&amp;auto_play=' + ( playerSettings.autoplay ? "true" : "false" ) + ( !playerSettings.visual ? ('&amp;color=' + playerSettings.color ) : "" ) + '&amp;hide_related=' + ( playerSettings.related ? "true" : "false" ) + '&amp;show_comments=' + ( playerSettings.comments ? "true" : "false" ) + '&amp;show_user=' + ( playerSettings.user ? "true" : "false" ) + '&amp;show_reposts=' + ( playerSettings.reposts ? "true" : "false" ) + '&amp;visual='+ ( playerSettings.visual ? "true" : "false" ) +'"></iframe></div>';
    
  	return returnHTML;
},{
  async: true,
  ends: false
});
