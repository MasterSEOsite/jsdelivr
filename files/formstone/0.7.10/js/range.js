/*! formstone v0.7.10 [range.js] 2015-07-27 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){v.iterate.call(w,i)}function d(){w=a(s.element)}function e(a){a.formatter||(a.formatter=q),a.min=parseFloat(this.attr("min"))||0,a.max=parseFloat(this.attr("max"))||100,a.step=parseFloat(this.attr("step"))||1,a.digits=a.step.toString().length-a.step.toString().indexOf("."),a.value=parseFloat(this.val())||a.min+(a.max-a.min)/2;var b="";a.disbaled=this.is(":disabled"),a.vertical="vertical"===this.attr("orient")||a.vertical,b+='<div class="'+t.track+'">',b+='<div class="'+t.handle+'">',b+='<span class="'+t.marker+'"></span>',b+="</div>",b+="</div>";var c=[t.base,a.customClass,a.vertical?t.vertical:"",a.labels?t.labels:"",a.disabled?t.disabled:""];if(this.addClass(t.element).wrap('<div class="'+c.join(" ")+'"></div>').after(b),a.$container=this.parents(s.base),a.$track=a.$container.find(s.track),a.$handle=a.$container.find(s.handle),a.$output=a.$container.find(s.output),a.labels){var e='<span class="'+[t.label,t.label_max].join(" ")+'">'+a.formatter.call(this,a.labels.max?a.labels.max:a.max)+"</span>",f='<span class="'+[t.label,t.label_min].join(" ")+'">'+a.formatter.call(this,a.labels.max?a.labels.min:a.min)+"</span>";a.$container.prepend(a.vertical?e:f).append(a.vertical?f:e)}a.$labels=a.$container.find(s.label),this.on(u.focus,a,m).on(u.blur,a,n).on(u.change,a,p),a.$container.fsTouch({pan:!0,axis:a.vertical?"y":"x"}).on(u.panStart,a,j).on(u.pan,a,k).on(u.panEnd,a,l),d(),i.call(this,a)}function f(a){a.$container.off(u.namespace).fsTouch("destroy"),a.$track.remove(),a.$labels.remove(),this.unwrap().removeClass(t.element).off(u.namespace),d()}function g(a){a.disabled&&(this.prop("disabled",!1),a.$container.removeClass(t.disabled),a.disabled=!1)}function h(a){a.disabled||(this.prop("disabled",!0),a.$container.addClass(t.disabled),a.disabled=!0)}function i(a){a.stepCount=(a.max-a.min)/a.step,a.offset=a.$track.offset(),a.vertical?(a.trackHeight=a.$track.outerHeight(),a.handleHeight=a.$handle.outerHeight(),a.increment=a.trackHeight/a.stepCount):(a.trackWidth=a.$track.outerWidth(),a.handleWidth=a.$handle.outerWidth(),a.increment=a.trackWidth/a.stepCount);var b=(a.$el.val()-a.min)/(a.max-a.min);o(a,b,!0)}function j(a){v.killEvent(a);var b=a.data;b.disbaled||(k(a),b.$container.addClass(t.focus))}function k(a){v.killEvent();var b=a.data,c=0;c=b.vertical?1-(a.pageY-b.offset.top)/b.trackHeight:(a.pageX-b.offset.left)/b.trackWidth,o(b,c)}function l(a){v.killEvent(a);var b=a.data;b.$container.removeClass(t.focus)}function m(a){a.data.$container.addClass("focus")}function n(a){a.data.$container.removeClass("focus")}function o(a,b,c){a.increment>1&&(b=a.vertical?Math.round(b*a.stepCount)*a.increment/a.trackHeight:Math.round(b*a.stepCount)*a.increment/a.trackWidth),0>b&&(b=0),b>1&&(b=1);var d=(a.min-a.max)*b;d=-parseFloat(d.toFixed(a.digits)),a.$handle.css(a.vertical?"bottom":"left",100*b+"%"),d+=a.min,d!==a.value&&d&&c!==!0&&(a.$el.val(d).trigger(u.change,[!0]),a.value=d)}function p(a,b){var c=a.data;if(!b&&!c.disabled){var d=(c.$el.val()-c.min)/(c.max-c.min);o(c,d)}}function q(a){var b=a.toString().split(".");return b[0]=b[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),b.join(".")}var r=b.Plugin("range",{widget:!0,defaults:{customClass:"",formatter:!1,labels:{max:!1,min:!1},vertical:!1},classes:["track","handle","marker","labels","label","label_min","label_max","vertical","focus","disabled"],methods:{_construct:e,_destruct:f,_resize:c,enable:g,disable:h,resize:i},events:{panStart:"panstart",pan:"pan",panEnd:"panend"}}),s=r.classes,t=s.raw,u=r.events,v=r.functions,w=[]}(jQuery,Formstone);