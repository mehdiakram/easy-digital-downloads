!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}({8:function(e,t){var r={init:function(){this.submit()},submit:function(){$(".edd-import-form").ajaxForm({beforeSubmit:this.before_submit,success:this.success,complete:this.complete,dataType:"json",error:this.error})},before_submit:function(e,t,r){if(t.find(".notice-wrap").remove(),t.append('<div class="notice-wrap"><span class="spinner is-active"></span><div class="edd-progress"><div></div></div></div>'),!(window.File&&window.FileReader&&window.FileList&&window.Blob)){const e=$(".edd-import-form").find(".edd-progress").parent().parent(),t=e.find(".notice-wrap");return e.find(".button-disabled").removeClass("button-disabled"),t.html('<div class="update error"><p>'+edd_vars.unsupported_browser+"</p></div>"),!1}},success:function(e,t,r,n){},complete:function(e){const t=$(this),n=jQuery.parseJSON(e.responseText);if(n.success){const e=$(".edd-import-form .notice-wrap").parent();e.find(".edd-import-file-wrap,.notice-wrap").remove(),e.find(".edd-import-options").slideDown();let o=e.find("select.edd-import-csv-column"),i=(o.parents("tr").first(),""),s=n.data.columns.sort(function(e,t){return e<t?-1:e>t?1:0});$.each(s,function(e,t){i+='<option value="'+t+'">'+t+"</option>"}),o.append(i),o.on("change",function(){const e=$(this).val();e&&!1!==n.data.first_row[e]?$(this).parent().next().html(n.data.first_row[e]):$(this).parent().next().html("")}),$.each(o,function(){$(this).val($(this).attr("data-field")).change()}),$(document.body).on("click",".edd-import-proceed",function(o){o.preventDefault(),e.append('<div class="notice-wrap"><span class="spinner is-active"></span><div class="edd-progress"><div></div></div></div>'),n.data.mapping=e.serialize(),r.process_step(1,n.data,t)})}else r.error(e)},error:function(e){const t=jQuery.parseJSON(e.responseText),r=$(".edd-import-form").find(".edd-progress").parent().parent(),n=r.find(".notice-wrap");r.find(".button-disabled").removeClass("button-disabled"),t.data.error?n.html('<div class="update error"><p>'+t.data.error+"</p></div>"):n.remove()},process_step:function(e,t,n){$.ajax({type:"POST",url:ajaxurl,data:{form:t.form,nonce:t.nonce,class:t.class,upload:t.upload,mapping:t.mapping,action:"edd_do_ajax_import",step:e},dataType:"json",success:function(e){if("done"===e.data.step||e.data.error){const t=$(".edd-import-form").find(".edd-progress").parent().parent(),r=t.find(".notice-wrap");t.find(".button-disabled").removeClass("button-disabled"),e.data.error?r.html('<div class="update error"><p>'+e.data.error+"</p></div>"):(t.find(".edd-import-options").hide(),$("html, body").animate({scrollTop:t.parent().offset().top},500),r.html('<div class="updated"><p>'+e.data.message+"</p></div>"))}else $(".edd-progress div").animate({width:e.data.percentage+"%"},50,function(){}),r.process_step(parseInt(e.data.step),t,n)}}).fail(function(e){window.console&&window.console.log&&console.log(e)})}};jQuery(document).ready(function(e){r.init()})}});