-function(){"use strict";var v=[0,0,0,0],x=/[-+]?[0-9]*\.?[0-9]+%/g,y=/[-+]?[0-9]*\.?[0-9]+px/g,z=function(h,e){if(h)for(var l=e.length,m=0;m<l;m++){var a=e[m].position/100,b=e[m].value;if(void 0===b.a||null===b.a)b.a=1;h.addColorStop(a,"rgba("+b.r+","+b.g+","+b.b+","+b.a+")")}},A=function(h,e,l){return h?0<=h.indexOf("%")?e+parseInt(h,10)/100*(l-e):0<=h.indexOf("px")?e+parseInt(h,10):e+.5*(l-e):0};var B=function(){};goog.inherits(B,HTMLCanvasElement);
B.prototype.attachedCallback=function(){var h,e,l,m,a,b,f,k,t=this.getContext("2d");l=this.width;h=this.height;var g;a=parseFloat(this.getAttribute("stroke-width"))||0;g=JSON.parse(this.getAttribute("stroke-color"))||v;m=parseFloat(this.getAttribute("x-adj"))||0;e=parseFloat(this.getAttribute("y-adj"))||0;var n=this.getAttribute("slope")||"0",n=isNaN(parseFloat(n))?n:parseFloat(n);t.beginPath();t.lineWidth=a;if(g){if(g.gradientMode)if(a=[[0,0,0],[0,h-0,0],[l-0,h-0,0],[l-0,0,0]],"radial"==g.gradientMode){(b=
g.c)||(b="center");k=f="center";var d=b.match(x);b=b.match(y);d&&1<d.length?(f=d[0],k=d[1]):b&&1<b.length&&(f=b[0],k=b[1]);f=A(f,a[0][0],a[3][0]);k=A(k,a[0][1],a[1][1]);d=g.shape;b=[.5*(a[0][0]+a[2][0]),.5*(a[0][0]+a[2][0])];var c=f<b[0]?a[2][0]:a[0][0];b=k<b[1]?a[1][1]:a[0][1];c=Math.abs(f-c);b=Math.abs(k-b);var r=a[3][0]-a[0][0];a=a[1][1]-a[0][1];.001<Math.abs(r)&&(a/=r,c=Math.sqrt(c*c+b*b/(a*a)),b=a*c);a=c;d&&"farthest-corner"!=d&&(d=d.match(y))&&1<d.length&&(a=parseFloat(d[0]),b=parseFloat(d[1]));
r=Math.max(a,b);d=document.createElement("canvas");d.width=l;d.height=h;c=d.getContext("2d");r=c.createRadialGradient(f,k,0,f,k,r);z(r,g.color);c.rect(0,0,l,h);var u;b<a?(g=1,u=b/a):(u=1,g=a/b);c.save();c.transform(g,0,0,u,g*-f+f,u*-k+k);c.fillStyle=r;c.fill();c.restore();g=c.createPattern(d,"no-repeat")}else{f=0;g.orientation&&(f=parseFloat(g.orientation)*Math.PI/180);isFinite(f)&&!isNaN(f)||(f=0);c=-1*f;f=[];d=[];k=[.5*(a[0][0]+a[2][0]),.5*(a[0][1]+a[2][1])];b=Math.tan(c);if(.001>Math.abs(Math.tan(.5*
Math.PI-.001)-b))d=0<=Math.sin(c)?1:-1,a=.5*(a[2][1]-a[0][1]),f=[k[0],k[1]-d*a],d=[k[0],k[1]+d*a];else{c=0<=Math.cos(c)?1:-1;c=[c,c*b];r=Infinity;u=-Infinity;for(var w=0;4>w;w++){var p,q=[a[w][0]-k[0],a[w][1]-k[1]],q=b*q[1]+q[0],q=q/(1+b*b);p=[q,q*b];q=(0<c[0]*p[0]+c[1]*p[1]?1:-1)*Math.sqrt(p[0]*p[0]+p[1]*p[1]);p=[p[0]+k[0],p[1]+k[1]];q<r&&(f=p,r=q);q>u&&(d=p,u=q)}}a=t.createLinearGradient(f[0],f[1],d[0],d[1]);z(a,g.color);g=a}else g="rgba("+Math.floor(255*g[0])+","+Math.floor(255*g[1])+","+Math.floor(255*
g[2])+","+g[3]+")";t.strokeStyle=g;switch(n){case "vertical":n=[.5*l,0];e=[.5*l,h];break;case "horizontal":n=[0,.5*h];e=[l,.5*h];break;default:0<n?(n=[m,e],e=[l-m,h-e]):(n=[m,h-e],e=[l-m,e])}l=n[0];m=n[1];h=e[0];e=e[1];t.moveTo(l,m);t.lineTo(h,e);t.stroke()}};B.prototype.attributeChangedCallback=null;document.registerElement("gwd-line",{prototype:B.prototype,"extends":"canvas"});}()
