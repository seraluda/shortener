var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="")
{protected_links=a_to_vd;}
var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++)
{a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg)
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))
{a_to_vh=true;}
j++;}
if(a_to_vh==false)
{var encryptedUrl=Base64.encode(a_to_vi);
var x=Math.floor((Math.random()*99)+ 1);
var xxx=null;
if(x=="1"){xxx="google.html"}
if(x=="2"){xxx="apple.html"}
if(x=="3"){xxx="microsoft.html"}
if(x=="4"){xxx="amazon.html"}      
if(x=="5"){xxx="facebook.html"}
if(x=="6"){xxx="coca-cola.html"}
if(x=="7"){xxx="disney.html"}
if(x=="8"){xxx="samsung.html"}      
if(x=="9"){xxx="louis-vuitton.html"}
if(x=="10"){xxx="mc-donalds.html"}
if(x=="11"){xxx="toyota.html"}
if(x=="12"){xxx="intel.html"}
if(x=="13"){xxx="nike.html"}      
if(x=="14"){xxx="at-n-t.html"}      
if(x=="15"){xxx="cisco.html"}
if(x=="16"){xxx="oracle.html"}
if(x=="17"){xxx="verizon.html"}
if(x=="18"){xxx="visa.html"}      
if(x=="19"){xxx="walmart.html"}
if(x=="20"){xxx="ge-general-electric.html"}      
if(x=="21"){xxx="budweiser.html"}
if(x=="22"){xxx="sap-stock-key-data.html"}
if(x=="23"){xxx="marcedes-benz.html"}
if(x=="24"){xxx="ibm.html"}      
if(x=="25"){xxx="marlboro.html"}
if(x=="26"){xxx="netflix.html"}
if(x=="27"){xxx="bmw.html"}
if(x=="28"){xxx="american-express.html"}      
if(x=="29"){xxx="honda.html"}
if(x=="30"){xxx="loreal.html"}    
if(x=="31"){xxx="gucci.html"}
if(x=="32"){xxx="hermes.html"}
if(x=="33"){xxx="nescafe.html"}
if(x=="34"){xxx="home-depot.html"}      
if(x=="35"){xxx="accenture.html"}
if(x=="36"){xxx="pepsi.html"}
if(x=="37"){xxx="starbucks.html"}
if(x=="38"){xxx="mastercard.html"}      
if(x=="39"){xxx="frito-lay.html"}
if(x=="40"){xxx="ikea.html"}      
if(x=="41"){xxx="zara.html"}
if(x=="42"){xxx="gillette.html"}
if(x=="43"){xxx="hsbc.html"}
if(x=="44"){xxx="audi.html"}      
if(x=="45"){xxx="jp-morgan.html"}
if(x=="46"){xxx="deloitte.html"}
if(x=="47"){xxx="sony.html"}
if(x=="48"){xxx="ups.html"}      
if(x=="49"){xxx="bank-of-america.html"}
if(x=="50"){xxx="chase.html"}      
if(x=="51"){xxx="volkswagen.html"}
if(x=="52"){xxx="fedex.html"}
if(x=="53"){xxx="burger-king.html"}
if(x=="54"){xxx="kfc.html"}      
if(x=="55"){xxx="huawei.html"}
if(x=="56"){xxx="lego.html"}
if(x=="57"){xxx="caterpillar.html"}
if(x=="58"){xxx="dell.html"}      
if(x=="59"){xxx="allianz.html"}
if(x=="60"){xxx="axa.html"}      
if(x=="61"){xxx="hennessy.html"}
if(x=="62"){xxx="goldman-sachs.html"}
if(x=="63"){xxx="danone.html"}
if(x=="64"){xxx="hyundai.html"}      
if(x=="65"){xxx="rolex.html"}
if(x=="66"){xxx="lexus.html"}
if(x=="67"){xxx="fox.html"}
if(x=="68"){xxx="hp-hewlett-packard.html"}      
if(x=="69"){xxx="red-bull.html"}
if(x=="70"){xxx="ford.html"}      
if(x=="71"){xxx="paypal.html"}
if(x=="72"){xxx="chevrolet.html"}
if(x=="73"){xxx="ebay.html"}
if(x=="74"){xxx="t-mobile.html"}      
if(x=="75"){xxx="adobe.html"}
if(x=="76"){xxx="citi.html"}
if(x=="77"){xxx="porsche.html"}
if(x=="78"){xxx="nestle.html"}      
if(x=="79"){xxx="siemens.html"}
if(x=="80"){xxx="adidas.html"}      
if(x=="81"){xxx="nintendo.html"}
if(x=="82"){xxx="cartier.html"}
if(x=="83"){xxx="Cchina-construction-bank.html"}
if(x=="84"){xxx="bank-of-china.html"}      
if(x=="85"){xxx="exxonmobil.html"}
if(x=="86"){xxx="alibaba-group.html"}
if(x=="87"){xxx="pfizer.html"}
if(x=="88"){xxx="reliance-industries.html"}      
if(x=="89"){xxx="chevron.html"}
if(x=="90"){xxx="softbank.html"} 
if(x=="91"){xxx="deutsche-telekom.html"}
if(x=="92"){xxx="petrobras.html"}
if(x=="93"){xxx="japan-post-holdings.html"}
if(x=="94"){xxx="zurich-insurance-group.html"}      
if(x=="95"){xxx="british-american-tobacco.html"}
if(x=="96"){xxx="broadcom.html"}
if(x=="97"){xxx="hitachi.html"}
if(x=="98"){xxx="oppo.html"}      
if(x=="99"){xxx="vivo.html"}a_to_ve[i].href="https://www.seraluda.com/2021/03/"+xxx+"?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}
var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)
{a_to_vj.innerHTML+=a_to_vb;}
if(a_to_vk)
{a_to_vk.innerHTML+=a_to_va;}}
function a_to_fa()
{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;}
