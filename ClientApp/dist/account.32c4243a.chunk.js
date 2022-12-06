"use strict";
(self["webpackChunkfalak_tyb"] = self["webpackChunkfalak_tyb"] || []).push([["account"],{

/***/ "./src/app/modules/account/index.tsx":
/*!*******************************************!*\
  !*** ./src/app/modules/account/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/error/error-boundary-route */ "./src/app/shared/error/error-boundary-route.tsx");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings */ "./src/app/modules/account/settings/settings.tsx");
/* harmony import */ var _password_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password/password */ "./src/app/modules/account/password/password.tsx");




const Routes = ({ match }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__["default"], { path: `${match.url}/settings`, component: _settings_settings__WEBPACK_IMPORTED_MODULE_2__["default"] }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__["default"], { path: `${match.url}/password`, component: _password_password__WEBPACK_IMPORTED_MODULE_3__["default"] })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);


/***/ }),

/***/ "./src/app/modules/account/password/password.tsx":
/*!*******************************************************!*\
  !*** ./src/app/modules/account/password/password.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPage": () => (/* binding */ PasswordPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.modern.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var app_config_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/store */ "./src/app/config/store.ts");
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/app/shared/reducers/authentication.ts");
/* harmony import */ var app_shared_layout_password_password_strength_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/layout/password/password-strength-bar */ "./src/app/shared/layout/password/password-strength-bar.tsx");
/* harmony import */ var _password_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password.reducer */ "./src/app/modules/account/password/password.reducer.ts");








const PasswordPage = () => {
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const dispatch = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        dispatch((0,_password_reducer__WEBPACK_IMPORTED_MODULE_6__.reset)());
        dispatch((0,app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_4__.getSession)());
        return () => {
            dispatch((0,_password_reducer__WEBPACK_IMPORTED_MODULE_6__.reset)());
        };
    }, []);
    const handleValidSubmit = ({ currentPassword, newPassword }) => {
        dispatch((0,_password_reducer__WEBPACK_IMPORTED_MODULE_6__.savePassword)({ currentPassword, newPassword }));
    };
    const updatePassword = (event) => setPassword(event.target.value);
    const account = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state) => state.authentication.account);
    const successMessage = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state) => state.password.successMessage);
    const errorMessage = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state) => state.password.errorMessage);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (successMessage) {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success((0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)(successMessage));
        }
        else if (errorMessage) {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error((0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)(errorMessage));
        }
    }, [successMessage, errorMessage]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 container ml-20  mb-10 ", style: { width: "75%" } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Row, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Col, { className: "mt-5 md:mt-0 md:col-span-2" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "md:col-span-1" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: "text-lg font-medium leading-6 text-gray-900 text-right" },
                        account.login,
                        "  \u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643 "),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "mt-1 text-sm text-gray-500 text-right" }, "\u064A\u0645\u0643\u0646\u0643 \u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643 \u0645\u0646 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u062A\u0627\u0644\u064A\u0629")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedForm, { id: "password-form", onSubmit: handleValidSubmit },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "last-name", className: "block text-sm font-medium text-gray-700 text-right mt-5 mb-3 mr-3" }, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062D\u0627\u0644\u064A\u0629"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { name: "currentPassword", label: " ", placeholder: "كلمة المرور الحالية ", type: "password", validate: {
                                required: {
                                    value: true,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("global.messages.validate.newpassword.required"),
                                },
                            }, "data-cy": "currentPassword" }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "last-name", className: "block text-sm font-medium text-gray-700 text-right mt-5 mb-3 mr-3" }, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { name: "newPassword", label: " ", placeholder: "كلمة السر الجديدة ", type: "password", validate: {
                                required: {
                                    value: true,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("global.messages.validate.newpassword.required"),
                                },
                                minLength: {
                                    value: 4,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("global.messages.validate.newpassword.minlength"),
                                },
                                maxLength: {
                                    value: 50,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("global.messages.validate.newpassword.maxlength"),
                                },
                            }, onChange: updatePassword, "data-cy": "newPassword" }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { dir: "rtl", className: "mt-5 mb-3 mr-3" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_password_password_strength_bar__WEBPACK_IMPORTED_MODULE_5__["default"], { password: password })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "last-name", className: "block text-sm font-medium text-gray-700 text-right mt-5 mb-3 mr-3" }, "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { name: "confirmPassword", label: " ", placeholder: " تأكيد كلمة السر الجديدة ", type: "password", validate: {
                                required: {
                                    value: true,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("global.messages.validate.confirmpassword.required"),
                                },
                                minLength: {
                                    value: 4,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("global.messages.validate.confirmpassword.minlength"),
                                },
                                maxLength: {
                                    value: 50,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("global.messages.validate.confirmpassword.maxlength"),
                                },
                                validate: (v) => v === password ||
                                    (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("global.messages.error.dontmatch"),
                            }, "data-cy": "confirmPassword" }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "/account/settings", style: { backgroundColor: '#F2F0F0', marginRight: 10 }, className: "group relative   py-3 px-4 border border-transparent text-sm font-medium rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-offset-2 " },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3" }),
                            "\u0627\u0644\u0631\u062C\u0648\u0639"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: { backgroundColor: '#827349', }, type: "submit", className: "group relative   py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 " },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3" }),
                            "\u062D\u0641\u0638")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordPage);


/***/ }),

/***/ "./src/app/modules/account/settings/settings.tsx":
/*!*******************************************************!*\
  !*** ./src/app/modules/account/settings/settings.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.modern.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var app_config_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/store */ "./src/app/config/store.ts");
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/app/shared/reducers/authentication.ts");
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.reducer */ "./src/app/modules/account/settings/settings.reducer.ts");







const SettingsPage = () => {
    const dispatch = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
    const account = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state) => state.authentication.account);
    const successMessage = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state) => state.settings.successMessage);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        dispatch((0,app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_4__.getSession)());
        return () => {
            dispatch((0,_settings_reducer__WEBPACK_IMPORTED_MODULE_5__.reset)());
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (successMessage) {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success((0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)(successMessage));
        }
    }, [successMessage]);
    const handleValidSubmit = (values) => {
        dispatch((0,_settings_reducer__WEBPACK_IMPORTED_MODULE_5__.saveAccountSettings)(Object.assign(Object.assign({}, account), values)));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 container ml-20  mb-10 ", style: { width: "75%" } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Row, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, { className: "mt-5 md:mt-0 md:col-span-2" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "md:col-span-1" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: "text-lg font-medium leading-6 text-gray-900 text-right" },
                        account.login,
                        " \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 "),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "mt-1 text-sm text-gray-500 text-right" }, "\u064A\u0645\u0643\u0646\u0643 \u062A\u0639\u062F\u064A\u0644 \u0645\u0639\u0644\u0648\u0645\u0627\u062A\u0643 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0645\u0646 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u062A\u0627\u0644\u064A\u0629")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedForm, { id: "settings-form", onSubmit: handleValidSubmit, defaultValues: account },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "last-name", className: "block text-sm font-medium text-gray-700 text-right mt-5 mb-3 mr-3" }, "\u0627\u0633\u0645 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { name: "firstName", label: "", id: "firstName", placeholder: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("settings.form.firstname.placeholder"), validate: {
                                required: {
                                    value: true,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("settings.messages.validate.firstname.required"),
                                },
                                minLength: {
                                    value: 1,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("settings.messages.validate.firstname.minlength"),
                                },
                                maxLength: {
                                    value: 50,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("settings.messages.validate.firstname.maxlength"),
                                },
                            }, "data-cy": "firstname" }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "last-name", className: "block text-sm font-medium text-gray-700 text-right mt-5 mb-3 mr-3" }, "\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { name: "lastName", label: "", id: "lastName", placeholder: "", validate: {
                                required: {
                                    value: true,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("settings.messages.validate.lastname.required"),
                                },
                                minLength: {
                                    value: 1,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("settings.messages.validate.lastname.minlength"),
                                },
                                maxLength: {
                                    value: 50,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("settings.messages.validate.lastname.maxlength"),
                                },
                            }, "data-cy": "lastname" }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "last-name", className: "block text-sm font-medium text-gray-700 text-right mt-5 mb-3 mr-3" }, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { name: "email", label: "", placeholder: "", type: "email", validate: {
                                required: {
                                    value: true,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("global.messages.validate.email.required"),
                                },
                                minLength: {
                                    value: 5,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("global.messages.validate.email.minlength"),
                                },
                                maxLength: {
                                    value: 254,
                                    message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("global.messages.validate.email.maxlength"),
                                },
                                validate: (v) => (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.isEmail)(v) ||
                                    (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)("global.messages.validate.email.invalid"),
                            }, "data-cy": "email" }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: { backgroundColor: '#827349', }, type: "submit", className: "group relative   py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 " },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3" }),
                            "\u062D\u0641\u0638"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "/account/password", style: { backgroundColor: '#F2F0F0', marginLeft: 10 }, className: "group relative   py-3 px-4 border border-transparent text-sm font-medium rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-offset-2 " },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3" }),
                            "\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPage);


/***/ })

}]);
//# sourceMappingURL=account.32c4243a.chunk.js.map