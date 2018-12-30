!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("prop-types"),require("ramda"),require("react"),require("weblite-web-relite"));else if("function"==typeof define&&define.amd)define(["prop-types","ramda","react","weblite-web-relite"],r);else{var t="object"==typeof exports?r(require("prop-types"),require("ramda"),require("react"),require("weblite-web-relite")):r(e["prop-types"],e.ramda,e.react,e["weblite-web-relite"]);for(var a in t)("object"==typeof exports?exports:e)[a]=t[a]}}(window,function(e,r,t,a){return function(e){var r={};function t(a){if(r[a])return r[a].exports;var o=r[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(a,o,function(r){return e[r]}.bind(null,o));return a},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=4)}([function(r,t){r.exports=e},function(e,t){e.exports=r},function(e,r){e.exports=t},function(e,r){e.exports=a},function(e,r,t){e.exports=t(5)},function(e,r,t){"use strict";t.r(r);var a=t(2),o=t.n(a),n=t(0),i=t.n(n),l=t(3);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var f=function(e){var r=e.avatarSrc,t=e.avatarText,a=e.avatarBackgroundColor,n=e.avatarColor,i=e.avatarSize,f={width:i,height:i,fontSize:i/2};return t||r?o.a.createElement(l.ListItemAvatar,null,r?o.a.createElement(l.Avatar,{style:f,src:r}):o.a.createElement(l.Avatar,{style:function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(r){c(e,r,t[r])})}return e}({},f,{backgroundColor:a,color:n})},t)):null};f.propTypes={avatarSrc:i.a.string,avatarText:i.a.oneOfType([i.a.number,i.a.string]),avatarBackgroundColor:i.a.string.isRequired,avatarColor:i.a.string.isRequired,avatarSize:i.a.number.isRequired},f.defaultProps={avatarSrc:"",avatarText:""};var d=f,u=Function.prototype,s={listItem:{color:"white",padding:10},secondaryText:{overflow:"hidden",width:175,whiteSpace:"nowrap",textOverflow:"ellipsis"},primaryText:{paddingLeft:10,display:"flex",justifyContent:"space-between",flexDirection:"row",width:220},listItemIcon:{marginRight:4,verticalAlign:"bottom"},typography:{width:140,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",display:"inline-block"},listItemText:{paddingLeft:10},fatherDiv:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"},childDiv:{width:140,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontSize:14}};function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(r){p(e,r,t[r])})}return e}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var g=function(e){var r=e.index,t=e.onClick,a=e.id,n=e.data,i=e.primaryTextIcon,c=e.primaryText,f=e.primaryTextColor,u=e.date,p=e.secondaryText,g=e.secondaryTextColor,y=e.leftIcon,m=e.rightIcon,b=e.leftAvatarSrc,h=e.leftAvatarText,A=e.leftAvatarBackgroundColor,x=e.leftAvatarColor,C=e.leftAvatarSize,S=e.rightAvatarSrc,T=e.rightAvatarText,w=e.rightAvatarBackgroundColor,k=e.rightAvatarColor,O=e.rightAvatarSize;return o.a.createElement(l.ListItem,{button:!0,onClick:function(){return t({id:a,index:r,primaryText:c,secondaryText:p,data:n})}},y&&o.a.createElement(l.ListItemAvatar,null,y),d({avatarSrc:b,avatarText:h,avatarBackgroundColor:A,avatarColor:x,avatarSize:C}),o.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},o.a.createElement("div",{style:s.primaryText},o.a.createElement("div",{style:{color:f}},i&&o.a.createElement(l.ListItemAvatar,null,i),o.a.createElement("div",{style:v({color:f},s.typography)},c)),o.a.createElement("div",null,d({avatarSrc:S,avatarText:T,avatarBackgroundColor:w,avatarColor:k,avatarSize:O}),m&&o.a.createElement(l.ListItemAvatar,null,m))),o.a.createElement("div",{style:s.listItemText},o.a.createElement("div",{style:v({width:"100%",color:g},s.secondaryText)},o.a.createElement("div",{style:s.fatherDiv},o.a.createElement("div",{style:s.childDiv},p),o.a.createElement("div",{style:{fontSize:12,marginTop:10}},u))))))};g.propTypes={index:i.a.number.isRequired,onClick:i.a.func,data:i.a.shape({}),primaryTextIcon:i.a.element,primaryText:i.a.string.isRequired,primaryTextColor:i.a.string.isRequired,secondaryText:i.a.oneOfType([i.a.node,i.a.array,i.a.string]),secondaryTextColor:i.a.string.isRequired,id:i.a.string,leftIcon:i.a.element,rightIcon:i.a.element,leftAvatarSrc:i.a.string,leftAvatarText:i.a.oneOfType([i.a.number,i.a.string]),leftAvatarBackgroundColor:i.a.string.isRequired,leftAvatarColor:i.a.string.isRequired,leftAvatarSize:i.a.number.isRequired,rightAvatarSrc:i.a.string,rightAvatarText:i.a.oneOfType([i.a.number,i.a.string]),rightAvatarBackgroundColor:i.a.string.isRequired,rightAvatarColor:i.a.string.isRequired,rightAvatarSize:i.a.number.isRequired,date:i.a.string.isRequired},g.defaultProps={secondaryText:"",onClick:u,id:"",data:{},primaryTextIcon:null,leftIcon:null,rightIcon:null,leftAvatarSrc:"",leftAvatarText:"",rightAvatarSrc:"",rightAvatarText:""};var y=g,m=function(e){var r=e.title,t=e.list,a=e.separaterLine,n=e.selected,i=e.onClick,c=e.primaryTextColor,f=e.secondaryTextColor,d=e.hoverColor,u=e.selectedColor,s=e.leftAvatarBackgroundColor,v=e.leftAvatarColor,p=e.leftAvatarSize,g=e.rightAvatarBackgroundColor,m=e.rightAvatarColor,b=e.rightAvatarSize;return o.a.createElement(l.List,{subheader:r&&o.a.createElement(l.ListSubheader,null,r)},t.map(function(e,r){return o.a.createElement("div",{key:e.id||r},o.a.createElement(y,{primaryTextIcon:e.primaryTextIcon,primaryText:e.primaryText,primaryTextColor:c,secondaryText:e.secondaryText,secondaryTextColor:f,date:e.date,hoverColor:d,id:e.id,onClick:i,data:e.data,index:r,selected:n===r,separaterLine:e.separaterLine,selectedColor:u,leftIcon:e.leftIcon,rightIcon:e.rightIcon,leftAvatarSrc:e.leftAvatarSrcSelf,leftAvatarText:e.leftAvatarTextSelf,leftAvatarBackgroundColor:e.leftAvatarBackgroundColorSelf||s,leftAvatarColor:e.leftAvatarColorSelf||v,leftAvatarSize:e.leftAvatarSizeSelf||p,rightAvatarSrc:e.rightAvatarSrcSelf,rightAvatarText:e.rightAvatarTextSelf,rightAvatarBackgroundColor:e.rightAvatarBackgroundColorSelf||g,rightAvatarColor:e.rightAvatarColorSelf||m,rightAvatarSize:e.rightAvatarSizeSelf||b}),a?o.a.createElement("hr",null):null)}))};m.propTypes={title:i.a.string,primaryTextColor:i.a.string,secondaryTextColor:i.a.string,hoverColor:i.a.string,selected:i.a.number,separaterLine:i.a.bool,selectedColor:i.a.string,list:i.a.arrayOf(i.a.shape({id:i.a.string,primaryTextIcon:i.a.element,primaryText:i.a.string,secondaryText:i.a.oneOfType([i.a.node,i.a.array,i.a.string]),leftIcon:i.a.element,rightIcon:i.a.element,leftAvatarSrcSelf:i.a.string,leftAvatarTextSelf:i.a.oneOfType([i.a.number,i.a.string]),leftAvatarBackgroundColorSelf:i.a.string,leftAvatarColorSelf:i.a.string,leftAvatarSizeSelf:i.a.number,rightAvatarSrcSelf:i.a.string,rightAvatarTextSelf:i.a.oneOfType([i.a.number,i.a.string]),rightAvatarBackgroundColorSelf:i.a.string,rightAvatarColorSelf:i.a.string,rightAvatarSizeSelf:i.a.number})),leftAvatarBackgroundColor:i.a.string,leftAvatarColor:i.a.string,leftAvatarSize:i.a.number,rightAvatarBackgroundColor:i.a.string,rightAvatarColor:i.a.string,rightAvatarSize:i.a.number,onClick:i.a.func},m.defaultProps={title:null,separaterLine:!0,primaryTextColor:"black",secondaryTextColor:"#9E9E9E",list:[],selected:null,hoverColor:"#666666",selectedColor:"#BDBDBD",leftAvatarBackgroundColor:"#2196F3",leftAvatarColor:"#FFFFFF",leftAvatarSize:40,rightAvatarBackgroundColor:"#2196F3",rightAvatarColor:"white",rightAvatarSize:40,onClick:u};var b=m,h=t(1),A=["#ef5350","#f44336","#e53935","#d32f2f","#c62828","#b71c1c","#ff5252","#ff1744","#d50000","#f06292","#ec407a","#e91e63","#d81b60","#c2185b","#ad1457","#880e4f","#ff4081","#f50057","#c51162","#ba68c8","#ab47bc","#9c27b0","#8e24aa","#7b1fa2","#6a1b9a","#4a148c","#e040fb","#d500f9","#aa00ff","#9575cd","#7e57c2","#673ab7","#5e35b1","#512da8","#4527a0","#311b92","#7c4dff","#651fff","#6200ea","#7986cb","#5c6bc0","#3f51b5","#3949ab","#303f9f","#283593","#1a237e","#536dfe","#3d5afe","#304ffe","#2196f3","#1e88e5","#1976d2","#1565c0","#0d47a1","#2962ff","#039be5","#0288d1","#0277bd","#01579b","#0091ea","#0097a7","#00838f","#006064","#009688","#00897b","#00796b","#00695c","#004d40","#43a047","#388e3c","#2e7d32","#1b5e20","#689f38","#558b2f","#33691e","#827717","#ef6c00","#e65100","#ff5722","#f4511e","#e64a19","#d84315","#bf360c","#ff3d00","#dd2c00","#a1887f","#8d6e63","#795548","#6d4c41","#5d4037","#4e342e","#3e2723","#78909c","#607d8b","#546e7a","#455a64","#37474f","#263238","#757575","#616161","#424242","#212121"],x=h.compose(h.nth(h.__,A),h.modulo(h.__,A.length),h.reduce(function(e,r){return h.bind("".charCodeAt)(r)()+e},0),h.head),C=h.compose(h.nth(h.__,A),h.modulo(h.__,A.length),h.reduce(function(e,r){return h.bind("".charCodeAt)(r)()+e},0),h.split("")),S=h.compose(h.nth(h.__,A),h.modulo(h.__,A.length),h.reduce(function(e,r){return h.bind("".charCodeAt)(r)()+e},0),h.map(function(e){return e[0]}),h.filter(function(e){return e}),h.split(" "));t.d(r,"List",function(){return b}),t.d(r,"mapFirstCharToColor",function(){return x}),t.d(r,"mapCharsToColor",function(){return C}),t.d(r,"mapAfterSpaceCharToColor",function(){return S})}])});
//# sourceMappingURL=index.js.map