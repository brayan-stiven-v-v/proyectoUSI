var $jscomp={scope:{},findInternal:function(a,t,n){a instanceof String&&(a=String(a));for(var q=a.length,v=0;v<q;v++){var A=a[v];if(t.call(n,A,v,a))return{i:v,v:A}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,t,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[t]=n.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,t,n,q){if(t){n=$jscomp.global;a=a.split(".");for(q=0;q<a.length-1;q++){var v=a[q];v in n||(n[v]={});n=n[v]}a=a[a.length-1];q=n[a];t=t(q);t!=q&&null!=t&&$jscomp.defineProperty(n,a,{configurable:!0,writable:!0,value:t})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,n){return $jscomp.findInternal(this,a,n).v}},"es6-impl","es3");
(function(a){"function"===typeof define&&define.amd?define(["jquery","./grid.base","./jquery.fmatter","./grid.common"],a):"object"===typeof exports?a(require("jquery")):a(jQuery)})(function(a){var t=a.jgrid,n=t.jqID,q=a.fn.jqGrid,v=q.getGuiStyles,A=q.getGridRes;t.extend({getColProp:function(a){var c=this[0];return null!=c&&c.grid&&(a=c.p.iColByName[a],void 0!==a)?c.p.colModel[a]:{}},setColProp:function(e,c){return this.each(function(){var d=this.p,b;this.grid&&null!=d&&c&&(b=d.iColByName[e],void 0!==
b&&a.extend(!0,d.colModel[b],c))})},sortGrid:function(a,c,d){return this.each(function(){var b=this.grid,f=this.p,h=f.colModel,p=h.length,l,g,u=!1;if(b)for(a||(a=f.sortname),"boolean"!==typeof c&&(c=!1),g=0;g<p;g++)if(l=h[g],l.index===a||l.name===a){!0===f.frozenColumns&&!0===l.frozen&&(u=b.fhDiv.find("#"+f.id+"_"+a));u&&0!==u.length||(u=b.headers[g].el);b=l.sortable;("boolean"!==typeof b||b)&&this.sortData("jqgh_"+f.id+"_"+a,g,c,d,u);break}})},clearBeforeUnload:function(){return this.each(function(){var e=
this.p,c=this.grid,d,b=t.clearArray,f=Object.prototype.hasOwnProperty;a.isFunction(c.emptyRows)&&c.emptyRows.call(this,!0,!0);a(document).unbind("mouseup.jqGrid"+e.id);a(c.hDiv).unbind("mousemove");a(this).unbind();var h,p=c.headers.length;for(h=0;h<p;h++)c.headers[h].el=null;for(d in c)c.hasOwnProperty(d)&&(c.propOrMethod=null);c="formatCol sortData updatepager refreshIndex setHeadCheckBox constructTr clearToolbar fixScrollOffsetAndhBoxPadding rebuildRowIndexes modalAlert toggleToolbar triggerToolbar formatter addXmlData addJSONData ftoolbar _inlinenav nav grid p".split(" ");
p=c.length;for(h=0;h<p;h++)f.call(this,c[h])&&(this[c[h]]=null);this._index={};b(e.data);b(e.lastSelectedData);b(e.selarrrow);b(e.savedRow)})},GridDestroy:function(){return this.each(function(){var e=this.p;if(this.grid&&null!=e){e.pager&&a(e.pager).remove();try{a("#alertmod_"+n(e.id)).remove(),a(this).jqGrid("clearBeforeUnload"),a(e.gBox).remove()}catch(c){}}})},GridUnload:function(){return this.each(function(){var e=a(this),c=this.p,d=a.fn.jqGrid;this.grid&&(e.removeClass(d.getGuiStyles.call(e,
"grid","ui-jqgrid-btable")),c.pager&&a(c.pager).empty().removeClass(d.getGuiStyles.call(e,"pagerBottom","ui-jqgrid-pager")).removeAttr("style").removeAttr("dir"),e.jqGrid("clearBeforeUnload"),e.removeAttr("style").removeAttr("tabindex").removeAttr("role").removeAttr("aria-labelledby").removeAttr("style"),e.empty(),e.insertBefore(c.gBox).show(),a(c.pager).insertBefore(c.gBox).show(),a(c.gBox).remove())})},setGridState:function(e){return this.each(function(){var c=this.p,d=this.grid,b=d.cDiv,f=a(d.uDiv),
h=a(d.ubDiv);if(d&&null!=c){var d=q.getIconRes.call(this,"gridMinimize.visible"),p=q.getIconRes.call(this,"gridMinimize.hidden");"hidden"===e?(a(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv",c.gView).slideUp("fast"),c.pager&&a(c.pager).slideUp("fast"),c.toppager&&a(c.toppager).slideUp("fast"),!0===c.toolbar[0]&&("both"===c.toolbar[1]&&h.slideUp("fast"),f.slideUp("fast")),c.footerrow&&a(".ui-jqgrid-sdiv",c.gBox).slideUp("fast"),a(".ui-jqgrid-titlebar-close span",b).removeClass(d).addClass(p),c.gridstate="hidden"):
"visible"===e&&(a(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv",c.gView).slideDown("fast"),c.pager&&a(c.pager).slideDown("fast"),c.toppager&&a(c.toppager).slideDown("fast"),!0===c.toolbar[0]&&("both"===c.toolbar[1]&&h.slideDown("fast"),f.slideDown("fast")),c.footerrow&&a(".ui-jqgrid-sdiv",c.gBox).slideDown("fast"),a(".ui-jqgrid-titlebar-close span",b).removeClass(p).addClass(d),c.gridstate="visible")}})},filterToolbar:function(e){return this.each(function(){var c=this,d=c.grid,b=a(c),f=c.p,h=t.bindEv,p=t.info_dialog,
l=t.htmlEncode;if(!this.ftoolbar){var g=a.extend(!0,{autosearch:!0,autosearchDelay:500,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,searchurl:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw",idMode:"new",searchOperators:!1,resetIcon:"&times;",applyLabelClasses:!0,loadFilterDefaults:!0,operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^","in":"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#"}},t.search,f.searching||{},e||{}),u=f.colModel,
N=function(a){return A.call(b,a)},q=N("errors.errcap"),P=N("edit.bClose"),I=N("edit.msg"),B=v.call(c,"states.hover"),E=v.call(c,"states.select"),J=v.call(c,"filterToolbar.dataField"),G={},y=function(a){var c="gs_";switch(g.idMode){case "compatibility":c+=f.idPrefix;break;case "new":c+=f.id+"_"}return c+a},D=function(c){var b;b=f.postData.filters;var d={},w,e,k,h;if(c)for(c=0;c<u.length;c++)k=u[c],!1!==k.search&&(h=k.searchoptions||{},d[k.name]={op:h.sopt?h.sopt[0]:"select"===k.stype?"eq":g.defaultSearch,
data:void 0!==h.defaultValue?h.defaultValue:""});if(!b||!f.search)return d;if("string"===typeof b)try{b=a.parseJSON(b)}catch(m){b={}}else b=b||{};w=b.rules||{};if(null==b||null!=b.groupOp&&null!=g.groupOp&&b.groupOp.toUpperCase()!==g.groupOp.toUpperCase()||null==w||0===w.length||null!=b.groups&&0<b.groups.length)return d;for(c=0;c<w.length;c++)for(e=w[c],b=0;b<u.length;b++)if(k=u[b],(k.index||k.name)===e.field&&!1!==k.search){h=k.searchoptions||{};if(h.sopt){if(0>a.inArray(e.op,h.sopt))continue}else if("select"===
k.stype){if("eq"!==e.op)continue}else if(e.op!==g.defaultSearch)continue;d[k.name]={op:e.op,data:e.data}}return d},H=function(){var e={},K=0,w={};a.each(u,function(){var b=this,h=b.index||b.name,r,k;r=b.searchoptions||{};var m=a("#"+n(y(b.name)),!0===b.frozen&&!0===f.frozenColumns?d.fhDiv:d.hDiv),Q=function(a,c){var d=b.formatoptions||{};return void 0!==d[a]?d[a]:N("formatter."+(c||b.formatter)+"."+a)},p=function(a){var c=Q("thousandsSeparator").replace(/([\.\*\_\'\(\)\{\}\+\?\\])/g,"\\$1");return a.replace(new RegExp(c,
"g"),"")};k=g.searchOperators?m.parent().prev().children("a").data("soper")||g.defaultSearch:r.sopt?r.sopt[0]:"select"===b.stype?"eq":g.defaultSearch;if("custom"===b.stype&&a.isFunction(r.custom_value)&&0<m.length&&"SPAN"===m[0].nodeName.toUpperCase())r=r.custom_value.call(c,m.children(".customelement").first(),"get");else if("select"===b.stype)r=m.val();else switch(r=a.trim(m.val()),b.formatter){case "integer":r=p(r).replace(Q("decimalSeparator","number"),".");""!==r&&(r=String(parseInt(r,10)));
break;case "number":r=p(r).replace(Q("decimalSeparator"),".");""!==r&&"0"===String(r).charAt(0)&&(r=String(parseFloat(r)));break;case "currency":var m=Q("prefix"),l=Q("suffix");m&&m.length&&(r=r.substr(m.length));l&&l.length&&(r=r.substr(0,r.length-l.length));r=p(r).replace(Q("decimalSeparator"),".");""!==r&&(r=String(parseFloat(r)))}if(r||"nu"===k||"nn"===k)e[h]=r,w[h]=k,K++;else if(e.hasOwnProperty(h)&&delete e[h],!g.stringResult&&!g.searchOperators&&"local"!==f.datatype)try{null!=f.postData&&f.postData.hasOwnProperty(h)&&
delete f.postData[h]}catch(C){}});var h=0<K?!0:!1;if(g.stringResult||g.searchOperators||"local"===f.datatype){var m='{"groupOp":"'+g.groupOp+'","rules":[',k=0;a.each(e,function(a,c){0<k&&(m+=",");m+='{"field":"'+a+'",';m+='"op":"'+w[a]+'",';m+='"data":"'+(c+"").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}';k++});m+="]}";a.extend(f.postData,{filters:m});a.each(["searchField","searchString","searchOper"],function(a,c){f.postData.hasOwnProperty(c)&&delete f.postData[c]})}else a.extend(f.postData,e);
var p;f.searchurl&&(p=f.url,b.jqGrid("setGridParam",{url:f.searchurl}));var l="stop"===b.triggerHandler("jqGridToolbarBeforeSearch")?!0:!1;!l&&a.isFunction(g.beforeSearch)&&(l=g.beforeSearch.call(c));l||b.jqGrid("setGridParam",{search:h}).trigger("reloadGrid",[a.extend({page:1},g.reloadGridSearchOptions||{})]);p&&b.jqGrid("setGridParam",{url:p});b.triggerHandler("jqGridToolbarAfterSearch");a.isFunction(g.afterSearch)&&g.afterSearch.call(c)},M=N("search.odata")||[],w=f.customSortOperations,m=function(d,
K,e){a("#sopt_menu").remove();K=parseInt(K,10);e=parseInt(e,10)+18;var h,m=0,k=[],p=a(d).data("soper"),m=a(d).data("colname"),C=a(".ui-jqgrid-view").css("font-size")||"11px";K="<ul id='sopt_menu' class='"+v.call(c,"searchToolbar.menu","ui-search-menu")+"' role='menu' tabindex='0' style='z-index:9999;display:block;font-size:"+C+";left:"+K+"px;top:"+e+"px;'>";m=f.iColByName[m];if(void 0!==m){m=u[m];e=a.extend({},m.searchoptions);var n,x;e.sopt||(e.sopt=[],e.sopt[0]="select"===m.stype?"eq":g.defaultSearch);
a.each(M,function(){k.push(this.oper)});null!=w&&a.each(w,function(a){k.push(a)});for(m=0;m<e.sopt.length;m++)C=e.sopt[m],h=a.inArray(C,k),-1!==h&&(h=M[h],void 0!==h?(x=g.operands[C],n=h.text):null!=w&&(n=w[C],x=n.operand,n=n.text),h=p===C?E:"",K+='<li class="ui-menu-item '+h+'" role="presentation"><a class="ui-corner-all g-menu-item" tabindex="0" role="menuitem" value="'+l(C)+'" data-oper="'+l(x)+'"><table><tr><td style="width:25px">'+l(x)+"</td><td>"+l(n)+"</td></tr></table></a></li>");K+="</ul>";
a("body").append(K);a("#sopt_menu").addClass("ui-menu ui-widget ui-widget-content ui-corner-all");a("#sopt_menu > li > a").hover(function(){a(this).addClass(B)},function(){a(this).removeClass(B)}).click(function(){var c=a(this).attr("value"),f=a(this).data("oper");b.triggerHandler("jqGridToolbarSelectOper",[c,f,d]);a("#sopt_menu").hide();a(d).text(f).data("soper",c);!0===g.autosearch&&(f=a(d).parent().next().children()[0],(a(f).val()||"nu"===c||"nn"===c)&&H())})}},C,T=a("<tr></tr>",{"class":"ui-search-toolbar",
role:"row form"});g.loadFilterDefaults&&(G=D()||{});a.each(u,function(b){var d,e;e="";var m,l,k=this.searchoptions||{},n=this.editoptions||{},u=a("<th></th>",{"class":v.call(c,"colHeaders","ui-th-column ui-th-"+f.direction+" "+(g.applyLabelClasses?this.labelClasses||"":"")),role:"gridcell","aria-describedby":f.id+"_"+this.name}),L=a("<div></div>"),x=a("<table class='ui-search-table'><tr><td class='ui-search-oper'></td><td class='ui-search-input'></td><td class='ui-search-clear' style='width:1px'></td></tr></table>");
!0===this.hidden&&a(u).css("display","none");this.search=!1===this.search?!1:!0;void 0===this.stype&&(this.stype="text");d=a.extend({mode:"filter"},k);if(this.search){if(g.searchOperators){e=f.search&&null!=G[this.name]?G[this.name].op:d.sopt?d.sopt[0]:"select"===this.stype?"eq":g.defaultSearch;for(l=0;l<M.length;l++)if(M[l].oper===e){m=g.operands[e]||"";break}if(void 0===m&&null!=w)for(var r in w)if(w.hasOwnProperty(r)&&r===e){m=w[r].operand;break}void 0===m&&(m="=");e="<a title='"+(null!=d.searchtitle?
d.searchtitle:N("search.operandTitle"))+"' data-soper='"+e+"' class='"+v.call(c,"searchToolbar.operButton","soptclass")+"' data-colname='"+this.name+"'>"+m+"</a>"}a("td",x).first().data("colindex",b).append(e);null!=d.sopt&&1!==d.sopt.length||a("td.ui-search-oper",x).hide();f.search&&null!=G[this.name]&&(d.defaultValue=G[this.name].data);void 0===d.clearSearch&&(d.clearSearch="text"===this.stype?!0:!1);d.clearSearch?(e=a.isFunction(g.resetTitle)?g.resetTitle.call(c,{options:g,cm:this,cmName:this.name,
iCol:b}):(N("search.resetTitle")||"Clear Search Value")+" "+t.stripHtml(f.colNames[b]),a("td",x).eq(2).append("<a title='"+e+"' aria-label='"+e+"' class='"+v.call(c,"searchToolbar.clearButton","clearsearchclass")+"'><span>"+g.resetIcon+"</span></a>")):a("td",x).eq(2).hide();switch(this.stype){case "select":if(e=this.surl||d.dataUrl)a(L).append(x),a.ajax(a.extend({url:e,context:{stbl:x,options:d,cm:this,iCol:b},dataType:"html",success:function(a,b,e){b=this.cm;var f=this.iCol,m=this.options,w=this.stbl.find(">tbody>tr>td.ui-search-input");
void 0!==m.buildSelect?(a=m.buildSelect.call(c,a,e,b,f))&&w.append(a):w.append(a);a=w.children("select");0===a.find("option[value='']").length&&"string"===typeof d.noFilterText&&(z=document.createElement("option"),z.value="",z.innerHTML=d.noFilterText,a.prepend(z));void 0!==m.defaultValue&&a.val(m.defaultValue);a.attr({name:b.index||b.name,id:y(b.name)});m.attr&&a.attr(m.attr);a.addClass(J);a.css({width:"100%"});h.call(c,a[0],m);t.fullBoolFeedback.call(c,m.selectFilled,"jqGridSelectFilled",{elem:a[0],
options:m,cm:b,cmName:b.name,iCol:f,mode:"filter"});!0===g.autosearch&&a.change(function(){H();return!1})}},t.ajaxOptions,f.ajaxSelectOptions||{}));else{var F,D,O;this.searchoptions?(F=void 0===k.value?n.value||"":k.value,D=void 0===k.separator?n.separator||":":k.separator,O=void 0===k.delimiter?n.delimiter||";":k.delimiter):this.editoptions&&(F=void 0===n.value?"":n.value,D=void 0===n.separator?":":n.separator,O=void 0===n.delimiter?";":n.delimiter);if(F){k=document.createElement("select");k.style.width=
"100%";a(k).attr({name:this.index||this.name,id:y(this.name),"aria-describedby":f.id+"_"+this.name});var z,E,A;if("string"===typeof F)for(e=F.split(O),O=0;O<e.length;O++)F=e[O].split(D),z=document.createElement("option"),z.value=F[0],""===F[0]&&(A=!0),z.innerHTML=F[1],k.appendChild(z);else if("object"===typeof F)for(E in F)F.hasOwnProperty(E)&&(z=document.createElement("option"),z.value=E,""===E&&(A=!0),z.innerHTML=F[E],k.appendChild(z));A||"string"!==typeof d.noFilterText||(z=document.createElement("option"),
z.value="",z.innerHTML=d.noFilterText,z.selected=!0,a(k).prepend(z));void 0!==d.defaultValue&&a(k).val(d.defaultValue);d.attr&&a(k).attr(d.attr);a(k).addClass(J);a(L).append(x);h.call(c,k,d);a("td",x).eq(1).append(k);t.fullBoolFeedback.call(c,d.selectFilled,"jqGridSelectFilled",{elem:k,options:this.searchoptions||n,cm:this,cmName:this.name,iCol:b,mode:"filter"});!0===g.autosearch&&a(k).change(function(){H();return!1})}}break;case "text":b=void 0!==d.defaultValue?d.defaultValue:"";a("td",x).eq(1).append("<input role='search' type='text' class='"+
J+"' name='"+(this.index||this.name)+"' id='"+y(this.name)+"' aria-labelledby='jqgh_"+f.id+"_"+this.name+"' value='"+b+"'/>");a(L).append(x);d.attr&&a("input",L).attr(d.attr);h.call(c,a("input",L)[0],d);!0===g.autosearch&&(g.searchOnEnter?a("input",L).keypress(function(a){return 13===(a.charCode||a.keyCode||0)?(H(),!1):this}):a("input",L).keydown(function(a){switch(a.which){case 13:return!1;case 9:case 16:case 37:case 38:case 39:case 40:case 27:break;default:C&&clearTimeout(C),C=setTimeout(function(){H()},
g.autosearchDelay)}}));break;case "custom":a("td",x).eq(1).append("<span style='width:100%;padding:0;box-sizing:border-box;' class='"+J+"' name='"+(this.index||this.name)+"' id='"+y(this.name)+"'/>");a(L).append(x);try{if(a.isFunction(d.custom_element)){var S=d.custom_element.call(c,void 0!==d.defaultValue?d.defaultValue:"",d);if(S)S=a(S).addClass("customelement"),a(L).find("span[name='"+(this.index||this.name)+"']").append(S);else throw"e2";}else throw"e1";}catch(R){"e1"===R&&p.call(c,q,"function 'custom_element' "+
I.nodefined,P),"e2"===R?p.call(c,q,"function 'custom_element' "+I.novalue,P):p.call(c,q,"string"===typeof R?R:R.message,P)}}}a(u).append(L);a(u).find(".ui-search-oper .soptclass,.ui-search-clear .clearsearchclass").hover(function(){a(this).addClass(B)},function(){a(this).removeClass(B)});a(T).append(u);g.searchOperators||a("td",x).eq(0).hide()});a(d.hDiv).find(">div>.ui-jqgrid-htable>thead").append(T);g.searchOperators&&(a(".soptclass",T).click(function(c){var b=a(this).offset();m(this,b.left,b.top);
c.stopPropagation()}),a("body").on("click",function(b){"soptclass"!==b.target.className&&a("#sopt_menu").hide()}));a(".clearsearchclass",T).click(function(){var b=a(this).parents("tr").first(),c=parseInt(a("td.ui-search-oper",b).data("colindex"),10),d=a.extend({},u[c].searchoptions||{}).defaultValue||"";"select"===u[c].stype?d?a("td.ui-search-input select",b).val(d):a("td.ui-search-input select",b)[0].selectedIndex=0:a("td.ui-search-input input",b).val(d);!0===g.autosearch&&H()});c.ftoolbar=!0;c.triggerToolbar=
H;c.clearToolbar=function(e){var m={},w=0,h;e="boolean"!==typeof e?!0:e;a.each(u,function(){var b,e=a("#"+n(y(this.name)),!0===this.frozen&&!0===f.frozenColumns?d.fhDiv:d.hDiv),g,k=this.searchoptions||{};void 0!==k.defaultValue&&(b=k.defaultValue);h=this.index||this.name;switch(this.stype){case "select":g=0<e.length?!e[0].multiple:!0;e.find("option").each(function(c){this.selected=0===c&&g;if(a(this).val()===b)return this.selected=!0,!1});if(void 0!==b)m[h]=b,w++;else try{delete f.postData[h]}catch(p){}break;
case "text":e.val(b||"");if(void 0!==b)m[h]=b,w++;else try{delete f.postData[h]}catch(p){}break;case "custom":a.isFunction(k.custom_value)&&0<e.length&&"SPAN"===e[0].nodeName.toUpperCase()&&k.custom_value.call(c,e.children(".customelement").first(),"set",b||"")}});var p=0<w?!0:!1;f.resetsearch=!0;if(g.stringResult||g.searchOperators||"local"===f.datatype){var k='{"groupOp":"'+g.groupOp+'","rules":[',l=0;a.each(m,function(a,b){0<l&&(k+=",");k+='{"field":"'+a+'",';k+='"op":"eq",';k+='"data":"'+(b+"").replace(/\\/g,
"\\\\").replace(/\"/g,'\\"')+'"}';l++});k+="]}";a.extend(f.postData,{filters:k});a.each(["searchField","searchString","searchOper"],function(a,b){f.postData.hasOwnProperty(b)&&delete f.postData[b]})}else a.extend(f.postData,m);var C;f.searchurl&&(C=f.url,b.jqGrid("setGridParam",{url:f.searchurl}));var t="stop"===b.triggerHandler("jqGridToolbarBeforeClear")?!0:!1;!t&&a.isFunction(g.beforeClear)&&(t=g.beforeClear.call(c));t||e&&b.jqGrid("setGridParam",{search:p}).trigger("reloadGrid",[a.extend({page:1},
g.reloadGridResetOptions||{})]);C&&b.jqGrid("setGridParam",{url:C});b.triggerHandler("jqGridToolbarAfterClear");a.isFunction(g.afterClear)&&g.afterClear()};c.toggleToolbar=function(){var c=a("tr.ui-search-toolbar",d.hDiv),e=!0===f.frozenColumns?a("tr.ui-search-toolbar",d.fhDiv):!1;"none"===c.css("display")?(c.show(),e&&e.show()):(c.hide(),e&&e.hide());!0===f.frozenColumns&&(b.jqGrid("destroyFrozenColumns"),b.jqGrid("setFrozenColumns"))};!0===f.frozenColumns&&(b.jqGrid("destroyFrozenColumns"),b.jqGrid("setFrozenColumns"));
b.bind("jqGridRefreshFilterValues.filterToolbar"+(g.loadFilterDefaults?" jqGridAfterLoadComplete.filterToolbar":""),function(){var b,c,d=D(!0)||{},e;if(g.stringResult||g.searchOperators||"local"===f.datatype||!f.search){for(b in d)d.hasOwnProperty(b)&&(c=d[b],e=a("#"+n(y(b))),"SELECT"===e[0].tagName.toUpperCase()&&e[0].multiple?e.val(c.data.split(",")):a.trim(e.val())!==c.data&&e.val(c.data),e=e.closest(".ui-search-input").siblings(".ui-search-oper").children(".soptclass"),e.data("soper",c.op),e.text(g.operands[c.op]));
for(c=0;c<f.colModel.length;c++)b=f.colModel[c].name,d.hasOwnProperty(b)||a("#"+n(y(b))).val("")}})}})},destroyFilterToolbar:function(){return this.each(function(){this.ftoolbar&&(this.toggleToolbar=this.clearToolbar=this.triggerToolbar=null,this.ftoolbar=!1,a(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove(),!0===this.p.frozenColumns&&a(this).jqGrid("destroyFrozenColumns").jqGrid("setFrozenColumns"))})},destroyGroupHeader:function(e){void 0===e&&(e=!0);return this.each(function(){var c,
d,b,f;c=this.grid;var h=this.p.colModel,p=a("table.ui-jqgrid-htable thead",c.hDiv);if(c){a(this).unbind(".setGroupHeaders");var l=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels"),g=c.headers;c=0;for(d=g.length;c<d;c++){b=h[c].hidden?"none":"";b=a(g[c].el).width(g[c].width).css("display",b);try{b.removeAttr("rowSpan")}catch(n){b.attr("rowSpan",1)}l.append(b);f=b.children("span.ui-jqgrid-resize");0<f.length&&(f[0].style.height="");b.children("div")[0].style.top=""}a(p).children("tr.ui-jqgrid-labels").remove();
a(p).prepend(l);!0===e&&a(this).jqGrid("setGridParam",{groupHeader:null})}})},setGroupHeaders:function(e){e=a.extend({useColSpanStyle:!1,applyLabelClasses:!0,groupHeaders:[]},e||{});return this.each(function(){this.p.groupHeader=e;var c,d,b=0,f,h,p,l,g,n,q=this.p,A=q.colModel,P=A.length,I=this.grid.headers,B=a("table.ui-jqgrid-htable",this.grid.hDiv),E=t.isCellClassHidden,J=B.children("thead").children("tr.ui-jqgrid-labels"),G=J.last().addClass("jqg-second-row-header");f=B.children("thead");var y=
B.find(".jqg-first-row-header");void 0===y[0]?y=a("<tr>",{role:"row","aria-hidden":"true"}).addClass("jqg-first-row-header").css("height","auto"):y.empty();var D=function(a,b){var c;for(c=0;c<b.length;c++)if(b[c].startColumnName===a)return b[c];return 0};a(this).prepend(f);f=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels jqg-third-row-header");for(c=0;c<P;c++)if(p=I[c].el,l=a(p),d=A[c],h={height:"0",width:I[c].width+"px",display:d.hidden?"none":""},a("<th>",{role:"gridcell"}).css(h).addClass("ui-first-th-"+
q.direction+(e.applyLabelClasses?" "+(d.labelClasses||""):"")).appendTo(y),p.style.width="",h=v.call(this,"colHeaders","ui-th-column-header ui-th-"+q.direction+" "+(e.applyLabelClasses?d.labelClasses||"":"")),g=D(d.name,e.groupHeaders)){b=g.numberOfColumns;n=g.titleText;for(g=d=0;g<b&&c+g<P;g++)A[c+g].hidden||E(A[c+g].classes)||d++;h=a("<th>").addClass(h).css({height:"22px","border-top":"0 none"}).html(n);0<d&&h.attr("colspan",String(d));q.headertitles&&h.attr("title",h.text());0===d&&h.hide();l.before(h);
f.append(p);--b}else 0===b?e.useColSpanStyle?l.attr("rowspan",J.length+1):(a("<th>").addClass(h).css({display:d.hidden?"none":"","border-top":"0 none"}).insertBefore(l),f.append(p)):(f.append(p),b--);q=a(this).children("thead");q.prepend(y);f.insertAfter(G);B.prepend(q);e.useColSpanStyle&&(B.find("span.ui-jqgrid-resize").each(function(){var b=a(this).parent();b.is(":visible")&&(this.style.cssText="height:"+b.height()+"px !important;cursor:col-resize;")}),B.find(".ui-th-column>div").each(function(){var b=
a(this),c=b.parent();c.is(":visible")&&c.is(":has(span.ui-jqgrid-resize)")&&!b.hasClass("ui-jqgrid-rotate")&&!b.hasClass("ui-jqgrid-rotateOldIE")&&b.css("top",(c.height()-b.outerHeight(!0))/2+"px")}));a(this).triggerHandler("jqGridAfterSetGroupHeaders")})},getNumberOfFrozenColumns:function(){var a=this;if(0===a.length)return 0;var a=a[0],a=a.p.colModel,c=a.length,d=-1,b;for(b=0;b<c&&!0===a[b].frozen;b++)d=b;return d+1},setFrozenColumns:function(){return this.each(function(){var e=this,c=a(e),d=e.p,
b=e.grid;if(b&&null!=d&&!0!==d.frozenColumns){var f=d.colModel,h,p=f.length,l=-1,g=!1,u=[],t=n(d.id),q=v.call(e,"states.hover"),A=v.call(e,"states.disabled");if(!0!==d.subGrid&&!0!==d.treeGrid&&!d.scroll){for(h=0;h<p&&!0===f[h].frozen;h++)g=!0,l=h,u.push("#jqgh_"+t+"_"+n(f[h].name));d.sortable&&(f=a(b.hDiv).find(".ui-jqgrid-htable .ui-jqgrid-labels"),f.sortable("destroy"),c.jqGrid("setGridParam",{sortable:{options:{items:0<u.length?">th:not(:has("+u.join(",")+"),:hidden)":">th:not(:hidden)"}}}),c.jqGrid("sortableColumns",
f));if(0<=l&&g){g=d.caption?a(b.cDiv).outerHeight():0;u=a(".ui-jqgrid-htable",d.gView).height();d.toppager&&(g+=a(b.topDiv).outerHeight());!0===d.toolbar[0]&&"bottom"!==d.toolbar[1]&&(g+=a(b.uDiv).outerHeight());b.fhDiv=a("<div style='position:absolute;overflow:hidden;"+("rtl"===d.direction?"right:0;border-top-left-radius:0;":"left:0;border-top-right-radius:0;")+"top:"+g+"px;height:"+u+"px;' class='"+v.call(e,"hDiv","frozen-div ui-jqgrid-hdiv")+"'></div>");b.fbDiv=a("<div style='position:absolute;overflow:hidden;"+
("rtl"===d.direction?"right:0;":"left:0;")+"top:"+(parseInt(g,10)+parseInt(u,10)+1)+"px;overflow:hidden;' class='frozen-bdiv ui-jqgrid-bdiv'></div>");a(d.gView).append(b.fhDiv);f=a(".ui-jqgrid-htable",d.gView).clone(!0);p=f[0].tHead.rows;if(d.groupHeader){a(p[0].cells).filter(":gt("+l+")").remove();a(p).filter(".jqg-third-row-header").each(function(){a(this).children("th[id]").each(function(){var b=a(this).attr("id");b&&b.substr(0,e.id.length+1)===e.id+"_"&&(b=b.substr(e.id.length+1),d.iColByName[b]>
l&&a(this).remove())})});var I=-1,B=-1,E,J;a(p).filter(".jqg-second-row-header").children("th").each(function(){E=parseInt(a(this).attr("colspan")||1,10);J=parseInt(a(this).attr("rowspan")||1,10);1<J?(I++,B++):E&&(I+=E,B++);if(I===l)return!1});I!==l&&(B=l);a(p).filter(".jqg-second-row-header,.ui-search-toolbar").each(function(){a(this).children(":gt("+B+")").remove()})}else a(p).each(function(){a(this).children(":gt("+l+")").remove()});a(f).width(1);a(b.fhDiv).append(f).mousemove(function(a){if(b.resizing)return b.dragMove(a),
!1}).scroll(function(){this.scrollLeft=0});d.footerrow&&(f=a(".ui-jqgrid-bdiv",d.gView).height(),b.fsDiv=a("<div style='position:absolute;"+("rtl"===d.direction?"right:0;":"left:0;")+"top:"+(parseInt(g,10)+parseInt(u,10)+parseInt(f,10)+1)+"px;' class='frozen-sdiv ui-jqgrid-sdiv'></div>"),a(d.gView).append(b.fsDiv),g=a(".ui-jqgrid-ftable",d.gView).clone(!0),a("tr",g).each(function(){a("td:gt("+l+")",this).remove()}),a(g).width(1),a(b.fsDiv).append(g));c.bind("jqGridSortCol.setFrozenColumns",function(c,
e,f){c=a("tr.ui-jqgrid-labels:last th:eq("+d.lastsort+")",b.fhDiv);e=a("tr.ui-jqgrid-labels:last th:eq("+f+")",b.fhDiv);a("span.ui-grid-ico-sort",c).addClass(A);a(c).attr("aria-selected","false");a("span.ui-icon-"+d.sortorder,e).removeClass(A);a(e).attr("aria-selected","true");d.viewsortcols[0]||d.lastsort===f||(a("span.s-ico",c).hide(),a("span.s-ico",e).show())});a(d.gView).append(b.fbDiv);a(b.bDiv).scroll(function(){a(b.fbDiv).scrollTop(a(this).scrollTop())});!0===d.hoverrows&&a(d.idSel).unbind("mouseover").unbind("mouseout");
var G=function(a,b){var c=a.height();1<=Math.abs(c-b)&&0<b&&(a.height(b),c=a.height(),1<=Math.abs(b-c)&&a.height(b+Math.round(b-c)))},y=function(a,b){var c=a.width();1<=Math.abs(c-b)&&(a.width(b),c=a.width(),1<=Math.abs(b-c)&&a.width(b+Math.round(b-c)))},D=function(b,c,e,f){var g,p,n,l,t,k,q;q=a(c).position().top;var u,v,x;if(null!=b&&0<b.length){b[0].scrollTop=c.scrollTop;b.css("rtl"===d.direction?{top:q,right:0}:{top:q,left:0});p=b.children("table").children("thead").children("tr");n=a(c).children("div").children("table").children("thead").children("tr");
0===n.length&&(p=a(b.children("table")[0].rows),n=a(a(c).children("div").children("table")[0].rows));g=Math.min(p.length,n.length);u=0<g?a(p[0]).position().top:0;v=0<g?a(n[0]).position().top:0;if(0<=e)for(0<=f&&(g=Math.min(f+1,g));e<g;e++)if(l=a(n[e]),"none"!==l.css("display")&&l.is(":visible")){q=l.position().top;f=a(p[e]);t=f.position().top;k=l.height();if(null!=d.groupHeader&&d.groupHeader.useColSpanStyle)for(x=l[0].cells,h=0;h<x.length;h++)l=x[h],null!=l&&"TH"===l.nodeName.toUpperCase()&&(k=Math.max(k,
a(l).height()));q=k+(q-v)+(u-t);G(f,q)}G(b,c.clientHeight)}},g={resizeDiv:!0,resizedRows:{iRowStart:0,iRowEnd:-1}},H={header:g,resizeFooter:!0,body:g};c.bind("jqGridAfterGridComplete.setFrozenColumns",function(){a(d.idSel+"_frozen").remove();a(b.fbDiv).height(b.hDiv.clientHeight);var e=a(this).clone(!0),f=e[0].rows,g=c[0].rows;a(f).filter("tr[role=row]").each(function(){a(this.cells).filter("td[role=gridcell]:gt("+l+")").remove()});b.fbRows=f;e.width(1).attr("id",d.id+"_frozen");e.appendTo(b.fbDiv);
if(!0===d.hoverrows){var h=function(b,c,d){a(b)[c](q);a(d[b.rowIndex])[c](q)};a(f).filter(".jqgrow").hover(function(){h(this,"addClass",g)},function(){h(this,"removeClass",g)});a(g).filter(".jqgrow").hover(function(){h(this,"addClass",f)},function(){h(this,"removeClass",f)})}D(b.fhDiv,b.hDiv,0,-1);D(b.fbDiv,b.bDiv,0,-1);b.sDiv&&D(b.fsDiv,b.sDiv,0,-1)});var M=function(c){a(b.fbDiv).scrollTop(a(b.bDiv).scrollTop());c.header.resizeDiv&&D(b.fhDiv,b.hDiv,c.header.iRowStart,c.header.iRowEnd);c.body.resizeDiv&&
D(b.fbDiv,b.bDiv,c.body.iRowStart,c.body.iRowEnd);c.resizeFooter&&b.sDiv&&c.resizeFooter&&D(b.fsDiv,b.sDiv,0,-1);var d=b.fhDiv[0].clientWidth;c.header.resizeDiv&&null!=b.fhDiv&&1<=b.fhDiv.length&&G(a(b.fhDiv),b.hDiv.clientHeight);c.body.resizeDiv&&null!=b.fbDiv&&0<b.fbDiv.length&&y(a(b.fbDiv),d);c.resizeFooter&&null!=b.fsDiv&&0<=b.fsDiv.length&&y(a(b.fsDiv),d)};a(d.gBox).bind("resizestop.setFrozenColumns",function(){setTimeout(function(){M(H)},50)});c.bind("jqGridInlineEditRow.setFrozenColumns jqGridInlineAfterRestoreRow.setFrozenColumns jqGridInlineAfterSaveRow.setFrozenColumns jqGridAfterEditCell.setFrozenColumns jqGridAfterRestoreCell.setFrozenColumns jqGridAfterSaveCell.setFrozenColumns jqGridResizeStop.setFrozenColumns",
function(a,b){var d=c.jqGrid("getInd",b);M({header:{resizeDiv:!1,resizedRows:{iRowStart:-1,iRowEnd:-1}},resizeFooter:!0,body:{resizeDiv:!0,resizedRows:{iRowStart:d,iRowEnd:d}}})});c.bind("jqGridResizeStop.setFrozenColumns",function(){M(H)});c.bind("jqGridResetFrozenHeights.setFrozenColumns",function(a,b){M(b||H)});b.hDiv.loading||c.triggerHandler("jqGridAfterGridComplete");d.frozenColumns=!0}}}})},destroyFrozenColumns:function(){return this.each(function(){var e=a(this),c=this.grid,d=this.p,b=n(d.id);
if(c&&!0===d.frozenColumns){a(c.fhDiv).remove();a(c.fbDiv).remove();c.fhDiv=null;c.fbDiv=null;c.fbRows=null;d.footerrow&&(a(c.fsDiv).remove(),c.fsDiv=null);e.unbind(".setFrozenColumns");if(!0===d.hoverrows){var f,h=v.call(this,"states.hover");e.bind("mouseover",function(b){f=a(b.target).closest("tr.jqgrow");"ui-subgrid"!==a(f).attr("class")&&a(f).addClass(h)}).bind("mouseout",function(b){f=a(b.target).closest("tr.jqgrow");a(f).removeClass(h)})}d.frozenColumns=!1;d.sortable&&(c=a(c.hDiv).find(".ui-jqgrid-htable .ui-jqgrid-labels"),
c.sortable("destroy"),e.jqGrid("setGridParam",{sortable:{options:{items:">th:not(:has(#jqgh_"+b+"_cb,#jqgh_"+b+"_rn,#jqgh_"+b+"_subgrid),:hidden)"}}}),e.jqGrid("sortableColumns",c))}})}})});
//# sourceMappingURL=grid.custom.map