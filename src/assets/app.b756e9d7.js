(function(e) {
    function t(t) {
        for (var o, n, a = t[0], A = t[1], c = t[2], p = 0, m = []; p < a.length; p++) n = a[p], Object.prototype.hasOwnProperty.call(i, n) && i[n] && m.push(i[n][0]), i[n] = 0;
        for (o in A) Object.prototype.hasOwnProperty.call(A, o) && (e[o] = A[o]);
        l && l(t);
        while (m.length) m.shift()();
        return s.push.apply(s, c || []), r()
    }

    function r() {
        for (var e, t = 0; t < s.length; t++) {
            for (var r = s[t], o = !0, a = 1; a < r.length; a++) {
                var A = r[a];
                0 !== i[A] && (o = !1)
            }
            o && (s.splice(t--, 1), e = n(n.s = r[0]))
        }
        return e
    }
    var o = {},
        i = {
            app: 0
        },
        s = [];

    function n(t) {
        if (o[t]) return o[t].exports;
        var r = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = o, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/";
    var a = window["webpackJsonp"] = window["webpackJsonp"] || [],
        A = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var c = 0; c < a.length; c++) t(a[c]);
    var l = A;
    s.push([0, "chunk-vendors"]), r()
})({
    0: function(e, t, r) {
        e.exports = r("56d7")
    },
    "43b5": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "4ef9": function(e, t, r) {
        e.exports = {
            mainContent: "App_mainContent_12BYb",
            wave: "App_wave_3CtRm",
            card: "App_card_38zmH",
            cardTop: "App_cardTop_3hHIG",
            cardTopLogo: "App_cardTopLogo_2ho9K",
            cardTitle: "App_cardTitle_29nyq",
            cardTitleAmount: "App_cardTitleAmount_17QFR",
            cardBody: "App_cardBody_1tfYc",
            shopItem: "App_shopItem_3FgVU",
            shopItemImage: "App_shopItemImage_341iU",
            shopItemName: "App_shopItemName_1_FJR",
            shopItemDescription: "App_shopItemDescription_1EIVK",
            shopItemBottom: "App_shopItemBottom_3401_",
            shopItemPrice: "App_shopItemPrice_2SLiG",
            shopItemButton: "App_shopItemButton_23FO1",
            inactive: "App_inactive_19f0W",
            shopItemButtonCover: "App_shopItemButtonCover_1bH2R",
            shopItemButtonCoverCheckIcon: "App_shopItemButtonCoverCheckIcon_18IzJ",
            cartEmpty: "App_cartEmpty_xgWCN",
            cartEmptyText: "App_cartEmptyText_2mtqJ",
            cartItem: "App_cartItem_lfA9I",
            cartItemLeft: "App_cartItemLeft_1HqDk",
            cartItemRight: "App_cartItemRight_2LNcC",
            cartItemName: "App_cartItemName_3he6M",
            cartItemPrice: "App_cartItemPrice_R0sr2",
            cartItemActions: "App_cartItemActions_13kia",
            cartItemCount: "App_cartItemCount_1GCCN",
            cartItemCountNumber: "App_cartItemCountNumber_1Evq9",
            cartItemCountButton: "App_cartItemCountButton_Gr8VG",
            cartItemRemove: "App_cartItemRemove_1GiLR",
            cartItemImage: "App_cartItemImage_1rLvq",
            cartItemImageBlock: "App_cartItemImageBlock_wRE4E"
        }
    },
    "56d7": function(e, t, r) {
        "use strict";
        r.r(t);
        r("e260"), r("e6cf"), r("cca6"), r("a79d");
        var o = r("2b0e"),
            i = function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    class: e.$style.mainContent
                }, [o("div", {
                    class: e.$style.card
                }, [o("div", {
                    class: e.$style.cardTop
                }, [o("img", {
                    class: e.$style.cardTopLogo,
                    attrs: {
                        src: r("43b5")
                    }
                })]), o("div", {
                    class: e.$style.cardTitle
                }, [e._v("Our Products")]), o("div", {
                    class: e.$style.cardBody
                }, [o("div", {
                    class: e.$style.shopItems
                }, e._l(e.shopItems, (function(t) {
                    var r;
                    return o("div", {
                        class: e.$style.shopItem
                    }, [o("div", {
                        class: e.$style.shopItemImage,
                        style: {
                            backgroundColor: t.color
                        }
                    }, [o("img", {
                        attrs: {
                            src: t.image
                        }
                    })]), o("div", {
                        class: e.$style.shopItemName
                    }, [e._v(e._s(t.name))]), o("div", {
                        class: e.$style.shopItemDescription
                    }, [e._v(e._s(t.description))]), o("div", {
                        class: e.$style.shopItemBottom
                    }, [o("div", {
                        class: e.$style.shopItemPrice
                    }, [e._v(e._s(e._f("formatPrice")(t.price)))]), o("div", {
                        ref: "addButton" + t.id,
                        refInFor: !0,
                        class: [(r = {}, r[e.$style.inactive] = t.inCart, r), e.$style.shopItemButton],
                        on: {
                            click: function(r) {
                                return e.addToCart(t)
                            }
                        }
                    }, [o("transition", {
                        attrs: {
                            name: "button-text",
                            mode: "out-in"
                        }
                    }, [t.inCart ? o("div", {
                        class: e.$style.shopItemButtonCover
                    }, [o("div", {
                        class: e.$style.shopItemButtonCoverCheckIcon
                    })]) : o("p", [e._v("ADD TO CART")])])], 1)])])
                })), 0)])]), o("div", {
                    ref: "cartItems",
                    class: e.$style.card
                }, [o("div", {
                    class: e.$style.cardTop
                }, [o("img", {
                    class: e.$style.cardTopLogo,
                    attrs: {
                        src: r("43b5")
                    }
                })]), o("div", {
                    class: e.$style.cardTitle
                }, [e._v("Your cart"), o("span", {
                    class: e.$style.cardTitleAmount
                }, [e._v(e._s(e._f("formatPrice")(e.totalCartItemsPrice)))])]), o("div", {
                    class: e.$style.cardBody
                }, [o("transition", {
                    attrs: {
                        name: "no-content"
                    }
                }, [0 === e.cartItems.length ? o("div", {
                    class: e.$style.cartEmpty
                }, [o("p", {
                    class: e.$style.cartEmptyText
                }, [e._v("Your cart is empty.")])]) : e._e()]), o("div", {
                    class: e.$style.cartItems
                }, [o("transition-group", {
                    attrs: {
                        name: "cart-list",
                        tag: "div"
                    }
                }, e._l(e.cartItems, (function(t) {
                    return o("div", {
                        key: t.id,
                        class: e.$style.cartItem
                    }, [o("div", {
                        class: [e.$style.cartItemLeft, "cartItemLeft"]
                    }, [o("div", {
                        class: [e.$style.cartItemImage, "cartItemImage"],
                        style: {
                            backgroundColor: t.color
                        }
                    }, [o("div", {
                        class: e.$style.cartItemImageBlock
                    }, [o("img", {
                        attrs: {
                            src: t.image
                        }
                    })])])]), o("div", {
                        class: [e.$style.cartItemRight, "cartItemRight"]
                    }, [o("div", {
                        class: [e.$style.cartItemName, "cartItemName"]
                    }, [e._v(e._s(t.name))]), o("div", {
                        class: [e.$style.cartItemPrice, "cartItemPrice"]
                    }, [e._v(e._s(e._f("formatPrice")(t.price)))]), o("div", {
                        class: [e.$style.cartItemActions, "cartItemActions"]
                    }, [o("div", {
                        class: [e.$style.cartItemCount, "cartItemCount"]
                    }, [o("div", {
                        class: e.$style.cartItemCountButton,
                        on: {
                            click: function(r) {
                                return e.decrement(t)
                            }
                        }
                    }, [e._v("-")]), o("div", {
                        class: e.$style.cartItemCountNumber
                    }, [e._v(e._s(t.count))]), o("div", {
                        class: e.$style.cartItemCountButton,
                        on: {
                            click: function(r) {
                                return e.increment(t)
                            }
                        }
                    }, [e._v("+")])]), o("div", {
                        class: [e.$style.cartItemRemove, "cartItemRemove"],
                        on: {
                            click: function(r) {
                                return e.decrement(t, {
                                    toZero: !0
                                })
                            }
                        }
                    }, [o("img", {
                        class: e.$style.cartItemRemoveIcon,
                        attrs: {
                            src: r("c8e4")
                        }
                    })])])])])
                })), 0)], 1)], 1)])])
            },
            s = [],
            n = r("5530"),
            a = (r("d81d"), r("caad"), r("2532"), r("e9c4"), r("d3b7"), r("b680"), r("7db0"), r("c740"), r("a434"), r("cffa")),
            A = r("90d0"),
            c = {
                data: function() {
                    var e = JSON.parse(localStorage.getItem("cartItems")) || [],
                        t = e.map((function(e) {
                            return e.id
                        })),
                        r = A.shoes.map((function(e) {
                            return Object(n["a"])(Object(n["a"])({}, e), {}, {
                                inCart: t.includes(e.id)
                            })
                        }));
                    return {
                        shopItems: r,
                        cartItems: e
                    }
                },
                watch: {
                    cartItems: {
                        handler: function(e) {
                            localStorage.setItem("cartItems", JSON.stringify(e))
                        },
                        deep: !0
                    }
                },
                computed: {
                    totalCartItemsPrice: function() {
                        return this.cartItems.reduce((function(e, t) {
                            return e + (t.price || 0) * (t.count || 0)
                        }), 0)
                    }
                },
                filters: {
                    formatPrice: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return "$".concat(e.toFixed(2))
                    }
                },
                methods: {
                    addToCart: function(e) {
                        var t = this;
                        if (!e.inCart) {
                            e.inCart = !0;
                            var r = Object.assign({}, e, {
                                count: 1
                            });
                            this.cartItems.push(r), a["a"].to(this.$refs["addButton".concat(e.id)], {
                                duration: .2,
                                ease: "power4"
                            })
                        }
                        this.$nextTick((function() {
                            t.$refs.cartItems.scrollTop = t.$refs.cartItems.scrollHeight
                        }))
                    },
                    decrement: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                toZero: !1
                            },
                            r = t.toZero;
                        e.count = r ? 0 : e.count - 1;
                        var o = this.shopItems.find((function(t) {
                            return t.id === e.id
                        }));
                        this.$nextTick((function() {
                            if (0 === e.count) {
                                a["a"].to(this.$refs["addButton".concat(o.id)], {
                                    duration: .2,
                                    ease: "power4"
                                }), o.inCart = !1;
                                var t = this.cartItems.findIndex((function(t) {
                                    return t.id === e.id
                                }));
                                this.cartItems.splice(t, 1)
                            }
                        }))
                    },
                    increment: function(e) {
                        e.count++
                    }
                }
            },
            l = c,
            p = r("8d8d"),
            m = (r("5c64"), r("2877"));

        function d(e) {
            this["$style"] = p["default"].locals || p["default"]
        }
        var u = Object(m["a"])(l, i, s, !1, d, null, null),
            h = u.exports;
        o["a"].config.productionTip = !1, new o["a"]({
            render: function(e) {
                return e(h)
            }
        }).$mount("#app")
    },
    "5c64": function(e, t, r) {
        "use strict";
        r("d32a")
    },
    "8d8d": function(e, t, r) {
        "use strict";
        var o = r("4ef9"),
            i = r.n(o);
        r.d(t, "default", (function() {
            return i.a
        }))
    },
    "90d0": function(e) {
        e.exports = JSON.parse('{"shoes":[{"id":1,"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png","name":"Nike Air Zoom Pegasus 36","description":"The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.","price":108.97,"color":"#e1e7ed"},{"id":2,"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-shield-mens-running-shoe-24FBGb__1_-removebg-preview.png","name":"Nike Air Zoom Pegasus 36 Shield","description":"The Nike Air Zoom Pegasus 36 Shield gets updated to conquer wet routes. A water-repellent upper combines with an outsole that helps create grip on wet surfaces, letting you run in confidence despite the weather.","price":89.97,"color":"#4D317F"},{"id":3,"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/cruzrone-unisex-shoe-T2rRwS-removebg-preview.png","name":"Nike CruzrOne","description":"Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.","price":100.97,"color":"#E8D026"},{"id":4,"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/epic-react-flyknit-2-mens-running-shoe-2S0Cn1-removebg-preview.png","name":"Nike Epic React Flyknit 2","description":"The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper conforms to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.","price":89.97,"color":"#FD584A"},{"id":5,"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/odyssey-react-flyknit-2-mens-running-shoe-T3VG7N-removebg-preview.png","name":"Nike Odyssey React Flyknit 2","description":"The Nike Odyssey React Flyknit 2 provides a strategic combination of lightweight Flyknit construction and synthetic material for support. Underfoot, Nike React cushioning delivers a soft, springy ride for a route that begs to be crushed.","price":71.97,"color":"#D4D7D6"},{"id":6,"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-infinity-run-flyknit-mens-running-shoe-RQ484B__2_-removebg-preview.png","name":"Nike React Infinity Run Flyknit","description":"A pioneer in the running shoe frontier honors the original pioneer of running culture with the Nike React Infinity Run Flyknit. Blue Ribbon Track Club-inspired details pay homage to the haven that was created before running was even popular. This running shoe is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel.","price":160,"color":"#F2F5F4"},{"id":7,"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-miler-mens-running-shoe-DgF6nr-removebg-preview.png","name":"Nike React Miler","description":"The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel.","price":130,"color":"#22AFDC"},{"id":8,"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/renew-ride-mens-running-shoe-JkhdfR-removebg-preview.png","name":"Nike Renew Ride","description":"The Nike Renew Ride helps keep the committed runner moving with plush cushioning. Firm support at the outsole helps you maintain stability no matter the distance.","price":60.97,"color":"#B50320"},{"id":9,"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/vaporfly-4-flyknit-running-shoe-v7G3FB-removebg-preview.png","name":"Nike Vaporfly 4% Flyknit","description":"Built to meet the exacting needs of world-class marathoners, Nike Vaporfly 4% Flyknit is designed for record-breaking speed. The Flyknit upper delivers breathable support, while the responsive foam and full-length plate provide incredible energy return for all 26.2.","price":187.97,"color":"#3569A1"},{"id":10,"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/zoom-fly-3-premium-mens-running-shoe-XhzpPH-removebg-preview.png","name":"Nike Zoom Fly 3 Premium","description":"Inspired by the Vaporfly, the Nike Zoom Fly 3 Premium gives distance runners race-day comfort and durability. The power of a carbon fiber plate keeps you in the running mile after mile.","price":160,"color":"#54D4C9"}]}')
    },
    c8e4: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALISURBVHic7Zs9bxNBEIYfgyUKAhhQUhDRICEBCh0fgkhBNIT8gPwZ6Gig5y8QCUhH5AqE3EZJgQRKEDSpKEAQkTMdcijGRvi8Z+/e3eze4X2kKe40t/Pu+LRfN4bIdNNQbLsJ3ATOFWznC7AJ/C6syCMngC3gsCTb7LdZGx5SXucH9kBD6BGNRoGrNWlTLQEa7R5VaFMtAbXBZwLWkVnHxtZ9iZr6N6Bp6TcHXAOOW/qfz7i36un5X8A28NXSfywrQJfypzVtS4D7ZSRgpwKdyWsfJnXOZincxf7VrxoJcHKcg80g2ClFShg6ZTQyD2xQr3GgC7yi+EYs8t+TZ329gKwJfiLzbRU4Cywh/fmuGegpw/PssmYwS5aAfURTD3ikFegKo4PNe61gDrxjWFMPuGj7sMte4JLh3mWH57VYSF03cDg7cEmAabxQ2aM7UkjX1O8GfSRgHmgjM8YO4wfOFWC379umYguZVcyrrkm0U/4JMGvwm2N0tblh0b5Jk+222csbcCd1PYOsI9KYzhvuqij6Bx8JMO0kZyz91HehcRAMLSA0MQGhBYQmJiC0gNDEBIQWEJqYgNACQhMTEFpAaGICQgsITUxAaAGhiQnwEMP0+axr6af+6c1HAjqp6wQpo02zxWhi3moIykveU+FBfUGCfEq7N8Z3GSlrSbD/vl/oVNiFvAnQpvLH4pUmJsDBN2tEDlnHn1UBZppljLgkYC/j/i2HNspmMeP+nkawY8ABowPOa41gFjSQaTKt5wDRqsKaIeAh8Bjd/x+laQBPMrQ80wy8iJSgmAK/QWpzW4rxW8gndNMvPyiPua0YH4DnGcGrYGuK/f7LGeBjgM5Nsl3gtGK/h7gAfFbukIt96mvySgt4WVB4UesBL4BTyn0dy42+iEGxog/bR8ai60XFlzl1NZFiyllknNDgB/ANKbaq1V9pI1XlD82w8ru3YIVHAAAAAElFTkSuQmCC"
    },
    d32a: function(e, t, r) {}
});
//# sourceMappingURL=app.b756e9d7.js.map