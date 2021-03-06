(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 33 ], {
    "/dXS": function(e, n, t) {
        var o = t("F4Ef");
        "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
        (0, t("DtNa").default)("6c5a47e4", o, !0, {});
    },
    "20Oh": function(e, n, t) {
        "use strict";
        var o = t("YWVf"), r = t.n(o), a = t("mGku"), i = t("wnPb"), l = a.default.extend({
            name: "TextInput",
            components: {
                BorderAndLabelManager: i.a
            },
            data: function() {
                return {
                    localValue: this.value,
                    isFocused: !1
                };
            },
            props: {
                type: {
                    type: String,
                    default: "text",
                    validator: function(e) {
                        return /^(text|number|email|password|search|url|tel)$/.test(e);
                    }
                },
                name: {
                    type: String
                },
                label: {
                    type: String
                },
                placeholder: {
                    type: String
                },
                placeholderStyle: {
                    type: String,
                    default: "dark",
                    validator: function(e) {
                        return "dark" === e || "light" === e;
                    }
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                standalone: {
                    type: Boolean
                },
                readonly: {
                    type: Boolean,
                    default: !1
                },
                required: {
                    type: Boolean,
                    default: !1
                },
                autocomplete: {
                    type: String,
                    default: "off"
                },
                autofocus: {
                    type: Boolean,
                    default: !1
                },
                maxlength: {
                    type: Number,
                    default: -1
                },
                minLength: {
                    type: Number,
                    default: 3
                },
                shimWidth: {
                    type: Number
                },
                errorMessage: {
                    type: String
                },
                errorLayout: {
                    type: String,
                    default: "under",
                    validator: function(e) {
                        return "under" === e || "over" === e;
                    }
                },
                value: {
                    type: [ String, Number ],
                    default: ""
                },
                isDark: {
                    type: Boolean,
                    default: !1
                },
                isErrorMessageFixed: {
                    type: Boolean,
                    default: !1
                },
                shouldFocus: {
                    type: Boolean
                },
                isForProjectEditor: {
                    type: Boolean,
                    default: !1
                },
                hasNewLabelStyle: Boolean
            },
            computed: {
                hasError: function() {
                    return Boolean(this.errorMessage);
                },
                unlabeled: function() {
                    return !this.label;
                },
                shimPadding: function() {
                    return !!this.shimWidth && String(this.shimWidth + 5) + "px";
                }
            },
            mounted: function() {
                this.isFocused = document.activeElement === this.$refs.input;
            },
            watch: {
                shouldFocus: function(e) {
                    this.autofocus && (e ? this.$refs.input.focus() : this.$refs.input.blur());
                },
                value: function(e) {
                    this.localValue = e;
                }
            },
            methods: {
                hasHtml: function(e) {
                    return r()(e, {
                        allowedTags: []
                    }) !== e;
                },
                hasClientError: function() {
                    var e = this.$refs.input.value;
                    return "" === e ? "isEmpty" : this.hasHtml(e) ? "hasHtml" : -1 !== this.minLength && e.length < this.minLength ? "tooShort" : -1 !== this.maxlength && e.length > this.maxlength && "tooLong";
                },
                handleKeyupEnter: function() {
                    var e = this.hasClientError();
                    e ? this.$emit("hasError", e) : this.$emit("enter", this.$refs.input.value);
                },
                focus: function() {
                    this.$refs.input.focus();
                },
                handleInput: function(e) {
                    this.$emit("input", e.target.value), this.localValue = e.target.value;
                },
                handleBlur: function(e) {
                    this.$emit("blur", e), this.isFocused = !1;
                }
            }
        }), s = t("yfgW"), d = t("K+aO");
        var p = Object(d.default)(l, (function() {
            var e, n, t, o, r = this, a = r.$createElement, i = r._self._c || a;
            return i("div", {
                ref: "root",
                class: [ r.$style.textInput, (e = {}, e[r.$style.error] = r.hasError, e[r.$style.errorOver] = "over" === r.errorLayout, 
                e[r.$style.textInputWithSpace] = !r.standalone, e) ]
            }, [ i("label", {
                ref: "label",
                class: r.$style.label
            }, [ !r.hasNewLabelStyle && r.label ? [ r._v(" " + r._s(r.label)) ] : r._e(), i("input", {
                ref: "input",
                class: [ r.$style.input, (n = {}, n[r.$style.dark] = r.isDark, n[r.$style.unlabeled] = r.unlabeled, 
                n[r.$style.disabled] = r.disabled, n[r.$style.inputWithSpace] = !r.standalone, n[r.$style.placeholderLight] = "light" === r.placeholderStyle, 
                n[r.$style.forProjectEditor] = r.isForProjectEditor, n[r.$style.withNewLabelStyle] = r.hasNewLabelStyle, 
                n), "e2e-TextInput-input" ],
                style: {
                    "padding-left": r.shimPadding
                },
                attrs: {
                    type: r.type,
                    name: r.name,
                    placeholder: r.hasNewLabelStyle ? void 0 : r.placeholder,
                    disabled: r.disabled,
                    required: r.required,
                    maxlength: r.maxlength,
                    autocomplete: r.autocomplete,
                    readonly: r.readonly,
                    autofocus: r.autofocus
                },
                domProps: {
                    value: r.localValue
                },
                on: {
                    input: r.handleInput,
                    blur: r.handleBlur,
                    focus: function(e) {
                        r.isFocused = !0;
                    },
                    keyup: function(e) {
                        return !e.type.indexOf("key") && r._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : r.handleKeyupEnter(e);
                    }
                }
            }), r.hasNewLabelStyle && r.label ? i("BorderAndLabelManager", {
                class: [ r.$style.borderManager, (t = {}, t[r.$style.unlabeled] = r.unlabeled, t) ],
                attrs: {
                    label: r.label,
                    isActive: r.isFocused,
                    shouldShowPlaceholder: 0 === r.localValue.length
                }
            }) : r._e() ], 2), r.hasError ? i("p", {
                ref: "errorMessage",
                class: [ r.$style.errorMessage, (o = {}, o[r.$style.fixed] = r.isErrorMessageFixed, 
                o) ]
            }, [ r._v(r._s(r.errorMessage)) ]) : r._e() ]);
        }), [], !1, (function(e) {
            this.$style = s.default.locals || s.default;
        }), null, null);
        n.a = p.exports;
    },
    "4FY9": function(e, n, t) {
        "use strict";
        var o = t("gFyV"), r = t.n(o);
        n.default = r.a;
    },
    "6U7i": function(e, n, t) {
        e.exports = t("ydjK")("6U7i");
    },
    "7xRU": function(e, n, t) {
        e.exports = t("ydjK")("7xRU");
    },
    "9S2P": function(e, n, t) {
        (n = e.exports = t("RDo7")(!1)).push([ e.i, ".TextInput-textInput-29G {\n  font-size: 13px;\n  position: relative;\n  vertical-align: top;\n}\n.TextInput-textInputWithSpace-2so {\n  margin-bottom: 15px;\n}\n.TextInput-label-1SN {\n  font-family: inherit;\n  font-size: 13px;\n  line-height: 1.3;\n  cursor: pointer;\n  display: block;\n  font-weight: bold;\n}\n.TextInput-input-1ZG {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-sizing: border-box;\n  color: #191919;\n  display: block;\n  font-weight: 600;\n  height: 32px;\n  padding: 4px;\n  padding-left: 10px;\n  width: 100%;\n}\n.TextInput-input-1ZG::-webkit-input-placeholder {\n    color: #959595;\n}\n.TextInput-input-1ZG::-moz-placeholder {\n    color: #959595;\n}\n.TextInput-input-1ZG:-ms-input-placeholder {\n    color: #959595;\n}\n.TextInput-input-1ZG::-ms-input-placeholder {\n    color: #959595;\n}\n.TextInput-input-1ZG::placeholder {\n    color: #959595;\n}\n.TextInput-input-1ZG.TextInput-withNewLabelStyle-1H5 {\n    border: 0;\n}\n.TextInput-input-1ZG.TextInput-placeholderLight-1WL::-webkit-input-placeholder {\n    color: #fff;\n}\n.TextInput-input-1ZG.TextInput-placeholderLight-1WL::-moz-placeholder {\n    color: #fff;\n}\n.TextInput-input-1ZG.TextInput-placeholderLight-1WL:-ms-input-placeholder {\n    color: #fff;\n}\n.TextInput-input-1ZG.TextInput-placeholderLight-1WL::-ms-input-placeholder {\n    color: #fff;\n}\n.TextInput-input-1ZG.TextInput-placeholderLight-1WL::placeholder {\n    color: #fff;\n}\n.TextInput-input-1ZG:hover {\n    border-color: #696969;\n}\n.TextInput-input-1ZG:focus {\n    border-color: #0057ff;\n}\n.TextInput-input-1ZG:focus.focus-visible {\n      outline: none;\n}\n.TextInput-error-1H3 .TextInput-input-1ZG {\n    border-color: #d00;\n}\n.TextInput-input-1ZG.TextInput-disabled-KjM {\n    background: #e8e8e8;\n    color: #959595;\n}\n.TextInput-input-1ZG.TextInput-forProjectEditor-dsA {\n    height: 38px;\n}\n.TextInput-inputWithSpace-33q {\n  margin-top: 8px;\n}\n.TextInput-inputWithSpace-33q.TextInput-unlabeled-1hM {\n    margin-top: 21px;\n}\n.TextInput-errorMessage-3fr {\n  color: #d00;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 0;\n  margin-top: 5px;\n}\n.TextInput-errorMessage-3fr.TextInput-fixed-3zs {\n    position: absolute;\n}\n.TextInput-textInput-29G.TextInput-errorOver-2A9 {\n  position: relative;\n}\n.TextInput-textInput-29G.TextInput-errorOver-2A9 .TextInput-input-1ZG,\n  .TextInput-textInput-29G.TextInput-errorOver-2A9 .TextInput-input-1ZG.TextInput-unlabeled-1hM {\n    margin-top: 0;\n}\n.TextInput-textInput-29G.TextInput-errorOver-2A9 .TextInput-errorMessage-3fr {\n    bottom: 100%;\n    font-style: normal;\n    margin-bottom: 5px;\n    margin-top: 0;\n    position: absolute;\n}\n.TextInput-dark-FIp {\n  font-family: inherit;\n  font-size: 13px;\n  line-height: 1.3;\n  background: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.25);\n  color: #fff;\n  min-width: 343px;\n}\n.TextInput-input-1ZG {\n  -webkit-transition: border-color 0.15s linear, color 0.15s linear, background-color 0.15s linear;\n  transition: border-color 0.15s linear, color 0.15s linear, background-color 0.15s linear;\n}\n.TextInput-borderManager-20g {\n  height: 32px;\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n", "" ]), 
        n.locals = {
            textInput: "TextInput-textInput-29G",
            textInputWithSpace: "TextInput-textInputWithSpace-2so",
            label: "TextInput-label-1SN",
            input: "TextInput-input-1ZG",
            withNewLabelStyle: "TextInput-withNewLabelStyle-1H5",
            placeholderLight: "TextInput-placeholderLight-1WL",
            error: "TextInput-error-1H3",
            disabled: "TextInput-disabled-KjM",
            forProjectEditor: "TextInput-forProjectEditor-dsA",
            inputWithSpace: "TextInput-inputWithSpace-33q",
            unlabeled: "TextInput-unlabeled-1hM",
            errorMessage: "TextInput-errorMessage-3fr",
            fixed: "TextInput-fixed-3zs",
            errorOver: "TextInput-errorOver-2A9",
            dark: "TextInput-dark-FIp",
            borderManager: "TextInput-borderManager-20g"
        };
    },
    A93j: function(e, n, t) {
        (n = e.exports = t("RDo7")(!1)).push([ e.i, '.DownloadAppModal-header-1VQ {\n  color: #191919;\n  font-size: 34px;\n  font-weight: 900;\n}\n@media (max-width: 603px) {\n.DownloadAppModal-header-1VQ {\n      font-size: 24px;\n}\n}\n.DownloadAppModal-modal-3Fw {\n  padding: 0;\n}\n@media (min-width: 604px) and (max-width: 1024px) {\n.DownloadAppModal-modal-3Fw {\n      padding-left: 24px;\n      padding-right: 24px;\n}\n}\n.DownloadAppModal-text-29h {\n  color: #696969;\n  font-size: 16px;\n  margin-bottom: 40px;\n  margin-top: 14px;\n}\n.DownloadAppModal-imgContainer-2BW {\n  background-image: url("https://a5.behance.net/cca7b55c4dc59530821a940d4422d9e9f97a8dad/img/profile/download-app-header.png");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n@media (min-width: 604px) {\n.DownloadAppModal-imgContainer-2BW {\n      height: 300px;\n      width: 100%;\n}\n}\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n.DownloadAppModal-imgContainer-2BW {\n      background-image: url("https://a5.behance.net/cca7b55c4dc59530821a940d4422d9e9f97a8dad/img/profile/download-app-header@2x.png");\n}\n}\n@media (max-width: 603px) {\n.DownloadAppModal-imgContainer-2BW {\n      height: 135px;\n      margin: -15px -30px 0;\n}\n}\n@media (min-width: 604px) {\n.DownloadAppModal-content-2jB {\n    padding: 40px 73px;\n}\n}\n@media (max-width: 603px) {\n.DownloadAppModal-content-2jB {\n    margin: 30px -15px 0;\n    padding: 0;\n}\n}\n.DownloadAppModal-downloadButtons-1bE {\n  margin: 25px 30px 0;\n}\n@media (max-width: 603px) {\n.DownloadAppModal-downloadButtons-1bE {\n      -webkit-box-align: center;\n              align-items: center;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n      -webkit-box-pack: center;\n              justify-content: center;\n}\n}\n.DownloadAppModal-downloadButton-3kz {\n  background-repeat: no-repeat;\n  display: inline-block;\n  font-size: 0;\n  height: 40px;\n  line-height: 40px;\n  margin: 0 5px;\n  width: 135px;\n}\n@media (max-width: 603px) {\n.DownloadAppModal-downloadButton-3kz {\n      display: block;\n      height: 50px;\n      line-height: 50px;\n      width: 168px;\n}\n}\n', "" ]), 
        n.locals = {
            header: "DownloadAppModal-header-1VQ",
            modal: "DownloadAppModal-modal-3Fw",
            text: "DownloadAppModal-text-29h",
            imgContainer: "DownloadAppModal-imgContainer-2BW",
            content: "DownloadAppModal-content-2jB",
            downloadButtons: "DownloadAppModal-downloadButtons-1bE",
            downloadButton: "DownloadAppModal-downloadButton-3kz"
        };
    },
    BCSj: function(e, n, t) {
        var o = t("KqaJ");
        "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
        (0, t("DtNa").default)("09ed8918", o, !0, {});
    },
    Bew7: function(e, n, t) {
        "use strict";
        var o = t("K+aO"), r = Object(o.default)({}, (function() {
            var e = this.$createElement, n = this._self._c || e;
            return n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 100 125"
                }
            }, [ n("path", {
                attrs: {
                    d: "M50 25.4c-20.7 0-37.6 16.9-37.6 37.6s16.9 37.6 37.6 37.6S87.6 83.7 87.6 63 70.7 25.4 50 25.4zM69.1 57L48.3 76.8c-.8.7-1.8 1.1-2.8 1.1s-2-.4-2.8-1.2L30.9 64.8c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0l9.1 9.1 17.9-17c1.6-1.5 4.1-1.5 5.7.1 1.4 1.7 1.4 4.2-.2 5.7z"
                }
            }) ]);
        }), [], !1, null, null, null);
        n.a = r.exports;
    },
    F4Ef: function(e, n, t) {
        (n = e.exports = t("RDo7")(!1)).push([ e.i, ".SMSAppLink-formWrap-2dz {\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: left;\n}\n.SMSAppLink-input-Xvf {\n  margin-right: 10px;\n  width: 230px;\n}\n.SMSAppLink-sendBtn-1Lu {\n  margin-top: 21px;\n}\n.SMSAppLink-postingSpinner-2_p {\n  height: 16px;\n  position: relative;\n  width: 16px !important;\n}\n.SMSAppLink-postingSpinner-2_p .rf-spinner__spinner {\n    height: 100%;\n    left: 0;\n    min-height: 0 !important;\n    min-width: 0 !important;\n    top: 0;\n    width: 100%;\n}\n.SMSAppLink-successWrap-2bg {\n  color: #058900;\n  padding: 21px 0;\n}\n.SMSAppLink-success-1PO {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  font-size: 14px;\n  font-weight: bold;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.SMSAppLink-check-3lA {\n  fill: #058900;\n  height: 26px;\n  margin-right: 2px;\n  width: 26px;\n}\n", "" ]), 
        n.locals = {
            formWrap: "SMSAppLink-formWrap-2dz",
            input: "SMSAppLink-input-Xvf",
            sendBtn: "SMSAppLink-sendBtn-1Lu",
            postingSpinner: "SMSAppLink-postingSpinner-2_p",
            successWrap: "SMSAppLink-successWrap-2bg",
            success: "SMSAppLink-success-1PO",
            check: "SMSAppLink-check-3lA"
        };
    },
    H7jL: function(e, n, t) {
        "use strict";
        function o(e, n) {
            return e[n] = !0, e;
        }
        e.exports = function(e) {
            return e.reduce(o, {});
        };
    },
    HNYy: function(e, n, t) {
        "use strict";
        t("7xRU"), t("M+/F"), t("Ee2X"), t("6U7i"), t("KqXw"), t("Ysgh");
        var o = t("OQxq"), r = t("20Oh"), a = t("18mY"), i = t("Bew7"), l = t("C9k2"), s = t("adMq"), d = t("WxsR"), p = {
            components: {
                Btn: o.default,
                TextInput: r.a,
                Spinner: a.a,
                CheckIcon: i.a,
                Fade: s.a
            },
            props: {
                sendSMSStatusCode: {
                    type: Number
                },
                sendButtonType: {
                    type: String,
                    default: "base"
                }
            },
            data: function() {
                return {
                    tel: "",
                    errorMessage: null,
                    canViewSuccessState: !1,
                    isSending: !1,
                    successMessageDuration: 2e3
                };
            },
            watch: {
                sendSMSStatusCode: function(e) {
                    var n = this;
                    switch (e) {
                      case l.j.SUCCESS:
                        this.tel = "", this.canViewSuccessState = !0, this.isSending = !1, setTimeout((function() {
                            return n.$emit("smsSuccessMessageRead");
                        }), this.successMessageDuration);
                        break;

                      case l.j.FAILED:
                        this.canViewSuccessState = !1, this.isSending = !1;
                        break;

                      default:
                        this.canViewSuccessState = !1;
                    }
                }
            },
            methods: {
                prependPrefix: function() {
                    "+" !== this.tel.split("")[0] && (this.tel = "+" + this.tel);
                },
                resetErrorMessage: function() {
                    this.errorMessage = null;
                },
                isUSNumberWithoutCountryCode: function() {
                    var e = this.tel.split("").slice(1, this.tel.length).join("");
                    return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(e);
                },
                addUSCountryCode: function() {
                    var e = this.tel.split("");
                    e.splice(1, 0, "1"), this.tel = e.join("");
                },
                send: function() {
                    var e = Object(d.b)(this.tel), n = e.country, t = e.phone, o = !n || !t;
                    if (this.isUSNumberWithoutCountryCode() && o) return this.addUSCountryCode(), this.resetErrorMessage(), 
                    void this.send();
                    if (o) this.errorMessage = this.$translate("stories_upload_invalid_country_or_phone_number", "Invalid country code or phone number"); else {
                        var r = Object(d.a)(t, n, "E.164");
                        this.isSending = !0, this.$emit("appLinkRequested", r);
                    }
                }
            }
        }, u = t("tvyt"), c = t("K+aO");
        var h = Object(c.default)(p, (function() {
            var e = this, n = e.$createElement, t = e._self._c || n;
            return t("div", [ t("Fade", {
                attrs: {
                    mode: "out-in"
                }
            }, [ e.canViewSuccessState ? t("div", {
                ref: "success",
                class: e.$style.successWrap
            }, [ t("span", {
                class: e.$style.success
            }, [ t("CheckIcon", {
                class: e.$style.check
            }), e._v(" " + e._s(e.$translate("stories_app_link_sent_success", "Download Link Sent"))) ], 1) ]) : t("div", {
                ref: "formWrap",
                class: e.$style.formWrap
            }, [ t("TextInput", {
                ref: "textInput",
                class: e.$style.input,
                attrs: {
                    type: "tel",
                    errorMessage: e.errorMessage,
                    disabled: e.isSending,
                    isErrorMessageFixed: !0,
                    placeholder: e.$translate("stories_upload_mobile_number_placeholder", "Country Code + Mobile number")
                },
                on: {
                    enter: e.send,
                    input: function(n) {
                        e.prependPrefix(), e.resetErrorMessage();
                    }
                },
                model: {
                    value: e.tel,
                    callback: function(n) {
                        e.tel = n;
                    },
                    expression: "tel"
                }
            }), t("Btn", {
                ref: "sendLinkBtn",
                class: e.$style.sendBtn,
                attrs: {
                    type: e.sendButtonType,
                    disabled: e.isSending
                },
                on: {
                    click: e.send
                }
            }, [ e.isSending ? t("Spinner", {
                ref: "postingSpinner",
                class: e.$style.postingSpinner,
                attrs: {
                    slot: "leadingIcon",
                    autofill: !0,
                    color: "white"
                },
                slot: "leadingIcon"
            }) : e._e(), e._v(" " + e._s(e.$translate("stories_upload_best_experience_send", "Send")) + " ") ], 1) ], 1) ]) ], 1);
        }), [], !1, (function(e) {
            this.$style = u.default.locals || u.default;
        }), null, null);
        n.a = h.exports;
    },
    HhHV: function(e, n, t) {
        "use strict";
        e.exports = {
            allowedAttributes: {
                a: [ "href", "name", "target", "title", "aria-label" ],
                iframe: [ "allowfullscreen", "frameborder", "src" ],
                img: [ "src", "alt", "title", "aria-label" ]
            },
            allowedClasses: {},
            allowedSchemes: [ "http", "https", "mailto" ],
            allowedTags: [ "a", "abbr", "article", "b", "blockquote", "br", "caption", "code", "del", "details", "div", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "ins", "kbd", "li", "main", "mark", "ol", "p", "pre", "section", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "th", "thead", "tr", "u", "ul" ],
            filter: null
        };
    },
    "KXS/": function(e, n, t) {
        "use strict";
        e.exports = function e(n) {
            for (var t, o, r = Array.prototype.slice.call(arguments, 1); r.length; ) for (o in t = r.shift()) t.hasOwnProperty(o) && ("[object Object]" === Object.prototype.toString.call(n[o]) ? n[o] = e(n[o], t[o]) : n[o] = t[o]);
            return n;
        };
    },
    KqaJ: function(e, n, t) {
        (n = e.exports = t("RDo7")(!1)).push([ e.i, ".BorderAndLabelManager-control-1Q8 {\n  cursor: pointer;\n  height: 100%;\n  position: absolute;\n}\n.BorderAndLabelManager-control-1Q8::before {\n    background: -webkit-gradient(linear, right top, left top, from(rgba(255, 255, 255, 0)), color-stop(70%, white));\n    background: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, white 70%);\n    content: '';\n    height: 100%;\n    position: absolute;\n    width: 100px;\n    z-index: 1;\n}\n.BorderAndLabelManager-control-1Q8.BorderAndLabelManager-prev-1yt::before {\n    left: 0;\n}\n.BorderAndLabelManager-control-1Q8.BorderAndLabelManager-next-3px::before {\n    background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(70%, white));\n    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, white 70%);\n    right: -3px;\n}\n.BorderAndLabelManager-control-1Q8:active .BorderAndLabelManager-arrow-3Rw {\n    background-color: #e4e4e4;\n    fill: #191919;\n}\n.no-has-touch .BorderAndLabelManager-control-1Q8:hover .BorderAndLabelManager-arrow-3Rw {\n    background-color: #f1f1f1;\n    fill: #191919;\n}\n.BorderAndLabelManager-prev-1yt {\n  left: 0;\n}\n.BorderAndLabelManager-next-3px {\n  right: 3px;\n  width: 100px;\n}\n.BorderAndLabelManager-arrow-3Rw {\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #fff;\n  border-radius: 50%;\n  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.16);\n  display: -webkit-box;\n  display: flex;\n  fill: #959595;\n  height: 34px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 4px;\n  padding-left: 2px;\n  position: absolute;\n  top: 34%;\n  -webkit-transition: background-color 0.15s linear;\n  transition: background-color 0.15s linear;\n  width: 34px;\n  z-index: 1;\n}\n.BorderAndLabelManager-prev-1yt .BorderAndLabelManager-arrow-3Rw {\n    margin-left: 2px;\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.BorderAndLabelManager-next-3px .BorderAndLabelManager-arrow-3Rw {\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n    right: 0;\n}\n.BorderAndLabelManager-navArrow-30B {\n  height: 17px;\n  width: 11px;\n}\n.BorderAndLabelManager-borderContainer-AYl {\n  display: -webkit-box;\n  display: flex;\n  pointer-events: none;\n  position: absolute;\n}\n.BorderAndLabelManager-borderContainer-AYl.BorderAndLabelManager-isActive-1he .BorderAndLabelManager-border-zj1 {\n    border-color: #0057ff;\n}\n.BorderAndLabelManager-border-zj1 {\n  border-color: #e8e8e8;\n  border-width: 1px;\n  -webkit-transition: border-color 0.2s linear;\n  transition: border-color 0.2s linear;\n}\n.BorderAndLabelManager-leading-3OC {\n  border-bottom-style: solid;\n  border-left-style: solid;\n  border-radius: 4px 0 0 4px;\n  border-top-style: solid;\n  width: 10px;\n}\n.BorderAndLabelManager-notch-25t {\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom-style: solid;\n  border-top-style: solid;\n  display: -webkit-box;\n  display: flex;\n  white-space: nowrap;\n}\n.BorderAndLabelManager-floated-1Gv {\n  border-top-style: none;\n}\n.BorderAndLabelManager-trailing-1lL {\n  border-bottom-style: solid;\n  border-radius: 0 4px 4px 0;\n  border-right-style: solid;\n  border-top-style: solid;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  min-width: 4px;\n}\n.BorderAndLabelManager-filterLabel-12q {\n  color: #959595;\n  font-size: 13px;\n  font-weight: 600;\n  -webkit-transform-origin: left;\n          transform-origin: left;\n  -webkit-transition: color 0.2s linear, -webkit-transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);\n  transition: color 0.2s linear, -webkit-transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);\n  transition: transform 0.2s cubic-bezier(0.19, 1, 0.22, 1), color 0.2s linear;\n  transition: transform 0.2s cubic-bezier(0.19, 1, 0.22, 1), color 0.2s linear, -webkit-transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n}\n.BorderAndLabelManager-isFloated-35g .BorderAndLabelManager-filterLabel-12q {\n  color: #191919;\n  font-weight: bold;\n}\n.BorderAndLabelManager-isActive-1he .BorderAndLabelManager-filterLabel-12q {\n  color: #0057ff;\n  font-weight: bold;\n}\n", "" ]), 
        n.locals = {
            control: "BorderAndLabelManager-control-1Q8",
            prev: "BorderAndLabelManager-prev-1yt",
            next: "BorderAndLabelManager-next-3px",
            arrow: "BorderAndLabelManager-arrow-3Rw",
            navArrow: "BorderAndLabelManager-navArrow-30B",
            borderContainer: "BorderAndLabelManager-borderContainer-AYl",
            isActive: "BorderAndLabelManager-isActive-1he",
            border: "BorderAndLabelManager-border-zj1",
            leading: "BorderAndLabelManager-leading-3OC",
            notch: "BorderAndLabelManager-notch-25t",
            floated: "BorderAndLabelManager-floated-1Gv",
            trailing: "BorderAndLabelManager-trailing-1lL",
            filterLabel: "BorderAndLabelManager-filterLabel-12q",
            isFloated: "BorderAndLabelManager-isFloated-35g"
        };
    },
    Nfs8: function(e, n, t) {
        "use strict";
        var o = t("BCSj"), r = t.n(o);
        n.default = r.a;
    },
    OdXY: function(e, n, t) {
        "use strict";
        e.exports = function(e) {
            return "string" == typeof e ? e.toLowerCase() : e;
        };
    },
    Pafc: function(e, n, t) {
        "use strict";
        var o = t("H7jL");
        e.exports = {
            uris: o([ "background", "base", "cite", "href", "longdesc", "src", "usemap" ])
        };
    },
    RFFd: function(e, n, t) {
        "use strict";
        var o = t("W+W9"), r = t("OdXY"), a = (t("Pafc"), t("hu0r")), i = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/, l = /^<\s*\/\s*([\w:-]+)[^>]*>/, s = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, d = /^</, p = /^<\s*\//;
        e.exports = function(e, n) {
            for (var t, u = function() {
                var e = [];
                return e.lastItem = function() {
                    return e[e.length - 1];
                }, e;
            }(), c = e; e; ) h();
            function h() {
                t = !0, function() {
                    "\x3c!--" === e.substr(0, 4) ? (o = e.indexOf("--\x3e")) >= 0 && (n.comment && n.comment(e.substring(4, o)), 
                    e = e.substring(o + 3), t = !1) : p.test(e) ? f(l, b) : d.test(e) && f(i, g);
                    var o;
                    !function() {
                        if (!t) return;
                        var o, r = e.indexOf("<");
                        r >= 0 ? (o = e.substring(0, r), e = e.substring(r)) : (o = e, e = "");
                        n.chars && n.chars(o);
                    }();
                }();
                var o = e === c;
                c = e, o && (e = "");
            }
            function f(n, o) {
                var r = e.match(n);
                r && (e = e.substring(r[0].length), r[0].replace(n, o), t = !1);
            }
            function g(e, t, i, l) {
                var d = {}, p = r(t), c = a.voids[p] || !!l;
                i.replace(s, (function(e, n, t, r, a) {
                    d[n] = void 0 === t && void 0 === r && void 0 === a ? void 0 : o.decode(t || r || a || "");
                })), c || u.push(p), n.start && n.start(p, d, c);
            }
            function b(e, t) {
                var o, a = 0, i = r(t);
                if (i) for (a = u.length - 1; a >= 0 && u[a] !== i; a--) ;
                if (a >= 0) {
                    for (o = u.length - 1; o >= a; o--) n.end && n.end(u[o]);
                    u.length = a;
                }
            }
            b();
        };
    },
    Ta0x: function(e, n, t) {
        "use strict";
        t("6U7i");
        var o = t("mLYF"), r = t("HNYy"), a = t("E8ap"), i = {
            components: {
                Modal: o.default,
                SMSAppLink: r.a
            },
            data: function() {
                return {
                    downloadGoogleAppUrl: a.URL_APPS_DOWNLOAD_NETWORK_GOOGLE,
                    downloadIosAppUrl: a.URL_APPS_DOWNLOAD_NETWORK,
                    assetsUrl: a.ASSETS_URL
                };
            },
            props: {
                showModal: {
                    type: Boolean,
                    default: !1
                },
                sendSMSStatusCode: {
                    type: Number
                },
                isLoggedIn: {
                    type: Boolean,
                    default: !0
                },
                headerTitle: {
                    type: String
                },
                bodyText: {
                    type: String
                },
                showSMSLink: {
                    type: Boolean,
                    default: !0
                },
                hideTitleBarOnPhone: {
                    type: Boolean
                }
            }
        }, l = t("4FY9"), s = t("K+aO");
        var d = Object(s.default)(i, (function() {
            var e = this, n = e.$createElement, t = e._self._c || n;
            return t("Modal", {
                ref: "modal",
                class: e.$style.modal,
                attrs: {
                    showModal: e.showModal,
                    contentStyle: {
                        overflow: "hidden",
                        padding: 0
                    },
                    hideTitleBarOnPhone: e.hideTitleBarOnPhone
                },
                on: {
                    openModal: function(n) {
                        return e.$emit("openModal");
                    },
                    closeModal: function(n) {
                        return e.$emit("closeModal");
                    }
                }
            }, [ t("div", {
                class: e.$style.imgContainer
            }), t("div", {
                class: e.$style.content
            }, [ t("h2", {
                ref: "title",
                class: e.$style.header
            }, [ e._v(e._s(e.$translate("profile_checklist_download_modal_app_header", "Download the Behance App"))) ]), t("p", {
                ref: "desc",
                class: e.$style.text
            }, [ e._v(e._s(e.$translate("profile_checklist_download_modal_app_text", "The best way to stay up to date with the creative world"))) ]), e.isLoggedIn && e.showSMSLink ? t("SMSAppLink", {
                ref: "sms",
                attrs: {
                    sendSMSStatusCode: e.sendSMSStatusCode,
                    sendButtonType: "primary"
                },
                on: {
                    appLinkRequested: function(n) {
                        return e.$emit("appLinkRequested", {
                            phoneNumber: n,
                            source: "Profile Checklist Download App Modal"
                        });
                    },
                    smsSuccessMessageRead: function(n) {
                        return e.$emit("smsSuccessMessageRead");
                    }
                }
            }) : e._e(), t("div", {
                class: e.$style.downloadButtons
            }, [ t("a", {
                ref: "googleDownload",
                class: e.$style.downloadButton,
                style: "background-image:url(" + e.assetsUrl + "svgs/google-play-button.svg);",
                attrs: {
                    target: "_blank",
                    href: e.downloadGoogleAppUrl
                }
            }, [ e._v(e._s(e.$translate("buttons_google_app_download", "Get it on Google Play"))) ]), t("a", {
                ref: "appleDownload",
                class: [ e.$style.downloadButton, e.$style.downloadApple ],
                style: "background-image:url(" + e.assetsUrl + "svgs/apple-app-store-button.svg);",
                attrs: {
                    target: "_blank",
                    href: e.downloadIosAppUrl
                }
            }, [ e._v(e._s(e.$translate("button_apple_app_download", "Download on the App Store"))) ]) ]) ], 1) ]);
        }), [], !1, (function(e) {
            this.$style = l.default.locals || l.default;
        }), null, null);
        n.a = d.exports;
    },
    "W+W9": function(e, n, t) {
        "use strict";
        var o = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }, r = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }, a = /(&amp;|&lt;|&gt;|&quot;|&#39;)/g, i = /[&<>"']/g;
        function l(e) {
            return o[e];
        }
        function s(e) {
            return r[e];
        }
        function d(e) {
            return null == e ? "" : String(e).replace(i, l);
        }
        function p(e) {
            return null == e ? "" : String(e).replace(a, s);
        }
        d.options = p.options = {}, e.exports = {
            encode: d,
            escape: d,
            decode: p,
            unescape: p,
            version: "1.0.0-browser"
        };
    },
    YWVf: function(e, n, t) {
        "use strict";
        t("W+W9");
        var o = t("KXS/"), r = t("RFFd"), a = t("bCdr"), i = t("HhHV");
        function l(e, n, t) {
            var l = [], s = !0 === t ? n : o({}, i, n), d = a(l, s);
            return r(e, d), l.join("");
        }
        l.defaults = i, e.exports = l;
    },
    YlXL: function(e, n, t) {
        var o = t("9S2P");
        "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
        (0, t("DtNa").default)("0d4fcdab", o, !0, {});
    },
    bCdr: function(e, n, t) {
        "use strict";
        var o = t("W+W9"), r = t("OdXY"), a = t("Pafc"), i = t("hu0r");
        e.exports = function(e, n) {
            var t, l = n || {};
            return u(), {
                start: function(e, n, i) {
                    var p = r(e);
                    if (t.ignoring) return void d(p);
                    if (-1 === (l.allowedTags || []).indexOf(p)) return void d(p);
                    if (l.filter && !l.filter({
                        tag: p,
                        attrs: n
                    })) return void d(p);
                    s("<"), s(p), Object.keys(n).forEach((function(e) {
                        var t = n[e], i = (l.allowedClasses || {})[p] || [], d = (l.allowedAttributes || {})[p] || [], u = r(e);
                        ("class" === u && -1 === d.indexOf(u) ? (t = t.split(" ").filter((function(e) {
                            return i && -1 !== i.indexOf(e);
                        })).join(" ").trim()).length : -1 !== d.indexOf(u) && (!0 !== a.uris[u] || function(e) {
                            var n = e[0];
                            if ("#" === n || "/" === n) return !0;
                            var t = e.indexOf(":");
                            if (-1 === t) return !0;
                            var o = e.indexOf("?");
                            if (-1 !== o && t > o) return !0;
                            var r = e.indexOf("#");
                            return -1 !== r && t > r || l.allowedSchemes.some(a);
                            function a(n) {
                                return 0 === e.indexOf(n + ":");
                            }
                        }(t))) && (s(" "), s(e), "string" == typeof t && (s('="'), s(o.encode(t)), s('"')));
                    })), s(i ? "/>" : ">");
                },
                end: function(e) {
                    var n = r(e);
                    -1 !== (l.allowedTags || []).indexOf(n) && !1 === t.ignoring ? (s("</"), s(n), s(">")) : p(n);
                },
                chars: function(e) {
                    !1 === t.ignoring && s(l.transformText ? l.transformText(e) : e);
                }
            };
            function s(n) {
                e.push(n);
            }
            function d(e) {
                i.voids[e] || (!1 === t.ignoring ? t = {
                    ignoring: e,
                    depth: 1
                } : t.ignoring === e && t.depth++);
            }
            function p(e) {
                t.ignoring === e && --t.depth <= 0 && u();
            }
            function u() {
                t = {
                    ignoring: !1,
                    depth: 0
                };
            }
        };
    },
    gFyV: function(e, n, t) {
        var o = t("A93j");
        "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
        (0, t("DtNa").default)("7658018e", o, !0, {});
    },
    hu0r: function(e, n, t) {
        "use strict";
        var o = t("H7jL");
        e.exports = {
            voids: o([ "area", "br", "col", "hr", "img", "wbr", "input", "base", "basefont", "link", "meta" ])
        };
    },
    mLYF: function(e, n, t) {
        e.exports = t("ydjK")("mLYF");
    },
    tvyt: function(e, n, t) {
        "use strict";
        var o = t("/dXS"), r = t.n(o);
        n.default = r.a;
    },
    wnPb: function(e, n, t) {
        "use strict";
        var o = t("D57K"), r = t("mGku"), a = r.default.extend({
            props: {
                label: String,
                isActive: Boolean,
                shouldShowPlaceholder: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    notchWidth: 0
                };
            },
            computed: {
                labelStyles: function() {
                    return {
                        transform: "translate(" + (this.shouldShowFloatedLabel ? 3 : 0) + "px, " + (this.shouldShowFloatedLabel ? -17 : 0) + "px) scale(" + (this.shouldShowFloatedLabel ? .75 : 1) + ")"
                    };
                },
                notchStyles: function() {
                    return this.shouldShowFloatedLabel ? {
                        width: this.notchWidth + "px"
                    } : void 0;
                },
                shouldShowFloatedLabel: function() {
                    return this.isActive || !this.shouldShowPlaceholder;
                }
            },
            methods: {
                setNotchWidth: function() {
                    var e = this.$refs.label;
                    this.notchWidth = e ? .75 * e.clientWidth + 6 : 0;
                },
                handleVisibilityChange: function(e) {
                    e && this.setNotchWidth();
                }
            },
            watch: {
                label: function() {
                    return Object(o.__awaiter)(this, void 0, void 0, (function() {
                        return Object(o.__generator)(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return [ 4, this.$nextTick() ];

                              case 1:
                                return e.sent(), this.setNotchWidth(), [ 2 ];
                            }
                        }));
                    }));
                }
            },
            mounted: function() {
                this.setNotchWidth();
            }
        }), i = t("Nfs8"), l = t("K+aO");
        var s = Object(l.default)(a, (function() {
            var e, n, t = this, o = t.$createElement, r = t._self._c || o;
            return r("div", {
                directives: [ {
                    name: "observe-visibility",
                    rawName: "v-observe-visibility",
                    value: t.handleVisibilityChange,
                    expression: "handleVisibilityChange"
                } ],
                class: [ t.$style.borderContainer, (e = {}, e[t.$style.isActive] = t.isActive, e[t.$style.isFloated] = t.shouldShowFloatedLabel, 
                e) ]
            }, [ r("div", {
                class: [ t.$style.border, t.$style.leading ]
            }), r("div", {
                class: [ t.$style.border, t.$style.notch, (n = {}, n[t.$style.floated] = t.shouldShowFloatedLabel, 
                n) ],
                style: t.notchStyles
            }, [ r("span", {
                ref: "label",
                class: t.$style.filterLabel,
                style: t.labelStyles
            }, [ t._v(" " + t._s(t.label) + " ") ]) ]), r("div", {
                class: [ t.$style.border, t.$style.trailing ]
            }) ]);
        }), [], !1, (function(e) {
            this.$style = i.default.locals || i.default;
        }), null, null);
        n.a = s.exports;
    },
    yfgW: function(e, n, t) {
        "use strict";
        var o = t("YlXL"), r = t.n(o);
        n.default = r.a;
    }
} ]);
//# sourceMappingURL=app.33.44126dae911d5b88a443.js.map