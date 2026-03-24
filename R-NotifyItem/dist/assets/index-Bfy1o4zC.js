(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity), s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function n(s) {
        if (s.ep) return;
        s.ep = !0;
        const i = r(s);
        fetch(s.href, i)
    }
})();
const $e = !1;
var te = Array.isArray,
    Ot = Array.from,
    Pe = Object.defineProperty,
    $t = Object.getOwnPropertyDescriptor,
    ee = Object.getOwnPropertyDescriptors,
    yt = Object.getPrototypeOf;

function He(t) {
    return typeof t == "function"
}
const F = () => {};

function Ve(t) {
    return t()
}

function xt(t) {
    for (var e = 0; e < t.length; e++) t[e]()
}
const C = 2,
    re = 4,
    rt = 8,
    pt = 16,
    I = 32,
    ht = 64,
    j = 128,
    _t = 256,
    k = 512,
    B = 1024,
    nt = 2048,
    O = 4096,
    it = 8192,
    ne = 16384,
    Ct = 32768,
    ze = 1 << 18,
    ie = 1 << 19,
    Pt = Symbol("$state"),
    Ue = Symbol("");

function se(t) {
    return t === this.v
}

function oe(t, e) {
    return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function"
}

function je(t) {
    return !oe(t, this.v)
}

function Ye(t) {
    throw new Error("effect_in_teardown")
}

function Ge() {
    throw new Error("effect_in_unowned_derived")
}

function We(t) {
    throw new Error("effect_orphan")
}

function Ke() {
    throw new Error("effect_update_depth_exceeded")
}

function Xe() {
    throw new Error("state_unsafe_local_read")
}

function Je() {
    throw new Error("state_unsafe_mutation")
}
let st = !1;

function Qe() {
    st = !0
}

function vt(t) {
    return {
        f: 0,
        v: t,
        reactions: null,
        equals: se,
        version: 0
    }
}

function le(t, e = !1) {
    var n;
    const r = vt(t);
    return e || (r.equals = je), st && y !== null && y.l !== null && ((n = y.l).s ?? (n.s = [])).push(r), r
}

function Ze(t, e) {
    return w !== null && Bt() && w.f & (C | pt) && (U === null || !U.includes(t)) && Je(), ue(t, e)
}

function ue(t, e) {
    return t.equals(e) || (t.v = e, t.version = Fe(), ae(t, B), Bt() && g !== null && g.f & k && !(g.f & I) && (E !== null && E.includes(t) ? (L(g, B), bt(g)) : q === null ? xr([t]) : q.push(t))), e
}

function ae(t, e) {
    var r = t.reactions;
    if (r !== null)
        for (var n = Bt(), s = r.length, i = 0; i < s; i++) {
            var o = r[i],
                f = o.f;
            f & B || !n && o === g || (L(o, e), f & (k | j) && (f & C ? ae(o, nt) : bt(o)))
        }
}
const tr = 1,
    er = 2,
    rr = 16,
    nr = 1,
    ir = 2,
    sr = 4,
    or = 2;
let fe = !1;
var Ht, ce, _e;

function lr() {
    if (Ht === void 0) {
        Ht = window;
        var t = Element.prototype,
            e = Node.prototype;
        ce = $t(e, "firstChild").get, _e = $t(e, "nextSibling").get, t.__click = void 0, t.__className = "", t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0
    }
}

function ve(t = "") {
    return document.createTextNode(t)
}

function de(t) {
    return ce.call(t)
}

function It(t) {
    return _e.call(t)
}

function G(t, e) {
    return de(t)
}

function M(t, e = 1, r = !1) {
    let n = t;
    for (; e--;) n = It(n);
    return n
}

function ur(t) {
    t.textContent = ""
}

function ar(t) {
    var e = C | B;
    g === null ? e |= j : g.f |= ie;
    var r = w !== null && w.f & C ? w : null;
    const n = {
        children: null,
        ctx: y,
        deps: null,
        equals: se,
        f: e,
        fn: t,
        reactions: null,
        v: null,
        version: 0,
        parent: r ?? g
    };
    return r !== null && (r.children ?? (r.children = [])).push(n), n
}

function pe(t) {
    var e = t.children;
    if (e !== null) {
        t.children = null;
        for (var r = 0; r < e.length; r += 1) {
            var n = e[r];
            n.f & C ? Lt(n) : Y(n)
        }
    }
}

function fr(t) {
    for (var e = t.parent; e !== null;) {
        if (!(e.f & C)) return e;
        e = e.parent
    }
    return null
}

function he(t) {
    var e, r = g;
    P(fr(t));
    try {
        pe(t), e = Se(t)
    } finally {
        P(r)
    }
    return e
}

function ge(t) {
    var e = he(t),
        r = (X || t.f & j) && t.deps !== null ? nt : k;
    L(t, r), t.equals(e) || (t.v = e, t.version = Fe())
}

function Lt(t) {
    pe(t), et(t, 0), L(t, it), t.v = t.children = t.deps = t.ctx = t.reactions = null
}

function be(t) {
    g === null && w === null && We(), w !== null && w.f & j && Ge(), qt && Ye()
}

function cr(t, e) {
    var r = e.last;
    r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t)
}

function Q(t, e, r, n = !0) {
    var s = (t & ht) !== 0,
        i = g,
        o = {
            ctx: y,
            deps: null,
            deriveds: null,
            nodes_start: null,
            nodes_end: null,
            f: t | B,
            first: null,
            fn: e,
            last: null,
            next: null,
            parent: s ? null : i,
            prev: null,
            teardown: null,
            transitions: null,
            version: 0
        };
    if (r) {
        var f = J;
        try {
            Vt(!0), gt(o), o.f |= ne
        } catch (l) {
            throw Y(o), l
        } finally {
            Vt(f)
        }
    } else e !== null && bt(o);
    var v = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & ie) === 0;
    if (!v && !s && n && (i !== null && cr(o, i), w !== null && w.f & C)) {
        var c = w;
        (c.children ?? (c.children = [])).push(o)
    }
    return o
}

function _r(t) {
    const e = Q(rt, null, !1);
    return L(e, k), e.teardown = t, e
}

function Et(t) {
    be();
    var e = g !== null && (g.f & I) !== 0 && y !== null && !y.m;
    if (e) {
        var r = y;
        (r.e ?? (r.e = [])).push({
            fn: t,
            effect: g,
            reaction: w
        })
    } else {
        var n = Mt(t);
        return n
    }
}

function vr(t) {
    return be(), pr(t)
}

function dr(t) {
    const e = Q(ht, t, !0);
    return () => {
        Y(e)
    }
}

function Mt(t) {
    return Q(re, t, !1)
}

function pr(t) {
    return Q(rt, t, !0)
}

function hr(t) {
    return me(t)
}

function me(t, e = 0) {
    return Q(rt | pt | e, t, !0)
}

function Dt(t, e = !0) {
    return Q(rt | I, t, !0, e)
}

function we(t) {
    var e = t.teardown;
    if (e !== null) {
        const r = qt,
            n = w;
        zt(!0), $(null);
        try {
            e.call(null)
        } finally {
            zt(r), $(n)
        }
    }
}

function ye(t) {
    var e = t.deriveds;
    if (e !== null) {
        t.deriveds = null;
        for (var r = 0; r < e.length; r += 1) Lt(e[r])
    }
}

function xe(t, e = !1) {
    var r = t.first;
    for (t.first = t.last = null; r !== null;) {
        var n = r.next;
        Y(r, e), r = n
    }
}

function gr(t) {
    for (var e = t.first; e !== null;) {
        var r = e.next;
        e.f & I || Y(e), e = r
    }
}

function Y(t, e = !0) {
    var r = !1;
    if ((e || t.f & ze) && t.nodes_start !== null) {
        for (var n = t.nodes_start, s = t.nodes_end; n !== null;) {
            var i = n === s ? null : It(n);
            n.remove(), n = i
        }
        r = !0
    }
    xe(t, e && !r), ye(t), et(t, 0), L(t, it);
    var o = t.transitions;
    if (o !== null)
        for (const v of o) v.stop();
    we(t);
    var f = t.parent;
    f !== null && f.first !== null && Ee(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.parent = t.fn = t.nodes_start = t.nodes_end = null
}

function Ee(t) {
    var e = t.parent,
        r = t.prev,
        n = t.next;
    r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r))
}

function br(t, e) {
    var r = [];
    Rt(t, r, !0), Te(r, () => {
        Y(t), e && e()
    })
}

function Te(t, e) {
    var r = t.length;
    if (r > 0) {
        var n = () => --r || e();
        for (var s of t) s.out(n)
    } else e()
}

function Rt(t, e, r) {
    if (!(t.f & O)) {
        if (t.f ^= O, t.transitions !== null)
            for (const o of t.transitions)(o.is_global || r) && e.push(o);
        for (var n = t.first; n !== null;) {
            var s = n.next,
                i = (n.f & Ct) !== 0 || (n.f & I) !== 0;
            Rt(n, e, i ? r : !1), n = s
        }
    }
}

function ke(t) {
    Ae(t, !0)
}

function Ae(t, e) {
    if (t.f & O) {
        ot(t) && gt(t), t.f ^= O;
        for (var r = t.first; r !== null;) {
            var n = r.next,
                s = (r.f & Ct) !== 0 || (r.f & I) !== 0;
            Ae(r, s ? e : !1), r = n
        }
        if (t.transitions !== null)
            for (const i of t.transitions)(i.is_global || e) && i.in()
    }
}
let Tt = !1,
    kt = [];

function mr() {
    Tt = !1;
    const t = kt.slice();
    kt = [], xt(t)
}

function wr(t) {
    Tt || (Tt = !0, queueMicrotask(mr)), kt.push(t)
}

function yr(t) {
    throw new Error("lifecycle_outside_component")
}
let dt = !1,
    J = !1,
    qt = !1;

function Vt(t) {
    J = t
}

function zt(t) {
    qt = t
}
let At = [],
    tt = 0;
let w = null;

function $(t) {
    w = t
}
let g = null;

function P(t) {
    g = t
}
let U = null,
    E = null,
    A = 0,
    q = null;

function xr(t) {
    q = t
}
let Ne = 0,
    X = !1,
    y = null;

function Fe() {
    return ++Ne
}

function Bt() {
    return !st || y !== null && y.l === null
}

function ot(t) {
    var o, f;
    var e = t.f;
    if (e & B) return !0;
    if (e & nt) {
        var r = t.deps,
            n = (e & j) !== 0;
        if (r !== null) {
            var s;
            if (e & _t) {
                for (s = 0; s < r.length; s++)((o = r[s]).reactions ?? (o.reactions = [])).push(t);
                t.f ^= _t
            }
            for (s = 0; s < r.length; s++) {
                var i = r[s];
                if (ot(i) && ge(i), n && g !== null && !X && !((f = i == null ? void 0 : i.reactions) != null && f.includes(t)) && (i.reactions ?? (i.reactions = [])).push(t), i.version > t.version) return !0
            }
        }
        n || L(t, k)
    }
    return !1
}

function Er(t, e, r) {
    throw t
}

function Se(t) {
    var u;
    var e = E,
        r = A,
        n = q,
        s = w,
        i = X,
        o = U,
        f = y,
        v = t.f;
    E = null, A = 0, q = null, w = v & (I | ht) ? null : t, X = !J && (v & j) !== 0, U = null, y = t.ctx;
    try {
        var c = (0, t.fn)(),
            l = t.deps;
        if (E !== null) {
            var a;
            if (et(t, A), l !== null && A > 0)
                for (l.length = A + E.length, a = 0; a < E.length; a++) l[A + a] = E[a];
            else t.deps = l = E;
            if (!X)
                for (a = A; a < l.length; a++)((u = l[a]).reactions ?? (u.reactions = [])).push(t)
        } else l !== null && A < l.length && (et(t, A), l.length = A);
        return c
    } finally {
        E = e, A = r, q = n, w = s, X = i, U = o, y = f
    }
}

function Tr(t, e) {
    let r = e.reactions;
    if (r !== null) {
        var n = r.indexOf(t);
        if (n !== -1) {
            var s = r.length - 1;
            s === 0 ? r = e.reactions = null : (r[n] = r[s], r.pop())
        }
    }
    r === null && e.f & C && (E === null || !E.includes(e)) && (L(e, nt), e.f & (j | _t) || (e.f ^= _t), et(e, 0))
}

function et(t, e) {
    var r = t.deps;
    if (r !== null)
        for (var n = e; n < r.length; n++) Tr(t, r[n])
}

function gt(t) {
    var e = t.f;
    if (!(e & it)) {
        L(t, k);
        var r = g;
        g = t;
        try {
            e & pt ? gr(t) : xe(t), ye(t), we(t);
            var n = Se(t);
            t.teardown = typeof n == "function" ? n : null, t.version = Ne
        } catch (s) {
            Er(s)
        } finally {
            g = r
        }
    }
}

function kr() {
    tt > 1e3 && (tt = 0, Ke()), tt++
}

function Ar(t) {
    var e = t.length;
    if (e !== 0) {
        kr();
        var r = J;
        J = !0;
        try {
            for (var n = 0; n < e; n++) {
                var s = t[n];
                s.f & k || (s.f ^= k);
                var i = [];
                Oe(s, i), Nr(i)
            }
        } finally {
            J = r
        }
    }
}

function Nr(t) {
    var e = t.length;
    if (e !== 0)
        for (var r = 0; r < e; r++) {
            var n = t[r];
            !(n.f & (it | O)) && ot(n) && (gt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Ee(n) : n.fn = null))
        }
}

function Fr() {
    if (dt = !1, tt > 1001) return;
    const t = At;
    At = [], Ar(t), dt || (tt = 0)
}

function bt(t) {
    dt || (dt = !0, queueMicrotask(Fr));
    for (var e = t; e.parent !== null;) {
        e = e.parent;
        var r = e.f;
        if (r & (ht | I)) {
            if (!(r & k)) return;
            e.f ^= k
        }
    }
    At.push(e)
}

function Oe(t, e) {
    var r = t.first,
        n = [];
    t: for (; r !== null;) {
        var s = r.f,
            i = (s & I) !== 0,
            o = i && (s & k) !== 0;
        if (!o && !(s & O))
            if (s & rt) {
                i ? r.f ^= k : ot(r) && gt(r);
                var f = r.first;
                if (f !== null) {
                    r = f;
                    continue
                }
            } else s & re && n.push(r);
        var v = r.next;
        if (v === null) {
            let a = r.parent;
            for (; a !== null;) {
                if (t === a) break t;
                var c = a.next;
                if (c !== null) {
                    r = c;
                    continue t
                }
                a = a.parent
            }
        }
        r = v
    }
    for (var l = 0; l < n.length; l++) f = n[l], e.push(f), Oe(f, e)
}

function z(t) {
    var l;
    var e = t.f,
        r = (e & C) !== 0;
    if (r && e & it) {
        var n = he(t);
        return Lt(t), n
    }
    if (w !== null) {
        U !== null && U.includes(t) && Xe();
        var s = w.deps;
        E === null && s !== null && s[A] === t ? A++ : E === null ? E = [t] : E.push(t), q !== null && g !== null && g.f & k && !(g.f & I) && q.includes(t) && (L(g, B), bt(g))
    } else if (r && t.deps === null)
        for (var i = t, o = i.parent, f = i; o !== null;)
            if (o.f & C) {
                var v = o;
                f = v, o = v.parent
            } else {
                var c = o;
                (l = c.deriveds) != null && l.includes(f) || (c.deriveds ?? (c.deriveds = [])).push(f);
                break
            } return r && (i = t, ot(i) && ge(i)), t.v
}

function mt(t) {
    const e = w;
    try {
        return w = null, t()
    } finally {
        w = e
    }
}
const Sr = ~(B | nt | k);

function L(t, e) {
    t.f = t.f & Sr | e
}

function Ce(t, e = !1, r) {
    y = {
        p: y,
        c: null,
        e: null,
        m: !1,
        s: t,
        x: null,
        l: null
    }, st && !e && (y.l = {
        s: null,
        u: null,
        r1: [],
        r2: vt(!1)
    })
}

function Ie(t) {
    const e = y;
    if (e !== null) {
        const o = e.e;
        if (o !== null) {
            var r = g,
                n = w;
            e.e = null;
            try {
                for (var s = 0; s < o.length; s++) {
                    var i = o[s];
                    P(i.effect), $(i.reaction), Mt(i.fn)
                }
            } finally {
                P(r), $(n)
            }
        }
        y = e.p, e.m = !0
    }
    return {}
}

function Or(t) {
    if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
        if (Pt in t) Nt(t);
        else if (!Array.isArray(t))
            for (let e in t) {
                const r = t[e];
                typeof r == "object" && r && Pt in r && Nt(r)
            }
    }
}

function Nt(t, e = new Set) {
    if (typeof t == "object" && t !== null && !(t instanceof EventTarget) && !e.has(t)) {
        e.add(t), t instanceof Date && t.getTime();
        for (let n in t) try {
            Nt(t[n], e)
        } catch {}
        const r = yt(t);
        if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
            const n = ee(r);
            for (let s in n) {
                const i = n[s].get;
                if (i) try {
                    i.call(t)
                } catch {}
            }
        }
    }
}
const Cr = new Set,
    Ut = new Set;

function at(t) {
    var b;
    var e = this,
        r = e.ownerDocument,
        n = t.type,
        s = ((b = t.composedPath) == null ? void 0 : b.call(t)) || [],
        i = s[0] || t.target,
        o = 0,
        f = t.__root;
    if (f) {
        var v = s.indexOf(f);
        if (v !== -1 && (e === document || e === window)) {
            t.__root = e;
            return
        }
        var c = s.indexOf(e);
        if (c === -1) return;
        v <= c && (o = v)
    }
    if (i = s[o] || t.target, i !== e) {
        Pe(t, "currentTarget", {
            configurable: !0,
            get() {
                return i || r
            }
        });
        var l = w,
            a = g;
        $(null), P(null);
        try {
            for (var u, _ = []; i !== null;) {
                var d = i.assignedSlot || i.parentNode || i.host || null;
                try {
                    var h = i["__" + n];
                    if (h !== void 0 && !i.disabled)
                        if (te(h)) {
                            var [m, ...p] = h;
                            m.apply(i, [t, ...p])
                        } else h.call(i, t)
                } catch (T) {
                    u ? _.push(T) : u = T
                }
                if (t.cancelBubble || d === e || d === null) break;
                i = d
            }
            if (u) {
                for (let T of _) queueMicrotask(() => {
                    throw T
                });
                throw u
            }
        } finally {
            t.__root = e, delete t.currentTarget, $(l), P(a)
        }
    }
}

function Ir(t) {
    var e = document.createElement("template");
    return e.innerHTML = t, e.content
}

function Lr(t, e) {
    var r = g;
    r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e)
}

function Le(t, e) {
    var r = (e & or) !== 0,
        n, s = !t.startsWith("<!>");
    return () => {
        n === void 0 && (n = Ir(s ? t : "<!>" + t), n = de(n));
        var i = r ? document.importNode(n, !0) : n.cloneNode(!0);
        return Lr(i, i), i
    }
}

function jt(t, e) {
    t !== null && t.before(e)
}
const Mr = ["touchstart", "touchmove"];

function Dr(t) {
    return Mr.includes(t)
}
let Ft = !0;

function wt(t, e) {
    var r = e == null ? "" : typeof e == "object" ? e + "" : e;
    r !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = r, t.nodeValue = r == null ? "" : r + "")
}

function Rr(t, e) {
    return qr(t, e)
}
const W = new Map;

function qr(t, {
    target: e,
    anchor: r,
    props: n = {},
    events: s,
    context: i,
    intro: o = !0
}) {
    lr();
    var f = new Set,
        v = a => {
            for (var u = 0; u < a.length; u++) {
                var _ = a[u];
                if (!f.has(_)) {
                    f.add(_);
                    var d = Dr(_);
                    e.addEventListener(_, at, {
                        passive: d
                    });
                    var h = W.get(_);
                    h === void 0 ? (document.addEventListener(_, at, {
                        passive: d
                    }), W.set(_, 1)) : W.set(_, h + 1)
                }
            }
        };
    v(Ot(Cr)), Ut.add(v);
    var c = void 0,
        l = dr(() => {
            var a = r ?? e.appendChild(ve());
            return Dt(() => {
                if (i) {
                    Ce({});
                    var u = y;
                    u.c = i
                }
                s && (n.$$events = s), Ft = o, c = t(a, n) || {}, Ft = !0, i && Ie()
            }), () => {
                var d;
                for (var u of f) {
                    e.removeEventListener(u, at);
                    var _ = W.get(u);
                    --_ === 0 ? (document.removeEventListener(u, at), W.delete(u)) : W.set(u, _)
                }
                Ut.delete(v), Yt.delete(c), a !== r && ((d = a.parentNode) == null || d.removeChild(a))
            }
        });
    return Yt.set(c, l), c
}
let Yt = new WeakMap;

function Br(t, e) {
    return e
}

function $r(t, e, r, n) {
    for (var s = [], i = e.length, o = 0; o < i; o++) Rt(e[o].e, s, !0);
    var f = i > 0 && s.length === 0 && r !== null;
    if (f) {
        var v = r.parentNode;
        ur(v), v.append(r), n.clear(), D(t, e[0].prev, e[i - 1].next)
    }
    Te(s, () => {
        for (var c = 0; c < i; c++) {
            var l = e[c];
            f || (n.delete(l.k), D(t, l.prev, l.next)), Y(l.e, !f)
        }
    })
}

function Pr(t, e, r, n, s, i = null) {
    var o = t,
        f = {
            flags: e,
            items: new Map,
            first: null
        };
    {
        var v = t;
        o = v.appendChild(ve())
    }
    var c = null,
        l = !1;
    me(() => {
        var a = r(),
            u = te(a) ? a : a == null ? [] : Ot(a),
            _ = u.length;
        if (!(l && _ === 0)) {
            l = _ === 0;
            {
                var d = w;
                Hr(u, f, o, s, e, (d.f & O) !== 0, n)
            }
            i !== null && (_ === 0 ? c ? ke(c) : c = Dt(() => i(o)) : c !== null && br(c, () => {
                c = null
            })), r()
        }
    })
}

function Hr(t, e, r, n, s, i, o) {
    var f = t.length,
        v = e.items,
        c = e.first,
        l = c,
        a, u = null,
        _ = [],
        d = [],
        h, m, p, b;
    for (b = 0; b < f; b += 1) {
        if (h = t[b], m = o(h, b), p = v.get(m), p === void 0) {
            var T = l ? l.e.nodes_start : r;
            u = zr(T, e, u, u === null ? e.first : u.next, h, m, b, n, s), v.set(m, u), _ = [], d = [], l = u.next;
            continue
        }
        if (Vr(p, h, b), p.e.f & O && ke(p.e), p !== l) {
            if (a !== void 0 && a.has(p)) {
                if (_.length < d.length) {
                    var S = d[0],
                        x;
                    u = S.prev;
                    var H = _[0],
                        V = _[_.length - 1];
                    for (x = 0; x < _.length; x += 1) Gt(_[x], S, r);
                    for (x = 0; x < d.length; x += 1) a.delete(d[x]);
                    D(e, H.prev, V.next), D(e, u, H), D(e, V, S), l = S, u = V, b -= 1, _ = [], d = []
                } else a.delete(p), Gt(p, l, r), D(e, p.prev, p.next), D(e, p, u === null ? e.first : u.next), D(e, u, p), u = p;
                continue
            }
            for (_ = [], d = []; l !== null && l.k !== m;)(i || !(l.e.f & O)) && (a ?? (a = new Set)).add(l), d.push(l), l = l.next;
            if (l === null) continue;
            p = l
        }
        _.push(p), u = p, l = p.next
    }
    if (l !== null || a !== void 0) {
        for (var N = a === void 0 ? [] : Ot(a); l !== null;)(i || !(l.e.f & O)) && N.push(l), l = l.next;
        var lt = N.length;
        if (lt > 0) {
            var ut = f === 0 ? r : null;
            $r(e, N, ut, v)
        }
    }
    g.first = e.first && e.first.e, g.last = u && u.e
}

function Vr(t, e, r, n) {
    ue(t.v, e), t.i = r
}

function zr(t, e, r, n, s, i, o, f, v) {
    var c = (v & tr) !== 0,
        l = (v & rr) === 0,
        a = c ? l ? le(s) : vt(s) : s,
        u = v & er ? vt(o) : o,
        _ = {
            i: u,
            v: a,
            k: i,
            a: null,
            e: null,
            prev: r,
            next: n
        };
    try {
        return _.e = Dt(() => f(t, a, u), fe), _.e.prev = r && r.e, _.e.next = n && n.e, r === null ? e.first = _ : (r.next = _, r.e.next = _.e), n !== null && (n.prev = _, n.e.prev = _.e), _
    } finally {}
}

function Gt(t, e, r) {
    for (var n = t.next ? t.next.e.nodes_start : r, s = e ? e.e.nodes_start : r, i = t.e.nodes_start; i !== n;) {
        var o = It(i);
        s.before(i), i = o
    }
}

function D(t, e, r) {
    e === null ? t.first = r : (e.next = r, e.e.next = r && r.e), r !== null && (r.prev = e, r.e.prev = e && e.e)
}

function ft(t, e, r, n) {
    var s = t.__attributes ?? (t.__attributes = {});
    s[e] !== (s[e] = r) && (e === "style" && "__styles" in t && (t.__styles = {}), e === "loading" && (t[Ue] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && Ur(t).includes(e) ? t[e] = r : t.setAttribute(e, r))
}
var Wt = new Map;

function Ur(t) {
    var e = Wt.get(t.nodeName);
    if (e) return e;
    Wt.set(t.nodeName, e = []);
    for (var r, n = yt(t), s = Element.prototype; s !== n;) {
        r = ee(n);
        for (var i in r) r[i].set && e.push(i);
        n = yt(n)
    }
    return e
}

function Z(t, e) {
    var r = t.__className,
        n = jr(e);
    (r !== n || fe) && (e == null ? t.removeAttribute("class") : t.className = n, t.__className = n)
}

function jr(t) {
    return t ?? ""
}
const Yr = () => performance.now(),
    R = {
        tick: t => requestAnimationFrame(t),
        now: () => Yr(),
        tasks: new Set
    };

function Me(t) {
    R.tasks.forEach(e => {
        e.c(t) || (R.tasks.delete(e), e.f())
    }), R.tasks.size !== 0 && R.tick(Me)
}

function Gr(t) {
    let e;
    return R.tasks.size === 0 && R.tick(Me), {
        promise: new Promise(r => {
            R.tasks.add(e = {
                c: t,
                f: r
            })
        }),
        abort() {
            R.tasks.delete(e)
        }
    }
}

function ct(t, e) {
    t.dispatchEvent(new CustomEvent(e))
}

function Wr(t) {
    if (t === "float") return "cssFloat";
    if (t === "offset") return "cssOffset";
    if (t.startsWith("--")) return t;
    const e = t.split("-");
    return e.length === 1 ? e[0] : e[0] + e.slice(1).map(r => r[0].toUpperCase() + r.slice(1)).join("")
}

function Kt(t) {
    const e = {},
        r = t.split(";");
    for (const n of r) {
        const [s, i] = n.split(":");
        if (!s || i === void 0) break;
        const o = Wr(s.trim());
        e[o] = i.trim()
    }
    return e
}
const Kr = t => t;

function Xt(t, e, r, n) {
    var s = (t & nr) !== 0,
        i = (t & ir) !== 0,
        o = s && i,
        f = (t & sr) !== 0,
        v = o ? "both" : s ? "in" : "out",
        c, l = e.inert,
        a, u;

    function _() {
        var b = w,
            T = g;
        $(null), P(null);
        try {
            return c ?? (c = r()(e, (n == null ? void 0 : n()) ?? {}, {
                direction: v
            }))
        } finally {
            $(b), P(T)
        }
    }
    var d = {
            is_global: f,
            in() {
                var b;
                if (e.inert = l, !s) {
                    u == null || u.abort(), (b = u == null ? void 0 : u.reset) == null || b.call(u);
                    return
                }
                i || a == null || a.abort(), ct(e, "introstart"), a = St(e, _(), u, 1, () => {
                    ct(e, "introend"), a == null || a.abort(), a = c = void 0
                })
            },
            out(b) {
                if (!i) {
                    b == null || b(), c = void 0;
                    return
                }
                e.inert = !0, ct(e, "outrostart"), u = St(e, _(), a, 0, () => {
                    ct(e, "outroend"), b == null || b()
                })
            },
            stop: () => {
                a == null || a.abort(), u == null || u.abort()
            }
        },
        h = g;
    if ((h.transitions ?? (h.transitions = [])).push(d), s && Ft) {
        var m = f;
        if (!m) {
            for (var p = h.parent; p && p.f & Ct;)
                for (;
                    (p = p.parent) && !(p.f & pt););
            m = !p || (p.f & ne) !== 0
        }
        m && Mt(() => {
            mt(() => d.in())
        })
    }
}

function St(t, e, r, n, s) {
    var i = n === 1;
    if (He(e)) {
        var o, f = !1;
        return wr(() => {
            if (!f) {
                var m = e({
                    direction: i ? "in" : "out"
                });
                o = St(t, m, r, n, s)
            }
        }), {
            abort: () => {
                f = !0, o == null || o.abort()
            },
            deactivate: () => o.deactivate(),
            reset: () => o.reset(),
            t: () => o.t()
        }
    }
    if (r == null || r.deactivate(), !(e != null && e.duration)) return s(), {
        abort: F,
        deactivate: F,
        reset: F,
        t: () => n
    };
    const {
        delay: v = 0,
        css: c,
        tick: l,
        easing: a = Kr
    } = e;
    var u = [];
    if (i && r === void 0 && (l && l(0, 1), c)) {
        var _ = Kt(c(0, 1));
        u.push(_, _)
    }
    var d = () => 1 - n,
        h = t.animate(u, {
            duration: v
        });
    return h.onfinish = () => {
        var m = (r == null ? void 0 : r.t()) ?? 1 - n;
        r == null || r.abort();
        var p = n - m,
            b = e.duration * Math.abs(p),
            T = [];
        if (b > 0) {
            if (c)
                for (var S = Math.ceil(b / 16.666666666666668), x = 0; x <= S; x += 1) {
                    var H = m + p * a(x / S),
                        V = c(H, 1 - H);
                    T.push(Kt(V))
                }
            d = () => {
                var N = h.currentTime;
                return m + p * a(N / b)
            }, l && Gr(() => {
                if (h.playState !== "running") return !1;
                var N = d();
                return l(N, 1 - N), !0
            })
        }
        h = t.animate(T, {
            duration: b,
            fill: "forwards"
        }), h.onfinish = () => {
            d = () => n, l == null || l(n, 1 - n), s()
        }
    }, {
        abort: () => {
            h && (h.cancel(), h.effect = null, h.onfinish = F)
        },
        deactivate: () => {
            s = F
        },
        reset: () => {
            n === 0 && (l == null || l(1, 0))
        },
        t: () => d()
    }
}

function Xr(t = !1) {
    const e = y,
        r = e.l.u;
    if (!r) return;
    let n = () => Or(e.s);
    if (t) {
        let s = 0,
            i = {};
        const o = ar(() => {
            let f = !1;
            const v = e.s;
            for (const c in v) v[c] !== i[c] && (i[c] = v[c], f = !0);
            return f && s++, s
        });
        n = () => z(o)
    }
    r.b.length && vr(() => {
        Jt(e, n), xt(r.b)
    }), Et(() => {
        const s = mt(() => r.m.map(Ve));
        return () => {
            for (const i of s) typeof i == "function" && i()
        }
    }), r.a.length && Et(() => {
        Jt(e, n), xt(r.a)
    })
}

function Jt(t, e) {
    if (t.l.s)
        for (const r of t.l.s) z(r);
    e()
}

function Jr(t, e, r) {
    if (t == null) return e(void 0), F;
    const n = mt(() => t.subscribe(e, r));
    return n.unsubscribe ? () => n.unsubscribe() : n
}

function Qr(t, e, r) {
    const n = r[e] ?? (r[e] = {
        store: null,
        source: le(void 0),
        unsubscribe: F
    });
    if (n.store !== t)
        if (n.unsubscribe(), n.store = t ?? null, t == null) n.source.v = void 0, n.unsubscribe = F;
        else {
            var s = !0;
            n.unsubscribe = Jr(t, i => {
                s ? n.source.v = i : Ze(n.source, i)
            }), s = !1
        } return z(n.source)
}

function Zr() {
    const t = {};
    return _r(() => {
        for (var e in t) t[e].unsubscribe()
    }), t
}

function tn(t) {
    y === null && yr(), st && y.l !== null ? en(y).m.push(t) : Et(() => {
        const e = mt(t);
        if (typeof e == "function") return e
    })
}

function en(t) {
    var e = t.l;
    return e.u ?? (e.u = {
        a: [],
        b: [],
        m: []
    })
}
const rn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(rn);
Qe();
const K = [];

function nn(t, e = F) {
    let r = null;
    const n = new Set;

    function s(f) {
        if (oe(t, f) && (t = f, r)) {
            const v = !K.length;
            for (const c of n) c[1](), K.push(c, t);
            if (v) {
                for (let c = 0; c < K.length; c += 2) K[c][0](K[c + 1]);
                K.length = 0
            }
        }
    }

    function i(f) {
        s(f(t))
    }

    function o(f, v = F) {
        const c = [f, v];
        return n.add(c), n.size === 1 && (r = e(s, i) || F), f(t), () => {
            n.delete(c), n.size === 0 && r && (r(), r = null)
        }
    }
    return {
        set: s,
        update: i,
        subscribe: o
    }
}

function sn(t) {
    const e = t - 1;
    return e * e * e + 1
}

function Qt(t) {
    const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"]
}

function Zt(t, {
    delay: e = 0,
    duration: r = 400,
    easing: n = sn,
    x: s = 0,
    y: i = 0,
    opacity: o = 0
} = {}) {
    const f = getComputedStyle(t),
        v = +f.opacity,
        c = f.transform === "none" ? "" : f.transform,
        l = v * (1 - o),
        [a, u] = Qt(s),
        [_, d] = Qt(i);
    return {
        delay: e,
        duration: r,
        easing: n,
        css: (h, m) => `
			transform: ${c} translate(${(1-h)*a}${u}, ${(1-h)*_}${d});
			opacity: ${v-l*m}`
    }
}
var on = Le('<div class="rni-notification-card"><div class="rni-notification__text"><span class="rni-notification__prefix">ได้รับ</span> <span class="rni-notification__label"> </span> <span class="rni-notification__count-label">จำนวน</span> <span class="rni-notification__amount"> </span></div> <img alt="Item" class="rni-notification__image"></div>'),
    ln = Le(`<main class="rni-notify-root flex flex-col _gap-[8px] items-end justify-end h-screen _pb-[80px] _pr-[16px] svelte-hpev1t"></main>`);

function un(t, e) {
    Ce(e, !1);
    const r = Zr(),
        n = () => Qr(i, "$Notification", r);
    let s = {
            Add: "linear-gradient(90deg, rgba(147, 255, 156, 0.25) 0%, rgba(147, 255, 156, 0.00) 100%), rgba(0, 0, 0, 0.75);",
            Remove: "linear-gradient(90deg, rgba(255, 43, 43, 0.25) 0%, rgba(255, 43, 43, 0.00) 100%), rgba(0, 0, 0, 0.75);"
        },
        i = nn([]),
        notifyDuration = 5e3;

    function o(l, a, u, _, g, k) {
        i.update(d => (d.push({
            Type: l,
            Name: a,
            Label: u,
            Amount: _,
            ImageSrc: k
        }), d)), setTimeout(() => {
            i.update(d => (d.shift(), d))
        }, g ?? notifyDuration)
    }
    window.AddNotification = o;

    function f() {
        const a = window.innerHeight / 1080;
        document.documentElement.style.setProperty("--scale-factor", a.toString())
    }

    function v(l) {
        const {
            action: a,
            Type: u,
            Name: _,
            Amount: d,
            Label: h,
            Duration: m,
            ImageSrc: k
        } = l.data;
        switch (a) {
            case "addNotification":
                o(u, _, h, d, m, k);
                break
        }
    }
    tn(() => (f(), window.addEventListener("resize", f), window.addEventListener("message", v), () => {
        window.removeEventListener("resize", f), window.removeEventListener("message", v)
    })), Xr();
    var c = ln();
    Pr(c, 5, n, Br, (l, a) => {
        let u = () => z(a).Type,
            _ = () => z(a).Amount,
            d = () => z(a).Name,
            h = () => z(a).Label,
            k = () => z(a).ImageSrc;
        const m0 = () => `${u()=="Add"?"+":"-"}${Math.abs(Number(_() ?? 0))}`;
        var m = on(),
            p = G(m),
            b = G(p),
            T = G(b),
            S = M(b, 2),
            x = G(S),
            H = M(S, 4),
            V = G(H),
            N = M(p, 2);
        hr(() => {
            Z(m, `rni-notification-card ${(u()=="Add"?"rni-notification-card--add":"rni-notification-card--remove")??""} svelte-hpev1t`), wt(T, u()=="Add"?"ได้รับ":"เสีย"), wt(x, h() ?? d() ?? ""), wt(V, m0()), ft(N, "src", k() ?? `nui://nc_inventory/html/img/items/${d()??""}.png`)
        }), Xt(1, m, () => Zt, () => ({
            y: 24,
            duration: 250
        })), Xt(2, m, () => Zt, () => ({
            y: 24,
            duration: 250
        })), jt(l, m)
    }), jt(t, c), Ie()
}
Rr(un, {
    target: document.getElementById("app")
});