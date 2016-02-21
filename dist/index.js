"use strict";var _m=module;!function r(e,t,n){function o(i,u){if(!t[i]){if(!e[i]){var l="function"==typeof require&&require;if(!u&&l)return l(i,!0);if(s)return s(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var c=t[i]={exports:{}};e[i][0].call(c.exports,function(r){var t=e[i][1][r];return o(t?t:r)},c,c.exports,r,e,t,n)}return t[i].exports}for(var s="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(r,e,t){function n(r){if("string"!=typeof r)throw new Error("The url must be a string.");var e=o(r),t=e.resource.split("."),s=null;switch(e.toString=function(r){return n.stringify(this,r)},e.source=t.length>2?t.slice(-2).join("."):e.source=e.resource,e.name=e.pathname.substring(1).replace(/\.git$/,""),e.owner=e.user,e.organization=e.owner,e.source){case"cloudforge.com":e.owner=e.user,e.organization=t[0];break;default:s=e.name.split("/"),2===s.length&&(e.owner=s[0],e.name=s[1])}return e.full_name=e.owner,e.name&&(e.full_name&&(e.full_name+="/"),e.full_name+=e.name),e}e=_m;var o=r("git-up");n.stringify=function(r,e){switch(e=e||r.protocol){case"ssh":return"git@"+r.resource+":"+r.full_name+".git";case"git+ssh":return"git+ssh://git@"+r.resource+"/"+r.full_name+".git";case"http":case"https":return e+"://"+r.resource+"/"+r.full_name;default:return r.href}},e.exports=n},{"git-up":2}],2:[function(r,e,t){function n(r){var e=o(r);e.token="";var t=e.user.split(":");return 2===t.length&&("x-oauth-basic"===t[1]?e.token=t[0]:"x-token-auth"===t[0]&&(e.token=t[1])),s(e.protocols)||s(r)?e.protocol="ssh":e.protocols.length?e.protocol=e.protocols[0]:e.protocol="file",e}var o=r("parse-url"),s=r("is-ssh");e.exports=n},{"is-ssh":3,"parse-url":4}],3:[function(r,e,t){function n(r){if(Array.isArray(r))return-1!==r.indexOf("ssh")||-1!==r.indexOf("rsync");if("string"!=typeof r)return!1;var e=o(r);return r=r.substring(r.indexOf("://")+3),n(e)?!0:r.indexOf("@")<r.indexOf(":")}var o=r("protocols");e.exports=n},{protocols:5}],4:[function(r,e,t){function n(r){var e={protocols:o(r),protocol:null,port:null,resource:"",user:"",pathname:"",hash:"",search:"",href:r},t=r.indexOf("://"),n=null,i=null;return e.protocol=e.protocols[0]||(s(r)?"ssh":"file"),-1!==t&&(r=r.substring(t+3)),i=r.split("/"),e.resource=i.shift(),n=e.resource.split("@"),2===n.length&&(e.user=n[0],e.resource=n[1]),n=e.resource.split(":"),2===n.length&&(e.resource=n[0],e.port=parseInt(n[1]),isNaN(e.port)&&(e.port=null,i.unshift(n[1]))),i=i.filter(Boolean),e.pathname="/"+i.join("/"),n=e.pathname.split("#"),2===n.length&&(e.pathname=n[0],e.hash=n[1]),n=e.pathname.split("?"),2===n.length&&(e.pathname=n[0],e.search=n[1]),e}var o=r("protocols"),s=r("is-ssh");e.exports=n},{"is-ssh":3,protocols:5}],5:[function(r,e,t){e.exports=function(r,e){e===!0&&(e=0);var t=r.indexOf("://"),n=r.substring(0,t).split("+").filter(Boolean);return"number"==typeof e?n[e]:n}},{}]},{},[1]);