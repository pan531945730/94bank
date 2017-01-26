I.vf = I.Ac.extend({
    Pb: s,
    Iz: s,
    V: u,
    $b: "LabelAtlas",
    ctor: function(a, c, d, e, f) {
        I.Ac.prototype.ctor.call(this);
        this.f.hL();
        c && I.vf.prototype.Ih.call(this, a, c, d, e, f)
    },
    ed: function() {
        return I.ja === I.t.zb ? new I.vf.G(this) : new I.vf.D(this)
    },
    XC: D("V"),
    ar: function(a, c) {
        this.addEventListener("load", a, c)
    },
    Ih: function(a, c, d, e, f) {
        var g = a + "",
            h, k;
        if (d === m) {
            d = I.T.Be(c);
            if (1 !== parseInt(d.version, 10)) return I.log("cc.LabelAtlas.initWithString(): Unsupported version. Upgrade cocos2d version"), u;
            c = I.path.ov(c, d.textureFilename);
            e = I.eb();
            h = parseInt(d.itemWidth, 10) / e;
            k = parseInt(d.itemHeight, 10) / e;
            d = String.fromCharCode(parseInt(d.firstChar, 10))
        } else h = d || 0, k = e || 0, d = f || " ";
        var n = s,
            n = c instanceof I.la ? c : I.wb.md(c);
        this.V = c = n.V;
        c || (this.Pb = g, n.addEventListener("load", function() {
            this.Oa(n, h, k, g.length);
            this.string = this.Pb;
            this.ic(this.f.ac);
            this.dispatchEvent("load")
        }, this));
        return this.Oa(n, h, k, g.length) ? (this.Iz = d, this.string = g, p) : u
    },
    ic: function(a) {
        I.Ac.prototype.ic.call(this, a);
        this.f.$o()
    },
    sr: D("Pb"),
    N: function(a, c, d) {
        this.f.SE(a);
        I.i.prototype.N.call(this, a, c, d)
    },
    $o: function() {
        this.f.$o()
    },
    rd: function(a) {
        a = String(a);
        var c = a.length;
        this.Pb = a;
        this.Gd(c * this.Se, this.Sd);
        this.f.rd(a);
        this.f.$o();
        this.quadsToDraw = c
    }
});
var kb = I.vf.prototype;
I.p(kb, "opacity", kb.ao, kb.Hd);
I.p(kb, "color", kb.Xi, kb.ic);
I.p(kb, "string", kb.sr, kb.rd);
I.vf.create = function(a, c, d, e, f) {
    return new I.vf(a, c, d, e, f)
};
(function() {
    I.vf.D = function(a) {
        I.Ac.D.call(this, a);
        this.ib = u
    };
    var a = I.vf.D.prototype = Object.create(I.Ac.D.prototype);
    a.constructor = I.vf.D;
    a.hL = function() {
        var a = this.o;
        a.Wc = p;
        a.Vc = u
    };
    a.$o = function() {
        for (var a = this.o, d = a.Pb || "", e = d.length, f = this.Ye, g = a.Se, h = a.Sd, k = 0, n = -1; k < e; k++) {
            var r = d.charCodeAt(k) - a.Iz.charCodeAt(0),
                t = parseInt(r % a.gn, 10),
                r = parseInt(r / a.gn, 10);
            if (!(0 > t || 0 > r))
                if (t = I.rect(t * g, r * h, g, h), r = f.S, !(0 > t.x || 0 > t.y || t.x + t.width > r.width || t.y + t.height > r.height)) {
                    n++;
                    var r = d.charCodeAt(k),
                        v = a.Hg(k);
                    v ? 32 === r ? (v.pa(), v.Yb(I.rect(0, 0, 10, 10), u, I.size(0, 0))) : (v.Oa(f, t), v.visible = p) : (v = new I.F, 32 === r ? (v.pa(), v.Yb(I.rect(0, 0, 10, 10), u, I.size(0, 0))) : v.Oa(f, t), I.i.prototype.N.call(a, v, 0, k));
                    v.Ia(n * g + g / 2, h / 2)
                }
        }
        this.bD(k, n + 1)
    };
    a.bD = function(a, d) {
        var e = this.o,
            f = e.S;
        a !== d && (a * e.Se === f.width && e.Sd === f.height) && e.Gd(d * e.Se, e.Sd)
    };
    a.rd = function() {
        var a = this.o;
        if (a.P)
            for (var a = a.P, d = a.length, e = 0; e < d; e++) {
                var f = a[e];
                f && !f.YR && (f.visible = u)
            }
    };
    a.SE = function() {
        child.YR = p
    }
})();
(function() {
    I.vf.G = function(a) {
        I.Ac.G.call(this, a);
        this.ib = p
    };
    var a = I.vf.G.prototype = Object.create(I.Ac.G.prototype);
    a.constructor = I.vf.G;
    a.hL = function() {
        var a = this.o;
        a.Wc = p;
        a.Vc = p
    };
    a.Sa = function(a) {
        I.Ac.G.prototype.Sa.call(this, a);
        if (I.rN) {
            var d = this.o;
            a = d.Aa();
            var d = d.vV(),
                e = d.x,
                f = d.y;
            a.width = d.width;
            a.height = d.height;
            a = [I.d(e, f), I.d(e + a.width, f), I.d(a.width + e, a.height + f), I.d(e, f + a.height)];
            I.Yk.bf(a, 4, p)
        }
    };
    a.$o = function() {
        var a = this.o,
            d = a.Pb,
            e = d.length,
            f = this.gb,
            g = f.texture,
            h = g.pixelsWidth,
            g = g.pixelsHeight,
            k = a.Se,
            n = a.Sd;
        a.mu || (k = a.Se * I.eb(), n = a.Sd * I.eb());
        e > f.Qd && I.log("cc.LabelAtlas._updateAtlasValues(): Invalid String length");
        for (var r = f.quads, t = this.ac, t = {
                r: t.r,
                g: t.g,
                b: t.b,
                a: a.bc
            }, v = a.Se, B = a.Sd, w = 0, z = -1; w < e; w++) {
            var x = d.charCodeAt(w) - a.Iz.charCodeAt(0),
                F = x % a.gn,
                K = 0 | x / a.gn;
            if (!(0 > F || 0 > K))
                if (!(F * v + v > h || K * B + B > g)) {
                    z++;
                    var L;
                    I.tx ? (F = (2 * F * k + 1) / (2 * h), x = F + (2 * k - 2) / (2 * h), K = (2 * K * n + 1) / (2 * g), L = K + (2 * n - 2) / (2 * g)) : (F = F * k / h, x = F + k / h, K = K * n / g, L = K + n / g);
                    var N = r[w],
                        H = N.tl,
                        J = N.tr,
                        aa = N.bl,
                        N = N.br;
                    H.texCoords.u = F;
                    H.texCoords.v =
                        K;
                    J.texCoords.u = x;
                    J.texCoords.v = K;
                    aa.texCoords.u = F;
                    aa.texCoords.v = L;
                    N.texCoords.u = x;
                    N.texCoords.v = L;
                    aa.vertices.x = z * v;
                    aa.vertices.y = 0;
                    aa.vertices.z = 0;
                    N.vertices.x = z * v + v;
                    N.vertices.y = 0;
                    N.vertices.z = 0;
                    H.vertices.x = z * v;
                    H.vertices.y = a.Sd;
                    H.vertices.z = 0;
                    J.vertices.x = z * v + v;
                    J.vertices.y = a.Sd;
                    J.vertices.z = 0;
                    H.colors = t;
                    J.colors = t;
                    aa.colors = t;
                    N.colors = t
                }
        }
        this.bD(w, z + 1);
        0 < e && (f.dirty = p, a = f.totalQuads, e > a && f.AW(e - a))
    };
    a.bD = function(a, d) {
        var e = this.o,
            f = e.S;
        a !== d && (a * e.Se === f.width && e.Sd === f.height) && e.Gd(d * e.Se,
            e.Sd)
    };
    a.rd = function(a) {
        a = a.length;
        a > this.gb.totalQuads && this.gb.SK(a)
    };
    a.SE = y()
})();
I.S0 = -1;
I.Md = I.Ub.extend({
    dc: u,
    Pb: "",
    Oe: s,
    fu: "",
    en: "",
    Wp: I.Lp,
    $q: -1,
    vu: u,
    ou: s,
    wH: s,
    V: u,
    $b: "LabelBMFont",
    ed: function() {
        return I.ja === I.t.zb ? new I.Md.G(this) : new I.Md.D(this)
    },
    NH: function(a, c) {
        c ? this.en = a : this.Pb = a;
        var d = this.P;
        if (d)
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                f && f.ie(u)
            }
        this.V && (this.vv(), c && this.fg())
    },
    ctor: function(a, c, d, e, f) {
        I.Ub.prototype.ctor.call(this);
        this.ou = I.d(0, 0);
        this.wH = [];
        this.Wc = this.Vc = p;
        this.Ih(a, c, d, e, f)
    },
    XC: D("V"),
    ar: function(a, c) {
        this.addEventListener("load", a, c)
    },
    Sl: D("dc"),
    Ko: function(a) {
        this.dc =
            a;
        if (a = this.P)
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                d && (d.opacityModifyRGB = this.dc)
            }
    },
    Nm: function() {
        this.f.Nm()
    },
    pa: function() {
        return this.Ih(s, s, s, s, s)
    },
    Ih: function(a, c, d, e, f) {
        a = a || "";
        this.Oe && I.log("cc.LabelBMFont.initWithString(): re-init is no longer supported");
        if (c) {
            var g = I.T.Be(c);
            if (!g) return I.log("cc.LabelBMFont.initWithString(): Impossible to create font. Please check file"), u;
            this.Oe = g;
            this.fu = c;
            c = I.wb.md(g.JI);
            (this.V = g = c.V) || c.addEventListener("load", function(a) {
                this.V = p;
                this.Oa(a,
                    this.en.length);
                this.rd(this.en, p);
                this.dispatchEvent("load")
            }, this)
        } else c = new I.la, g = new Image, c.Fd(g), this.V = u;
        return this.Oa(c, a.length) ? (this.Wp = e || I.pt, this.ou = f || I.d(0, 0), this.$q = d == s ? -1 : d, this.Ei = 255, this.ve = I.color(255, 255, 255, 255), this.S.width = 0, this.S.height = 0, this.Vh(0.5, 0.5), this.f.wG(), this.rd(a, p), p) : u
    },
    vv: function() {
        var a = this.f.ba || this.textureAtlas.texture,
            c = 0,
            d = I.size(0, 0),
            e = 0,
            f = 1,
            g = this.Pb,
            h = g ? g.length : 0;
        if (0 !== h) {
            var k, n = this.Oe,
                r = n.jX,
                t = n.qB,
                v = n.oV;
            for (k = 0; k < h - 1; k++) 10 === g.charCodeAt(k) &&
                f++;
            var B = t * f,
                f = -(t - t * f),
                w = -1;
            for (k = 0; k < h; k++)
                if (t = g.charCodeAt(k), 0 !== t)
                    if (10 === t) c = 0, f -= n.qB;
                    else {
                        var w = r[w << 16 | t & 65535] || 0,
                            z = v[t];
                        z || (I.log("cocos2d: LabelBMFont: character not found " + g[k]), z = {
                            rect: {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            },
                            os: 0,
                            cM: 0,
                            $w: 0
                        });
                        var x = I.rect(z.rect.x, z.rect.y, z.rect.width, z.rect.height),
                            x = I.ow(x);
                        x.x += this.ou.x;
                        x.y += this.ou.y;
                        var F = this.Hg(k);
                        F ? this.f.qI(F, x, t) : (F = new I.F, F.Oa(a, x, u), F.c3 = p, this.N(F, 0, k));
                        F.opacityModifyRGB = this.dc;
                        this.f.pI(F);
                        x = I.d(c + z.os + 0.5 * z.rect.width + w, f + (n.qB -
                            z.cM) - 0.5 * x.height * I.eb());
                        F.Ia(I.NX(x));
                        c += z.$w + w;
                        w = t;
                        e < c && (e = c)
                    }
            d.width = z && z.$w < z.rect.width ? e - z.$w + z.rect.width : e;
            d.height = B;
            this.Gd(I.zZ(d))
        }
    },
    Gda: function(a) {
        var c = this.P;
        if (c)
            for (var d = 0, e = c.length; d < e; d++) {
                var f = c[d];
                f && (f.visible = u)
            }
        this.Oe && this.vv();
        a || this.fg()
    },
    sr: D("en"),
    rd: function(a, c) {
        a = String(a);
        c == s && (c = p);
        if (a == s || !I.ge(a)) a += "";
        this.en = a;
        this.NH(a, c)
    },
    LS: function(a) {
        this.rd(a, u)
    },
    sba: function(a) {
        this.rd(a, p)
    },
    ju: function(a, c) {
        if (0 >= c) return 0;
        var d = this.Hg(a);
        return this.pG(this.Hg(a +
            c)) - this.pG(d)
    },
    Hy: function(a, c, d, e) {
        for (var f = a[c], g = 0, h = 0; h < c; h++) g += a[h].length;
        var g = g + c - e,
            k = this.ju(g, a[c].length - 1);
        if (k > d && 1 < f.length) {
            e = f.length * (d / k) | 0;
            for (var h = f.substr(e), n = k - this.ju(g + e, h.length - 1), r, t = 0, v = 0; n > d && 100 > v++;) e *= d / n, e |= 0, h = f.substr(e), n = k - this.ju(g + e, h.length - 1);
            for (v = 0; n < d && 100 > v++;) h && (t = (r = I.J.BI.exec(h)) ? r[0].length : 1, r = h), this.vu && (t = 0), e += t, h = f.substr(e), n = k - this.ju(g + e, h.length - 1);
            e -= t;
            0 === e && (e = 1, r = r.substr(1));
            d = f.substr(0, e);
            if (I.J.bM && I.J.eI.test(r || h)) t = (g = I.J.JG.exec(d)) ?
                g[0].length : 0, this.vu && (t = 0), e -= t, r = f.substr(e), d = f.substr(0, e);
            if (I.J.eG.test(r) && (g = I.J.IG.exec(d)) && d !== g[0]) t = g[0].length, this.vu && (t = 0), e -= t, r = f.substr(e), d = f.substr(0, e);
            a[c] = r || h;
            a.splice(c, 0, d)
        }
    },
    fg: function() {
        this.string = this.en;
        var a, c, d;
        if (0 < this.$q) {
            var e = this.string.split("\n"),
                f = "",
                g = 0,
                h = 0;
            for (a = 0; a < e.length; a++) h = e.length, this.Hy(e, a, this.$q * this.sa, g), h < e.length && g++, 0 < a && (f += "\n"), f += e[a];
            f += String.fromCharCode(0);
            this.NH(f, u)
        }
        if (this.Wp !== I.pt) {
            e = a = 0;
            f = this.Pb.length;
            g = [];
            for (h =
                0; h < f; h++)
                if (10 === this.Pb[h].charCodeAt(0) || 0 === this.Pb[h].charCodeAt(0)) {
                    c = 0;
                    var k = g.length;
                    if (0 === k) e++;
                    else if (d = a + k - 1 + e, !(0 > d)) {
                        var n = this.Hg(d);
                        if (n != s) {
                            c = n.ee() + n.lh() / 2;
                            n = 0;
                            switch (this.Wp) {
                                case I.Lp:
                                    n = this.width / 2 - c / 2;
                                    break;
                                case I.aE:
                                    n = this.width - c
                            }
                            if (0 !== n)
                                for (c = 0; c < k; c++) d = a + c + e, 0 > d || (d = this.Hg(d)) && (d.x += n);
                            a += k;
                            e++;
                            g.length = 0
                        }
                    }
                } else g.push(this.Pb[a])
        }
    },
    tY: function(a) {
        this.Wp = a;
        this.fg()
    },
    cR: D("Wp"),
    yY: function(a) {
        this.$q = a;
        this.fg()
    },
    kz: D("$q"),
    Wba: function(a) {
        this.vu = a;
        this.fg()
    },
    Qc: function(a,
        c) {
        I.i.prototype.Qc.call(this, a, c);
        this.fg()
    },
    IC: function(a) {
        I.i.prototype.IC.call(this, a);
        this.fg()
    },
    JC: function(a) {
        I.i.prototype.JC.call(this, a);
        this.fg()
    },
    Lba: function(a) {
        if (a != s && a !== this.fu) {
            var c = I.T.Be(a);
            c ? (this.fu = a, this.Oe = c, a = I.wb.md(c.JI), this.V = c = a.V, this.texture = a, c ? this.vv() : a.addEventListener("load", function(a) {
                this.V = p;
                this.texture = a;
                this.vv();
                this.Nm();
                this.fg();
                this.dispatchEvent("load")
            }, this)) : I.log("cc.LabelBMFont.setFntFile() : Impossible to create font. Please check file")
        }
    },
    U6: D("fu"),
    mb: function(a) {
        this.f.mb(a)
    },
    Vh: function(a, c) {
        I.i.prototype.Vh.call(this, a, c);
        this.fg()
    },
    mA: function(a) {
        I.i.prototype.mA.call(this, a);
        this.fg()
    },
    nA: function(a) {
        I.i.prototype.nA.call(this, a);
        this.fg()
    },
    A2: y(),
    Y2: function(a, c) {
        var d = 0;
        if (this.MQ.kX) {
            var e = this.MQ.kX[(a << 16 | c & 65535).toString()];
            e && (d = e.U3)
        }
        return d
    },
    pG: function(a) {
        return a.ee() * this.sa - a.lh() * this.sa * a.fz()
    },
    R2: function(a) {
        return a.ee() * this.sa + a.lh() * this.sa * a.fz()
    },
    DG: function(a) {
        a = a.charCodeAt(0);
        return 9 <= a && 13 >= a || 32 ===
            a || 133 === a || 160 === a || 5760 === a || 8192 <= a && 8202 >= a || 8232 === a || 8233 === a || 8239 === a || 8287 === a || 12288 === a
    },
    B3: function(a) {
        var c = a.length;
        if (!(0 >= c) && (c -= 1, this.DG(a[c]))) {
            for (var d = c - 1; 0 <= d; --d)
                if (this.DG(a[d])) c = d;
                else break;
            this.lT(a, c)
        }
    },
    lT: function(a, c) {
        var d = a.length;
        c >= d || 0 > c || a.splice(c, d)
    }
});
var lb = I.Md.prototype;
I.tf.prototype.apply(lb);
I.p(lb, "string", lb.sr, lb.LS);
I.p(lb, "boundingWidth", lb.kz, lb.yY);
I.p(lb, "textAlign", lb.cR, lb.tY);
I.Md.create = function(a, c, d, e, f) {
    return new I.Md(a, c, d, e, f)
};
I.WQ = {
    nN: /info [^\n]*(\n|$)/gi,
    yM: /common [^\n]*(\n|$)/gi,
    eO: /page [^\n]*(\n|$)/gi,
    xM: /char [^\n]*(\n|$)/gi,
    qN: /kerning [^\n]*(\n|$)/gi,
    pN: /\w+=[^ \r\n]+/gi,
    oN: /^[\-]?\d+$/,
    Cq: function(a) {
        a = a.match(this.pN);
        var c = {};
        if (a)
            for (var d = 0, e = a.length; d < e; d++) {
                var f = a[d],
                    g = f.indexOf("\x3d"),
                    h = f.substring(0, g),
                    f = f.substring(g + 1);
                f.match(this.oN) ? f = parseInt(f) : '"' === f[0] && (f = f.substring(1, f.length - 1));
                c[h] = f
            }
        return c
    },
    IX: function(a, c) {
        var d = {};
        this.Cq(a.match(this.nN)[0]);
        var e = this.Cq(a.match(this.yM)[0]);
        d.qB = e.lineHeight;
        if (I.ja === I.t.zb) {
            var f = I.Un.xq;
            (e.scaleW > f.width || e.scaleH > f.height) && I.log("cc.LabelBMFont._parseCommonArguments(): page can't be larger than supported")
        }
        1 !== e.pages && I.log("cc.LabelBMFont._parseCommonArguments(): only supports 1 page");
        e = this.Cq(a.match(this.eO)[0]);
        0 !== e.id && I.log("cc.LabelBMFont._parseImageFileName() : file could not be found");
        d.JI = I.path.ov(c, e.file);
        for (var g = a.match(this.xM), h = d.oV = {}, e = 0, f = g.length; e < f; e++) {
            var k = this.Cq(g[e]);
            h[k.id] = {
                rect: {
                    x: k.x,
                    y: k.y,
                    width: k.width,
                    height: k.height
                },
                os: k.xoffset,
                cM: k.yoffset,
                $w: k.xadvance
            }
        }
        g = d.jX = {};
        if (h = a.match(this.qN)) {
            e = 0;
            for (f = h.length; e < f; e++) k = this.Cq(h[e]), g[k.first << 16 | k.second & 65535] = k.amount
        }
        return d
    },
    load: function(a, c, d, e) {
        var f = this;
        I.T.cw(a, function(a, d) {
            if (a) return e(a);
            e(s, f.IX(d, c))
        })
    }
};
I.T.Rh(["fnt"], I.WQ);
(function() {
    I.Md.D = function(a) {
        I.Ub.D.call(this, a);
        this.ib = p
    };
    var a = I.Md.D.prototype = Object.create(I.Ub.D.prototype);
    a.constructor = I.Md.D;
    a.Sa = function() {
        m
    };
    a.qI = function(a, d, e) {
        32 === e ? a.Yb(d, u, I.size(0, 0)) : (a.Yb(d, u), a.visible = p)
    };
    a.pI = function(a) {
        a.ac = this.ac;
        a.f.Z(I.i.L.hb);
        a.bc = this.bc;
        a.f.Z(I.i.L.lb)
    };
    a.mb = function(a) {
        for (var d = this.o.P, e = this.ac, f = 0; f < d.length; f++) {
            var g = d[f],
                h = g.f,
                k = h.ac;
            this.ba !== h.ba && (k.r !== e.r || k.g !== e.g || k.b !== e.b) || (g.texture = a)
        }
        this.ba = a
    };
    a.Nm = function() {
        var a = this.o,
            d = this.Ye,
            e = d.Aa(),
            a = a.ba,
            f = a.Xa,
            g = this.ac,
            h = I.rect(0, 0, f.width, f.height);
        d && 0 < e.width && f && (this.Ye = a.mq(g.r, g.g, g.b, h))
    };
    a.hT = function(a) {
        I.i.prototype.UL.call(a, this.bc)
    };
    a.gT = function(a) {
        I.i.prototype.TL.call(a, this.ac)
    };
    a.wG = y()
})();
(function() {
    I.Md.G = function(a) {
        I.Ub.G.call(this, a);
        this.ib = p
    };
    var a = I.Md.G.prototype = Object.create(I.Ub.G.prototype);
    a.constructor = I.Md.G;
    a.qI = function(a, d) {
        a.Yb(d, u);
        a.visible = p
    };
    a.Nm = y();
    a.hT = function(a) {
        a.UL(this.bc)
    };
    a.gT = function(a) {
        a.TL(this.ac)
    };
    a.wG = function() {
        var a = this.o,
            d = a.textureAtlas.texture;
        a.dc = d.io();
        var e = a.wH = new I.F;
        e.Oa(d, I.rect(0, 0, 0, 0), u);
        e.batchNode = a
    };
    a.Sa = function(a) {
        I.Ub.G.prototype.Sa.call(this, a);
        a = this.o;
        if (I.sN) {
            a = a.Aa();
            var d = I.d(0 | -this.yf.x, 0 | -this.yf.y);
            a = [I.d(d.x,
                d.y), I.d(d.x + a.width, d.y), I.d(d.x + a.width, d.y + a.height), I.d(d.x, d.y + a.height)];
            I.Yk.es(0, 255, 0, 255);
            I.Yk.bf(a, 4, p)
        }
    };
    a.pI = y()
})();
I.Jda = function() {
    return {
        x: 0,
        y: 0
    }
};
I.Bk = function(a, c) {
    return {
        x: a,
        y: c
    }
};
I.Jd = function(a, c) {
    return I.Bk(a.x + c.x, a.y + c.y)
};
I.Sb = function(a, c) {
    return I.Bk(a.x - c.x, a.y - c.y)
};
I.Rc = function(a, c) {
    return I.Bk(a.x * c, a.y * c)
};
I.ap = function(a) {
    return I.Bk(-a.y, a.x)
};
I.qf = function(a) {
    return I.Bk(-a.x, -a.y)
};
I.XL = function(a, c) {
    return a.x * c.x + a.y * c.y
};
I.Ida = function(a) {
    return I.Bk(Math.cos(a), Math.sin(a))
};
I.ls = function(a) {
    a = I.ag(I.d(a.x, a.y));
    return I.Bk(a.x, a.y)
};
I.Pd = function(a) {
    return I.Bk(a.x, a.y)
};
I.xa = function(a) {
    return {
        u: a.x,
        v: a.y
    }
};
I.Da = I.i.extend({
    Ja: s,
    aa: s,
    jd: 1,
    ih: s,
    Dv: D("aa"),
    yk: function(a, c) {
        c === m ? (this.aa.src = a.src, this.aa.Ra = a.Ra) : (this.aa.src = a, this.aa.Ra = c)
    },
    nL: A("jd"),
    i7: D("jd"),
    es: function(a) {
        var c = this.ih;
        c.r = a.r;
        c.g = a.g;
        c.b = a.b;
        c.a = a.a == s ? 255 : a.a
    },
    pd: function() {
        return I.color(this.ih.r, this.ih.g, this.ih.b, this.ih.a)
    }
});
I.Da.create = function() {
    return new I.Da
};
I.Da.bE = 0;
I.Da.rP = 1;
I.Da.zj = 2;
I.t.addEventListener(I.t.Wg, function() {
    I.ja === I.t.Tb ? (I.Ej = function(a) {
        this.type = a;
        this.fillColor = this.Kd = s;
        this.lineWidth = 0;
        this.fj = s;
        this.lineCap = "butt";
        this.qk = this.bC = this.Vv = u
    }, I.extend(I.Da.prototype, {
        $b: "DrawNodeCanvas",
        ctor: function() {
            I.i.prototype.ctor.call(this);
            var a = this.f;
            a.Ja = this.Ja = [];
            a.ih = this.ih = I.color(255, 255, 255, 255);
            a.aa = this.aa = new I.Zb(I.SRC_ALPHA, I.ONE_MINUS_SRC_ALPHA);
            this.pa()
        },
        CB: function(a, c, d, e, f) {
            e = e == s ? this.jd : e;
            f = f || this.pd();
            f.a == s && (f.a = 255);
            a = [a, I.d(c.x, a.y), c,
                I.d(a.x, c.y)
            ];
            c = new I.Ej(I.Da.zj);
            c.Kd = a;
            c.lineWidth = e;
            c.fj = f;
            c.Vv = p;
            c.qk = p;
            c.lineCap = "butt";
            if (c.fillColor = d) d.a == s && (d.a = 255), c.bC = p;
            this.Ja.push(c)
        },
        zB: function(a, c, d, e, f, g, h) {
            g = g || this.jd;
            h = h || this.pd();
            h.a == s && (h.a = 255);
            for (var k = 2 * Math.PI / e, n = [], r = 0; r <= e; r++) {
                var t = r * k;
                n.push(I.d(c * Math.cos(t + d) + a.x, c * Math.sin(t + d) + a.y))
            }
            f && n.push(I.d(a.x, a.y));
            a = new I.Ej(I.Da.zj);
            a.Kd = n;
            a.lineWidth = g;
            a.fj = h;
            a.Vv = p;
            a.qk = p;
            this.Ja.push(a)
        },
        BB: function(a, c, d, e, f, g) {
            f = f || this.jd;
            g = g || this.pd();
            g.a == s && (g.a = 255);
            for (var h = [], k = 0, n = 0; n < e; n++) h.push(I.d(Math.pow(1 - k, 2) * a.x + 2 * (1 - k) * k * c.x + k * k * d.x, Math.pow(1 - k, 2) * a.y + 2 * (1 - k) * k * c.y + k * k * d.y)), k += 1 / e;
            h.push(I.d(d.x, d.y));
            a = new I.Ej(I.Da.zj);
            a.Kd = h;
            a.lineWidth = f;
            a.fj = g;
            a.qk = p;
            a.lineCap = "round";
            this.Ja.push(a)
        },
        AB: function(a, c, d, e, f, g, h) {
            g = g || this.jd;
            h = h || this.pd();
            h.a == s && (h.a = 255);
            for (var k = [], n = 0, r = 0; r < f; r++) k.push(I.d(Math.pow(1 - n, 3) * a.x + 3 * Math.pow(1 - n, 2) * n * c.x + 3 * (1 - n) * n * n * d.x + n * n * n * e.x, Math.pow(1 - n, 3) * a.y + 3 * Math.pow(1 - n, 2) * n * c.y + 3 * (1 - n) * n * n * d.y + n * n * n * e.y)), n +=
                1 / f;
            k.push(I.d(e.x, e.y));
            a = new I.Ej(I.Da.zj);
            a.Kd = k;
            a.lineWidth = g;
            a.fj = h;
            a.qk = p;
            a.lineCap = "round";
            this.Ja.push(a)
        },
        yB: function(a, c, d, e) {
            this.Ll(a, 0.5, c, d, e)
        },
        Ll: function(a, c, d, e, f) {
            e = e || this.jd;
            f = f || this.pd();
            f.a == s && (f.a = 255);
            for (var g = [], h, k, n = 1 / a.length, r = 0; r < d + 1; r++) k = r / d, 1 === k ? (h = a.length - 1, k = 1) : (h = 0 | k / n, k = (k - n * h) / n), h = I.nv(I.zc(a, h - 1), I.zc(a, h - 0), I.zc(a, h + 1), I.zc(a, h + 2), c, k), g.push(h);
            a = new I.Ej(I.Da.zj);
            a.Kd = g;
            a.lineWidth = e;
            a.fj = f;
            a.qk = p;
            a.lineCap = "round";
            this.Ja.push(a)
        },
        Gg: function(a, c, d) {
            d =
                d || this.pd();
            d.a == s && (d.a = 255);
            var e = new I.Ej(I.Da.bE);
            e.Kd = [a];
            e.lineWidth = c;
            e.fillColor = d;
            this.Ja.push(e)
        },
        LU: function(a, c, d) {
            if (a && 0 != a.length) {
                d = d || this.pd();
                d.a == s && (d.a = 255);
                for (var e = 0, f = a.length; e < f; e++) this.Gg(a[e], c, d)
            }
        },
        kk: function(a, c, d, e) {
            d = d || this.jd;
            e = e || this.pd();
            e.a == s && (e.a = 255);
            var f = new I.Ej(I.Da.zj);
            f.Kd = [a, c];
            f.lineWidth = 2 * d;
            f.fj = e;
            f.qk = p;
            f.lineCap = "round";
            this.Ja.push(f)
        },
        PU: function(a, c, d, e) {
            d = d == s ? this.jd : d;
            e = e || this.pd();
            e.a == s && (e.a = 255);
            var f = new I.Ej(I.Da.zj);
            f.Kd = a;
            f.fillColor =
                c;
            f.lineWidth = d;
            f.fj = e;
            f.Vv = p;
            f.qk = p;
            f.lineCap = "round";
            c && (f.bC = p);
            this.Ja.push(f)
        },
        bf: function(a, c, d, e) {
            for (var f = [], g = 0; g < a.length; g++) f.push(I.d(a[g].x, a[g].y));
            return this.PU(f, c, d, e)
        },
        clear: function() {
            this.Ja.length = 0
        },
        ed: function() {
            return new I.Da.D(this)
        }
    })) : I.ja === I.t.zb && I.extend(I.Da.prototype, {
        Mm: 0,
        Pi: s,
        kI: s,
        jI: s,
        Ab: u,
        $b: "DrawNodeWebGL",
        ctor: function() {
            I.i.prototype.ctor.call(this);
            this.Ja = [];
            this.aa = new I.Zb(I.SRC_ALPHA, I.ONE_MINUS_SRC_ALPHA);
            this.ih = I.color(255, 255, 255, 255);
            this.pa()
        },
        pa: function() {
            return I.i.prototype.pa.call(this) ? (this.shaderProgram = I.cg.ad(I.TD), this.hq(64), this.kI = I.s.createBuffer(), this.Ab = p) : u
        },
        CB: function(a, c, d, e, f) {
            e = e == s ? this.jd : e;
            f = f || this.pd();
            f.a == s && (f.a = 255);
            a = [a, I.d(c.x, a.y), c, I.d(a.x, c.y)];
            d == s ? this.Wt(a, e, f, p) : this.bf(a, d, e, f)
        },
        zB: function(a, c, d, e, f, g, h) {
            g = g || this.jd;
            h = h || this.pd();
            h.a == s && (h.a = 255);
            var k = 2 * Math.PI / e,
                n = [],
                r;
            for (r = 0; r <= e; r++) {
                var t = r * k;
                n.push(I.d(c * Math.cos(t + d) + a.x, c * Math.sin(t + d) + a.y))
            }
            f && n.push(I.d(a.x, a.y));
            g *= 0.5;
            r = 0;
            for (a =
                n.length; r < a - 1; r++) this.kk(n[r], n[r + 1], g, h)
        },
        BB: function(a, c, d, e, f, g) {
            f = f || this.jd;
            g = g || this.pd();
            g.a == s && (g.a = 255);
            for (var h = [], k = 0, n = 0; n < e; n++) h.push(I.d(Math.pow(1 - k, 2) * a.x + 2 * (1 - k) * k * c.x + k * k * d.x, Math.pow(1 - k, 2) * a.y + 2 * (1 - k) * k * c.y + k * k * d.y)), k += 1 / e;
            h.push(I.d(d.x, d.y));
            this.Wt(h, f, g, u)
        },
        AB: function(a, c, d, e, f, g, h) {
            g = g || this.jd;
            h = h || this.pd();
            h.a == s && (h.a = 255);
            for (var k = [], n = 0, r = 0; r < f; r++) k.push(I.d(Math.pow(1 - n, 3) * a.x + 3 * Math.pow(1 - n, 2) * n * c.x + 3 * (1 - n) * n * n * d.x + n * n * n * e.x, Math.pow(1 - n, 3) * a.y + 3 * Math.pow(1 -
                n, 2) * n * c.y + 3 * (1 - n) * n * n * d.y + n * n * n * e.y)), n += 1 / f;
            k.push(I.d(e.x, e.y));
            this.Wt(k, g, h, u)
        },
        yB: function(a, c, d, e) {
            this.Ll(a, 0.5, c, d, e)
        },
        Ll: function(a, c, d, e, f) {
            e = e || this.jd;
            f = f || this.pd();
            f.a == s && (f.a = 255);
            for (var g = [], h, k, n = 1 / a.length, r = 0; r < d + 1; r++) k = r / d, 1 === k ? (h = a.length - 1, k = 1) : (h = 0 | k / n, k = (k - n * h) / n), h = I.nv(I.zc(a, h - 1), I.zc(a, h - 0), I.zc(a, h + 1), I.zc(a, h + 2), c, k), g.push(h);
            e *= 0.5;
            a = 0;
            for (c = g.length; a < c - 1; a++) this.kk(g[a], g[a + 1], e, f)
        },
        uH: function() {
            var a = I.s;
            I.Zc(I.zt);
            a.bindBuffer(a.ARRAY_BUFFER, this.kI);
            this.Ab &&
                (a.bufferData(a.ARRAY_BUFFER, this.Pi, a.STREAM_DRAW), this.Ab = u);
            var c = I.Uc.BYTES_PER_ELEMENT;
            a.vertexAttribPointer(I.tb, 2, a.FLOAT, u, c, 0);
            a.vertexAttribPointer(I.Je, 4, a.UNSIGNED_BYTE, p, c, 8);
            a.vertexAttribPointer(I.Ke, 2, a.FLOAT, u, c, 12);
            a.drawArrays(a.TRIANGLES, 0, 3 * this.Ja.length);
            I.Hh()
        },
        hq: function(a) {
            var c = this.Ja;
            if (c.length + a > this.Mm) {
                var d = I.Gb.BYTES_PER_ELEMENT;
                this.Mm += Math.max(this.Mm, a);
                if (c == s || 0 === c.length) this.Ja = [], this.Pi = new ArrayBuffer(d * this.Mm), this.jI = new Uint8Array(this.Pi);
                else {
                    a =
                        [];
                    for (var e = new ArrayBuffer(d * this.Mm), f = 0; f < c.length; f++) a[f] = new I.Gb(c[f].a, c[f].b, c[f].c, e, f * d);
                    this.jI = new Uint8Array(e);
                    this.Pi = e;
                    this.Ja = a
                }
            }
        },
        Gg: function(a, c, d) {
            d = d || this.pd();
            d.a == s && (d.a = 255);
            var e = {
                r: 0 | d.r,
                g: 0 | d.g,
                b: 0 | d.b,
                a: 0 | d.a
            };
            d = {
                vertices: {
                    x: a.x - c,
                    y: a.y - c
                },
                colors: e,
                texCoords: {
                    u: -1,
                    v: -1
                }
            };
            var f = {
                    vertices: {
                        x: a.x - c,
                        y: a.y + c
                    },
                    colors: e,
                    texCoords: {
                        u: -1,
                        v: 1
                    }
                },
                g = {
                    vertices: {
                        x: a.x + c,
                        y: a.y + c
                    },
                    colors: e,
                    texCoords: {
                        u: 1,
                        v: 1
                    }
                };
            a = {
                vertices: {
                    x: a.x + c,
                    y: a.y - c
                },
                colors: e,
                texCoords: {
                    u: 1,
                    v: -1
                }
            };
            this.hq(6);
            this.Ja.push(new I.Gb(d, f, g, this.Pi, this.Ja.length * I.Gb.BYTES_PER_ELEMENT));
            this.Ja.push(new I.Gb(d, g, a, this.Pi, this.Ja.length * I.Gb.BYTES_PER_ELEMENT));
            this.Ab = p
        },
        LU: function(a, c, d) {
            if (a && 0 !== a.length) {
                d = d || this.pd();
                d.a == s && (d.a = 255);
                for (var e = 0, f = a.length; e < f; e++) this.Gg(a[e], c, d)
            }
        },
        kk: function(a, c, d, e) {
            e = e || this.pd();
            e.a == s && (e.a = 255);
            d = d || 0.5 * this.jd;
            this.hq(18);
            e = {
                r: 0 | e.r,
                g: 0 | e.g,
                b: 0 | e.b,
                a: 0 | e.a
            };
            var f = I.Pd(a);
            c = I.Pd(c);
            a = I.ls(I.ap(I.Sb(c, f)));
            var g = I.ap(a),
                h = I.Rc(a, d);
            d = I.Rc(g, d);
            var k = I.Jd(c,
                    I.Sb(h, d)),
                n = I.Sb(c, h),
                r = I.Jd(c, h),
                t = I.Sb(f, h),
                v = I.Jd(f, h),
                B = I.Sb(f, I.Sb(h, d)),
                f = I.Jd(f, I.Jd(h, d)),
                w = I.Gb.BYTES_PER_ELEMENT,
                z = this.Pi,
                x = this.Ja;
            x.push(new I.Gb({
                vertices: I.Sb(c, I.Jd(h, d)),
                colors: e,
                texCoords: I.xa(I.qf(I.Jd(a, g)))
            }, {
                vertices: k,
                colors: e,
                texCoords: I.xa(I.Sb(a, g))
            }, {
                vertices: n,
                colors: e,
                texCoords: I.xa(I.qf(a))
            }, z, x.length * w));
            x.push(new I.Gb({
                vertices: r,
                colors: e,
                texCoords: I.xa(a)
            }, {
                vertices: k,
                colors: e,
                texCoords: I.xa(I.Sb(a, g))
            }, {
                vertices: n,
                colors: e,
                texCoords: I.xa(I.qf(a))
            }, z, x.length * w));
            x.push(new I.Gb({
                vertices: r,
                colors: e,
                texCoords: I.xa(a)
            }, {
                vertices: t,
                colors: e,
                texCoords: I.xa(I.qf(a))
            }, {
                vertices: n,
                colors: e,
                texCoords: I.xa(I.qf(a))
            }, z, x.length * w));
            x.push(new I.Gb({
                vertices: r,
                colors: e,
                texCoords: I.xa(a)
            }, {
                vertices: t,
                colors: e,
                texCoords: I.xa(I.qf(a))
            }, {
                vertices: v,
                colors: e,
                texCoords: I.xa(a)
            }, z, x.length * w));
            x.push(new I.Gb({
                vertices: B,
                colors: e,
                texCoords: I.xa(I.Sb(g, a))
            }, {
                vertices: t,
                colors: e,
                texCoords: I.xa(I.qf(a))
            }, {
                vertices: v,
                colors: e,
                texCoords: I.xa(a)
            }, z, x.length * w));
            x.push(new I.Gb({
                vertices: B,
                colors: e,
                texCoords: I.xa(I.Sb(g, a))
            }, {
                vertices: f,
                colors: e,
                texCoords: I.xa(I.Jd(a, g))
            }, {
                vertices: v,
                colors: e,
                texCoords: I.xa(a)
            }, z, x.length * w));
            this.Ab = p
        },
        bf: function(a, c, d, e) {
            if (c == s) this.Wt(a, d, e, p);
            else {
                c.a == s && (c.a = 255);
                e.a == s && (e.a = 255);
                d = d == s ? this.jd : d;
                d *= 0.5;
                c = {
                    r: 0 | c.r,
                    g: 0 | c.g,
                    b: 0 | c.b,
                    a: 0 | c.a
                };
                e = {
                    r: 0 | e.r,
                    g: 0 | e.g,
                    b: 0 | e.b,
                    a: 0 | e.a
                };
                var f = [],
                    g, h, k, n, r = a.length;
                for (g = 0; g < r; g++) {
                    h = I.Pd(a[(g - 1 + r) % r]);
                    k = I.Pd(a[g]);
                    n = I.Pd(a[(g + 1) % r]);
                    var t = I.ls(I.ap(I.Sb(k, h)));
                    k = I.ls(I.ap(I.Sb(n, k)));
                    f[g] = {
                        offset: I.Rc(I.Jd(t,
                            k), 1 / (I.XL(t, k) + 1)),
                        fa: k
                    }
                }
                t = 0 < d;
                this.hq(3 * (3 * r - 2));
                var v = I.Gb.BYTES_PER_ELEMENT,
                    B = this.Pi,
                    w = this.Ja,
                    z = t == u ? 0.5 : 0;
                for (g = 0; g < r - 2; g++) h = I.Sb(I.Pd(a[0]), I.Rc(f[0].offset, z)), k = I.Sb(I.Pd(a[g + 1]), I.Rc(f[g + 1].offset, z)), n = I.Sb(I.Pd(a[g + 2]), I.Rc(f[g + 2].offset, z)), w.push(new I.Gb({
                    vertices: h,
                    colors: c,
                    texCoords: I.xa({
                        x: 0,
                        y: 0
                    })
                }, {
                    vertices: k,
                    colors: c,
                    texCoords: I.xa({
                        x: 0,
                        y: 0
                    })
                }, {
                    vertices: n,
                    colors: c,
                    texCoords: I.xa({
                        x: 0,
                        y: 0
                    })
                }, B, w.length * v));
                for (g = 0; g < r; g++) {
                    z = (g + 1) % r;
                    h = I.Pd(a[g]);
                    k = I.Pd(a[z]);
                    n = f[g].fa;
                    var x = f[g].offset,
                        F = f[z].offset,
                        z = t ? I.Sb(h, I.Rc(x, d)) : I.Sb(h, I.Rc(x, 0.5)),
                        K = t ? I.Sb(k, I.Rc(F, d)) : I.Sb(k, I.Rc(F, 0.5));
                    h = t ? I.Jd(h, I.Rc(x, d)) : I.Jd(h, I.Rc(x, 0.5));
                    k = t ? I.Jd(k, I.Rc(F, d)) : I.Jd(k, I.Rc(F, 0.5));
                    t ? (w.push(new I.Gb({
                        vertices: z,
                        colors: e,
                        texCoords: I.xa(I.qf(n))
                    }, {
                        vertices: K,
                        colors: e,
                        texCoords: I.xa(I.qf(n))
                    }, {
                        vertices: k,
                        colors: e,
                        texCoords: I.xa(n)
                    }, B, w.length * v)), w.push(new I.Gb({
                            vertices: z,
                            colors: e,
                            texCoords: I.xa(I.qf(n))
                        }, {
                            vertices: h,
                            colors: e,
                            texCoords: I.xa(n)
                        }, {
                            vertices: k,
                            colors: e,
                            texCoords: I.xa(n)
                        }, B, w.length *
                        v))) : (w.push(new I.Gb({
                        vertices: z,
                        colors: c,
                        texCoords: I.xa({
                            x: 0,
                            y: 0
                        })
                    }, {
                        vertices: K,
                        colors: c,
                        texCoords: I.xa({
                            x: 0,
                            y: 0
                        })
                    }, {
                        vertices: k,
                        colors: c,
                        texCoords: I.xa(n)
                    }, B, w.length * v)), w.push(new I.Gb({
                        vertices: z,
                        colors: c,
                        texCoords: I.xa({
                            x: 0,
                            y: 0
                        })
                    }, {
                        vertices: h,
                        colors: c,
                        texCoords: I.xa(n)
                    }, {
                        vertices: k,
                        colors: c,
                        texCoords: I.xa(n)
                    }, B, w.length * v)))
                }
                this.Ab = p
            }
        },
        Wt: function(a, c, d, e) {
            c = c == s ? this.jd : c;
            d = d || this.ih;
            d.a == s && (d.a = 255);
            c *= 0.5;
            if (!(0 >= c)) {
                d = {
                    r: 0 | d.r,
                    g: 0 | d.g,
                    b: 0 | d.b,
                    a: 0 | d.a
                };
                var f = [],
                    g, h, k, n, r = a.length;
                for (g =
                    0; g < r; g++) {
                    h = I.Pd(a[(g - 1 + r) % r]);
                    k = I.Pd(a[g]);
                    n = I.Pd(a[(g + 1) % r]);
                    var t = I.ls(I.ap(I.Sb(k, h)));
                    k = I.ls(I.ap(I.Sb(n, k)));
                    f[g] = {
                        offset: I.Rc(I.Jd(t, k), 1 / (I.XL(t, k) + 1)),
                        fa: k
                    }
                }
                this.hq(3 * (3 * r - 2));
                n = I.Gb.BYTES_PER_ELEMENT;
                var t = this.Pi,
                    v = this.Ja;
                e = e ? r : r - 1;
                for (g = 0; g < e; g++) {
                    var B = (g + 1) % r;
                    h = I.Pd(a[g]);
                    k = I.Pd(a[B]);
                    var w = f[g].fa,
                        z = f[g].offset,
                        B = f[B].offset,
                        x = I.Sb(h, I.Rc(z, c));
                    h = I.Jd(h, I.Rc(z, c));
                    z = I.Jd(k, I.Rc(B, c));
                    v.push(new I.Gb({
                        vertices: x,
                        colors: d,
                        texCoords: I.xa(I.qf(w))
                    }, {
                        vertices: I.Sb(k, I.Rc(B, c)),
                        colors: d,
                        texCoords: I.xa(I.qf(w))
                    }, {
                        vertices: z,
                        colors: d,
                        texCoords: I.xa(w)
                    }, t, v.length * n));
                    v.push(new I.Gb({
                        vertices: x,
                        colors: d,
                        texCoords: I.xa(I.qf(w))
                    }, {
                        vertices: h,
                        colors: d,
                        texCoords: I.xa(w)
                    }, {
                        vertices: z,
                        colors: d,
                        texCoords: I.xa(w)
                    }, t, v.length * n))
                }
                this.Ab = p
            }
        },
        clear: function() {
            this.Ja.length = 0;
            this.Ab = p
        },
        ed: function() {
            return new I.Da.G(this)
        }
    })
});
I.Da.D = function(a) {
    I.i.D.call(this, a);
    this.ib = p;
    this.aa = this.ih = this.Ja = s
};
I.Da.D.prototype = Object.create(I.i.D.prototype);
I.Da.D.prototype.constructor = I.Da.D;
I.extend(I.Da.D.prototype, {
    Sa: function(a, c, d) {
        a = a || I.s;
        a.getContext();
        var e = this.o.bc / 255;
        if (0 !== e) {
            a.setTransform(this.Si, c, d);
            a.gm(e);
            this.aa && (this.aa.src === I.SRC_ALPHA && this.aa.Ra === I.ONE) && a.Jo("lighter");
            for (var e = this.Ja, f = 0, g = e.length; f < g; f++) {
                var h = e[f];
                switch (h.type) {
                    case I.Da.bE:
                        this.Uy(a, h, c, d);
                        break;
                    case I.Da.rP:
                        this.Wy(a, h, c, d);
                        break;
                    case I.Da.zj:
                        this.Vy(a, h, c, d)
                }
            }
        }
    },
    Uy: function(a, c, d, e) {
        var f = c.fillColor,
            g = c.Kd[0];
        c = c.lineWidth;
        var h = a.getContext();
        a.bg("rgba(" + (0 | f.r) + "," + (0 | f.g) +
            "," + (0 | f.b) + "," + 0 / 255 + ")");
        h.beginPath();
        h.arc(g.x * d, -g.y * e, c * d, 0, 2 * Math.PI, u);
        h.closePath();
        h.fill()
    },
    Wy: function(a, c, d, e) {
        var f = c.fj,
            g = c.Kd[0],
            h = c.Kd[1],
            k = c.lineWidth;
        c = c.lineCap;
        var n = a.getContext();
        a.Pw("rgba(" + (0 | f.r) + "," + (0 | f.g) + "," + (0 | f.b) + "," + 0 / 255 + ")");
        n.lineWidth = k * d;
        n.beginPath();
        n.lineCap = c;
        n.moveTo(g.x * d, -g.y * e);
        n.lineTo(h.x * d, -h.y * e);
        n.stroke()
    },
    Vy: function(a, c, d, e) {
        var f = c.Kd,
            g = c.lineCap;
        if (f != s) {
            var h = c.fillColor,
                k = c.lineWidth,
                n = c.fj,
                r = c.Vv,
                t = c.bC;
            c = c.qk;
            var v = a.getContext(),
                B =
                f[0];
            v.lineCap = g;
            h && a.bg("rgba(" + (0 | h.r) + "," + (0 | h.g) + "," + (0 | h.b) + "," + 0 / 255 + ")");
            k && (v.lineWidth = k * d);
            n && a.Pw("rgba(" + (0 | n.r) + "," + (0 | n.g) + "," + (0 | n.b) + "," + 0 / 255 + ")");
            v.beginPath();
            v.moveTo(B.x * d, -B.y * e);
            a = 1;
            for (g = f.length; a < g; a++) v.lineTo(f[a].x * d, -f[a].y * e);
            r && v.closePath();
            t && v.fill();
            c && v.stroke()
        }
    }
});
I.Da.G = function(a) {
    I.i.G.call(this, a);
    this.ib = p
};
I.Da.G.prototype = Object.create(I.i.G.prototype);
I.Da.G.prototype.constructor = I.Da.G;
I.Da.G.prototype.Sa = function() {
    var a = this.o;
    I.Xf(a.aa.src, a.aa.Ra);
    this.Wa.kc();
    this.Wa.Ji(this.Ad);
    a.uH()
};
(function() {
    I.Cc = I.F.extend({
        al: u,
        Dc: s,
        l3: 1,
        ctor: function(a, d) {
            I.F.prototype.ctor.call(this);
            if (a === m) I.Cc.prototype.pa.call(this);
            else if (I.ge(a))
                if ("#" === a[0]) {
                    var e = I.Rg.Jg(a.substr(1, a.length - 1));
                    this.Yf(e)
                } else this.pa(a, d);
            else I.Ar(a) && (a instanceof I.la ? this.Oa(a, d) : a instanceof I.cd && this.Yf(a));
            I.Ga.Pg(this.f)
        },
        ia: function() {
            I.Ga.Pg(this.f);
            I.F.prototype.ia.call(this)
        },
        Dw: A("Dc"),
        mk: D("Dc"),
        Hv: function() {
            var a = this.Dc;
            return {
                x: a.d.x,
                y: a.d.y
            }
        },
        ee: function() {
            return this.Dc.d.x
        },
        Vf: function() {
            return this.Dc.d.y
        },
        Ia: function(a, d) {
            d === m ? (this.Dc.d.x = a.x, this.Dc.d.y = a.y) : (this.Dc.d.x = a, this.Dc.d.y = d)
        },
        rL: function(a) {
            this.Dc.d.x = a
        },
        sL: function(a) {
            this.Dc.d.y = a
        },
        fI: function() {
            var a = this.Gf,
                d = this.Dc;
            (a.x !== d.d.x || a.y !== d.d.y) && I.F.prototype.Ia.call(this, d.d.x, d.d.y)
        },
        CJ: function() {
            return this.al ? this.Hi : -I.Bo(this.Dc.a)
        },
        Ow: function(a) {
            this.al ? I.F.prototype.Ow.call(this, a) : this.Dc.a = -I.af(a)
        },
        gI: function() {
            this.Hi !== -I.Bo(this.Dc.a) && I.F.prototype.Ow.call(this, -I.Bo(this.Dc.a))
        },
        sc: function() {
            return this.f.sc()
        },
        zr: function() {
            return !this.Dc.bj()
        },
        Gw: y(),
        Vba: A("al"),
        ed: function() {
            return I.ja === I.t.Tb ? new I.Cc.D(this) : new I.Cc.G(this)
        }
    });
    I.Cc.$b = "PhysicsSprite";
    var a = I.Cc.prototype;
    I.p(a, "body", a.mk, a.Dw);
    I.p(a, "dirty", a.zr, a.Gw);
    I.Cc.create = function(a, d) {
        return new I.Cc(a, d)
    };
    I.Cc.DU = I.Cc.create;
    I.Cc.CU = I.Cc.create
})();
I.wQ = function(a) {
    for (var c = [], d = 0; d < a.length / 2; d++) c[d] = {
        x: a[2 * d],
        y: a[2 * d + 1]
    };
    return c
};
I.AM = function(a) {
    return a.Lh() || a.bj() ? I.color(128, 128, 128, 128) : a.hj > a.fb.QC ? I.color(84, 84, 84, 128) : I.color(255, 0, 0, 128)
};
I.mx = function(a) {
    var c = a.body,
        d = I.AM(c);
    switch (a.$e) {
        case cp.zM.prototype.$e:
            this.Gg(a.pf, Math.max(a.r, 1), d);
            this.kk(a.pf, cp.v.add(a.pf, cp.v.jC(c.uc, a.r)), 1, d);
            break;
        case cp.ym.prototype.$e:
            this.kk(a.Id, a.Fe, Math.max(a.r, 2), d);
            break;
        case cp.Fx.prototype.$e:
            c = I.color(d.r, d.g, d.b, I.gC(d.a, 255, 0.5));
            this.bf(I.wQ(a.Yh), d, 1, c);
            break;
        default:
            I.log("cc.DrawShape(): Bad assertion in DrawShape()")
    }
};
I.lx = function(a) {
    var c = a.a,
        d = a.b,
        e;
    a instanceof cp.oO ? (e = c.Kg(a.Dh), c = d.Kg(a.Ze), this.Gg(e, 3, I.Vg), this.Gg(c, 3, I.Vg), this.kk(e, c, 1, I.Vg)) : a instanceof cp.PO ? (e = c.Kg(a.Dh), c = d.Kg(a.Ze), this.Gg(e, 3, I.Vg), this.Gg(c, 3, I.Vg), this.kk(e, c, 1, I.Vg)) : a instanceof cp.pO ? (e = c.Kg(a.Dh), c = d.Kg(a.Ze), this.Gg(e, 3, I.Vg), this.Gg(c, 3, I.Vg)) : a instanceof cp.iN && (e = c.Kg(a.MJ), c = c.Kg(a.NJ), a = d.Kg(a.Ze), this.Gg(a, 3, I.Vg), this.kk(e, c, 1, I.Vg))
};
I.Vg = I.color(0, 255, 0, 128);
I.He = I.Da.extend({
    If: s,
    $b: "PhysicsDebugNode",
    ctor: function(a) {
        I.Da.prototype.ctor.call(this);
        this.If = a
    },
    M7: D("If"),
    sca: A("If"),
    xB: function() {
        this.If && (this.If.yv(I.mx.bind(this)), this.If.xv(I.lx.bind(this)), I.Da.prototype.xB.call(this), this.clear())
    },
    ed: function() {
        return I.ja === I.t.Tb ? new I.He.D(this) : new I.He.G(this)
    }
});
I.He.create = function(a) {
    return new I.He(a)
};
(function() {
    I.He.D = function(a) {
        I.i.D.call(this, a);
        this.Ja = a.Ja;
        this.ib = p
    };
    var a = I.He.D.prototype = Object.create(I.i.D.prototype);
    a.constructor = I.He.D;
    a.Sa = function(a, d, e) {
        var f = this.o;
        f.If && (f.If.yv(I.mx.bind(f)), f.If.xv(I.lx.bind(f)), I.Da.D.prototype.Sa.call(this, a, d, e), f.clear())
    };
    a.Uy = I.Da.D.prototype.Uy;
    a.Wy = I.Da.D.prototype.Wy;
    a.Vy = I.Da.D.prototype.Vy
})();
I.He.G = function(a) {
    I.i.G.call(this, a);
    this.ib = p
};
I.He.G.prototype = Object.create(I.i.G.prototype);
I.He.G.prototype.constructor = I.He.G;
I.He.G.prototype.Sa = function() {
    var a = this.o;
    a.If && (a.If.yv(I.mx.bind(a)), a.If.xv(I.lx.bind(a)), I.Xf(a.aa.src, a.aa.Ra), this.Wa.kc(), this.Wa.Ji(this.Ad), a.uH(), a.clear())
};
(function() {
    I.Cc.D = function(a) {
        I.F.D.call(this, a);
        this.ib = p
    };
    var a = I.Cc.D.prototype = Object.create(I.F.D.prototype);
    a.constructor = I.Cc.D;
    a.Sa = function(a, d, e) {
        var f = this.o;
        f.fI();
        f.al || f.gI();
        this.transform(La(this));
        I.F.D.prototype.Sa.call(this, a, d, e)
    };
    a.sc = function() {
        var a = this.o,
            d = this.xl,
            e = a.Dc,
            f = a.sa,
            g = a.Va,
            h = this.yf;
        d.ca = e.d.x;
        d.da = e.d.y;
        var e = -e.a,
            k = 1,
            n = 0;
        e && !a.al && (k = Math.cos(e), n = Math.sin(e));
        d.a = d.I = k;
        d.b = -n;
        d.c = n;
        if (1 !== f || 1 !== g) d.a *= f, d.c *= f, d.b *= g, d.I *= g;
        d.ca += k * -h.x * f + -n * h.y * g;
        d.da -= n *
            -h.x * f + k * h.y * g;
        this.ti && (d.ca += h.x, d.da += h.y);
        return this.xl
    }
})();
(function() {
    I.Cc.G = function(a) {
        I.F.G.call(this, a);
        this.ib = p
    };
    var a = I.Cc.G.prototype = Object.create(I.F.G.prototype);
    a.constructor = I.Cc.G;
    a.Sa = function(a) {
        var d = this.o;
        d.fI();
        d.al || d.gI();
        this.transform(La(this), p);
        I.F.G.prototype.Sa.call(this, a)
    };
    a.sc = function() {
        var a = this.o,
            d = a.Dc,
            e = this.yf,
            f = a.sa,
            g = a.Va,
            h = d.d.x,
            k = d.d.y;
        this.ti && (h += e.x, k += e.y);
        var d = d.a,
            n = 1,
            r = 0;
        d && !a.al && (n = Math.cos(d), r = Math.sin(d));
        I.Ku(e) || (h += n * -e.x * f + -r * -e.y * g, k += r * -e.x * f + n * -e.y * g);
        return this.xl = I.II(n * f, r * f, -r * g, n * g, h, k)
    };
    a.ke = function() {
        var a = this.o;
        a.zr() && (a = a.f) && a.Hw(p);
        I.F.G.prototype.ke.call(this)
    }
})();
I.K0 = 0;
I.L0 = 1;
I.M0 = 9;
I.sm = function(a) {
    a -= 1;
    a |= a >> 1;
    a |= a >> 2;
    a |= a >> 4;
    a |= a >> 8;
    return (a | a >> 16) + 1
};
I.le = I.i.extend({
    sprite: s,
    lB: 0,
    kB: 0,
    er: u,
    ba: s,
    vg: 0,
    mB: 0,
    Ec: s,
    $b: "RenderTexture",
    ctor: function(a, c, d, e) {
        I.i.prototype.ctor.call(this);
        this.Wc = this.Vc = p;
        this.vg = I.la.Hk;
        this.Ec = new I.vd(0, 0, 0, 255);
        a !== m && c !== m && (d = d || I.la.Hk, this.Tv(a, c, d, e || 0));
        this.Vh(0, 0)
    },
    ed: function() {
        return I.ja === I.t.Tb ? new I.le.D(this) : new I.le.G(this)
    },
    od: function() {
        I.i.prototype.Qa.call(this);
        this.f.od()
    },
    HJ: D("sprite"),
    KC: A("sprite"),
    NC: function(a, c, d) {
        this.f.NC(a, c, d)
    },
    Tv: function(a, c, d, e) {
        return this.f.Tv(a, c, d, e)
    },
    Rf: function() {
        I.Ga.ev(this.W);
        this.f.Rf()
    },
    XT: function(a, c, d, e, f, g) {
        var h = I.s;
        f = f || h.COLOR_BUFFER_BIT;
        g = g || h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT;
        this.Ht(a, c, d, e, f, g, h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT | h.STENCIL_BUFFER_BIT)
    },
    Ht: function(a, c, d, e, f, g, h) {
        this.Rf();
        this.f.Ht(a, c, d, e, f, g, h)
    },
    end: function() {
        this.f.end()
    },
    clear: function(a, c, d, e) {
        this.XT(a, c, d, e);
        this.end()
    },
    clearRect: function(a, c, d, e) {
        this.f.clearRect(a, c, d, e)
    },
    clearDepth: function(a) {
        this.f.clearDepth(a)
    },
    clearStencil: function(a) {
        this.f.clearStencil(a)
    },
    A6: D("lB"),
    vba: A("lB"),
    yV: D("Ec"),
    Ew: function(a) {
        var c = this.Ec;
        c.r = a.r;
        c.g = a.g;
        c.b = a.b;
        c.a = a.a;
        this.f.SL(a)
    },
    z6: D("kB"),
    uba: A("kB"),
    B6: D("mB"),
    wba: A("mB"),
    G8: D("er"),
    qba: A("er"),
    eba: function() {
        I.log("saveToFile isn't supported on Cocos2d-Html5")
    },
    Z9: function() {
        I.log("saveToFile isn't supported on cocos2d-html5");
        return s
    },
    G9: y(),
    H9: y()
});
M = I.le.prototype;
I.p(M, "clearColorVal", M.yV, M.Ew);
I.le.create = function(a, c, d, e) {
    return new I.le(a, c, d, e)
};
(function() {
    I.le.D = function(a) {
        I.i.D.call(this, a);
        this.ib = p;
        this.LQ = "rgba(255,255,255,0)";
        this.Mj = document.createElement("canvas");
        this.mg = new I.vs(this.Mj.getContext("2d"))
    };
    var a = I.le.D.prototype = Object.create(I.i.D.prototype);
    a.constructor = I.le.D;
    a.od = function() {
        this.Mj = this.mg = s
    };
    a.clearStencil = y();
    a.NC = y();
    a.SL = function(a) {
        this.LQ = "rgba(" + (0 | a.r) + "," + (0 | a.g) + "," + (0 | a.b) + "," + 0 / 255 + ")"
    };
    a.Tv = function(a, d) {
        var e = this.o,
            f = this.Mj,
            g = I.eb();
        f.width = 0 | a * g;
        f.height = 0 | d * g;
        g = new I.la;
        g.Fd(f);
        g.Jb();
        f = e.sprite = new I.F(g);
        f.yk(I.ONE, I.ONE_MINUS_SRC_ALPHA);
        e.er = u;
        e.N(f);
        return p
    };
    a.Rf = y();
    a.Ht = function(a, d, e, f) {
        a = a || 0;
        d = d || 0;
        e = e || 0;
        f = isNaN(f) ? 255 : f;
        var g = this.mg.getContext(),
            h = this.Mj;
        g.setTransform(1, 0, 0, 1, 0, 0);
        this.mg.bg("rgba(" + (0 | a) + "," + (0 | d) + "," + (0 | e) + "," + 0 / 255 + ")");
        g.clearRect(0, 0, h.width, h.height);
        g.fillRect(0, 0, h.width, h.height)
    };
    a.end = function() {
        var a = this.o,
            d = I.eb();
        I.Ga.eA(this.mg, a.W, d, d)
    };
    a.clearRect = function(a, d, e, f) {
        this.mg.clearRect(a, d, e, -f)
    };
    a.clearDepth = function() {
        I.log("clearDepth isn't supported on Cocos2d-Html5")
    };
    a.ia = function(a) {
        var d = this.o;
        this.Wd(a);
        d.sprite.ia(this);
        this.C = 0
    }
})();
(function() {
    I.le.G = function(a) {
        I.i.G.call(this, a);
        this.ib = p;
        this.Wk = this.Rq = this.zu = this.du = s;
        this.Ou = new I.gi;
        this.$m = new I.gi;
        this.hu = new I.gi
    };
    var a = I.le.G.prototype = Object.create(I.i.G.prototype);
    a.constructor = I.le.G;
    a.NC = function(a, d, e) {
        this.Ou.x = a.x;
        this.Ou.y = a.y;
        this.$m = d;
        this.hu = e
    };
    a.Sa = function(a) {
        var d = a || I.s;
        a = this.o;
        if (a.er) {
            a.Rf();
            var e = a.lB;
            if (e) {
                var f = [0, 0, 0, 0],
                    g = 0,
                    h = 0;
                e & d.COLOR_BUFFER_BIT && (f = d.getParameter(d.COLOR_CLEAR_VALUE), d.clearColor(a.Ec.r / 255, a.Ec.g / 255, a.Ec.b / 255, a.Ec.a /
                    255));
                e & d.DEPTH_BUFFER_BIT && (g = d.getParameter(d.DEPTH_CLEAR_VALUE), d.clearDepth(a.kB));
                e & d.STENCIL_BUFFER_BIT && (h = d.getParameter(d.STENCIL_CLEAR_VALUE), d.clearStencil(a.mB));
                d.clear(e);
                e & d.COLOR_BUFFER_BIT && d.clearColor(f[0], f[1], f[2], f[3]);
                e & d.DEPTH_BUFFER_BIT && d.clearDepth(g);
                e & d.STENCIL_BUFFER_BIT && d.clearStencil(h)
            }
            a.dg();
            d = a.P;
            for (e = 0; e < d.length; e++) f = d[e], f !== a.sprite && f.f.ia(a.sprite.f);
            a.end()
        }
    };
    a.clearStencil = function(a) {
        var d = I.s,
            e = d.getParameter(d.STENCIL_CLEAR_VALUE);
        d.clearStencil(a);
        d.clear(d.STENCIL_BUFFER_BIT);
        d.clearStencil(e)
    };
    a.od = function() {
        this.Rq = s;
        var a = I.s;
        a.deleteFramebuffer(this.du);
        this.Wk && a.deleteRenderbuffer(this.Wk)
    };
    a.SL = y();
    a.Tv = function(a, d, e, f) {
        var g = this.o;
        e === I.la.Fp && I.log("cc.RenderTexture._initWithWidthAndHeightForWebGL() : only RGB and RGBA formats are valid for a render texture;");
        var h = I.s,
            k = I.eb();
        this.$m = new I.gi(0, 0, a, d);
        this.hu = new I.gi(0, 0, a, d);
        a = 0 | a * k;
        d = 0 | d * k;
        this.zu = h.getParameter(h.FRAMEBUFFER_BINDING);
        var n;
        I.Un.av ? (k = a, n = d) : (k = I.sm(a), n =
            I.sm(d));
        for (var r = new Uint8Array(4 * k * n), t = 0; t < 4 * k * n; t++) r[t] = 0;
        this.vg = e;
        t = g.ba = new I.la;
        if (!g.ba) return u;
        t.Rv(r, g.vg, k, n, I.size(a, d));
        e = h.getParameter(h.RENDERBUFFER_BINDING);
        if (I.Un.Rn("GL_QCOM")) {
            this.Rq = new I.la;
            if (!this.Rq) return u;
            this.Rq.Rv(r, g.vg, k, n, I.size(a, d))
        }
        this.du = h.createFramebuffer();
        h.bindFramebuffer(h.FRAMEBUFFER, this.du);
        h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, t.Pf, 0);
        0 !== f && (this.Wk = h.createRenderbuffer(), h.bindRenderbuffer(h.RENDERBUFFER, this.Wk),
            h.renderbufferStorage(h.RENDERBUFFER, f, k, n), f === h.DEPTH_STENCIL ? h.framebufferRenderbuffer(h.FRAMEBUFFER, h.DEPTH_STENCIL_ATTACHMENT, h.RENDERBUFFER, this.Wk) : f === h.STENCIL_INDEX || f === h.STENCIL_INDEX8 ? h.framebufferRenderbuffer(h.FRAMEBUFFER, h.STENCIL_ATTACHMENT, h.RENDERBUFFER, this.Wk) : f === h.DEPTH_COMPONENT16 && h.framebufferRenderbuffer(h.FRAMEBUFFER, h.DEPTH_ATTACHMENT, h.RENDERBUFFER, this.Wk));
        h.checkFramebufferStatus(h.FRAMEBUFFER) !== h.FRAMEBUFFER_COMPLETE && I.log("Could not attach texture to the framebuffer");
        t.cL();
        a = g.sprite = new I.F(t);
        a.scaleY = -1;
        a.yk(h.ONE, h.ONE_MINUS_SRC_ALPHA);
        h.bindRenderbuffer(h.RENDERBUFFER, e);
        h.bindFramebuffer(h.FRAMEBUFFER, this.zu);
        g.er = u;
        g.N(a);
        return p
    };
    a.Rf = function() {
        var a = this.o;
        I.dj(I.fi);
        I.$v();
        I.dj(I.ei);
        I.$v();
        var d = I.s,
            e = I.O;
        e.Lo(e.rr());
        var f = a.ba.S,
            g = I.O.qW(),
            e = g.width / f.width,
            f = g.height / f.height,
            e = I.e.X.gJ(-1 / e, 1 / e, -1 / f, 1 / f, -1, 1);
        I.Hr(e);
        e = new I.gi(0, 0, 0, 0);
        e.width = this.hu.width;
        e.height = this.hu.height;
        f = e.height / this.$m.height;
        e.x = (this.$m.x - this.Ou.x) * (e.width /
            this.$m.width);
        e.y = (this.$m.y - this.Ou.y) * f;
        d.viewport(e.x, e.y, e.width, e.height);
        this.zu = d.getParameter(d.FRAMEBUFFER_BINDING);
        d.bindFramebuffer(d.FRAMEBUFFER, this.du);
        I.Un.Rn("GL_QCOM") && (d.framebufferTexture2D(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0, d.TEXTURE_2D, this.Rq.Pf, 0), d.clear(d.COLOR_BUFFER_BIT | d.DEPTH_BUFFER_BIT), d.framebufferTexture2D(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0, d.TEXTURE_2D, a.ba.Pf, 0))
    };
    a.Ht = function(a, d, e, f, g, h, k) {
        a /= 255;
        d /= 255;
        e /= 255;
        f /= 255;
        var n = I.s,
            r = [0, 0, 0, 0],
            t = 0,
            v = 0;
        k & n.COLOR_BUFFER_BIT &&
            (r = n.getParameter(n.COLOR_CLEAR_VALUE), n.clearColor(a, d, e, f));
        k & n.DEPTH_BUFFER_BIT && (t = n.getParameter(n.DEPTH_CLEAR_VALUE), n.clearDepth(g));
        k & n.STENCIL_BUFFER_BIT && (v = n.getParameter(n.STENCIL_CLEAR_VALUE), n.clearStencil(h));
        n.clear(k);
        k & n.COLOR_BUFFER_BIT && n.clearColor(r[0], r[1], r[2], r[3]);
        k & n.DEPTH_BUFFER_BIT && n.clearDepth(t);
        k & n.STENCIL_BUFFER_BIT && n.clearStencil(v)
    };
    a.end = function() {
        I.Ga.tS(this.o.W);
        var a = I.s,
            d = I.O;
        a.bindFramebuffer(a.FRAMEBUFFER, this.zu);
        d.MC();
        I.dj(I.fi);
        I.Zv();
        I.dj(I.ei);
        I.Zv()
    };
    a.clearRect = y();
    a.clearDepth = function(a) {
        var d = this.o;
        d.Rf();
        var e = I.s,
            f = e.getParameter(e.DEPTH_CLEAR_VALUE);
        e.clearDepth(a);
        e.clear(e.DEPTH_BUFFER_BIT);
        e.clearDepth(f);
        d.end()
    };
    a.ia = function(a) {
        var d = this.o;
        d.$d && (I.$v(), this.Wd(a), I.Ga.Pg(this), d.sprite.ia(this), this.C = 0, I.Zv())
    }
})();
I.ua = I.i.extend({
    yc: s,
    zi: 0,
    ub: s,
    ph: s,
    Gm: s,
    Hf: u,
    $b: "ProgressTimer",
    ctor: function(a) {
        I.i.prototype.ctor.call(this);
        this.yc = I.ua.Aj;
        this.zi = 0;
        this.ph = I.d(0, 0);
        this.Gm = I.d(0, 0);
        this.Hf = u;
        this.ub = s;
        a && this.KW(a)
    },
    TV: function() {
        return I.d(this.ph.x, this.ph.y)
    },
    RY: function(a) {
        this.ph = I.sK(a)
    },
    sV: function() {
        return I.d(this.Gm.x, this.Gm.y)
    },
    xY: function(a) {
        this.Gm = I.sK(a)
    },
    SB: D("yc"),
    YV: D("zi"),
    HJ: D("ub"),
    WY: function(a) {
        this.zi !== a && (this.zi = I.ir(a, 0, 100), this.f.tI())
    },
    Ko: y(),
    Sl: E(u),
    aX: D("Hf"),
    ic: function(a) {
        this.ub.color =
            a;
        this.f.Z(I.i.L.hb)
    },
    Hd: function(a) {
        this.ub.opacity = a;
        this.f.Z(I.i.L.lb)
    },
    Xi: function() {
        return this.ub.color
    },
    ao: function() {
        return this.ub.opacity
    },
    pca: function(a) {
        this.Hf !== a && (this.Hf = a, this.f.bm())
    },
    KC: function(a) {
        this.ub !== a && ((this.ub = a) ? this.Gd(a.width, a.height) : this.Gd(0, 0), this.f.bm())
    },
    oZ: function(a) {
        a !== this.yc && (this.yc = a, this.f.bm())
    },
    cZ: function(a) {
        this.Hf !== a && (this.Hf = a, this.f.bm())
    },
    KW: function(a) {
        this.percentage = 0;
        this.Vh(0.5, 0.5);
        this.yc = I.ua.Aj;
        this.Hf = u;
        this.midPoint = I.d(0.5,
            0.5);
        this.barChangeRate = I.d(1, 1);
        this.KC(a);
        this.f.VJ();
        return p
    },
    ed: function() {
        return I.ja === I.t.Tb ? new I.ua.D(this) : new I.ua.G(this)
    }
});
M = I.ua.prototype;
I.p(M, "midPoint", M.TV, M.RY);
I.p(M, "barChangeRate", M.sV, M.xY);
I.p(M, "type", M.SB, M.oZ);
I.p(M, "percentage", M.YV, M.WY);
I.p(M, "sprite", M.HJ, M.KC);
I.p(M, "reverseDir", M.aX, M.cZ);
I.ua.create = function(a) {
    return new I.ua(a)
};
I.ua.$D = 4;
I.ua.oP = 75;
I.ua.Aj = 0;
I.ua.Kk = 1;
I.Hx = I.H.extend({
    Lc: 0,
    Gc: 0,
    ctor: function(a, c) {
        I.H.prototype.ctor.call(this);
        this.Gc = this.Lc = 0;
        c !== m && this.n(a, c)
    },
    n: function(a, c) {
        return I.H.prototype.n.call(this, a) ? (this.Lc = c, p) : u
    },
    j: function() {
        var a = new I.Hx;
        a.n(this.q, this.Lc);
        return a
    },
    reverse: function() {
        I.log("cc.ProgressTo.reverse(): reverse hasn't been supported.");
        return s
    },
    M: function(a) {
        I.H.prototype.M.call(this, a);
        this.Gc = a.percentage
    },
    update: function(a) {
        this.target instanceof I.ua && (this.target.percentage = this.Gc + (this.Lc - this.Gc) * a)
    }
});
I.SX = function(a, c) {
    return new I.Hx(a, c)
};
I.Hx.create = I.SX;
I.Gx = I.H.extend({
    Lc: 0,
    Gc: 0,
    ctor: function(a, c, d) {
        I.H.prototype.ctor.call(this);
        this.Gc = this.Lc = 0;
        d !== m && this.n(a, c, d)
    },
    n: function(a, c, d) {
        return I.H.prototype.n.call(this, a) ? (this.Lc = d, this.Gc = c, p) : u
    },
    j: function() {
        var a = new I.Gx;
        a.n(this.q, this.Gc, this.Lc);
        return a
    },
    reverse: function() {
        return I.qC(this.q, this.Lc, this.Gc)
    },
    M: function(a) {
        I.H.prototype.M.call(this, a)
    },
    update: function(a) {
        this.target instanceof I.ua && (this.target.percentage = this.Gc + (this.Lc - this.Gc) * a)
    }
});
I.qC = function(a, c, d) {
    return new I.Gx(a, c, d)
};
I.Gx.create = I.qC;
(function() {
    I.ua.D = function(a) {
        I.i.D.call(this, a);
        this.ib = p;
        this.LE = Math.PI / 180;
        this.WE = I.rect(0, 0, 0, 0);
        this.Sz = I.d(0, 0);
        this.$j = 0;
        this.XF = this.$H = 270;
        this.iF = u
    };
    var a = I.ua.D.prototype = Object.create(I.i.D.prototype);
    a.constructor = I.ua.D;
    a.Sa = function(a, d, e) {
        a = a || I.s;
        var f = a.getContext(),
            g = this.o,
            h = g.ub,
            k = h.f.hk,
            n = h.f.bc / 255;
        if (!(0 === k.width || 0 === k.height) && h.ba && k.dD && 0 !== n) {
            a.setTransform(this.Si, d, e);
            a.Jo(h.Lj);
            a.gm(n);
            var r = h.wa,
                t = h.pc,
                n = t.x,
                v = -t.y - r.height,
                B = r.width,
                r = r.height;
            a.save();
            h.nc &&
                (n = -n - B, f.scale(-1, 1));
            h.oc && (v = t.y, f.scale(1, -1));
            g.yc === I.ua.Kk ? (g = this.WE, f.beginPath(), f.rect(g.x * d, g.y * e, g.width * d, g.height * e), f.clip(), f.closePath()) : g.yc === I.ua.Aj && (g = this.Sz.x * d, t = this.Sz.y * e, f.beginPath(), f.arc(g, t, this.$j * e, this.LE * this.$H, this.LE * this.XF, this.iF), f.lineTo(g, t), f.clip(), f.closePath());
            g = h.ba.Xa;
            h.f.aq ? f.drawImage(g, 0, 0, k.width, k.height, n * d, v * e, B * d, r * e) : f.drawImage(g, k.uw, k.vw, k.width, k.height, n * d, v * e, B * d, r * e);
            a.restore();
            I.ef++
        }
    };
    a.bm = y();
    a.VJ = y();
    a.tI = function() {
        var a =
            this.o,
            d = a.ub,
            e = d.width,
            f = d.height,
            g = a.ph;
        if (a.yc === I.ua.Aj) {
            this.$j = Math.round(Math.sqrt(e * e + f * f));
            var h, k = u,
                n = this.Sz;
            n.x = e * g.x;
            n.y = -f * g.y;
            a.Hf ? (h = 270, g = 270 - 3.6 * a.zi) : (g = -90, h = -90 + 3.6 * a.zi);
            d.nc && (n.x -= e * 2 * a.ph.x, g = -g - 180, h = -h - 180, k = !k);
            d.oc && (n.y += f * 2 * a.ph.y, k = !k, g = -g, h = -h);
            this.$H = g;
            this.XF = h;
            this.iF = k
        } else k = a.Gm, n = a.zi / 100, a = this.WE, k = I.size(e * (1 - k.x), f * (1 - k.y)), n = I.size((e - k.width) * n, (f - k.height) * n), k = I.size(k.width + n.width, k.height + n.height), h = I.d(e * g.x, f * g.y), n = h.x - k.width / 2, 0.5 < g.x && k.width /
            2 >= e - h.x && (n = e - k.width), e = h.y - k.height / 2, 0.5 < g.y && k.height / 2 >= f - h.y && (e = f - k.height), a.x = 0, f = 1, d.nc && (a.x -= k.width, f = -1), 0 < n && (a.x += n * f), a.y = 0, f = 1, d.oc && (a.y += k.height, f = -1), 0 < e && (a.y -= e * f), a.width = k.width, a.height = -k.height
    };
    a.jb = y();
    a.Wd = function(a) {
        var d = this.o;
        if (d.ub) {
            var e = I.i.L,
                f = this.C,
                g = a ? a.o : s;
            g && (g.Vc && a.C & e.hb) && (f |= e.hb);
            g && (g.Wc && a.C & e.lb) && (f |= e.lb);
            a && a.C & e.ga && (f |= e.ga);
            this.C = f;
            var d = d.ub.f,
                h = d.C,
                g = h & e.hb,
                h = h & e.lb;
            g && Ma(d);
            h && Pa(d);
            (g || h) && d.jb();
            f & e.ga && this.transform(a);
            f & e.jf &&
                (this.C ^= this.C & e.jf)
        }
    };
    a.updateStatus = function() {
        var a = this.o;
        if (a.ub) {
            var d = I.i.L,
                e = this.C,
                a = a.ub.f,
                f = a.C,
                g = f & d.hb,
                f = f & d.lb;
            g && Ka(a);
            f && Ja(a);
            (g || f) && a.jb();
            e & d.ga && this.transform(La(this), p);
            this.C = 0
        }
    }
})();
(function() {
    I.ua.G = function(a) {
        I.i.G.call(this, a);
        this.ib = p;
        this.mT = I.s.createBuffer();
        this.Yd = 0;
        this.Ch = this.Yc = s;
        this.iv = u
    };
    var a = I.ua.G.prototype = Object.create(I.i.G.prototype);
    a.constructor = I.ua.G;
    a.Sa = function(a) {
        var d = this.o;
        a = a || I.s;
        if (this.Yc && d.ub) {
            this.Wa.kc();
            this.Wa.Ji(this.Ad);
            var e = d.ub.aa;
            I.Xf(e.src, e.Ra);
            I.Zc(I.zt);
            I.Wf(d.ub.texture);
            a.bindBuffer(a.ARRAY_BUFFER, this.mT);
            this.iv && (a.bufferData(a.ARRAY_BUFFER, this.Ch, a.DYNAMIC_DRAW), this.iv = u);
            e = I.Uc.BYTES_PER_ELEMENT;
            a.vertexAttribPointer(I.tb,
                2, a.FLOAT, u, e, 0);
            a.vertexAttribPointer(I.Je, 4, a.UNSIGNED_BYTE, p, e, 8);
            a.vertexAttribPointer(I.Ke, 2, a.FLOAT, u, e, 12);
            d.yc === I.ua.Aj ? a.drawArrays(a.TRIANGLE_FAN, 0, this.Yd) : d.yc === I.ua.Kk && (d.Hf ? (a.drawArrays(a.TRIANGLE_STRIP, 0, this.Yd / 2), a.drawArrays(a.TRIANGLE_STRIP, 4, this.Yd / 2), I.ef++) : a.drawArrays(a.TRIANGLE_STRIP, 0, this.Yd));
            I.ef++
        }
    };
    a.Wd = function(a) {
        var d = this.o;
        if (d.ub) {
            var e = I.i.L,
                f = this.C,
                g = a ? a.o : s;
            g && (g.Vc && a.C & e.hb) && (f |= e.hb);
            g && (g.Wc && a.C & e.lb) && (f |= e.lb);
            a && a.C & e.ga && (f |= e.ga);
            this.C = f;
            d =
                d.ub.f;
            g = d.C;
            f = g & e.hb;
            e = g & e.lb;
            f && Ma(d);
            e && Pa(d);
            if (f || e) d.jb(), this.jb();
            this.transform(a);
            d.C = 0
        }
    };
    a.updateStatus = function() {
        var a = this.o;
        if (a.ub) {
            var d = I.i.L,
                e = this.C,
                a = a.ub.f,
                f = a.C,
                g = f & d.hb,
                f = f & d.lb;
            g && (Ka(a), this.C ^= this.C & d.hb);
            f && (Ja(a), this.C ^= this.C & d.lb);
            if (g || f) a.jb(), this.jb();
            e & d.ga && this.transform(La(this), p);
            e & d.jf && (this.C ^= this.C & d.jf)
        }
    };
    a.bm = function() {
        this.Yc && (this.Ch = this.Yc = s, this.Yd = 0)
    };
    a.VJ = function() {
        this.Ch = this.Yc = s;
        this.Yd = 0;
        this.Wa = I.cg.ad(I.wm)
    };
    a.tI = function() {
        var a =
            this.o.yc;
        a === I.ua.Aj ? this.jT() : a === I.ua.Kk && this.fT();
        this.iv = p
    };
    a.fT = function() {
        var a = this.o;
        if (a.ub) {
            var d, e = a.zi / 100;
            d = a.Gm;
            d = I.kj(I.d(1 - d.x + e * d.x, 1 - d.y + e * d.y), 0.5);
            e = I.$c(a.ph, d);
            a = I.jj(a.ph, d);
            0 > e.x && (a.x += -e.x, e.x = 0);
            1 < a.x && (e.x -= a.x - 1, a.x = 1);
            0 > e.y && (a.y += -e.y, e.y = 0);
            1 < a.y && (e.y -= a.y - 1, a.y = 1);
            if (this.Hf) {
                if (!this.Yc) {
                    this.Yd = 8;
                    var f = I.Uc.BYTES_PER_ELEMENT;
                    this.Ch = new ArrayBuffer(8 * f);
                    var g = [];
                    for (d = 0; 8 > d; d++) g[d] = new I.Uc(s, s, s, this.Ch, d * f);
                    g[0].texCoords = this.Bd(I.d(0, 1));
                    g[0].vertices = this.Dd(I.d(0,
                        1));
                    g[1].texCoords = this.Bd(I.d(0, 0));
                    g[1].vertices = this.Dd(I.d(0, 0));
                    g[6].texCoords = this.Bd(I.d(1, 1));
                    g[6].vertices = this.Dd(I.d(1, 1));
                    g[7].texCoords = this.Bd(I.d(1, 0));
                    g[7].vertices = this.Dd(I.d(1, 0));
                    this.Yc = g
                }
                d = this.Yc;
                d[2].texCoords = this.Bd(I.d(e.x, a.y));
                d[2].vertices = this.Dd(I.d(e.x, a.y));
                d[3].texCoords = this.Bd(I.d(e.x, e.y));
                d[3].vertices = this.Dd(I.d(e.x, e.y));
                d[4].texCoords = this.Bd(I.d(a.x, a.y));
                d[4].vertices = this.Dd(I.d(a.x, a.y));
                d[5].texCoords = this.Bd(I.d(a.x, e.y));
                d[5].vertices = this.Dd(I.d(a.x,
                    e.y))
            } else {
                if (!this.Yc) {
                    this.Yd = 4;
                    f = I.Uc.BYTES_PER_ELEMENT;
                    this.Ch = new ArrayBuffer(4 * f);
                    this.Yc = [];
                    for (d = 0; 4 > d; d++) this.Yc[d] = new I.Uc(s, s, s, this.Ch, d * f)
                }
                d = this.Yc;
                d[0].texCoords = this.Bd(I.d(e.x, a.y));
                d[0].vertices = this.Dd(I.d(e.x, a.y));
                d[1].texCoords = this.Bd(I.d(e.x, e.y));
                d[1].vertices = this.Dd(I.d(e.x, e.y));
                d[2].texCoords = this.Bd(I.d(a.x, a.y));
                d[2].vertices = this.Dd(I.d(a.x, a.y));
                d[3].texCoords = this.Bd(I.d(a.x, e.y));
                d[3].vertices = this.Dd(I.d(a.x, e.y))
            }
            this.jb()
        }
    };
    a.jT = function() {
        var a = this.o;
        if (a.ub) {
            var d,
                e = a.ph;
            d = a.zi / 100;
            var f = 2 * I.PI * (a.Hf ? d : 1 - d),
                a = I.d(e.x, 1),
                g = I.xK(a, e, f),
                f = 0;
            if (0 === d) g = a, f = 0;
            else if (1 === d) g = a, f = 4;
            else {
                var h = I.bN,
                    k = I.ua.$D;
                for (d = 0; d <= k; ++d) {
                    var n = (d + (k - 1)) % k,
                        r = this.zy(d % k),
                        n = this.zy(n);
                    0 === d ? n = I.vK(r, n, 1 - e.x) : 4 === d && (r = I.vK(r, n, 1 - e.x));
                    var t = I.d(0, 0);
                    if (I.lC(r, n, e, g, t) && (!(0 === d || 4 === d) || 0 <= t.x && 1 >= t.x) && 0 <= t.y && t.y < h) h = t.y, f = d
                }
                g = I.jj(e, I.kj(I.$c(g, e), h))
            }
            h = p;
            this.Yd !== f + 3 && (h = u, this.Ch = this.Yc = s, this.Yd = 0);
            if (!this.Yc) {
                k = this.Yd = f + 3;
                r = I.Uc.BYTES_PER_ELEMENT;
                this.Ch = new ArrayBuffer(k *
                    r);
                n = [];
                for (d = 0; d < k; d++) n[d] = new I.Uc(s, s, s, this.Ch, d * r);
                this.Yc = n;
                if (!this.Yc) {
                    I.log("cc.ProgressTimer._updateRadial() : Not enough memory");
                    return
                }
            }
            this.jb();
            k = this.Yc;
            if (!h) {
                k[0].texCoords = this.Bd(e);
                k[0].vertices = this.Dd(e);
                k[1].texCoords = this.Bd(a);
                k[1].vertices = this.Dd(a);
                for (d = 0; d < f; d++) e = this.zy(d), k[d + 2].texCoords = this.Bd(e), k[d + 2].vertices = this.Dd(e)
            }
            k[this.Yd - 1].texCoords = this.Bd(g);
            k[this.Yd - 1].vertices = this.Dd(g)
        }
    };
    a.zy = function(a) {
        if (a < I.ua.$D) {
            var d = I.ua.oP;
            return this.o.Hf ? I.d(d >>
                7 - (a << 1) & 1, d >> 7 - ((a << 1) + 1) & 1) : I.d(d >> (a << 1) + 1 & 1, d >> (a << 1) & 1)
        }
        return I.d(0, 0)
    };
    a.Bd = function(a) {
        var d = this.o.ub;
        if (!d) return {
            u: 0,
            v: 0
        };
        var e = d.quad,
            f = I.d(e.bl.texCoords.u, e.bl.texCoords.v),
            e = I.d(e.tr.texCoords.u, e.tr.texCoords.v);
        d.textureRectRotated && (d = a.x, a.x = a.y, a.y = d);
        return {
            u: f.x * (1 - a.x) + e.x * a.x,
            v: f.y * (1 - a.y) + e.y * a.y
        }
    };
    a.Dd = function(a) {
        var d = this.o.ub;
        if (!d) return {
            x: 0,
            y: 0
        };
        var e = d.quad,
            d = I.d(e.bl.vertices.x, e.bl.vertices.y),
            e = I.d(e.tr.vertices.x, e.tr.vertices.y);
        return {
            x: d.x * (1 - a.x) + e.x * a.x,
            y: d.y *
                (1 - a.y) + e.y * a.y
        }
    };
    a.jb = function() {
        var a = this.o;
        if (a.ub && this.Yc) {
            for (var a = a.ub.quad.tl.colors, d = this.Yc, e = 0, f = this.Yd; e < f; ++e) d[e].colors = a;
            this.iv = p
        }
    }
})();
I.Jp = 4208917214;
I.f2 = 0;
I.yj = 1;
I.rt = 0;
I.e2 = 1;
I.$ = I.hi.extend({
    ha: s,
    Ma: s,
    q: s,
    ug: u,
    CG: u,
    $b: "TransitionScene",
    ctor: function(a, c) {
        I.hi.prototype.ctor.call(this);
        a !== m && c !== m && this.n(a, c)
    },
    MH: function() {
        this.Sg(this.MH);
        var a = I.O;
        this.CG = a.ck;
        a.lj(this.ha);
        I.K.fm(p);
        this.Ma.visible = p
    },
    wh: function() {
        this.ug = p
    },
    ia: function() {
        this.ug ? (this.Ma.ia(), this.ha.ia()) : (this.ha.ia(), this.Ma.ia());
        I.i.prototype.ia.call(this)
    },
    U: function() {
        I.i.prototype.U.call(this);
        I.K.fm(u);
        this.Ma.Og();
        this.ha.U()
    },
    Qa: function() {
        I.i.prototype.Qa.call(this);
        I.K.fm(p);
        this.Ma.Qa();
        this.ha.uk()
    },
    od: function() {
        I.i.prototype.od.call(this);
        this.CG && this.Ma.od()
    },
    n: function(a, c) {
        c || b(Error("cc.TransitionScene.initWithDuration(): Argument scene must be non-nil"));
        return this.pa() ? (this.q = a, this.na({
            x: 0,
            y: 0,
            anchorX: 0,
            anchorY: 0
        }), this.ha = c, this.Ma = I.O.rc, this.Ma || (this.Ma = new I.hi, this.Ma.pa()), this.ha === this.Ma && b(Error("cc.TransitionScene.initWithDuration(): Incoming scene must be different from the outgoing scene")), this.wh(), p) : u
    },
    finish: function() {
        this.ha.na({
            visible: p,
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0
        });
        I.ja === I.t.zb && this.ha.qr().restore();
        this.Ma.na({
            visible: u,
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0
        });
        I.ja === I.t.zb && this.Ma.qr().restore();
        this.mj(this.MH, 0)
    },
    YB: function() {
        this.ha.visible = p;
        this.Ma.visible = u
    }
});
I.$.create = function(a, c) {
    return new I.$(a, c)
};
I.ne = I.$.extend({
    fl: 0,
    ctor: function(a, c, d) {
        I.$.prototype.ctor.call(this);
        d != m && this.n(a, c, d)
    },
    n: function(a, c, d) {
        I.$.prototype.n.call(this, a, c) && (this.fl = d);
        return p
    }
});
I.ne.create = function(a, c, d) {
    return new I.ne(a, c, d)
};
I.wE = I.$.extend({
    ctor: function(a, c) {
        I.$.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    U: function() {
        I.$.prototype.U.call(this);
        this.ha.na({
            scale: 0.0010,
            anchorX: 0.5,
            anchorY: 0.5
        });
        this.Ma.na({
            scale: 1,
            anchorX: 0.5,
            anchorY: 0.5
        });
        var a = I.Ha(I.zk(I.ZK(this.q / 2, 0.0010), I.WK(this.q / 2, 720)), I.gc(this.q / 2));
        this.Ma.ma(a);
        this.ha.ma(I.Ha(a.reverse(), I.Db(this.finish, this)))
    }
});
I.wE.create = function(a, c) {
    return new I.wE(a, c)
};
I.mE = I.$.extend({
    ctor: function(a, c) {
        I.$.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    U: function() {
        I.$.prototype.U.call(this);
        var a = I.O.kb();
        this.ha.na({
            scale: 0.5,
            x: a.width,
            y: 0,
            anchorX: 0.5,
            anchorY: 0.5
        });
        this.Ma.anchorX = 0.5;
        this.Ma.anchorY = 0.5;
        var c = I.Xv(this.q / 4, I.d(-a.width, 0), a.width / 4, 2),
            d = I.nf(this.q / 4, 1),
            a = I.nf(this.q / 4, 0.5),
            a = I.Ha(a, c),
            c = I.Ha(c, d),
            d = I.gc(this.q / 2);
        this.Ma.ma(a);
        this.ha.ma(I.Ha(d, c, I.Db(this.finish, this)))
    }
});
I.mE.create = function(a, c) {
    return new I.mE(a, c)
};
I.Cj = I.$.extend({
    ctor: function(a, c) {
        I.$.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    U: function() {
        I.$.prototype.U.call(this);
        this.$i();
        var a = this.action();
        this.ha.ma(I.Ha(this.cf(a), I.Db(this.finish, this)))
    },
    $i: function() {
        this.ha.Ia(-I.O.kb().width, 0)
    },
    action: function() {
        return I.moveTo(this.q, I.d(0, 0))
    },
    cf: function(a) {
        return new I.uj(a, 2)
    }
});
I.Cj.create = function(a, c) {
    return new I.Cj(a, c)
};
I.oE = I.Cj.extend({
    ctor: function(a, c) {
        I.Cj.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    $i: function() {
        this.ha.Ia(I.O.kb().width, 0)
    }
});
I.oE.create = function(a, c) {
    return new I.oE(a, c)
};
I.pE = I.Cj.extend({
    ctor: function(a, c) {
        I.Cj.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    $i: function() {
        this.ha.Ia(0, I.O.kb().height)
    }
});
I.pE.create = function(a, c) {
    return new I.pE(a, c)
};
I.nE = I.Cj.extend({
    ctor: function(a, c) {
        I.Cj.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    $i: function() {
        this.ha.Ia(0, -I.O.kb().height)
    }
});
I.nE.create = function(a, c) {
    return new I.nE(a, c)
};
I.qj = 0.5;
I.Dj = I.$.extend({
    ctor: function(a, c) {
        I.$.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    wh: function() {
        this.ug = u
    },
    U: function() {
        I.$.prototype.U.call(this);
        this.$i();
        var a = this.action(),
            c = this.action(),
            a = I.Ha(this.cf(a), I.Db(this.finish, this)),
            c = this.cf(c);
        this.ha.ma(a);
        this.Ma.ma(c)
    },
    $i: function() {
        this.ha.Ia(-I.O.kb().width + I.qj, 0)
    },
    action: function() {
        return I.moveBy(this.q, I.d(I.O.kb().width - I.qj, 0))
    },
    cf: function(a) {
        return new I.om(a, 2)
    }
});
I.Dj.create = function(a, c) {
    return new I.Dj(a, c)
};
I.zE = I.Dj.extend({
    ctor: function(a, c) {
        I.Dj.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    wh: function() {
        this.ug = p
    },
    $i: function() {
        this.ha.Ia(I.O.kb().width - I.qj, 0)
    },
    action: function() {
        return I.moveBy(this.q, I.d(-(I.O.kb().width - I.qj), 0))
    }
});
I.zE.create = function(a, c) {
    return new I.zE(a, c)
};
I.yE = I.Dj.extend({
    ctor: function(a, c) {
        I.Dj.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    wh: function() {
        this.ug = u
    },
    $i: function() {
        this.ha.Ia(0, -(I.O.kb().height - I.qj))
    },
    action: function() {
        return I.moveBy(this.q, I.d(0, I.O.kb().height - I.qj))
    }
});
I.yE.create = function(a, c) {
    return new I.yE(a, c)
};
I.AE = I.Dj.extend({
    ctor: function(a, c) {
        I.Dj.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    wh: function() {
        this.ug = p
    },
    $i: function() {
        this.ha.Ia(0, I.O.kb().height - I.qj)
    },
    action: function() {
        return I.moveBy(this.q, I.d(0, -(I.O.kb().height - I.qj)))
    }
});
I.AE.create = function(a, c) {
    return new I.AE(a, c)
};
I.xE = I.$.extend({
    ctor: function(a, c) {
        I.$.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    U: function() {
        I.$.prototype.U.call(this);
        this.ha.na({
            scale: 0.0010,
            anchorX: 2 / 3,
            anchorY: 0.5
        });
        this.Ma.na({
            scale: 1,
            anchorX: 1 / 3,
            anchorY: 0.5
        });
        var a = I.nf(this.q, 0.01),
            c = I.nf(this.q, 1);
        this.ha.ma(I.Ha(this.cf(c), I.Db(this.finish, this)));
        this.Ma.ma(this.cf(a))
    },
    cf: function(a) {
        return new I.uj(a, 2)
    }
});
I.xE.create = function(a, c) {
    return new I.xE(a, c)
};
I.kE = I.ne.extend({
    ctor: function(a, c, d) {
        I.ne.prototype.ctor.call(this);
        d == s && (d = I.yj);
        c && this.n(a, c, d)
    },
    U: function() {
        I.$.prototype.U.call(this);
        var a, c;
        this.ha.visible = u;
        var d;
        this.fl === I.yj ? (a = 90, d = 270, c = 90) : (a = -90, d = 90, c = -90);
        a = I.Ha(I.gc(this.q / 2), I.show(), I.hf(this.q / 2, 1, 0, d, a, 0, 0), I.Db(this.finish, this));
        c = I.Ha(I.hf(this.q / 2, 1, 0, 0, c, 0, 0), I.Ql(), I.gc(this.q / 2));
        this.ha.ma(a);
        this.Ma.ma(c)
    }
});
I.kE.create = function(a, c, d) {
    return new I.kE(a, c, d)
};
I.lE = I.ne.extend({
    ctor: function(a, c, d) {
        I.ne.prototype.ctor.call(this);
        d == s && (d = I.rt);
        c && this.n(a, c, d)
    },
    U: function() {
        I.$.prototype.U.call(this);
        var a, c;
        this.ha.visible = u;
        var d;
        this.fl === I.rt ? (a = 90, d = 270, c = 90) : (a = -90, d = 90, c = -90);
        a = I.Ha(I.gc(this.q / 2), I.show(), I.hf(this.q / 2, 1, 0, d, a, 90, 0), I.Db(this.finish, this));
        c = I.Ha(I.hf(this.q / 2, 1, 0, 0, c, 90, 0), I.Ql(), I.gc(this.q / 2));
        this.ha.ma(a);
        this.Ma.ma(c)
    }
});
I.lE.create = function(a, c, d) {
    return new I.lE(a, c, d)
};
I.jE = I.ne.extend({
    ctor: function(a, c, d) {
        I.ne.prototype.ctor.call(this);
        d == s && (d = I.yj);
        c && this.n(a, c, d)
    },
    U: function() {
        I.$.prototype.U.call(this);
        var a, c;
        this.ha.visible = u;
        var d;
        this.fl === I.yj ? (a = 90, d = 270, c = 90) : (a = -90, d = 90, c = -90);
        a = I.Ha(I.gc(this.q / 2), I.show(), I.hf(this.q / 2, 1, 0, d, a, -45, 0), I.Db(this.finish, this));
        c = I.Ha(I.hf(this.q / 2, 1, 0, 0, c, 45, 0), I.Ql(), I.gc(this.q / 2));
        this.ha.ma(a);
        this.Ma.ma(c)
    }
});
I.jE.create = function(a, c, d) {
    return new I.jE(a, c, d)
};
I.EE = I.ne.extend({
    ctor: function(a, c, d) {
        I.ne.prototype.ctor.call(this);
        d == s && (d = I.yj);
        c && this.n(a, c, d)
    },
    U: function() {
        I.$.prototype.U.call(this);
        var a, c;
        this.ha.visible = u;
        var d;
        this.fl === I.yj ? (a = 90, d = 270, c = 90) : (a = -90, d = 90, c = -90);
        a = I.Ha(I.gc(this.q / 2), I.zk(I.hf(this.q / 2, 1, 0, d, a, 0, 0), I.nf(this.q / 2, 1), I.show()), I.Db(this.finish, this));
        c = I.Ha(I.zk(I.hf(this.q / 2, 1, 0, 0, c, 0, 0), I.nf(this.q / 2, 0.5)), I.Ql(), I.gc(this.q / 2));
        this.ha.scale = 0.5;
        this.ha.ma(a);
        this.Ma.ma(c)
    }
});
I.EE.create = function(a, c, d) {
    return new I.EE(a, c, d)
};
I.FE = I.ne.extend({
    ctor: function(a, c, d) {
        I.ne.prototype.ctor.call(this);
        d == s && (d = I.rt);
        c && this.n(a, c, d)
    },
    U: function() {
        I.$.prototype.U.call(this);
        var a, c;
        this.ha.visible = u;
        var d;
        this.fl === I.rt ? (a = 90, d = 270, c = 90) : (a = -90, d = 90, c = -90);
        a = I.Ha(I.gc(this.q / 2), I.zk(I.hf(this.q / 2, 1, 0, d, a, 90, 0), I.nf(this.q / 2, 1), I.show()), I.Db(this.finish, this));
        c = I.Ha(I.zk(I.hf(this.q / 2, 1, 0, 0, c, 90, 0), I.nf(this.q / 2, 0.5)), I.Ql(), I.gc(this.q / 2));
        this.ha.scale = 0.5;
        this.ha.ma(a);
        this.Ma.ma(c)
    }
});
I.FE.create = function(a, c, d) {
    return new I.FE(a, c, d)
};
I.DE = I.ne.extend({
    ctor: function(a, c, d) {
        I.ne.prototype.ctor.call(this);
        d == s && (d = I.yj);
        c && this.n(a, c, d)
    },
    U: function() {
        I.$.prototype.U.call(this);
        var a, c;
        this.ha.visible = u;
        var d;
        this.fl === I.yj ? (a = 90, d = 270, c = 90) : (a = -90, d = 90, c = -90);
        a = I.Ha(I.gc(this.q / 2), I.zk(I.hf(this.q / 2, 1, 0, d, a, -45, 0), I.nf(this.q / 2, 1), I.show()), I.show(), I.Db(this.finish, this));
        c = I.Ha(I.zk(I.hf(this.q / 2, 1, 0, 0, c, 45, 0), I.nf(this.q / 2, 0.5)), I.Ql(), I.gc(this.q / 2));
        this.ha.scale = 0.5;
        this.ha.ma(a);
        this.Ma.ma(c)
    }
});
I.DE.create = function(a, c, d) {
    return new I.DE(a, c, d)
};
I.Lk = I.$.extend({
    Qm: s,
    ctor: function(a, c, d) {
        I.$.prototype.ctor.call(this);
        this.Qm = I.color();
        c && this.n(a, c, d)
    },
    U: function() {
        I.$.prototype.U.call(this);
        var a = new I.Ea(this.Qm);
        this.ha.visible = u;
        this.N(a, 2, I.Jp);
        var a = this.Hg(I.Jp),
            c = I.Ha(I.Yn(this.q / 2), I.Db(this.YB, this), I.lk(this.q / 2), I.Db(this.finish, this));
        a.ma(c)
    },
    Qa: function() {
        I.$.prototype.Qa.call(this);
        this.wC(I.Jp, u)
    },
    n: function(a, c, d) {
        d = d || I.color.BLACK;
        I.$.prototype.n.call(this, a, c) && (this.Qm.r = d.r, this.Qm.g = d.g, this.Qm.b = d.b, this.Qm.a = 0);
        return p
    }
});
I.Lk.create = function(a, c, d) {
    return new I.Lk(a, c, d)
};
I.fE = I.$.extend({
    ctor: function(a, c) {
        I.$.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    U: function() {
        I.$.prototype.U.call(this);
        var a = I.color(0, 0, 0, 0),
            c = I.O.kb(),
            a = new I.Ea(a),
            d = new I.le(c.width, c.height);
        d.sprite.anchorX = 0.5;
        d.sprite.anchorY = 0.5;
        d.na({
            x: c.width / 2,
            y: c.height / 2,
            anchorX: 0.5,
            anchorY: 0.5
        });
        d.Rf();
        this.ha.ia();
        d.end();
        var e = new I.le(c.width, c.height);
        e.Ia(c.width / 2, c.height / 2);
        e.sprite.anchorX = e.anchorX = 0.5;
        e.sprite.anchorY = e.anchorY = 0.5;
        e.Rf();
        this.Ma.ia();
        e.end();
        d.sprite.yk(I.ONE, I.ONE);
        e.sprite.yk(I.SRC_ALPHA, I.ONE_MINUS_SRC_ALPHA);
        a.N(d);
        a.N(e);
        d.sprite.opacity = 255;
        e.sprite.opacity = 255;
        c = I.Ha(I.oJ(this.q, 0), I.Db(this.YB, this), I.Db(this.finish, this));
        e.sprite.ma(c);
        this.N(a, 2, I.Jp)
    },
    Qa: function() {
        this.wC(I.Jp, u);
        I.$.prototype.Qa.call(this)
    },
    ia: function() {
        I.i.prototype.ia.call(this)
    },
    xB: y()
});
I.fE.create = function(a, c) {
    return new I.fE(a, c)
};
I.CE = I.$.extend({
    Nb: s,
    ctor: function(a, c) {
        I.$.prototype.ctor.call(this);
        this.Nb = new I.Ax;
        c && this.n(a, c)
    },
    wh: function() {
        this.ug = u
    },
    U: function() {
        I.$.prototype.U.call(this);
        this.Nb.im(this.Ma);
        this.Nb.U();
        var a = I.O.kb(),
            a = I.wda(this.q, I.size(0 | 12 * (a.width / a.height), 12)),
            a = this.cf(a);
        this.Nb.ma(I.Ha(a, I.Db(this.finish, this), I.Sw()))
    },
    ia: function() {
        this.ha.ia();
        this.Nb.ia()
    },
    cf: ca()
});
I.CE.create = function(a, c) {
    return new I.CE(a, c)
};
I.vt = I.$.extend({
    Nb: s,
    YS: function() {
        this.Nb.im(this.ha)
    },
    ctor: function(a, c) {
        I.$.prototype.ctor.call(this);
        this.Nb = new I.Ax;
        c && this.n(a, c)
    },
    U: function() {
        I.$.prototype.U.call(this);
        this.Nb.im(this.Ma);
        this.Nb.U();
        var a = this.action(),
            a = I.Ha(a, I.Db(this.YS, this), a.reverse());
        this.Nb.ma(I.Ha(this.cf(a), I.Db(this.finish, this), I.Sw()))
    },
    Qa: function() {
        this.Nb.im(s);
        this.Nb.Qa();
        I.$.prototype.Qa.call(this)
    },
    ia: function() {
        this.Nb.ia()
    },
    cf: function(a) {
        return new I.om(a, 3)
    },
    action: function() {
        return I.Uca(this.q /
            2, 3)
    }
});
I.vt.create = function(a, c) {
    return new I.vt(a, c)
};
I.BE = I.vt.extend({
    ctor: function(a, c) {
        I.vt.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    action: function() {
        return I.Vca(this.q / 2, 3)
    }
});
I.BE.create = function(a, c) {
    return new I.BE(a, c)
};
I.Bj = I.$.extend({
    Nb: s,
    ctor: function(a, c) {
        I.$.prototype.ctor.call(this);
        this.Nb = new I.Ax;
        c && this.n(a, c)
    },
    wh: function() {
        this.ug = u
    },
    U: function() {
        I.$.prototype.U.call(this);
        this.Nb.im(this.Ma);
        this.Nb.U();
        var a = I.O.kb(),
            a = this.Nn(I.size(0 | 12 * (a.width / a.height), 12));
        this.Nb.ma(I.Ha(this.cf(a), I.Db(this.finish, this), I.Sw()))
    },
    ia: function() {
        this.ha.ia();
        this.Nb.ia()
    },
    cf: ca(),
    Nn: function(a) {
        return I.c6(this.q, a)
    }
});
I.Bj.create = function(a, c) {
    return new I.Bj(a, c)
};
I.gE = I.Bj.extend({
    ctor: function(a, c) {
        I.Bj.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    Nn: function(a) {
        return I.a6(this.q, a)
    }
});
I.gE.create = function(a, c) {
    return new I.gE(a, c)
};
I.iE = I.Bj.extend({
    ctor: function(a, c) {
        I.Bj.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    Nn: function(a) {
        return new I.E0(this.q, a)
    }
});
I.iE.create = function(a, c) {
    return new I.iE(a, c)
};
I.hE = I.Bj.extend({
    ctor: function(a, c) {
        I.Bj.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    Nn: function(a) {
        return I.b6(this.q, a)
    }
});
I.hE.create = function(a, c) {
    return new I.hE(a, c)
};
I.SD = 49153;
I.me = I.$.extend({
    Lc: 0,
    Gc: 0,
    Qu: s,
    $b: "TransitionProgress",
    ctor: function(a, c) {
        I.$.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    ol: function(a, c, d) {
        a.na({
            x: c,
            y: d,
            anchorX: 0.5,
            anchorY: 0.5
        })
    },
    U: function() {
        I.$.prototype.U.call(this);
        this.RH();
        var a = I.O.kb(),
            c = new I.le(a.width, a.height);
        c.sprite.anchorX = 0.5;
        c.sprite.anchorY = 0.5;
        this.ol(c, a.width / 2, a.height / 2);
        c.clear(0, 0, 0, 1);
        c.Rf();
        this.Qu.ia();
        c.end();
        this.Qu === this.Ma && this.YB();
        a = this.il(c);
        c = I.Ha(I.qC(this.q, this.Gc, this.Lc), I.Db(this.finish, this));
        a.ma(c);
        this.N(a, 2, I.SD)
    },
    Qa: function() {
        this.wC(I.SD, p);
        I.$.prototype.Qa.call(this)
    },
    RH: function() {
        this.Qu = this.Ma;
        this.Gc = 100;
        this.Lc = 0
    },
    il: function() {
        I.log("cc.TransitionProgress._progressTimerNodeWithRenderTexture(): should be overridden in subclass");
        return s
    },
    wh: function() {
        this.ug = u
    }
});
I.me.create = function(a, c) {
    return new I.me(a, c)
};
I.uE = I.me.extend({
    ctor: function(a, c) {
        I.me.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    il: function(a) {
        var c = I.O.kb();
        a = new I.ua(a.sprite);
        I.ja === I.t.zb && (a.sprite.flippedY = p);
        a.type = I.ua.Aj;
        a.reverseDir = u;
        a.percentage = 100;
        this.ol(a, c.width / 2, c.height / 2);
        return a
    }
});
I.uE.create = function(a, c) {
    return new I.uE(a, c)
};
I.gy = I.me.extend({
    ctor: function(a, c) {
        I.me.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    il: function(a) {
        var c = I.O.kb();
        a = new I.ua(a.sprite);
        I.ja === I.t.zb && (a.sprite.flippedY = p);
        a.type = I.ua.Aj;
        a.reverseDir = p;
        a.percentage = 100;
        this.ol(a, c.width / 2, c.height / 2);
        return a
    }
});
I.gy.create = function(a, c) {
    var d = new I.gy;
    return d !== s && d.n(a, c) ? d : new I.gy(a, c)
};
I.rE = I.me.extend({
    ctor: function(a, c) {
        I.me.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    il: function(a) {
        var c = I.O.kb();
        a = new I.ua(a.sprite);
        I.ja === I.t.zb && (a.sprite.flippedY = p);
        a.type = I.ua.Kk;
        a.midPoint = I.d(1, 0);
        a.barChangeRate = I.d(1, 0);
        a.percentage = 100;
        this.ol(a, c.width / 2, c.height / 2);
        return a
    }
});
I.rE.create = function(a, c) {
    return new I.rE(a, c)
};
I.vE = I.me.extend({
    ctor: function(a, c) {
        I.me.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    il: function(a) {
        var c = I.O.kb();
        a = new I.ua(a.sprite);
        I.ja === I.t.zb && (a.sprite.flippedY = p);
        a.type = I.ua.Kk;
        a.midPoint = I.d(0, 0);
        a.barChangeRate = I.d(0, 1);
        a.percentage = 100;
        this.ol(a, c.width / 2, c.height / 2);
        return a
    }
});
I.vE.create = function(a, c) {
    return new I.vE(a, c)
};
I.sE = I.me.extend({
    ctor: function(a, c) {
        I.me.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    il: function(a) {
        var c = I.O.kb();
        a = new I.ua(a.sprite);
        I.ja === I.t.zb && (a.sprite.flippedY = p);
        a.type = I.ua.Kk;
        a.midPoint = I.d(0.5, 0.5);
        a.barChangeRate = I.d(1, 1);
        a.percentage = 0;
        this.ol(a, c.width / 2, c.height / 2);
        return a
    },
    wh: function() {
        this.ug = u
    },
    RH: function() {
        this.Qu = this.ha;
        this.Gc = 0;
        this.Lc = 100
    }
});
I.sE.create = function(a, c) {
    return new I.sE(a, c)
};
I.tE = I.me.extend({
    ctor: function(a, c) {
        I.me.prototype.ctor.call(this);
        c && this.n(a, c)
    },
    il: function(a) {
        var c = I.O.kb();
        a = new I.ua(a.sprite);
        I.ja === I.t.zb && (a.sprite.flippedY = p);
        a.type = I.ua.Kk;
        a.midPoint = I.d(0.5, 0.5);
        a.barChangeRate = I.d(1, 1);
        a.percentage = 100;
        this.ol(a, c.width / 2, c.height / 2);
        return a
    }
});
I.tE.create = function(a, c) {
    return new I.tE(a, c)
};
I.qE = I.$.extend({
    ctor: function(a, c, d) {
        I.$.prototype.ctor.call(this);
        this.Nb = new I.Ax;
        this.n(a, c, d)
    },
    Yp: p,
    Nb: s,
    $b: "TransitionPageTurn",
    n: function(a, c, d) {
        this.Yp = d;
        I.$.prototype.n.call(this, a, c);
        return p
    },
    Nn: function(a) {
        return this.Yp ? I.VK(I.HX(this.q, a)) : I.HX(this.q, a)
    },
    U: function() {
        I.$.prototype.U.call(this);
        var a = I.O.kb(),
            c;
        a.width > a.height ? (a = 16, c = 12) : (a = 12, c = 16);
        a = this.Nn(I.size(a, c));
        c = this.Nb;
        this.Yp ? (c.im(this.ha), c.U(), this.ha.visible = u, c.ma(I.Ha(a, I.Db(this.finish, this), I.Sw())), this.ha.ma(I.show())) :
            (c.im(this.Ma), c.U(), c.ma(I.Ha(a, I.Db(this.finish, this), I.Sw())))
    },
    ia: function() {
        this.Yp ? this.Ma.ia() : this.ha.ia();
        this.Nb.ia()
    },
    wh: function() {
        this.ug = this.Yp
    }
});
I.qE.create = function(a, c, d) {
    return new I.qE(a, c, d)
};
(function() {
    function a(a, c) {
        return (c - a.nY) * a.SC
    }

    function c(a, c) {
        return (a.oY - c) * a.SC
    }

    function d(a, c, d, e, f, g) {
        var h;
        h = a.Lg + c.Lg;
        var k = a.Na,
            n = d.x * d.x * k;
        a = -d.x * d.y * k;
        d = h + d.y * d.y * k;
        h += n;
        k = c.Na;
        c = e.x * e.x * k;
        n = -e.x * e.y * k;
        d += e.y * e.y * k;
        e = 0 + a + n;
        a = 0 + a + n;
        h += c;
        c = d * h - e * a;
        na(0 !== c, "Unsolvable constraint.");
        c = 1 / c;
        f.x = h * c;
        f.y = -e * c;
        g.x = -a * c;
        g.y = d * c
    }

    function e(a, c, d, e, g) {
        a = f(a, d, g) + f(c, e, g);
        na(0 !== a, "Unsolvable collision or constraint.");
        return a
    }

    function f(a, c, d) {
        c = xa(c, d);
        return a.Lg + a.Na * c * c
    }

    function g(a, c, d, e) {
        a.bp +=
            c * a.Lg;
        a.dp += d * a.Lg;
        a.Ck += a.Na * (e.x * d - e.y * c)
    }

    function h(a, c, d, e, f, g) {
        k(a, -f, -g, d);
        k(c, f, g, e)
    }

    function k(a, c, d, e) {
        a.sd += c * a.Lg;
        a.td += d * a.Lg;
        a.m += a.Na * (e.x * d - e.y * c)
    }

    function n(a, c, d, e, f) {
        return (c.sd + -e.y * c.m - (a.sd + -d.y * a.m)) * f.x + (c.td + e.x * c.m - (a.td + d.x * a.m)) * f.y
    }

    function r(a, c, d, e) {
        return new G(c.sd + -e.y * c.m - (a.sd + -d.y * a.m), c.td + e.x * c.m - (a.td + d.x * a.m))
    }

    function t(a) {
        var c = a.body;
        a.update(c.d, c.uc)
    }

    function v(a, c) {
        if (!c.Lh()) {
            var d = c ? c.tk : s;
            if (d == s) {
                c.tk = a;
                c !== a && (c.Ng = a.Ng, a.Ng = c);
                for (d = c.Hl; d; d = d.next(c)) v(a,
                    c == d.Xb ? d.Dg : d.Xb);
                for (d = c.pv; d; d = d.next(c)) v(a, c == d.a ? d.b : d.a)
            } else na(d === a, "Internal Error: Inconsistency detected in the contact graph.")
        }
    }

    function B(a) {
        O(!a.vo, "This addition/removal cannot be done safely during a call to cpSpaceStep()  or during a query. Put these calls into a post-step callback.")
    }

    function w(a, c, d, e, f) {
        for (var g = xa(c.Zh, c.Id), h = xa(c.Zh, c.Fe), k = S(c.Zh, f), n = d.Yh, r = 0; r < n.length; r += 2) {
            var t = n[r],
                v = n[r + 1];
            if (t * k.x + v * k.y < X(c.Zh, c.Id) * f + c.r) {
                var w = c.Zh.x * v - c.Zh.y * t;
                g >= w && w >= h && a.push(new L(new G(t,
                    v), k, e, oa(d.tc, r)))
            }
        }
    }

    function z(a, c, d) {
        var e = X(c, a.Id) - a.r;
        a = X(c, a.Fe) - a.r;
        return ba(e, a) - d
    }

    function x(a, c, d, e) {
        for (var f = [], g = a.Yh, h = 0; h < g.length; h += 2) {
            var k = g[h],
                n = g[h + 1];
            c.qv(k, n) && f.push(new L(new G(k, n), d, e, oa(a.tc, h >> 1)))
        }
        g = c.Yh;
        for (h = 0; h < g.length; h += 2) k = g[h], n = g[h + 1], a.qv(k, n) && f.push(new L(new G(k, n), d, e, oa(c.tc, h >> 1)));
        if (!f.length) {
            f = [];
            g = a.Yh;
            for (h = 0; h < g.length; h += 2) k = g[h], n = g[h + 1], c.$I(k, n, Na(d)) && f.push(new L(new G(k, n), d, e, oa(a.tc, h)));
            g = c.Yh;
            for (h = 0; h < g.length; h += 2) k = g[h], n = g[h + 1],
                a.$I(k, n, d) && f.push(new L(new G(k, n), d, e, oa(c.tc, h)))
        }
        return a = f
    }

    function F(a, c) {
        var d = 0,
            e = a.Xw(c[0].fa, c[0].I);
        if (0 < e) return -1;
        for (var f = 1; f < c.length; f++) {
            var g = a.Xw(c[f].fa, c[f].I);
            if (0 < g) return -1;
            g > e && (e = g, d = f)
        }
        nb = e;
        return d
    }

    function K(a, c, d, e) {
        e = d + e;
        c = T(c, a);
        var f = Ea(c);
        if (!(f >= e * e)) return f = Math.sqrt(f), new L(Q(a, S(c, 0.5 + (d - 0.5 * e) / (f ? f : Infinity))), f ? S(c, 1 / f) : new G(1, 0), f - e, 0)
    }

    function L(a, c, d, e) {
        this.d = a;
        this.fa = c;
        this.or = d;
        this.ra = this.ta = ga;
        this.Oc = this.Tl = this.Cr = this.Mg = this.KL = this.OI = this.rb =
            0;
        this.hash = e;
        Eb++
    }

    function N(a, c, d) {
        c ? c.Xb === a ? c.Uo = d : c.Wo = d : a.Hl = d;
        d && (d.Xb === a ? d.Vo = c : d.Xo = c)
    }

    function H(a, c) {
        this.u = this.Ml = 0;
        this.JL = ga;
        this.a = a;
        this.Xb = a.body;
        this.b = c;
        this.Dg = c.body;
        this.Uf = this.Wo = this.Xo = this.Uo = this.Vo = s;
        this.vc = 0;
        this.RJ = s;
        this.PZ = u;
        this.state = "first coll"
    }

    function J(a, c) {
        !a.Wv && 10 >= c && (J(a.ud, c + 1), J(a.Ge, c + 1));
        for (var d = "", e = 0; e < c; e++) d += " ";
        console.log(d + a.Za + " " + a.$a)
    }

    function aa(a, c) {
        return a.bb <= c.cb && c.bb <= a.cb && a.Za <= c.$a && c.Za <= a.$a
    }

    function la(a, c, d) {
        if (c == a) return s;
        var e = c.parent;
        if (e == a) return c = a.qK(c), c.parent = a.parent, a.am(d), c;
        e.parent.replaceChild(e, e.qK(c), d);
        return a
    }

    function ka(a, c, d) {
        a.eK(c) && (a.Wv ? d(a.ij) : (ka(a.ud, c, d), ka(a.Ge, c, d)))
    }

    function ja(a, c, d) {
        if (a == s) return c;
        if (a.Wv) return d.sX(c, a);
        var e = a.Ge.iB() + ra(a.ud, c),
            f = a.ud.iB() + ra(a.Ge, c);
        e === f && (e = qa(a.ud, c), f = qa(a.Ge, c));
        f < e ? a.GC(ja(a.Ge, c, d)) : a.FC(ja(a.ud, c, d));
        a.bb = ba(a.bb, c.bb);
        a.Za = ba(a.Za, c.Za);
        a.cb = ea(a.cb, c.cb);
        a.$a = ea(a.$a, c.$a);
        return a
    }

    function qa(a, c) {
        return Math.abs(a.bb + a.cb - c.bb -
            c.cb) + Math.abs(a.Za + a.$a - c.Za - c.$a)
    }

    function ra(a, c) {
        return (ea(a.cb, c.cb) - ba(a.bb, c.bb)) * (ea(a.$a, c.$a) - ba(a.Za, c.Za))
    }

    function sa(a, c, d) {
        var e = a.vk,
            f = c.vk;
        d = d.tX(a, e, c, f);
        a.vk = c.vk = d;
        e && (e.rk === a ? e.$l = d : e.Vr = d);
        f && (f.rk === c ? f.$l = d : f.Vr = d)
    }

    function ta(a, c, d) {
        d && (d.rk === c ? d.$l = a : d.Vr = a);
        a ? a.rk === c ? a.Lr = d : a.Mr = d : c.vk = d
    }

    function ua(a, c, d, e) {
        this.$l = s;
        this.rk = a;
        this.Lr = c;
        this.Vr = s;
        this.fC = d;
        this.Mr = e
    }

    function Z(a, c) {
        this.ij = c;
        a.IB(c, this);
        this.parent = s;
        this.vc = 1;
        this.vk = s;
        Fb++
    }

    function $(a, c, d) {
        this.ij =
            s;
        this.bb = ba(c.bb, d.bb);
        this.Za = ba(c.Za, d.Za);
        this.cb = ea(c.cb, d.cb);
        this.$a = ea(c.$a, d.$a);
        this.parent = s;
        this.FC(c);
        this.GC(d)
    }

    function va(a, c) {
        this.fa = a;
        this.I = c
    }

    function wa(a) {
        for (var c = a.length, d = 0; d < c; d += 2) {
            var e = a[(d + 2) % c],
                f = a[(d + 3) % c];
            if (0 < (e - a[d]) * (a[(d + 5) % c] - f) - (f - a[d + 1]) * (a[(d + 4) % c] - e)) return u
        }
        return p
    }

    function W(a, c, d) {
        return ba(ea(a, c), d)
    }

    function ma(a, c, d, e, f, g, h, k) {
        if (0 > e) return 0;
        if (0 == e) return c[2 * k] = g.x, c[2 * k + 1] = g.y, 1;
        var n = tb(c, d, e, f, g, a),
            r = new G(c[2 * d], c[2 * d + 1]);
        f = ma(a, c, d + 1, n - 1,
            f, r, g, k);
        r = k + f++;
        c[2 * r] = g.x;
        c[2 * r + 1] = g.y;
        e = tb(c, d + n, e - n, g, h, a);
        r = new G(c[2 * (d + n)], c[2 * (d + n) + 1]);
        return f + ma(a, c, d + n + 1, e - 1, g, r, h, k + f)
    }

    function tb(a, c, d, e, f, g) {
        if (0 === d) return 0;
        var h = 0,
            k = c;
        f = T(f, e);
        g *= Ga(f);
        var n = c;
        for (d = c + d - 1; n <= d;) {
            var r = new G(a[2 * n], a[2 * n + 1]),
                r = xa(f, T(r, e));
            r > g ? (r > h && (h = r, k = n), n++) : (Xa(a, n, d), d--)
        }
        k != c && Xa(a, c, k);
        return n - c
    }

    function Xa(a, c, d) {
        var e = a[2 * c];
        a[2 * c] = a[2 * d];
        a[2 * d] = e;
        e = a[2 * c + 1];
        a[2 * c + 1] = a[2 * d + 1];
        a[2 * d + 1] = e
    }

    function Oa(a, c) {
        for (var d = 0; d < a.length; d++)
            if (a[d] === c) {
                a[d] =
                    a[a.length - 1];
                a.length--;
                break
            }
    }

    function oa(a, c) {
        return a < c ? a + " " + c : c + " " + a
    }

    function Gb(a, c) {
        return a > c ? a : c
    }

    function Hb(a, c) {
        return a < c ? a : c
    }

    function na(a, c) {
        !a && (console && console.warn) && (console.warn("ASSERTION FAILED: " + c), console.trace && console.trace())
    }

    function O(a, c) {
        a || b(Error("Assertion failed: " + c))
    }
    Object.create = Object.create || function(a) {
        function c() {}
        c.prototype = a;
        return new c
    };
    var C;
    "undefined" === typeof exports ? (C = {}, "object" === typeof window && (window.cp = C)) : C = exports;
    var ba, ea;
    "object" ===
    typeof window && -1 < window.navigator.userAgent.indexOf("Firefox") ? (ba = Math.min, ea = Math.max) : (ba = Hb, ea = Gb);
    C.R9 = function(a, c, d, e) {
        return a * (0.5 * (c * c + d * d) + Ea(e))
    };
    C.V3 = function(a, c) {
        return Math.PI * Math.abs(a * a - c * c)
    };
    C.S9 = function(a, c, d) {
        var e = S(Q(c, d), 0.5);
        return a * (ub(d, c) / 12 + Ea(e))
    };
    C.X3 = function(a, c, d) {
        return d * (Math.PI * d + 2 * Ib(a, c))
    };
    C.vX = function(a) {
        for (var c = cp.Zw, d = 0, e = 0, f = a.length, g = 0; g < f; g += 2) var h = a[g] + c.x,
            k = a[g + 1] + c.y,
            n = a[(g + 2) % f] + c.x,
            r = a[(g + 3) % f] + c.y,
            t = n * k - r * h,
            d = d + t * (h * h + k * k + (h * n + k * r) + (n * n +
                r * r)),
            e = e + t;
        return 1 * d / (6 * e)
    };
    C.W3 = function(a) {
        for (var c = 0, d = 0, e = a.length; d < e; d += 2) c += xa(new G(a[d], a[d + 1]), new G(a[(d + 2) % e], a[(d + 3) % e]));
        return -c / 2
    };
    C.eU = function(a) {
        for (var c = 0, d = new G(0, 0), e = 0, f = a.length; e < f; e += 2) var g = new G(a[e], a[e + 1]),
            h = new G(a[(e + 2) % f], a[(e + 3) % f]),
            k = xa(g, h),
            c = c + k,
            d = Q(d, S(Q(g, h), k));
        return S(d, 1 / (3 * c))
    };
    C.raa = function(a) {
        for (var c = C.eU(a), d = 0; d < a.length; d += 2) a[d] -= c.x, a[d + 1] -= c.y
    };
    C.uX = function(a, c, d) {
        return a * (c * c + d * d) / 12
    };
    C.Q9 = function(a, c) {
        var d = c.r - c.ro,
            e = c.of - c.b,
            f = S([c.ro +
                c.r, c.b + c.of
            ], 0.5);
        return C.uX(a, d, e) + a * Ea(f)
    };
    var Jb = C.M9 = function(a) {
        var c = 0,
            d = 0,
            e, f, g, h;
        e = g = a[0];
        f = h = a[1];
        for (var k = a.length >> 1, n = 1; n < k; n++) {
            var r = a[2 * n],
                t = a[2 * n + 1];
            if (r < e || r == e && t < f) e = r, f = t, c = n;
            else if (r > g || r == g && t > h) g = r, h = t, d = n
        }
        return [c, d]
    };
    C.A4 = function(a, c, d) {
        if (c)
            for (var e = 0; e < a.length; e++) c[e] = a[e];
        else c = a;
        var f = Jb(a),
            e = f[0],
            f = f[1];
        if (e == f) return c.length = 2, c;
        Xa(c, 0, e);
        Xa(c, 1, 0 == f ? e : f);
        e = new G(c[0], c[1]);
        f = new G(c[2], c[3]);
        a = ma(d, c, 2, (a.length >> 1) - 2, e, f, e, 1) + 1;
        c.length = 2 * a;
        na(wa(c), "Internal error: cpConvexHull() and cpPolyValidate() did not agree.Please report this error with as much info as you can.");
        return c
    };
    var G = C.p2 = function(a, c) {
        this.x = a;
        this.y = c
    };
    C.v = function(a, c) {
        return new G(a, c)
    };
    var ga = C.Zw = new G(0, 0),
        X = C.v.Ui = function(a, c) {
            return a.x * c.x + a.y * c.y
        },
        Ga = C.v.B9 = function(a) {
            return Math.sqrt(X(a, a))
        };
    C.v.C9 = function(a, c) {
        return Math.sqrt(a * a + c * c)
    };
    C.v.J5 = function(a, c) {
        return a.x === c.x && a.y === c.y
    };
    var Q = C.v.add = function(a, c) {
        return new G(a.x + c.x, a.y + c.y)
    };
    G.prototype.add = function(a) {
        this.x += a.x;
        this.y += a.y;
        return this
    };
    var T = C.v.sub = function(a, c) {
        return new G(a.x - c.x, a.y - c.y)
    };
    G.prototype.sub =
        function(a) {
            this.x -= a.x;
            this.y -= a.y;
            return this
        };
    var Na = C.v.yX = function(a) {
        return new G(-a.x, -a.y)
    };
    G.prototype.yX = function() {
        this.x = -this.x;
        this.y = -this.y;
        return this
    };
    var S = C.v.jC = function(a, c) {
        return new G(a.x * c, a.y * c)
    };
    G.prototype.jC = function(a) {
        this.x *= a;
        this.y *= a;
        return this
    };
    var xa = C.v.Fg = function(a, c) {
            return a.x * c.y - a.y * c.x
        },
        Qa = C.v.daa = function(a) {
            return new G(-a.y, a.x)
        };
    C.v.kaa = function(a) {
        return new G(a.y, -a.x)
    };
    var Kb = C.v.TX = function(a, c) {
        return S(c, X(a, c) / Ea(c))
    };
    G.prototype.TX = function(a) {
        this.jC(X(this,
            a) / Ea(a));
        return this
    };
    var fa = C.v.rotate = function(a, c) {
        return new G(a.x * c.x - a.y * c.y, a.x * c.y + a.y * c.x)
    };
    G.prototype.rotate = function(a) {
        this.x = this.x * a.x - this.y * a.y;
        this.y = this.x * a.y + this.y * a.x;
        return this
    };
    var Lb = C.v.yda = function(a, c) {
            return new G(a.x * c.x + a.y * c.y, a.y * c.x - a.x * c.y)
        },
        Ea = C.v.D9 = function(a) {
            return X(a, a)
        };
    C.v.E9 = function(a, c) {
        return a * a + c * c
    };
    C.v.gC = function(a, c, d) {
        return Q(S(a, 1 - d), S(c, d))
    };
    var Ra = C.v.normalize = function(a) {
            return S(a, 1 / Ga(a))
        },
        vb = C.v.f$ = function(a) {
            return 0 === a.x && 0 === a.y ?
                ga : Ra(a)
        },
        Sa = C.v.hr = function(a, c) {
            return X(a, a) > c * c ? S(Ra(a), c) : a
        };
    C.v.F9 = function(a, c, d) {
        return Q(a, Sa(T(c, a), d))
    };
    var Ib = C.v.or = function(a, c) {
            return Ga(T(a, c))
        },
        ub = C.v.O4 = function(a, c) {
            return Ea(T(a, c))
        };
    C.v.Y9 = function(a, c, d) {
        return ub(a, c) < d * d
    };
    var Mb = C.v.DZ = function(a, c, d) {
        var e = Math.acos(X(a, c));
        if (e) {
            var f = 1 / Math.sin(e);
            return Q(S(a, Math.sin((1 - d) * e) * f), S(c, Math.sin(d * e) * f))
        }
        return a
    };
    C.v.Tca = function(a, c, d) {
        var e = Math.acos(X(a, c));
        return Mb(a, c, ba(d, e) / e)
    };
    C.v.h6 = function(a) {
        return new G(Math.cos(a),
            Math.sin(a))
    };
    C.v.rda = function(a) {
        return Math.atan2(a.y, a.x)
    };
    C.v.bda = function(a) {
        return "(" + a.x.toFixed(3) + ", " + a.y.toFixed(3) + ")"
    };
    var Nb = 0,
        Ya = C.H_ = function(a, c, d, e) {
            this.ro = a;
            this.b = c;
            this.r = d;
            this.of = e;
            Nb++
        };
    C.e4 = function(a, c, d, e) {
        return new Ya(a, c, d, e)
    };
    var wb = 0;
    C.m1 = 0;
    var Ob = C.A_ = -1;
    C.Qaa = function() {
        wb = 0
    };
    var ha = C.Q1 = function(a) {
        this.body = a;
        this.bb = this.Za = this.cb = this.$a = 0;
        this.tc = wb++;
        this.aL = u;
        this.u = this.Ml = 0;
        this.IL = ga;
        this.group = this.Tn = 0;
        this.eC = Ob;
        this.fb = s;
        this.$e = this.$e
    };
    ha.prototype.Iw =
        A("Ml");
    ha.prototype.Jw = function(a) {
        this.body.ld();
        this.u = a
    };
    ha.prototype.Kw = function(a) {
        this.body.ld();
        this.eC = a
    };
    ha.prototype.Fw = function(a) {
        this.body.ld();
        this.Tn = a
    };
    ha.prototype.mk = D("body");
    ha.prototype.sT = function() {
        return this.body && -1 !== this.body.oj.indexOf(this)
    };
    ha.prototype.Dw = function(a) {
        O(!this.sT(), "You cannot change the body on an active shape. You must remove the shape from the space before changing the body.");
        this.body = a
    };
    ha.prototype.update = function(a, c) {
        O(!isNaN(c.x), "Rotation is NaN");
        O(!isNaN(a.x), "Position is NaN");
        this.jB(a, c)
    };
    ha.prototype.IB = function() {
        return new Ya(this.bb, this.Za, this.cb, this.$a)
    };
    var Za = C.zM = function(a, c, d) {
        this.c = this.pf = d;
        this.r = c;
        this.type = "circle";
        ha.call(this, a)
    };
    Za.prototype = Object.create(ha.prototype);
    Za.prototype.jB = function(a, c) {
        var d = this.pf = fa(this.c, c).add(a),
            e = this.r;
        this.bb = d.x - e;
        this.Za = d.y - e;
        this.cb = d.x + e;
        this.$a = d.y + e
    };
    var $a = C.ym = function(a, c, d, e) {
        this.a = c;
        this.b = d;
        this.fa = Qa(Ra(T(d, c)));
        this.Id = this.Fe = this.Zh = s;
        this.r = e;
        this.VT = this.nT =
            ga;
        this.type = "segment";
        ha.call(this, a)
    };
    $a.prototype = Object.create(ha.prototype);
    $a.prototype.jB = function(a, c) {
        this.Id = Q(a, fa(this.a, c));
        this.Fe = Q(a, fa(this.b, c));
        this.Zh = fa(this.fa, c);
        var d, e, f, g;
        this.Id.x < this.Fe.x ? (d = this.Id.x, e = this.Fe.x) : (d = this.Fe.x, e = this.Id.x);
        this.Id.y < this.Fe.y ? (f = this.Id.y, g = this.Fe.y) : (f = this.Fe.y, g = this.Id.y);
        var h = this.r;
        this.bb = d - h;
        this.Za = f - h;
        this.cb = e + h;
        this.$a = g + h
    };
    var Aa = C.Fx = function(a, c, d) {
        this.wZ(c, d);
        this.type = "poly";
        ha.call(this, a)
    };
    Aa.prototype = Object.create(ha.prototype);
    Aa.prototype.wZ = function(a, c) {
        O(4 <= a.length, "Polygons require some verts");
        O("number" === typeof a[0], "Polygon verticies should be specified in a flattened list (eg [x1,y1,x2,y2,x3,y3,...])");
        O(wa(a), "Polygon is concave or has a reversed winding. Consider using cpConvexHull()");
        var d = a.length,
            e = d >> 1;
        this.Kd = Array(d);
        this.Yh = Array(d);
        this.zK = Array(e);
        this.Xh = Array(e);
        for (e = 0; e < d; e += 2) {
            var f = a[e] + c.x,
                g = a[e + 1] + c.y,
                h = Ra(Qa(new G(a[(e + 2) % d] + c.x - f, a[(e + 3) % d] + c.y - g)));
            this.Kd[e] = f;
            this.Kd[e + 1] = g;
            this.zK[e >>
                1] = new va(h, h.x * f + h.y * g);
            this.Xh[e >> 1] = new va(new G(0, 0), 0)
        }
    };
    C.U_ = function(a, c, d) {
        c /= 2;
        d /= 2;
        return Pb(a, new Ya(-c, -d, c, d))
    };
    var Pb = C.V_ = function(a, c) {
        return new Aa(a, [c.ro, c.b, c.ro, c.of, c.r, c.of, c.r, c.b], ga)
    };
    Aa.prototype.f_ = function(a, c) {
        for (var d = this.Kd, e = this.Yh, f = Infinity, g = -Infinity, h = Infinity, k = -Infinity, n = 0; n < d.length; n += 2) {
            var r = d[n],
                t = d[n + 1],
                v = a.x + r * c.x - t * c.y,
                r = a.y + r * c.y + t * c.x;
            e[n] = v;
            e[n + 1] = r;
            f = ba(f, v);
            g = ea(g, v);
            h = ba(h, r);
            k = ea(k, r)
        }
        this.bb = f;
        this.Za = h;
        this.cb = g;
        this.$a = k
    };
    Aa.prototype.e_ =
        function(a, c) {
            for (var d = this.zK, e = this.Xh, f = 0; f < d.length; f++) {
                var g = fa(d[f].fa, c);
                e[f].fa = g;
                e[f].I = X(a, g) + d[f].I
            }
        };
    Aa.prototype.jB = function(a, c) {
        this.e_(a, c);
        this.f_(a, c)
    };
    Aa.prototype.Xw = function(a, c) {
        for (var d = this.Yh, e = a.x * d[0] + a.y * d[1], f = 2; f < d.length; f += 2) e = ba(e, a.x * d[f] + a.y * d[f + 1]);
        return e - c
    };
    Aa.prototype.qv = function(a, c) {
        for (var d = this.Xh, e = 0; e < d.length; e++) {
            var f = d[e].fa;
            if (0 < f.x * a + f.y * c - d[e].I) return u
        }
        return p
    };
    Aa.prototype.$I = function(a, c, d) {
        for (var e = this.Xh, f = 0; f < e.length; f++) {
            var g =
                e[f].fa;
            if (!(0 > X(g, d)) && 0 < g.x * a + g.y * c - e[f].I) return u
        }
        return p
    };
    var R = C.oD = function(a, c) {
        this.d = new G(0, 0);
        this.sd = this.td = 0;
        this.Xn = new G(0, 0);
        this.of = this.m = 0;
        this.eD = this.cD = Infinity;
        this.Ck = this.bp = this.dp = 0;
        this.fb = s;
        this.oj = [];
        this.Ng = this.tk = this.pv = this.Hl = s;
        this.hj = 0;
        this.OY(a);
        this.SY(c);
        this.uc = new G(0, 0);
        this.uY()
    };
    C.b2 = function() {
        var a = new R(Infinity, Infinity);
        a.hj = Infinity;
        return a
    };
    if ("undefined" !== typeof DEBUG && DEBUG) {
        var ob = function(a, c) {
                O(a.x == a.x && a.y == a.y, c)
            },
            pb = function(a, c) {
                O(Infinity !==
                    Math.abs(a.x) && Infinity !== Math.abs(a.y), c)
            };
        R.prototype.cs = function() {
            O(this.Jr === this.Jr && this.Lg === this.Lg, "Body's mass is invalid.");
            O(this.ko === this.ko && this.Na === this.Na, "Body's moment is invalid.");
            var a = this.d;
            ob(a, "Body's position is invalid.");
            pb(a, "Body's position is invalid.");
            a = this.Xn;
            ob(a, "Body's force is invalid.");
            pb(a, "Body's force is invalid.");
            O(this.sd === this.sd && Infinity !== Math.abs(this.sd), "Body's velocity is invalid.");
            O(this.td === this.td && Infinity !== Math.abs(this.td), "Body's velocity is invalid.");
            O(this.a === this.a && Infinity !== Math.abs(this.a), "Body's angle is invalid.");
            O(this.m === this.m && Infinity !== Math.abs(this.m), "Body's angular velocity is invalid.");
            O(this.of === this.of && Infinity !== Math.abs(this.of), "Body's torque is invalid.");
            a = this.uc;
            ob(a, "Body's rotation vector is invalid.");
            pb(a, "Body's rotation vector is invalid.");
            O(this.cD === this.cD, "Body's velocity limit is invalid.");
            O(this.eD === this.eD, "Body's angular velocity limit is invalid.")
        }
    } else R.prototype.cs = y();
    R.prototype.bj = function() {
        return this.tk !==
            s
    };
    R.prototype.fe = function() {
        return Infinity === this.hj
    };
    R.prototype.Lh = function() {
        return this.fb === s
    };
    R.prototype.OY = function(a) {
        O(0 < a, "Mass must be positive and non-zero.");
        this.ld();
        this.Jr = a;
        this.Lg = 1 / a
    };
    R.prototype.SY = function(a) {
        O(0 < a, "Moment of Inertia must be positive and non-zero.");
        this.ld();
        this.ko = a;
        this.Na = 1 / a
    };
    R.prototype.Gl = function(a) {
        this.oj.push(a)
    };
    R.prototype.as = function(a) {
        Oa(this.oj, a)
    };
    R.prototype.qL = function(a) {
        this.ld();
        this.cs();
        a === ga && (a = C.v(0, 0));
        this.d = a
    };
    R.prototype.Qw =
        function(a) {
            this.ld();
            this.sd = a.x;
            this.td = a.y
        };
    R.prototype.eL = function(a) {
        O(!isNaN(a), "Internal Error: Attempting to set body's angle to NaN");
        this.a = a;
        this.uc.x = Math.cos(a);
        this.uc.y = Math.sin(a)
    };
    R.prototype.uY = function() {
        this.ld();
        this.cs();
        this.eL(0)
    };
    R.prototype.m_ = function(a, c, d) {
        var e = this.sd * c + (a.x + this.Xn.x * this.Lg) * d;
        a = this.td * c + (a.y + this.Xn.y * this.Lg) * d;
        var f = this.cD,
            g = e * e + a * a,
            f = g > f * f ? f / Math.sqrt(g) : 1;
        this.sd = e * f;
        this.td = a * f;
        e = this.eD;
        this.m = W(this.m * c + this.of * this.Na * d, -e, e);
        this.cs()
    };
    R.prototype.PX = function(a) {
        this.d.x += (this.sd + this.bp) * a;
        this.d.y += (this.td + this.dp) * a;
        this.eL(this.a + (this.m + this.Ck) * a);
        this.Ck = this.bp = this.dp = 0;
        this.cs()
    };
    R.prototype.RT = function() {
        var a = cp.v(0, -1800),
            c = cp.v(0, 20);
        this.ld();
        this.Xn = Q(this.Xn, a);
        this.of += xa(c, a)
    };
    R.prototype.ze = function(a, c) {
        this.ld();
        k(this, a.x, a.y, c)
    };
    R.prototype.yv = function(a) {
        for (var c = 0, d = this.oj.length; c < d; c++) a(this.oj[c])
    };
    R.prototype.xv = function(a) {
        for (var c = this.pv; c;) {
            var d = c.next(this);
            a(c);
            c = d
        }
    };
    R.prototype.Kg = function(a) {
        return Q(this.d,
            fa(a, this.uc))
    };
    R.prototype.aM = function(a) {
        return Lb(T(a, this.d), this.uc)
    };
    R.prototype.lX = function() {
        var a = this.sd * this.sd + this.td * this.td,
            c = this.m * this.m;
        return (a ? a * this.Jr : 0) + (c ? c * this.ko : 0)
    };
    var qb = C.T1 = function(a) {
        if (this.FL = a) a.Wn && b(Error("This static index is already associated with a dynamic index.")), a.Wn = this
    };
    qb.prototype.iU = function(a, c) {
        if (0 < a.count) {
            var d = a.XX;
            this.Nl(function(a) {
                d(a, new Ya(a.bb, a.Za, a.cb, a.$a), c)
            })
        }
    };
    var ia = C.I_ = function(a) {
        qb.call(this, a);
        this.l_ = s;
        this.so = {};
        this.count =
            0;
        this.nw = this.mw = this.root = s;
        this.vc = 0
    };
    ia.prototype = Object.create(qb.prototype);
    var Qb = 0;
    ia.prototype.sX = function(a, c) {
        var d = this.mw;
        if (d) return this.mw = d.parent, d.constructor(this, a, c), d;
        Qb++;
        return new $(0, a, c)
    };
    var Fb = 0;
    ia.prototype.IB = function(a, c) {
        var d = this.l_;
        if (d) {
            var e = 0.1 * (a.cb - a.bb),
                f = 0.1 * (a.$a - a.Za),
                d = S(d(a), 0.1);
            c.bb = a.bb + ba(-e, d.x);
            c.Za = a.Za + ba(-f, d.y);
            c.cb = a.cb + ea(e, d.x);
            c.$a = a.$a + ea(f, d.y)
        } else c.bb = a.bb, c.Za = a.Za, c.cb = a.cb, c.$a = a.$a
    };
    ia.prototype.QB = function() {
        var a = this.Wn;
        return a &&
            a.vc ? a.vc : this.vc
    };
    ia.prototype.UJ = function() {
        this.Wn && this.Wn.vc ? this.Wn.vc++ : this.vc++
    };
    var Rb = 0;
    ia.prototype.tX = function(a, c, d, e) {
        var f = this.nw;
        if (f) return this.nw = f.$l, f.$l = s, f.rk = a, f.Lr = c, f.Vr = s, f.fC = d, f.Mr = e, f;
        Rb++;
        return new ua(a, c, d, e)
    };
    ua.prototype.am = function(a) {
        this.$l = a.nw;
        a.nw = this
    };
    Z.prototype.WI = function(a) {
        var c = this.vk,
            d;
        for (this.vk = s; c;) c.rk === this ? (d = c.Lr, ta(c.Vr, c.fC, c.Mr)) : (d = c.Mr, ta(c.$l, c.rk, c.Lr)), c.am(a), c = d
    };
    $.prototype.am = function(a) {
        this.parent = a.mw;
        a.mw = this
    };
    Z.prototype.am =
        y();
    $.prototype.FC = function(a) {
        this.ud = a;
        a.parent = this
    };
    $.prototype.GC = function(a) {
        this.Ge = a;
        a.parent = this
    };
    Z.prototype.Wv = p;
    $.prototype.Wv = u;
    $.prototype.qK = function(a) {
        return this.ud == a ? this.Ge : this.ud
    };
    $.prototype.replaceChild = function(a, c, d) {
        na(a == this.ud || a == this.Ge, "Node is not a child of parent.");
        this.ud == a ? (this.ud.am(d), this.FC(c)) : (this.Ge.am(d), this.GC(c));
        for (a = this; a; a = a.parent) c = a.ud, d = a.Ge, a.bb = ba(c.bb, d.bb), a.Za = ba(c.Za, d.Za), a.cb = ea(c.cb, d.cb), a.$a = ea(c.$a, d.$a)
    };
    $.prototype.iB = Z.prototype.iB =
        function() {
            return (this.cb - this.bb) * (this.$a - this.Za)
        };
    $.prototype.eK = Z.prototype.eK = function(a) {
        return this.bb <= a.r && a.ro <= this.cb && this.Za <= a.of && a.b <= this.$a
    };
    Z.prototype.Wl = function(a, c, d, e) {
        aa(a, this) && (c ? sa(a, this, d) : (this.vc < a.vc && sa(this, a, d), e && e(a.ij, this.ij)))
    };
    $.prototype.Wl = function(a, c, d, e) {
        aa(a, this) && (this.ud.Wl(a, c, d, e), this.Ge.Wl(a, c, d, e))
    };
    Z.prototype.Kr = function(a, c, d) {
        if (this.vc == a.QB()) {
            c && c.Wl(this, u, a, d);
            for (c = this; c.parent; c = c.parent) c == c.parent.ud ? c.parent.Ge.Wl(this, p, a,
                d) : c.parent.ud.Wl(this, u, a, d)
        } else
            for (a = this.vk; a;) this === a.fC ? (d && d(a.rk.ij, this.ij), a = a.Mr) : a = a.Lr
    };
    $.prototype.Kr = function(a, c, d) {
        this.ud.Kr(a, c, d);
        this.Ge.Kr(a, c, d)
    };
    Z.prototype.qU = function(a) {
        return this.bb <= a.bb && this.cb >= a.cb && this.Za <= a.Za && this.$a >= a.$a
    };
    Z.prototype.update = function(a) {
        var c = a.root;
        return !this.qU(this.ij) ? (a.IB(this.ij, this), c = la(c, this, a), a.root = ja(c, this, a), this.WI(a), this.vc = a.QB(), p) : u
    };
    Z.prototype.wT = function(a) {
        var c = a.Wn;
        c ? (a = c.root) && a.Wl(this, p, c, s) : this.Kr(a, a.FL.root,
            s)
    };
    ia.prototype.yr = function(a, c) {
        var d = new Z(this, a);
        this.so[c] = d;
        this.root = ja(this.root, d, this);
        this.count++;
        d.vc = this.QB();
        d.wT(this);
        this.UJ()
    };
    ia.prototype.remove = function(a, c) {
        var d = this.so[c];
        delete this.so[c];
        this.root = la(this.root, d, this);
        this.count--;
        d.WI(this);
        d.am(this)
    };
    ia.prototype.ZX = function(a) {
        if (this.root) {
            var c, d = this.so;
            for (c in d) d[c].update(this);
            d = (c = this.FL) && c.root;
            this.root.Kr(this, d, a);
            c && !d && this.iU(this, c);
            this.UJ()
        }
    };
    ia.prototype.XX = function(a, c) {
        this.root && ka(this.root,
            a, c)
    };
    ia.prototype.count = D("count");
    ia.prototype.Nl = function(a) {
        for (var c in this.so) a(this.so[c].ij)
    };
    ia.prototype.log = function() {
        this.root && J(this.root, 0)
    };
    var ab = C.c0 = function() {
        this.a = this.b = 0
    };
    ab.prototype.Rf = E(p);
    ab.prototype.pC = E(p);
    H.prototype.yW = function() {
        this.state = "ignore"
    };
    H.prototype.VW = function() {
        return "first coll" === this.state
    };
    H.prototype.QL = function() {
        N(this.Xb, this.Vo, this.Uo);
        N(this.Dg, this.Xo, this.Wo);
        this.Xo = this.Wo = this.Vo = this.Uo = s
    };
    H.prototype.update = function(a, c, d, e) {
        if (this.Uf)
            for (var f =
                    0; f < this.Uf.length; f++)
                for (var g = this.Uf[f], h = 0; h < a.length; h++) {
                    var k = a[h];
                    k.hash === g.hash && (k.Oc = g.Oc, k.Tl = g.Tl)
                }
        this.Uf = a;
        this.RJ = c;
        this.PZ = d.Tn !== c.a;
        this.Ml = d.Ml * e.Ml;
        this.u = d.u * e.u;
        this.JL = T(d.IL, e.IL);
        this.a = d;
        this.Xb = d.body;
        this.b = e;
        this.Dg = e.body;
        "cached" == this.state && (this.state = "first coll")
    };
    H.prototype.lf = function(a, c, d) {
        for (var f = this.Xb, g = this.Dg, h = 0; h < this.Uf.length; h++) {
            var k = this.Uf[h];
            k.ra = T(k.d, f.d);
            k.ta = T(k.d, g.d);
            k.Mg = 1 / e(f, g, k.ra, k.ta, k.fa);
            k.KL = 1 / e(f, g, k.ra, k.ta, Qa(k.fa));
            k.rb = -d * ba(0, k.or + c) / a;
            k.Cr = 0;
            k.OI = n(f, g, k.ra, k.ta, k.fa) * this.Ml
        }
    };
    H.prototype.Qf = function(a) {
        if (!this.VW())
            for (var c = this.Xb, d = this.Dg, e = 0; e < this.Uf.length; e++) {
                var f = this.Uf[e],
                    g = f.fa.x,
                    k = f.fa.y;
                h(c, d, f.ra, f.ta, (g * f.Oc - k * f.Tl) * a, (g * f.Tl + k * f.Oc) * a)
            }
    };
    var Sb = 0,
        Tb = 0;
    H.prototype.ze = function() {
        Sb++;
        for (var a = this.Xb, c = this.Dg, d = this.JL, e = this.u, f = 0; f < this.Uf.length; f++) {
            Tb++;
            var k = this.Uf[f],
                n = k.Mg,
                r = k.fa,
                t = k.ra,
                v = k.ta,
                w = c.sd - v.y * c.m - (a.sd - t.y * a.m),
                x = c.td + v.x * c.m - (a.td + t.x * a.m),
                z = w * r.x + x * r.y,
                B = (w + d.x) * -r.y +
                (x + d.y) * r.x,
                x = k.Cr;
            k.Cr = ea(x + (k.rb - (r.x * (c.bp - v.y * c.Ck - a.bp + t.y * a.Ck) + r.y * (v.x * c.Ck + c.dp - t.x * a.Ck - a.dp))) * n, 0);
            w = k.Oc;
            k.Oc = ea(w + -(k.OI + z) * n, 0);
            z = e * k.Oc;
            n = k.Tl;
            k.Tl = W(n + -B * k.KL, -z, z);
            z = r.x * (k.Cr - x);
            x = r.y * (k.Cr - x);
            g(a, -z, -x, t);
            g(c, z, x, v);
            w = k.Oc - w;
            k = k.Tl - n;
            h(a, c, t, v, r.x * w - r.y * k, r.x * k + r.y * w)
        }
    };
    H.prototype.next = function(a) {
        return this.Xb == a ? this.Uo : this.Wo
    };
    var Eb = 0,
        ya = [],
        nb = 0;
    Za.prototype.$e = 0;
    $a.prototype.$e = 1;
    Aa.prototype.$e = 2;
    Za.prototype.pB = [function(a, c) {
            var d = K(a.pf, c.pf, a.r, c.r);
            return d ? [d] : ya
        },
        function(a, c) {
            var d = c.Id,
                e = a.pf,
                f = T(c.Fe, d),
                g;
            g = X(f, T(e, d)) / Ea(f);
            g = ea(0, ba(g, 1));
            d = Q(d, S(f, g));
            return (e = K(e, d, a.r, c.r)) ? (d = e.fa, 0 === g && 0 > X(d, c.nT) || 1 === g && 0 > X(d, c.VT) ? ya : [e]) : ya
        },
        function(a, c) {
            for (var d = c.Xh, e = 0, f = X(d[0].fa, a.pf) - d[0].I - a.r, g = 0; g < d.length; g++) {
                var h = X(d[g].fa, a.pf) - d[g].I - a.r;
                if (0 < h) return ya;
                h > f && (f = h, e = g)
            }
            var d = d[e].fa,
                k = c.Yh,
                n = k.length,
                r = e << 1,
                e = k[r],
                g = k[r + 1],
                h = k[(r + 2) % n],
                k = k[(r + 3) % n],
                n = d.x * g - d.y * e,
                r = d.x * k - d.y * h,
                t = xa(d, a.pf);
            return t < r ? (f = K(a.pf, new G(h, k), a.r, 0)) ? [f] : ya : t < n ? [new L(T(a.pf,
                S(d, a.r + f / 2)), Na(d), f, 0)] : (f = K(a.pf, new G(e, g), a.r, 0)) ? [f] : ya
        }
    ];
    $a.prototype.pB = [s, function() {
        return ya
    }, function(a, c) {
        var d = [],
            e = c.Xh,
            f = e.length,
            g = X(a.Zh, a.Id),
            h = c.Xw(a.Zh, g) - a.r,
            g = c.Xw(Na(a.Zh), -g) - a.r;
        if (0 < g || 0 < h) return ya;
        var k = 0,
            n = z(a, e[0].fa, e[0].I);
        if (0 < n) return ya;
        for (var r = 0; r < f; r++) {
            var t = z(a, e[r].fa, e[r].I);
            if (0 < t) return ya;
            t > n && (n = t, k = r)
        }
        e = Na(e[k].fa);
        r = Q(a.Id, S(e, a.r));
        t = Q(a.Fe, S(e, a.r));
        c.qv(r.x, r.y) && d.push(new L(r, e, n, oa(a.tc, 0)));
        c.qv(t.x, t.y) && d.push(new L(t, e, n, oa(a.tc, 1)));
        if (h >=
            n || g >= n) h > g ? w(d, a, c, h, 1) : w(d, a, c, g, -1);
        if (0 === d.length) {
            h = 2 * k;
            g = c.Yh;
            n = new G(g[h], g[h + 1]);
            if ((k = K(a.Id, n, a.r, 0)) || (k = K(a.Fe, n, a.r, 0))) return [k];
            f *= 2;
            f = new G(g[(h + 2) % f], g[(h + 3) % f]);
            if ((k = K(a.Id, f, a.r, 0)) || (k = K(a.Fe, f, a.r, 0))) return [k]
        }
        return d
    }];
    Aa.prototype.pB = [s, s, function(a, c) {
        var d = F(c, a.Xh);
        if (-1 == d) return ya;
        var e = nb,
            f = F(a, c.Xh);
        if (-1 == f) return ya;
        var g = nb;
        return e > g ? x(a, c, a.Xh[d].fa, e) : x(a, c, Na(c.Xh[f].fa), g)
    }];
    var Ub = C.YI = function(a, c) {
            O(a.$e <= c.$e, "Collided shapes must be sorted by type");
            return a.pB[c.$e](a, c)
        },
        xb = new ab,
        Y = C.QO = function() {
            this.hJ = this.vc = 0;
            this.gr = [];
            this.DC = [];
            this.BL = [];
            this.Qo = new ia(s);
            this.El = new ia(this.Qo);
            this.On = [];
            this.w4 = s;
            this.Eh = {};
            this.jr = [];
            this.vo = 0;
            this.oB = {};
            this.GU = xb;
            this.oC = [];
            this.fX = 10;
            this.LJ = ga;
            this.mr = 1;
            this.xW = 0;
            this.QC = Infinity;
            this.lU = 0.1;
            this.jU = Math.pow(0.9, 60);
            this.kU = 3;
            this.F5 = u;
            this.RC = new R(Infinity, Infinity);
            this.RC.hj = Infinity;
            this.YI = this.rX()
        };
    Y.prototype.eB = function(a, c) {
        B(this);
        this.dY(a);
        var d = new ab;
        d.a = 201;
        d.b = a;
        c && (d.Rf =
            c);
        this.oB[oa(201, a)] = d
    };
    Y.prototype.dY = function(a) {
        B(this);
        delete this.oB[oa(201, a)]
    };
    Y.prototype.lK = function(a, c) {
        return this.oB[oa(a, c)] || this.GU
    };
    Y.prototype.Gl = function(a) {
        var c = a.body;
        if (c.fe()) return this.xT(a);
        O(!a.fb, "This shape is already added to a space and cannot be added to another.");
        B(this);
        c.ld();
        c.Gl(a);
        a.update(c.d, c.uc);
        this.El.yr(a, a.tc);
        a.fb = this;
        return a
    };
    Y.prototype.xT = function(a) {
        O(!a.fb, "This shape is already added to a space and cannot be added to another.");
        B(this);
        var c =
            a.body;
        c.Gl(a);
        a.update(c.d, c.uc);
        this.Qo.yr(a, a.tc);
        a.fb = this;
        return a
    };
    Y.prototype.tT = function(a) {
        O(!a.fe(), "Static bodies cannot be added to a space as they are not meant to be simulated.");
        O(!a.fb, "This body is already added to a space and cannot be added to another.");
        B(this);
        this.gr.push(a);
        a.fb = this
    };
    Y.prototype.pJ = function(a, c) {
        for (var d in this.Eh) {
            var e = this.Eh[d];
            if (a === e.Xb && (c === e.a || c === s) || a === e.Dg && (c === e.b || c === s)) e.QL(), Oa(this.On, e), delete this.Eh[d]
        }
    };
    Y.prototype.as = function(a) {
        var c =
            a.body;
        c.fe() ? this.iY(a) : (O(this.ZI(a), "Cannot remove a shape that was not added to the space. (Removed twice maybe?)"), B(this), c.ld(), c.as(a), this.pJ(c, a), this.El.remove(a, a.tc), a.fb = s)
    };
    Y.prototype.iY = function(a) {
        O(this.ZI(a), "Cannot remove a static or sleeping shape that was not added to the space. (Removed twice maybe?)");
        B(this);
        var c = a.body;
        c.fe() && c.rT(a);
        c.as(a);
        this.pJ(c, a);
        this.Qo.remove(a, a.tc);
        a.fb = s
    };
    Y.prototype.ZI = function(a) {
        return a.fb === this
    };
    Y.prototype.h_ = function(a) {
        delete this.Eh[oa(a.a.tc,
            a.b.tc)];
        Oa(this.On, a)
    };
    Y.prototype.yv = function(a) {
        this.dw();
        this.El.Nl(a);
        this.Qo.Nl(a);
        this.Vw(p)
    };
    Y.prototype.xv = function(a) {
        this.dw();
        for (var c = this.jr, d = 0; d < c.length; d++) a(c[d]);
        this.Vw(p)
    };
    Y.prototype.CI = function(a) {
        O(!a.Lh(), "Internal error: Attempting to activate a rogue body.");
        if (this.vo) - 1 === this.DC.indexOf(a) && this.DC.push(a);
        else {
            this.gr.push(a);
            for (var c = 0; c < a.oj.length; c++) {
                var d = a.oj[c];
                this.Qo.remove(d, d.tc);
                this.El.yr(d, d.tc)
            }
            for (c = a.Hl; c; c = c.next(a))
                if (d = c.Xb, a === d || d.fe()) {
                    var d =
                        c.a,
                        e = c.b;
                    this.Eh[oa(d.tc, e.tc)] = c;
                    c.vc = this.vc;
                    c.RJ = this.lK(d.Tn, e.Tn);
                    this.On.push(c)
                }
            for (c = a.pv; c; c = c.Ng) d = c.a, (a === d || d.fe()) && this.jr.push(c)
        }
    };
    Y.prototype.EU = function(a) {
        O(!a.Lh(), "Internal error: Attempting to deactivate a rogue body.");
        Oa(this.gr, a);
        for (var c = 0; c < a.oj.length; c++) {
            var d = a.oj[c];
            this.El.remove(d, d.tc);
            this.Qo.yr(d, d.tc)
        }
        for (d = a.Hl; d; d = d.next(a)) c = d.Xb, (a === c || c.fe()) && this.h_(d);
        for (d = a.pv; d; d = d.Ng) c = d.a, (a === c || c.fe()) && Oa(this.jr, d)
    };
    R.prototype.ld = function() {
        if (!this.Lh()) {
            this.hj =
                0;
            var a = this ? this.tk : s;
            if (a && a.bj()) {
                O(!a.Lh(), "Internal Error: componentActivate() called on a rogue body.");
                for (var c = a.fb, d = a; d;) {
                    var e = d.Ng;
                    d.hj = 0;
                    d.tk = s;
                    d.Ng = s;
                    c.CI(d);
                    d = e
                }
                Oa(c.BL, a)
            }
        }
    };
    R.prototype.rT = function(a) {
        O(this.fe(), "Body.activateStatic() called on a non-static body.");
        for (var c = this.Hl; c; c = c.next(this))
            if (!a || a == c.a || a == c.b)(c.Xb == this ? c.Dg : c.Xb).ld()
    };
    R.prototype.DK = function(a) {
        na((a.Xb === this ? a.Uo : a.Wo) === s, "Internal Error: Dangling contact graph pointers detected. (A)");
        na((a.Xb ===
            this ? a.Vo : a.Xo) === s, "Internal Error: Dangling contact graph pointers detected. (B)");
        var c = this.Hl;
        na(c === s || (c.Xb === this ? c.Vo : c.Xo) === s, "Internal Error: Dangling contact graph pointers detected. (C)");
        a.Xb === this ? a.Uo = c : a.Wo = c;
        c && (c.Xb === this ? c.Vo = a : c.Xo = a);
        this.Hl = a
    };
    Y.prototype.RX = function(a) {
        for (var c = Infinity !== this.QC, d = this.gr, e = 0; e < d.length; e++) {
            var f = d[e];
            na(f.Ng === s, "Internal Error: Dangling next pointer detected in contact graph.");
            na(f.tk === s, "Internal Error: Dangling root pointer detected in contact graph.")
        }
        if (c)
            for (var g =
                    (e = this.xW) ? e * e : Ea(this.LJ) * a * a, e = 0; e < d.length; e++) f = d[e], f.hj = f.lX() > (g ? f.Jr * g : 0) ? 0 : f.hj + a;
        for (var g = this.On, e = 0, h = g.length; e < h; e++) {
            var k = g[e],
                f = k.Xb;
            a = k.Dg;
            c && ((a.Lh() && !a.fe() || f.bj()) && f.ld(), (f.Lh() && !f.fe() || a.bj()) && a.ld());
            f.DK(k);
            a.DK(k)
        }
        if (c) {
            c = this.jr;
            for (e = 0; e < c.length; e++) a = c[e], f = a.a, a = a.b, a.Lh() && !a.fe() && f.ld(), f.Lh() && !f.fe() && a.ld();
            for (e = 0; e < d.length;) {
                f = d[e];
                if ((f ? f.tk : s) === s) {
                    v(f, f);
                    a: {
                        for (c = f; c; c = c.Ng)
                            if (c.hj < this.QC) {
                                c = p;
                                break a
                            }
                        c = u
                    }
                    if (!c) {
                        this.BL.push(f);
                        for (c = f; c; c = c.Ng) this.EU(c);
                        continue
                    }
                }
                e++;
                f.tk = s;
                f.Ng = s
            }
        }
    };
    Y.prototype.rY = function() {
        for (var a = 0; a < this.oC.length; a++) this.oC[a]();
        this.oC = []
    };
    Y.prototype.dw = function() {
        this.vo++
    };
    Y.prototype.Vw = function(a) {
        this.vo--;
        O(0 <= this.vo, "Internal Error: Space lock underflow.");
        if (0 === this.vo && a) {
            a = this.DC;
            for (var c = 0; c < a.length; c++) this.CI(a[c]);
            a.length = 0;
            this.rY()
        }
    };
    Y.prototype.rX = function() {
        var a = this;
        return function(c, d) {
            if (c.bb <= d.cb && (d.bb <= c.cb && c.Za <= d.$a && d.Za <= c.$a) && !(c.body === d.body || c.group && c.group === d.group || !(c.eC &
                    d.eC))) {
                var e = a.lK(c.Tn, d.Tn),
                    f = c.aL || d.aL;
                if (!(f && e === xb)) {
                    if (c.$e > d.$e) {
                        var g = c;
                        c = d;
                        d = g
                    }
                    g = Ub(c, d);
                    if (0 !== g.length) {
                        var h = oa(c.tc, d.tc),
                            k = a.Eh[h];
                        k || (k = a.Eh[h] = new H(c, d));
                        k.update(g, e, c, d);
                        "first coll" == k.state && !e.Rf(k, a) && k.yW();
                        "ignore" !== k.state && e.pC(k, a) && !f ? a.On.push(k) : (k.Uf = s, "ignore" !== k.state && (k.state = "normal"));
                        k.vc = a.vc
                    }
                }
            }
        }
    };
    Y.prototype.ST = function(a) {
        var c = this.vc - a.vc,
            d = a.Xb,
            e = a.Dg;
        if ((d.fe() || d.bj()) && (e.fe() || e.bj())) return p;
        1 <= c && "cached" != a.state && (a.state = "cached");
        return c >=
            this.kU ? (a.Uf = s, u) : p
    };
    Y.prototype.step = function(a) {
        if (0 !== a) {
            O(0 === ga.x && 0 === ga.y, "vzero is invalid");
            this.vc++;
            var c = this.hJ;
            this.hJ = a;
            var d, e, f = this.gr,
                g = this.jr,
                h = this.On;
            for (d = 0; d < h.length; d++) {
                var k = h[d];
                k.state = "normal";
                !k.Xb.bj() && !k.Dg.bj() && k.QL()
            }
            h.length = 0;
            this.dw();
            for (d = 0; d < f.length; d++) f[d].PX(a);
            this.El.Nl(t);
            this.El.ZX(this.YI);
            this.Vw(u);
            this.RX(a);
            this.dw();
            for (e in this.Eh) this.ST(this.Eh[e]) || delete this.Eh[e];
            e = this.lU;
            k = 1 - Math.pow(this.jU, a);
            for (d = 0; d < h.length; d++) h[d].lf(a,
                e, k);
            for (d = 0; d < g.length; d++) e = g[d], e.pC(this), e.lf(a);
            e = Math.pow(this.mr, a);
            k = this.LJ;
            for (d = 0; d < f.length; d++) f[d].m_(k, e, a);
            a = 0 === c ? 0 : a / c;
            for (d = 0; d < h.length; d++) h[d].Qf(a);
            for (d = 0; d < g.length; d++) g[d].Qf(a);
            for (d = 0; d < this.fX; d++) {
                for (a = 0; a < h.length; a++) h[a].ze();
                for (a = 0; a < g.length; a++) g[a].ze()
            }
            for (d = 0; d < g.length; d++);
            for (d = 0; d < h.length; d++);
            this.Vw(p)
        }
    };
    var U = C.d0 = function(a, c) {
        this.a = a;
        this.b = c;
        this.BX = this.AX = this.fb = s;
        this.sk = Infinity;
        this.Ol = Math.pow(0.9, 60);
        this.Xl = Infinity
    };
    U.prototype.lf = y();
    U.prototype.Qf = y();
    U.prototype.ze = y();
    U.prototype.pC = y();
    U.prototype.next = function(a) {
        return this.a === a ? this.AX : this.BX
    };
    var bb = C.oO = function(a, c, d, e) {
        U.call(this, a, c);
        this.Dh = d;
        this.Ze = e;
        a = a ? Q(a.d, fa(d, a.uc)) : d;
        c = c ? Q(c.d, fa(e, c.uc)) : e;
        this.or = Ga(T(c, a));
        na(0 < this.or, "You created a 0 length pin joint. A pivot joint will be much more stable.");
        this.fa = this.ra = this.ta = s;
        this.rb = this.Oc = this.qo = this.Mg = 0
    };
    bb.prototype = Object.create(U.prototype);
    bb.prototype.lf = function(a) {
        var c = this.a,
            d = this.b;
        this.ra =
            fa(this.Dh, c.uc);
        this.ta = fa(this.Ze, d.uc);
        var f = T(Q(d.d, this.ta), Q(c.d, this.ra)),
            g = Ga(f);
        this.fa = S(f, 1 / (g ? g : Infinity));
        this.Mg = 1 / e(c, d, this.ra, this.ta, this.fa);
        c = this.Xl;
        this.rb = W(-(1 - Math.pow(this.Ol, a)) * (g - this.or) / a, -c, c);
        this.qo = this.sk * a
    };
    bb.prototype.Qf = function(a) {
        a = S(this.fa, this.Oc * a);
        h(this.a, this.b, this.ra, this.ta, a.x, a.y)
    };
    bb.prototype.ze = function() {
        var a = this.a,
            c = this.b,
            d = this.fa,
            e = (this.rb - n(a, c, this.ra, this.ta, d)) * this.Mg,
            f = this.Oc;
        this.Oc = W(f + e, -this.qo, this.qo);
        e = this.Oc - f;
        h(a, c,
            this.ra, this.ta, d.x * e, d.y * e)
    };
    var cb = C.PO = function(a, c, d, e, f, g) {
        U.call(this, a, c);
        this.Dh = d;
        this.Ze = e;
        this.min = f;
        this.max = g;
        this.ra = this.ta = this.fa = s;
        this.rb = this.Oc = this.qo = this.Mg = 0
    };
    cb.prototype = Object.create(U.prototype);
    cb.prototype.lf = function(a) {
        var c = this.a,
            d = this.b;
        this.ra = fa(this.Dh, c.uc);
        this.ta = fa(this.Ze, d.uc);
        var f = T(Q(d.d, this.ta), Q(c.d, this.ra)),
            g = Ga(f),
            h = 0;
        g > this.max ? (h = g - this.max, this.fa = vb(f)) : g < this.min ? (h = this.min - g, this.fa = Na(vb(f))) : (this.fa = ga, this.Oc = 0);
        this.Mg = 1 / e(c, d, this.ra,
            this.ta, this.fa);
        c = this.Xl;
        this.rb = W(-(1 - Math.pow(this.Ol, a)) * h / a, -c, c);
        this.qo = this.sk * a
    };
    cb.prototype.Qf = function(a) {
        a *= this.Oc;
        h(this.a, this.b, this.ra, this.ta, this.fa.x * a, this.fa.y * a)
    };
    cb.prototype.ze = function() {
        if (!(0 === this.fa.x && 0 === this.fa.y)) {
            var a = this.a,
                c = this.b,
                d = this.fa,
                e = r(a, c, this.ra, this.ta),
                e = X(e, d),
                e = (this.rb - e) * this.Mg,
                f = this.Oc;
            this.Oc = W(f + e, -this.qo, 0);
            e = this.Oc - f;
            h(a, c, this.ra, this.ta, d.x * e, d.y * e)
        }
    };
    var db = C.pO = function(a, c, d, e) {
        U.call(this, a, c);
        "undefined" === typeof e && (e = d, d =
            a ? a.aM(e) : e, e = c ? c.aM(e) : e);
        this.Dh = d;
        this.Ze = e;
        this.ra = this.ta = ga;
        this.Er = new G(0, 0);
        this.Fr = new G(0, 0);
        this.Pa = ga;
        this.Dr = 0;
        this.rb = ga
    };
    db.prototype = Object.create(U.prototype);
    db.prototype.lf = function(a) {
        var c = this.a,
            e = this.b;
        this.ra = fa(this.Dh, c.uc);
        this.ta = fa(this.Ze, e.uc);
        d(c, e, this.ra, this.ta, this.Er, this.Fr);
        this.Dr = this.sk * a;
        c = T(Q(e.d, this.ta), Q(c.d, this.ra));
        this.rb = Sa(S(c, -(1 - Math.pow(this.Ol, a)) / a), this.Xl)
    };
    db.prototype.Qf = function(a) {
        h(this.a, this.b, this.ra, this.ta, this.Pa.x * a, this.Pa.y *
            a)
    };
    db.prototype.ze = function() {
        var a = this.a,
            c = this.b,
            d = r(a, c, this.ra, this.ta),
            d = T(this.rb, d),
            e = this.Fr,
            d = new G(X(d, this.Er), X(d, e)),
            e = this.Pa;
        this.Pa = Sa(Q(this.Pa, d), this.Dr);
        h(a, c, this.ra, this.ta, this.Pa.x - e.x, this.Pa.y - e.y)
    };
    var Ta = C.iN = function(a, c, d, e, f) {
        U.call(this, a, c);
        this.MJ = d;
        this.NJ = e;
        this.uW = Qa(Ra(T(e, d)));
        this.Ze = f;
        this.OJ = s;
        this.hr = 0;
        this.ra = this.ta = s;
        this.Er = new G(0, 0);
        this.Fr = new G(0, 0);
        this.Pa = ga;
        this.Dr = 0;
        this.rb = s
    };
    Ta.prototype = Object.create(U.prototype);
    Ta.prototype.lf = function(a) {
        var c =
            this.a,
            e = this.b,
            f = c.Kg(this.MJ),
            g = c.Kg(this.NJ),
            h = fa(this.uW, c.uc),
            k = X(f, h);
        this.OJ = h;
        this.ta = fa(this.Ze, e.uc);
        var n = xa(Q(e.d, this.ta), h);
        n <= xa(f, h) ? (this.hr = 1, this.ra = T(f, c.d)) : n >= xa(g, h) ? (this.hr = -1, this.ra = T(g, c.d)) : (this.hr = 0, this.ra = T(Q(S(Qa(h), -n), S(h, k)), c.d));
        d(c, e, this.ra, this.ta, this.Er, this.Fr);
        this.Dr = this.sk * a;
        c = T(Q(e.d, this.ta), Q(c.d, this.ra));
        this.rb = Sa(S(c, -(1 - Math.pow(this.Ol, a)) / a), this.Xl)
    };
    Ta.prototype.Qf = function(a) {
        h(this.a, this.b, this.ra, this.ta, this.Pa.x * a, this.Pa.y * a)
    };
    Ta.prototype.tW =
        function(a) {
            var c = this.OJ;
            a = 0 < this.hr * xa(a, c) ? a : Kb(a, c);
            return Sa(a, this.Dr)
        };
    Ta.prototype.ze = function() {
        var a = this.a,
            c = this.b,
            d = r(a, c, this.ra, this.ta),
            d = T(this.rb, d),
            e = this.Fr,
            d = new G(X(d, this.Er), X(d, e)),
            e = this.Pa;
        this.Pa = this.tW(Q(e, d));
        h(a, c, this.ra, this.ta, this.Pa.x - e.x, this.Pa.y - e.y)
    };
    var eb = C.s0 = function(a, d, e, f, g, h, k) {
        U.call(this, a, d);
        this.Dh = e;
        this.Ze = f;
        this.oY = g;
        this.SC = h;
        this.mr = k;
        this.FZ = c;
        this.VC = this.YL = 0;
        this.ra = this.ta = s;
        this.Mg = 0;
        this.fa = s
    };
    eb.prototype = Object.create(U.prototype);
    eb.prototype.lf = function(a) {
        var c = this.a,
            d = this.b;
        this.ra = fa(this.Dh, c.uc);
        this.ta = fa(this.Ze, d.uc);
        var f = T(Q(d.d, this.ta), Q(c.d, this.ra)),
            g = Ga(f);
        this.fa = S(f, 1 / (g ? g : Infinity));
        f = e(c, d, this.ra, this.ta, this.fa);
        na(0 !== f, "Unsolvable this.");
        this.Mg = 1 / f;
        this.VC = 0;
        this.YL = 1 - Math.exp(-this.mr * a * f);
        g = this.FZ(this, g);
        h(c, d, this.ra, this.ta, this.fa.x * g * a, this.fa.y * g * a)
    };
    eb.prototype.Qf = y();
    eb.prototype.ze = function() {
        var a = this.a,
            c = this.b,
            d = n(a, c, this.ra, this.ta, this.fa),
            e = (this.VC - d) * this.YL;
        this.VC = d + e;
        e *=
            this.Mg;
        h(a, c, this.ra, this.ta, this.fa.x * e, this.fa.y * e)
    };
    var rb = C.r0 = function(c, d, e, f, g) {
        U.call(this, c, d);
        this.nY = e;
        this.SC = f;
        this.mr = g;
        this.GZ = a;
        this.De = this.ZL = this.WC = 0
    };
    rb.prototype = Object.create(U.prototype);
    rb.prototype.lf = function(a) {
        var c = this.a,
            d = this.b,
            e = c.Na + d.Na;
        na(0 !== e, "Unsolvable spring.");
        this.De = 1 / e;
        this.ZL = 1 - Math.exp(-this.mr * a * e);
        this.WC = 0;
        a *= this.GZ(this, c.a - d.a);
        c.m -= a * c.Na;
        d.m += a * d.Na
    };
    rb.prototype.ze = function() {
        var a = this.a,
            c = this.b,
            d = a.m - c.m,
            e = (this.WC - d) * this.ZL;
        this.WC = d +
            e;
        d = e * this.De;
        a.m += d * a.Na;
        c.m -= d * c.Na
    };
    var fb = C.K1 = function(a, c, d, e) {
        U.call(this, a, c);
        this.min = d;
        this.max = e;
        this.De = this.rb = this.Ee = this.Pa = 0
    };
    fb.prototype = Object.create(U.prototype);
    fb.prototype.lf = function(a) {
        var c = this.a,
            d = this.b,
            e = d.a - c.a,
            f = 0;
        e > this.max ? f = this.max - e : e < this.min && (f = this.min - e);
        this.De = 1 / (1 / c.ko + 1 / d.ko);
        c = this.Xl;
        this.rb = W(-(1 - Math.pow(this.Ol, a)) * f / a, -c, c);
        this.Ee = this.sk * a;
        this.rb || (this.Pa = 0)
    };
    fb.prototype.Qf = function(a) {
        var c = this.a,
            d = this.b;
        a *= this.Pa;
        c.m -= a * c.Na;
        d.m += a * d.Na
    };
    fb.prototype.ze = function() {
        if (this.rb) {
            var a = this.a,
                c = this.b,
                d = -(this.rb + (c.m - a.m)) * this.De,
                e = this.Pa;
            this.Pa = 0 > this.rb ? W(e + d, 0, this.Ee) : W(e + d, -this.Ee, 0);
            d = this.Pa - e;
            a.m -= d * a.Na;
            c.m += d * c.Na
        }
    };
    var gb = C.J1 = function(a, c, d, e) {
        U.call(this, a, c);
        this.kv = 0;
        this.nC = d;
        this.GK = e;
        this.kv = (c ? c.a : 0) - (a ? a.a : 0);
        this.De = this.rb = this.Pa = this.Ee = 0
    };
    gb.prototype = Object.create(U.prototype);
    gb.prototype.lf = function(a) {
        var c = this.a,
            d = this.b,
            e = this.nC,
            f = this.GK,
            g = d.a - c.a,
            h = this.kv - g,
            k = 0;
        0 < h * f ? k = h : this.kv = Math.floor((g -
            e) / f) * f + e;
        this.De = 1 / (c.Na + d.Na);
        c = this.Xl;
        this.rb = W(-(1 - Math.pow(this.Ol, a)) * k / a, -c, c);
        this.Ee = this.sk * a;
        this.rb || (this.Pa = 0)
    };
    gb.prototype.Qf = function(a) {
        var c = this.a,
            d = this.b;
        a *= this.Pa;
        c.m -= a * c.Na;
        d.m += a * d.Na
    };
    gb.prototype.ze = function() {
        if (this.rb) {
            var a = this.a,
                c = this.b,
                d = this.GK,
                e = -(this.rb + (c.m - a.m)) * this.De,
                f = this.Pa;
            this.Pa = W((f + e) * d, 0, this.Ee * Math.abs(d)) / d;
            e = this.Pa - f;
            a.m -= e * a.Na;
            c.m += e * c.Na
        }
    };
    var hb = C.H0 = function(a, c, d, e) {
        U.call(this, a, c);
        this.nC = d;
        this.rC = e;
        this.sC = 1 / e;
        this.De = this.rb =
            this.Ee = this.Pa = 0
    };
    hb.prototype = Object.create(U.prototype);
    hb.prototype.lf = function(a) {
        var c = this.a,
            d = this.b;
        this.De = 1 / (c.Na * this.sC + this.rC * d.Na);
        var e = this.Xl;
        this.rb = W(-(1 - Math.pow(this.Ol, a)) * (d.a * this.rC - c.a - this.nC) / a, -e, e);
        this.Ee = this.sk * a
    };
    hb.prototype.Qf = function(a) {
        var c = this.a,
            d = this.b;
        a *= this.Pa;
        c.m -= a * c.Na * this.sC;
        d.m += a * d.Na
    };
    hb.prototype.ze = function() {
        var a = this.a,
            c = this.b,
            d = (this.rb - (c.m * this.rC - a.m)) * this.De,
            e = this.Pa;
        this.Pa = W(e + d, -this.Ee, this.Ee);
        d = this.Pa - e;
        a.m -= d * a.Na * this.sC;
        c.m += d * c.Na
    };
    var ib = C.R1 = function(a, c, d) {
        U.call(this, a, c);
        this.YX = d;
        this.De = this.Ee = this.Pa = 0
    };
    ib.prototype = Object.create(U.prototype);
    ib.prototype.lf = function(a) {
        this.De = 1 / (this.a.Na + this.b.Na);
        this.Ee = this.sk * a
    };
    ib.prototype.Qf = function(a) {
        var c = this.a,
            d = this.b;
        a *= this.Pa;
        c.m -= a * c.Na;
        d.m += a * d.Na
    };
    ib.prototype.ze = function() {
        var a = this.a,
            c = this.b,
            d = -(c.m - a.m + this.YX) * this.De,
            e = this.Pa;
        this.Pa = W(e + d, -this.Ee, this.Ee);
        d = this.Pa - e;
        a.m -= d * a.Na;
        c.m += d * c.Na
    }
})();
var path = window.Zepto.linkUrl+'/dist/Activity/img/20170126/jumpGame/cocos/';
var V = {
        AD: path + "home.plist?v=1",
        mN: path + "home.png?v=1",
        gN: path + "game.plist?v=1",
        hN: path + "game.png?v=1",
        $s: path + "num.fnt",
        n1: path + "num.png?v=1",
        HD: path + "rule.png",
        GD: path + "rule.png",
        QD: path + "pauseButton.png",
        vO: path + "resumeButton.png",
        eE: path + "tipButton.png",
        YN: path + "num-1.png?v=1",
        ZN: path + "num-2.png?v=1",
        $N: path + "num-3.png?v=1",
        logo: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='
    },
    mb = [],
    jb;
for (jb in V) mb.push(V[jb]);
MyLoaderScene = I.hi.extend({
    tg: s,
    mh: s,
    $b: "MyLoaderScene",
    Tf: s,
    target: s,
    pa: function() {
        var a = this,
            c = a.It = new I.Ea(I.color(225, 225, 225, 0));
        a.N(c, 0);
        I.Hz && I.T.Vl(V.logo, {
            aj: u
        }, function(c, d) {
            a.yz(d, I.Q.Qn)
        });
        var d = a.mh = I.J.create("0%", "Serif", 50);
        d.Ia(I.jj(I.Q.Qn, I.d(150, -340)));
        d.ic(I.color(50, 50, 50));
        c.N(this.mh, 10);
        return p
    },
    yz: function(a, c) {
        var d = this.aT = new I.la;
        d.Fd(a);
        d.Jb();
        d = this.PG = new I.F(d);
        d.Qc(I.eb());
        d.x = c.x;
        d.y = c.y + 100;
        this.It.N(d, 10)
    },
    U: function() {
        I.i.prototype.U.call(this);
        this.mj(this.Lq, 0.3)
    },
    Qa: function() {
        I.i.prototype.Qa.call(this);
        this.mh.rd("0%")
    },
    aC: function(a, c, d) {
        I.ge(a) && (a = [a]);
        this.zC = a || [];
        this.Tf = c;
        this.target = d
    },
    Lq: function() {
        var a =
            this;
        a.Sg(a.Lq);
        I.T.load(a.zC, function(c, d, e) {
            c = Math.min(100 * (e / d) | 0, 100);
            a.mh.rd(c + "%");
            document.getElementById("loadpercent").innerHTML = c + "%"
        }, function() {
            document.body.removeChild(document.getElementById("loading"));
            a.Tf && a.Tf.call(a.target)
        })
    }
});
MyLoaderScene.BK = function(a, c) {
    var d = s;
    d || (d = new MyLoaderScene, d.pa());
    d.aC(a, c);
    I.O.lj(d);
    return d
};
var sb = I.color(225, 225, 225, 0),
    yb = I.color(225, 225, 225, 0),
    zb = I.color(188, 188, 188, 0),
    Ab = I.color(188, 188, 188, 0);
var Yb = I.Ea.extend({
        ctor: function() {
            this._super(sb);
            return p
        },
        U: function() {
            this._super();
            I.A.localStorage.getItem("revive_times") == s && I.A.localStorage.setItem("revive_times", 3);
            I.A.localStorage.getItem("music_opened") == s && I.A.localStorage.setItem("music_opened", 1);
            I.A.localStorage.getItem("isGaming") == s && I.A.localStorage.setItem("isGaming", -1);
            I.A.localStorage.setItem("game_over", 0);
            I.A.localStorage.setItem("score_game_over", 0);
            game.homeSceneCallback();
            I.A.localStorage.getItem("best_score_dragon_up") ==
                s && I.A.localStorage.setItem("best_score_dragon_up", 0);
            I.A.localStorage.getItem("score_gaming") == s && I.A.localStorage.setItem("score_gaming", 0);
            I.A.localStorage.getItem("first_game") == s && I.A.localStorage.setItem("first_game", 1);
            I.A.localStorage.setItem("revive", 0);
            I.A.localStorage.setItem("resume", 0);
            I.A.localStorage.setItem("scoreBoard", 0);
            I.Rg.gB(V.AD, V.mN);
            this.kK = new I.F("#logo.png");
            this.kK.na({
                x: I.xb.width / 2,
                y: 4 * I.xb.height / 5
            });
            this.N(this.kK);
            this.Eb = new I.F("#dragon2.png");
            this.Eb.na({
                x: I.xb.width / 2,
                y: 2.8 * I.xb.height / 5
            });

            this.EER = new I.F("#dragon.png");
            this.EER.na({
                x: I.xb.width / 2,
                y: 2.8 * I.xb.height / 5
            });
            this.N(this.EER, 1, 10);
            this.EER.ma(I.Go(I.uj.create(I.Xv(0.6, I.d(0, 0), 40, 1), 1)));

            this.tC = new I.F("#reallyDragonText.png");
            this.tC.na({
                x: I.xb.width / 2 + this.tC.Aa().width,
                y: 3 * I.xb.height / 5
            });
            this.N(this.tC);
            this.aD = new I.F("#upButton.png");
            this.aD.na({
                x: I.xb.width / 2,
                y: 2.5 * I.xb.height / 7,
                scale: 0.96
            });
            this.N(this.aD, 1, 101);
            100 == I.A.localStorage.getItem("scoreBoard") && (this.Io = new I.F("#score.png"), this.Io.na({
                x: this.Io.Aa().width + 20,
                y: this.Io.Aa().height + 20
            }), this.N(this.Io, 1, 110));
            100 == I.A.localStorage.getItem("revive") &&
                (this.TC = new I.F("#store.png"), this.TC.na({
                    x: I.xb.width / 2,
                    y: this.Io.Aa().height + 20
                }), this.N(this.TC, 1, 111));
            this.Zo = new I.F(V.eE);
            this.Zo.na({
                x: this.Zo.Aa().width - 20,
                y: this.Zo.Aa().height - 40
            });
            this.N(this.Zo, 1, 112);
            var a = I.A.localStorage.getItem("music_opened");
            this.wo = new I.F(V.GD);
            this.wo.na({
                x: I.xb.width - this.wo.Aa().width + 20,
                y: this.wo.Aa().height - 40
            });
            this.N(this.wo, 1, 100);
            //I.A.Ph == I.A.at && (this.wo.ie(u), I.A.localStorage.setItem("music_opened", 0));
            this.Rb = I.R.create({
                event: I.R.ig,
                eg: p,
                gf: function(a, c) {
                    var f = c.Ua,
                        g = f.Jl(a.Yi()),
                        h = f.Aa(),
                        h = I.rect(0, 0, h.width, h.height);
                    return I.Co(h, g) ? (f.Qc(1.2), p) : u
                },
                $f: function(c, e) {
                    var f = e.Ua;
                    f.Qc(1);
                    if (10 == f.tag) {
                        var g = new Bb;
                        f.getParent().N(g, 3)
                    }
                    101 == f.tag && (I.O.lj(new I.Lk(0.5, new Cb(1))), game.gameStartCallback());
                    102 == f.tag && I.O.lj(new I.Lk(0.5, new Cb(0)));
                    100 == f.tag && (I.A.localStorage.setItem("music_opened", 0), a = 0, f.mb(V.GD), game.ruleOpen());
                    112 == f.tag && (f.mb(V.eE), game.howPlay());
                    //1 == I.A.localStorage.getItem("scoreBoard") && 110 == f.tag && (g = new Vb, f.getParent().N(g, 3));
                    //1 == I.A.localStorage.getItem("revive") && 111 == f.tag && (g = new Wb, f.getParent().N(g, 3));
                    I.be.xk(V.Ep)
                }
            });
            //I.K.addListener(this.Rb.j(), this.Eb);
            I.K.addListener(this.Rb.j(), this.aD); //事件绑定
            I.K.addListener(this.Rb.j(), this.wo);
            I.K.addListener(this.Rb.j(), this.Zo);
            /*1 == I.A.localStorage.getItem("scoreBoard") && I.K.addListener(this.Rb.j(), this.Io);
            1 == I.A.localStorage.getItem("revive") && I.K.addListener(this.Rb.j(), this.TC);
            if (1 == I.A.localStorage.getItem("resume") && 0 <= I.A.localStorage.getItem("isGaming")) {
                var c = new Xb;
                this.N(c, 2)
            }*/
        },
        Qa: function() {
            this._super();
            I.K.removeListener(this.Rb);
            I.Rg.hY(V.AD)
        }
    }),
    Zb = I.hi.extend({
        U: function() {
            this._super();
            var a = new Yb;
            this.N(a)
        }
    });
var Xb = I.Ea.extend({
    ctor: function() {
        this._super(yb)
    },
    U: function() {
        this._super();
        window.location.reload();
        var a = new I.F("#restartText.png");
        a.na({
            x: I.xb.width / 2,
            y: 6 * I.xb.height / 9
        });
        this.N(a);
        this.sv = new I.F("#continueButton.png");
        this.sv.na({
            x: I.xb.width / 2 - this.sv.Aa().width / 2 - 10,
            y: 2 * I.xb.height / 7
        });
        this.N(this.sv, 1, 108);
        this.xw = new I.F("#restartButton.png");
        this.xw.na({
            x: I.xb.width / 2 + this.xw.Aa().width / 2 + 10,
            y: 2 * I.xb.height / 7
        });
        this.N(this.xw, 1, 109);
        this.Rb = I.R.create({
            event: I.R.ig,
            eg: p,
            gf: function(a, d) {
                var e = d.Ua,
                    f = e.Jl(a.Yi()),
                    g = e.Aa(),
                    g = I.rect(0, 0, g.width, g.height);
                return I.Co(g, f) ? (e.Qc(1.2), p) : u
            },
            $f: function(a, d) {
                var e = d.Ua;
                e.Qc(1);
                109 == e.tag && (e.getParent().Sh(), I.A.localStorage.setItem("isGaming", -1), I.A.localStorage.setItem("score_gaming", 0));
                108 == e.tag && I.O.lj(new I.Lk(0.5, new Cb(I.A.localStorage.getItem("isGaming"))));
                I.be.xk(V.Ep);
            }
        });
        I.K.addListener(this.Rb.j(), this.sv);
        I.K.addListener(this.Rb.j(), this.xw)
    },
    Qa: function() {
        this._super();
        I.K.removeListener(this.Rb)
    }
});
var Bb = I.Ea.extend({
    ctor: function() {
        this._super(yb)
    },
    U: function() {
        this._super();
        var a = new I.F("#ILoveYou.png");
        a.na({
            x: I.xb.width / 2,
            y: I.xb.height / 2
        });
        this.N(a);
        this.Rb = I.R.create({
            event: I.R.ig,
            eg: p,
            gf: E(p),
            $f: function(a, d) {
                d.Ua.Sh()
            }
        });
        I.K.addListener(this.Rb, this)
    },
    Qa: function() {
        this._super();
        I.K.removeListener(this.Rb)
    }
});
var ec = I.Ea.extend({
    nF: s,
    fb: s,
    Eb: s,
    ho: s,
    po: s,
    Uh: s,
    Pc: s,
    s4: s,
    bw: s,
    Th: s,
    tU: s,
    ctor: function() {
        this._super(yb);
        this.bw = [];
        this.Th = [];
        this.po = u;
        this.tU = 3;
        this.Pc = 0;
        this.uT();
        return p
    },
    U: function() {
        this._super();
        this.EW();
        this.DW();
        this.Ho();
        this.WJ()
    },
    Qa: function() {
        this._super()
    },
    uT: function() {
        I.Rg.gB(V.gN, V.hN)
    },
    EW: function() {
        this.fb = new cp.QO;
        this.fb.eB(202, this.nB.bind(this));
        this.fb.eB(203, this.nB.bind(this));
        this.fb.eB(204, this.nB.bind(this));
        for (var a = this.fb.RC, a = [new cp.ym(a, cp.v(0, 0), cp.v(I.Q.width,
                0), 1), new cp.ym(a, cp.v(0, I.Q.height), cp.v(I.Q.width, I.Q.height), 1), new cp.ym(a, cp.v(0, 0), cp.v(0, I.Q.height), 1), new cp.ym(a, cp.v(I.Q.width, 0), cp.v(I.Q.width, I.Q.height), 1)], c = 0; c < a.length; c++) {
            var d = a[c];
            d.Iw(1);
            d.Jw(0);
            this.fb.Gl(d);
            d.Kw(-2);
            (2 == c || 3 == c) && d.Fw(204)
        }
    },
    y8: function() {
        this.nF = I.He.create(this.fb);
        this.N(this.nF)
    },
    nB: function() {
        if (this.po)
            if (I.K.aY(), I.K.xC(I.R.$h), I.no.Aw(u), 100 == I.A.localStorage.getItem("resume") && I.A.localStorage.setItem("isGaming", -1), 100 == I.A.localStorage.getItem("revive")) {
                this.pause();
                I.O.Fh().yK();
                var a = new $b;
                this.N(a, 3);
                var c = new ac;
                this.N(c, 3);
                this.uB = I.R.create({
                    event: I.R.rj,
                    Av: "countdown",
                    ce: function(d) {
                        d = d.Ua;
                        I.K.removeListener(d.sB);
                        a.Sh(p);
                        1 == I.A.localStorage.getItem("resume") && I.A.localStorage.setItem("isGaming", bc);
                        var e = d.Eb.Hv();
                        0 == d.Th.length && d.Eb.Ia(I.d(I.Q.width / 2, 3 * I.Q.height / 5));
                        if (1 == d.Th.length) {
                            var f = d.Th[0].body.d;
                            200 >= f.y || f.y >= I.Q.height - 150 ? d.Eb.Ia(I.d(I.Q.width / 2, 3 * I.Q.height / 5)) : d.Eb.Ia(I.d(f.x - 320 - 85, f.y))
                        }
                        if (2 <= d.Th.length) {
                            for (var g = 0; g < d.Th.length; g++)
                                if (f =
                                    d.Th[g].body.d, f.y <= I.Q.height - 150 && 200 <= f.y) {
                                    e.x = f.x - 320 - 85;
                                    e.y = f.y;
                                    break
                                }
                            d.Eb.Ia(e);
                            d.Eb.mk().Qw(cp.Zw)
                        }
                        d.Uh.ie(u);
                        c.uU()
                    }
                });
                I.K.addListener(this.uB, this);
                this.BC = I.R.create({
                    event: I.R.rj,
                    Av: "revive",
                    ce: function(a) {
                        a = a.Ua;
                        I.K.removeListener(a.BC);
                        I.K.removeListener(a.uB);
                        c.Sh(p);
                        a.mf();
                        for (var e = a.P, f = 0; f < e.length; f++)(21 == e[f].tag || 22 == e[f].tag || 10 == e[f].tag) && I.O.Fh().Qg(e[f]);
                        a.WJ();
                        I.no.Aw(p);
                        a.Uh.ie(p)
                    }
                });
                I.K.addListener(this.BC, this);
                this.sB = I.R.create({
                    event: I.R.rj,
                    Av: "continue",
                    ce: function(c) {
                        c =
                            c.Ua;
                        I.K.removeListener(c.BC);
                        I.K.removeListener(c.sB);
                        I.K.removeListener(c.uB);
                        a.Sh(p);
                        for (var e = c.P, f = 0; f < e.length; f++)(21 == e[f].tag || 22 == e[f].tag) && I.O.Fh().Qg(e[f]);
                        c.mf();
                        c.rJ()
                    }
                });
                I.K.addListener(this.sB, this)
            } else this.rJ();
        return p
    },
    DW: function() {
        if (1 == I.A.localStorage.getItem("first_game")) {
            I.A.localStorage.setItem("first_game", 0);
            var a = new Db;
            this.N(a, 3)
        }
        a = new I.F("#tapToStartText.png");
        a.na({
            x: I.Q.width / 2,
            y: 7.6 * I.Q.height / 9
        });
        this.N(a, 1, 31);
        a = new I.F("#tip.png");
        a.na({
            x: I.Q.width / 2,
            y: 4.8 * I.Q.height / 11,
            scale: 0.9
        });
        this.N(a, 1, 33);
        a.ma(I.Go(I.Ha(I.CC(0.4, -30), I.CC(0.4, 30))));
        this.wk = new I.F(V.QD);
        this.wk.na({
            x: I.Q.width - this.wk.width - 20,
            y: I.Q.height - this.wk.height - 20
        });
        this.wk.Hd(0);
        this.N(this.wk, 2, 106);

        this.ho = new I.F("#ground.png");
        this.ho.na({
            x: I.Q.width / 2,
            y: this.ho.Aa().height / 2
        });
        this.N(this.ho, 2);
        a = new I.F("#finger.png");
        a.na({
            x: I.Q.width / 2,
            y: 1 * I.Q.height / 8
        });
        this.N(a, 2, 32);
        a.ma(I.Go(I.Ha(I.nf(0.3, 0.9), I.nf(0.2, 1.1))));
        a = this.fb.Gl(new cp.ym(this.fb.RC, cp.v(0, this.ho.Aa().height), cp.v(I.Q.width, this.ho.Aa().height), 0));
        a.Fw(203);
        a.Iw(1);
        a.Jw(1);
        a.Kw(-2);
        this.Uh = new I.Md("0", V.$s);
        this.Uh.na({
            x: I.Q.width / 2,
            y: 8 * I.Q.height / 9
        });
        this.N(this.Uh);
        this.Uh.ie(u);
        this.Pc = 0;

        //火箭
        this.Eb = this.AU(I.d(I.Q.width / 2 + 19, 3.3 * I.Q.height / 5));
        //this.Eb.wa.width = 112;
        //this.Eb.wa.height = 174;
        this.Eb.No(10);
        this.N(this.Eb);
        a = I.Go(I.uj.create(I.Xv(0.6, I.d(0, 0), 40, 1), 1));
        a.No(11);
        I.O.Fh().DI(a, this.Eb, u)
    },
    WJ: function() {
        I.no.Aw(u);
        var a = I.R.create({
            event: I.R.$h,
            ce: function(a, c) {
                var f = c.Ua;
                if (f.po) { //飞行
                    var g = f.Eb.Hv(),
                        h = f.Eb.Aa(),
                        k = g.x + 20 * a.x;
                    610 >= k && 30 <= k && (g.x = k);
                    g.y > I.xb.height -
                        h.height / 2 + 10 && f.Eb.mk().Qw(cp.v(0, 0));
                    f.Eb.ma(I.moveTo(0.1, g))
                }
            }
        });
        I.K.addListener(a, this);
        var c = I.A.localStorage.getItem("music_opened"),
            a = I.R.create({
                event: I.R.ig,
                gf: function() {
                    return I.O.Ob ? u : p
                },
                $f: function(a, e) {
                    var f = e.Ua;
                    if (f.po) {
                        var g = f.Eb.Hv(),
                            h = f.Eb.Aa();
                        g.y <= I.xb.height - h.height / 2 && (f.Eb.mk().Qw(cp.v(0, 600)), I.be.xk(V.DN));
                        g.y > I.xb.height - h.height / 2 + 10 && f.Eb.mk().Qw(cp.v(0, 0))
                    } else f.LZ()
                }
            });
        I.K.addListener(a.j(), this);
        a = I.R.create({
            event: I.R.ig,
            eg: u,
            gf: function(a, c) {
                var f = c.Ua,
                    g =
                    f.Jl(a.Yi()),
                    h = f.Aa(),
                    h = I.rect(0, 0, h.width, h.height);
                return I.Co(h, g) ? (f.Qc(1.2), p) : u
            },
            $f: function(a, e) {
                var f = e.Ua;
                f.Qc(1);
                106 == f.tag && (I.O.Ob ? (f.mb(V.QD), I.O.mf()) : (f.mb(V.vO), I.O.pause()));
                I.be.xk(V.Ep)
            }
        });
        I.K.addListener(a.j(), this.wk)
    },
    AU: function(a) {
        var c = [2.9, 65, 48.5, 30.5, 17.9, -65.1, -18.3, -44.6, -44.3, 32.3],
            d = new cp.oD(1, cp.vX(c));
        d.qL(a);
        this.fb.tT(d);
        c = new cp.Fx(d, c, cp.Zw);
        c.Fw(201);
        c.Iw(0.5);
        c.Jw(0.5);
        c.Kw(-1);
        this.fb.Gl(c);
        c = new I.Cc("#dragon2.png");
        c.Dw(d);
        c.Ia(a);
        return c
    },
    GI: function() {
        //云朵
        var a,
            c;
        1 == bc ? (a = I.Q.height + 40, c = 70) : (a = 70, c = I.Q.height + 40);
        c = I.Ha(I.moveBy(3, 0, c - a), I.Db(this.cY, this));
        var d = 220 * (Math.random() - 0.5),
            e = cc(this, I.d(-85 + d, a), p);
        a = cc(this, I.d(I.Q.width + 85 + d, a), u);
        e.No(21);
        a.No(22);
        this.N(e);
        this.N(a);
        e.ma(c.j());
        a.ma(c.j())
    },
    LZ: function() {
        this.po = p;
        this.jY();
        I.O.Fh().KK(11, this.Eb);
        this.Eb.mk().RT();
        this.Uh.ie(p);
        this.mj(this.GI, 1.3, I.Ie, 0);
        this.mj(this.WL, 1.3, I.Ie, 2.8);
        I.no.Aw(p);
        this.wk.ma(I.Yn(0.5));
        1 == I.A.localStorage.getItem("resume") && (0 <= I.A.localStorage.getItem("isGaming") ?
            (this.Pc = I.A.localStorage.getItem("score_gaming"), this.Pc = parseInt(this.Pc), this.Uh.rd(this.Pc)) : (I.A.localStorage.setItem("isGaming", bc), I.A.localStorage.setItem("score_gaming", 0)))
    },
    rJ: function() {
        this.po = u;
        I.be.xk(V.BN);
        I.O.Fh().yK();
        this.Sg(this.GI);
        this.Sg(this.WL);
        this.Uh.ma(I.lk(0.3));
        this.wk.ma(I.lk(0.3));
        var a = new dc(this.Pc);
        this.N(a, 3);
        1 == I.A.localStorage.getItem("resume") && I.A.localStorage.setItem("isGaming", -1)
    },
    jY: function() {
        var a = I.Ha(I.lk(0.5),
            I.Db(this.MK, this));
        this.Hg(32).ma(a);
        this.Hg(31).ma(a.j());
        this.Hg(33).ma(a.j())
    },
    MK: function(a, c) {
        a.Sh(c)
    },
    cY: function(a, c) {
        a.Sh(c);
        21 == a.tag && (this.fb.as(this.bw[0]), this.bw.shift());
        22 == a.tag && (this.fb.as(this.Th[0]), this.Th.shift())
    },
    update: function(a) {
        this.fb.step(a)
    },
    WL: function() {
        var a = this.Eb.mk().m,
            c = 1,
            c = 1 > Math.abs(a) ? 1 : 4 > Math.abs(a) ? 2 : 3;
        this.Pc += c;
        this.Uh.rd(this.Pc);
        I.A.localStorage.setItem("score_gaming", this.Pc);
        I.be.xk(V.CN);
        I.O.ok().mZ(1 +
            0.0050 * this.Pc)
    }
});

function cc(a, c, d) {
    var e = new cp.oD(Infinity, Infinity);
    e.qL(c);
    var f = new cp.Fx(e, [-266.9, 26.2, 276.8, 27.4, 292.5, 22.4, 305.8, 14.1, 313.5, 4.5, 312.4, -7.6, 304.9, -22.7, 274.3, -31.1, -296.4, -25.5, -311.2, -4.7, -300.3, 17.2], cp.Zw);
    f.Fw(202);
    f.Iw(1);
    f.Jw(1);
    f.Kw(1);
    a.fb.Gl(f);
    d ? a.bw.push(f) : a.Th.push(f);
    a = new I.Cc("#cloud.png");
    a.Dw(e);
    a.Ia(c);
    return a
}
var bc = s,
    Cb = I.hi.extend({
        ctor: function(a) {
            this._super();
            bc = a;
            return p
        },
        U: function() {
            this._super();
            var a = new ec(bc);
            this.N(a)
        }
    });
var dc = I.Ea.extend({
    Pc: s,
    ctor: function(a) {
        this._super(zb);
        this.Pc = a;
        return p
    },
    U: function() {
        this._super();
        var mask = new I.F("#mask.png");
        mask.na({
            x: 0,
            y: I.Q.height,
            scale: 100
        });
        this.N(mask, 1);
        var a = new I.F("#gameOverText.png");
        a.na({
            x: I.Q.width / 2,
            y: I.Q.height + a.Aa().height / 2
        });
        this.N(a, 2);
        a.ma(I.moveTo(0.4, I.Q.width / 2, 8 * I.Q.height / 9));
        a = new I.F("#newRecord.png");
        a.na({
            x: I.Q.width / 2 + 130,
            y: 5 * I.Q.height / 8 + 50
        });
        a.ie(u);
        this.N(a, 2);
        I.A.localStorage.setItem("game_over", 1);
        I.A.localStorage.setItem("score_game_over", this.Pc);
        I.A.localStorage.getItem("best_score_dragon_up") < this.Pc &&
            (I.A.localStorage.setItem("best_score_dragon_up", this.Pc), 0 != this.Pc && a.ie(p));
        game.gameOverCallback();
        a = new I.F("#bestScoreText.png");
        a.na({
            x: I.Q.width / 2 - a.Aa().width / 2 + 50,
            y: 5 * I.Q.height / 8
        });
        this.N(a, 2);
        a = "";
        a = I.A.localStorage.getItem("best_score_dragon_up").toString();
        /*a = new I.Md(a, V.$s);
        a.na({
            x: I.Q.width / 2 + a.Aa().width / 2 + 60,
            y: 5 * I.Q.height / 8
        });
        this.N(a, 2);*/
        a = new I.Md(this.Pc.toString(), V.$s);
        a.na({
            x: I.Q.width / 2,
            y: 7 * I.Q.height / 9
        });
        this.N(a, 2);

        var c = new I.Ea(Ab);
        c.ie(u);
        this.N(c, 9);
        var d = new I.F("#shareText.png");
        d.na({
            x: I.Q.width / 2,
            y: I.Q.height - d.Aa().height / 2
        });
        d.ie(u);
        this.N(d, 9);
        this.fr = new I.F("#backButton.png");
        this.fr.na({
            x: this.fr.Aa().width / 2 + 10,
            y: I.Q.height - this.fr.Aa().height / 2 - 10
        });
        this.N(this.fr, 5, 103);
        this.OC = new I.F("#shareButton.png");
        this.OC.na({
            x: I.Q.width - this.OC.Aa().width / 2 - 20,
            y: 0.24 * I.Q.height
        });
        this.N(this.OC, 10, 104);
        this.AC = new I.F("#continue.png");
        this.AC.na({
            x: this.AC.Aa().width / 2 + 20,
            y: 0.24 * I.Q.height
        });
        this.N(this.AC, 10, 105);
        var e = I.A.localStorage.getItem("music_opened");
        this.Rb = I.R.create({
            event: I.R.ig,
            eg: u,
            gf: function(a, c) {
                var d = c.Ua,
                    e = d.Jl(a.Yi()),
                    n = d.Aa(),
                    n = I.rect(0, 0, n.width, n.height);
                return I.Co(n, e) ? (d.Qc(1.2), p) : u
            },
            $f: function(a, g) {
                var h = g.Ua;
                h.Qc(1);
                I.be.xk(V.Ep);
                103 == h.tag && I.O.lj(new I.Lk(0.5, new Zb), game.goBack());
                104 == h.tag && game.share();
                if (105 == h.tag) {
                    (I.A.localStorage.setItem("game_over", 0), game.gameRetryCallback(), I.O.lj(new I.Lk(0.5, new Cb(bc))))
                }
            }
        });
        I.K.addListener(this.Rb.j(), this.fr);
        I.K.addListener(this.Rb.j(), this.OC);
        I.K.addListener(this.Rb.j(), this.AC)
    }
});
var $b = I.Ea.extend({
    ctor: function() {
        this._super(zb)
    },
    U: function() {
        this._super();
        var a = new I.F("#lifeRemain.png");
        a.na({
            x: I.Q.width / 2 - a.Aa().width / 2,
            y: 7 * I.Q.height / 9
        });
        this.N(a);
        a = new I.Md(I.A.localStorage.getItem("revive_times"), V.$s);
        a.na({
            x: I.Q.width / 2 + a.Aa().width / 2 + 10,
            y: 7 * I.Q.height / 9 + 20
        });
        this.N(a);
        a = new I.F("#reviveButton.png");
        a.na({
            x: I.Q.width / 2,
            y: 4 * I.Q.height / 9
        });
        this.N(a, 1, 107);
        var c = new I.F("#retryButton.png");
        c.na({
            x: I.Q.width / 2,
            y: 3 * I.Q.height / 10
        });
        this.N(c, 1, 108);
        this.Rb = I.R.create({
            event: I.R.ig,
            eg: u,
            gf: function(a, c) {
                var f = c.Ua,
                    g = f.Jl(a.Yi()),
                    h = f.Aa(),
                    h = I.rect(0, 0, h.width, h.height);
                return I.Co(h, g) ? (f.Qc(1.2), p) : u
            },
            $f: function(a, c) {
                var f = c.Ua;
                //倒计时
                f.Qc(1);
                if (107 == f.tag) {
                    var g = new I.Xg("countdown");
                    I.K.dispatchEvent(g)
                }
                108 == f.tag && (f = new I.Xg("continue"), I.K.dispatchEvent(f));
                I.be.xk(V.Ep)
            }
        });
        I.K.addListener(this.Rb.j(), a);
        I.K.addListener(this.Rb.j(), c)
    },
    Qa: function() {
        this._super()
    }
});
var ac = I.mc.extend({
    ctor: function() {
        this._super()
    },
    uU: function() {
        var a = new I.F(V.YN);
        a.Hd(0);
        a.na({
            x: I.Q.width / 2,
            y: 3 * I.Q.height / 4
        });
        a.Qc(2);
        this.N(a);
        var c = new I.F(V.ZN);
        c.Hd(0);
        c.na({
            x: I.Q.width / 2,
            y: 3 * I.Q.height / 4
        });
        c.Qc(2);
        this.N(c);
        var d = new I.F(V.$N);
        d.Hd(0);
        d.na({
            x: I.Q.width / 2,
            y: 3 * I.Q.height / 4
        });
        d.Qc(2);
        this.N(d);
        d.ma(I.Ha(I.Yn(0.1), I.gc(0.8), I.lk(0.1)));
        c.ma(I.Ha(I.gc(1), I.Yn(0.1), I.gc(0.8), I.lk(0.1)));
        a.ma(I.Ha(I.gc(2), I.Yn(0.1), I.gc(0.8), I.lk(0.1), I.Db(this.TK)))
    },
    TK: function() {
        var a = new I.Xg("revive");
        I.K.dispatchEvent(a)
    },
    U: function() {
        this._super()
    },
    Qa: function() {
        this._super()
    }
});
var Vb = I.Ea.extend({
    ctor: function() {
        this._super(yb)
    },
    U: function() {
        this._super()
    },
    Qa: function() {
        this._super()
    }
});
var Wb = I.Ea.extend({
    ctor: function() {
        this._super(yb)
    },
    U: function() {
        this._super()
    },
    Qa: function() {
        this._super()
    }
});
var Db = I.Ea.extend({
    ctor: function() {
        this._super(yb)
    },
    U: function() {
        this._super();
        var a = new I.F(V.WP);
        a.na({
            x: I.Q.width / 2,
            y: I.Q.height / 2
        });
        a.Qc(1.5);
        this.N(a);
        this.Rb = I.R.create({
            event: I.R.ig,
            eg: p,
            gf: E(p),
            $f: function(a, d) {
                d.Ua.Sh()
            }
        });
        I.K.addListener(this.Rb, this)
    },
    Qa: function() {
        this._super();
        I.K.removeListener(this.Rb)
    }
});
I.t.xo = function() {
    I.view.nJ(I.A.Ph === I.A.tm ? p : u);
    I.view.zT(p);
    I.A.Kh ? I.view.em(640, 1136, I.Od.Ss) : I.view.em(640, 1136, I.Od.kt);
    I.view.mY(p);
    MyLoaderScene.BK(mb, function() {
        I.O.lj(new Zb)
    }, this)
};
I.t.qY();