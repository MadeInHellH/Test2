(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 183 ], {
    "2dzt": function(e, t, o) {
        "use strict";
        var n, a;
        o.r(t), o.d(t, "ACTIONS", (function() {
            return i;
        }));
        var i = {
            USER_CLICKED_OPEN_APPS_LINK: "USER_CLICKED_OPEN_APPS_LINK",
            USER_CLICKED_CLOSE_APPS_MODAL: "USER_CLICKED_CLOSE_APPS_MODAL"
        }, r = "TOGGLE_APPS_MODAL", s = {
            namespaced: !0,
            state: function() {
                return {
                    isAppModalOpen: !1,
                    isAppModalEnabled: !0
                };
            },
            actions: (n = {}, n[i.USER_CLICKED_OPEN_APPS_LINK] = function(e) {
                var t = e.state, o = e.commit;
                t.isAppModalEnabled && o(r);
            }, n[i.USER_CLICKED_CLOSE_APPS_MODAL] = function(e) {
                var t = e.state, o = e.commit;
                t.isAppModalEnabled && o(r);
            }, n),
            mutations: (a = {}, a[r] = function(e) {
                e.isAppModalOpen = !e.isAppModalOpen;
            }, a)
        };
        t.default = s;
    },
    "6w2t": function(e, t, o) {
        (t = e.exports = o("RDo7")(!1)).push([ e.i, ".InfinityFooter-footerInfinity-2xv {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-color: #fff;\n  border-top: 1px solid #e1e1e1;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  height: 33px;\n  left: 0;\n  position: fixed;\n  width: 100%;\n  z-index: 2;\n}\n@media (max-width: 1024px) {\n.InfinityFooter-footerInfinity-2xv {\n      display: none;\n}\n}\n.InfinityFooter-footerInfinity-2xv .focus-visible {\n    outline: 1px solid #0057ff;\n    outline-offset: 2px;\n}\n.InfinityFooter-footerInfinity-2xv .InfinityFooter-tooltipMore-2Yo {\n    width: 195px;\n}\n.InfinityFooter-footerInfinity-2xv .InfinityFooter-tooltipMore-2Yo .InfinityFooter-footerSelectorItem-uTJ {\n      padding-right: 7px;\n}\n.InfinityFooter-footerSelector-U7S {\n  font-family: inherit;\n  font-size: 11px;\n  font-weight: bold;\n  color: #696969;\n  cursor: pointer;\n  font-weight: bold;\n  margin-bottom: 0;\n  margin-top: -7.5px;\n  padding: calc(7.5px * 2) 25px 7.5px;\n  position: relative;\n  text-align: center;\n}\n@media (max-width: 1024px) {\n.InfinityFooter-footerSelector-U7S {\n      display: none;\n}\n}\n.InfinityFooter-footerSelector-U7S::before {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    border-right: 1px #afafaf solid;\n    content: '';\n    height: 15px;\n    margin-top: 5px;\n    position: absolute;\n    right: 0;\n    width: 1px;\n}\n.InfinityFooter-footerSelector-U7S::after {\n    content: '';\n    display: inline-block;\n    left: 3px;\n    position: relative;\n    top: -2px;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n    border-top: 3px solid #696969;\n    height: 0;\n    width: 0;\n}\n.InfinityFooter-footerSelector-U7S:hover::after {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.InfinityFooter-footerSelectorItem-uTJ {\n  font-family: inherit;\n  font-size: 11px;\n  font-weight: bold;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #696969;\n  display: -webkit-box;\n  display: flex;\n}\n.InfinityFooter-footerSelectorItem-uTJ.InfinityFooter-selected-l2V {\n    background: #0057ff;\n    color: #fff;\n}\n.InfinityFooter-footerSelectorItem-uTJ:hover {\n    background: #0057ff;\n    color: #fff;\n}\n.InfinityFooter-footerSelectorLinks-2hX {\n  color: inherit;\n  display: -webkit-box;\n  display: flex;\n  padding: 6px 20px;\n  width: 100%;\n}\n.InfinityFooter-footerSelectorLinks-2hX:hover {\n    text-decoration: none;\n}\n.InfinityFooter-footerLinks-4ab {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  height: 20px;\n  list-style: none;\n  padding-left: 20px;\n}\n.InfinityFooter-skipContent-37S {\n  color: #fff;\n  font-size: 11px;\n  font-weight: bold;\n  left: -100%;\n  padding: 0 10px;\n  position: absolute;\n  text-decoration: none;\n  text-transform: uppercase;\n  top: 2px;\n}\n.InfinityFooter-skipContent-37S.focus-visible {\n    color: #0057ff;\n    left: 16px;\n    outline: 1px solid #0057ff;\n    outline-offset: 2px;\n}\n.InfinityFooter-footerLink-2xU {\n  font-family: inherit;\n  font-size: 11px;\n  font-weight: bold;\n  color: #696969;\n  margin-right: 10px;\n}\n.InfinityFooter-footerLink-2xU:hover {\n    color: #0057ff;\n    text-decoration: none;\n}\n.InfinityFooter-tooltipContainer-3-B {\n  display: block;\n}\n.InfinityFooter-adobeLogo-2ZO {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  margin-right: 25px;\n  position: fixed;\n  right: 0;\n}\n.InfinityFooter-adobeLogo-2ZO .InfinityFooter-icon-30G {\n  position: relative;\n  top: 2px;\n  width: 60px;\n}\n.InfinityFooter-adobeLogo-2ZO:hover .InfinityFooter-icon-30G {\n  fill: #707070;\n}\n", "" ]), 
        t.locals = {
            footerInfinity: "InfinityFooter-footerInfinity-2xv",
            tooltipMore: "InfinityFooter-tooltipMore-2Yo",
            footerSelectorItem: "InfinityFooter-footerSelectorItem-uTJ",
            footerSelector: "InfinityFooter-footerSelector-U7S",
            selected: "InfinityFooter-selected-l2V",
            footerSelectorLinks: "InfinityFooter-footerSelectorLinks-2hX",
            footerLinks: "InfinityFooter-footerLinks-4ab",
            skipContent: "InfinityFooter-skipContent-37S",
            footerLink: "InfinityFooter-footerLink-2xU",
            tooltipContainer: "InfinityFooter-tooltipContainer-3-B",
            adobeLogo: "InfinityFooter-adobeLogo-2ZO",
            icon: "InfinityFooter-icon-30G"
        };
    },
    BblU: function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("D57K"), a = o("mGku"), i = o("NnMW"), r = o("nOR9"), s = o("rF8O"), l = o("2dzt"), c = o("E8ap"), p = o("BHX3"), f = [ {
            key: "footer_link_careers",
            url: c.URL_CAREERS,
            label: p.default.translate("footer_link_careers", "Careers at Behance"),
            e2eKey: "e2e-FooterInfinity-more-link-careers",
            text: "Careers at Behance"
        }, {
            key: "footer_link_portfolio",
            url: "https://portfolio.adobe.com/?promoid=ZKD5FJ7P&mv=other",
            label: p.default.translate("footer_link_portfolio", "Adobe Portfolio"),
            e2eKey: "e2e-FooterInfinity-more-link-portfolio",
            text: "Adobe Portfolio"
        }, {
            key: "footer_link_blog",
            url: c.URL_BEHANCE_BLOG,
            label: p.default.translate("footer_link_blog", "Blog"),
            e2eKey: "e2e-FooterInfinity-more-link-blog",
            text: "Blog"
        }, {
            key: "footer_link_ccTips",
            url: c.URL_NNU,
            label: p.default.translate("footer_link_ccTips", "Creative Career Tips"),
            e2eKey: "e2e-FooterInfinity-more-link-career-tips",
            text: "Creative Career Tips"
        }, {
            key: "footer_link_downloadapp",
            url: c.URL_APPS,
            label: p.default.translate("footer_link_downloadapp", "Download the App"),
            e2eKey: "e2e-FooterInfinity-more-link-app",
            text: "Download the App"
        } ], d = [ {
            label: p.default.translate("footer_terms", "TOU"),
            url: c.URL_TERMS,
            text: "TOU",
            key: "footer_terms",
            e2eKey: "e2e-FooterInfinity-link-terms"
        }, {
            label: p.default.translate("footer_privacy", "Privacy"),
            url: c.URL_PRIVACY,
            text: "Privacy",
            key: "footer_privacy",
            e2eKey: "e2e-FooterInfinity-link-privacy"
        }, {
            label: p.default.translate("footer_community", "Community"),
            url: c.URL_COMMUNITY_GUIDELINES,
            text: "Community",
            key: "footer_community",
            e2eKey: "e2e-FooterInfinity-link-community"
        }, {
            label: p.default.translate("footer_faq", "Help"),
            url: c.URL_NETWORK_SUPPORT,
            text: "Help",
            key: "footer_faq",
            e2eKey: "e2e-FooterInfinity-link-help"
        } ], u = o("43bc"), y = o("k8DD"), g = o("nE2t"), m = o("hRZA"), v = o("Ta0x"), b = o("tLj1"), h = o("XobZ"), _ = a.default.extend({
            components: {
                Tooltip: s.a,
                DownloadAppModal: v.a,
                AdobeLockup2020: y.a
            },
            props: {
                isInFocus: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    footer: null,
                    LOCALES: c.LOCALES,
                    FOOTER_MORE_LINKS: f,
                    FOOTER_LINKS: d,
                    URL_ADOBE_CREATIVE_CLOUD_HOME: c.URL_ADOBE_CREATIVE_CLOUD_HOME,
                    downloadAppOpen: !1
                };
            },
            beforeCreate: function() {
                this.$store.registerModule("footer", l.default, {
                    preserveState: !!this.$store.state.footer
                }), this.$store.registerModule("downloadAppModal", u.b);
            },
            watch: {
                isInFocus: function(e) {
                    e ? this.$refs.root.focus() : this.$refs.root.blur();
                }
            },
            methods: Object(n.__assign)(Object(n.__assign)({
                languageSelectChanged: function(e) {
                    var t = e;
                    h.default.setCookie(m.COOKIE.LANGUAGE_SETTING, t, {
                        expires: 365
                    }), b.default.custom("localization", "Language changed by user", {
                        locale: t
                    }), g.default.reloadLocation();
                }
            }, Object(r.mapActions)("downloadAppModal", {
                sendSMS: u.a.SEND_SMS_ACTION,
                resetSMSStatus: u.a.RESET_SMS_SENT_STATUS_ACTION
            })), {
                closeDownloadModal: function() {
                    this.downloadAppOpen = !1, b.default.custom("footer", "Download app modal closed by user");
                },
                openDownloadModal: function() {
                    this.downloadAppOpen = !0, b.default.custom("footer", "Download app modal clicked by user");
                }
            }),
            computed: Object(n.__assign)(Object(n.__assign)(Object(n.__assign)(Object(n.__assign)({}, Object(r.mapState)("user", {
                isLoggedIn: function(e) {
                    return Boolean(e.loggedInUser);
                }
            })), Object(r.mapState)({
                sendSMSStatusCode: function(e) {
                    return e.downloadAppModal.sendSMSStatusCode;
                }
            })), Object(r.mapState)("translation", {
                locale: function(e) {
                    return e.localization.LOCALE;
                }
            })), {
                currentLocale: function() {
                    var e = this, t = c.LOCALES.find((function(t) {
                        return t.code === e.locale;
                    }));
                    return t || c.LOCALES[0];
                },
                beforeDestroy: function() {
                    this.$store.unregisterModule("footer"), this.$store.unregisterModule("downloadAppModal");
                }
            })
        }), k = o("Xe1u"), x = o("K+aO");
        var C = Object(x.default)(_, (function() {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("div", {
                ref: "root",
                class: [ e.$style.footerInfinity, "js-footer", "InfinityFooter__global-selector" ],
                attrs: {
                    tabindex: "0"
                }
            }, [ o("div", [ o("a", {
                class: e.$style.skipContent,
                attrs: {
                    tabindex: "0"
                },
                on: {
                    keypress: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.$emit("skipToMainContent");
                    }
                }
            }, [ e._v(e._s(e.$translate("footer_jump_to_top", "Jump to Main Content"))) ]) ]), o("div", {
                class: e.$style.footerItems,
                attrs: {
                    tabindex: "0"
                }
            }, [ o("Tooltip", {
                class: e.$style.tooltipWrapper,
                attrs: {
                    position: "top",
                    alignment: "left",
                    alignmentOffset: 20,
                    horizontalPadding: 0,
                    toggleMethod: "hover",
                    isOpen: !1
                }
            }, [ o("div", {
                class: [ e.$style.footerSelector, e.$style.footerSelectorMore, "qa-more-link-container", "e2e-FooterInfinity-link-container" ]
            }, [ e._v(" " + e._s(e.$translate("footer_more_behance", "More Behance")) + " ") ]), o("div", {
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ o("ul", {
                class: [ e.$style.tooltipMore ]
            }, e._l(e.FOOTER_MORE_LINKS, (function(t) {
                return o("li", {
                    key: t.key,
                    class: e.$style.footerSelectorItem
                }, [ "footer_link_downloadapp" === t.key ? o("a", {
                    class: [ e.$style.footerSelectorLinks, "e2e-InfitiyFooter-footerSelectorItem" ],
                    attrs: {
                        "aria-label": t.key,
                        "aria-haspopup": "true"
                    },
                    on: {
                        click: e.openDownloadModal
                    }
                }, [ e._v(" " + e._s(e.$translate(t.key, t.text)) + " ") ]) : o("a", {
                    class: [ e.$style.footerSelectorLinks, t.e2eKey, "e2e-InfitiyFooter-footerSelectorItems" ],
                    attrs: {
                        href: t.url,
                        target: "_blank",
                        "aria-label": t.key
                    }
                }, [ e._v(e._s(e.$translate(t.key, t.text)) + " ") ]) ]);
            })), 0) ]) ]) ], 1), o("div", {
                class: e.$style.footerItems
            }, [ o("Tooltip", {
                class: e.$style.tooltipWrapper,
                attrs: {
                    position: "top",
                    alignment: "center",
                    toggleMethod: "hover",
                    horizontalPadding: 0,
                    isOpen: !1
                }
            }, [ o("p", {
                class: [ e.$style.footerSelector, "qa-language-selector", "e2e-FooterInfinity-language-selector" ]
            }, [ e._v(" " + e._s(e.currentLocale.label) + " ") ]), o("div", {
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ o("ul", {
                class: e.$style.tooltipContainer
            }, e._l(e.LOCALES, (function(t) {
                var n;
                return o("li", {
                    key: t.code,
                    class: [ e.$style.footerSelectorItem, (n = {}, n[e.$style.selected] = t.code === e.currentLocale.code, 
                    n) ]
                }, [ o("a", {
                    class: [ e.$style.footerSelectorLinks, "e2e-InfinityFooter-footerSelectorLinks-" + t.code ],
                    attrs: {
                        href: "",
                        "aria-label": t.code,
                        "data-language-locale": t.code,
                        "aria-labelledby": t.code
                    },
                    on: {
                        click: function(o) {
                            return e.languageSelectChanged(t.code);
                        },
                        keypress: function(o) {
                            return !o.type.indexOf("key") && e._k(o.keyCode, "enter", 13, o.key, "Enter") ? null : e.languageSelectChanged(t.code);
                        }
                    }
                }, [ e._v(e._s(t.label) + " ") ]) ]);
            })), 0) ]) ]) ], 1), o("div", {
                class: e.$style.footerItems
            }, [ o("ul", {
                class: e.$style.footerLinks
            }, [ e._l(e.FOOTER_LINKS, (function(t) {
                return o("li", {
                    key: t.label
                }, [ o("a", {
                    class: [ e.$style.footerLink, t.e2eKey ],
                    attrs: {
                        "aria-label": t.key,
                        href: t.url,
                        target: "_blank"
                    }
                }, [ e._v(e._s(e.$translate(t.key, t.text))) ]) ]);
            })), o("li", {
                key: "AdChoices"
            }, [ o("a", {
                class: [ e.$style.footerLink, "js-privacy-personalize" ],
                attrs: {
                    "aria-label": "AdChoices",
                    "aria-haspopup": "true",
                    href: "javascript:void(0)"
                }
            }) ]) ], 2) ]), o("div", {
                class: e.$style.adobeLogo
            }, [ o("a", {
                attrs: {
                    href: e.URL_ADOBE_CREATIVE_CLOUD_HOME,
                    target: "_blank",
                    title: "Adobe Creative Cloud",
                    "aria-label": "Adobe Creative Cloud"
                }
            }, [ o("AdobeLockup2020", {
                class: e.$style.icon
            }) ], 1) ]), o("portal", {
                attrs: {
                    "target-el": ".js-vue-apps-modal-portal"
                }
            }, [ o("DownloadAppModal", {
                attrs: {
                    showModal: e.downloadAppOpen,
                    isLoggedIn: e.isLoggedIn
                },
                on: {
                    closeModal: e.closeDownloadModal,
                    appLinkRequested: e.sendSMS,
                    smsSuccessMessageRead: e.resetSMSStatus
                }
            }) ], 1) ], 1);
        }), [], !1, (function(e) {
            this.$style = k.default.locals || k.default;
        }), null, null).exports;
        o("1t7P"), o("LW0h"), o("jwue"), o("jQ3i"), o("daRM"), o("FtHn"), o("+KXO"), o("x4t0"), 
        o("+oxZ");
        function S(e, t) {
            var o = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), o.push.apply(o, n);
            }
            return o;
        }
        function I(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e;
        }
        var O = {
            components: {
                CloseIcon: o("LSlr").default
            },
            data: function() {
                return {
                    canShowMessage: !1,
                    analyticsChannel: "community_message_banner",
                    maxURL: "https://max.adobe.com",
                    liveURL: "https://www.behance.net/adobelive",
                    voteUrl: "https://www.vote.org",
                    ccPlanUrl: "https://www.adobe.com/creativecloud/plans.html?promoid=HCS3XL4S&mv=other"
                };
            },
            computed: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(o), !0).forEach((function(t) {
                        I(e, t, o[t]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : S(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                    }));
                }
                return e;
            }({}, Object(r.mapState)([ "gates", "user" ]), {
                messageBannerCookie: function() {
                    return this.gates.message_banner ? m.COOKIE.MAX_BANNER : this.gates.vote_banner ? m.COOKIE.VOTE_BANNER : this.gates.max_banner ? m.COOKIE.MAX_BANNER : void 0;
                },
                isUSTimezone: function() {
                    return p.default.getTimeZone().includes("America");
                },
                canShowCCPromo: function() {
                    return this.gates.message_banner && (!this.user.loggedInUser || !this.user.hasPaidCCPlan);
                },
                hasBannerSet: function() {
                    return this.canShowCCPromo || this.gates.max_banner || this.gates.vote_banner && this.isUSTimezone;
                }
            }),
            mounted: function() {
                this.canShowMessage = !h.default.getCookie(this.messageBannerCookie);
            },
            watch: {
                canShowMessage: function(e) {
                    e && this.hasBannerSet ? document.body.classList.add("has-message") : document.body.classList.remove("has-message");
                }
            },
            methods: {
                closeMessage: function() {
                    this.canShowMessage = !1, h.default.setCookie(this.messageBannerCookie, "true", {
                        expires: 14
                    });
                },
                trackLinkClick: function(e) {
                    b.default.custom(this.analyticsChannel, "link clicked", {
                        link: e
                    });
                }
            }
        }, L = o("Ub+Z");
        var w = Object(x.default)(O, (function() {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return e.canShowMessage && e.hasBannerSet ? o("div", {
                class: e.$style.communitySupport
            }, [ e.gates.message_banner ? o("span", [ e._v(" " + e._s(e.$translate("community-black-friday-message-banner", "Black Friday Special: Up to 25% Off Creative Cloud through Nov. 27")) + " "), o("a", {
                attrs: {
                    href: e.ccPlanUrl,
                    target: "_blank"
                },
                on: {
                    click: function(t) {
                        return e.trackLinkClick(e.ccPlanUrl);
                    }
                }
            }, [ e._v(e._s(e.$translate("community-black-friday-buy-now", "Buy now"))) ]) ]) : e._e(), e.gates.vote_banner && !e.gates.max_banner ? o("span", {
                domProps: {
                    innerHTML: e._s(e.$translate("community-vote-message-banner", "It's Election Day! <a href='{voteUrl}' target='_blank' class='link'>Register to vote</a> for the 2020 US Election. Learn more at <a href='{voteUrl}' target='_blank' class='link'>vote.org</a>.", {
                        voteUrl: this.voteUrl
                    }))
                }
            }) : e._e(), e.gates.max_banner ? o("span", [ e._v(" " + e._s(e.$translate("community-max-message-banner", "Join the livestream for Adobe Max, our annual creativity conference! Tune in with us this week at")) + " "), o("a", {
                attrs: {
                    href: e.maxURL,
                    target: "_blank"
                },
                on: {
                    click: function(t) {
                        return e.trackLinkClick(e.maxURL);
                    }
                }
            }, [ e._v("Adobe Max") ]), e._v(" " + e._s(e.$translate("max_banner_or", "or ")) + " "), o("a", {
                attrs: {
                    href: e.liveURL,
                    target: "_blank"
                },
                on: {
                    click: function(t) {
                        return e.trackLinkClick(e.liveURL);
                    }
                }
            }, [ e._v("Adobe Live") ]), e._v(". ") ]) : e._e(), o("span", {
                class: e.$style.close,
                attrs: {
                    tabindex: "0"
                },
                on: {
                    click: e.closeMessage,
                    keypress: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.closeMessage(t);
                    }
                }
            }, [ o("CloseIcon", {
                class: e.$style.icon
            }) ], 1) ]) : e._e();
        }), [], !1, (function(e) {
            this.$style = L.default.locals || L.default;
        }), null, null).exports, M = a.default.extend({
            components: {
                PrimaryNav: i.a,
                InfinityFooter: C,
                MessageBanner: w
            },
            data: function() {
                return {
                    footerInFocus: !1
                };
            },
            computed: Object(n.__assign)({}, Object(r.mapState)([ "config" ])),
            methods: {
                toggleFooterFocus: function() {
                    this.footerInFocus = !this.footerInFocus;
                },
                handleContentFocus: function() {
                    this.$refs.content.focus();
                }
            }
        }), F = Object(x.default)(M, (function() {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("div", [ o("MessageBanner"), e.config.IFRAME ? e._e() : o("PrimaryNav", {
                on: {
                    skipToMainContent: e.handleContentFocus,
                    skipToFooter: e.toggleFooterFocus
                }
            }), o("div", {
                staticClass: "slide-panel js-top-panel",
                attrs: {
                    id: "top-panel"
                }
            }, [ o("div", {
                ref: "content",
                staticClass: "js-site-content site-content e2e-site-content",
                attrs: {
                    tabindex: "0",
                    id: "site-content"
                }
            }, [ o("router-view") ], 1), o("InfinityFooter", {
                attrs: {
                    isInFocus: e.footerInFocus
                },
                on: {
                    skipToMainContent: e.handleContentFocus
                }
            }) ], 1), o("div", {
                staticClass: "vue-portal-target js-vue-overlay-portal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-image-module-overlay-portal vue-image-module-overlay-portal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-apps-modal-portal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-add-story-modal-portal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-error-portal"
            }), o("div", {
                staticClass: "vue-portal-target js-story-modal-portal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-mobile-app-upsell"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-popup"
            }), o("div", {
                staticClass: "js-vue-project-view-mount"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-livestream-killswitch-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-livestream-report-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-livestream-share-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-report-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-share-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-moodboard-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-moodboard-recommendations-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-notif"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-profile-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-version-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-preview-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-publishing-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-advanced-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-crop-dialog"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-navigation-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-creative-fields"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-copyright-modal"
            }) ], 1);
        }), [], !1, null, null, null);
        t.default = F.exports;
    },
    HulZ: function(e, t, o) {
        (t = e.exports = o("RDo7")(!1)).push([ e.i, ".MessageBanner-communitySupport-275 {\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #fff;\n  border-bottom: 1px solid #e1e1e1;\n  display: -webkit-box;\n  display: flex;\n  font-size: 13px;\n  font-weight: bold;\n  height: 35px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 7;\n}\n@media (max-width: 1024px) {\n.MessageBanner-communitySupport-275 {\n      display: none;\n}\n}\n.MessageBanner-communitySupport-275 .focus-visible {\n    outline: 2px solid #0057ff;\n}\n.MessageBanner-communitySupport-275 .MessageBanner-close-1Oy {\n    cursor: pointer;\n    position: absolute;\n    right: 8px;\n}\n.MessageBanner-communitySupport-275 .MessageBanner-icon-3nR {\n    display: block;\n    fill: #707070;\n    height: 8.6px;\n    width: 8.6px;\n}\n.MessageBanner-communitySupport-275 .MessageBanner-icon-3nR:hover {\n      fill: #191919;\n}\n@media (min-width: 1025px) {\n.has-message #top-panel {\n    padding-top: 92px;\n}\n}\n@media (min-width: 1025px) {\n.has-message .rf-primary-nav.rf-primary-nav--main {\n    top: 35px;\n}\n}\n@media (min-width: 1025px) and (max-width: 1080px) {\n.has-message .rf-primary-nav--mobile {\n    top: 35px;\n}\n}\n", "" ]), 
        t.locals = {
            communitySupport: "MessageBanner-communitySupport-275",
            close: "MessageBanner-close-1Oy",
            icon: "MessageBanner-icon-3nR"
        };
    },
    O1Jh: function(e, t, o) {
        var n = o("6w2t");
        "string" == typeof n && (n = [ [ e.i, n, "" ] ]), n.locals && (e.exports = n.locals);
        (0, o("DtNa").default)("6f19714f", n, !0, {});
    },
    Qhpi: function(e, t, o) {
        var n = o("HulZ");
        "string" == typeof n && (n = [ [ e.i, n, "" ] ]), n.locals && (e.exports = n.locals);
        (0, o("DtNa").default)("0c7fc80d", n, !0, {});
    },
    "Ub+Z": function(e, t, o) {
        "use strict";
        var n = o("Qhpi"), a = o.n(n);
        t.default = a.a;
    },
    Xe1u: function(e, t, o) {
        "use strict";
        var n = o("O1Jh"), a = o.n(n);
        t.default = a.a;
    }
} ]);
//# sourceMappingURL=app.183.5885e77116dc07950bc5.js.map