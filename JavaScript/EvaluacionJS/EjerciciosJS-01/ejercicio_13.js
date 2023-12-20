var a = 'hello' || ''; console.log(a);
var b = '' || []; console.log(b);
var c = '' || undefined; console.log(c);
var d = 1 || 5; console.log(d);
var e = 0 || {}; console.log(e);
var f = 0 || '' || 5; console.log(f);
var g = '' || 'yay' || 'boo'; console.log(g);
