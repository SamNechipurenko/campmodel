/*!
 * version: 0.4.48
 * build: Tue Oct 20 2020 01:50:09 GMT+0300 (Moscow Standard Time)
 */ !(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var i = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var i in e)
                    n.d(
                        r,
                        i,
                        function (t) {
                            return e[t];
                        }.bind(null, i)
                    );
            return r;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                        return e.default;
                    }
                    : function () {
                        return e;
                    };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = "/"),
        n((n.s = 41));
})([
    function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return i;
        }),
            n.d(t, "a", function () {
                return o;
            }),
            n.d(t, "c", function () {
                return s;
            }),
            n.d(t, "d", function () {
                return a;
            });
        /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
        var r = function (e, t) {
            return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(e, t);
        };
        function i(e, t) {
            function n() {
                this.constructor = e;
            }
            r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
        }
        var o = function () {
            return (o =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }).apply(this, arguments);
        };
        function s(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r,
                i,
                o = n.call(e),
                s = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; ) s.push(r.value);
            } catch (e) {
                i = { error: e };
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        }
        function a() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(s(arguments[t]));
            return e;
        }
    },
    ,
    function (e, t, n) {
        "use strict";
        (function (e, r) {
            function i(e, t) {
                return e.require(t);
            }
            n.d(t, "c", function () {
                return i;
            }),
                n.d(t, "e", function () {
                    return s;
                }),
                n.d(t, "g", function () {
                    return a;
                }),
                n.d(t, "f", function () {
                    return c;
                }),
                n.d(t, "d", function () {
                    return u;
                }),
                n.d(t, "b", function () {
                    return l;
                }),
                n.d(t, "a", function () {
                    return p;
                });
            var o = {};
            function s() {
                return "[object process]" === Object.prototype.toString.call(void 0 !== e ? e : 0) ? r : "undefined" != typeof window ? window : "undefined" != typeof self ? self : o;
            }
            function a() {
                var e = s(),
                    t = e.crypto || e.msCrypto;
                if (void 0 !== t && t.getRandomValues) {
                    var n = new Uint16Array(8);
                    t.getRandomValues(n), (n[3] = (4095 & n[3]) | 16384), (n[4] = (16383 & n[4]) | 32768);
                    var r = function (e) {
                        for (var t = e.toString(16); t.length < 4; ) t = "0" + t;
                        return t;
                    };
                    return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7]);
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                    var t = (16 * Math.random()) | 0;
                    return ("x" === e ? t : (3 & t) | 8).toString(16);
                });
            }
            function c(e) {
                if (!e) return {};
                var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!t) return {};
                var n = t[6] || "",
                    r = t[8] || "";
                return { host: t[4], path: t[5], protocol: t[2], relative: t[5] + n + r };
            }
            function u(e) {
                if (e.message) return e.message;
                if (e.exception && e.exception.values && e.exception.values[0]) {
                    var t = e.exception.values[0];
                    return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || e.event_id || "<unknown>";
                }
                return e.event_id || "<unknown>";
            }
            function l(e) {
                var t = s();
                if (!("console" in t)) return e();
                var n = t.console,
                    r = {};
                ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
                    e in t.console && n[e].__sentry__ && ((r[e] = n[e].__sentry_wrapped__), (n[e] = n[e].__sentry_original__));
                });
                var i = e();
                return (
                    Object.keys(r).forEach(function (e) {
                        n[e] = r[e];
                    }),
                        i
                );
            }
            function p(e, t, n, r) {
                void 0 === r && (r = { handled: !0, type: "generic" }),
                    (e.exception = e.exception || {}),
                    (e.exception.values = e.exception.values || []),
                    (e.exception.values[0] = e.exception.values[0] || {}),
                    (e.exception.values[0].value = e.exception.values[0].value || t || ""),
                    (e.exception.values[0].type = e.exception.values[0].type || n || "Error"),
                    (e.exception.values[0].mechanism = e.exception.values[0].mechanism || r);
            }
        }.call(this, n(13), n(18)));
    },
    function (e, t, n) {
        "use strict";
        var r = n(12),
            i = n(22),
            o = Object.prototype.toString;
        function s(e) {
            return "[object Array]" === o.call(e);
        }
        function a(e) {
            return null !== e && "object" == typeof e;
        }
        function c(e) {
            return "[object Function]" === o.call(e);
        }
        function u(e, t) {
            if (null != e)
                if (("object" != typeof e && (e = [e]), s(e))) for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
        }
        e.exports = {
            isArray: s,
            isArrayBuffer: function (e) {
                return "[object ArrayBuffer]" === o.call(e);
            },
            isBuffer: i,
            isFormData: function (e) {
                return "undefined" != typeof FormData && e instanceof FormData;
            },
            isArrayBufferView: function (e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
            },
            isString: function (e) {
                return "string" == typeof e;
            },
            isNumber: function (e) {
                return "number" == typeof e;
            },
            isObject: a,
            isUndefined: function (e) {
                return void 0 === e;
            },
            isDate: function (e) {
                return "[object Date]" === o.call(e);
            },
            isFile: function (e) {
                return "[object File]" === o.call(e);
            },
            isBlob: function (e) {
                return "[object Blob]" === o.call(e);
            },
            isFunction: c,
            isStream: function (e) {
                return a(e) && c(e.pipe);
            },
            isURLSearchParams: function (e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
            },
            isStandardBrowserEnv: function () {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
            },
            forEach: u,
            merge: function e() {
                var t = {};
                function n(n, r) {
                    "object" == typeof t[r] && "object" == typeof n ? (t[r] = e(t[r], n)) : (t[r] = n);
                }
                for (var r = 0, i = arguments.length; r < i; r++) u(arguments[r], n);
                return t;
            },
            extend: function (e, t, n) {
                return (
                    u(t, function (t, i) {
                        e[i] = n && "function" == typeof t ? r(t, n) : t;
                    }),
                        e
                );
            },
            trim: function (e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "");
            },
        };
    },
    function (e, t, n) {
        "use strict";
        function r(e) {
            switch (Object.prototype.toString.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return !0;
                default:
                    return e instanceof Error;
            }
        }
        function i(e) {
            return "[object ErrorEvent]" === Object.prototype.toString.call(e);
        }
        function o(e) {
            return "[object DOMError]" === Object.prototype.toString.call(e);
        }
        function s(e) {
            return "[object DOMException]" === Object.prototype.toString.call(e);
        }
        function a(e) {
            return "[object String]" === Object.prototype.toString.call(e);
        }
        function c(e) {
            return null === e || ("object" != typeof e && "function" != typeof e);
        }
        function u(e) {
            return "[object Object]" === Object.prototype.toString.call(e);
        }
        function l(e) {
            return "[object RegExp]" === Object.prototype.toString.call(e);
        }
        function p(e) {
            return Boolean(e && e.then && "function" == typeof e.then);
        }
        function d(e) {
            return u(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
        }
        n.d(t, "c", function () {
            return r;
        }),
            n.d(t, "d", function () {
                return i;
            }),
            n.d(t, "a", function () {
                return o;
            }),
            n.d(t, "b", function () {
                return s;
            }),
            n.d(t, "h", function () {
                return a;
            }),
            n.d(t, "f", function () {
                return c;
            }),
            n.d(t, "e", function () {
                return u;
            }),
            n.d(t, "g", function () {
                return l;
            }),
            n.d(t, "j", function () {
                return p;
            }),
            n.d(t, "i", function () {
                return d;
            });
    },
    function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", function () {
                return o;
            }),
                n.d(t, "d", function () {
                    return s;
                }),
                n.d(t, "c", function () {
                    return c;
                }),
                n.d(t, "b", function () {
                    return p;
                });
            var r = n(4),
                i = n(19);
            function o(e, t, n) {
                if (t in e) {
                    var r = e[t],
                        i = n(r);
                    if ("function" == typeof i)
                        try {
                            (i.prototype = i.prototype || {}), Object.defineProperties(i, { __sentry__: { enumerable: !1, value: !0 }, __sentry_original__: { enumerable: !1, value: r }, __sentry_wrapped__: { enumerable: !1, value: i } });
                        } catch (e) {}
                    e[t] = i;
                }
            }
            function s(e) {
                return Object.keys(e)
                    .map(function (t) {
                        return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
                    })
                    .join("&");
            }
            function a(e) {
                return (function (e) {
                    return ~-encodeURI(e).split(/%..|./).length;
                })(JSON.stringify(e));
            }
            function c(e, t, n) {
                void 0 === t && (t = 3), void 0 === n && (n = 102400);
                var r = p(e, t);
                return a(r) > n ? c(e, t - 1, n) : r;
            }
            function u(t, n) {
                return "domain" === n && "object" == typeof t && t._events
                    ? "[Domain]"
                    : "domainEmitter" === n
                        ? "[DomainEmitter]"
                        : void 0 !== e && t === e
                            ? "[Global]"
                            : "undefined" != typeof window && t === window
                                ? "[Window]"
                                : "undefined" != typeof document && t === document
                                    ? "[Document]"
                                    : "undefined" != typeof Event && t instanceof Event
                                        ? Object.getPrototypeOf(t)
                                            ? t.constructor.name
                                            : "Event"
                                        : Object(r.i)(t)
                                            ? "[SyntheticEvent]"
                                            : Number.isNaN(t)
                                                ? "[NaN]"
                                                : void 0 === t
                                                    ? "[undefined]"
                                                    : "function" == typeof t
                                                        ? "[Function: " + (t.name || "<unknown-function-name>") + "]"
                                                        : t;
            }
            function l(e, t, n, o) {
                if ((void 0 === n && (n = 1 / 0), void 0 === o && (o = new i.a()), 0 === n))
                    return (function (e) {
                        var t = Object.prototype.toString.call(e);
                        if ("string" == typeof e) return e;
                        if ("[object Object]" === t) return "[Object]";
                        if ("[object Array]" === t) return "[Array]";
                        var n = u(e);
                        return Object(r.f)(n) ? n : t;
                    })(t);
                if (null != t && "function" == typeof t.toJSON) return t.toJSON();
                var s = u(t, e);
                if (Object(r.f)(s)) return s;
                var a = Object(r.c)(t)
                    ? (function (e) {
                        var t = { message: e.message, name: e.name, stack: e.stack };
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t;
                    })(t)
                    : t,
                    c = Array.isArray(t) ? [] : {};
                if (o.memoize(t)) return "[Circular ~]";
                for (var p in a) Object.prototype.hasOwnProperty.call(a, p) && (c[p] = l(p, a[p], n - 1, o));
                return o.unmemoize(t), c;
            }
            function p(e, t) {
                try {
                    return JSON.parse(
                        JSON.stringify(e, function (e, n) {
                            return l(e, n, t);
                        })
                    );
                } catch (e) {
                    return "**non-serializable**";
                }
            }
        }.call(this, n(18)));
    },
    ,
    ,
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return u;
        }),
            n.d(t, "b", function () {
                return p;
            });
        var r = n(0),
            i = n(42),
            o = n(4),
            s = n(5),
            a = n(2),
            c = n(20),
            u = (function () {
                function e() {
                    (this._notifyingListeners = !1), (this._scopeListeners = []), (this._eventProcessors = []), (this._breadcrumbs = []), (this._user = {}), (this._tags = {}), (this._extra = {}), (this._context = {});
                }
                return (
                    (e.prototype.addScopeListener = function (e) {
                        this._scopeListeners.push(e);
                    }),
                        (e.prototype.addEventProcessor = function (e) {
                            return this._eventProcessors.push(e), this;
                        }),
                        (e.prototype._notifyScopeListeners = function () {
                            var e = this;
                            this._notifyingListeners ||
                            ((this._notifyingListeners = !0),
                                setTimeout(function () {
                                    e._scopeListeners.forEach(function (t) {
                                        t(e);
                                    }),
                                        (e._notifyingListeners = !1);
                                }));
                        }),
                        (e.prototype._notifyEventProcessors = function (e, t, n, s) {
                            var a = this;
                            return (
                                void 0 === s && (s = 0),
                                    new i.a(function (i, c) {
                                        var u = e[s];
                                        if (null === t || "function" != typeof u) i(t);
                                        else {
                                            var l = u(r.a({}, t), n);
                                            Object(o.j)(l)
                                                ? l
                                                    .then(function (t) {
                                                        return a._notifyEventProcessors(e, t, n, s + 1).then(i);
                                                    })
                                                    .catch(c)
                                                : a
                                                    ._notifyEventProcessors(e, l, n, s + 1)
                                                    .then(i)
                                                    .catch(c);
                                        }
                                    })
                            );
                        }),
                        (e.prototype.setUser = function (e) {
                            return (this._user = Object(s.b)(e)), this._notifyScopeListeners(), this;
                        }),
                        (e.prototype.setTags = function (e) {
                            return (this._tags = r.a({}, this._tags, Object(s.b)(e))), this._notifyScopeListeners(), this;
                        }),
                        (e.prototype.setTag = function (e, t) {
                            var n;
                            return (this._tags = r.a({}, this._tags, (((n = {})[e] = Object(s.b)(t)), n))), this._notifyScopeListeners(), this;
                        }),
                        (e.prototype.setExtras = function (e) {
                            return (this._extra = r.a({}, this._extra, Object(s.b)(e))), this._notifyScopeListeners(), this;
                        }),
                        (e.prototype.setExtra = function (e, t) {
                            var n;
                            return (this._extra = r.a({}, this._extra, (((n = {})[e] = Object(s.b)(t)), n))), this._notifyScopeListeners(), this;
                        }),
                        (e.prototype.setFingerprint = function (e) {
                            return (this._fingerprint = Object(s.b)(e)), this._notifyScopeListeners(), this;
                        }),
                        (e.prototype.setLevel = function (e) {
                            return (this._level = Object(s.b)(e)), this._notifyScopeListeners(), this;
                        }),
                        (e.prototype.setTransaction = function (e) {
                            return (this._transaction = e), this._notifyScopeListeners(), this;
                        }),
                        (e.prototype.setContext = function (e, t) {
                            return (this._context[e] = t ? Object(s.b)(t) : void 0), this._notifyScopeListeners(), this;
                        }),
                        (e.prototype.setSpan = function (e) {
                            return (this._span = e), this._notifyScopeListeners(), this;
                        }),
                        (e.prototype.startSpan = function (e) {
                            var t = new c.a();
                            return t.setParent(e), this.setSpan(t), t;
                        }),
                        (e.prototype.getSpan = function () {
                            return this._span;
                        }),
                        (e.clone = function (t) {
                            var n = new e();
                            return (
                                Object.assign(n, t, { _scopeListeners: [] }),
                                t &&
                                ((n._breadcrumbs = r.d(t._breadcrumbs)),
                                    (n._tags = r.a({}, t._tags)),
                                    (n._extra = r.a({}, t._extra)),
                                    (n._context = r.a({}, t._context)),
                                    (n._user = t._user),
                                    (n._level = t._level),
                                    (n._span = t._span),
                                    (n._transaction = t._transaction),
                                    (n._fingerprint = t._fingerprint),
                                    (n._eventProcessors = r.d(t._eventProcessors))),
                                    n
                            );
                        }),
                        (e.prototype.clear = function () {
                            return (
                                (this._breadcrumbs = []),
                                    (this._tags = {}),
                                    (this._extra = {}),
                                    (this._user = {}),
                                    (this._context = {}),
                                    (this._level = void 0),
                                    (this._transaction = void 0),
                                    (this._fingerprint = void 0),
                                    (this._span = void 0),
                                    this._notifyScopeListeners(),
                                    this
                            );
                        }),
                        (e.prototype.addBreadcrumb = function (e, t) {
                            var n = new Date().getTime() / 1e3,
                                i = r.a({ timestamp: n }, e);
                            return (this._breadcrumbs = void 0 !== t && t >= 0 ? r.d(this._breadcrumbs, [Object(s.b)(i)]).slice(-t) : r.d(this._breadcrumbs, [Object(s.b)(i)])), this._notifyScopeListeners(), this;
                        }),
                        (e.prototype.clearBreadcrumbs = function () {
                            return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
                        }),
                        (e.prototype._applyFingerprint = function (e) {
                            (e.fingerprint = e.fingerprint ? (Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint]) : []),
                            this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
                            e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
                        }),
                        (e.prototype.applyToEvent = function (e, t) {
                            return (
                                this._extra && Object.keys(this._extra).length && (e.extra = r.a({}, this._extra, e.extra)),
                                this._tags && Object.keys(this._tags).length && (e.tags = r.a({}, this._tags, e.tags)),
                                this._user && Object.keys(this._user).length && (e.user = r.a({}, this._user, e.user)),
                                this._context && Object.keys(this._context).length && (e.contexts = r.a({}, this._context, e.contexts)),
                                this._level && (e.level = this._level),
                                this._transaction && (e.transaction = this._transaction),
                                this._span && ((e.contexts = e.contexts || {}), (e.contexts.trace = this._span)),
                                    this._applyFingerprint(e),
                                    (e.breadcrumbs = r.d(e.breadcrumbs || [], this._breadcrumbs)),
                                    (e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0),
                                    this._notifyEventProcessors(r.d(l(), this._eventProcessors), e, t)
                            );
                        }),
                        e
                );
            })();
        function l() {
            var e = Object(a.e)();
            return (e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || []), e.__SENTRY__.globalEventProcessors;
        }
        function p(e) {
            l().push(e);
        }
    },
    function (e, t, n) {
        "use strict";
        (function (t) {
            var r = n(3),
                i = n(24),
                o = { "Content-Type": "application/x-www-form-urlencoded" };
            function s(e, t) {
                !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
            }
            var a,
                c = {
                    adapter: ("undefined" != typeof XMLHttpRequest ? (a = n(14)) : void 0 !== t && (a = n(14)), a),
                    transformRequest: [
                        function (e, t) {
                            return (
                                i(t, "Content-Type"),
                                    r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e)
                                        ? e
                                        : r.isArrayBufferView(e)
                                        ? e.buffer
                                        : r.isURLSearchParams(e)
                                            ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString())
                                            : r.isObject(e)
                                                ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e))
                                                : e
                            );
                        },
                    ],
                    transformResponse: [
                        function (e) {
                            if ("string" == typeof e)
                                try {
                                    e = JSON.parse(e);
                                } catch (e) {}
                            return e;
                        },
                    ],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function (e) {
                        return e >= 200 && e < 300;
                    },
                };
            (c.headers = { common: { Accept: "application/json, text/plain, */*" } }),
                r.forEach(["delete", "get", "head"], function (e) {
                    c.headers[e] = {};
                }),
                r.forEach(["post", "put", "patch"], function (e) {
                    c.headers[e] = r.merge(o);
                }),
                (e.exports = c);
        }.call(this, n(13)));
    },
    function (e, t, n) {
        e.exports = n(21);
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a;
        });
        var r = n(2),
            i = Object(r.e)(),
            o = "Sentry Logger ",
            s = (function () {
                function e() {
                    this._enabled = !1;
                }
                return (
                    (e.prototype.disable = function () {
                        this._enabled = !1;
                    }),
                        (e.prototype.enable = function () {
                            this._enabled = !0;
                        }),
                        (e.prototype.log = function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this._enabled &&
                            Object(r.b)(function () {
                                i.console.log(o + "[Log]: " + e.join(" "));
                            });
                        }),
                        (e.prototype.warn = function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this._enabled &&
                            Object(r.b)(function () {
                                i.console.warn(o + "[Warn]: " + e.join(" "));
                            });
                        }),
                        (e.prototype.error = function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this._enabled &&
                            Object(r.b)(function () {
                                i.console.error(o + "[Error]: " + e.join(" "));
                            });
                        }),
                        e
                );
            })();
        i.__SENTRY__ = i.__SENTRY__ || {};
        var a = i.__SENTRY__.logger || (i.__SENTRY__.logger = new s());
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            return function () {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return e.apply(t, n);
            };
        };
    },
    function (e, t) {
        var n,
            r,
            i = (e.exports = {});
        function o() {
            throw new Error("setTimeout has not been defined");
        }
        function s() {
            throw new Error("clearTimeout has not been defined");
        }
        function a(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === o || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
            try {
                return n(e, 0);
            } catch (t) {
                try {
                    return n.call(null, e, 0);
                } catch (t) {
                    return n.call(this, e, 0);
                }
            }
        }
        !(function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o;
            } catch (e) {
                n = o;
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : s;
            } catch (e) {
                r = s;
            }
        })();
        var c,
            u = [],
            l = !1,
            p = -1;
        function d() {
            l && c && ((l = !1), c.length ? (u = c.concat(u)) : (p = -1), u.length && f());
        }
        function f() {
            if (!l) {
                var e = a(d);
                l = !0;
                for (var t = u.length; t; ) {
                    for (c = u, u = []; ++p < t; ) c && c[p].run();
                    (p = -1), (t = u.length);
                }
                (c = null),
                    (l = !1),
                    (function (e) {
                        if (r === clearTimeout) return clearTimeout(e);
                        if ((r === s || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
                        try {
                            r(e);
                        } catch (t) {
                            try {
                                return r.call(null, e);
                            } catch (t) {
                                return r.call(this, e);
                            }
                        }
                    })(e);
            }
        }
        function h(e, t) {
            (this.fun = e), (this.array = t);
        }
        function _() {}
        (i.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.push(new h(e, t)), 1 !== u.length || l || a(f);
        }),
            (h.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (i.title = "browser"),
            (i.browser = !0),
            (i.env = {}),
            (i.argv = []),
            (i.version = ""),
            (i.versions = {}),
            (i.on = _),
            (i.addListener = _),
            (i.once = _),
            (i.off = _),
            (i.removeListener = _),
            (i.removeAllListeners = _),
            (i.emit = _),
            (i.prependListener = _),
            (i.prependOnceListener = _),
            (i.listeners = function (e) {
                return [];
            }),
            (i.binding = function (e) {
                throw new Error("process.binding is not supported");
            }),
            (i.cwd = function () {
                return "/";
            }),
            (i.chdir = function (e) {
                throw new Error("process.chdir is not supported");
            }),
            (i.umask = function () {
                return 0;
            });
    },
    function (e, t, n) {
        "use strict";
        var r = n(3),
            i = n(25),
            o = n(27),
            s = n(28),
            a = n(29),
            c = n(15);
        e.exports = function (e) {
            return new Promise(function (t, u) {
                var l = e.data,
                    p = e.headers;
                r.isFormData(l) && delete p["Content-Type"];
                var d = new XMLHttpRequest();
                if (e.auth) {
                    var f = e.auth.username || "",
                        h = e.auth.password || "";
                    p.Authorization = "Basic " + btoa(f + ":" + h);
                }
                if (
                    (d.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0),
                        (d.timeout = e.timeout),
                        (d.onreadystatechange = function () {
                            if (d && 4 === d.readyState && (0 !== d.status || (d.responseURL && 0 === d.responseURL.indexOf("file:")))) {
                                var n = "getAllResponseHeaders" in d ? s(d.getAllResponseHeaders()) : null,
                                    r = { data: e.responseType && "text" !== e.responseType ? d.response : d.responseText, status: d.status, statusText: d.statusText, headers: n, config: e, request: d };
                                i(t, u, r), (d = null);
                            }
                        }),
                        (d.onerror = function () {
                            u(c("Network Error", e, null, d)), (d = null);
                        }),
                        (d.ontimeout = function () {
                            u(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)), (d = null);
                        }),
                        r.isStandardBrowserEnv())
                ) {
                    var _ = n(30),
                        m = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? _.read(e.xsrfCookieName) : void 0;
                    m && (p[e.xsrfHeaderName] = m);
                }
                if (
                    ("setRequestHeader" in d &&
                    r.forEach(p, function (e, t) {
                        void 0 === l && "content-type" === t.toLowerCase() ? delete p[t] : d.setRequestHeader(t, e);
                    }),
                    e.withCredentials && (d.withCredentials = !0),
                        e.responseType)
                )
                    try {
                        d.responseType = e.responseType;
                    } catch (t) {
                        if ("json" !== e.responseType) throw t;
                    }
                "function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress),
                "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress),
                e.cancelToken &&
                e.cancelToken.promise.then(function (e) {
                    d && (d.abort(), u(e), (d = null));
                }),
                void 0 === l && (l = null),
                    d.send(l);
            });
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(26);
        e.exports = function (e, t, n, i, o) {
            var s = new Error(e);
            return r(s, t, n, i, o);
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return !(!e || !e.__CANCEL__);
        };
    },
    function (e, t, n) {
        "use strict";
        function r(e) {
            this.message = e;
        }
        (r.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "");
        }),
            (r.prototype.__CANCEL__ = !0),
            (e.exports = r);
    },
    function (e, t) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (n = window);
        }
        e.exports = n;
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r;
        });
        var r = (function () {
            function e() {
                (this._hasWeakSet = "function" == typeof WeakSet), (this._inner = this._hasWeakSet ? new WeakSet() : []);
            }
            return (
                (e.prototype.memoize = function (e) {
                    if (this._hasWeakSet) return !!this._inner.has(e) || (this._inner.add(e), !1);
                    for (var t = 0; t < this._inner.length; t++) {
                        if (this._inner[t] === e) return !0;
                    }
                    return this._inner.push(e), !1;
                }),
                    (e.prototype.unmemoize = function (e) {
                        if (this._hasWeakSet) this._inner.delete(e);
                        else
                            for (var t = 0; t < this._inner.length; t++)
                                if (this._inner[t] === e) {
                                    this._inner.splice(t, 1);
                                    break;
                                }
                    }),
                    e
            );
        })();
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o;
        });
        var r = n(2),
            i = /^[ \t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \t]*$/,
            o = (function () {
                function e(e, t, n, i) {
                    void 0 === e && (e = Object(r.g)()), void 0 === t && (t = Object(r.g)().substring(16)), (this._traceId = e), (this._spanId = t), (this._sampled = n), (this._parent = i);
                }
                return (
                    (e.prototype.setParent = function (e) {
                        return (this._parent = e), this;
                    }),
                        (e.prototype.setSampled = function (e) {
                            return (this._sampled = e), this;
                        }),
                        (e.fromTraceparent = function (t) {
                            var n = t.match(i);
                            if (n) {
                                var r = void 0;
                                "1" === n[3] ? (r = !0) : "0" === n[3] && (r = !1);
                                var o = new e(n[1], n[2], r);
                                return new e(n[1], void 0, r, o);
                            }
                        }),
                        (e.prototype.toTraceparent = function () {
                            var e = "";
                            return !0 === this._sampled ? (e = "-1") : !1 === this._sampled && (e = "-0"), this._traceId + "-" + this._spanId + e;
                        }),
                        (e.prototype.toJSON = function () {
                            return { parent: (this._parent && this._parent.toJSON()) || void 0, sampled: this._sampled, span_id: this._spanId, trace_id: this._traceId };
                        }),
                        e
                );
            })();
    },
    function (e, t, n) {
        "use strict";
        var r = n(3),
            i = n(12),
            o = n(23),
            s = n(9);
        function a(e) {
            var t = new o(e),
                n = i(o.prototype.request, t);
            return r.extend(n, o.prototype, t), r.extend(n, t), n;
        }
        var c = a(s);
        (c.Axios = o),
            (c.create = function (e) {
                return a(r.merge(s, e));
            }),
            (c.Cancel = n(17)),
            (c.CancelToken = n(36)),
            (c.isCancel = n(16)),
            (c.all = function (e) {
                return Promise.all(e);
            }),
            (c.spread = n(37)),
            (e.exports = c),
            (e.exports.default = c);
    },
    function (e, t) {
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        e.exports = function (e) {
            return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(9),
            i = n(3),
            o = n(31),
            s = n(32);
        function a(e) {
            (this.defaults = e), (this.interceptors = { request: new o(), response: new o() });
        }
        (a.prototype.request = function (e) {
            "string" == typeof e && (e = i.merge({ url: arguments[0] }, arguments[1])), ((e = i.merge(r, { method: "get" }, this.defaults, e)).method = e.method.toLowerCase());
            var t = [s, void 0],
                n = Promise.resolve(e);
            for (
                this.interceptors.request.forEach(function (e) {
                    t.unshift(e.fulfilled, e.rejected);
                }),
                    this.interceptors.response.forEach(function (e) {
                        t.push(e.fulfilled, e.rejected);
                    });
                t.length;

            )
                n = n.then(t.shift(), t.shift());
            return n;
        }),
            i.forEach(["delete", "get", "head", "options"], function (e) {
                a.prototype[e] = function (t, n) {
                    return this.request(i.merge(n || {}, { method: e, url: t }));
                };
            }),
            i.forEach(["post", "put", "patch"], function (e) {
                a.prototype[e] = function (t, n, r) {
                    return this.request(i.merge(r || {}, { method: e, url: t, data: n }));
                };
            }),
            (e.exports = a);
    },
    function (e, t, n) {
        "use strict";
        var r = n(3);
        e.exports = function (e, t) {
            r.forEach(e, function (n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && ((e[t] = n), delete e[r]);
            });
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(15);
        e.exports = function (e, t, n) {
            var i = n.config.validateStatus;
            n.status && i && !i(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e, t, n, r, i) {
            return (e.config = t), n && (e.code = n), (e.request = r), (e.response = i), e;
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(3);
        function i(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        e.exports = function (e, t, n) {
            if (!t) return e;
            var o;
            if (n) o = n(t);
            else if (r.isURLSearchParams(t)) o = t.toString();
            else {
                var s = [];
                r.forEach(t, function (e, t) {
                    null != e &&
                    (r.isArray(e) ? (t += "[]") : (e = [e]),
                        r.forEach(e, function (e) {
                            r.isDate(e) ? (e = e.toISOString()) : r.isObject(e) && (e = JSON.stringify(e)), s.push(i(t) + "=" + i(e));
                        }));
                }),
                    (o = s.join("&"));
            }
            return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e;
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(3),
            i = [
                "age",
                "authorization",
                "content-length",
                "content-type",
                "etag",
                "expires",
                "from",
                "host",
                "if-modified-since",
                "if-unmodified-since",
                "last-modified",
                "location",
                "max-forwards",
                "proxy-authorization",
                "referer",
                "retry-after",
                "user-agent",
            ];
        e.exports = function (e) {
            var t,
                n,
                o,
                s = {};
            return e
                ? (r.forEach(e.split("\n"), function (e) {
                    if (((o = e.indexOf(":")), (t = r.trim(e.substr(0, o)).toLowerCase()), (n = r.trim(e.substr(o + 1))), t)) {
                        if (s[t] && i.indexOf(t) >= 0) return;
                        s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n;
                    }
                }),
                    s)
                : s;
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(3);
        e.exports = r.isStandardBrowserEnv()
            ? (function () {
                var e,
                    t = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");
                function i(e) {
                    var r = e;
                    return (
                        t && (n.setAttribute("href", r), (r = n.href)),
                            n.setAttribute("href", r),
                            {
                                href: n.href,
                                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                                host: n.host,
                                search: n.search ? n.search.replace(/^\?/, "") : "",
                                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                                hostname: n.hostname,
                                port: n.port,
                                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
                            }
                    );
                }
                return (
                    (e = i(window.location.href)),
                        function (t) {
                            var n = r.isString(t) ? i(t) : t;
                            return n.protocol === e.protocol && n.host === e.host;
                        }
                );
            })()
            : function () {
                return !0;
            };
    },
    function (e, t, n) {
        "use strict";
        var r = n(3);
        e.exports = r.isStandardBrowserEnv()
            ? {
                write: function (e, t, n, i, o, s) {
                    var a = [];
                    a.push(e + "=" + encodeURIComponent(t)),
                    r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
                    r.isString(i) && a.push("path=" + i),
                    r.isString(o) && a.push("domain=" + o),
                    !0 === s && a.push("secure"),
                        (document.cookie = a.join("; "));
                },
                read: function (e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null;
                },
                remove: function (e) {
                    this.write(e, "", Date.now() - 864e5);
                },
            }
            : {
                write: function () {},
                read: function () {
                    return null;
                },
                remove: function () {},
            };
    },
    function (e, t, n) {
        "use strict";
        var r = n(3);
        function i() {
            this.handlers = [];
        }
        (i.prototype.use = function (e, t) {
            return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
        }),
            (i.prototype.eject = function (e) {
                this.handlers[e] && (this.handlers[e] = null);
            }),
            (i.prototype.forEach = function (e) {
                r.forEach(this.handlers, function (t) {
                    null !== t && e(t);
                });
            }),
            (e.exports = i);
    },
    function (e, t, n) {
        "use strict";
        var r = n(3),
            i = n(33),
            o = n(16),
            s = n(9),
            a = n(34),
            c = n(35);
        function u(e) {
            e.cancelToken && e.cancelToken.throwIfRequested();
        }
        e.exports = function (e) {
            return (
                u(e),
                e.baseURL && !a(e.url) && (e.url = c(e.baseURL, e.url)),
                    (e.headers = e.headers || {}),
                    (e.data = i(e.data, e.headers, e.transformRequest)),
                    (e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {})),
                    r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
                        delete e.headers[t];
                    }),
                    (e.adapter || s.adapter)(e).then(
                        function (t) {
                            return u(e), (t.data = i(t.data, t.headers, e.transformResponse)), t;
                        },
                        function (t) {
                            return o(t) || (u(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
                        }
                    )
            );
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(3);
        e.exports = function (e, t, n) {
            return (
                r.forEach(n, function (n) {
                    e = n(e, t);
                }),
                    e
            );
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(17);
        function i(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function (e) {
                t = e;
            });
            var n = this;
            e(function (e) {
                n.reason || ((n.reason = new r(e)), t(n.reason));
            });
        }
        (i.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason;
        }),
            (i.source = function () {
                var e;
                return {
                    token: new i(function (t) {
                        e = t;
                    }),
                    cancel: e,
                };
            }),
            (e.exports = i);
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return function (t) {
                return e.apply(null, t);
            };
        };
    },
    function (e) {
        e.exports = JSON.parse(
            '{"prod":{"HOST":"static.kost.tv","SETTINGS_ENDPOINT":"https://v.kost.tv/r/"},"stage":{"HOST":"stage.static.kost.tv","SETTINGS_ENDPOINT":"https://stage.kost.tv/r/"},"sentry":{"sentryDsn":"https://1f831a1bd92f4337bb29f20f0f3b21da@sentry.kost.tv/5","filterOptions":{"maxBudgetMinute":3,"maxBudgetHour":10}}}'
        );
    },
    function (e, t) {
        e.exports = function (e) {
            if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []),
                    Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return t.l;
                        },
                    }),
                    Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function () {
                            return t.i;
                        },
                    }),
                    Object.defineProperty(t, "exports", { enumerable: !0 }),
                    (t.webpackPolyfill = 1);
            }
            return t;
        };
    },
    function (e) {
        e.exports = JSON.parse(
            '{"name":"manjusa","version":"0.4.48","description":"vertical vpaid-wrapper","main":"index.js","author":"vldfokin","license":"UNLICENSED","scripts":{"dev":"webpack-dev-server --mode development --open --config webpack.dev.js --env=dev","dev:embed":"webpack-dev-server --mode development --open --config webpack.dev.js --env.embed","build":"webpack --mode production --config webpack.prod.js --env=prod","build-stage":"webpack --mode production --config webpack.prod.js --env=stage","deploy":"scp -rp ./dist/* vertel@blaine.kost.tv:~/static.kost.tv/public_html/","deploy-stage":"scp -rp ./dist/* vertel@stage.kost.tv:~/stage.static.kost.tv/public_html/","deploy-sdn":"scp -rp ./dist/* kosttv@origin.sdn.kstdn.tech:~/static.kost.tv/","production":"npm ci && npm run build && npm run deploy","stage":"npm ci && npm run build-stage && npm run deploy-stage","sdn":"npm ci && npm run build && npm run deploy-sdn","test":"jest test"},"devDependencies":{"@babel/core":"^7.3.4","@babel/plugin-transform-regenerator":"^7.3.4","@babel/polyfill":"^7.2.5","@babel/preset-env":"^7.3.4","@sentry/browser":"^5.6.3","axios":"^0.18.0","babel-loader":"^8.0.5","clean-webpack-plugin":"^2.0.1","create-file-webpack":"^1.0.2","eslint":"^5.15.3","eslint-config-standard":"^12.0.0","eslint-friendly-formatter":"^4.0.1","eslint-loader":"^2.1.2","eslint-plugin-import":"^2.16.0","eslint-plugin-jest":"^22.17.0","eslint-plugin-node":"^8.0.1","eslint-plugin-promise":"^4.0.1","eslint-plugin-standard":"^4.0.0","html-loader":"^0.5.5","html-webpack-plugin":"^3.2.0","intersection-observer-polyfill":"^0.1.0","jest":"^24.9.0","raw-loader":"^2.0.0","webpack":"^4.29.6","webpack-cli":"^3.3.0","webpack-dev-server":"^3.11.0","webpack-merge":"^4.2.1","xml-webpack-plugin":"^1.0.0"},"browserslist":{"production":["> 0.5% in RU","last 2 versions","Firefox ESR","not dead"],"development":["last 2 versions"]},"jest":{"moduleFileExtensions":["js","html"],"transform":{"^.+\\\\.js$":"babel-jest","^.+\\\\.html$":"<rootDir>/src/utils/htmlLoader.js"}}}'
        );
    },
    function (e, t, n) {
        "use strict";
        n.r(t);
        var r = {};
        n.r(r),
            n.d(r, "FunctionToString", function () {
                return d;
            }),
            n.d(r, "InboundFilters", function () {
                return S;
            });
        var i = n(10),
            o = n.n(i),
            s = { handshakeVersion: () => "2.0", getAdLinear: () => !0 };
        let a = {};
        ["getAdRemainingTime", "getAdDuration", "resizeAd", "pauseAd", "resumeAd", "expandAd", "getAdExpanded", "getAdSkippableState", "collapseAd", "skipAd", "getAdWidth", "getAdHeight", "getAdCompanions", "getAdIcons"].forEach((e) => {
            a[e] = () => {};
        });
        var c,
            u = a,
            l = {
                subscribe(e, t, n) {
                    this._playerEvents[t] = e.bind(n);
                },
                unsubscribe(e) {
                    this._playerEvents[e] = null;
                },
            },
            p =
                '<!DOCTYPE html>\n<html lang="ru">\n<head>\n  <meta charset="utf-8"/>\n  <title></title>\n  <script\n    type="text/javascript"\n    src="//imasdk.googleapis.com/js/sdkloader/ima3.js"\n  ></script>\n  <script src="https://static.kost.tv/player/playerjs.js"></script>\n  <style>\n    html,\n    body {\n      height: 100%;\n      margin: 0;\n    }\n\n    body {\n      overflow: hidden;\n    }\n\n    #player {\n      height: 100%;\n    }\n  </style>\n</head>\n<body>\n<div id="player"></div>\n\n<script>\n  var origin = location.origin || "";\n  var ancestorOrigins = location.ancestorOrigins || [];\n  var ancestorOriginsArray = [];\n  if (ancestorOrigins.length) {\n    origin = ancestorOrigins[ancestorOrigins.length - 1];\n    for (var i = 0; i < ancestorOrigins.length; i++) {\n      ancestorOriginsArray.push(ancestorOrigins[i]);\n    }\n  }\n\n  ancestorOriginsArray.unshift(location.origin);\n\n  var player = new Playerjs({\n    id: "player",\n    file: "https://cdn.kost.tv/kintavr/blank.mp4",\n    preroll: "js:getPreroll",\n    autoplay: 0,\n    volume: 0\n  });\n\n  var isPlayerReady = false;\n  var shouldStartAfterInit = false;\n\n  var target = parent;\n  var config = {};\n\n  var sentAdStarted = false;\n  var adImp = false;\n  var adStarted = false;\n\n  var prerollsRequested = 0;\n  var completes = 0;\n  var attempts = 0;\n  var views = 0;\n\n  var sentLoaded = false;\n  var sentReady = false;\n\n  var vastArray = [];\n\n  var visibility = null;\n\n  window.addEventListener("message", function (e) {\n    var event = e.data;\n    console.log(event);\n    if (event.target === "_ve_iframe") {\n      switch (event.event) {\n        case "config":\n          if (!sentReady) {\n            sentReady = true;\n            config = event.info;\n            sendMessage("gotConfig");\n          }\n          break;\n        case "target":\n          if (!sentLoaded) {\n            sentLoaded = true;\n            target = e.source;\n            sendMessage("load");\n          }\n          break;\n        case "start":\n          if (isPlayerReady) {\n            player.api("play");\n          } else {\n            shouldStartAfterInit = true;\n          }\n          break;\n        case "changeVolume":\n          player.api(\'volume\', event.info); // For change player volume through api\n          break;\n      }\n    }\n  });\n\n  function PlayerjsEvents (event, type, value) {\n    switch (event) {\n      case "init":\n        isPlayerReady = true;\n        if (shouldStartAfterInit) {\n          player.api("play");\n        }\n        break;\n      case "play":\n        console.log(\'Reached cont\');\n        sendMessage("_ve_sequence_end");\n        break;\n      case "end":\n        break;\n      case "vast_load":\n        adImp = false;\n        break;\n      case "vast_start":\n        if (!sentAdStarted) {\n          sendMessage("_ve_sequence_start");\n          sentAdStarted = true;\n        }\n        sendMessage(\'_ve_ad_start\')\n      case "vast_Impression":\n        if (!adImp) {\n          adStarted = true\n          views++\n          sendMessage("_ve_ad_imp", views);\n          adImp = true;\n        }\n        break;\n      case "vast_click":\n        sendMessage("click");\n        break;\n      case "vast_complete":\n        if (adImp) {\n          completes++;\n          sendMessage("complete", completes);\n        }\n        break;\n      case \'visibility\':\n        if (type === \'player\') {\n          visibility = value\n        }\n        break;\n      case \'vast_volume\':\n        var playerValue = JSON.parse(value);\n        var volume = playerValue.volume || 0;\n        sendMessage("_ve_ad_volume", volume);\n    }\n  }\n\n  function getPreroll () {\n    console.log(\'Preroll lookup\');\n    var firstPack = config.vastPacks[0];\n\n    if (!firstPack) {\n      console.log("no pack for current turn");\n      sendMessage("_ve_sequence_end");\n      return "";\n    }\n\n    if (!vastArray.length) {\n      vastArray = firstPack;\n    }\n\n    if (adStarted) {\n      adStarted = false;\n      var nextPack = config.vastPacks[views];\n\n      if (nextPack) {\n        vastArray = vastArray.concat(nextPack)\n      }\n    }\n\n    if (prerollsRequested >= vastArray.length) {\n      prerollsRequested = 0;\n      attempts++\n    }\n\n    prerollsRequested++;\n\n    console.log("views:", views);\n    console.log("attempts:", attempts);\n    console.log("prerollsRequested:", prerollsRequested);\n\n    if (views >= config.maxViews) {\n      console.log("reached max views");\n      sendMessage("_ve_sequence_end");\n      return "";\n    }\n\n    if (attempts >= config.maxAttempts) {\n      console.log("all attempts are used");\n      sendMessage("_ve_sequence_end");\n      return "";\n    }\n\n    var currentPreroll = vastArray[prerollsRequested - 1];\n    console.log("currentPreroll:", currentPreroll);\n    if (currentPreroll) {\n      currentPreroll = updateUrlParameter(\n        currentPreroll,\n        "dc",\n        btoa(JSON.stringify(ancestorOriginsArray))\n      );\n      currentPreroll = updateUrlParameter(currentPreroll, "dl", origin);\n      currentPreroll = addSizeParams(currentPreroll);\n      currentPreroll = addVisibilityParams(currentPreroll);\n\n      console.log(\'Found PR:\' + currentPreroll || "");\n      return currentPreroll || "";\n    }\n    console.log(\'Reached end\');\n    sendMessage("_ve_sequence_end");\n    return "";\n  }\n\n  function sendMessage (event, info) {\n    console.log("sending message to parent");\n    target.postMessage(\n      {\n        target: "_ve_vpaid",\n        event: event,\n        info: info\n      },\n      "*"\n    );\n  }\n\n  function updateUrlParameter (uri, key, value) {\n    value = encodeURIComponent(value);\n    var i = uri.indexOf("#");\n    var hash = i === -1 ? "" : uri.substr(i);\n    uri = i === -1 ? uri : uri.substr(0, i);\n\n    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");\n    var separator = uri.indexOf("?") !== -1 ? "&" : "?";\n    if (uri.match(re)) {\n      uri = uri.replace(re, "$1" + key + "=" + value + "$2");\n    } else {\n      uri = uri + separator + key + "=" + value;\n    }\n    return uri + hash;\n  }\n\n  function getCurrentSize () {\n    var playerElement = document.getElementById(\'player\');\n\n    if (playerElement) {\n      var currentWidth = playerElement.clientWidth || "";\n      var currentHeight = playerElement.clientHeight || "";\n\n      return { width: currentWidth, height: currentHeight };\n    }\n    return null;\n  }\n\n  function addSizeParams (url) {\n    if (url) {\n      var currentSize = getCurrentSize();\n\n      if (currentSize) {\n        var updatedUrl = updateUrlParameter(url, "width", currentSize.width);\n        updatedUrl = updateUrlParameter(updatedUrl, "height", currentSize.height);\n\n        return updatedUrl;\n      }\n    }\n    return url\n  }\n\n  function addVisibilityParams (url) {\n    if (visibility !== null) {\n      return updateUrlParameter(url, "vi", visibility);\n    }\n    return url;\n  }\n\n  // initSentry(\'Player.html\')\n  // function initSentry (tag) {\n  //   Sentry.init({\n  //     dsn: "https://1f831a1bd92f4337bb29f20f0f3b21da@sentry.kost.tv/5",\n  //     environment: JSON.stringify("player"),\n  //     whitelistUrls: [/static\\/player/],\n  //   })\n  //\n  //   Sentry.configureScope((scope) => {\n  //     scope.setTag(\'project-type\', tag)\n  //   })\n  // }\n</script>\n\n\x3c!-- pixels --\x3e\n<img alt="" src="https://redirect.frontend.weborama.fr/rd?url=https%3A%2F%2Fpixel.kost.tv%2Fweborama%2F%3Fweborama_id%3D%7BWEBO_CID%7D" />\n\n</body>\n</html>\n',
            d = (function () {
                function e() {
                    this.name = e.id;
                }
                return (
                    (e.prototype.setupOnce = function () {
                        (c = Function.prototype.toString),
                            (Function.prototype.toString = function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                var n = this.__sentry__ ? this.__sentry_original__ : this;
                                return c.apply(n, e);
                            });
                    }),
                        (e.id = "FunctionToString"),
                        e
                );
            })(),
            f = n(0),
            h = n(8),
            _ = n(46),
            m = n(11),
            v = n(2),
            g = n(4);
        function y(e, t) {
            return void 0 === t && (t = 0), "string" != typeof e || 0 === t ? e : e.length <= t ? e : e.substr(0, t) + "...";
        }
        function b(e, t) {
            if (!Array.isArray(e)) return "";
            for (var n = [], r = 0; r < e.length; r++) {
                var i = e[r];
                try {
                    n.push(String(i));
                } catch (e) {
                    n.push("[value cannot be serialized]");
                }
            }
            return n.join(t);
        }
        function E(e, t) {
            if ((void 0 === t && (t = 40), !e.length)) return "[object has no keys]";
            if (e[0].length >= t) return y(e[0], t);
            for (var n = e.length; n > 0; n--) {
                var r = e.slice(0, n).join(", ");
                if (!(r.length > t)) return n === e.length ? r : y(r, t);
            }
            return "";
        }
        function w(e, t) {
            return Object(g.g)(t) ? t.test(e) : "string" == typeof t && e.includes(t);
        }
        var x = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
            S = (function () {
                function e(t) {
                    void 0 === t && (t = {}), (this._options = t), (this.name = e.id);
                }
                return (
                    (e.prototype.setupOnce = function () {
                        Object(h.b)(function (t) {
                            var n = Object(_.a)();
                            if (!n) return t;
                            var r = n.getIntegration(e);
                            if (r) {
                                var i = n.getClient(),
                                    o = i ? i.getOptions() : {},
                                    s = r._mergeOptions(o);
                                if (r._shouldDropEvent(t, s)) return null;
                            }
                            return t;
                        });
                    }),
                        (e.prototype._shouldDropEvent = function (e, t) {
                            return this._isSentryError(e, t)
                                ? (m.a.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(v.d)(e)), !0)
                                : this._isIgnoredError(e, t)
                                    ? (m.a.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(v.d)(e)), !0)
                                    : this._isBlacklistedUrl(e, t)
                                        ? (m.a.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + Object(v.d)(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0)
                                        : !this._isWhitelistedUrl(e, t) && (m.a.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + Object(v.d)(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0);
                        }),
                        (e.prototype._isSentryError = function (e, t) {
                            if ((void 0 === t && (t = {}), !t.ignoreInternal)) return !1;
                            try {
                                return "SentryError" === e.exception.values[0].type;
                            } catch (e) {
                                return !1;
                            }
                        }),
                        (e.prototype._isIgnoredError = function (e, t) {
                            return (
                                void 0 === t && (t = {}),
                                !(!t.ignoreErrors || !t.ignoreErrors.length) &&
                                this._getPossibleEventMessages(e).some(function (e) {
                                    return t.ignoreErrors.some(function (t) {
                                        return w(e, t);
                                    });
                                })
                            );
                        }),
                        (e.prototype._isBlacklistedUrl = function (e, t) {
                            if ((void 0 === t && (t = {}), !t.blacklistUrls || !t.blacklistUrls.length)) return !1;
                            var n = this._getEventFilterUrl(e);
                            return (
                                !!n &&
                                t.blacklistUrls.some(function (e) {
                                    return w(n, e);
                                })
                            );
                        }),
                        (e.prototype._isWhitelistedUrl = function (e, t) {
                            if ((void 0 === t && (t = {}), !t.whitelistUrls || !t.whitelistUrls.length)) return !0;
                            var n = this._getEventFilterUrl(e);
                            return (
                                !n ||
                                t.whitelistUrls.some(function (e) {
                                    return w(n, e);
                                })
                            );
                        }),
                        (e.prototype._mergeOptions = function (e) {
                            return (
                                void 0 === e && (e = {}),
                                    {
                                        blacklistUrls: f.d(this._options.blacklistUrls || [], e.blacklistUrls || []),
                                        ignoreErrors: f.d(this._options.ignoreErrors || [], e.ignoreErrors || [], x),
                                        ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal,
                                        whitelistUrls: f.d(this._options.whitelistUrls || [], e.whitelistUrls || []),
                                    }
                            );
                        }),
                        (e.prototype._getPossibleEventMessages = function (e) {
                            if (e.message) return [e.message];
                            if (e.exception)
                                try {
                                    var t = e.exception.values[0],
                                        n = t.type,
                                        r = t.value;
                                    return ["" + r, n + ": " + r];
                                } catch (t) {
                                    return m.a.error("Cannot extract message for event " + Object(v.d)(e)), [];
                                }
                            return [];
                        }),
                        (e.prototype._getEventFilterUrl = function (e) {
                            try {
                                if (e.stacktrace) {
                                    var t = e.stacktrace.frames;
                                    return t[t.length - 1].filename;
                                }
                                if (e.exception) {
                                    var n = e.exception.values[0].stacktrace.frames;
                                    return n[n.length - 1].filename;
                                }
                                return null;
                            } catch (t) {
                                return m.a.error("Cannot extract url for event " + Object(v.d)(e)), null;
                            }
                        }),
                        (e.id = "InboundFilters"),
                        e
                );
            })();
        var O = n(5),
            j =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array
                    ? function (e, t) {
                        return (e.__proto__ = t), e;
                    }
                    : function (e, t) {
                        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
                        return e;
                    });
        var k = (function (e) {
                function t(t) {
                    var n = this.constructor,
                        r = e.call(this, t) || this;
                    return (r.message = t), (r.name = n.prototype.constructor.name), j(r, n.prototype), r;
                }
                return f.b(t, e), t;
            })(Error),
            A = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,
            T = (function () {
                function e(e) {
                    "string" == typeof e ? this._fromString(e) : this._fromComponents(e), this._validate();
                }
                return (
                    (e.prototype.toString = function (e) {
                        void 0 === e && (e = !1);
                        var t = this,
                            n = t.host,
                            r = t.path,
                            i = t.pass,
                            o = t.port,
                            s = t.projectId;
                        return t.protocol + "://" + t.user + (e && i ? ":" + i : "") + "@" + n + (o ? ":" + o : "") + "/" + (r ? r + "/" : r) + s;
                    }),
                        (e.prototype._fromString = function (e) {
                            var t = A.exec(e);
                            if (!t) throw new k("Invalid Dsn");
                            var n = f.c(t.slice(1), 6),
                                r = n[0],
                                i = n[1],
                                o = n[2],
                                s = void 0 === o ? "" : o,
                                a = n[3],
                                c = n[4],
                                u = void 0 === c ? "" : c,
                                l = "",
                                p = n[5],
                                d = p.split("/");
                            d.length > 1 && ((l = d.slice(0, -1).join("/")), (p = d.pop())), Object.assign(this, { host: a, pass: s, path: l, projectId: p, port: u, protocol: r, user: i });
                        }),
                        (e.prototype._fromComponents = function (e) {
                            (this.protocol = e.protocol), (this.user = e.user), (this.pass = e.pass || ""), (this.host = e.host), (this.port = e.port || ""), (this.path = e.path || ""), (this.projectId = e.projectId);
                        }),
                        (e.prototype._validate = function () {
                            var e = this;
                            if (
                                (["protocol", "user", "host", "projectId"].forEach(function (t) {
                                    if (!e[t]) throw new k("Invalid Dsn");
                                }),
                                "http" !== this.protocol && "https" !== this.protocol)
                            )
                                throw new k("Invalid Dsn");
                            if (this.port && Number.isNaN(parseInt(this.port, 10))) throw new k("Invalid Dsn");
                        }),
                        e
                );
            })(),
            P = (function () {
                function e(e) {
                    (this.dsn = e), (this._dsnObject = new T(e));
                }
                return (
                    (e.prototype.getDsn = function () {
                        return this._dsnObject;
                    }),
                        (e.prototype.getStoreEndpoint = function () {
                            return "" + this._getBaseUrl() + this.getStoreEndpointPath();
                        }),
                        (e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
                            var e = { sentry_key: this._dsnObject.user, sentry_version: "7" };
                            return this.getStoreEndpoint() + "?" + Object(O.d)(e);
                        }),
                        (e.prototype._getBaseUrl = function () {
                            var e = this._dsnObject,
                                t = e.protocol ? e.protocol + ":" : "",
                                n = e.port ? ":" + e.port : "";
                            return t + "//" + e.host + n;
                        }),
                        (e.prototype.getStoreEndpointPath = function () {
                            var e = this._dsnObject;
                            return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/";
                        }),
                        (e.prototype.getRequestHeaders = function (e, t) {
                            var n = this._dsnObject,
                                r = ["Sentry sentry_version=7"];
                            return (
                                r.push("sentry_timestamp=" + new Date().getTime()),
                                    r.push("sentry_client=" + e + "/" + t),
                                    r.push("sentry_key=" + n.user),
                                n.pass && r.push("sentry_secret=" + n.pass),
                                    { "Content-Type": "application/json", "X-Sentry-Auth": r.join(", ") }
                            );
                        }),
                        (e.prototype.getReportDialogEndpoint = function (e) {
                            void 0 === e && (e = {});
                            var t = this._dsnObject,
                                n = this._getBaseUrl() + (t.path ? "/" + t.path : "") + "/api/embed/error-page/",
                                r = [];
                            for (var i in (r.push("dsn=" + t.toString()), e))
                                if ("user" === i) {
                                    if (!e.user) continue;
                                    e.user.name && r.push("name=" + encodeURIComponent(e.user.name)), e.user.email && r.push("email=" + encodeURIComponent(e.user.email));
                                } else r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
                            return r.length ? n + "?" + r.join("&") : n;
                        }),
                        e
                );
            })(),
            I = n(42),
            C = [];
        function R(e) {
            var t = {};
            return (
                (function (e) {
                    var t = (e.defaultIntegrations && f.d(e.defaultIntegrations)) || [],
                        n = e.integrations,
                        r = [];
                    if (Array.isArray(n)) {
                        var i = n.map(function (e) {
                                return e.name;
                            }),
                            o = [];
                        t.forEach(function (e) {
                            -1 === i.indexOf(e.name) && -1 === o.indexOf(e.name) && (r.push(e), o.push(e.name));
                        }),
                            n.forEach(function (e) {
                                -1 === o.indexOf(e.name) && (r.push(e), o.push(e.name));
                            });
                    } else {
                        if ("function" != typeof n) return f.d(t);
                        (r = n(t)), (r = Array.isArray(r) ? r : [r]);
                    }
                    return r;
                })(e).forEach(function (e) {
                    (t[e.name] = e),
                        (function (e) {
                            -1 === C.indexOf(e.name) && (e.setupOnce(h.b, _.a), C.push(e.name), m.a.log("Integration installed: " + e.name));
                        })(e);
                }),
                    t
            );
        }
        var N,
            L = (function () {
                function e(e, t) {
                    (this._integrations = {}), (this._processing = !1), (this._backend = new e(t)), (this._options = t), t.dsn && (this._dsn = new T(t.dsn)), this._isEnabled() && (this._integrations = R(this._options));
                }
                return (
                    (e.prototype.captureException = function (e, t, n) {
                        var r = this,
                            i = t && t.event_id;
                        return (
                            (this._processing = !0),
                                this._getBackend()
                                    .eventFromException(e, t)
                                    .then(function (e) {
                                        return r._processEvent(e, t, n);
                                    })
                                    .then(function (e) {
                                        (i = e && e.event_id), (r._processing = !1);
                                    })
                                    .catch(function (e) {
                                        m.a.error(e), (r._processing = !1);
                                    }),
                                i
                        );
                    }),
                        (e.prototype.captureMessage = function (e, t, n, r) {
                            var i = this,
                                o = n && n.event_id;
                            return (
                                (this._processing = !0),
                                    (Object(g.f)(e) ? this._getBackend().eventFromMessage("" + e, t, n) : this._getBackend().eventFromException(e, n))
                                        .then(function (e) {
                                            return i._processEvent(e, n, r);
                                        })
                                        .then(function (e) {
                                            (o = e && e.event_id), (i._processing = !1);
                                        })
                                        .catch(function (e) {
                                            m.a.error(e), (i._processing = !1);
                                        }),
                                    o
                            );
                        }),
                        (e.prototype.captureEvent = function (e, t, n) {
                            var r = this,
                                i = t && t.event_id;
                            return (
                                (this._processing = !0),
                                    this._processEvent(e, t, n)
                                        .then(function (e) {
                                            (i = e && e.event_id), (r._processing = !1);
                                        })
                                        .catch(function (e) {
                                            m.a.error(e), (r._processing = !1);
                                        }),
                                    i
                            );
                        }),
                        (e.prototype.getDsn = function () {
                            return this._dsn;
                        }),
                        (e.prototype.getOptions = function () {
                            return this._options;
                        }),
                        (e.prototype.flush = function (e) {
                            var t = this;
                            return this._isClientProcessing(e).then(function (n) {
                                return (
                                    clearInterval(n.interval),
                                        t
                                            ._getBackend()
                                            .getTransport()
                                            .close(e)
                                            .then(function (e) {
                                                return n.ready && e;
                                            })
                                );
                            });
                        }),
                        (e.prototype.close = function (e) {
                            var t = this;
                            return this.flush(e).then(function (e) {
                                return (t.getOptions().enabled = !1), e;
                            });
                        }),
                        (e.prototype.getIntegrations = function () {
                            return this._integrations || {};
                        }),
                        (e.prototype.getIntegration = function (e) {
                            try {
                                return this._integrations[e.id] || null;
                            } catch (t) {
                                return m.a.warn("Cannot retrieve integration " + e.id + " from the current Client"), null;
                            }
                        }),
                        (e.prototype._isClientProcessing = function (e) {
                            var t = this;
                            return new Promise(function (n) {
                                var r = 0,
                                    i = 0;
                                clearInterval(i),
                                    (i = setInterval(function () {
                                        t._processing ? ((r += 1), e && r >= e && n({ interval: i, ready: !1 })) : n({ interval: i, ready: !0 });
                                    }, 1));
                            });
                        }),
                        (e.prototype._getBackend = function () {
                            return this._backend;
                        }),
                        (e.prototype._isEnabled = function () {
                            return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
                        }),
                        (e.prototype._prepareEvent = function (e, t, n) {
                            var r = this.getOptions(),
                                i = r.environment,
                                o = r.release,
                                s = r.dist,
                                a = r.maxValueLength,
                                c = void 0 === a ? 250 : a,
                                u = f.a({}, e);
                            void 0 === u.environment && void 0 !== i && (u.environment = i), void 0 === u.release && void 0 !== o && (u.release = o), void 0 === u.dist && void 0 !== s && (u.dist = s), u.message && (u.message = y(u.message, c));
                            var l = u.exception && u.exception.values && u.exception.values[0];
                            l && l.value && (l.value = y(l.value, c));
                            var p = u.request;
                            p && p.url && (p.url = y(p.url, c)), void 0 === u.event_id && (u.event_id = Object(v.g)()), this._addIntegrations(u.sdk);
                            var d = I.a.resolve(u);
                            return t && (d = t.applyToEvent(u, n)), d;
                        }),
                        (e.prototype._addIntegrations = function (e) {
                            var t = Object.keys(this._integrations);
                            e && t.length > 0 && (e.integrations = t);
                        }),
                        (e.prototype._processEvent = function (e, t, n) {
                            var r = this,
                                i = this.getOptions(),
                                o = i.beforeSend,
                                s = i.sampleRate;
                            return this._isEnabled()
                                ? "number" == typeof s && Math.random() > s
                                    ? I.a.reject("This event has been sampled, will not send event.")
                                    : new I.a(function (i, s) {
                                        r._prepareEvent(e, n, t).then(function (e) {
                                            if (null !== e) {
                                                var n = e;
                                                try {
                                                    if ((t && t.data && !0 === t.data.__sentry__) || !o) return r._getBackend().sendEvent(n), void i(n);
                                                    var a = o(e, t);
                                                    if (void 0 === a) m.a.error("`beforeSend` method has to return `null` or a valid event.");
                                                    else if (Object(g.j)(a)) r._handleAsyncBeforeSend(a, i, s);
                                                    else {
                                                        if (null === (n = a)) return m.a.log("`beforeSend` returned `null`, will not send event."), void i(null);
                                                        r._getBackend().sendEvent(n), i(n);
                                                    }
                                                } catch (e) {
                                                    r.captureException(e, { data: { __sentry__: !0 }, originalException: e }), s("`beforeSend` throw an error, will not send event.");
                                                }
                                            } else s("An event processor returned null, will not send event.");
                                        });
                                    })
                                : I.a.reject("SDK not enabled, will not send event.");
                        }),
                        (e.prototype._handleAsyncBeforeSend = function (e, t, n) {
                            var r = this;
                            e.then(function (e) {
                                null !== e ? (r._getBackend().sendEvent(e), t(e)) : n("`beforeSend` returned `null`, will not send event.");
                            }).catch(function (e) {
                                n("beforeSend rejected with " + e);
                            });
                        }),
                        e
                );
            })();
        !(function (e) {
            (e.Unknown = "unknown"), (e.Skipped = "skipped"), (e.Success = "success"), (e.RateLimit = "rate_limit"), (e.Invalid = "invalid"), (e.Failed = "failed");
        })(N || (N = {})),
            (function (e) {
                e.fromHttpCode = function (t) {
                    return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown;
                };
            })(N || (N = {}));
        var U,
            V = (function () {
                function e() {}
                return (
                    (e.prototype.sendEvent = function (e) {
                        return Promise.resolve({ reason: "NoopTransport: Event has been skipped because no Dsn is configured.", status: N.Skipped });
                    }),
                        (e.prototype.close = function (e) {
                            return Promise.resolve(!0);
                        }),
                        e
                );
            })(),
            F = (function () {
                function e(e) {
                    (this._options = e), this._options.dsn || m.a.warn("No DSN provided, backend will not do anything."), (this._transport = this._setupTransport());
                }
                return (
                    (e.prototype._setupTransport = function () {
                        return new V();
                    }),
                        (e.prototype.eventFromException = function (e, t) {
                            throw new k("Backend has to implement `eventFromException` method");
                        }),
                        (e.prototype.eventFromMessage = function (e, t, n) {
                            throw new k("Backend has to implement `eventFromMessage` method");
                        }),
                        (e.prototype.sendEvent = function (e) {
                            this._transport.sendEvent(e).catch(function (e) {
                                m.a.error("Error while sending event: " + e);
                            });
                        }),
                        (e.prototype.getTransport = function () {
                            return this._transport;
                        }),
                        e
                );
            })();
        function D() {
            if (!("fetch" in Object(v.e)())) return !1;
            try {
                return new Headers(), new Request(""), new Response(), !0;
            } catch (e) {
                return !1;
            }
        }
        function M() {
            if (!D()) return !1;
            try {
                return new Request("_", { referrerPolicy: "origin" }), !0;
            } catch (e) {
                return !1;
            }
        }
        !(function (e) {
            (e.Fatal = "fatal"), (e.Error = "error"), (e.Warning = "warning"), (e.Log = "log"), (e.Info = "info"), (e.Debug = "debug"), (e.Critical = "critical");
        })(U || (U = {})),
            (function (e) {
                e.fromString = function (t) {
                    switch (t) {
                        case "debug":
                            return e.Debug;
                        case "info":
                            return e.Info;
                        case "warn":
                        case "warning":
                            return e.Warning;
                        case "error":
                            return e.Error;
                        case "fatal":
                            return e.Fatal;
                        case "critical":
                            return e.Critical;
                        case "log":
                        default:
                            return e.Log;
                    }
                };
            })(U || (U = {}));
        /**
         * TraceKit - Cross brower stack traces
         *
         * This was originally forked from github.com/occ/TraceKit, but has since been
         * largely modified and is now maintained as part of Sentry JS SDK.
         *
         * NOTE: Last merge with upstream repository
         * Jul 11,2018 - #f03357c
         *
         * https://github.com/csnover/TraceKit
         * @license MIT
         * @namespace TraceKit
         */
        var B = Object(v.e)(),
            q = { _report: !1, _collectWindowErrors: !1, _computeStackTrace: !1, _linesOfContext: !1 },
            H = "?",
            W = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
        function J(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }
        function $() {
            return "undefined" == typeof document || null == document.location ? "" : document.location.href;
        }
        (q._report = (function () {
            var e,
                t,
                n = [],
                r = null,
                i = null;
            function o(e, t, r) {
                var i = null;
                if (!t || q._collectWindowErrors) {
                    for (var o in n)
                        if (J(n, o))
                            try {
                                n[o](e, t, r);
                            } catch (e) {
                                i = e;
                            }
                    if (i) throw i;
                }
            }
            function s(t, n, r, s, a) {
                var u = null;
                if (((a = Object(g.d)(a) ? a.error : a), (t = Object(g.d)(t) ? t.message : t), i)) q._computeStackTrace._augmentStackTraceWithInitialElement(i, n, r, t), c();
                else if (a && Object(g.c)(a)) ((u = q._computeStackTrace(a)).mechanism = "onerror"), o(u, !0, a);
                else {
                    var l,
                        p = { url: n, line: r, column: s },
                        d = t;
                    if ("[object String]" === {}.toString.call(t)) {
                        var h = t.match(W);
                        h && ((l = h[1]), (d = h[2]));
                    }
                    (p.func = H), (p.context = null), o((u = { name: l, message: d, mode: "onerror", mechanism: "onerror", stack: [f.a({}, p, { url: p.url || $() })] }), !0, null);
                }
                return !!e && e.apply(this, arguments);
            }
            function a(e) {
                var t = e;
                try {
                    t = e && "reason" in e ? e.reason : e;
                } catch (e) {}
                var n = q._computeStackTrace(t);
                (n.mechanism = "onunhandledrejection"), o(n, !0, t);
            }
            function c() {
                var e = i,
                    t = r;
                (i = null), (r = null), o(e, !1, t);
            }
            function u(e) {
                if (i) {
                    if (r === e) return;
                    c();
                }
                var t = q._computeStackTrace(e);
                throw (
                    ((i = t),
                        (r = e),
                        setTimeout(
                            function () {
                                r === e && c();
                            },
                            t.incomplete ? 2e3 : 0
                        ),
                        e)
                );
            }
            return (
                (u._subscribe = function (e) {
                    n.push(e);
                }),
                    (u._installGlobalHandler = function () {
                        !0 !== t && ((e = B.onerror), (B.onerror = s), (t = !0));
                    }),
                    (u._installGlobalUnhandledRejectionHandler = function () {
                        B.onunhandledrejection = a;
                    }),
                    u
            );
        })()),
            (q._computeStackTrace = (function () {
                function e(e) {
                    if (!e || !e.stack) return null;
                    for (
                        var t,
                            n,
                            r,
                            i = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[-a-z]+:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                            o = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
                            s = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                            a = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                            c = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                            u = e.stack.split("\n"),
                            l = [],
                            p = /^(.*) is undefined$/.exec(e.message),
                            d = 0,
                            f = u.length;
                        d < f;
                        ++d
                    ) {
                        if ((n = i.exec(u[d]))) {
                            var h = n[2] && 0 === n[2].indexOf("native");
                            n[2] && 0 === n[2].indexOf("eval") && (t = c.exec(n[2])) && ((n[2] = t[1]), (n[3] = t[2]), (n[4] = t[3])),
                                (r = { url: n[2], func: n[1] || H, args: h ? [n[2]] : [], line: n[3] ? +n[3] : null, column: n[4] ? +n[4] : null });
                        } else if ((n = s.exec(u[d]))) r = { url: n[2], func: n[1] || H, args: [], line: +n[3], column: n[4] ? +n[4] : null };
                        else {
                            if (!(n = o.exec(u[d]))) continue;
                            n[3] && n[3].indexOf(" > eval") > -1 && (t = a.exec(n[3]))
                                ? ((n[1] = n[1] || "eval"), (n[3] = t[1]), (n[4] = t[2]), (n[5] = ""))
                                : 0 !== d || n[5] || void 0 === e.columnNumber || (l[0].column = e.columnNumber + 1),
                                (r = { url: n[3], func: n[1] || H, args: n[2] ? n[2].split(",") : [], line: n[4] ? +n[4] : null, column: n[5] ? +n[5] : null });
                        }
                        !r.func && r.line && (r.func = H), (r.context = null), l.push(r);
                    }
                    return l.length ? (l[0] && l[0].line && !l[0].column && p && (l[0].column = null), { mode: "stack", name: e.name, message: e.message, stack: l }) : null;
                }
                function t(e, t, n, r) {
                    var i = { url: t, line: n };
                    if (i.url && i.line) {
                        if (((e.incomplete = !1), i.func || (i.func = H), i.context || (i.context = null), / '([^']+)' /.exec(r) && (i.column = null), e.stack.length > 0 && e.stack[0].url === i.url)) {
                            if (e.stack[0].line === i.line) return !1;
                            if (!e.stack[0].line && e.stack[0].func === i.func) return (e.stack[0].line = i.line), (e.stack[0].context = i.context), !1;
                        }
                        return e.stack.unshift(i), (e.partial = !0), !0;
                    }
                    return (e.incomplete = !0), !1;
                }
                function n(e, r) {
                    for (var i, o, s = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, a = [], c = {}, u = !1, l = n.caller; l && !u; l = l.caller)
                        if (l !== X && l !== q._report) {
                            if (((o = { url: null, func: H, args: [], line: null, column: null }), l.name ? (o.func = l.name) : (i = s.exec(l.toString())) && (o.func = i[1]), void 0 === o.func))
                                try {
                                    o.func = i.input.substring(0, i.input.indexOf("{"));
                                } catch (e) {}
                            c["" + l] ? (u = !0) : (c["" + l] = !0), a.push(o);
                        }
                    r && a.splice(0, r);
                    var p = { mode: "callers", name: e.name, message: e.message, stack: a };
                    return t(p, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), p;
                }
                function r(t, r) {
                    var o = null,
                        s = t && t.framesToPop;
                    r = null == r ? 0 : +r;
                    try {
                        if (
                            (o = (function (e) {
                                var t = e.stacktrace;
                                if (t) {
                                    for (
                                        var n,
                                            r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                                            i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,
                                            o = t.split("\n"),
                                            s = [],
                                            a = 0;
                                        a < o.length;
                                        a += 2
                                    ) {
                                        var c = null;
                                        (n = r.exec(o[a]))
                                            ? (c = { url: n[2], line: +n[1], column: null, func: n[3], args: [] })
                                            : (n = i.exec(o[a])) && (c = { url: n[6], line: +n[1], column: +n[2], func: n[3] || n[4], args: n[5] ? n[5].split(",") : [] }),
                                        c && (!c.func && c.line && (c.func = H), c.line && (c.context = null), c.context || (c.context = [o[a + 1]]), s.push(c));
                                    }
                                    return s.length ? { mode: "stacktrace", name: e.name, message: e.message, stack: s } : null;
                                }
                            })(t))
                        )
                            return i(o, s);
                    } catch (e) {}
                    try {
                        if ((o = e(t))) return i(o, s);
                    } catch (e) {}
                    try {
                        if (
                            (o = (function (e) {
                                var t = e.message.split("\n");
                                if (t.length < 4) return null;
                                var n,
                                    r = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                                    i = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                                    o = /^\s*Line (\d+) of function script\s*$/i,
                                    s = [],
                                    a = B && B.document && B.document.getElementsByTagName("script"),
                                    c = [];
                                for (var u in a) J(a, u) && !a[u].src && c.push(a[u]);
                                for (var l = 2; l < t.length; l += 2) {
                                    var p = null;
                                    if ((n = r.exec(t[l]))) p = { url: n[2], func: n[3], args: [], line: +n[1], column: null };
                                    else if ((n = i.exec(t[l]))) p = { url: n[3], func: n[4], args: [], line: +n[1], column: null };
                                    else if ((n = o.exec(t[l]))) {
                                        p = { url: $().replace(/#.*$/, ""), func: "", args: [], line: n[1], column: null };
                                    }
                                    p && (p.func || (p.func = H), (p.context = [t[l + 1]]), s.push(p));
                                }
                                return s.length ? { mode: "multiline", name: e.name, message: t[0], stack: s } : null;
                            })(t))
                        )
                            return i(o, s);
                    } catch (e) {}
                    try {
                        if ((o = n(t, r + 1))) return i(o, s);
                    } catch (e) {}
                    return { original: t, name: t && t.name, message: t && t.message, mode: "failed" };
                }
                function i(e, t) {
                    if (Number.isNaN(t)) return e;
                    try {
                        return f.a({}, e, { stack: e.stack.slice(t) });
                    } catch (t) {
                        return e;
                    }
                }
                return (r._augmentStackTraceWithInitialElement = t), (r._computeStackTraceFromStackProp = e), r;
            })()),
            (q._collectWindowErrors = !0),
            (q._linesOfContext = 11);
        var z = q._report._subscribe,
            Y = q._report._installGlobalHandler,
            G = q._report._installGlobalUnhandledRejectionHandler,
            X = q._computeStackTrace,
            Q = 50;
        function K(e) {
            var t = ee(e.stack),
                n = { type: e.name, value: e.message };
            return t && t.length && (n.stacktrace = { frames: t }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n;
        }
        function Z(e) {
            return { exception: { values: [K(e)] } };
        }
        function ee(e) {
            if (!e || !e.length) return [];
            var t = e,
                n = t[0].func || "",
                r = t[t.length - 1].func || "";
            return (
                (n.includes("captureMessage") || n.includes("captureException")) && (t = t.slice(1)),
                r.includes("sentryWrapped") && (t = t.slice(0, -1)),
                    t
                        .map(function (e) {
                            return { colno: e.column, filename: e.url || t[0].url, function: e.func || "?", in_app: !0, lineno: e.line };
                        })
                        .slice(0, Q)
                        .reverse()
            );
        }
        var te = (function () {
                function e(e) {
                    (this._limit = e), (this._buffer = []);
                }
                return (
                    (e.prototype.isReady = function () {
                        return void 0 === this._limit || this.length() < this._limit;
                    }),
                        (e.prototype.add = function (e) {
                            var t = this;
                            return this.isReady()
                                ? (-1 === this._buffer.indexOf(e) && this._buffer.push(e),
                                    e
                                        .then(function () {
                                            return t.remove(e);
                                        })
                                        .catch(function () {
                                            return t.remove(e).catch(function () {});
                                        }),
                                    e)
                                : Promise.reject(new k("Not adding Promise due to buffer limit reached."));
                        }),
                        (e.prototype.remove = function (e) {
                            return this._buffer.splice(this._buffer.indexOf(e), 1)[0];
                        }),
                        (e.prototype.length = function () {
                            return this._buffer.length;
                        }),
                        (e.prototype.drain = function (e) {
                            var t = this;
                            return new Promise(function (n) {
                                var r = setTimeout(function () {
                                    e && e > 0 && n(!1);
                                }, e);
                                Promise.all(t._buffer)
                                    .then(function () {
                                        clearTimeout(r), n(!0);
                                    })
                                    .catch(function () {
                                        n(!0);
                                    });
                            });
                        }),
                        e
                );
            })(),
            ne = (function () {
                function e(e) {
                    (this.options = e), (this._buffer = new te(30)), (this.url = new P(this.options.dsn).getStoreEndpointWithUrlEncodedAuth());
                }
                return (
                    (e.prototype.sendEvent = function (e) {
                        throw new k("Transport Class has to implement `sendEvent` method");
                    }),
                        (e.prototype.close = function (e) {
                            return this._buffer.drain(e);
                        }),
                        e
                );
            })(),
            re = Object(v.e)(),
            ie = (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return (
                    f.b(t, e),
                        (t.prototype.sendEvent = function (e) {
                            var t = { body: JSON.stringify(e), method: "POST", referrerPolicy: M() ? "origin" : "" };
                            return this._buffer.add(
                                re.fetch(this.url, t).then(function (e) {
                                    return { status: N.fromHttpCode(e.status) };
                                })
                            );
                        }),
                        t
                );
            })(ne),
            oe = (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return (
                    f.b(t, e),
                        (t.prototype.sendEvent = function (e) {
                            var t = this;
                            return this._buffer.add(
                                new Promise(function (n, r) {
                                    var i = new XMLHttpRequest();
                                    (i.onreadystatechange = function () {
                                        4 === i.readyState && (200 === i.status && n({ status: N.fromHttpCode(i.status) }), r(i));
                                    }),
                                        i.open("POST", t.url),
                                        i.send(JSON.stringify(e));
                                })
                            );
                        }),
                        t
                );
            })(ne),
            se = (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return (
                    f.b(t, e),
                        (t.prototype._setupTransport = function () {
                            if (!this._options.dsn) return e.prototype._setupTransport.call(this);
                            var t = f.a({}, this._options.transportOptions, { dsn: this._options.dsn });
                            return this._options.transport ? new this._options.transport(t) : D() ? new ie(t) : new oe(t);
                        }),
                        (t.prototype.eventFromException = function (e, t) {
                            var n,
                                r = this;
                            if (Object(g.d)(e) && e.error) return (e = e.error), (n = Z(X(e))), I.a.resolve(this._buildEvent(n, t));
                            if (Object(g.a)(e) || Object(g.b)(e)) {
                                var i = e,
                                    o = i.name || (Object(g.a)(i) ? "DOMError" : "DOMException"),
                                    s = i.message ? o + ": " + i.message : o;
                                return this.eventFromMessage(s, U.Error, t).then(function (e) {
                                    return Object(v.a)(e, s), I.a.resolve(r._buildEvent(e, t));
                                });
                            }
                            if (Object(g.c)(e)) return (n = Z(X(e))), I.a.resolve(this._buildEvent(n, t));
                            if (Object(g.e)(e) && t && t.syntheticException)
                                return (
                                    (n = (function (e, t) {
                                        var n = Object.keys(e).sort(),
                                            r = { extra: { __serialized__: Object(O.c)(e) }, message: "Non-Error exception captured with keys: " + E(n) };
                                        if (t) {
                                            var i = ee(X(t).stack);
                                            r.stacktrace = { frames: i };
                                        }
                                        return r;
                                    })(e, t.syntheticException)),
                                        Object(v.a)(n, "Custom Object", void 0, { handled: !0, synthetic: !0, type: "generic" }),
                                        (n.level = U.Error),
                                        I.a.resolve(this._buildEvent(n, t))
                                );
                            var a = e;
                            return this.eventFromMessage(a, void 0, t).then(function (e) {
                                return Object(v.a)(e, "" + a, void 0, { handled: !0, synthetic: !0, type: "generic" }), (e.level = U.Error), I.a.resolve(r._buildEvent(e, t));
                            });
                        }),
                        (t.prototype._buildEvent = function (e, t) {
                            return f.a({}, e, { event_id: t && t.event_id });
                        }),
                        (t.prototype.eventFromMessage = function (e, t, n) {
                            void 0 === t && (t = U.Info);
                            var r = { event_id: n && n.event_id, level: t, message: e };
                            if (this._options.attachStacktrace && n && n.syntheticException) {
                                var i = ee(X(n.syntheticException).stack);
                                r.stacktrace = { frames: i };
                            }
                            return I.a.resolve(r);
                        }),
                        t
                );
            })(F),
            ae = (function (e) {
                function t(t) {
                    return void 0 === t && (t = {}), e.call(this, se, t) || this;
                }
                return (
                    f.b(t, e),
                        (t.prototype._prepareEvent = function (t, n, r) {
                            return (
                                (t.platform = t.platform || "javascript"),
                                    (t.sdk = f.a({}, t.sdk, { name: "sentry.javascript.browser", packages: f.d((t.sdk && t.sdk.packages) || [], [{ name: "npm:@sentry/browser", version: "5.6.3" }]), version: "5.6.3" })),
                                    e.prototype._prepareEvent.call(this, t, n, r)
                            );
                        }),
                        (t.prototype.showReportDialog = function (e) {
                            void 0 === e && (e = {});
                            var t = Object(v.e)().document;
                            if (t)
                                if (this._isEnabled()) {
                                    var n = e.dsn || this.getDsn();
                                    if (e.eventId)
                                        if (n) {
                                            var r = t.createElement("script");
                                            (r.async = !0), (r.src = new P(n).getReportDialogEndpoint(e)), e.onLoad && (r.onload = e.onLoad), (t.head || t.body).appendChild(r);
                                        } else m.a.error("Missing `Dsn` option in showReportDialog call");
                                    else m.a.error("Missing `eventId` option in showReportDialog call");
                                } else m.a.error("Trying to call showReportDialog with Sentry Client is disabled");
                        }),
                        t
                );
            })(L);
        function ce(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = Object(_.a)();
            if (r && r[e]) return r[e].apply(r, f.d(t));
            throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.");
        }
        function ue(e) {
            var t;
            try {
                throw new Error("Sentry syntheticException");
            } catch (e) {
                t = e;
            }
            return ce("captureException", e, { originalException: e, syntheticException: t });
        }
        function le(e) {
            ce("withScope", e);
        }
        var pe,
            de,
            fe = 1e3,
            he = 0;
        function _e() {
            (he += 1),
                setTimeout(function () {
                    he -= 1;
                });
        }
        function me(e, t, n) {
            if ((void 0 === t && (t = {}), "function" != typeof e)) return e;
            try {
                if (e.__sentry__) return e;
                if (e.__sentry_wrapped__) return e.__sentry_wrapped__;
            } catch (t) {
                return e;
            }
            var r = function () {
                n && "function" == typeof n && n.apply(this, arguments);
                var r = Array.prototype.slice.call(arguments);
                try {
                    var i = r.map(function (e) {
                        return me(e, t);
                    });
                    return e.handleEvent ? e.handleEvent.apply(this, i) : e.apply(this, i);
                } catch (e) {
                    throw (
                        (_e(),
                            le(function (n) {
                                n.addEventProcessor(function (e) {
                                    var n = f.a({}, e);
                                    return t.mechanism && Object(v.a)(n, void 0, void 0, t.mechanism), (n.extra = f.a({}, n.extra, { arguments: Object(O.b)(r, 3) })), n;
                                }),
                                    ue(e);
                            }),
                            e)
                    );
                }
            };
            try {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
            } catch (e) {}
            (e.prototype = e.prototype || {}),
                (r.prototype = e.prototype),
                Object.defineProperty(e, "__sentry_wrapped__", { enumerable: !1, value: r }),
                Object.defineProperties(r, { __sentry__: { enumerable: !1, value: !0 }, __sentry_original__: { enumerable: !1, value: e } });
            try {
                Object.getOwnPropertyDescriptor(r, "name").configurable &&
                Object.defineProperty(r, "name", {
                    get: function () {
                        return e.name;
                    },
                });
            } catch (e) {}
            return r;
        }
        var ve = 0;
        function ge(e, t) {
            return (
                void 0 === t && (t = !1),
                    function (n) {
                        if (((pe = void 0), n && de !== n)) {
                            de = n;
                            var r = function () {
                                var t;
                                try {
                                    t = n.target ? be(n.target) : be(n);
                                } catch (e) {
                                    t = "<unknown>";
                                }
                                0 !== t.length && Object(_.a)().addBreadcrumb({ category: "ui." + e, message: t }, { event: n, name: e });
                            };
                            ve && clearTimeout(ve), t ? (ve = setTimeout(r)) : r();
                        }
                    }
            );
        }
        function ye() {
            return function (e) {
                var t;
                try {
                    t = e.target;
                } catch (e) {
                    return;
                }
                var n = t && t.tagName;
                n &&
                ("INPUT" === n || "TEXTAREA" === n || t.isContentEditable) &&
                (pe || ge("input")(e),
                    clearTimeout(pe),
                    (pe = setTimeout(function () {
                        pe = void 0;
                    }, fe)));
            };
        }
        function be(e) {
            for (var t, n = e, r = [], i = 0, o = 0, s = " > ".length; n && i++ < 5 && !("html" === (t = Ee(n)) || (i > 1 && o + r.length * s + t.length >= 80)); ) r.push(t), (o += t.length), (n = n.parentNode);
            return r.reverse().join(" > ");
        }
        function Ee(e) {
            var t,
                n,
                r,
                i,
                o,
                s = [];
            if (!e || !e.tagName) return "";
            if ((s.push(e.tagName.toLowerCase()), e.id && s.push("#" + e.id), (t = e.className) && Object(g.h)(t))) for (n = t.split(/\s+/), o = 0; o < n.length; o++) s.push("." + n[o]);
            var a = ["type", "name", "title", "alt"];
            for (o = 0; o < a.length; o++) (r = a[o]), (i = e.getAttribute(r)) && s.push("[" + r + '="' + i + '"]');
            return s.join("");
        }
        var we = (function () {
            function e() {
                (this._ignoreOnError = 0), (this.name = e.id);
            }
            return (
                (e.prototype._wrapTimeFunction = function (e) {
                    return function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        var r = t[0];
                        return (t[0] = me(r, { mechanism: { data: { function: xe(e) }, handled: !0, type: "instrument" } })), e.apply(this, t);
                    };
                }),
                    (e.prototype._wrapRAF = function (e) {
                        return function (t) {
                            return e(me(t, { mechanism: { data: { function: "requestAnimationFrame", handler: xe(e) }, handled: !0, type: "instrument" } }));
                        };
                    }),
                    (e.prototype._wrapEventTarget = function (e) {
                        var t = Object(v.e)(),
                            n = t[e] && t[e].prototype;
                        n &&
                        n.hasOwnProperty &&
                        n.hasOwnProperty("addEventListener") &&
                        (Object(O.a)(n, "addEventListener", function (t) {
                            return function (n, r, i) {
                                try {
                                    "function" == typeof r.handleEvent && (r.handleEvent = me(r.handleEvent.bind(r), { mechanism: { data: { function: "handleEvent", handler: xe(r), target: e }, handled: !0, type: "instrument" } }));
                                } catch (e) {}
                                return t.call(this, n, me(r, { mechanism: { data: { function: "addEventListener", handler: xe(r), target: e }, handled: !0, type: "instrument" } }), i);
                            };
                        }),
                            Object(O.a)(n, "removeEventListener", function (e) {
                                return function (t, n, r) {
                                    var i = n;
                                    try {
                                        i = i && (i.__sentry_wrapped__ || i);
                                    } catch (e) {}
                                    return e.call(this, t, i, r);
                                };
                            }));
                    }),
                    (e.prototype.setupOnce = function () {
                        this._ignoreOnError = this._ignoreOnError;
                        var e = Object(v.e)();
                        Object(O.a)(e, "setTimeout", this._wrapTimeFunction.bind(this)),
                            Object(O.a)(e, "setInterval", this._wrapTimeFunction.bind(this)),
                            Object(O.a)(e, "requestAnimationFrame", this._wrapRAF.bind(this)),
                            [
                                "EventTarget",
                                "Window",
                                "Node",
                                "ApplicationCache",
                                "AudioTrackList",
                                "ChannelMergerNode",
                                "CryptoOperation",
                                "EventSource",
                                "FileReader",
                                "HTMLUnknownElement",
                                "IDBDatabase",
                                "IDBRequest",
                                "IDBTransaction",
                                "KeyOperation",
                                "MediaController",
                                "MessagePort",
                                "ModalWindow",
                                "Notification",
                                "SVGElementInstance",
                                "Screen",
                                "TextTrack",
                                "TextTrackCue",
                                "TextTrackList",
                                "WebSocket",
                                "WebSocketWorker",
                                "Worker",
                                "XMLHttpRequest",
                                "XMLHttpRequestEventTarget",
                                "XMLHttpRequestUpload",
                            ].forEach(this._wrapEventTarget.bind(this));
                    }),
                    (e.id = "TryCatch"),
                    e
            );
        })();
        function xe(e) {
            try {
                return (e && e.name) || "<anonymous>";
            } catch (e) {
                return "<anonymous>";
            }
        }
        var Se,
            Oe = Object(v.e)(),
            je = (function () {
                function e(t) {
                    (this.name = e.id), (this._options = f.a({ console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 }, t));
                }
                return (
                    (e.prototype._instrumentConsole = function () {
                        "console" in Oe &&
                        ["debug", "info", "warn", "error", "log", "assert"].forEach(function (t) {
                            t in Oe.console &&
                            Object(O.a)(Oe.console, t, function (n) {
                                return function () {
                                    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                                    var o = { category: "console", data: { extra: { arguments: Object(O.b)(r, 3) }, logger: "console" }, level: U.fromString(t), message: b(r, " ") };
                                    "assert" === t && !1 === r[0] && ((o.message = "Assertion failed: " + (b(r.slice(1), " ") || "console.assert")), (o.data.extra.arguments = Object(O.b)(r.slice(1), 3))),
                                        e.addBreadcrumb(o, { input: r, level: t }),
                                    n && Function.prototype.apply.call(n, Oe.console, r);
                                };
                            });
                        });
                    }),
                        (e.prototype._instrumentDOM = function () {
                            "document" in Oe &&
                            (Oe.document.addEventListener("click", ge("click"), !1),
                                Oe.document.addEventListener("keypress", ye(), !1),
                                ["EventTarget", "Node"].forEach(function (e) {
                                    var t = Oe[e] && Oe[e].prototype;
                                    t &&
                                    t.hasOwnProperty &&
                                    t.hasOwnProperty("addEventListener") &&
                                    (Object(O.a)(t, "addEventListener", function (e) {
                                        return function (t, n, r) {
                                            return (
                                                n && n.handleEvent
                                                    ? ("click" === t &&
                                                    Object(O.a)(n, "handleEvent", function (e) {
                                                        return function (t) {
                                                            return ge("click")(t), e.call(this, t);
                                                        };
                                                    }),
                                                    "keypress" === t &&
                                                    Object(O.a)(n, "handleEvent", function (e) {
                                                        return function (t) {
                                                            return ye()(t), e.call(this, t);
                                                        };
                                                    }))
                                                    : ("click" === t && ge("click", !0)(this), "keypress" === t && ye()(this)),
                                                    e.call(this, t, n, r)
                                            );
                                        };
                                    }),
                                        Object(O.a)(t, "removeEventListener", function (e) {
                                            return function (t, n, r) {
                                                var i = n;
                                                try {
                                                    i = i && (i.__sentry_wrapped__ || i);
                                                } catch (e) {}
                                                return e.call(this, t, i, r);
                                            };
                                        }));
                                }));
                        }),
                        (e.prototype._instrumentFetch = function () {
                            (function () {
                                if (!D()) return !1;
                                var e = function (e) {
                                        return -1 !== e.toString().indexOf("native");
                                    },
                                    t = Object(v.e)(),
                                    n = null,
                                    r = t.document;
                                if (r) {
                                    var i = r.createElement("iframe");
                                    i.hidden = !0;
                                    try {
                                        r.head.appendChild(i), i.contentWindow && i.contentWindow.fetch && (n = e(i.contentWindow.fetch)), r.head.removeChild(i);
                                    } catch (e) {
                                        m.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
                                    }
                                }
                                return null === n && (n = e(t.fetch)), n;
                            })() &&
                            Object(O.a)(Oe, "fetch", function (t) {
                                return function () {
                                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                    var i,
                                        o = n[0],
                                        s = "GET";
                                    "string" == typeof o ? (i = o) : "Request" in Oe && o instanceof Request ? ((i = o.url), o.method && (s = o.method)) : (i = String(o)), n[1] && n[1].method && (s = n[1].method);
                                    var a = Object(_.a)().getClient(),
                                        c = a && a.getDsn();
                                    if (c) {
                                        var u = new P(c).getStoreEndpoint();
                                        if (u && i.includes(u)) return "POST" === s && n[1] && n[1].body && ke(n[1].body), t.apply(Oe, n);
                                    }
                                    var l = { method: Object(g.h)(s) ? s.toUpperCase() : s, url: i };
                                    return t
                                        .apply(Oe, n)
                                        .then(function (t) {
                                            return (l.status_code = t.status), e.addBreadcrumb({ category: "fetch", data: l, type: "http" }, { input: n, response: t }), t;
                                        })
                                        .catch(function (t) {
                                            throw (e.addBreadcrumb({ category: "fetch", data: l, level: U.Error, type: "http" }, { error: t, input: n }), t);
                                        });
                                };
                            });
                        }),
                        (e.prototype._instrumentHistory = function () {
                            var t = this;
                            if (((n = Object(v.e)()), (r = n.chrome), (i = r && r.app && r.app.runtime), (o = "history" in n && !!n.history.pushState && !!n.history.replaceState), !i && o)) {
                                var n,
                                    r,
                                    i,
                                    o,
                                    s = function (t, n) {
                                        var r = Object(v.f)(Oe.location.href),
                                            i = Object(v.f)(n),
                                            o = Object(v.f)(t);
                                        o.path || (o = r),
                                            (Se = n),
                                        r.protocol === i.protocol && r.host === i.host && (n = i.relative),
                                        r.protocol === o.protocol && r.host === o.host && (t = o.relative),
                                            e.addBreadcrumb({ category: "navigation", data: { from: t, to: n } });
                                    },
                                    a = Oe.onpopstate;
                                (Oe.onpopstate = function () {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    var r = Oe.location.href;
                                    if ((s(Se, r), a)) return a.apply(t, e);
                                }),
                                    Object(O.a)(Oe.history, "pushState", c),
                                    Object(O.a)(Oe.history, "replaceState", c);
                            }
                            function c(e) {
                                return function () {
                                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                    var r = t.length > 2 ? t[2] : void 0;
                                    return r && s(Se, String(r)), e.apply(this, t);
                                };
                            }
                        }),
                        (e.prototype._instrumentXHR = function () {
                            if ("XMLHttpRequest" in Oe) {
                                var t = XMLHttpRequest.prototype;
                                Object(O.a)(t, "open", function (e) {
                                    return function () {
                                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                        var r = t[1];
                                        this.__sentry_xhr__ = { method: Object(g.h)(t[0]) ? t[0].toUpperCase() : t[0], url: t[1] };
                                        var i = Object(_.a)().getClient(),
                                            o = i && i.getDsn();
                                        if (o) {
                                            var s = new P(o).getStoreEndpoint();
                                            Object(g.h)(r) && s && r.includes(s) && (this.__sentry_own_request__ = !0);
                                        }
                                        return e.apply(this, t);
                                    };
                                }),
                                    Object(O.a)(t, "send", function (t) {
                                        return function () {
                                            for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                                            var o = this;
                                            function s() {
                                                if (4 === o.readyState) {
                                                    if (o.__sentry_own_request__) return;
                                                    try {
                                                        o.__sentry_xhr__ && (o.__sentry_xhr__.status_code = o.status);
                                                    } catch (e) {}
                                                    e.addBreadcrumb({ category: "xhr", data: o.__sentry_xhr__, type: "http" }, { xhr: o });
                                                }
                                            }
                                            return (
                                                o.__sentry_own_request__ && ke(r[0]),
                                                    ["onload", "onerror", "onprogress"].forEach(function (e) {
                                                        n(e, o);
                                                    }),
                                                    "onreadystatechange" in o && "function" == typeof o.onreadystatechange
                                                        ? Object(O.a)(o, "onreadystatechange", function (e) {
                                                            return me(e, { mechanism: { data: { function: "onreadystatechange", handler: (e && e.name) || "<anonymous>" }, handled: !0, type: "instrument" } }, s);
                                                        })
                                                        : (o.onreadystatechange = s),
                                                    t.apply(this, r)
                                            );
                                        };
                                    });
                            }
                            function n(e, t) {
                                e in t &&
                                "function" == typeof t[e] &&
                                Object(O.a)(t, e, function (t) {
                                    return me(t, { mechanism: { data: { function: e, handler: (t && t.name) || "<anonymous>" }, handled: !0, type: "instrument" } });
                                });
                            }
                        }),
                        (e.addBreadcrumb = function (t, n) {
                            Object(_.a)().getIntegration(e) && Object(_.a)().addBreadcrumb(t, n);
                        }),
                        (e.prototype.setupOnce = function () {
                            this._options.console && this._instrumentConsole(),
                            this._options.dom && this._instrumentDOM(),
                            this._options.xhr && this._instrumentXHR(),
                            this._options.fetch && this._instrumentFetch(),
                            this._options.history && this._instrumentHistory();
                        }),
                        (e.id = "Breadcrumbs"),
                        e
                );
            })();
        function ke(e) {
            try {
                var t = JSON.parse(e);
                je.addBreadcrumb({ category: "sentry", event_id: t.event_id, level: t.level || U.fromString("error"), message: Object(v.d)(t) }, { event: t });
            } catch (e) {
                m.a.error("Error while adding sentry type breadcrumb");
            }
        }
        var Ae = (function () {
                function e(t) {
                    (this.name = e.id), (this._options = f.a({ onerror: !0, onunhandledrejection: !0 }, t));
                }
                return (
                    (e.prototype.setupOnce = function () {
                        (Error.stackTraceLimit = 50),
                            z(function (t, n, r) {
                                var i = r && !0 === r.__sentry_own_request__;
                                if (!(he > 0 || i)) {
                                    var o = Object(_.a)().getIntegration(e);
                                    o && Object(_.a)().captureEvent(o._eventFromGlobalHandler(t, r), { data: { stack: t }, originalException: r });
                                }
                            }),
                        this._options.onerror && (m.a.log("Global Handler attached: onerror"), Y()),
                        this._options.onunhandledrejection && (m.a.log("Global Handler attached: onunhandledrejection"), G());
                    }),
                        (e.prototype._eventFromGlobalHandler = function (e, t) {
                            if (!Object(g.h)(e.message) && "onunhandledrejection" !== e.mechanism) {
                                var n = e.message;
                                e.message = n.error && Object(g.h)(n.error.message) ? n.error.message : "No error message";
                            }
                            if ("onunhandledrejection" === e.mechanism && (e.incomplete || "failed" === e.mode)) return this._eventFromIncompleteRejection(e, t);
                            var r = Z(e),
                                i = { mode: e.mode };
                            e.message && (i.message = e.message), e.name && (i.name = e.name);
                            var o = Object(_.a)().getClient(),
                                s = (o && o.getOptions().maxValueLength) || 250,
                                a = e.original ? y(JSON.stringify(Object(O.b)(e.original)), s) : "",
                                c = "onunhandledrejection" === e.mechanism ? "UnhandledRejection" : "Error";
                            return Object(v.a)(r, a, c, { data: i, handled: !1, type: e.mechanism }), r;
                        }),
                        (e.prototype._eventFromIncompleteRejection = function (e, t) {
                            var n = { level: U.Error };
                            return (
                                Object(g.f)(t)
                                    ? (n.exception = { values: [{ type: "UnhandledRejection", value: "Non-Error promise rejection captured with value: " + t }] })
                                    : ((n.exception = { values: [{ type: "UnhandledRejection", value: "Non-Error promise rejection captured with keys: " + E(Object.keys(t).sort()) }] }), (n.extra = { __serialized__: Object(O.c)(t) })),
                                n.exception.values &&
                                n.exception.values[0] &&
                                (n.exception.values[0].mechanism = {
                                    data: f.a({ mode: e.mode }, e.incomplete && { incomplete: e.incomplete }, e.message && { message: e.message }, e.name && { name: e.name }),
                                    handled: !1,
                                    type: e.mechanism,
                                }),
                                    n
                            );
                        }),
                        (e.id = "GlobalHandlers"),
                        e
                );
            })(),
            Te = "cause",
            Pe = 5,
            Ie = (function () {
                function e(t) {
                    void 0 === t && (t = {}), (this.name = e.id), (this._key = t.key || Te), (this._limit = t.limit || Pe);
                }
                return (
                    (e.prototype.setupOnce = function () {
                        Object(h.b)(function (t, n) {
                            var r = Object(_.a)().getIntegration(e);
                            return r ? r._handler(t, n) : t;
                        });
                    }),
                        (e.prototype._handler = function (e, t) {
                            if (!(e.exception && e.exception.values && t && t.originalException instanceof Error)) return e;
                            var n = this._walkErrorTree(t.originalException, this._key);
                            return (e.exception.values = f.d(n, e.exception.values)), e;
                        }),
                        (e.prototype._walkErrorTree = function (e, t, n) {
                            if ((void 0 === n && (n = []), !(e[t] instanceof Error) || n.length + 1 >= this._limit)) return n;
                            var r = K(X(e[t]));
                            return this._walkErrorTree(e[t], t, f.d([r], n));
                        }),
                        (e.id = "LinkedErrors"),
                        e
                );
            })(),
            Ce = Object(v.e)(),
            Re = (function () {
                function e() {
                    this.name = e.id;
                }
                return (
                    (e.prototype.setupOnce = function () {
                        Object(h.b)(function (t) {
                            if (Object(_.a)().getIntegration(e)) {
                                if (!Ce.navigator || !Ce.location) return t;
                                var n = t.request || {};
                                return (n.url = n.url || Ce.location.href), (n.headers = n.headers || {}), (n.headers["User-Agent"] = Ce.navigator.userAgent), f.a({}, t, { request: n });
                            }
                            return t;
                        });
                    }),
                        (e.id = "UserAgent"),
                        e
                );
            })(),
            Ne = [new r.InboundFilters(), new r.FunctionToString(), new we(), new je(), new Ae(), new Ie(), new Re()];
        function Le(e) {
            if ((void 0 === e && (e = {}), void 0 === e.defaultIntegrations && (e.defaultIntegrations = Ne), void 0 === e.release)) {
                var t = Object(v.e)();
                t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id);
            }
            !(function (e, t) {
                !0 === t.debug && m.a.enable(), Object(_.a)().bindClient(new e(t));
            })(ae, e);
        }
        const Ue = n(38),
            Ve = (e) => {
                const t = qe({ maxBudgetMinute: Ue.sentry.filterOptions.maxBudgetMinute, maxBudgetHour: Ue.sentry.filterOptions.maxBudgetHour });
                Le({
                    dsn: Ue.sentry.sentryDsn,
                    release: JSON.stringify(n(40).version),
                    environment: JSON.stringify("prod"),
                    whitelistUrls: [/vpaid\/bundle/, /vpaid-local/, /playerjs/, /src\/index/],
                    blacklistUrls: [/vpaid_client/],
                    beforeSend: (e) => (t() ? e : null),
                }),
                    (function (e) {
                        ce("configureScope", e);
                    })((t) => {
                        t.setTag("project-type", e);
                    });
            },
            Fe = ({ category: e, message: t, level: n }) => {
                !(function (e) {
                    ce("addBreadcrumb", e);
                })({ category: e, message: t, level: n });
            },
            De = (e, t = 1) => {
                Math.random() <= t && ue(e);
            };
        function Me() {
            return +new Date();
        }
        const Be = { minute: { slot: 0, budgetUsed: 0 }, hour: { slot: 0, budgetUsed: 0 } },
            qe = (e) => {
                const { maxBudgetMinute: t, maxBudgetHour: n, getDate: r = Me } = e;
                return () => {
                    const e = r(),
                        i = Math.round(e / 1e3 / 60),
                        o = Math.round(e / 1e3 / 60 / 60);
                    return (
                        Be.minute.slot !== i && ((Be.minute.slot = i), (Be.minute.budgetUsed = 0)),
                        Be.hour.slot !== o && ((Be.hour.slot = o), (Be.hour.budgetUsed = 0)),
                        Be.minute.budgetUsed < t && (Be.minute.budgetUsed++, Be.hour.budgetUsed < n) && (Be.hour.budgetUsed++, !0)
                    );
                };
            };
        class He {
            constructor({ context: e }) {
                (this._context = e), (this._internalLoadHandled = !1), (this._internalImpressionsCount = 0), (this._internalCompletesCount = 0);
            }
            internalLoad() {
                return this._internalLoadHandled ? [] : (clearInterval(this._context._pingInterval), this._context._sendMessageToIframe("settings", this._context._adParameters), (this._internalLoadHandled = !0), []);
            }
            internalAdImp() {
                return this._internalImpressionsCount++, this._context._impOn !== this._internalImpressionsCount || "start" !== this._context._pass ? [] : ["AdImpression"];
            }
            internalAdFullview() {
                this._internalCompletesCount++;
                let e = [];
                return (
                    this._context._impOn === this._internalImpressionsCount && "complete" === this._context._pass && (e = ["AdImpression"]),
                        !this._context._maxViews || this._internalCompletesCount < this._context._maxViews ? [...e] : [...e, "AdVideoComplete", "AdVideoCompleteAll", "AdStopped"]
                );
            }
            internalSequenceEnd() {
                return "last" === this._context._impOn && this._internalImpressionsCount > 0 ? ["AdImpression"] : [];
            }
            internalAdClick() {
                return ["AdClickThru"];
            }
        }
        class We extends He {
            internalGotSettings() {
                return clearTimeout(this._context._timeout), ["AdLoaded"];
            }
            internalSequenceStart() {
                return ["AdStarted"];
            }
            internalAdImp() {
                const e = super.internalAdImp();
                return 1 === this._internalImpressionsCount ? [...e, "AdVolumeChange", "AdVideoStart", { name: "AdVideoFirstQuartile", delay: 5e3 }] : [...e, "AdVolumeChange"];
            }
            internalSequenceEnd() {
                const e = super.internalSequenceEnd();
                return this._internalImpressionsCount > 0 ? [...e, "AdVideoComplete", "AdVideoCompleteAll", "AdStopped"] : [...e, "AdStopped", "AdError"];
            }
            externalStartAd() {
                return this._context._sendMessageToIframe("start"), [];
            }
        }
        class Je extends He {
            internalGotSettings() {
                return clearTimeout(this._context._timeout), this._context._sendMessageToIframe("start"), [];
            }
            internalAdImp() {
                if (0 === this._internalImpressionsCount) return ["AdLoaded"];
                return [...super.internalAdImp()];
            }
            internalSequenceEnd() {
                const e = super.internalSequenceEnd();
                return this._internalImpressionsCount > 0 ? [...e, "AdVideoComplete", "AdVideoCompleteAll", "AdStopped"] : [...e, "AdError"];
            }
            externalStartAd() {
                const e = ["AdStarted", "AdVolumeChange"],
                    t = super.internalAdImp();
                return 1 === this._internalImpressionsCount ? [...e, "AdVideoStart", ...t, { name: "AdVideoFirstQuartile", delay: 5e3 }] : [...e];
            }
        }
        var $e = class {
            constructor({ context: e = this, strategy: t = "embedKost" }) {
                (this._context = e), this.setStrategy(t);
            }
            _process(e) {
                const t = this._strategy[e];
                if ("function" == typeof t) {
                    const e = t.apply(this._strategy);
                    this._emitExternalEvents(e);
                }
            }
            _emitExternalEvents(e) {
                Array.isArray(e) &&
                e.forEach((e) => {
                    const t = e.name || e;
                    e.delay
                        ? setTimeout(() => {
                            this._context._emit(t);
                        }, e.delay)
                        : this._context._emit(t);
                });
            }
            setStrategy(e) {
                const t = { context: this._context };
                switch (e) {
                    case "embedKost":
                        this._strategy = new We(t);
                        break;
                    case "embedClassic":
                        this._strategy = new Je(t);
                }
            }
            get strategy() {
                return this._strategy;
            }
            handleInternalEvent(e) {
                if ("string" != typeof e) return;
                const t = e.match(/^_ve_(.+)/);
                if (!t) return;
                const n = ("internal_" + t[1]).toLowerCase().replace(/([-_][a-z])/g, (e) => e.toUpperCase().replace(/-|_/, ""));
                this._process(n);
            }
            handleExternalCommand(e) {
                const t = "external" + e[0].toUpperCase() + e.slice(1);
                this._process(t);
            }
        };
        n.d(t, "default", function () {
            return ze;
        });
        class ze {
            constructor() {
                (this._slot = null),
                    (this._adParameters = null),
                    (this._playerEvents = {}),
                    (this._emittedEvents = []),
                    (this._width = 0),
                    (this._height = 0),
                    (this._adInited = !1),
                    (this._iframe = null),
                    (this._impCounter = 0),
                    (this._completeCounter = 0),
                    (this._minViews = 0),
                    (this._sentEvent = !1),
                    (this._adEnd = !1),
                    (this._unload = !1),
                    (this._eventLink = "https://dev.null"),
                    (this._pass = "start"),
                    (this._impOn = 1),
                    (this._AdImpressionCount = 0),
                    (this._isAdStarted = !1),
                    (this._needSendAdImpression = !1),
                    (this._vpaidVolume = 0),
                    (this._playerVolume = 0),
                    (this._player = p),
                    (this._generalVolume = 0),
                    (this._pingInterval = null),
                    (this._timeout = setTimeout(() => {
                        this._emit("adError");
                    }, 1e4)),
                    Object.assign(this, s, u, l),
                    Ve("VPAID class");
            }
            initAd(e, t, n, r, i, s) {
                if (!this._adInited) {
                    this._addSentryAncestorOrigins(), s.videoSlot && (s.videoSlot.volume = 0), (this._slot = s.slot), (this._width = e), (this._height = t);
                    try {
                        this._adParameters = JSON.parse(i.AdParameters);
                    } catch (e) {
                        try {
                            (this._adParameters = ""),
                                atob(i.AdParameters)
                                    .split("")
                                    .forEach((e) => {
                                        this._adParameters += String.fromCharCode(e.charCodeAt(0) ^ "k".charCodeAt(0));
                                    }),
                                (this._adParameters = JSON.parse(this._adParameters));
                        } catch (e) {
                            this._emit("adError");
                        }
                    }
                    (this._eventsManager = new $e({ context: this, strategy: this._adParameters.strategy })),
                    navigator.sendBeacon ||
                    (navigator.sendBeacon = function (e) {
                        let t = new XMLHttpRequest();
                        t.open("GET", e, !1);
                        try {
                            t.send();
                        } catch (e) {}
                    }),
                        this._adParameters.vastPacks
                            ? this._initPlayer()
                            : this._adParameters.endpoint
                            ? o.a
                                .get(this._adParameters.endpoint)
                                .then((e) => {
                                    (e = e.data).vastPacks ? ((this._adParameters = { ...this._adParameters, ...e }), this._initPlayer()) : this._emit("adError");
                                })
                                .catch((e) => {
                                    this._emit("adError");
                                })
                            : this._adParameters.code
                                ? o.a
                                    .get("https://v.kost.tv/r/" + this._adParameters.code, { withCredentials: !0 })
                                    .then((e) => {
                                        window.addEventListener("message", (e) => {
                                            this._listenToRotator(e);
                                        }),
                                            Fe({ category: "_adParameters", message: JSON.stringify({ _adParameters: this._adParameters }), level: "info" }),
                                            (this._maxViews = +this._adParameters.maxViews || 1),
                                            (this._adParameters = { ...this._adParameters, ...e.data.rotator, width: this._width, height: this._height }),
                                            this._insertIframe("https://infokinonovinki.com/is/");
                                    })
                                    .catch((e) => {
                                        this._emit("adError");
                                    })
                                : this._emit("adError"),
                        (this._adInited = !0);
                }
            }
            startAd() {
                this._eventsManager.handleExternalCommand("startAd");
            }
            stopAd() {
                this._clean(),
                    setTimeout(() => {
                        this._emit("AdStopped");
                    }, 75);
            }
            _initPlayer() {
                this._setVolume(),
                this._adParameters.pass && (this._pass = this._adParameters.pass),
                this._adParameters.minViews && (this._minViews = this._adParameters.minViews),
                this._adParameters.impOn && (this._impOn = this._adParameters.impOn),
                    window.addEventListener("message", (e) => {
                        this._listenToPlayer(e);
                    }),
                    (window.onbeforeunload = window.onunload = () => {
                        navigator.sendBeacon(this._eventLink), this._unload || ((this._unload = !0), !this._adEnd && this._sentEvent);
                    }),
                    this._insertIframe(null, this._player);
            }
            _clean() {
                Fe({ category: "Remove_Iframe", message: "", level: "info" }), this._iframe.remove();
            }
            set isAdStarted(e) {
                this._needSendAdImpression && (this._emit("AdImpression"), this._AdImpressionCount++, (this._needSendAdImpression = !1), console.log("AdImpression after AdStarted event")), (this._isAdStarted = e);
            }
            emitAdImpression(e, t) {
                this._AdImpressionCount || (this._isAdStarted ? (this._emit("AdImpression"), this._AdImpressionCount++, console.log(`AdImpression with ${e} event, ${t}`)) : (this._needSendAdImpression = !0));
            }
            checkAdImpressionCondition(e) {
                const t = e.event || e;
                "_ve_ad_imp" === t && this._impCounter++;
                const n = e.info || this._impCounter;
                if (this._impOn === n)
                    this._pass === t ? this.emitAdImpression(t, n) : "start" === this._pass && "_ve_ad_imp" === t ? this.emitAdImpression(t, n) : "complete" === this._pass && "_ve_ad_fullview" === e && this.emitAdImpression(t, n);
                else if ("last" === this._impOn && ("end" === t || "_ve_sequence_end" === t)) {
                    if (this._AdImpressionCount) return;
                    this.emitAdImpression(t, n);
                }
            }
            _listenToRotator(e) {
                Fe({ category: "_listenToRotator", message: JSON.stringify({ event: e.data }), level: "info" }), this._eventsManager.handleInternalEvent(e.data);
            }
            getAdVolume() {
                return this._vpaidVolume;
            }
            setAdVolume(e) {
                (this._vpaidVolume = e), this._sendMessageToIframe("changeVolume", this._vpaidVolume);
            }
            _listenToPlayer(e) {
                if ("_ve_vpaid" === (e = e.data).target)
                    switch ((Fe({ category: "_listenToPlayer", message: JSON.stringify({ event: e }), level: "info" }), console.log(e), this.checkAdImpressionCondition(e), e.event)) {
                        case "load":
                            clearInterval(this._pingInterval), this._sendMessageToIframe("config", this._adParameters);
                            break;
                        case "gotConfig":
                            clearTimeout(this._timeout), this._emit("AdLoaded"), (this._loaded = !0);
                            break;
                        case "_ve_sequence_start":
                            this._emit("AdStarted"),
                                this._emit("AdVideoStart"),
                                setTimeout(() => {
                                    this._emit("AdVideoFirstQuartile");
                                }, 5e3),
                                console.log(`AdStarted with ${e.event} event`),
                                (this.isAdStarted = !0);
                            break;
                        case "_ve_ad_imp":
                            if ("start" === this._pass) {
                                let t;
                                try {
                                    t = this._adParameters.vastEvents[e.info - 1];
                                } catch (e) {}
                                e.info > this._impCounter && (this._impCounter = e.info), t && (this._eventLink = t);
                            }
                            !this._adParameters.vastEvents && e.info > this._impCounter && (this._impCounter = e.info);
                            break;
                        case "click":
                            this._emit("AdClickThru");
                            break;
                        case "complete":
                            if ("complete" === this._pass) {
                                let t;
                                try {
                                    t = this._adParameters.vastEvents[e.info - 1];
                                } catch (e) {}
                                e.info >= this._minViews && e.info > this._completeCounter && t ? ((this._completeCounter = e.info), (this._eventLink = t)) : e.info > this._completeCounter && (this._completeCounter = e.info);
                            }
                            break;
                        case "_ve_sequence_end":
                            (this._adEnd = !0), this._impCounter > 0 || this._completeCounter > 0 ? this._sendEvent() : this._emit("AdError");
                            break;
                        case "_ve_ad_volume":
                            (this._vpaidVolume = e.info), this._emit("AdVolumeChange");
                    }
            }
            _sendEvent(e = !1) {
                const t = !!this._adParameters.vastEvents,
                    n = this._impCounter > 0 || this._completeCounter > 0;
                if (!this._sentEvent && t && n && this._eventLink) {
                    let t = new XMLHttpRequest();
                    t.open("GET", this._eventLink, e), (t.withCredentials = !0);
                    try {
                        t.send();
                    } catch (e) {}
                    (this._sentEvent = !0), this._emit("AdVideoMidpoint"), this._emit("AdVideoThirdQuartile"), this._emit("AdVideoComplete"), this._emit("AdVideoCompleteAll"), this.stopAd();
                } else
                    !t && n
                        ? (this._emit("AdVideoMidpoint"), this._emit("AdVideoThirdQuartile"), this._emit("AdVideoComplete"), this._emit("AdVideoCompleteAll"), this.stopAd())
                        : "complete" === this._pass && this._completeCounter < this._minViews && this._emit("AdError");
            }
            _insertIframe(e, t) {
                this._setVolume(), Fe({ category: "_insertIframe", message: JSON.stringify({ src: e, code: t }), level: "info" });
                let n = document.createElement("iframe");
                e && (n.src = e),
                    (n.width = this._width ? this._width + "px" : "100%"),
                    (n.height = this._height ? this._height + "px" : "100%"),
                    (n.frameborder = "0"),
                    (n.style.border = "0"),
                    (n.style.position = "absolute"),
                    (n.style.left = "0"),
                    (n.style.top = "0"),
                    this._slot.appendChild(n),
                e || n.contentWindow.document.write(t),
                    this._setPingInterval(),
                    (this._iframe = n);
            }
            _setPingInterval(e = !0) {
                this._pingInterval = setInterval(() => {
                    e && this._sendMessageToIframe("target");
                }, 50);
            }
            _sendMessageToIframe(e, t) {
                this._iframe &&
                this._iframe.contentWindow &&
                (Fe({ category: "MessageToIframe", message: JSON.stringify({ event: e, info: t }), level: "info" }),
                    this._iframe.contentWindow.postMessage({ target: "_ve_iframe", source: "_ve_vpaid", event: e, info: t, changedVPAID: !0 }, "*"));
            }
            _emit(e) {
                ["AdLoaded", "AdStarted", "AdStopped", "AdSkipped", "AdImpression", "AdVideoStart", "AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile", "AdVideoComplete", "AdError"].includes(e) &&
                this._emittedEvents.includes(e)
                    ? De(new Error(`Duplicated event: ${e}`), 0.01)
                    : (this._emittedEvents.push(e), e in this._playerEvents && this._isFunction(this._playerEvents[e]) && this._playerEvents[e]());
            }
            _addSentryAncestorOrigins() {
                try {
                    const e = location.ancestorOrigins || [];
                    Fe({ category: "ancestorOrigins", message: JSON.stringify({ ancestorOrigins: e }), level: "info" });
                } catch (e) {}
            }
            _setVolume() {
                this._adParameters.volume && ((this._generalVolume = this._adParameters.volume), (this._vpaidVolume = this._adParameters.volume), (this._playerVolume = this._adParameters.volume)),
                this._adParameters.vpaidVolume && (this._vpaidVolume = this._adParameters.vpaidVolume),
                this._adParameters.playerVolume && (this._playerVolume = this._adParameters.playerVolume),
                    this._setVPAIDVolume(),
                    this._setPlayerVolume();
            }
            _setPlayerVolume(e = this._playerVolume) {
                this._player = p.replace("volume: 0", `volume: ${e}`);
            }
            _setVPAIDVolume(e = this._vpaidVolume) {
                this._vpaidVolume = e;
            }
            _isFunction(e) {
                return typeof e == typeof Function;
            }
        }
        window.getVPAIDAd = () => new ze();
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o;
        });
        var r,
            i = n(4);
        !(function (e) {
            (e.PENDING = "PENDING"), (e.RESOLVED = "RESOLVED"), (e.REJECTED = "REJECTED");
        })(r || (r = {}));
        var o = (function () {
            function e(e) {
                var t = this;
                (this._state = r.PENDING),
                    (this._handlers = []),
                    (this._resolve = function (e) {
                        t._setResult(e, r.RESOLVED);
                    }),
                    (this._reject = function (e) {
                        t._setResult(e, r.REJECTED);
                    }),
                    (this._setResult = function (e, n) {
                        t._state === r.PENDING && (Object(i.j)(e) ? e.then(t._resolve, t._reject) : ((t._value = e), (t._state = n), t._executeHandlers()));
                    }),
                    (this._executeHandlers = function () {
                        t._state !== r.PENDING &&
                        (t._state === r.REJECTED
                            ? t._handlers.forEach(function (e) {
                                return e.onFail && e.onFail(t._value);
                            })
                            : t._handlers.forEach(function (e) {
                                return e.onSuccess && e.onSuccess(t._value);
                            }),
                            (t._handlers = []));
                    }),
                    (this._attachHandler = function (e) {
                        (t._handlers = t._handlers.concat(e)), t._executeHandlers();
                    });
                try {
                    e(this._resolve, this._reject);
                } catch (e) {
                    this._reject(e);
                }
            }
            return (
                (e.prototype.then = function (t, n) {
                    var r = this;
                    return new e(function (e, i) {
                        r._attachHandler({
                            onFail: function (t) {
                                if (n)
                                    try {
                                        return void e(n(t));
                                    } catch (e) {
                                        return void i(e);
                                    }
                                else i(t);
                            },
                            onSuccess: function (n) {
                                if (t)
                                    try {
                                        return void e(t(n));
                                    } catch (e) {
                                        return void i(e);
                                    }
                                else e(n);
                            },
                        });
                    });
                }),
                    (e.prototype.catch = function (e) {
                        return this.then(function (e) {
                            return e;
                        }, e);
                    }),
                    (e.prototype.toString = function () {
                        return "[object SyncPromise]";
                    }),
                    (e.resolve = function (t) {
                        return new e(function (e) {
                            e(t);
                        });
                    }),
                    (e.reject = function (t) {
                        return new e(function (e, n) {
                            n(t);
                        });
                    }),
                    e
            );
        })();
    },
    ,
    ,
    ,
    function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", function () {
                return p;
            });
            var r = n(0),
                i = n(2),
                o = n(11),
                s = n(8),
                a = 3,
                c = (function () {
                    function e(e, t, n) {
                        void 0 === t && (t = new s.a()), void 0 === n && (n = a), (this._version = n), (this._stack = []), this._stack.push({ client: e, scope: t });
                    }
                    return (
                        (e.prototype._invokeClient = function (e) {
                            for (var t, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
                            var o = this.getStackTop();
                            o && o.client && o.client[e] && (t = o.client)[e].apply(t, r.d(n, [o.scope]));
                        }),
                            (e.prototype.isOlderThan = function (e) {
                                return this._version < e;
                            }),
                            (e.prototype.bindClient = function (e) {
                                this.getStackTop().client = e;
                            }),
                            (e.prototype.pushScope = function () {
                                var e = this.getStack(),
                                    t = e.length > 0 ? e[e.length - 1].scope : void 0,
                                    n = s.a.clone(t);
                                return this.getStack().push({ client: this.getClient(), scope: n }), n;
                            }),
                            (e.prototype.popScope = function () {
                                return void 0 !== this.getStack().pop();
                            }),
                            (e.prototype.withScope = function (e) {
                                var t = this.pushScope();
                                try {
                                    e(t);
                                } finally {
                                    this.popScope();
                                }
                            }),
                            (e.prototype.getClient = function () {
                                return this.getStackTop().client;
                            }),
                            (e.prototype.getScope = function () {
                                return this.getStackTop().scope;
                            }),
                            (e.prototype.getStack = function () {
                                return this._stack;
                            }),
                            (e.prototype.getStackTop = function () {
                                return this._stack[this._stack.length - 1];
                            }),
                            (e.prototype.captureException = function (e, t) {
                                var n = (this._lastEventId = Object(i.g)()),
                                    o = t;
                                if (!t) {
                                    var s = void 0;
                                    try {
                                        throw new Error("Sentry syntheticException");
                                    } catch (e) {
                                        s = e;
                                    }
                                    o = { originalException: e, syntheticException: s };
                                }
                                return this._invokeClient("captureException", e, r.a({}, o, { event_id: n })), n;
                            }),
                            (e.prototype.captureMessage = function (e, t, n) {
                                var o = (this._lastEventId = Object(i.g)()),
                                    s = n;
                                if (!n) {
                                    var a = void 0;
                                    try {
                                        throw new Error(e);
                                    } catch (e) {
                                        a = e;
                                    }
                                    s = { originalException: e, syntheticException: a };
                                }
                                return this._invokeClient("captureMessage", e, t, r.a({}, s, { event_id: o })), o;
                            }),
                            (e.prototype.captureEvent = function (e, t) {
                                var n = (this._lastEventId = Object(i.g)());
                                return this._invokeClient("captureEvent", e, r.a({}, t, { event_id: n })), n;
                            }),
                            (e.prototype.lastEventId = function () {
                                return this._lastEventId;
                            }),
                            (e.prototype.addBreadcrumb = function (e, t) {
                                var n = this.getStackTop();
                                if (n.scope && n.client) {
                                    var o = (n.client.getOptions && n.client.getOptions()) || {},
                                        s = o.beforeBreadcrumb,
                                        a = void 0 === s ? null : s,
                                        c = o.maxBreadcrumbs,
                                        u = void 0 === c ? 30 : c;
                                    if (!(u <= 0)) {
                                        var l = new Date().getTime() / 1e3,
                                            p = r.a({ timestamp: l }, e),
                                            d = a
                                                ? Object(i.b)(function () {
                                                    return a(p, t);
                                                })
                                                : p;
                                        null !== d && n.scope.addBreadcrumb(d, Math.min(u, 100));
                                    }
                                }
                            }),
                            (e.prototype.setUser = function (e) {
                                var t = this.getStackTop();
                                t.scope && t.scope.setUser(e);
                            }),
                            (e.prototype.setTags = function (e) {
                                var t = this.getStackTop();
                                t.scope && t.scope.setTags(e);
                            }),
                            (e.prototype.setExtras = function (e) {
                                var t = this.getStackTop();
                                t.scope && t.scope.setExtras(e);
                            }),
                            (e.prototype.setTag = function (e, t) {
                                var n = this.getStackTop();
                                n.scope && n.scope.setTag(e, t);
                            }),
                            (e.prototype.setExtra = function (e, t) {
                                var n = this.getStackTop();
                                n.scope && n.scope.setExtra(e, t);
                            }),
                            (e.prototype.setContext = function (e, t) {
                                var n = this.getStackTop();
                                n.scope && n.scope.setContext(e, t);
                            }),
                            (e.prototype.configureScope = function (e) {
                                var t = this.getStackTop();
                                t.scope && t.client && e(t.scope);
                            }),
                            (e.prototype.run = function (e) {
                                var t = l(this);
                                try {
                                    e(this);
                                } finally {
                                    l(t);
                                }
                            }),
                            (e.prototype.getIntegration = function (e) {
                                var t = this.getClient();
                                if (!t) return null;
                                try {
                                    return t.getIntegration(e);
                                } catch (t) {
                                    return o.a.warn("Cannot retrieve integration " + e.id + " from the current Hub"), null;
                                }
                            }),
                            (e.prototype.traceHeaders = function () {
                                var e = this.getStackTop();
                                if (e.scope && e.client) {
                                    var t = e.scope.getSpan();
                                    if (t) return { "sentry-trace": t.toTraceparent() };
                                }
                                return {};
                            }),
                            e
                    );
                })();
            function u() {
                var e = Object(i.e)();
                return (e.__SENTRY__ = e.__SENTRY__ || { hub: void 0 }), e;
            }
            function l(e) {
                var t = u(),
                    n = f(t);
                return h(t, e), n;
            }
            function p() {
                var t = u();
                (d(t) && !f(t).isOlderThan(a)) || h(t, new c());
                try {
                    var n = Object(i.c)(e, "domain").active;
                    if (!n) return f(t);
                    if (!d(n) || f(n).isOlderThan(a)) {
                        var r = f(t).getStackTop();
                        h(n, new c(r.client, s.a.clone(r.scope)));
                    }
                    return f(n);
                } catch (e) {
                    return f(t);
                }
            }
            function d(e) {
                return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
            }
            function f(e) {
                return e && e.__SENTRY__ && e.__SENTRY__.hub ? e.__SENTRY__.hub : ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = new c()), e.__SENTRY__.hub);
            }
            function h(e, t) {
                return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = t), !0);
            }
        }.call(this, n(39)(e)));
    },
]);
