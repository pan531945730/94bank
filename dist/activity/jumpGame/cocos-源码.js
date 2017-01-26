function b(a) {
	throw a;
}
var m = void 0,
	p = !0,
	s = null,
	u = !1;

function ca() {
	return function(a) {
		return a
	}
}

function y() {
	return function() {}
}

function A(a) {
	return function(c) {
		this[a] = c
	}
}

function D(a) {
	return function() {
		return this[a]
	}
}

function E(a) {
	return function() {
		return a
	}
}
var pixelRatio = (function() {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / backingStore;
}());
var I = I || {};
I.oa = I.oa || {};
I.k = {};
var M = window,
	M = Object.prototype,
	M = s;
I.u1 = 0;
I.v1 = 1;
I.s1 = 2;
I.t1 = 3;
I.Yk = s;
I.s = s;
I.ul = u;
I.Ka = s;
I.Eg = s;
I.ZQ = s;
I.a$ = function(a) {
	return document.createElement(a)
};
I.Nl = function(a, c, d) {
	if (a)
		if (a instanceof Array)
			for (var e = 0, f = a.length; e < f && c.call(d, a[e], e) !== u; e++);
		else
			for (e in a)
				if (c.call(d, a[e], e) === u) break
};
I.extend = function(a) {
	var c = 2 <= arguments.length ? Array.prototype.slice.call(arguments, 1) : [];
	I.Nl(c, function(c) {
		for (var e in c) c.hasOwnProperty(e) && (a[e] = c[e])
	});
	return a
};
I.ff = function(a) {
	return "function" === typeof a
};
I.dC = function(a) {
	return "number" === typeof a || "[object Number]" === Object.prototype.toString.call(a)
};
I.ge = function(a) {
	return "string" === typeof a || "[object String]" === Object.prototype.toString.call(a)
};
I.isArray = function(a) {
	return Array.isArray(a) || "object" === typeof a && "[object Array]" === Object.prototype.toString.call(a)
};
I.cj = function(a) {
	return "undefined" === typeof a
};
I.Ar = function(a) {
	return "object" === typeof a && "[object Object]" === Object.prototype.toString.call(a)
};
I.aj = function(a) {
	if (!a) return I.log("invalid URL"), u;
	var c = a.indexOf("://");
	if (-1 === c) return u;
	c = a.indexOf("/", c + 3);
	return (-1 === c ? a : a.substring(0, c)) !== location.origin
};

function da(a, c, d, e, f) {
	var g = this;
	g.v3 = a;
	g.uu = c;
	g.Dq = [];
	g.FG = d;
	g.GG = f;
	g.Bq = e;
	g.Pz = f;
	g.vH = a instanceof Array ? [] : {};
	I.Nl(a, function(a, c) {
		g.Dq.push({
			index: c,
			value: a
		})
	});
	g.size = g.Dq.length;
	g.GB = 0;
	g.aB = 0;
	g.uu = g.uu || g.size;
	g.t$ = function(a, c) {
		g.FG = a;
		g.GG = c
	};
	g.s$ = function(a, c) {
		g.Bq = a;
		g.Pz = c
	};
	g.uG = function() {
		var a = this;
		if (!(0 === a.Dq.length || a.aB >= a.uu)) {
			var c = a.Dq.shift(),
				d = c.value,
				e = c.index;
			a.aB++;
			a.FG.call(a.GG, d, e, function(c) {
				a.GB++;
				a.aB--;
				var d = Array.prototype.slice.call(arguments, 1);
				a.vH[this.index] =
					d[0];
				a.GB === a.size ? a.Bq && a.Bq.call(a.Pz, s, a.vH) : a.uG()
			}.bind(c), a)
		}
	};
	g.Zn = function() {
		if (0 === this.Dq.length) this.Bq && this.Bq.call(this.Pz, s, []);
		else
			for (var a = 0; a < this.uu; a++) this.uG()
	}
}
I.async = {
	lba: function(a, c, d) {
		a = new da(a, 1, function(a, c, g) {
			a.call(d, g)
		}, c, d);
		a.Zn();
		return a
	},
	W$: function(a, c, d) {
		a = new da(a, 0, function(a, c, g) {
			a.call(d, g)
		}, c, d);
		a.Zn();
		return a
	},
	Qda: function(a, c, d) {
		var e = [],
			f = [s],
			g = new da(a, 1, function(c, g, n) {
				e.push(function(c) {
					e = Array.prototype.slice.call(arguments, 1);
					a.length - 1 === g && (f = f.concat(e));
					n.apply(s, arguments)
				});
				c.apply(d, e)
			}, function(a) {
				if (c) {
					if (a) return c.call(d, a);
					c.apply(d, f)
				}
			});
		g.Zn();
		return g
	},
	map: function(a, c, d, e) {
		var f = c;
		"object" === typeof c && (d = c.Tf,
			e = c.b9, f = c.a9);
		a = new da(a, 0, f, d, e);
		a.Zn();
		return a
	},
	O9: function(a, c, d, e, f) {
		a = new da(a, c, d, e, f);
		a.Zn();
		return a
	}
};
I.path = {
	CX: /[^\.\/]+\/\.\.\//,
	join: function() {
		for (var a = arguments.length, c = "", d = 0; d < a; d++) c = (c + ("" === c ? "" : "/") + arguments[d]).replace(/(\/|\\\\)$/, "");
		return c
	},
	Wi: function(a) {
		return (a = /(\.[^\.\/\?\\]*)(\?.*)?$/.exec(a)) ? a[1] : s
	},
	N9: function(a) {
		if (a) {
			var c = a.lastIndexOf(".");
			if (-1 !== c) return a.substring(0, c)
		}
		return a
	},
	WT: function(a, c) {
		var d = a.indexOf("?");
		0 < d && (a = a.substring(0, d));
		d = /(\/|\\\\)([^(\/|\\\\)]+)$/g.exec(a.replace(/(\/|\\\\)$/, ""));
		if (!d) return s;
		d = d[2];
		return c && a.substring(a.length - c.length).toLowerCase() ===
			c.toLowerCase() ? d.substring(0, d.length - c.length) : d
	},
	dirname: function(a) {
		return a.replace(/((.*)(\/|\\|\\\\))?(.*?\..*$)?/, "$2")
	},
	TI: function(a, c) {
		c = c || "";
		var d = a.indexOf("?"),
			e = "";
		0 < d && (e = a.substring(d), a = a.substring(0, d));
		d = a.lastIndexOf(".");
		return 0 > d ? a + c + e : a.substring(0, d) + c + e
	},
	ov: function(a, c, d) {
		if (0 === c.indexOf(".")) return this.TI(a, c);
		var e = a.indexOf("?"),
			f = "";
		d = d ? this.Wi(a) : "";
		0 < e && (f = a.substring(e), a = a.substring(0, e));
		e = a.lastIndexOf("/");
		return a.substring(0, 0 >= e ? 0 : e + 1) + c + d + f
	},
	d3: function(a) {
		var c =
			a = String(a);
		do c = a, a = a.replace(this.CX, ""); while (c.length !== a.length);
		return a
	}
};
I.T = function() {
	var a = {},
		c = {},
		d = {},
		e = {},
		f = RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))|(?:localhost))(?::\\d{2,5})?(?:/\\S*)?$", "i");
	return {
		ww: "",
		KI: "",
		Nc: {},
		Mv: function() {
			return window.XMLHttpRequest ? new window.XMLHttpRequest :
				new ActiveXObject("MSXML2.XMLHTTP")
		},
		nG: function(a) {
			var c = a[0],
				d = a[1],
				e = a[2],
				f = ["", s, s];
			1 === a.length ? f[1] = c instanceof Array ? c : [c] : 2 === a.length ? "function" === typeof d ? (f[1] = c instanceof Array ? c : [c], f[2] = d) : (f[0] = c || "", f[1] = d instanceof Array ? d : [d]) : 3 === a.length ? (f[0] = c || "", f[1] = d instanceof Array ? d : [d], f[2] = e) : b(Error("arguments error to load js!"));
			return f
		},
		hK: function(c, d, e) {
			var f = this,
				r = f.nG(arguments),
				t = r[0],
				v = r[1],
				r = r[2]; - 1 < navigator.userAgent.indexOf("Trident/5") ? f.LG(t, v, 0, r) : I.async.map(v,
				function(c, d, e) {
					c = I.path.join(t, c);
					if (a[c]) return e(s);
					f.jF(c, u, e)
				}, r)
		},
		iK: function(a, c, d) {
			var e = this.ZR(),
				f = this.nG(arguments);
			this.hK(f[0], f[1], function(a) {
				a && b(Error(a));
				e.parentNode.removeChild(e);
				if (f[2]) f[2]()
			})
		},
		jF: function(c, d, e) {
			var f = document,
				r = document.createElement("script");
			r.async = d;
			a[c] = p;
			I.t.Ib.noCache && "string" === typeof c ? this.TG.test(c) ? r.src = c + "\x26_t\x3d" + (new Date - 0) : r.src = c + "?_t\x3d" + (new Date - 0) : r.src = c;
			r.addEventListener("load", function() {
				r.parentNode.removeChild(r);
				this.removeEventListener("load",
					arguments.callee, u);
				e()
			}, u);
			r.addEventListener("error", function() {
				r.parentNode.removeChild(r);
				e("Load " + c + " failed!")
			}, u);
			f.body.appendChild(r)
		},
		LG: function(a, c, d, e) {
			if (d >= c.length) e && e();
			else {
				var f = this;
				f.jF(I.path.join(a, c[d]), u, function(t) {
					if (t) return e(t);
					f.LG(a, c, d + 1, e)
				})
			}
		},
		ZR: function() {
			var a = document,
				c = a.getElementById("cocos2d_loadJsImg");
			if (!c) {
				c = document.createElement("img");
				I.NG && (c.src = I.NG);
				a = a.getElementById(I.t.Ib.id);
				a.style.backgroundColor = "transparent";
				a.parentNode.appendChild(c);
				var d = getComputedStyle ? getComputedStyle(a) : a.currentStyle;
				d || (d = {
					width: a.width,
					height: a.height
				});
				c.style.left = a.offsetLeft + (parseFloat(d.width) - c.width) / 2 + "px";
				c.style.top = a.offsetTop + (parseFloat(d.height) - c.height) / 2 + "px";
				c.style.position = "absolute"
			}
			return c
		},
		cw: function(a, c) {
			if (I.UR) require("fs").paa(a, function(a, d) {
				a ? c(a) : c(s, d.toString())
			});
			else {
				var d = this.Mv(),
					e = "load " + a + " failed!";
				d.open("GET", a, p);
				/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (d.setRequestHeader("Accept-Charset",
					"utf-8"), d.onreadystatechange = function() {
					4 === d.readyState && (200 === d.status ? c(s, d.responseText) : c({
						status: d.status,
						Pl: e
					}, s))
				}) : (d.overrideMimeType && d.overrideMimeType("text/plain; charset\x3dutf-8"), d.onload = function() {
					4 === d.readyState && (200 === d.status ? c(s, d.responseText) : c({
						status: d.status,
						Pl: e
					}, s))
				}, d.onerror = function() {
					c({
						status: d.status,
						Pl: e
					}, s)
				});
				d.send(s)
			}
		},
		MG: function(a) {
			if (I.UR) return require("fs").qaa(a).toString();
			var c = this.Mv();
			c.open("GET", a, u);
			/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ?
				c.setRequestHeader("Accept-Charset", "utf-8") : c.overrideMimeType && c.overrideMimeType("text/plain; charset\x3dutf-8");
			c.send(s);
			return 4 === !c.readyState || 200 !== c.status ? s : c.responseText
		},
		oX: function(a, c) {
			var d = new XMLHttpRequest,
				e = "load " + a + " failed!";
			d.open("GET", a, p);
			d.responseType = "arraybuffer";
			d.onload = function() {
				var a = d.response;
				a && (window.W9 = a);
				4 === d.readyState && (200 === d.status ? c(s, d.response) : c({
					status: d.status,
					Pl: e
				}, s))
			};
			d.onerror = function() {
				c({
					status: d.status,
					Pl: e
				}, s)
			};
			d.send(s)
		},
		jK: function(a,
			c) {
			this.cw(a, function(d, e) {
				if (d) c(d);
				else {
					try {
						var f = JSON.parse(e)
					} catch (t) {
						b(Error("parse json [" + a + "] failed : " + t))
					}
					c(s, f)
				}
			})
		},
		$E: function(a) {
			return /(\.png)|(\.jpg)|(\.bmp)|(\.jpeg)|(\.gif)/.exec(a) != s
		},
		Vl: function(a, c, d) {
			function e() {
				this.removeEventListener("error", e, u);
				v.crossOrigin && "anonymous" === v.crossOrigin.toLowerCase() ? (t.aj = u, B.he(a), I.T.Vl(a, t, d)) : "function" === typeof d && d("load image failed")
			}

			function f() {
				this.removeEventListener("load", f, u);
				this.removeEventListener("error", e, u);
				I.T.Nc[a] =
					v;
				d && d(s, v)
			}
			var t = {
				aj: p
			};
			d !== m ? t.aj = c.aj === s ? t.aj : c.aj : c !== m && (d = c);
			var v = this.Be(a);
			if (v) return d && d(s, v), v;
			v = new Image;
			t.aj && "file://" !== location.origin && (v.crossOrigin = "Anonymous");
			var B = this;
			v.addEventListener("load", f);
			v.addEventListener("error", e);
			v.src = a;
			return v
		},
		$R: function(a, d, e) {
			var n = this,
				r = s,
				t = a.type;
			t ? (t = "." + t.toLowerCase(), r = a.src ? a.src : a.name + t) : (r = a, t = I.path.Wi(r));
			if (d = n.Be(r)) return e(s, d);
			d = s;
			t && (d = c[t.toLowerCase()]);
			if (!d) return I.error("loader for [" + t + "] not exists!"), e();
			t = r;
			f.test(r) || (t = d.JB ? d.JB() : n.ww, t = n.lW(t, r));
			I.t.Ib.noCache && "string" === typeof t && (t = n.TG.test(t) ? t + ("\x26_t\x3d" + (new Date - 0)) : t + ("?_t\x3d" + (new Date - 0)));
			d.load(t, r, a, function(a, c) {
				a ? (I.log(a), n.Nc[r] = s, delete n.Nc[r], e({
					status: 520,
					Pl: a
				}, s)) : (n.Nc[r] = c, e(s, c))
			})
		},
		TG: /\?/,
		lW: function(a, e) {
			var f = I.path;
			if (a !== m && e === m) {
				e = a;
				var n = f.Wi(e),
					n = n ? n.toLowerCase() : "";
				a = (n = c[n]) ? n.JB ? n.JB() : this.ww : this.ww
			}
			e = I.path.join(a || "", e);
			if (e.match(/[\/(\\\\)]lang[\/(\\\\)]/i)) {
				if (d[e]) return d[e];
				f = f.Wi(e) || "";
				e = d[e] = e.substring(0, e.length - f.length) + "_" + I.A.language + f
			}
			return e
		},
		load: function(a, c, d) {
			var e = this,
				f = arguments.length;
			0 === f && b(Error("arguments error!"));
			3 === f ? "function" === typeof c && (c = "function" === typeof d ? {
				Ak: c,
				Tf: d
			} : {
				Tf: c,
				dU: d
			}) : 2 === f ? "function" === typeof c && (c = {
				Tf: c
			}) : 1 === f && (c = {});
			a instanceof Array || (a = [a]);
			f = new da(a, 0, function(a, d, f, g) {
				e.$R(a, d, function(a) {
					var d = Array.prototype.slice.call(arguments, 1);
					c.Ak && c.Ak.call(c.vda, d[0], g.size, g.GB);
					f(a, d[0])
				})
			}, c.Tf, c.dU);
			f.Zn();
			return f
		},
		tG: function(a,
			c) {
			var d = [],
				f;
			for (f in a) {
				var r = a[f];
				e[f] = r;
				d.push(r)
			}
			this.load(d, c)
		},
		I9: function(a, c) {
			var d = this,
				e = d.Be(a);
			e ? d.tG(e.filenames, c) : d.load(a, function(a, e) {
				d.tG(e[0].filenames, c)
			})
		},
		Rh: function(a, d) {
			if (a && d) {
				if ("string" === typeof a) return c[a.trim().toLowerCase()] = d;
				for (var e = 0, f = a.length; e < f; e++) c["." + a[e].trim().toLowerCase()] = d
			}
		},
		Be: function(a) {
			return this.Nc[a] || this.Nc[e[a]]
		},
		ez: function(a) {
			return e[a]
		},
		he: function(a) {
			var c = this.Nc;
			delete c[a];
			delete c[e[a]];
			delete e[a]
		},
		yaa: function() {
			var a = this.Nc,
				c;
			for (c in a) delete a[c];
			for (c in e) delete e[c]
		}
	}
}();
I.HB = function() {
	var a = arguments,
		c = a.length;
	if (1 > c) return "";
	var d = a[0],
		e = p;
	"object" === typeof d && (e = u);
	for (var f = 1; f < c; ++f) {
		var g = a[f];
		if (e)
			for (;;) {
				var h = s;
				if ("number" === typeof g && (h = d.match(/(%d)|(%s)/))) {
					d = d.replace(/(%d)|(%s)/, g);
					break
				}
				d = (h = d.match(/%s/)) ? d.replace(/%s/, g) : d + ("    " + g);
				break
			} else d += "    " + g
	}
	return d
};
(function() {
	function a(a) {
		var c = I.t.Ld,
			d = parseInt(a[c.Fo]) || 0,
			e = [I.A.at],
			f = [];
		if (isNaN(d) || 2 < d || 0 > d) a[c.Fo] = 0;
		I.ja = I.t.Tb;
		I.ul = p;
		if (2 === d || 0 === d && -1 === e.indexOf(I.A.Ph) && -1 === f.indexOf(I.A.Sf)) I.A.Pn.opengl ? (I.ja = I.t.zb, I.ul = p) : I.ul = u;
		if (1 === d || 0 === d && !I.ul) I.A.Pn.canvas ? (I.ja = I.t.Tb, I.ul = p) : I.ul = u
	}

	function c(a, d, e) {
		if (k[d]) return s;
		e = e || "";
		var f = [],
			g = a[d];
		g || b(Error("can not find module [" + d + "]"));
		d = I.path;
		for (var h = 0, r = g.length; h < r; h++) {
			var n = g[h];
			if (!k[n]) {
				var L = d.Wi(n);
				L ? ".js" === L.toLowerCase() &&
					f.push(d.join(e, n)) : (L = c(a, n, e)) && (f = f.concat(L));
				k[n] = 1
			}
		}
		return f
	}

	function d(a) {
		I.xG && I.xG(a[I.t.Ld.nr]);
		I.ZF = p;
		I.log(I.px);
		r && r()
	}

	function e(a) {
		var e = a[I.t.Ld.EB],
			f = I.T;
		if (I.Ta) d(a);
		else {
			var g = I.path.join(e, "moduleConfig.json");
			f.jK(g, function(f, g) {
				f && b(Error(f));
				var h = a.modules || [],
					k = g.module,
					n = [];
				I.A.Pn.opengl && 0 > h.indexOf("base4webgl") ? h.splice(0, 0, "base4webgl") : 0 > h.indexOf("core") && h.splice(0, 0, "core");
				for (var r = 0, B = h.length; r < B; r++) {
					var w = c(k, h[r], e);
					w && (n = n.concat(w))
				}
				I.T.iK(n, function(c) {
					c &&
						b(c);
					d(a)
				})
			})
		}
	}

	function f() {
		this.removeEventListener("load", f, u);
		e(I.t.Ib)
	}
	var g = document.createElement("canvas"),
		h = document.createElement("canvas");
	I.eJ = function(a, c) {
		for (var d = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], e = s, f = 0; f < d.length; ++f) {
			try {
				e = a.getContext(d[f], c)
			} catch (g) {}
			if (e) break
		}
		return e
	};
	(function() {
		I.A = {};
		var a = I.A;
		a.tN = "en";
		a.U0 = "zh";
		a.W0 = "fr";
		a.Z0 = "it";
		a.X0 = "de";
		a.f1 = "es";
		a.V0 = "du";
		a.e1 = "ru";
		a.a1 = "ko";
		a.$0 = "ja";
		a.Y0 = "hu";
		a.d1 = "pt";
		a.T0 = "ar";
		a.b1 = "no";
		a.c1 = "pl";
		a.g1 = "unkonwn";
		a.tm = "iOS";
		a.at = "Android";
		a.dO = "Windows";
		a.z1 = "Marmalade";
		a.bO = "Linux";
		a.x1 = "Bada";
		a.y1 = "Blackberry";
		a.JD = "OS X";
		a.C1 = "WP8";
		a.B1 = "WINRT";
		a.cO = "Unknown";
		a.GE = -1;
		a.q2 = 0;
		a.h1 = 1;
		a.i1 = 2;
		a.B_ = 3;
		a.P0 = 4;
		a.O0 = 5;
		a.J_ = 6;
		a.k1 = 7;
		a.w0 = 8;
		a.d2 = 9;
		a.r2 = 10;
		a.s2 = 11;
		a.AN = 100;
		a.KM = 101;
		a.dx = "wechat";
		a.kD = "androidbrowser";
		a.hp = "ie";
		a.oM = "qqbrowser";
		a.mM = "mqqbrowser";
		a.cx = "ucbrowser";
		a.jD = "360browser";
		a.jM = "baiduboxapp";
		a.iM = "baidubrowser";
		a.lM = "maxthon";
		a.lD = "opera";
		a.nM = "oupeng";
		a.ts = "miuibrowser";
		a.gp = "firefox";
		a.ip = "safari";
		a.ss = "chrome";
		a.kM = "liebao";
		a.L_ = "qzone";
		a.mD = "sogou";
		a.nD = "unknown";
		a.N8 = u;
		var c = window,
			d = c.navigator,
			e = document,
			f = e.documentElement,
			k = d.userAgent.toLowerCase();
		a.Kh = -1 !== k.indexOf("mobile") || -1 !== k.indexOf("android");
		a.platform = a.Kh ? a.AN : a.KM;
		var n = d.language,
			n = (n = n ? n : d.browserLanguage) ? n.split("-")[0] : a.tN;
		a.language = n;
		var r = n = u,
			L = "",
			N = 0,
			H = /android (\d+(?:\.\d+)+)/i.exec(k) || /android (\d+(?:\.\d+)+)/i.exec(d.platform);
		H && (n = p, L = H[1] || "", N = parseInt(L) || 0);
		if (H = /(iPad|iPhone|iPod).*OS ((\d+_?){2,3})/i.exec(k)) r =
			p, L = H[2] || "", N = parseInt(L) || 0;
		H = a.cO; - 1 !== d.appVersion.indexOf("Win") ? H = a.dO : r ? H = a.tm : -1 !== d.appVersion.indexOf("Mac") ? H = a.JD : -1 !== d.appVersion.indexOf("X11") && -1 === d.appVersion.indexOf("Linux") ? H = a.A1 : n ? H = a.at : -1 !== d.appVersion.indexOf("Linux") && (H = a.bO);
		a.Ph = H;
		a.y$ = L;
		a.x$ = N;
		a.Sf = a.nD;
		(function() {
			var c = /qqbrowser|chrome|safari|firefox|opr|oupeng|opera/i,
				d = /sogou|qzone|liebao|micromessenger|ucbrowser|360 aphone|360browser|baiduboxapp|baidubrowser|maxthon|mxbrowser|trident|miuibrowser/i.exec(k);
			d ||
				(d = c.exec(k));
			c = d ? d[0] : a.nD;
			"micromessenger" === c ? c = a.dx : "safari" === c && k.match(/android.*applewebkit/) ? c = a.kD : "trident" === c ? c = a.hp : "360 aphone" === c ? c = a.jD : "mxbrowser" === c ? c = a.lM : "opr" === c && (c = a.lD);
			a.Sf = c
		})();
		a.QI = "";
		(function() {
			var c = /(msie |rv:|firefox|chrome|ucbrowser|qq|oupeng|opera|opr|safari|miui)(mobile)?(browser)?\/?([\d.]+)/i,
				d = k.match(/(micromessenger|mx|maxthon|baidu|sogou)(mobile)?(browser)?\/?([\d.]+)/i);
			d || (d = k.match(c));
			a.QI = d ? d[4] : ""
		})();
		n = window.devicePixelRatio || 1;
		a.Uda = {
			width: n *
				(window.innerWidth || document.documentElement.clientWidth),
			height: n * (window.innerHeight || document.documentElement.clientHeight)
		};
		a.E2 = function() {
			I.ja !== I.t.zb && b(Error("This feature supports WebGL render mode only."))
		};
		a.XS = function() {
			g.width = 1;
			g.height = 1;
			var a = g.getContext("2d");
			a.fillStyle = "#000";
			a.fillRect(0, 0, 1, 1);
			a.globalCompositeOperation = "multiply";
			h.width = 1;
			h.height = 1;
			var c = h.getContext("2d");
			c.fillStyle = "#fff";
			c.fillRect(0, 0, 1, 1);
			a.drawImage(h, 0, 0, 1, 1);
			return 0 === a.getImageData(0, 0, 1, 1).data[0]
		}();
		I.A.Kh && (n = document.createElement("style"), n.type = "text/css", document.body.appendChild(n), n.textContent = "body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}");
		try {
			var J = a.localStorage = c.localStorage;
			J.setItem("storage", "");
			J.removeItem("storage");
			J = s
		} catch (aa) {
			J = function() {
				I.warn("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option")
			}, a.localStorage = {
				getItem: J,
				setItem: J,
				removeItem: J,
				clear: J
			}
		}
		J = !!g.getContext("2d");
		n = u;
		r = document.createElement("CANVAS");
		if (c.WebGLRenderingContext) try {
			I.eJ(r, {
				stencil: p,
				preserveDrawingBuffer: p
			}) && (n = p)
		} catch (la) {}
		J = a.Pn = {
			canvas: J,
			opengl: n
		};
		if (f.ontouchstart !== m || e.ontouchstart !== m || d.msPointerEnabled) J.touches = p;
		f.onmouseup !== m && (J.mouse = p);
		f.onkeyup !== m && (J.keyboard = p);
		if (c.DeviceMotionEvent || c.DeviceOrientationEvent) J.accelerometer = p;
		a.m6 = y();
		a.c5 = y();
		a.Saa = y();
		a.q4 = y();
		a.P8 = function(a) {
			return a ? p : u
		};
		a.a5 = function() {
			var a;
			a = "" + ("isMobile : " + this.Kh + "\r\n");
			a += "language : " + this.language + "\r\n";
			a += "browserType : " + this.Sf + "\r\n";
			a += "capabilities : " + JSON.stringify(this.Pn) + "\r\n";
			a += "os : " + this.Ph + "\r\n";
			a += "platform : " + this.platform + "\r\n";
			I.log(a)
		};
		a.v$ = function(a) {
			window.open(a)
		}
	})();
	delete g;
	delete h;
	I.log = I.warn = I.error = I.assert = y();
	var k = {},
		n = u,
		r = s;
	I.ZF = u;
	I.BW = function(c, d) {
		if (n) {
			var g = r;
			r = function() {
				g && g();
				d && d()
			}
		} else r = d, !I.t.Ib && c ? I.t.Ib = c : I.t.Ib || I.t.Gz(), c = I.t.Ib, a(c), document.body ? e(c) : I.w2(window, "load",
			f, u), n = p
	}
})();
I.t = {
	GM: 0,
	EM: 1,
	e0: 2,
	pD: 3,
	FM: 4,
	f0: 5,
	DM: 6,
	qx: "game_on_hide",
	Bs: "game_on_show",
	y0: "game_on_resize",
	Wg: "renderer_inited",
	Tb: 0,
	zb: 1,
	G1: 2,
	iq: s,
	jq: s,
	Ld: {
		width: "width",
		height: "height",
		EB: "engineDir",
		pK: "modules",
		nr: "debugMode",
		Rw: "showFPS",
		pr: "frameRate",
		id: "id",
		Fo: "renderMode",
		gX: "jsList"
	},
	Ob: p,
	gH: u,
	hH: u,
	Gq: u,
	s: s,
	Wj: s,
	Ez: s,
	iG: s,
	frame: s,
	Eg: s,
	canvas: s,
	Ib: s,
	xo: s,
	u$: s,
	Nba: function(a) {
		this.Ib[this.Ld.pr] = a;
		this.Wj && window.cancelAnimationFrame(this.Wj);
		this.Ob = p;
		this.GH();
		this.kA()
	},
	step: function() {
		I.O.nK()
	},
	pause: function() {
		this.Ob ||
			(this.Ob = p, I.be && I.be.mS(), this.Wj && window.cancelAnimationFrame(this.Wj), this.Wj = 0)
	},
	mf: function() {
		this.Ob && (this.Ob = u, I.be && I.be.wS(), this.kA())
	},
	$W: D("Ob"),
	TK: function() {
		I.O.AK(0);
		I.be && I.be.end();
		I.t.xo()
	},
	CK: function(a) {
		var c = this,
			d = c.Ib,
			e = c.Ld;
		this.Gz();
		this.hH ? a && a() : this.gH || (I.ZF ? (this.gH = p, this.OR(d[e.width], d[e.height]), I.view = I.nx.nz(), I.O = I.Ca.nz(), I.O.Mw && I.O.Mw(I.view), I.xb = I.O.kb(), this.LR(), this.GH(), this.kA(), (d = d[e.gX]) ? I.T.iK(d, function(d) {
				d && b(Error(d));
				c.hH = p;
				a && a()
			}) : a && a()) :
			I.BW(this.Ib, function() {
				c.CK(a)
			}))
	},
	qY: function(a, c) {
		"function" === typeof a ? I.t.xo = a : (a && ("string" === typeof a ? (I.t.Ib || this.Gz(), I.t.Ib[I.t.Ld.id] = a) : I.t.Ib = a), "function" === typeof c && (I.t.xo = c));
		this.CK(I.t.xo && I.t.xo.bind(I.t))
	},
	GH: function() {
		this.Ez = new Date;
		this.iG = 1E3 / I.t.Ib[I.t.Ld.pr];
		I.A.Ph === I.A.tm && I.A.Sf === I.A.dx || 60 !== I.t.Ib[I.t.Ld.pr] ? (window.yC = this.ZH, window.cancelAnimationFrame = this.lF) : (window.yC = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame || window.msRequestAnimationFrame || this.ZH, window.cancelAnimationFrame = window.cancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || this.lF)
	},
	ZH: function(a) {
		var c = (new Date).getTime(),
			d =
			Math.max(0, I.t.iG - (c - I.t.Ez)),
			e = window.setTimeout(function() {
				a()
			}, d);
		I.t.Ez = c + d;
		return e
	},
	lF: function(a) {
		window.clearTimeout(a)
	},
	kA: function() {
		var a = this,
			c, d = I.O;
		d.FY(a.Ib[a.Ld.Rw]);
		c = function() {
			a.Ob || (d.nK(), a.Wj && window.cancelAnimationFrame(a.Wj), a.Wj = window.yC(c))
		};
		window.yC(c);
		a.Ob = u
	},
	Gz: function() {
		if (this.Ib) this.pu(this.Ib);
		else if (document.ccConfig) this.pu(document.ccConfig);
		else try {
			for (var a = document.getElementsByTagName("script"), c = 0; c < a.length; c++) {
				var d = a[c].getAttribute("cocos");
				if ("" ===
					d || d) break
			}
			var e, f, g;
			if (c < a.length) {
				if (e = a[c].src) g = /(.*)\//.exec(e)[0], I.T.ww = g, e = I.path.join(g, "project.json");
				f = I.T.MG(e)
			}
			f || (f = I.T.MG("project.json"));
			var h = JSON.parse(f);
			this.pu(h || {})
		} catch (k) {
			I.log("Failed to read or parse project.json"), this.pu({})
		}
	},
	pu: function(a) {
		var c = this.Ld,
			d = a[c.pK];
		a[c.Rw] = "undefined" === typeof a[c.Rw] ? p : a[c.Rw];
		a[c.EB] = a[c.EB] || "frameworks/cocos2d-html5";
		a[c.nr] == s && (a[c.nr] = 0);
		a[c.pr] = a[c.pr] || 60;
		a[c.Fo] == s && (a[c.Fo] = 0);
		a[c.qw] == s && (a[c.qw] = p);
		d && 0 > d.indexOf("core") &&
			d.splice(0, 0, "core");
		d && (a[c.pK] = d);
		this.Ib = a
	},
	OR: function(a, c) {
		if (!this.Gq) {
			I.ul || b(Error("The renderer doesn't support the renderMode " + this.Ib[this.Ld.Fo]));
			var d = this.Ib[I.t.Ld.id],
				e = window,
				f = I.nb(d) || I.nb("#" + d),
				g;
			"CANVAS" === f.tagName ? (a = a || f.width, c = c || f.height, this.canvas = I.Ka = d = f, this.Eg = I.Eg = g = document.createElement("DIV"), d.parentNode && d.parentNode.insertBefore(g, d)) : ("DIV" !== f.tagName && I.log("Warning: target element is not a DIV or CANVAS"), a = a || f.clientWidth, c = c || f.clientHeight, this.canvas =
				I.Ka = d = document.createElement("CANVAS"), this.Eg = I.Eg = g = document.createElement("DIV"), f.appendChild(g));
			g.setAttribute("id", "Cocos2dGameContainer");
			g.appendChild(d);
			this.frame = g.parentNode === document.body ? document.documentElement : g.parentNode;
			d.FI("gameCanvas");
			d.setAttribute("width", a || 480);
			d.setAttribute("height", c || 320);
			d.setAttribute("tabindex", 99);
			d.style.outline = "none";
			f = g.style;
			f.width = (a || 480) + "px";
			f.height = (c || 320) + "px";
			f.margin = "0 auto";
			f.position = "relative";
			f.overflow = "hidden";
			g.top = "100%";
			I.ja === I.t.zb && (this.s = I.s = I.Rda = I.eJ(d, {
				stencil: p,
				preserveDrawingBuffer: p,
				antialias: !I.A.Kh,
				alpha: p
			}));
			this.s ? (I.Ga = I.lY, e.gl = this.s, I.cg.ui(), I.Yk = new I.SM(this.s), I.wb.QR()) : (I.Ga = I.kY, this.s = I.s = new I.vs(d.getContext("2d")), I.Yk = I.vD ? new I.vD(this.s) : s);
			I.ZQ = g;
			I.t.canvas.oncontextmenu = function() {
				if (!I.W2) return u
			};
			this.dispatchEvent(this.Wg, p);
			this.Gq = p
		}
	},
	LR: function() {
		function a() {
			I.K && I.t.jq && I.K.dispatchEvent(I.t.jq)
		}

		function c() {
			I.K && I.t.iq && I.K.dispatchEvent(I.t.iq)
		}
		var d = window,
			e, f;
		this.iq =
			this.iq || new I.Xg(this.qx);
		this.iq.setUserData(this);
		this.jq = this.jq || new I.Xg(this.Bs);
		this.jq.setUserData(this);
		this.Ib[this.Ld.qw] && I.no.qw(this.canvas);
		I.cj(document.hidden) ? I.cj(document.U9) ? I.cj(document.V9) ? I.cj(document.Sda) || (e = "webkitHidden", f = "webkitvisibilitychange") : (e = "msHidden", f = "msvisibilitychange") : (e = "mozHidden", f = "mozvisibilitychange") : (e = "hidden", f = "visibilitychange");
		e ? document.addEventListener(f, function() {
			document[e] ? c() : a()
		}, u) : (d.addEventListener("blur", c, u), d.addEventListener("focus",
			a, u)); - 1 < navigator.userAgent.indexOf("MicroMessenger") && (d.onfocus = function() {
			a()
		});
		"onpageshow" in window && "onpagehide" in window && (d.addEventListener("pagehide", c, u), d.addEventListener("pageshow", a, u));
		I.K.Fl(I.t.qx, function() {
			I.t.pause()
		});
		I.K.Fl(I.t.Bs, function() {
			I.t.mf()
		})
	}
};
Function.prototype.bind = Function.prototype.bind || function(a) {
	function c() {
		return f.apply(this instanceof d && a ? this : a, e.concat(Array.prototype.slice.call(arguments)))
	}

	function d() {}
	I.ff(this) || b(new TypeError("Function.prototype.bind - what is trying to be bound is not callable"));
	var e = Array.prototype.slice.call(arguments, 1),
		f = this;
	d.prototype = this.prototype;
	c.prototype = new d;
	return c
};
I.A3 = RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))|(?:localhost))(?::\\d{2,5})?(?:/\\S*)?$", "i");
I.tf = y();
I.tf.prototype = {
	constructor: I.tf,
	apply: function(a) {
		a.addEventListener = I.tf.prototype.addEventListener;
		a.XB = I.tf.prototype.XB;
		a.removeEventListener = I.tf.prototype.removeEventListener;
		a.dispatchEvent = I.tf.prototype.dispatchEvent
	},
	addEventListener: function(a, c, d) {
		if ("load" === a && this.V) setTimeout(function() {
			c.call(d)
		}, 0);
		else {
			this.Yj === m && (this.Yj = {});
			var e = this.Yj;
			e[a] === m && (e[a] = []);
			this.XB(a, c, d) || e[a].push({
				ce: c,
				FB: d
			})
		}
	},
	XB: function(a, c, d) {
		if (this.Yj === m) return u;
		var e = this.Yj;
		if (e[a] !== m) {
			a = 0;
			for (var f =
					e.length; a < f; a++) {
				var g = e[a];
				if (g.ce === c && g.FB === d) return p
			}
		}
		return u
	},
	removeEventListener: function(a, c) {
		if (this.Yj !== m) {
			var d = this.Yj[a];
			if (d !== m)
				for (var e = 0; e < d.length;) d[e].FB === c ? d.splice(e, 1) : e++
		}
	},
	dispatchEvent: function(a, c) {
		if (this.Yj !== m) {
			c == s && (c = p);
			var d = this.Yj[a];
			if (d !== m) {
				for (var e = [], f = d.length, g = 0; g < f; g++) e[g] = d[g];
				for (g = 0; g < f; g++) e[g].ce.call(e[g].FB, this);
				c && (d.length = 0)
			}
		}
	}
};
I.tf.prototype.apply(I.t);
I.k = {
	gD: "cc.ActionManager.addAction(): action must be non-null",
	fM: "cocos2d: removeAction: Target not found",
	C_: "cc.ActionManager.removeActionByTag(): an invalid tag",
	D_: "cc.ActionManager.removeActionByTag(): target must be non-null",
	dM: "cc.ActionManager.getActionByTag(): an invalid tag",
	eM: "cocos2d : getActionByTag(tag \x3d %s): Action not found",
	mU: "cocos2d: **** WARNING **** CC_ENABLE_PROFILERS is defined. Disable it when you finish profiling (from ccConfig.js)",
	nU: "Expected 'data' dict, but not found. Config file: %s",
	oU: "Please load the resource first : %s",
	PM: "cocos2d: Director: Error in gettimeofday",
	QM: "cocos2d: Director: unrecognized projection",
	v0: "cocos2d: Director: unrecognized projection",
	OM: "cocos2d: Director: Error in gettimeofday",
	NM: "running scene should not null",
	uD: "the scene should not null",
	dr: "element type is wrong!",
	NO: "CCSheduler#scheduleCallback. Callback already scheduled. Updating interval from:%s to %s",
	P1: "cc.scheduler.scheduleCallbackForTarget(): callback_fn should be non-null.",
	OO: "cc.scheduler.scheduleCallbackForTarget(): target should be non-null.",
	LO: "cc.Scheduler.pauseTarget():target should be non-null",
	MO: "cc.Scheduler.resumeTarget():target should be non-null",
	KO: "cc.Scheduler.isTargetPaused():target should be non-null",
	MN: "getZOrder is deprecated. Please use getLocalZOrder instead.",
	WN: "setZOrder is deprecated. Please use setLocalZOrder instead.",
	KN: "RotationX !\x3d RotationY. Don't know which one to return",
	LN: "ScaleX !\x3d ScaleY. Don't know which one to return",
	o1: "An Node can't be added as a child of itself.",
	p1: "child already added. It can't be added again",
	HN: "child must be non-null",
	QN: "removeFromParentAndCleanup is deprecated. Use removeFromParent instead",
	IN: "boundingBox is deprecated. Use getBoundingBox instead",
	ON: "argument tag is an invalid tag",
	PN: "cocos2d: removeChildByTag(tag \x3d %s): child not found!",
	r1: "removeAllChildrenWithCleanup is deprecated. Use removeAllChildren instead",
	XN: "cc.Node.stopActionBy(): argument tag an invalid tag",
	JN: "cc.Node.getActionByTag(): argument tag is an invalid tag",
	SN: "resumeSchedulerAndActions is deprecated, please use resume instead.",
	NN: "pauseSchedulerAndActions is deprecated, please use pause instead.",
	GN: "Unknown callback function",
	RN: "child must be non-null",
	TN: "cc.Node.runAction(): action must be non-null",
	UN: "callback function must be non-null",
	VN: "interval must be positive",
	q1: "cocos2d: Could not initialize cc.AtlasNode. Invalid Texture.",
	gM: "cc.AtlasNode.updateAtlasValues(): Shall be overridden in subclasses",
	G_: "",
	iD: "cocos2d: Could not initialize cc.AtlasNode. Invalid Texture.",
	pQ: "cc._EventListenerKeyboard.checkAvailable(): Invalid EventListenerKeyboard!",
	rQ: "cc._EventListenerTouchOneByOne.checkAvailable(): Invalid EventListenerTouchOneByOne!",
	qQ: "cc._EventListenerTouchAllAtOnce.checkAvailable(): Invalid EventListenerTouchAllAtOnce!",
	oQ: "cc._EventListenerAcceleration.checkAvailable(): _onAccelerationEvent must be non-nil",
	YM: "Invalid parameter.",
	Dt: "Don't call this method if the event is for touch.",
	dV: "Invalid scene graph priority!",
	eV: "0 priority is forbidden for fixed priority since it's used for scene graph based priority.",
	iV: "Invalid listener type!",
	jV: "Can't set fixed priority with scene graph based listener.",
	fV: "Invalid parameters.",
	gV: "listener must be a cc.EventListener object when adding a fixed priority listener",
	hV: "The listener has been registered, please don't register it again.",
	wN: "parameters should not be ending with null in Javascript",
	xN: "Invalid index in MultiplexLayer switchTo message",
	yN: "Invalid index in MultiplexLayer switchTo message",
	vN: "cc.Layer.addLayer(): layer should be non-null",
	TM: "Resolution not valid",
	UM: "should set resolutionPolicy",
	PW: "The touches is more than MAX_TOUCHES, nUnusedIndex \x3d %s",
	Ro: "cc.swap is being modified from original macro, please check usage",
	Sn: "WebGL error %s",
	GT: "cocos2d: cc.AnimationCache: No animations were found in provided dictionary.",
	HT: "cc.AnimationCache. Invalid animation format",
	OT: "cc.AnimationCache.addAnimations(): File could not be found",
	IT: "cocos2d: cc.AnimationCache: Animation '%s' found in dictionary without any frames - cannot add to animation cache.",
	JT: "cocos2d: cc.AnimationCache: Animation '%s' refers to frame '%s' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.",
	KT: "cocos2d: cc.AnimationCache: None of the frames for animation '%s' were found in the cc.SpriteFrameCache. Animation is not being added to the Animation Cache.",
	LT: "cocos2d: cc.AnimationCache: An animation in your dictionary refers to a frame which is not in the cc.SpriteFrameCache. Some or all of the frames for the animation '%s' may be missing.",
	MT: "cocos2d: CCAnimationCache: Animation '%s' found in dictionary without any frames - cannot add to animation cache.",
	NT: "cocos2d: cc.AnimationCache: Animation '%s' refers to frame '%s' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.",
	PT: "cc.AnimationCache.addAnimations(): Invalid texture file name",
	gP: "cc.Sprite.reorderChild(): this child is not in children list",
	bP: "cc.Sprite.ignoreAnchorPointForPosition(): it is invalid in cc.Sprite when using SpriteBatchNode",
	jP: "cc.Sprite.setDisplayFrameWithAnimationName(): Frame not found",
	kP: "cc.Sprite.setDisplayFrameWithAnimationName(): Invalid frame index",
	iP: "setDisplayFrame is deprecated, please use setSpriteFrame instead.",
	YO: "cc.Sprite._updateBlendFunc(): _updateBlendFunc doesn't work when the sprite is rendered using a cc.CCSpriteBatchNode",
	dP: "cc.Sprite.initWithSpriteFrame(): spriteFrame should be non-null",
	eP: "cc.Sprite.initWithSpriteFrameName(): spriteFrameName should be non-null",
	fP: " is null, please check.",
	cP: "cc.Sprite.initWithFile(): filename should be non-null",
	lP: "cc.Sprite.setDisplayFrameWithAnimationName(): animationName must be non-null",
	hP: "cc.Sprite.reorderChild(): child should be non-null",
	ZO: "cc.Sprite.addChild(): cc.Sprite only supports cc.Sprites as children when using cc.SpriteBatchNode",
	$O: "cc.Sprite.addChild(): cc.Sprite only supports a sprite using same texture as children when using cc.SpriteBatchNode",
	U1: "cc.Sprite.addChild(): child should be non-null",
	nP: "cc.Sprite.texture setter: Batched sprites should use the same texture as the batchnode",
	Z1: "cc.SpriteBatchNode.updateQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
	W1: "cc.SpriteBatchNode.insertQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
	XD: "cc.SpriteBatchNode.addChild(): cc.SpriteBatchNode only supports cc.Sprites as children",
	aP: "cc.SpriteBatchNode.addChild(): cc.Sprite is not using the same texture",
	V1: "Sprite.initWithTexture(): Argument must be non-nil ",
	mP: "Invalid spriteFrameName",
	Y1: "Invalid argument: cc.Sprite.texture setter expects a CCTexture2D.",
	a2: "cc.SpriteBatchNode.updateQuadFromSprite(): sprite should be non-null",
	X1: "cc.SpriteBatchNode.insertQuadFromSprite(): sprite should be non-null",
	RO: "cc.SpriteBatchNode.addQuadFromSprite(): SpriteBatchNode only supports cc.Sprites as children",
	TO: "cocos2d: CCSpriteBatchNode: resizing TextureAtlas capacity from %s to %s.",
	UO: "cocos2d: WARNING: Not enough memory to resize the atlas",
	WO: "cc.SpriteBatchNode.addChild(): Child doesn't belong to Sprite",
	VO: "cc.SpriteBatchNode.addChild(): sprite batch node should contain the child",
	SO: "cc.SpriteBatchNode.addQuadFromSprite(): child should be non-null",
	XO: "cc.SpriteBatchNode.addChild(): child should be non-null",
	IZ: "cocos2d: WARNING: originalWidth/Height not found on the cc.SpriteFrame. AnchorPoint won't work as expected. Regenrate the .plist",
	JZ: "cocos2d: WARNING: an alias with name %s already exists",
	HZ: "cocos2d: WARNING: Sprite frame: %s has already been added by another source, please fix name conflit",
	Wca: "cocos2d: cc.SpriteFrameCahce: Frame %s not found",
	CL: "Please load the resource first : %s",
	DL: "cc.SpriteFrameCache.addSpriteFrames(): plist should be non-null",
	KZ: "Argument must be non-nil",
	vM: "cc.SpriteBatchNode.updateQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
	tM: "cc.SpriteBatchNode.insertQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
	W_: "cc.SpriteBatchNode.addChild(): cc.SpriteBatchNode only supports cc.Sprites as children",
	sM: "Sprite.initWithTexture(): Argument must be non-nil ",
	qM: "cc.Sprite.addChild(): child should be non-null",
	X_: "Invalid spriteFrameName",
	Y_: "Invalid argument: cc.Sprite texture setter expects a CCTexture2D.",
	wM: "cc.SpriteBatchNode.updateQuadFromSprite(): sprite should be non-null",
	uM: "cc.SpriteBatchNode.insertQuadFromSprite(): sprite should be non-null",
	rM: "cc.SpriteBatchNode.addChild(): child should be non-null",
	GP: "cocos2d: Could not open file: %s",
	dE: "cc.TextureAtlas.insertQuad(): invalid totalQuads",
	HP: "cc.TextureAtlas.initWithTexture():texture should be non-null",
	RP: "cc.TextureAtlas.updateQuad(): quad should be non-null",
	SP: "cc.TextureAtlas.updateQuad(): Invalid index",
	KP: "cc.TextureAtlas.insertQuad(): Invalid index",
	LP: "cc.TextureAtlas.insertQuad(): Invalid index + amount",
	IP: "cc.TextureAtlas.insertQuadFromIndex(): Invalid newIndex",
	JP: "cc.TextureAtlas.insertQuadFromIndex(): Invalid fromIndex",
	PP: "cc.TextureAtlas.removeQuadAtIndex(): Invalid index",
	QP: "cc.TextureAtlas.removeQuadsAtIndex(): index + amount out of bounds",
	MP: "cc.TextureAtlas.moveQuadsFromIndex(): move is out of bounds",
	NP: "cc.TextureAtlas.moveQuadsFromIndex(): Invalid newIndex",
	OP: "cc.TextureAtlas.moveQuadsFromIndex(): Invalid oldIndex",
	TZ: "TextureCache:addPVRTCImage does not support on HTML5",
	RZ: "TextureCache:addPVRTCImage does not support on HTML5",
	YZ: "textureForKey is deprecated. Please use getTextureForKey instead.",
	SZ: "addPVRImage does not support on HTML5",
	UZ: "cocos2d: Couldn't add UIImage in TextureCache",
	WZ: "cocos2d: '%s' id\x3d%s %s x %s",
	LL: "cocos2d: '%s' id\x3d HTMLCanvasElement %s x %s",
	XZ: "cocos2d: TextureCache dumpDebugInfo: %s textures, HTMLCanvasElement for %s KB (%s MB)",
	VZ: "cc.Texture.addUIImage(): image should be non-null",
	xP: "initWithETCFile does not support on HTML5",
	BP: "initWithPVRFile does not support on HTML5",
	DP: "initWithPVRTCData does not support on HTML5",
	tP: "cc.Texture.addImage(): path should be non-null",
	zP: "cocos2d: cc.Texture2D. Can't create Texture. UIImage is nil",
	AP: "cocos2d: WARNING: Image (%s x %s) is bigger than the supported %s x %s",
	FP: "initWithString isn't supported on cocos2d-html5",
	yP: "initWithETCFile does not support on HTML5",
	CP: "initWithPVRFile does not support on HTML5",
	EP: "initWithPVRTCData does not support on HTML5",
	vP: "bitsPerPixelForFormat: %s, cannot give useful result, it's a illegal pixel format",
	sP: "cocos2d: cc.Texture2D: Using RGB565 texture since image has no alpha",
	uP: "cc.Texture.addImage(): path should be non-null",
	wP: "NSInternalInconsistencyException",
	Yg: "Missing file: %s",
	FK: "cc.radiansToDegress() should be called cc.radiansToDegrees()",
	Px: "Rect width exceeds maximum margin: %s",
	Ox: "Rect height exceeds maximum margin: %s",
	ZM: "If program goes here, there should be event in dispatch.",
	$M: "_inDispatch should be 1 here."
};
I.bS = function(a) {
	if (I.Ka) {
		var c = I.aS,
			d = document;
		if (!c) {
			var e = d.createElement("Div"),
				c = e.style;
			e.setAttribute("id", "logInfoDiv");
			I.Ka.parentNode.appendChild(e);
			e.setAttribute("width", "200");
			e.setAttribute("height", I.Ka.height);
			c.zIndex = "99999";
			c.position = "absolute";
			c.top = "0";
			c.left = "0";
			c = I.aS = d.createElement("textarea");
			d = c.style;
			c.setAttribute("rows", "20");
			c.setAttribute("cols", "30");
			c.setAttribute("disabled", p);
			e.appendChild(c);
			d.backgroundColor = "transparent";
			d.borderBottom = "1px solid #cccccc";
			d.borderRightWidth =
				"0px";
			d.borderLeftWidth = "0px";
			d.borderTopWidth = "0px";
			d.borderTopStyle = "none";
			d.borderRightStyle = "none";
			d.borderLeftStyle = "none";
			d.padding = "0px";
			d.margin = 0
		}
		c.value = c.value + a + "\r\n";
		c.scrollTop = c.scrollHeight
	}
};
I.hG = function(a) {
	if (I.Ar(a)) try {
		return JSON.stringify(a)
	} catch (c) {
		return ""
	} else return a
};
I.xG = function(a) {
	var c = I.t;
	if (a !== c.GM) {
		var d;
		a > c.pD ? (d = I.bS.bind(I), I.error = function() {
			d("ERROR :  " + I.HB.apply(I, arguments))
		}, I.assert = function(a, c) {
			if (!a && c) {
				for (var g = 2; g < arguments.length; g++) c = c.replace(/(%s)|(%d)/, I.hG(arguments[g]));
				d("Assert: " + c)
			}
		}, a !== c.DM && (I.warn = function() {
			d("WARN :  " + I.HB.apply(I, arguments))
		}), a === c.FM && (I.log = function() {
			d(I.HB.apply(I, arguments))
		})) : console && console.log.apply && (I.error = function() {
			return console.error.apply(console, arguments)
		}, I.assert = function(a, c) {
			if (!a &&
				c) {
				for (var d = 2; d < arguments.length; d++) c = c.replace(/(%s)|(%d)/, I.hG(arguments[d]));
				b(Error(c))
			}
		}, a !== c.pD && (I.warn = function() {
			return console.warn.apply(console, arguments)
		}), a === c.EM && (I.log = function() {
			return console.log.apply(console, arguments)
		}))
	}
};
I.T.Ir = function(a, c) {
	var d = this,
		e = this.Mv(),
		f = "load " + a + " failed!";
	e.open("GET", a, p);
	I.T.Ir.my ? (e.setRequestHeader("Accept-Charset", "x-user-defined"), e.onreadystatechange = function() {
		if (4 === e.readyState && 200 === e.status) {
			var a = I.gF(e.responseBody);
			c(s, d.Zu(a))
		} else c(f)
	}) : (e.overrideMimeType && e.overrideMimeType("text/plain; charset\x3dx-user-defined"), e.onload = function() {
		4 === e.readyState && 200 === e.status ? c(s, d.Zu(e.responseText)) : c(f)
	});
	e.send(s)
};
I.T.Ir.my = /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) && window.I0 && window.J0;
I.T.Zu = function(a) {
	if (!a) return s;
	for (var c = new Uint8Array(a.length), d = 0; d < a.length; d++) c[d] = a.charCodeAt(d) & 255;
	return c
};
I.T.J9 = function(a) {
	var c = this.Mv(),
		d = "load " + a + " failed!";
	c.open("GET", a, u);
	a = s;
	if (I.T.Ir.my) {
		c.setRequestHeader("Accept-Charset", "x-user-defined");
		c.send(s);
		if (200 !== c.status) return I.log(d), s;
		(c = I.gF(c.responseBody)) && (a = this.Zu(c))
	} else {
		c.overrideMimeType && c.overrideMimeType("text/plain; charset\x3dx-user-defined");
		c.send(s);
		if (200 !== c.status) return I.log(d), s;
		a = this.Zu(c.responseText)
	}
	return a
};
window.kQ = window.kQ || window.hD;
if (I.T.Ir.my) {
	var pa = document.createElement("script");
	pa.type = "text/vbscript";
	pa.textContent = '\x3c!-- IEBinaryToArray_ByteStr --\x3e\r\nFunction IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr \x3d CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex \x3d LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n       IEBinaryToArray_ByteStr_Last \x3d Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last \x3d ""\r\n   End If\r\nEnd Function\r\n';
	document.body.appendChild(pa);
	I.gF = function(a) {
		for (var c = {}, d = 0; 256 > d; d++)
			for (var e = 0; 256 > e; e++) c[String.fromCharCode(d + 256 * e)] = String.fromCharCode(d) + String.fromCharCode(e);
		d = IEBinaryToArray_ByteStr(a);
		a = IEBinaryToArray_ByteStr_Last(a);
		return d.replace(/[\s\S]/g, function(a) {
			return c[a]
		}) + a
	}
};
I = I || {};
I.NG = "data:image/gif;base64,R0lGODlhEAAQALMNAD8/P7+/vyoqKlVVVX9/fxUVFUBAQGBgYMDAwC8vL5CQkP///wAAAP///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAANACwAAAAAEAAQAAAEO5DJSau9OOvNex0IMnDIsiCkiW6g6BmKYlBFkhSUEgQKlQCARG6nEBwOgl+QApMdCIRD7YZ5RjlGpCUCACH5BAUAAA0ALAAAAgAOAA4AAAQ6kLGB0JA4M7QW0hrngRllkYyhKAYqKUGguAws0ypLS8JxCLQDgXAIDg+FRKIA6v0SAECCBpXSkstMBAAh+QQFAAANACwAAAAACgAQAAAEOJDJORAac6K1kDSKYmydpASBUl0mqmRfaGTCcQgwcxDEke+9XO2WkxQSiUIuAQAkls0n7JgsWq8RACH5BAUAAA0ALAAAAAAOAA4AAAQ6kMlplDIzTxWC0oxwHALnDQgySAdBHNWFLAvCukc215JIZihVIZEogDIJACBxnCSXTcmwGK1ar1hrBAAh+QQFAAANACwAAAAAEAAKAAAEN5DJKc4RM+tDyNFTkSQF5xmKYmQJACTVpQSBwrpJNteZSGYoFWjIGCAQA2IGsVgglBOmEyoxIiMAIfkEBQAADQAsAgAAAA4ADgAABDmQSVZSKjPPBEDSGucJxyGA1XUQxAFma/tOpDlnhqIYN6MEAUXvF+zldrMBAjHoIRYLhBMqvSmZkggAIfkEBQAADQAsBgAAAAoAEAAABDeQyUmrnSWlYhMASfeFVbZdjHAcgnUQxOHCcqWylKEohqUEAYVkgEAMfkEJYrFA6HhKJsJCNFoiACH5BAUAAA0ALAIAAgAOAA4AAAQ3kMlJq704611SKloCAEk4lln3DQgyUMJxCBKyLAh1EMRR3wiDQmHY9SQslyIQUMRmlmVTIyRaIgA7";
I.kq = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAYAAAD9qabkAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfcAgcQLxxUBNp/AAAQZ0lEQVR42u2be3QVVZbGv1N17829eRLyIKAEOiISEtPhJTJAYuyBDmhWjAEx4iAGBhxA4wABbVAMWUAeykMCM+HRTcBRWkNH2l5moS0LCCrQTkYeQWBQSCAIgYRXEpKbW/XNH5zS4noR7faPEeu31l0h4dSpvc+t/Z199jkFWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhY/H9D/MR9qfKnLj/00U71aqfJn9+HCkCR/Wk36ddsgyJ/1wF4fkDfqqm9/gPsUeTnVr6a2xlQfnxdI7zs0W7irzD17Ytb2WT7EeNv/r4ox1O3Quf2QP2pgt9utwfout4FQE8AVBSlnaRmfvAURQkg2RlAbwB9AThlW5L0GaiKojhJhgOIBqDa7XaPrusdPtr5kQwF0BVAAoBIABRCKDd5aFUhRDAAw57eAOwAhKIoupft3zoqhB1AqLwuHIBut9uFt02qqvqRDJR2dAEQJj/BAOjn56dqmma+xiaECAEQAWAggLsB6A6HQ2iaZggBhBAqgEAAnQB0kzaEmT4hAITT6VQ8Ho/HJAKKECJQtr8LwD1y/A1/vcdfEUIEyfZ9AcQbYvZ942Px88L2UwlJR0dH0EMPPbRj5syZPUeNGrXR7Xb/641xIwJ1XY9NSUlZm52dfW+XLl1w8uRJzJ8//+OGhoYJqqqe1TSt1Wsm9NN1PSIqKmr12rVrR5WUlHy1bdu2AQCumWc3IYRD1/UwVVXnFRQUTIuNjUVzczN2797dWFJSkq8oymZd15sAGAEnFEUJ1nX9nzIzM1dnZmZGh4SE4OTJk5g5c+Zf29vbp9pstrMej6fVOyhIhgAYU1hY+B+hoaGoqKg4XVlZea+XTULTNFdCQsLGiRMnPuR2u3UhBOV9eeDAAWXTpk095DUe6WsoyRE5OTlr0tLSAux2O/bs2cO5c+e+pijKUpIXSHaQVAGkvPLKK++6XK4OksJLCFlXV2cvKSlJBFAjhU+x2WwhHo9nUHp6+urMzMy7wsLCUF9fjxdffPHjxsbGiTab7WuPx9NiEutOuq4PyMjI+M+srKyYqKgoHD58GDNmzNjq8XhyVFU9b/q+LH7hBAEYu3PnTlZVVRFAGgCX6f/tAHoOHDjwa0p27txp/JO9e/f+QM7cipw9nfL3kQBKt2zZQpJ87rnn6mQmoHilw2EACs+cOUOSrK+vZ1NTE0nyo48+IoBpxswoBcMJ4Ndjx471kOTFixe5d+9ekqTH42H//v13A4jyzpAURfEH0H/OnDnthu1z5sw558MmFUCPWbNmnaMP3nrrLZoyDmP8Hl68eDFJ8siRI9/Yc+zYMQKYKdtAztrTrl27xptRXV1NAKMAOAyBBBA/Y8aMdpLs6Ojgxx9//E37+++//29yvFXppwvAwMcee8xjtDHsuXLlCqOjo//ia3wsfpkoALqFhoZuIckJEyackimm3dQmEMDUmpoakmRISMhhAHOHDx/eQJIbN24kgKEyMAHAFRMTs2XXrl1saWkhSZ0kp0+ffhrAr3wEW/S8efOukORLL72kA1gKYMPWrVtJkk899dRJAHeYrgsEsIQkjx8/TgDvAPjd448/3kaSb7zxBmUa7vC6z53BwcFbSHL9+vU6Sc6aNes8gF5ewWAH0PfVV18lSQL4DMBGIcQ6AKtcLleBFC2jXtFt8ODBe0iyoqKCAJYByC8qKmJDQwOzsrK+MAmqo1OnTveHhoa+GRkZ+XZkZOSWiIiIvzgcjk9mzpypkWRmZuZpmbYbGV4AgPnNzc1sa2sjgN0A5iQmJtaSZHl5OQHcb/K3s81mW0uSTU1NBFAFYFbfvn1Pk+Tbb79NAA8IIVzW42/hByA+Pz/fLR/2ZXIda05NI/z9/TeR5J49ewhgqlxTrtI0jY2NjQQw3zTLuWJiYjaUlJToS5Ys6fjkk080kwDEeAmADcA9GzZsIElGRUW9CyAWwLApU6Y0kOSKFSsog9QICGdERMTGsrIyZmVlEcC9AB4IDw/fTpLbtm0jgN94CUAnAJmVlZVcs2aNZ/LkyRdJcvbs2b4EwAkgZfPmzTxw4AABFAN4BkC6vFeUSewcAO5duXIlSTIhIaEawGMAxgKYAmAGgCS73e5vrKVk/yGythANYEhCQsIhkly+fDkBpKqqGmL6DgIALDKN/3yZpVWQZGVlJQE8aPI3KiMjo5okV61aRQAjAPQBMPfIkSN0u90EUCBtsPiFEwpgbn19PdetW2fM5N4zQ9ekpKQqkty0aRMBpMjiWM6JEydIkoqirJUFJ6iq6pAPVy8A6cZMehMBUACEuVyuFwG8HBwcPEIWx367ZMkSjSQXLVrUJouTRorrkAHdA8BdQogsAOsKCwtJkmPGjDkvMw2bDDo/ADEjRoz4XylyFbm5uY0mAbjLyyZ/AOOrq6tZVlbWsWDBgo69e/eyoqKCgwcPPg4gSQaoIRbp27dvN7KF+tLSUr28vJwFBQXtMpvpYRIM7+wrAkDeqVOnePbsWQIoNKfzpiXPg8uXLydJJicnNwF4f+nSpW6STEtLq5fjYwhk1wkTJtSQ5Ouvv04AqTKj+N2xY8dIkgEBAW/Ie1v8wncRegwZMmQvSfbr12+3Ua33WqPfOWbMmP0kWVpaSgCDZAqcfejQIWNZsEGKgvnh9gfQb9myZd8nAEJVVZtMkUNk8CcNHTq0liR1XWdYWNhmH1mJIme80OnTp18x1rp5eXkEsNJms92Fb7e/IgEsvHz5Mp999tkmAI/l5uZeMC0B7vEqqAYAyL106RJJsra2lpWVld+sucePH38ZQG+5NncBeOrgwYMkqbe3t/Po0aOsra011wAWyl0H7x0JJ4DE+fPnu0kyPT29DsDdUrBuyNKEEAkAdpw/f/6GeoEM8GUmfwEgPCIiopwkGxsbabPZPgOw6L777vvm4p49e26VGYjFLxUhhD+ApLKyMp44ccIoVnXybgbgzkcfffRzklyzZg0BDJYCMMmoCwQFBXkLgLGWvvcWAgBToSsKwNPTp09vMR7UuLi4rwH0lgU8c/Db5ezbeeTIkRWzZ8++aMxu+fn5BPCADBwHgP4LFy701NXVEUAJgAnPP/98kyxMNgHo53A4zH77BQQETMvPz7+Um5vbBuAlAFMSExPPmdbVL0qh8Acw8fDhw5SCchVAEYAVb775JknyhRdeaJYztHfxMwLAaqNwCGC2FArv8x0hAHKNLGPKlCme5OTk/Zs3bzb7O0wKiiG8KXl5ed8IxenTp0mSR48e1UmyW7duWywBuD2xyQcgFECgoih+8H1gyJgZV5Lkyy+/3CbTRIePtl2HDBmyw1QBHyGDdXZdXR1JUghRKkXBjOMHCoBdpr0L3nvvPZLkF198wejo6O0A4lVVDTb74HQ6AwD8Wq7Jh8rgGgDgQ13XjVR8qaxJuADMbmlpYXl5uV5UVNRWUFDgfv/993Vj/ZydnU1c37eHXML4S3viAcQqitJD2l104cIFY8lTKsXSBWBMVVWVcd9yed2A1NTUQ6Zl00CvLMMOoHdubm6zFIlWOf5+PsY/Kj09vdrU11QAwwGsv3jxIk21m2DZr10I0RXAuAcffPBgaWkpV69eTYfDcdiwUxY0w6xw+flX8L1xApjevXv3lREREaW6rofB93aPDUDQpEmTMgHgtddeqwBwEd/utZvpqK6uPgEAcXFxkA94NwB9unfvjrNnz4LklwDcf08iIqv66Zs2bXrl4YcfxooVKxAbG7uqrq5uAYA2TdOEqqpGYIi2tjbl6aeffu/YsWPv5uTk7JaC1wHg4Pnz542MwoVvTx+21dbWYvjw4WLixIl+2dnZ9lGjRgmSTE1NRUpKCkwFTGiaxtTU1OXTpk3707Bhw/6g67pDipnT4biuj7qut+Lbk3Vf1tTUXI9qu91Pjq1QFEUBgJaWFgBo8yGOQ8eNGxcAAOvXr/8QwBUfYygAKL169eoCABcuXACAWtn2hOGv0+kMNO1KiPDw8F4A4rZv3/7R1KlTR0+bNu1ht9u9r1+/fqitrQXJgwDarRC6/QjPzs4+QJIffPCB9/aQmSAA43ft2mW0e1QGoi8CAPyLsZccExNTC2BlRkbGRdOyYJCP2csBIN6UAZzCd7cBbQCijYp/dXU1ExMTz6SmptaMHj36f9LS0vYlJCRsl6mxIWSdu3fv/g5J7t+/nwC2AShMTk6+SJKff/45AWRLYbD7+fndAeDf5BJnLoCCyZMnt5JkdnZ2C4B/F0KEm1Pu+Pj4rST55ZdfEsBWAK+mpaVdMo3raDn7KwDuSEpK+m+S3LBhAwG8DuCtHTt2UBbpjgC408vvcFVV15HkuXPnjMp+p5uMf0RcXNyHJNnQ0EBVVfcCWBQXF3fG+Jv0yxABPwB5LS0tRmFxN4BlTzzxxGWSXLx4sS5F3GGFy+1Hp5SUlJq6ujoWFxdTpsZ2H+0iIyMj/0iSWVlZX5mr5jfJFroPGzasxlhTnjp1iiTZ3NxMl8tlrCd9pfa9SkpKSJI5OTmnZOageLUZZqxvfVFWVkZcPwdgNwnSCKPqb17jkmR8fPzfZMDZ5CRsFBmNI7h95s2b1yhT7/MAYmStwCx4vy0uLqa3v5qmEcCfvSr1QQAeXb16NY3Cm3HQ55133iGAp+SxZTNhKSkpfzUddkrFjYevzAQCeGjp0qXfsYckY2NjTwD4leGDLCL2HTdunNtoY+zWSHFcIHdsFCtcfuZ1vO9Eqs3m7/F47sb1k2qX/f3997W2tl7BjWfpBYDOzzzzzIVJkyZh0KBBCwEsB3AJvl9AETabLcDj8dwRFRW1ctasWb8JCgpSzp07d62wsPC/Wltb8xRFadR1/ZqPXYbgAQMGbI2Pjw/+6quv9ldVVT0r01ezuPRJSUn5Y9euXXVd11WzDaqq6kePHm3+7LPPRgO4KlNuxWazhXo8nuTk5OSXMjIyEl0uFxoaGtqKior+dPXq1VdUVT0jj7r68ieoT58+vx8yZMjdx48fP1JVVTVF9m20VW02WyfZf97YsWPjXS4X6urqWvPy8jYCWCyEuEDS8FdVFKWzruv//OSTTy5OTk7uqWkaPv3007qysrJ8RVH+LI8ym8/rB3Tu3HnRI488knLo0KG2ffv2ZQI4C98vP6mqqoZqmpaclpa2cOTIkX39/f3R0NDQUVxc/G5TU9PLqqrWa5rWLH1QVFUN0TStX1JSUvH48eP7BwYG4uDBg1cKCgpeBbBe2u+2Qug2EwD5N5sMPuNtMe8XP4TT6Qxoa2sbIGeXvUKIK7d4IISiKC5d1wPljOfA9bPwzYqiXNV13dd6Uqiq6qdpml2mpe02m63d4/G4vcTF5fF47LJf71nJA6BZVVW3pmntuPHlmAD5wk6Q9NnbHp9vHaqq6tA0zU/64PZhk1FfCZB9G/23ALiqKEqzD39tpvbGUqoFwFUhRLP3yzpCCDtJpxyXDulfG27+pqRR3DXsUWVd4Yq0x/taVQjhIhksC8L+ABpM9ljBf5sKwI8pIBr75L5E4vvu+UNeG/a+hv+AL7yFH8qPtOfHjtOP6V/Bja8D6z/B2Nys/1u9Xv33tLf4GfF/LC4GCJwByWIAAAAASUVORK5CYII\x3d";
I.Hz = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAlAAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM4MDBEMDY2QTU1MjExRTFBQTAzQjEzMUNFNzMxRkQwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM4MDBEMDY1QTU1MjExRTFBQTAzQjEzMUNFNzMxRkQwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU2RTk0OEM4OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU2RTk0OEM5OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQADQkJCQoJDQoKDRMMCwwTFhENDREWGhUVFhUVGhkUFhUVFhQZGR0fIB8dGScnKionJzk4ODg5QEBAQEBAQEBAQAEODAwOEA4RDw8RFA4RDhQVERISERUfFRUXFRUfKB0ZGRkZHSgjJiAgICYjLCwoKCwsNzc1NzdAQEBAQEBAQEBA/8AAEQgAyACgAwEiAAIRAQMRAf/EALAAAAEFAQEAAAAAAAAAAAAAAAQAAgMFBgcBAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgUQAAIBAgIEBwoLBgQGAwAAAAECAwAEEQUhMRIGQVFxsTITFGGBwdEiQlKSMzWRoeFicqKyI1NzFYJjJDQWB9KjVCbxwkNkJWXik3QRAAIBAgMFBQcDBQEAAAAAAAABAhEDIRIEMUFRcTJhwVIUBZGhsSJyEzOB0ULhYpIjUxX/2gAMAwEAAhEDEQA/AMJSpUqAVKlXuFAeUq9wpUB5XuFe4V6ooDzZHDox0CnGMinzwl7Z8NajaHeoO3vmTBZBtp9YUIqTEV5ROxHKnWRnaU8VRMhFBUjpV7hSoSeUq9pUB5Sr2lhQHlKvcK8oBV7hSFSRrtaKAZs07YNPM1pG2xJIAw1jSeandry/8X4m8VCKkWwaWwam7Xl/4v1W8VLtmX/i/VbxUoKkWwakSM407tmX/i/VbxUmzGwjQsjdY41IARie/U0IbZO0kNtCXnOCkEBeFu4KI3Bs7DNb27ya+jDx3kJeEnpJJEcQVbWDsk17u5urd591ucZkWhym2Vnd9RkCDEpFxDRpbw0bunu5mlp2De2FMLYXOD2wB2xbOeraUcYGJ72mlSUiqzzdzMd3Z3mixltA2yzcK/NlHM1DQyRXce1HocdNOEfJXZ88y9ZojOqhiBszIRiHQ8Y4cK5TvHuzLljHNMqxNoDjLFraHHnjPxcNCGVbxEUzYNTx5jZSxhpW6qTzlwJ+DCvO2Zf+L9VvFSgqyHYNLYNTdssPxfibxUu15f8Ai/VPiqCakOwa82DU/a8v/F+JvFTDdWPBL8R8VKCvYRYV5UzoMAy6QdIIqI0B4KJtxiRQwou16QoGUkntH5Tz0RbZbmF2hktraSVBo2lUkY8tDye0flPPXTslVUyiyVRsjqUOA4yMT8dW2ram2m6UVTNq9S7EIyUVJydMTn/6DnP+im9Wl+g5z/opvVrpteEhQWY4AaSTwAVf5WPiZh/9S5/zj7zltzlmYWkfWXNvJDGTgGcYDHirR7i7mSbwXParsFMrgb7w6jKw/wCmnc9I14kF3vpvCljbMyWMOJL4aEiB8qU/ObUK7HYWVrl1pFZWiCOCBQqKOLjPGTrNZZqKbUXVHq2nNwTuJRk1VpbgXN8s7Rk5ym0UQQzhIG2NAjhxHWbI+gCBVjBBFbwxwQqEiiUJGg1BVGAFe7dV28WYLYZFmF2Th1UD7JGjymGyn1iK5OyzIBGB1HgrLZhamzumQAGJwSqnSCh1q3GOCodxt4cxurdcpzuN4cyhiWaF5Bg09udUmnWw1H/jV9nFuJ7Quo+8h8peThFA+047vduyMtk7fYqTl07YFdfUufMPzT5p71UdtlmYXaGS2t3mQHAsgxANdadYJopLe4QS2867EsZ4QfCNYrCFbjdDPmgkYyWFxgVf04ifJf6ScNdRUW1XBb6FU5TjF5EpSSrGu/s5lN+g5z/opvVpfoOc/wCim9WtdHnatvObJXDW7xLGhB8nrPaY9/HCr+tEdPCVaSeDoYLnqF63lzW4/PFSW3ecxbI84VSzWUwUaSdg0DXXK5nvAipnd6qgKvWnQO7pri9ZUEmm3Vl2j1kr8pRlFRyquBNZjGxQ/S56Y1S2fu9OVueon11Szahoou06QoQUXadIVCD2FJJ7R+U89dMydv8Axdn+TH9muZye0flPPXQstlK5Tbka1gUjlC1q0vVLkeb6r+O3Tx9xcY1nt8c0NrZCyiOE1108NYjGv1joo7Js1jzKyScYLIvkzL6LDwHXVJksH9Sb49dKNq0tj1jA6uriOCL+02FWX7iVtZX1/AzaHTyeoauKn2MX9W79zebiZCuR5MjSrhfXuEtwTrUeZH+yNfdrRNcxI6IzhXlJEak6WIGJ2Rw4ChWnChndtlVBLMdQA0k1gbXNMzzDfDLs6mjaPKppJbWwJ1bOwwxw43OnHh71YT3DpfWUJmFlb5jHHDdeXBHIsrRea5TSqvxqG04cNN62vetoCS4tre5mgnkGE9q+3DKOkuI2WX6LDQRRHWDh1UCtwj7QRg2wdl8Djgw1qe7XvW0BQ3kfZ7mSLgU+T9E6RVbnuVrnWVSWqj+Lt8ZbRuHEdKPkYVcZ2MJY5fSGyeVar45+rkWQHAqccalPE5km1htWK5nK4Wnt5FuUBUwOMG4nGkA/BXUrW4S6torlOjMgcd/xVn7rLo7zKs0uEjCNeSvdwoBhgsZxX1l2j36k3Lu+uyprdj5Vs5A+i/lD48a0aaVJOPi7jB6lbzWozpjB48pf1NDXNN4vfl7+Z4BXS65pvF78vfzPAK71XTHmZ/S/yT+jvJ7L3fHytz1E+upbL+Qj5W56jfXWRnsIYKLtekKEFGWvSFQgyjk9o/Keet3YthlMP/5x9msJJ7R+U89biyb/AMXEv7gD6tadL1T+kwepRrC39ZkLDMbiwMvUHRPG0bjlGg8ore/23sxBldxfMPLupNhT8yL/AORNZbdzJ484scytxgLqJY5LZj6Q2sV5G1Vud1mjjyG0ij0NEGSZToKyhjtqw4waztuiXA3qKTbSxltfGhbZlE95ZtZqxVbgiOZhrER9ph3Svk9+pJILZ4Y4DGBFCUMKjRsGPobPFhUfW0NJmljE2xJcIrcI2vFUEln1lRXd6lrazXT9GCNpD+yNqoI7mOVduNw6nzlOIoPOUa6yye1XXcbMR5GdQ3xY0BSbj31/FcTQZirJ+q431q7anbHCTZ72Bw7lbPrKBMcBWNNgbMBBh+bsjBdni0VJ1lARZs6yWiupxCuMDy6KpS2IwOo6DTr3Mre3e5tZZVUM4ZBjqOOJoWO4jkXajcOOMHGgDISvWIrdAkKR80+TzVl908bPPL3LzxOuHdifxVfiTAg92qI/w+/8gGgSyN/mR7XPVlp0lF/3L3mbVKtu5Hjbk/8AHE2Fc03i9+Xv5ngFdKNc13i9+Xv5ngFaNV0x5nn+l/kn9HeEWXu+PlbnqJ9dS2Xu9OVueon11kZ7CGCjLXpCgxRlr0hUIPYUcntH5Tz1s8vb+Bt1/dqPirGSe0flPPWusG/g4Py15q06XqlyMWvVYQ+ruI9xJOqzO9hOto/sP8tbGOFIrmWeM7IuMDMnAXXQJOUjQeOsJk0nY96ip0CYunrjaHx1t+srPJUbXBm2LrFPikwTOb+T+VhbZxGMrDXp83x1QSy2tucJpUjPETp+Cn5/ftaRvKvtp3Kx48HG3erHMzOxZiWZtLMdJNQSbbL71Vk6yynViOkqnEEfOWtPbXi3EQkGg6mXiNckjeSJxJGxR10qw0GtxuxmvbImD4CZMFlA4fRfv0BqesqqzTMZNMEDbIHtHH2QeCiZJSqMQdOGiue53mz3czQwsRbIcNHnkec3c4qAMuriz68gTIToxwOOnlp0MjxMJYW741Gs3RVldtbygE/dMcHX/moDaxTiWNZB53B3arb8/wC+4SOF4sf/AKxU9kcBsfOGHfoUHtG/RbzY5Die5HHhXdvavqiZ9Q8Jdlq4/gbKua7xe/L38zwCuhpf2Uk/Zo50kmwJKIdogDjw1VzzeL35e/meAVp1LTgqY4nn+mRauzqmqwrjzCLL3fHytz1E+upLL+Qj5W56jfXWRnroYKLtekKEFF2vSFQg9hSSe0flPPWosm/hIfoLzVl5PaPynnrRWb/w0X0F5q06XqlyM2sVYx5gmbFre/t71NY2T+0h8VbSO5SWNJUOKSAMp7jDGspmMPaLRlXS6eWve1/FRO7WYdbZm1Y/eW/R7qHxHRXGojlm3ulid6aVbaW+OALvgCLq2Hm9WxHKWqjhj6xsK1e8dm15l4niG1LZkswGsxtrPeOmsvayBJA1VItlWjptLuTdPMo7LtjRDq9naK4+WF9IrUW7BaHOljGqVHB7w2hzVoZt87d8vaNYSLl02CcRsDEbJbj71Uu7UBkvJ7/D7q2QoDxySaAO8MTXdxRVMpRp5XZOWdF/ms7R5XdyKfKWJsO/5PhrG5XlNxmEywW6bTnTxAAcJNbGSMXkM1pjgbiNo1PziPJ+Os7u7m/6ReM00ZOgxSpqYYHT3wRXMKN4ll9zUG4bQfNshu8sZVuEA2hirA4qe/VOwwrVbzbww5mI44UKRRYkbWG0S3JWctbd7u5WFfOOLHiUdJqmaipfLsIsObhWe001lMkMVvJNjhghIALMcBxCs7fxXQmkupx1bXDswGPlaTidVaEyKNXkoo4eBV+Sq7L7Vs9zcBgeyQ4GQ/MB1crmoim2orezqcowTuSeEY48jQ7oZX2PLzdyLhNd6RjrEY6I7+uspvH78vfzPAK6UAAAFGAGgAcArmu8Xvy9/M8ArTfio24RW5nnaG67uou3H/KPuqT2X8hHytz1G+upLL3enK3PUb66ys9RDBRdr0hQgou06QqEGUkntH5Tz1e238vF9BeaqKT2j8p56vbb+Xi+gvNWjTdUuRn1XTHmTh8KrJTJlt8t1CPIY44cGnpJVjTJYkmjaN9Ib4u7V923njTethRauZJV3PaW1rfLIiXEDYg6R4VYc9CXW7thfOZbKdbGZtLW8uPVY/u3GrkNUkM9zlcxUjbhfWOA90cRq4gv4LhdqN+VToNYWmnRm9NNVWNTyHc6VWBv8wt4YeHqm6xyPmroq1Z7WGFLSxTq7WLSuPSdjrkfumq5yHXDUeA92oO2SKpVumNAaoJLMXH3myp0rpJ4uKhc3tbDM5BMri1zAj79j7KTiY8TcdBpcsith0286o+sPCagEX9Pzg4zXUCp6QYse8oouCG3tk6m1BYv05W6T+IdyolxbHDAAa2OgDlNCz3ryN2WxBd5PJMg1t81eId2ukqnLlTBbfcuY+9uJLiRcvtPvHdsHK+cfRHcHDWsyawjyy0WBcDI3lTP6TeIcFV+S5OmXx9bJg1048o8Cj0V8Jq2DVu09nL80up7OxHi+oal3P8AXB/IsZS8T/YOV65zvCcc7vfzPAK3ivWCz445zeH954BXOr6I8yfSfyz+jvCLP3fHytz1G+upLP3fHytz1E+usbPaQ0UXadIUIKLtekKhB7Ckk9o/Keer22/l4/oLzVRSe0flPPV7b/y8X0F5q0abqlyM+q6Y8yQsBTDMor1o8aiaE1pbluMqS3sbLLHIhSRQyngqukhaJ9uBjo+H5aOa3ao2t34qouRlLajTalGP8v0IY8ylXQ+PKPFU/bYXOLPge6CKia0LaxTOxHu1Q7cuBd9yPEJ7TbjXKO8CajbMIF6CNIeNvJHjqIWJ7tSpYkalqVblwIdyG+RGXur0hXYJFxal+Dhq5y3slkv3Y2pD0pTr+QUClpJRUdo9XW4OLrTHtM16cZLLWkeC7y4jvlNEpcRtw1Ux27Ci448NZrTFy3nn3IQWxlgGrDZ3pza7/M8ArZo+ArF5171uvp+CqdV0R5l/psUrs2vB3hdl7vTlbnqJ9dS2Xu+PlbnqJ9dY2eshooq16QoQUXa9IVCD2FLJ7RuU89WNtmUSQqkgYMgw0accKrpPaPynnrZWG4Vi+VWmY5tnMWXG+XrIYnA0rhj0mdcTgdNdwnKDqjmduM1SRR/qlr8/4KX6pa8T/BVzDuLZXudRZblmbxXcPUNPc3KqCIwrbOzgrHEnHjoyD+3eSXkht7DeKG4umDGOJVUklfouThXfmbnZ7Cvy1vt9pmv1W1+d8FL9VteJvgq5yrcOGfLmzHN80iyyETPbptAEFo2ZG8pmUa1OFNn3Ky6W/sbDKM5hv5bx2WTZA+7RF2y52WOPJTzE+z2Dy1vt9pT/AKpacTerS/U7Tib1a04/t7kDXPY03jhN0W6sQ7K7W3q2dnrMccaDy/8At80kuZfqWYxWNtlcvUPPhiGYhWDeUy7IwYU8xPs9g8tb7faUn6pacTerTxm9oOBvVq3v9z927aynuId44LiWKNnjhAXF2UYhRg516qpsryjLr21665zFLSTaK9U2GOA87SwqY37knRU+BzOzags0s1Oyr+BKM6sxwP6tSDPLMen6vy0rvdm3Sxlu7K/S7WDDrFUDUTxgnTU826eXW7KlxmqQuwDBXUKcD+1Xee/wXuKX5XDGWLapSVcOyhEM/seJ/V+WnjeGx4pPV+Wkm6kKZlFay3Jlt7iFpYZY8ASVK6DjtDDA0f8A0Tl340/1f8Ndx8xJVWXB0KbktFFpNzdVXAC/qOwA0CQni2flrO3Vwbm5lnI2TKxbDirX/wBE5d+NcfV/wVR7xZPa5U9utvI8nWhmbbw0YEAYYAVxfhfy5rlKR4Fulu6X7mW1mzT8S4Yis/5CPlbnqJ9dSWfu9OVueon11mZvQ2i7XpChKKtekKhBlNJ7R+U89bDfGTb3a3ZX0Lcj6kdY+T2j8p560288m1kWQr6MJ+ylSAr+2cnV5renjs3H1loX+3j9XvbbtxLN9lqW4UnV5jdnjtXHxihtyZNjeSBu5J9k1BJe7xy7W5CJ/wCzuD/mTVTf2+fq97LJuLrPsNRueS7W6aJ/38x+vLVXuY+xvHaNxbf2GoCezf8A36j/APsSf8w1sLnqczTefJluYoLm5uo5F61sBshItP1cNFYe1f8A3ir/APfE/wCZUe9bB94r5jwuPsrQFhmG4l/Z2M17HdW90tuu3IkTHaCjWdIw0VVZdks9/C06yJFEp2dp+E1bbqybGTZ8vpQD7L1XRv8A7blT96Oda7tpNuuNE37Cq9KSisjyuUoxrStKllHbLlWTXsMs8chuSuwEPDqwoLe5y+YRE/gLzmqRekvKKtd4327yM/ulHxmrHJStySWVRyrjxKI2XC/CTlnlPPKTpTdFbP0L1bgrf5Lp0G3dPhQHwV0S1lzBsns3sESR8Crh9WAJGjSOKuU3E+zdZQ3oJh8IArdZXFDmOTpHa3i2+YrI2KtKy4ricBsBuHHgFXSo440+Wa2qqxjvM9uMoy+WvzWpLCWWWE28HxL6e43ojgkeSCBY1Ri5BGIUDT51cl3vm276BBqSEH4WbxV0tlkyXJcxTMb+OW6uY9mGHrCzDQwwAbTp2uKuTZ9N1uYsfRRR8WPhrm419mSSjRyiqxVK7y23B/ftuTm2oSdJyzNVw3BFn7vTlbnqF9dS2fu9OVueon11lZuQ2iLdsGFD05H2dNQGV0ntG5Tz1dWm9N1b2kVq8EVwsI2UaQaQOKhmitZGLOmk68DhSFvY+gfWNSAg7z3Qvo7yKCKIohiaNR5LKxx8qpxvjcqS0VpbxvwOAcRQPZ7D0G9Y0uz2HoH1jUCpLY7zXlpbm3eKO5QuzjrBqZji3x17PvNcyT288VvDBJbMWUovS2hslW7mFQ9nsPQPrGl2ew9A+saCod/WNxtbYsrfb17WBxx5ddD2281xC88klvDcSXEnWuzrqOGGC9zRUPZ7D0G9Y0uzWHoH1jQVCLreq6ntZbaO3it1mGy7RjTs1X2mYy20ZiCq8ZOODcdEdmsPQb1jS7PYegfWNdJuLqnQiSUlRqpFLmryxtH1Ma7Qw2gNNPOdSt0oI27p007s9h6B9Y0uz2HoH1jXX3Z+I4+1b8IJdX89xLHKQFMXQUahpxoiPN5P+onfU+A0/s9h6DesaXZ7D0D6xpG7OLbUtu0StW5JJx2bBsmbtiSiEk+cxoCWWSaVpZOk2vDVo0VYdnsPQb1jSNvZcCH1jSd2c+p1XAmFqEOmOPEfaH+BQd1ueo211IzrgFUYKNAAqI1WztCpUqVCRUqVKgFSpUqAVKlSoBUqVKgFSpUqAVKlSoBUqVKgFSpUqAVKlSoD/9k\x3d";
var I = I || {},
	za = {
		id: 0 | 998 * Math.random(),
		RW: 0 | 998 * Math.random(),
		UV: function() {
			return this.id++
		},
		VV: function() {
			return this.RW++
		}
	};
(function() {
	var a = /\b_super\b/;
	I.Ta = y();
	I.Ta.extend = function(c) {
		function d() {
			this.W = za.VV();
			this.ctor && this.ctor.apply(this, arguments)
		}
		var e = this.prototype,
			f = Object.create(e),
			g = za.UV();
		za[g] = e;
		var h = {
			writable: p,
			enumerable: u,
			configurable: p
		};
		f.W = s;
		d.id = g;
		h.value = g;
		Object.defineProperty(f, "__pid", h);
		d.prototype = f;
		h.value = d;
		Object.defineProperty(d.prototype, "constructor", h);
		this.ah && (d.ah = I.j(this.ah));
		this.bh && (d.bh = I.j(this.bh));
		for (var g = 0, k = arguments.length; g < k; ++g) {
			var n = arguments[g],
				r;
			for (r in n) {
				var t =
					"function" === typeof n[r],
					v = "function" === typeof e[r],
					B = a.test(n[r]);
				t && v && B ? (h.value = function(a, c) {
					return function() {
						var d = this._super;
						this._super = e[a];
						var f = c.apply(this, arguments);
						this._super = d;
						return f
					}
				}(r, n[r]), Object.defineProperty(f, r, h)) : t ? (h.value = n[r], Object.defineProperty(f, r, h)) : f[r] = n[r];
				if (t) {
					var w, z;
					if (this.ah && this.ah[r]) {
						var t = this.ah[r],
							x;
						for (x in this.bh)
							if (this.bh[x] === t) {
								z = x;
								break
							}
						I.p(f, t, n[r], n[z] ? n[z] : f[z], r, z)
					}
					if (this.bh && this.bh[r]) {
						t = this.bh[r];
						for (x in this.ah)
							if (this.ah[x] ===
								t) {
								w = x;
								break
							}
						I.p(f, t, n[w] ? n[w] : f[w], n[r], w, r)
					}
				}
			}
		}
		d.extend = I.Ta.extend;
		d.w8 = function(a) {
			for (var c in a) f[c] = a[c]
		};
		return d
	}
})();
I.p = function(a, c, d, e, f, g) {
	if (a.__defineGetter__) d && a.__defineGetter__(c, d), e && a.__defineSetter__(c, e);
	else if (Object.defineProperty) {
		var h = {
			enumerable: u,
			configurable: p
		};
		d && (h.get = d);
		e && (h.set = e);
		Object.defineProperty(a, c, h)
	} else b(Error("browser does not support getters"));
	if (!f && !g)
		for (var h = d != s, k = e != m, n = Object.getOwnPropertyNames(a), r = 0; r < n.length; r++) {
			var t = n[r];
			if (!((a.__lookupGetter__ ? a.__lookupGetter__(t) : Object.getOwnPropertyDescriptor(a, t)) || "function" !== typeof a[t])) {
				var v = a[t];
				if (h && v ===
					d && (f = t, !k || g)) break;
				if (k && v === e && (g = t, !h || f)) break
			}
		}
	a = a.constructor;
	f && (a.ah || (a.ah = {}), a.ah[f] = c);
	g && (a.bh || (a.bh = {}), a.bh[g] = c)
};
I.j = function(a) {
	var c = a.constructor ? new a.constructor : {},
		d;
	for (d in a) {
		var e = a[d];
		c[d] = "object" === typeof e && e && !(e instanceof I.i) && !(e instanceof HTMLElement) ? I.j(e) : e
	}
	return c
};
I.mo = function(a, c) {
	for (var d in a) c[d] = a[d]
};
I = I || {};
I.oa = I.oa || {};
I.a4 = y();
I.R0 = {
	e$: 0,
	back: 6,
	P9: 18,
	c4: 8,
	nda: 9,
	H5: 13,
	shift: 16,
	G4: 17,
	alt: 18,
	pause: 19,
	k4: 20,
	escape: 27,
	fb: 32,
	V$: 33,
	U$: 34,
	end: 35,
	home: 36,
	left: 37,
	Dda: 38,
	right: 39,
	R4: 40,
	select: 41,
	yr: 45,
	t0: 46,
	"0": 48,
	1: 49,
	2: 50,
	3: 51,
	4: 52,
	5: 53,
	6: 54,
	7: 55,
	8: 56,
	9: 57,
	a: 65,
	b: 66,
	c: 67,
	I: 68,
	Ml: 69,
	Xn: 70,
	g: 71,
	t8: 72,
	ko: 73,
	c9: 74,
	d9: 75,
	ro: 76,
	Jr: 77,
	fa: 78,
	r$: 79,
	d: 80,
	laa: 81,
	r: 82,
	dba: 83,
	of: 84,
	u: 85,
	v: 86,
	m: 87,
	x: 88,
	y: 89,
	z: 90,
	g$: 96,
	h$: 97,
	i$: 98,
	j$: 99,
	k$: 100,
	l$: 101,
	m$: 102,
	n$: 103,
	o$: 104,
	p$: 105,
	"*": 106,
	"+": 107,
	"-": 109,
	numdel: 110,
	"/": 111,
	O5: 112,
	S5: 113,
	T5: 114,
	U5: 115,
	V5: 116,
	W5: 117,
	X5: 118,
	Y5: 119,
	Z5: 120,
	P5: 121,
	Q5: 122,
	R5: 123,
	q$: 144,
	jba: 145,
	";": 186,
	kba: 186,
	K5: 187,
	"\x3d": 187,
	",": 188,
	v4: 188,
	H4: 189,
	".": 190,
	caa: 190,
	i6: 191,
	s8: 192,
	"[": 219,
	w$: 219,
	b4: 220,
	"]": 221,
	r4: 221,
	quote: 222,
	U4: 1E3,
	V4: 1001,
	W4: 1003,
	T4: 1004,
	S4: 1005
};
I.B0 = 0;
I.cN = 1;
I.dN = 2;
I.C0 = 3;
I.D0 = 4;
I.eN = 5;
I.g7 = function(a) {
	return 8 < a.length && 137 === a[0] && 80 === a[1] && 78 === a[2] && 71 === a[3] && 13 === a[4] && 10 === a[5] && 26 === a[6] && 10 === a[7] ? I.cN : 2 < a.length && (73 === a[0] && 73 === a[1] || 77 === a[0] && 77 === a[1] || 255 === a[0] && 216 === a[1]) ? I.dN : I.eN
};
I.x8 = function(a, c) {
	function d() {}
	d.prototype = c.prototype;
	a.Tw = c.prototype;
	a.prototype = new d;
	a.prototype.constructor = a
};
I.d4 = function(a, c, d) {
	var e = arguments.callee.caller;
	if (e.Tw) return ret = e.Tw.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
	for (var f = Array.prototype.slice.call(arguments, 2), g = u, h = a.constructor; h; h = h.Tw && h.Tw.constructor)
		if (h.prototype[c] === e) g = p;
		else if (g) return h.prototype[c].apply(a, f);
	if (a[c] === e) return a.constructor.prototype[c].apply(a, f);
	b(Error("cc.base called from a method of one name to a method of a different name"))
};
I.rO = function() {
	this.y = this.x = 0
};
I.d = function(a, c) {
	return a === m ? {
		x: 0,
		y: 0
	} : c === m ? {
		x: a.x,
		y: a.y
	} : {
		x: a,
		y: c
	}
};
I.MX = function(a, c) {
	return a && c && a.x === c.x && a.y === c.y
};
I.S1 = function(a, c) {
	this.width = a || 0;
	this.height = c || 0
};
I.size = function(a, c) {
	return a === m ? {
		width: 0,
		height: 0
	} : c === m ? {
		width: a.width,
		height: a.height
	} : {
		width: a,
		height: c
	}
};
I.Sca = function(a, c) {
	return a && c && a.width === c.width && a.height === c.height
};
I.gi = function(a, c, d, e) {
	this.x = a || 0;
	this.y = c || 0;
	this.width = d || 0;
	this.height = e || 0
};
I.rect = function(a, c, d, e) {
	return a === m ? {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	} : c === m ? {
		x: a.x,
		y: a.y,
		width: a.width,
		height: a.height
	} : {
		x: a,
		y: c,
		width: d,
		height: e
	}
};
I.IK = function(a, c) {
	return a && c && a.x === c.x && a.y === c.y && a.width === c.width && a.height === c.height
};
I.Ku = function(a) {
	return a && 0 === a.x && 0 === a.y && 0 === a.width && 0 === a.height
};
I.saa = function(a, c) {
	return !a || !c ? u : !(a.x >= c.x || a.y >= c.y || a.x + a.width <= c.x + c.width || a.y + a.height <= c.y + c.height)
};
I.Xr = function(a) {
	return a.x + a.width
};
I.taa = function(a) {
	return a.x + a.width / 2
};
I.Do = function(a) {
	return a.x
};
I.Yr = function(a) {
	return a.y + a.height
};
I.uaa = function(a) {
	return a.y + a.height / 2
};
I.Eo = function(a) {
	return a.y
};
I.Co = function(a, c) {
	return c.x >= I.Do(a) && c.x <= I.Xr(a) && c.y >= I.Eo(a) && c.y <= I.Yr(a)
};
I.waa = function(a, c) {
	var d = a.y + a.height,
		e = c.x + c.width,
		f = c.y + c.height;
	return !(a.x + a.width < c.x || e < a.x || d < c.y || f < a.y)
};
I.xaa = function(a, c) {
	return !(a.x + a.width < c.x || c.x + c.width < a.x || a.y + a.height < c.y || c.y + c.height < a.y)
};
I.pw = function(a, c) {
	var d = I.rect(0, 0, 0, 0);
	d.x = Math.min(a.x, c.x);
	d.y = Math.min(a.y, c.y);
	d.width = Math.max(a.x + a.width, c.x + c.width) - d.x;
	d.height = Math.max(a.y + a.height, c.y + c.height) - d.y;
	return d
};
I.vaa = function(a, c) {
	var d = I.rect(Math.max(I.Do(a), I.Do(c)), Math.max(I.Eo(a), I.Eo(c)), 0, 0);
	d.width = Math.min(I.Xr(a), I.Xr(c)) - I.Do(d);
	d.height = Math.min(I.Yr(a), I.Yr(c)) - I.Eo(d);
	return d
};
I.RD = I.Ta.extend({
	bH: s,
	Az: s,
	ctor: function() {
		window.DOMParser ? (this.Az = p, this.bH = new DOMParser) : this.Az = u
	},
	parse: function(a) {
		return this.aH(a)
	},
	aH: function(a) {
		var c;
		this.Az ? c = this.bH.parseFromString(a, "text/xml") : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a));
		return c
	}
});
I.qO = I.RD.extend({
	parse: function(a) {
		a = this.aH(a).documentElement;
		if ("plist" !== a.tagName) return I.warn("Not a plist file!"), {};
		for (var c = s, d = 0, e = a.childNodes.length; d < e && !(c = a.childNodes[d], 1 === c.nodeType); d++);
		return this.Tz(c)
	},
	Tz: function(a) {
		var c = s,
			d = a.tagName;
		if ("dict" === d) c = this.hS(a);
		else if ("array" === d) c = this.gS(a);
		else if ("string" === d)
			if (1 === a.childNodes.length) c = a.firstChild.nodeValue;
			else {
				c = "";
				for (d = 0; d < a.childNodes.length; d++) c += a.childNodes[d].nodeValue
			} else "false" === d ? c = u : "true" === d ?
			c = p : "real" === d ? c = parseFloat(a.firstChild.nodeValue) : "integer" === d && (c = parseInt(a.firstChild.nodeValue, 10));
		return c
	},
	gS: function(a) {
		for (var c = [], d = 0, e = a.childNodes.length; d < e; d++) {
			var f = a.childNodes[d];
			1 === f.nodeType && c.push(this.Tz(f))
		}
		return c
	},
	hS: function(a) {
		for (var c = {}, d = s, e = 0, f = a.childNodes.length; e < f; e++) {
			var g = a.childNodes[e];
			1 === g.nodeType && ("key" === g.tagName ? d = g.firstChild.nodeValue : c[d] = this.Tz(g))
		}
		return c
	}
});
I.fba = new I.RD;
I.LX = new I.qO;
I.eT = {
	load: function(a, c, d, e) {
		I.T.cw(a, e)
	}
};
I.T.Rh(["txt", "xml", "vsh", "fsh", "atlas"], I.eT);
I.XR = {
	load: function(a, c, d, e) {
		I.T.jK(a, e)
	}
};
I.T.Rh(["json", "ExportJson"], I.XR);
I.WR = {
	load: function(a, c, d, e) {
		I.T.hK(a, e)
	}
};
I.T.Rh(["js"], I.WR);
I.KR = {
	load: function(a, c, d, e) {
		I.T.Nc[c] = I.T.Vl(a, function(a, d) {
			if (a) return e(a);
			I.wb.Jb(c);
			e(s, d)
		})
	}
};
I.T.Rh("png jpg bmp jpeg gif ico tiff webp".split(" "), I.KR);
I.yS = {
	load: function(a, c, d, e) {
		I.T.Nc[c] = I.T.Vl(d.src, function(a, d) {
			if (a) return e(a);
			I.wb.Jb(c);
			e(s, d)
		})
	}
};
I.T.Rh(["serverImg"], I.yS);
I.oS = {
	load: function(a, c, d, e) {
		I.T.cw(a, function(a, c) {
			if (a) return e(a);
			e(s, I.LX.parse(c))
		})
	}
};
I.T.Rh(["plist"], I.oS);
I.XQ = {
	qP: {
		".eot": "embedded-opentype",
		".ttf": "truetype",
		".ttc": "truetype",
		".woff": "woff",
		".svg": "svg"
	},
	KG: function(a, c, d) {
		var e = document,
			f = I.path,
			g = this.qP,
			h = document.createElement("style");
		h.type = "text/css";
		e.body.appendChild(h);
		var k = "",
			k = isNaN(a - 0) ? k + ("@font-face { font-family:" + a + "; src:") : k + ("@font-face { font-family:'" + a + "'; src:");
		if (c instanceof Array)
			for (var n = 0, r = c.length; n < r; n++) d = f.Wi(c[n]).toLowerCase(), k += "url('" + c[n] + "') format('" + g[d] + "')", k += n === r - 1 ? ";" : ",";
		else d = d.toLowerCase(),
			k += "url('" + c + "') format('" + g[d] + "');";
		h.textContent += k + "}";
		c = document.createElement("div");
		d = c.style;
		d.fontFamily = a;
		c.innerHTML = ".";
		d.position = "absolute";
		d.left = "-100px";
		d.top = "-100px";
		e.body.appendChild(c)
	},
	load: function(a, c, d, e) {
		c = d.type;
		a = d.name;
		c = d.Xca;
		I.ge(d) ? (c = I.path.Wi(d), a = I.path.WT(d, c), this.KG(a, d, c)) : this.KG(a, c);
		document.pV ? document.pV.load("1em " + a).qda(function() {
			e(s, p)
		}, function(a) {
			e(a)
		}) : e(s, p)
	}
};
I.T.Rh("font eot ttf woff svg ttc".split(" "), I.XQ);
I.B2 = {
	load: function(a, c, d, e) {
		I.T.Ir(a, e)
	}
};
I.OQ = {
	load: function(a, c, d, e) {
		I.T.oX(a, e)
	}
};
I.T.Rh(["csb"], I.OQ);
window.CocosEngine = I.px = "Cocos2d-JS v3.10";
I.tx = 0;
I.LM = I.d(0, 0);
I.sD = 0.5;
I.$_ = 1;
I.WD = 1;
I.aO = 1;
I.YD = 0;
I.ZD = 0;
I.c2 = 0;
I.I1 = 1;
I.H1 = "-hd";
I.iQ = 1;
I.Vx = 0;
I.N1 = 0;
I.sN = 0;
I.rN = 0;
I.vx = 1;
I.g0 = I.px + "-canvas";
I.ys = 1;
I.gg = 1;
I.nb = function(a) {
	var c = this === I ? document : this;
	if (a = a instanceof HTMLElement ? a : c.querySelector(a)) a.find = a.find || I.nb, a.WB = a.WB || function(a) {
			return this.className.match(RegExp("(\\s|^)" + a + "(\\s|$)"))
		}, a.FI = a.FI || function(a) {
			this.WB(a) || (this.className && (this.className += " "), this.className += a);
			return this
		}, a.bY = a.bY || function(a) {
			this.WB(a) && (this.className = this.className.replace(a, ""));
			return this
		}, a.remove = a.remove || function() {
			this.parentNode && this.parentNode.removeChild(this);
			return this
		}, a.QT = a.QT ||
		function(a) {
			a.appendChild(this);
			return this
		}, a.QX = a.QX || function(a) {
			a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
			return this
		}, a.is = a.is || function() {
			this.style[I.nb.c_] = I.nb.translate(this.position) + I.nb.rotate(this.rotation) + I.nb.scale(this.scale) + I.nb.Po(this.Po);
			return this
		}, a.position = a.position || {
			x: 0,
			y: 0
		}, a.rotation = a.rotation || 0, a.scale = a.scale || {
			x: 1,
			y: 1
		}, a.Po = a.Po || {
			x: 0,
			y: 0
		}, a.uda = function(a, c) {
			this.position.x = a;
			this.position.y = c;
			this.is();
			return this
		}, a.rotate = function(a) {
			this.rotation =
				a;
			this.is();
			return this
		}, a.Raa = function(a, c) {
			this.scale.x = a;
			this.scale.y = c;
			this.is();
			return this
		}, a.rca = function(a, c) {
			this.Po.x = a;
			this.Po.y = c;
			this.is();
			return this
		};
	return a
};
switch (I.A.Sf) {
	case I.A.gp:
		I.nb.Ur = "Moz";
		I.nb.jo = p;
		break;
	case I.A.ss:
	case I.A.ip:
		I.nb.Ur = "webkit";
		I.nb.jo = p;
		break;
	case I.A.lD:
		I.nb.Ur = "O";
		I.nb.jo = u;
		break;
	case I.A.hp:
		I.nb.Ur = "ms";
		I.nb.jo = u;
		break;
	default:
		I.nb.Ur = "webkit", I.nb.jo = p
}
I.nb.c_ = I.nb.Ur + "Transform";
I.nb.translate = I.nb.jo ? function(a) {
	return "translate3d(" + a.x + "px, " + a.y + "px, 0) "
} : function(a) {
	return "translate(" + a.x + "px, " + a.y + "px) "
};
I.nb.rotate = I.nb.jo ? function(a) {
	return "rotateZ(" + a + "deg) "
} : function(a) {
	return "rotate(" + a + "deg) "
};
I.nb.scale = function(a) {
	return "scale(" + a.x + ", " + a.y + ") "
};
I.nb.Po = function(a) {
	return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
};
I.q_ = function(a) {
	return I.nb(document.createElement(a))
};
I.nb.f6 = function(a) {
	var c = 0,
		d = 0;
	do c += a.offsetLeft, d += a.offsetTop; while (a = a.offsetParent);
	return {
		x: c,
		y: d
	}
};
I.N0 = -1;
I.PI = Math.PI;
I.bN = parseFloat("3.402823466e+38F");
I.A0 = parseFloat("1.175494351e-38F");
I.sO = I.PI / 180;
I.rD = 180 / I.PI;
I.$P = 4294967295;
I.Ro = function(a, c, d) {
	if (I.Ar(d) && !I.cj(d.x) && !I.cj(d.y)) {
		var e = d[a];
		d[a] = d[c];
		d[c] = e
	} else I.log(I.k.Ro)
};
I.gC = function(a, c, d) {
	return a + (c - a) * d
};
I.maa = function() {
	return 16777215 * Math.random()
};
I.oaa = function() {
	return 2 * (Math.random() - 0.5)
};
I.naa = Math.random;
I.af = function(a) {
	return a * I.sO
};
I.Bo = function(a) {
	return a * I.rD
};
I.FK = function(a) {
	I.log(I.k.FK);
	return a * I.rD
};
I.Ie = Number.MAX_VALUE - 1;
I.b$ = function(a) {
	a.Wa && (a.Wa.kc(), a.Wa.Wh())
};
I.G5 = y();
I.K4 = y();
I.Hh = function() {
	I.ef += 1
};
I.Ts = 1.192092896E-7;
I.eb = I.vx ? function() {
	return I.O.Uk
} : E(1);
I.OX = function(a) {
	var c = I.eb();
	return I.d(a.x * c, a.y * c)
};
I.NX = function(a) {
	var c = I.eb();
	return I.d(a.x / c, a.y / c)
};
I.Vz = function(a, c) {
	var d = I.eb();
	c.x = a.x / d;
	c.y = a.y / d
};
I.AZ = function(a) {
	var c = I.eb();
	return I.size(a.width * c, a.height * c)
};
I.zZ = function(a) {
	var c = I.eb();
	return I.size(a.width / c, a.height / c)
};
I.VH = function(a, c) {
	var d = I.eb();
	c.width = a.width / d;
	c.height = a.height / d
};
I.ow = I.vx ? function(a) {
	var c = I.eb();
	return I.rect(a.x / c, a.y / c, a.width / c, a.height / c)
} : ca();
I.Zr = I.vx ? function(a) {
	var c = I.eb();
	return I.rect(a.x * c, a.y * c, a.width * c, a.height * c)
} : ca();
I.ONE = 1;
I.ZERO = 0;
I.SRC_ALPHA = 770;
I.SRC_ALPHA_SATURATE = 776;
I.SRC_COLOR = 768;
I.DST_ALPHA = 772;
I.DST_COLOR = 774;
I.ONE_MINUS_SRC_ALPHA = 771;
I.ONE_MINUS_SRC_COLOR = 769;
I.ONE_MINUS_DST_ALPHA = 773;
I.ONE_MINUS_DST_COLOR = 775;
I.ONE_MINUS_CONSTANT_ALPHA = 32772;
I.ONE_MINUS_CONSTANT_COLOR = 32770;
I.LINEAR = 9729;
I.REPEAT = 10497;
I.CLAMP_TO_EDGE = 33071;
I.MIRRORED_REPEAT = 33648;
I.bi = I.SRC_ALPHA;
I.t.addEventListener(I.t.Wg, function() {
	I.ja === I.t.zb && I.aO && (I.bi = I.ONE)
});
I.Ug = I.ONE_MINUS_SRC_ALPHA;
I.Sn = function() {
	if (I.Fo === I.t.zb) {
		var a = I.s.getError();
		a && I.log(I.k.Sn, a)
	}
};
I.m0 = 0;
I.k0 = 1;
I.n0 = 2;
I.l0 = 3;
I.j0 = 2;
I.n2 = 0;
I.xd = 1;
I.Pp = 2;
I.At = 4;
I.zt = I.xd | I.Pp | I.At;
I.G0 = 0;
I.tb = 0;
I.Je = 1;
I.Ke = 2;
I.o2 = 3;
I.Np = 0;
I.Mp = 1;
I.zm = 2;
I.yt = 3;
I.xt = 4;
I.wt = 5;
I.Op = 6;
I.hy = 7;
I.l2 = 8;
I.wm = "ShaderPositionTextureColor";
I.UD = "ShaderPositionTextureColorAlphaTest";
I.it = "ShaderPositionColor";
I.jt = "ShaderPositionTexture";
I.Tx = "ShaderPositionTexture_uColor";
I.Sx = "ShaderPositionTextureA8Color";
I.Ux = "ShaderPosition_uColor";
I.TD = "ShaderPositionLengthTextureColor";
I.dQ = "CC_PMatrix";
I.bQ = "CC_MVMatrix";
I.cQ = "CC_MVPMatrix";
I.hQ = "CC_Time";
I.gQ = "CC_SinTime";
I.aQ = "CC_CosTime";
I.eQ = "CC_Random01";
I.fQ = "CC_Texture0";
I.k2 = "CC_alpha_value";
I.ep = "a_color";
I.Dk = "a_position";
I.mm = "a_texCoord";
I.Q0 = 32;
I.a0 = 3233828865;
I.t2 = 3233828866;
I.l1 = 8801;
I.L1 = 8802;
I.p0 = 8803;
I.dr = function(a, c) {
	if (a && 0 < a.length)
		for (var d = 0; d < a.length; d++)
			if (!(a[d] instanceof c)) return I.log("element type is wrong!"), u;
	return p
};
I.Ed = function(a, c) {
	for (var d = 0, e = a.length; d < e; d++)
		if (a[d] === c) {
			a.splice(d, 1);
			break
		}
};
I.Z3 = function(a, c) {
	for (var d = 0, e = c.length; d < e; d++) I.Ed(a, c[d])
};
I.Y3 = function(a, c, d) {
	a.splice.apply(a, [d, 0].concat(c));
	return a
};
I.dJ = function(a) {
	var c, d = a.length,
		e = Array(d);
	for (c = 0; c < d; c += 1) e[c] = a[c];
	return e
};
I = I || {};
I.oa = I.oa || {};
I.t.addEventListener(I.t.Wg, function() {
	if (I.ja === I.t.zb) {
		I.color = function(a, d, e, f, g, h) {
			return a === m ? new I.vd(0, 0, 0, 255, g, h) : I.ge(a) ? (a = I.SJ(a), new I.vd(a.r, a.g, a.b, a.a)) : I.Ar(a) ? new I.vd(a.r, a.g, a.b, a.a, a.arrayBuffer, a.offset) : new I.vd(a, d, e, f, g, h)
		};
		I.vd = function(a, d, e, f, g, h) {
			this.xc = g || new ArrayBuffer(I.vd.BYTES_PER_ELEMENT);
			this.Cb = h || 0;
			g = this.xc;
			h = this.Cb;
			var k = Uint8Array.BYTES_PER_ELEMENT;
			this.cA = new Uint8Array(g, h, 1);
			this.cz = new Uint8Array(g, h + k, 1);
			this.wy = new Uint8Array(g, h + 2 * k, 1);
			this.oy = new Uint8Array(g,
				h + 3 * k, 1);
			this.cA[0] = a || 0;
			this.cz[0] = d || 0;
			this.wy[0] = e || 0;
			this.oy[0] = f == s ? 255 : f;
			f === m && (this.D3 = p)
		};
		I.vd.BYTES_PER_ELEMENT = 4;
		var a = I.vd.prototype;
		a.wR = function() {
			return this.cA[0]
		};
		a.GS = function(a) {
			this.cA[0] = 0 > a ? 0 : a
		};
		a.oR = function() {
			return this.cz[0]
		};
		a.DS = function(a) {
			this.cz[0] = 0 > a ? 0 : a
		};
		a.gz = function() {
			return this.wy[0]
		};
		a.oA = function(a) {
			this.wy[0] = 0 > a ? 0 : a
		};
		a.dz = function() {
			return this.oy[0]
		};
		a.lA = function(a) {
			this.oy[0] = 0 > a ? 0 : a
		};
		I.p(a, "r", a.wR, a.GS);
		I.p(a, "g", a.oR, a.DS);
		I.p(a, "b", a.gz, a.oA);
		I.p(a,
			"a", a.dz, a.lA);
		I.assert(I.ff(I.oa.um), I.k.Yg, "CCTypesPropertyDefine.js");
		I.oa.um();
		delete I.oa.um;
		P = function(a, d, e, f) {
			this.xc = e || new ArrayBuffer(P.BYTES_PER_ELEMENT);
			this.Cb = f || 0;
			this.Bl = new Float32Array(this.xc, this.Cb, 1);
			this.Cl = new Float32Array(this.xc, this.Cb + 4, 1);
			this.Bl[0] = a || 0;
			this.Cl[0] = d || 0
		};
		P.BYTES_PER_ELEMENT = 8;
		a = P.prototype;
		a.tz = function() {
			return this.Bl[0]
		};
		a.BA = function(a) {
			this.Bl[0] = a
		};
		a.uz = function() {
			return this.Cl[0]
		};
		a.CA = function(a) {
			this.Cl[0] = a
		};
		I.p(a, "x", a.tz, a.BA);
		I.p(a, "y",
			a.uz, a.CA);
		Ba = function(a, d, e, f, g) {
			this.xc = f || new ArrayBuffer(Ba.BYTES_PER_ELEMENT);
			this.Cb = g || 0;
			f = this.xc;
			g = this.Cb;
			this.Bl = new Float32Array(f, g, 1);
			this.Bl[0] = a || 0;
			this.Cl = new Float32Array(f, g + Float32Array.BYTES_PER_ELEMENT, 1);
			this.Cl[0] = d || 0;
			this.cB = new Float32Array(f, g + 2 * Float32Array.BYTES_PER_ELEMENT, 1);
			this.cB[0] = e || 0
		};
		Ba.BYTES_PER_ELEMENT = 12;
		a = Ba.prototype;
		a.tz = function() {
			return this.Bl[0]
		};
		a.BA = function(a) {
			this.Bl[0] = a
		};
		a.uz = function() {
			return this.Cl[0]
		};
		a.CA = function(a) {
			this.Cl[0] = a
		};
		a.JR =
			function() {
				return this.cB[0]
			};
		a.PS = function(a) {
			this.cB[0] = a
		};
		I.p(a, "x", a.tz, a.BA);
		I.p(a, "y", a.uz, a.CA);
		I.p(a, "z", a.JR, a.PS);
		Ca = function(a, d, e, f) {
			this.xc = e || new ArrayBuffer(Ca.BYTES_PER_ELEMENT);
			this.Cb = f || 0;
			this.QA = new Float32Array(this.xc, this.Cb, 1);
			this.UA = new Float32Array(this.xc, this.Cb + 4, 1);
			this.QA[0] = a || 0;
			this.UA[0] = d || 0
		};
		Ca.BYTES_PER_ELEMENT = 8;
		a = Ca.prototype;
		a.DR = function() {
			return this.QA[0]
		};
		a.NS = function(a) {
			this.QA[0] = a
		};
		a.GR = function() {
			return this.UA[0]
		};
		a.OS = function(a) {
			this.UA[0] = a
		};
		I.p(a,
			"u", a.DR, a.NS);
		I.p(a, "v", a.GR, a.OS);
		I.Nx = function(a, d, e, f, g, h) {
			this.xc = g || new ArrayBuffer(I.Nx.BYTES_PER_ELEMENT);
			this.Cb = h || 0;
			g = this.xc;
			h = P.BYTES_PER_ELEMENT;
			this.Dn = a ? new P(a.x, a.y, g, 0) : new P(0, 0, g, 0);
			this.Gn = d ? new P(d.x, d.y, g, h) : new P(0, 0, g, h);
			this.Hm = e ? new P(e.x, e.y, g, 2 * h) : new P(0, 0, g, 2 * h);
			this.Lm = f ? new P(f.x, f.y, g, 3 * h) : new P(0, 0, g, 3 * h)
		};
		I.Nx.BYTES_PER_ELEMENT = 32;
		a = I.Nx.prototype;
		a.pz = D("Dn");
		a.xA = function(a) {
			this.Dn.x = a.x;
			this.Dn.y = a.y
		};
		a.qz = D("Gn");
		a.yA = function(a) {
			this.Gn.x = a.x;
			this.Gn.y = a.y
		};
		a.hz = D("Hm");
		a.pA = function(a) {
			this.Hm.x = a.x;
			this.Hm.y = a.y
		};
		a.iz = D("Lm");
		a.qA = function(a) {
			this.Lm.x = a.x;
			this.Lm.y = a.y
		};
		I.p(a, "tl", a.pz, a.xA);
		I.p(a, "tr", a.qz, a.yA);
		I.p(a, "bl", a.hz, a.pA);
		I.p(a, "br", a.iz, a.qA);
		I.F1 = function(a, d, e, f) {
			this.bl = a || new Ba(0, 0, 0);
			this.br = d || new Ba(0, 0, 0);
			this.tl = e || new Ba(0, 0, 0);
			this.tr = f || new Ba(0, 0, 0)
		};
		I.wf = function(a, d, e, f, g) {
			this.xc = f || new ArrayBuffer(I.wf.BYTES_PER_ELEMENT);
			this.Cb = g || 0;
			f = this.xc;
			g = this.Cb;
			var h = Ba.BYTES_PER_ELEMENT;
			this.Mn = a ? new Ba(a.x, a.y, a.z, f, g) : new Ba(0,
				0, 0, f, g);
			this.bq = d ? I.color(d.r, d.g, d.b, d.a, f, g + h) : I.color(0, 0, 0, 0, f, g + h);
			this.vl = e ? new Ca(e.u, e.v, f, g + h + I.vd.BYTES_PER_ELEMENT) : new Ca(0, 0, f, g + h + I.vd.BYTES_PER_ELEMENT)
		};
		I.wf.BYTES_PER_ELEMENT = 24;
		a = I.wf.prototype;
		a.sz = D("Mn");
		a.AA = function(a) {
			var d = this.Mn;
			d.x = a.x;
			d.y = a.y;
			d.z = a.z
		};
		a.lz = D("bq");
		a.rA = function(a) {
			var d = this.bq;
			d.r = a.r;
			d.g = a.g;
			d.b = a.b;
			d.a = a.a
		};
		a.rz = D("vl");
		a.zA = function(a) {
			this.vl.u = a.u;
			this.vl.v = a.v
		};
		I.p(a, "vertices", a.sz, a.AA);
		I.p(a, "colors", a.lz, a.rA);
		I.p(a, "texCoords", a.rz, a.zA);
		I.Lb = function(a, d, e, f, g, h) {
			this.xc = g || new ArrayBuffer(I.Lb.BYTES_PER_ELEMENT);
			this.Cb = h || 0;
			g = this.xc;
			h = this.Cb;
			var k = I.wf.BYTES_PER_ELEMENT;
			this.Dn = a ? new I.wf(a.vertices, a.colors, a.texCoords, g, h) : new I.wf(s, s, s, g, h);
			this.Hm = d ? new I.wf(d.vertices, d.colors, d.texCoords, g, h + k) : new I.wf(s, s, s, g, h + k);
			this.Gn = e ? new I.wf(e.vertices, e.colors, e.texCoords, g, h + 2 * k) : new I.wf(s, s, s, g, h + 2 * k);
			this.Lm = f ? new I.wf(f.vertices, f.colors, f.texCoords, g, h + 3 * k) : new I.wf(s, s, s, g, h + 3 * k)
		};
		I.Lb.BYTES_PER_ELEMENT = 96;
		a = I.Lb.prototype;
		a.pz = D("Dn");
		a.xA = function(a) {
			var d = this.Dn;
			d.vertices = a.vertices;
			d.colors = a.colors;
			d.texCoords = a.texCoords
		};
		a.hz = D("Hm");
		a.pA = function(a) {
			var d = this.Hm;
			d.vertices = a.vertices;
			d.colors = a.colors;
			d.texCoords = a.texCoords
		};
		a.qz = D("Gn");
		a.yA = function(a) {
			var d = this.Gn;
			d.vertices = a.vertices;
			d.colors = a.colors;
			d.texCoords = a.texCoords
		};
		a.iz = D("Lm");
		a.qA = function(a) {
			var d = this.Lm;
			d.vertices = a.vertices;
			d.colors = a.colors;
			d.texCoords = a.texCoords
		};
		a.eR = D("xc");
		I.p(a, "tl", a.pz, a.xA);
		I.p(a, "tr", a.qz, a.yA);
		I.p(a, "bl",
			a.hz, a.pA);
		I.p(a, "br", a.iz, a.qA);
		I.p(a, "arrayBuffer", a.eR, s);
		I.lQ = function() {
			return new I.Lb
		};
		I.HE = function(a) {
			if (!a) return I.lQ();
			var d = a.tl,
				e = a.bl,
				f = a.tr;
			a = a.br;
			return {
				tl: {
					vertices: {
						x: d.vertices.x,
						y: d.vertices.y,
						z: d.vertices.z
					},
					colors: {
						r: d.colors.r,
						g: d.colors.g,
						b: d.colors.b,
						a: d.colors.a
					},
					texCoords: {
						u: d.texCoords.u,
						v: d.texCoords.v
					}
				},
				bl: {
					vertices: {
						x: e.vertices.x,
						y: e.vertices.y,
						z: e.vertices.z
					},
					colors: {
						r: e.colors.r,
						g: e.colors.g,
						b: e.colors.b,
						a: e.colors.a
					},
					texCoords: {
						u: e.texCoords.u,
						v: e.texCoords.v
					}
				},
				tr: {
					vertices: {
						x: f.vertices.x,
						y: f.vertices.y,
						z: f.vertices.z
					},
					colors: {
						r: f.colors.r,
						g: f.colors.g,
						b: f.colors.b,
						a: f.colors.a
					},
					texCoords: {
						u: f.texCoords.u,
						v: f.texCoords.v
					}
				},
				br: {
					vertices: {
						x: a.vertices.x,
						y: a.vertices.y,
						z: a.vertices.z
					},
					colors: {
						r: a.colors.r,
						g: a.colors.g,
						b: a.colors.b,
						a: a.colors.a
					},
					texCoords: {
						u: a.texCoords.u,
						v: a.texCoords.v
					}
				}
			}
		};
		I.m2 = function(a) {
			if (!a) return [];
			for (var d = [], e = 0; e < a.length; e++) d.push(I.HE(a[e]));
			return d
		};
		I.Uc = function(a, d, e, f, g) {
			this.xc = f || new ArrayBuffer(I.Uc.BYTES_PER_ELEMENT);
			this.Cb = g || 0;
			f = this.xc;
			g = this.Cb;
			var h = P.BYTES_PER_ELEMENT;
			this.Mn = a ? new P(a.x, a.y, f, g) : new P(0, 0, f, g);
			this.bq = d ? I.color(d.r, d.g, d.b, d.a, f, g + h) : I.color(0, 0, 0, 0, f, g + h);
			this.vl = e ? new Ca(e.u, e.v, f, g + h + I.vd.BYTES_PER_ELEMENT) : new Ca(0, 0, f, g + h + I.vd.BYTES_PER_ELEMENT)
		};
		I.Uc.BYTES_PER_ELEMENT = 20;
		a = I.Uc.prototype;
		a.sz = D("Mn");
		a.AA = function(a) {
			this.Mn.x = a.x;
			this.Mn.y = a.y
		};
		a.lz = D("bq");
		a.rA = function(a) {
			var d = this.bq;
			d.r = a.r;
			d.g = a.g;
			d.b = a.b;
			d.a = a.a
		};
		a.rz = D("vl");
		a.zA = function(a) {
			this.vl.u = a.u;
			this.vl.v = a.v
		};
		I.p(a, "vertices", a.sz, a.AA);
		I.p(a, "colors", a.lz, a.rA);
		I.p(a, "texCoords", a.rz, a.zA);
		I.Gb = function(a, d, e, f, g) {
			this.xc = f || new ArrayBuffer(I.Gb.BYTES_PER_ELEMENT);
			this.Cb = g || 0;
			f = this.xc;
			g = this.Cb;
			var h = I.Uc.BYTES_PER_ELEMENT;
			this.NE = a ? new I.Uc(a.vertices, a.colors, a.texCoords, f, g) : new I.Uc(s, s, s, f, g);
			this.UE = d ? new I.Uc(d.vertices, d.colors, d.texCoords, f, g + h) : new I.Uc(s, s, s, f, g + h);
			this.ZE = e ? new I.Uc(e.vertices, e.colors, e.texCoords, f, g + 2 * h) : new I.Uc(s, s, s, f, g + 2 * h)
		};
		I.Gb.BYTES_PER_ELEMENT = 60;
		a = I.Gb.prototype;
		a.dz = D("NE");
		a.lA = function(a) {
			var d = this.NE;
			d.vertices = a.vertices;
			d.colors = a.colors;
			d.texCoords = a.texCoords
		};
		a.gz = D("UE");
		a.oA = function(a) {
			var d = this.UE;
			d.vertices = a.vertices;
			d.colors = a.colors;
			d.texCoords = a.texCoords
		};
		a.iR = D("ZE");
		a.BS = function(a) {
			var d = this.ZE;
			d.vertices = a.vertices;
			d.colors = a.colors;
			d.texCoords = a.texCoords
		};
		I.p(a, "a", a.dz, a.lA);
		I.p(a, "b", a.gz, a.oA);
		I.p(a, "c", a.iR, a.BS)
	}
});
I.oa.um = function() {
	var a = I.color;
	a.HR = function() {
		return a(255, 255, 255)
	};
	a.IR = function() {
		return a(255, 255, 0)
	};
	a.gR = function() {
		return a(0, 0, 255)
	};
	a.qR = function() {
		return a(0, 255, 0)
	};
	a.xR = function() {
		return a(255, 0, 0)
	};
	a.sR = function() {
		return a(255, 0, 255)
	};
	a.fR = function() {
		return a(0, 0, 0)
	};
	a.vR = function() {
		return a(255, 127, 0)
	};
	a.pR = function() {
		return a(166, 166, 166)
	};
	I.p(a, "WHITE", a.HR);
	I.p(a, "YELLOW", a.IR);
	I.p(a, "BLUE", a.gR);
	I.p(a, "GREEN", a.qR);
	I.p(a, "RED", a.xR);
	I.p(a, "MAGENTA", a.sR);
	I.p(a, "BLACK", a.fR);
	I.p(a,
		"ORANGE", a.vR);
	I.p(a, "GRAY", a.pR);
	I.Zb.RQ = function() {
		return new I.Zb(I.ONE, I.ZERO)
	};
	I.Zb.EQ = function() {
		return new I.Zb(I.ONE, I.ONE_MINUS_SRC_ALPHA)
	};
	I.Zb.DQ = function() {
		return new I.Zb(I.SRC_ALPHA, I.ONE_MINUS_SRC_ALPHA)
	};
	I.Zb.CQ = function() {
		return new I.Zb(I.SRC_ALPHA, I.ONE)
	};
	I.p(I.Zb, "DISABLE", I.Zb.RQ);
	I.p(I.Zb, "ALPHA_PREMULTIPLIED", I.Zb.EQ);
	I.p(I.Zb, "ALPHA_NON_PREMULTIPLIED", I.Zb.DQ);
	I.p(I.Zb, "ADDITIVE", I.Zb.CQ)
};
I.vd = function(a, c, d, e) {
	this.r = a || 0;
	this.g = c || 0;
	this.b = d || 0;
	this.a = e === s ? 255 : e
};
I.color = function(a, c, d, e) {
	return a === m ? {
		r: 0,
		g: 0,
		b: 0,
		a: 0
	} : I.ge(a) ? I.SJ(a) : I.Ar(a) ? {
		r: a.r,
		g: a.g,
		b: a.b,
		a: a.a === s ? 255 : a.a
	} : {
		r: a,
		g: c,
		b: d,
		a: e === s ? 255 : e
	}
};
I.t4 = function(a, c) {
	return a.r === c.r && a.g === c.g && a.b === c.b
};

function Da() {
	this.timestamp = this.z = this.y = this.x = 0
}

function P(a, c) {
	this.x = a || 0;
	this.y = c || 0
}
I.Yw = function(a, c) {
	return new P(a, c)
};

function Ba(a, c, d) {
	this.x = a || 0;
	this.y = c || 0;
	this.z = d || 0
}
I.Mda = function(a, c, d) {
	return new Ba(a, c, d)
};

function Ca(a, c) {
	this.u = a || 0;
	this.v = c || 0
}
I.oda = function(a, c) {
	return new Ca(a, c)
};
I.Zb = function(a, c) {
	this.src = a;
	this.Ra = c
};
I.f4 = function() {
	return new I.Zb(I.ONE, I.ZERO)
};
I.SJ = function(a) {
	a = a.replace(/^#?/, "0x");
	a = parseInt(a);
	return I.color(a >> 16, (a >> 8) % 256, a % 256)
};
I.u4 = function(a) {
	var c = a.r.toString(16),
		d = a.g.toString(16),
		e = a.b.toString(16);
	return "#" + (16 > a.r ? "0" + c : c) + (16 > a.g ? "0" + d : d) + (16 > a.b ? "0" + e : e)
};
I.pt = 0;
I.Lp = 1;
I.aE = 2;
I.Qp = 0;
I.mQ = 1;
I.IE = 2;
I.v2 = I.Ta.extend({
	hn: s,
	Yq: s,
	ny: 0,
	ctor: function() {
		this.hn = {};
		this.Yq = {};
		this.ny = 2 << (0 | 10 * Math.random())
	},
	xQ: function() {
		this.ny++;
		return "key_" + this.ny
	},
	cca: function(a, c) {
		if (c != s) {
			var d = this.xQ();
			this.hn[d] = c;
			this.Yq[d] = a
		}
	},
	EX: function(a) {
		if (a == s) return s;
		var c = this.hn,
			d;
		for (d in c)
			if (c[d] === a) return this.Yq[d];
		return s
	},
	Kda: function(a) {
		return this.EX(a)
	},
	fY: function(a) {
		if (a != s) {
			var c = this.hn,
				d;
			for (d in c)
				if (c[d] === a) {
					delete this.Yq[d];
					delete c[d];
					break
				}
		}
	},
	Jaa: function(a) {
		if (a != s)
			for (var c = 0; c < a.length; c++) this.fY(a[c])
	},
	ET: function() {
		var a = [],
			c = this.hn,
			d;
		for (d in c) a.push(c[d]);
		return a
	},
	Daa: function() {
		this.hn = {};
		this.Yq = {}
	},
	count: function() {
		return this.ET().length
	}
});

function Fa(a) {
	this.fontName = "Arial";
	this.fontSize = 12;
	this.textAlign = I.Lp;
	this.verticalAlign = I.Qp;
	this.fillStyle = I.color(255, 255, 255, 255);
	this.boundingHeight = this.boundingWidth = 0;
	this.UC = u;
	this.strokeStyle = I.color(255, 255, 255, 255);
	this.lineWidth = 1;
	this.fontWeight = this.fontStyle = this.lineHeight = "normal";
	this.AL = u;
	this.shadowBlur = this.shadowOffsetY = this.shadowOffsetX = 0;
	this.shadowOpacity = 1;
	if (a && a instanceof Object)
		for (var c in a) this[c] = a[c]
}

function Ha(a) {
	return a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px/" + (!a.lineHeight.charAt ? a.lineHeight + "px" : a.lineHeight) + " '" + a.fontName + "'"
}
I.t.addEventListener(I.t.Wg, function() {
	I.ja === I.t.Tb && (I.assert(I.ff(I.oa.um), I.k.Yg, "CCTypesPropertyDefine.js"), I.oa.um(), delete I.oa.um)
});
I.h2 = [];
I.i2 = {};
I.IM = "device-dpi";
I.JM = "high-dpi";
I.i0 = "medium-dpi";
I.h0 = "low-dpi";
I.oe = {
	pa: function() {
		this.TJ = document.getElementsByTagName("html")[0]
	},
	availWidth: function(a) {
		return !a || a === this.TJ ? window.innerWidth : a.clientWidth
	},
	availHeight: function(a) {
		return !a || a === this.TJ ? window.innerHeight : a.clientHeight
	},
	ew: {
		width: "device-width"
	},
	dB: I.A.Sf
}; - 1 < window.navigator.userAgent.indexOf("OS 8_1_") && (I.oe.dB = I.A.ts);
I.A.Ph === I.A.tm && (I.oe.dB = I.A.ip);
switch (I.oe.dB) {
	case I.A.ip:
		I.oe.ew["minimal-ui"] = "true";
		I.oe.availWidth = function(a) {
			return a.clientWidth
		};
		I.oe.availHeight = function(a) {
			return a.clientHeight
		};
		break;
	case I.A.ss:
		I.oe.__defineGetter__("target-densitydpi", function() {
			return I.view.cv
		});
	case I.A.mD:
	case I.A.cx:
		I.oe.availWidth = function(a) {
			return a.clientWidth
		};
		I.oe.availHeight = function(a) {
			return a.clientHeight
		};
		break;
	case I.A.ts:
		I.oe.pa = function(a) {
			if (!a.Up) {
				var c = function() {
					a.em(a.pg.width, a.pg.height, a.zg);
					window.removeEventListener("resize",
						c, u)
				};
				window.addEventListener("resize", c, u)
			}
		}
}
I.nx = I.Ta.extend({
	H2: s,
	te: s,
	pg: s,
	hl: s,
	Zd: s,
	Of: s,
	iA: u,
	vy: p,
	Xk: 1,
	ZA: "",
	gA: s,
	sa: 1,
	XG: 1,
	Va: 1,
	YG: 1,
	cn: 0,
	Kz: 5,
	zg: s,
	xH: s,
	BH: s,
	AH: s,
	yH: s,
	zH: s,
	pq: u,
	C2: u,
	C3: s,
	rG: s,
	sG: s,
	w3: u,
	Ky: s,
	Tj: s,
	bz: 1,
	Up: u,
	zG: p,
	cv: s,
	ctor: function() {
		var a = document,
			c = I.tj,
			d = I.sf;
		I.oe.pa(this);
		this.Tj = I.Eg.parentNode === a.body ? a.documentElement : I.Eg.parentNode;
		this.te = I.size(0, 0);
		this.xz();
		var a = I.Ka.width,
			e = I.Ka.height;
		this.pg = I.size(a, e);
		this.hl = I.size(a, e);
		this.Zd = I.rect(0, 0, a, e);
		this.Of = I.rect(0, 0, a, e);
		this.Ky = {
			left: 0,
			top: 0
		};
		this.ZA = "Cocos2dHTML5";
		a = I.A;
		this.nJ(a.Ph === a.tm || a.Ph === a.JD);
		I.Q && I.Q.pa(this.Of);
		this.xH = new I.Od(c.zs, d.rx);
		this.BH = new I.Od(c.mO, d.kt);
		this.AH = new I.Od(c.zs, d.zx);
		this.yH = new I.Od(c.zs, d.sx);
		this.zH = new I.Od(c.zs, d.Ss);
		this.rG = I.Ka;
		this.sG = I.s;
		this.cv = I.JM
	},
	Iq: function() {
		var a;
		a = this.em ? this : I.view;
		var c = a.te.width,
			d = a.te.height;
		a.xz();
		a.te.width === c && a.te.height === d || (a.gA && a.gA.call(), c = a.hl.width, d = a.hl.height, 0 < c && a.em(c, d, a.zg))
	},
	vca: function(a) {
		this.cv = a;
		this.TE()
	},
	R7: D("cv"),
	mY: function(a) {
		a ? this.Up || (this.Up =
			p, window.addEventListener("resize", this.Iq), window.addEventListener("orientationchange", this.Iq)) : this.Up && (this.Up = u, window.removeEventListener("resize", this.Iq), window.removeEventListener("orientationchange", this.Iq))
	},
	oca: function(a) {
		if (I.ff(a) || a == s) this.gA = a
	},
	xz: function() {
		var a = this.te;
		a.width = I.oe.availWidth(this.Tj);
		a.height = I.oe.availHeight(this.Tj)
	},
	y2: function() {
		var a = this.hl.width,
			c = this.hl.height;
		0 < a && this.em(a, c, this.zg)
	},
	PH: function(a, c) {
		var d = document.getElementById("cocosMetaElement");
		d && c && document.head.removeChild(d);
		var e = document.getElementsByName("viewport"),
			e = e ? e[0] : s,
			f, g, h;
		f = e ? e.content : "";
		d = d || document.createElement("meta");
		d.id = "cocosMetaElement";
		d.name = "viewport";
		d.content = "";
		for (g in a) - 1 == f.indexOf(g) ? f += "," + g + "\x3d" + a[g] : c && (h = RegExp(g + "s*\x3ds*[^,]+"), f.replace(h, g + "\x3d" + a[g]));
		/^,/.test(f) && (f = f.substr(1));
		d.content = f;
		e && (e.content = f);
		document.head.appendChild(d)
	},
	TE: function() {
		this.zG && this.PH(I.oe.ew, u)
	},
	r3: function() {
		var a = I.eb();
		this.Va = this.sa = a
	},
	k3: function() {
		this.sa =
			this.XG;
		this.Va = this.YG
	},
	z2: y(),
	xr: function() {
		this.pq = p
	},
	zT: A("zG"),
	nJ: function(a) {
		this.iA = a ? p : u
	},
	S8: D("iA"),
	E5: function(a) {
		this.vy = a ? p : u
	},
	H8: D("vy"),
	end: y(),
	Q8: function() {
		return this.rG !== s && this.sG !== s
	},
	Pba: function(a) {
		this.bz = a;
		I.O.Lo(I.O.rr())
	},
	kda: y(),
	Uba: y(),
	zba: function(a, c) {
		this.Ky = {
			left: a,
			top: c
		}
	},
	D6: D("Ky"),
	w6: function() {
		return I.size(I.Ka.width, I.Ka.height)
	},
	Z6: function() {
		return I.size(this.te.width, this.te.height)
	},
	Oba: function(a, c) {
		this.te.width = a;
		this.te.height = c;
		this.Tj.style.width =
			a + "px";
		this.Tj.style.height = c + "px";
		this.Iq();
		I.O.Lo(I.O.rr())
	},
	l4: y(),
	eo: function() {
		return I.size(this.Of.width, this.Of.height)
	},
	j8: function() {
		return I.size(this.Of.width * this.sa, this.Of.height * this.Va)
	},
	Lv: function() {
		return I.d(this.Of.x, this.Of.y)
	},
	i8: function() {
		return I.d(this.Of.x * this.sa, this.Of.y * this.Va)
	},
	j4: E(p),
	D7: D("zg"),
	bZ: function(a) {
		if (a instanceof I.Od) this.zg = a;
		else {
			var c = I.Od;
			a === c.rx && (this.zg = this.xH);
			a === c.kt && (this.zg = this.BH);
			a === c.zx && (this.zg = this.AH);
			a === c.sx && (this.zg = this.yH);
			a === c.Ss && (this.zg = this.zH)
		}
	},
	em: function(a, c, d) {
		if (0 < a || 0 < c)
			if (this.bZ(d), d = this.zg) {
				d.Zl(this);
				I.A.Kh && this.TE();
				this.xz();
				this.hl.width = this.pg.width = a;
				this.hl.height = this.pg.height = c;
				var e = d.apply(this, this.pg);
				e.scale && 2 === e.scale.length && (this.sa = e.scale[0], this.Va = e.scale[1]);
				e.viewport && (a = this.Zd, c = this.Of, e = e.viewport, a.x = e.x, a.y = e.y, a.width = e.width, a.height = e.height, c.x = -a.x / this.sa, c.y = -a.y / this.Va, c.width = I.Ka.width / this.sa, c.height = I.Ka.height / this.Va, I.s.fs && I.s.fs(a.x, -a.y));
				a = I.O;
				a.kd.width = this.pg.width;
				a.kd.height = this.pg.height;
				d.Yl(this);
				I.xb.width = a.kd.width;
				I.xb.height = a.kd.height;
				I.ja === I.t.zb && a.lL();
				this.XG = this.sa;
				this.YG = this.Va;
				I.MM && I.MM.j3();
				I.Q && I.Q.pa(this.Of)
			} else I.log(I.k.UM);
		else I.log(I.k.TM)
	},
	wJ: function() {
		return I.size(this.pg.width, this.pg.height)
	},
	mca: function(a, c, d) {
		this.PH({
			width: a,
			"target-densitydpi": I.IM
		}, p);
		document.body.style.width = a + "px";
		document.body.style.left = "0px";
		document.body.style.top = "0px";
		this.em(a, c, d)
	},
	xZ: function(a, c, d, e) {
		var f =
			this.bz,
			g = this.sa,
			h = this.Va;
		I.s.viewport(a * g * f + this.Zd.x * f, c * h * f + this.Zd.y * f, d * g * f, e * h * f)
	},
	fZ: function(a, c, d, e) {
		var f = this.bz,
			g = this.sa,
			h = this.Va;
		I.s.scissor(a * g * f + this.Zd.x * f, c * h * f + this.Zd.y * f, d * g * f, e * h * f)
	},
	V8: function() {
		var a = I.s;
		return a.isEnabled(a.SCISSOR_TEST)
	},
	I7: function() {
		var a = I.s,
			c = this.sa,
			d = this.Va,
			a = a.getParameter(a.SCISSOR_BOX);
		return I.rect((a[0] - this.Zd.x) / c, (a[1] - this.Zd.y) / d, a[2] / c, a[3] / d)
	},
	Oca: function(a) {
		a != s && 0 < a.length && (this.ZA = a)
	},
	g8: D("ZA"),
	h8: D("Zd"),
	DJ: D("sa"),
	EJ: D("Va"),
	M6: D("Xk"),
	tB: function(a, c, d) {
		return {
			x: this.Xk * (a - d.left),
			y: this.Xk * (d.top + d.height - c)
		}
	},
	NQ: function(a, c) {
		var d = this.Zd;
		a.x = (this.Xk * (a.x - c.left) - d.x) / this.sa;
		a.y = (this.Xk * (c.top + c.height - a.y) - d.y) / this.Va
	},
	Rt: function(a) {
		for (var c = this.Zd, d = this.sa, e = this.Va, f, g, h, k = 0; k < a.length; k++) f = a[k], g = f.Hc, h = f.yg, f.vA((g.x - c.x) / d, (g.y - c.y) / e), f.ql((h.x - c.x) / d, (h.y - c.y) / e)
	}
});
I.nx.nz = function() {
	this.qu || (this.qu = this.qu || new I.nx, this.qu.xr());
	return this.qu
};
I.tj = I.Ta.extend({
	Zl: y(),
	apply: y(),
	Yl: y(),
	DA: function(a, c, d) {
		var e = a.Tj;
		I.view.vy && (I.A.Kh && e === document.documentElement) && I.screen.UT(e);
		var e = I.Ka,
			f = I.Eg;
		f.style.width = e.style.width = c + "px";
		f.style.height = e.style.height = d + "px";
		f = a.Xk = 1;
		//a.iA && (f = a.Xk = Math.min(2, pixelRatio || 1));
        f = a.Xk = Math.min(2, pixelRatio || 1); //这里
		e.width = c * f;
		e.height = d * f;
		I.s.PK && I.s.PK();
		a = document.body;
		var g;
		if (a && (g = a.style)) g.paddingTop = g.paddingTop || "0px", g.paddingRight = g.paddingRight || "0px", g.paddingBottom = g.paddingBottom || "0px", g.paddingLeft = g.paddingLeft || "0px",
			g.borderTop = g.borderTop || "0px", g.borderRight = g.borderRight || "0px", g.borderBottom = g.borderBottom || "0px", g.borderLeft = g.borderLeft || "0px", g.marginTop = g.marginTop || "0px", g.marginRight = g.marginRight || "0px", g.marginBottom = g.marginBottom || "0px", g.marginLeft = g.marginLeft || "0px"
	},
	fG: function() {
		document.body.insertBefore(I.Eg, document.body.firstChild);
		var a = document.body.style;
		a.width = window.innerWidth + "px";
		a.height = window.innerHeight + "px";
		a.overflow = "hidden";
		a = I.Eg.style;
		a.position = "fixed";
		a.left = a.top = "0px";
		document.body.scrollTop = 0
	}
});
I.sf = I.Ta.extend({
	hA: {
		scale: [1, 1],
		viewport: s
	},
	Zp: function(a, c, d, e, f, g) {
		2 > Math.abs(a - d) && (d = a);
		2 > Math.abs(c - e) && (e = c);
		a = I.rect(Math.round((a - d) / 2), Math.round((c - e) / 2), d, e);
		this.hA.scale = [f, g];
		this.hA.viewport = a;
		return this.hA
	},
	Zl: y(),
	apply: function() {
		return {
			scale: [1, 1]
		}
	},
	Yl: y()
});
(function() {
	var a = I.tj.extend({
			apply: function(a) {
				this.DA(a, a.te.width, a.te.height)
			}
		}),
		c = I.tj.extend({
			apply: function(a, c) {
				var d = a.te.width,
					e = a.te.height,
					f = I.Eg.style,
					t = c.width,
					v = c.height,
					B = d / t,
					w = e / v,
					z, x;
				B < w ? (z = d, x = v * B) : (z = t * w, x = e);
				t = Math.round((d - z) / 2);
				x = Math.round((e - x) / 2);
				this.DA(a, d - 2 * t, e - 2 * x);
				f.marginLeft = t + "px";
				f.marginRight = t + "px";
				f.marginTop = x + "px";
				f.marginBottom = x + "px"
			}
		});
	a.extend({
		Zl: function(a) {
			this._super(a);
			a.Tj = document.documentElement
		},
		apply: function(a) {
			this._super(a);
			this.fG()
		}
	});
	c.extend({
		Zl: function(a) {
			this._super(a);
			a.Tj = document.documentElement
		},
		apply: function(a, c) {
			this._super(a, c);
			this.fG()
		}
	});
	var d = I.tj.extend({
		apply: function(a) {
			this.DA(a, I.Ka.width, I.Ka.height)
		}
	});
	I.tj.zs = new a;
	I.tj.mO = new c;
	I.tj.w1 = new d;
	var a = I.sf.extend({
			apply: function(a, c) {
				var d = I.Ka.width,
					e = I.Ka.height;
				return this.Zp(d, e, d, e, d / c.width, e / c.height)
			}
		}),
		c = I.sf.extend({
			apply: function(a, c) {
				var d = I.Ka.width,
					e = I.Ka.height,
					f = c.width,
					t = c.height,
					v = d / f,
					B = e / t,
					w = 0,
					z, x;
				v < B ? (w = v, z = d, x = t * w) : (w = B, z = f * w, x = e);
				return this.Zp(d, e, z, x, w, w)
			}
		}),
		d = I.sf.extend({
			apply: function(a,
				c) {
				var d = I.Ka.width,
					e = I.Ka.height,
					f = c.width,
					t = c.height,
					v = d / f,
					B = e / t,
					w, z, x;
				v < B ? (w = B, z = f * w, x = e) : (w = v, z = d, x = t * w);
				return this.Zp(d, e, z, x, w, w)
			}
		}),
		e = I.sf.extend({
			apply: function(a, c) {
				var d = I.Ka.width,
					e = I.Ka.height,
					f = e / c.height;
				return this.Zp(d, e, d, e, f, f)
			},
			Yl: function(a) {
				I.O.kd = a.eo()
			}
		}),
		f = I.sf.extend({
			apply: function(a, c) {
				var d = I.Ka.width,
					e = I.Ka.height,
					f = d / c.width;
				return this.Zp(d, e, d, e, f, f)
			},
			Yl: function(a) {
				I.O.kd = a.eo()
			}
		});
	I.sf.rx = new a;
	I.sf.kt = new c;
	I.sf.zx = new d;
	I.sf.sx = new e;
	I.sf.Ss = new f
})();
I.Od = I.Ta.extend({
	Pt: s,
	Qt: s,
	ctor: function(a, c) {
		this.DY(a);
		this.EY(c)
	},
	Zl: function(a) {
		this.Pt.Zl(a);
		this.Qt.Zl(a)
	},
	apply: function(a, c) {
		this.Pt.apply(a, c);
		return this.Qt.apply(a, c)
	},
	Yl: function(a) {
		this.Pt.Yl(a);
		this.Qt.Yl(a)
	},
	DY: function(a) {
		a instanceof I.tj && (this.Pt = a)
	},
	EY: function(a) {
		a instanceof I.sf && (this.Qt = a)
	}
});
I.Od.rx = 0;
I.Od.zx = 1;
I.Od.kt = 2;
I.Od.sx = 3;
I.Od.Ss = 4;
I.Od.GE = 5;
I.screen = {
	$u: u,
	Yz: s,
	OA: "",
	Qj: s,
	VQ: [
		["requestFullscreen", "exitFullscreen", "fullscreenchange", "fullscreenEnabled", "fullscreenElement"],
		["requestFullScreen", "exitFullScreen", "fullScreenchange", "fullScreenEnabled", "fullScreenElement"],
		["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitIsFullScreen", "webkitCurrentFullScreenElement"],
		["mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozFullScreen", "mozFullScreenElement"],
		["msRequestFullscreen", "msExitFullscreen",
			"MSFullscreenChange", "msFullscreenEnabled", "msFullscreenElement"
		]
	],
	pa: function() {
		this.Qj = {};
		var a, c, d = this.VQ,
			e;
		a = 0;
		for (l = d.length; a < l; a++)
			if ((c = d[a]) && c[1] in document) {
				a = 0;
				for (e = c.length; a < e; a++) this.Qj[d[0][a]] = c[a];
				break
			}
		this.$u = false; //"undefined" !== typeof this.Qj.requestFullscreen;
		this.OA = "ontouchstart" in window ? "touchstart" : "mousedown"
	},
	fullScreen: function() {
		return this.$u ? document[this.Qj.fullscreenElement] === m || document[this.Qj.fullscreenElement] === s ? u : p : u
	},
	OK: function(a, c) {
		if (this.$u) {
			a = a || document.documentElement;
			if (c) {
				var d = this.Qj.l6;
				this.Yz && document.removeEventListener(d, this.Yz);
				this.Yz = c;
				document.addEventListener(d, c, u)
			}
			return a[this.Qj.requestFullscreen]()
		}
	},
	L5: function() {
		return this.$u ? document[this.Qj.exitFullscreen]() : p
	},
	UT: function(a, c) {
		function d() {
			f.OK(a, c);
			e.removeEventListener(f.OA, d)
		}
		a = a || document.body;
		var e = I.Ka || a,
			f = this;
		this.OK(a, c);
		e.addEventListener(this.OA, d)
	}
};
I.screen.pa();
I.Q = {
	ML: I.d(0, 0),
	NL: I.d(0, 0),
	top: I.d(0, 0),
	MI: I.d(0, 0),
	NI: I.d(0, 0),
	bottom: I.d(0, 0),
	Qn: I.d(0, 0),
	left: I.d(0, 0),
	right: I.d(0, 0),
	width: 0,
	height: 0,
	pa: function(a) {
		var c = this.width = a.width,
			d = this.height = a.height,
			e = a.x;
		a = a.y;
		var f = a + d,
			g = e + c;
		this.ML.x = e;
		this.ML.y = f;
		this.NL.x = g;
		this.NL.y = f;
		this.top.x = e + c / 2;
		this.top.y = f;
		this.MI.x = e;
		this.MI.y = a;
		this.NI.x = g;
		this.NI.y = a;
		this.bottom.x = e + c / 2;
		this.bottom.y = a;
		this.Qn.x = e + c / 2;
		this.Qn.y = a + d / 2;
		this.left.x = e;
		this.left.y = a + d / 2;
		this.right.x = g;
		this.right.y = a + d / 2
	}
};
I.XP = -90;
I.YP = 90;
I.ZP = 180;
I.j2 = 0;
I.no = {
	kn: u,
	BG: u,
	eH: I.d(0, 0),
	qS: I.d(0, 0),
	fH: [],
	Zz: 0,
	jk: [],
	PA: {},
	cn: 0,
	Kz: 5,
	py: u,
	Ft: 1 / 30,
	PE: 1,
	Bm: 0,
	qy: s,
	Et: s,
	ER: function() {
		for (var a = this.cn, c = 0; c < this.Kz; c++) {
			if (!(a & 1)) return this.cn |= 1 << c, c;
			a >>= 1
		}
		return -1
	},
	sS: function(a) {
		0 > a || a >= this.Kz || (a = ~(1 << a), this.cn &= a)
	},
	Uj: s,
	UB: function(a) {
		for (var c, d, e, f = [], g = this.PA, h = 0, k = a.length; h < k; h++)
			if (c = a[h], e = c.sg, d = g[e], d == s) {
				var n = this.ER(); - 1 === n ? I.log(I.k.PW, n) : (d = this.jk[n] = new I.ut(c.Hc.x, c.Hc.y, c.sg), d.ql(c.yg), g[e] = n, f.push(d))
			}
		0 < f.length && (this.Uj.Rt(f),
			a = new I.uf(f), a.Oj = I.uf.pm.bx, I.K.dispatchEvent(a))
	},
	VB: function(a) {
		for (var c, d, e = [], f = this.jk, g = 0, h = a.length; g < h; g++) c = a[g], d = c.sg, d = this.PA[d], d != s && f[d] && (f[d].vA(c.Hc), f[d].ql(c.yg), e.push(f[d]));
		0 < e.length && (this.Uj.Rt(e), a = new I.uf(e), a.Oj = I.uf.pm.xx, I.K.dispatchEvent(a))
	},
	Ov: function(a) {
		a = this.GJ(a);
		0 < a.length && (this.Uj.Rt(a), a = new I.uf(a), a.Oj = I.uf.pm.ox, I.K.dispatchEvent(a))
	},
	QJ: function(a) {
		a = this.GJ(a);
		0 < a.length && (this.Uj.Rt(a), a = new I.uf(a), a.Oj = I.uf.pm.fx, I.K.dispatchEvent(a))
	},
	GJ: function(a) {
		for (var c,
				d, e, f = [], g = this.jk, h = this.PA, k = 0, n = a.length; k < n; k++) c = a[k], e = c.sg, d = h[e], d != s && g[d] && (g[d].vA(c.Hc), g[d].ql(c.yg), f.push(g[d]), this.sS(d), delete h[e]);
		return f
	},
	Ig: function(a) {
		var c = document.documentElement,
			d = window,
			e = s,
			e = I.ff(a.getBoundingClientRect) ? a.getBoundingClientRect() : a instanceof HTMLCanvasElement ? {
				left: 0,
				top: 0,
				width: a.width,
				height: a.height
			} : {
				left: 0,
				top: 0,
				width: parseInt(a.style.width),
				height: parseInt(a.style.height)
			};
		return {
			left: e.left + d.pageXOffset - c.clientLeft,
			top: e.top + d.pageYOffset -
				c.clientTop,
			width: e.width,
			height: e.height
		}
	},
	ZV: function(a) {
		for (var c = s, d = this.fH, e = a.sg, f = d.length - 1; 0 <= f; f--)
			if (d[f].sg === e) {
				c = d[f];
				break
			}
		c || (c = a);
		return c
	},
	ZY: function(a) {
		for (var c = u, d = this.fH, e = a.sg, f = d.length - 1; 0 <= f; f--)
			if (d[f].sg === e) {
				d[f] = a;
				c = p;
				break
			}
		c || (50 >= d.length ? d.push(a) : (d[this.Zz] = a, this.Zz = (this.Zz + 1) % 50))
	},
	vr: function(a, c, d) {
		var e = this.eH;
		a = this.Uj.tB(a, c, d);
		c = new I.ut(a.x, a.y);
		c.ql(e.x, e.y);
		e.x = a.x;
		e.y = a.y;
		return c
	},
	$n: function(a, c, d) {
		var e = this.qS;
		this.Uj.NQ(a, c);
		c = new I.lc(d);
		c.NY(a.x,
			a.y);
		c.FS(e.x, e.y);
		e.x = a.x;
		e.y = a.y;
		return c
	},
	bo: function(a, c) {
		if (a.pageX != s) return {
			x: a.pageX,
			y: a.pageY
		};
		c.left -= document.body.scrollLeft;
		c.top -= document.body.scrollTop;
		return {
			x: a.clientX,
			y: a.clientY
		}
	},
	Kv: function(a, c) {
		for (var d = [], e = this.Uj, f, g, h = this.eH, k = a.changedTouches.length, n = 0; n < k; n++)
			if (f = a.changedTouches[n]) {
				var r;
				r = I.A.gp === I.A.Sf ? e.tB(f.pageX, f.pageY, c) : e.tB(f.clientX, f.clientY, c);
				f.identifier != s ? (f = new I.ut(r.x, r.y, f.identifier), g = this.ZV(f).Yi(), f.ql(g.x, g.y), this.ZY(f)) : (f = new I.ut(r.x,
					r.y), f.ql(h.x, h.y));
				h.x = r.x;
				h.y = r.y;
				d.push(f)
			}
		return d
	},
	qw: function(a) {
		if (!this.BG) {
			this.Uj = I.view;
			var c = this,
				d = "mouse" in I.A.Pn,
				e = "touches" in I.A.Pn,
				f = u;
			I.A.Kh && (f = p);
			d && (window.addEventListener("mousedown", function() {
				c.kn = p
			}, u), window.addEventListener("mouseup", function(d) {
				if (!f) {
					var e = c.kn;
					c.kn = u;
					if (e) {
						var e = c.Ig(a),
							g = c.bo(d, e);
						I.Co(new I.gi(e.left, e.top, e.width, e.height), g) || (c.Ov([c.vr(g.x, g.y, e)]), e = c.$n(g, e, I.lc.iy), e.dm(d.button), I.K.dispatchEvent(e))
					}
				}
			}, u), a.addEventListener("mousedown",
				function(d) {
					if (!f) {
						c.kn = p;
						var e = c.Ig(a),
							g = c.bo(d, e);
						c.UB([c.vr(g.x, g.y, e)]);
						e = c.$n(g, e, I.lc.tD);
						e.dm(d.button);
						I.K.dispatchEvent(e);
						d.stopPropagation();
						d.preventDefault();
						a.focus()
					}
				}, u), a.addEventListener("mouseup", function(d) {
				if (!f) {
					c.kn = u;
					var e = c.Ig(a),
						g = c.bo(d, e);
					c.Ov([c.vr(g.x, g.y, e)]);
					e = c.$n(g, e, I.lc.iy);
					e.dm(d.button);
					I.K.dispatchEvent(e);
					d.stopPropagation();
					d.preventDefault()
				}
			}, u), a.addEventListener("mousemove", function(d) {
				if (!f) {
					var e = c.Ig(a),
						g = c.bo(d, e);
					c.VB([c.vr(g.x, g.y, e)]);
					e = c.$n(g, e,
						I.lc.FD);
					c.kn ? e.dm(d.button) : e.dm(s);
					I.K.dispatchEvent(e);
					d.stopPropagation();
					d.preventDefault()
				}
			}, u), a.addEventListener("mousewheel", function(d) {
				var e = c.Ig(a),
					f = c.bo(d, e),
					e = c.$n(f, e, I.lc.Rx);
				e.dm(d.button);
				e.wL(0, d.wheelDelta);
				I.K.dispatchEvent(e);
				d.stopPropagation();
				d.preventDefault()
			}, u), a.addEventListener("DOMMouseScroll", function(d) {
				var e = c.Ig(a),
					f = c.bo(d, e),
					e = c.$n(f, e, I.lc.Rx);
				e.dm(d.button);
				e.wL(0, -120 * d.detail);
				I.K.dispatchEvent(e);
				d.stopPropagation();
				d.preventDefault()
			}, u));
			if (window.navigator.msPointerEnabled) {
				var d = {
						MSPointerDown: c.UB,
						MSPointerMove: c.VB,
						MSPointerUp: c.Ov,
						MSPointerCancel: c.QJ
					},
					g;
				for (g in d)(function(d, e) {
					a.addEventListener(d, function(d) {
						var f = c.Ig(a);
						f.left -= document.documentElement.scrollLeft;
						f.top -= document.documentElement.scrollTop;
						e.call(c, [c.vr(d.clientX, d.clientY, f)]);
						d.stopPropagation()
					}, u)
				})(g, d[g])
			}
			e && (a.addEventListener("touchstart", function(d) {
				if (d.changedTouches) {
					var e = c.Ig(a);
					e.left -= document.body.scrollLeft;
					e.top -= document.body.scrollTop;
					c.UB(c.Kv(d, e));
					d.stopPropagation();
					d.preventDefault();
					a.focus()
				}
			}, u), a.addEventListener("touchmove", function(d) {
				if (d.changedTouches) {
					var e = c.Ig(a);
					e.left -= document.body.scrollLeft;
					e.top -= document.body.scrollTop;
					c.VB(c.Kv(d, e));
					d.stopPropagation();
					d.preventDefault()
				}
			}, u), a.addEventListener("touchend", function(d) {
				if (d.changedTouches) {
					var e = c.Ig(a);
					e.left -= document.body.scrollLeft;
					e.top -= document.body.scrollTop;
					c.Ov(c.Kv(d, e));
					d.stopPropagation();
					d.preventDefault()
				}
			}, u), a.addEventListener("touchcancel", function(d) {
				if (d.changedTouches) {
					var e = c.Ig(a);
					e.left -=
						document.body.scrollLeft;
					e.top -= document.body.scrollTop;
					c.QJ(c.Kv(d, e));
					d.stopPropagation();
					d.preventDefault()
				}
			}, u));
			this.rH();
			this.qH();
			this.BG = p
		}
	},
	rH: y(),
	qH: y(),
	update: function(a) {
		this.Bm > this.Ft && (this.Bm -= this.Ft, I.K.dispatchEvent(new I.XM(this.qy)));
		this.Bm += a
	}
};
M = I.no;
M.Aw = function(a) {
	this.py !== a && (this.py = a, a = I.O.ok(), this.Bm = 0, a.Ho(this))
};
M.mba = function(a) {
	this.Ft !== a && (this.Ft = a)
};
M.rH = function() {
	I.Ka.addEventListener("keydown", function(a) {
		I.K.dispatchEvent(new I.xD(a.keyCode, p));
		a.stopPropagation();
		a.preventDefault()
	}, u);
	I.Ka.addEventListener("keyup", function(a) {
		I.K.dispatchEvent(new I.xD(a.keyCode, u));
		a.stopPropagation();
		a.preventDefault()
	}, u)
};
M.qH = function() {
	var a = window;
	this.qy = new Da;
	this.Et = a.DeviceMotionEvent || a.DeviceOrientationEvent;
	I.A.Sf === I.A.mM && (this.Et = window.DeviceOrientationEvent);
	var c = this.Et === a.DeviceMotionEvent ? "devicemotion" : "deviceorientation",
		d = navigator.userAgent;
	if (/Android/.test(d) || /Adr/.test(d) && I.A.Sf === I.cx) this.b3 = -1;
	a.addEventListener(c, this.IU.bind(this), u)
};
M.IU = function(a) {
	var c = window;
	if (this.py) {
		var d = this.qy,
			e, f, g;
		this.Et === window.DeviceMotionEvent ? (g = a.accelerationIncludingGravity, e = 0.1 * this.PE * g.x, f = 0.1 * this.PE * g.y, g = 0.1 * g.z) : (e = 0.981 * (a.gamma / 90), f = 0.981 * -(a.beta / 90), g = 0.981 * (a.alpha / 90));
		I.A.Ph === I.A.at ? (d.x = -e, d.y = -f) : (d.x = e, d.y = f);
		d.z = g;
		d.timestamp = a.timeStamp || Date.now();
		a = d.x;
		c.orientation === I.YP ? (d.x = -d.y, d.y = a) : c.orientation === I.XP ? (d.x = d.y, d.y = -a) : c.orientation === I.ZP && (d.x = -d.x, d.y = -d.y)
	}
};
delete M;
I.F_ = function(a, c, d, e, f, g) {
	this.a = a;
	this.b = c;
	this.c = d;
	this.I = e;
	this.ca = f;
	this.da = g
};
I.II = function(a, c, d, e, f, g) {
	return {
		a: a,
		b: c,
		c: d,
		I: e,
		ca: f,
		da: g
	}
};
I.kf = function(a, c, d) {
	var e;
	d === m ? (d = c, e = a.x, a = a.y) : (e = a, a = c);
	return {
		x: d.a * e + d.c * a + d.ca,
		y: d.b * e + d.I * a + d.da
	}
};
I.f3 = function(a, c, d) {
	return I.kf(a, c, d)
};
I.Rca = function(a, c) {
	return {
		width: c.a * a.width + c.c * a.height,
		height: c.b * a.width + c.I * a.height
	}
};
I.R3 = function() {
	return {
		a: 1,
		b: 0,
		c: 0,
		I: 1,
		ca: 0,
		da: 0
	}
};
I.Q3 = function() {
	return {
		a: 1,
		b: 0,
		c: 0,
		I: 1,
		ca: 0,
		da: 0
	}
};
I.uC = function(a, c) {
	var d = I.Eo(a),
		e = I.Do(a),
		f = I.Xr(a),
		g = I.Yr(a),
		h = I.kf(e, d, c),
		d = I.kf(f, d, c),
		e = I.kf(e, g, c),
		k = I.kf(f, g, c),
		f = Math.min(h.x, d.x, e.x, k.x),
		g = Math.max(h.x, d.x, e.x, k.x),
		n = Math.min(h.y, d.y, e.y, k.y),
		h = Math.max(h.y, d.y, e.y, k.y);
	return I.rect(f, n, g - f, h - n)
};
I.oH = function(a, c) {
	var d = I.Eo(a),
		e = I.Do(a),
		f = I.Xr(a),
		g = I.Yr(a),
		h = I.kf(e, d, c),
		d = I.kf(f, d, c),
		e = I.kf(e, g, c),
		k = I.kf(f, g, c),
		f = Math.min(h.x, d.x, e.x, k.x),
		g = Math.max(h.x, d.x, e.x, k.x),
		n = Math.min(h.y, d.y, e.y, k.y),
		h = Math.max(h.y, d.y, e.y, k.y);
	a.x = f;
	a.y = n;
	a.width = g - f;
	a.height = h - n;
	return a
};
I.S3 = function(a, c, d) {
	return {
		a: a.a,
		b: a.b,
		c: a.c,
		I: a.I,
		ca: a.ca + a.a * c + a.c * d,
		da: a.da + a.b * c + a.I * d
	}
};
I.CT = function(a, c, d) {
	return {
		a: a.a * c,
		b: a.b * c,
		c: a.c * d,
		I: a.I * d,
		ca: a.ca,
		da: a.da
	}
};
I.BT = function(a, c) {
	var d = Math.sin(c),
		e = Math.cos(c);
	return {
		a: a.a * e + a.c * d,
		b: a.b * e + a.I * d,
		c: a.c * e - a.a * d,
		I: a.I * e - a.b * d,
		ca: a.ca,
		da: a.da
	}
};
I.cr = function(a, c) {
	return {
		a: a.a * c.a + a.b * c.c,
		b: a.a * c.b + a.b * c.I,
		c: a.c * c.a + a.I * c.c,
		I: a.c * c.b + a.I * c.I,
		ca: a.ca * c.a + a.da * c.c + c.ca,
		da: a.ca * c.b + a.da * c.I + c.da
	}
};
I.AT = function(a, c) {
	var d = a.a,
		e = a.b,
		f = a.c,
		g = a.I,
		h = a.ca,
		k = a.da;
	a.a = d * c.a + e * c.c;
	a.b = d * c.b + e * c.I;
	a.c = f * c.a + g * c.c;
	a.I = f * c.b + g * c.I;
	a.ca = h * c.a + k * c.c + c.ca;
	a.da = h * c.b + k * c.I + c.da
};
I.P3 = function(a, c) {
	return a.a === c.a && a.b === c.b && a.c === c.c && a.I === c.I && a.ca === c.ca && a.da === c.da
};
I.HI = function(a) {
	var c = 1 / (a.a * a.I - a.b * a.c);
	return {
		a: c * a.I,
		b: -c * a.b,
		c: -c * a.c,
		I: c * a.a,
		ca: c * (a.c * a.da - a.I * a.ca),
		da: c * (a.b * a.ca - a.a * a.da)
	}
};
I.OD = parseFloat("1.192092896e-07F");
I.mC = function(a) {
	return I.d(-a.x, -a.y)
};
I.jj = function(a, c) {
	return I.d(a.x + c.x, a.y + c.y)
};
I.$c = function(a, c) {
	return I.d(a.x - c.x, a.y - c.y)
};
I.kj = function(a, c) {
	return I.d(a.x * c, a.y * c)
};
I.wK = function(a, c) {
	return I.kj(I.jj(a, c), 0.5)
};
I.yo = function(a, c) {
	return a.x * c.x + a.y * c.y
};
I.FX = function(a, c) {
	return a.x * c.y - a.y * c.x
};
I.lw = function(a) {
	return I.d(-a.y, a.x)
};
I.M$ = function(a) {
	return I.d(a.y, -a.x)
};
I.L$ = function(a, c) {
	return I.kj(c, I.yo(a, c) / I.yo(c, c))
};
I.N$ = function(a, c) {
	return I.d(a.x * c.x - a.y * c.y, a.x * c.y + a.y * c.x)
};
I.S$ = function(a, c) {
	return I.d(a.x * c.x + a.y * c.y, a.y * c.x - a.x * c.y)
};
I.uK = function(a) {
	return I.yo(a, a)
};
I.E$ = function(a, c) {
	return I.uK(I.$c(a, c))
};
I.tK = function(a) {
	return Math.sqrt(I.uK(a))
};
I.D$ = function(a, c) {
	return I.tK(I.$c(a, c))
};
I.ag = function(a) {
	var c = I.tK(a);
	return 0 === c ? I.d(a) : I.kj(a, 1 / c)
};
I.F$ = function(a) {
	return I.d(Math.cos(a), Math.sin(a))
};
I.R$ = function(a) {
	return Math.atan2(a.y, a.x)
};
I.ir = function(a, c, d) {
	if (c > d) {
		var e = c;
		c = d;
		d = e
	}
	return a < c ? c : a < d ? a : d
};
I.sK = function(a) {
	var c = I.d(0, 0),
		d = I.d(1, 1);
	return I.d(I.ir(a.x, c.x, d.x), I.ir(a.y, c.y, d.y))
};
I.G$ = function(a) {
	return I.d(a.width, a.height)
};
I.C$ = function(a, c) {
	return I.d(c(a.x), c(a.y))
};
I.vK = function(a, c, d) {
	return I.jj(I.kj(a, 1 - d), I.kj(c, d))
};
I.H$ = function(a, c, d) {
	return a.x - d <= c.x && c.x <= a.x + d && a.y - d <= c.y && c.y <= a.y + d ? p : u
};
I.B$ = function(a, c) {
	return I.d(a.x * c.x, a.y * c.y)
};
I.rK = function(a, c) {
	var d = I.ag(a),
		e = I.ag(c),
		d = Math.atan2(d.x * e.y - d.y * e.x, I.yo(d, e));
	return Math.abs(d) < I.OD ? 0 : d
};
I.A$ = function(a, c) {
	var d = Math.acos(I.yo(I.ag(a), I.ag(c)));
	return Math.abs(d) < I.OD ? 0 : d
};
I.xK = function(a, c, d) {
	a = I.$c(a, c);
	var e = Math.cos(d);
	d = Math.sin(d);
	var f = a.x;
	a.x = f * e - a.y * d + c.x;
	a.y = f * d + a.y * e + c.y;
	return a
};
I.lC = function(a, c, d, e, f) {
	if (a.x === c.x && a.y === c.y || d.x === e.x && d.y === e.y) return u;
	var g = c.x - a.x;
	c = c.y - a.y;
	var h = e.x - d.x;
	e = e.y - d.y;
	var k = a.x - d.x;
	a = a.y - d.y;
	d = e * g - h * c;
	f.x = h * a - e * k;
	f.y = g * a - c * k;
	if (0 === d) return 0 === f.x || 0 === f.y ? p : u;
	f.x /= d;
	f.y /= d;
	return p
};
I.P$ = function(a, c, d, e) {
	var f = I.d(0, 0);
	return I.lC(a, c, d, e, f) && 0 <= f.x && 1 >= f.x && 0 <= f.y && 1 >= f.y ? p : u
};
I.J$ = function(a, c, d, e) {
	var f = I.d(0, 0);
	return I.lC(a, c, d, e, f) ? (d = I.d(0, 0), d.x = a.x + f.x * (c.x - a.x), d.y = a.y + f.x * (c.y - a.y), d) : I.d(0, 0)
};
I.O$ = function(a, c) {
	return a != s && c != s ? a.x === c.x && a.y === c.y : u
};
I.T$ = function(a) {
	a.x = 0;
	a.y = 0
};
I.I$ = function(a, c) {
	a.x = c.x;
	a.y = c.y
};
I.GX = function(a, c) {
	a.x *= c;
	a.y *= c
};
I.Q$ = function(a, c) {
	a.x -= c.x;
	a.y -= c.y
};
I.z$ = function(a, c) {
	a.x += c.x;
	a.y += c.y
};
I.K$ = function(a) {
	I.GX(a, 1 / Math.sqrt(a.x * a.x + a.y * a.y))
};
I.Nda = function(a, c, d, e, f) {
	f += e;
	if (!(1 >= f)) {
		c *= 0.5;
		for (var g, h = f - 1, k = e; k < f; k++) {
			g = 2 * k;
			var n = I.d(a[2 * k], a[2 * k + 1]),
				r;
			if (0 === k) r = I.lw(I.ag(I.$c(n, I.d(a[2 * (k + 1)], a[2 * (k + 1) + 1]))));
			else if (k === h) r = I.lw(I.ag(I.$c(I.d(a[2 * (k - 1)], a[2 * (k - 1) + 1]), n)));
			else {
				r = I.d(a[2 * (k - 1)], a[2 * (k - 1) + 1]);
				var t = I.d(a[2 * (k + 1)], a[2 * (k + 1) + 1]),
					v = I.ag(I.$c(t, n)),
					B = I.ag(I.$c(r, n)),
					w = Math.acos(I.yo(v, B));
				r = w < I.af(70) ? I.lw(I.ag(I.wK(v, B))) : w < I.af(170) ? I.ag(I.wK(v, B)) : I.lw(I.ag(I.$c(t, r)))
			}
			r = I.kj(r, c);
			d[2 * g] = n.x + r.x;
			d[2 * g + 1] = n.y + r.y;
			d[2 *
				(g + 1)] = n.x - r.x;
			d[2 * (g + 1) + 1] = n.y - r.y
		}
		for (k = 0 === e ? 0 : e - 1; k < h; k++) {
			g = 2 * k;
			a = g + 2;
			c = I.Yw(d[2 * g], d[2 * g + 1]);
			f = I.Yw(d[2 * (g + 1)], d[2 * (g + 1) + 1]);
			g = I.Yw(d[2 * a], d[2 * a]);
			e = I.Yw(d[2 * (a + 1)], d[2 * (a + 1) + 1]);
			c = !I.n_(c.x, c.y, e.x, e.y, f.x, f.y, g.x, g.y);
			if (!c.Br && (0 > c.value || 1 < c.value)) c.Br = p;
			c.Br && (d[2 * a] = e.x, d[2 * a + 1] = e.y, d[2 * (a + 1)] = g.x, d[2 * (a + 1) + 1] = g.y)
		}
	}
};
I.n_ = function(a, c, d, e, f, g, h, k) {
	if (a === d && c === e || f === h && g === k) return {
		Br: u,
		value: 0
	};
	d -= a;
	e -= c;
	f -= a;
	g -= c;
	h -= a;
	k -= c;
	a = Math.sqrt(d * d + e * e);
	d /= a;
	e /= a;
	c = f * d + g * e;
	g = g * d - f * e;
	f = c;
	c = h * d + k * e;
	k = k * d - h * e;
	h = c;
	return g === k ? {
		Br: u,
		value: 0
	} : {
		Br: p,
		value: (h + (f - h) * k / (k - g)) / a
	}
};
I.Oda = function(a) {
	for (var c = 0, d = a.length; c < d; c++) {
		var e = a[(c + 1) % d],
			f = a[(c + 2) % d];
		if (0 < I.FX(I.$c(e, a[c]), I.$c(f, e))) return u
	}
	return p
};
I.Z_ = function(a, c) {
	c[2] = c[3] = c[6] = c[7] = c[8] = c[9] = c[11] = c[14] = 0;
	c[10] = c[15] = 1;
	c[0] = a.a;
	c[4] = a.c;
	c[12] = a.ca;
	c[1] = a.b;
	c[5] = a.I;
	c[13] = a.da
};
I.F0 = function(a, c) {
	c.a = a[0];
	c.c = a[4];
	c.ca = a[12];
	c.b = a[1];
	c.I = a[5];
	c.da = a[13]
};
I.ut = I.Ta.extend({
	Hc: s,
	yg: s,
	sg: 0,
	aI: u,
	xh: s,
	ctor: function(a, c, d) {
		this.nZ(d, a, c)
	},
	Yi: function() {
		return {
			x: this.Hc.x,
			y: this.Hc.y
		}
	},
	OV: function() {
		return this.Hc.x
	},
	PV: function() {
		return this.Hc.y
	},
	y7: function() {
		return {
			x: this.yg.x,
			y: this.yg.y
		}
	},
	N7: function() {
		return {
			x: this.xh.x,
			y: this.xh.y
		}
	},
	CV: function() {
		return I.$c(this.Hc, this.yg)
	},
	NV: function() {
		return {
			x: this.Hc.x,
			y: this.Hc.y
		}
	},
	z7: function() {
		return {
			x: this.yg.x,
			y: this.yg.y
		}
	},
	O7: function() {
		return {
			x: this.xh.x,
			y: this.xh.y
		}
	},
	e7: D("sg"),
	f7: function() {
		I.log("getId is deprecated. Please use getID instead.");
		return this.sg
	},
	nZ: function(a, c, d) {
		this.yg = this.Hc;
		this.Hc = I.d(c || 0, d || 0);
		this.sg = a;
		this.aI || (this.xh = I.d(this.Hc), this.aI = p)
	},
	vA: function(a, c) {
		c === m ? (this.Hc.x = a.x, this.Hc.y = a.y) : (this.Hc.x = a, this.Hc.y = c)
	},
	ql: function(a, c) {
		this.yg = c === m ? I.d(a.x, a.y) : I.d(a || 0, c || 0)
	}
});
I.sb = I.Ta.extend({
	yc: 0,
	cl: u,
	Ua: s,
	sA: A("Ua"),
	ctor: A("yc"),
	SB: D("yc"),
	stopPropagation: function() {
		this.cl = p
	},
	X8: D("cl"),
	F6: D("Ua")
});
I.sb.qt = 0;
I.sb.qm = 1;
I.sb.$h = 2;
I.sb.rm = 3;
I.sb.Cp = 4;
I.sb.rj = 6;
I.Xg = I.sb.extend({
	az: s,
	yI: s,
	ctor: function(a) {
		I.sb.prototype.ctor.call(this, I.sb.rj);
		this.az = a
	},
	setUserData: A("yI"),
	getUserData: D("yI"),
	R6: D("az")
});
I.lc = I.sb.extend({
	$F: 0,
	YE: 0,
	Cg: 0,
	ae: 0,
	$z: 0,
	aA: 0,
	DH: 0,
	EH: 0,
	ctor: function(a) {
		I.sb.prototype.ctor.call(this, I.sb.rm);
		this.$F = a
	},
	wL: function(a, c) {
		this.DH = a;
		this.EH = c
	},
	J7: D("DH"),
	K7: D("EH"),
	NY: function(a, c) {
		this.Cg = a;
		this.ae = c
	},
	Yi: function() {
		return {
			x: this.Cg,
			y: this.ae
		}
	},
	NV: function() {
		return {
			x: this.Cg,
			y: I.view.pg.height - this.ae
		}
	},
	FS: function(a, c) {
		this.$z = a;
		this.aA = c
	},
	CV: function() {
		return {
			x: this.Cg - this.$z,
			y: this.ae - this.aA
		}
	},
	K6: function() {
		return this.Cg - this.$z
	},
	L6: function() {
		return this.ae - this.aA
	},
	dm: A("YE"),
	s6: D("YE"),
	OV: D("Cg"),
	PV: D("ae")
});
I.lc.NONE = 0;
I.lc.tD = 1;
I.lc.iy = 2;
I.lc.FD = 3;
I.lc.Rx = 4;
I.lc.R_ = 0;
I.lc.T_ = 2;
I.lc.S_ = 1;
I.lc.M_ = 3;
I.lc.N_ = 4;
I.lc.O_ = 5;
I.lc.P_ = 6;
I.lc.Q_ = 7;
I.uf = I.sb.extend({
	Oj: 0,
	jk: s,
	ctor: function(a) {
		I.sb.prototype.ctor.call(this, I.sb.qt);
		this.jk = a || []
	},
	Q6: D("Oj"),
	W7: D("jk"),
	n3: A("Oj"),
	t3: A("jk")
});
I.uf.j1 = 5;
I.uf.pm = {
	bx: 0,
	xx: 1,
	ox: 2,
	fx: 3
};
I.z0 = I.sb.extend({
	zI: s,
	AI: s,
	ctor: function(a, c) {
		I.sb.prototype.ctor.call(this, I.sb.Cp);
		this.zI = c;
		this.AI = a
	}
});
I.R = I.Ta.extend({
	Bu: s,
	yc: 0,
	oh: s,
	Ve: u,
	Pj: 0,
	o: s,
	Ob: p,
	fn: p,
	ctor: function(a, c, d) {
		this.Bu = d;
		this.yc = a || 0;
		this.oh = c || ""
	},
	uA: A("Ob"),
	X2: D("Ob"),
	rl: A("Ve"),
	VR: D("Ve"),
	V2: D("yc"),
	S2: D("oh"),
	tA: A("Pj"),
	N2: D("Pj"),
	sn: A("o"),
	T2: D("o"),
	Ti: function() {
		return this.Bu !== s
	},
	j: E(s),
	fm: A("fn"),
	isEnabled: D("fn"),
	yw: y(),
	he: y()
});
I.R.GE = 0;
I.R.ig = 1;
I.R.Wx = 2;
I.R.qm = 3;
I.R.rm = 4;
I.R.$h = 5;
I.R.$h = 6;
I.R.rj = 8;
I.R.Cp = 7;
I.Sp = I.R.extend({
	mn: s,
	ctor: function(a, c) {
		this.mn = c;
		var d = this;
		I.R.prototype.ctor.call(this, I.R.rj, a, function(a) {
			d.mn !== s && d.mn(a)
		})
	},
	Ti: function() {
		return I.R.prototype.Ti.call(this) && this.mn !== s
	},
	j: function() {
		return new I.Sp(this.oh, this.mn)
	}
});
I.Sp.create = function(a, c) {
	return new I.Sp(a, c)
};
I.Hj = I.R.extend({
	fw: s,
	iw: s,
	gw: s,
	hw: s,
	ctor: function() {
		var a = this;
		I.R.prototype.ctor.call(this, I.R.rm, I.Hj.yb, function(c) {
			var d = I.lc;
			switch (c.$F) {
				case d.tD:
					a.fw && a.fw(c);
					break;
				case d.iy:
					a.iw && a.iw(c);
					break;
				case d.FD:
					a.gw && a.gw(c);
					break;
				case d.Rx:
					a.hw && a.hw(c)
			}
		})
	},
	j: function() {
		var a = new I.Hj;
		a.fw = this.fw;
		a.iw = this.iw;
		a.gw = this.gw;
		a.hw = this.hw;
		return a
	},
	Ti: E(p)
});
I.Hj.yb = "__cc_mouse";
I.Hj.create = function() {
	return new I.Hj
};
I.$g = I.R.extend({
	Om: s,
	eg: u,
	gf: s,
	kw: s,
	$f: s,
	jw: s,
	ctor: function() {
		I.R.prototype.ctor.call(this, I.R.ig, I.$g.yb, s);
		this.Om = []
	},
	tca: A("eg"),
	Y8: D("eg"),
	j: function() {
		var a = new I.$g;
		a.gf = this.gf;
		a.kw = this.kw;
		a.$f = this.$f;
		a.jw = this.jw;
		a.eg = this.eg;
		return a
	},
	Ti: function() {
		return !this.gf ? (I.log(I.k.rQ), u) : p
	}
});
I.$g.yb = "__cc_touch_one_by_one";
I.$g.create = function() {
	return new I.$g
};
I.Zg = I.R.extend({
	Qr: s,
	Tr: s,
	Sr: s,
	Rr: s,
	ctor: function() {
		I.R.prototype.ctor.call(this, I.R.Wx, I.Zg.yb, s)
	},
	j: function() {
		var a = new I.Zg;
		a.Qr = this.Qr;
		a.Tr = this.Tr;
		a.Sr = this.Sr;
		a.Rr = this.Rr;
		return a
	},
	Ti: function() {
		return this.Qr === s && this.Tr === s && this.Sr === s && this.Rr === s ? (I.log(I.k.qQ), u) : p
	}
});
I.Zg.yb = "__cc_touch_all_at_once";
I.Zg.create = function() {
	return new I.Zg
};
I.R.create = function(a) {
	I.assert(a && a.event, I.k.YM);
	var c = a.event;
	delete a.event;
	var d = s;
	c === I.R.ig ? d = new I.$g : c === I.R.Wx ? d = new I.Zg : c === I.R.rm ? d = new I.Hj : c === I.R.rj ? (d = new I.Sp(a.Av, a.ce), delete a.Av, delete a.ce) : c === I.R.qm ? d = new I.Gj : c === I.R.$h ? (d = new I.Fj(a.ce), delete a.ce) : c === I.R.Cp && (d = new I.Tp);
	for (var e in a) d[e] = a[e];
	return d
};
I.Tp = I.R.extend({
	j: function() {
		var a = new I.Tp;
		a.Nr = this.Nr;
		return a
	},
	Ti: function() {
		return !this.Nr ? (I.log("Invalid EventListenerFocus!"), u) : p
	},
	Nr: s,
	ctor: function() {
		I.R.prototype.ctor.call(this, I.R.Cp, I.Tp.yb, function(a) {
			this.Nr && this.Nr(a.AI, a.zI)
		})
	}
});
I.Tp.yb = "__cc_focus_event";
I.sQ = I.Ta.extend({
	Qe: s,
	We: s,
	PJ: 0,
	ctor: function() {
		this.Qe = [];
		this.We = []
	},
	size: function() {
		return this.Qe.length + this.We.length
	},
	empty: function() {
		return 0 === this.Qe.length && 0 === this.We.length
	},
	push: function(a) {
		0 === a.Pj ? this.We.push(a) : this.Qe.push(a)
	},
	gU: function() {
		this.We.length = 0
	},
	fU: function() {
		this.Qe.length = 0
	},
	clear: function() {
		this.We.length = 0;
		this.Qe.length = 0
	},
	T6: D("Qe"),
	H7: D("We")
});
I.Dt = function(a) {
	var c = I.sb,
		d = a.yc;
	if (d === c.$h) return I.Fj.yb;
	if (d === c.rj) return a.az;
	if (d === c.qm) return I.Gj.yb;
	if (d === c.rm) return I.Hj.yb;
	if (d === c.Cp) return I.Tp.yb;
	d === c.qt && I.log(I.k.Dt);
	return ""
};
I.K = {
	kx: 0,
	ws: 1,
	lp: 2,
	o0: 3,
	Ef: {},
	Eq: {},
	rh: {},
	xu: {},
	qG: {},
	En: [],
	fq: [],
	Vj: 0,
	fn: u,
	UG: 0,
	SR: [I.t.qx, I.t.Bs],
	Tu: function(a) {
		this.rh[a.W] != s && this.fq.push(a);
		a = a.P;
		for (var c = 0, d = a.length; c < d; c++) this.Tu(a[c])
	},
	zo: function(a, c) {
		var d = this.rh[a.W],
			e, f;
		if (d) {
			e = 0;
			for (f = d.length; e < f; e++) d[e].uA(p)
		}
		if (c === p) {
			d = a.P;
			e = 0;
			for (f = d.length; e < f; e++) this.zo(d[e], p)
		}
	},
	Qg: function(a, c) {
		var d = this.rh[a.W],
			e, f;
		if (d) {
			e = 0;
			for (f = d.length; e < f; e++) d[e].uA(u)
		}
		this.Tu(a);
		if (c === p) {
			d = a.P;
			e = 0;
			for (f = d.length; e < f; e++) this.Qg(d[e], p)
		}
	},
	BQ: function(a) {
		0 === this.Vj ? this.gG(a) : this.En.push(a)
	},
	gG: function(a) {
		var c = a.oh,
			d = this.Ef[c];
		d || (d = new I.sQ, this.Ef[c] = d);
		d.push(a);
		0 === a.Pj ? (this.pl(c, this.lp), c = a.o, c === s && I.log(I.k.dV), this.GQ(c, a), c.vh && this.Qg(c)) : this.pl(c, this.ws)
	},
	oz: function(a) {
		return this.Ef[a]
	},
	iT: function() {
		if (0 !== this.fq.length) {
			for (var a = this.fq, c, d, e = this.rh, f = 0, g = a.length; f < g; f++)
				if (c = e[a[f].W])
					for (var h = 0, k = c.length; h < k; h++)(d = c[h]) && this.pl(d.oh, this.lp);
			this.fq.length = 0
		}
	},
	sH: function(a) {
		if (a)
			for (var c, d = 0; d < a.length;) c =
				a[d], c.rl(u), c.o != s && (this.Ty(c.o, c), c.sn(s)), 0 === this.Vj ? I.Ed(a, c) : ++d
	},
	ll: function(a) {
		var c = this.Ef[a];
		if (c) {
			var d = c.Qe;
			this.sH(c.We);
			this.sH(d);
			delete this.Eq[a];
			this.Vj || (c.clear(), delete this.Ef[a])
		}
		for (var d = this.En, e, c = 0; c < d.length;)(e = d[c]) && e.oh === a ? I.Ed(d, e) : ++c
	},
	FA: function(a) {
		var c = this.kx,
			d = this.Eq;
		d[a] && (c = d[a]);
		c !== this.kx && (d[a] = this.kx, c & this.ws && this.SS(a), c & this.lp && ((c = I.O.rc) ? this.US(a, c) : d[a] = this.lp))
	},
	US: function(a, c) {
		var d = this.oz(a);
		if (d) {
			var e = d.We;
			e && 0 !== e.length && (this.UG =
				0, this.xu = {}, this.$A(c, p), d.We.sort(this.RS))
		}
	},
	RS: function(a, c) {
		var d = I.K.xu,
			e = a.o,
			f = c.o;
		return !c || !f || !d[f.W] ? -1 : !a || !e || !d[e.W] ? 1 : d[c.o.W] - d[a.o.W]
	},
	SS: function(a) {
		if (a = this.Ef[a]) {
			var c = a.Qe;
			if (c && 0 !== c.length) {
				c.sort(this.TS);
				for (var d = 0, e = c.length; d < e && !(0 <= c[d].Pj);) ++d;
				a.PJ = d
			}
		}
	},
	TS: function(a, c) {
		return a.Pj - c.Pj
	},
	Qz: function(a) {
		if (a = this.Ef[a]) {
			var c = a.Qe,
				d = a.We,
				e, f;
			if (d)
				for (e = 0; e < d.length;) f = d[e], f.Ve ? ++e : I.Ed(d, f);
			if (c)
				for (e = 0; e < c.length;) f = c[e], f.Ve ? ++e : I.Ed(c, f);
			d && 0 === d.length && a.gU();
			c && 0 === c.length && a.fU()
		}
	},
	gv: function(a) {
		var c = this.Vj;
		I.assert(0 < c, I.k.ZM);
		if (!(1 < c)) {
			a.yc === I.sb.qt ? (this.Qz(I.$g.yb), this.Qz(I.Zg.yb)) : this.Qz(I.Dt(a));
			I.assert(1 === c, I.k.$M);
			a = this.Ef;
			var c = this.Eq,
				d;
			for (d in a) a[d].empty() && (delete c[d], delete a[d]);
			d = this.En;
			if (0 !== d.length) {
				a = 0;
				for (c = d.length; a < c; a++) this.gG(d[a]);
				this.En.length = 0
			}
		}
	},
	eS: function(a, c) {
		if (!a.VR) return u;
		var d = c.event,
			e = c.$K;
		d.sA(a.o);
		var f = u,
			g, h = d.Oj,
			k = I.uf.pm;
		if (h === k.bx) a.gf && (f = a.gf(e, d)) && a.Ve && a.Om.push(e);
		else if (0 < a.Om.length &&
			-1 !== (g = a.Om.indexOf(e))) f = p, h === k.xx && a.kw ? a.kw(e, d) : h === k.ox ? (a.$f && a.$f(e, d), a.Ve && a.Om.splice(g, 1)) : h === k.fx && (a.jw && a.jw(e, d), a.Ve && a.Om.splice(g, 1));
		return d.cl ? (I.K.gv(d), p) : f && a.Ve && a.eg ? (c.xX && c.touches.splice(e, 1), p) : u
	},
	SQ: function(a) {
		this.FA(I.$g.yb);
		this.FA(I.Zg.yb);
		var c = this.oz(I.$g.yb),
			d = this.oz(I.Zg.yb);
		if (!(s === c && s === d)) {
			var e = a.jk,
				f = I.dJ(e),
				g = {
					event: a,
					xX: c && d,
					touches: f,
					$K: s
				};
			if (c)
				for (var h = 0; h < e.length; h++)
					if (g.$K = e[h], this.Sy(c, this.eS, g), a.cl) return;
			if (d && 0 < f.length && (this.Sy(d,
					this.fS, {
						event: a,
						touches: f
					}), a.cl)) return;
			this.gv(a)
		}
	},
	fS: function(a, c) {
		if (!a.Ve) return u;
		var d = I.uf.pm,
			e = c.event,
			f = c.touches,
			g = e.Oj;
		e.sA(a.o);
		g === d.bx && a.Qr ? a.Qr(f, e) : g === d.xx && a.Tr ? a.Tr(f, e) : g === d.ox && a.Sr ? a.Sr(f, e) : g === d.fx && a.Rr && a.Rr(f, e);
		return e.cl ? (I.K.gv(e), p) : u
	},
	GQ: function(a, c) {
		var d = this.rh[a.W];
		d || (d = [], this.rh[a.W] = d);
		d.push(c)
	},
	Ty: function(a, c) {
		var d = this.rh[a.W];
		d && (I.Ed(d, c), 0 === d.length && delete this.rh[a.W])
	},
	Sy: function(a, c, d) {
		var e = u,
			f = a.Qe,
			g = a.We,
			h = 0,
			k;
		if (f && 0 !== f.length)
			for (; h <
				a.PJ; ++h)
				if (k = f[h], k.isEnabled() && !k.Ob && k.Ve && c(k, d)) {
					e = p;
					break
				}
		if (g && !e)
			for (a = 0; a < g.length; a++)
				if (k = g[a], k.isEnabled() && !k.Ob && k.Ve && c(k, d)) {
					e = p;
					break
				}
		if (f && !e)
			for (; h < f.length && !(k = f[h], k.isEnabled() && !k.Ob && k.Ve && c(k, d)); ++h);
	},
	pl: function(a, c) {
		var d = this.Eq;
		d[a] = d[a] == s ? c : c | d[a]
	},
	$A: function(a, c) {
		var d = a.P,
			e = 0,
			f = d.length,
			g = this.qG,
			h = this.rh;
		if (0 < f) {
			for (var k; e < f; e++)
				if ((k = d[e]) && 0 > k.cc) this.$A(k, u);
				else break;
			h[a.W] != s && (g[a.qi] || (g[a.qi] = []), g[a.qi].push(a.W));
			for (; e < f; e++)(k = d[e]) && this.$A(k,
				u)
		} else h[a.W] != s && (g[a.qi] || (g[a.qi] = []), g[a.qi].push(a.W));
		if (c) {
			var d = [],
				n;
			for (n in g) d.push(n);
			d.sort(this.VS);
			n = d.length;
			k = this.xu;
			for (e = 0; e < n; e++) {
				f = g[d[e]];
				for (h = 0; h < f.length; h++) k[f[h]] = ++this.UG
			}
			this.qG = {}
		}
	},
	VS: function(a, c) {
		return a - c
	},
	addListener: function(a, c) {
		I.assert(a && c, I.k.fV);
		if (a instanceof I.R) {
			if (a.Ve) {
				I.log(I.k.hV);
				return
			}
		} else I.assert(!I.dC(c), I.k.gV), a = I.R.create(a);
		if (a.Ti()) {
			if (I.dC(c)) {
				if (0 === c) {
					I.log(I.k.eV);
					return
				}
				a.sn(s);
				a.tA(c);
				a.rl(p);
				a.uA(u)
			} else a.sn(c), a.tA(0), a.rl(p);
			this.BQ(a);
			return a
		}
	},
	Fl: function(a, c) {
		var d = new I.Sp(a, c);
		this.addListener(d, 1);
		return d
	},
	removeListener: function(a) {
		if (a != s) {
			var c, d = this.Ef,
				e;
			for (e in d) {
				var f = d[e],
					g = f.Qe;
				(c = this.tH(f.We, a)) ? this.pl(a.oh, this.lp): (c = this.tH(g, a)) && this.pl(a.oh, this.ws);
				f.empty() && (delete this.Eq[a.oh], delete d[e]);
				if (c) break
			}
			if (!c) {
				c = this.En;
				d = 0;
				for (e = c.length; d < e; d++)
					if (f = c[d], f === a) {
						I.Ed(c, f);
						f.rl(u);
						break
					}
			}
		}
	},
	i3: function(a, c) {
		if (a == s) return u;
		for (var d = 0, e = a.length; d < e; d++) {
			var f = a[d];
			if (f.mn === c || f.Bu === c) return f.rl(u),
				f.o != s && (this.Ty(f.o, f), f.sn(s)), 0 === this.Vj && I.Ed(a, f), p
		}
		return u
	},
	tH: function(a, c) {
		if (a == s) return u;
		for (var d = 0, e = a.length; d < e; d++) {
			var f = a[d];
			if (f === c) return f.rl(u), f.o != s && (this.Ty(f.o, f), f.sn(s)), 0 === this.Vj && I.Ed(a, f), p
		}
		return u
	},
	xC: function(a, c) {
		if (a instanceof I.i) {
			delete this.xu[a.W];
			I.Ed(this.fq, a);
			var d = this.rh[a.W];
			if (d) {
				for (var e = I.dJ(d), d = 0; d < e.length; d++) this.removeListener(e[d]);
				e.length = 0
			}
			e = this.En;
			for (d = 0; d < e.length;) {
				var f = e[d];
				f.o === a ? (f.sn(s), f.rl(u), e.splice(d, 1)) : ++d
			}
			if (c ===
				p) {
				e = a.P;
				d = 0;
				for (f = e.length; d < f; d++) this.xC(e[d], p)
			}
		} else a === I.R.ig ? this.ll(I.$g.yb) : a === I.R.Wx ? this.ll(I.Zg.yb) : a === I.R.rm ? this.ll(I.Hj.yb) : a === I.R.$h ? this.ll(I.Fj.yb) : a === I.R.qm ? this.ll(I.Gj.yb) : I.log(I.k.iV)
	},
	Iaa: function(a) {
		this.ll(a)
	},
	aY: function() {
		var a = this.Ef,
			c = this.SR,
			d;
		for (d in a) - 1 === c.indexOf(d) && this.ll(d)
	},
	ica: function(a, c) {
		if (a != s) {
			var d = this.Ef,
				e;
			for (e in d) {
				var f = d[e].Qe;
				if (f && -1 !== f.indexOf(a)) {
					a.o != s && I.log(I.k.jV);
					a.Pj !== c && (a.tA(c), this.pl(a.oh, this.ws));
					break
				}
			}
		}
	},
	fm: A("fn"),
	isEnabled: D("fn"),
	dispatchEvent: function(a) {
		if (this.fn) {
			this.iT();
			this.Vj++;
			(!a || !a.SB) && b(Error("event is undefined"));
			if (a.yc === I.sb.qt) this.SQ(a);
			else {
				var c = I.Dt(a);
				this.FA(c);
				c = this.Ef[c];
				c != s && this.Sy(c, this.dS, a);
				this.gv(a)
			}
			this.Vj--
		}
	},
	dS: function(a, c) {
		c.sA(a.o);
		a.Bu(c);
		return c.cl
	},
	N4: function(a, c) {
		var d = new I.Xg(a);
		d.setUserData(c);
		this.dispatchEvent(d)
	}
};
I.XM = I.sb.extend({
	OE: s,
	ctor: function(a) {
		I.sb.prototype.ctor.call(this, I.sb.$h);
		this.OE = a
	}
});
I.xD = I.sb.extend({
	Cz: 0,
	AG: u,
	ctor: function(a, c) {
		I.sb.prototype.ctor.call(this, I.sb.qm);
		this.Cz = a;
		this.AG = c
	}
});
I.Fj = I.R.extend({
	Au: s,
	ctor: function(a) {
		this.Au = a;
		var c = this;
		I.R.prototype.ctor.call(this, I.R.$h, I.Fj.yb, function(a) {
			c.Au(a.OE, a)
		})
	},
	Ti: function() {
		I.assert(this.Au, I.k.oQ);
		return p
	},
	j: function() {
		return new I.Fj(this.Au)
	}
});
I.Fj.yb = "__cc_acceleration";
I.Fj.create = function(a) {
	return new I.Fj(a)
};
I.Gj = I.R.extend({
	Or: s,
	Pr: s,
	ctor: function() {
		var a = this;
		I.R.prototype.ctor.call(this, I.R.qm, I.Gj.yb, function(c) {
			c.AG ? a.Or && a.Or(c.Cz, c) : a.Pr && a.Pr(c.Cz, c)
		})
	},
	j: function() {
		var a = new I.Gj;
		a.Or = this.Or;
		a.Pr = this.Pr;
		return a
	},
	Ti: function() {
		return this.Or === s && this.Pr === s ? (I.log(I.k.pQ), u) : p
	}
});
I.Gj.yb = "__cc_keyboard";
I.Gj.create = function() {
	return new I.Gj
};
I.kY = {
	de: p,
	Oi: [],
	Gi: [],
	qq: u,
	Nt: {},
	Ok: [],
	ni: 0,
	Ec: I.color(),
	bF: "rgb(0, 0, 0)",
	BJ: function(a) {
		return a.ed()
	},
	Sa: function(a) {
		var c = this.Gi,
			d, e = I.view.sa,
			f = I.view.Va,
			g = a || I.s;
		g.rB();
		a = 0;
		for (d = c.length; a < d; a++) c[a].Sa(g, e, f)
	},
	eA: function(a, c, d, e) {
		a || I.log("The context of RenderTexture is invalid.");
		d = I.cj(d) ? 1 : d;
		e = I.cj(e) ? 1 : e;
		c = c || this.ni;
		var f = this.Nt[c],
			g, h;
		a.rB();
		g = 0;
		for (h = f.length; g < h; g++) f[g].Sa(a, d, e);
		f.length = 0;
		a = this.Ok;
		delete this.Nt[c];
		I.Ed(a, c);
		0 === a.length ? this.qq = u : this.ni = a[a.length - 1]
	},
	ev: function(a) {
		this.qq =
			p;
		a = a || 0;
		this.Nt[a] = []; - 1 === this.Ok.indexOf(a) && this.Ok.push(a);
		this.ni = a
	},
	dT: function() {
		this.qq = u
	},
	RK: function() {
		this.de = u;
		this.Oi.length = 0
	},
	transform: function() {
		var a = this.Oi;
		a.sort(this.GA);
		for (var c = 0, d = a.length; c < d; c++) 0 !== a[c].C && a[c].updateStatus();
		a.length = 0
	},
	ga: function() {
		return 0 < this.Oi.length
	},
	GA: function(a, c) {
		return a.og - c.og
	},
	EK: function(a) {
		this.Oi.push(a)
	},
	clear: function() {
		var a = I.Ka,
			c = I.s,
			d = c.getContext();
		d.setTransform(1, 0, 0, 1, 0, 0);
		d.clearRect(0, 0, a.width, a.height);
		if (0 !== this.Ec.r ||
			0 !== this.Ec.g || 0 !== this.Ec.b) c.bg(this.bF), c.gm(this.Ec.a), d.fillRect(0, 0, a.width, a.height)
	},
	XI: function() {
		this.Gi.length = 0;
		this.Ok.length = 0;
		this.qq = u
	},
	Pg: function(a) {
		if (a.ib)
			if (this.qq) {
				var c = this.Nt[this.ni]; - 1 === c.indexOf(a) && c.push(a)
			} else -1 === this.Gi.indexOf(a) && this.Gi.push(a)
	}
};
(function() {
	I.vs = function(a) {
		this.La = a;
		this.qn = 0;
		this.Ly = a.globalAlpha;
		this.My = a.globalCompositeOperation;
		this.St = a.fillStyle;
		this.Ny = a.strokeStyle;
		this.yu = this.Nz = 0;
		this.Fq = this.height;
		this.uy = 0
	};
	var a = I.vs.prototype;
	a.PK = function() {
		var a = this.La;
		this.Ly = a.globalAlpha;
		this.My = a.globalCompositeOperation;
		this.St = a.fillStyle;
		this.Ny = a.strokeStyle;
		this.Fq = this.La.canvas.height + this.yu
	};
	a.fs = function(a, d) {
		this.Nz = a;
		this.yu = d;
		this.Fq = this.La.canvas.height + this.yu
	};
	a.rB = function() {
		this.Fq = this.La.canvas.height +
			this.yu
	};
	a.Pca = function(a, d) {
		this.sa = a;
		this.Va = d
	};
	a.getContext = D("La");
	a.save = function() {
		this.La.save();
		this.qn++
	};
	a.restore = function() {
		this.La.restore();
		this.qn--
	};
	a.gm = function(a) {
		0 < this.qn ? this.La.globalAlpha = a : this.Ly !== a && (this.Ly = a, this.La.globalAlpha = a)
	};
	a.Jo = function(a) {
		0 < this.qn ? this.La.globalCompositeOperation = a : this.My !== a && (this.My = a, this.La.globalCompositeOperation = a)
	};
	a.bg = function(a) {
		0 < this.qn ? this.La.fillStyle = a : this.St !== a && (this.St = a, this.La.fillStyle = a)
	};
	a.Pw = function(a) {
		0 < this.qn ?
			this.La.strokeStyle = a : this.Ny !== a && (this.Ny = a, this.La.strokeStyle = a)
	};
	a.setTransform = function(a, d, e) {
		0 < this.uy ? (this.restore(), this.save(), this.La.transform(a.a, -a.b, -a.c, a.I, a.ca * d, -(a.da * e))) : this.La.setTransform(a.a, -a.b, -a.c, a.I, this.Nz + a.ca * d, this.Fq - a.da * e)
	};
	a.x3 = function(a, d, e, f) {
		a ? (this.uy++, this.La.setTransform(d.a, d.c, d.b, d.I, this.Nz + d.ca * e, this.Fq - d.da * f), this.save()) : (this.uy--, this.restore())
	}
})();
I.lY = {
	de: p,
	Oi: [],
	Gi: [],
	ru: u,
	Mt: {},
	Ok: [],
	ni: 0,
	Ec: I.color(),
	BJ: function(a) {
		return a.ed()
	},
	Sa: function(a) {
		var c = this.Gi,
			d, e = a || I.s;
		a = 0;
		for (d = c.length; a < d; a++) c[a].Sa(e)
	},
	ev: function(a) {
		this.ru = p;
		a = a || 0;
		this.Mt[a] = [];
		this.Ok.push(a);
		this.ni = a
	},
	dT: function() {
		this.ru = u
	},
	tS: function(a) {
		a = a || this.ni;
		var c = this.Mt[a],
			d, e, f = I.s,
			g = this.Ok;
		d = 0;
		for (e = c.length; d < e; d++) c[d].Sa(f);
		c.length = 0;
		delete this.Mt[a];
		I.Ed(g, a);
		0 === g.length ? this.ru = u : this.ni = g[g.length - 1]
	},
	RK: function() {
		this.de = u;
		this.Oi.length = 0
	},
	transform: function() {
		var a =
			this.Oi;
		a.sort(this.GA);
		for (var c = 0, d = a.length; c < d; c++) a[c].updateStatus();
		a.length = 0
	},
	ga: function() {
		return 0 < this.Oi.length
	},
	GA: function(a, c) {
		return a.og - c.og
	},
	EK: function(a) {
		this.Oi.push(a)
	},
	XI: function() {
		this.Gi.length = 0
	},
	clear: function() {
		var a = I.s;
		a.clearColor(this.Ec.r, this.Ec.g, this.Ec.b, this.Ec.a);
		a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT)
	},
	ds: function(a) {
		var c = I.s;
		a ? (c.clearDepth(1), c.enable(c.DEPTH_TEST), c.depthFunc(c.LEQUAL)) : c.disable(c.DEPTH_TEST)
	},
	Pg: function(a) {
		if (a.ib)
			if (this.ru) {
				var c =
					this.Mt[this.ni]; - 1 === c.indexOf(a) && c.push(a)
			} else -1 === this.Gi.indexOf(a) && this.Gi.push(a)
	}
};
I.oa.Ix = function() {
	var a = I.i.prototype;
	I.p(a, "x", a.ee, a.rL);
	I.p(a, "y", a.Vf, a.sL);
	I.p(a, "width", a.lh, a.tn);
	I.p(a, "height", a.$k, a.rn);
	I.p(a, "anchorX", a.fz, a.mA);
	I.p(a, "anchorY", a.dR, a.nA);
	I.p(a, "skewX", a.dW, a.gZ);
	I.p(a, "skewY", a.eW, a.hZ);
	I.p(a, "zIndex", a.MV, a.oL);
	I.p(a, "vertexZ", a.nW, a.uZ);
	I.p(a, "rotation", a.CJ, a.Ow);
	I.p(a, "rotationX", a.aW, a.dZ);
	I.p(a, "rotationY", a.bW, a.eZ);
	I.p(a, "scale", a.cW, a.Qc);
	I.p(a, "scaleX", a.DJ, a.IC);
	I.p(a, "scaleY", a.EJ, a.JC);
	I.p(a, "children", a.wV);
	I.p(a, "childrenCount", a.xV);
	I.p(a, "parent", a.getParent, a.pL);
	I.p(a, "visible", a.eX, a.ie);
	I.p(a, "running", a.bX);
	I.p(a, "ignoreAnchor", a.YW, a.$B);
	I.p(a, "actionManager", a.Fh, a.bL);
	I.p(a, "scheduler", a.ok, a.vL);
	I.p(a, "shaderProgram", a.co, a.hm);
	I.p(a, "opacity", a.ao, a.Hd);
	I.p(a, "opacityModifyRGB", a.Sl);
	I.p(a, "cascadeOpacity", a.UW, a.AY);
	I.p(a, "color", a.Xi, a.ic);
	I.p(a, "cascadeColor", a.TW, a.zY)
};
I.ID = -1;
I.EC = 1;
I.i = I.Ta.extend({
	cc: 0,
	qi: 0,
	jv: 0,
	Hi: 0,
	pn: 0,
	sa: 1,
	Va: 1,
	Gf: s,
	Aq: s,
	TA: u,
	VG: u,
	Ki: 0,
	Li: 0,
	P: s,
	$d: p,
	jg: s,
	S: s,
	vh: u,
	ab: s,
	ti: u,
	tag: I.ID,
	userData: s,
	userObject: s,
	we: u,
	Wa: s,
	arrivalOrder: 0,
	Le: s,
	Jc: s,
	K2: s,
	sy: u,
	ry: s,
	zf: s,
	Bz: u,
	$b: "Node",
	UH: u,
	el: "",
	Ei: 255,
	ve: s,
	Vc: u,
	Wc: u,
	f: s,
	Pk: s,
	ctor: function() {
		this.MR();
		this.PR()
	},
	MR: function() {
		this.jg = I.d(0, 0);
		this.S = I.size(0, 0);
		this.Gf = I.d(0, 0);
		this.Aq = I.d(0, 0);
		this.P = [];
		var a = I.O;
		this.Le = a.Fh();
		this.Jc = a.ok();
		this.ry = {
			a: 1,
			b: 0,
			c: 0,
			I: 1,
			ca: 0,
			da: 0
		};
		I.BM && (this.zf = new I.BM(this));
		this.Ei =
			255;
		this.ve = I.color(255, 255, 255, 255);
		this.Wc = this.Vc = u
	},
	pa: E(p),
	lg: function(a, c) {
		if (a && 0 !== a.length) {
			var d, e = a.length,
				f;
			d = I.i.Jf;
			switch (c) {
				case d.U:
					for (d = 0; d < e; d++)(f = a[d]) && f.U();
					break;
				case d.Qa:
					for (d = 0; d < e; d++)(f = a[d]) && f.Qa();
					break;
				case d.uk:
					for (d = 0; d < e; d++)(f = a[d]) && f.uk();
					break;
				case d.od:
					for (d = 0; d < e; d++)(f = a[d]) && f.od();
					break;
				case d.ke:
					for (d = 0; d < e; d++)(f = a[d]) && f.ke();
					break;
				case d.Og:
					for (d = 0; d < e; d++)(f = a[d]) && f.Og();
					break;
				case d.dg:
					for (d = 0; d < e; d++)(f = a[d]) && f.dg();
					break;
				default:
					I.assert(0, I.k.GN)
			}
		}
	},
	na: function(a) {
		for (var c in a) this[c] = a[c]
	},
	dW: D("Ki"),
	gZ: function(a) {
		this.Ki = a;
		this.f.Z(I.i.L.ga)
	},
	eW: D("Li"),
	hZ: function(a) {
		this.Li = a;
		this.f.Z(I.i.L.ga)
	},
	oL: function(a) {
		this.cc = a;
		this.ab && this.ab.bs(this, a);
		I.K.Tu(this)
	},
	LH: A("cc"),
	MV: D("cc"),
	l8: function() {
		I.log(I.k.MN);
		return this.cc
	},
	Qca: function(a) {
		I.log(I.k.WN);
		this.oL(a)
	},
	Sba: function(a) {
		this.qi !== a && (this.qi = a, I.K.Tu(this))
	},
	c7: D("qi"),
	nW: D("jv"),
	uZ: A("jv"),
	CJ: function() {
		this.Hi !== this.pn && I.log(I.k.KN);
		return this.Hi
	},
	Ow: function(a) {
		this.Hi =
			this.pn = a;
		this.f.Z(I.i.L.ga)
	},
	aW: D("Hi"),
	dZ: function(a) {
		this.Hi = a;
		this.f.Z(I.i.L.ga)
	},
	bW: D("pn"),
	eZ: function(a) {
		this.pn = a;
		this.f.Z(I.i.L.ga)
	},
	cW: function() {
		this.sa !== this.Va && I.log(I.k.LN);
		return this.sa
	},
	Qc: function(a, c) {
		this.sa = a;
		this.Va = c || 0 === c ? c : a;
		this.f.Z(I.i.L.ga)
	},
	DJ: D("sa"),
	IC: function(a) {
		this.sa = a;
		this.f.Z(I.i.L.ga)
	},
	EJ: D("Va"),
	JC: function(a) {
		this.Va = a;
		this.f.Z(I.i.L.ga)
	},
	Ia: function(a, c) {
		var d = this.Gf;
		if (c === m) {
			if (d.x === a.x && d.y === a.y) return;
			d.x = a.x;
			d.y = a.y
		} else {
			if (d.x === a && d.y === c) return;
			d.x = a;
			d.y = c
		}
		this.TA = u;
		this.f.Z(I.i.L.ga)
	},
	aca: function(a, c) {
		var d = this.Aq;
		c === m ? (d.x = a.x, d.y = a.y) : (d.x = a, d.y = c);
		this.VG = this.TA = p;
		this.f.Z(I.i.L.ga)
	},
	Hv: function() {
		return I.d(this.Gf)
	},
	p7: function() {
		return I.d(this.Aq)
	},
	ee: function() {
		return this.Gf.x
	},
	rL: function(a) {
		this.Gf.x = a;
		this.f.Z(I.i.L.ga)
	},
	Vf: function() {
		return this.Gf.y
	},
	sL: function(a) {
		this.Gf.y = a;
		this.f.Z(I.i.L.ga)
	},
	xV: function() {
		return this.P.length
	},
	wV: D("P"),
	eX: D("$d"),
	ie: function(a) {
		this.$d !== a && (this.$d = a, this.f.Z(I.i.L.ga), I.Ga.de =
			p)
	},
	o6: function() {
		return I.d(this.jg)
	},
	Vh: function(a, c) {
		var d = this.jg;
		if (c === m) {
			if (a.x === d.x && a.y === d.y) return;
			d.x = a.x;
			d.y = a.y
		} else {
			if (a === d.x && c === d.y) return;
			d.x = a;
			d.y = c
		}
		Ia(this.f)
	},
	fz: function() {
		return this.jg.x
	},
	mA: function(a) {
		this.jg.x !== a && (this.jg.x = a, Ia(this.f))
	},
	dR: function() {
		return this.jg.y
	},
	nA: function(a) {
		this.jg.y !== a && (this.jg.y = a, Ia(this.f))
	},
	Cv: function() {
		return this.f.Cv()
	},
	lh: function() {
		return this.S.width
	},
	tn: function(a) {
		this.S.width = a;
		Ia(this.f)
	},
	$k: function() {
		return this.S.height
	},
	rn: function(a) {
		this.S.height = a;
		Ia(this.f)
	},
	Aa: function() {
		return I.size(this.S)
	},
	Gd: function(a, c) {
		var d = this.S;
		if (c === m) {
			if (a.width === d.width && a.height === d.height) return;
			d.width = a.width;
			d.height = a.height
		} else {
			if (a === d.width && c === d.height) return;
			d.width = a;
			d.height = c
		}
		Ia(this.f)
	},
	bX: D("vh"),
	getParent: D("ab"),
	pL: A("ab"),
	YW: D("ti"),
	$B: function(a) {
		a !== this.ti && (this.ti = a, this.f.Z(I.i.L.ga))
	},
	RB: D("tag"),
	No: A("tag"),
	TY: A("el"),
	getName: D("el"),
	getUserData: D("userData"),
	setUserData: A("userData"),
	d8: D("userObject"),
	Mca: function(a) {
		this.userObject !== a && (this.userObject = a)
	},
	t7: D("arrivalOrder"),
	VY: A("arrivalOrder"),
	Fh: function() {
		this.Le || (this.Le = I.O.Fh());
		return this.Le
	},
	bL: function(a) {
		this.Le !== a && (this.GL(), this.Le = a)
	},
	ok: function() {
		this.Jc || (this.Jc = I.O.ok());
		return this.Jc
	},
	vL: function(a) {
		this.Jc !== a && (this.ZC(), this.Jc = a)
	},
	g4: function() {
		I.log(I.k.IN);
		return this.uV()
	},
	uV: function() {
		var a = I.rect(0, 0, this.S.width, this.S.height);
		return I.oH(a, this.sc())
	},
	od: function() {
		this.GL();
		this.ZC();
		I.K.xC(this);
		this.lg(this.P,
			I.i.Jf.od)
	},
	Hg: function(a) {
		var c = this.P;
		if (c !== s)
			for (var d = 0; d < c.length; d++) {
				var e = c[d];
				if (e && e.tag === a) return e
			}
		return s
	},
	y6: function(a) {
		if (!a) return I.log("Invalid name"), s;
		for (var c = this.P, d = 0, e = c.length; d < e; d++)
			if (c[d].el === a) return c[d];
		return s
	},
	N: function(a, c, d) {
		c = c === m ? a.cc : c;
		var e, f = u;
		I.cj(d) ? (d = m, e = a.el) : I.ge(d) ? (e = d, d = m) : I.dC(d) && (f = p, e = "");
		I.assert(a, I.k.HN);
		I.assert(a.ab === s, "child already added. It can't be added again");
		this.AQ(a, c, d, e, f)
	},
	AQ: function(a, c, d, e, f) {
		this.P || (this.P = []);
		this.RR(a, c);
		f ? a.No(d) : a.TY(e);
		a.pL(this);
		a.VY(I.EC++);
		this.vh && (a.U(), this.Bz && a.uk());
		this.Vc && a.f.Z(I.i.L.hb);
		this.Wc && a.f.Z(I.i.L.lb)
	},
	Sh: function(a) {
		this.ab && (a === m && (a = p), this.ab.removeChild(this, a))
	},
	MK: function(a) {
		I.log(I.k.QN);
		this.Sh(a)
	},
	removeChild: function(a, c) {
		0 !== this.P.length && (c === m && (c = p), -1 < this.P.indexOf(a) && this.QQ(a, c), I.Ga.de = p)
	},
	wC: function(a, c) {
		a === I.ID && I.log(I.k.ON);
		var d = this.Hg(a);
		d ? this.removeChild(d, c) : I.log(I.k.PN, a)
	},
	Caa: function(a) {
		this.$r(a)
	},
	$r: function(a) {
		var c =
			this.P;
		if (c !== s) {
			a === m && (a = p);
			for (var d = 0; d < c.length; d++) {
				var e = c[d];
				e && (this.vh && (e.Og(), e.Qa()), a && e.od(), e.parent = s, e.f.wv())
			}
			this.P.length = 0;
			I.Ga.de = p
		}
	},
	QQ: function(a, c) {
		this.vh && (a.Og(), a.Qa());
		c && a.od();
		a.parent = s;
		a.f.wv();
		I.Ed(this.P, a)
	},
	RR: function(a, c) {
		I.Ga.de = this.we = p;
		this.P.push(a);
		a.LH(c)
	},
	Lw: function() {
		this.f.Z(I.i.L.ga)
	},
	bs: function(a, c) {
		I.assert(a, I.k.RN);
		I.Ga.de = this.we = p;
		a.arrivalOrder = I.EC;
		I.EC++;
		a.LH(c);
		this.f.Z(I.i.L.jf)
	},
	dg: function() {
		if (this.we) {
			var a = this.P,
				c = a.length,
				d, e,
				f;
			for (d = 1; d < c; d++) {
				f = a[d];
				for (e = d - 1; 0 <= e;) {
					if (f.cc < a[e].cc) a[e + 1] = a[e];
					else if (f.cc === a[e].cc && f.arrivalOrder < a[e].arrivalOrder) a[e + 1] = a[e];
					else break;
					e--
				}
				a[e + 1] = f
			}
			this.we = u
		}
	},
	xB: y(),
	d_: function() {
		this.ab !== s && (this.ab.d_(), this.ab.transform())
	},
	U: function() {
		this.Bz = u;
		this.vh = p;
		this.lg(this.P, I.i.Jf.U);
		this.mf()
	},
	uk: function() {
		this.Bz = p;
		this.lg(this.P, I.i.Jf.uk)
	},
	Og: function() {
		this.lg(this.P, I.i.Jf.Og)
	},
	Qa: function() {
		this.vh = u;
		this.pause();
		this.lg(this.P, I.i.Jf.Qa);
		this.$X()
	},
	ma: function(a) {
		I.assert(a,
			I.k.TN);
		this.actionManager.DI(a, this, !this.vh);
		return a
	},
	GL: function() {
		this.actionManager && this.actionManager.LK(this)
	},
	Yca: function(a) {
		this.actionManager.JK(a)
	},
	Zca: function(a) {
		a === I.lm ? I.log(I.k.XN) : this.actionManager.KK(a, this)
	},
	sJ: function(a) {
		return a === I.lm ? (I.log(I.k.JN), s) : this.actionManager.sJ(a, this)
	},
	r7: function() {
		return this.actionManager.DX(this)
	},
	Ho: function() {
		this.sY(0)
	},
	sY: function(a) {
		this.scheduler.Ho(this, a, !this.vh)
	},
	pj: function() {
		this.scheduler.pj(this)
	},
	mj: function(a, c, d, e, f) {
		var g =
			arguments.length;
		"function" === typeof a ? 1 === g ? (c = 0, d = I.Ie, e = 0, f = this.W) : 2 === g ? "number" === typeof c ? (d = I.Ie, e = 0, f = this.W) : (f = c, c = 0, d = I.Ie, e = 0) : 3 === g ? ("string" === typeof d ? (f = d, d = I.Ie) : f = this.W, e = 0) : 4 === g && (f = this.W) : 1 === g ? (c = 0, d = I.Ie, e = 0) : 2 === g && (d = I.Ie, e = 0);
		I.assert(a, I.k.UN);
		I.assert(0 <= c, I.k.VN);
		d = d == s ? I.Ie : d;
		this.scheduler.mj(a, this, c || 0, d, e || 0, !this.vh, f)
	},
	hba: function(a, c, d) {
		d === m && (d = this.W);
		this.mj(a, 0, 0, c, d)
	},
	Sg: function(a) {
		a && this.scheduler.Sg(a, this)
	},
	ZC: function() {
		this.scheduler.PL(this)
	},
	Xaa: function() {
		I.log(I.k.SN);
		this.mf()
	},
	mf: function() {
		this.scheduler.Qg(this);
		this.actionManager && this.actionManager.Qg(this);
		I.K.Qg(this)
	},
	baa: function() {
		I.log(I.k.NN);
		this.pause()
	},
	pause: function() {
		this.scheduler.zo(this);
		this.actionManager && this.actionManager.zo(this);
		I.K.zo(this)
	},
	nba: function(a) {
		if (a === m) return this.sy = u;
		this.ry = a;
		this.f.Z(I.i.L.ga);
		this.sy = p
	},
	NB: function() {
		this.f.NB()
	},
	X$: function() {
		return this.NB()
	},
	nk: function() {
		for (var a = this.sc(), c = this.ab; c !== s; c = c.parent) a = I.cr(a, c.sc());
		return a
	},
	d$: function() {
		return this.nk()
	},
	JJ: function() {
		return I.HI(this.nk())
	},
	Vda: function() {
		return this.JJ()
	},
	Jl: function(a) {
		return I.kf(a, this.JJ())
	},
	cJ: function(a) {
		a = a || I.d(0, 0);
		return I.kf(a, this.nk())
	},
	sU: function(a) {
		return I.$c(this.Jl(a), this.f.Cv())
	},
	x4: function(a) {
		a = a || I.d(0, 0);
		a = I.jj(a, this.f.Cv());
		return this.cJ(a)
	},
	F2: function(a) {
		a = this.cJ(a);
		return I.O.bJ(a)
	},
	y4: function(a) {
		return this.Jl(a.Yi())
	},
	z4: function(a) {
		a = I.O.aJ(a.Yi());
		return this.sU(a)
	},
	update: function(a) {
		this.zf && !this.zf.L8() &&
			this.zf.ia(a)
	},
	ke: function() {
		this.lg(this.P, I.i.Jf.ke)
	},
	yw: y(),
	he: y(),
	AV: function(a) {
		return this.zf ? this.zf.AV(a) : s
	},
	F3: function(a) {
		this.zf && this.zf.add(a)
	},
	Haa: function(a) {
		return this.zf ? this.zf.remove(a) : u
	},
	$X: function() {
		this.zf && this.zf.Aaa()
	},
	Nv: s,
	ia: function(a) {
		this.f.ia(a)
	},
	transform: function(a, c) {
		this.f.transform(a, c)
	},
	c$: function() {
		return this.sc()
	},
	sc: function(a) {
		var c = this.f.sc();
		if (a)
			for (var c = {
					a: c.a,
					b: c.b,
					c: c.c,
					I: c.I,
					ca: c.ca,
					da: c.da
				}, d = this.ab; d != s && d != a; d = d.getParent()) I.AT(c, d.sc());
		return c
	},
	o7: function(a) {
		return this.sc(a)
	},
	qr: function() {
		this.Pk || (this.Pk = new I.jp);
		return this.Pk
	},
	d7: D("Nv"),
	Tba: A("Nv"),
	co: function() {
		return this.f.co()
	},
	hm: function(a) {
		this.f.hm(a)
	},
	b7: E(0),
	Rba: y(),
	vV: function() {
		var a = I.rect(0, 0, this.S.width, this.S.height),
			c = this.nk(),
			a = I.uC(a, c);
		if (!this.P) return a;
		for (var d = this.P, e = 0; e < d.length; e++) {
			var f = d[e];
			f && f.$d && (f = f.nq(c)) && (a = I.pw(a, f))
		}
		return a
	},
	nq: function(a) {
		var c = I.rect(0, 0, this.S.width, this.S.height);
		a = a === m ? this.sc() : I.cr(this.sc(), a);
		c = I.uC(c,
			a);
		if (!this.P) return c;
		for (var d = this.P, e = 0; e < d.length; e++) {
			var f = d[e];
			f && f.$d && (f = f.nq(a)) && (c = I.pw(c, f))
		}
		return c
	},
	ao: D("Ei"),
	Fv: function() {
		return this.f.Fv()
	},
	Hd: function(a) {
		this.Ei = a;
		this.f.Z(I.i.L.lb)
	},
	UL: function(a) {
		Ja(this.f, a)
	},
	UW: D("Wc"),
	AY: function(a) {
		this.Wc !== a && (this.Wc = a, a = this.f, a.Dy = p, a.Z(I.i.L.lb))
	},
	Xi: function() {
		var a = this.ve;
		return I.color(a.r, a.g, a.b, a.a)
	},
	Ev: function() {
		return this.f.Ev()
	},
	ic: function(a) {
		var c = this.ve;
		c.r = a.r;
		c.g = a.g;
		c.b = a.b;
		this.f.Z(I.i.L.hb)
	},
	TL: function(a) {
		Ka(this.f,
			a)
	},
	TW: D("Vc"),
	zY: function(a) {
		this.Vc !== a && (this.Vc = a, a = this.f, a.Cy = p, a.Z(I.i.L.hb))
	},
	Ko: y(),
	Sl: E(u),
	PR: function() {
		this.f = I.Ga.BJ(this)
	},
	ed: function() {
		return I.ja === I.t.Tb ? new I.i.D(this) : new I.i.G(this)
	},
	I5: function(a, c) {
		I.assert(a && 0 != a.length, "Invalid name");
		I.assert(c != s, "Invalid callback function");
		var d = a.length,
			e = 0,
			f = d,
			g = u;
		2 < d && ("/" === a[0] && "/" === a[1]) && (g = p, e = 2, f -= 2);
		var h = u;
		3 < d && ("/" === a[d - 3] && "." === a[d - 2] && "." === a[d - 1]) && (h = p, f -= 3);
		d = a.substr(e, f);
		h && (d = "[[:alnum:]]+/" + d);
		g ? this.kJ(this,
			d, c) : this.wB(d, c)
	},
	kJ: function(a, c, d) {
		if (!a.wB(c, d))
			for (var e = a.P, f = e.length, g = 0; g < f && !(a = e[g], this.kJ(a, c, d)); g++);
	},
	wB: function(a, c) {
		var d = a.indexOf("/"),
			e = a,
			f = u; - 1 !== d && (e = a.substr(0, d), f = p);
		for (var d = u, g, h = this.P, k = h.length, n = 0; n < k; n++)
			if (g = h[n], -1 !== g.el.indexOf(e))
				if (f) {
					if (d = g.wB(a, c)) break
				} else if (c(g)) {
			d = p;
			break
		}
		return d
	}
});
I.i.create = function() {
	return new I.i
};
I.i.Jf = {
	U: 1,
	Qa: 2,
	od: 3,
	uk: 4,
	ke: 5,
	Og: 6,
	dg: 7
};
I.assert(I.ff(I.oa.Ix), I.k.Yg, "BaseNodesPropertyDefine.js");
I.oa.Ix();
delete I.oa.Ix;
I.CM = function(a, c) {
	this.ib = p;
	this.Lf = a;
	this.ng = c;
	this.Sa = function(a, c, f) {
		this.ng && this.ng.call(this.Lf, a, c, f)
	}
};
I.i.L = {
	ga: 1,
	Pda: 2,
	hb: 4,
	lb: 8,
	h4: 16,
	jf: 32,
	So: 64,
	Ce: 128,
	all: 255
};
I.i.Kb = function(a) {
	this.C = 1;
	this.o = a;
	this.ib = u;
	this.yf = new I.rO;
	this.xl = {
		a: 1,
		b: 0,
		c: 0,
		I: 1,
		ca: 0,
		da: 0
	};
	this.Si = {
		a: 1,
		b: 0,
		c: 0,
		I: 1,
		ca: 0,
		da: 0
	};
	this.yG = {
		a: 1,
		b: 0,
		c: 0,
		I: 1,
		ca: 0,
		da: 0
	};
	this.bc = 255;
	this.ac = I.color(255, 255, 255, 255);
	this.Dy = this.Cy = u;
	this.og = -1
};
I.i.Kb.prototype = {
	constructor: I.i.Kb,
	Cv: function() {
		return I.d(this.yf)
	},
	Ev: function() {
		var a = this.ac;
		return I.color(a.r, a.g, a.b, a.a)
	},
	Fv: D("bc"),
	NB: function() {
		this.C & I.i.L.ga && (this.yG = I.HI(this.sc()));
		return this.yG
	},
	wv: y(),
	Z: function(a) {
		0 === this.C && 0 !== a && I.Ga.EK(this);
		this.C |= a
	},
	jb: y(),
	updateStatus: function() {
		var a = I.i.L,
			c = this.C,
			d = c & a.hb,
			e = c & a.lb;
		d && Ka(this);
		e && Ja(this);
		(d || e) && this.jb();
		c & a.ga && (this.transform(La(this), p), this.C ^= this.C & a.ga);
		c & a.jf && (this.C ^= this.C & a.jf)
	},
	sc: function() {
		var a =
			this.o;
		if (a.TA && a.ab) {
			var c = a.ab.S;
			a.Gf.x = a.Aq.x * c.width;
			a.Gf.y = a.Aq.y * c.height;
			a.VG = u;
			this.C |= I.i.L.ga
		}
		if (this.C & I.i.L.ga) {
			c = this.xl;
			c.ca = a.Gf.x;
			c.da = a.Gf.y;
			var d = 1,
				e = 0,
				f = 0,
				g = 1;
			a.Hi && (g = 0.017453292519943295 * a.Hi, f = Math.sin(g), g = Math.cos(g));
			a.pn && (e = 0.017453292519943295 * a.pn, d = Math.cos(e), e = -Math.sin(e));
			c.a = d;
			c.b = e;
			c.c = f;
			c.I = g;
			var h = a.sa,
				k = a.Va,
				n = this.yf.x,
				r = this.yf.y,
				t = 1E-6 > h && -1E-6 < h ? 1E-6 : h,
				v = 1E-6 > k && -1E-6 < k ? 1E-6 : k;
			if (1 !== h || 1 !== k) d = c.a *= t, e = c.b *= t, f = c.c *= v, g = c.I *= v;
			if (a.Ki || a.Li) h = Math.tan(-a.Ki *
				Math.PI / 180), k = Math.tan(-a.Li * Math.PI / 180), Infinity === h && (h = 99999999), Infinity === k && (k = 99999999), t = r * h, v = n * k, c.a = d - f * k, c.b = e - g * k, c.c = f - d * h, c.I = g - e * h, c.ca += d * t + f * v, c.da += e * t + g * v;
			c.ca -= d * n + f * r;
			c.da -= e * n + g * r;
			a.ti && (c.ca += n, c.da += r);
			a.sy && (this.xl = I.cr(c, a.ry))
		}
		return this.xl
	},
	Wd: function(a) {
		var c = I.i.L,
			d = this.C,
			e = a ? a.o : s;
		e && (e.Vc && a.C & c.hb) && (d |= c.hb);
		e && (e.Wc && a.C & c.lb) && (d |= c.lb);
		a && a.C & c.ga && (d |= c.ga);
		var e = d & c.hb,
			f = d & c.lb;
		this.C = d;
		e && Ma(this);
		f && Pa(this);
		(e || f) && this.jb();
		(I.ja === I.t.zb || d & c.ga) &&
		this.transform(a, p);
		d & c.jf && (this.C ^= this.C & c.jf)
	}
};

function Ua(a) {
	var c = a.o,
		d = c.P,
		e, f = d.length;
	if (0 < f) {
		c.dg();
		for (c = 0; c < f; c++)
			if (e = d[c], 0 > e.cc) e.f.ia(a);
			else break;
		for (I.Ga.Pg(a); c < f; c++) d[c].f.ia(a)
	} else I.Ga.Pg(a);
	a.C = 0
}

function Pa(a) {
	var c, d = a.o;
	if (c === m) {
		var e = d.ab;
		c = 255;
		e && e.Wc && (c = e.Fv())
	}
	a.bc = d.Ei * c / 255
}

function Ma(a) {
	var c, d = a.o;
	a = a.ac;
	var e = d.ve;
	c === m && (c = (c = d.ab) && c.Vc ? c.Ev() : I.color.WHITE);
	a.r = 0 | e.r * c.r / 255;
	a.g = 0 | e.g * c.g / 255;
	a.b = 0 | e.b * c.b / 255
}

function Ja(a, c) {
	var d = a.o,
		e, f, g;
	if (a.Dy && !d.Wc) {
		a.bc = d.Ei;
		f = d.P;
		d = 0;
		for (e = f.length; d < e; d++)(g = f[d]) && g.f && Ja(g.f, 255);
		a.Dy = u
	} else if (c === m && (e = d.ab, c = 255, e && e.Wc && (c = e.Fv())), a.bc = d.Ei * c / 255, d.Wc) {
		f = d.P;
		d = 0;
		for (e = f.length; d < e; d++)
			if ((g = f[d]) && g.f) Ja(g.f, a.bc), g.f.jb()
	}
	a.C ^= a.C & I.i.L.lb
}

function Ka(a, c) {
	var d = a.o,
		e = a.ac,
		f = d.ve,
		g, h;
	if (a.Cy && !d.Vc) {
		e.r = f.r;
		e.g = f.g;
		e.b = f.b;
		e = new I.vd(255, 255, 255, 255);
		g = d.P;
		d = 0;
		for (f = g.length; d < f; d++)(h = g[d]) && h.f && Ka(h.f, e);
		a.Cy = u
	} else if (c === m && (c = (g = d.ab) && g.Vc ? g.Ev() : I.color.WHITE), e.r = 0 | f.r * c.r / 255, e.g = 0 | f.g * c.g / 255, e.b = 0 | f.b * c.b / 255, d.Vc) {
		g = d.P;
		d = 0;
		for (f = g.length; d < f; d++)
			if ((h = g[d]) && h.f) Ka(h.f, e), h.f.jb()
	}
	a.C ^= a.C & I.i.L.hb
}

function La(a) {
	return a.o && a.o.ab && a.o.ab.f ? a.o.ab.f : s
}

function Ia(a) {
	var c = a.yf,
		d = a.o.S,
		e = a.o.jg;
	c.x = d.width * e.x;
	c.y = d.height * e.y;
	a.Z(I.i.L.ga)
}
(function() {
	I.i.D = function(a) {
		I.i.Kb.call(this, a);
		this.$p = s;
		this.Ne = u
	};
	var a = I.i.D.prototype = Object.create(I.i.Kb.prototype);
	a.constructor = I.i.D;
	a.transform = function(a, d) {
		var e = this.sc(),
			f = this.Si;
		this.Ne = p;
		if (a) {
			var g = a.Si;
			f.a = e.a * g.a + e.b * g.c;
			f.b = e.a * g.b + e.b * g.I;
			f.c = e.c * g.a + e.I * g.c;
			f.I = e.c * g.b + e.I * g.I;
			f.ca = g.a * e.ca + g.c * e.da + g.ca;
			f.da = g.I * e.da + g.da + g.b * e.ca
		} else f.a = e.a, f.b = e.b, f.c = e.c, f.I = e.I, f.ca = e.ca, f.da = e.da;
		if (d && (e = this.o.P) && 0 !== e.length) {
			f = 0;
			for (g = e.length; f < g; f++) e[f].f.transform(this, d)
		}
	};
	a.ia = function(a) {
		if (this.o.$d) {
			if (a = a || La(this)) this.og = a.og + 1;
			this.Wd(a);
			Ua(this)
		}
	};
	a.Z = function(a, d) {
		I.i.Kb.prototype.Z.call(this, a, d);
		this.IH(d);
		this.$p && this.$p.Z(a, p)
	};
	a.IH = function() {
		this.Ne === u && (this.Ne = p)
	};
	a.Su = function(a) {
		if (this.$p !== a) {
			this.$p = a;
			for (var d = this.o.P, e = 0, f = d.length; e < f; e++) d[e].f.Su(a)
		}
	};
	a.wv = function() {
		this.$p = s;
		for (var a = this.o.P, d, e = 0, f = a.length; e < f; e++)(d = a[e]) && d.f && d.f.wv()
	};
	a.hm = y();
	a.co = E(s);
	I.i.D.oG = function(a) {
		return a ? a.src === I.SRC_ALPHA && a.Ra === I.ONE || a.src ===
			I.ONE && a.Ra === I.ONE ? "lighter" : a.src === I.ZERO && a.Ra === I.SRC_ALPHA ? "destination-in" : a.src === I.ZERO && a.Ra === I.ONE_MINUS_SRC_ALPHA ? "destination-out" : "source-over" : "source-over"
	}
})();
(function() {
	I.i.G = function(a) {
		I.i.Kb.call(this, a);
		a = new I.e.X;
		var d = a.l;
		d[2] = d[3] = d[6] = d[7] = d[8] = d[9] = d[11] = d[14] = 0;
		d[10] = d[15] = 1;
		this.cT = a;
		this.Ad = new I.e.X;
		this.Pk = this.Wa = s
	};
	var a = I.i.G.prototype = Object.create(I.i.Kb.prototype);
	a.constructor = I.i.G;
	a.jb = y();
	a.ia = function(a) {
		var d = this.o;
		d.$d && (a = a || La(this), d.ab && d.ab.f && (this.og = d.ab.f.og + 1), d = I.vb, d.stack.push(d.top), this.Wd(a), d.top = this.Ad, Ua(this), d.top = d.stack.pop())
	};
	a.transform = function(a, d) {
		var e = this.cT,
			f = this.Ad,
			g = this.o,
			h = (a = a || La(this)) ?
			a.Ad : I.vb.top,
			k = this.sc();
		this.C ^= this.C & I.i.L.ga;
		var n = e.l;
		n[0] = k.a;
		n[4] = k.c;
		n[12] = k.ca;
		n[1] = k.b;
		n[5] = k.I;
		n[13] = k.da;
		n[14] = g.jv;
		I.aw(f, h, e);
		g.Pk !== s && !(g.Nv !== s && g.Nv.F8()) && (h = this.yf.x, k = this.yf.y, 0 !== h || 0 !== k ? (I.WD || (h |= 0, k |= 0), n = I.e.X.Vn(h, k, 0, e), f.multiply(n), g.Pk.OG(f), n = I.e.X.Vn(-h, -k, 0, n), f.multiply(n), e.qd()) : g.Pk.OG(f));
		if (d && g.P && 0 !== g.P.length) {
			g = g.P;
			e = 0;
			for (f = g.length; e < f; e++) g[e].f.transform(this, d)
		}
	};
	a.hm = A("Wa");
	a.co = D("Wa")
})();
I.Ac = I.i.extend({
	textureAtlas: s,
	quadsToDraw: 0,
	gn: 0,
	EG: 0,
	Se: 0,
	Sd: 0,
	dc: u,
	aa: s,
	mu: u,
	$b: "AtlasNode",
	ba: s,
	z3: s,
	ctor: function(a, c, d, e) {
		I.i.prototype.ctor.call(this);
		this.aa = {
			src: I.bi,
			Ra: I.Ug
		};
		this.mu = u;
		e !== m && this.MW(a, c, d, e)
	},
	ed: function() {
		this.f = I.ja === I.t.Tb ? new I.Ac.D(this) : new I.Ac.G(this)
	},
	$o: function() {
		I.log(I.k.gM)
	},
	Xi: function() {
		return this.dc ? this.f.Tk : I.i.prototype.Xi.call(this)
	},
	Ko: function(a) {
		var c = this.color;
		this.dc = a;
		this.ic(c)
	},
	Sl: D("dc"),
	Dv: D("aa"),
	yk: function(a, c) {
		this.aa = c === m ? a : {
			src: a,
			Ra: c
		}
	},
	gs: A("textureAtlas"),
	pk: D("textureAtlas"),
	B7: D("quadsToDraw"),
	kca: A("quadsToDraw"),
	MW: function(a, c, d, e) {
		a || b(Error("cc.AtlasNode.initWithTileFile(): title should not be null"));
		a = I.wb.md(a);
		return this.Oa(a, c, d, e)
	},
	Oa: function(a, c, d, e) {
		return this.f.Oa(a, c, d, e)
	},
	ic: function(a) {
		this.f.ic(a)
	},
	Hd: function(a) {
		this.f.Hd(a)
	},
	hc: D("ba"),
	mb: A("ba"),
	p3: A("mu")
});
M = I.Ac.prototype;
I.p(M, "opacity", M.ao, M.Hd);
I.p(M, "color", M.Xi, M.ic);
I.p(M, "texture", M.hc, M.mb);
I.tf.prototype.apply(M);
I.Ac.create = function(a, c, d, e) {
	return new I.Ac(a, c, d, e)
};
(function() {
	I.Ac.D = function(a) {
		I.i.D.call(this, a);
		this.ib = u;
		this.Tk = I.color.WHITE;
		this.Ye = s
	};
	var a = I.Ac.D.prototype = Object.create(I.i.D.prototype);
	a.constructor = I.Ac.D;
	a.Oa = function(a, d, e, f) {
		var g = this.o;
		g.Se = d;
		g.Sd = e;
		g.dc = p;
		g.ba = a;
		if (!g.ba) return I.log(I.k.iD), u;
		this.Ye = a;
		this.By();
		g.quadsToDraw = f;
		return p
	};
	a.ic = function(a) {
		var d = this.o.ve;
		d.r === a.r && d.g === a.g && d.b === a.b || (this.Tk = a, this.Nm())
	};
	a.Nm = function() {
		var a = this.o.ba,
			d = this.Tk,
			e = a.Xa,
			e = I.rect(0, 0, e.width, e.height);
		a === this.Ye ? this.Ye = a.mq(d.r,
			d.g, d.b, e) : a.mq(d.r, d.g, d.b, e, this.Ye.Xa)
	};
	a.Hd = function(a) {
		I.i.prototype.Hd.call(this.o, a)
	};
	a.By = function() {
		var a = this.o,
			d = a.ba.Aa();
		a.EG = 0 | d.height / a.Sd;
		a.gn = 0 | d.width / a.Se
	}
})();
(function() {
	I.Ac.G = function(a) {
		I.i.G.call(this, a);
		this.ib = p;
		this.gb = s;
		this.Tk = I.color.WHITE;
		this.RA = this.Ot = s;
		this.Wa = I.cg.ad(I.Tx);
		this.RA = I.s.getUniformLocation(this.Wa.Iv(), "u_color")
	};
	var a = I.Ac.G.prototype = Object.create(I.i.G.prototype);
	a.constructor = I.Ac.G;
	a.zl = function() {
		var a = this.o;
		this.gb.texture.io() || (a.aa.src = I.SRC_ALPHA, a.aa.Ra = I.ONE_MINUS_SRC_ALPHA)
	};
	a.sI = function() {
		this.o.dc = this.gb.texture.io()
	};
	a.Sa = function(a) {
		a = a || I.s;
		var d = this.o;
		this.Wa.kc();
		this.Wa.Ji(this.Ad);
		I.Xf(d.aa.src,
			d.aa.Ra);
		this.RA && this.Ot && (a.uniform4fv(this.RA, this.Ot), this.gb.mJ(d.quadsToDraw))
	};
	a.Oa = function(a, d, e, f) {
		var g = this.o;
		g.Se = d;
		g.Sd = e;
		this.Tk = I.color.WHITE;
		g.dc = p;
		g.aa.src = I.bi;
		g.aa.Ra = I.Ug;
		d = g.ve;
		this.Ot = new Float32Array([d.r / 255, d.g / 255, d.b / 255, g.Ei / 255]);
		this.gb = new I.ji;
		this.gb.Oa(a, f);
		if (!this.gb) return I.log(I.k.iD), u;
		this.zl();
		this.sI();
		this.By();
		g.quadsToDraw = f;
		return p
	};
	a.ic = function(a) {
		var d = I.color(a.r, a.g, a.b),
			e = this.o;
		this.Tk = a;
		a = this.bc;
		e.dc && (d.r = d.r * a / 255, d.g = d.g * a / 255, d.b = d.b * a /
			255);
		I.i.prototype.ic.call(e, d)
	};
	a.Hd = function(a) {
		var d = this.o;
		I.i.prototype.Hd.call(d, a);
		d.dc && (d.color = this.Tk)
	};
	a.jb = function() {
		var a = this.ac;
		this.Ot = new Float32Array([a.r / 255, a.g / 255, a.b / 255, this.bc / 255])
	};
	a.hc = function() {
		return this.gb.texture
	};
	a.mb = function(a) {
		this.gb.texture = a;
		this.zl();
		this.sI()
	};
	a.By = function() {
		var a = this.o,
			d = this.gb.texture,
			e = d.Aa();
		a.mu && (e = d.S);
		a.EG = 0 | e.height / a.Sd;
		a.gn = 0 | e.width / a.Se
	}
})();
I.oa.jy = function() {
	I.la = I.Ta.extend({
		e3: p,
		vg: s,
		Bi: 0,
		Ai: 0,
		el: "",
		S: s,
		Mh: 0,
		Nh: 0,
		lu: u,
		bn: u,
		shaderProgram: s,
		V: u,
		Xa: s,
		Pf: s,
		url: s,
		ctor: function() {
			this.S = I.size(0, 0);
			this.vg = I.la.jJ
		},
		vC: function() {
			this.Pf && I.s.deleteTexture(this.Pf);
			I.T.he(this.url)
		},
		zJ: D("vg"),
		PB: D("Bi"),
		OB: D("Ai"),
		getName: D("Pf"),
		Aa: function() {
			return I.size(this.S.width / I.eb(), this.S.height / I.eb())
		},
		lh: function() {
			return this.S.width / I.eb()
		},
		$k: function() {
			return this.S.height / I.eb()
		},
		BV: D("S"),
		RV: D("Mh"),
		PY: A("Mh"),
		SV: D("Nh"),
		QY: A("Nh"),
		co: D("shaderProgram"),
		hm: A("shaderProgram"),
		io: D("lu"),
		vW: D("bn"),
		description: function() {
			return "\x3ccc.Texture2D | Name \x3d " + this.el + " | Dimensions \x3d " + this.Bi + " x " + this.Ai + " | Coordinates \x3d (" + this.Mh + ", " + this.Nh + ")\x3e"
		},
		bm: y(),
		iX: ca(),
		Rv: function(a, c, d, e, f) {
			var g = I.la,
				h = I.s,
				k = h.RGBA,
				n = h.UNSIGNED_BYTE,
				r = d * I.la.JE[c] / 8;
			0 === r % 8 ? h.pixelStorei(h.UNPACK_ALIGNMENT, 8) : 0 === r % 4 ? h.pixelStorei(h.UNPACK_ALIGNMENT, 4) : 0 === r % 2 ? h.pixelStorei(h.UNPACK_ALIGNMENT, 2) : h.pixelStorei(h.UNPACK_ALIGNMENT, 1);
			this.Pf =
				h.createTexture();
			I.Wf(this);
			h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR);
			h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.LINEAR);
			h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE);
			h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE);
			switch (c) {
				case g.Hk:
					k = h.RGBA;
					break;
				case g.Hp:
					k = h.RGB;
					break;
				case g.ct:
					n = h.UNSIGNED_SHORT_4_4_4_4;
					break;
				case g.bt:
					n = h.UNSIGNED_SHORT_5_5_5_1;
					break;
				case g.Gp:
					n = h.UNSIGNED_SHORT_5_6_5;
					break;
				case g.Cx:
					k = h.LUMINANCE_ALPHA;
					break;
				case g.Fp:
					k =
						h.ALPHA;
					break;
				case g.Dx:
					k = h.LUMINANCE;
					break;
				default:
					I.assert(0, I.k.wP)
			}
			h.texImage2D(h.TEXTURE_2D, 0, k, d, e, 0, k, n, a);
			this.S.width = f.width;
			this.S.height = f.height;
			this.Bi = d;
			this.Ai = e;
			this.vg = c;
			this.Mh = f.width / d;
			this.Nh = f.height / e;
			this.bn = this.lu = u;
			this.shaderProgram = I.cg.ad(I.jt);
			return this.V = p
		},
		KU: function(a) {
			var c = [0, this.Nh, this.Mh, this.Nh, 0, 0, this.Mh, 0],
				d = this.Bi * this.Mh,
				e = this.Ai * this.Nh;
			a = [a.x, a.y, 0, d + a.x, a.y, 0, a.x, e + a.y, 0, d + a.x, e + a.y, 0];
			I.Zc(I.xd | I.At);
			this.Wa.kc();
			this.Wa.yL();
			I.Wf(this);
			d = I.s;
			d.vertexAttribPointer(I.tb, 2, d.FLOAT, u, 0, a);
			d.vertexAttribPointer(I.Ke, 2, d.FLOAT, u, 0, c);
			d.drawArrays(d.TRIANGLE_STRIP, 0, 4)
		},
		MU: function(a) {
			var c = [0, this.Nh, this.Mh, this.Nh, 0, 0, this.Mh, 0];
			a = [a.x, a.y, a.x + a.width, a.y, a.x, a.y + a.height, a.x + a.width, a.y + a.height];
			I.Zc(I.xd | I.At);
			this.Wa.kc();
			this.Wa.yL();
			I.Wf(this);
			var d = I.s;
			d.vertexAttribPointer(I.tb, 2, d.FLOAT, u, 0, a);
			d.vertexAttribPointer(I.Ke, 2, d.FLOAT, u, 0, c);
			d.drawArrays(d.TRIANGLE_STRIP, 0, 4)
		},
		aK: function(a) {
			if (a == s) return I.log(I.k.zP), u;
			var c = a.pW(),
				d = a.IV(),
				e = I.Un.xq;
			if (c > e || d > e) return I.log(I.k.AP, c, d, e, e), u;
			this.V = p;
			return this.NR(a, c, d)
		},
		Fd: function(a) {
			a && (this.Pf = I.s.createTexture(), this.Xa = a, this.V = p)
		},
		KV: D("Xa"),
		ZW: D("V"),
		Jb: function(a) {
			a = a === m ? u : a;
			if (I.t.Gq) {
				if (!this.Xa) {
					var c = I.T.Be(this.url);
					if (!c) return;
					this.Fd(c)
				}
				this.Xa.width && this.Xa.height && (c = I.s, I.Wf(this), c.pixelStorei(c.UNPACK_ALIGNMENT, 4), a && c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, this.Xa), c.texParameteri(c.TEXTURE_2D,
					c.TEXTURE_MIN_FILTER, c.LINEAR), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.LINEAR), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE), this.shaderProgram = I.cg.ad(I.jt), I.Wf(s), a && c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), c = this.Xa.height, this.Bi = this.S.width = this.Xa.width, this.Ai = this.S.height = c, this.vg = I.la.Hk, this.Nh = this.Mh = 1, this.lu = a, this.bn = u, this.dispatchEvent("load"))
			}
		},
		Ih: function() {
			I.log(I.k.FP);
			return s
		},
		GW: function() {
			I.log(I.k.yP);
			return u
		},
		HW: function() {
			I.log(I.k.CP);
			return u
		},
		IW: function() {
			I.log(I.k.EP);
			return u
		},
		lZ: function(a, c, d, e) {
			var f = I.s;
			c !== m && (a = {
				oK: a,
				mK: c,
				ms: d,
				ns: e
			});
			I.assert(this.Bi === I.sm(this.Bi) && this.Ai === I.sm(this.Ai) || a.ms === f.CLAMP_TO_EDGE && a.ns === f.CLAMP_TO_EDGE, "WebGLRenderingContext.CLAMP_TO_EDGE should be used in NPOT textures");
			I.Wf(this);
			f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, a.oK);
			f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, a.mK);
			f.texParameteri(f.TEXTURE_2D,
				f.TEXTURE_WRAP_S, a.ms);
			f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, a.ns)
		},
		wY: function() {
			var a = I.s;
			I.Wf(this);
			this.bn ? a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR_MIPMAP_NEAREST) : a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
			a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR)
		},
		cL: function() {
			var a = I.s;
			I.Wf(this);
			this.bn ? a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST_MIPMAP_NEAREST) : a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST);
			a.texParameteri(a.TEXTURE_2D,
				a.TEXTURE_MAG_FILTER, a.NEAREST)
		},
		generateMipmap: function() {
			I.assert(this.Bi === I.sm(this.Bi) && this.Ai === I.sm(this.Ai), "Mimpap texture only works in POT textures");
			I.Wf(this);
			I.s.generateMipmap(I.s.TEXTURE_2D);
			this.bn = p
		},
		OZ: function() {
			return I.la.uQ[this.vg]
		},
		$T: function(a) {
			a = a || this.vg;
			var c = I.la.JE[a];
			if (c != s) return c;
			I.log(I.k.vP, a);
			return -1
		},
		NR: function(a, c, d) {
			var e = I.la,
				f = a.getData(),
				g = s,
				g = s,
				h = a.u8(),
				k = I.size(a.pW(), a.IV()),
				n = e.jJ,
				r = a.r6();
			h || (8 <= r ? n = e.Hp : (I.log(I.k.sP), n = e.Gp));
			var t = c * d;
			if (n ===
				e.Gp)
				if (h) {
					f = new Uint16Array(c * d);
					g = a.getData();
					for (r = 0; r < t; ++r) f[r] = (g[r] >> 0 & 255) >> 3 << 11 | (g[r] >> 8 & 255) >> 2 << 5 | (g[r] >> 16 & 255) >> 3 << 0
				} else {
					f = new Uint16Array(c * d);
					g = a.getData();
					for (r = 0; r < t; ++r) f[r] = (g[r] & 255) >> 3 << 11 | (g[r] & 255) >> 2 << 5 | (g[r] & 255) >> 3 << 0
				} else if (n === e.ct) {
				f = new Uint16Array(c * d);
				g = a.getData();
				for (r = 0; r < t; ++r) f[r] = (g[r] >> 0 & 255) >> 4 << 12 | (g[r] >> 8 & 255) >> 4 << 8 | (g[r] >> 16 & 255) >> 4 << 4 | (g[r] >> 24 & 255) >> 4 << 0
			} else if (n === e.bt) {
				f = new Uint16Array(c * d);
				g = a.getData();
				for (r = 0; r < t; ++r) f[r] = (g[r] >> 0 & 255) >> 3 << 11 |
					(g[r] >> 8 & 255) >> 3 << 6 | (g[r] >> 16 & 255) >> 3 << 1 | (g[r] >> 24 & 255) >> 7 << 0
			} else if (n === e.Fp) {
				f = new Uint8Array(c * d);
				g = a.getData();
				for (r = 0; r < t; ++r) f[r] = g >> 24 & 255
			}
			if (h && n === e.Hp) {
				g = a.getData();
				f = new Uint8Array(3 * c * d);
				for (r = 0; r < t; ++r) f[3 * r] = g >> 0 & 255, f[3 * r + 1] = g >> 8 & 255, f[3 * r + 2] = g >> 16 & 255
			}
			this.Rv(f, n, c, d, k);
			a.getData();
			this.lu = a.R8();
			return p
		},
		ar: function(a, c) {
			this.addEventListener("load", a, c)
		},
		eY: function(a) {
			this.removeEventListener("load", a)
		}
	})
};
I.oa.ky = function() {
	var a = I.ji.prototype;
	a.SH = function() {
		var a = I.s;
		this.Me[0] = a.createBuffer();
		this.Me[1] = a.createBuffer();
		this.jl = a.createBuffer();
		this.wu()
	};
	a.wu = function() {
		var a = I.s;
		a.bindBuffer(a.ARRAY_BUFFER, this.jl);
		a.bufferData(a.ARRAY_BUFFER, this.ue, a.DYNAMIC_DRAW);
		a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.Me[1]);
		a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.Re, a.STATIC_DRAW)
	};
	a.mJ = function(a) {
		var d;
		d = 0;
		if (!(0 === a || !this.texture || !this.texture.V)) {
			var e = I.s;
			I.Wf(this.texture);
			I.Zc(I.zt);
			e.bindBuffer(e.ARRAY_BUFFER,
				this.jl);
			this.dirty && (e.bufferData(e.ARRAY_BUFFER, this.ue, e.DYNAMIC_DRAW), this.dirty = u);
			e.vertexAttribPointer(I.tb, 3, e.FLOAT, u, 24, 0);
			e.vertexAttribPointer(I.Je, 4, e.UNSIGNED_BYTE, p, 24, 12);
			e.vertexAttribPointer(I.Ke, 2, e.FLOAT, u, 24, 16);
			e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.Me[1]);
			I.YD ? e.drawElements(e.TRIANGLE_STRIP, 6 * a, e.UNSIGNED_SHORT, 6 * d * this.Re.BYTES_PER_ELEMENT) : e.drawElements(e.TRIANGLES, 6 * a, e.UNSIGNED_SHORT, 6 * d * this.Re.BYTES_PER_ELEMENT);
			I.ef++
		}
	}
};
I.oa.ly = function() {
	var a = I.wb;
	a.Jb = function(a) {
		var d = this.fc,
			e;
		I.t.Gq || (d = this.vq);
		e = d[a];
		e || (e = d[a] = new I.la, e.url = a);
		".png" === I.path.Wi(a) ? e.Jb(p) : e.Jb()
	};
	a.md = function(a, d, e) {
		I.assert(a, I.k.uP);
		var f = this.fc;
		I.t.Gq || (f = this.vq);
		var g = f[a] || f[I.T.ez(a)];
		if (g) return g.V ? d && d.call(e, g) : g.addEventListener("load", function() {
			d && d.call(e, g)
		}, e), g;
		g = f[a] = new I.la;
		g.url = a;
		(I.T.$E(a) ? I.T.load : I.T.Vl).call(I.T, a, function(g) {
			if (g) return d && d.call(e, g);
			I.wb.Jb(a);
			g = f[a];
			d && d.call(e, g)
		});
		return g
	};
	a.vT = a.md;
	a = s
};
I.oa.Lx = function() {
	var a = I.la;
	a.E1 = function(a) {
		I.nO = a
	};
	a.Hk = 2;
	a.Hp = 3;
	a.Gp = 4;
	a.Fp = 5;
	a.Dx = 6;
	a.Cx = 7;
	a.ct = 8;
	a.bt = 7;
	a.ND = 9;
	a.MD = 10;
	a.fO = a.Hk;
	a.jJ = a.fO;
	var c = I.la.uQ = {};
	c[a.Hk] = "RGBA8888";
	c[a.Hp] = "RGB888";
	c[a.Gp] = "RGB565";
	c[a.Fp] = "A8";
	c[a.Dx] = "I8";
	c[a.Cx] = "AI88";
	c[a.ct] = "RGBA4444";
	c[a.bt] = "RGB5A1";
	c[a.ND] = "PVRTC4";
	c[a.MD] = "PVRTC2";
	c = I.la.JE = {};
	c[a.Hk] = 32;
	c[a.Hp] = 24;
	c[a.Gp] = 16;
	c[a.Fp] = 8;
	c[a.Dx] = 8;
	c[a.Cx] = 16;
	c[a.ct] = 16;
	c[a.bt] = 16;
	c[a.ND] = 4;
	c[a.MD] = 3;
	a = I.la.prototype;
	I.p(a, "name", a.getName);
	I.p(a, "pixelFormat",
		a.zJ);
	I.p(a, "pixelsWidth", a.PB);
	I.p(a, "pixelsHeight", a.OB);
	I.p(a, "width", a.lh);
	I.p(a, "height", a.$k)
};
I.oa.Mx = function() {
	var a = I.ji.prototype;
	I.p(a, "totalQuads", a.IJ);
	I.p(a, "capacity", a.uJ);
	I.p(a, "quads", a.AJ, a.tL)
};
I.u_ = 51;
I.x_ = 19;
I.z_ = 18;
I.w_ = 50;
I.t_ = 34;
I.r_ = 35;
I.s_ = 33;
I.v_ = 49;
I.y_ = 17;
I.nO = u;
I.t.addEventListener(I.t.Wg, function() {
	if (I.ja === I.t.Tb) {
		var a = {
			S: s,
			V: u,
			Xa: s,
			url: s,
			Hu: s,
			ctor: function() {
				this.S = I.size(0, 0);
				this.V = u;
				this.Xa = s;
				this.Hu = ""
			},
			PB: function() {
				return this.S.width
			},
			OB: function() {
				return this.S.height
			},
			Aa: function() {
				var a = I.eb();
				return I.size(this.S.width / a, this.S.height / a)
			},
			lh: function() {
				return this.S.width / I.eb()
			},
			$k: function() {
				return this.S.height / I.eb()
			},
			BV: D("S"),
			Fd: function(a) {
				a && (this.Xa = a, this.S.width = a.width, this.S.height = a.height, this.V = p)
			},
			KV: D("Xa"),
			ZW: D("V"),
			Jb: function() {
				if (!this.V) {
					if (!this.Xa) {
						var a =
							I.T.Be(this.url);
						if (!a) return;
						this.Fd(a)
					}
					a = this.Xa;
					this.S.width = a.width;
					this.S.height = a.height;
					this.dispatchEvent("load")
				}
			},
			description: function() {
				return "\x3ccc.Texture2D | width \x3d " + this.S.width + " height " + this.S.height + "\x3e"
			},
			Rv: E(u),
			aK: E(u),
			Ih: E(u),
			vC: function() {
				I.T.he(this.url)
			},
			getName: E(s),
			RV: E(1),
			PY: y(),
			SV: E(1),
			QY: y(),
			zJ: E(s),
			co: E(s),
			hm: y(),
			io: E(u),
			vW: E(u),
			bm: y(),
			iX: ca(),
			KU: y(),
			MU: y(),
			GW: function() {
				I.log(I.k.xP);
				return u
			},
			HW: function() {
				I.log(I.k.BP);
				return u
			},
			IW: function() {
				I.log(I.k.DP);
				return u
			},
			lZ: function(a, d, e, f) {
				d !== m && (a = {
					oK: a,
					mK: d,
					ms: e,
					ns: f
				});
				this.Hu = a.ms === I.REPEAT && a.ns === I.REPEAT ? "repeat" : a.ms === I.REPEAT ? "repeat-x" : a.ns === I.REPEAT ? "repeat-y" : ""
			},
			wY: y(),
			cL: y(),
			generateMipmap: y(),
			OZ: E(""),
			$T: E(-1),
			ar: function(a, d) {
				this.addEventListener("load", a, d)
			},
			eY: function(a) {
				this.removeEventListener("load", a)
			},
			mq: y(),
			bR: function() {
				if (this.UI) return this.UI;
				var a = [document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas")],
					d = this.Xa,
					e = d.width,
					f = d.height;
				a[0].width = e;
				a[0].height = f;
				a[1].width = e;
				a[1].height = f;
				a[2].width = e;
				a[2].height = f;
				a[3].width = e;
				a[3].height = f;
				var g = a[3].getContext("2d");
				g.drawImage(d, 0, 0);
				for (var g = g.getImageData(0, 0, e, f).data, h, k = 0; 4 > k; k++) {
					h = a[k].getContext("2d");
					for (var n = h.getImageData(0, 0, e, f), r = n.data, t = 0; t < g.length; t += 4) r[t] = 0 === k ? g[t] : 0, r[t + 1] = 1 === k ? g[t + 1] : 0, r[t + 2] = 2 === k ? g[t + 2] : 0, r[t + 3] = g[t + 3];
					h.putImageData(n, 0, 0)
				}
				d.onload = s;
				return this.UI = a
			},
			vz: s,
			xy: s,
			zz: u,
			y3: function(a) {
				this.V && this.zz !==
					a && ((this.zz = a) ? (this.xy = this.Xa, this.vz || (this.vz = I.la.aR(this.Xa)), this.Xa = this.vz) : this.xy !== s && (this.Xa = this.xy))
			}
		};
		a.mq = I.A.XS ? function(a, d, e, f, g) {
			var h = u;
			g ? h = p : g = document.createElement("canvas");
			var k = this.Xa;
			f || (f = I.rect(0, 0, k.width, k.height));
			g.width = f.width;
			g.height = f.height;
			var n = g.getContext("2d");
			n.globalCompositeOperation = "source-over";
			n.fillStyle = "rgb(" + (a | 0) + "," + (d | 0) + "," + (e | 0) + ")";
			n.fillRect(0, 0, f.width, f.height);
			n.globalCompositeOperation = "multiply";
			n.drawImage(k, f.x, f.y, f.width,
				f.height, 0, 0, f.width, f.height);
			n.globalCompositeOperation = "destination-atop";
			n.drawImage(k, f.x, f.y, f.width, f.height, 0, 0, f.width, f.height);
			if (h) return g;
			a = new I.la;
			a.Fd(g);
			a.Jb();
			return a
		} : function(a, d, e, f, g) {
			var h = u;
			g ? h = p : g = document.createElement("canvas");
			var k = this.Xa;
			f || (f = I.rect(0, 0, k.width, k.height));
			var n, r, k = f.x;
			n = f.y;
			r = f.width;
			f = f.height;
			if (r && f) {
				g.width = r;
				g.height = f;
				var t = g.getContext("2d"),
					v = I.wb.iW(this);
				t.globalCompositeOperation = "lighter";
				t.drawImage(v[3], k, n, r, f, 0, 0, r, f);
				0 < a && (t.globalAlpha =
					a / 255, t.drawImage(v[0], k, n, r, f, 0, 0, r, f));
				0 < d && (t.globalAlpha = d / 255, t.drawImage(v[1], k, n, r, f, 0, 0, r, f));
				0 < e && (t.globalAlpha = e / 255, t.drawImage(v[2], k, n, r, f, 0, 0, r, f));
				if (h) return g;
				a = new I.la;
				a.Fd(g);
				a.Jb();
				return a
			}
		};
		I.la = I.Ta.extend(a);
		I.la.aR = function(a) {
			var d, e;
			if (a === s) return s;
			e = e || document.createElement("canvas");
			d = d || I.rect(0, 0, a.width, a.height);
			e.width = d.width;
			e.height = d.height;
			var f = e.getContext("2d");
			f.drawImage(a, d.x, d.y, d.width, d.height, 0, 0, d.width, d.height);
			a = f.getImageData(0, 0, d.width,
				d.height);
			d = a.data;
			for (var g = 0, h = d.length; g < h; g += 4) d[g] = d[g + 1] = d[g + 2] = 0.34 * d[g] + 0.5 * d[g + 1] + 0.16 * d[g + 2];
			f.putImageData(a, 0, 0);
			return e
		}
	} else I.ja === I.t.zb && (I.assert(I.ff(I.oa.jy), I.k.Yg, "TexturesWebGL.js"), I.oa.jy(), delete I.oa.jy);
	I.tf.prototype.apply(I.la.prototype);
	I.assert(I.ff(I.oa.Lx), I.k.Yg, "TexturesPropertyDefine.js");
	I.oa.Lx();
	delete I.oa.Lx
});
I.wb = {
	fc: {},
	Qq: {},
	bT: 0 | 1E3 * Math.random(),
	vq: {},
	QR: function() {
		var a, c = this.vq,
			d = this.fc;
		for (a in c) {
			var e = c[a];
			e.Jb();
			d[a] = e
		}
		this.vq = {}
	},
	J3: function() {
		I.log(I.k.TZ)
	},
	G3: function() {
		I.log(I.k.RZ)
	},
	description: function() {
		return "\x3cTextureCache | Number of textures \x3d " + this.fc.length + "\x3e"
	},
	pda: function(a) {
		I.log(I.k.YZ);
		return this.ur(a)
	},
	ur: function(a) {
		return this.fc[a] || this.fc[I.T.ez(a)]
	},
	LV: function(a) {
		for (var c in this.fc)
			if (this.fc[c] === a) return c;
		return s
	},
	$Q: function(a) {
		return "_textureKey_" +
			a
	},
	iW: function(a) {
		var c = a.Xa,
			d = this.LV(c);
		d || (d = c instanceof HTMLImageElement ? c.src : this.$Q(a.W));
		this.Qq[d] || (this.Qq[d] = a.bR());
		return this.Qq[d]
	},
	I3: function() {
		I.log(I.k.SZ)
	},
	Eaa: function() {
		var a = this.fc,
			c;
		for (c in a) a[c] && a[c].vC();
		this.fc = {}
	},
	Oaa: function(a) {
		if (a) {
			var c = this.fc,
				d;
			for (d in c) c[d] === a && (c[d].vC(), delete c[d])
		}
	},
	Paa: function(a) {
		a != s && this.fc[a] && delete this.fc[a]
	},
	i4: function(a, c) {
		if (c instanceof I.la) this.fc[a] = c;
		else {
			var d = new I.la;
			d.Fd(c);
			d.Jb();
			this.fc[a] = d
		}
	},
	O3: function(a,
		c) {
		I.assert(a, I.k.VZ);
		if (c && this.fc[c]) return this.fc[c];
		var d = new I.la;
		d.aK(a);
		c != s ? this.fc[c] = d : I.log(I.k.UZ);
		return d
	},
	b5: function() {
		var a = 0,
			c = 0,
			d = this.fc,
			e;
		for (e in d) {
			var f = d[e];
			a++;
			f.Xa instanceof HTMLImageElement ? I.log(I.k.WZ, e, f.Xa.src, f.pixelsWidth, f.pixelsHeight) : I.log(I.k.LL, e, f.pixelsWidth, f.pixelsHeight);
			c += 4 * f.pixelsWidth * f.pixelsHeight
		}
		d = this.Qq;
		for (e in d) {
			var f = d[e],
				g;
			for (g in f) {
				var h = f[g];
				a++;
				I.log(I.k.LL, e, h.width, h.height);
				c += 4 * h.width * h.height
			}
		}
		I.log(I.k.XZ, a, c / 1024, (c / 1048576).toFixed(2))
	},
	Pm: function() {
		this.fc = {};
		this.Qq = {};
		this.bT = 0 | 1E3 * Math.random();
		this.vq = {}
	}
};
I.t.addEventListener(I.t.Wg, function() {
	if (I.ja === I.t.Tb) {
		var a = I.wb;
		a.Jb = function(a) {
			var d = this.fc,
				e = d[a];
			e || (e = d[a] = new I.la, e.url = a);
			e.Jb()
		};
		a.md = function(a, d, e) {
			I.assert(a, I.k.tP);
			var f = this.fc,
				g = f[a] || f[I.T.ez(a)];
			if (g) return g.V ? d && d.call(e, g) : g.addEventListener("load", function() {
				d && d.call(e, g)
			}, e), g;
			g = f[a] = new I.la;
			g.url = a;
			(I.T.$E(a) ? I.T.load : I.T.Vl).call(I.T, a, function(g) {
				if (g) return d && d.call(e, g);
				I.wb.Jb(a);
				g = f[a];
				d && d.call(e, g)
			});
			return g
		};
		a.vT = a.md;
		a = s
	} else I.ja === I.t.zb && (I.assert(I.ff(I.oa.ly),
		I.k.Yg, "TexturesWebGL.js"), I.oa.ly(), delete I.oa.ly)
});
I.ji = I.Ta.extend({
	dirty: u,
	texture: s,
	Re: s,
	Me: s,
	Qd: 0,
	Ud: s,
	ue: s,
	jl: s,
	Ue: s,
	ctor: function(a, c) {
		this.Me = [];
		I.ge(a) ? this.Sv(a, c) : a instanceof I.la && this.Oa(a, c)
	},
	IJ: D("za"),
	uJ: D("Qd"),
	hc: D("texture"),
	mb: A("texture"),
	Gw: A("dirty"),
	zr: D("dirty"),
	AJ: D("Ud"),
	tL: A("Ud"),
	G2: function(a, c) {
		if (a)
			for (var d = 0; d < a.length; d++) this.Uu(a[d], c + d)
	},
	Uu: function(a, c) {
		var d = this.Ud;
		d[c] ? (d[c].bl = a.bl, d[c].br = a.br, d[c].tl = a.tl, d[c].tr = a.tr) : d[c] = new I.Lb(a.tl, a.bl, a.tr, a.br, this.ue, c * I.Lb.BYTES_PER_ELEMENT)
	},
	description: function() {
		return "\x3ccc.TextureAtlas | totalQuads \x3d" +
			this.za + "\x3e"
	},
	QH: function() {
		if (0 !== this.Qd)
			for (var a = this.Re, c = this.Qd, d = 0; d < c; d++) I.YD ? (a[6 * d + 0] = 4 * d + 0, a[6 * d + 1] = 4 * d + 0, a[6 * d + 2] = 4 * d + 2, a[6 * d + 3] = 4 * d + 1, a[6 * d + 4] = 4 * d + 3, a[6 * d + 5] = 4 * d + 3) : (a[6 * d + 0] = 4 * d + 0, a[6 * d + 1] = 4 * d + 1, a[6 * d + 2] = 4 * d + 2, a[6 * d + 3] = 4 * d + 3, a[6 * d + 4] = 4 * d + 2, a[6 * d + 5] = 4 * d + 1)
	},
	SH: function() {
		var a = I.s;
		this.Me[0] = a.createBuffer();
		this.Me[1] = a.createBuffer();
		this.jl = a.createBuffer();
		this.wu()
	},
	wu: function() {
		var a = I.s;
		a.bindBuffer(a.ARRAY_BUFFER, this.jl);
		a.bufferData(a.ARRAY_BUFFER, this.ue, a.DYNAMIC_DRAW);
		a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.Me[1]);
		a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.Re, a.STATIC_DRAW)
	},
	Sv: function(a, c) {
		var d = I.wb.md(a);
		if (d) return this.Oa(d, c);
		I.log(I.k.GP, a);
		return u
	},
	Oa: function(a, c) {
		I.assert(a, I.k.HP);
		this.Qd = c |= 0;
		this.za = 0;
		this.texture = a;
		this.Ud = [];
		this.Re = new Uint16Array(6 * c);
		var d = I.Lb.BYTES_PER_ELEMENT;
		this.ue = new ArrayBuffer(d * c);
		this.Ue = new Uint8Array(this.ue);
		if ((!this.Ud || !this.Re) && 0 < c) return u;
		for (var e = this.Ud, f = 0; f < c; f++) e[f] = new I.Lb(s, s, s, s, this.ue, f * d);
		this.QH();
		this.SH();
		return this.dirty = p
	},
	Ww: function(a, c) {
		I.assert(a, I.k.RP);
		I.assert(0 <= c && c < this.Qd, I.k.SP);
		this.za = Math.max(c + 1, this.za);
		this.Uu(a, c);
		this.dirty = p
	},
	oo: function(a, c) {
		I.assert(c < this.Qd, I.k.KP);
		this.za++;
		if (this.za > this.Qd) I.log(I.k.dE);
		else {
			var d = I.Lb.BYTES_PER_ELEMENT,
				e = c * d,
				f = (this.za - 1 - c) * d;
			this.Ud[this.za - 1] = new I.Lb(s, s, s, s, this.ue, (this.za - 1) * d);
			this.Ue.set(this.Ue.subarray(e, e + f), e + d);
			this.Uu(a, c);
			this.dirty = p
		}
	},
	C8: function(a, c, d) {
		d = d || a.length;
		I.assert(c + d <= this.Qd, I.k.LP);
		var e = I.Lb.BYTES_PER_ELEMENT;
		this.za += d;
		if (this.za > this.Qd) I.log(I.k.dE);
		else {
			var f = c * e,
				g = (this.za - 1 - c - d) * e,
				h = this.za - 1 - d,
				k;
			for (k = 0; k < d; k++) this.Ud[h + k] = new I.Lb(s, s, s, s, this.ue, (this.za - 1) * e);
			this.Ue.set(this.Ue.subarray(f, f + g), f + e * d);
			for (k = 0; k < d; k++) this.Uu(a[k], c + k);
			this.dirty = p
		}
	},
	A8: function(a, c) {
		if (a !== c) {
			I.assert(0 <= c || c < this.za, I.k.IP);
			I.assert(0 <= a || a < this.za, I.k.JP);
			var d = I.Lb.BYTES_PER_ELEMENT,
				e = this.Ue,
				f = e.subarray(a * d, d),
				g;
			a > c ? (g = c * d, e.set(e.subarray(g, g + (a - c) * d), g + d), e.set(f, g)) : (g = (a + 1) * d, e.set(e.subarray(g, g + (c -
				a) * d), g - d), e.set(f, c * d));
			this.dirty = p
		}
	},
	sw: function(a) {
		I.assert(a < this.za, I.k.PP);
		var c = I.Lb.BYTES_PER_ELEMENT;
		this.za--;
		this.Ud.length = this.za;
		if (a !== this.za) {
			var d = (a + 1) * c;
			this.Ue.set(this.Ue.subarray(d, d + (this.za - a) * c), d - c)
		}
		this.dirty = p
	},
	Kaa: function(a, c) {
		I.assert(a + c <= this.za, I.k.QP);
		this.za -= c;
		if (a !== this.za) {
			var d = I.Lb.BYTES_PER_ELEMENT,
				e = (a + c) * d;
			this.Ue.set(this.Ue.subarray(e, e + (this.za - a) * d), a * d)
		}
		this.dirty = p
	},
	rw: function() {
		this.za = this.Ud.length = 0
	},
	pl: A("dirty"),
	SK: function(a) {
		if (a === this.Qd) return p;
		var c = I.Lb.BYTES_PER_ELEMENT,
			d = this.Qd;
		this.za = Math.min(this.za, a);
		var e = this.Qd = 0 | a,
			f = this.za;
		if (this.Ud === s) {
			this.Ud = [];
			this.ue = new ArrayBuffer(c * e);
			this.Ue = new Uint8Array(this.ue);
			for (a = 0; a < e; a++) this.Ud = new I.Lb(s, s, s, s, this.ue, a * c)
		} else {
			var g, h, k = this.Ud;
			if (e > d) {
				g = [];
				h = new ArrayBuffer(c * e);
				for (a = 0; a < f; a++) g[a] = new I.Lb(k[a].tl, k[a].bl, k[a].tr, k[a].br, h, a * c);
				for (; a < e; a++) g[a] = new I.Lb(s, s, s, s, h, a * c)
			} else {
				f = Math.max(f, e);
				g = [];
				h = new ArrayBuffer(c * e);
				for (a = 0; a < f; a++) g[a] = new I.Lb(k[a].tl, k[a].bl,
					k[a].tr, k[a].br, h, a * c)
			}
			this.Ue = new Uint8Array(h);
			this.Ud = g;
			this.ue = h
		}
		this.Re === s ? this.Re = new Uint16Array(6 * e) : e > d ? (c = new Uint16Array(6 * e), c.set(this.Re, 0), this.Re = c) : this.Re = this.Re.subarray(0, 6 * e);
		this.QH();
		this.wu();
		return this.dirty = p
	},
	AW: function(a) {
		this.za += a
	},
	T9: function(a, c, d) {
		if (d === m) {
			if (d = c, c = this.za - a, I.assert(d + (this.za - a) <= this.Qd, I.k.MP), 0 === c) return
		} else if (I.assert(d + c <= this.za, I.k.NP), I.assert(a < this.za, I.k.OP), a === d) return;
		var e = I.Lb.BYTES_PER_ELEMENT,
			f = a * e,
			g = c * e,
			h = this.Ue,
			k = h.subarray(f,
				f + g),
			n = d * e;
		d < a ? (c = d * e, h.set(h.subarray(c, c + (a - d) * e), c + g)) : (c = (a + c) * e, h.set(h.subarray(c, c + (d - a) * e), f));
		h.set(k, n);
		this.dirty = p
	},
	e6: function(a, c) {
		for (var d = c * I.Lb.BYTES_PER_ELEMENT, e = new Uint8Array(this.ue, a * I.Lb.BYTES_PER_ELEMENT, d), f = 0; f < d; f++) e[f] = 0
	},
	QU: function() {
		this.mJ(this.za)
	},
	h3: function() {
		var a = I.s;
		this.Me && (this.Me[0] && a.deleteBuffer(this.Me[0]), this.Me[1] && a.deleteBuffer(this.Me[1]));
		this.jl && a.deleteBuffer(this.jl)
	}
});
M = I.ji.prototype;
I.p(M, "totalQuads", M.IJ);
I.p(M, "capacity", M.uJ);
I.p(M, "quads", M.AJ, M.tL);
I.ji.create = function(a, c) {
	return new I.ji(a, c)
};
I.ji.vB = I.ji.create;
I.t.addEventListener(I.t.Wg, function() {
	I.ja === I.t.zb && (I.assert(I.ff(I.oa.ky), I.k.Yg, "TexturesWebGL.js"), I.oa.ky(), delete I.oa.ky)
});
I.assert(I.ff(I.oa.Mx), I.k.Yg, "TexturesPropertyDefine.js");
I.oa.Mx();
delete I.oa.Mx;
I.hi = I.i.extend({
	$b: "Scene",
	ctor: function() {
		I.i.prototype.ctor.call(this);
		this.ti = p;
		this.Vh(0.5, 0.5);
		this.Gd(I.O.kb())
	}
});
I.hi.create = function() {
	return new I.hi
};
I.ED = I.hi.extend({
	tg: s,
	mh: s,
	$b: "LoaderScene",
	Tf: s,
	target: s,
	pa: function() {
		var a = this,
			c = 200,
			d = a.It = new I.Ea(I.color(32, 32, 32, 255));
		a.N(d, 0);
		var e = 24,
			f = -c / 2 + 100;
		I.Hz && (I.T.Vl(I.Hz, {
			aj: u
		}, function(d, e) {
			c = e.height;
			a.yz(e, I.Q.Qn)
		}), e = 14, f = -c / 2 - 10);
		e = a.mh = new I.J("Loading... 0%", "Arial", e);
		e.Ia(I.jj(I.Q.Qn, I.d(0, f)));
		e.ic(I.color(180, 180, 180));
		d.N(this.mh, 10);
		return p
	},
	yz: function(a, c) {
		var d = this.aT = new I.la;
		d.Fd(a);
		d.Jb();
		d = this.PG = new I.F(d);
		d.Qc(I.eb());
		d.x = c.x;
		d.y = c.y;
		this.It.N(d, 10)
	},
	U: function() {
		I.i.prototype.U.call(this);
		this.mj(this.Lq, 0.3)
	},
	Qa: function() {
		I.i.prototype.Qa.call(this);
		this.mh.rd("Loading... 0%")
	},
	aC: function(a, c, d) {
		I.ge(a) && (a = [a]);
		this.zC = a || [];
		this.Tf = c;
		this.target = d
	},
	Lq: function() {
		var a = this;
		a.Sg(a.Lq);
		I.T.load(a.zC, function(c, d, e) {
			c = Math.min(100 * (e / d) | 0, 100);
			a.mh.rd("Loading... " + c + "%")
		}, function() {
			a.Tf && a.Tf.call(a.target)
		})
	},
	kT: function() {
		this.f.Z(I.i.L.ga);
		this.It.f.Z(I.i.L.ga);
		this.mh.f.Z(I.i.L.ga);
		this.PG.f.Z(I.i.L.ga)
	}
});
I.ED.BK = function(a, c, d) {
	var e = I;
	e.uo || (e.uo = new I.ED, e.uo.pa(), I.K.Fl(I.Ca.As, function() {
		e.uo.kT()
	}));
	e.uo.aC(a, c, d);
	I.O.lj(e.uo);
	return e.uo
};
I.mc = I.i.extend({
	$b: "Layer",
	ctor: function() {
		var a = I.i.prototype;
		a.ctor.call(this);
		this.ti = p;
		a.Vh.call(this, 0.5, 0.5);
		a.Gd.call(this, I.xb)
	},
	pa: function() {
		this.ti = p;
		this.Vh(0.5, 0.5);
		this.Gd(I.xb);
		this.Wc = this.Vc = u;
		return p
	},
	hB: function() {
		this.f.hB()
	},
	js: function() {
		this.f.js()
	},
	SW: function() {
		return this.f.vi
	},
	N: function(a, c, d) {
		I.i.prototype.N.call(this, a, c, d);
		this.f.VE(a)
	},
	ed: function() {
		return I.ja === I.t.Tb ? new I.mc.D(this) : new I.mc.G(this)
	}
});
I.mc.create = function() {
	return new I.mc
};
I.Ea = I.mc.extend({
	aa: s,
	$b: "LayerColor",
	Dv: D("aa"),
	o4: function(a, c) {
		this.width = a;
		this.height = c
	},
	n4: A("width"),
	m4: A("height"),
	Ko: y(),
	Sl: E(u),
	ctor: function(a, c, d) {
		I.mc.prototype.ctor.call(this);
		this.aa = new I.Zb(I.SRC_ALPHA, I.ONE_MINUS_SRC_ALPHA);
		I.Ea.prototype.pa.call(this, a, c, d)
	},
	pa: function(a, c, d) {
		I.ja !== I.t.Tb && (this.shaderProgram = I.cg.ad(I.it));
		var e = I.O.kb();
		a = a || I.color(0, 0, 0, 255);
		c = c === m ? e.width : c;
		d = d === m ? e.height : d;
		e = this.ve;
		e.r = a.r;
		e.g = a.g;
		e.b = a.b;
		this.Ei = a.a;
		this.f.Z(I.i.L.hb | I.i.L.lb);
		I.Ea.prototype.Gd.call(this,
			c, d);
		return p
	},
	yk: function(a, c) {
		var d = this.aa;
		c === m ? (d.src = a.src, d.Ra = a.Ra) : (d.src = a, d.Ra = c);
		this.f.ks(d)
	},
	tn: function(a) {
		I.i.prototype.tn.call(this, a);
		this.f.wI(a)
	},
	rn: function(a) {
		I.i.prototype.rn.call(this, a);
		this.f.vI(a)
	},
	Gd: function(a, c) {
		I.mc.prototype.Gd.call(this, a, c);
		this.f.uI(a, c)
	},
	ed: function() {
		return I.ja === I.t.Tb ? new I.Ea.D(this) : new I.Ea.G(this)
	}
});
I.Ea.create = function(a, c, d) {
	return new I.Ea(a, c, d)
};
var Va = I.Ea.prototype;
I.p(Va, "width", Va.lh, Va.tn);
I.p(Va, "height", Va.$k, Va.rn);
I.Nd = I.Ea.extend({
	gq: s,
	yn: 255,
	Sm: 255,
	Ij: s,
	Jy: u,
	$b: "LayerGradient",
	Rd: [],
	ctor: function(a, c, d, e) {
		I.Ea.prototype.ctor.call(this);
		this.gq = I.color(0, 0, 0, 255);
		this.Ij = I.d(0, -1);
		this.Sm = this.yn = 255;
		e && e instanceof Array ? (this.Rd = e, e.splice(0, 0, {
			d: 0,
			color: a || I.color.BLACK
		}), e.push({
			d: 1,
			color: c || I.color.BLACK
		})) : this.Rd = [{
			d: 0,
			color: a || I.color.BLACK
		}, {
			d: 1,
			color: c || I.color.BLACK
		}];
		I.Nd.prototype.pa.call(this, a, c, d, e)
	},
	pa: function(a, c, d) {
		a = a || I.color(0, 0, 0, 255);
		c = c || I.color(0, 0, 0, 255);
		d = d || I.d(0, -1);
		var e = this.gq;
		this.yn = a.a;
		e.r = c.r;
		e.g = c.g;
		e.b = c.b;
		this.Sm = c.a;
		this.Ij = d;
		this.Jy = p;
		I.Ea.prototype.pa.call(this, I.color(a.r, a.g, a.b, 255));
		this.f.Z(I.i.L.hb | I.i.L.lb | I.i.L.Ce);
		return p
	},
	Gd: function(a, c) {
		I.Ea.prototype.Gd.call(this, a, c);
		this.f.Z(I.i.L.Ce)
	},
	tn: function(a) {
		I.Ea.prototype.tn.call(this, a);
		this.f.Z(I.i.L.Ce)
	},
	rn: function(a) {
		I.Ea.prototype.rn.call(this, a);
		this.f.Z(I.i.L.Ce)
	},
	gW: function() {
		return I.color(this.ve)
	},
	jZ: function(a) {
		this.color = a;
		var c = this.Rd;
		c && 0 < c.length && (c = c[0].color, c.r = a.r, c.g = a.g, c.b =
			a.b)
	},
	GY: function(a) {
		var c = this.gq;
		c.r = a.r;
		c.g = a.g;
		c.b = a.b;
		if ((c = this.Rd) && 0 < c.length) c = c[c.length - 1].color, c.r = a.r, c.g = a.g, c.b = a.b;
		this.f.Z(I.i.L.hb)
	},
	EV: function() {
		return I.color(this.gq)
	},
	kZ: function(a) {
		this.yn = a;
		var c = this.Rd;
		c && 0 < c.length && (c[0].color.a = a);
		this.f.Z(I.i.L.lb)
	},
	hW: D("yn"),
	HY: function(a) {
		this.Sm = a;
		var c = this.Rd;
		c && 0 < c.length && (c[c.length - 1].color.a = a);
		this.f.Z(I.i.L.lb)
	},
	FV: D("Sm"),
	sZ: function(a) {
		this.Ij.x = a.x;
		this.Ij.y = a.y;
		this.f.Z(I.i.L.Ce)
	},
	mW: function() {
		return I.d(this.Ij.x,
			this.Ij.y)
	},
	J8: D("Jy"),
	xba: function(a) {
		this.Jy = a;
		this.f.Z(I.i.L.Ce)
	},
	zV: D("Rd"),
	CY: function(a) {
		this.Rd = a;
		this.f.Z(I.i.L.hb | I.i.L.lb | I.i.L.Ce)
	},
	ed: function() {
		return I.ja === I.t.Tb ? new I.Nd.D(this) : new I.Nd.G(this)
	}
});
I.Nd.create = function(a, c, d, e) {
	return new I.Nd(a, c, d, e)
};
var Wa = I.Nd.prototype;
I.p(Wa, "startColor", Wa.gW, Wa.jZ);
I.p(Wa, "endColor", Wa.EV, Wa.GY);
I.p(Wa, "startOpacity", Wa.hW, Wa.kZ);
I.p(Wa, "endOpacity", Wa.FV, Wa.HY);
I.p(Wa, "vector", Wa.mW, Wa.sZ);
I.p(Wa, "colorStops", Wa.zV, Wa.CY);
I.Zs = I.mc.extend({
	Zk: 0,
	nh: s,
	$b: "LayerMultiplex",
	ctor: function(a) {
		I.mc.prototype.ctor.call(this);
		a instanceof Array ? I.Zs.prototype.bK.call(this, a) : I.Zs.prototype.bK.call(this, Array.prototype.slice.call(arguments))
	},
	bK: function(a) {
		0 < a.length && a[a.length - 1] == s && I.log(I.k.wN);
		this.nh = a;
		this.Zk = 0;
		this.N(this.nh[this.Zk]);
		return p
	},
	lda: function(a) {
		a >= this.nh.length ? I.log(I.k.xN) : (this.removeChild(this.nh[this.Zk], p), this.Zk = a, this.N(this.nh[a]))
	},
	mda: function(a) {
		a >= this.nh.length ? I.log(I.k.yN) : (this.removeChild(this.nh[this.Zk],
			p), this.nh[this.Zk] = s, this.Zk = a, this.N(this.nh[a]))
	},
	H3: function(a) {
		a ? this.nh.push(a) : I.log(I.k.vN)
	}
});
I.Zs.create = function() {
	return new I.Zs(Array.prototype.slice.call(arguments))
};
(function() {
	I.mc.D = function(a) {
		I.i.D.call(this, a);
		this.vi = u;
		this.Kj = s;
		this.Cd = 2
	};
	var a = I.mc.D.prototype = Object.create(I.i.D.prototype);
	a.constructor = I.mc.D;
	a.IH = function(a) {
		a && 0 === this.Cd && (this.Cd = 2);
		this.Ne === u && (this.Ne = p)
	};
	a.updateStatus = function() {
		var a = I.i.L;
		this.C & a.jf && (this.Ne = p, 0 === this.Cd && (this.Cd = 2), this.C ^= this.C & a.jf);
		I.i.Kb.prototype.updateStatus.call(this)
	};
	a.Wd = function(a) {
		var d = I.i.L;
		this.C & d.jf && (this.Ne = p, 0 === this.Cd && (this.Cd = 2), this.C ^= this.C & d.jf);
		I.i.Kb.prototype.Wd.call(this,
			a)
	};
	a.transform = function(a, d) {
		var e = this.Si,
			f = e.a,
			g = e.b,
			h = e.c,
			k = e.I;
		I.i.D.prototype.transform.call(this, a, d);
		if ((e.a !== f || e.b !== g || e.c !== h || e.I !== k) && 0 === this.Cd) this.Cd = 2
	};
	a.hB = function() {
		if (!this.vi) {
			this.ib = p;
			this.vi = this.Ne = I.Ga.de = p;
			0 === this.Cd && (this.Cd = 2);
			for (var a = this.o.P, d = 0, e = a.length; d < e; d++) a[d].f.Su(this);
			this.Kj || (this.Kj = new I.pM, this.Kj.Vh(0, 0))
		}
	};
	a.js = function() {
		if (this.vi) {
			I.Ga.de = p;
			this.vi = this.ib = u;
			this.Ne = p;
			0 === this.Cd && (this.Cd = 2);
			for (var a = this.o.P, d = 0, e = a.length; d < e; d++) a[d].f.Su(s)
		}
	};
	a.SW = D("vi");
	a.Sa = function() {
		if (this.Ne) {
			var a = this.o,
				d = a.P,
				e = this.Kj;
			this.transform(La(this), p);
			var f = this.jz();
			f.width = 0 | f.width + 0.5;
			f.height = 0 | f.height + 0.5;
			var g = e.mg,
				h = g.getContext();
			e.Ia(f.x, f.y);
			if (0 < this.Cd) {
				e.QK(f.width, f.height);
				g.fs(0 - f.x, h.canvas.height - f.height + f.y);
				a.dg();
				I.Ga.ev(this.W);
				a = 0;
				for (f = d.length; a < f; a++) d[a].ia(this);
				I.Ga.eA(g, this.W);
				e.transform();
				this.Cd--
			}
			this.Ne = u
		}
	};
	a.ia = function(a) {
		if (this.vi) {
			var d = this.o,
				e = d.P.length;
			d.$d && 0 !== e && (this.Wd(a), I.Ga.Pg(this), this.Kj.ia(this),
				this.C = 0)
		} else I.i.D.prototype.ia.call(this, a)
	};
	a.VE = function(a) {
		a.ab === this.o && this.vi && a.f.Su(this)
	};
	a.jz = function() {
		var a = s,
			d = this.o;
		if (!d.P || 0 === d.P.length) return I.rect(0, 0, 10, 10);
		for (var e = d.nk(), d = d.P, f = 0, g = d.length; f < g; f++) {
			var h = d[f];
			h && h.$d && (a ? (h = h.nq(e)) && (a = I.pw(a, h)) : a = h.nq(e))
		}
		return a
	}
})();
(function() {
	I.Ea.D = function(a) {
		I.mc.D.call(this, a);
		this.ib = p;
		this.Lj = "source-over";
		this.HQ = new I.CM(this, this.IQ)
	};
	var a = I.Ea.D.prototype = Object.create(I.mc.D.prototype);
	a.constructor = I.Ea.D;
	a.js = function() {
		I.mc.D.prototype.js.call(this);
		this.ib = p
	};
	a.Sa = function(a, d, e) {
		a = a || I.s;
		var f = a.getContext(),
			g = this.o,
			h = this.ac,
			k = this.bc / 255,
			n = g.S.width,
			g = g.S.height;
		0 !== k && (a.Jo(this.Lj), a.gm(k), a.bg("rgba(" + (0 | h.r) + "," + (0 | h.g) + "," + (0 | h.b) + ", 1)"), a.setTransform(this.Si, d, e), f.fillRect(0, 0, n * d, -g * e), I.ef++)
	};
	a.ks = function(a) {
		this.Lj = I.i.D.oG(a)
	};
	a.uI = a.wI = a.vI = y();
	a.IQ = function() {
		if (this.Ne) {
			var a = this.o,
				d = this.Kj,
				e = a.P,
				f = e.length;
			this.transform(La(this), p);
			var g = this.jz();
			g.width = 0 | g.width + 0.5;
			g.height = 0 | g.height + 0.5;
			var h = d.mg,
				k = h.getContext();
			d.Ia(g.x, g.y);
			if (0 < this.Cd) {
				k.fillStyle = h.St;
				d.QK(g.width, g.height);
				h.fs(0 - g.x, k.canvas.height - g.height + g.y);
				I.Ga.ev(this.W);
				if (0 < f) {
					a.dg();
					for (a = 0; a < f; a++)
						if (g = e[a], 0 > g.cc) g.f.ia(this);
						else break;
					for (I.Ga.Pg(this); a < f; a++) e[a].f.ia(this)
				} else I.Ga.Pg(this);
				I.Ga.eA(h,
					this.W);
				d.transform();
				this.Cd--
			}
			this.Ne = u
		}
	};
	a.ia = function(a) {
		this.vi ? this.o.$d && (this.Wd(a), I.Ga.Pg(this.HQ), this.Kj.f.Z(I.i.L.ga), this.Kj.ia(this), this.C = 0) : I.i.D.prototype.ia.call(this)
	};
	a.jz = function() {
		var a = this.o,
			d = I.rect(0, 0, a.S.width, a.S.height),
			e = a.nk(),
			d = I.uC(d, a.nk());
		if (!a.P || 0 === a.P.length) return d;
		for (var a = a.P, f = 0; f < a.length; f++) {
			var g = a[f];
			g && g.$d && (g = g.nq(e), d = I.pw(d, g))
		}
		return d
	}
})();
(function() {
	I.Nd.Kb = {
		updateStatus: function() {
			var a = I.i.L;
			this.C & a.Ce && (this.C |= a.hb, this.C ^= this.C & a.Ce);
			I.i.Kb.prototype.updateStatus.call(this)
		}
	};
	I.Nd.D = function(a) {
		I.Ea.D.call(this, a);
		this.ib = p;
		this.xh = I.d(0, 0);
		this.Zt = I.d(0, 0);
		this.YF = this.bI = s
	};
	var a = I.Nd.D.prototype = Object.create(I.Ea.D.prototype);
	I.mo(I.Nd.Kb, a);
	a.constructor = I.Nd.D;
	a.Sa = function(a, d, e) {
		a = a || I.s;
		var f = a.getContext(),
			g = this.o,
			h = this.bc / 255;
		if (0 !== h) {
			var k = g.S.width,
				n = g.S.height;
			a.Jo(this.Lj);
			a.gm(h);
			h = f.createLinearGradient(this.xh.x *
				d, this.xh.y * e, this.Zt.x * d, this.Zt.y * e);
			if (g.Rd)
				for (var r = 0; r < g.Rd.length; r++) h.addColorStop(g.Rd[r].d, this.eF[r]);
			else h.addColorStop(0, this.bI), h.addColorStop(1, this.YF);
			a.bg(h);
			a.setTransform(this.Si, d, e);
			f.fillRect(0, 0, k * d, -n * e);
			I.ef++
		}
	};
	a.Wd = function(a) {
		var d = I.i.L,
			e = this.C;
		e & d.Ce && (this.C |= d.hb, this.C = e & d.Ce ^ e);
		I.i.Kb.prototype.Wd.call(this, a)
	};
	a.jb = function() {
		var a = this.o,
			d = a.S,
			e = 0.5 * d.width,
			d = 0.5 * d.height;
		this.C ^= this.C & I.i.L.Ce;
		var f = I.rK(I.d(0, -1), a.Ij),
			f = I.xK(I.d(0, -1), I.d(0, 0), f),
			g = Math.min(Math.abs(1 /
				f.x), Math.abs(1 / f.y));
		this.xh.x = e * -f.x * g + e;
		this.xh.y = d * f.y * g - d;
		this.Zt.x = e * f.x * g + e;
		this.Zt.y = d * -f.y * g - d;
		e = this.ac;
		d = a.gq;
		f = a.Sm / 255;
		this.bI = "rgba(" + Math.round(e.r) + "," + Math.round(e.g) + "," + Math.round(e.b) + "," + (a.yn / 255).toFixed(4) + ")";
		this.YF = "rgba(" + Math.round(d.r) + "," + Math.round(d.g) + "," + Math.round(d.b) + "," + f.toFixed(4) + ")";
		if (a.Rd) {
			this.Sm = this.yn = 0;
			this.eF = [];
			for (e = 0; e < a.Rd.length; e++) d = a.Rd[e].color, this.eF.push("rgba(" + Math.round(d.r) + "," + Math.round(d.g) + "," + Math.round(d.b) + "," + (d.a == s ? 1 : d.a /
				255).toFixed(4) + ")")
		}
	}
})();
(function() {
	I.mc.G = function(a) {
		I.i.G.call(this, a)
	};
	var a = I.mc.G.prototype = Object.create(I.i.G.prototype);
	a.constructor = I.mc.G;
	a.hB = y();
	a.js = y();
	a.VE = y()
})();
(function() {
	I.Ea.G = function(a) {
		I.mc.G.call(this, a);
		this.ib = p;
		this.Wu = new ArrayBuffer(32);
		this.Vu = new ArrayBuffer(16);
		a = this.Wu;
		var d = this.Vu,
			e = P.BYTES_PER_ELEMENT,
			f = I.vd.BYTES_PER_ELEMENT;
		this.wn = [new P(0, 0, a, 0), new P(0, 0, a, e), new P(0, 0, a, 2 * e), new P(0, 0, a, 3 * e)];
		this.YH = [I.color(0, 0, 0, 255, d, 0), I.color(0, 0, 0, 255, d, f), I.color(0, 0, 0, 255, d, 2 * f), I.color(0, 0, 0, 255, d, 3 * f)];
		this.YA = I.s.createBuffer();
		this.Iy = I.s.createBuffer()
	};
	var a = I.Ea.G.prototype = Object.create(I.mc.G.prototype);
	a.constructor = I.Ea.G;
	a.Sa =
		function(a) {
			a = a || I.s;
			var d = this.o;
			this.Wa.kc();
			this.Wa.Ji(this.Ad);
			I.Zc(I.xd | I.Pp);
			I.Xf(d.aa.src, d.aa.Ra);
			a.bindBuffer(a.ARRAY_BUFFER, this.YA);
			a.vertexAttribPointer(I.tb, 2, a.FLOAT, u, 0, 0);
			a.bindBuffer(a.ARRAY_BUFFER, this.Iy);
			a.vertexAttribPointer(I.Je, 4, a.UNSIGNED_BYTE, p, 0, 0);
			a.drawArrays(a.TRIANGLE_STRIP, 0, this.wn.length)
		};
	a.uI = function(a, d) {
		var e = this.wn;
		d === m ? (e[1].x = a.width, e[2].y = a.height, e[3].x = a.width, e[3].y = a.height) : (e[1].x = a, e[2].y = d, e[3].x = a, e[3].y = d);
		this.Jt()
	};
	a.wI = function(a) {
		var d = this.wn;
		d[1].x = a;
		d[3].x = a;
		this.Jt()
	};
	a.vI = function(a) {
		var d = this.wn;
		d[2].y = a;
		d[3].y = a;
		this.Jt()
	};
	a.jb = function() {
		for (var a = this.ac, d = this.bc, e = this.YH, f = 0; 4 > f; f++) e[f].r = a.r, e[f].g = a.g, e[f].b = a.b, e[f].a = d;
		this.XE()
	};
	a.Jt = function() {
		var a = I.s;
		a.bindBuffer(a.ARRAY_BUFFER, this.YA);
		a.bufferData(a.ARRAY_BUFFER, this.Wu, a.STATIC_DRAW)
	};
	a.XE = function() {
		var a = I.s;
		a.bindBuffer(a.ARRAY_BUFFER, this.Iy);
		a.bufferData(a.ARRAY_BUFFER, this.Vu, a.STATIC_DRAW)
	};
	a.ks = y()
})();
(function() {
	I.Nd.G = function(a) {
		I.Ea.G.call(this, a);
		this.ib = p;
		this.cF = new I.gi;
		this.dF = u
	};
	var a = I.Nd.G.prototype = Object.create(I.Ea.G.prototype);
	I.mo(I.Nd.Kb, a);
	a.constructor = I.Nd.G;
	a.Wd = function(a) {
		var d = I.i.L,
			e = this.C,
			f = a ? a.o : s;
		f && (f.Vc && a.C & d.hb) && (e |= d.hb);
		f && (f.Wc && a.C & d.lb) && (e |= d.lb);
		a && a.C & d.ga && (e |= d.ga);
		var f = e & d.hb,
			g = e & d.lb;
		this.C = e;
		f && Ma(this);
		g && Pa(this);
		this.transform(a);
		(f || g || e & d.Ce) && this.jb()
	};
	a.jb = function() {
		this.C ^= this.C & I.i.L.Ce;
		var a = this.o,
			d = a.Rd;
		if (d && !(2 > d.length)) {
			this.dF =
				p;
			var e = d.length,
				f = 2 * e,
				g, h = a.S;
			this.Wu = new ArrayBuffer(8 * f);
			this.Vu = new ArrayBuffer(4 * f);
			var k = this.wn,
				n = this.YH;
			k.length = 0;
			n.length = 0;
			var r = this.Wu,
				t = this.Vu,
				v = P.BYTES_PER_ELEMENT,
				B = I.vd.BYTES_PER_ELEMENT;
			for (g = 0; g < f; g++) k.push(new P(0, 0, r, v * g)), n.push(I.color(0, 0, 0, 255, t, B * g));
			g = Math.PI + I.rK(I.d(0, -1), a.Ij);
			a = I.d(h.width / 2, h.height / 2);
			r = Math.round(I.Bo(g));
			f = I.II(1, 0, 0, 1, a.x, a.y);
			f = I.BT(f, g);
			90 > r ? (r = I.d(-a.x, a.y), t = I.d(a.x, a.y)) : 180 > r ? (r = I.d(a.x, a.y), t = I.d(a.x, -a.y)) : 270 > r ? (r = I.d(a.x, -a.y), t = I.d(-a.x, -a.y)) : (r = I.d(-a.x, -a.y), t = I.d(-a.x, a.y));
			v = Math.sin(g);
			g = Math.cos(g);
			f = I.CT(f, Math.abs((r.x * g - r.y * v) / a.x), Math.abs((t.x * v + t.y * g) / a.y));
			for (g = 0; g < e; g++) r = d[g].d * h.height, t = I.kf(-a.x, r - a.y, f), k[2 * g].x = t.x, k[2 * g].y = t.y, r = I.kf(h.width - a.x, r - a.y, f), k[2 * g + 1].x = r.x, k[2 * g + 1].y = r.y;
			h = this.bc / 255;
			for (g = 0; g < e; g++) k = d[g].color, a = n[2 * g], f = n[2 * g + 1], a.r = k.r, a.g = k.g, a.b = k.b, a.a = k.a * h, f.r = k.r, f.g = k.g, f.b = k.b, f.a = k.a * h;
			this.Jt();
			this.XE()
		}
	};
	a.Sa = function(a) {
		a = a || I.s;
		var d = this.o,
			e = this.jR();
		a.enable(a.SCISSOR_TEST);
		I.view.fZ(e.x, e.y, e.width, e.height);
		this.Wa.kc();
		this.Wa.Ji(this.Ad);
		I.Zc(I.xd | I.Pp);
		I.Xf(d.aa.src, d.aa.Ra);
		a.bindBuffer(a.ARRAY_BUFFER, this.YA);
		a.vertexAttribPointer(I.tb, 2, a.FLOAT, u, 0, 0);
		a.bindBuffer(a.ARRAY_BUFFER, this.Iy);
		a.vertexAttribPointer(I.Je, 4, a.UNSIGNED_BYTE, p, 0, 0);
		a.drawArrays(a.TRIANGLE_STRIP, 0, this.wn.length);
		a.disable(a.SCISSOR_TEST)
	};
	a.jR = function() {
		if (this.dF) {
			var a = this.o,
				d = I.rect(0, 0, a.S.width, a.S.height),
				a = a.nk();
			this.cF = I.oH(d, a)
		}
		return this.cF
	}
})();
I.oa.Kx = function() {
	var a = I.F.prototype;
	I.p(a, "opacityModifyRGB", a.Sl, a.Ko);
	I.p(a, "opacity", a.ao, a.Hd);
	I.p(a, "color", a.Xi, a.ic);
	I.p(a, "flippedX", a.WW, a.IY);
	I.p(a, "flippedY", a.XW, a.JY);
	I.p(a, "offsetX", a.tR);
	I.p(a, "offsetY", a.uR);
	I.p(a, "texture", a.hc, a.mb);
	I.p(a, "textureRectRotated", a.dX);
	I.p(a, "batchNode", a.tV, a.Bw);
	I.p(a, "quad", a.Jv)
};
I.F = I.i.extend({
	dirty: u,
	atlasIndex: 0,
	textureAtlas: s,
	ob: s,
	kl: s,
	an: s,
	sl: u,
	Hn: s,
	aa: s,
	ba: s,
	wa: s,
	Fi: u,
	pc: s,
	yl: s,
	dc: u,
	nc: u,
	oc: u,
	V: u,
	$b: "Sprite",
	ctor: function(a, c, d) {
		I.i.prototype.ctor.call(this);
		this.sl = u;
		this.pc = I.d(0, 0);
		this.yl = I.d(0, 0);
		this.aa = {
			src: I.bi,
			Ra: I.Ug
		};
		this.wa = I.rect(0, 0, 0, 0);
		this.QS(a, c, d)
	},
	XC: D("V"),
	ar: function(a, c) {
		this.addEventListener("load", a, c)
	},
	zr: D("dirty"),
	Gw: A("dirty"),
	dX: D("Fi"),
	q6: D("atlasIndex"),
	pba: A("atlasIndex"),
	jW: function() {
		return I.rect(this.wa)
	},
	pk: D("textureAtlas"),
	gs: A("textureAtlas"),
	WV: function() {
		return I.d(this.pc)
	},
	tR: function() {
		return this.pc.x
	},
	uR: function() {
		return this.pc.y
	},
	Dv: D("aa"),
	Yf: function(a) {
		I.assert(a, I.k.dP);
		a.V || (this.V = u, a.addEventListener("load", this.f.XH, this));
		var c = I.ja === I.t.Tb ? u : a.xe,
			c = this.Oa(a.hc(), a.Zi(), c);
		this.Mo(a);
		return c
	},
	z8: function(a) {
		I.assert(a, I.k.eP);
		var c = I.Rg.Jg(a);
		I.assert(c, a + I.k.fP);
		return this.Yf(c)
	},
	Hda: function(a) {
		this.textureAtlas = a.pk();
		this.ob = a
	},
	tZ: function(a) {
		var c = this.wa;
		c.x = a.x;
		c.y = a.y;
		c.width = a.width;
		c.height = a.height
	},
	dg: function() {
		if (this.we) {
			var a =
				this.P,
				c = a.length,
				d, e, f;
			for (d = 1; d < c; d++) {
				f = a[d];
				for (e = d - 1; 0 <= e;) {
					if (f.cc < a[e].cc) a[e + 1] = a[e];
					else if (f.cc === a[e].cc && f.arrivalOrder < a[e].arrivalOrder) a[e + 1] = a[e];
					else break;
					e--
				}
				a[e + 1] = f
			}
			this.ob && this.lg(a, I.i.Jf.dg);
			this.we = u
		}
	},
	bs: function(a, c) {
		I.assert(a, I.k.hP); - 1 === this.P.indexOf(a) ? I.log(I.k.gP) : c !== a.zIndex && (this.ob && !this.we && (this.wA(), this.ob.NK(p)), I.i.prototype.bs.call(this, a, c))
	},
	removeChild: function(a, c) {
		this.ob && this.ob.tw(a);
		I.i.prototype.removeChild.call(this, a, c)
	},
	ie: function(a) {
		I.i.prototype.ie.call(this,
			a);
		this.f.Hw(p)
	},
	$r: function(a) {
		var c = this.P,
			d = this.ob;
		if (d && c != s)
			for (var e = 0, f = c.length; e < f; e++) d.tw(c[e]);
		I.i.prototype.$r.call(this, a);
		this.an = u
	},
	$B: function(a) {
		this.ob ? I.log(I.k.bP) : I.i.prototype.$B.call(this, a)
	},
	IY: function(a) {
		this.nc !== a && (this.nc = a, this.Yb(this.wa, this.Fi, this.S), this.Lw(p))
	},
	JY: function(a) {
		this.oc !== a && (this.oc = a, this.Yb(this.wa, this.Fi, this.S), this.Lw(p))
	},
	WW: D("nc"),
	XW: D("oc"),
	Ko: function(a) {
		this.dc !== a && (this.dc = a, this.f.JH())
	},
	Sl: D("dc"),
	Gba: function(a, c) {
		I.assert(a, I.k.lP);
		var d = I.lv.tJ(a);
		d ? (d = d.Cf[c]) ? this.Mo(d.Jg()) : I.log(I.k.kP) : I.log(I.k.jP)
	},
	tV: D("ob"),
	wA: function() {
		if (!this.we) {
			this.we = p;
			for (var a = this.ab; a && a !== this.ob;) a.wA(), a = a.parent
		}
	},
	hc: D("ba"),
	QS: function(a, c, d) {
		if (a === m) I.F.prototype.pa.call(this);
		else if (I.ge(a)) "#" === a[0] ? (c = I.Rg.Jg(a.substr(1, a.length - 1))) ? this.Yf(c) : I.log("%s does not exist", a) : I.F.prototype.pa.call(this, a, c);
		else if ("object" === typeof a)
			if (a instanceof I.la) this.Oa(a, c, d);
			else if (a instanceof I.cd) this.Yf(a);
		else if (a instanceof HTMLImageElement || a instanceof HTMLCanvasElement) c = new I.la, c.Fd(a), c.Jb(), this.Oa(c)
	},
	Jv: function() {
		return this.f.Jv()
	},
	yk: function(a, c) {
		var d = this.aa;
		c === m ? (d.src = a.src, d.Ra = a.Ra) : (d.src = a, d.Ra = c);
		this.f.ks(d)
	},
	pa: function() {
		if (0 < arguments.length) return this.Sv(arguments[0], arguments[1]);
		I.i.prototype.pa.call(this);
		this.dirty = this.kl = u;
		this.aa.src = I.bi;
		this.aa.Ra = I.Ug;
		this.texture = s;
		this.nc = this.oc = u;
		this.anchorY = this.anchorX = 0.5;
		this.pc.x = 0;
		this.pc.y = 0;
		this.an = u;
		this.f.ui();
		this.Yb(I.rect(0, 0,
			0, 0), u, I.size(0, 0));
		return p
	},
	Sv: function(a, c) {
		I.assert(a, I.k.cP);
		var d = I.wb.ur(a);
		if (d) {
			if (!c) {
				var e = d.Aa();
				c = I.rect(0, 0, e.width, e.height)
			}
			return this.Oa(d, c)
		}
		d = I.wb.md(a);
		return this.Oa(d, c || I.rect(0, 0, d.S.width, d.S.height))
	},
	Oa: function(a, c, d, e) {
		I.assert(0 !== arguments.length, I.k.sM);
		d = d || u;
		a = this.f.vG(a, c, d, e);
		if (!I.i.prototype.pa.call(this)) return u;
		this.ob = s;
		this.dirty = this.kl = u;
		this.dc = p;
		this.aa.src = I.bi;
		this.aa.Ra = I.Ug;
		this.nc = this.oc = u;
		this.Vh(0.5, 0.5);
		this.pc.x = 0;
		this.pc.y = 0;
		this.an = u;
		this.f.ui();
		var f = a.V;
		this.V = f;
		if (!f) return this.Fi = d, c && (this.wa.x = c.x, this.wa.y = c.y, this.wa.width = c.width, this.wa.height = c.height), this.texture && this.texture.removeEventListener("load", this), a.addEventListener("load", this.f.hI, this), this.texture = a, p;
		c || (c = I.rect(0, 0, a.width, a.height));
		this.f.aF(a, c, d);
		this.mb(a);
		this.Yb(c, d);
		this.Bw(s);
		return p
	},
	Yb: function(a, c, d, e) {
		this.Fi = c || u;
		this.Gd(d || a);
		this.tZ(a);
		this.f.OH(a, e);
		a = this.yl.x;
		c = this.yl.y;
		this.nc && (a = -a);
		this.oc && (c = -c);
		d = this.wa;
		this.pc.x = a + (this.S.width -
			d.width) / 2;
		this.pc.y = c + (this.S.height - d.height) / 2;
		this.ob ? this.dirty = p : this.f.fA()
	},
	ke: function() {
		this.f.ke()
	},
	N: function(a, c, d) {
		I.assert(a, I.k.qM);
		c == s && (c = a.cc);
		d == s && (d = a.tag);
		this.f.HH(a) && (I.i.prototype.N.call(this, a, c, d), this.an = p)
	},
	Mo: function(a) {
		var c = this;
		I.ge(a) && (a = I.Rg.Jg(a), I.assert(a, I.k.mP));
		this.Lw(p);
		var d = a.yJ();
		c.yl.x = d.x;
		c.yl.y = d.y;
		d = a.hc();
		a.V ? (c.V = p, d !== c.ba && (c.Ii(d), c.ic(c.ve)), c.Yb(a.Zi(), a.xe, a.Gv())) : (c.V = u, a.addEventListener("load", function(a) {
			c.V = p;
			var d = a.hc();
			d !== c.ba &&
				c.Ii(d);
			c.Yb(a.Zi(), a.xe, a.Gv());
			c.dispatchEvent("load");
			c.ic(c.ve)
		}, c));
		this.f.rI(d)
	},
	Fba: function(a) {
		I.log(I.k.iP);
		this.Mo(a)
	},
	cC: function(a) {
		return this.f.cC(a)
	},
	JU: function() {
		return this.Jg()
	},
	Jg: function() {
		return new I.cd(this.ba, I.Zr(this.wa), this.Fi, I.OX(this.yl), I.AZ(this.S))
	},
	Bw: function(a) {
		(this.ob = a) ? (this.Hn = {
			a: 1,
			b: 0,
			c: 0,
			I: 1,
			ca: 0,
			da: 0
		}, this.textureAtlas = this.ob.pk()) : (this.atlasIndex = I.F.BD, this.textureAtlas = s, this.dirty = this.kl = u, this.f.fA())
	},
	mb: function(a) {
		if (!a) return this.f.Ii(s);
		var c = I.ge(a);
		c && (a = I.wb.md(a));
		a.V ? (this.Ii(a, c), this.ic(this.ve), this.V = p) : (this.f.Ii(s), a.addEventListener("load", function() {
			this.Ii(a, c);
			this.ic(this.ve);
			this.V = p
		}, this))
	},
	Ii: function(a, c) {
		this.f.Ii(a);
		c && this.KQ(a)
	},
	KQ: function(a) {
		a = a.S;
		a = I.rect(0, 0, a.width, a.height);
		this.Yb(a)
	},
	ed: function() {
		return I.ja === I.t.Tb ? new I.F.D(this) : new I.F.G(this)
	}
});
I.F.create = function(a, c, d) {
	return new I.F(a, c, d)
};
I.F.vB = I.F.create;
I.F.DU = I.F.create;
I.F.CU = I.F.create;
I.F.BD = -1;
I.tf.prototype.apply(I.F.prototype);
I.assert(I.ff(I.oa.Kx), I.k.Yg, "SpritesPropertyDefine.js");
I.oa.Kx();
delete I.oa.Kx;
(function() {
	I.F.D = function(a) {
		I.i.D.call(this, a);
		this.ib = p;
		this.hk = {
			uw: 0,
			vw: 0,
			x: 0,
			y: 0,
			width: 0,
			height: 0,
			dD: u
		};
		this.Lj = "source-over";
		this.aq = u;
		this.Ye = s
	};
	var a = I.F.D.prototype = Object.create(I.i.D.prototype);
	a.constructor = I.F.D;
	a.ui = y();
	a.Hw = y();
	a.fA = y();
	a.Ii = function(a) {
		var d = this.o;
		d.ba !== a && (d.V = a ? a.V : u, d.ba = a, this.jb())
	};
	a.JH = function() {
		this.Z(I.i.L.hb | I.i.L.lb)
	};
	a.cC = function(a) {
		var d = this.o;
		return a.hc() !== d.ba ? u : I.IK(a.Zi(), d.wa)
	};
	a.ks = function(a) {
		this.Lj = I.i.D.oG(a)
	};
	a.HH = E(p);
	a.vG = function(a,
		d, e, f) {
		e && a.V && (a = a.Xa, a = I.F.D.Oy(a, d, f), f = new I.la, f.Fd(a), f.Jb(), a = f, d.x = d.y = 0, this.o.wa = I.rect(0, 0, d.width, d.height));
		return a
	};
	a.aF = function(a, d) {
		if (a && a.url) {
			var e = d.y + d.height;
			d.x + d.width > a.width && I.error(I.k.Px, a.url);
			e > a.height && I.error(I.k.Ox, a.url)
		}
	};
	a.Sa = function(a, d, e) {
		var f = this.o,
			g = this.hk,
			h = this.bc / 255,
			k = this.Ye || f.ba;
		if (!(k && (0 === g.width || 0 === g.height || !k.V) || 0 === h)) {
			a = a || I.s;
			var n = a.getContext(),
				r = f.pc.x,
				t = f.wa.height,
				v = f.wa.width,
				B = -f.pc.y - t;
			a.setTransform(this.Si, d, e);
			a.Jo(this.Lj);
			a.gm(h);
			(f.nc || f.oc) && a.save();
			f.nc && (r = -r - v, n.scale(-1, 1));
			f.oc && (B = f.pc.y, n.scale(1, -1));
			var w, z, x;
			this.aq ? w = h = 0 : (h = g.uw, w = g.vw);
			z = g.width;
			x = g.height;
			r *= d;
			B *= e;
			v *= d;
			t *= e;
			k ? (d = k.Xa, "" !== k.Hu ? (a.bg(n.createPattern(d, k.Hu)), n.fillRect(r, B, v, t)) : n.drawImage(d, h, w, z, x, r, B, v, t)) : (k = f.S, g.dD && (g = this.ac, a.bg("rgba(" + g.r + "," + g.g + "," + g.b + ",1)"), n.fillRect(r, B, k.width * d, k.height * e)));
			(f.nc || f.oc) && a.restore();
			I.ef++
		}
	};
	a.jb = function() {
		var a = this.o.ba,
			d = this.hk,
			e = this.ac;
		a && (255 !== e.r || 255 !== e.g || 255 !== e.b ?
			(this.Ye = a.mq(e.r, e.g, e.b, d), this.aq = p) : a && (this.Ye = a, this.aq = u))
	};
	a.Jv = E(s);
	a.rI = function(a, d) {
		this.aq = u;
		this.hk.uw = this.hk.x;
		this.hk.vw = this.hk.y;
		if (d = d || a.V) {
			var e = this.o.Xi();
			(255 !== e.r || 255 !== e.g || 255 !== e.b) && this.jb()
		}
	};
	a.ke = function() {
		var a = this.o;
		if (a.dirty) {
			var d = a.ab;
			!a.$d || d && d !== a.ob && d.sl ? a.sl = p : (a.sl = u, a.Hn = !d || d === a.ob ? this.sc() : I.cr(this.sc(), d.Hn));
			a.kl = u;
			a.dirty = u
		}
		a.an && a.lg(a.P, I.i.Jf.ke)
	};
	a.XH = function(a) {
		this.Yb(a.Zi(), a.xe, a.Gv());
		this.f.jb();
		this.dispatchEvent("load")
	};
	a.hI =
		function(a) {
			if (!this.V) {
				this.V = p;
				var d = this.wa,
					e = this.f;
				d ? I.Ku(d) && (d.width = a.width, d.height = a.height) : d = I.rect(0, 0, a.width, a.height);
				this.texture = a;
				this.Yb(d, this.Fi);
				a = e.ac;
				(255 !== a.r || 255 !== a.g || 255 !== a.b) && e.jb();
				this.Bw(this.ob);
				this.dispatchEvent("load")
			}
		};
	a.OH = function(a, d) {
		d === m && (d = p);
		var e = this.hk,
			f = d ? I.eb() : 1;
		e.uw = e.x = 0 | a.x * f;
		e.vw = e.y = 0 | a.y * f;
		e.width = 0 | a.width * f;
		e.height = 0 | a.height * f;
		e.dD = !(0 === e.width || 0 === e.height || 0 > e.x || 0 > e.y)
	};
	I.F.D.Oy = function(a, d, e) {
		if (!a) return s;
		if (!d) return a;
		e = e == s ? p : e;
		var f = document.createElement("canvas");
		f.width = d.width;
		f.height = d.height;
		var g = f.getContext("2d");
		g.translate(f.width / 2, f.height / 2);
		e ? g.rotate(-1.5707963267948966) : g.rotate(1.5707963267948966);
		g.drawImage(a, d.x, d.y, d.height, d.width, -d.height / 2, -d.width / 2, d.height, d.width);
		return f
	}
})();
(function() {
	I.F.G = function(a) {
		I.i.G.call(this, a);
		this.ib = p;
		this.Ci = new I.Lb;
		this.jH = I.s.createBuffer();
		this.Di = p;
		this.kl = this.Ab = u
	};
	var a = I.F.G.prototype = Object.create(I.i.G.prototype);
	a.constructor = I.F.G;
	a.ks = y();
	a.Z = function(a) {
		I.i.G.prototype.Z.call(this, a);
		this.Ab = p
	};
	a.Hw = function(a) {
		this.Ab = this.kl = a;
		for (var d = this.o.P, e, f = d ? d.length : 0, g = 0; g < f; g++) e = d[g], e instanceof I.F && e.f.Hw(a)
	};
	a.HH = function(a) {
		var d = this.o;
		if (d.ob) {
			if (!(a instanceof I.F)) return I.log(I.k.ZO), u;
			a.texture.Pf !== d.textureAtlas.texture.Pf &&
				I.log(I.k.$O);
			d.ob.appendChild(a);
			d.we || d.wA()
		}
		return p
	};
	a.vG = ca();
	a.cC = function(a) {
		var d = this.o;
		return I.IK(a.Zi(), d.wa) && a.hc().getName() === d.ba.getName() && I.MX(a.yJ(), d.yl)
	};
	a.ui = function() {
		var a = {
				r: 255,
				g: 255,
				b: 255,
				a: 255
			},
			d = this.Ci;
		d.bl.colors = a;
		d.br.colors = a;
		d.tl.colors = a;
		d.tr.colors = a;
		this.Di = p
	};
	a.fA = function() {
		var a = this.o,
			d = a.pc.x,
			e = a.pc.y,
			f = d + a.wa.width,
			a = e + a.wa.height,
			g = this.Ci;
		g.bl.vertices = {
			x: d,
			y: e,
			z: 0
		};
		g.br.vertices = {
			x: f,
			y: e,
			z: 0
		};
		g.tl.vertices = {
			x: d,
			y: a,
			z: 0
		};
		g.tr.vertices = {
			x: f,
			y: a,
			z: 0
		};
		this.Di = p
	};
	a.Jv = D("Ci");
	a.rI = y();
	a.XH = function(a) {
		this.Yb(a.Zi(), a.xe, a.Gv());
		this.dispatchEvent("load")
	};
	a.hI = function(a) {
		var d = this.f;
		if (!this.V) {
			this.V = p;
			var e = this.wa;
			e ? I.Ku(e) && (e.width = a.width, e.height = a.height) : e = I.rect(0, 0, a.width, a.height);
			this.texture = a;
			this.Yb(e, this.Fi);
			this.Bw(this.ob);
			d.Di = p;
			this.dispatchEvent("load")
		}
	};
	a.OH = function(a, d) {
		d === m && (d = p);
		d && (a = I.Zr(a));
		var e = this.o,
			f = e.ob ? e.textureAtlas.texture : e.ba;
		if (f) {
			var g = f.pixelsWidth,
				h = f.pixelsHeight,
				k, n, r = this.Ci;
			e.Fi ? (I.tx ? (f =
				(2 * a.x + 1) / (2 * g), g = f + (2 * a.height - 2) / (2 * g), k = (2 * a.y + 1) / (2 * h), h = k + (2 * a.width - 2) / (2 * h)) : (f = a.x / g, g = (a.x + a.height) / g, k = a.y / h, h = (a.y + a.width) / h), e.nc && (n = k, k = h, h = n), e.oc && (n = f, f = g, g = n), r.bl.texCoords.u = f, r.bl.texCoords.v = k, r.br.texCoords.u = f, r.br.texCoords.v = h, r.tl.texCoords.u = g, r.tl.texCoords.v = k, r.tr.texCoords.u = g, r.tr.texCoords.v = h) : (I.tx ? (f = (2 * a.x + 1) / (2 * g), g = f + (2 * a.width - 2) / (2 * g), k = (2 * a.y + 1) / (2 * h), h = k + (2 * a.height - 2) / (2 * h)) : (f = a.x / g, g = (a.x + a.width) / g, k = a.y / h, h = (a.y + a.height) / h), e.nc && (n = f, f = g, g = n), e.oc &&
				(n = k, k = h, h = n), r.bl.texCoords.u = f, r.bl.texCoords.v = h, r.br.texCoords.u = g, r.br.texCoords.v = h, r.tl.texCoords.u = f, r.tl.texCoords.v = k, r.tr.texCoords.u = g, r.tr.texCoords.v = k);
			this.Di = p
		}
	};
	a.transform = function(a, d) {
		I.i.G.prototype.transform.call(this, a, d);
		this.Ab = p
	};
	a.JH = y();
	a.jb = function() {
		var a = this.ac,
			d = this.bc,
			e = this.o,
			a = {
				r: a.r,
				g: a.g,
				b: a.b,
				a: d
			};
		e.dc && (a.r *= d / 255, a.g *= d / 255, a.b *= d / 255);
		d = this.Ci;
		d.bl.colors = a;
		d.br.colors = a;
		d.tl.colors = a;
		d.tr.colors = a;
		e.ob && (e.atlasIndex !== I.F.BD ? e.textureAtlas.Ww(d, e.atlasIndex) :
			this.Ab = p);
		this.Di = p
	};
	a.zl = function() {
		if (this.ob) I.log(I.k.YO);
		else {
			var a = this.o,
				d = a.aa;
			!a.ba || !a.ba.io() ? (d.src === I.ONE && d.Ra === I.Ug && (d.src = I.SRC_ALPHA), a.opacityModifyRGB = u) : (d.src === I.SRC_ALPHA && d.Ra === I.Ug && (d.src = I.ONE), a.opacityModifyRGB = p)
		}
	};
	a.Ii = function(a) {
		var d = this.o;
		if (d.ob) {
			if (d.ob.texture !== a) {
				I.log(I.k.nP);
				return
			}
		} else d.ba !== a && (d.V = a ? a.V : u, d.ba = a, this.zl());
		this.Wa = a ? I.cg.ad(I.wm) : I.cg.ad(I.it)
	};
	a.ke = function() {
		var a = this.o;
		if (this.Ab) {
			var d = this.Ci,
				e = a.ab;
			if (!a.$d || e && e !== a.ob &&
				e.sl) d.br.vertices = d.tl.vertices = d.tr.vertices = d.bl.vertices = {
				x: 0,
				y: 0,
				z: 0
			}, a.sl = p;
			else {
				a.sl = u;
				0 !== this.C && (this.updateStatus(), this.C = 0);
				a.Hn = !e || e === a.ob ? this.sc() : I.cr(this.sc(), e.Hn);
				var f = a.Hn,
					g = a.wa,
					e = a.pc.x,
					h = a.pc.y,
					k = e + g.width,
					n = h + g.height,
					r = f.ca,
					t = f.da,
					v = f.a,
					B = f.b,
					w = f.I,
					z = -f.c,
					f = e * v - h * z + r,
					g = e * B + h * w + t,
					x = k * v - h * z + r,
					h = k * B + h * w + t,
					F = k * v - n * z + r,
					k = k * B + n * w + t,
					r = e * v - n * z + r,
					e = e * B + n * w + t,
					n = a.jv;
				I.WD || (f |= 0, g |= 0, x |= 0, h |= 0, F |= 0, k |= 0, r |= 0, e |= 0);
				d.bl.vertices = {
					x: f,
					y: g,
					z: n
				};
				d.br.vertices = {
					x: x,
					y: h,
					z: n
				};
				d.tl.vertices = {
					x: r,
					y: e,
					z: n
				};
				d.tr.vertices = {
					x: F,
					y: k,
					z: n
				}
			}
			a.textureAtlas.Ww(d, a.atlasIndex);
			this.Ab = a.kl = u
		}
		a.an && a.lg(a.P, I.i.Jf.ke)
	};
	a.aF = function(a, d, e) {
		a && a.url && (e ? (e = d.x + d.height, d = d.y + d.width) : (e = d.x + d.width, d = d.y + d.height), e > a.width && I.error(I.k.Px, a.url), d > a.height && I.error(I.k.Ox, a.url))
	};
	a.Sa = function(a) {
		var d = this.o,
			e = d.ba;
		if (!(e && !e.V || 0 === this.bc))
			if (a = a || I.s, e ? e.V && (this.Wa.kc(), this.Wa.Ji(this.Ad), I.Xf(d.aa.src, d.aa.Ra), I.TB(0, e), I.Zc(I.zt), a.bindBuffer(a.ARRAY_BUFFER, this.jH), this.Di && (a.bufferData(a.ARRAY_BUFFER,
					this.Ci.arrayBuffer, a.DYNAMIC_DRAW), this.Di = u), a.vertexAttribPointer(0, 3, a.FLOAT, u, 24, 0), a.vertexAttribPointer(1, 4, a.UNSIGNED_BYTE, p, 24, 12), a.vertexAttribPointer(2, 2, a.FLOAT, u, 24, 16), a.drawArrays(a.TRIANGLE_STRIP, 0, 4)) : (this.Wa.kc(), this.Wa.Ji(this.Ad), I.Xf(d.aa.src, d.aa.Ra), I.Wf(s), I.Zc(I.xd | I.Pp), a.bindBuffer(a.ARRAY_BUFFER, this.jH), this.Di && (a.bufferData(a.ARRAY_BUFFER, this.Ci.arrayBuffer, a.STATIC_DRAW), this.Di = u), a.vertexAttribPointer(I.tb, 3, a.FLOAT, u, 24, 0), a.vertexAttribPointer(I.Je, 4, a.UNSIGNED_BYTE,
					p, 24, 12), a.drawArrays(a.TRIANGLE_STRIP, 0, 4)), I.ef++, 0 !== I.Vx || d.UH) I.dj(I.ei), I.vb.stack.push(I.vb.top), I.vb.top = this.Ad, 1 === I.Vx || d.UH ? (d = this.Ci, d = [I.d(d.tl.vertices.x, d.tl.vertices.y), I.d(d.bl.vertices.x, d.bl.vertices.y), I.d(d.br.vertices.x, d.br.vertices.y), I.d(d.tr.vertices.x, d.tr.vertices.y)], I.Yk.bf(d, 4, p)) : 2 === I.Vx && (e = d.jW(), d = d.WV(), d = [I.d(d.x, d.y), I.d(d.x + e.width, d.y), I.d(d.x + e.width, d.y + e.height), I.d(d.x, d.y + e.height)], I.Yk.bf(d, 4, p)), I.vb.top = I.vb.stack.pop()
	}
})();
I.Ub = I.i.extend({
	aa: s,
	se: s,
	$b: "SpriteBatchNode",
	ctor: function(a, c) {
		I.i.prototype.ctor.call(this);
		this.se = [];
		this.aa = new I.Zb(I.bi, I.Ug);
		var d;
		c = c || I.Ub.qD;
		I.ge(a) ? (d = I.wb.ur(a)) || (d = I.wb.md(a)) : a instanceof I.la && (d = a);
		d && this.Oa(d, c)
	},
	N3: function(a, c, d) {
		I.assert(a, I.k.SO);
		if (!(a instanceof I.F)) return I.log(I.k.RO), s;
		a.atlasIndex = c;
		var e = 0,
			f, g = this.se;
		if (g && 0 < g.length) {
			e = 0;
			for (f = g.length; e < f; e++) {
				var h = g[e];
				if (h && h.atlasIndex >= c) break
			}
		}
		g.splice(e, 0, a);
		I.i.prototype.N.call(this, a, c, d);
		this.NK(u);
		return this
	},
	pk: function() {
		return this.f.pk()
	},
	gs: y(),
	DV: D("se"),
	Sv: function(a, c) {
		var d = I.wb.ur(a);
		d || (d = I.wb.md(a));
		return this.Oa(d, c)
	},
	q3: y(),
	pa: function(a, c) {
		var d = I.wb.ur(a);
		d || (d = I.wb.md(a));
		return this.Oa(d, c)
	},
	wr: function() {
		this.f.wr()
	},
	Gaa: function(a, c) {
		this.removeChild(this.P[a], c)
	},
	HK: function(a, c) {
		var d = a.children;
		if (d && 0 < d.length)
			for (var e = 0; e < d.length; e++) {
				var f = d[e];
				f && 0 > f.zIndex && (c = this.HK(f, c))
			}!a === this && (a.atlasIndex = c, c++);
		if (d && 0 < d.length)
			for (e = 0; e < d.length; e++)(f = d[e]) && 0 <=
				f.zIndex && (c = this.HK(f, c));
		return c
	},
	ZB: function(a) {
		var c = a.children;
		return !c || 0 === c.length ? a.atlasIndex : this.ZB(c[c.length - 1])
	},
	qX: function(a) {
		var c = a.children;
		return !c || 0 === c.length ? a.atlasIndex : this.qX(c[c.length - 1])
	},
	TT: function(a, c) {
		var d = a.parent,
			e = d.children,
			f = e.indexOf(a),
			g = s;
		0 < f && f < I.$P && (g = e[f - 1]);
		return d === this ? 0 === f ? 0 : this.ZB(g) + 1 : 0 === f ? 0 > c ? d.atlasIndex : d.atlasIndex + 1 : 0 > g.zIndex && 0 > c || 0 <= g.zIndex && 0 <= c ? this.ZB(g) + 1 : d.atlasIndex + 1
	},
	NK: A("we"),
	yk: function(a, c) {
		this.aa = c === m ? a : {
			src: a,
			Ra: c
		}
	},
	Dv: function() {
		return new I.Zb(this.aa.src, this.aa.Ra)
	},
	bs: function(a, c) {
		I.assert(a, I.k.XO); - 1 === this.P.indexOf(a) ? I.log(I.k.WO) : c !== a.zIndex && I.i.prototype.bs.call(this, a, c)
	},
	removeChild: function(a, c) {
		a != s && (-1 === this.P.indexOf(a) ? I.log(I.k.VO) : (this.tw(a), I.i.prototype.removeChild.call(this, a, c)))
	},
	Fda: function(a, c) {
		I.assert(a, I.k.wM);
		a instanceof I.F ? (this.f.VI(), a.batchNode = this, a.atlasIndex = c, a.dirty = p, a.ke()) : I.log(I.k.vM)
	},
	B8: function(a, c) {
		I.assert(a, I.k.uM);
		a instanceof I.F ? (this.f.oo(a, c),
			a.batchNode = this, a.atlasIndex = c, a.dirty = p, a.ke(), this.f.iJ(a, c)) : I.log(I.k.tM)
	},
	Oa: function(a, c) {
		this.P.length = 0;
		this.se.length = 0;
		c = c || I.Ub.qD;
		this.f.Oa(a, c);
		return p
	},
	QW: function(a, c) {
		a.batchNode = this;
		a.atlasIndex = c;
		a.dirty = p;
		this.f.oo(a, c);
		this.se.splice(c, 0, a);
		var d = c + 1,
			e = this.se;
		if (e && 0 < e.length)
			for (; d < e.length; d++) e[d].atlasIndex++;
		var e = a.children,
			f, g;
		if (e) {
			d = 0;
			for (g = e.length || 0; d < g; d++)(f = e[d]) && this.QW(f, this.TT(f, f.zIndex))
		}
	},
	appendChild: function(a) {
		this.we = p;
		a.batchNode = this;
		a.dirty = p;
		this.se.push(a);
		var c = this.se.length - 1;
		a.atlasIndex = c;
		this.f.oo(a, c);
		a = a.children;
		for (var c = 0, d = a.length || 0; c < d; c++) this.appendChild(a[c])
	},
	tw: function(a) {
		this.f.sw(a.atlasIndex);
		a.batchNode = s;
		var c = this.se,
			d = c.indexOf(a);
		if (-1 !== d) {
			c.splice(d, 1);
			for (var e = c.length; d < e; ++d) c[d].atlasIndex--
		}
		if (a = a.children) {
			c = 0;
			for (d = a.length || 0; c < d; c++) a[c] && this.tw(a[c])
		}
	},
	hc: function() {
		return this.f.hc()
	},
	mb: function(a) {
		this.f.mb(a)
	},
	N: function(a, c, d) {
		I.assert(a != s, I.k.rM);
		this.f.gK(a) && (c = c == s ? a.zIndex : c, d = d == s ? a.tag : d, I.i.prototype.N.call(this,
			a, c, d), this.appendChild(a))
	},
	$r: function(a) {
		var c = this.se;
		if (c && 0 < c.length)
			for (var d = 0, e = c.length; d < e; d++) c[d] && (c[d].batchNode = s);
		I.i.prototype.$r.call(this, a);
		this.se.length = 0;
		this.f.rw()
	},
	dg: function() {
		if (this.we) {
			var a = this.P,
				c, d = 0,
				e = a.length,
				f;
			for (c = 1; c < e; c++) {
				var g = a[c],
					d = c - 1;
				for (f = a[d]; 0 <= d && (g.cc < f.cc || g.cc === f.cc && g.arrivalOrder < f.arrivalOrder);) a[d + 1] = f, d -= 1, f = a[d];
				a[d + 1] = g
			}
			0 < a.length && (this.lg(a, I.i.Jf.dg), this.f.RL(a));
			this.we = u
		}
	},
	ed: function() {
		return I.ja === I.t.Tb ? new I.Ub.D(this) : new I.Ub.G(this)
	}
});
M = I.Ub.prototype;
I.p(M, "texture", M.hc, M.mb);
I.p(M, "textureAtlas", M.pk, M.gs);
I.p(M, "descendants", M.DV);
I.Ub.qD = 29;
I.Ub.create = function(a, c) {
	return new I.Ub(a, c)
};
I.Ub.vB = I.Ub.create;
(function() {
	I.Ub.D = function(a) {
		I.i.D.call(this, a);
		this.Ye = this.ba = s
	};
	var a = I.Ub.D.prototype = Object.create(I.i.D.prototype);
	a.constructor = I.Ub.D;
	a.VI = y();
	a.gK = function(a) {
		return !(a instanceof I.F) ? (I.log(I.k.XD), u) : p
	};
	a.Oa = function(a) {
		this.Ye = this.ba = a
	};
	a.oo = y();
	a.wr = y();
	a.sw = y();
	a.rw = y();
	a.hc = D("ba");
	a.mb = function(a) {
		this.ba = a;
		for (var d = this.o.P, e = 0; e < d.length; e++) d[e].mb(a)
	};
	a.RL = function(a) {
		for (var d = this.o.se.length = 0, e = a.length; d < e; d++) this.fv(a[d])
	};
	a.fv = function(a) {
		var d = this.o.se,
			e = a.children,
			f, g = e.length;
		for (f = 0; f < g; f++)
			if (0 > e[f].cc) d.push(e[f]);
			else break;
		for (d.push(a); f < g; f++) d.push(e[f])
	};
	a.pk = y();
	a.gs = y();
	a.iJ = function(a, d) {
		this.o.P.splice(d, 0, a)
	}
})();
(function() {
	I.Ub.G = function(a) {
		I.i.G.call(this, a);
		this.ib = p;
		this.gb = s
	};
	var a = I.Ub.G.prototype = Object.create(I.i.G.prototype);
	a.constructor = I.Ub.G;
	a.gK = function(a) {
		return !(a instanceof I.F) ? (I.log(I.k.XD), u) : a.texture != this.hc() ? (I.log(I.k.aP), u) : p
	};
	a.Sa = function() {
		var a = this.o;
		0 !== this.gb.totalQuads && (this.Wa.kc(), this.Wa.Ji(this.Ad), a.lg(a.P, I.i.Jf.ke), I.Xf(a.aa.src, a.aa.Ra), this.gb.QU())
	};
	a.ia = function(a) {
		var d = this.o;
		if (d.$d) {
			d.ab && d.ab.f && (this.og = d.ab.f.og + 1);
			var e = I.vb;
			e.stack.push(e.top);
			this.C &
				I.i.L.ga || this.transform(a);
			this.updateStatus(a);
			e.top = this.Ad;
			d.dg();
			I.Ga.Pg(this);
			this.C = 0;
			e.top = e.stack.pop()
		}
	};
	a.VI = function(a) {
		for (var d = this.gb; a >= d.capacity || d.capacity === d.totalQuads;) this.wr()
	};
	a.wr = function() {
		var a = this.gb.capacity,
			d = Math.floor(4 * (a + 1) / 3);
		I.log(I.k.TO, a, d);
		this.gb.SK(d) || I.log(I.k.UO)
	};
	a.Oa = function(a, d) {
		this.gb = new I.ji;
		this.gb.Oa(a, d);
		this.zl();
		this.Wa = I.cg.ad(I.wm)
	};
	a.oo = function(a, d) {
		var e = this.gb;
		e.totalQuads >= e.capacity && this.wr();
		e.oo(a.quad, d)
	};
	a.sw = function(a) {
		this.gb.sw(a)
	};
	a.hc = function() {
		return this.gb.texture
	};
	a.mb = function(a) {
		this.gb.mb(a);
		a && this.zl()
	};
	a.rw = function() {
		this.gb.rw()
	};
	a.bv = function(a, d) {
		var e = this.o.se,
			f = this.gb,
			g = f.quads,
			h = e[a],
			k = I.HE(g[a]);
		e[d].atlasIndex = a;
		e[a] = e[d];
		f.Ww(g[d], a);
		e[d] = h;
		f.Ww(k, d)
	};
	a.fv = function(a, d) {
		var e = 0,
			f = a.children;
		f && (e = f.length);
		var g = 0;
		if (0 === e) g = a.atlasIndex, a.atlasIndex = d, a.arrivalOrder = 0, g !== d && this.bv(g, d), d++;
		else {
			g = p;
			0 <= f[0].zIndex && (g = a.atlasIndex, a.atlasIndex = d, a.arrivalOrder = 0, g !== d && this.bv(g, d), d++, g = u);
			for (e =
				0; e < f.length; e++) {
				var h = f[e];
				g && 0 <= h.zIndex && (g = a.atlasIndex, a.atlasIndex = d, a.arrivalOrder = 0, g !== d && this.bv(g, d), d++, g = u);
				d = this.fv(h, d)
			}
			g && (g = a.atlasIndex, a.atlasIndex = d, a.arrivalOrder = 0, g !== d && this.bv(g, d), d++)
		}
		return d
	};
	a.RL = function(a) {
		for (var d = 0, e = 0; e < a.length; e++) d = this.fv(a[e], d)
	};
	a.zl = function() {
		if (!this.gb.texture.io()) {
			var a = this.o.aa;
			a.src = I.SRC_ALPHA;
			a.Ra = I.ONE_MINUS_SRC_ALPHA
		}
	};
	a.pk = D("gb");
	a.gs = function(a) {
		a !== this.gb && (this.gb = a)
	};
	a.iJ = y()
})();
I.pM = I.F.extend({
	Mj: s,
	mg: s,
	ctor: function() {
		I.F.prototype.ctor.call(this);
		var a = document.createElement("canvas");
		a.width = a.height = 10;
		this.Mj = a;
		this.mg = new I.vs(a.getContext("2d"));
		var c = new I.la;
		c.Fd(a);
		c.Jb();
		this.mb(c)
	},
	u6: D("mg"),
	t6: D("Mj"),
	QK: function(a, c) {
		var d = this.Mj,
			e = this.mg,
			f = e.La.strokeStyle,
			g = e.La.fillStyle;
		c === m && (c = a.height, a = a.width);
		d.width = a;
		d.height = c;
		f !== e.La.strokeStyle && (e.La.strokeStyle = f);
		g !== e.La.fillStyle && (e.La.fillStyle = g);
		this.hc().Jb();
		this.Yb(I.rect(0, 0, a, c), u, s, u)
	}
});
I.rf = I.Ta.extend({
	vn: s,
	fd: 0,
	Ln: s,
	ctor: function(a, c, d) {
		this.vn = a || s;
		this.fd = c || 0;
		this.Ln = d || s
	},
	j: function() {
		var a = new I.rf;
		a.Yf(this.vn.j(), this.fd, this.Ln);
		return a
	},
	uv: function() {
		return I.j(this)
	},
	copy: function() {
		var a = new I.rf;
		a.Yf(this.vn.j(), this.fd, this.Ln);
		return a
	},
	Yf: function(a, c, d) {
		this.vn = a;
		this.fd = c;
		this.Ln = d;
		return p
	},
	Jg: D("vn"),
	Mo: A("vn"),
	H6: D("fd"),
	Cba: A("fd"),
	c8: D("Ln"),
	Lca: A("Ln")
});
I.rf.create = function(a, c, d) {
	return new I.rf(a, c, d)
};
I.ai = I.Ta.extend({
	Cf: s,
	wi: 0,
	nl: u,
	q: 0,
	fd: 0,
	yh: 0,
	ctor: function(a, c, d) {
		this.Cf = [];
		if (a === m) this.dK(s, 0);
		else {
			var e = a[0];
			e && (e instanceof I.cd ? this.dK(a, c, d) : e instanceof I.rf && this.Qv(a, c, d))
		}
	},
	a7: D("Cf"),
	Qba: A("Cf"),
	fB: function(a) {
		var c = new I.rf;
		c.Yf(a, 1, s);
		this.Cf.push(c);
		this.yh++
	},
	L3: function(a) {
		a = I.wb.md(a);
		var c = I.rect(0, 0, 0, 0);
		c.width = a.width;
		c.height = a.height;
		a = new I.cd(a, c);
		this.fB(a)
	},
	M3: function(a, c) {
		var d = new I.cd(a, c);
		this.fB(d)
	},
	Qv: function(a, c, d) {
		I.dr(a, I.rf);
		this.fd = c;
		this.wi = d === m ? 1 :
			d;
		this.yh = 0;
		c = this.Cf;
		for (d = c.length = 0; d < a.length; d++) {
			var e = a[d];
			c.push(e);
			this.yh += e.fd
		}
		return p
	},
	j: function() {
		var a = new I.ai;
		a.Qv(this.hF(), this.fd, this.wi);
		a.Nw(this.nl);
		return a
	},
	uv: function() {
		var a = new I.ai;
		a.Qv(this.hF(), this.fd, this.wi);
		a.Nw(this.nl);
		return a
	},
	hF: function() {
		for (var a = [], c = 0; c < this.Cf.length; c++) a.push(this.Cf[c].j());
		return a
	},
	copy: function() {
		return this.uv(s)
	},
	j7: D("wi"),
	Yba: A("wi"),
	Nw: A("nl"),
	E7: D("nl"),
	KB: function() {
		return this.yh * this.fd
	},
	G6: D("fd"),
	Bba: A("fd"),
	U7: D("yh"),
	dK: function(a, c, d) {
		I.dr(a, I.cd);
		this.wi = d === m ? 1 : d;
		this.fd = c || 0;
		this.yh = 0;
		c = this.Cf;
		c.length = 0;
		if (a) {
			for (d = 0; d < a.length; d++) {
				var e = a[d],
					f = new I.rf;
				f.Yf(e, 1, s);
				c.push(f)
			}
			this.yh += a.length
		}
		return p
	},
	yw: y(),
	he: y()
});
I.ai.create = function(a, c, d) {
	return new I.ai(a, c, d)
};
I.ai.E4 = I.ai.create;
I.lv = {
	Dm: {},
	EI: function(a, c) {
		this.Dm[c] = a
	},
	Faa: function(a) {
		a && this.Dm[a] && delete this.Dm[a]
	},
	tJ: function(a) {
		return this.Dm[a] ? this.Dm[a] : s
	},
	zQ: function(a, c) {
		var d = a.animations;
		if (d) {
			var e = 1,
				f = a.properties;
			if (f)
				for (var e = f.format != s ? parseInt(f.format) : e, f = f.spritesheets, g = I.Rg, h = I.path, k = 0; k < f.length; k++) g.gB(h.ov(c, f[k]));
			switch (e) {
				case 1:
					this.iS(d);
					break;
				case 2:
					this.jS(d);
					break;
				default:
					I.log(I.k.HT)
			}
		} else I.log(I.k.GT)
	},
	E3: function(a) {
		I.assert(a, I.k.PT);
		var c = I.T.Be(a);
		c ? this.zQ(c, a) : I.log(I.k.OT)
	},
	iS: function(a) {
		var c = I.Rg,
			d;
		for (d in a) {
			var e = a[d],
				f = e.frames,
				e = parseFloat(e.delay) || 0,
				g = s;
			if (f) {
				for (var g = [], h = 0; h < f.length; h++) {
					var k = c.Jg(f[h]);
					if (k) {
						var n = new I.rf;
						n.Yf(k, 1, s);
						g.push(n)
					} else I.log(I.k.JT, d, f[h])
				}
				0 === g.length ? I.log(I.k.KT, d) : (g.length !== f.length && I.log(I.k.LT, d), g = new I.ai(g, e, 1), I.lv.EI(g, d))
			} else I.log(I.k.IT, d)
		}
	},
	jS: function(a) {
		var c = I.Rg,
			d;
		for (d in a) {
			var e = a[d],
				f = parseInt(e.loops),
				f = e.loop ? I.Ie : isNaN(f) ? 1 : f,
				g = e.restoreOriginalFrame && e.restoreOriginalFrame == p ? p : u,
				h = e.frames;
			if (h) {
				for (var k = [], n = 0; n < h.length; n++) {
					var r = h[n],
						t = r.spriteframe,
						v = c.Jg(t);
					if (v) {
						var t = parseFloat(r.delayUnits) || 0,
							r = r.notification,
							B = new I.rf;
						B.Yf(v, t, r);
						k.push(B)
					} else I.log(I.k.NT, d, t)
				}
				e = parseFloat(e.delayPerUnit) || 0;
				h = new I.ai;
				h.Qv(k, e, f);
				h.Nw(g);
				I.lv.EI(h, d)
			} else I.log(I.k.MT, d)
		}
	},
	Pm: function() {
		this.Dm = {}
	}
};
I.cd = I.Ta.extend({
	Cb: s,
	Zj: s,
	Vd: s,
	xe: u,
	wa: s,
	Ff: s,
	Te: s,
	ba: s,
	Cn: "",
	V: u,
	ctor: function(a, c, d, e, f) {
		this.Cb = I.d(0, 0);
		this.Ff = I.d(0, 0);
		this.Zj = I.size(0, 0);
		this.xe = u;
		this.Te = I.size(0, 0);
		this.Cn = "";
		this.ba = s;
		this.V = u;
		a !== m && c !== m && (d === m || e === m || f === m ? this.Oa(a, c) : this.Oa(a, c, d, e, f))
	},
	XC: D("V"),
	ar: function(a, c) {
		this.addEventListener("load", a, c)
	},
	$V: function() {
		var a = this.Vd;
		return I.rect(a.x, a.y, a.width, a.height)
	},
	nca: function(a) {
		this.Vd || (this.Vd = I.rect(0, 0, 0, 0));
		this.Vd.x = a.x;
		this.Vd.y = a.y;
		this.Vd.width = a.width;
		this.Vd.height = a.height;
		this.wa = I.ow(a)
	},
	T8: D("xe"),
	qca: A("xe"),
	Zi: function() {
		var a = this.wa;
		return I.rect(a.x, a.y, a.width, a.height)
	},
	uL: function(a) {
		this.wa || (this.wa = I.rect(0, 0, 0, 0));
		this.wa.x = a.x;
		this.wa.y = a.y;
		this.wa.width = a.width;
		this.wa.height = a.height;
		this.Vd = I.Zr(this.wa)
	},
	s7: function() {
		return I.d(this.Ff)
	},
	dca: function(a) {
		this.Ff.x = a.x;
		this.Ff.y = a.y;
		I.Vz(this.Ff, this.Cb)
	},
	u7: function() {
		return I.size(this.Te)
	},
	fca: function(a) {
		this.Te.width = a.width;
		this.Te.height = a.height
	},
	Gv: function() {
		return I.size(this.Zj)
	},
	eca: function(a) {
		this.Zj.width = a.width;
		this.Zj.height = a.height
	},
	hc: function() {
		if (this.ba) return this.ba;
		if ("" !== this.Cn) {
			var a = I.wb.md(this.Cn);
			a && (this.V = a.V);
			return a
		}
		return s
	},
	mb: function(a) {
		if (this.ba !== a) {
			var c = a.V;
			this.V = c;
			this.ba = a;
			c || a.addEventListener("load", function(a) {
				this.V = p;
				if (this.xe && I.ja === I.t.Tb) {
					var c = a.Xa,
						c = I.F.D.Oy(c, this.Zi()),
						f = new I.la;
					f.Fd(c);
					f.Jb();
					this.mb(f);
					c = this.Zi();
					this.uL(I.rect(0, 0, c.width, c.height))
				}
				c = this.wa;
				0 === c.width && 0 === c.height && (c = a.width, a = a.height, this.wa.width =
					c, this.wa.height = a, this.Vd = I.Zr(this.wa), this.Te.width = this.Vd.width, this.Te.height = this.Vd.height, this.Zj.width = c, this.Zj.height = a);
				this.dispatchEvent("load")
			}, this)
		}
	},
	yJ: function() {
		return I.d(this.Cb)
	},
	fs: function(a) {
		this.Cb.x = a.x;
		this.Cb.y = a.y
	},
	j: function() {
		var a = new I.cd;
		a.Oa(this.Cn, this.Vd, this.xe, this.Ff, this.Te);
		a.mb(this.ba);
		return a
	},
	uv: function() {
		var a = new I.cd;
		a.Oa(this.Cn, this.Vd, this.xe, this.Ff, this.Te);
		a.mb(this.ba);
		return a
	},
	copy: function() {
		return this.uv()
	},
	Oa: function(a, c, d, e, f) {
		2 ===
			arguments.length && (c = I.Zr(c));
		e = e || I.d(0, 0);
		f = f || c;
		d = d || u;
		I.ge(a) ? (this.ba = s, this.Cn = a) : a instanceof I.la && this.mb(a);
		a = this.hc();
		this.Vd = c;
		c = this.wa = I.ow(c);
		if (a && a.url && a.V) {
			var g, h;
			d ? (g = c.x + c.height, h = c.y + c.width) : (g = c.x + c.width, h = c.y + c.height);
			g > a.PB() && I.error(I.k.Px, a.url);
			h > a.OB() && I.error(I.k.Ox, a.url)
		}
		this.Ff.x = e.x;
		this.Ff.y = e.y;
		I.Vz(e, this.Cb);
		this.Te.width = f.width;
		this.Te.height = f.height;
		I.VH(f, this.Zj);
		this.xe = d;
		return p
	}
});
I.tf.prototype.apply(I.cd.prototype);
I.cd.create = function(a, c, d, e, f) {
	return new I.cd(a, c, d, e, f)
};
I.cd.vB = I.cd.create;
I.cd.M2 = function(a, c, d, e, f) {
	var g = new I.cd;
	g.ba = a;
	g.Vd = c;
	g.wa = I.ow(c);
	g.Ff.x = e.x;
	g.Ff.y = e.y;
	I.Vz(g.Ff, g.Cb);
	g.Te.width = f.width;
	g.Te.height = f.height;
	I.VH(g.Te, g.Zj);
	g.xe = d;
	return g
};
I.Rg = {
	KE: /^\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*$/,
	nQ: /^\s*\{\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*,\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*\}\s*$/,
	Bg: {},
	Mi: {},
	kh: {},
	pH: function(a) {
		a = this.nQ.exec(a);
		return !a ? I.rect(0, 0, 0, 0) : I.rect(parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]), parseFloat(a[4]))
	},
	dH: function(a) {
		a = this.KE.exec(a);
		return !a ? I.d(0, 0) : I.d(parseFloat(a[1]), parseFloat(a[2]))
	},
	EA: function(a) {
		a = this.KE.exec(a);
		return !a ? I.size(0, 0) :
			I.size(parseFloat(a[1]), parseFloat(a[2]))
	},
	mR: function(a) {
		var c = I.T.Be(a);
		I.assert(c, I.k.CL, a);
		I.T.he(a);
		if (c.dn) return this.kh[a] = c;
		this.kh[a] = this.$G(c);
		return this.kh[a]
	},
	nR: function(a, c) {
		I.assert(c, I.k.CL, a);
		this.kh[a] = this.$G(c);
		return this.kh[a]
	},
	$G: function(a) {
		var c = a.frames,
			d = a.metadata || a.meta;
		a = {};
		var e = {},
			f = 0;
		d && (f = d.format, f = 1 >= f.length ? parseInt(f) : f, e.zW = d.textureFileName || d.textureFileName || d.image);
		for (var g in c) {
			var h = c[g];
			if (h) {
				d = {};
				if (0 == f) {
					d.rect = I.rect(h.x, h.y, h.width, h.height);
					d.zw = u;
					d.offset = I.d(h.offsetX, h.offsetY);
					var k = h.originalWidth,
						h = h.originalHeight;
					(!k || !h) && I.log(I.k.IZ);
					k = Math.abs(k);
					h = Math.abs(h);
					d.size = I.size(k, h)
				} else if (1 == f || 2 == f) d.rect = this.pH(h.frame), d.zw = h.rotated || u, d.offset = this.dH(h.offset), d.size = this.EA(h.sourceSize);
				else if (3 == f) {
					var k = this.EA(h.spriteSize),
						n = this.pH(h.textureRect);
					k && (n = I.rect(n.x, n.y, k.width, k.height));
					d.rect = n;
					d.zw = h.textureRotated || u;
					d.offset = this.dH(h.spriteOffset);
					d.size = this.EA(h.spriteSourceSize);
					d.DT = h.aliases
				} else k =
					h.frame, n = h.sourceSize, g = h.filename || g, d.rect = I.rect(k.x, k.y, k.w, k.h), d.zw = h.rotated || u, d.offset = I.d(0, 0), d.size = I.size(n.w, n.h);
				a[g] = d
			}
		}
		return {
			dn: p,
			frames: a,
			ew: e
		}
	},
	x2: function(a, c, d) {
		I.assert(a, I.k.DL);
		c && c.frames && (c = this.kh[a] || this.nR(a, c), this.kF(a, c, d))
	},
	kF: function(a, c, d) {
		var e = c.frames;
		c = c.ew;
		d ? d instanceof I.la || (I.ge(d) ? d = I.wb.md(d) : I.assert(0, I.k.KZ)) : d = I.wb.md(I.path.ov(a, c.zW || ".png"));
		a = this.Mi;
		c = this.Bg;
		for (var f in e) {
			var g = e[f],
				h = c[f];
			if (!h) {
				h = new I.cd(d, g.rect, g.zw, g.offset, g.size);
				if (g = g.DT)
					for (var k = 0, n = g.length; k < n; k++) {
						var r = g[k];
						a[r] && I.log(I.k.JZ, r);
						a[r] = f
					}
				I.ja === I.t.Tb && h.xe && h.hc().V && (g = h.hc().Xa, g = I.F.D.Oy(g, h.$V()), k = new I.la, k.Fd(g), k.Jb(), h.mb(k), g = h.wa, h.uL(I.rect(0, 0, g.width, g.height)));
				c[f] = h
			}
		}
	},
	gB: function(a, c) {
		I.assert(a, I.k.DL);
		var d = this.kh[a] || I.T.Be(a);
		d && d.frames && (d = this.kh[a] || this.mR(a), this.kF(a, d, c))
	},
	D2: function(a) {
		a = a.frames;
		for (var c in a) this.Bg[c] && I.log(I.k.HZ, c)
	},
	fB: function(a, c) {
		this.Bg[c] = a
	},
	Laa: function() {
		this.Bg = {};
		this.Mi = {}
	},
	hY: function(a) {
		a &&
			(this.Mi[a] && delete this.Mi[a], this.Bg[a] && delete this.Bg[a])
	},
	Maa: function(a) {
		var c = this.Bg,
			d = this.Mi;
		if (a = this.kh[a]) {
			a = a.frames;
			for (var e in a)
				if (c[e]) {
					delete c[e];
					for (var f in d) d[f] === e && delete d[f]
				}
		}
	},
	Naa: function(a) {
		var c = this.Bg,
			d = this.Mi,
			e;
		for (e in c) {
			var f = c[e];
			if (f && f.hc() === a) {
				delete c[e];
				for (var g in d) d[g] === e && delete d[g]
			}
		}
	},
	Jg: function(a) {
		var c = this.Bg[a];
		if (!c) {
			var d = this.Mi[a];
			d && ((c = this.Bg[d.toString()]) || delete this.Mi[a])
		}
		return c
	},
	Pm: function() {
		this.Bg = {};
		this.Mi = {};
		this.kh = {}
	}
};
I.Un = {
	x0: 0,
	O1: 1,
	INT: 2,
	q0: 3,
	K_: 4,
	xq: 0,
	cS: 0,
	MA: u,
	av: u,
	KA: u,
	LA: u,
	NA: u,
	a3: 0,
	Jz: 0,
	Bt: "",
	Xq: {},
	dn: u,
	ui: function() {
		var a = this.Xq;
		a["cocos2d.x.version"] = I.px;
		a["cocos2d.x.compiled_with_profiler"] = u;
		a["cocos2d.x.compiled_with_gl_state_cache"] = I.gg;
		this.dn = p
	},
	l7: D("xq"),
	k7: D("cS"),
	m7: D("Jz"),
	gda: D("av"),
	hda: D("MA"),
	fda: E(u),
	ida: E(u),
	cda: E(u),
	dda: D("KA"),
	eda: D("LA"),
	jda: D("NA"),
	Rn: function(a) {
		return -1 < this.Bt.indexOf(a)
	},
	e8: function(a, c) {
		this.dn || this.ui();
		var d = this.Xq;
		return d[a] ? d[a] : c
	},
	Nca: function(a, c) {
		this.Xq[a] =
			c
	},
	TU: function() {
		0 === I.gg && (I.log(""), I.log(I.k.mU), I.log(""))
	},
	rV: function() {
		if (I.ja !== I.t.Tb) {
			this.dn || this.ui();
			var a = I.s,
				c = this.Xq;
			c["gl.vendor"] = a.getParameter(a.VENDOR);
			c["gl.renderer"] = a.getParameter(a.RENDERER);
			c["gl.version"] = a.getParameter(a.VERSION);
			this.Bt = "";
			for (var d = a.getSupportedExtensions(), e = 0; e < d.length; e++) this.Bt += d[e] + " ";
			this.xq = a.getParameter(a.MAX_TEXTURE_SIZE);
			c["gl.max_texture_size"] = this.xq;
			this.Jz = a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
			c["gl.max_texture_units"] =
				this.Jz;
			this.MA = this.Rn("GL_IMG_texture_compression_pvrtc");
			c["gl.supports_PVRTC"] = this.MA;
			this.av = u;
			c["gl.supports_NPOT"] = this.av;
			this.KA = this.Rn("GL_IMG_texture_format_BGRA888");
			c["gl.supports_BGRA8888"] = this.KA;
			this.LA = this.Rn("GL_EXT_discard_framebuffer");
			c["gl.supports_discard_framebuffer"] = this.LA;
			this.NA = this.Rn("vertex_array_object");
			c["gl.supports_vertex_array_object"] = this.NA;
			I.Sn()
		}
	},
	K9: function(a) {
		this.dn || this.ui();
		var c = I.T.Be(a);
		c || b(Error("Please load the resource first : " + a));
		I.assert(c,
			I.k.oU, a);
		if (c = c.data)
			for (var d in c) this.Xq[d] = c[d];
		else I.log(I.k.nU, a)
	}
};
I.ef = 0;
I.yD = function(a) {
	I.Gr(I.fi, a);
	var c = new I.e.X;
	I.Gr(I.ei, c);
	a.multiply(c)
};
I.Ca = I.Ta.extend({
	Z2: u,
	yq: u,
	Ob: u,
	Ju: u,
	ck: u,
	Cm: 0,
	Oz: 0,
	on: 0,
	Uk: 1,
	Nj: 0,
	kd: s,
	Xj: s,
	qh: s,
	sh: s,
	th: s,
	Ag: s,
	bA: s,
	rc: s,
	Tq: 0,
	FH: 0,
	J2: s,
	Jc: s,
	Le: s,
	bu: s,
	Zy: s,
	$y: s,
	Yy: s,
	ctor: function() {
		var a = this;
		a.Xj = Date.now();
		I.K.Fl(I.t.Bs, function() {
			a.Xj = Date.now()
		})
	},
	pa: function() {
		this.Oz = this.Cm = 1 / I.FU;
		this.Ag = [];
		this.on = I.Ca.lO;
		this.bA = s;
		this.Tq = 0;
		this.Xj = Date.now();
		this.Ju = this.Ob = u;
		this.kd = I.size(0, 0);
		this.th = s;
		this.Uk = 1;
		this.Jc = new I.xm;
		I.fD ? (this.Le = new I.fD, this.Jc.Ho(this.Le, I.xm.Ip, u)) : this.Le = s;
		this.Zy = new I.Xg(I.Ca.WM);
		this.Zy.setUserData(this);
		this.$y = new I.Xg(I.Ca.wD);
		this.$y.setUserData(this);
		this.Yy = new I.Xg(I.Ca.VM);
		this.Yy.setUserData(this);
		this.bu = new I.Xg(I.Ca.As);
		this.bu.setUserData(this);
		return p
	},
	aU: function() {
		var a = Date.now();
		this.yq ? (this.Nj = 0, this.yq = u) : this.Nj = (a - this.Xj) / 1E3;
		0 < I.t.Ib[I.t.Ld.nr] && 0.2 < this.Nj && (this.Nj = 1 / 60);
		this.Xj = a
	},
	aJ: s,
	bJ: s,
	RU: function() {
		var a = I.Ga;
		this.aU();
		this.Ob || (this.Jc.update(this.Nj), I.K.dispatchEvent(this.Zy));
		a.clear();
		this.qh && this.UY();
		this.yy && this.yy();
		this.rc &&
			(a.de === p ? (I.Ga.XI(), this.rc.f.og = 0, this.rc.ia(), a.RK()) : a.ga() === p && a.transform());
		this.sh && this.sh.ia();
		I.K.dispatchEvent(this.$y);
		I.ef = 0;
		this.ty && this.ty();
		a.Sa(I.s);
		this.Tq++;
		I.K.dispatchEvent(this.Yy);
		this.JQ()
	},
	yy: s,
	ty: s,
	end: function() {
		this.Ju = p
	},
	C6: D("Uk"),
	q7: D("sh"),
	kb: function() {
		return I.size(this.kd)
	},
	qW: function() {
		return I.size(this.kd.width * this.Uk, this.kd.height * this.Uk)
	},
	eo: s,
	Lv: s,
	fo: s,
	pause: function() {
		this.Ob || (this.Oz = this.Cm, this.fL(0.25), this.Ob = p)
	},
	faa: function() {
		I.assert(this.rc,
			I.k.NM);
		this.Ag.pop();
		var a = this.Ag.length;
		0 === a ? this.end() : (this.ck = p, this.qh = this.Ag[a - 1])
	},
	UX: function() {
		I.lv.Pm();
		I.Rg.Pm();
		I.wb.Pm()
	},
	VX: function() {
		this.ok().i_();
		I.K && I.K.fm(u);
		this.rc && (this.rc.Og(), this.rc.Qa(), this.rc.od());
		this.qh = this.rc = s;
		this.Ag.length = 0;
		this.HL();
		this.UX();
		I.Sn()
	},
	WX: function(a) {
		I.assert(a, I.k.uD);
		this.ck = u;
		this.Ag.push(a);
		this.qh = a
	},
	lj: function(a) {
		I.assert(a, I.k.uD);
		if (this.rc) {
			var c = this.Ag.length;
			0 === c ? (this.ck = p, this.Ag[c] = a) : (this.ck = p, this.Ag[c - 1] = a);
			this.qh = a
		} else this.WX(a),
			this.EL()
	},
	mf: function() {
		this.Ob && (this.fL(this.Oz), (this.Xj = Date.now()) || I.log(I.k.PM), this.Ob = u, this.Nj = 0)
	},
	yba: function(a) {
		a !== this.Uk && (this.Uk = a)
	},
	ds: s,
	Ew: s,
	Aba: y(),
	$ba: A("yq"),
	UY: function() {
		var a = u,
			c = u;
		I.$ && (a = this.rc ? this.rc instanceof I.$ : u, c = this.qh ? this.qh instanceof I.$ : u);
		if (!c) {
			if (c = this.rc) c.Og(), c.Qa();
			this.ck && c && c.od()
		}
		this.rc = this.qh;
		I.Ga.de = p;
		this.qh = s;
		!a && this.rc !== s && (this.rc.U(), this.rc.uk())
	},
	bca: function(a) {
		I.Ga.de = p;
		this.sh && (this.sh.Og(), this.sh.Qa(), this.sh.od());
		if (this.sh =
			a) this.sh.U(), this.sh.uk()
	},
	I6: D("bA"),
	Dba: A("bA"),
	Mw: s,
	Lo: s,
	MC: s,
	XV: s,
	rr: s,
	dL: s,
	W8: D("ck"),
	G7: D("rc"),
	p6: D("Cm"),
	K8: function() {
		return I.Wr ? I.Wr.cX() : u
	},
	FY: function(a) {
		I.Wr && (a ? I.Wr.yZ() : I.Wr.wW())
	},
	FJ: D("FH"),
	O8: D("yq"),
	$W: D("Ob"),
	V7: D("Tq"),
	gaa: function() {
		this.AK(1)
	},
	AK: function(a) {
		I.assert(this.rc, I.k.OM);
		var c = this.Ag,
			d = c.length;
		if (0 === a) this.end();
		else if (!(a >= d)) {
			for (; d > a;) {
				var e = c.pop();
				e.running && (e.Og(), e.Qa());
				e.od();
				d--
			}
			this.qh = c[c.length - 1];
			this.ck = p
		}
	},
	ok: D("Jc"),
	vL: function(a) {
		this.Jc !==
			a && (this.Jc = a)
	},
	Fh: D("Le"),
	bL: function(a) {
		this.Le !== a && (this.Le = a)
	},
	J6: D("Nj"),
	JQ: function() {
		this.FH = (Date.now() - this.Xj) / 1E3
	}
});
I.Ca.As = "director_projection_changed";
I.Ca.WM = "director_after_update";
I.Ca.wD = "director_after_visit";
I.Ca.VM = "director_after_draw";
I.RM = I.Ca.extend({
	Uv: u,
	EL: function() {
		this.yq = p;
		this.Uv = u
	},
	nK: function() {
		this.Ju ? (this.Ju = u, this.VX()) : this.Uv || this.RU()
	},
	HL: function() {
		this.Uv = p
	},
	fL: function(a) {
		this.Cm = a;
		this.Uv || (this.HL(), this.EL())
	}
});
I.Ca.PC = s;
I.Ca.qJ = p;
I.Ca.nz = function() {
	I.Ca.qJ && (I.Ca.qJ = u, I.Ca.PC = new I.RM, I.Ca.PC.pa());
	return I.Ca.PC
};
I.FU = 60;
I.Ca.jO = 0;
I.Ca.PD = 1;
I.Ca.kO = 3;
I.Ca.lO = I.Ca.PD;
I.t.addEventListener(I.t.Wg, function() {
	if (I.ja === I.t.Tb) {
		var a = I.Ca.prototype;
		a.rr = D("on");
		a.Lo = function(a) {
			this.on = a;
			I.K.dispatchEvent(this.bu)
		};
		a.ds = y();
		a.Ew = function(a) {
			I.Ga.Ec = a;
			I.Ga.bF = "rgb(" + a.r + "," + a.g + "," + a.b + ")"
		};
		a.Mw = function(a) {
			this.kd.width = I.Ka.width;
			this.kd.height = I.Ka.height;
			this.th = a || I.view;
			I.K && I.K.fm(p)
		};
		a.eo = function() {
			return this.kb()
		};
		a.Lv = function() {
			return I.d(0, 0)
		}
	} else I.Ca.kq = new Image, I.Ca.kq.addEventListener("load", function() {
		I.Ca.L2 = p
	}), I.kq && (I.Ca.kq.src = I.kq)
});
I.t.addEventListener(I.t.Wg, function() {
	if (I.ja === I.t.zb) {
		I.u0 = I.Ta.extend({
			Eda: y()
		});
		var a = I.Ca.prototype,
			c = function(a) {
				if (a && a.f) {
					a.f.Z(I.i.L.ga);
					var e = a.P;
					for (a = 0; a < e.length; a++) c(e[a])
				}
			};
		I.K.Fl(I.Ca.As, function() {
			for (var a = I.O.Ag, e = 0; e < a.length; e++) c(a[e])
		});
		a.Lo = function(a) {
			var c = this.kd;
			this.MC();
			var f = this.th,
				g = f.Zd.x / f.sa,
				f = f.Zd.y / f.Va;
			switch (a) {
				case I.Ca.jO:
					I.dj(I.fi);
					I.Yv();
					c = I.e.X.gJ(-g, c.width - g, -f, c.height - f, -1024, 1024);
					I.Hr(c);
					I.dj(I.ei);
					I.Yv();
					break;
				case I.Ca.PD:
					var h = this.fo(),
						k = new I.e.X,
						n = new I.e.X;
					I.dj(I.fi);
					I.Yv();
					k = I.e.X.BU(c.width / c.height, 2 * h);
					I.Hr(k);
					I.dj(I.ei);
					I.Yv();
					n.iC(new I.e.va(-g + c.width / 2, -f + c.height / 2, h), new I.e.va(-g + c.width / 2, -f + c.height / 2, 0), new I.e.va(0, 1, 0));
					I.Hr(n);
					break;
				case I.Ca.kO:
					break;
				default:
					I.log(I.k.QM)
			}
			this.on = a;
			I.K.dispatchEvent(this.bu);
			I.aZ();
			I.Ga.de = p
		};
		a.ds = function(a) {
			I.Ga.ds(a)
		};
		a.Ew = function(a) {
			I.Ga.Ec = a
		};
		a.Mw = function(a) {
			this.kd.width = I.Ka.width;
			this.kd.height = I.Ka.height;
			this.th = a || I.view;
			a = I.Un;
			a.rV();
			a.TU();
			this.lL();
			I.K && I.K.fm(p)
		};
		a.Pm =
			function() {
				var a = I.s;
				a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT)
			};
		a.yy = function() {
			I.$v()
		};
		a.ty = function() {
			I.Zv()
		};
		a.aJ = function(a) {
			var c = new I.e.X;
			I.yD(c);
			var f = c.inverse(),
				c = c.l[14] / c.l[15],
				g = this.th.wJ();
			a = new I.e.va(2 * a.x / g.width - 1, 1 - 2 * a.y / g.height, c);
			a.OL(f);
			return I.d(a.x, a.y)
		};
		a.bJ = function(a) {
			var c = new I.e.X;
			I.yD(c);
			a = new I.e.va(a.x, a.y, 0);
			a.OL(c);
			c = this.th.wJ();
			return I.d(c.width * (0.5 * a.x + 0.5), c.height * (0.5 * -a.y + 0.5))
		};
		a.eo = function() {
			return this.th.eo()
		};
		a.Lv = function() {
			return this.th.Lv()
		};
		a.fo = function() {
			return this.kd.height / 1.1566
		};
		a.MC = function() {
			var a = this.th;
			if (a) {
				var c = this.kd;
				a.xZ(-a.Zd.x / a.sa, -a.Zd.y / a.Va, c.width, c.height)
			}
		};
		a.XV = D("th");
		a.rr = D("on");
		a.dL = function(a) {
			a ? I.Xf(I.bi, I.Ug) : I.Xf(I.s.ONE, I.s.ZERO)
		};
		a.lL = function() {
			this.dL(p);
			this.ds(u);
			this.Lo(this.on);
			I.s.clearColor(0, 0, 0, 0)
		}
	}
});
I.jp = I.Ta.extend({
	Vm: s,
	Wm: s,
	Xm: s,
	Qk: s,
	Rk: s,
	Sk: s,
	In: s,
	Jn: s,
	Kn: s,
	Ab: u,
	jn: s,
	ctor: function() {
		this.jn = new I.e.X;
		this.restore()
	},
	description: function() {
		return "\x3cCCCamera | center \x3d(" + this.Qk + "," + this.Rk + "," + this.Sk + ")\x3e"
	},
	Gw: A("Ab"),
	zr: D("Ab"),
	restore: function() {
		this.Vm = this.Wm = 0;
		this.Xm = I.jp.fo();
		this.In = this.Qk = this.Rk = this.Sk = 0;
		this.Jn = 1;
		this.Kn = 0;
		this.jn.qd();
		this.Ab = u
	},
	L9: function() {
		this.Ab && (this.jn.iC(new I.e.va(this.Vm, this.Wm, this.Xm), new I.e.va(this.Qk, this.Rk, this.Sk), new I.e.va(this.In,
			this.Jn, this.Kn)), this.Ab = u);
		I.Hr(this.jn)
	},
	OG: function(a) {
		this.Ab && (this.jn.iC(new I.e.va(this.Vm, this.Wm, this.Xm), new I.e.va(this.Qk, this.Rk, this.Sk), new I.e.va(this.In, this.Jn, this.Kn)), this.Ab = u);
		a.multiply(this.jn)
	},
	Kba: function(a, c, d) {
		this.jL(a, c, d)
	},
	jL: function(a, c, d) {
		this.Vm = a;
		this.Wm = c;
		this.Xm = d;
		this.Ab = p
	},
	tba: function(a, c, d) {
		this.BY(a, c, d)
	},
	BY: function(a, c, d) {
		this.Qk = a;
		this.Rk = c;
		this.Sk = d;
		this.Ab = p
	},
	Kca: function(a, c, d) {
		this.rZ(a, c, d)
	},
	rZ: function(a, c, d) {
		this.In = a;
		this.Jn = c;
		this.Kn = d;
		this.Ab =
			p
	},
	S6: function() {
		return {
			x: this.Vm,
			y: this.Wm,
			z: this.Xm
		}
	},
	xJ: function() {
		return {
			x: this.Vm,
			y: this.Wm,
			z: this.Xm
		}
	},
	x6: function() {
		return {
			x: this.Qk,
			y: this.Rk,
			z: this.Sk
		}
	},
	vJ: function() {
		return {
			x: this.Qk,
			y: this.Rk,
			z: this.Sk
		}
	},
	b8: function() {
		return {
			x: this.In,
			y: this.Jn,
			z: this.Kn
		}
	},
	kW: function() {
		return {
			x: this.In,
			y: this.Jn,
			z: this.Kn
		}
	},
	u2: y()
});
I.jp.fo = function() {
	return I.Ts
};
I.D1 = I.Ip + 1;
I.DD = function(a, c, d, e) {
	this.next = this.haa = s;
	this.ce = a;
	this.target = c;
	this.Ao = d;
	this.paused = e;
	this.gj = u
};
I.zD = function(a, c, d, e) {
	this.list = a;
	this.df = c;
	this.target = d;
	this.ce = s;
	this.Pv = e
};
I.kN = I.v8 = function(a, c, d, e, f, g, h) {
	this.je = a;
	this.target = c;
	this.Yo = d;
	this.kr = e;
	this.lr = f;
	this.paused = g;
	this.Pv = h
};
I.ey = I.Ta.extend({
	Jc: s,
	Bb: 0,
	Pu: u,
	Wq: u,
	wl: 0,
	Nu: 0,
	eq: 0,
	tg: 0,
	h7: D("tg"),
	setInterval: A("tg"),
	zL: function(a, c, d) {
		this.Bb = -1;
		this.tg = a;
		this.eq = d;
		this.Wq = 0 < this.eq;
		this.Nu = c;
		this.Pu = this.Nu === I.Ie
	},
	Ak: E(0),
	cancel: E(0),
	ctor: function() {
		this.Jc = s;
		this.Bb = -1;
		this.Wq = this.Pu = u;
		this.tg = this.eq = this.Nu = this.wl = 0
	},
	update: function(a) {
		-1 === this.Bb ? this.wl = this.Bb = 0 : (this.Bb += a, this.Pu && !this.Wq ? this.Bb >= this.tg && (this.Ak(), this.Bb = 0) : (this.Wq ? this.Bb >= this.eq && (this.Ak(), this.Bb -= this.eq, this.wl += 1, this.Wq = u) : this.Bb >=
			this.tg && (this.Ak(), this.Bb = 0, this.wl += 1), !this.Pu && this.wl > this.Nu && this.cancel()))
	}
});
I.UP = I.ey.extend({
	Lf: s,
	ak: s,
	ctor: function() {
		this.ak = this.Lf = s
	},
	JW: function(a, c, d, e, f, g) {
		this.Jc = a;
		this.Lf = d;
		this.ak = c;
		this.zL(e, f, g);
		return p
	},
	L7: D("ak"),
	Ak: function() {
		this.Lf && this.ak && this.Lf.call(this.ak, this.Bb)
	},
	cancel: function() {
		this.Jc.Sg(this.ak, this.Lf)
	}
});
I.TP = I.ey.extend({
	Lf: s,
	ng: s,
	HG: s,
	ctor: function() {
		this.ng = this.Lf = s
	},
	FW: function(a, c, d, e, f, g, h) {
		this.Jc = a;
		this.Lf = d;
		this.ng = c;
		this.HG = e;
		this.zL(f, g, h);
		return p
	},
	v6: D("ng"),
	getKey: D("HG"),
	Ak: function() {
		this.ng && this.ng.call(this.Lf, this.Bb)
	},
	cancel: function() {
		this.Jc.Sg(this.ng, this.Lf)
	}
});
I.xm = I.Ta.extend({
	Sq: 1,
	Ah: s,
	zh: s,
	Bh: s,
	si: s,
	Em: s,
	rg: s,
	Ua: s,
	gh: u,
	Uq: u,
	ctor: function() {
		this.Sq = 1;
		this.Ah = [];
		this.zh = [];
		this.Bh = [];
		this.rg = {};
		this.si = {};
		this.Ua = s;
		this.Uq = this.gh = u;
		this.Em = []
	},
	xS: function(a, c, d, e) {
		var f = this.rg[c.W];
		if (f && f.df)
			if (f.df.Ao !== d) {
				if (this.Uq) {
					I.log("warning: you CANNOT change update priority in scheduled function");
					f.df.gj = u;
					f.df.paused = e;
					return
				}
				this.pj(c)
			} else {
				f.df.gj = u;
				f.df.paused = e;
				return
			}
		0 === d ? this.FQ(this.zh, a, c, e) : 0 > d ? this.iH(this.Ah, a, c, d, e) : this.iH(this.Bh, a, c, d, e)
	},
	dA: function(a) {
		delete this.si[a.target.W];
		I.Ed(this.Em, a);
		a.ey = s;
		a.target = s
	},
	Lu: function(a) {
		if (a = this.rg[a.target.W]) I.Ed(a.list, a.df), delete this.rg[a.target.W], a.df = s, a.target = s
	},
	iH: function(a, c, d, e, f) {
		c = new I.DD(c, d, e, f);
		if (a) {
			f = a.length - 1;
			for (var g = 0; g <= f && !(e < a[g].Ao); g++);
			a.splice(g, 0, c)
		} else a = [], a.push(c);
		this.rg[d.W] = new I.zD(a, c, d);
		return a
	},
	FQ: function(a, c, d, e) {
		c = new I.DD(c, d, 0, e);
		a.push(c);
		this.rg[d.W] = new I.zD(a, c, d, s)
	},
	mZ: A("Sq"),
	T7: D("Sq"),
	update: function(a) {
		this.Uq = p;
		1 !== this.Sq &&
			(a *= this.Sq);
		var c, d, e, f;
		c = 0;
		d = this.Ah;
		for (e = d.length; c < e; c++) f = d[c], !f.paused && !f.gj && f.ce(a);
		c = 0;
		d = this.zh;
		for (e = d.length; c < e; c++) f = d[c], !f.paused && !f.gj && f.ce(a);
		c = 0;
		d = this.Bh;
		for (e = d.length; c < e; c++) f = d[c], !f.paused && !f.gj && f.ce(a);
		e = this.Em;
		for (c = 0; c < e.length; c++) {
			this.Ua = d = e[c];
			this.gh = u;
			if (!d.paused)
				for (d.Yo = 0; d.Yo < d.je.length; ++d.Yo) d.kr = d.je[d.Yo], d.lr = u, d.kr.update(a), d.kr = s;
			this.gh && 0 === this.Ua.je.length && this.dA(this.Ua)
		}
		c = 0;
		for (d = this.Ah; c < d.length;) f = d[c], f.gj ? this.Lu(f) : c++;
		c = 0;
		for (d =
			this.zh; c < d.length;) f = d[c], f.gj ? this.Lu(f) : c++;
		c = 0;
		for (d = this.Bh; c < d.length;) f = d[c], f.gj ? this.Lu(f) : c++;
		this.Uq = u;
		this.Ua = s
	},
	gba: function(a, c, d, e, f, g) {
		this.mj(c, a, d, e, f, g, a.W + "")
	},
	mj: function(a, c, d, e, f, g, h) {
		var k = u;
		if ("function" !== typeof a) var n = a,
			k = p;
		if (k === u) {
			if (4 === arguments.length || 5 === arguments.length) h = f, g = e, f = 0, e = I.Ie
		} else 4 === arguments.length && (g = e, e = I.Ie, f = 0);
		h === m && (h = c.W + "");
		I.assert(c, I.k.OO);
		var r = this.si[c.W];
		r ? I.assert(r.paused === g, "") : (r = new I.kN(s, c, 0, s, s, g, s), this.Em.push(r), this.si[c.W] =
			r);
		var t, v;
		if (r.je == s) r.je = [];
		else if (k === u)
			for (v = 0; v < r.je.length; v++) {
				if (t = r.je[v], a === t.ng) {
					I.log(I.k.NO, t.tg.toFixed(4), d.toFixed(4));
					t.tg = d;
					return
				}
			} else
				for (v = 0; v < r.je.length; ++v)
					if ((t = r.je[v]) && n === t.ak) {
						I.log("CCScheduler#scheduleSelector. Selector already scheduled. Updating interval from: %.4f to %.4f", t.tg, d);
						t.setInterval(d);
						return
					}
		k === u ? (t = new I.TP, t.FW(this, a, c, h, d, e, f)) : (t = new I.UP, t.JW(this, n, c, d, e, f));
		r.je.push(t)
	},
	Ho: function(a, c, d) {
		this.xS(function(c) {
			a.update(c)
		}, a, c, d)
	},
	FR: function(a,
		c) {
		switch (typeof a) {
			case "number":
			case "string":
				return a === c.getKey();
			case "function":
				return a === c.ng;
			default:
				return a === c.ak
		}
	},
	Sg: function(a, c) {
		if (c && a) {
			var d = this.si[c.W];
			if (d)
				for (var e = d.je, f = 0, g = e.length; f < g; f++) {
					var h = e[f];
					if (this.FR(a, h)) {
						h === d.kr && !d.lr && (d.lr = p);
						e.splice(f, 1);
						d.Yo >= f && d.Yo--;
						0 === e.length && (this.Ua === d ? this.gh = p : this.dA(d));
						break
					}
				}
		}
	},
	pj: function(a) {
		if (a != s && (a = this.rg[a.W])) this.Uq ? a.df.gj = p : this.Lu(a.df)
	},
	PL: function(a) {
		if (a != s) {
			var c = this.si[a.W];
			c && (-1 < c.je.indexOf(c.kr) &&
				!c.lr && (c.lr = p), c.je.length = 0, this.Ua === c ? this.gh = p : this.dA(c));
			this.pj(a)
		}
	},
	i_: function() {
		this.$C(I.xm.Ip)
	},
	$C: function(a) {
		var c, d, e = this.Em;
		for (c = e.length - 1; 0 <= c; c--) d = e[c], this.PL(d.target);
		e = 0;
		if (0 > a)
			for (c = 0; c < this.Ah.length;) e = this.Ah.length, (d = this.Ah[c]) && d.Ao >= a && this.pj(d.target), e == this.Ah.length && c++;
		if (0 >= a)
			for (c = 0; c < this.zh.length;) e = this.zh.length, (d = this.zh[c]) && this.pj(d.target), e == this.zh.length && c++;
		for (c = 0; c < this.Bh.length;) e = this.Bh.length, (d = this.Bh[c]) && d.Ao >= a && this.pj(d.target),
			e == this.Bh.length && c++
	},
	U8: function(a, c) {
		I.assert(a, "Argument key must not be empty");
		I.assert(c, "Argument target must be non-nullptr");
		var d = this.rg[c.W];
		if (!d) return u;
		if (d.je != s)
			for (var d = d.je, e = 0; e < d.length; ++e)
				if (a === d[e].getKey()) return p;
		return u
	},
	Z$: function() {
		return this.JX(I.xm.Ip)
	},
	JX: function(a) {
		var c = [],
			d, e = this.Em,
			f, g;
		f = 0;
		for (g = e.length; f < g; f++)
			if (d = e[f]) d.paused = p, c.push(d.target);
		if (0 > a)
			for (f = 0; f < this.Ah.length; f++)
				if ((d = this.Ah[f]) && d.Ao >= a) d.paused = p, c.push(d.target);
		if (0 >= a)
			for (f =
				0; f < this.zh.length; f++)
				if (d = this.zh[f]) d.paused = p, c.push(d.target);
		for (f = 0; f < this.Bh.length; f++)
			if ((d = this.Bh[f]) && d.Ao >= a) d.paused = p, c.push(d.target);
		return c
	},
	pY: function(a) {
		if (a)
			for (var c = 0; c < a.length; c++) this.Qg(a[c])
	},
	zo: function(a) {
		I.assert(a, I.k.LO);
		var c = this.si[a.W];
		c && (c.paused = p);
		if (a = this.rg[a.W]) a.df.paused = p
	},
	Qg: function(a) {
		I.assert(a, I.k.MO);
		var c = this.si[a.W];
		c && (c.paused = u);
		if (a = this.rg[a.W]) a.df.paused = u
	},
	Z8: function(a) {
		I.assert(a, I.k.KO);
		var c = this.si[a.W];
		return c ? c.paused : (a =
			this.rg[a.W]) ? a.df.paused : u
	},
	iba: function(a, c, d) {
		this.Ho(a, c, d)
	},
	Bda: function(a, c) {
		this.Sg(c, a)
	},
	Cda: function(a) {
		this.pj(a)
	},
	zda: function(a) {
		this.Sg(a.W + "", a)
	},
	ZC: function() {
		this.$C(I.xm.Ip)
	},
	Ada: function(a) {
		this.$C(a)
	}
});
I.xm.Ip = -2147483648;
I.LD = 2 * Math.PI;
I.vD = I.Ta.extend({
	Ay: [],
	s: s,
	ctor: A("s"),
	NU: function(a, c) {
		c || (c = 1);
		var d = I.view.sa,
			e = I.d(a.x * d, a.y * I.view.Va),
			f = this.s.getContext();
		f.beginPath();
		f.arc(e.x, -e.y, c * d, 0, 2 * Math.PI, u);
		f.closePath();
		f.fill()
	},
	OU: function(a, c, d) {
		if (a != s) {
			d || (d = 1);
			c = this.s.getContext();
			var e = I.view.sa,
				f = I.view.Va;
			c.beginPath();
			for (var g = 0, h = a.length; g < h; g++) c.arc(a[g].x * e, -a[g].y * f, d * e, 0, 2 * Math.PI, u);
			c.closePath();
			c.fill()
		}
	},
	Vi: function(a, c) {
		var d = this.s.getContext(),
			e = I.view.sa,
			f = I.view.Va;
		d.beginPath();
		d.moveTo(a.x * e, -a.y *
			f);
		d.lineTo(c.x * e, -c.y * f);
		d.closePath();
		d.stroke()
	},
	CB: function(a, c) {
		this.Vi(I.d(a.x, a.y), I.d(c.x, a.y));
		this.Vi(I.d(c.x, a.y), I.d(c.x, c.y));
		this.Vi(I.d(c.x, c.y), I.d(a.x, c.y));
		this.Vi(I.d(a.x, c.y), I.d(a.x, a.y))
	},
	SU: function(a, c, d) {
		a = [a, I.d(c.x, a.y), c, I.d(a.x, c.y)];
		this.DB(a, 4, d)
	},
	bf: function(a, c, d, e) {
		e = e || u;
		if (a != s) {
			3 > a.length && b(Error("Polygon's point must greater than 2"));
			var f = a[0];
			c = this.s.getContext();
			var g = I.view.sa,
				h = I.view.Va;
			c.beginPath();
			c.moveTo(f.x * g, -f.y * h);
			for (var f = 1, k = a.length; f < k; f++) c.lineTo(a[f].x *
				g, -a[f].y * h);
			d && c.closePath();
			e ? c.fill() : c.stroke()
		}
	},
	DB: function(a, c, d) {
		this.es(d.r, d.g, d.b, d.a);
		this.bf(a, c, p, p)
	},
	zB: function(a, c, d, e, f) {
		f = f || u;
		e = this.s.getContext();
		var g = I.view.sa,
			h = I.view.Va;
		e.beginPath();
		e.arc(0 | a.x * g, 0 | -(a.y * h), c * g, -d, -(d - 2 * Math.PI), u);
		f && e.lineTo(0 | a.x * g, 0 | -(a.y * h));
		e.stroke()
	},
	BB: function(a, c, d, e) {
		for (var f = this.Ay, g = f.length = 0, h = 0; h < e; h++) f.push(I.d(Math.pow(1 - g, 2) * a.x + 2 * (1 - g) * g * c.x + g * g * d.x, Math.pow(1 - g, 2) * a.y + 2 * (1 - g) * g * c.y + g * g * d.y)), g += 1 / e;
		f.push(I.d(d.x, d.y));
		this.bf(f,
			e + 1, u, u)
	},
	AB: function(a, c, d, e, f) {
		for (var g = this.Ay, h = g.length = 0, k = 0; k < f; k++) g.push(I.d(Math.pow(1 - h, 3) * a.x + 3 * Math.pow(1 - h, 2) * h * c.x + 3 * (1 - h) * h * h * d.x + h * h * h * e.x, Math.pow(1 - h, 3) * a.y + 3 * Math.pow(1 - h, 2) * h * c.y + 3 * (1 - h) * h * h * d.y + h * h * h * e.y)), h += 1 / f;
		g.push(I.d(e.x, e.y));
		this.bf(g, f + 1, u, u)
	},
	yB: function(a, c) {
		this.Ll(a, 0.5, c)
	},
	Ll: function(a, c, d) {
		I.s.Pw("rgba(255,255,255,1)");
		var e = this.Ay;
		e.length = 0;
		for (var f, g, h = 1 / a.length, k = 0; k < d + 1; k++) g = k / d, 1 === g ? (f = a.length - 1, g = 1) : (f = 0 | g / h, g = (g - h * f) / h), f = I.b0(I.zc(a, f - 1), I.zc(a,
			f - 0), I.zc(a, f + 1), I.zc(a, f + 2), c, g), e.push(f);
		this.bf(e, d + 1, u, u)
	},
    drawImage: function(a, c, d, e, f) {
		var g = arguments.length,
			h = this.s.getContext();
        switch (g) {
			case 2:
				h.drawImage(a, c.x, -(c.y + a.height));
				break;
			case 3:
				h.drawImage(a, c.x, -(c.y + d.height), d.width, d.height);
				break;
			case 5:
				h.drawImage(a, c.x, c.y, d.width, d.height, e.x, -(e.y + f.height), f.width, f.height);
				break;
			default:
				b(Error("Argument must be non-nil"))
		}
	},
	Z4: function(a, c, d) {
		a = a || this.s;
		var e = a.getContext();
		c *= I.view.sa;
		d = "rgba(" + (0 | d.r) + "," + (0 | d.g) + "," + (0 |
			d.b);
		a.bg(d + ",1)");
		var f = c / 10;
		e.beginPath();
		e.moveTo(-c, c);
		e.lineTo(0, f);
		e.lineTo(c, c);
		e.lineTo(f, 0);
		e.lineTo(c, -c);
		e.lineTo(0, -f);
		e.lineTo(-c, -c);
		e.lineTo(-f, 0);
		e.lineTo(-c, c);
		e.closePath();
		e.fill();
		var g = e.createRadialGradient(0, 0, f, 0, 0, c);
		g.addColorStop(0, d + ", 1)");
		g.addColorStop(0.3, d + ", 0.8)");
		g.addColorStop(1, d + ", 0.0)");
		a.bg(g);
		e.beginPath();
		e.arc(0, 0, c - f, 0, I.LD, u);
		e.closePath();
		e.fill()
	},
	X4: function(a, c, d) {
		a = a || this.s;
		var e = a.getContext();
		c *= I.view.sa;
		d = "rgba(" + (0 | d.r) + "," + (0 | d.g) + "," + (0 |
			d.b);
		var f = e.createRadialGradient(0, 0, c / 10, 0, 0, c);
		f.addColorStop(0, d + ", 1)");
		f.addColorStop(0.3, d + ", 0.8)");
		f.addColorStop(0.6, d + ", 0.4)");
		f.addColorStop(1, d + ", 0.0)");
		a.bg(f);
		e.beginPath();
		e.arc(0, 0, c, 0, I.LD, u);
		e.closePath();
		e.fill()
	},
	fillText: function(a, c, d) {
		this.s.getContext().fillText(a, c, -d)
	},
	es: function(a, c, d, e) {
		this.s.bg("rgba(" + a + "," + c + "," + d + "," + e / 255 + ")");
		this.s.Pw("rgba(" + a + "," + c + "," + d + "," + e / 255 + ")")
	},
	XY: y(),
	nL: function(a) {
		this.s.getContext().lineWidth = a * I.view.sa
	}
});
I.SM = I.Ta.extend({
	s: s,
	pq: u,
	Wb: s,
	eh: -1,
	pe: s,
	Xz: -1,
	Wz: -1,
	ctor: function(a) {
		a == s && (a = I.s);
		!a instanceof WebGLRenderingContext && b(Error("Can't initialise DrawingPrimitiveWebGL. context need is WebGLRenderingContext"));
		this.s = a;
		this.pe = new Float32Array([1, 1, 1, 1])
	},
	ej: function() {
		this.pq || (this.Wb = I.cg.ad(I.Ux), this.eh = this.s.getUniformLocation(this.Wb.Iv(), "u_color"), this.Xz = this.s.getUniformLocation(this.Wb.Iv(), "u_pointSize"), this.pq = p)
	},
	Y4: function() {
		this.pq = u
	},
	NU: function(a) {
		this.ej();
		var c = this.s;
		this.Wb.kc();
		this.Wb.Wh();
		I.Zc(I.xd);
		c.uniform4fv(this.eh, this.pe);
		this.Wb.LC(this.Xz, this.Wz);
		var d = c.createBuffer();
		c.bindBuffer(c.ARRAY_BUFFER, d);
		c.bufferData(c.ARRAY_BUFFER, new Float32Array([a.x, a.y]), c.STATIC_DRAW);
		c.vertexAttribPointer(I.tb, 2, c.FLOAT, u, 0, 0);
		c.drawArrays(c.POINTS, 0, 1);
		c.deleteBuffer(d);
		I.Hh()
	},
	OU: function(a) {
		if (a && 0 !== a.length) {
			this.ej();
			var c = this.s;
			this.Wb.kc();
			this.Wb.Wh();
			I.Zc(I.xd);
			c.uniform4fv(this.eh, this.pe);
			this.Wb.LC(this.Xz, this.Wz);
			var d = c.createBuffer();
			c.bindBuffer(c.ARRAY_BUFFER,
				d);
			c.bufferData(c.ARRAY_BUFFER, this.Iu(a), c.STATIC_DRAW);
			c.vertexAttribPointer(I.tb, 2, c.FLOAT, u, 0, 0);
			c.drawArrays(c.POINTS, 0, a.length);
			c.deleteBuffer(d);
			I.Hh()
		}
	},
	Iu: function(a) {
		for (var c = new Float32Array(2 * a.length), d = 0; d < a.length; d++) c[2 * d] = a[d].x, c[2 * d + 1] = a[d].y;
		return c
	},
	Vi: function(a, c) {
		this.ej();
		var d = this.s;
		this.Wb.kc();
		this.Wb.Wh();
		I.Zc(I.xd);
		d.uniform4fv(this.eh, this.pe);
		var e = d.createBuffer();
		d.bindBuffer(d.ARRAY_BUFFER, e);
		d.bufferData(d.ARRAY_BUFFER, this.Iu([a, c]), d.STATIC_DRAW);
		d.vertexAttribPointer(I.tb,
			2, d.FLOAT, u, 0, 0);
		d.drawArrays(d.LINES, 0, 2);
		d.deleteBuffer(e);
		I.Hh()
	},
	CB: function(a, c) {
		this.Vi(I.d(a.x, a.y), I.d(c.x, a.y));
		this.Vi(I.d(c.x, a.y), I.d(c.x, c.y));
		this.Vi(I.d(c.x, c.y), I.d(a.x, c.y));
		this.Vi(I.d(a.x, c.y), I.d(a.x, a.y))
	},
	SU: function(a, c, d) {
		a = [a, I.d(c.x, a.y), c, I.d(a.x, c.y)];
		this.DB(a, 4, d)
	},
	bf: function(a, c, d) {
		this.ej();
		c = this.s;
		this.Wb.kc();
		this.Wb.Wh();
		I.Zc(I.xd);
		c.uniform4fv(this.eh, this.pe);
		var e = c.createBuffer();
		c.bindBuffer(c.ARRAY_BUFFER, e);
		c.bufferData(c.ARRAY_BUFFER, this.Iu(a), c.STATIC_DRAW);
		c.vertexAttribPointer(I.tb, 2, c.FLOAT, u, 0, 0);
		d ? c.drawArrays(c.LINE_LOOP, 0, a.length) : c.drawArrays(c.LINE_STRIP, 0, a.length);
		c.deleteBuffer(e);
		I.Hh()
	},
	DB: function(a, c, d) {
		this.ej();
		d && this.es(d.r, d.g, d.b, d.a);
		c = this.s;
		this.Wb.kc();
		this.Wb.Wh();
		I.Zc(I.xd);
		c.uniform4fv(this.eh, this.pe);
		d = c.createBuffer();
		c.bindBuffer(c.ARRAY_BUFFER, d);
		c.bufferData(c.ARRAY_BUFFER, this.Iu(a), c.STATIC_DRAW);
		c.vertexAttribPointer(I.tb, 2, c.FLOAT, u, 0, 0);
		c.drawArrays(c.TRIANGLE_FAN, 0, a.length);
		c.deleteBuffer(d);
		I.Hh()
	},
	zB: function(a,
		c, d, e, f) {
		this.ej();
		var g = 1;
		f && g++;
		var h = 2 * Math.PI / e;
		if (f = new Float32Array(2 * (e + 2))) {
			for (var k = 0; k <= e; k++) {
				var n = k * h,
					r = c * Math.sin(n + d) + a.y;
				f[2 * k] = c * Math.cos(n + d) + a.x;
				f[2 * k + 1] = r
			}
			f[2 * (e + 1)] = a.x;
			f[2 * (e + 1) + 1] = a.y;
			a = this.s;
			this.Wb.kc();
			this.Wb.Wh();
			I.Zc(I.xd);
			a.uniform4fv(this.eh, this.pe);
			c = a.createBuffer();
			a.bindBuffer(a.ARRAY_BUFFER, c);
			a.bufferData(a.ARRAY_BUFFER, f, a.STATIC_DRAW);
			a.vertexAttribPointer(I.tb, 2, a.FLOAT, u, 0, 0);
			a.drawArrays(a.LINE_STRIP, 0, e + g);
			a.deleteBuffer(c);
			I.Hh()
		}
	},
	BB: function(a, c, d,
		e) {
		this.ej();
		for (var f = new Float32Array(2 * (e + 1)), g = 0, h = 0; h < e; h++) f[2 * h] = Math.pow(1 - g, 2) * a.x + 2 * (1 - g) * g * c.x + g * g * d.x, f[2 * h + 1] = Math.pow(1 - g, 2) * a.y + 2 * (1 - g) * g * c.y + g * g * d.y, g += 1 / e;
		f[2 * e] = d.x;
		f[2 * e + 1] = d.y;
		a = this.s;
		this.Wb.kc();
		this.Wb.Wh();
		I.Zc(I.xd);
		a.uniform4fv(this.eh, this.pe);
		c = a.createBuffer();
		a.bindBuffer(a.ARRAY_BUFFER, c);
		a.bufferData(a.ARRAY_BUFFER, f, a.STATIC_DRAW);
		a.vertexAttribPointer(I.tb, 2, a.FLOAT, u, 0, 0);
		a.drawArrays(a.LINE_STRIP, 0, e + 1);
		a.deleteBuffer(c);
		I.Hh()
	},
	AB: function(a, c, d, e, f) {
		this.ej();
		for (var g = new Float32Array(2 * (f + 1)), h = 0, k = 0; k < f; k++) g[2 * k] = Math.pow(1 - h, 3) * a.x + 3 * Math.pow(1 - h, 2) * h * c.x + 3 * (1 - h) * h * h * d.x + h * h * h * e.x, g[2 * k + 1] = Math.pow(1 - h, 3) * a.y + 3 * Math.pow(1 - h, 2) * h * c.y + 3 * (1 - h) * h * h * d.y + h * h * h * e.y, h += 1 / f;
		g[2 * f] = e.x;
		g[2 * f + 1] = e.y;
		a = this.s;
		this.Wb.kc();
		this.Wb.Wh();
		I.Zc(I.xd);
		a.uniform4fv(this.eh, this.pe);
		c = a.createBuffer();
		a.bindBuffer(a.ARRAY_BUFFER, c);
		a.bufferData(a.ARRAY_BUFFER, g, a.STATIC_DRAW);
		a.vertexAttribPointer(I.tb, 2, a.FLOAT, u, 0, 0);
		a.drawArrays(a.LINE_STRIP, 0, f + 1);
		a.deleteBuffer(c);
		I.Hh()
	},
	yB: function(a, c) {
		this.Ll(a, 0.5, c)
	},
	Ll: function(a, c, d) {
		this.ej();
		for (var e = new Float32Array(2 * (d + 1)), f, g, h = 1 / a.length, k = 0; k < d + 1; k++) g = k / d, 1 === g ? (f = a.length - 1, g = 1) : (f = 0 | g / h, g = (g - h * f) / h), f = I.nv(I.zc(a, f - 1), I.zc(a, f), I.zc(a, f + 1), I.zc(a, f + 2), c, g), e[2 * k] = f.x, e[2 * k + 1] = f.y;
		a = this.s;
		this.Wb.kc();
		this.Wb.Wh();
		I.Zc(I.xd);
		a.uniform4fv(this.eh, this.pe);
		c = a.createBuffer();
		a.bindBuffer(a.ARRAY_BUFFER, c);
		a.bufferData(a.ARRAY_BUFFER, e, a.STATIC_DRAW);
		a.vertexAttribPointer(I.tb, 2, a.FLOAT, u, 0, 0);
		a.drawArrays(a.LINE_STRIP,
			0, d + 1);
		a.deleteBuffer(c);
		I.Hh()
	},
	es: function(a, c, d, e) {
		this.pe[0] = a / 255;
		this.pe[1] = c / 255;
		this.pe[2] = d / 255;
		this.pe[3] = e / 255
	},
	XY: function(a) {
		this.Wz = a * I.eb()
	},
	nL: function(a) {
		this.s.lineWidth && this.s.lineWidth(a)
	}
});
I.oa.Jx = function() {
	var a = I.J.prototype;
	I.p(a, "color", a.Xi, a.ic);
	I.p(a, "opacity", a.ao, a.Hd);
	I.p(a, "string", a.sr, a.rd);
	I.p(a, "textAlign", a.JV, a.MY);
	I.p(a, "verticalAlign", a.oW, a.vZ);
	I.p(a, "fontSize", a.HV, a.LY);
	I.p(a, "fontName", a.GV, a.KY);
	I.p(a, "font", a.lR, a.CS);
	I.p(a, "boundingWidth", a.kz, a.AS);
	I.p(a, "boundingHeight", a.hR, a.zS);
	I.p(a, "fillStyle", a.kR, a.kL);
	I.p(a, "strokeStyle", a.CR, a.MS);
	I.p(a, "lineWidth", a.rR, a.ES);
	I.p(a, "shadowOffsetX", a.zR, a.IS);
	I.p(a, "shadowOffsetY", a.AR, a.JS);
	I.p(a, "shadowOpacity",
		a.BR, a.KS);
	I.p(a, "shadowBlur", a.yR, a.HS)
};
I.J = I.F.extend({
	Mb: s,
	ri: I.Lp,
	Ri: I.Qp,
	gd: s,
	hd: 0,
	Pb: "",
	Cu: s,
	WG: p,
	Kc: u,
	Xc: s,
	gk: 0,
	fk: 0,
	un: s,
	Kf: u,
	An: s,
	Ni: 0,
	Pq: s,
	IA: 0,
	JA: 0,
	ln: u,
	Fz: s,
	$b: "LabelTTF",
	oi: "normal",
	pi: "normal",
	uq: "normal",
	Ih: function(a, c, d, e, f, g) {
		a = a ? a + "" : "";
		d = d || 16;
		e = e || I.size(0, 0);
		f = f || I.pt;
		g = g || I.Qp;
		this.dc = u;
		this.Mb = I.size(e.width, e.height);
		this.gd = c || "Arial";
		this.ri = f;
		this.Ri = g;
		this.hd = d;
		this.f.ek(this.gd, d, this.oi, this.pi);
		this.string = a;
		this.f.dk();
		this.f.Al();
		this.Vb();
		return p
	},
	Vb: function() {
		this.ln = p;
		this.f.Z(I.i.L.So)
	},
	ctor: function(a,
		c, d, e, f, g) {
		I.F.prototype.ctor.call(this);
		this.Mb = I.size(0, 0);
		this.ri = I.pt;
		this.Ri = I.Qp;
		this.dc = u;
		this.gd = "Arial";
		this.Kc = u;
		this.Xc = I.d(0, 0);
		this.fk = this.gk = 0;
		this.Kf = u;
		this.An = I.color(255, 255, 255, 255);
		this.Ni = 0;
		this.Pq = I.color(255, 255, 255, 255);
		this.JA = this.IA = 0;
		this.ln = u;
		this.Fz = [];
		this.f.dk();
		this.V = p;
		c && c instanceof Fa ? this.LW(a, c) : I.J.prototype.Ih.call(this, a, c, d, e, f, g)
	},
	pa: function() {
		return this.Ih(" ", this.gd, this.hd)
	},
	description: function() {
		return "\x3ccc.LabelTTF | FontName \x3d" + this.gd + " FontSize \x3d " +
			this.hd.toFixed(1) + "\x3e"
	},
	MB: function() {
		return !this.uq || this.uq.charAt ? this.f.Rj : this.uq || this.f.Rj
	},
	Xba: A("uq"),
	sr: D("Pb"),
	JV: D("ri"),
	oW: D("Ri"),
	N6: function() {
		return I.size(this.Mb)
	},
	HV: D("hd"),
	GV: D("gd"),
	LW: function(a, c) {
		this.xI(c, u);
		this.string = a;
		return p
	},
	wca: function(a) {
		a && this.xI(a, p)
	},
	S7: function() {
		return this.pS(u)
	},
	bV: function(a, c, d, e) {
		a.r != s && a.g != s && a.b != s && a.a != s ? this.UQ(a, c, d) : this.WF(a, c, d, e)
	},
	WF: function(a, c, d, e) {
		d = d || 0.5;
		u === this.Kc && (this.Kc = p);
		var f = this.Xc;
		if (f && f.x !== a || f.ae !==
			c) f.x = a, f.y = c;
		this.gk !== d && (this.gk = d);
		this.f.dk();
		this.fk !== e && (this.fk = e);
		this.Vb()
	},
	UQ: function(a, c, d) {
		this.un || (this.un = I.color(255, 255, 255, 128));
		this.un.r = a.r;
		this.un.g = a.g;
		this.un.b = a.b;
		this.WF(c.width || c.x || 0, c.height || c.y || 0, a.a != s ? a.a / 255 : 0.5, d)
	},
	zR: function() {
		return this.Xc.x
	},
	IS: function(a) {
		u === this.Kc && (this.Kc = p);
		this.Xc.x !== a && (this.Xc.x = a, this.Vb())
	},
	AR: function() {
		return this.Xc.ae
	},
	JS: function(a) {
		u === this.Kc && (this.Kc = p);
		this.Xc.ae !== a && (this.Xc.ae = a, this.Vb())
	},
	U2: function() {
		return I.d(this.Xc.x,
			this.Xc.y)
	},
	s3: function(a) {
		u === this.Kc && (this.Kc = p);
		if (this.Xc.x !== a.x || this.Xc.y !== a.y) this.Xc.x = a.x, this.Xc.y = a.y, this.Vb()
	},
	BR: D("gk"),
	KS: function(a) {
		u === this.Kc && (this.Kc = p);
		this.gk !== a && (this.gk = a, this.f.dk(), this.Vb())
	},
	yR: D("fk"),
	HS: function(a) {
		u === this.Kc && (this.Kc = p);
		this.fk !== a && (this.fk = a, this.Vb())
	},
	L4: function() {
		this.Kc && (this.Kc = u, this.Vb())
	},
	cV: function(a, c) {
		this.Kf === u && (this.Kf = p);
		var d = this.An;
		if (d.r !== a.r || d.g !== a.g || d.b !== a.b) d.r = a.r, d.g = a.g, d.b = a.b, this.f.dk();
		this.Ni !== c && (this.Ni =
			c || 0);
		this.Vb()
	},
	CR: D("An"),
	MS: function(a) {
		this.Kf === u && (this.Kf = p);
		var c = this.An;
		if (c.r !== a.r || c.g !== a.g || c.b !== a.b) c.r = a.r, c.g = a.g, c.b = a.b, this.f.dk(), this.Vb()
	},
	rR: D("Ni"),
	ES: function(a) {
		this.Kf === u && (this.Kf = p);
		this.Ni !== a && (this.Ni = a || 0, this.Vb())
	},
	M4: function() {
		this.Kf && (this.Kf = u, this.Vb())
	},
	kL: function(a) {
		var c = this.Pq;
		if (c.r !== a.r || c.g !== a.g || c.b !== a.b) c.r = a.r, c.g = a.g, c.b = a.b, this.f.dk(), this.ln = p
	},
	kR: D("Pq"),
	xI: function(a, c) {
		a.g6 ? (this.Mb.width = a.boundingWidth, this.Mb.height = a.boundingHeight) :
			(this.Mb.width = 0, this.Mb.height = 0);
		this.ri = a.textAlign;
		this.Ri = a.verticalAlign;
		this.gd = a.fontName;
		this.hd = a.fontSize || 12;
		this.uq = a.lineHeight ? a.lineHeight : this.hd;
		this.f.ek(a);
		a.AL && this.bV(a.shadowOffsetX, a.shadowOffsetY, a.shadowOpacity, a.shadowBlur);
		a.UC && this.cV(a.strokeStyle, a.lineWidth);
		this.kL(a.fillStyle);
		c && this.f.Al();
		var d = I.i.L;
		this.f.Z(d.hb | d.lb | d.So)
	},
	pS: function(a) {
		var c = new Fa;
		a ? (c.fontSize = this.hd, c.boundingWidth = I.eb() * this.Mb.width, c.boundingHeight = I.eb() * this.Mb.height) : (c.fontSize =
			this.hd, c.boundingWidth = this.Mb.width, c.boundingHeight = this.Mb.height);
		c.fontName = this.gd;
		c.textAlign = this.ri;
		c.verticalAlign = this.Ri;
		if (this.Kf) {
			c.UC = p;
			var d = this.An;
			c.strokeStyle = I.color(d.r, d.g, d.b);
			c.lineWidth = this.Ni
		} else c.UC = u;
		this.Kc ? (c.AL = p, c.shadowBlur = this.fk, c.shadowOpacity = this.gk, c.shadowOffsetX = (a ? I.eb() : 1) * this.Xc.x, c.shadowOffsetY = (a ? I.eb() : 1) * this.Xc.y) : c.Kc = u;
		a = this.Pq;
		c.fillStyle = I.color(a.r, a.g, a.b);
		return c
	},
	rd: function(a) {
		a = String(a);
		this.Cu !== a && (this.Cu = a + "", this.hv(), this.Vb(),
			this.f.Z(I.i.L.ga))
	},
	hv: function() {
		if ((!this.Pb || "" === this.Pb) && this.Pb !== this.Cu) I.Ga.de = p;
		this.Pb = this.Cu
	},
	MY: function(a) {
		a !== this.ri && (this.ri = a, this.Vb())
	},
	vZ: function(a) {
		a !== this.Ri && (this.Ri = a, this.Vb())
	},
	Eba: function(a, c) {
		var d;
		c === m ? (d = a.width, c = a.height) : d = a;
		if (d !== this.Mb.width || c !== this.Mb.height) this.Mb.width = d, this.Mb.height = c, this.hv(), this.Vb()
	},
	kz: function() {
		return this.Mb.width
	},
	AS: function(a) {
		a !== this.Mb.width && (this.Mb.width = a, this.hv(), this.Vb())
	},
	hR: function() {
		return this.Mb.height
	},
	zS: function(a) {
		a !== this.Mb.height && (this.Mb.height = a, this.hv(), this.Vb())
	},
	LY: function(a) {
		this.hd !== a && (this.hd = a, this.f.ek(this.gd, this.hd, this.oi, this.pi), this.Vb())
	},
	KY: function(a) {
		this.gd && this.gd !== a && (this.gd = a, this.f.ek(this.gd, this.hd, this.oi, this.pi), this.Vb())
	},
	lR: function() {
		return this.f.mz()
	},
	CS: function(a) {
		if (a = I.J.YQ.exec(a)) this.hd = parseInt(a[1]), this.gd = a[2], this.f.ek(this.gd, this.hd, this.oi, this.pi), this.Vb()
	},
	Aa: function() {
		this.ln && this.f.Vq();
		return I.F.prototype.Aa.call(this)
	},
	lh: function() {
		this.ln && this.f.Vq();
		return I.F.prototype.lh.call(this)
	},
	$k: function() {
		this.ln && this.f.Vq();
		return I.F.prototype.$k.call(this)
	},
	Yb: function(a, c, d) {
		I.F.prototype.Yb.call(this, a, c, d, u)
	},
	Hba: A("WG"),
	ed: function() {
		return I.ja === I.t.zb ? new I.J.G(this) : this.WG ? new I.J.gx(this) : new I.J.D(this)
	},
	ek: function(a) {
		this.oi !== a && (this.oi = a, this.f.ek(this.gd, this.hd, this.oi, this.pi), this.Vb())
	},
	mz: D("oi"),
	o3: function(a) {
		this.pi !== a && (this.pi = a, this.f.ek(this.gd, this.hd, this.oi, this.pi), this.Vb())
	},
	P2: D("pi")
});
I.assert(I.ff(I.oa.Jx), I.k.Yg, "LabelTTFPropertyDefine.js");
I.oa.Jx();
delete I.oa.Jx;
I.J.YQ = /^(\d+)px\s+['"]?([\w\s\d]+)['"]?$/;
I.J.create = function(a, c, d, e, f, g) {
	return new I.J(a, c, d, e, f, g)
};
I.J.F4 = I.J.create;
I.J.vQ = I.iQ ? I.wm : I.Sx;
I.J.ki = document.createElement("div");
I.J.ki.style.fontFamily = "Arial";
I.J.ki.style.position = "absolute";
I.J.ki.style.left = "-100px";
I.J.ki.style.top = "-100px";
I.J.ki.style.lineHeight = "normal";
document.body ? document.body.appendChild(I.J.ki) : window.addEventListener("load", function() {
	this.removeEventListener("load", arguments.callee, u);
	document.body.appendChild(I.J.ki)
}, u);
I.J.ME = function(a, c) {
	if (a instanceof Fa) {
		var d = I.J.Ct[Ha(a)];
		if (0 < d) return d;
		var e = I.J.ki;
		e.innerHTML = "ajghl~!";
		e.style.fontFamily = a.fontName;
		e.style.fontSize = a.fontSize + "px";
		e.style.fontStyle = a.fontStyle;
		e.style.fontWeight = a.fontWeight;
		d = e.clientHeight;
		I.J.Ct[Ha(a)] = d;
		e.innerHTML = "";
		return d
	}
	d = I.J.Ct[a + "." + c];
	if (0 < d) return d;
	e = I.J.ki;
	e.innerHTML = "ajghl~!";
	e.style.fontFamily = a;
	e.style.fontSize = c + "px";
	d = e.clientHeight;
	I.J.Ct[a + "." + c] = d;
	e.innerHTML = "";
	return d
};
I.J.Ct = {};
I.J.ZS = ["left", "center", "right"];
I.J.$S = ["top", "middle", "bottom"];
I.J.bM = p;
I.J.BI = /([a-zA-Z0-9\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df\u00e9\u00e8\u00e7\u00e0\u00f9\u00ea\u00e2\u00ee\u00f4\u00fb]+|\S)/;
I.J.eI = /^[!,.:;}\]%\?>\u3001\u2018\u201c\u300b\uff1f\u3002\uff0c\uff01]/;
I.J.JG = /([a-zA-Z0-9\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df\u00e9\u00e8\u00e7\u00e0\u00f9\u00ea\u00e2\u00ee\u00f4\u00fb]+|\S)$/;
I.J.IG = /[a-zA-Z0-9\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df\u00e9\u00e8\u00e7\u00e0\u00f9\u00ea\u00e2\u00ee\u00f4\u00fb]+$/;
I.J.eG = /^[a-zA-Z0-9\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df\u00e9\u00e8\u00e7\u00e0\u00f9\u00ea\u00e2\u00ee\u00f4\u00fb]/;
(function() {
	I.J.Kb = function() {
		this.Rj = 18;
		this.Sj = "";
		this.TH = "rgba(128, 128, 128, 0.5)";
		this.dI = "";
		this.dG = "rgba(255,255,255,1)";
		this.tu = this.Dz = s;
		this.Fz = [];
		this.Xe = [];
		this.rq = u;
		this.zn = [];
		this.Mu = 0
	};
	var a = I.J.Kb.prototype;
	a.constructor = I.J.Kb;
	a.ek = function(a, d, e, f) {
		a instanceof Fa ? (this.Sj = Ha(a), this.Rj = I.J.ME(a)) : (this.Sj = e + " " + f + " " + d + "px '" + a + "'", this.Rj = I.J.ME(a, d))
	};
	a.mz = D("Sj");
	a.O2 = D("Rj");
	a.jb = function() {
		this.dk();
		this.Al()
	};
	a.dk = function() {
		var a = this.ac,
			d = this.o,
			e = d.un || this.ac,
			f = d.An,
			g =
			d.Pq,
			h = a.r / 255,
			k = a.g / 255,
			a = a.b / 255;
		this.TH = "rgba(" + (0 | h * e.r) + "," + (0 | k * e.g) + "," + (0 | a * e.b) + "," + d.gk + ")";
		this.dG = "rgba(" + (0 | h * g.r) + "," + (0 | k * g.g) + "," + (0 | a * g.b) + ", 1)";
		this.dI = "rgba(" + (0 | h * f.r) + "," + (0 | k * f.g) + "," + (0 | a * f.b) + ", 1)"
	};
	a.Vq = function() {
		var a = this.o,
			d = a.Mb.width,
			e, f, g = this.Fz;
		g.length = 0;
		this.rq = u;
		this.SG();
		if (0 !== d) {
			this.Xe = a.Pb.split("\n");
			for (e = 0; e < this.Xe.length; e++) this.Hy(this.Xe, e, d)
		} else {
			this.Xe = a.Pb.split("\n");
			e = 0;
			for (f = this.Xe.length; e < f; e++) g.push(this.dl(this.Xe[e]))
		}
		1 < this.Xe.length &&
			(this.rq = p);
		f = e = 0;
		a.Kf && (e = f = 2 * a.Ni);
		if (a.Kc) {
			var h = a.Xc;
			e += 2 * Math.abs(h.x);
			f += 2 * Math.abs(h.y)
		}
		d = 0 === d ? this.rq ? I.size(Math.ceil(Math.max.apply(Math, g) + e), Math.ceil(this.Rj * this.Xe.length + f)) : I.size(Math.ceil(this.dl(a.Pb) + e), Math.ceil(this.Rj + f)) : 0 === a.Mb.height ? this.rq ? I.size(Math.ceil(d + e), Math.ceil(a.MB() * this.Xe.length + f)) : I.size(Math.ceil(d + e), Math.ceil(a.MB() + f)) : I.size(Math.ceil(d + e), Math.ceil(a.Mb.height + f));
		"normal" !== a.mz() && (d.width = Math.ceil(d.width + 0.3 * a.hd));
		a.Gd(d);
		a.IA = e;
		a.JA = f;
		a =
			a.jg;
		this.yf.x = 0.5 * e + (d.width - e) * a.x;
		this.yf.y = 0.5 * f + (d.height - f) * a.y
	};
	a.CH = function() {
		var a = this.o,
			d = a.IA,
			e = a.JA,
			f = a.S.height - e,
			g = a.Ri,
			h = a.ri,
			k = 0.5 * d,
			e = f + 0.5 * e,
			n = 0,
			r = 0,
			t = [],
			v = a.S.width - d,
			a = a.MB(),
			d = (a - this.Rj) / 2,
			n = h === I.aE ? n + v : h === I.Lp ? n + v / 2 : n + 0;
		if (this.rq) {
			h = this.Xe.length;
			g === I.IE ? r = a - 2 * d + f - a * h : g === I.mQ && (r = (a - 2 * d) / 2 + (f - a * h) / 2);
			for (g = 0; g < h; g++) t.push(-f + (a * g + d) + r)
		} else g !== I.IE && (r = g === I.Qp ? r - f : r - 0.5 * f), t.push(r);
		f = {
			rv: I.d(k, e),
			os: n,
			KD: t
		};
		this.zn.push(f)
	};
	a.TQ = function(a) {
		if (a) {
			var d = this.zn.pop();
			a.setTransform(1, 0, 0, 1, d.rv.x, d.rv.y);
			this.lJ(a, d.os, d.KD)
		}
	};
	a.Hy = function(a, d, e) {
		var f = a[d],
			g = this.dl(f);
		if (g > e && 1 < f.length) {
			for (var h = f.length * (e / g) | 0, k = f.substr(h), n = g - this.dl(k), r, t = 0, v = 0; n > e && 100 > v++;) h *= e / n, h |= 0, k = f.substr(h), n = g - this.dl(k);
			for (v = 0; n < e && 100 > v++;) k && (t = (r = I.J.BI.exec(k)) ? r[0].length : 1, r = k), h += t, k = f.substr(h), n = g - this.dl(k);
			h -= t;
			0 === h && (h = 1, r = r.substr(1));
			e = f.substr(0, h);
			if (I.J.bM && I.J.eI.test(r || k)) g = I.J.JG.exec(e), h -= g ? g[0].length : 0, r = f.substr(h), e = f.substr(0, h);
			if (I.J.eG.test(r) &&
				(g = I.J.IG.exec(e)) && e !== g[0]) h -= g[0].length, r = f.substr(h), e = f.substr(0, h);
			a[d] = r || k;
			a.splice(d, 0, e)
		}
	};
	a.updateStatus = function() {
		var a = I.i.L,
			d = this.C;
		I.i.Kb.prototype.updateStatus.call(this);
		d & a.So && this.Al();
		this.C & a.ga && (this.transform(La(this), p), this.C ^= this.C & I.i.L.ga)
	};
	a.Wd = function(a) {
		var d = I.i.L,
			e = this.C;
		I.i.Kb.prototype.Wd.call(this, a);
		e & d.So && this.Al();
		(I.ja === I.t.zb || e & d.ga) && this.transform(a)
	};
	a.lJ = function(a, d, e) {
		var f = this.o;
		if (f.Kc) {
			var g = f.Xc;
			a.shadowColor = this.TH;
			a.shadowOffsetX = g.x;
			a.shadowOffsetY = -g.y;
			a.shadowBlur = f.fk
		}
		var g = f.ri,
			h = f.Ri,
			k = f.Ni;
		a.font !== this.Sj && (a.font = this.Sj);
		a.fillStyle = this.dG;
		if (f = f.Kf) a.lineWidth = 2 * k, a.strokeStyle = this.dI;
		a.textBaseline = I.J.$S[h];
		a.textAlign = I.J.ZS[g];
		g = this.Xe.length;
		for (h = 0; h < g; h++) k = this.Xe[h], f && a.strokeText(k, d, e[h]), a.fillText(k, d, e[h]);
		I.ef++
	}
})();
(function() {
	I.J.sj = function(a) {
		I.J.Kb.call(this, a);
		a = this.Dz = document.createElement("canvas");
		a.width = 1;
		a.height = 1;
		this.tu = a.getContext("2d")
	};
	I.J.sj.prototype = Object.create(I.J.Kb.prototype);
	I.mo(I.J.Kb.prototype, I.J.sj.prototype);
	var a = I.J.sj.prototype;
	a.constructor = I.J.sj;
	a.Al = function() {
		this.C ^= this.C & I.i.L.So;
		var a = this.o,
			d = a.S;
		this.Vq();
		var e = d.width,
			f = d.height,
			g = this.tu,
			h = this.Dz;
		if (!a.ba) {
			var k = new I.la;
			k.Fd(this.Dz);
			a.mb(k)
		}
		if (0 === a.Pb.length) return h.width = 1, h.height = d.height || 1, a.ba && a.ba.Jb(),
			a.Yb(I.rect(0, 0, 1, d.height)), p;
		g.font = this.Sj;
		d = h.width === e && h.height === f;
		h.width = e;
		h.height = f;
		d && g.clearRect(0, 0, e, f);
		this.CH();
		this.TQ(g);
		a.ba && a.ba.Jb();
		a.Yb(I.rect(0, 0, e, f));
		return p
	};
	a.SG = function() {
		this.tu.font = this.Sj
	};
	a.dl = function(a) {
		return this.tu.measureText(a).width
	}
})();
(function() {
	I.J.gx = function(a) {
		I.F.D.call(this, a);
		I.J.sj.call(this)
	};
	var a = I.J.gx.prototype = Object.create(I.F.D.prototype);
	I.mo(I.J.sj.prototype, a);
	a.constructor = I.J.gx
})();
(function() {
	I.J.D = function(a) {
		I.F.D.call(this, a);
		I.J.Kb.call(this)
	};
	I.J.D.prototype = Object.create(I.F.D.prototype);
	I.mo(I.J.Kb.prototype, I.J.D.prototype);
	var a = I.J.D.prototype;
	a.constructor = I.J.D;
	a.SG = y();
	a.dl = function(a) {
		var d = I.s.getContext();
		d.font = this.Sj;
		return d.measureText(a).width
	};
	a.Al = function() {
		this.C ^= this.C & I.i.L.So;
		var a = this.o,
			d = a.S;
		this.Vq();
		var e = d.width,
			f = d.height;
		if (0 === a.Pb.length) return a.Yb(I.rect(0, 0, 1, d.height)), p;
		this.CH();
		a.Yb(I.rect(0, 0, e, f));
		return p
	};
	a.Sa = function(a) {
		var d =
			I.view.sa,
			e = I.view.Va;
		a = a || I.s;
		var f = a.getContext();
		if (f) {
			var g = this.o;
			a.rB();
			if (!(0 >= this.zn.length)) {
				var h = this.Mu >= this.zn.length ? this.Mu - this.zn.length : this.Mu,
					k = this.zn[h];
				this.Mu = h + 1;
				var n = g.pc.x,
					h = -g.pc.y - g.wa.height,
					r = this.bc / 255;
				a.setTransform(this.Si, d, e);
				a.Jo(this.Lj);
				a.gm(r);
				a.save();
				g.nc && (n = -n - g.wa.width, f.scale(-1, 1));
				g.oc && (h = g.pc.y, f.scale(1, -1));
				d = k.os + k.rv.x + n * d;
				g = [];
				n = this.Xe.length;
				for (r = 0; r < n; r++) g.push(k.KD[r] + k.rv.y + h * e);
				this.lJ(f, d, g);
				a.restore()
			}
		}
	}
})();
(function() {
	I.J.G = function(a) {
		I.F.G.call(this, a);
		I.J.sj.call(this);
		this.hm(I.cg.ad(I.J.vQ))
	};
	var a = I.J.G.prototype = Object.create(I.F.G.prototype);
	I.mo(I.J.sj.prototype, a);
	a.constructor = I.J.G;
	a.jb = function() {
		this.Al();
		I.F.G.prototype.jb.call(this)
	}
})();
I.jN = I.Ta.extend({
	Qb: s,
	target: s,
	Dl: 0,
	Ae: s,
	Kl: u,
	paused: u,
	Pv: s,
	ctor: function() {
		this.Qb = [];
		this.target = s;
		this.Dl = 0;
		this.Ae = s;
		this.paused = this.Kl = u;
		this.Pv = s
	}
});
I.fD = I.Ta.extend({
	Df: s,
	Fm: s,
	Ua: s,
	gh: u,
	m3: function(a, c) {
		for (var d = 0; d < a.length; d++)
			if (c === a[d].target) return a[d];
		return s
	},
	ctor: function() {
		this.Df = {};
		this.Fm = [];
		this.Ua = s;
		this.gh = u
	},
	DI: function(a, c, d) {
		a || b(Error("cc.ActionManager.addAction(): action must be non-null"));
		c || b(Error("cc.ActionManager.addAction(): action must be non-null"));
		var e = this.Df[c.W];
		e || (e = new I.jN, e.paused = d, e.target = c, this.Df[c.W] = e, this.Fm.push(e));
		this.yQ(e);
		e.Qb.push(a);
		a.M(c)
	},
	Baa: function() {
		for (var a = this.Fm, c = 0; c < a.length; c++) {
			var d =
				a[c];
			d && this.LK(d.target, p)
		}
	},
	LK: function(a, c) {
		if (a != s) {
			var d = this.Df[a.W];
			d && (-1 !== d.Qb.indexOf(d.Ae) && !d.Kl && (d.Kl = p), d.Qb.length = 0, this.Ua === d && !c ? this.gh = p : this.Qy(d))
		}
	},
	JK: function(a) {
		if (a != s) {
			var c = this.Df[a.originalTarget.W];
			if (c)
				for (var d = 0; d < c.Qb.length; d++) {
					if (c.Qb[d] === a) {
						c.Qb.splice(d, 1);
						break
					}
				} else I.log(I.k.fM)
		}
	},
	KK: function(a, c) {
		a === I.lm && I.log(I.k.gD);
		I.assert(c, I.k.gD);
		var d = this.Df[c.W];
		if (d)
			for (var e = d.Qb.length, f = 0; f < e; ++f) {
				var g = d.Qb[f];
				if (g && g.RB() === a && g.originalTarget === c) {
					this.rS(f,
						d);
					break
				}
			}
	},
	sJ: function(a, c) {
		a === I.lm && I.log(I.k.dM);
		var d = this.Df[c.W];
		if (d) {
			if (d.Qb != s)
				for (var e = 0; e < d.Qb.length; ++e) {
					var f = d.Qb[e];
					if (f && f.RB() === a) return f
				}
			I.log(I.k.eM, a)
		}
		return s
	},
	DX: function(a) {
		return (a = this.Df[a.W]) ? a.Qb ? a.Qb.length : 0 : 0
	},
	zo: function(a) {
		if (a = this.Df[a.W]) a.paused = p
	},
	Qg: function(a) {
		if (a = this.Df[a.W]) a.paused = u
	},
	yK: function() {
		for (var a = [], c = this.Fm, d = 0; d < c.length; d++) {
			var e = c[d];
			e && !e.paused && (e.paused = p, a.push(e.target))
		}
		return a
	},
	pY: function(a) {
		if (a)
			for (var c = 0; c < a.length; c++) a[c] &&
				this.Qg(a[c])
	},
	jaa: function() {
		I.O.ok().pj(this)
	},
	rS: function(a, c) {
		c.Qb[a] === c.Ae && !c.Kl && (c.Kl = p);
		c.Qb.splice(a, 1);
		c.Dl >= a && c.Dl--;
		0 === c.Qb.length && (this.Ua === c ? this.gh = p : this.Qy(c))
	},
	Qy: function(a) {
		var c = u;
		a && (this.Df[a.target.W] && (delete this.Df[a.target.W], I.Ed(this.Fm, a), c = p), a.Qb = s, a.target = s);
		return c
	},
	yQ: function(a) {
		a.Qb == s && (a.Qb = [])
	},
	update: function(a) {
		for (var c = this.Fm, d, e = 0; e < c.length; e++) {
			d = this.Ua = c[e];
			if (!d.paused)
				for (d.Dl = 0; d.Dl < (d.Qb ? d.Qb.length : 0); d.Dl++)
					if (d.Ae = d.Qb[d.Dl], d.Ae) {
						d.Kl =
							u;
						d.Ae.step(a * (d.Ae.Jq ? d.Ae.zd : 1));
						if (d.Kl) d.Ae = s;
						else if (d.Ae.Zf()) {
							d.Ae.stop();
							var f = d.Ae;
							d.Ae = s;
							this.JK(f)
						}
						d.Ae = s
					}
			this.gh && 0 === d.Qb.length && this.Qy(d) && e--
		}
	}
});
I.Wr = function() {
	function a() {
		_FPSLabel.f.Z(I.i.L.ga);
		_SPFLabel.f.Z(I.i.L.ga);
		_drawsLabel.f.Z(I.i.L.ga)
	}

	function c() {
		_lastSPF = I.O.FJ();
		e++;
		_accumDt += I.O.Nj;
		if (_accumDt > I.sD) {
			_frameRate = e / _accumDt;
			_accumDt = e = 0;
			if (t.kC) {
				var a = _frameRate,
					c = jb = g.length - 1,
					d = 0;
				n++;
				for (r += a; 0 <= jb; jb--)
					if (a >= g[jb]) {
						h[jb]++;
						break
					}
				if (n >= f) {
					d = r / f;
					for (jb = c; 0 < jb; jb--)
						if (a = h[jb] / f, 0.6 <= a && d >= g[jb]) {
							jb != k && (k = jb, t.kC && t.kC(d.toFixed(2)));
							break
						}
					r = n = _changeCount = 0;
					for (jb = c; 0 < jb; jb--) h[jb] = 0
				}
			}
			_showFPS && (_SPFLabel.string = _lastSPF.toFixed(3),
				_FPSLabel.string = _frameRate.toFixed(1), _drawsLabel.string = (0 | I.ef).toString())
		}
		_showFPS && (_FPSLabel.ia(), _SPFLabel.ia(), _drawsLabel.ia())
	}
	var d = _showFPS = u,
		e = _frameRate = _lastSPF = _accumDt = 0;
	_afterVisitListener = _FPSLabel = _SPFLabel = _drawsLabel = s;
	var f = 10,
		g = [0, 10, 20, 30],
		h = [0, 0, 0, 0],
		k = 3,
		n = 0,
		r = 0,
		t = {
			kC: s,
			FJ: function() {
				return _lastSPF
			},
			Y6: function() {
				return _frameRate
			},
			jca: function(a) {
				!isNaN(a) && 0 < a && (f = a / I.sD)
			},
			Waa: function() {
				I.K.addListener(_afterVisitListener, 1)
			},
			ada: function() {
				I.K.removeListener(_afterVisitListener)
			},
			cX: function() {
				return _showFPS
			},
			yZ: function() {
				d || this.pa();
				if (I.J && !_FPSLabel) {
					var a = 0,
						a = I.xb.width,
						c = I.xb.height,
						e = I.LM,
						a = a > c ? 0 | 24 * (c / 320) : 0 | 24 * (a / 320);
					_FPSLabel = new I.J("000.0", "Arial", a);
					_SPFLabel = new I.J("0.000", "Arial", a);
					_drawsLabel = new I.J("0000", "Arial", a);
					_drawsLabel.Ia(_drawsLabel.width / 2 + e.x, 5 * _drawsLabel.height / 2 + e.y);
					_SPFLabel.Ia(_SPFLabel.width / 2 + e.x, 3 * _SPFLabel.height / 2 + e.y);
					_FPSLabel.Ia(_FPSLabel.width / 2 + e.x, _FPSLabel.height / 2 + e.y)
				}
				_FPSLabel && (_showFPS = p)
			},
			wW: function() {
				_showFPS = u
			},
			pa: function() {
				d || (_afterVisitListener = I.K.Fl(I.Ca.wD, c), I.K.Fl(I.Ca.As, a), d = p)
			}
		};
	return t
}();
I.e = I.e || {};
I.e.Bc = 0.015625;
I.e.jc = function(a) {
	return a * a
};
I.e.T3 = function(a, c) {
	return a + I.e.Bc > c && a - I.e.Bc < c
};
(function(a) {
	a.e.Am = function(a, c) {
		c === m ? (this.x = a.x, this.y = a.y) : (this.x = a || 0, this.y = c || 0)
	};
	var c = a.e.Am.prototype;
	c.fill = function(a, c) {
		this.x = a;
		this.y = c
	};
	c.length = function() {
		return Math.sqrt(a.e.jc(this.x) + a.e.jc(this.y))
	};
	c.to = function() {
		return a.e.jc(this.x) + a.e.jc(this.y)
	};
	c.normalize = function() {
		var a = 1 / this.length();
		this.x *= a;
		this.y *= a;
		return this
	};
	a.e.Am.add = function(a, c, f) {
		a.x = c.x + f.x;
		a.y = c.y + f.y;
		return a
	};
	c.add = function(a) {
		this.x += a.x;
		this.y += a.y;
		return this
	};
	c.Ui = function(a) {
		return this.x *
			a.x + this.y * a.y
	};
	a.e.Am.jm = function(a, c, f) {
		a.x = c.x - f.x;
		a.y = c.y - f.y;
		return a
	};
	c.jm = function(a) {
		this.x -= a.x;
		this.y -= a.y;
		return this
	};
	c.transform = function(a) {
		var c = this.x,
			f = this.y;
		this.x = c * a.l[0] + f * a.l[3] + a.l[6];
		this.y = c * a.l[1] + f * a.l[4] + a.l[7];
		return this
	};
	a.e.Am.scale = function(a, c, f) {
		a.x = c.x * f;
		a.y = c.y * f;
		return a
	};
	c.scale = function(a) {
		this.x *= a;
		this.y *= a;
		return this
	};
	c.zv = function(c) {
		return this.x < c.x + a.e.Bc && this.x > c.x - a.e.Bc && this.y < c.y + a.e.Bc && this.y > c.y - a.e.Bc
	}
})(I);
(function(a) {
	a.v9 = a.e.va = function(a, c, f) {
		a && c === m ? (this.x = a.x, this.y = a.y, this.z = a.z) : (this.x = a || 0, this.y = c || 0, this.z = f || 0)
	};
	a.e.Lda = function(c, e, f) {
		return new a.e.va(c, e, f)
	};
	var c = a.e.va.prototype;
	c.fill = function(a, c, f) {
		a && c === m ? (this.x = a.x, this.y = a.y, this.z = a.z) : (this.x = a, this.y = c, this.z = f);
		return this
	};
	c.length = function() {
		return Math.sqrt(a.e.jc(this.x) + a.e.jc(this.y) + a.e.jc(this.z))
	};
	c.to = function() {
		return a.e.jc(this.x) + a.e.jc(this.y) + a.e.jc(this.z)
	};
	c.normalize = function() {
		var a = 1 / this.length();
		this.x *= a;
		this.y *= a;
		this.z *= a;
		return this
	};
	c.Fg = function(a) {
		var c = this.x,
			f = this.y,
			g = this.z;
		this.x = f * a.z - g * a.y;
		this.y = g * a.x - c * a.z;
		this.z = c * a.y - f * a.x;
		return this
	};
	c.Ui = function(a) {
		return this.x * a.x + this.y * a.y + this.z * a.z
	};
	c.add = function(a) {
		this.x += a.x;
		this.y += a.y;
		this.z += a.z;
		return this
	};
	c.jm = function(a) {
		this.x -= a.x;
		this.y -= a.y;
		this.z -= a.z;
		return this
	};
	c.transform = function(a) {
		var c = this.x,
			f = this.y,
			g = this.z;
		a = a.l;
		this.x = c * a[0] + f * a[4] + g * a[8] + a[12];
		this.y = c * a[1] + f * a[5] + g * a[9] + a[13];
		this.z = c * a[2] + f * a[6] +
			g * a[10] + a[14];
		return this
	};
	c.tda = function(a) {
		var c = this.x,
			f = this.y,
			g = this.z;
		a = a.l;
		this.x = c * a[0] + f * a[4] + g * a[8];
		this.y = c * a[1] + f * a[5] + g * a[9];
		this.z = c * a[2] + f * a[6] + g * a[10];
		return this
	};
	c.OL = function(c) {
		var e = new a.e.Rp(this.x, this.y, this.z, 1);
		e.transform(c);
		this.x = e.x / e.m;
		this.y = e.y / e.m;
		this.z = e.z / e.m
	};
	c.scale = function(a) {
		this.x *= a;
		this.y *= a;
		this.z *= a;
		return this
	};
	c.zv = function(c) {
		var e = a.e.Bc;
		return this.x < c.x + e && this.x > c.x - e && this.y < c.y + e && this.y > c.y - e && this.z < c.z + e && this.z > c.z - e
	};
	c.D8 = function(c) {
		c =
			c.l;
		var e = new a.e.va(this.x - c[12], this.y - c[13], this.z - c[14]);
		this.x = e.x * c[0] + e.y * c[1] + e.z * c[2];
		this.y = e.x * c[4] + e.y * c[5] + e.z * c[6];
		this.z = e.x * c[8] + e.y * c[9] + e.z * c[10];
		return this
	};
	c.E8 = function(a) {
		var c = this.x,
			f = this.y,
			g = this.z;
		a = a.l;
		this.x = c * a[0] + f * a[1] + g * a[2];
		this.y = c * a[4] + f * a[5] + g * a[6];
		this.z = c * a[8] + f * a[9] + g * a[10];
		return this
	};
	c.nd = function(a) {
		if (!a) return this;
		this.x = a.x;
		this.y = a.y;
		this.z = a.z;
		return this
	};
	a.e.va.Wda = function(a) {
		a.x = a.y = a.z = 0;
		return a
	};
	c.a_ = function() {
		var a = new Float32Array(3);
		a[0] =
			this.x;
		a[1] = this.y;
		a[2] = this.z;
		return a
	}
})(I);
(function(a) {
	a.e.Rp = function(a, c, f, g) {
		a && c === m ? (this.x = a.x, this.y = a.y, this.z = a.z, this.m = a.m) : (this.x = a || 0, this.y = c || 0, this.z = f || 0, this.m = g || 0)
	};
	a.w9 = a.e.Rp;
	var c = a.e.Rp.prototype;
	c.fill = function(a, c, f, g) {
		a && c === m ? (this.x = a.x, this.y = a.y, this.z = a.z, this.m = a.m) : (this.x = a, this.y = c, this.z = f, this.m = g)
	};
	c.add = function(a) {
		if (!a) return this;
		this.x += a.x;
		this.y += a.y;
		this.z += a.z;
		this.m += a.m;
		return this
	};
	c.Ui = function(a) {
		return this.x * a.x + this.y * a.y + this.z * a.z + this.m * a.m
	};
	c.length = function() {
		return Math.sqrt(a.e.jc(this.x) +
			a.e.jc(this.y) + a.e.jc(this.z) + a.e.jc(this.m))
	};
	c.to = function() {
		return a.e.jc(this.x) + a.e.jc(this.y) + a.e.jc(this.z) + a.e.jc(this.m)
	};
	c.gC = function() {
		return this
	};
	c.normalize = function() {
		var a = 1 / this.length();
		this.x *= a;
		this.y *= a;
		this.z *= a;
		this.m *= a;
		return this
	};
	c.scale = function(a) {
		this.normalize();
		this.x *= a;
		this.y *= a;
		this.z *= a;
		this.m *= a;
		return this
	};
	c.jm = function(a) {
		this.x -= a.x;
		this.y -= a.y;
		this.z -= a.z;
		this.m -= a.m
	};
	c.transform = function(a) {
		var c = this.x,
			f = this.y,
			g = this.z,
			h = this.m;
		a = a.l;
		this.x = c * a[0] + f * a[4] +
			g * a[8] + h * a[12];
		this.y = c * a[1] + f * a[5] + g * a[9] + h * a[13];
		this.z = c * a[2] + f * a[6] + g * a[10] + h * a[14];
		this.m = c * a[3] + f * a[7] + g * a[11] + h * a[15];
		return this
	};
	a.e.Rp.sda = function(c, e) {
		for (var f = [], g = 0; g < c.length; g++) {
			var h = new a.e.Rp(c[g]);
			h.transform(e);
			f.push(h)
		}
		return f
	};
	c.zv = function(c) {
		var e = a.e.Bc;
		return this.x < c.x + e && this.x > c.x - e && this.y < c.y + e && this.y > c.y - e && this.z < c.z + e && this.z > c.z - e && this.m < c.m + e && this.m > c.m - e
	};
	c.nd = function(a) {
		this.x = a.x;
		this.y = a.y;
		this.z = a.z;
		this.m = a.m;
		return this
	};
	c.a_ = function() {
		var a = new Float32Array(4);
		a[0] = this.x;
		a[1] = this.y;
		a[2] = this.z;
		a[3] = this.m;
		return a
	}
})(I);
(function(a) {
	a.e.uO = function(c, d) {
		this.start = c || new a.e.Am;
		this.dir = d || new a.e.Am
	};
	a.e.uO.prototype.fill = function(a, d, e, f) {
		this.start.x = a;
		this.start.y = d;
		this.dir.x = e;
		this.dir.y = f
	}
})(I);
window.jQ = window.jQ || window.hD;
window.fN = window.fN || window.hD;
(function(a) {
	a.e.wc = function(a) {
		this.l = a && a.l ? new Float32Array(a.l) : new Float32Array(9)
	};
	a.j9 = a.e.wc;
	var c = a.e.wc.prototype;
	c.fill = function(a) {
		var c = this.l;
		a = a.l;
		c[0] = a[0];
		c[1] = a[1];
		c[2] = a[2];
		c[3] = a[3];
		c[4] = a[4];
		c[5] = a[5];
		c[6] = a[6];
		c[7] = a[7];
		c[8] = a[8];
		return this
	};
	c.yT = function() {
		var a = this.l,
			c = a[0],
			d = a[1],
			h = a[2],
			k = a[3],
			n = a[4],
			r = a[5],
			t = a[6],
			v = a[7],
			B = a[8];
		a[0] = n * B - r * v;
		a[1] = h * v - d * B;
		a[2] = d * r - h * n;
		a[3] = r * t - k * B;
		a[4] = c * B - h * t;
		a[5] = h * k - c * r;
		a[6] = k * v - n * t;
		a[8] = c * n - d * k
	};
	c.qd = function() {
		var a = this.l;
		a[1] = a[2] =
			a[3] = a[5] = a[6] = a[7] = 0;
		a[0] = a[4] = a[8] = 1;
		return this
	};
	var d = new a.e.wc;
	c.inverse = function(a) {
		if (0 === a) return this;
		d.nd(this);
		a = 1 / a;
		this.yT();
		this.wX(a);
		return this
	};
	c.fK = function() {
		var a = this.l;
		return 1 === a[0] && 0 === a[1] && 0 === a[2] && 0 === a[3] && 1 === a[4] && 0 === a[5] && 0 === a[6] && 0 === a[7] && 1 === a[8]
	};
	c.g_ = function() {
		var a = this.l,
			c = a[1],
			d = a[2],
			h = a[5],
			k = a[6],
			n = a[7];
		a[1] = a[3];
		a[2] = k;
		a[3] = c;
		a[5] = n;
		a[6] = d;
		a[7] = h;
		return this
	};
	c.J4 = function() {
		var a = this.l,
			c = a[0] * a[4] * a[8] + a[1] * a[5] * a[6] + a[2] * a[3] * a[7];
		return c -= a[2] *
			a[4] * a[6] + a[0] * a[5] * a[7] + a[1] * a[3] * a[8]
	};
	c.multiply = function(a) {
		var c = this.l,
			d = a.l;
		a = c[0];
		var h = c[1],
			k = c[2],
			n = c[3],
			r = c[4],
			t = c[5],
			v = c[6],
			B = c[7],
			w = c[8],
			z = d[0],
			x = d[1],
			F = d[2],
			K = d[3],
			L = d[4],
			N = d[5],
			H = d[6],
			J = d[7],
			d = d[8];
		c[0] = a * z + n * x + v * F;
		c[1] = h * z + r * x + B * F;
		c[2] = k * z + t * x + w * F;
		c[3] = k * z + t * x + w * F;
		c[4] = h * K + r * L + B * N;
		c[5] = k * K + t * L + w * N;
		c[6] = a * H + n * J + v * d;
		c[7] = h * H + r * J + B * d;
		c[8] = k * H + t * J + w * d;
		return this
	};
	c.wX = function(a) {
		var c = this.l;
		c[0] *= a;
		c[1] *= a;
		c[2] *= a;
		c[3] *= a;
		c[4] *= a;
		c[5] *= a;
		c[6] *= a;
		c[7] *= a;
		c[8] *= a
	};
	a.e.wc.$aa = function(c,
		d) {
		var g = Math.cos(d),
			h = Math.sin(d),
			k = new a.e.wc,
			n = k.l;
		n[0] = g + c.x * c.x * (1 - g);
		n[1] = c.z * h + c.y * c.x * (1 - g);
		n[2] = -c.y * h + c.z * c.x * (1 - g);
		n[3] = -c.z * h + c.x * c.y * (1 - g);
		n[4] = g + c.y * c.y * (1 - g);
		n[5] = c.x * h + c.z * c.y * (1 - g);
		n[6] = c.y * h + c.x * c.z * (1 - g);
		n[7] = -c.x * h + c.y * c.z * (1 - g);
		n[8] = g + c.z * c.z * (1 - g);
		return k
	};
	c.nd = function(c) {
		if (this === c) return a.log("cc.math.Matrix3.assign(): current matrix equals matIn"), this;
		var d = this.l;
		c = c.l;
		d[0] = c[0];
		d[1] = c[1];
		d[2] = c[2];
		d[3] = c[3];
		d[4] = c[4];
		d[5] = c[5];
		d[6] = c[6];
		d[7] = c[7];
		d[8] = c[8];
		return this
	};
	c.zv = function(c) {
		if (this === c) return p;
		var d = a.e.Bc,
			g = this.l;
		c = c.l;
		for (var h = 0; 9 > h; ++h)
			if (!(g[h] + d > c[h] && g[h] - d < c[h])) return u;
		return p
	};
	a.e.wc.xU = function(c) {
		var d = new a.e.wc,
			g = d.l;
		g[0] = 1;
		g[1] = 0;
		g[2] = 0;
		g[3] = 0;
		g[4] = Math.cos(c);
		g[5] = Math.sin(c);
		g[6] = 0;
		g[7] = -Math.sin(c);
		g[8] = Math.cos(c);
		return d
	};
	a.e.wc.yU = function(c) {
		var d = new a.e.wc,
			g = d.l;
		g[0] = Math.cos(c);
		g[1] = 0;
		g[2] = -Math.sin(c);
		g[3] = 0;
		g[4] = 1;
		g[5] = 0;
		g[6] = Math.sin(c);
		g[7] = 0;
		g[8] = Math.cos(c);
		return d
	};
	a.e.wc.zU = function(c) {
		var d = new a.e.wc,
			g = d.l;
		g[0] =
			Math.cos(c);
		g[1] = -Math.sin(c);
		g[2] = 0;
		g[3] = Math.sin(c);
		g[4] = Math.cos(c);
		g[5] = 0;
		g[6] = 0;
		g[7] = 0;
		g[8] = 1;
		return d
	};
	a.e.wc.C4 = function(c) {
		var d = new a.e.wc,
			g = d.l;
		g[0] = Math.cos(c);
		g[1] = Math.sin(c);
		g[2] = 0;
		g[3] = -Math.sin(c);
		g[4] = Math.cos(c);
		g[5] = 0;
		g[6] = 0;
		g[7] = 0;
		g[8] = 1;
		return d
	};
	a.e.wc.fJ = function(c, d) {
		var g = new a.e.wc;
		g.qd();
		g.l[0] = c;
		g.l[4] = d;
		return g
	};
	a.e.wc.Vn = function(c, d) {
		var g = new a.e.wc;
		g.qd();
		g.l[6] = c;
		g.l[7] = d;
		return g
	};
	a.e.wc.wU = function(c) {
		if (!c) return s;
		var d = new a.e.wc,
			g = d.l;
		g[0] = 1 - 2 * (c.y * c.y + c.z *
			c.z);
		g[1] = 2 * (c.x * c.y - c.m * c.z);
		g[2] = 2 * (c.x * c.z + c.m * c.y);
		g[3] = 2 * (c.x * c.y + c.m * c.z);
		g[4] = 1 - 2 * (c.x * c.x + c.z * c.z);
		g[5] = 2 * (c.y * c.z - c.m * c.x);
		g[6] = 2 * (c.x * c.z - c.m * c.y);
		g[7] = 2 * (c.y * c.z + c.m * c.x);
		g[8] = 1 - 2 * (c.x * c.x + c.y * c.y);
		return d
	};
	c.bba = function() {
		return a.e.hg.YK(this).YC()
	}
})(I);
(function(a) {
	a.e.X = function(a) {
		this.l = a && a.l ? new Float32Array(a.l) : new Float32Array(16)
	};
	a.k9 = a.e.X;
	var c = a.e.X.prototype;
	c.fill = function(a) {
		for (var c = this.l, d = 0; 16 > d; d++) c[d] = a[d];
		return this
	};
	a.m9 = function(a) {
		var c = a.l;
		c[1] = c[2] = c[3] = c[4] = c[6] = c[7] = c[8] = c[9] = c[11] = c[12] = c[13] = c[14] = 0;
		c[0] = c[5] = c[10] = c[15] = 1;
		return a
	};
	c.qd = function() {
		var a = this.l;
		a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[11] = a[12] = a[13] = a[14] = 0;
		a[0] = a[5] = a[10] = a[15] = 1;
		return this
	};
	c.get = function(a, c) {
		return this.l[a + 4 * c]
	};
	c.set =
		function(a, c, d) {
			this.l[a + 4 * c] = d
		};
	c.Ro = function(a, c, d, e) {
		var n = this.l,
			r = n[a + 4 * c];
		n[a + 4 * c] = n[d + 4 * e];
		n[d + 4 * e] = r
	};
	a.e.X.mG = function(a, c) {
		var d, e = 0,
			n = 0,
			r, t, v, B, w = [0, 0, 0, 0],
			z = [0, 0, 0, 0],
			x = [0, 0, 0, 0];
		for (d = 0; 4 > d; d++) {
			for (r = B = 0; 4 > r; r++)
				if (1 !== x[r])
					for (t = 0; 4 > t; t++) 0 === x[t] && (v = Math.abs(a.get(r, t)), v >= B && (B = v, n = r, e = t));++x[e];
			if (n !== e) {
				for (r = 0; 4 > r; r++) a.Ro(n, r, e, r);
				for (r = 0; 4 > r; r++) c.Ro(n, r, e, r)
			}
			z[d] = n;
			w[d] = e;
			if (0 === a.get(e, e)) return u;
			t = 1 / a.get(e, e);
			a.set(e, e, 1);
			for (r = 0; 4 > r; r++) a.set(e, r, a.get(e, r) * t);
			for (r =
				0; 4 > r; r++) c.set(e, r, c.get(e, r) * t);
			for (t = 0; 4 > t; t++)
				if (t !== e) {
					v = a.get(t, e);
					a.set(t, e, 0);
					for (r = 0; 4 > r; r++) a.set(t, r, a.get(t, r) - a.get(e, r) * v);
					for (r = 0; 4 > r; r++) c.set(t, r, a.get(t, r) - c.get(e, r) * v)
				}
		}
		for (r = 3; 0 <= r; r--)
			if (z[r] !== w[r])
				for (t = 0; 4 > t; t++) a.Ro(t, z[r], t, w[r]);
		return p
	};
	var d = (new a.e.X).qd();
	a.n9 = function(c, e) {
		var h = new a.e.X(e),
			k = new a.e.X(d);
		if (a.e.X.mG(h, k) === u) return s;
		c.nd(h);
		return c
	};
	c.inverse = function() {
		var c = new a.e.X(this),
			e = new a.e.X(d);
		return a.e.X.mG(c, e) === u ? s : c
	};
	c.fK = function() {
		var a =
			this.l;
		return 1 === a[0] && 0 === a[1] && 0 === a[2] && 0 === a[3] && 0 === a[4] && 1 === a[5] && 0 === a[6] && 0 === a[7] && 0 === a[8] && 0 === a[9] && 1 === a[10] && 0 === a[11] && 0 === a[12] && 0 === a[13] && 0 === a[14] && 1 === a[15]
	};
	c.g_ = function() {
		var a = this.l,
			c = a[1],
			d = a[2],
			e = a[3],
			n = a[6],
			r = a[7],
			t = a[8],
			v = a[9],
			B = a[11],
			w = a[12],
			z = a[13],
			x = a[14];
		a[1] = a[4];
		a[2] = t;
		a[3] = w;
		a[4] = c;
		a[6] = v;
		a[7] = z;
		a[8] = d;
		a[9] = n;
		a[11] = x;
		a[12] = e;
		a[13] = r;
		a[14] = B;
		return this
	};
	a.aw = function(a, c, d) {
		a = a.l;
		var e = c.l,
			n = d.l;
		d = e[0];
		c = e[1];
		var r = e[2],
			t = e[3],
			v = e[4],
			B = e[5],
			w = e[6],
			z = e[7],
			x = e[8],
			F = e[9],
			K = e[10],
			L = e[11],
			N = e[12],
			H = e[13],
			J = e[14],
			e = e[15],
			aa = n[0],
			la = n[1],
			ka = n[2],
			ja = n[3],
			qa = n[4],
			ra = n[5],
			sa = n[6],
			ta = n[7],
			ua = n[8],
			Z = n[9],
			$ = n[10],
			va = n[11],
			wa = n[12],
			W = n[13],
			ma = n[14],
			n = n[15];
		a[0] = aa * d + la * v + ka * x + ja * N;
		a[1] = aa * c + la * B + ka * F + ja * H;
		a[2] = aa * r + la * w + ka * K + ja * J;
		a[3] = aa * t + la * z + ka * L + ja * e;
		a[4] = qa * d + ra * v + sa * x + ta * N;
		a[5] = qa * c + ra * B + sa * F + ta * H;
		a[6] = qa * r + ra * w + sa * K + ta * J;
		a[7] = qa * t + ra * z + sa * L + ta * e;
		a[8] = ua * d + Z * v + $ * x + va * N;
		a[9] = ua * c + Z * B + $ * F + va * H;
		a[10] = ua * r + Z * w + $ * K + va * J;
		a[11] = ua * t + Z * z + $ * L + va * e;
		a[12] = wa * d + W * v + ma * x + n *
			N;
		a[13] = wa * c + W * B + ma * F + n * H;
		a[14] = wa * r + W * w + ma * K + n * J;
		a[15] = wa * t + W * z + ma * L + n * e
	};
	c.multiply = function(a) {
		var c = this.l,
			d = a.l;
		a = c[0];
		var e = c[1],
			n = c[2],
			r = c[3],
			t = c[4],
			v = c[5],
			B = c[6],
			w = c[7],
			z = c[8],
			x = c[9],
			F = c[10],
			K = c[11],
			L = c[12],
			N = c[13],
			H = c[14],
			J = c[15],
			aa = d[0],
			la = d[1],
			ka = d[2],
			ja = d[3],
			qa = d[4],
			ra = d[5],
			sa = d[6],
			ta = d[7],
			ua = d[8],
			Z = d[9],
			$ = d[10],
			va = d[11],
			wa = d[12],
			W = d[13],
			ma = d[14],
			d = d[15];
		c[0] = aa * a + la * t + ka * z + ja * L;
		c[1] = aa * e + la * v + ka * x + ja * N;
		c[2] = aa * n + la * B + ka * F + ja * H;
		c[3] = aa * r + la * w + ka * K + ja * J;
		c[4] = qa * a + ra * t + sa * z + ta * L;
		c[5] = qa *
			e + ra * v + sa * x + ta * N;
		c[6] = qa * n + ra * B + sa * F + ta * H;
		c[7] = qa * r + ra * w + sa * K + ta * J;
		c[8] = ua * a + Z * t + $ * z + va * L;
		c[9] = ua * e + Z * v + $ * x + va * N;
		c[10] = ua * n + Z * B + $ * F + va * H;
		c[11] = ua * r + Z * w + $ * K + va * J;
		c[12] = wa * a + W * t + ma * z + d * L;
		c[13] = wa * e + W * v + ma * x + d * N;
		c[14] = wa * n + W * B + ma * F + d * H;
		c[15] = wa * r + W * w + ma * K + d * J;
		return this
	};
	a.QV = function() {
		var a = I.Qh.top.l,
			c = I.Oh.top.l,
			d = new Float32Array(16);
		d[0] = a[0] * c[0] + a[4] * c[1] + a[8] * c[2] + a[12] * c[3];
		d[1] = a[1] * c[0] + a[5] * c[1] + a[9] * c[2] + a[13] * c[3];
		d[2] = a[2] * c[0] + a[6] * c[1] + a[10] * c[2] + a[14] * c[3];
		d[3] = a[3] * c[0] + a[7] * c[1] +
			a[11] * c[2] + a[15] * c[3];
		d[4] = a[0] * c[4] + a[4] * c[5] + a[8] * c[6] + a[12] * c[7];
		d[5] = a[1] * c[4] + a[5] * c[5] + a[9] * c[6] + a[13] * c[7];
		d[6] = a[2] * c[4] + a[6] * c[5] + a[10] * c[6] + a[14] * c[7];
		d[7] = a[3] * c[4] + a[7] * c[5] + a[11] * c[6] + a[15] * c[7];
		d[8] = a[0] * c[8] + a[4] * c[9] + a[8] * c[10] + a[12] * c[11];
		d[9] = a[1] * c[8] + a[5] * c[9] + a[9] * c[10] + a[13] * c[11];
		d[10] = a[2] * c[8] + a[6] * c[9] + a[10] * c[10] + a[14] * c[11];
		d[11] = a[3] * c[8] + a[7] * c[9] + a[11] * c[10] + a[15] * c[11];
		d[12] = a[0] * c[12] + a[4] * c[13] + a[8] * c[14] + a[12] * c[15];
		d[13] = a[1] * c[12] + a[5] * c[13] + a[9] * c[14] + a[13] * c[15];
		d[14] = a[2] * c[12] + a[6] * c[13] + a[10] * c[14] + a[14] * c[15];
		d[15] = a[3] * c[12] + a[7] * c[13] + a[11] * c[14] + a[15] * c[15];
		return d
	};
	a.l9 = function(c, d) {
		if (c === d) return a.log("cc.kmMat4Assign(): pOut equals pIn"), c;
		var e = c.l,
			k = d.l;
		e[0] = k[0];
		e[1] = k[1];
		e[2] = k[2];
		e[3] = k[3];
		e[4] = k[4];
		e[5] = k[5];
		e[6] = k[6];
		e[7] = k[7];
		e[8] = k[8];
		e[9] = k[9];
		e[10] = k[10];
		e[11] = k[11];
		e[12] = k[12];
		e[13] = k[13];
		e[14] = k[14];
		e[15] = k[15];
		return c
	};
	c.nd = function(c) {
		if (this === c) return a.log("cc.mat.Matrix4.assignFrom(): mat4 equals current matrix"), this;
		var d =
			this.l;
		c = c.l;
		d[0] = c[0];
		d[1] = c[1];
		d[2] = c[2];
		d[3] = c[3];
		d[4] = c[4];
		d[5] = c[5];
		d[6] = c[6];
		d[7] = c[7];
		d[8] = c[8];
		d[9] = c[9];
		d[10] = c[10];
		d[11] = c[11];
		d[12] = c[12];
		d[13] = c[13];
		d[14] = c[14];
		d[15] = c[15];
		return this
	};
	c.zv = function(c) {
		if (this === c) return a.log("cc.kmMat4AreEqual(): pMat1 and pMat2 are same object."), p;
		var d = this.l;
		c = c.l;
		for (var e = a.e.Bc, k = 0; 16 > k; k++)
			if (!(d[k] + e > c[k] && d[k] - e < c[k])) return u;
		return p
	};
	a.e.X.xU = function(c, d) {
		d = d || new a.e.X;
		var e = d.l;
		e[0] = 1;
		e[3] = e[2] = e[1] = 0;
		e[4] = 0;
		e[5] = Math.cos(c);
		e[6] = Math.sin(c);
		e[7] = 0;
		e[8] = 0;
		e[9] = -Math.sin(c);
		e[10] = Math.cos(c);
		e[11] = 0;
		e[14] = e[13] = e[12] = 0;
		e[15] = 1;
		return d
	};
	a.e.X.yU = function(c, d) {
		d = d || new a.e.X;
		var e = d.l;
		e[0] = Math.cos(c);
		e[1] = 0;
		e[2] = -Math.sin(c);
		e[3] = 0;
		e[7] = e[6] = e[4] = 0;
		e[5] = 1;
		e[8] = Math.sin(c);
		e[9] = 0;
		e[10] = Math.cos(c);
		e[11] = 0;
		e[14] = e[13] = e[12] = 0;
		e[15] = 1;
		return d
	};
	a.e.X.zU = function(c, d) {
		d = d || new a.e.X;
		var e = d.l;
		e[0] = Math.cos(c);
		e[1] = Math.sin(c);
		e[3] = e[2] = 0;
		e[4] = -Math.sin(c);
		e[5] = Math.cos(c);
		e[7] = e[6] = 0;
		e[11] = e[9] = e[8] = 0;
		e[10] = 1;
		e[14] = e[13] = e[12] = 0;
		e[15] = 1;
		return d
	};
	a.e.X.B4 = function(c, d, e, k) {
		k = k || new a.e.X;
		var n = Math.cos(c);
		c = Math.sin(c);
		var r = Math.cos(d);
		d = Math.sin(d);
		var t = Math.cos(e);
		e = Math.sin(e);
		var v = c * d,
			B = n * d,
			w = k.l;
		w[0] = r * t;
		w[4] = r * e;
		w[8] = -d;
		w[1] = v * t - n * e;
		w[5] = v * e + n * t;
		w[9] = c * r;
		w[2] = B * t + c * e;
		w[6] = B * e - c * t;
		w[10] = n * r;
		w[3] = w[7] = w[11] = 0;
		w[15] = 1;
		return k
	};
	a.e.X.wU = function(c, d) {
		d = d || new a.e.X;
		var e = d.l;
		e[0] = 1 - 2 * (c.y * c.y + c.z * c.z);
		e[1] = 2 * (c.x * c.y + c.z * c.m);
		e[2] = 2 * (c.x * c.z - c.y * c.m);
		e[3] = 0;
		e[4] = 2 * (c.x * c.y - c.z * c.m);
		e[5] = 1 - 2 * (c.x * c.x + c.z * c.z);
		e[6] = 2 * (c.z * c.y + c.x * c.m);
		e[7] = 0;
		e[8] = 2 * (c.x * c.z + c.y * c.m);
		e[9] = 2 * (c.y * c.z - c.x * c.m);
		e[10] = 1 - 2 * (c.x * c.x + c.y * c.y);
		e[11] = 0;
		e[14] = e[13] = e[12] = 0;
		e[15] = 1;
		return d
	};
	a.e.X.D4 = function(c, d, e) {
		e = e || new a.e.X;
		var k = e.l;
		c = c.l;
		k[0] = c[0];
		k[1] = c[1];
		k[2] = c[2];
		k[3] = 0;
		k[4] = c[3];
		k[5] = c[4];
		k[6] = c[5];
		k[7] = 0;
		k[8] = c[6];
		k[9] = c[7];
		k[10] = c[8];
		k[11] = 0;
		k[12] = d.x;
		k[13] = d.y;
		k[14] = d.z;
		k[15] = 1;
		return e
	};
	a.e.X.fJ = function(c, d, e, k) {
		k = k || new a.e.X;
		var n = k.l;
		n[0] = c;
		n[5] = d;
		n[10] = e;
		n[15] = 1;
		n[1] = n[2] = n[3] = n[4] = n[6] = n[7] = n[8] = n[9] = n[11] = n[12] = n[13] = n[14] = 0;
		return k
	};
	a.s9 = function(a, c, d, e) {
		a.l[0] = a.l[5] = a.l[10] = a.l[15] = 1;
		a.l[1] = a.l[2] = a.l[3] = a.l[4] = a.l[6] = a.l[7] = a.l[8] = a.l[9] = a.l[11] = 0;
		a.l[12] = c;
		a.l[13] = d;
		a.l[14] = e;
		return a
	};
	a.e.X.Vn = function(c, d, e, k) {
		k = k || new a.e.X;
		k.qd();
		k.l[12] = c;
		k.l[13] = d;
		k.l[14] = e;
		return k
	};
	c.a8 = function() {
		var c = this.l;
		return (new a.e.va(c[4], c[5], c[6])).normalize()
	};
	c.F7 = function() {
		var c = this.l;
		return (new a.e.va(c[0], c[1], c[2])).normalize()
	};
	c.W6 = function() {
		var c = this.l;
		return (new a.e.va(c[8], c[9], c[10])).normalize()
	};
	a.q9 = function(c, d, e,
		k, n) {
		var r = a.af(d / 2);
		d = n - k;
		var t = Math.sin(r);
		if (0 === d || 0 === t || 0 === e) return s;
		r = Math.cos(r) / t;
		c.qd();
		c.l[0] = r / e;
		c.l[5] = r;
		c.l[10] = -(n + k) / d;
		c.l[11] = -1;
		c.l[14] = -2 * k * n / d;
		c.l[15] = 0;
		return c
	};
	a.e.X.BU = function(c, d) {
		var e = a.af(30),
			k = d - 0.1,
			n = Math.sin(e);
		if (0 === k || 0 === n || 0 === c) return s;
		var e = Math.cos(e) / n,
			n = new a.e.X,
			r = n.l;
		n.qd();
		r[0] = e / c;
		r[5] = e;
		r[10] = -(d + 0.1) / k;
		r[11] = -1;
		r[14] = -0.2 * d / k;
		r[15] = 0;
		return n
	};
	a.p9 = function(a, c, d, e, n, r, t) {
		a.qd();
		a.l[0] = 2 / (d - c);
		a.l[5] = 2 / (n - e);
		a.l[10] = -2 / (t - r);
		a.l[12] = -((d + c) / (d - c));
		a.l[13] = -((n + e) / (n - e));
		a.l[14] = -((t + r) / (t - r));
		return a
	};
	a.e.X.gJ = function(c, d, e, k, n, r) {
		var t = new a.e.X,
			v = t.l;
		t.qd();
		v[0] = 2 / (d - c);
		v[5] = 2 / (k - e);
		v[10] = -2 / (r - n);
		v[12] = -((d + c) / (d - c));
		v[13] = -((k + e) / (k - e));
		v[14] = -((r + n) / (r - n));
		return t
	};
	a.o9 = function(c, d, e, k) {
		e = new a.e.va(e);
		var n = new a.e.va(k);
		e.jm(d);
		e.normalize();
		n.normalize();
		k = new a.e.va(e);
		k.Fg(n);
		k.normalize();
		n = new a.e.va(k);
		n.Fg(e);
		k.normalize();
		c.qd();
		c.l[0] = k.x;
		c.l[4] = k.y;
		c.l[8] = k.z;
		c.l[1] = n.x;
		c.l[5] = n.y;
		c.l[9] = n.z;
		c.l[2] = -e.x;
		c.l[6] = -e.y;
		c.l[10] = -e.z;
		d = a.e.X.Vn(-d.x, -d.y, -d.z);
		c.multiply(d);
		return c
	};
	var e = new a.e.X;
	c.iC = function(c, d, h) {
		d = new a.e.va(d);
		var k = new a.e.va(h);
		h = this.l;
		d.jm(c);
		d.normalize();
		k.normalize();
		var n = new a.e.va(d);
		n.Fg(k);
		n.normalize();
		k = new a.e.va(n);
		k.Fg(d);
		n.normalize();
		this.qd();
		h[0] = n.x;
		h[4] = n.y;
		h[8] = n.z;
		h[1] = k.x;
		h[5] = k.y;
		h[9] = k.z;
		h[2] = -d.x;
		h[6] = -d.y;
		h[10] = -d.z;
		e = a.e.X.Vn(-c.x, -c.y, -c.z, e);
		this.multiply(e)
	};
	a.r9 = function(c, d, e) {
		var k = Math.cos(e);
		e = Math.sin(e);
		d = new a.e.va(d);
		d.normalize();
		c.l[0] = k + d.x * d.x * (1 - k);
		c.l[1] = d.z * e + d.y * d.x * (1 - k);
		c.l[2] = -d.y * e + d.z * d.x * (1 - k);
		c.l[3] = 0;
		c.l[4] = -d.z * e + d.x * d.y * (1 - k);
		c.l[5] = k + d.y * d.y * (1 - k);
		c.l[6] = d.x * e + d.z * d.y * (1 - k);
		c.l[7] = 0;
		c.l[8] = d.y * e + d.x * d.z * (1 - k);
		c.l[9] = -d.x * e + d.y * d.z * (1 - k);
		c.l[10] = k + d.z * d.z * (1 - k);
		c.l[11] = 0;
		c.l[12] = 0;
		c.l[13] = 0;
		c.l[14] = 0;
		c.l[15] = 1;
		return c
	};
	a.e.X.vU = function(c, d, e) {
		e = e || new a.e.X;
		var k = this.l,
			n = Math.cos(d);
		d = Math.sin(d);
		c = new a.e.va(c);
		c.normalize();
		k[0] = n + c.x * c.x * (1 - n);
		k[1] = c.z * d + c.y * c.x * (1 - n);
		k[2] = -c.y * d + c.z * c.x * (1 - n);
		k[3] = 0;
		k[4] = -c.z * d + c.x * c.y * (1 -
			n);
		k[5] = n + c.y * c.y * (1 - n);
		k[6] = c.x * d + c.z * c.y * (1 - n);
		k[7] = 0;
		k[8] = c.y * d + c.x * c.z * (1 - n);
		k[9] = -c.x * d + c.y * c.z * (1 - n);
		k[10] = n + c.z * c.z * (1 - n);
		k[11] = 0;
		k[12] = k[13] = k[14] = 0;
		k[15] = 1;
		return e
	};
	c.kV = function() {
		var c = new a.e.wc,
			d = this.l,
			e = c.l;
		e[0] = d[0];
		e[1] = d[1];
		e[2] = d[2];
		e[3] = d[4];
		e[4] = d[5];
		e[5] = d[6];
		e[6] = d[8];
		e[7] = d[9];
		e[8] = d[10];
		return c
	};
	c.N5 = function(c) {
		var d = new a.e.Fb,
			e = this.l;
		switch (c) {
			case a.e.Fb.tO:
				d.a = e[3] - e[0];
				d.b = e[7] - e[4];
				d.c = e[11] - e[8];
				d.I = e[15] - e[12];
				break;
			case a.e.Fb.uN:
				d.a = e[3] + e[0];
				d.b = e[7] + e[4];
				d.c =
					e[11] + e[8];
				d.I = e[15] + e[12];
				break;
			case a.e.Fb.hM:
				d.a = e[3] + e[1];
				d.b = e[7] + e[5];
				d.c = e[11] + e[9];
				d.I = e[15] + e[13];
				break;
			case a.e.Fb.pP:
				d.a = e[3] - e[1];
				d.b = e[7] - e[5];
				d.c = e[11] - e[9];
				d.I = e[15] - e[13];
				break;
			case a.e.Fb.aN:
				d.a = e[3] - e[2];
				d.b = e[7] - e[6];
				d.c = e[11] - e[10];
				d.I = e[15] - e[14];
				break;
			case a.e.Fb.EN:
				d.a = e[3] + e[2];
				d.b = e[7] + e[6];
				d.c = e[11] + e[10];
				d.I = e[15] + e[14];
				break;
			default:
				a.log("cc.math.Matrix4.extractPlane: Invalid plane index")
		}
		c = Math.sqrt(d.a * d.a + d.b * d.b + d.c * d.c);
		d.a /= c;
		d.b /= c;
		d.c /= c;
		d.I /= c;
		return d
	};
	c.YC =
		function() {
			var c = this.kV();
			return a.e.hg.YK(c).YC()
		}
})(I);
(function(a) {
	a.e.Fb = function(a, c, f, g) {
		a && c === m ? (this.a = a.a, this.b = a.b, this.c = a.c, this.I = a.I) : (this.a = a || 0, this.b = c || 0, this.c = f || 0, this.I = g || 0)
	};
	a.t9 = a.e.Fb;
	var c = a.e.Fb.prototype;
	a.e.Fb.uN = 0;
	a.e.Fb.tO = 1;
	a.e.Fb.hM = 2;
	a.e.Fb.pP = 3;
	a.e.Fb.EN = 4;
	a.e.Fb.aN = 5;
	a.e.Fb.hO = 0;
	a.e.Fb.gO = 1;
	a.e.Fb.iO = 2;
	c.Ui = function(a) {
		return this.a * a.x + this.b * a.y + this.c * a.z + this.I * a.m
	};
	c.P4 = function(a) {
		return this.a * a.x + this.b * a.y + this.c * a.z + this.I
	};
	c.Q4 = function(a) {
		return this.a * a.x + this.b * a.y + this.c * a.z
	};
	a.e.Fb.j6 = function(c, e) {
		return new a.e.Fb(e.x,
			e.y, e.z, -e.Ui(c))
	};
	a.e.Fb.k6 = function(c, e, f) {
		e = new a.e.va(e);
		f = new a.e.va(f);
		var g = new a.e.Fb;
		e.jm(c);
		f.jm(c);
		e.Fg(f);
		e.normalize();
		g.a = e.x;
		g.b = e.y;
		g.c = e.z;
		g.I = e.scale(-1).Ui(c);
		return g
	};
	c.normalize = function() {
		var c = new a.e.va(this.a, this.b, this.c),
			e = 1 / c.length();
		c.normalize();
		this.a = c.x;
		this.b = c.y;
		this.c = c.z;
		this.I *= e;
		return this
	};
	c.p4 = function(c) {
		c = this.a * c.x + this.b * c.y + this.c * c.z + this.I;
		return 0.0010 < c ? a.e.Fb.hO : -0.0010 > c ? a.e.Fb.gO : a.e.Fb.iO
	}
})(I);
(function(a) {
	a.e.hg = function(a, c, f, g) {
		a && c === m ? (this.x = a.x, this.y = a.y, this.z = a.z, this.m = a.m) : (this.x = a || 0, this.y = c || 0, this.z = f || 0, this.m = g || 0)
	};
	a.u9 = a.e.hg;
	var c = a.e.hg.prototype;
	c.pU = function(a) {
		this.x = -a.x;
		this.y = -a.y;
		this.z = -a.z;
		this.m = a.m;
		return this
	};
	c.Ui = function(a) {
		return this.m * a.m + this.x * a.x + this.y * a.y + this.z * a.z
	};
	c.M5 = function() {
		return this
	};
	c.qd = function() {
		this.z = this.y = this.x = 0;
		this.m = 1;
		return this
	};
	c.inverse = function() {
		var c = this.length();
		if (Math.abs(c) > a.e.Bc) return this.m = this.z = this.y =
			this.x = 0, this;
		this.pU(this).scale(1 / c);
		return this
	};
	c.fK = function() {
		return 0 === this.x && 0 === this.y && 0 === this.z && 1 === this.m
	};
	c.length = function() {
		return Math.sqrt(this.to())
	};
	c.to = function() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.m * this.m
	};
	c.multiply = function(a) {
		var c = this.x,
			f = this.y,
			g = this.z,
			h = this.m;
		this.m = h * a.m - c * a.x - f * a.y - g * a.z;
		this.x = h * a.x + c * a.m + f * a.z - g * a.y;
		this.y = h * a.y + f * a.m + g * a.x - c * a.z;
		this.z = h * a.z + g * a.m + c * a.y - f * a.x;
		return this
	};
	c.normalize = function() {
		var c = this.length();
		Math.abs(c) <=
			a.e.Bc && b(Error("current quaternion is an invalid value"));
		this.scale(1 / c);
		return this
	};
	c.XK = function(a) {
		var c = 0.5 * Math.PI,
			f = Math.sin(c);
		this.m = Math.cos(c);
		this.x = a.x * f;
		this.y = a.y * f;
		this.z = a.z * f
	};
	a.e.hg.YK = function(c) {
		if (!c) return s;
		var e, f, g;
		e = [];
		f = c.l;
		c = 0;
		e[0] = f[0];
		e[1] = f[3];
		e[2] = f[6];
		e[4] = f[1];
		e[5] = f[4];
		e[6] = f[7];
		e[8] = f[2];
		e[9] = f[5];
		e[10] = f[8];
		e[15] = 1;
		var h = e[0];
		c = h[0] + h[5] + h[10] + 1;
		c > a.e.Bc ? (c = 2 * Math.sqrt(c), e = (h[9] - h[6]) / c, f = (h[2] - h[8]) / c, g = (h[4] - h[1]) / c, c *= 0.25) : h[0] > h[5] && h[0] > h[10] ? (c = 2 * Math.sqrt(1 +
			h[0] - h[5] - h[10]), e = 0.25 * c, f = (h[4] + h[1]) / c, g = (h[2] + h[8]) / c, c = (h[9] - h[6]) / c) : h[5] > h[10] ? (c = 2 * Math.sqrt(1 + h[5] - h[0] - h[10]), e = (h[4] + h[1]) / c, f = 0.25 * c, g = (h[9] + h[6]) / c, c = (h[2] - h[8]) / c) : (c = 2 * Math.sqrt(1 + h[10] - h[0] - h[5]), e = (h[2] + h[8]) / c, f = (h[9] + h[6]) / c, g = 0.25 * c, c = (h[4] - h[1]) / c);
		return new a.e.hg(e, f, g, c)
	};
	a.e.hg.cba = function(c, e, f) {
		var g, h, k, n, r;
		g = a.af(e) / 2;
		h = a.af(c) / 2;
		k = a.af(f) / 2;
		f = Math.cos(g);
		c = Math.cos(h);
		e = Math.cos(k);
		g = Math.sin(g);
		h = Math.sin(h);
		k = Math.sin(k);
		n = c * e;
		r = h * k;
		var t = new a.e.hg;
		t.m = f * n + g * r;
		t.x =
			g * n - f * r;
		t.y = f * h * e + g * c * k;
		t.z = f * c * k - g * h * e;
		t.normalize();
		return t
	};
	c.DZ = function(c, e) {
		if (this.x === c.x && this.y === c.y && this.z === c.z && this.m === c.m) return this;
		var f = this.Ui(c),
			g = Math.acos(f),
			f = Math.sqrt(1 - a.e.jc(f)),
			h = Math.sin(e * g) / f,
			k = new a.e.hg(c);
		this.scale(Math.sin((1 - e) * g) / f);
		k.scale(h);
		this.add(k);
		return this
	};
	c.YC = function() {
		var c, e, f = new a.e.va;
		c = Math.acos(this.m);
		e = Math.sqrt(a.e.jc(this.x) + a.e.jc(this.y) + a.e.jc(this.z));
		e > -a.e.Bc && e < a.e.Bc || e < 2 * Math.PI + a.e.Bc && e > 2 * Math.PI - a.e.Bc ? (c = 0, f.x = 0, f.y =
			0, f.z = 1) : (c *= 2, f.x = this.x / e, f.y = this.y / e, f.z = this.z / e, f.normalize());
		return {
			axis: f,
			kv: c
		}
	};
	c.scale = function(a) {
		this.x *= a;
		this.y *= a;
		this.z *= a;
		this.m *= a;
		return this
	};
	c.nd = function(a) {
		this.x = a.x;
		this.y = a.y;
		this.z = a.z;
		this.m = a.m;
		return this
	};
	c.add = function(a) {
		this.x += a.x;
		this.y += a.y;
		this.z += a.z;
		this.m += a.m;
		return this
	};
	a.e.hg.aba = function(c, e, f) {
		var g = new a.e.va(c),
			h = new a.e.va(e);
		g.normalize();
		h.normalize();
		var k = g.Ui(h);
		e = new a.e.hg;
		if (1 <= k) return e.qd(), e; - 0.999999 > k ? Math.abs(f.to()) < a.e.Bc ? e.XK(f) :
			(g = new a.e.va(1, 0, 0), g.Fg(c), Math.abs(g.to()) < a.e.Bc && (g.fill(0, 1, 0), g.Fg(c)), g.normalize(), e.XK(g)) : (c = Math.sqrt(2 * (1 + k)), f = 1 / c, g.Fg(h), e.x = g.x * f, e.y = g.y * f, e.z = g.z * f, e.m = 0.5 * c, e.normalize());
		return e
	};
	c.X9 = function(c) {
		var e = this.x,
			f = this.y,
			g = this.z,
			h = new a.e.va(c),
			k = new a.e.va(e, f, g),
			e = new a.e.va(e, f, g);
		k.Fg(c);
		e.Fg(k);
		k.scale(2 * q.m);
		e.scale(2);
		h.add(k);
		h.add(e);
		return h
	}
})(I);
I.e.ps = function(a, c) {
	this.min = a || new I.e.va;
	this.max = c || new I.e.va
};
I.e.ps.prototype.rU = function(a) {
	return a.x >= this.min.x && a.x <= this.max.x && a.y >= this.min.y && a.y <= this.max.y && a.z >= this.min.z && a.z <= this.max.z
};
I.e.ps.rU = function(a, c) {
	return a.x >= c.min.x && a.x <= c.max.x && a.y >= c.min.y && a.y <= c.max.y && a.z >= c.min.z && a.z <= c.max.z
};
I.e.ps.prototype.nd = function(a) {
	this.min.nd(a.min);
	this.max.nd(a.max)
};
I.e.ps.assign = function(a, c) {
	a.min.nd(c.min);
	a.max.nd(c.max);
	return a
};
(function(a) {
	a.e.Dp = function(a, c) {
		this.top = a;
		this.stack = c || []
	};
	a.x9 = a.e.Dp;
	var c = a.e.Dp.prototype;
	c.xr = function() {
		this.stack.length = 0;
		this.top = s
	};
	a.z9 = function(c, e) {
		c.stack.push(c.top);
		c.top = new a.e.X(e)
	};
	a.y9 = function(a) {
		a.top = a.stack.pop()
	};
	a.A9 = function(a) {
		a.stack = s;
		a.top = s
	};
	c.push = function(c) {
		c = c || this.top;
		this.stack.push(this.top);
		this.top = new a.e.X(c)
	};
	c.pop = function() {
		this.top = this.stack.pop()
	};
	c.he = function() {
		this.QG = this.top = this.stack = s
	};
	c.Q2 = function(c) {
		var e = this.QG;
		if (0 === e.length) return new a.e.X(c);
		e = e.pop();
		e.nd(c);
		return e
	};
	c.g3 = function(a) {
		this.QG.push(a)
	}
})(I);
(function(a) {
	a.ei = 5888;
	a.fi = 5889;
	a.CD = 5890;
	a.Oh = new a.e.Dp;
	a.Qh = new a.e.Dp;
	a.To = new a.e.Dp;
	a.vb = s;
	a.nX = function() {
		var c = new a.e.X;
		a.Oh.xr();
		a.Qh.xr();
		a.To.xr();
		a.vb = a.Oh;
		a.OW = p;
		c.qd();
		a.Oh.push(c);
		a.Qh.push(c);
		a.To.push(c)
	};
	a.nX();
	a.mX = function() {
		a.Oh.he();
		a.Oh = s;
		a.Qh.he();
		a.Qh = s;
		a.To.he();
		a.To = s;
		a.OW = u;
		a.vb = s
	};
	a.$v = function() {
		a.vb.push(a.vb.top)
	};
	a.f9 = function(c) {
		a.vb.stack.push(a.vb.top);
		c.nd(a.vb.top);
		a.vb.top = c
	};
	a.Zv = function() {
		a.vb.top = a.vb.stack.pop()
	};
	a.dj = function(c) {
		switch (c) {
			case a.ei:
				a.vb =
					a.Oh;
				break;
			case a.fi:
				a.vb = a.Qh;
				break;
			case a.CD:
				a.vb = a.To;
				break;
			default:
				b(Error("Invalid matrix mode specified"))
		}
	};
	a.Yv = function() {
		a.vb.top.qd()
	};
	a.e9 = function(c) {
		a.vb.top.nd(c)
	};
	a.Hr = function(c) {
		a.vb.top.multiply(c)
	};
	var c = new a.e.X;
	a.i9 = function(d, f, g) {
		d = a.e.X.Vn(d, f, g, c);
		a.vb.top.multiply(d)
	};
	var d = new a.e.va;
	a.g9 = function(e, f, g, h) {
		d.fill(f, g, h);
		e = a.e.X.vU(d, a.af(e), c);
		a.vb.top.multiply(e)
	};
	a.h9 = function(d, f, g) {
		d = a.e.X.fJ(d, f, g, c);
		a.vb.top.multiply(d)
	};
	a.Gr = function(c, d) {
		switch (c) {
			case a.ei:
				d.nd(a.Oh.top);
				break;
			case a.fi:
				d.nd(a.Qh.top);
				break;
			case a.CD:
				d.nd(a.To.top);
				break;
			default:
				b(Error("Invalid matrix mode specified"))
		}
	}
})(I);
I.IO = "precision lowp float;\nvarying vec4 v_fragmentColor;\nvoid main()                              \n{ \n    gl_FragColor \x3d v_fragmentColor;      \n}\n";
I.JO = "attribute vec4 a_position;\nuniform    vec4 u_color;\nuniform float u_pointSize;\nvarying lowp vec4 v_fragmentColor; \nvoid main(void)   \n{\n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    gl_PointSize \x3d u_pointSize;          \n    v_fragmentColor \x3d u_color;           \n}";
I.wO = "precision lowp float; \nvarying vec4 v_fragmentColor; \nvoid main() \n{ \n     gl_FragColor \x3d v_fragmentColor; \n} ";
I.zO = "attribute vec4 a_position;\nattribute vec4 a_color;\nvarying lowp vec4 v_fragmentColor;\nvoid main()\n{\n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor \x3d a_color;             \n}";
I.xO = "// #extension GL_OES_standard_derivatives : enable\nvarying mediump vec4 v_color;\nvarying mediump vec2 v_texcoord;\nvoid main()\t\n{ \n// #if defined GL_OES_standard_derivatives\t\n// gl_FragColor \x3d v_color*smoothstep(0.0, length(fwidth(v_texcoord)), 1.0 - length(v_texcoord)); \n// #else\t\ngl_FragColor \x3d v_color * step(0.0, 1.0 - length(v_texcoord)); \n// #endif \n}";
I.yO = "attribute mediump vec4 a_position; \nattribute mediump vec2 a_texcoord; \nattribute mediump vec4 a_color;\t\nvarying mediump vec4 v_color; \nvarying mediump vec2 v_texcoord;\t\nvoid main() \n{ \n     v_color \x3d a_color;//vec4(a_color.rgb * a_color.a, a_color.a); \n     v_texcoord \x3d a_texcoord; \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n}";
I.EO = "precision lowp float;   \nvarying vec2 v_texCoord;  \nvoid main() \n{  \n    gl_FragColor \x3d  texture2D(CC_Texture0, v_texCoord);   \n}";
I.HO = "attribute vec4 a_position; \nattribute vec2 a_texCoord; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_texCoord \x3d a_texCoord;               \n}";
I.FO = "precision lowp float;  \nuniform vec4 u_color; \nvarying vec2 v_texCoord; \nvoid main() \n{  \n    gl_FragColor \x3d  texture2D(CC_Texture0, v_texCoord) * u_color;    \n}";
I.GO = "attribute vec4 a_position;\nattribute vec2 a_texCoord; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_texCoord \x3d a_texCoord;                 \n}";
I.AO = "precision lowp float;  \nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord; \nvoid main() \n{ \n    gl_FragColor \x3d vec4( v_fragmentColor.rgb,         \n        v_fragmentColor.a * texture2D(CC_Texture0, v_texCoord).a   \n    ); \n}";
I.BO = "attribute vec4 a_position; \nattribute vec2 a_texCoord; \nattribute vec4 a_color;  \nvarying lowp vec4 v_fragmentColor; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor \x3d a_color; \n    v_texCoord \x3d a_texCoord; \n}";
I.DO = "precision lowp float;\nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord; \nvoid main() \n{ \n    gl_FragColor \x3d v_fragmentColor * texture2D(CC_Texture0, v_texCoord); \n}";
I.VD = "attribute vec4 a_position; \nattribute vec2 a_texCoord; \nattribute vec4 a_color;  \nvarying lowp vec4 v_fragmentColor; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor \x3d a_color; \n    v_texCoord \x3d a_texCoord; \n}";
I.CO = "precision lowp float;   \nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord;   \nuniform float CC_alpha_value; \nvoid main() \n{  \n    vec4 texColor \x3d texture2D(CC_Texture0, v_texCoord);  \n    if ( texColor.a \x3c\x3d CC_alpha_value )          \n        discard; \n    gl_FragColor \x3d texColor * v_fragmentColor;  \n}";
I.M1 = "precision lowp float; \nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord; \nuniform sampler2D u_texture;  \nuniform sampler2D   u_mask;   \nvoid main()  \n{  \n    vec4 texColor   \x3d texture2D(u_texture, v_texCoord);  \n    vec4 maskColor  \x3d texture2D(u_mask, v_texCoord); \n    vec4 finalColor \x3d vec4(texColor.r, texColor.g, texColor.b, maskColor.a * texColor.a);        \n    gl_FragColor    \x3d v_fragmentColor * finalColor; \n}";
I.cg = {
	Zx: 0,
	$x: 1,
	Xx: 2,
	Yx: 3,
	by: 4,
	ay: 5,
	cy: 6,
	cE: 7,
	g2: 8,
	Ic: {},
	ui: function() {
		this.pX();
		return p
	},
	Td: function(a, c) {
		switch (c) {
			case this.Zx:
				a.Jh(I.VD, I.DO);
				a.Mc(I.Dk, I.tb);
				a.Mc(I.ep, I.Je);
				a.Mc(I.mm, I.Ke);
				break;
			case this.$x:
				a.Jh(I.VD, I.CO);
				a.Mc(I.Dk, I.tb);
				a.Mc(I.ep, I.Je);
				a.Mc(I.mm, I.Ke);
				break;
			case this.Xx:
				a.Jh(I.zO, I.wO);
				a.Mc(I.Dk, I.tb);
				a.Mc(I.ep, I.Je);
				break;
			case this.Yx:
				a.Jh(I.HO, I.EO);
				a.Mc(I.Dk, I.tb);
				a.Mc(I.mm, I.Ke);
				break;
			case this.by:
				a.Jh(I.GO, I.FO);
				a.Mc(I.Dk, I.tb);
				a.Mc(I.mm, I.Ke);
				break;
			case this.ay:
				a.Jh(I.BO,
					I.AO);
				a.Mc(I.Dk, I.tb);
				a.Mc(I.ep, I.Je);
				a.Mc(I.mm, I.Ke);
				break;
			case this.cy:
				a.Jh(I.JO, I.IO);
				a.Mc("aVertex", I.tb);
				break;
			case this.cE:
				a.Jh(I.yO, I.xO);
				a.Mc(I.Dk, I.tb);
				a.Mc(I.mm, I.Ke);
				a.Mc(I.ep, I.Je);
				break;
			default:
				I.log("cocos2d: cc.shaderCache._loadDefaultShader, error shader type");
				return
		}
		a.link();
		a.k_()
	},
	pX: function() {
		var a = new I.wd;
		this.Td(a, this.Zx);
		this.Ic[I.wm] = a;
		this.Ic.ShaderPositionTextureColor = a;
		a = new I.wd;
		this.Td(a, this.$x);
		this.Ic[I.UD] = a;
		this.Ic.ShaderPositionTextureColorAlphaTest = a;
		a = new I.wd;
		this.Td(a, this.Xx);
		this.Ic[I.it] = a;
		this.Ic.ShaderPositionColor = a;
		a = new I.wd;
		this.Td(a, this.Yx);
		this.Ic[I.jt] = a;
		this.Ic.ShaderPositionTexture = a;
		a = new I.wd;
		this.Td(a, this.by);
		this.Ic[I.Tx] = a;
		this.Ic.ShaderPositionTextureUColor = a;
		a = new I.wd;
		this.Td(a, this.ay);
		this.Ic[I.Sx] = a;
		this.Ic.ShaderPositionTextureA8Color = a;
		a = new I.wd;
		this.Td(a, this.cy);
		this.Ic[I.Ux] = a;
		this.Ic.ShaderPositionUColor = a;
		a = new I.wd;
		this.Td(a, this.cE);
		this.Ic[I.TD] = a;
		this.Ic.ShaderPositionLengthTextureColor = a
	},
	zaa: function() {
		var a = this.ad(I.wm);
		a.reset();
		this.Td(a, this.Zx);
		a = this.ad(I.UD);
		a.reset();
		this.Td(a, this.$x);
		a = this.ad(I.it);
		a.reset();
		this.Td(a, this.Xx);
		a = this.ad(I.jt);
		a.reset();
		this.Td(a, this.Yx);
		a = this.ad(I.Tx);
		a.reset();
		this.Td(a, this.by);
		a = this.ad(I.Sx);
		a.reset();
		this.Td(a, this.ay);
		a = this.ad(I.Ux);
		a.reset();
		this.Td(a, this.cy)
	},
	ad: function(a) {
		return this.Ic[a]
	},
	Iv: function(a) {
		return this.Ic[a]
	},
	K3: function(a, c) {
		this.Ic[c] = a
	}
};
I.lN = function() {
	this.location = this.value = m;
	this.Pv = {}
};
I.wd = I.Ta.extend({
	ea: s,
	qb: s,
	ye: s,
	Bf: s,
	ya: s,
	qg: s,
	SA: u,
	Xd: function(a, c) {
		if (a == s) return u;
		for (var d = p, e = s, f = 0; f < this.qg.length; f++) this.qg[f].location == a && (e = this.qg[f]);
		e ? e.value == c ? d = u : e.value = c : (e = new I.lN, e.location = a, e.value = c, this.qg.push(e));
		return d
	},
	I2: function() {
		return "\x3cCCGLProgram \x3d " + this.toString() + " | Program \x3d " + this.qb.toString() + ", VertexShader \x3d " + this.ye.toString() + ", FragmentShader \x3d " + this.Bf.toString() + "\x3e"
	},
	fF: function(a, c, d) {
		if (!d || !a) return u;
		d = (I.wd.TR() ? "precision highp float;\n" :
			"precision mediump float;\n") + "uniform mat4 CC_PMatrix;         \nuniform mat4 CC_MVMatrix;        \nuniform mat4 CC_MVPMatrix;       \nuniform vec4 CC_Time;            \nuniform vec4 CC_SinTime;         \nuniform vec4 CC_CosTime;         \nuniform vec4 CC_Random01;        \nuniform sampler2D CC_Texture0;   \n//CC INCLUDES END                \n" + d;
		this.ea.shaderSource(a, d);
		this.ea.compileShader(a);
		d = this.ea.getShaderParameter(a, this.ea.COMPILE_STATUS);
		d || (I.log("cocos2d: ERROR: Failed to compile shader:\n" +
			this.ea.getShaderSource(a)), c === this.ea.VERTEX_SHADER ? I.log("cocos2d: \n" + this.o_()) : I.log("cocos2d: \n" + this.qV()));
		return d === p
	},
	ctor: function(a, c, d) {
		this.ya = [];
		this.qg = [];
		this.ea = d || I.s;
		a && c && this.pa(a, c)
	},
	I4: function() {
		this.qg = this.ya = this.Bf = this.ye = s;
		this.ea.deleteProgram(this.qb)
	},
	Jh: function(a, c) {
		var d = this.ea;
		this.qb = d.createProgram();
		this.Bf = this.ye = s;
		a && (this.ye = d.createShader(d.VERTEX_SHADER), this.fF(this.ye, d.VERTEX_SHADER, a) || I.log("cocos2d: ERROR: Failed to compile vertex shader"));
		c && (this.Bf = d.createShader(d.FRAGMENT_SHADER), this.fF(this.Bf, d.FRAGMENT_SHADER, c) || I.log("cocos2d: ERROR: Failed to compile fragment shader"));
		this.ye && d.attachShader(this.qb, this.ye);
		I.Sn();
		this.Bf && d.attachShader(this.qb, this.Bf);
		this.qg.length = 0;
		I.Sn();
		return p
	},
	Ih: function(a, c) {
		return this.Jh(a, c)
	},
	NW: function(a, c) {
		var d = I.T.Be(a);
		d || b(Error("Please load the resource firset : " + a));
		var e = I.T.Be(c);
		e || b(Error("Please load the resource firset : " + c));
		return this.Jh(d, e)
	},
	pa: function(a, c) {
		return this.NW(a,
			c)
	},
	Mc: function(a, c) {
		this.ea.bindAttribLocation(this.qb, c, a)
	},
	link: function() {
		if (!this.qb) return I.log("cc.GLProgram.link(): Cannot link invalid program"), u;
		this.ea.linkProgram(this.qb);
		this.ye && this.ea.deleteShader(this.ye);
		this.Bf && this.ea.deleteShader(this.Bf);
		this.Bf = this.ye = s;
		return I.t.Ib[I.t.Ld.nr] && !this.ea.getProgramParameter(this.qb, this.ea.LINK_STATUS) ? (I.log("cocos2d: ERROR: Failed to link program: " + this.ea.getProgramInfoLog(this.qb)), I.rW(this.qb), this.qb = s, u) : p
	},
	kc: function() {
		I.KJ(this.qb)
	},
	k_: function() {
		this.ya[I.Np] = this.ea.getUniformLocation(this.qb, I.dQ);
		this.ya[I.Mp] = this.ea.getUniformLocation(this.qb, I.bQ);
		this.ya[I.zm] = this.ea.getUniformLocation(this.qb, I.cQ);
		this.ya[I.yt] = this.ea.getUniformLocation(this.qb, I.hQ);
		this.ya[I.xt] = this.ea.getUniformLocation(this.qb, I.gQ);
		this.ya[I.wt] = this.ea.getUniformLocation(this.qb, I.aQ);
		this.SA = this.ya[I.yt] != s || this.ya[I.xt] != s || this.ya[I.wt] != s;
		this.ya[I.Op] = this.ea.getUniformLocation(this.qb, I.eQ);
		this.ya[I.hy] = this.ea.getUniformLocation(this.qb,
			I.fQ);
		this.kc();
		this.xL(this.ya[I.hy], 0)
	},
	X7: function(a) {
		a || b(Error("cc.GLProgram.getUniformLocationForName(): uniform name should be non-null"));
		this.qb || b(Error("cc.GLProgram.getUniformLocationForName(): Invalid operation. Cannot get uniform location when program is not initialized"));
		return this.ea.getUniformLocation(this.qb, a)
	},
	Y7: function() {
		return this.ya[I.zm]
	},
	Z7: function() {
		return this.ya[I.hy]
	},
	xL: function(a, c) {
		this.Xd(a, c) && this.ea.uniform1i(a, c)
	},
	Cca: function(a, c, d) {
		this.Xd(a, [c, d]) && this.ea.uniform2i(a,
			c, d)
	},
	Fca: function(a, c, d, e) {
		this.Xd(a, [c, d, e]) && this.ea.uniform3i(a, c, d, e)
	},
	Ica: function(a, c, d, e, f) {
		this.Xd(a, [c, d, e, f]) && this.ea.uniform4i(a, c, d, e, f)
	},
	Dca: function(a, c) {
		this.Xd(a, c) && this.ea.uniform2iv(a, c)
	},
	Gca: function(a, c) {
		this.Xd(a, c) && this.ea.uniform3iv(a, c)
	},
	Jca: function(a, c) {
		this.Xd(a, c) && this.ea.uniform4iv(a, c)
	},
	Aca: function(a, c) {
		this.xL(a, c)
	},
	LC: function(a, c) {
		this.Xd(a, c) && this.ea.uniform1f(a, c)
	},
	pZ: function(a, c, d) {
		this.Xd(a, [c, d]) && this.ea.uniform2f(a, c, d)
	},
	qZ: function(a, c, d, e) {
		this.Xd(a, [c, d, e]) && this.ea.uniform3f(a, c, d, e)
	},
	nj: function(a, c, d, e, f) {
		this.Xd(a, [c, d, e, f]) && this.ea.uniform4f(a, c, d, e, f)
	},
	Bca: function(a, c) {
		this.Xd(a, c) && this.ea.uniform2fv(a, c)
	},
	Eca: function(a, c) {
		this.Xd(a, c) && this.ea.uniform3fv(a, c)
	},
	Hca: function(a, c) {
		this.Xd(a, c) && this.ea.uniform4fv(a, c)
	},
	Oo: function(a, c) {
		this.Xd(a, c) && this.ea.uniformMatrix4fv(a, u, c)
	},
	zca: function() {
		if (!(2 > arguments.length)) switch (arguments.length) {
			case 2:
				this.LC(arguments[0], arguments[1]);
				break;
			case 3:
				this.pZ(arguments[0], arguments[1],
					arguments[2]);
				break;
			case 4:
				this.qZ(arguments[0], arguments[1], arguments[2], arguments[3]);
				break;
			case 5:
				this.nj(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4])
		}
	},
	yL: function() {
		var a = new I.e.X,
			c = new I.e.X,
			d = new I.e.X;
		I.Gr(I.fi, a);
		I.Gr(I.ei, c);
		I.aw(d, a, c);
		this.Oo(this.ya[I.Np], a.l, 1);
		this.Oo(this.ya[I.Mp], c.l, 1);
		this.Oo(this.ya[I.zm], d.l, 1);
		this.SA && (a = I.O, a = a.Tq * a.Cm, this.nj(this.ya[I.yt], a / 10, a, 2 * a, 4 * a), this.nj(this.ya[I.xt], a / 8, a / 4, a / 2, Math.sin(a)), this.nj(this.ya[I.wt], a / 8, a / 4, a /
			2, Math.cos(a))); - 1 !== this.ya[I.Op] && this.nj(this.ya[I.Op], Math.random(), Math.random(), Math.random(), Math.random())
	},
	u3: function(a) {
		if (a && a.f) {
			var c = new I.e.X,
				d = new I.e.X;
			I.Gr(I.fi, c);
			I.aw(d, c, a.f.Ad);
			this.Oo(this.ya[I.Np], c.l, 1);
			this.Oo(this.ya[I.Mp], a.f.Ad.l, 1);
			this.Oo(this.ya[I.zm], d.l, 1);
			this.SA && (a = I.O, a = a.Tq * a.Cm, this.nj(this.ya[I.yt], a / 10, a, 2 * a, 4 * a), this.nj(this.ya[I.xt], a / 8, a / 4, a / 2, Math.sin(a)), this.nj(this.ya[I.wt], a / 8, a / 4, a / 2, Math.cos(a))); - 1 !== this.ya[I.Op] && this.nj(this.ya[I.Op], Math.random(),
				Math.random(), Math.random(), Math.random())
		}
	},
	xca: function() {
		this.ea.uniformMatrix4fv(this.ya[I.zm], u, I.QV())
	},
	yca: function(a) {
		I.aw(a, I.Qh.top, I.Oh.top);
		this.ea.uniformMatrix4fv(this.ya[I.zm], u, a.l)
	},
	Wh: function() {
		this.ea.uniformMatrix4fv(this.ya[I.Mp], u, I.Oh.top.l);
		this.ea.uniformMatrix4fv(this.ya[I.Np], u, I.Qh.top.l)
	},
	Ji: function(a) {
		a || b(Error("modelView matrix is undefined."));
		this.ea.uniformMatrix4fv(this.ya[I.Mp], u, a.l);
		this.ea.uniformMatrix4fv(this.ya[I.Np], u, I.Qh.top.l)
	},
	o_: function() {
		return this.ea.getShaderInfoLog(this.ye)
	},
	f8: function() {
		return this.ea.getShaderInfoLog(this.ye)
	},
	X6: function() {
		return this.ea.getShaderInfoLog(this.ye)
	},
	qV: function() {
		return this.ea.getShaderInfoLog(this.Bf)
	},
	iaa: function() {
		return this.ea.getProgramInfoLog(this.qb)
	},
	A7: function() {
		return this.ea.getProgramInfoLog(this.qb)
	},
	reset: function() {
		this.Bf = this.ye = s;
		this.ya.length = 0;
		this.ea.deleteProgram(this.qb);
		this.qb = s;
		for (var a = 0; a < this.qg.length; a++) this.qg[a].value = s, this.qg[a] = s;
		this.qg.length = 0
	},
	Iv: D("qb"),
	yw: y(),
	he: y()
});
I.wd.create = function(a, c) {
	return new I.wd(a, c)
};
I.wd.wz = s;
I.wd.TR = function() {
	if (I.wd.wz == s) {
		var a = I.s;
		I.wd.wz = 0 !== a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision
	}
	return I.wd.wz
};
I.$Y = function(a, c) {
	a.shaderProgram = c;
	var d = a.children;
	if (d)
		for (var e = 0; e < d.length; e++) I.$Y(d[e], c)
};
I.mF = -1;
I.WA = u;
I.VA = u;
I.XA = u;
I.gg && (I.zN = 16, I.dq = -1, I.cq = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], I.Jm = -1, I.Im = -1, I.tQ = 0, I.ZD && (I.lI = 0));
I.r8 = function() {
	I.mX();
	I.mF = -1;
	I.WA = u;
	I.VA = u;
	I.XA = u;
	if (I.gg) {
		I.dq = -1;
		for (var a = 0; a < I.zN; a++) I.cq[a] = -1;
		I.Jm = -1;
		I.Im = -1;
		I.tQ = 0
	}
};
I.KJ = function(a) {
	a !== I.dq && (I.dq = a, I.s.useProgram(a))
};
I.gg || (I.KJ = function(a) {
	I.s.useProgram(a)
});
I.rW = function(a) {
	I.gg && a === I.dq && (I.dq = -1);
	gl.deleteProgram(a)
};
I.Xf = function(a, c) {
	if (a !== I.Jm || c !== I.Im) I.Jm = a, I.Im = c, I.Cw(a, c)
};
I.Cw = function(a, c) {
	var d = I.s;
	a === d.ONE && c === d.ZERO ? d.disable(d.BLEND) : (d.enable(d.BLEND), I.s.blendFunc(a, c))
};
I.n8 = function(a, c) {
	if (a !== I.Jm || c !== I.Im) {
		I.Jm = a;
		I.Im = c;
		var d = I.s;
		a === d.ONE && c === d.ZERO ? d.disable(d.BLEND) : (d.enable(d.BLEND), d.blendFuncSeparate(d.SRC_ALPHA, c, a, c))
	}
};
I.gg || (I.Xf = I.Cw);
I.o8 = function() {
	var a = I.s;
	a.blendEquation(a.FUNC_ADD);
	I.gg ? I.Cw(I.Jm, I.Im) : I.Cw(a.bi, a.Ug)
};
I.aZ = function() {
	I.mF = -1
};
I.Zc = function(a) {
	var c = I.s,
		d = a & I.xd;
	d !== I.WA && (d ? c.enableVertexAttribArray(I.tb) : c.disableVertexAttribArray(I.tb), I.WA = d);
	d = a & I.Pp;
	d !== I.VA && (d ? c.enableVertexAttribArray(I.Je) : c.disableVertexAttribArray(I.Je), I.VA = d);
	a &= I.At;
	a !== I.XA && (a ? c.enableVertexAttribArray(I.Ke) : c.disableVertexAttribArray(I.Ke), I.XA = a)
};
I.Wf = function(a) {
	I.TB(0, a)
};
I.TB = function(a, c) {
	if (I.cq[a] !== c) {
		I.cq[a] = c;
		var d = I.s;
		d.activeTexture(d.TEXTURE0 + a);
		c ? d.bindTexture(d.TEXTURE_2D, c.Pf) : d.bindTexture(d.TEXTURE_2D, s)
	}
};
I.gg || (I.TB = function(a, c) {
	var d = I.s;
	d.activeTexture(d.TEXTURE0 + a);
	c ? d.bindTexture(d.TEXTURE_2D, c.Pf) : d.bindTexture(d.TEXTURE_2D, s)
});
I.p8 = function(a) {
	I.sW(a)
};
I.sW = function(a) {
	I.gg && a === I.cq[0] && (I.cq[0] = -1);
	I.s.deleteTexture(a)
};
I.m8 = function(a) {
	I.ZD && (I.gg && I.lI !== a) && (I.lI = a)
};
I.q8 = y();
I.lm = -1;
I.Tc = I.Ta.extend({
	originalTarget: s,
	target: s,
	tag: I.lm,
	ctor: function() {
		this.target = this.originalTarget = s;
		this.tag = I.lm
	},
	copy: function() {
		I.log("copy is deprecated. Please use clone instead.");
		return this.j()
	},
	j: function() {
		var a = new I.Tc;
		a.originalTarget = s;
		a.target = s;
		a.tag = this.tag;
		return a
	},
	Zf: E(p),
	M: function(a) {
		this.target = this.originalTarget = a
	},
	stop: function() {
		this.target = s
	},
	step: function() {
		I.log("[Action step]. override me")
	},
	update: function() {
		I.log("[Action update]. override me")
	},
	P7: D("target"),
	im: A("target"),
	v7: D("originalTarget"),
	gca: A("originalTarget"),
	RB: D("tag"),
	No: A("tag"),
	yw: y(),
	he: y()
});
I.action = function() {
	return new I.Tc
};
I.Tc.create = I.action;
I.di = I.Tc.extend({
	q: 0,
	ctor: function() {
		I.Tc.prototype.ctor.call(this);
		this.q = 0
	},
	KB: function() {
		return this.q * (this.Nf || 1)
	},
	Iba: A("q"),
	reverse: function() {
		I.log("cocos2d: FiniteTimeAction#reverse: Implement me");
		return s
	},
	j: function() {
		return new I.di
	}
});
I.ot = I.Tc.extend({
	zd: 0,
	Ya: s,
	ctor: function(a, c) {
		I.Tc.prototype.ctor.call(this);
		this.zd = 0;
		this.Ya = s;
		a && this.Y(a, c)
	},
	fW: D("zd"),
	iZ: A("zd"),
	Y: function(a, c) {
		a || b(Error("cc.Speed.initWithAction(): action must be non nil"));
		this.Ya = a;
		this.zd = c;
		return p
	},
	j: function() {
		var a = new I.ot;
		a.Y(this.Ya.j(), this.zd);
		return a
	},
	M: function(a) {
		I.Tc.prototype.M.call(this, a);
		this.Ya.M(a)
	},
	stop: function() {
		this.Ya.stop();
		I.Tc.prototype.stop.call(this)
	},
	step: function(a) {
		this.Ya.step(a * this.zd)
	},
	Zf: function() {
		return this.Ya.Zf()
	},
	reverse: function() {
		return new I.ot(this.Ya.reverse(), this.zd)
	},
	mL: function(a) {
		this.Ya !== a && (this.Ya = a)
	},
	LB: D("Ya")
});
I.speed = function(a, c) {
	return new I.ot(a, c)
};
I.ot.create = I.speed;
I.ux = I.Tc.extend({
	Ym: s,
	Km: u,
	Lt: u,
	ku: s,
	lq: s,
	bB: s,
	Ul: 0,
	cm: 0,
	km: 0,
	Il: 0,
	ctor: function(a, c) {
		I.Tc.prototype.ctor.call(this);
		this.Ym = s;
		this.Lt = this.Km = u;
		this.lq = this.ku = s;
		this.Il = this.km = this.cm = this.Ul = 0;
		this.bB = I.rect(0, 0, 0, 0);
		a && (c ? this.lo(a, c) : this.lo(a))
	},
	j: function() {
		var a = new I.ux,
			c = this.bB;
		a.lo(this.Ym, new I.gi(c.x, c.y, c.width, c.height));
		return a
	},
	I8: D("Km"),
	rba: A("Km"),
	lo: function(a, c) {
		a || b(Error("cc.Follow.initWithAction(): followedNode must be non nil"));
		c = c || I.rect(0, 0, 0, 0);
		this.Ym = a;
		this.bB =
			c;
		this.Km = !I.Ku(c);
		this.Lt = u;
		var d = I.O.kb();
		this.lq = I.d(d.width, d.height);
		this.ku = I.kj(this.lq, 0.5);
		this.Km && (this.Ul = -(c.x + c.width - this.lq.x), this.cm = -c.x, this.km = -c.y, this.Il = -(c.y + c.height - this.lq.y), this.cm < this.Ul && (this.cm = this.Ul = (this.Ul + this.cm) / 2), this.km < this.Il && (this.km = this.Il = (this.km + this.Il) / 2), this.km === this.Il && this.Ul === this.cm && (this.Lt = p));
		return p
	},
	step: function() {
		var a = this.Ym.x,
			c = this.Ym.y,
			a = this.ku.x - a,
			c = this.ku.y - c;
		this.target.f.C = 0;
		this.Km ? this.Lt || this.target.Ia(I.ir(a,
			this.Ul, this.cm), I.ir(c, this.Il, this.km)) : this.target.Ia(a, c)
	},
	Zf: function() {
		return !this.Ym.running
	},
	stop: function() {
		this.target = s;
		I.Tc.prototype.stop.call(this)
	}
});
I.nV = function(a, c) {
	return new I.ux(a, c)
};
I.ux.create = I.nV;
I.H = I.di.extend({
	Bb: 0,
	eu: u,
	Af: s,
	Nf: 1,
	Hq: u,
	ml: u,
	zd: 1,
	Jq: u,
	ctor: function(a) {
		this.Nf = this.zd = 1;
		this.Hq = u;
		this.MAX_VALUE = 2;
		this.Jq = this.ml = u;
		I.di.prototype.ctor.call(this);
		a !== m && this.n(a)
	},
	P6: D("Bb"),
	n: function(a) {
		this.q = 0 === a ? I.Ts : a;
		this.Bb = 0;
		return this.eu = p
	},
	Zf: function() {
		return this.Bb >= this.q
	},
	qa: function(a) {
		a.Hq = this.Hq;
		a.zd = this.zd;
		a.Nf = this.Nf;
		a.Af = this.Af;
		a.Jq = this.Jq;
		a.ml = this.ml
	},
	yd: function(a) {
		if (this.Af) {
			a.Af = [];
			for (var c = 0; c < this.Af.length; c++) a.Af.push(this.Af[c].reverse())
		}
	},
	j: function() {
		var a =
			new I.H(this.q);
		this.qa(a);
		return a
	},
	Fa: function(a) {
		this.Af ? this.Af.length = 0 : this.Af = [];
		for (var c = 0; c < arguments.length; c++) this.Af.push(arguments[c]);
		return this
	},
	Fc: function(a) {
		var c = this.Af;
		if (!c || 0 === c.length) return a;
		for (var d = 0, e = c.length; d < e; d++) a = c[d].Fa(a);
		return a
	},
	step: function(a) {
		this.eu ? (this.eu = u, this.Bb = 0) : this.Bb += a;
		a = this.Bb / (1.192092896E-7 < this.q ? this.q : 1.192092896E-7);
		a = 1 > a ? a : 1;
		this.update(0 < a ? a : 0);
		this.ml && (1 < this.Nf && this.Zf()) && (this.Hq || this.Nf--, this.M(this.target), this.step(this.Bb -
			this.q))
	},
	M: function(a) {
		I.Tc.prototype.M.call(this, a);
		this.Bb = 0;
		this.eu = p
	},
	reverse: function() {
		I.log("cc.IntervalAction: reverse not implemented.");
		return s
	},
	oba: function() {
		I.log("cc.ActionInterval.setAmplitudeRate(): it should be overridden in subclass.")
	},
	n6: function() {
		I.log("cc.ActionInterval.getAmplitudeRate(): it should be overridden in subclass.");
		return 0
	},
	speed: function(a) {
		if (0 >= a) return I.log("The speed parameter error"), this;
		this.Jq = p;
		this.zd *= a;
		return this
	},
	fW: D("zd"),
	iZ: function(a) {
		this.zd =
			a;
		return this
	},
	repeat: function(a) {
		a = Math.round(a);
		if (isNaN(a) || 1 > a) return I.log("The repeat parameter error"), this;
		this.ml = p;
		this.Nf *= a;
		return this
	},
	Go: function() {
		this.ml = p;
		this.Nf = this.MAX_VALUE;
		this.Hq = p;
		return this
	}
});
I.pT = function(a) {
	return new I.H(a)
};
I.H.create = I.pT;
I.ii = I.H.extend({
	dh: s,
	WH: s,
	tq: 0,
	ctor: function(a) {
		I.H.prototype.ctor.call(this);
		this.dh = [];
		var c = a instanceof Array ? a : arguments,
			d = c.length - 1;
		0 <= d && c[d] == s && I.log("parameters should not be ending with null in Javascript");
		if (0 <= d) {
			for (var e = c[0], f = 1; f < d; f++) c[f] && (e = I.ii.li(e, c[f]));
			this.Rl(e, c[d])
		}
	},
	Rl: function(a, c) {
		(!a || !c) && b(Error("cc.Sequence.initWithTwoActions(): arguments must all be non nil"));
		this.n(a.q + c.q);
		this.dh[0] = a;
		this.dh[1] = c;
		return p
	},
	j: function() {
		var a = new I.ii;
		this.qa(a);
		a.Rl(this.dh[0].j(),
			this.dh[1].j());
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		this.WH = this.dh[0].q / this.q;
		this.tq = -1
	},
	stop: function() {
		-1 !== this.tq && this.dh[this.tq].stop();
		I.Tc.prototype.stop.call(this)
	},
	update: function(a) {
		var c = 0,
			d = this.WH,
			e = this.dh,
			f = this.tq;
		a = this.Fc(a);
		a < d ? (a = 0 !== d ? a / d : 1, 0 === c && 1 === f && (e[1].update(0), e[1].stop())) : (c = 1, a = 1 === d ? 1 : (a - d) / (1 - d), -1 === f && (e[0].M(this.target), e[0].update(1), e[0].stop()), f || (e[0].update(1), e[0].stop()));
		e = e[c];
		f === c && e.Zf() || (f !== c && e.M(this.target), a *= e.Nf, e.update(1 <
			a ? a % 1 : a), this.tq = c)
	},
	reverse: function() {
		var a = I.ii.li(this.dh[1].reverse(), this.dh[0].reverse());
		this.qa(a);
		this.yd(a);
		return a
	}
});
I.Ha = function(a) {
	var c = a instanceof Array ? a : arguments;
	0 < c.length && c[c.length - 1] == s && I.log("parameters should not be ending with null in Javascript");
	for (var d, e, f, g; c && 0 < c.length;) {
		e = Array.prototype.shift.call(c);
		g = e.Nf || 1;
		e.ml = u;
		e.Nf = 1;
		f = 0;
		d || (d = e, f = 1);
		for (f; f < g; f++) d = I.ii.li(d, e)
	}
	return d
};
I.ii.create = I.Ha;
I.ii.li = function(a, c) {
	var d = new I.ii;
	d.Rl(a, c);
	return d
};
I.et = I.H.extend({
	Mf: 0,
	ik: 0,
	Mz: 0,
	RE: u,
	Ya: s,
	ctor: function(a, c) {
		I.H.prototype.ctor.call(this);
		c !== m && this.Y(a, c)
	},
	Y: function(a, c) {
		return this.n(a.q * c) ? (this.Mf = c, this.Ya = a, a instanceof I.Tg && (this.RE = p, this.Mf -= 1), this.ik = 0, p) : u
	},
	j: function() {
		var a = new I.et;
		this.qa(a);
		a.Y(this.Ya.j(), this.Mf);
		return a
	},
	M: function(a) {
		this.ik = 0;
		this.Mz = this.Ya.q / this.q;
		I.H.prototype.M.call(this, a);
		this.Ya.M(a)
	},
	stop: function() {
		this.Ya.stop();
		I.Tc.prototype.stop.call(this)
	},
	update: function(a) {
		a = this.Fc(a);
		var c = this.Ya,
			d = this.q,
			e = this.Mf,
			f = this.Mz;
		if (a >= f) {
			for (; a > f && this.ik < e;) c.update(1), this.ik++, c.stop(), c.M(this.target), this.Mz = f += c.q / d;
			1 <= a && this.ik < e && this.ik++;
			this.RE || (this.ik === e ? (c.update(1), c.stop()) : c.update(a - (f - c.q / d)))
		} else c.update(a * e % 1)
	},
	Zf: function() {
		return this.ik === this.Mf
	},
	reverse: function() {
		var a = new I.et(this.Ya.reverse(), this.Mf);
		this.qa(a);
		this.yd(a);
		return a
	},
	mL: function(a) {
		this.Ya !== a && (this.Ya = a)
	},
	LB: D("Ya")
});
I.repeat = function(a, c) {
	return new I.et(a, c)
};
I.et.create = I.repeat;
I.ft = I.H.extend({
	Ya: s,
	ctor: function(a) {
		I.H.prototype.ctor.call(this);
		this.Ya = s;
		a && this.Y(a)
	},
	Y: function(a) {
		a || b(Error("cc.RepeatForever.initWithAction(): action must be non null"));
		this.Ya = a;
		return p
	},
	j: function() {
		var a = new I.ft;
		this.qa(a);
		a.Y(this.Ya.j());
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		this.Ya.M(a)
	},
	step: function(a) {
		var c = this.Ya;
		c.step(a);
		c.Zf() && (c.M(this.target), c.step(c.Bb - c.q))
	},
	Zf: E(u),
	reverse: function() {
		var a = new I.ft(this.Ya.reverse());
		this.qa(a);
		this.yd(a);
		return a
	},
	mL: function(a) {
		this.Ya !== a && (this.Ya = a)
	},
	LB: D("Ya")
});
I.Go = function(a) {
	return new I.ft(a)
};
I.ft.create = I.Go;
I.Jk = I.H.extend({
	xi: s,
	Qi: s,
	ctor: function(a) {
		I.H.prototype.ctor.call(this);
		this.Qi = this.xi = s;
		var c = a instanceof Array ? a : arguments,
			d = c.length - 1;
		0 <= d && c[d] == s && I.log("parameters should not be ending with null in Javascript");
		if (0 <= d) {
			for (var e = c[0], f = 1; f < d; f++) c[f] && (e = I.Jk.li(e, c[f]));
			this.Rl(e, c[d])
		}
	},
	Rl: function(a, c) {
		(!a || !c) && b(Error("cc.Spawn.initWithTwoActions(): arguments must all be non null"));
		var d = u,
			e = a.q,
			f = c.q;
		this.n(Math.max(e, f)) && (this.xi = a, this.Qi = c, e > f ? this.Qi = I.ii.li(c, I.gc(e - f)) : e <
			f && (this.xi = I.ii.li(a, I.gc(f - e))), d = p);
		return d
	},
	j: function() {
		var a = new I.Jk;
		this.qa(a);
		a.Rl(this.xi.j(), this.Qi.j());
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		this.xi.M(a);
		this.Qi.M(a)
	},
	stop: function() {
		this.xi.stop();
		this.Qi.stop();
		I.Tc.prototype.stop.call(this)
	},
	update: function(a) {
		a = this.Fc(a);
		this.xi && this.xi.update(a);
		this.Qi && this.Qi.update(a)
	},
	reverse: function() {
		var a = I.Jk.li(this.xi.reverse(), this.Qi.reverse());
		this.qa(a);
		this.yd(a);
		return a
	}
});
I.zk = function(a) {
	var c = a instanceof Array ? a : arguments;
	0 < c.length && c[c.length - 1] == s && I.log("parameters should not be ending with null in Javascript");
	for (var d = c[0], e = 1; e < c.length; e++) c[e] != s && (d = I.Jk.li(d, c[e]));
	return d
};
I.Jk.create = I.zk;
I.Jk.li = function(a, c) {
	var d = new I.Jk;
	d.Rl(a, c);
	return d
};
I.Qx = I.H.extend({
	Xt: 0,
	Kq: 0,
	rF: 0,
	Xy: 0,
	xn: 0,
	sF: 0,
	ctor: function(a, c, d) {
		I.H.prototype.ctor.call(this);
		c !== m && this.n(a, c, d)
	},
	n: function(a, c, d) {
		return I.H.prototype.n.call(this, a) ? (this.Xt = c || 0, this.Xy = d || this.Xt, p) : u
	},
	j: function() {
		var a = new I.Qx;
		this.qa(a);
		a.n(this.q, this.Xt, this.Xy);
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		var c = a.rotationX % 360,
			d = this.Xt - c;
		180 < d && (d -= 360); - 180 > d && (d += 360);
		this.Kq = c;
		this.rF = d;
		this.xn = a.rotationY % 360;
		a = this.Xy - this.xn;
		180 < a && (a -= 360); - 180 > a && (a += 360);
		this.sF =
			a
	},
	reverse: function() {
		I.log("cc.RotateTo.reverse(): it should be overridden in subclass.")
	},
	update: function(a) {
		a = this.Fc(a);
		this.target && (this.target.rotationX = this.Kq + this.rF * a, this.target.rotationY = this.xn + this.sF * a)
	}
});
I.CC = function(a, c, d) {
	return new I.Qx(a, c, d)
};
I.Qx.create = I.CC;
I.ht = I.H.extend({
	kg: 0,
	Kq: 0,
	Gt: 0,
	xn: 0,
	ctor: function(a, c, d) {
		I.H.prototype.ctor.call(this);
		c !== m && this.n(a, c, d)
	},
	n: function(a, c, d) {
		return I.H.prototype.n.call(this, a) ? (this.kg = c || 0, this.Gt = d || this.kg, p) : u
	},
	j: function() {
		var a = new I.ht;
		this.qa(a);
		a.n(this.q, this.kg, this.Gt);
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		this.Kq = a.rotationX;
		this.xn = a.rotationY
	},
	update: function(a) {
		a = this.Fc(a);
		this.target && (this.target.rotationX = this.Kq + this.kg * a, this.target.rotationY = this.xn + this.Gt * a)
	},
	reverse: function() {
		var a =
			new I.ht(this.q, -this.kg, -this.Gt);
		this.qa(a);
		this.yd(a);
		return a
	}
});
I.WK = function(a, c, d) {
	return new I.ht(a, c, d)
};
I.ht.create = I.WK;
I.xj = I.H.extend({
	uh: s,
	ec: s,
	qc: s,
	ctor: function(a, c, d) {
		I.H.prototype.ctor.call(this);
		this.uh = I.d(0, 0);
		this.ec = I.d(0, 0);
		this.qc = I.d(0, 0);
		c !== m && this.n(a, c, d)
	},
	n: function(a, c, d) {
		return I.H.prototype.n.call(this, a) ? (c.x !== m && (d = c.y, c = c.x), this.uh.x = c, this.uh.y = d, p) : u
	},
	j: function() {
		var a = new I.xj;
		this.qa(a);
		a.n(this.q, this.uh);
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		var c = a.ee();
		a = a.Vf();
		this.qc.x = c;
		this.qc.y = a;
		this.ec.x = c;
		this.ec.y = a
	},
	update: function(a) {
		a = this.Fc(a);
		if (this.target) {
			var c =
				this.uh.x * a;
			a *= this.uh.y;
			var d = this.ec;
			if (I.ys) {
				var e = this.target.Vf(),
					f = this.qc;
				d.x = d.x + this.target.ee() - f.x;
				d.y = d.y + e - f.y;
				c += d.x;
				a += d.y;
				f.x = c;
				f.y = a;
				this.target.Ia(c, a)
			} else this.target.Ia(d.x + c, d.y + a)
		}
	},
	reverse: function() {
		var a = new I.xj(this.q, I.d(-this.uh.x, -this.uh.y));
		this.qa(a);
		this.yd(a);
		return a
	}
});
I.moveBy = function(a, c, d) {
	return new I.xj(a, c, d)
};
I.xj.create = I.moveBy;
I.yx = I.xj.extend({
	Pe: s,
	ctor: function(a, c, d) {
		I.xj.prototype.ctor.call(this);
		this.Pe = I.d(0, 0);
		c !== m && this.n(a, c, d)
	},
	n: function(a, c, d) {
		return I.xj.prototype.n.call(this, a, c, d) ? (c.x !== m && (d = c.y, c = c.x), this.Pe.x = c, this.Pe.y = d, p) : u
	},
	j: function() {
		var a = new I.yx;
		this.qa(a);
		a.n(this.q, this.Pe);
		return a
	},
	M: function(a) {
		I.xj.prototype.M.call(this, a);
		this.uh.x = this.Pe.x - a.ee();
		this.uh.y = this.Pe.y - a.Vf()
	}
});
I.moveTo = function(a, c, d) {
	return new I.yx(a, c, d)
};
I.yx.create = I.moveTo;
I.Ik = I.H.extend({
	Ki: 0,
	Li: 0,
	Xu: 0,
	Yu: 0,
	$t: 0,
	au: 0,
	qe: 0,
	re: 0,
	ctor: function(a, c, d) {
		I.H.prototype.ctor.call(this);
		d !== m && this.n(a, c, d)
	},
	n: function(a, c, d) {
		var e = u;
		I.H.prototype.n.call(this, a) && (this.$t = c, this.au = d, e = p);
		return e
	},
	j: function() {
		var a = new I.Ik;
		this.qa(a);
		a.n(this.q, this.$t, this.au);
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		this.Xu = a.skewX % 180;
		this.qe = this.$t - this.Xu;
		180 < this.qe && (this.qe -= 360); - 180 > this.qe && (this.qe += 360);
		this.Yu = a.skewY % 360;
		this.re = this.au - this.Yu;
		180 < this.re && (this.re -=
			360); - 180 > this.re && (this.re += 360)
	},
	update: function(a) {
		a = this.Fc(a);
		this.target.skewX = this.Xu + this.qe * a;
		this.target.skewY = this.Yu + this.re * a
	}
});
I.CZ = function(a, c, d) {
	return new I.Ik(a, c, d)
};
I.Ik.create = I.CZ;
I.nt = I.Ik.extend({
	ctor: function(a, c, d) {
		I.Ik.prototype.ctor.call(this);
		d !== m && this.n(a, c, d)
	},
	n: function(a, c, d) {
		var e = u;
		I.Ik.prototype.n.call(this, a, c, d) && (this.Ki = c, this.Li = d, e = p);
		return e
	},
	j: function() {
		var a = new I.nt;
		this.qa(a);
		a.n(this.q, this.Ki, this.Li);
		return a
	},
	M: function(a) {
		I.Ik.prototype.M.call(this, a);
		this.qe = this.Ki;
		this.re = this.Li;
		this.$t = this.Xu + this.qe;
		this.au = this.Yu + this.re
	},
	reverse: function() {
		var a = new I.nt(this.q, -this.Ki, -this.Li);
		this.qa(a);
		this.yd(a);
		return a
	}
});
I.BZ = function(a, c, d) {
	return new I.nt(a, c, d)
};
I.nt.create = I.BZ;
I.wj = I.H.extend({
	ec: s,
	hh: s,
	oq: 0,
	sq: 0,
	qc: s,
	ctor: function(a, c, d, e, f) {
		I.H.prototype.ctor.call(this);
		this.ec = I.d(0, 0);
		this.qc = I.d(0, 0);
		this.hh = I.d(0, 0);
		e !== m && this.n(a, c, d, e, f)
	},
	n: function(a, c, d, e, f) {
		return I.H.prototype.n.call(this, a) ? (f === m && (f = e, e = d, d = c.y, c = c.x), this.hh.x = c, this.hh.y = d, this.oq = e, this.sq = f, p) : u
	},
	j: function() {
		var a = new I.wj;
		this.qa(a);
		a.n(this.q, this.hh, this.oq, this.sq);
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		var c = a.ee();
		a = a.Vf();
		this.qc.x = c;
		this.qc.y = a;
		this.ec.x = c;
		this.ec.y =
			a
	},
	update: function(a) {
		a = this.Fc(a);
		if (this.target) {
			var c = a * this.sq % 1,
				c = 4 * this.oq * c * (1 - c),
				c = c + this.hh.y * a;
			a *= this.hh.x;
			var d = this.ec;
			if (I.ys) {
				var e = this.target.Vf(),
					f = this.qc;
				d.x = d.x + this.target.ee() - f.x;
				d.y = d.y + e - f.y;
				a += d.x;
				c += d.y;
				f.x = a;
				f.y = c;
				this.target.Ia(a, c)
			} else this.target.Ia(d.x + a, d.y + c)
		}
	},
	reverse: function() {
		var a = new I.wj(this.q, I.d(-this.hh.x, -this.hh.y), this.oq, this.sq);
		this.qa(a);
		this.yd(a);
		return a
	}
});
I.Xv = function(a, c, d, e, f) {
	return new I.wj(a, c, d, e, f)
};
I.wj.create = I.Xv;
I.wx = I.wj.extend({
	Pe: s,
	ctor: function(a, c, d, e, f) {
		I.wj.prototype.ctor.call(this);
		this.Pe = I.d(0, 0);
		e !== m && this.n(a, c, d, e, f)
	},
	n: function(a, c, d, e, f) {
		return I.wj.prototype.n.call(this, a, c, d, e, f) ? (f === m && (d = c.y, c = c.x), this.Pe.x = c, this.Pe.y = d, p) : u
	},
	M: function(a) {
		I.wj.prototype.M.call(this, a);
		this.hh.x = this.Pe.x - this.ec.x;
		this.hh.y = this.Pe.y - this.ec.y
	},
	j: function() {
		var a = new I.wx;
		this.qa(a);
		a.n(this.q, this.Pe, this.oq, this.sq);
		return a
	}
});
I.hX = function(a, c, d, e, f) {
	return new I.wx(a, c, d, e, f)
};
I.wx.create = I.hX;
I.LI = function(a, c, d, e) {
	return 0 * Math.pow(1 - e, 3) + 3 * e * Math.pow(1 - e, 2) * a + 3 * Math.pow(e, 2) * (1 - e) * c + Math.pow(e, 3) * d
};
I.Ek = I.H.extend({
	Oe: s,
	ec: s,
	qc: s,
	ctor: function(a, c) {
		I.H.prototype.ctor.call(this);
		this.Oe = [];
		this.ec = I.d(0, 0);
		this.qc = I.d(0, 0);
		c && this.n(a, c)
	},
	n: function(a, c) {
		return I.H.prototype.n.call(this, a) ? (this.Oe = c, p) : u
	},
	j: function() {
		var a = new I.Ek;
		this.qa(a);
		for (var c = [], d = 0; d < this.Oe.length; d++) {
			var e = this.Oe[d];
			c.push(I.d(e.x, e.y))
		}
		a.n(this.q, c);
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		var c = a.ee();
		a = a.Vf();
		this.qc.x = c;
		this.qc.y = a;
		this.ec.x = c;
		this.ec.y = a
	},
	update: function(a) {
		a = this.Fc(a);
		if (this.target) {
			var c =
				this.Oe,
				d = I.LI(c[0].x, c[1].x, c[2].x, a);
			a = I.LI(c[0].y, c[1].y, c[2].y, a);
			c = this.ec;
			if (I.ys) {
				var e = this.target.Vf(),
					f = this.qc;
				c.x = c.x + this.target.ee() - f.x;
				c.y = c.y + e - f.y;
				d += c.x;
				a += c.y;
				f.x = d;
				f.y = a;
				this.target.Ia(d, a)
			} else this.target.Ia(c.x + d, c.y + a)
		}
	},
	reverse: function() {
		var a = this.Oe,
			a = [I.jj(a[1], I.mC(a[2])), I.jj(a[0], I.mC(a[2])), I.mC(a[2])],
			a = new I.Ek(this.q, a);
		this.qa(a);
		this.yd(a);
		return a
	}
});
I.YT = function(a, c) {
	return new I.Ek(a, c)
};
I.Ek.create = I.YT;
I.ex = I.Ek.extend({
	dv: s,
	ctor: function(a, c) {
		I.Ek.prototype.ctor.call(this);
		this.dv = [];
		c && this.n(a, c)
	},
	n: function(a, c) {
		return I.H.prototype.n.call(this, a) ? (this.dv = c, p) : u
	},
	j: function() {
		var a = new I.ex;
		this.qa(a);
		a.n(this.q, this.dv);
		return a
	},
	M: function(a) {
		I.Ek.prototype.M.call(this, a);
		a = this.ec;
		var c = this.dv,
			d = this.Oe;
		d[0] = I.$c(c[0], a);
		d[1] = I.$c(c[1], a);
		d[2] = I.$c(c[2], a)
	}
});
I.ZT = function(a, c) {
	return new I.ex(a, c)
};
I.ex.create = I.ZT;
I.Kp = I.H.extend({
	sa: 1,
	Va: 1,
	Mq: 1,
	Nq: 1,
	Tm: 0,
	Um: 0,
	qe: 0,
	re: 0,
	ctor: function(a, c, d) {
		I.H.prototype.ctor.call(this);
		c !== m && this.n(a, c, d)
	},
	n: function(a, c, d) {
		return I.H.prototype.n.call(this, a) ? (this.Tm = c, this.Um = d != s ? d : c, p) : u
	},
	j: function() {
		var a = new I.Kp;
		this.qa(a);
		a.n(this.q, this.Tm, this.Um);
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		this.Mq = a.scaleX;
		this.Nq = a.scaleY;
		this.qe = this.Tm - this.Mq;
		this.re = this.Um - this.Nq
	},
	update: function(a) {
		a = this.Fc(a);
		this.target && (this.target.scaleX = this.Mq + this.qe *
			a, this.target.scaleY = this.Nq + this.re * a)
	}
});
I.nf = function(a, c, d) {
	return new I.Kp(a, c, d)
};
I.Kp.create = I.nf;
I.lt = I.Kp.extend({
	M: function(a) {
		I.Kp.prototype.M.call(this, a);
		this.qe = this.Mq * this.Tm - this.Mq;
		this.re = this.Nq * this.Um - this.Nq
	},
	reverse: function() {
		var a = new I.lt(this.q, 1 / this.Tm, 1 / this.Um);
		this.qa(a);
		this.yd(a);
		return a
	},
	j: function() {
		var a = new I.lt;
		this.qa(a);
		a.n(this.q, this.Tm, this.Um);
		return a
	}
});
I.ZK = function(a, c, d) {
	return new I.lt(a, c, d)
};
I.lt.create = I.ZK;
I.us = I.H.extend({
	Mf: 0,
	ZG: u,
	ctor: function(a, c) {
		I.H.prototype.ctor.call(this);
		c !== m && this.n(a, c)
	},
	n: function(a, c) {
		return I.H.prototype.n.call(this, a) ? (this.Mf = c, p) : u
	},
	j: function() {
		var a = new I.us;
		this.qa(a);
		a.n(this.q, this.Mf);
		return a
	},
	update: function(a) {
		a = this.Fc(a);
		if (this.target && !this.Zf()) {
			var c = 1 / this.Mf;
			this.target.visible = a % c > c / 2
		}
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		this.ZG = a.visible
	},
	stop: function() {
		this.target.visible = this.ZG;
		I.H.prototype.stop.call(this)
	},
	reverse: function() {
		var a =
			new I.us(this.q, this.Mf);
		this.qa(a);
		this.yd(a);
		return a
	}
});
I.blink = function(a, c) {
	return new I.us(a, c)
};
I.us.create = I.blink;
I.vj = I.H.extend({
	Fn: 0,
	gu: 0,
	ctor: function(a, c) {
		I.H.prototype.ctor.call(this);
		c !== m && this.n(a, c)
	},
	n: function(a, c) {
		return I.H.prototype.n.call(this, a) ? (this.Fn = c, p) : u
	},
	j: function() {
		var a = new I.vj;
		this.qa(a);
		a.n(this.q, this.Fn);
		return a
	},
	update: function(a) {
		a = this.Fc(a);
		var c = this.gu !== m ? this.gu : 255;
		this.target.opacity = c + (this.Fn - c) * a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		this.gu = a.opacity
	}
});
I.oJ = function(a, c) {
	return new I.vj(a, c)
};
I.vj.create = I.oJ;
I.Us = I.vj.extend({
	jA: s,
	ctor: function(a) {
		I.vj.prototype.ctor.call(this);
		a == s && (a = 0);
		this.n(a, 255)
	},
	reverse: function() {
		var a = new I.Vs;
		a.n(this.q, 0);
		this.qa(a);
		this.yd(a);
		return a
	},
	j: function() {
		var a = new I.Us;
		this.qa(a);
		a.n(this.q, this.Fn);
		return a
	},
	M: function(a) {
		this.jA && (this.Fn = this.jA.gu);
		I.vj.prototype.M.call(this, a)
	}
});
I.Yn = function(a) {
	return new I.Us(a)
};
I.Us.create = I.Yn;
I.Vs = I.vj.extend({
	ctor: function(a) {
		I.vj.prototype.ctor.call(this);
		a == s && (a = 0);
		this.n(a, 0)
	},
	reverse: function() {
		var a = new I.Us;
		a.jA = this;
		a.n(this.q, 255);
		this.qa(a);
		this.yd(a);
		return a
	},
	j: function() {
		var a = new I.Vs;
		this.qa(a);
		a.n(this.q, this.Fn);
		return a
	}
});
I.lk = function(a) {
	return new I.Vs(a)
};
I.Vs.create = I.lk;
I.fy = I.H.extend({
	Lc: s,
	Gc: s,
	ctor: function(a, c, d, e) {
		I.H.prototype.ctor.call(this);
		this.Lc = I.color(0, 0, 0);
		this.Gc = I.color(0, 0, 0);
		e !== m && this.n(a, c, d, e)
	},
	n: function(a, c, d, e) {
		return I.H.prototype.n.call(this, a) ? (this.Lc = I.color(c, d, e), p) : u
	},
	j: function() {
		var a = new I.fy;
		this.qa(a);
		var c = this.Lc;
		a.n(this.q, c.r, c.g, c.b);
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		this.Gc = this.target.color
	},
	update: function(a) {
		a = this.Fc(a);
		var c = this.Gc,
			d = this.Lc;
		c && this.target.ic(I.color(c.r + (d.r - c.r) * a, c.g + (d.g - c.g) *
			a, c.b + (d.b - c.b) * a))
	}
});
I.$Z = function(a, c, d, e) {
	return new I.fy(a, c, d, e)
};
I.fy.create = I.$Z;
I.st = I.H.extend({
	Vt: 0,
	Ut: 0,
	Tt: 0,
	lG: 0,
	kG: 0,
	jG: 0,
	ctor: function(a, c, d, e) {
		I.H.prototype.ctor.call(this);
		e !== m && this.n(a, c, d, e)
	},
	n: function(a, c, d, e) {
		return I.H.prototype.n.call(this, a) ? (this.Vt = c, this.Ut = d, this.Tt = e, p) : u
	},
	j: function() {
		var a = new I.st;
		this.qa(a);
		a.n(this.q, this.Vt, this.Ut, this.Tt);
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		a = a.color;
		this.lG = a.r;
		this.kG = a.g;
		this.jG = a.b
	},
	update: function(a) {
		a = this.Fc(a);
		this.target.color = I.color(this.lG + this.Vt * a, this.kG + this.Ut * a, this.jG + this.Tt *
			a)
	},
	reverse: function() {
		var a = new I.st(this.q, -this.Vt, -this.Ut, -this.Tt);
		this.qa(a);
		this.yd(a);
		return a
	}
});
I.ZZ = function(a, c, d, e) {
	return new I.st(a, c, d, e)
};
I.st.create = I.ZZ;
I.xs = I.H.extend({
	update: y(),
	reverse: function() {
		var a = new I.xs(this.q);
		this.qa(a);
		this.yd(a);
		return a
	},
	j: function() {
		var a = new I.xs;
		this.qa(a);
		a.n(this.q);
		return a
	}
});
I.gc = function(a) {
	return new I.xs(a)
};
I.xs.create = I.gc;
I.gt = I.H.extend({
	yi: s,
	ctor: function(a) {
		I.H.prototype.ctor.call(this);
		this.yi = s;
		a && this.Y(a)
	},
	Y: function(a) {
		a || b(Error("cc.ReverseTime.initWithAction(): action must be non null"));
		a === this.yi && b(Error("cc.ReverseTime.initWithAction(): the action was already passed in."));
		return I.H.prototype.n.call(this, a.q) ? (this.yi = a, p) : u
	},
	j: function() {
		var a = new I.gt;
		this.qa(a);
		a.Y(this.yi.j());
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		this.yi.M(a)
	},
	update: function(a) {
		a = this.Fc(a);
		this.yi && this.yi.update(1 -
			a)
	},
	reverse: function() {
		return this.yi.j()
	},
	stop: function() {
		this.yi.stop();
		I.Tc.prototype.stop.call(this)
	}
});
I.VK = function(a) {
	return new I.gt(a)
};
I.gt.create = I.VK;
I.rs = I.H.extend({
	Jj: s,
	zq: 0,
	Rz: s,
	cu: 0,
	HA: s,
	PQ: 0,
	ctor: function(a) {
		I.H.prototype.ctor.call(this);
		this.HA = [];
		a && this.XJ(a)
	},
	tJ: D("Jj"),
	vY: A("Jj"),
	E6: D("PQ"),
	XJ: function(a) {
		a || b(Error("cc.Animate.initWithAnimation(): animation must be non-NULL"));
		var c = a.KB();
		if (this.n(c * a.wi)) {
			this.zq = 0;
			this.vY(a);
			this.Rz = s;
			this.cu = 0;
			var d = this.HA,
				e = d.length = 0,
				f = c / a.yh;
			a = a.Cf;
			I.dr(a, I.rf);
			for (var g = 0; g < a.length; g++) {
				var h = e * f / c,
					e = e + a[g].fd;
				d.push(h)
			}
			return p
		}
		return u
	},
	j: function() {
		var a = new I.rs;
		this.qa(a);
		a.XJ(this.Jj.j());
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		this.Jj.nl && (this.Rz = a.JU());
		this.cu = this.zq = 0
	},
	update: function(a) {
		a = this.Fc(a);
		1 > a && (a *= this.Jj.wi, (0 | a) > this.cu && (this.zq = 0, this.cu++), a %= 1);
		for (var c = this.Jj.Cf, d = c.length, e = this.HA, f = this.zq; f < d; f++)
			if (e[f] <= a) _currFrameIndex = f, this.target.Mo(c[_currFrameIndex].Jg()), this.zq = f + 1;
			else break
	},
	reverse: function() {
		var a = this.Jj,
			c = a.Cf,
			d = [];
		I.dr(c, I.rf);
		if (0 < c.length)
			for (var e = c.length - 1; 0 <= e; e--) {
				var f = c[e];
				if (!f) break;
				d.push(f.j())
			}
		c = new I.ai(d,
			a.fd, a.wi);
		c.Nw(a.nl);
		a = new I.rs(c);
		this.qa(a);
		this.yd(a);
		return a
	},
	stop: function() {
		this.Jj.nl && this.target && this.target.Mo(this.Rz);
		I.Tc.prototype.stop.call(this)
	}
});
I.FT = function(a) {
	return new I.rs(a)
};
I.rs.create = I.FT;
I.dy = I.H.extend({
	Vp: s,
	Zm: s,
	ctor: function(a, c) {
		I.H.prototype.ctor.call(this);
		c && this.lo(a, c)
	},
	lo: function(a, c) {
		return this.n(c.q) ? (this.Zm = a, this.Vp = c, p) : u
	},
	j: function() {
		var a = new I.dy;
		this.qa(a);
		a.lo(this.Zm, this.Vp.j());
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		this.Vp.M(this.Zm)
	},
	stop: function() {
		this.Vp.stop()
	},
	update: function(a) {
		a = this.Fc(a);
		this.Vp.update(a)
	},
	V6: D("Zm"),
	Mba: function(a) {
		this.Zm !== a && (this.Zm = a)
	}
});
I.QZ = function(a, c) {
	return new I.dy(a, c)
};
I.dy.create = I.QZ;
I.Tg = I.di.extend({
	Zf: E(p),
	step: function() {
		this.update(1)
	},
	update: y(),
	reverse: function() {
		return this.j()
	},
	j: function() {
		return new I.Tg
	}
});
I.mt = I.Tg.extend({
	update: function() {
		this.target.visible = p
	},
	reverse: function() {
		return new I.Ys
	},
	j: function() {
		return new I.mt
	}
});
I.show = function() {
	return new I.mt
};
I.mt.create = I.show;
I.Ys = I.Tg.extend({
	update: function() {
		this.target.visible = u
	},
	reverse: function() {
		return new I.mt
	},
	j: function() {
		return new I.Ys
	}
});
I.Ql = function() {
	return new I.Ys
};
I.Ys.create = I.Ql;
I.tt = I.Tg.extend({
	update: function() {
		this.target.visible = !this.target.visible
	},
	reverse: function() {
		return new I.tt
	},
	j: function() {
		return new I.tt
	}
});
I.b_ = function() {
	return new I.tt
};
I.tt.create = I.b_;
I.dt = I.Tg.extend({
	su: p,
	ctor: function(a) {
		I.di.prototype.ctor.call(this);
		a !== m && this.pa(a)
	},
	update: function() {
		this.target.Sh(this.su)
	},
	pa: function(a) {
		this.su = a;
		return p
	},
	reverse: function() {
		return new I.dt(this.su)
	},
	j: function() {
		return new I.dt(this.su)
	}
});
I.gY = function(a) {
	return new I.dt(a)
};
I.dt.create = I.gY;
I.Ws = I.Tg.extend({
	nc: u,
	ctor: function(a) {
		I.di.prototype.ctor.call(this);
		this.nc = u;
		a !== m && this.YJ(a)
	},
	YJ: function(a) {
		this.nc = a;
		return p
	},
	update: function() {
		this.target.flippedX = this.nc
	},
	reverse: function() {
		return new I.Ws(!this.nc)
	},
	j: function() {
		var a = new I.Ws;
		a.YJ(this.nc);
		return a
	}
});
I.lV = function(a) {
	return new I.Ws(a)
};
I.Ws.create = I.lV;
I.Xs = I.Tg.extend({
	oc: u,
	ctor: function(a) {
		I.di.prototype.ctor.call(this);
		this.oc = u;
		a !== m && this.ZJ(a)
	},
	ZJ: function(a) {
		this.oc = a;
		return p
	},
	update: function() {
		this.target.flippedY = this.oc
	},
	reverse: function() {
		return new I.Xs(!this.oc)
	},
	j: function() {
		var a = new I.Xs;
		a.ZJ(this.oc);
		return a
	}
});
I.mV = function(a) {
	return new I.Xs(a)
};
I.Xs.create = I.mV;
I.Ex = I.Tg.extend({
	Cg: 0,
	ae: 0,
	ctor: function(a, c) {
		I.di.prototype.ctor.call(this);
		this.ae = this.Cg = 0;
		a !== m && (a.x !== m && (c = a.y, a = a.x), this.cK(a, c))
	},
	cK: function(a, c) {
		this.Cg = a;
		this.ae = c;
		return p
	},
	update: function() {
		this.target.Ia(this.Cg, this.ae)
	},
	j: function() {
		var a = new I.Ex;
		a.cK(this.Cg, this.ae);
		return a
	}
});
I.KX = function(a, c) {
	return new I.Ex(a, c)
};
I.Ex.create = I.KX;
I.hx = I.Tg.extend({
	bk: s,
	iu: s,
	Py: s,
	ctor: function(a, c, d) {
		I.di.prototype.ctor.call(this);
		this.$J(a, c, d)
	},
	$J: function(a, c, d) {
		a && (this.iu = a);
		c && (this.bk = c);
		d !== m && (this.Py = d);
		return p
	},
	execute: function() {
		this.iu && this.iu.call(this.bk, this.target, this.Py)
	},
	update: function() {
		this.execute()
	},
	Q7: D("bk"),
	uca: function(a) {
		a !== this.bk && (this.bk && (this.bk = s), this.bk = a)
	},
	j: function() {
		var a = new I.hx;
		a.$J(this.iu, this.bk, this.Py);
		return a
	}
});
I.Db = function(a, c, d) {
	return new I.hx(a, c, d)
};
I.hx.create = I.Db;
I.ax = I.H.extend({
	Ey: 0,
	Fy: 0,
	Gy: 0,
	aG: 0,
	bG: 0,
	cG: 0,
	mI: 0,
	nI: 0,
	oI: 0,
	ctor: function() {
		I.H.prototype.ctor.call(this);
		this.oI = this.nI = this.mI = this.cG = this.bG = this.aG = this.Gy = this.Fy = this.Ey = 0
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		a = a.qr();
		var c = a.vJ();
		this.Ey = c.x;
		this.Fy = c.y;
		this.Gy = c.z;
		c = a.xJ();
		this.aG = c.x;
		this.bG = c.y;
		this.cG = c.z;
		a = a.kW();
		this.mI = a.x;
		this.nI = a.y;
		this.oI = a.z
	},
	j: function() {
		return new I.ax
	},
	reverse: function() {
		return new I.gt(this)
	}
});
I.Bx = I.ax.extend({
	$j: 0,
	Ry: 0,
	Xp: 0,
	pF: 0,
	kg: 0,
	oF: 0,
	nH: 0,
	lH: 0,
	mH: 0,
	kH: 0,
	ctor: function(a, c, d, e, f, g, h) {
		I.ax.prototype.ctor.call(this);
		h !== m && this.n(a, c, d, e, f, g, h)
	},
	n: function(a, c, d, e, f, g, h) {
		return I.H.prototype.n.call(this, a) ? (this.$j = c, this.Ry = d, this.Xp = e, this.pF = f, this.kg = g, this.oF = h, this.lH = I.af(f), this.kH = I.af(h), p) : u
	},
	EZ: function() {
		var a, c;
		c = this.target.qr();
		var d = c.xJ();
		a = c.vJ();
		c = d.x - a.x;
		var e = d.y - a.y;
		a = d.z - a.z;
		var d = Math.sqrt(Math.pow(c, 2) + Math.pow(e, 2) + Math.pow(a, 2)),
			f = Math.sqrt(Math.pow(c, 2) +
				Math.pow(e, 2));
		0 === f && (f = I.Ts);
		0 === d && (d = I.Ts);
		a = Math.acos(a / d);
		c = 0 > c ? Math.PI - Math.asin(e / f) : Math.asin(e / f);
		return {
			zX: d / I.jp.fo(),
			p_: a,
			azimuth: c
		}
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		a = this.EZ();
		isNaN(this.$j) && (this.$j = a.zX);
		isNaN(this.Xp) && (this.Xp = I.Bo(a.p_));
		isNaN(this.kg) && (this.kg = I.Bo(a.azimuth));
		this.nH = I.af(this.Xp);
		this.mH = I.af(this.kg)
	},
	j: function() {
		var a = new I.Bx;
		a.n(this.q, this.$j, this.Ry, this.Xp, this.pF, this.kg, this.oF);
		return a
	},
	update: function(a) {
		a = this.Fc(a);
		var c = (this.$j +
				this.Ry * a) * I.jp.fo(),
			d = this.nH + this.lH * a,
			e = this.mH + this.kH * a;
		a = Math.sin(d) * Math.cos(e) * c + this.Ey;
		e = Math.sin(d) * Math.sin(e) * c + this.Fy;
		c = Math.cos(d) * c + this.Gy;
		this.target.qr().jL(a, e, c);
		this.target.Lw()
	}
});
I.hf = function(a, c, d, e, f, g, h) {
	return new I.Bx(a, c, d, e, f, g, h)
};
I.Bx.create = I.hf;
I.Ba = I.H.extend({
	B: s,
	ctor: function(a) {
		I.H.prototype.ctor.call(this);
		a && this.Y(a)
	},
	Y: function(a) {
		a || b(Error("cc.ActionEase.initWithAction(): action must be non nil"));
		return this.n(a.KB()) ? (this.B = a, p) : u
	},
	j: function() {
		var a = new I.Ba;
		a.Y(this.B.j());
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		this.B.M(this.target)
	},
	stop: function() {
		this.B.stop();
		I.H.prototype.stop.call(this)
	},
	update: function(a) {
		this.B.update(a)
	},
	reverse: function() {
		return new I.Ba(this.B.reverse())
	},
	LB: D("B")
});
I.oT = function(a) {
	return new I.Ba(a)
};
I.Ba.create = I.oT;
I.Gk = I.Ba.extend({
	Hb: 0,
	ctor: function(a, c) {
		I.Ba.prototype.ctor.call(this);
		c !== m && this.Y(a, c)
	},
	lca: A("Hb"),
	C7: D("Hb"),
	Y: function(a, c) {
		return I.Ba.prototype.Y.call(this, a) ? (this.Hb = c, p) : u
	},
	j: function() {
		var a = new I.Gk;
		a.Y(this.B.j(), this.Hb);
		return a
	},
	reverse: function() {
		return new I.Gk(this.B.reverse(), 1 / this.Hb)
	}
});
I.aV = function(a, c) {
	return new I.Gk(a, c)
};
I.Gk.create = I.aV;
I.Os = I.Gk.extend({
	update: function(a) {
		this.B.update(Math.pow(a, this.Hb))
	},
	reverse: function() {
		return new I.Os(this.B.reverse(), 1 / this.Hb)
	},
	j: function() {
		var a = new I.Os;
		a.Y(this.B.j(), this.Hb);
		return a
	}
});
I.Os.create = function(a, c) {
	return new I.Os(a, c)
};
I.YU = function(a) {
	return {
		Hb: a,
		Fa: function(a) {
			return Math.pow(a, this.Hb)
		},
		reverse: function() {
			return I.YU(1 / this.Hb)
		}
	}
};
I.uj = I.Gk.extend({
	update: function(a) {
		this.B.update(Math.pow(a, 1 / this.Hb))
	},
	reverse: function() {
		return new I.uj(this.B.reverse(), 1 / this.Hb)
	},
	j: function() {
		var a = new I.uj;
		a.Y(this.B.j(), this.Hb);
		return a
	}
});
I.uj.create = function(a, c) {
	return new I.uj(a, c)
};
I.$U = function(a) {
	return {
		Hb: a,
		Fa: function(a) {
			return Math.pow(a, 1 / this.Hb)
		},
		reverse: function() {
			return I.$U(1 / this.Hb)
		}
	}
};
I.om = I.Gk.extend({
	update: function(a) {
		a *= 2;
		1 > a ? this.B.update(0.5 * Math.pow(a, this.Hb)) : this.B.update(1 - 0.5 * Math.pow(2 - a, this.Hb))
	},
	j: function() {
		var a = new I.om;
		a.Y(this.B.j(), this.Hb);
		return a
	},
	reverse: function() {
		return new I.om(this.B.reverse(), this.Hb)
	}
});
I.om.create = function(a, c) {
	return new I.om(a, c)
};
I.ZU = function(a) {
	return {
		Hb: a,
		Fa: function(a) {
			a *= 2;
			return 1 > a ? 0.5 * Math.pow(a, this.Hb) : 1 - 0.5 * Math.pow(2 - a, this.Hb)
		},
		reverse: function() {
			return I.ZU(this.Hb)
		}
	}
};
I.Ls = I.Ba.extend({
	update: function(a) {
		this.B.update(0 === a ? 0 : Math.pow(2, 10 * (a - 1)))
	},
	reverse: function() {
		return new I.Ns(this.B.reverse())
	},
	j: function() {
		var a = new I.Ls;
		a.Y(this.B.j());
		return a
	}
});
I.Ls.create = function(a) {
	return new I.Ls(a)
};
I.HF = {
	Fa: function(a) {
		return 0 === a ? 0 : Math.pow(2, 10 * (a - 1))
	},
	reverse: function() {
		return I.JF
	}
};
I.p5 = function() {
	return I.HF
};
I.Ns = I.Ba.extend({
	update: function(a) {
		this.B.update(1 === a ? 1 : -Math.pow(2, -10 * a) + 1)
	},
	reverse: function() {
		return new I.Ls(this.B.reverse())
	},
	j: function() {
		var a = new I.Ns;
		a.Y(this.B.j());
		return a
	}
});
I.Ns.create = function(a) {
	return new I.Ns(a)
};
I.JF = {
	Fa: function(a) {
		return 1 === a ? 1 : -Math.pow(2, -10 * a) + 1
	},
	reverse: function() {
		return I.HF
	}
};
I.r5 = function() {
	return I.JF
};
I.Ms = I.Ba.extend({
	update: function(a) {
		1 !== a && 0 !== a && (a *= 2, a = 1 > a ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2));
		this.B.update(a)
	},
	reverse: function() {
		return new I.Ms(this.B.reverse())
	},
	j: function() {
		var a = new I.Ms;
		a.Y(this.B.j());
		return a
	}
});
I.Ms.create = function(a) {
	return new I.Ms(a)
};
I.IF = {
	Fa: function(a) {
		return 1 !== a && 0 !== a ? (a *= 2, 1 > a ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2)) : a
	},
	reverse: function() {
		return I.IF
	}
};
I.q5 = function() {
	return I.IF
};
I.Ps = I.Ba.extend({
	update: function(a) {
		a = 0 === a || 1 === a ? a : -1 * Math.cos(a * Math.PI / 2) + 1;
		this.B.update(a)
	},
	reverse: function() {
		return new I.Rs(this.B.reverse())
	},
	j: function() {
		var a = new I.Ps;
		a.Y(this.B.j());
		return a
	}
});
I.Ps.create = function(a) {
	return new I.Ps(a)
};
I.TF = {
	Fa: function(a) {
		return 0 === a || 1 === a ? a : -1 * Math.cos(a * Math.PI / 2) + 1
	},
	reverse: function() {
		return I.VF
	}
};
I.B5 = function() {
	return I.TF
};
I.Rs = I.Ba.extend({
	update: function(a) {
		a = 0 === a || 1 === a ? a : Math.sin(a * Math.PI / 2);
		this.B.update(a)
	},
	reverse: function() {
		return new I.Ps(this.B.reverse())
	},
	j: function() {
		var a = new I.Rs;
		a.Y(this.B.j());
		return a
	}
});
I.Rs.create = function(a) {
	return new I.Rs(a)
};
I.VF = {
	Fa: function(a) {
		return 0 === a || 1 === a ? a : Math.sin(a * Math.PI / 2)
	},
	reverse: function() {
		return I.TF
	}
};
I.D5 = function() {
	return I.VF
};
I.Qs = I.Ba.extend({
	update: function(a) {
		a = 0 === a || 1 === a ? a : -0.5 * (Math.cos(Math.PI * a) - 1);
		this.B.update(a)
	},
	j: function() {
		var a = new I.Qs;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.Qs(this.B.reverse())
	}
});
I.Qs.create = function(a) {
	return new I.Qs(a)
};
I.UF = {
	Fa: function(a) {
		return 0 === a || 1 === a ? a : -0.5 * (Math.cos(Math.PI * a) - 1)
	},
	reverse: function() {
		return I.UF
	}
};
I.C5 = function() {
	return I.UF
};
I.nm = I.Ba.extend({
	pb: 0.3,
	ctor: function(a, c) {
		I.Ba.prototype.ctor.call(this);
		a && this.Y(a, c)
	},
	w7: D("pb"),
	hca: A("pb"),
	Y: function(a, c) {
		I.Ba.prototype.Y.call(this, a);
		this.pb = c == s ? 0.3 : c;
		return p
	},
	reverse: function() {
		I.log("cc.EaseElastic.reverse(): it should be overridden in subclass.");
		return s
	},
	j: function() {
		var a = new I.nm;
		a.Y(this.B.j(), this.pb);
		return a
	}
});
I.nm.create = function(a, c) {
	return new I.nm(a, c)
};
I.Is = I.nm.extend({
	update: function(a) {
		var c = 0;
		0 === a || 1 === a ? c = a : (c = this.pb / 4, a -= 1, c = -Math.pow(2, 10 * a) * Math.sin(2 * (a - c) * Math.PI / this.pb));
		this.B.update(c)
	},
	reverse: function() {
		return new I.Ks(this.B.reverse(), this.pb)
	},
	j: function() {
		var a = new I.Is;
		a.Y(this.B.j(), this.pb);
		return a
	}
});
I.Is.create = function(a, c) {
	return new I.Is(a, c)
};
I.FF = {
	Fa: function(a) {
		if (0 === a || 1 === a) return a;
		a -= 1;
		return -Math.pow(2, 10 * a) * Math.sin(2 * (a - 0.075) * Math.PI / 0.3)
	},
	reverse: function() {
		return I.GF
	}
};
I.VU = function(a) {
	return a && 0.3 !== a ? {
		pb: a,
		Fa: function(a) {
			if (0 === a || 1 === a) return a;
			a -= 1;
			return -Math.pow(2, 10 * a) * Math.sin(2 * (a - this.pb / 4) * Math.PI / this.pb)
		},
		reverse: function() {
			return I.XU(this.pb)
		}
	} : I.FF
};
I.Ks = I.nm.extend({
	update: function(a) {
		var c = 0,
			c = 0 === a || 1 === a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - this.pb / 4) * Math.PI / this.pb) + 1;
		this.B.update(c)
	},
	reverse: function() {
		return new I.Is(this.B.reverse(), this.pb)
	},
	j: function() {
		var a = new I.Ks;
		a.Y(this.B.j(), this.pb);
		return a
	}
});
I.Ks.create = function(a, c) {
	return new I.Ks(a, c)
};
I.GF = {
	Fa: function(a) {
		return 0 === a || 1 === a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - 0.075) * Math.PI / 0.3) + 1
	},
	reverse: function() {
		return I.FF
	}
};
I.XU = function(a) {
	return a && 0.3 !== a ? {
		pb: a,
		Fa: function(a) {
			return 0 === a || 1 === a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - this.pb / 4) * Math.PI / this.pb) + 1
		},
		reverse: function() {
			return I.VU(this.pb)
		}
	} : I.GF
};
I.Js = I.nm.extend({
	update: function(a) {
		var c = 0,
			c = this.pb;
		if (0 === a || 1 === a) c = a;
		else {
			c || (c = this.pb = 0.3 * 1.5);
			var d = c / 4;
			a = 2 * a - 1;
			c = 0 > a ? -0.5 * Math.pow(2, 10 * a) * Math.sin(2 * (a - d) * Math.PI / c) : 0.5 * Math.pow(2, -10 * a) * Math.sin(2 * (a - d) * Math.PI / c) + 1
		}
		this.B.update(c)
	},
	reverse: function() {
		return new I.Js(this.B.reverse(), this.pb)
	},
	j: function() {
		var a = new I.Js;
		a.Y(this.B.j(), this.pb);
		return a
	}
});
I.Js.create = function(a, c) {
	return new I.Js(a, c)
};
I.WU = function(a) {
	return {
		pb: a || 0.3,
		Fa: function(a) {
			var d = 0,
				d = this.pb;
			if (0 === a || 1 === a) d = a;
			else {
				d || (d = this.pb = 0.3 * 1.5);
				var e = d / 4;
				a = 2 * a - 1;
				d = 0 > a ? -0.5 * Math.pow(2, 10 * a) * Math.sin(2 * (a - e) * Math.PI / d) : 0.5 * Math.pow(2, -10 * a) * Math.sin(2 * (a - e) * Math.PI / d) + 1
			}
			return d
		},
		reverse: function() {
			return I.WU(this.pb)
		}
	}
};
I.Fk = I.Ba.extend({
	mv: function(a) {
		if (a < 1 / 2.75) return 7.5625 * a * a;
		if (a < 2 / 2.75) return a -= 1.5 / 2.75, 7.5625 * a * a + 0.75;
		if (a < 2.5 / 2.75) return a -= 2.25 / 2.75, 7.5625 * a * a + 0.9375;
		a -= 2.625 / 2.75;
		return 7.5625 * a * a + 0.984375
	},
	j: function() {
		var a = new I.Fk;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.Fk(this.B.reverse())
	}
});
I.Fk.create = function(a) {
	return new I.Fk(a)
};
I.Fs = I.Fk.extend({
	update: function(a) {
		this.B.update(1 - this.mv(1 - a))
	},
	reverse: function() {
		return new I.Hs(this.B.reverse())
	},
	j: function() {
		var a = new I.Fs;
		a.Y(this.B.j());
		return a
	}
});
I.Fs.create = function(a) {
	return new I.Fs(a)
};
I.Kt = function(a) {
	if (a < 1 / 2.75) return 7.5625 * a * a;
	if (a < 2 / 2.75) return a -= 1.5 / 2.75, 7.5625 * a * a + 0.75;
	if (a < 2.5 / 2.75) return a -= 2.25 / 2.75, 7.5625 * a * a + 0.9375;
	a -= 2.625 / 2.75;
	return 7.5625 * a * a + 0.984375
};
I.wF = {
	Fa: function(a) {
		return 1 - I.Kt(1 - a)
	},
	reverse: function() {
		return I.yF
	}
};
I.g5 = function() {
	return I.wF
};
I.Hs = I.Fk.extend({
	update: function(a) {
		this.B.update(this.mv(a))
	},
	reverse: function() {
		return new I.Fs(this.B.reverse())
	},
	j: function() {
		var a = new I.Hs;
		a.Y(this.B.j());
		return a
	}
});
I.Hs.create = function(a) {
	return new I.Hs(a)
};
I.yF = {
	Fa: function(a) {
		return I.Kt(a)
	},
	reverse: function() {
		return I.wF
	}
};
I.i5 = function() {
	return I.yF
};
I.Gs = I.Fk.extend({
	update: function(a) {
		var c = 0,
			c = 0.5 > a ? 0.5 * (1 - this.mv(1 - 2 * a)) : 0.5 * this.mv(2 * a - 1) + 0.5;
		this.B.update(c)
	},
	j: function() {
		var a = new I.Gs;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.Gs(this.B.reverse())
	}
});
I.Gs.create = function(a) {
	return new I.Gs(a)
};
I.xF = {
	Fa: function(a) {
		return a = 0.5 > a ? 0.5 * (1 - I.Kt(1 - 2 * a)) : 0.5 * I.Kt(2 * a - 1) + 0.5
	},
	reverse: function() {
		return I.xF
	}
};
I.h5 = function() {
	return I.xF
};
I.Cs = I.Ba.extend({
	update: function(a) {
		this.B.update(0 === a || 1 === a ? a : a * a * (2.70158 * a - 1.70158))
	},
	reverse: function() {
		return new I.Es(this.B.reverse())
	},
	j: function() {
		var a = new I.Cs;
		a.Y(this.B.j());
		return a
	}
});
I.Cs.create = function(a) {
	return new I.Cs(a)
};
I.tF = {
	Fa: function(a) {
		return 0 === a || 1 === a ? a : a * a * (2.70158 * a - 1.70158)
	},
	reverse: function() {
		return I.vF
	}
};
I.d5 = function() {
	return I.tF
};
I.Es = I.Ba.extend({
	update: function(a) {
		a -= 1;
		this.B.update(a * a * (2.70158 * a + 1.70158) + 1)
	},
	reverse: function() {
		return new I.Cs(this.B.reverse())
	},
	j: function() {
		var a = new I.Es;
		a.Y(this.B.j());
		return a
	}
});
I.Es.create = function(a) {
	return new I.Es(a)
};
I.vF = {
	Fa: function(a) {
		a -= 1;
		return a * a * (2.70158 * a + 1.70158) + 1
	},
	reverse: function() {
		return I.tF
	}
};
I.f5 = function() {
	return I.vF
};
I.Ds = I.Ba.extend({
	update: function(a) {
		a *= 2;
		1 > a ? this.B.update(a * a * (3.5949095 * a - 2.5949095) / 2) : (a -= 2, this.B.update(a * a * (3.5949095 * a + 2.5949095) / 2 + 1))
	},
	j: function() {
		var a = new I.Ds;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.Ds(this.B.reverse())
	}
});
I.Ds.create = function(a) {
	return new I.Ds(a)
};
I.uF = {
	Fa: function(a) {
		a *= 2;
		if (1 > a) return a * a * (3.5949095 * a - 2.5949095) / 2;
		a -= 2;
		return a * a * (3.5949095 * a + 2.5949095) / 2 + 1
	},
	reverse: function() {
		return I.uF
	}
};
I.e5 = function() {
	return I.uF
};
I.mp = I.Ba.extend({
	Du: s,
	Eu: s,
	Fu: s,
	Gu: s,
	ctor: function(a) {
		I.Ba.prototype.ctor.call(this, a)
	},
	ka: function(a, c, d, e, f) {
		return Math.pow(1 - f, 3) * a + 3 * f * Math.pow(1 - f, 2) * c + 3 * Math.pow(f, 2) * (1 - f) * d + Math.pow(f, 3) * e
	},
	update: function(a) {
		this.B.update(this.ka(this.Du, this.Eu, this.Fu, this.Gu, a))
	},
	j: function() {
		var a = new I.mp;
		a.Y(this.B.j());
		a.gL(this.Du, this.Eu, this.Fu, this.Gu);
		return a
	},
	reverse: function() {
		var a = new I.mp(this.B.reverse());
		a.gL(this.Gu, this.Fu, this.Eu, this.Du);
		return a
	},
	gL: function(a, c, d, e) {
		this.Du = a ||
			0;
		this.Eu = c || 0;
		this.Fu = d || 0;
		this.Gu = e || 0
	}
});
I.mp.create = function(a) {
	return new I.mp(a)
};
I.UU = function(a, c, d, e) {
	return {
		Fa: function(f) {
			return I.mp.prototype.ka(a, c, d, e, f)
		},
		reverse: function() {
			return I.UU(e, d, c, a)
		}
	}
};
I.tp = I.Ba.extend({
	ka: function(a) {
		return Math.pow(a, 2)
	},
	update: function(a) {
		this.B.update(this.ka(a))
	},
	j: function() {
		var a = new I.tp;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.tp(this.B.reverse())
	}
});
I.tp.create = function(a) {
	return new I.tp(a)
};
I.KF = {
	Fa: I.tp.prototype.ka,
	reverse: function() {
		return I.KF
	}
};
I.s5 = function() {
	return I.KF
};
I.vp = I.Ba.extend({
	ka: function(a) {
		return -a * (a - 2)
	},
	update: function(a) {
		this.B.update(this.ka(a))
	},
	j: function() {
		var a = new I.vp;
		a.Y();
		return a
	},
	reverse: function() {
		return new I.vp(this.B.reverse())
	}
});
I.vp.create = function(a) {
	return new I.vp(a)
};
I.MF = {
	Fa: I.vp.prototype.ka,
	reverse: function() {
		return I.MF
	}
};
I.u5 = function() {
	return I.MF
};
I.up = I.Ba.extend({
	ka: function(a) {
		var c = a;
		a *= 2;
		1 > a ? c = 0.5 * a * a : (--a, c = -0.5 * (a * (a - 2) - 1));
		return c
	},
	update: function(a) {
		this.B.update(this.ka(a))
	},
	j: function() {
		var a = new I.up;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.up(this.B.reverse())
	}
});
I.up.create = function(a) {
	return new I.up(a)
};
I.LF = {
	Fa: I.up.prototype.ka,
	reverse: function() {
		return I.LF
	}
};
I.t5 = function() {
	return I.LF
};
I.wp = I.Ba.extend({
	ka: function(a) {
		return a * a * a * a
	},
	update: function(a) {
		this.B.update(this.ka(a))
	},
	j: function() {
		var a = new I.wp;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.wp(this.B.reverse())
	}
});
I.wp.create = function(a) {
	return new I.wp(a)
};
I.NF = {
	Fa: I.wp.prototype.ka,
	reverse: function() {
		return I.NF
	}
};
I.v5 = function() {
	return I.NF
};
I.yp = I.Ba.extend({
	ka: function(a) {
		a -= 1;
		return -(a * a * a * a - 1)
	},
	update: function(a) {
		this.B.update(this.ka(a))
	},
	j: function() {
		var a = new I.yp;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.yp(this.B.reverse())
	}
});
I.yp.create = function(a) {
	return new I.yp(a)
};
I.PF = {
	Fa: I.yp.prototype.ka,
	reverse: function() {
		return I.PF
	}
};
I.x5 = function() {
	return I.PF
};
I.xp = I.Ba.extend({
	ka: function(a) {
		a *= 2;
		if (1 > a) return 0.5 * a * a * a * a;
		a -= 2;
		return -0.5 * (a * a * a * a - 2)
	},
	update: function(a) {
		this.B.update(this.ka(a))
	},
	j: function() {
		var a = new I.xp;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.xp(this.B.reverse())
	}
});
I.xp.create = function(a) {
	return new I.xp(a)
};
I.OF = {
	Fa: I.xp.prototype.ka,
	reverse: function() {
		return I.OF
	}
};
I.w5 = function() {
	return I.OF
};
I.zp = I.Ba.extend({
	ka: function(a) {
		return a * a * a * a * a
	},
	update: function(a) {
		this.B.update(this.ka(a))
	},
	j: function() {
		var a = new I.zp;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.zp(this.B.reverse())
	}
});
I.zp.create = function(a) {
	return new I.zp(a)
};
I.QF = {
	Fa: I.zp.prototype.ka,
	reverse: function() {
		return I.QF
	}
};
I.y5 = function() {
	return I.QF
};
I.Bp = I.Ba.extend({
	ka: function(a) {
		a -= 1;
		return a * a * a * a * a + 1
	},
	update: function(a) {
		this.B.update(this.ka(a))
	},
	j: function() {
		var a = new I.Bp;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.Bp(this.B.reverse())
	}
});
I.Bp.create = function(a) {
	return new I.Bp(a)
};
I.SF = {
	Fa: I.Bp.prototype.ka,
	reverse: function() {
		return I.SF
	}
};
I.A5 = function() {
	return I.SF
};
I.Ap = I.Ba.extend({
	ka: function(a) {
		a *= 2;
		if (1 > a) return 0.5 * a * a * a * a * a;
		a -= 2;
		return 0.5 * (a * a * a * a * a + 2)
	},
	update: function(a) {
		this.B.update(this.ka(a))
	},
	j: function() {
		var a = new I.Ap;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.Ap(this.B.reverse())
	}
});
I.Ap.create = function(a) {
	return new I.Ap(a)
};
I.RF = {
	Fa: I.Ap.prototype.ka,
	reverse: function() {
		return I.RF
	}
};
I.z5 = function() {
	return I.RF
};
I.np = I.Ba.extend({
	ka: function(a) {
		return -1 * (Math.sqrt(1 - a * a) - 1)
	},
	update: function(a) {
		this.B.update(this.ka(a))
	},
	j: function() {
		var a = new I.np;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.np(this.B.reverse())
	}
});
I.np.create = function(a) {
	return new I.np(a)
};
I.zF = {
	Fa: I.np.prototype.ka,
	reverse: function() {
		return I.zF
	}
};
I.j5 = function() {
	return I.zF
};
I.pp = I.Ba.extend({
	ka: function(a) {
		a -= 1;
		return Math.sqrt(1 - a * a)
	},
	update: function(a) {
		this.B.update(this.ka(a))
	},
	j: function() {
		var a = new I.pp;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.pp(this.B.reverse())
	}
});
I.pp.create = function(a) {
	return new I.pp(a)
};
I.BF = {
	Fa: I.pp.prototype.ka,
	reverse: function() {
		return I.BF
	}
};
I.l5 = function() {
	return I.BF
};
I.op = I.Ba.extend({
	ka: function(a) {
		a *= 2;
		if (1 > a) return -0.5 * (Math.sqrt(1 - a * a) - 1);
		a -= 2;
		return 0.5 * (Math.sqrt(1 - a * a) + 1)
	},
	update: function(a) {
		this.B.update(this.ka(a))
	},
	j: function() {
		var a = new I.op;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.op(this.B.reverse())
	}
});
I.op.create = function(a) {
	return new I.op(a)
};
I.AF = {
	Fa: I.op.prototype.ka,
	reverse: function() {
		return I.AF
	}
};
I.k5 = function() {
	return I.AF
};
I.qp = I.Ba.extend({
	ka: function(a) {
		return a * a * a
	},
	update: function(a) {
		this.B.update(this.ka(a))
	},
	j: function() {
		var a = new I.qp;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.qp(this.B.reverse())
	}
});
I.qp.create = function(a) {
	return new I.qp(a)
};
I.CF = {
	Fa: I.qp.prototype.ka,
	reverse: function() {
		return I.CF
	}
};
I.m5 = function() {
	return I.CF
};
I.sp = I.Ba.extend({
	ka: function(a) {
		a -= 1;
		return a * a * a + 1
	},
	update: function(a) {
		this.B.update(this.ka(a))
	},
	j: function() {
		var a = new I.sp;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.sp(this.B.reverse())
	}
});
I.sp.create = function(a) {
	return new I.sp(a)
};
I.EF = {
	Fa: I.sp.prototype.ka,
	reverse: function() {
		return I.EF
	}
};
I.o5 = function() {
	return I.EF
};
I.rp = I.Ba.extend({
	ka: function(a) {
		a *= 2;
		if (1 > a) return 0.5 * a * a * a;
		a -= 2;
		return 0.5 * (a * a * a + 2)
	},
	update: function(a) {
		this.B.update(this.ka(a))
	},
	j: function() {
		var a = new I.rp;
		a.Y(this.B.j());
		return a
	},
	reverse: function() {
		return new I.rp(this.B.reverse())
	}
});
I.rp.create = function(a) {
	return new I.rp(a)
};
I.DF = {
	Fa: I.rp.prototype.ka,
	reverse: function() {
		return I.DF
	}
};
I.n5 = function() {
	return I.DF
};
I.nv = function(a, c, d, e, f, g) {
	var h = g * g,
		k = h * g,
		n = (1 - f) / 2;
	f = n * (-k + 2 * h - g);
	var r = n * (-k + h) + (2 * k - 3 * h + 1);
	g = n * (k - 2 * h + g) + (-2 * k + 3 * h);
	h = n * (k - h);
	return I.d(a.x * f + c.x * r + d.x * g + e.x * h, a.y * f + c.y * r + d.y * g + e.y * h)
};
I.UK = function(a) {
	for (var c = [], d = a.length - 1; 0 <= d; d--) c.push(I.d(a[d].x, a[d].y));
	return c
};
I.hU = function(a) {
	for (var c = [], d = 0; d < a.length; d++) c.push(I.d(a[d].x, a[d].y));
	return c
};
I.tv = I.hU;
I.zc = function(a, c) {
	var d = Math.min(a.length - 1, Math.max(c, 0));
	return a[d]
};
I.Yaa = function(a) {
	for (var c = a.length, d = 0 | c / 2, e = 0; e < d; ++e) {
		var f = a[e];
		a[e] = a[c - e - 1];
		a[c - e - 1] = f
	}
};
I.ci = I.H.extend({
	xg: s,
	qF: 0,
	Bn: 0,
	qc: s,
	QE: s,
	ctor: function(a, c, d) {
		I.H.prototype.ctor.call(this);
		this.xg = [];
		d !== m && this.n(a, c, d)
	},
	n: function(a, c, d) {
		(!c || 0 === c.length) && b(Error("Invalid configuration. It must at least have one control point"));
		return I.H.prototype.n.call(this, a) ? (this.YY(c), this.Bn = d, p) : u
	},
	j: function() {
		var a = new I.ci;
		a.n(this.q, I.tv(this.xg), this.Bn);
		return a
	},
	M: function(a) {
		I.H.prototype.M.call(this, a);
		this.qF = 1 / (this.xg.length - 1);
		this.qc = I.d(this.target.ee(), this.target.Vf());
		this.QE =
			I.d(0, 0)
	},
	update: function(a) {
		a = this.Fc(a);
		var c, d = this.xg;
		if (1 === a) c = d.length - 1, a = 1;
		else {
			var e = this.qF;
			c = 0 | a / e;
			a = (a - e * c) / e
		}
		c = I.nv(I.zc(d, c - 1), I.zc(d, c - 0), I.zc(d, c + 1), I.zc(d, c + 2), this.Bn, a);
		if (I.ys && (d = this.target.ee() - this.qc.x, a = this.target.Vf() - this.qc.y, 0 !== d || 0 !== a)) e = this.QE, d = e.x + d, a = e.y + a, e.x = d, e.y = a, c.x += d, c.y += a;
		this.VL(c)
	},
	reverse: function() {
		var a = I.UK(this.xg);
		return I.SI(this.q, a, this.Bn)
	},
	VL: function(a) {
		this.target.Ia(a);
		this.qc = a
	},
	x7: D("xg"),
	YY: A("xg")
});
I.SI = function(a, c, d) {
	return new I.ci(a, c, d)
};
I.ci.create = I.SI;
I.kp = I.ci.extend({
	ec: s,
	ctor: function(a, c, d) {
		I.ci.prototype.ctor.call(this);
		this.ec = I.d(0, 0);
		d !== m && this.n(a, c, d)
	},
	M: function(a) {
		I.ci.prototype.M.call(this, a);
		this.ec.x = a.ee();
		this.ec.y = a.Vf()
	},
	reverse: function() {
		for (var a = this.xg.slice(), c, d = a[0], e = 1; e < a.length; ++e) c = a[e], a[e] = I.$c(c, d), d = c;
		a = I.UK(a);
		d = a[a.length - 1];
		a.pop();
		d.x = -d.x;
		d.y = -d.y;
		a.unshift(d);
		for (e = 1; e < a.length; ++e) c = a[e], c.x = -c.x, c.y = -c.y, c.x += d.x, c.y += d.y, d = a[e] = c;
		return I.RI(this.q, a, this.Bn)
	},
	VL: function(a) {
		var c = this.ec,
			d = a.x + c.x;
		a = a.y + c.y;
		this.qc.x = d;
		this.qc.y = a;
		this.target.Ia(d, a)
	},
	j: function() {
		var a = new I.kp;
		a.n(this.q, I.tv(this.xg), this.Bn);
		return a
	}
});
I.RI = function(a, c, d) {
	return new I.kp(a, c, d)
};
I.kp.create = I.RI;
I.jx = I.ci.extend({
	ctor: function(a, c) {
		c && this.n(a, c)
	},
	n: function(a, c) {
		return I.ci.prototype.n.call(this, a, c, 0.5)
	},
	j: function() {
		var a = new I.jx;
		a.n(this.q, I.tv(this.xg));
		return a
	}
});
I.cU = function(a, c) {
	return new I.jx(a, c)
};
I.jx.create = I.cU;
I.ix = I.kp.extend({
	ctor: function(a, c) {
		I.kp.prototype.ctor.call(this);
		c && this.n(a, c)
	},
	n: function(a, c) {
		return I.ci.prototype.n.call(this, a, c, 0.5)
	},
	j: function() {
		var a = new I.ix;
		a.n(this.q, I.tv(this.xg));
		return a
	}
});
I.bU = function(a, c) {
	return new I.ix(a, c)
};
I.ix.create = I.bU;
I.E_ = I.Ta.extend({
	j_: y()
});
I.qs = I.H.extend({
	key: "",
	Bv: 0,
	Uw: 0,
	HU: 0,
	ctor: function(a, c, d, e) {
		I.H.prototype.ctor.call(this);
		this.key = "";
		e !== m && this.n(a, c, d, e)
	},
	n: function(a, c, d, e) {
		return I.H.prototype.n.call(this, a) ? (this.key = c, this.Uw = e, this.Bv = d, p) : u
	},
	M: function(a) {
		(!a || !a.j_) && b(Error("cc.ActionTween.startWithTarget(): target must be non-null, and target must implement updateTweenAction function"));
		I.H.prototype.M.call(this, a);
		this.HU = this.Uw - this.Bv
	},
	update: y(),
	reverse: function() {
		return new I.qs(this.duration, this.key, this.Uw,
			this.Bv)
	},
	j: function() {
		var a = new I.qs;
		a.n(this.q, this.key, this.Bv, this.Uw);
		return a
	}
});
I.qT = function(a, c, d, e) {
	return new I.qs(a, c, d, e)
};
I.qs.create = I.qT;
(function() {
	var a = I.A,
		c = a.QI,
		d = !(!window.AudioContext && !window.webkitAudioContext && !window.mozAudioContext),
		e = {
			common: {
				bd: p,
				dd: d,
				Sc: p
			}
		};
	e[a.hp] = {
		bd: p,
		dd: d,
		Sc: p,
		Mk: p
	};
	e[a.kD] = {
		bd: u,
		dd: u,
		Sc: u
	};
	e[a.ss] = {
		bd: p,
		dd: p,
		Sc: u
	};
	e[a.gp] = {
		bd: p,
		dd: p,
		Sc: p,
		HM: p
	};
	e[a.cx] = {
		bd: p,
		dd: u,
		Sc: u
	};
	e[a.oM] = {
		bd: u,
		dd: u,
		Sc: p
	};
	e[a.nM] = {
		bd: u,
		dd: u,
		Sc: u,
		vm: p,
		Mk: p
	};
	e[a.dx] = {
		bd: u,
		dd: u,
		Sc: u,
		vm: p,
		Mk: p
	};
	e[a.jD] = {
		bd: u,
		dd: u,
		Sc: p
	};
	e[a.ts] = {
		bd: u,
		dd: u,
		Sc: p
	};
	e[a.kM] = {
		bd: u,
		dd: u,
		Sc: u,
		vm: p,
		Mk: p
	};
	e[a.mD] = {
		bd: u,
		dd: u,
		Sc: u,
		vm: p,
		Mk: p
	};
	e[a.iM] = {
		bd: u,
		dd: u,
		Sc: u,
		vm: p,
		Mk: p
	};
	e[a.jM] = {
		bd: u,
		dd: u,
		Sc: u,
		vm: p,
		Mk: p
	};
	e[a.ip] = {
		bd: p,
		dd: p,
		Sc: u,
		$L: function(a) {
			document.createElement("audio").src = a
		}
	};
	if (I.A.Kh) window.Nk = I.A.Ph !== I.A.tm ? e[a.Sf] || e.common : e[a.ip];
	else switch (a.Sf) {
		case a.hp:
			window.Nk = e[a.hp];
			break;
		case a.gp:
			window.Nk = e[a.gp];
			break;
		default:
			window.Nk = e.common
	}
	if (c) switch (a.Sf) {
		case a.ss:
			c = parseInt(c);
			30 > c ? window.Nk = {
				bd: u,
				dd: p,
				Sc: u
			} : 42 === c && (window.Nk.FN = p);
			break;
		case a.ts:
			if (I.A.Kh && (c = c.match(/\d+/g), 2 > c[0] || 2 === c[0] && 0 === c[1] && 1 >= c[2])) window.Nk.Sc = u
	}
})();
I.fp = I.Ta.extend({
	volume: 1,
	loop: u,
	src: s,
	iI: u,
	wg: u,
	xf: "AUDIO",
	nn: u,
	Ja: s,
	Vk: s,
	Oq: s,
	Rm: s,
	La: s,
	Zq: s,
	nu: u,
	wq: u,
	jh: s,
	ctor: function(a, c, d) {
		a && (this.La = a);
		c && (this.Zq = c);
		a && c && (this.xf = "WEBAUDIO");
		this.src = d
	},
	Ru: s,
	HC: function(a) {
		if (a) {
			var c = this.wg;
			this.xf = "WEBAUDIO";
			this.Ja && (this.Ja !== a && this.Gh()) && this.stop();
			this.Ja = a;
			c && this.play();
			this.Zq.gain.value = this.volume;
			this.Ru && this.Ru(a)
		}
	},
	KH: s,
	iL: function(a) {
		if (a) {
			var c = this.wg;
			this.xf = "AUDIO";
			this.jh && (this.jh !== a && this.Gh()) && this.stop();
			this.jh = a;
			c &&
				this.play();
			a.volume = this.volume;
			a.loop = this.loop;
			this.KH && this.KH(a)
		}
	},
	play: function(a, c) {
		this.wg = p;
		this.loop = c === m ? this.loop : c;
		"AUDIO" === this.xf ? this.nS(a) : this.cH(a)
	},
	Gh: function() {
		if (!this.wg) return u;
		if ("AUDIO" === this.xf) {
			var a = this.jh;
			return !a || this.nn || a.ended ? this.wg = u : p
		}
		a = this.Vk;
		return !a || !a.playbackState || this.Rm + this.La.currentTime - this.Oq < a.buffer.duration ? p : 2 == a.playbackState
	},
	cH: function(a) {
		var c = this.Vk;
		if (this.Ja) {
			if (!this.nn && c)
				if (0 === this.La.currentTime || this.Rm + this.La.currentTime -
					this.Oq > c.buffer.duration) this.cI();
				else return;
			c = this.La.createBufferSource();
			c.buffer = this.Ja;
			c.connect(this.Zq);
			c.loop = this.wq ? u : this.loop;
			this.Oq = this.La.currentTime;
			this.Rm = a || 0;
			this.nu = u;
			if (c.start) c.start(0, a || 0);
			else if (c.noteGrainOn) {
				var d = c.buffer.duration;
				this.loop ? c.noteGrainOn(0, a, d) : c.noteGrainOn(0, a, d - a)
			} else c.noteOn(0);
			this.Vk = c;
			var e = this;
			c.onended = function() {
				e.wq && e.wg && e.loop ? (e.stop(), e.play()) : e.nu ? e.nu = u : e.nn ? e.wg = u : e.stop()
			}
		}
	},
	nS: function() {
		var a = this.jh;
		a && (a.loop = this.loop,
			a.play())
	},
	stop: function() {
		this.wg = u;
		"AUDIO" === this.xf ? this.WS() : this.cI()
	},
	cI: function() {
		var a = this.Vk;
		this.nu = p;
		a && (a.stop(0), this.Vk = s)
	},
	WS: function() {
		var a = this.jh;
		a && (a.pause(), a.duration && Infinity !== a.duration && (a.currentTime = 0))
	},
	pause: function() {
		this.Gh() !== u && (this.wg = u, this.nn = p, "AUDIO" === this.xf ? this.kS() : this.lS())
	},
	lS: function() {
		this.Rm += this.La.currentTime - this.Oq;
		var a = this.Vk;
		a && a.stop(0)
	},
	kS: function() {
		var a = this.jh;
		a && a.pause()
	},
	mf: function() {
		this.nn && ("AUDIO" === this.xf ? this.uS() :
			this.vS(), this.nn = u, this.wg = p)
	},
	vS: function() {
		var a = this.Vk;
		a && (this.Oq = this.La.currentTime, this.cH(this.Rm % a.buffer.duration))
	},
	uS: function() {
		var a = this.jh;
		a && a.play()
	},
	hs: function(a) {
		1 < a && (a = 1);
		0 > a && (a = 0);
		this.volume = a;
		"AUDIO" === this.xf ? this.jh && (this.jh.volume = a) : this.Zq && (this.Zq.gain.value = a)
	},
	k8: D("volume"),
	cloneNode: function() {
		var a, c;
		if ("AUDIO" === this.xf) {
			a = new I.fp;
			var d = document.createElement("audio");
			d.src = this.src;
			a.iL(d)
		} else d = this.La.createGain(), d.gain.value = 1, d.connect(this.La.destination),
			a = new I.fp(this.La, d, this.src), this.Ja ? a.HC(this.Ja) : (c = this, this.Ru = function(d) {
				a.HC(d);
				c.Ru = s
			}), a.wq = this.wq;
		a.xf = this.xf;
		return a
	}
});
(function(a) {
	var c = a.dd,
		d = a.bd,
		e = a.Sc,
		f = [];
	(function() {
		var a = document.createElement("audio");
		if (a.canPlayType) {
			var c = a.canPlayType('audio/ogg; codecs\x3d"vorbis"');
			c && "" !== c && f.push(".ogg");
			(c = a.canPlayType("audio/mpeg")) && "" !== c && f.push(".mp3");
			(c = a.canPlayType('audio/wav; codecs\x3d"1"')) && "" !== c && f.push(".wav");
			(c = a.canPlayType("audio/mp4")) && "" !== c && f.push(".mp4");
			(a = a.canPlayType("audio/x-m4a")) && "" !== a && f.push(".m4a")
		}
	})();
	try {
		if (c) {
			var g = new(window.AudioContext || window.webkitAudioContext ||
				window.mozAudioContext);
			a.HM && setTimeout(function() {
				g = new(window.AudioContext || window.webkitAudioContext || window.mozAudioContext)
			}, 0)
		}
	} catch (h) {
		c = u, I.log("browser don't support web audio")
	}
	var k = {
		Nc: {},
		load: function(d, e, h, n) {
			if (0 === f.length) return n("can not support audio!");
			I.T.KI && (d = I.path.join(I.T.KI, d));
			var w = I.path.Wi(d),
				z = [w];
			for (h = 0; h < f.length; h++) w !== f[h] && z.push(f[h]);
			var x;
			if (k.Nc[e]) return n(s, k.Nc[e]);
			if (c) try {
				var F = g.createGain();
				F.gain.value = 1;
				F.connect(g.destination);
				x = new I.fp(g,
					F, d);
				a.FN && (x.wq = p)
			} catch (K) {
				c = u, I.log("browser don't support web audio"), x = new I.fp(s, s, d)
			} else x = new I.fp(s, s, d);
			this.hC(d, z, x, n);
			k.Nc[e] = x
		},
		hC: function(d, e, h, n) {
			if (0 === e.length) {
				var w = "can not found the resource of audio! Last match url is : ",
					w = w + d.replace(/\.(.*)?$/, "(");
				f.forEach(function(a) {
					w += a + "|"
				});
				w = w.replace(/\|$/, ")");
				return n({
					status: 520,
					Pl: w
				}, s)
			}
			d = I.path.TI(d, e.splice(0, 1));
			if (c) {
				a.$L && a.$L(d);
				var z = new XMLHttpRequest;
				z.open("GET", d, p);
				z.responseType = "arraybuffer";
				z.onload = function() {
					g.decodeAudioData(z.response,
						function(a) {
							h.HC(a);
							n(s, h)
						},
						function() {
							k.hC(d, e, h, n)
						})
				};
				z.onerror = function() {
					n({
						status: 520,
						Pl: w
					}, s)
				};
				z.send()
			} else {
				var x = document.createElement("audio"),
					F = u,
					K = u,
					L = setTimeout(function() {
						0 === x.readyState ? J() : (K = p, x.pause(), document.body.removeChild(x), n("audio load timeout : " + d, h))
					}, 1E4),
					N = function() {
						if (!F) {
							try {
								x.currentTime = 0, x.volume = 1
							} catch (a) {}
							document.body.removeChild(x);
							h.iL(x);
							x.removeEventListener("canplaythrough", N, u);
							x.removeEventListener("error", H, u);
							x.removeEventListener("emptied", J, u);
							!K && n(s, h);
							F = p;
							clearTimeout(L)
						}
					},
					H = function() {
						F && (document.body.removeChild(x), x.removeEventListener("canplaythrough", N, u), x.removeEventListener("error", H, u), x.removeEventListener("emptied", J, u), !K && k.hC(d, e, h, n), F = p, clearTimeout(L))
					},
					J = function() {
						K = p;
						N();
						n(s, h)
					};
				x.addEventListener("canplaythrough", N, u);
				x.addEventListener("error", H, u);
				a.Mk && x.addEventListener("emptied", J, u);
				x.src = d;
				document.body.appendChild(x);
				x.volume = 0
			}
		}
	};
	I.T.Rh(["mp3", "ogg", "wav", "mp4", "m4a"], k);
	I.be = {
		fh: s,
		Lz: 1,
		d6: a,
		Tda: E(u),
		eaa: function(a,
			c) {
			var d = this.fh;
			d && (d.src !== a && d.Gh()) && d.stop();
			d = k.Nc[a];
			d || (I.T.load(a), d = k.Nc[a]);
			d.play(0, c);
			d.hs(this.Lz);
			this.fh = d
		},
		NZ: function(a) {
			var c = this.fh;
			c && (c.stop(), a && I.T.he(c.src))
		},
		aaa: function() {
			var a = this.fh;
			a && a.pause()
		},
		Vaa: function() {
			var a = this.fh;
			a && a.mf()
		},
		Zaa: function() {
			var a = this.fh;
			a && (a.stop(), a.play())
		},
		n7: D("Lz"),
		Zba: function(a) {
			a -= 0;
			isNaN(a) && (a = 1);
			1 < a && (a = 1);
			0 > a && (a = 0);
			this.Lz = a;
			var c = this.fh;
			c && c.hs(a)
		},
		M8: function() {
			var a = this.fh;
			return a ? a.Gh() : u
		},
		mi: {},
		RG: 5,
		Yt: 1,
		xk: function(a, e) {
			if (!a) {
				return s;
			}
			if (!d) return s;;
			var f = this.mi[a];
			f || (f = this.mi[a] = []);
			var g;
			for (g = 0; g < f.length && f[g].Gh(); g++);
			if (f[g]) h = f[g], h.hs(this.Yt), h.play(0, e);
			else if (!c && g > this.RG) I.log("Error: %s greater than %d", a, this.RG);
			else {
				var h = k.Nc[a];
				h || (I.T.load(a), h = k.Nc[a]);
				h = h.cloneNode();
				h.hs(this.Yt);
				h.loop = e || u;
				h.play();
				f.push(h)
			}
			return h
		},
		Jba: function(a) {
			a -= 0;
			isNaN(a) && (a = 1);
			1 < a && (a = 1);
			0 > a && (a = 0);
			this.Yt = a;
			var c = this.mi,
				d;
			for (d in c) {
				var e = c[d];
				if (Array.isArray(e))
					for (var f = 0; f < e.length; f++) e[f].hs(a)
			}
		},
		O6: D("Yt"),
		$$: function(a) {
			a && a.pause()
		},
		Y$: function() {
			var a = this.mi,
				c;
			for (c in a)
				for (var d = a[c], e = 0; e < a[c].length; e++) d[e].Gh() && d[e].pause()
		},
		Uaa: function(a) {
			a && a.mf()
		},
		Taa: function() {
			var a = this.mi,
				c;
			for (c in a)
				for (var d = a[c], e = 0; e < a[c].length; e++) d[e].mf()
		},
		$ca: function(a) {
			a && a.stop()
		},
		MZ: function() {
			var a = this.mi,
				c;
			for (c in a)
				for (var d = a[c], e = 0; e < a[c].length; e++) d[e].stop()
		},
		xda: function(a) {
			if (a) {
				I.T.he(a);
				var c = this.mi[a];
				c && (c.length = 0);
				delete this.mi[a];
				delete k.Nc[a]
			}
		},
		end: function() {
			this.NZ();
			this.MZ()
		},
		Uz: [],
		mS: function() {
			var a = this.fh;
			a && a.Gh() && (a.pause(), this.Uz.push(a));
			var a = this.mi,
				c;
			for (c in a)
				for (var d = a[c], e = 0; e < a[c].length; e++) d[e].Gh() && (d[e].pause(), this.Uz.push(d[e]))
		},
		wS: function() {
			for (var a = this.Uz, c = 0; c < a.length; c++) a[c].mf();
			a.length = 0
		}
	};
	if (!e) {
		var n = function() {
			var c = I.be.fh;
			c && (c.iI === u && c.wg && c.Gh()) && (c.iI = p, c.play(0, c.loop), !a.vm && I.Ka.removeEventListener("touchstart", n))
		};
		setTimeout(function() {
			I.Ka && I.Ka.addEventListener("touchstart", n, u)
		}, 150)
	}
})(window.Nk);