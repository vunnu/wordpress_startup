var selectedMenu = false;
var forceScroll = false;
var currentHash;
var show_scroll_top = false;
var options = {
    'markup': '<div class="container popup-container"><div class="popup"><div class="popup_content"/></div></div>',
    'beforeOpen' : function(){
        jQuery('.main-container').toggleClass('hidden');
    },
    'beforeClose' : function(){
        jQuery('.main-container').toggleClass('hidden');
    }
};



jQuery("document").ready(function(){

    transformicons.add('.tcon');


    smoothScroll.init({
        offset: 150,
        //header: '[data-scroll-header]',
        callback: function ( toggle, anchor ) {

            setTimeout(function(){
                forceScroll = false;
            }, 100);
        }
    });


    jQuery('.panel-collapse').on('show.bs.collapse', function () {

        var toggler = jQuery(this).parent().next('.control');

        var img_src = toggler.children('a').children('img').attr('src');

        var img_close = img_src.replace("form_arrow", "close_x_news");

        toggler.find('span').hide();

        jQuery(this).find('.short-content').hide();
        jQuery(this).find('.full-content').show();

        toggler.children('a').children('img').attr('src', img_close);


    })


    jQuery('.panel-collapse').on('hide.bs.collapse', function () {

        console.log(this);
        var toggler = jQuery(this).parent().next('.control');

        var img_src = toggler.children('a').children('img').attr('src');

        var img_open = img_src.replace("close_x_news", "form_arrow");

        toggler.find('span').show();

        jQuery(this).find('.short-content').show();
        jQuery(this).find('.full-content').hide();

        toggler.children('a').children('img').attr('src', img_open);


    })




    var popup = jQuery('a.popup').popup(options);

    jQuery('.video-embed').find('.close-video-btn').on('click touchend', function () {

        jQuery('.project-types-container').addClass('force-display');
        jQuery('.video-embed').fadeOut('5000', function () {
            jQuery('.project-types-container').removeClass('hidden').fadeIn('2000').css('display', 'block');
            //jQuery('.project-types-container').find('.project').fadeIn('2000');
        });

    });



    jQuery(document).on('change', '.fileUpload :file', function() {
        var input = jQuery(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });


    jQuery(document).ready( function() {
        jQuery('.fileUpload :file').on('fileselect', function(event, numFiles, label) {

            var button = jQuery('.fileUpload').find("span").first();
            button.parent('.fileUpload').addClass('selected-file');
            button.html('Pridėtas');
        });

        jQuery(".wpcf7").on('invalid.wpcf7',function(e){

            var error_tips = jQuery(document.createElement('div'));
            error_tips.addClass('error-tips');
            jQuery('.wpcf7-validation-errors').prepend(error_tips);

            jQuery('.wpcf7-not-valid-tip').each(function () {
                jQuery(error_tips).append(this);
            });
        });
    });

    jQuery(".item").on('click', function () {

        forceScroll = true;
        if(selectedMenu)
        {
            selectedMenu.removeClass('selected');
        }
        selectedMenu = jQuery(this);
        selectedMenu.toggleClass('selected');
    });


    jQuery(window).on('hashchange', function() {

        currentHash = window.location.hash;

        hashmenu(currentHash);
    });


    if(window.location.hash) {

        jQuery(window).scrollTop(jQuery(window).scrollTop() + 1);

        currentHash = window.location.hash;
        hashmenu(currentHash);
    }


    var currentMenuItem = jQuery('.navbar-menu-dynamic').find('.current_page_item');
    var cur_menu_id = currentMenuItem.attr('id');
    var open_menu = false;


    if(currentMenuItem.hasClass('menu-item-has-children'))
    {
        currentMenuItem.find('.sub-menu').appendTo('.top-submenu').addClass('nav navbar-nav top-navbar');
        open_menu = true;
    }
    else if(currentMenuItem.parent('ul').hasClass('sub-menu')){
        currentMenuItem.parent('ul').appendTo('.top-submenu').addClass('nav navbar-nav top-navbar');
        open_menu = true;
    }

    //if(open_menu)
    //{
    //    jQuery('.sidebar').addClass('force');
    //    jQuery('.nav-expander').addClass('active tcon-transform');
    //    jQuery('.cbp-spmenu').addClass('cbp-spmenu-open');
    //}



    //$('[data-toggle="tabajax"]').click(function(e) {
    //    var $this = $(this),
    //        loadurl = $this.attr('href'),
    //        targ = $this.attr('data-target');
    //
    //    loadurl = updateQueryStringParameter(loadurl, 'nwagency_post', 1)
    //
    //    $.get(loadurl, function(data) {
    //        $(targ).html(data);
    //    });
    //
    //    //var data = {
    //    //    'action': 'get_submenu_page_content',
    //    //    'page_id': loadurl.replace('/#', '')
    //    //};
    //    //
    //    //// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
    //    //jQuery.post('wp-admin/admin-ajax.php', data, function(response) {
    //    //    $(targ).html(data);
    //    //    //alert('Got this from the server: ' + response);
    //    //});
    //
    //    $this.tab('show');
    //    return false;
    //});


    //var block = false;
    //jQuery('.block').on('mouseover', function(e){
    //    block = jQuery(this);
    //    block.toggleClass('hover');
    //});
    //
    //jQuery('.block').on('mouseout', function(e){
    //    block.toggleClass('hover');
    //});




    var expanded = false;

    if(jQuery(window).width() > 0 )
    {

        //Navigation Menu Slider
        jQuery('.nav-expander').on('click',function(e){

            if(!expanded){
                expanded = true;
            }else{
                expanded = false;
            }
            e.stopPropagation();
            jQuery('body').toggleClass('nav-expanded');

            if(jQuery(window).width() <= 480)
            {
                jQuery('.main-container ').hide();
            }
        });

        jQuery('.sidebar').on('mousemove',function(e){

            if(jQuery(window).width() > 820)
            {
                if ((jQuery(window).width() -  e.pageX) < 10) {
                    if(!expanded)
                    {
                        jQuery('.cbp-spmenu').toggleClass('cbp-spmenu-open');
                        expanded = true;
                    }
                }
            }
        });

        jQuery('.main-container, .x-close').on('click touchend', function(e){

            jQuery('.cbp-spmenu').removeClass('cbp-spmenu-open');
            jQuery('.nav-expander').removeClass('active');
            jQuery('.nav-expander').removeClass('tcon-transform');
            jQuery('.sidebar').removeClass('force');
            jQuery('.main-container ').show();
            expanded = false;
        });


        var mouseleave = false;
        jQuery('.nav-fixed').on('mouseleave', function(){

            mouseleave = true;
            setTimeout(function(){
                if(mouseleave)
                {
                    jQuery('.cbp-spmenu').removeClass('cbp-spmenu-open');
                    expanded = false;
                }
            }, 2000);
        });

        jQuery('.nav-fixed').on('mouseover', function(){
            mouseleave = false;
        });
    }







    //var shrinked = false;
    //
    //jQuery(window).on('scroll', function(){
    //
    //    get_hash_modificator();
    //
    //    scroll_to_top_display();
    //
    //    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    //        shrinkOn = 198,
    //        logo = jQuery(".logo");
    //        tabMenu = jQuery(".tab-menu-container");
    //        tasksContainer = jQuery(".tasks-container");
    //        topMenuContainer = jQuery(".top-menu-container");
    //        breadcrumbs = jQuery(".breadcrumbs-container");
    //        sidebar = jQuery(".sidebar");
    //        menuTitle = jQuery(".menu-title");
    //        menuItems = jQuery(".menu-items");
    //        headerContainer = jQuery(".tasks-container").find(".header-container");
    //
    //
    //    if (distanceY > shrinkOn) {
    //
    //        topMenuContainer.addClass('smaller');
    //        sidebar.addClass('smaller');
    //
    //        tabMenu.addClass('smaller').addClass('move-top');
    //        tasksContainer.addClass('smaller');
    //        //
    //        breadcrumbs.addClass('smaller');
    //        menuTitle.addClass('smaller');
    //        menuItems.addClass('smaller');
    //        headerContainer.addClass('smaller');
    //        shrinked = true;
    //
    //    } else {
    //
    //        if(shrinked)
    //        {
    //            if (distanceY < 130) {
    //
    //                if(selectedMenu)
    //                {
    //                    selectedMenu.removeClass('selected');
    //                }
    //
    //
    //                if (topMenuContainer.hasClass('smaller')) {
    //                    topMenuContainer.removeClass('smaller');
    //                }
    //                if (sidebar.hasClass('smaller')) {
    //                    sidebar.removeClass('smaller');
    //                }
    //                if (tabMenu.hasClass('smaller')) {
    //                    tabMenu.removeClass('smaller');
    //                }
    //                if (breadcrumbs.hasClass('smaller')) {
    //                    breadcrumbs.removeClass('smaller');
    //                }
    //
    //                if (menuTitle.hasClass('smaller')) {
    //                    menuTitle.removeClass('smaller');
    //                }
    //                if (menuItems.hasClass('smaller')) {
    //                    menuItems.removeClass('smaller');
    //                }
    //                if (headerContainer.hasClass('smaller')) {
    //                    headerContainer.removeClass('smaller');
    //                }
    //                if (tasksContainer.hasClass('smaller')) {
    //                    tasksContainer.removeClass('smaller');
    //                }
    //                shrinked = false;
    //                window.location.hash = '';
    //                currentHash = false;
    //
    //            }
    //        }
    //
    //    }
    //
    //
    //});




});


function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
        return uri + separator + key + "=" + value;
    }
}




function hashmenu(hash){
    var link = jQuery('.item-link[data-href="'+ hash +'"]');
    if(selectedMenu)
    {
        selectedMenu.removeClass('selected');
    }
    selectedMenu = link.parent('.item');
    selectedMenu.toggleClass('selected');
    //console.log(link);
}


function get_hash_modificator()
{
    //console.log('FORCE');
    //console.log(forceScroll);

    jQuery('.section').each(function(){
        if (
            jQuery(this).offset().top < window.pageYOffset + 50

            && jQuery(this).offset().top + jQuery(this).height() > window.pageYOffset + 50

        ) {


            if(currentHash != '#' + jQuery(this).attr('id'))
            {
                if(forceScroll)
                {
                    window.location.hash = jQuery(this).attr('id');
                }else{
                    currentHash = '#'+jQuery(this).attr('id');
                    hashmenu(currentHash);
                }

            }
        }
    });
}


function scroll_to_top_display()
{
    if(jQuery(document).scrollTop() > 500)
    {
        jQuery('.scroll-top-container').fadeIn('medium');
        jQuery('.mouse-scroll').fadeOut('medium');
        show_scroll_top = true;
    }else{
        if(show_scroll_top)
        {
            jQuery('.scroll-top-container').fadeOut('medium');
            jQuery('.mouse-scroll').fadeIn('medium');
        }
    }
}


function form_submit_popup()
{
    setTimeout(function(){
        jQuery('.wpcf7-mail-sent-ok').fadeOut('slow');
    }, 7000);
}
/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}

})( window );

jQuery('document').ready(function(){

    var showLeft = document.getElementById('showLeft'),
        menuLeft = document.getElementById( 'cbp-spmenu-s1'),
        sidebar  = jQuery('.sidebar');


    showLeft.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        sidebar.toggleClass('force');
        disableOther( 'showLeft' );
    };


    function disableOther( button ) {
        if( button !== 'showLeft' ) {
            classie.toggle( showLeft, 'disabled' );
        }
    }

});
(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD module
        define(factory);
    } else if (typeof exports === 'object') {
        // CommonJS-like environment (i.e. Node)
        module.exports = factory();
    } else {
        // Browser global
        root.transformicons = factory();
    }
}(this || window, function () {

    // ####################
    // MODULE TRANSFORMICON
    // ####################
    'use strict';

    var
        tcon = {}, // static class
        _transformClass = 'tcon-transform',

    // const
        DEFAULT_EVENTS = {
            transform : ['click'],
            revert : ['click']
        };

    // ##############
    // private methods
    // ##############

    /**
     * Normalize a selector string, a single DOM element or an array of elements into an array of DOM elements.
     * @private
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements
     * @returns {array} Array of DOM elements
     */
    var getElementList = function (elements) {
        if (typeof elements === 'string') {
            return Array.prototype.slice.call(document.querySelectorAll(elements));
        } else if (typeof elements === 'undefined' || elements instanceof Array) {
            return elements;
        } else {
            return [elements];
        }
    };

    /**
     * Normalize a string with eventnames separated by spaces or an array of eventnames into an array of eventnames.
     * @private
     *
     * @param {(string|array)} elements - String with eventnames separated by spaces or array of eventnames
     * @returns {array} Array of eventnames
     */
    var getEventList = function (events) {
        if (typeof events === 'string') {
            return events.toLowerCase().split(' ');
        } else {
            return events;
        }
    };

    /**
     * Attach or remove transformicon events to one or more elements.
     * @private
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
     * @param {object} [events] - An Object containing one or more special event definitions
     * @param {boolean} [remove=false] - Defines wether the listeners should be added (default) or removed.
     */
    var setListeners = function (elements, events, remove) {
        var
            method = (remove ? 'remove' : 'add') + 'EventListener',
            elementList = getElementList(elements),
            currentElement = elementList.length,
            eventLists = {};

        // get events or use defaults
        for (var prop in DEFAULT_EVENTS) {
            eventLists[prop] = (events && events[prop]) ? getEventList(events[prop]) : DEFAULT_EVENTS[prop];
        }

        // add or remove all events for all occasions to all elements
        while(currentElement--) {
            for (var occasion in eventLists) {
                var currentEvent = eventLists[occasion].length;
                while(currentEvent--) {
                    elementList[currentElement][method](eventLists[occasion][currentEvent], handleEvent);
                }
            }
        }
    };

    /**
     * Event handler for transform events.
     * @private
     *
     * @param {object} event - event object
     */
    var handleEvent = function (event) {
        tcon.toggle(event.currentTarget);
    };

    // ##############
    // public methods
    // ##############

    /**
     * Add transformicon behavior to one or more elements.
     * @public
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
     * @param {object} [events] - An Object containing one or more special event definitions
     * @param {(string|array)} [events.transform] - One or more events that trigger the transform. Can be an Array or string with events seperated by space.
     * @param {(string|array)} [events.revert] - One or more events that trigger the reversion. Can be an Array or string with events seperated by space.
     * @returns {transformicon} transformicon instance for chaining
     */
    tcon.add = function (elements, events) {
        setListeners(elements, events);
        return tcon;
    };

    /**
     * Remove transformicon behavior from one or more elements.
     * @public
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
     * @param {object} [events] - An Object containing one or more special event definitions
     * @param {(string|array)} [events.transform] - One or more events that trigger the transform. Can be an Array or string with events seperated by space.
     * @param {(string|array)} [events.revert] - One or more events that trigger the reversion. Can be an Array or string with events seperated by space.
     * @returns {transformicon} transformicon instance for chaining
     */
    tcon.remove = function (elements, events) {
        setListeners(elements, events, true);
        return tcon;
    };

    /**
     * Put one or more elements in the transformed state.
     * @public
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be transformed
     * @returns {transformicon} transformicon instance for chaining
     */
    tcon.transform = function (elements) {
        getElementList(elements).forEach(function(element) {
            element.classList.add(_transformClass);
        });
        return tcon;
    };

    /**
     * Revert one or more elements to the original state.
     * @public
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be reverted
     * @returns {transformicon} transformicon instance for chaining
     */
    tcon.revert = function (elements) {
        getElementList(elements).forEach(function(element) {
            element.classList.remove(_transformClass);
        });
        return tcon;
    };

    /**
     * Toggles one or more elements between transformed and original state.
     * @public
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
     * @returns {transformicon} transformicon instance for chaining
     */
    tcon.toggle = function (elements) {
        getElementList(elements).forEach(function(element) {
            tcon[element.classList.contains(_transformClass) ? 'revert' : 'transform'](element);
        });
        return tcon;
    };

    return tcon;
}));
/*! smooth-scroll v7.1.0 | (c) 2015 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,r,o,a={},u="querySelector"in document&&"addEventListener"in e,c={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},i=function(){var e={},t=!1,n=0,r=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var o=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=i(!0,e[r],n[r]):e[r]=n[r])};r>n;n++){var a=arguments[n];o(a)}return e},s=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},l=function(e,t){var n,r,o=t.charAt(0),a="classList"in document.documentElement;for("["===o&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(r=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document;e=e.parentNode){if("."===o)if(a){if(e.classList.contains(t.substr(1)))return e}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e;if("#"===o&&e.id===t.substr(1))return e;if("["===o&&e.hasAttribute(n[0])){if(!r)return e;if(e.getAttribute(n[0])===n[1])return e}if(e.tagName.toLowerCase()===t)return e}return null},f=function(e){for(var t,n=String(e),r=n.length,o=-1,a="",u=n.charCodeAt(0);++o<r;){if(t=n.charCodeAt(o),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&31>=t||127==t||0===o&&t>=48&&57>=t||1===o&&t>=48&&57>=t&&45===u?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(o):"\\"+n.charAt(o)}return a},d=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},m=function(e,t,n){var r=0;if(e.offsetParent)do r+=e.offsetTop,e=e.offsetParent;while(e);return r=r-t-n,r>=0?r:0},h=function(){return Math.max(e.document.body.scrollHeight,e.document.documentElement.scrollHeight,e.document.body.offsetHeight,e.document.documentElement.offsetHeight,e.document.body.clientHeight,e.document.documentElement.clientHeight)},p=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},g=function(t,n){e.history.pushState&&(n||"true"===n)&&e.history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))},b=function(e){return null===e?0:s(e)+e.offsetTop};a.animateScroll=function(t,n,a){var u=p(t?t.getAttribute("data-options"):null),s=i(s||c,a||{},u);n="#"+f(n.substr(1));var l="#"===n?e.document.documentElement:e.document.querySelector(n),v=e.pageYOffset;r||(r=e.document.querySelector(s.selectorHeader)),o||(o=b(r));var y,O,S,I=m(l,o,parseInt(s.offset,10)),H=I-v,E=h(),L=0;g(n,s.updateURL);var j=function(r,o,a){var u=e.pageYOffset;(r==o||u==o||e.innerHeight+u>=E)&&(clearInterval(a),l.focus(),s.callback(t,n))},w=function(){L+=16,O=L/parseInt(s.speed,10),O=O>1?1:O,S=v+H*d(s.easing,O),e.scrollTo(0,Math.floor(S)),j(S,I,y)},C=function(){y=setInterval(w,16)};0===e.pageYOffset&&e.scrollTo(0,0),C()};var v=function(e){var n=l(e.target,t.selector);n&&"a"===n.tagName.toLowerCase()&&(e.preventDefault(),a.animateScroll(n,n.hash,t))},y=function(e){n||(n=setTimeout(function(){n=null,o=b(r)},66))};return a.destroy=function(){t&&(e.document.removeEventListener("click",v,!1),e.removeEventListener("resize",y,!1),t=null,n=null,r=null,o=null)},a.init=function(n){u&&(a.destroy(),t=i(c,n||{}),r=e.document.querySelector(t.selectorHeader),o=b(r),e.document.addEventListener("click",v,!1),r&&e.addEventListener("resize",y,!1))},a});
/*-------------------------------

	POPUP.JS

	Simple Popup plugin for jQuery

	@author Todd Francis
	@version 2.2.3

-------------------------------*/

;(function($, window){

	'use strict';

	/**
	 * Popup jQuery method
	 *
	 * @param  {Object} settings
	 * @return {Object}
	 */
	$.fn.popup = function(settings){

		var selector = this.selector,
			popup = new $.Popup(settings);

		$(document)
			.on('click.popup', selector, function(e){

				var content = settings && settings.content
					? settings.content
					: $(this).attr('href');

				e.preventDefault();

				popup.open(content, undefined, this);

			});

		return this.each(function(){


			$(this)
				.data('popup', popup);

		});

	};

	/**
	 * Main Popup Class
	 *
	 * @param {Object} settings
	 */
	$.Popup = function(settings)
	{

		var p = this,
			defaults = {

				// Markup
				backClass : 'popup_back',
				backOpacity : 0.7,
				containerClass : 'popup_cont',
				closeContent : '<div class="popup_close">&times;</div>',
				markup : '<div class="popup"><div class="popup_content"/></div>',
				contentClass : 'popup_content',
				preloaderContent : '<p class="preloader">Loading</p>',
				activeClass : 'popup_active',
				hideFlash : false,
				speed : 200,
				popupPlaceholderClass : 'popup_placeholder',
				keepInlineChanges :  true,

				// Content
				modal : false,
				content : null,
				type : 'auto',
				width : null,
				height : null,

				// Params
				typeParam : 'pt',
				widthParam : 'pw',
				heightParam : 'ph',

				// Callbacks
				beforeOpen : function(type){},
				afterOpen : function(){},
				beforeClose : function(){},
				afterClose : function(){},
				error : function(){},
				show : function($popup, $back){

					var plugin = this;

					// Center the popup
					plugin.center();

					// Animate in
					$popup
						.animate({opacity : 1}, plugin.o.speed, function(){
							// Call the open callback
							plugin.o.afterOpen.call(plugin);
						});

				},
				replaced : function($popup, $back){

					// Center the popup and call the open callback
					this
						.center()
						.o.afterOpen.call(this);

				},
				hide : function($popup, $back){

					if( $popup !== undefined ){

						// Fade the popup out
						$popup.animate({opacity : 0}, this.o.speed);

					}

				},
				types : {
					inline : function(content, callback){

						var $content = $(content);

						$content
							.addClass(p.o.popupPlaceholderClass);

						// If we don't want to keep any inline changes,
						// get a fresh copy now
						if( !p.o.keepInlineChanges ){
							cachedContent = $content.html();
						}

						callback.call(this, $content.children());

					},
					image : function(content, callback){

						var plugin = this;

						var $image = $('<img />')
							.one('load', function(){

								var img = this;

								// Timeout for Webkit
								// As the width/height of the image is 0 initially
								setTimeout(function(){

									callback.call(plugin, img);

								}, 0);

							})
							.one('error', function(){

								p.o.error.call(p, content, 'image');

							})
							.attr('src', content)
							.each(function() {

								if( this.complete ){

									$(this).trigger('load');

								}

							});

					},
					external : function(content, callback){

						var $frame = $('<iframe />')
							.attr({
								src : content,
								frameborder : 0,
								width : p.width,
								height : p.height
							});

							callback.call(this, $frame);

					},
					html					: function(content, callback){

						callback.call(this, content);

					},
					jQuery					: function(content, callback){

						callback.call(this, content.html());

					},
					'function'				: function(content, callback){

						callback.call(this, content.call(p));

					},
					ajax					: function(content, callback){

						$.ajax({
							url : content,
							success : function(data){
								callback.call(this, data);
							},
							error : function(data){
								p.o.error.call(p, content, 'ajax');
							}
						});

					}
				}
			},
			imageTypes = ['png', 'jpg', 'gif'],
			type,
			cachedContent,
			$back,
			$pCont,
			$close,
			$preloader,
			$p;

		p.ele = undefined;

		p.o = $.extend(true, {}, defaults, settings);

		/**
		 * Opens a new popup window
		 *
		 * @param  {string} content
		 * @param  {string} popupType
		 * @param  {Object} ele
		 * @return {void}
		 */
		p.open = function(content, popupType, ele){

			// Get the content
			content = ( content === undefined || content === '#' )
				? p.o.content
				: content;

			// If no content is set
			if( content === null ){

				p.o.error.call(p, content, type);
				return false;

			}

			// Was an element passed in?
			if( ele !== undefined ){

				// Remove current active class
				if( p.ele && p.o.activeClass ){

					$(p.ele).removeClass(p.o.activeClass);

				}

				// Record the element
				p.ele = ele;

				// Add an active class
				if( p.ele && p.o.activeClass ){

					$(p.ele).addClass(p.o.activeClass);

				}

			}

			// If we're not open already
			if( $back === undefined ){

				// Create back and fade in
				$back = $('<div class="'+p.o.backClass+'"/>')
					.appendTo($('body'))
					.css('opacity', 0)
					.animate({
						opacity : p.o.backOpacity
					}, p.o.speed);

				// If modal isn't specified, bind click event
				if( !p.o.modal ){

					$back.one('click.popup', function(){
						p.close();
					});

				}

				// Should we hide the flash?
				if( p.o.hideFlash ){

					$('object, embed').css('visibility', 'hidden');

				}

				// Preloader
				if( p.o.preloaderContent ){

					$preloader = $(p.o.preloaderContent)
						.appendTo($('body'));

				}

			}

			// Get the popupType
			popupType = getValue([popupType, p.o.type]);

			// If it's at auto, guess a real type
			popupType = ( popupType === 'auto' )
				? guessType(content)
				: popupType;

			// Cache the type to use globally
			type = popupType;

			// Do we have a width set?
			p.width = ( p.o.width )
				? p.o.width
				: null;

			// Do we have a height set?
			p.height = ( p.o.height )
				? p.o.height
				: null;

			// If it's not inline, jQuery or a function
			// it might have params, and they are top priority
			if( $.inArray(popupType, ['inline', 'jQuery', 'function']) === -1 ){

				var paramType = getParameterByName(p.o.typeParam, content),
					paramWidth = getParameterByName(p.o.widthParam, content),
					paramHeight = getParameterByName(p.o.heightParam, content);

				// Do we have an overriding paramter?
				popupType = ( paramType !== null )
					? paramType
					: popupType;

				// Do we have an overriding width?
				p.width = ( paramWidth !== null )
					? paramWidth
					: p.width;

				// Do we have an overriding height?
				p.height = ( paramHeight !== null )
					? paramHeight
					: p.height;
			}

			// Callback
			p.o.beforeOpen.call(p, popupType);

			// Show the content based
			if( p.o.types[popupType] ){

				p.o.types[popupType].call(p, content, showContent);

			}else{

				p.o.types.ajax.call(p, content, showContent);

			}

		};

		/**
		 * Return the correct value to be used
		 *
		 * @param  {array} items
		 * @return {mixed}
		 */
		function getValue(items){

			var finalValue;

			$.each(items, function(i, value){

				if( value ){
					finalValue = value;
					return false;
				}

			});

			return finalValue;

		}

		/**
		 * Guess the type of content to show
		 *
		 * @param  {string|Object|function} content
		 * @return {string}
		 */
		function guessType(content){

			if( typeof content === 'function' ){

				return 'function';

			} else if( content instanceof $ ){

				return 'jQuery';

			} else if( content.substr(0, 1) === '#' || content.substr(0, 1) === '.' ){

				return 'inline';

			} else if( $.inArray(content.substr(content.length - 3), imageTypes) !== -1 ) {

				return 'image';

			} else if( content.substr(0, 4) === 'http' ) {

				return 'external';

			}else{

				return 'ajax';

			}

		}

		/**
		 * Shows the content
		 *
		 * @param  {string} content
		 * @return {void}
		 */
		function showContent(content){

			// Do we have a preloader?
			if( $preloader ){

				// If so, hide!
				$preloader.fadeOut('fast', function(){

					$(this).remove();

				});

			}

			// Presume we're replacing
			var replacing = true;

			// If we're not open already
			if( $pCont === undefined ){

				// We're not replacing!
				replacing = false;

				// Create the container
				$pCont = $('<div class="'+p.o.containerClass+'">');

				// Add in the popup markup
				$p = $(p.o.markup)
					.appendTo($pCont);

				// Add in the close button
				$close = $(p.o.closeContent)
					.one('click', function(){

						p.close();

					})
					.appendTo($pCont);

				// Bind the resize event
				$(window).resize(p.center);

				// Append the container to the body
				// and set the opacity
				$pCont
					.appendTo($('body'))
					.css('opacity', 0);

			}

			// Get the actual content element
			var $pContent = $('.'+p.o.contentClass, $pCont);

			// Do we have a set width/height?
			if( p.width ){

				$pContent.css('width', p.width, 10);

			}else{

				$pContent.css('width', '');
			}

			if( p.height ){

				$pContent.css('height', p.height, 10);

			}else{

				$pContent.css('height', '');

			}

			// Put the content in place!
			if( $p.hasClass(p.o.contentClass) ){

				$p
					.html(content);

			}else{

				$p
					.find('.'+p.o.contentClass)
					.html(content);

			}

			// Callbacks!
			if( !replacing ){

				p.o.show.call(p, $pCont, $back);

			}else{

				p.o.replaced.call(p, $pCont, $back);

			}

		}

		/**
		 * Close the popup
		 *
		 * @return {Object}
		 */
		p.close = function(){

			p.o.beforeClose.call(p);

			// If we got some inline content, cache it
			// so we can put it back
			if(
				type === 'inline' &&
				p.o.keepInlineChanges
			){
				cachedContent = $('.'+p.o.contentClass).html();
			}

			if( $back !== undefined ){

				// Fade out the back
				$back.animate({opacity : 0}, p.o.speed, function(){

					// Clean up after ourselves
					p.cleanUp();

				});

			}

			// Call the hide callback
			p.o.hide.call(p, $pCont, $back);

			return p;

		};

		/**
		 * Clean up the popup
		 *
		 * @return {Object}
		 */
		p.cleanUp = function(){

			$back
				.add($pCont)
				.remove();

			$pCont = $back = undefined;

			// Unbind the resize event
			$(window).unbind('resize', p.center);

			// Did we hide the flash?
			if( p.o.hideFlash ){

				$('object, embed').css('visibility', 'visible');

			}

			// Remove active class if we can
			if( p.ele && p.o.activeClass ){

				$(p.ele).removeClass(p.o.activeClass);

			}

			var $popupPlaceholder = $('.'+p.o.popupPlaceholderClass);

			// If we got inline content
			// put it back
			if(
				type == 'inline' &&
				$popupPlaceholder.length
			){
				$popupPlaceholder
					.html(cachedContent)
					.removeClass(p.o.popupPlaceholderClass);
			}

			type = null;

			// Call the afterClose callback
			p.o.afterClose.call(p);

			return p;

		};

		/**
		 * Centers the popup
		 *
		 * @return {Object}
		 */
		p.center = function(){

			$pCont.css(p.getCenter());

			// Only need force for IE6
			$back.css({
				height : document.documentElement.clientHeight
			});

			return p;

		};

		/**
		 * Get the center co-ordinates
		 *
		 * Returns the top/left co-ordinates to
		 * put the popup in the center
		 *
		 * @return {Object} top/left keys
		 */
		p.getCenter = function(){

			var pW = $pCont.children().outerWidth(true),
				pH = $pCont.children().outerHeight(true),
				wW = document.documentElement.clientWidth,
				wH = document.documentElement.clientHeight;

			return {
				top : wH * 0.5 - pH * 0.5,
				left : wW * 0.5 - pW * 0.5
			};

		};

		/**
		 * Get parameters by name
		 * @param  {string} name
		 * @return {null|string} null if not found
		 */
		function getParameterByName(name, url){

			var match = new RegExp('[?&]'+name+'=([^&]*)')
				.exec(url);

			return match && decodeURIComponent(match[1].replace(/\+/g, ' '));

		}

	};

}(jQuery, window));