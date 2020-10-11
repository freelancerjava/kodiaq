$(function(){"use strict";var t=$(".k2ng-page"),n=$('<aside class="back-to-top icon icon-arrow-small-up"><\/aside>');n.appendTo(t);$(window).scrollTop()>0&&n.fadeIn(500);$(window).on("scroll",function(){$(window).scrollTop()>0?n.fadeIn(250):n.fadeOut(250)});n.on("click",function(){$(document).scrollTop(0)})});
//# 
