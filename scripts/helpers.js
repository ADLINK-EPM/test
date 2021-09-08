/* global hexo */

'use strict';

var pathFn = require('path');
var _ = require('lodash');
var cheerio = require('cheerio');
var lunr = require('lunr');

 
var localizedPath = ['smarc-ipi','iot_pi', 'tutorial'];
//var localizedPath = ['smarc-ipi','iot_pi', 'tutorial','smarc-plus',];

function startsWith(str, start) {
  return str.substring(0, start.length) === start;
}

hexo.extend.helper.register('page_nav', function() {
  var type = this.page.canonical_path.split('/')[0];   
  var sidebar = this.site.data.sidebar[type];
  var path = pathFn.basename(this.path);
  var list = [];
  var result = '';
  var i = 0;

  _.each(sidebar, function(menu, title ) {
	  
	  _.each(menu, function(link, text) {
	  
	     if (link !== null)
		 {
			  list[i] =  link;
			  i++;			
			
		 }

	  });  
  });


  var current_page_path = '/' + this.page.path;  
  var index = list.indexOf(current_page_path);


  if (index > 0) {
    result += '<a href="' + list[index -1 ] + '" class="article-footer-prev"><i class="fa fa-chevron-left"></i><span>Prev</span></a>';
  }

  if (index < list.length - 1) {
    result += '<a href="' + list[index + 1] + '" class="article-footer-next"><span>Next</span><i class="fa fa-chevron-right"></i></a>';
  }

  return result;
});

hexo.extend.helper.register('doc_sidebar', function(className) {
  var type = this.page.canonical_path.split('/')[0];    
  var sidebar = this.site.data.sidebar[type];
  var path = pathFn.basename(this.path);   
  var result = '';
  var link_temp ='';
  var open = '';
  var self = this;
  var first_link = '';
  var title_temp = '';
  var link_done = '';
  var text_temp = '';
  var pre_text_temp = '';
  var pre_open_text_temp = '';
  var is_current_page = '';
  
   
  var prefix ='';
  _.each(sidebar, function(menu, title ) {
    first_link = 'yes';
	link_temp = '';
    open = '';
	link_done = 0;
	title_temp = '';
	
    _.each(menu, function(link, text) {
	
      var itemClass = className + '-link';
      if (first_link === 'yes') {
	    itemClass += ' first';
		first_link = 'no';
	  }
	   

	  if (link === null){
          if (link_done === 1)
		  {
			  if(is_current_page === 1 )
			  {
				  is_current_page = 0;
				  text_temp += pre_open_text_temp + link_temp + '</details></strong>';
			  }
			  else
			  {
				  
				  text_temp += pre_text_temp + link_temp + '</details></strong>';	 
			  }
			  
			  link_done = 0;
			  link_temp = '';
			  pre_text_temp = '';
			  pre_open_text_temp = '';

		  }
		  
	      pre_text_temp = '<strong class="' + className + '-text">' +  '<details >' + '<summary>' + self.__(prefix + text) + '</summary>';
		  pre_open_text_temp = '<strong class="' + className + '-text">' +  '<details open>' + '<summary>' + self.__(prefix + text) + '</summary>';
	  }
	  else
	  {
		  if(link === ( '/' + self.page.path))
		  {
			  is_current_page = 1 ;
			  link_temp += '<a href="' + link + '" class="' + itemClass + ' current">' + self.__(prefix + text) + '</a>';
		  }
		  else
		  {
		  
			link_temp += '<a href="' + link + '" class="' + itemClass + '">' + self.__(prefix + text) + '</a>';
		  }
		  link_done = 1;
	  }
	  
	  

	});
	
	if (link_done === 1)
	{
		
		if(is_current_page === 1 )
		{		
            text_temp += pre_open_text_temp + link_temp + '</details></strong>';
			is_current_page = 0;
			pre_open_text_temp = '';
			
		}
		else
		{
		
			text_temp +=  pre_text_temp + link_temp + '</details></strong>';
		
		}
		link_done = 0;
		link_temp = '';
	}
	
	text_temp += '</details></strong>';
	
	
	
    // to handle 'the title' 
    var lowercase_title = title.toLowerCase().replace(/\s/g,'').replace(/-/g,'');	
	var page_url = String(self.page.path).replace(/-/g,'');
	var index = page_url.indexOf(lowercase_title);	
	if(index !== -1 )
	{
		
		title_temp += '<strong class="' + className + '-title">' + '<details open >' + '<summary>' + self.__(prefix + title) + '</summary>';
	}
	else
	{
		title_temp += '<strong class="' + className + '-title">' + '<details open>' + '<summary>' + self.__(prefix + title) + '</summary>';
	}
	
    title_temp += text_temp + '</details></strong>';
	result += title_temp;
    text_temp = '';
	
	
 });
  
 
  return result;
});

hexo.extend.helper.register('header_menu', function(className) {
  var menu = this.site.data.menu;
  var result = '';
  var self = this;
  var lang = this.page.lang;
  var isEnglish = lang === 'en';

  _.each(menu, function(path, title) {
    var currentPath = pathFn.dirname(self.path);
    if (!isEnglish && ~localizedPath.indexOf(title)) {
      path = lang + path;
      currentPath = currentPath + '/';
    } else {
      currentPath = '/' + currentPath + '/';
    }


    if (path === currentPath) {
		    result += '<a href="' + self.url_for(path) + '" class="' + className + '-link current">' + self.__( title) + '</a>';
	} else {
		  result += '<a href="' + self.url_for(path) + '" class="' + className + '-link">' + self.__( title) + '</a>';
    }
  });

  return result;
});

hexo.extend.helper.register('canonical_url', function(lang) {
  var path = this.page.canonical_path;
  if (lang && lang !== 'en') path = lang + '/' + path;

  return this.config.url + '/' + path;
});

hexo.extend.helper.register('url_for_lang', function(path) {
  var lang = this.page.lang;
  var url = this.url_for(path);

  if (lang !== 'en' && url[0] === '/') url = '/' + lang + url;

  return url;
});


hexo.extend.helper.register('page_anchor', function(str) {
  var $ = cheerio.load(str, {decodeEntities: false});
  var headings = $('h1, h2, h3, h4, h5, h6');

  if (!headings.length) return str;

  headings.each(function() {
    var id = $(this).attr('id');

    $(this)
      .addClass('article-heading')
      .append('<a class="article-anchor" href="#' + id + '" aria-hidden="true"></a>');
  });

  return $.html();
});

hexo.extend.helper.register('lunr_index', function(data) {
  var index = lunr(function() {
    this.field('name', {boost: 10});
    this.field('tags', {boost: 50});
    this.field('description');
    this.ref('id');

    _.sortBy(data, 'name').forEach((item, i) => {
      this.add(_.assign({ id: i }, item));
    });
  });

  return JSON.stringify(index);
});

hexo.extend.helper.register('canonical_path_for_nav', function() {
  var path = this.page.canonical_path;

 
 if (startsWith(path, 'smarc-ipi/') || startsWith(path, 'iot-pi/') || startsWith(path, 'tutorial/') ) 
//  if (startsWith(path, 'smarc-ipi/') || startsWith(path, 'smarc-plus/')|| startsWith(path, 'iot_pi/') || startsWith(path, 'tutorial/') )
  {   
	return path;
  }
  return '';

});



hexo.extend.helper.register('lang_name', function(lang) {
  var data = this.site.data.languages[lang];
  return data.name || data;
});

hexo.extend.helper.register('disqus_lang', function() {
  var lang = this.page.lang;
  var data = this.site.data.languages[lang];

  return data.disqus_lang || lang;
});

hexo.extend.helper.register('hexo_version', function() {
  return this.env.version;
});
