(function(){var f=this,g=function(a){var b=["onAdData"],c=f;b[0]in c||!c.execScript||c.execScript("var "+b[0]);for(var d;b.length&&(d=b.shift());)b.length||void 0===a?c=c[d]?c[d]:c[d]={}:c[d]=a};var h=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},n=function(a,b){return a<b?-1:a>b?1:0};var p=function(a,b){this.b=a;this.a=b};p.prototype.toString=function(){return this.b+"x"+this.a};var t;a:{var v=f.navigator;if(v){var w=v.userAgent;if(w){t=w;break a}}t=""}var x=function(a){return-1!=t.indexOf(a)};var y=function(){return x("iPad")||x("Android")&&!x("Mobile")||x("Silk")};var z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,k="string"==typeof a?a.split(""):a,e=0;e<d;e++)e in k&&b.call(c,k[e],e,a)};var A=/#(.)(.)(.)/,C=function(a){if(!B.test(a))throw Error("'"+a+"' is not a valid hex color");4==a.length&&(a=a.replace(A,"#$1$1$2$2$3$3"));a=a.toLowerCase();return[parseInt(a.substr(1,2),16),parseInt(a.substr(3,2),16),parseInt(a.substr(5,2),16)]},aa=function(a,b,c){a/=255;b/=255;c/=255;var d=Math.max(a,b,c),k=Math.min(a,b,c),e=0,l=0,m=.5*(d+k);d!=k&&(d==a?e=60*(b-c)/(d-k):d==b?e=60*(c-a)/(d-k)+120:d==c&&(e=60*(a-b)/(d-k)+240),l=0<m&&.5>=m?(d-k)/(2*m):(d-k)/(2-2*m));return[Math.round(e+360)%360,
l,m]},B=/^#(?:[0-9a-f]{3}){1,2}$/i;var D=function(a,b,c,d){this.g=a;this.f=b;this.h=c;this.c=d},ba=[new D("#F44336",.515152,1,358.878),new D("#E91E63",.777778,.825581,337.444),new D("#9C27B0",.444444,.75,286.272),new D("#673AB7",.454545,.687861,259.503),new D("#3F51B5",.4375,.657895,231.706),new D("#2196F3",.787234,.899497,208.582),new D("#03A9F4",.913043,.987179,200.21),new D("#00BCD4",.708661,1,186.034),new D("#009688",.409091,1,173.816),new D("#4CAF50",.374046,.553719,122.977),new D("#8BC34A",.461224,.555556,90.6814),new D("#CDDC39",
.596838,.714286,63.3218),new D("#FFEB3B",.917355,1,48.1313),new D("#FFC107",1,1,41.1541),new D("#FF9800",1,1,32.7764),new D("#FF5722",.714286,1,13.4549),new D("#795548",.151899,.278351,14.7864),new D("#607D8B",.151515,.191489,200.03)];var E=function(a){if(/^(?:|#|0x)(?:[a-fA-F\d]{3}){1,2}$/.test(a))return"#"+a.replace(/^#|0x/,"");throw Error("Invalid HEX color: "+a);},F=function(a,b){var c=C(E(a)),d=C(E(b));return Math.round(Math.abs(c[0]-d[0])+Math.abs(c[1]-d[1])+Math.abs(c[2]-d[2]))},ca=8/360,da=function(a){switch(E(a)){case "#F44336":return"#B71C1C";case "#E91E63":return"#880E4F";case "#9C27B0":return"#4A148C";case "#673AB7":return"#311B92";case "#3F51B5":return"#1A237E";case "#2196F3":return"#0D47A1";case "#03A9F4":return"#01579B";
case "#00BCD4":return"#006064";case "#009688":return"#004D40";case "#4CAF50":return"#1B5E20";case "#8BC34A":return"#33691E";case "#CDDC39":return"#827717";case "#FFEB3B":return"#F57F17";case "#FFC107":return"#FF6F00";case "#FF9800":return"#E65100";case "#FF5722":return"#BF360C";case "#795548":return"#3E2723";case "#9E9E9E":return"#212121";case "#607D8B":return"#263238"}return""},fa=function(a){a=C(a);var b=aa(a[0],a[1],a[2]),c,d=Number.MAX_VALUE;z(ba,function(a){var e;e=Math.abs(b[0]-a.c);e=Math.min(e,
360-e);e*=ca;var l;l=b[1];var m=a.f,u=a.h;l=l>=m&&l<=u?0:l<m?m-l:l-u;e=l*l+e*e;e<d&&(d=e,c=a)});if(!ea(b,c))return"#9E9E9E";a=c.g;switch(a){case "#FFEB3B":a="#FFC107";break;case "#CDDC39":a="#8BC34A"}return a},ea=function(a,b){var c=a[0],d=a[1],k=a[2];return.16>k||.9<k?!1:d>b.f&&Math.abs(15>c-b.c)?!0:.3<=d&&.07<=d*k};var G=function(a){var b=a.google_template_data.adData[0];a=a.force_google_width&&a.force_google_height?new p(a.force_google_width,a.force_google_height):new p(a.google_width,a.google_height);b.siriusFlagIntentfulClickDelay=1E3;!y()&&(x("iPod")||x("iPhone")||x("Android")||x("IEMobile"))||y()?320==a.b&&50==a.a?(b.siriusFlagEnableOnePointFiveClick="true",b.onePointFiveClickButtonText=b.clickTFText):"false"!=b.screamFlagResetUnclickableBorderSize&&(b.siriusFlagUnclickableBorderSize=Math.min(30,Math.floor(.3*
Math.min(a.a,a.b)))):b.siriusFlagClickAreaOption="button,headline,url"};var ga=x("Opera"),H=x("Trident")||x("MSIE"),ha=x("Edge"),I=x("Gecko")&&!(-1!=t.toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),ia=-1!=t.toLowerCase().indexOf("webkit")&&!x("Edge"),J=function(){var a=f.document;return a?a.documentMode:void 0},K;
a:{var L="",M=function(){var a=t;if(I)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ha)return/Edge\/([\d\.]+)/.exec(a);if(H)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ia)return/WebKit\/(\S+)/.exec(a);if(ga)return/(?:Version)[ \/]?(\S+)/.exec(a)}();M&&(L=M?M[1]:"");if(H){var N=J();if(null!=N&&N>parseFloat(L)){K=String(N);break a}}K=L}
var O=K,P={},Q=function(a){if(!P[a]){for(var b=0,c=h(String(O)).split("."),d=h(String(a)).split("."),k=Math.max(c.length,d.length),e=0;0==b&&e<k;e++){var l=c[e]||"",m=d[e]||"",u=RegExp("(\\d*)(\\D*)","g"),ka=RegExp("(\\d*)(\\D*)","g");do{var q=u.exec(l)||["","",""],r=ka.exec(m)||["","",""];if(0==q[0].length&&0==r[0].length)break;b=n(0==q[1].length?0:parseInt(q[1],10),0==r[1].length?0:parseInt(r[1],10))||n(0==q[2].length,0==r[2].length)||n(q[2],r[2])}while(0==b)}P[a]=0<=b}},R=f.document,la=R&&H?J()||
("CSS1Compat"==R.compatMode?parseInt(O,10):5):void 0;var S;if(!(S=!I&&!H)){var T;if(T=H)T=9<=Number(la);S=T}S||I&&Q("1.9.1");H&&Q("9");var U=["top","right","bottom","left"],W=function(a,b,c){var d={};d.element=a;a={type:"element"};a.spec=d;V(a,b,c);return a},X=function(a){var b={type:"vertical-list",spec:{elements:["text2TFText","displayUrl"],margin:"1px"}};V(b,"left",a);return b},V=function(a,b,c){if(4!=c.length)throw Error("The anchors should be an array of length 4.");b&&(a.alignments=b);for(b=0;b<U.length;++b)c[b]&&(a[U[b]]=c[b])};var Y={elements:{adContent:{type:"shape",node_id:"adContent",background_color_ids:"logoBackColor"},colorSlot1:{type:"shape",node_id:"color-slot1",background_color_ids:"textBackDarkColor"},colorSlot2:{type:"shape",node_id:"color-slot2",background_color_ids:"textBackLightColor"},colorSlot3:{type:"shape",node_id:"color-slot3",background_color_ids:"logoBackColor"},product1MCImage:{type:"product",node_id:"product-image"},text1TFText:{type:"headline",node_id:"headline",background_color_ids:"textBackDarkColor"},
text2TFText:{type:"description",node_id:"description",background_color_ids:"logoBackColor"},buttonBorder:{type:"any",node_id:"button-border"},clickTFText:{field_name:"clickTFText",type:"button",node_id:"button",background_color_ids:"textBackLightColor",weight:1/36},displayUrl:{type:"url",node_id:"display-url",background_color_ids:"logoBackColor"}},font_scale_strategy:"mega_title",variations:{square1:{calibrations:["AspectRatioGE 2.1 0","AspectRatioLE 0.5 0"],styles:{clickTFText:{displayType:"nessieButton"},
text1TFText:{padding:"5% 0"}},colorSlot1:W("colorSlot1","",["0","0","colorSlot1 6%","0"]),colorSlot2:W("colorSlot2","",["colorSlot1 0","0","colorSlot2 32%","0"]),text1:W("text1TFText","left right top bottom",["6%","min(20px, 8%)","text1 32%","min(20px, 8%)"]),text2:W("text2TFText","left right top",["text1 4%","min(20px, 8%)","34%","min(20px, 8%)"]),url:W("displayUrl","bottom left right",["85%","min(20px, 8%)","7%","min(20px, 8%)"]),button:W("clickTFText","top bottom left right",["text2 1px","min(20px, 8%)",
"url top 1px","min(20px, 8%)"])},tower1:{calibrations:["AspectRatioGE 0.8 0"],styles:{clickTFText:{displayType:"nessieButton"},text1TFText:{padding:"10% 0"},text2TFText:{lineHeight:"1.5"}},colorSlot1:W("colorSlot1","",["0","0","colorSlot1 7%","0"]),colorSlot2:W("colorSlot2","",["7%","0","colorSlot2 30%","0"]),text1:W("text1TFText","left right top bottom",["7%","10%","text1 30%","10%"]),text2:W("text2TFText","left right top",["text1 6%","10%","60px","10%"]),url:W("displayUrl","top",["button 6%","10%",
"30px","10%"]),button:W("clickTFText","top",["text2 6%","10%","8%","10%"])},banner1:{calibrations:["AspectRatioLE 2 0"],styles:{clickTFText:{displayType:"nessieButton",weight:.04}},colorSlot1:W("colorSlot1","",["0px","colorSlot1 5%","0","0"]),colorSlot2:W("colorSlot2","",["0","button left 50% 0","0","5%"]),text1:W("text1TFText","left top bottom",["22%","text1 38%","25%","8%"]),text2AndUrl:X(["10%","10%","10%","button 5%"]),button:W("clickTFText","left",["10%","46%","10%","text1 5%"])},smallBanner:{calibrations:["AspectRatioLE 2 0"],
styles:{clickTFText:{displayType:"nessieButton",weight:.04}},colorSlot1:W("colorSlot1","",["0px","colorSlot1 3%","0","0"]),colorSlot2:W("colorSlot2","",["0","button left 50% 0","0","3%"]),text1:W("text1TFText","left top bottom",["22%","text1 36%","25%","6%"]),text2AndUrl:X(["10%","5%","10%","button 3%"]),button:W("clickTFText","left",["10%","40%","10%","text1 3%"])}}},Z=function(){var a=document.getElementById("button"),b=document.getElementById("button-border"),c=document.getElementById("adContent").getAttribute("data-variation");
if("banner1"==c||"smallBanner"==c)b.style.display="block",b.style.top=a.style.top,b.style.left=a.style.left,b.style.width=a.style.width,b.style.height=a.style.height};
g(function(a){var b=a.google_template_data.adData[0];b.siriusFlagBorderColor="#BDBDBD";var c=b.landingPageColor0?b.landingPageColor0:"#000000",d=b.landingPageColor1?b.landingPageColor1:c,c=50>F(c,"#FFFFFF")||50>F(c,"#000000")?d:c;b.textBackLightColor=fa(c);b.textBackDarkColor=da(b.textBackLightColor);b.logoBackColor="#FFFFFF";"#9E9E9E"==b.textBackLightColor&&(b.textBackLightColor="#424242");G(a);window.renderAd(a,Y,function(){Z()})});g(function(a){var b=a.google_template_data.adData[0];b.siriusFlagNoBorder="true";b.logoBackColor="#FFFFFF";b.textBackLightColor="#424242";b.textBackDarkColor="#212121";b.siriusFlagEnableRtl="true";G(a);window.renderAd(a,Y,function(){Z()})});})()