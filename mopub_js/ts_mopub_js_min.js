function addParameter(e,t){if(t){paramMap[e]=t}}function getSerializedParams(){var e=[];for(var t in paramMap){if(paramMap.hasOwnProperty(t)){e.push(encodeURIComponent(t)+"="+encodeURIComponent(paramMap[t]))}}return e.join("&")}function mp_fail(){window.location="mopub://failLoad"}function ts_callback(e){ufid=e.ufid;ts_click_url=e.click_url;if(e.count_ad_units==0){mp_fail();return}document.write('<div id="ts-div-'+ufid+'" style="width:'+window.ts_ad_width+";height:"+window.ts_ad_height+'">');document.write(e.ad_units[0].html_vertical);document.write("</div>");window.webviewDidAppearHelper=function(){var t=document.createElement("img");t.src=e.ad_units[0].imp_url;t.width=0;t.height=0;t.style.display="none";var n=document.getElementsByTagName("body")[0];n.appendChild(t)}}function getServerUrl(){var e=generateRandomKey();addParameter("ad_unit_id",window.ts_ad_unit_id);addParameter("pub",window.ts_pub);addParameter("app",window.ts_app);addParameter("ufid",e);addParameter("refer",window.location);if(window.ts_width&&window.ts_height){addParameter("size",window.ts_width+"x"+window.ts_height)}addParameter("keywords",window.ts_keywords);addParameter("version",TS_VERSION);addParameter("jsonp",1);addParameter("callback","ts_callback");addParameter("test",window.ts_test);if(window.ts_device_id){addParameter("user",window.ts_device_id)}else{addParameter("session_id",getSession())}addParameter("banner_ad",window.ts_banner_ad);addParameter("video_ad",window.ts_video_ad);if(typeof mopubFinishLoad=="function"){addParameter("mr",0)}else{addParameter("mr",1)}return TS_SERVER_HOST+"?"+getSerializedParams()}function generateRandomKey(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678";var t="";for(var n=0;n<20;n++){t+=e.charAt(Math.floor(Math.random()*e.length))}t+=Math.floor(Math.random()*1e13);return t}function setCookie(e,t,n,r,i,s){var o=e+"="+escape(t)+(n?";expires="+n.toGMTString():"")+(r?";path="+r:"")+(i?";domain="+i:"")+(s?";secure":"");document.cookie=o}function getCookie(e){var t=document.cookie.indexOf(e+"=");var n=t+e.length+1;if(!t&&e!=document.cookie.substring(0,e.length)){return null}if(t==-1){return null}var r=document.cookie.indexOf(";",n);if(r==-1){r=document.cookie.length}return unescape(document.cookie.substring(n,r))}function getSession(){if(!getCookie(cookie_name)){setCookie(cookie_name,generateRandomKey())}return getCookie(cookie_name)}var TS_SERVER_HOST="http://ads04.tapsense.com/ads/mopubad";var TS_VERSION="1.0.4";var ts_click_tracker;var paramMap={};var cookie_name="ts-sesssion-cookie";(function(){console.log('<script type="text/javascript" src="'+getServerUrl()+'"></s'+"cript>");document.write('<script type="text/javascript" src="'+getServerUrl()+'"></s'+"cript>")})()
