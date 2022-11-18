import { useSSRContext, resolveComponent, ref, defineComponent, onMounted, createSSRApp } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, renderToString } from "vue/server-renderer";
import axios from "axios";
import { useRouter, createRouter, createMemoryHistory } from "vue-router";
import { basename } from "path";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const useFetch = async (url, config = {}, mekToken) => {
  const data = ref();
  const response = ref();
  const error = ref();
  const loading = ref(false);
  const defaultRequestConfig = {
    headers: {
      accept: "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };
  const dataRequest = async () => {
    loading.value = true;
    try {
      const result = await axios.request({
        url,
        ...Object.assign(defaultRequestConfig, config)
      });
      response.value = result;
      data.value = result.data;
    } catch (exception) {
      error.value = exception;
    } finally {
      loading.value = false;
    }
  };
  await dataRequest();
  return {
    data,
    response,
    error,
    loading
  };
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const serverAuthenticated = ref();
    const serverUser = ref();
    const serverAuthenticatedReq = async () => {
      const { data, response, error } = await useFetch(`/auth/isAuthenticated`, {});
      serverAuthenticated.value = data.value;
    };
    const serverUserReq = async () => {
      const { data, response, error } = await useFetch(`/auth/user`, {});
      serverUser.value = data.value;
    };
    const init = async () => {
      await serverAuthenticatedReq();
      await serverUserReq();
    };
    init();
    onMounted(async () => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div><h1>User Data</h1><p>Server authenticated = ${ssrInterpolate(serverAuthenticated.value)}</p><p>user = ${ssrInterpolate(serverUser.value)}</p></div><a href="/auth/login">Server Login</a><br><a href="/auth/logout">Server Logout</a><br><button>Programmatic Login</button><br><button>Programmatic Logout</button></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Home.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Hello",
  __ssrInlineRender: true,
  props: {
    msg: null
  },
  setup(__props) {
    const count = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 data-v-b03bb75e>${ssrInterpolate(__props.msg)}</h1><div class="card" data-v-b03bb75e><button type="button" data-v-b03bb75e>count is ${ssrInterpolate(count.value)}</button><p data-v-b03bb75e> Edit <code data-v-b03bb75e>components/HelloWorld.vue</code> to test HMR </p></div><p data-v-b03bb75e> Check out <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" data-v-b03bb75e>create-vue</a>, the official Vue + Vite starter </p><p data-v-b03bb75e> Install <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-b03bb75e>Volar</a> in your IDE for a better DX </p><p class="read-the-docs" data-v-b03bb75e>Click on the Vite and Vue logos to learn more</p><!--]-->`);
    };
  }
});
const Hello_vue_vue_type_style_index_0_scoped_b03bb75e_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Hello.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Hello = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b03bb75e"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>404</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Error$1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
var u = function(e, t) {
  return (u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e2, t2) {
    e2.__proto__ = t2;
  } || function(e2, t2) {
    for (var n in t2)
      Object.prototype.hasOwnProperty.call(t2, n) && (e2[n] = t2[n]);
  })(e, t);
};
function l(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function n() {
    this.constructor = e;
  }
  u(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var v = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function b(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function g(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}
var w, S, k = function(e) {
  return e && e.Math == Math && e;
}, Z = k("object" == typeof globalThis && globalThis) || k("object" == typeof window && window) || k("object" == typeof self && self) || k("object" == typeof v && v) || function() {
  return this;
}() || Function("return this")(), _ = function(e) {
  try {
    return !!e();
  } catch (e2) {
    return true;
  }
}, I = !_(function() {
  return 7 != Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), W = !_(function() {
  var e = function() {
  }.bind();
  return "function" != typeof e || e.hasOwnProperty("prototype");
}), x = Function.prototype.call, G = W ? x.bind(x) : function() {
  return x.apply(x, arguments);
}, X = {}.propertyIsEnumerable, L = Object.getOwnPropertyDescriptor, C = { f: L && !X.call({ 1: 2 }, 1) ? function(e) {
  var t = L(this, e);
  return !!t && t.enumerable;
} : X }, R = function(e, t) {
  return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
}, j = Function.prototype, K = j.bind, T = j.call, O = W && K.bind(T, T), Y = W ? function(e) {
  return e && O(e);
} : function(e) {
  return e && function() {
    return T.apply(e, arguments);
  };
}, V = Y({}.toString), H = Y("".slice), J = function(e) {
  return H(V(e), 8, -1);
}, N = Z.Object, F = Y("".split), P = _(function() {
  return !N("z").propertyIsEnumerable(0);
}) ? function(e) {
  return "String" == J(e) ? F(e, "") : N(e);
} : N, U = Z.TypeError, E = function(e) {
  if (null == e)
    throw U("Can't call method on " + e);
  return e;
}, z = function(e) {
  return P(E(e));
}, A = function(e) {
  return "function" == typeof e;
}, D = function(e) {
  return "object" == typeof e ? null !== e : A(e);
}, B = function(e) {
  return A(e) ? e : void 0;
}, M = function(e, t) {
  return arguments.length < 2 ? B(Z[e]) : Z[e] && Z[e][t];
}, Q = Y({}.isPrototypeOf), q = M("navigator", "userAgent") || "", $ = Z.process, ee = Z.Deno, te = $ && $.versions || ee && ee.version, ne = te && te.v8;
ne && (S = (w = ne.split("."))[0] > 0 && w[0] < 4 ? 1 : +(w[0] + w[1])), !S && q && (!(w = q.match(/Edge\/(\d+)/)) || w[1] >= 74) && (w = q.match(/Chrome\/(\d+)/)) && (S = +w[1]);
var re = S, oe = !!Object.getOwnPropertySymbols && !_(function() {
  var e = Symbol();
  return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && re && re < 41;
}), ie = oe && !Symbol.sham && "symbol" == typeof Symbol.iterator, ce = Z.Object, ae = ie ? function(e) {
  return "symbol" == typeof e;
} : function(e) {
  var t = M("Symbol");
  return A(t) && Q(t.prototype, ce(e));
}, se = Z.String, ue = function(e) {
  try {
    return se(e);
  } catch (e2) {
    return "Object";
  }
}, le = Z.TypeError, de = function(e) {
  if (A(e))
    return e;
  throw le(ue(e) + " is not a function");
}, fe = function(e, t) {
  var n = e[t];
  return null == n ? void 0 : de(n);
}, he = Z.TypeError, pe = Object.defineProperty, ye = function(e, t) {
  try {
    pe(Z, e, { value: t, configurable: true, writable: true });
  } catch (n) {
    Z[e] = t;
  }
  return t;
}, me = Z["__core-js_shared__"] || ye("__core-js_shared__", {}), ve = g(function(e) {
  (e.exports = function(e2, t) {
    return me[e2] || (me[e2] = void 0 !== t ? t : {});
  })("versions", []).push({ version: "3.22.6", mode: "global", copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.22.6/LICENSE", source: "https://github.com/zloirock/core-js" });
}), be = Z.Object, ge = function(e) {
  return be(E(e));
}, we = Y({}.hasOwnProperty), Se = Object.hasOwn || function(e, t) {
  return we(ge(e), t);
}, ke = 0, Ze = Math.random(), _e = Y(1 .toString), Ie = function(e) {
  return "Symbol(" + (void 0 === e ? "" : e) + ")_" + _e(++ke + Ze, 36);
}, We = ve("wks"), xe = Z.Symbol, Ge = xe && xe.for, Xe = ie ? xe : xe && xe.withoutSetter || Ie, Le = function(e) {
  if (!Se(We, e) || !oe && "string" != typeof We[e]) {
    var t = "Symbol." + e;
    oe && Se(xe, e) ? We[e] = xe[e] : We[e] = ie && Ge ? Ge(t) : Xe(t);
  }
  return We[e];
}, Ce = Z.TypeError, Re = Le("toPrimitive"), je = function(e) {
  var t = function(e2, t2) {
    if (!D(e2) || ae(e2))
      return e2;
    var n, r = fe(e2, Re);
    if (r) {
      if (void 0 === t2 && (t2 = "default"), n = G(r, e2, t2), !D(n) || ae(n))
        return n;
      throw Ce("Can't convert object to primitive value");
    }
    return void 0 === t2 && (t2 = "number"), function(e3, t3) {
      var n2, r2;
      if ("string" === t3 && A(n2 = e3.toString) && !D(r2 = G(n2, e3)))
        return r2;
      if (A(n2 = e3.valueOf) && !D(r2 = G(n2, e3)))
        return r2;
      if ("string" !== t3 && A(n2 = e3.toString) && !D(r2 = G(n2, e3)))
        return r2;
      throw he("Can't convert object to primitive value");
    }(e2, t2);
  }(e, "string");
  return ae(t) ? t : t + "";
}, Ke = Z.document, Te = D(Ke) && D(Ke.createElement), Oe = function(e) {
  return Te ? Ke.createElement(e) : {};
}, Ye = !I && !_(function() {
  return 7 != Object.defineProperty(Oe("div"), "a", { get: function() {
    return 7;
  } }).a;
}), Ve = Object.getOwnPropertyDescriptor, He = { f: I ? Ve : function(e, t) {
  if (e = z(e), t = je(t), Ye)
    try {
      return Ve(e, t);
    } catch (e2) {
    }
  if (Se(e, t))
    return R(!G(C.f, e, t), e[t]);
} }, Je = I && _(function() {
  return 42 != Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), Ne = Z.String, Fe = Z.TypeError, Pe = function(e) {
  if (D(e))
    return e;
  throw Fe(Ne(e) + " is not an object");
}, Ue = Z.TypeError, Ee = Object.defineProperty, ze = Object.getOwnPropertyDescriptor, Ae = { f: I ? Je ? function(e, t, n) {
  if (Pe(e), t = je(t), Pe(n), "function" == typeof e && "prototype" === t && "value" in n && "writable" in n && !n.writable) {
    var r = ze(e, t);
    r && r.writable && (e[t] = n.value, n = { configurable: "configurable" in n ? n.configurable : r.configurable, enumerable: "enumerable" in n ? n.enumerable : r.enumerable, writable: false });
  }
  return Ee(e, t, n);
} : Ee : function(e, t, n) {
  if (Pe(e), t = je(t), Pe(n), Ye)
    try {
      return Ee(e, t, n);
    } catch (e2) {
    }
  if ("get" in n || "set" in n)
    throw Ue("Accessors not supported");
  return "value" in n && (e[t] = n.value), e;
} }, De = I ? function(e, t, n) {
  return Ae.f(e, t, R(1, n));
} : function(e, t, n) {
  return e[t] = n, e;
}, Be = Function.prototype, Me = I && Object.getOwnPropertyDescriptor, Qe = Se(Be, "name"), qe = { EXISTS: Qe, PROPER: Qe && "something" === function() {
}.name, CONFIGURABLE: Qe && (!I || I && Me(Be, "name").configurable) }, $e = Y(Function.toString);
A(me.inspectSource) || (me.inspectSource = function(e) {
  return $e(e);
});
var et, tt, nt, rt = me.inspectSource, ot = Z.WeakMap, it = A(ot) && /native code/.test(rt(ot)), ct = ve("keys"), at = function(e) {
  return ct[e] || (ct[e] = Ie(e));
}, st = {}, ut = Z.TypeError, lt = Z.WeakMap;
if (it || me.state) {
  var dt = me.state || (me.state = new lt()), ft = Y(dt.get), ht = Y(dt.has), pt = Y(dt.set);
  et = function(e, t) {
    if (ht(dt, e))
      throw new ut("Object already initialized");
    return t.facade = e, pt(dt, e, t), t;
  }, tt = function(e) {
    return ft(dt, e) || {};
  }, nt = function(e) {
    return ht(dt, e);
  };
} else {
  var yt = at("state");
  st[yt] = true, et = function(e, t) {
    if (Se(e, yt))
      throw new ut("Object already initialized");
    return t.facade = e, De(e, yt, t), t;
  }, tt = function(e) {
    return Se(e, yt) ? e[yt] : {};
  }, nt = function(e) {
    return Se(e, yt);
  };
}
var mt = { set: et, get: tt, has: nt, enforce: function(e) {
  return nt(e) ? tt(e) : et(e, {});
}, getterFor: function(e) {
  return function(t) {
    var n;
    if (!D(t) || (n = tt(t)).type !== e)
      throw ut("Incompatible receiver, " + e + " required");
    return n;
  };
} }, vt = g(function(e) {
  var t = qe.CONFIGURABLE, n = mt.enforce, r = mt.get, o = Object.defineProperty, i = I && !_(function() {
    return 8 !== o(function() {
    }, "length", { value: 8 }).length;
  }), c = String(String).split("String"), a = e.exports = function(e2, r2, a2) {
    if ("Symbol(" === String(r2).slice(0, 7) && (r2 = "[" + String(r2).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), a2 && a2.getter && (r2 = "get " + r2), a2 && a2.setter && (r2 = "set " + r2), (!Se(e2, "name") || t && e2.name !== r2) && o(e2, "name", { value: r2, configurable: true }), i && a2 && Se(a2, "arity") && e2.length !== a2.arity && o(e2, "length", { value: a2.arity }), a2 && Se(a2, "constructor") && a2.constructor) {
      if (I)
        try {
          o(e2, "prototype", { writable: false });
        } catch (e3) {
        }
    } else
      e2.prototype = void 0;
    var s = n(e2);
    return Se(s, "source") || (s.source = c.join("string" == typeof r2 ? r2 : "")), e2;
  };
  Function.prototype.toString = a(function() {
    return A(this) && r(this).source || rt(this);
  }, "toString");
}), bt = function(e, t, n, r) {
  r || (r = {});
  var o = r.enumerable, i = void 0 !== r.name ? r.name : t;
  return A(n) && vt(n, i, r), r.global ? o ? e[t] = n : ye(t, n) : (r.unsafe ? e[t] && (o = true) : delete e[t], o ? e[t] = n : De(e, t, n)), e;
}, gt = Math.ceil, wt = Math.floor, St = Math.trunc || function(e) {
  var t = +e;
  return (t > 0 ? wt : gt)(t);
}, kt = function(e) {
  var t = +e;
  return t != t || 0 === t ? 0 : St(t);
}, Zt = Math.max, _t = Math.min, It = function(e, t) {
  var n = kt(e);
  return n < 0 ? Zt(n + t, 0) : _t(n, t);
}, Wt = Math.min, xt = function(e) {
  return e > 0 ? Wt(kt(e), 9007199254740991) : 0;
}, Gt = function(e) {
  return xt(e.length);
}, Xt = function(e) {
  return function(t, n, r) {
    var o, i = z(t), c = Gt(i), a = It(r, c);
    if (e && n != n) {
      for (; c > a; )
        if ((o = i[a++]) != o)
          return true;
    } else
      for (; c > a; a++)
        if ((e || a in i) && i[a] === n)
          return e || a || 0;
    return !e && -1;
  };
}, Lt = { includes: Xt(true), indexOf: Xt(false) }, Ct = Lt.indexOf, Rt = Y([].push), jt = function(e, t) {
  var n, r = z(e), o = 0, i = [];
  for (n in r)
    !Se(st, n) && Se(r, n) && Rt(i, n);
  for (; t.length > o; )
    Se(r, n = t[o++]) && (~Ct(i, n) || Rt(i, n));
  return i;
}, Kt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], Tt = Kt.concat("length", "prototype"), Ot = { f: Object.getOwnPropertyNames || function(e) {
  return jt(e, Tt);
} }, Yt = { f: Object.getOwnPropertySymbols }, Vt = Y([].concat), Ht = M("Reflect", "ownKeys") || function(e) {
  var t = Ot.f(Pe(e)), n = Yt.f;
  return n ? Vt(t, n(e)) : t;
}, Jt = function(e, t, n) {
  for (var r = Ht(t), o = Ae.f, i = He.f, c = 0; c < r.length; c++) {
    var a = r[c];
    Se(e, a) || n && Se(n, a) || o(e, a, i(t, a));
  }
}, Nt = /#|\.prototype\./, Ft = function(e, t) {
  var n = Ut[Pt(e)];
  return n == zt || n != Et && (A(t) ? _(t) : !!t);
}, Pt = Ft.normalize = function(e) {
  return String(e).replace(Nt, ".").toLowerCase();
}, Ut = Ft.data = {}, Et = Ft.NATIVE = "N", zt = Ft.POLYFILL = "P", At = Ft, Dt = He.f, Bt = function(e, t) {
  var n, r, o, i, c, a = e.target, s = e.global, u2 = e.stat;
  if (n = s ? Z : u2 ? Z[a] || ye(a, {}) : (Z[a] || {}).prototype)
    for (r in t) {
      if (i = t[r], o = e.dontCallGetSet ? (c = Dt(n, r)) && c.value : n[r], !At(s ? r : a + (u2 ? "." : "#") + r, e.forced) && void 0 !== o) {
        if (typeof i == typeof o)
          continue;
        Jt(i, o);
      }
      (e.sham || o && o.sham) && De(i, "sham", true), bt(n, r, i, e);
    }
}, Mt = {};
Mt[Le("toStringTag")] = "z";
var Qt, qt = "[object z]" === String(Mt), $t = Le("toStringTag"), en = Z.Object, tn = "Arguments" == J(function() {
  return arguments;
}()), nn = qt ? J : function(e) {
  var t, n, r;
  return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e2, t2) {
    try {
      return e2[t2];
    } catch (e3) {
    }
  }(t = en(e), $t)) ? n : tn ? J(t) : "Object" == (r = J(t)) && A(t.callee) ? "Arguments" : r;
}, rn = Z.String, on = function(e) {
  if ("Symbol" === nn(e))
    throw TypeError("Cannot convert a Symbol value to a string");
  return rn(e);
}, cn = Le("match"), an = Z.TypeError, sn = function(e) {
  if (function(e2) {
    var t;
    return D(e2) && (void 0 !== (t = e2[cn]) ? !!t : "RegExp" == J(e2));
  }(e))
    throw an("The method doesn't accept regular expressions");
  return e;
}, un = Le("match"), ln = function(e) {
  var t = /./;
  try {
    "/./"[e](t);
  } catch (n) {
    try {
      return t[un] = false, "/./"[e](t);
    } catch (e2) {
    }
  }
  return false;
}, dn = He.f, fn = Y("".startsWith), hn = Y("".slice), pn = Math.min, yn = ln("startsWith"), mn = !(yn || (Qt = dn(String.prototype, "startsWith"), !Qt || Qt.writable));
Bt({ target: "String", proto: true, forced: !mn && !yn }, { startsWith: function(e) {
  var t = on(E(this));
  sn(e);
  var n = xt(pn(arguments.length > 1 ? arguments[1] : void 0, t.length)), r = on(e);
  return fn ? fn(t, r, n) : hn(t, n, n + r.length) === r;
} });
var vn = function(e, t) {
  return Y(Z[e].prototype[t]);
};
vn("String", "startsWith");
var bn = Array.isArray || function(e) {
  return "Array" == J(e);
}, gn = function(e, t, n) {
  var r = je(t);
  r in e ? Ae.f(e, r, R(0, n)) : e[r] = n;
}, wn = function() {
}, Sn = [], kn = M("Reflect", "construct"), Zn = /^\s*(?:class|function)\b/, _n = Y(Zn.exec), In = !Zn.exec(wn), Wn = function(e) {
  if (!A(e))
    return false;
  try {
    return kn(wn, Sn, e), true;
  } catch (e2) {
    return false;
  }
}, xn = function(e) {
  if (!A(e))
    return false;
  switch (nn(e)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return In || !!_n(Zn, rt(e));
  } catch (e2) {
    return true;
  }
};
xn.sham = true;
var Gn = !kn || _(function() {
  var e;
  return Wn(Wn.call) || !Wn(Object) || !Wn(function() {
    e = true;
  }) || e;
}) ? xn : Wn, Xn = Le("species"), Ln = Z.Array, Cn = function(e, t) {
  return new (function(e2) {
    var t2;
    return bn(e2) && (t2 = e2.constructor, (Gn(t2) && (t2 === Ln || bn(t2.prototype)) || D(t2) && null === (t2 = t2[Xn])) && (t2 = void 0)), void 0 === t2 ? Ln : t2;
  }(e))(0 === t ? 0 : t);
}, Rn = Le("species"), jn = Le("isConcatSpreadable"), Kn = Z.TypeError, Tn = re >= 51 || !_(function() {
  var e = [];
  return e[jn] = false, e.concat()[0] !== e;
}), On = re >= 51 || !_(function() {
  var e = [];
  return (e.constructor = {})[Rn] = function() {
    return { foo: 1 };
  }, 1 !== e.concat(Boolean).foo;
}), Yn = function(e) {
  if (!D(e))
    return false;
  var t = e[jn];
  return void 0 !== t ? !!t : bn(e);
};
Bt({ target: "Array", proto: true, arity: 1, forced: !Tn || !On }, { concat: function(e) {
  var t, n, r, o, i, c = ge(this), a = Cn(c, 0), s = 0;
  for (t = -1, r = arguments.length; t < r; t++)
    if (Yn(i = -1 === t ? c : arguments[t])) {
      if (s + (o = Gt(i)) > 9007199254740991)
        throw Kn("Maximum allowed index exceeded");
      for (n = 0; n < o; n++, s++)
        n in i && gn(a, s, i[n]);
    } else {
      if (s >= 9007199254740991)
        throw Kn("Maximum allowed index exceeded");
      gn(a, s++, i);
    }
  return a.length = s, a;
} });
var Vn = qt ? {}.toString : function() {
  return "[object " + nn(this) + "]";
};
qt || bt(Object.prototype, "toString", Vn, { unsafe: true });
var Hn, Jn = Object.keys || function(e) {
  return jt(e, Kt);
}, Nn = { f: I && !Je ? Object.defineProperties : function(e, t) {
  Pe(e);
  for (var n, r = z(t), o = Jn(t), i = o.length, c = 0; i > c; )
    Ae.f(e, n = o[c++], r[n]);
  return e;
} }, Fn = M("document", "documentElement"), Pn = at("IE_PROTO"), Un = function() {
}, En = function(e) {
  return "<script>" + e + "<\/script>";
}, zn = function(e) {
  e.write(En("")), e.close();
  var t = e.parentWindow.Object;
  return e = null, t;
}, An = function() {
  try {
    Hn = new ActiveXObject("htmlfile");
  } catch (e2) {
  }
  var e, t;
  An = "undefined" != typeof document ? document.domain && Hn ? zn(Hn) : ((t = Oe("iframe")).style.display = "none", Fn.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(En("document.F=Object")), e.close(), e.F) : zn(Hn);
  for (var n = Kt.length; n--; )
    delete An.prototype[Kt[n]];
  return An();
};
st[Pn] = true;
var Dn = Object.create || function(e, t) {
  var n;
  return null !== e ? (Un.prototype = Pe(e), n = new Un(), Un.prototype = null, n[Pn] = e) : n = An(), void 0 === t ? n : Nn.f(n, t);
}, Bn = Z.Array, Mn = Math.max, Qn = Ot.f, qn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], $n = { f: function(e) {
  return qn && "Window" == J(e) ? function(e2) {
    try {
      return Qn(e2);
    } catch (e3) {
      return function(e4, t, n) {
        for (var r = Gt(e4), o = It(void 0, r), i = It(r, r), c = Bn(Mn(i - o, 0)), a = 0; o < i; o++, a++)
          gn(c, a, e4[o]);
        return c.length = a, c;
      }(qn);
    }
  }(e) : Qn(z(e));
} }, er = { f: Le }, tr = Z, nr = Ae.f, rr = function(e) {
  var t = tr.Symbol || (tr.Symbol = {});
  Se(t, e) || nr(t, e, { value: er.f(e) });
}, or = function() {
  var e = M("Symbol"), t = e && e.prototype, n = t && t.valueOf, r = Le("toPrimitive");
  t && !t[r] && bt(t, r, function(e2) {
    return G(n, this);
  }, { arity: 1 });
}, ir = Ae.f, cr = Le("toStringTag"), ar = function(e, t, n) {
  e && !n && (e = e.prototype), e && !Se(e, cr) && ir(e, cr, { configurable: true, value: t });
}, sr = Y(Y.bind), ur = function(e, t) {
  return de(e), void 0 === t ? e : W ? sr(e, t) : function() {
    return e.apply(t, arguments);
  };
}, lr = Y([].push), dr = function(e) {
  var t = 1 == e, n = 2 == e, r = 3 == e, o = 4 == e, i = 6 == e, c = 7 == e, a = 5 == e || i;
  return function(s, u2, l2, d) {
    for (var f, h, p = ge(s), y = P(p), m = ur(u2, l2), v2 = Gt(y), b2 = 0, g2 = d || Cn, w2 = t ? g2(s, v2) : n || c ? g2(s, 0) : void 0; v2 > b2; b2++)
      if ((a || b2 in y) && (h = m(f = y[b2], b2, p), e))
        if (t)
          w2[b2] = h;
        else if (h)
          switch (e) {
            case 3:
              return true;
            case 5:
              return f;
            case 6:
              return b2;
            case 2:
              lr(w2, f);
          }
        else
          switch (e) {
            case 4:
              return false;
            case 7:
              lr(w2, f);
          }
    return i ? -1 : r || o ? o : w2;
  };
}, fr = [dr(0), dr(1), dr(2), dr(3), dr(4), dr(5), dr(6), dr(7)][0], hr = at("hidden"), pr = mt.set, yr = mt.getterFor("Symbol"), mr = Object.prototype, vr = Z.Symbol, br = vr && vr.prototype, gr = Z.TypeError, wr = Z.QObject, Sr = He.f, kr = Ae.f, Zr = $n.f, _r = C.f, Ir = Y([].push), Wr = ve("symbols"), xr = ve("op-symbols"), Gr = ve("wks"), Xr = !wr || !wr.prototype || !wr.prototype.findChild, Lr = I && _(function() {
  return 7 != Dn(kr({}, "a", { get: function() {
    return kr(this, "a", { value: 7 }).a;
  } })).a;
}) ? function(e, t, n) {
  var r = Sr(mr, t);
  r && delete mr[t], kr(e, t, n), r && e !== mr && kr(mr, t, r);
} : kr, Cr = function(e, t) {
  var n = Wr[e] = Dn(br);
  return pr(n, { type: "Symbol", tag: e, description: t }), I || (n.description = t), n;
}, Rr = function(e, t, n) {
  e === mr && Rr(xr, t, n), Pe(e);
  var r = je(t);
  return Pe(n), Se(Wr, r) ? (n.enumerable ? (Se(e, hr) && e[hr][r] && (e[hr][r] = false), n = Dn(n, { enumerable: R(0, false) })) : (Se(e, hr) || kr(e, hr, R(1, {})), e[hr][r] = true), Lr(e, r, n)) : kr(e, r, n);
}, jr = function(e, t) {
  Pe(e);
  var n = z(t), r = Jn(n).concat(Yr(n));
  return fr(r, function(t2) {
    I && !G(Kr, n, t2) || Rr(e, t2, n[t2]);
  }), e;
}, Kr = function(e) {
  var t = je(e), n = G(_r, this, t);
  return !(this === mr && Se(Wr, t) && !Se(xr, t)) && (!(n || !Se(this, t) || !Se(Wr, t) || Se(this, hr) && this[hr][t]) || n);
}, Tr = function(e, t) {
  var n = z(e), r = je(t);
  if (n !== mr || !Se(Wr, r) || Se(xr, r)) {
    var o = Sr(n, r);
    return !o || !Se(Wr, r) || Se(n, hr) && n[hr][r] || (o.enumerable = true), o;
  }
}, Or = function(e) {
  var t = Zr(z(e)), n = [];
  return fr(t, function(e2) {
    Se(Wr, e2) || Se(st, e2) || Ir(n, e2);
  }), n;
}, Yr = function(e) {
  var t = e === mr, n = Zr(t ? xr : z(e)), r = [];
  return fr(n, function(e2) {
    !Se(Wr, e2) || t && !Se(mr, e2) || Ir(r, Wr[e2]);
  }), r;
};
oe || (br = (vr = function() {
  if (Q(br, this))
    throw gr("Symbol is not a constructor");
  var e = arguments.length && void 0 !== arguments[0] ? on(arguments[0]) : void 0, t = Ie(e), n = function(e2) {
    this === mr && G(n, xr, e2), Se(this, hr) && Se(this[hr], t) && (this[hr][t] = false), Lr(this, t, R(1, e2));
  };
  return I && Xr && Lr(mr, t, { configurable: true, set: n }), Cr(t, e);
}).prototype, bt(br, "toString", function() {
  return yr(this).tag;
}), bt(vr, "withoutSetter", function(e) {
  return Cr(Ie(e), e);
}), C.f = Kr, Ae.f = Rr, Nn.f = jr, He.f = Tr, Ot.f = $n.f = Or, Yt.f = Yr, er.f = function(e) {
  return Cr(Le(e), e);
}, I && (kr(br, "description", { configurable: true, get: function() {
  return yr(this).description;
} }), bt(mr, "propertyIsEnumerable", Kr, { unsafe: true }))), Bt({ global: true, constructor: true, wrap: true, forced: !oe, sham: !oe }, { Symbol: vr }), fr(Jn(Gr), function(e) {
  rr(e);
}), Bt({ target: "Symbol", stat: true, forced: !oe }, { useSetter: function() {
  Xr = true;
}, useSimple: function() {
  Xr = false;
} }), Bt({ target: "Object", stat: true, forced: !oe, sham: !I }, { create: function(e, t) {
  return void 0 === t ? Dn(e) : jr(Dn(e), t);
}, defineProperty: Rr, defineProperties: jr, getOwnPropertyDescriptor: Tr }), Bt({ target: "Object", stat: true, forced: !oe }, { getOwnPropertyNames: Or }), or(), ar(vr, "Symbol"), st[hr] = true;
var Vr = oe && !!Symbol.for && !!Symbol.keyFor, Hr = ve("string-to-symbol-registry"), Jr = ve("symbol-to-string-registry");
Bt({ target: "Symbol", stat: true, forced: !Vr }, { for: function(e) {
  var t = on(e);
  if (Se(Hr, t))
    return Hr[t];
  var n = M("Symbol")(t);
  return Hr[t] = n, Jr[n] = t, n;
} });
var Nr = ve("symbol-to-string-registry");
Bt({ target: "Symbol", stat: true, forced: !Vr }, { keyFor: function(e) {
  if (!ae(e))
    throw TypeError(ue(e) + " is not a symbol");
  if (Se(Nr, e))
    return Nr[e];
} });
var Fr = Function.prototype, Pr = Fr.apply, Ur = Fr.call, Er = "object" == typeof Reflect && Reflect.apply || (W ? Ur.bind(Pr) : function() {
  return Ur.apply(Pr, arguments);
}), zr = Y([].slice), Ar = M("JSON", "stringify"), Dr = Y(/./.exec), Br = Y("".charAt), Mr = Y("".charCodeAt), Qr = Y("".replace), qr = Y(1 .toString), $r = /[\uD800-\uDFFF]/g, eo = /^[\uD800-\uDBFF]$/, to = /^[\uDC00-\uDFFF]$/, no = !oe || _(function() {
  var e = M("Symbol")();
  return "[null]" != Ar([e]) || "{}" != Ar({ a: e }) || "{}" != Ar(Object(e));
}), ro = _(function() {
  return '"\\udf06\\ud834"' !== Ar("\uDF06\uD834") || '"\\udead"' !== Ar("\uDEAD");
}), oo = function(e, t) {
  var n = zr(arguments), r = t;
  if ((D(t) || void 0 !== e) && !ae(e))
    return bn(t) || (t = function(e2, t2) {
      if (A(r) && (t2 = G(r, this, e2, t2)), !ae(t2))
        return t2;
    }), n[1] = t, Er(Ar, null, n);
}, io = function(e, t, n) {
  var r = Br(n, t - 1), o = Br(n, t + 1);
  return Dr(eo, e) && !Dr(to, o) || Dr(to, e) && !Dr(eo, r) ? "\\u" + qr(Mr(e, 0), 16) : e;
};
Ar && Bt({ target: "JSON", stat: true, arity: 3, forced: no || ro }, { stringify: function(e, t, n) {
  var r = zr(arguments), o = Er(no ? oo : Ar, null, r);
  return ro && "string" == typeof o ? Qr(o, $r, io) : o;
} });
var co = !oe || _(function() {
  Yt.f(1);
});
Bt({ target: "Object", stat: true, forced: co }, { getOwnPropertySymbols: function(e) {
  var t = Yt.f;
  return t ? t(ge(e)) : [];
} }), rr("asyncIterator");
var ao = Ae.f, so = Z.Symbol, uo = so && so.prototype;
if (I && A(so) && (!("description" in uo) || void 0 !== so().description)) {
  var lo = {}, fo = function() {
    var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : on(arguments[0]), t = Q(uo, this) ? new so(e) : void 0 === e ? so() : so(e);
    return "" === e && (lo[t] = true), t;
  };
  Jt(fo, so), fo.prototype = uo, uo.constructor = fo;
  var ho = "Symbol(test)" == String(so("test")), po = Y(uo.toString), yo = Y(uo.valueOf), mo = /^Symbol\((.*)\)[^)]+$/, vo = Y("".replace), bo = Y("".slice);
  ao(uo, "description", { configurable: true, get: function() {
    var e = yo(this), t = po(e);
    if (Se(lo, e))
      return "";
    var n = ho ? bo(t, 7, -1) : vo(t, mo, "$1");
    return "" === n ? void 0 : n;
  } }), Bt({ global: true, constructor: true, forced: true }, { Symbol: fo });
}
rr("hasInstance"), rr("isConcatSpreadable"), rr("iterator"), rr("match"), rr("matchAll"), rr("replace"), rr("search"), rr("species"), rr("split"), rr("toPrimitive"), or(), rr("toStringTag"), ar(M("Symbol"), "Symbol"), rr("unscopables"), ar(Z.JSON, "JSON", true), ar(Math, "Math", true), Bt({ global: true }, { Reflect: {} }), ar(Z.Reflect, "Reflect", true), tr.Symbol;
var go, wo, So, ko = Y("".charAt), Zo = Y("".charCodeAt), _o = Y("".slice), Io = function(e) {
  return function(t, n) {
    var r, o, i = on(E(t)), c = kt(n), a = i.length;
    return c < 0 || c >= a ? e ? "" : void 0 : (r = Zo(i, c)) < 55296 || r > 56319 || c + 1 === a || (o = Zo(i, c + 1)) < 56320 || o > 57343 ? e ? ko(i, c) : r : e ? _o(i, c, c + 2) : o - 56320 + (r - 55296 << 10) + 65536;
  };
}, Wo = { codeAt: Io(false), charAt: Io(true) }, xo = !_(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), Go = at("IE_PROTO"), Xo = Z.Object, Lo = Xo.prototype, Co = xo ? Xo.getPrototypeOf : function(e) {
  var t = ge(e);
  if (Se(t, Go))
    return t[Go];
  var n = t.constructor;
  return A(n) && t instanceof n ? n.prototype : t instanceof Xo ? Lo : null;
}, Ro = Le("iterator"), jo = false;
[].keys && ("next" in (So = [].keys()) ? (wo = Co(Co(So))) !== Object.prototype && (go = wo) : jo = true), (null == go || _(function() {
  var e = {};
  return go[Ro].call(e) !== e;
})) && (go = {}), A(go[Ro]) || bt(go, Ro, function() {
  return this;
});
var Ko = { IteratorPrototype: go, BUGGY_SAFARI_ITERATORS: jo }, To = {}, Oo = Ko.IteratorPrototype, Yo = function() {
  return this;
}, Vo = Z.String, Ho = Z.TypeError, Jo = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e, t = false, n = {};
  try {
    (e = Y(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n, []), t = n instanceof Array;
  } catch (e2) {
  }
  return function(n2, r) {
    return Pe(n2), function(e2) {
      if ("object" == typeof e2 || A(e2))
        return e2;
      throw Ho("Can't set " + Vo(e2) + " as a prototype");
    }(r), t ? e(n2, r) : n2.__proto__ = r, n2;
  };
}() : void 0), No = qe.PROPER, Fo = qe.CONFIGURABLE, Po = Ko.IteratorPrototype, Uo = Ko.BUGGY_SAFARI_ITERATORS, Eo = Le("iterator"), zo = function() {
  return this;
}, Ao = function(e, t, n, r, o, i, c) {
  !function(e2, t2, n2, r2) {
    var o2 = t2 + " Iterator";
    e2.prototype = Dn(Oo, { next: R(1, n2) }), ar(e2, o2, false), To[o2] = Yo;
  }(n, t, r);
  var a, s, u2, l2 = function(e2) {
    if (e2 === o && y)
      return y;
    if (!Uo && e2 in h)
      return h[e2];
    switch (e2) {
      case "keys":
      case "values":
      case "entries":
        return function() {
          return new n(this, e2);
        };
    }
    return function() {
      return new n(this);
    };
  }, d = t + " Iterator", f = false, h = e.prototype, p = h[Eo] || h["@@iterator"] || o && h[o], y = !Uo && p || l2(o), m = "Array" == t && h.entries || p;
  if (m && (a = Co(m.call(new e()))) !== Object.prototype && a.next && (Co(a) !== Po && (Jo ? Jo(a, Po) : A(a[Eo]) || bt(a, Eo, zo)), ar(a, d, true)), No && "values" == o && p && "values" !== p.name && (Fo ? De(h, "name", "values") : (f = true, y = function() {
    return G(p, this);
  })), o)
    if (s = { values: l2("values"), keys: i ? y : l2("keys"), entries: l2("entries") }, c)
      for (u2 in s)
        (Uo || f || !(u2 in h)) && bt(h, u2, s[u2]);
    else
      Bt({ target: t, proto: true, forced: Uo || f }, s);
  return h[Eo] !== y && bt(h, Eo, y, { name: o }), To[t] = y, s;
}, Do = Wo.charAt, Bo = mt.set, Mo = mt.getterFor("String Iterator");
Ao(String, "String", function(e) {
  Bo(this, { type: "String Iterator", string: on(e), index: 0 });
}, function() {
  var e, t = Mo(this), n = t.string, r = t.index;
  return r >= n.length ? { value: void 0, done: true } : (e = Do(n, r), t.index += e.length, { value: e, done: false });
});
var Qo = function(e, t, n) {
  var r, o;
  Pe(e);
  try {
    if (!(r = fe(e, "return"))) {
      if ("throw" === t)
        throw n;
      return n;
    }
    r = G(r, e);
  } catch (e2) {
    o = true, r = e2;
  }
  if ("throw" === t)
    throw n;
  if (o)
    throw r;
  return Pe(r), n;
}, qo = function(e, t, n, r) {
  try {
    return r ? t(Pe(n)[0], n[1]) : t(n);
  } catch (t2) {
    Qo(e, "throw", t2);
  }
}, $o = Le("iterator"), ei = Array.prototype, ti = function(e) {
  return void 0 !== e && (To.Array === e || ei[$o] === e);
}, ni = Le("iterator"), ri = function(e) {
  if (null != e)
    return fe(e, ni) || fe(e, "@@iterator") || To[nn(e)];
}, oi = Z.TypeError, ii = function(e, t) {
  var n = arguments.length < 2 ? ri(e) : t;
  if (de(n))
    return Pe(G(n, e));
  throw oi(ue(e) + " is not iterable");
}, ci = Z.Array, ai = Le("iterator"), si = false;
try {
  var ui = 0, li = { next: function() {
    return { done: !!ui++ };
  }, return: function() {
    si = true;
  } };
  li[ai] = function() {
    return this;
  }, Array.from(li, function() {
    throw 2;
  });
} catch (u2) {
}
var di = function(e, t) {
  if (!t && !si)
    return false;
  var n = false;
  try {
    var r = {};
    r[ai] = function() {
      return { next: function() {
        return { done: n = true };
      } };
    }, e(r);
  } catch (e2) {
  }
  return n;
}, fi = !di(function(e) {
  Array.from(e);
});
Bt({ target: "Array", stat: true, forced: fi }, { from: function(e) {
  var t = ge(e), n = Gn(this), r = arguments.length, o = r > 1 ? arguments[1] : void 0, i = void 0 !== o;
  i && (o = ur(o, r > 2 ? arguments[2] : void 0));
  var c, a, s, u2, l2, d, f = ri(t), h = 0;
  if (!f || this == ci && ti(f))
    for (c = Gt(t), a = n ? new this(c) : ci(c); c > h; h++)
      d = i ? o(t[h], h) : t[h], gn(a, h, d);
  else
    for (l2 = (u2 = ii(t, f)).next, a = n ? new this() : []; !(s = G(l2, u2)).done; h++)
      d = i ? qo(u2, o, [s.value, h], true) : s.value, gn(a, h, d);
  return a.length = h, a;
} }), tr.Array.from;
var hi, pi, yi, mi = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, vi = Ae.f, bi = Z.Int8Array, gi = bi && bi.prototype, wi = Z.Uint8ClampedArray, Si = wi && wi.prototype, ki = bi && Co(bi), Zi = gi && Co(gi), _i = Object.prototype, Ii = Z.TypeError, Wi = Le("toStringTag"), xi = Ie("TYPED_ARRAY_TAG"), Gi = Ie("TYPED_ARRAY_CONSTRUCTOR"), Xi = mi && !!Jo && "Opera" !== nn(Z.opera), Li = false, Ci = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, Ri = { BigInt64Array: 8, BigUint64Array: 8 }, ji = function(e) {
  if (!D(e))
    return false;
  var t = nn(e);
  return Se(Ci, t) || Se(Ri, t);
};
for (hi in Ci)
  (yi = (pi = Z[hi]) && pi.prototype) ? De(yi, Gi, pi) : Xi = false;
for (hi in Ri)
  (yi = (pi = Z[hi]) && pi.prototype) && De(yi, Gi, pi);
if ((!Xi || !A(ki) || ki === Function.prototype) && (ki = function() {
  throw Ii("Incorrect invocation");
}, Xi))
  for (hi in Ci)
    Z[hi] && Jo(Z[hi], ki);
if ((!Xi || !Zi || Zi === _i) && (Zi = ki.prototype, Xi))
  for (hi in Ci)
    Z[hi] && Jo(Z[hi].prototype, Zi);
if (Xi && Co(Si) !== Zi && Jo(Si, Zi), I && !Se(Zi, Wi))
  for (hi in Li = true, vi(Zi, Wi, { get: function() {
    return D(this) ? this[xi] : void 0;
  } }), Ci)
    Z[hi] && De(Z[hi], xi, hi);
var Ki = { NATIVE_ARRAY_BUFFER_VIEWS: Xi, TYPED_ARRAY_CONSTRUCTOR: Gi, TYPED_ARRAY_TAG: Li && xi, aTypedArray: function(e) {
  if (ji(e))
    return e;
  throw Ii("Target is not a typed array");
}, aTypedArrayConstructor: function(e) {
  if (A(e) && (!Jo || Q(ki, e)))
    return e;
  throw Ii(ue(e) + " is not a typed array constructor");
}, exportTypedArrayMethod: function(e, t, n, r) {
  if (I) {
    if (n)
      for (var o in Ci) {
        var i = Z[o];
        if (i && Se(i.prototype, e))
          try {
            delete i.prototype[e];
          } catch (n2) {
            try {
              i.prototype[e] = t;
            } catch (e2) {
            }
          }
      }
    Zi[e] && !n || bt(Zi, e, n ? t : Xi && gi[e] || t, r);
  }
}, exportTypedArrayStaticMethod: function(e, t, n) {
  var r, o;
  if (I) {
    if (Jo) {
      if (n) {
        for (r in Ci)
          if ((o = Z[r]) && Se(o, e))
            try {
              delete o[e];
            } catch (e2) {
            }
      }
      if (ki[e] && !n)
        return;
      try {
        return bt(ki, e, n ? t : Xi && ki[e] || t);
      } catch (e2) {
      }
    }
    for (r in Ci)
      !(o = Z[r]) || o[e] && !n || bt(o, e, t);
  }
}, isView: function(e) {
  if (!D(e))
    return false;
  var t = nn(e);
  return "DataView" === t || Se(Ci, t) || Se(Ri, t);
}, isTypedArray: ji, TypedArray: ki, TypedArrayPrototype: Zi }, Ti = Z.TypeError, Oi = Le("species"), Yi = Ki.TYPED_ARRAY_CONSTRUCTOR, Vi = Ki.aTypedArrayConstructor, Hi = Ki.aTypedArray;
(0, Ki.exportTypedArrayMethod)("slice", function(e, t) {
  for (var n = zr(Hi(this), e, t), r = Vi(function(e2, t2) {
    var n2, r2 = Pe(e2).constructor;
    return void 0 === r2 || null == (n2 = Pe(r2)[Oi]) ? t2 : function(e3) {
      if (Gn(e3))
        return e3;
      throw Ti(ue(e3) + " is not a constructor");
    }(n2);
  }(this, this[Yi])), o = 0, i = n.length, c = new r(i); i > o; )
    c[o] = n[o++];
  return c;
}, _(function() {
  new Int8Array(1).slice();
}));
var Ji = Ae.f, Ni = Le("unscopables"), Fi = Array.prototype;
null == Fi[Ni] && Ji(Fi, Ni, { configurable: true, value: Dn(null) });
var Pi = function(e) {
  Fi[Ni][e] = true;
}, Ui = Lt.includes, Ei = _(function() {
  return !Array(1).includes();
});
Bt({ target: "Array", proto: true, forced: Ei }, { includes: function(e) {
  return Ui(this, e, arguments.length > 1 ? arguments[1] : void 0);
} }), Pi("includes"), vn("Array", "includes");
var zi = Y("".indexOf);
Bt({ target: "String", proto: true, forced: !ln("includes") }, { includes: function(e) {
  return !!~zi(on(E(this)), on(sn(e)), arguments.length > 1 ? arguments[1] : void 0);
} }), vn("String", "includes");
var Ai = Ae.f, Di = mt.set, Bi = mt.getterFor("Array Iterator");
Ao(Array, "Array", function(e, t) {
  Di(this, { type: "Array Iterator", target: z(e), index: 0, kind: t });
}, function() {
  var e = Bi(this), t = e.target, n = e.kind, r = e.index++;
  return !t || r >= t.length ? (e.target = void 0, { value: void 0, done: true }) : "keys" == n ? { value: r, done: false } : "values" == n ? { value: t[r], done: false } : { value: [r, t[r]], done: false };
}, "values");
var Mi = To.Arguments = To.Array;
if (Pi("keys"), Pi("values"), Pi("entries"), I && "values" !== Mi.name)
  try {
    Ai(Mi, "name", { value: "values" });
  } catch (u2) {
  }
var Qi = _(function() {
  if ("function" == typeof ArrayBuffer) {
    var e = new ArrayBuffer(8);
    Object.isExtensible(e) && Object.defineProperty(e, "a", { value: 8 });
  }
}), qi = Object.isExtensible, $i = _(function() {
  qi(1);
}) || Qi ? function(e) {
  return !!D(e) && (!Qi || "ArrayBuffer" != J(e)) && (!qi || qi(e));
} : qi, ec = !_(function() {
  return Object.isExtensible(Object.preventExtensions({}));
}), tc = g(function(e) {
  var t = Ae.f, n = false, r = Ie("meta"), o = 0, i = function(e2) {
    t(e2, r, { value: { objectID: "O" + o++, weakData: {} } });
  }, c = e.exports = { enable: function() {
    c.enable = function() {
    }, n = true;
    var e2 = Ot.f, t2 = Y([].splice), o2 = {};
    o2[r] = 1, e2(o2).length && (Ot.f = function(n2) {
      for (var o3 = e2(n2), i2 = 0, c2 = o3.length; i2 < c2; i2++)
        if (o3[i2] === r) {
          t2(o3, i2, 1);
          break;
        }
      return o3;
    }, Bt({ target: "Object", stat: true, forced: true }, { getOwnPropertyNames: $n.f }));
  }, fastKey: function(e2, t2) {
    if (!D(e2))
      return "symbol" == typeof e2 ? e2 : ("string" == typeof e2 ? "S" : "P") + e2;
    if (!Se(e2, r)) {
      if (!$i(e2))
        return "F";
      if (!t2)
        return "E";
      i(e2);
    }
    return e2[r].objectID;
  }, getWeakData: function(e2, t2) {
    if (!Se(e2, r)) {
      if (!$i(e2))
        return true;
      if (!t2)
        return false;
      i(e2);
    }
    return e2[r].weakData;
  }, onFreeze: function(e2) {
    return ec && n && $i(e2) && !Se(e2, r) && i(e2), e2;
  } };
  st[r] = true;
});
tc.enable, tc.fastKey, tc.getWeakData, tc.onFreeze;
var nc = Z.TypeError, rc = function(e, t) {
  this.stopped = e, this.result = t;
}, oc = rc.prototype, ic = function(e, t, n) {
  var r, o, i, c, a, s, u2, l2 = n && n.that, d = !(!n || !n.AS_ENTRIES), f = !(!n || !n.IS_ITERATOR), h = !(!n || !n.INTERRUPTED), p = ur(t, l2), y = function(e2) {
    return r && Qo(r, "normal", e2), new rc(true, e2);
  }, m = function(e2) {
    return d ? (Pe(e2), h ? p(e2[0], e2[1], y) : p(e2[0], e2[1])) : h ? p(e2, y) : p(e2);
  };
  if (f)
    r = e;
  else {
    if (!(o = ri(e)))
      throw nc(ue(e) + " is not iterable");
    if (ti(o)) {
      for (i = 0, c = Gt(e); c > i; i++)
        if ((a = m(e[i])) && Q(oc, a))
          return a;
      return new rc(false);
    }
    r = ii(e, o);
  }
  for (s = r.next; !(u2 = G(s, r)).done; ) {
    try {
      a = m(u2.value);
    } catch (e2) {
      Qo(r, "throw", e2);
    }
    if ("object" == typeof a && a && Q(oc, a))
      return a;
  }
  return new rc(false);
}, cc = Z.TypeError, ac = function(e, t) {
  if (Q(t, e))
    return e;
  throw cc("Incorrect invocation");
}, sc = function(e, t, n) {
  for (var r in t)
    bt(e, r, t[r], n);
  return e;
}, uc = Le("species"), lc = Ae.f, dc = tc.fastKey, fc = mt.set, hc = mt.getterFor;
function pc(e) {
  var t = this.constructor;
  return this.then(function(n) {
    return t.resolve(e()).then(function() {
      return n;
    });
  }, function(n) {
    return t.resolve(e()).then(function() {
      return t.reject(n);
    });
  });
}
function yc(e) {
  return new this(function(t, n) {
    if (!e || void 0 === e.length)
      return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
    var r = Array.prototype.slice.call(e);
    if (0 === r.length)
      return t([]);
    var o = r.length;
    function i(e2, n2) {
      if (n2 && ("object" == typeof n2 || "function" == typeof n2)) {
        var c2 = n2.then;
        if ("function" == typeof c2)
          return void c2.call(n2, function(t2) {
            i(e2, t2);
          }, function(n3) {
            r[e2] = { status: "rejected", reason: n3 }, 0 == --o && t(r);
          });
      }
      r[e2] = { status: "fulfilled", value: n2 }, 0 == --o && t(r);
    }
    for (var c = 0; c < r.length; c++)
      i(c, r[c]);
  });
}
!function(e, t, n) {
  var r = -1 !== e.indexOf("Map"), o = -1 !== e.indexOf("Weak"), i = r ? "set" : "add", c = Z[e], a = c && c.prototype, s = c, u2 = {}, l2 = function(e2) {
    var t2 = Y(a[e2]);
    bt(a, e2, "add" == e2 ? function(e3) {
      return t2(this, 0 === e3 ? 0 : e3), this;
    } : "delete" == e2 ? function(e3) {
      return !(o && !D(e3)) && t2(this, 0 === e3 ? 0 : e3);
    } : "get" == e2 ? function(e3) {
      return o && !D(e3) ? void 0 : t2(this, 0 === e3 ? 0 : e3);
    } : "has" == e2 ? function(e3) {
      return !(o && !D(e3)) && t2(this, 0 === e3 ? 0 : e3);
    } : function(e3, n2) {
      return t2(this, 0 === e3 ? 0 : e3, n2), this;
    });
  };
  if (At(e, !A(c) || !(o || a.forEach && !_(function() {
    new c().entries().next();
  }))))
    s = n.getConstructor(t, e, r, i), tc.enable();
  else if (At(e, true)) {
    var d = new s(), f = d[i](o ? {} : -0, 1) != d, h = _(function() {
      d.has(1);
    }), p = di(function(e2) {
      new c(e2);
    }), y = !o && _(function() {
      for (var e2 = new c(), t2 = 5; t2--; )
        e2[i](t2, t2);
      return !e2.has(-0);
    });
    p || ((s = t(function(e2, t2) {
      ac(e2, a);
      var n2 = function(e3, t3, n3) {
        var r2, o2;
        return Jo && A(r2 = t3.constructor) && r2 !== n3 && D(o2 = r2.prototype) && o2 !== n3.prototype && Jo(e3, o2), e3;
      }(new c(), e2, s);
      return null != t2 && ic(t2, n2[i], { that: n2, AS_ENTRIES: r }), n2;
    })).prototype = a, a.constructor = s), (h || y) && (l2("delete"), l2("has"), r && l2("get")), (y || f) && l2(i), o && a.clear && delete a.clear;
  }
  u2[e] = s, Bt({ global: true, constructor: true, forced: s != c }, u2), ar(s, e), o || n.setStrong(s, e, r);
}("Set", function(e) {
  return function() {
    return e(this, arguments.length ? arguments[0] : void 0);
  };
}, { getConstructor: function(e, t, n, r) {
  var o = e(function(e2, o2) {
    ac(e2, i), fc(e2, { type: t, index: Dn(null), first: void 0, last: void 0, size: 0 }), I || (e2.size = 0), null != o2 && ic(o2, e2[r], { that: e2, AS_ENTRIES: n });
  }), i = o.prototype, c = hc(t), a = function(e2, t2, n2) {
    var r2, o2, i2 = c(e2), a2 = s(e2, t2);
    return a2 ? a2.value = n2 : (i2.last = a2 = { index: o2 = dc(t2, true), key: t2, value: n2, previous: r2 = i2.last, next: void 0, removed: false }, i2.first || (i2.first = a2), r2 && (r2.next = a2), I ? i2.size++ : e2.size++, "F" !== o2 && (i2.index[o2] = a2)), e2;
  }, s = function(e2, t2) {
    var n2, r2 = c(e2), o2 = dc(t2);
    if ("F" !== o2)
      return r2.index[o2];
    for (n2 = r2.first; n2; n2 = n2.next)
      if (n2.key == t2)
        return n2;
  };
  return sc(i, { clear: function() {
    for (var e2 = c(this), t2 = e2.index, n2 = e2.first; n2; )
      n2.removed = true, n2.previous && (n2.previous = n2.previous.next = void 0), delete t2[n2.index], n2 = n2.next;
    e2.first = e2.last = void 0, I ? e2.size = 0 : this.size = 0;
  }, delete: function(e2) {
    var t2 = this, n2 = c(t2), r2 = s(t2, e2);
    if (r2) {
      var o2 = r2.next, i2 = r2.previous;
      delete n2.index[r2.index], r2.removed = true, i2 && (i2.next = o2), o2 && (o2.previous = i2), n2.first == r2 && (n2.first = o2), n2.last == r2 && (n2.last = i2), I ? n2.size-- : t2.size--;
    }
    return !!r2;
  }, forEach: function(e2) {
    for (var t2, n2 = c(this), r2 = ur(e2, arguments.length > 1 ? arguments[1] : void 0); t2 = t2 ? t2.next : n2.first; )
      for (r2(t2.value, t2.key, this); t2 && t2.removed; )
        t2 = t2.previous;
  }, has: function(e2) {
    return !!s(this, e2);
  } }), sc(i, n ? { get: function(e2) {
    var t2 = s(this, e2);
    return t2 && t2.value;
  }, set: function(e2, t2) {
    return a(this, 0 === e2 ? 0 : e2, t2);
  } } : { add: function(e2) {
    return a(this, e2 = 0 === e2 ? 0 : e2, e2);
  } }), I && lc(i, "size", { get: function() {
    return c(this).size;
  } }), o;
}, setStrong: function(e, t, n) {
  var r = t + " Iterator", o = hc(t), i = hc(r);
  Ao(e, t, function(e2, t2) {
    fc(this, { type: r, target: e2, state: o(e2), kind: t2, last: void 0 });
  }, function() {
    for (var e2 = i(this), t2 = e2.kind, n2 = e2.last; n2 && n2.removed; )
      n2 = n2.previous;
    return e2.target && (e2.last = n2 = n2 ? n2.next : e2.state.first) ? "keys" == t2 ? { value: n2.key, done: false } : "values" == t2 ? { value: n2.value, done: false } : { value: [n2.key, n2.value], done: false } : (e2.target = void 0, { value: void 0, done: true });
  }, n ? "entries" : "values", !n, true), function(e2) {
    var t2 = M(e2), n2 = Ae.f;
    I && t2 && !t2[uc] && n2(t2, uc, { configurable: true, get: function() {
      return this;
    } });
  }(t);
} }), tr.Set;
var mc = setTimeout;
function vc(e) {
  return Boolean(e && void 0 !== e.length);
}
function bc() {
}
function gc(e) {
  if (!(this instanceof gc))
    throw new TypeError("Promises must be constructed via new");
  if ("function" != typeof e)
    throw new TypeError("not a function");
  this._state = 0, this._handled = false, this._value = void 0, this._deferreds = [], Ic(e, this);
}
function wc(e, t) {
  for (; 3 === e._state; )
    e = e._value;
  0 !== e._state ? (e._handled = true, gc._immediateFn(function() {
    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
    if (null !== n) {
      var r;
      try {
        r = n(e._value);
      } catch (e2) {
        return void kc(t.promise, e2);
      }
      Sc(t.promise, r);
    } else
      (1 === e._state ? Sc : kc)(t.promise, e._value);
  })) : e._deferreds.push(t);
}
function Sc(e, t) {
  try {
    if (t === e)
      throw new TypeError("A promise cannot be resolved with itself.");
    if (t && ("object" == typeof t || "function" == typeof t)) {
      var n = t.then;
      if (t instanceof gc)
        return e._state = 3, e._value = t, void Zc(e);
      if ("function" == typeof n)
        return void Ic((r = n, o = t, function() {
          r.apply(o, arguments);
        }), e);
    }
    e._state = 1, e._value = t, Zc(e);
  } catch (t2) {
    kc(e, t2);
  }
  var r, o;
}
function kc(e, t) {
  e._state = 2, e._value = t, Zc(e);
}
function Zc(e) {
  2 === e._state && 0 === e._deferreds.length && gc._immediateFn(function() {
    e._handled || gc._unhandledRejectionFn(e._value);
  });
  for (var t = 0, n = e._deferreds.length; t < n; t++)
    wc(e, e._deferreds[t]);
  e._deferreds = null;
}
function _c(e, t, n) {
  this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n;
}
function Ic(e, t) {
  var n = false;
  try {
    e(function(e2) {
      n || (n = true, Sc(t, e2));
    }, function(e2) {
      n || (n = true, kc(t, e2));
    });
  } catch (e2) {
    if (n)
      return;
    n = true, kc(t, e2);
  }
}
gc.prototype.catch = function(e) {
  return this.then(null, e);
}, gc.prototype.then = function(e, t) {
  var n = new this.constructor(bc);
  return wc(this, new _c(e, t, n)), n;
}, gc.prototype.finally = pc, gc.all = function(e) {
  return new gc(function(t, n) {
    if (!vc(e))
      return n(new TypeError("Promise.all accepts an array"));
    var r = Array.prototype.slice.call(e);
    if (0 === r.length)
      return t([]);
    var o = r.length;
    function i(e2, c2) {
      try {
        if (c2 && ("object" == typeof c2 || "function" == typeof c2)) {
          var a = c2.then;
          if ("function" == typeof a)
            return void a.call(c2, function(t2) {
              i(e2, t2);
            }, n);
        }
        r[e2] = c2, 0 == --o && t(r);
      } catch (e3) {
        n(e3);
      }
    }
    for (var c = 0; c < r.length; c++)
      i(c, r[c]);
  });
}, gc.allSettled = yc, gc.resolve = function(e) {
  return e && "object" == typeof e && e.constructor === gc ? e : new gc(function(t) {
    t(e);
  });
}, gc.reject = function(e) {
  return new gc(function(t, n) {
    n(e);
  });
}, gc.race = function(e) {
  return new gc(function(t, n) {
    if (!vc(e))
      return n(new TypeError("Promise.race accepts an array"));
    for (var r = 0, o = e.length; r < o; r++)
      gc.resolve(e[r]).then(t, n);
  });
}, gc._immediateFn = "function" == typeof setImmediate && function(e) {
  setImmediate(e);
} || function(e) {
  mc(e, 0);
}, gc._unhandledRejectionFn = function(e) {
  "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
};
var Wc = function() {
  if ("undefined" != typeof self)
    return self;
  if ("undefined" != typeof window)
    return window;
  if ("undefined" != typeof global)
    return global;
  throw new Error("unable to locate global object");
}();
"function" != typeof Wc.Promise ? Wc.Promise = gc : (Wc.Promise.prototype.finally || (Wc.Promise.prototype.finally = pc), Wc.Promise.allSettled || (Wc.Promise.allSettled = yc)), function(e) {
  function t() {
  }
  function n(e2, t2) {
    if (e2 = void 0 === e2 ? "utf-8" : e2, t2 = void 0 === t2 ? { fatal: false } : t2, -1 === o.indexOf(e2.toLowerCase()))
      throw new RangeError("Failed to construct 'TextDecoder': The encoding label provided ('" + e2 + "') is invalid.");
    if (t2.fatal)
      throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");
  }
  function r(e2) {
    for (var t2 = 0, n2 = Math.min(65536, e2.length + 1), r2 = new Uint16Array(n2), o2 = [], i2 = 0; ; ) {
      var c = t2 < e2.length;
      if (!c || i2 >= n2 - 1) {
        if (o2.push(String.fromCharCode.apply(null, r2.subarray(0, i2))), !c)
          return o2.join("");
        e2 = e2.subarray(t2), i2 = t2 = 0;
      }
      if (0 == (128 & (c = e2[t2++])))
        r2[i2++] = c;
      else if (192 == (224 & c)) {
        var a = 63 & e2[t2++];
        r2[i2++] = (31 & c) << 6 | a;
      } else if (224 == (240 & c)) {
        a = 63 & e2[t2++];
        var s = 63 & e2[t2++];
        r2[i2++] = (31 & c) << 12 | a << 6 | s;
      } else
        240 == (248 & c) && (65535 < (c = (7 & c) << 18 | (a = 63 & e2[t2++]) << 12 | (s = 63 & e2[t2++]) << 6 | 63 & e2[t2++]) && (c -= 65536, r2[i2++] = c >>> 10 & 1023 | 55296, c = 56320 | 1023 & c), r2[i2++] = c);
    }
  }
  if (e.TextEncoder && e.TextDecoder)
    return false;
  var o = ["utf-8", "utf8", "unicode-1-1-utf-8"];
  Object.defineProperty(t.prototype, "encoding", { value: "utf-8" }), t.prototype.encode = function(e2, t2) {
    if ((t2 = void 0 === t2 ? { stream: false } : t2).stream)
      throw Error("Failed to encode: the 'stream' option is unsupported.");
    t2 = 0;
    for (var n2 = e2.length, r2 = 0, o2 = Math.max(32, n2 + (n2 >>> 1) + 7), i2 = new Uint8Array(o2 >>> 3 << 3); t2 < n2; ) {
      var c = e2.charCodeAt(t2++);
      if (55296 <= c && 56319 >= c) {
        if (t2 < n2) {
          var a = e2.charCodeAt(t2);
          56320 == (64512 & a) && (++t2, c = ((1023 & c) << 10) + (1023 & a) + 65536);
        }
        if (55296 <= c && 56319 >= c)
          continue;
      }
      if (r2 + 4 > i2.length && (o2 += 8, o2 = (o2 *= 1 + t2 / e2.length * 2) >>> 3 << 3, (a = new Uint8Array(o2)).set(i2), i2 = a), 0 == (4294967168 & c))
        i2[r2++] = c;
      else {
        if (0 == (4294965248 & c))
          i2[r2++] = c >>> 6 & 31 | 192;
        else if (0 == (4294901760 & c))
          i2[r2++] = c >>> 12 & 15 | 224, i2[r2++] = c >>> 6 & 63 | 128;
        else {
          if (0 != (4292870144 & c))
            continue;
          i2[r2++] = c >>> 18 & 7 | 240, i2[r2++] = c >>> 12 & 63 | 128, i2[r2++] = c >>> 6 & 63 | 128;
        }
        i2[r2++] = 63 & c | 128;
      }
    }
    return i2.slice ? i2.slice(0, r2) : i2.subarray(0, r2);
  }, Object.defineProperty(n.prototype, "encoding", { value: "utf-8" }), Object.defineProperty(n.prototype, "fatal", { value: false }), Object.defineProperty(n.prototype, "ignoreBOM", { value: false });
  var i = r;
  "function" == typeof Buffer && Buffer.from ? i = function(e2) {
    return Buffer.from(e2.buffer, e2.byteOffset, e2.byteLength).toString("utf-8");
  } : "function" == typeof Blob && "function" == typeof URL && "function" == typeof URL.createObjectURL && (i = function(e2) {
    var t2 = URL.createObjectURL(new Blob([e2], { type: "text/plain;charset=UTF-8" }));
    try {
      var n2 = new XMLHttpRequest();
      return n2.open("GET", t2, false), n2.send(), n2.responseText;
    } catch (t3) {
      return r(e2);
    } finally {
      URL.revokeObjectURL(t2);
    }
  }), n.prototype.decode = function(e2, t2) {
    if ((t2 = void 0 === t2 ? { stream: false } : t2).stream)
      throw Error("Failed to decode: the 'stream' option is unsupported.");
    return e2 = e2 instanceof Uint8Array ? e2 : e2.buffer instanceof ArrayBuffer ? new Uint8Array(e2.buffer) : new Uint8Array(e2), i(e2);
  }, e.TextEncoder = t, e.TextDecoder = n;
}("undefined" != typeof window ? window : v), function() {
  function e(e2, t2) {
    if (!(e2 instanceof t2))
      throw new TypeError("Cannot call a class as a function");
  }
  function t(e2, t2) {
    for (var n2 = 0; n2 < t2.length; n2++) {
      var r2 = t2[n2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
    }
  }
  function n(e2, n2, r2) {
    return n2 && t(e2.prototype, n2), r2 && t(e2, r2), e2;
  }
  function r(e2, t2) {
    if ("function" != typeof t2 && null !== t2)
      throw new TypeError("Super expression must either be null or a function");
    e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, writable: true, configurable: true } }), t2 && i(e2, t2);
  }
  function o(e2) {
    return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e3) {
      return e3.__proto__ || Object.getPrototypeOf(e3);
    })(e2);
  }
  function i(e2, t2) {
    return (i = Object.setPrototypeOf || function(e3, t3) {
      return e3.__proto__ = t3, e3;
    })(e2, t2);
  }
  function c(e2) {
    if (void 0 === e2)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e2;
  }
  function a(e2, t2) {
    return !t2 || "object" != typeof t2 && "function" != typeof t2 ? c(e2) : t2;
  }
  function s(e2) {
    var t2 = function() {
      if ("undefined" == typeof Reflect || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if ("function" == typeof Proxy)
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (e3) {
        return false;
      }
    }();
    return function() {
      var n2, r2 = o(e2);
      if (t2) {
        var i2 = o(this).constructor;
        n2 = Reflect.construct(r2, arguments, i2);
      } else
        n2 = r2.apply(this, arguments);
      return a(this, n2);
    };
  }
  function u2(e2, t2) {
    for (; !Object.prototype.hasOwnProperty.call(e2, t2) && null !== (e2 = o(e2)); )
      ;
    return e2;
  }
  function l2(e2, t2, n2) {
    return (l2 = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e3, t3, n3) {
      var r2 = u2(e3, t3);
      if (r2) {
        var o2 = Object.getOwnPropertyDescriptor(r2, t3);
        return o2.get ? o2.get.call(n3) : o2.value;
      }
    })(e2, t2, n2 || e2);
  }
  var d = function() {
    function t2() {
      e(this, t2), Object.defineProperty(this, "listeners", { value: {}, writable: true, configurable: true });
    }
    return n(t2, [{ key: "addEventListener", value: function(e2, t3, n2) {
      e2 in this.listeners || (this.listeners[e2] = []), this.listeners[e2].push({ callback: t3, options: n2 });
    } }, { key: "removeEventListener", value: function(e2, t3) {
      if (e2 in this.listeners) {
        for (var n2 = this.listeners[e2], r2 = 0, o2 = n2.length; r2 < o2; r2++)
          if (n2[r2].callback === t3)
            return void n2.splice(r2, 1);
      }
    } }, { key: "dispatchEvent", value: function(e2) {
      if (e2.type in this.listeners) {
        for (var t3 = this.listeners[e2.type].slice(), n2 = 0, r2 = t3.length; n2 < r2; n2++) {
          var o2 = t3[n2];
          try {
            o2.callback.call(this, e2);
          } catch (e3) {
            Promise.resolve().then(function() {
              throw e3;
            });
          }
          o2.options && o2.options.once && this.removeEventListener(e2.type, o2.callback);
        }
        return !e2.defaultPrevented;
      }
    } }]), t2;
  }(), f = function(t2) {
    r(a2, t2);
    var i2 = s(a2);
    function a2() {
      var t3;
      return e(this, a2), (t3 = i2.call(this)).listeners || d.call(c(t3)), Object.defineProperty(c(t3), "aborted", { value: false, writable: true, configurable: true }), Object.defineProperty(c(t3), "onabort", { value: null, writable: true, configurable: true }), t3;
    }
    return n(a2, [{ key: "toString", value: function() {
      return "[object AbortSignal]";
    } }, { key: "dispatchEvent", value: function(e2) {
      "abort" === e2.type && (this.aborted = true, "function" == typeof this.onabort && this.onabort.call(this, e2)), l2(o(a2.prototype), "dispatchEvent", this).call(this, e2);
    } }]), a2;
  }(d), h = function() {
    function t2() {
      e(this, t2), Object.defineProperty(this, "signal", { value: new f(), writable: true, configurable: true });
    }
    return n(t2, [{ key: "abort", value: function() {
      var e2;
      try {
        e2 = new Event("abort");
      } catch (t3) {
        "undefined" != typeof document ? document.createEvent ? (e2 = document.createEvent("Event")).initEvent("abort", false, false) : (e2 = document.createEventObject()).type = "abort" : e2 = { type: "abort", bubbles: false, cancelable: false };
      }
      this.signal.dispatchEvent(e2);
    } }, { key: "toString", value: function() {
      return "[object AbortController]";
    } }]), t2;
  }();
  "undefined" != typeof Symbol && Symbol.toStringTag && (h.prototype[Symbol.toStringTag] = "AbortController", f.prototype[Symbol.toStringTag] = "AbortSignal"), function(e2) {
    (function(e3) {
      return e3.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"), true) : "function" == typeof e3.Request && !e3.Request.prototype.hasOwnProperty("signal") || !e3.AbortController;
    })(e2) && (e2.AbortController = h, e2.AbortSignal = f);
  }("undefined" != typeof self ? self : v);
}();
var xc = g(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: true });
  var n = function() {
    function e2() {
      var e3 = this;
      this.locked = /* @__PURE__ */ new Map(), this.addToLocked = function(t2, n2) {
        var r = e3.locked.get(t2);
        void 0 === r ? void 0 === n2 ? e3.locked.set(t2, []) : e3.locked.set(t2, [n2]) : void 0 !== n2 && (r.unshift(n2), e3.locked.set(t2, r));
      }, this.isLocked = function(t2) {
        return e3.locked.has(t2);
      }, this.lock = function(t2) {
        return new Promise(function(n2, r) {
          e3.isLocked(t2) ? e3.addToLocked(t2, n2) : (e3.addToLocked(t2), n2());
        });
      }, this.unlock = function(t2) {
        var n2 = e3.locked.get(t2);
        if (void 0 !== n2 && 0 !== n2.length) {
          var r = n2.pop();
          e3.locked.set(t2, n2), void 0 !== r && setTimeout(r, 0);
        } else
          e3.locked.delete(t2);
      };
    }
    return e2.getInstance = function() {
      return void 0 === e2.instance && (e2.instance = new e2()), e2.instance;
    }, e2;
  }();
  t.default = function() {
    return n.getInstance();
  };
});
b(xc);
var Gc = g(function(e, t) {
  var n = v && v.__awaiter || function(e2, t2, n2, r2) {
    return new (n2 || (n2 = Promise))(function(o2, i2) {
      function c2(e3) {
        try {
          s(r2.next(e3));
        } catch (e4) {
          i2(e4);
        }
      }
      function a2(e3) {
        try {
          s(r2.throw(e3));
        } catch (e4) {
          i2(e4);
        }
      }
      function s(e3) {
        e3.done ? o2(e3.value) : new n2(function(t3) {
          t3(e3.value);
        }).then(c2, a2);
      }
      s((r2 = r2.apply(e2, t2 || [])).next());
    });
  }, r = v && v.__generator || function(e2, t2) {
    var n2, r2, o2, i2, c2 = { label: 0, sent: function() {
      if (1 & o2[0])
        throw o2[1];
      return o2[1];
    }, trys: [], ops: [] };
    return i2 = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
      return this;
    }), i2;
    function a2(i3) {
      return function(a3) {
        return function(i4) {
          if (n2)
            throw new TypeError("Generator is already executing.");
          for (; c2; )
            try {
              if (n2 = 1, r2 && (o2 = 2 & i4[0] ? r2.return : i4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, i4[1])).done)
                return o2;
              switch (r2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                case 0:
                case 1:
                  o2 = i4;
                  break;
                case 4:
                  return c2.label++, { value: i4[1], done: false };
                case 5:
                  c2.label++, r2 = i4[1], i4 = [0];
                  continue;
                case 7:
                  i4 = c2.ops.pop(), c2.trys.pop();
                  continue;
                default:
                  if (!((o2 = (o2 = c2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                    c2 = 0;
                    continue;
                  }
                  if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                    c2.label = i4[1];
                    break;
                  }
                  if (6 === i4[0] && c2.label < o2[1]) {
                    c2.label = o2[1], o2 = i4;
                    break;
                  }
                  if (o2 && c2.label < o2[2]) {
                    c2.label = o2[2], c2.ops.push(i4);
                    break;
                  }
                  o2[2] && c2.ops.pop(), c2.trys.pop();
                  continue;
              }
              i4 = t2.call(e2, c2);
            } catch (e3) {
              i4 = [6, e3], r2 = 0;
            } finally {
              n2 = o2 = 0;
            }
          if (5 & i4[0])
            throw i4[1];
          return { value: i4[0] ? i4[1] : void 0, done: true };
        }([i3, a3]);
      };
    }
  };
  Object.defineProperty(t, "__esModule", { value: true });
  var o = "browser-tabs-lock-key";
  function i(e2) {
    return new Promise(function(t2) {
      return setTimeout(t2, e2);
    });
  }
  function c(e2) {
    for (var t2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", n2 = "", r2 = 0; r2 < e2; r2++)
      n2 += t2[Math.floor(Math.random() * t2.length)];
    return n2;
  }
  var a = function() {
    function e2() {
      this.acquiredIatSet = /* @__PURE__ */ new Set(), this.id = Date.now().toString() + c(15), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), void 0 === e2.waiters && (e2.waiters = []);
    }
    return e2.prototype.acquireLock = function(t2, a2) {
      return void 0 === a2 && (a2 = 5e3), n(this, void 0, void 0, function() {
        var n2, s, u2, l2, d, f;
        return r(this, function(r2) {
          switch (r2.label) {
            case 0:
              n2 = Date.now() + c(4), s = Date.now() + a2, u2 = o + "-" + t2, l2 = window.localStorage, r2.label = 1;
            case 1:
              return Date.now() < s ? [4, i(30)] : [3, 8];
            case 2:
              return r2.sent(), null !== l2.getItem(u2) ? [3, 5] : (d = this.id + "-" + t2 + "-" + n2, [4, i(Math.floor(25 * Math.random()))]);
            case 3:
              return r2.sent(), l2.setItem(u2, JSON.stringify({ id: this.id, iat: n2, timeoutKey: d, timeAcquired: Date.now(), timeRefreshed: Date.now() })), [4, i(30)];
            case 4:
              return r2.sent(), null !== (f = l2.getItem(u2)) && (f = JSON.parse(f)).id === this.id && f.iat === n2 ? (this.acquiredIatSet.add(n2), this.refreshLockWhileAcquired(u2, n2), [2, true]) : [3, 7];
            case 5:
              return e2.lockCorrector(), [4, this.waitForSomethingToChange(s)];
            case 6:
              r2.sent(), r2.label = 7;
            case 7:
              return n2 = Date.now() + c(4), [3, 1];
            case 8:
              return [2, false];
          }
        });
      });
    }, e2.prototype.refreshLockWhileAcquired = function(e3, t2) {
      return n(this, void 0, void 0, function() {
        var o2 = this;
        return r(this, function(i2) {
          return setTimeout(function() {
            return n(o2, void 0, void 0, function() {
              var n2, o3;
              return r(this, function(r2) {
                switch (r2.label) {
                  case 0:
                    return [4, xc.default().lock(t2)];
                  case 1:
                    return r2.sent(), this.acquiredIatSet.has(t2) ? (n2 = window.localStorage, null === (o3 = n2.getItem(e3)) ? (xc.default().unlock(t2), [2]) : ((o3 = JSON.parse(o3)).timeRefreshed = Date.now(), n2.setItem(e3, JSON.stringify(o3)), xc.default().unlock(t2), this.refreshLockWhileAcquired(e3, t2), [2])) : (xc.default().unlock(t2), [2]);
                }
              });
            });
          }, 1e3), [2];
        });
      });
    }, e2.prototype.waitForSomethingToChange = function(t2) {
      return n(this, void 0, void 0, function() {
        return r(this, function(n2) {
          switch (n2.label) {
            case 0:
              return [4, new Promise(function(n3) {
                var r2 = false, o2 = Date.now(), i2 = false;
                function c2() {
                  if (i2 || (window.removeEventListener("storage", c2), e2.removeFromWaiting(c2), clearTimeout(a2), i2 = true), !r2) {
                    r2 = true;
                    var t3 = 50 - (Date.now() - o2);
                    t3 > 0 ? setTimeout(n3, t3) : n3();
                  }
                }
                window.addEventListener("storage", c2), e2.addToWaiting(c2);
                var a2 = setTimeout(c2, Math.max(0, t2 - Date.now()));
              })];
            case 1:
              return n2.sent(), [2];
          }
        });
      });
    }, e2.addToWaiting = function(t2) {
      this.removeFromWaiting(t2), void 0 !== e2.waiters && e2.waiters.push(t2);
    }, e2.removeFromWaiting = function(t2) {
      void 0 !== e2.waiters && (e2.waiters = e2.waiters.filter(function(e3) {
        return e3 !== t2;
      }));
    }, e2.notifyWaiters = function() {
      void 0 !== e2.waiters && e2.waiters.slice().forEach(function(e3) {
        return e3();
      });
    }, e2.prototype.releaseLock = function(e3) {
      return n(this, void 0, void 0, function() {
        return r(this, function(t2) {
          switch (t2.label) {
            case 0:
              return [4, this.releaseLock__private__(e3)];
            case 1:
              return [2, t2.sent()];
          }
        });
      });
    }, e2.prototype.releaseLock__private__ = function(t2) {
      return n(this, void 0, void 0, function() {
        var n2, i2, c2;
        return r(this, function(r2) {
          switch (r2.label) {
            case 0:
              return n2 = window.localStorage, i2 = o + "-" + t2, null === (c2 = n2.getItem(i2)) ? [2] : (c2 = JSON.parse(c2)).id !== this.id ? [3, 2] : [4, xc.default().lock(c2.iat)];
            case 1:
              r2.sent(), this.acquiredIatSet.delete(c2.iat), n2.removeItem(i2), xc.default().unlock(c2.iat), e2.notifyWaiters(), r2.label = 2;
            case 2:
              return [2];
          }
        });
      });
    }, e2.lockCorrector = function() {
      for (var t2 = Date.now() - 5e3, n2 = window.localStorage, r2 = Object.keys(n2), i2 = false, c2 = 0; c2 < r2.length; c2++) {
        var a2 = r2[c2];
        if (a2.includes(o)) {
          var s = n2.getItem(a2);
          null !== s && (void 0 === (s = JSON.parse(s)).timeRefreshed && s.timeAcquired < t2 || void 0 !== s.timeRefreshed && s.timeRefreshed < t2) && (n2.removeItem(a2), i2 = true);
        }
      }
      i2 && e2.notifyWaiters();
    }, e2.waiters = void 0, e2;
  }();
  t.default = a;
}), Xc = b(Gc), Kc = function(e) {
  function t(n, r) {
    var o = e.call(this, r) || this;
    return o.error = n, o.error_description = r, Object.setPrototypeOf(o, t.prototype), o;
  }
  return l(t, e), t.fromPayload = function(e2) {
    return new t(e2.error, e2.error_description);
  }, t;
}(Error);
(function(e) {
  function t(n, r, o, i) {
    void 0 === i && (i = null);
    var c = e.call(this, n, r) || this;
    return c.state = o, c.appState = i, Object.setPrototypeOf(c, t.prototype), c;
  }
  return l(t, e), t;
})(Kc);
var Oc = function(e) {
  function t() {
    var n = e.call(this, "timeout", "Timeout") || this;
    return Object.setPrototypeOf(n, t.prototype), n;
  }
  return l(t, e), t;
}(Kc);
(function(e) {
  function t(n) {
    var r = e.call(this) || this;
    return r.popup = n, Object.setPrototypeOf(r, t.prototype), r;
  }
  return l(t, e), t;
})(Oc);
(function(e) {
  function t(n) {
    var r = e.call(this, "cancelled", "Popup closed") || this;
    return r.popup = n, Object.setPrototypeOf(r, t.prototype), r;
  }
  return l(t, e), t;
})(Kc);
(function(e) {
  function t(n, r, o) {
    var i = e.call(this, n, r) || this;
    return i.mfa_token = o, Object.setPrototypeOf(i, t.prototype), i;
  }
  return l(t, e), t;
})(Kc);
(function(e) {
  function t(n, r) {
    var o = e.call(this, "missing_refresh_token", "Missing Refresh Token (audience: '".concat(Mc(n, ["default"]), "', scope: '").concat(Mc(r), "')")) || this;
    return o.audience = n, o.scope = r, Object.setPrototypeOf(o, t.prototype), o;
  }
  return l(t, e), t;
})(Kc);
function Mc(e, t) {
  return void 0 === t && (t = []), e && !t.includes(e) ? e : "";
}
var ha = g(function(e, t) {
  var n = v && v.__assign || function() {
    return (n = Object.assign || function(e2) {
      for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
        for (var o2 in t2 = arguments[n2])
          Object.prototype.hasOwnProperty.call(t2, o2) && (e2[o2] = t2[o2]);
      return e2;
    }).apply(this, arguments);
  };
  function r(e2, t2) {
    if (!t2)
      return "";
    var n2 = "; " + e2;
    return true === t2 ? n2 : n2 + "=" + t2;
  }
  function o(e2, t2, n2) {
    return encodeURIComponent(e2).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(t2).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + function(e3) {
      if ("number" == typeof e3.expires) {
        var t3 = new Date();
        t3.setMilliseconds(t3.getMilliseconds() + 864e5 * e3.expires), e3.expires = t3;
      }
      return r("Expires", e3.expires ? e3.expires.toUTCString() : "") + r("Domain", e3.domain) + r("Path", e3.path) + r("Secure", e3.secure) + r("SameSite", e3.sameSite);
    }(n2);
  }
  function i(e2) {
    for (var t2 = {}, n2 = e2 ? e2.split("; ") : [], r2 = /(%[\dA-F]{2})+/gi, o2 = 0; o2 < n2.length; o2++) {
      var i2 = n2[o2].split("="), c2 = i2.slice(1).join("=");
      '"' === c2.charAt(0) && (c2 = c2.slice(1, -1));
      try {
        t2[i2[0].replace(r2, decodeURIComponent)] = c2.replace(r2, decodeURIComponent);
      } catch (e3) {
      }
    }
    return t2;
  }
  function c() {
    return i(document.cookie);
  }
  function a(e2, t2, r2) {
    document.cookie = o(e2, t2, n({ path: "/" }, r2));
  }
  t.__esModule = true, t.encode = o, t.parse = i, t.getAll = c, t.get = function(e2) {
    return c()[e2];
  }, t.set = a, t.remove = function(e2, t2) {
    a(e2, "", n(n({}, t2), { expires: -1 }));
  };
});
b(ha), ha.encode, ha.parse, ha.getAll;
ha.get;
ha.set;
ha.remove;
new Xc();
ref(null);
async function createApp() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: "/",
        component: _sfc_main$2
      },
      {
        path: "/logout1",
        component: Hello
      },
      {
        path: "/:pathMatch(.*)*",
        component: Error$1
      }
    ]
  });
  const app = createSSRApp(App);
  app.use(router);
  return { app, router };
}
async function render(url, manifest) {
  const { app, router } = await createApp();
  router.push(url);
  await router.isReady();
  const ctx = {};
  const html = await renderToString(app, ctx);
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
  return [
    html,
    preloadLinks
  ];
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          const filename = basename(file);
          if (manifest[filename]) {
            for (const depFile of manifest[filename]) {
              links += renderPreloadLink(depFile);
              seen.add(depFile);
            }
          }
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith(".gif")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith(".png")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else {
    return "";
  }
}
export {
  render
};
