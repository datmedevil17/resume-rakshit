"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@vercel";
exports.ids = ["vendor-chunks/@vercel"];
exports.modules = {

/***/ "(ssr)/./node_modules/@vercel/analytics/dist/react/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Analytics: () => (/* binding */ Analytics),\n/* harmony export */   track: () => (/* binding */ track)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ Analytics,track auto */ // src/react.tsx\n\n// package.json\nvar name = \"@vercel/analytics\";\nvar version = \"1.4.1\";\n// src/queue.ts\nvar initQueue = ()=>{\n    if (window.va) return;\n    window.va = function a(...params) {\n        (window.vaq = window.vaq || []).push(params);\n    };\n};\n// src/utils.ts\nfunction isBrowser() {\n    return \"undefined\" !== \"undefined\";\n}\nfunction detectEnvironment() {\n    try {\n        const env = \"development\";\n        if (env === \"development\" || env === \"test\") {\n            return \"development\";\n        }\n    } catch (e) {}\n    return \"production\";\n}\nfunction setMode(mode = \"auto\") {\n    if (mode === \"auto\") {\n        window.vam = detectEnvironment();\n        return;\n    }\n    window.vam = mode;\n}\nfunction getMode() {\n    const mode = isBrowser() ? window.vam : detectEnvironment();\n    return mode || \"production\";\n}\nfunction isProduction() {\n    return getMode() === \"production\";\n}\nfunction isDevelopment() {\n    return getMode() === \"development\";\n}\nfunction removeKey(key, { [key]: _, ...rest }) {\n    return rest;\n}\nfunction parseProperties(properties, options) {\n    if (!properties) return void 0;\n    let props = properties;\n    const errorProperties = [];\n    for (const [key, value] of Object.entries(properties)){\n        if (typeof value === \"object\" && value !== null) {\n            if (options.strip) {\n                props = removeKey(key, props);\n            } else {\n                errorProperties.push(key);\n            }\n        }\n    }\n    if (errorProperties.length > 0 && !options.strip) {\n        throw Error(`The following properties are not valid: ${errorProperties.join(\", \")}. Only strings, numbers, booleans, and null are allowed.`);\n    }\n    return props;\n}\n// src/generic.ts\nvar DEV_SCRIPT_URL = \"https://va.vercel-scripts.com/v1/script.debug.js\";\nvar PROD_SCRIPT_URL = \"/_vercel/insights/script.js\";\nfunction inject(props = {\n    debug: true\n}) {\n    var _a;\n    if (!isBrowser()) return;\n    setMode(props.mode);\n    initQueue();\n    if (props.beforeSend) {\n        (_a = window.va) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n    }\n    const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : PROD_SCRIPT_URL);\n    if (document.head.querySelector(`script[src*=\"${src}\"]`)) return;\n    const script = document.createElement(\"script\");\n    script.src = src;\n    script.defer = true;\n    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : \"\");\n    script.dataset.sdkv = version;\n    if (props.disableAutoTrack) {\n        script.dataset.disableAutoTrack = \"1\";\n    }\n    if (props.endpoint) {\n        script.dataset.endpoint = props.endpoint;\n    }\n    if (props.dsn) {\n        script.dataset.dsn = props.dsn;\n    }\n    script.onerror = ()=>{\n        const errorMessage = isDevelopment() ? \"Please check if any ad blockers are enabled and try again.\" : \"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.\";\n        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);\n    };\n    if (isDevelopment() && props.debug === false) {\n        script.dataset.debug = \"false\";\n    }\n    document.head.appendChild(script);\n}\nfunction track(name2, properties, options) {\n    var _a, _b;\n    if (!isBrowser()) {\n        const msg = \"[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment\";\n        if (isProduction()) {\n            console.warn(msg);\n        } else {\n            throw new Error(msg);\n        }\n        return;\n    }\n    if (!properties) {\n        (_a = window.va) == null ? void 0 : _a.call(window, \"event\", {\n            name: name2,\n            options\n        });\n        return;\n    }\n    try {\n        const props = parseProperties(properties, {\n            strip: isProduction()\n        });\n        (_b = window.va) == null ? void 0 : _b.call(window, \"event\", {\n            name: name2,\n            data: props,\n            options\n        });\n    } catch (err) {\n        if (err instanceof Error && isDevelopment()) {\n            console.error(err);\n        }\n    }\n}\nfunction pageview({ route, path }) {\n    var _a;\n    (_a = window.va) == null ? void 0 : _a.call(window, \"pageview\", {\n        route,\n        path\n    });\n}\n// src/react.tsx\nfunction Analytics(props) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        var _a;\n        if (props.beforeSend) {\n            (_a = window.va) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n        }\n    }, [\n        props.beforeSend\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        inject({\n            framework: props.framework || \"react\",\n            ...props.route !== void 0 && {\n                disableAutoTrack: true\n            },\n            ...props\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (props.route && props.path) {\n            pageview({\n                route: props.route,\n                path: props.path\n            });\n        }\n    }, [\n        props.route,\n        props.path\n    ]);\n    return null;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9hbmFseXRpY3MvZGlzdC9yZWFjdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUMwQjs7QUNBeEIsSUFBQUMsT0FBUTtBQUNSLElBQUFDLFVBQVc7O0FDRk4sSUFBTUMsWUFBWTtJQUV2QixJQUFJQyxPQUFPQyxFQUFBLEVBQUk7SUFFZkQsT0FBT0MsRUFBQSxHQUFLLFNBQVNDLEVBQUEsR0FBS0MsTUFBQTtRQUN2QkgsQ0FBQUEsT0FBT0ksR0FBQSxHQUFNSixPQUFPSSxHQUFBLElBQU8sRUFBQyxFQUFHQyxJQUFBLENBQUtGO0lBQ3ZDO0FBQ0Y7O0FDTE8sU0FBU0c7SUFDZCxPQUFPLGdCQUFrQjtBQUMzQjtBQUVBLFNBQVNDO0lBQ1AsSUFBSTtRQUNGLE1BQU1DO1FBQ04sSUFBSUEsUUFBUSxpQkFBaUJBLFFBQVEsUUFBUTtZQUMzQyxPQUFPO1FBQ1Q7SUFDRixTQUFTQyxHQUFHLENBRVo7SUFDQSxPQUFPO0FBQ1Q7QUFFTyxTQUFTQyxRQUFRQyxPQUFhO0lBQ25DLElBQUlBLFNBQVMsUUFBUTtRQUNuQlgsT0FBT1ksR0FBQSxHQUFNTDtRQUNiO0lBQ0Y7SUFFQVAsT0FBT1ksR0FBQSxHQUFNRDtBQUNmO0FBRU8sU0FBU0U7SUFDZCxNQUFNRixPQUFPTCxjQUFjTixPQUFPWSxHQUFBLEdBQU1MO0lBQ3hDLE9BQU9JLFFBQVE7QUFDakI7QUFFTyxTQUFTRztJQUNkLE9BQU9ELGNBQWM7QUFDdkI7QUFFTyxTQUFTRTtJQUNkLE9BQU9GLGNBQWM7QUFDdkI7QUFFQSxTQUFTRyxVQUNQQyxHQUFBLEVBQ0EsRUFBRSxDQUFDQSxJQUFHLEVBQUdDLENBQUEsRUFBRyxHQUFHQyxNQUFLO0lBRXBCLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTQyxnQkFDZEMsVUFBQSxFQUNBQyxPQUFBO0lBSUEsSUFBSSxDQUFDRCxZQUFZLE9BQU87SUFDeEIsSUFBSUUsUUFBUUY7SUFDWixNQUFNRyxrQkFBNEIsRUFBQztJQUNu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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi4vLi4vc3JjL3JlYWN0LnRzeD80Nzc3Iiwid2VicGFjazovL215LWFwcC8uLi8uLi9wYWNrYWdlLmpzb24/NmZjNiIsIndlYnBhY2s6Ly9teS1hcHAvLi4vLi4vc3JjL3F1ZXVlLnRzPzg3M2UiLCJ3ZWJwYWNrOi8vbXktYXBwLy4uLy4uL3NyYy91dGlscy50cz82MjUyIiwid2VicGFjazovL215LWFwcC8uLi8uLi9zcmMvZ2VuZXJpYy50cz8wYmRmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluamVjdCwgdHJhY2ssIHBhZ2V2aWV3IH0gZnJvbSAnLi9nZW5lcmljJztcbmltcG9ydCB0eXBlIHsgQW5hbHl0aWNzUHJvcHMsIEJlZm9yZVNlbmQsIEJlZm9yZVNlbmRFdmVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIEluamVjdHMgdGhlIFZlcmNlbCBXZWIgQW5hbHl0aWNzIHNjcmlwdCBpbnRvIHRoZSBwYWdlIGhlYWQgYW5kIHN0YXJ0cyB0cmFja2luZyBwYWdlIHZpZXdzLiBSZWFkIG1vcmUgaW4gb3VyIFtkb2N1bWVudGF0aW9uXShodHRwczovL3ZlcmNlbC5jb20vZG9jcy9jb25jZXB0cy9hbmFseXRpY3MvcGFja2FnZSkuXG4gKiBAcGFyYW0gW3Byb3BzXSAtIEFuYWx5dGljcyBvcHRpb25zLlxuICogQHBhcmFtIFtwcm9wcy5tb2RlXSAtIFRoZSBtb2RlIHRvIHVzZSBmb3IgdGhlIGFuYWx5dGljcyBzY3JpcHQuIERlZmF1bHRzIHRvIGBhdXRvYC5cbiAqICAtIGBhdXRvYCAtIEF1dG9tYXRpY2FsbHkgZGV0ZWN0IHRoZSBlbnZpcm9ubWVudC4gIFVzZXMgYHByb2R1Y3Rpb25gIGlmIHRoZSBlbnZpcm9ubWVudCBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cbiAqICAtIGBwcm9kdWN0aW9uYCAtIEFsd2F5cyB1c2UgdGhlIHByb2R1Y3Rpb24gc2NyaXB0LiAoU2VuZHMgZXZlbnRzIHRvIHRoZSBzZXJ2ZXIpXG4gKiAgLSBgZGV2ZWxvcG1lbnRgIC0gQWx3YXlzIHVzZSB0aGUgZGV2ZWxvcG1lbnQgc2NyaXB0LiAoTG9ncyBldmVudHMgdG8gdGhlIGNvbnNvbGUpXG4gKiBAcGFyYW0gW3Byb3BzLmRlYnVnXSAtIFdoZXRoZXIgdG8gZW5hYmxlIGRlYnVnIGxvZ2dpbmcgaW4gZGV2ZWxvcG1lbnQuIERlZmF1bHRzIHRvIGB0cnVlYC5cbiAqIEBwYXJhbSBbcHJvcHMuYmVmb3JlU2VuZF0gLSBBIG1pZGRsZXdhcmUgZnVuY3Rpb24gdG8gbW9kaWZ5IGV2ZW50cyBiZWZvcmUgdGhleSBhcmUgc2VudC4gU2hvdWxkIHJldHVybiB0aGUgZXZlbnQgb2JqZWN0IG9yIGBudWxsYCB0byBjYW5jZWwgdGhlIGV2ZW50LlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBpbXBvcnQgeyBBbmFseXRpY3MgfSBmcm9tICdAdmVyY2VsL2FuYWx5dGljcy9yZWFjdCc7XG4gKlxuICogZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICogIHJldHVybiAoXG4gKiAgIDxkaXY+XG4gKiAgICA8QW5hbHl0aWNzIC8+XG4gKiAgICA8aDE+TXkgQXBwPC9oMT5cbiAqICA8L2Rpdj5cbiAqICk7XG4gKiB9XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gQW5hbHl0aWNzKFxuICBwcm9wczogQW5hbHl0aWNzUHJvcHMgJiB7XG4gICAgZnJhbWV3b3JrPzogc3RyaW5nO1xuICAgIHJvdXRlPzogc3RyaW5nIHwgbnVsbDtcbiAgICBwYXRoPzogc3RyaW5nIHwgbnVsbDtcbiAgfVxuKTogbnVsbCB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLmJlZm9yZVNlbmQpIHtcbiAgICAgIHdpbmRvdy52YT8uKCdiZWZvcmVTZW5kJywgcHJvcHMuYmVmb3JlU2VuZCk7XG4gICAgfVxuICB9LCBbcHJvcHMuYmVmb3JlU2VuZF0pO1xuXG4gIC8vIGJpb21lLWlnbm9yZSBsaW50L2NvcnJlY3RuZXNzL3VzZUV4aGF1c3RpdmVEZXBlbmRlbmNpZXM6IG9ubHkgcnVuIG9uY2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbmplY3Qoe1xuICAgICAgZnJhbWV3b3JrOiBwcm9wcy5mcmFtZXdvcmsgfHwgJ3JlYWN0JyxcbiAgICAgIC4uLihwcm9wcy5yb3V0ZSAhPT0gdW5kZWZpbmVkICYmIHsgZGlzYWJsZUF1dG9UcmFjazogdHJ1ZSB9KSxcbiAgICAgIC4uLnByb3BzLFxuICAgIH0pO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgLS0gb25seSBydW4gb25jZVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBleHBsaWNpdGVseSB0cmFjayBwYWdlIHZpZXcsIHNpbmNlIHdlIGRpc2FibGVkIGF1dG8gdHJhY2tpbmdcbiAgICBpZiAocHJvcHMucm91dGUgJiYgcHJvcHMucGF0aCkge1xuICAgICAgcGFnZXZpZXcoeyByb3V0ZTogcHJvcHMucm91dGUsIHBhdGg6IHByb3BzLnBhdGggfSk7XG4gICAgfVxuICB9LCBbcHJvcHMucm91dGUsIHByb3BzLnBhdGhdKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IHsgdHJhY2ssIEFuYWx5dGljcyB9O1xuZXhwb3J0IHR5cGUgeyBBbmFseXRpY3NQcm9wcywgQmVmb3JlU2VuZCwgQmVmb3JlU2VuZEV2ZW50IH07XG4iLCJ7XG4gIFwibmFtZVwiOiBcIkB2ZXJjZWwvYW5hbHl0aWNzXCIsXG4gIFwidmVyc2lvblwiOiBcIjEuNC4xXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJHYWluIHJlYWwtdGltZSB0cmFmZmljIGluc2lnaHRzIHdpdGggVmVyY2VsIFdlYiBBbmFseXRpY3NcIixcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJhbmFseXRpY3NcIixcbiAgICBcInZlcmNlbFwiXG4gIF0sXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ1cmxcIjogXCJnaXRodWI6dmVyY2VsL2FuYWx5dGljc1wiLFxuICAgIFwiZGlyZWN0b3J5XCI6IFwicGFja2FnZXMvd2ViXCJcbiAgfSxcbiAgXCJsaWNlbnNlXCI6IFwiTVBMLTIuMFwiLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLi9wYWNrYWdlLmpzb25cIjogXCIuL3BhY2thZ2UuanNvblwiLFxuICAgIFwiLlwiOiB7XG4gICAgICBcImJyb3dzZXJcIjogXCIuL2Rpc3QvaW5kZXgubWpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9pbmRleC5tanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vYXN0cm9cIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvYXN0cm8vY29tcG9uZW50LnRzXCJcbiAgICB9LFxuICAgIFwiLi9uZXh0XCI6IHtcbiAgICAgIFwiYnJvd3NlclwiOiBcIi4vZGlzdC9uZXh0L2luZGV4Lm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvbmV4dC9pbmRleC5tanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9uZXh0L2luZGV4LmpzXCJcbiAgICB9LFxuICAgIFwiLi9udXh0XCI6IHtcbiAgICAgIFwiYnJvd3NlclwiOiBcIi4vZGlzdC9udXh0L2luZGV4Lm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvbnV4dC9pbmRleC5tanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9udXh0L2luZGV4LmpzXCJcbiAgICB9LFxuICAgIFwiLi9yZWFjdFwiOiB7XG4gICAgICBcImJyb3dzZXJcIjogXCIuL2Rpc3QvcmVhY3QvaW5kZXgubWpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9yZWFjdC9pbmRleC5tanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9yZWFjdC9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vcmVtaXhcIjoge1xuICAgICAgXCJicm93c2VyXCI6IFwiLi9kaXN0L3JlbWl4L2luZGV4Lm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvcmVtaXgvaW5kZXgubWpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvcmVtaXgvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3NlcnZlclwiOiB7XG4gICAgICBcIm5vZGVcIjogXCIuL2Rpc3Qvc2VydmVyL2luZGV4LmpzXCIsXG4gICAgICBcImVkZ2UtbGlnaHRcIjogXCIuL2Rpc3Qvc2VydmVyL2luZGV4Lm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3Qvc2VydmVyL2luZGV4Lm1qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L3NlcnZlci9pbmRleC5qc1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiLi9kaXN0L3NlcnZlci9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vc3ZlbHRla2l0XCI6IHtcbiAgICAgIFwic3ZlbHRlXCI6IFwiLi9kaXN0L3N2ZWx0ZWtpdC9pbmRleC5tanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3Qvc3ZlbHRla2l0L2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL3Z1ZVwiOiB7XG4gICAgICBcImJyb3dzZXJcIjogXCIuL2Rpc3QvdnVlL2luZGV4Lm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvdnVlL2luZGV4Lm1qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L3Z1ZS9pbmRleC5qc1wiXG4gICAgfVxuICB9LFxuICBcIm1haW5cIjogXCIuL2Rpc3QvaW5kZXgubWpzXCIsXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuICBcInR5cGVzVmVyc2lvbnNcIjoge1xuICAgIFwiKlwiOiB7XG4gICAgICBcIipcIjogW1xuICAgICAgICBcImRpc3QvaW5kZXguZC50c1wiXG4gICAgICBdLFxuICAgICAgXCJuZXh0XCI6IFtcbiAgICAgICAgXCJkaXN0L25leHQvaW5kZXguZC50c1wiXG4gICAgICBdLFxuICAgICAgXCJudXh0XCI6IFtcbiAgICAgICAgXCJkaXN0L251eHQvaW5kZXguZC50c1wiXG4gICAgICBdLFxuICAgICAgXCJyZWFjdFwiOiBbXG4gICAgICAgIFwiZGlzdC9yZWFjdC9pbmRleC5kLnRzXCJcbiAgICAgIF0sXG4gICAgICBcInJlbWl4XCI6IFtcbiAgICAgICAgXCJkaXN0L3JlbWl4L2luZGV4LmQudHNcIlxuICAgICAgXSxcbiAgICAgIFwic2VydmVyXCI6IFtcbiAgICAgICAgXCJkaXN0L3NlcnZlci9pbmRleC5kLnRzXCJcbiAgICAgIF0sXG4gICAgICBcInN2ZWx0ZWtpdFwiOiBbXG4gICAgICAgIFwiZGlzdC9zdmVsdGVraXQvaW5kZXguZC50c1wiXG4gICAgICBdLFxuICAgICAgXCJ2dWVcIjogW1xuICAgICAgICBcImRpc3QvdnVlL2luZGV4LmQudHNcIlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwidHN1cCAmJiBwbnBtIGNvcHktYXN0cm9cIixcbiAgICBcImNvcHktYXN0cm9cIjogXCJjcCAtUiBzcmMvYXN0cm8gZGlzdC9cIixcbiAgICBcImRldlwiOiBcInBucG0gY29weS1hc3RybyAmJiB0c3VwIC0td2F0Y2hcIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgLlwiLFxuICAgIFwibGludC1maXhcIjogXCJlc2xpbnQgLiAtLWZpeFwiLFxuICAgIFwidGVzdFwiOiBcImplc3RcIixcbiAgICBcInR5cGUtY2hlY2tcIjogXCJ0c2MgLS1ub0VtaXRcIlxuICB9LFxuICBcImVzbGludENvbmZpZ1wiOiB7XG4gICAgXCJleHRlbmRzXCI6IFtcbiAgICAgIFwiQHZlcmNlbC9lc2xpbnQtY29uZmlnXCJcbiAgICBdLFxuICAgIFwicnVsZXNcIjoge1xuICAgICAgXCJ0c2RvYy9zeW50YXhcIjogXCJvZmZcIlxuICAgIH0sXG4gICAgXCJpZ25vcmVQYXR0ZXJuc1wiOiBbXG4gICAgICBcImplc3Quc2V0dXAudHNcIlxuICAgIF1cbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGplc3QvZ2xvYmFsc1wiOiBcIl4yOS43LjBcIixcbiAgICBcIkBzd2MvY29yZVwiOiBcIl4xLjguMFwiLFxuICAgIFwiQHN3Yy9qZXN0XCI6IFwiXjAuMi4zN1wiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9qZXN0LWRvbVwiOiBcIl42LjYuM1wiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9yZWFjdFwiOiBcIl4xNi4wLjFcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIwLjE3LjZcIixcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4zLjEyXCIsXG4gICAgXCJAdmVyY2VsL2VzbGludC1jb25maWdcIjogXCJ3b3Jrc3BhY2U6MC4wLjBcIixcbiAgICBcImplc3RcIjogXCJeMjkuNy4wXCIsXG4gICAgXCJqZXN0LWVudmlyb25tZW50LWpzZG9tXCI6IFwiXjI5LjcuMFwiLFxuICAgIFwic2VydmVyLW9ubHlcIjogXCJeMC4wLjFcIixcbiAgICBcInN2ZWx0ZVwiOiBcIl41LjEuMTBcIixcbiAgICBcInRzdXBcIjogXCI3LjEuMFwiLFxuICAgIFwidnVlXCI6IFwiXjMuNS4xMlwiLFxuICAgIFwidnVlLXJvdXRlclwiOiBcIl40LjQuNVwiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAcmVtaXgtcnVuL3JlYWN0XCI6IFwiXjJcIixcbiAgICBcIkBzdmVsdGVqcy9raXRcIjogXCJeMSB8fCBeMlwiLFxuICAgIFwibmV4dFwiOiBcIj49IDEzXCIsXG4gICAgXCJyZWFjdFwiOiBcIl4xOCB8fCBeMTkgfHwgXjE5LjAuMC1yY1wiLFxuICAgIFwic3ZlbHRlXCI6IFwiPj0gNFwiLFxuICAgIFwidnVlXCI6IFwiXjNcIixcbiAgICBcInZ1ZS1yb3V0ZXJcIjogXCJeNFwiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc01ldGFcIjoge1xuICAgIFwiQHJlbWl4LXJ1bi9yZWFjdFwiOiB7XG4gICAgICBcIm9wdGlvbmFsXCI6IHRydWVcbiAgICB9LFxuICAgIFwiQHN2ZWx0ZWpzL2tpdFwiOiB7XG4gICAgICBcIm9wdGlvbmFsXCI6IHRydWVcbiAgICB9LFxuICAgIFwibmV4dFwiOiB7XG4gICAgICBcIm9wdGlvbmFsXCI6IHRydWVcbiAgICB9LFxuICAgIFwicmVhY3RcIjoge1xuICAgICAgXCJvcHRpb25hbFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInN2ZWx0ZVwiOiB7XG4gICAgICBcIm9wdGlvbmFsXCI6IHRydWVcbiAgICB9LFxuICAgIFwidnVlXCI6IHtcbiAgICAgIFwib3B0aW9uYWxcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJ2dWUtcm91dGVyXCI6IHtcbiAgICAgIFwib3B0aW9uYWxcIjogdHJ1ZVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGluaXRRdWV1ZSA9ICgpOiB2b2lkID0+IHtcbiAgLy8gaW5pdGlhbGl6ZSB2YSB1bnRpbCBzY3JpcHQgaXMgbG9hZGVkXG4gIGlmICh3aW5kb3cudmEpIHJldHVybjtcblxuICB3aW5kb3cudmEgPSBmdW5jdGlvbiBhKC4uLnBhcmFtcyk6IHZvaWQge1xuICAgICh3aW5kb3cudmFxID0gd2luZG93LnZhcSB8fCBbXSkucHVzaChwYXJhbXMpO1xuICB9O1xufTtcbiIsImltcG9ydCB0eXBlIHsgQWxsb3dlZFByb3BlcnR5VmFsdWVzLCBNb2RlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Jyb3dzZXIoKTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gZGV0ZWN0RW52aXJvbm1lbnQoKTogJ2RldmVsb3BtZW50JyB8ICdwcm9kdWN0aW9uJyB7XG4gIHRyeSB7XG4gICAgY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG4gICAgaWYgKGVudiA9PT0gJ2RldmVsb3BtZW50JyB8fCBlbnYgPT09ICd0ZXN0Jykge1xuICAgICAgcmV0dXJuICdkZXZlbG9wbWVudCc7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gZG8gbm90aGluZywgdGhpcyBpcyBva2F5XG4gIH1cbiAgcmV0dXJuICdwcm9kdWN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1vZGUobW9kZTogTW9kZSA9ICdhdXRvJyk6IHZvaWQge1xuICBpZiAobW9kZSA9PT0gJ2F1dG8nKSB7XG4gICAgd2luZG93LnZhbSA9IGRldGVjdEVudmlyb25tZW50KCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgd2luZG93LnZhbSA9IG1vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2RlKCk6IE1vZGUge1xuICBjb25zdCBtb2RlID0gaXNCcm93c2VyKCkgPyB3aW5kb3cudmFtIDogZGV0ZWN0RW52aXJvbm1lbnQoKTtcbiAgcmV0dXJuIG1vZGUgfHwgJ3Byb2R1Y3Rpb24nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9kdWN0aW9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0TW9kZSgpID09PSAncHJvZHVjdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RldmVsb3BtZW50KCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0TW9kZSgpID09PSAnZGV2ZWxvcG1lbnQnO1xufVxuXG5mdW5jdGlvbiByZW1vdmVLZXkoXG4gIGtleTogc3RyaW5nLFxuICB7IFtrZXldOiBfLCAuLi5yZXN0IH1cbik6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgcmV0dXJuIHJlc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVByb3BlcnRpZXMoXG4gIHByb3BlcnRpZXM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkLFxuICBvcHRpb25zOiB7XG4gICAgc3RyaXA/OiBib29sZWFuO1xuICB9XG4pOiBFcnJvciB8IFJlY29yZDxzdHJpbmcsIEFsbG93ZWRQcm9wZXJ0eVZhbHVlcz4gfCB1bmRlZmluZWQge1xuICBpZiAoIXByb3BlcnRpZXMpIHJldHVybiB1bmRlZmluZWQ7XG4gIGxldCBwcm9wcyA9IHByb3BlcnRpZXM7XG4gIGNvbnN0IGVycm9yUHJvcGVydGllczogc3RyaW5nW10gPSBbXTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcGVydGllcykpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMuc3RyaXApIHtcbiAgICAgICAgcHJvcHMgPSByZW1vdmVLZXkoa2V5LCBwcm9wcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvclByb3BlcnRpZXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChlcnJvclByb3BlcnRpZXMubGVuZ3RoID4gMCAmJiAhb3B0aW9ucy5zdHJpcCkge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmUgbm90IHZhbGlkOiAke2Vycm9yUHJvcGVydGllcy5qb2luKFxuICAgICAgICAnLCAnXG4gICAgICApfS4gT25seSBzdHJpbmdzLCBudW1iZXJzLCBib29sZWFucywgYW5kIG51bGwgYXJlIGFsbG93ZWQuYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHByb3BzIGFzIFJlY29yZDxzdHJpbmcsIEFsbG93ZWRQcm9wZXJ0eVZhbHVlcz47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlUm91dGUoXG4gIHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsLFxuICBwYXRoUGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBzdHJpbmdbXT4gfCBudWxsXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFwYXRobmFtZSB8fCAhcGF0aFBhcmFtcykge1xuICAgIHJldHVybiBwYXRobmFtZTtcbiAgfVxuXG4gIGxldCByZXN1bHQgPSBwYXRobmFtZTtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMocGF0aFBhcmFtcyk7XG4gICAgLy8gc2ltcGxlIGtleXMgbXVzdCBiZSBoYW5kbGVkIGZpcnN0XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgZW50cmllcykge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBjb25zdCBtYXRjaGVyID0gdHVyblZhbHVlVG9SZWdFeHAodmFsdWUpO1xuICAgICAgICBpZiAobWF0Y2hlci50ZXN0KHJlc3VsdCkpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShtYXRjaGVyLCBgL1ske2tleX1dYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gYXJyYXkgdmFsdWVzIG5leHRcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBlbnRyaWVzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlciA9IHR1cm5WYWx1ZVRvUmVnRXhwKHZhbHVlLmpvaW4oJy8nKSk7XG4gICAgICAgIGlmIChtYXRjaGVyLnRlc3QocmVzdWx0KSkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKG1hdGNoZXIsIGAvWy4uLiR7a2V5fV1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lO1xuICB9XG59XG5cbmZ1bmN0aW9uIHR1cm5WYWx1ZVRvUmVnRXhwKHZhbHVlOiBzdHJpbmcpOiBSZWdFeHAge1xuICByZXR1cm4gbmV3IFJlZ0V4cChgLyR7ZXNjYXBlUmVnRXhwKHZhbHVlKX0oPz1bLz8jXXwkKWApO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XG59XG4iLCJpbXBvcnQgeyBuYW1lIGFzIHBhY2thZ2VOYW1lLCB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcbmltcG9ydCB7IGluaXRRdWV1ZSB9IGZyb20gJy4vcXVldWUnO1xuaW1wb3J0IHR5cGUge1xuICBBbGxvd2VkUHJvcGVydHlWYWx1ZXMsXG4gIEFuYWx5dGljc1Byb3BzLFxuICBGbGFnc0RhdGFJbnB1dCxcbiAgQmVmb3JlU2VuZCxcbiAgQmVmb3JlU2VuZEV2ZW50LFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7XG4gIGlzQnJvd3NlcixcbiAgcGFyc2VQcm9wZXJ0aWVzLFxuICBzZXRNb2RlLFxuICBpc0RldmVsb3BtZW50LFxuICBpc1Byb2R1Y3Rpb24sXG4gIGNvbXB1dGVSb3V0ZSxcbn0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBERVZfU0NSSVBUX1VSTCA9XG4gICdodHRwczovL3ZhLnZlcmNlbC1zY3JpcHRzLmNvbS92MS9zY3JpcHQuZGVidWcuanMnO1xuZXhwb3J0IGNvbnN0IFBST0RfU0NSSVBUX1VSTCA9ICcvX3ZlcmNlbC9pbnNpZ2h0cy9zY3JpcHQuanMnO1xuXG4vKipcbiAqIEluamVjdHMgdGhlIFZlcmNlbCBXZWIgQW5hbHl0aWNzIHNjcmlwdCBpbnRvIHRoZSBwYWdlIGhlYWQgYW5kIHN0YXJ0cyB0cmFja2luZyBwYWdlIHZpZXdzLiBSZWFkIG1vcmUgaW4gb3VyIFtkb2N1bWVudGF0aW9uXShodHRwczovL3ZlcmNlbC5jb20vZG9jcy9jb25jZXB0cy9hbmFseXRpY3MvcGFja2FnZSkuXG4gKiBAcGFyYW0gW3Byb3BzXSAtIEFuYWx5dGljcyBvcHRpb25zLlxuICogQHBhcmFtIFtwcm9wcy5tb2RlXSAtIFRoZSBtb2RlIHRvIHVzZSBmb3IgdGhlIGFuYWx5dGljcyBzY3JpcHQuIERlZmF1bHRzIHRvIGBhdXRvYC5cbiAqICAtIGBhdXRvYCAtIEF1dG9tYXRpY2FsbHkgZGV0ZWN0IHRoZSBlbnZpcm9ubWVudC4gIFVzZXMgYHByb2R1Y3Rpb25gIGlmIHRoZSBlbnZpcm9ubWVudCBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cbiAqICAtIGBwcm9kdWN0aW9uYCAtIEFsd2F5cyB1c2UgdGhlIHByb2R1Y3Rpb24gc2NyaXB0LiAoU2VuZHMgZXZlbnRzIHRvIHRoZSBzZXJ2ZXIpXG4gKiAgLSBgZGV2ZWxvcG1lbnRgIC0gQWx3YXlzIHVzZSB0aGUgZGV2ZWxvcG1lbnQgc2NyaXB0LiAoTG9ncyBldmVudHMgdG8gdGhlIGNvbnNvbGUpXG4gKiBAcGFyYW0gW3Byb3BzLmRlYnVnXSAtIFdoZXRoZXIgdG8gZW5hYmxlIGRlYnVnIGxvZ2dpbmcgaW4gZGV2ZWxvcG1lbnQuIERlZmF1bHRzIHRvIGB0cnVlYC5cbiAqIEBwYXJhbSBbcHJvcHMuYmVmb3JlU2VuZF0gLSBBIG1pZGRsZXdhcmUgZnVuY3Rpb24gdG8gbW9kaWZ5IGV2ZW50cyBiZWZvcmUgdGhleSBhcmUgc2VudC4gU2hvdWxkIHJldHVybiB0aGUgZXZlbnQgb2JqZWN0IG9yIGBudWxsYCB0byBjYW5jZWwgdGhlIGV2ZW50LlxuICogQHBhcmFtIFtwcm9wcy5kc25dIC0gVGhlIERTTiBvZiB0aGUgcHJvamVjdCB0byBzZW5kIGV2ZW50cyB0by4gT25seSByZXF1aXJlZCB3aGVuIHNlbGYtaG9zdGluZy5cbiAqIEBwYXJhbSBbcHJvcHMuZGlzYWJsZUF1dG9UcmFja10gLSBXaGV0aGVyIHRoZSBpbmplY3RlZCBzY3JpcHQgc2hvdWxkIHRyYWNrIHBhZ2Ugdmlld3MgZnJvbSBwdXNoU3RhdGUgZXZlbnRzLiBEaXNhYmxlIGlmIHJvdXRlIGlzIHVwZGF0ZWQgYWZ0ZXIgcHVzaFN0YXRlLCBhIG1hbnVhbGx5IGNhbGwgcGFnZSBwYWdldmlldygpLlxuICovXG5mdW5jdGlvbiBpbmplY3QoXG4gIHByb3BzOiBBbmFseXRpY3NQcm9wcyAmIHtcbiAgICBmcmFtZXdvcms/OiBzdHJpbmc7XG4gICAgZGlzYWJsZUF1dG9UcmFjaz86IGJvb2xlYW47XG4gIH0gPSB7XG4gICAgZGVidWc6IHRydWUsXG4gIH1cbik6IHZvaWQge1xuICBpZiAoIWlzQnJvd3NlcigpKSByZXR1cm47XG5cbiAgc2V0TW9kZShwcm9wcy5tb2RlKTtcblxuICBpbml0UXVldWUoKTtcblxuICBpZiAocHJvcHMuYmVmb3JlU2VuZCkge1xuICAgIHdpbmRvdy52YT8uKCdiZWZvcmVTZW5kJywgcHJvcHMuYmVmb3JlU2VuZCk7XG4gIH1cblxuICBjb25zdCBzcmMgPVxuICAgIHByb3BzLnNjcmlwdFNyYyB8fCAoaXNEZXZlbG9wbWVudCgpID8gREVWX1NDUklQVF9VUkwgOiBQUk9EX1NDUklQVF9VUkwpO1xuXG4gIGlmIChkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmMqPVwiJHtzcmN9XCJdYCkpIHJldHVybjtcblxuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LnNyYyA9IHNyYztcbiAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgc2NyaXB0LmRhdGFzZXQuc2RrbiA9XG4gICAgcGFja2FnZU5hbWUgKyAocHJvcHMuZnJhbWV3b3JrID8gYC8ke3Byb3BzLmZyYW1ld29ya31gIDogJycpO1xuICBzY3JpcHQuZGF0YXNldC5zZGt2ID0gdmVyc2lvbjtcblxuICBpZiAocHJvcHMuZGlzYWJsZUF1dG9UcmFjaykge1xuICAgIHNjcmlwdC5kYXRhc2V0LmRpc2FibGVBdXRvVHJhY2sgPSAnMSc7XG4gIH1cbiAgaWYgKHByb3BzLmVuZHBvaW50KSB7XG4gICAgc2NyaXB0LmRhdGFzZXQuZW5kcG9pbnQgPSBwcm9wcy5lbmRwb2ludDtcbiAgfVxuICBpZiAocHJvcHMuZHNuKSB7XG4gICAgc2NyaXB0LmRhdGFzZXQuZHNuID0gcHJvcHMuZHNuO1xuICB9XG5cbiAgc2NyaXB0Lm9uZXJyb3IgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gaXNEZXZlbG9wbWVudCgpXG4gICAgICA/ICdQbGVhc2UgY2hlY2sgaWYgYW55IGFkIGJsb2NrZXJzIGFyZSBlbmFibGVkIGFuZCB0cnkgYWdhaW4uJ1xuICAgICAgOiAnQmUgc3VyZSB0byBlbmFibGUgV2ViIEFuYWx5dGljcyBmb3IgeW91ciBwcm9qZWN0IGFuZCBkZXBsb3kgYWdhaW4uIFNlZSBodHRwczovL3ZlcmNlbC5jb20vZG9jcy9hbmFseXRpY3MvcXVpY2tzdGFydCBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGUgLS0gTG9nZ2luZyB0byBjb25zb2xlIGlzIGludGVudGlvbmFsXG4gICAgY29uc29sZS5sb2coXG4gICAgICBgW1ZlcmNlbCBXZWIgQW5hbHl0aWNzXSBGYWlsZWQgdG8gbG9hZCBzY3JpcHQgZnJvbSAke3NyY30uICR7ZXJyb3JNZXNzYWdlfWBcbiAgICApO1xuICB9O1xuXG4gIGlmIChpc0RldmVsb3BtZW50KCkgJiYgcHJvcHMuZGVidWcgPT09IGZhbHNlKSB7XG4gICAgc2NyaXB0LmRhdGFzZXQuZGVidWcgPSAnZmFsc2UnO1xuICB9XG5cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuXG4vKipcbiAqIFRyYWNrcyBhIGN1c3RvbSBldmVudC4gUGxlYXNlIHJlZmVyIHRvIHRoZSBbZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly92ZXJjZWwuY29tL2RvY3MvY29uY2VwdHMvYW5hbHl0aWNzL2N1c3RvbS1ldmVudHMpIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGN1c3RvbSBldmVudHMuXG4gKiBAcGFyYW0gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudC5cbiAqICogRXhhbXBsZXM6IGBQdXJjaGFzZWAsIGBDbGljayBCdXR0b25gLCBvciBgUGxheSBWaWRlb2AuXG4gKiBAcGFyYW0gW3Byb3BlcnRpZXNdIC0gQWRkaXRpb25hbCBwcm9wZXJ0aWVzIG9mIHRoZSBldmVudC4gTmVzdGVkIG9iamVjdHMgYXJlIG5vdCBzdXBwb3J0ZWQuIEFsbG93ZWQgdmFsdWVzIGFyZSBgc3RyaW5nYCwgYG51bWJlcmAsIGBib29sZWFuYCwgYW5kIGBudWxsYC5cbiAqL1xuZnVuY3Rpb24gdHJhY2soXG4gIG5hbWU6IHN0cmluZyxcbiAgcHJvcGVydGllcz86IFJlY29yZDxzdHJpbmcsIEFsbG93ZWRQcm9wZXJ0eVZhbHVlcz4sXG4gIG9wdGlvbnM/OiB7XG4gICAgZmxhZ3M/OiBGbGFnc0RhdGFJbnB1dDtcbiAgfVxuKTogdm9pZCB7XG4gIGlmICghaXNCcm93c2VyKCkpIHtcbiAgICBjb25zdCBtc2cgPVxuICAgICAgJ1tWZXJjZWwgV2ViIEFuYWx5dGljc10gUGxlYXNlIGltcG9ydCBgdHJhY2tgIGZyb20gYEB2ZXJjZWwvYW5hbHl0aWNzL3NlcnZlcmAgd2hlbiB1c2luZyB0aGlzIGZ1bmN0aW9uIGluIGEgc2VydmVyIGVudmlyb25tZW50JztcblxuICAgIGlmIChpc1Byb2R1Y3Rpb24oKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGUgLS0gU2hvdyB3YXJuaW5nIGluIHByb2R1Y3Rpb25cbiAgICAgIGNvbnNvbGUud2Fybihtc2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICB3aW5kb3cudmE/LignZXZlbnQnLCB7IG5hbWUsIG9wdGlvbnMgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9wcyA9IHBhcnNlUHJvcGVydGllcyhwcm9wZXJ0aWVzLCB7XG4gICAgICBzdHJpcDogaXNQcm9kdWN0aW9uKCksXG4gICAgfSk7XG5cbiAgICB3aW5kb3cudmE/LignZXZlbnQnLCB7XG4gICAgICBuYW1lLFxuICAgICAgZGF0YTogcHJvcHMsXG4gICAgICBvcHRpb25zLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IgJiYgaXNEZXZlbG9wbWVudCgpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZSAtLSBMb2dnaW5nIHRvIGNvbnNvbGUgaXMgaW50ZW50aW9uYWxcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFnZXZpZXcoe1xuICByb3V0ZSxcbiAgcGF0aCxcbn06IHtcbiAgcm91dGU/OiBzdHJpbmcgfCBudWxsO1xuICBwYXRoPzogc3RyaW5nO1xufSk6IHZvaWQge1xuICB3aW5kb3cudmE/LigncGFnZXZpZXcnLCB7IHJvdXRlLCBwYXRoIH0pO1xufVxuXG5leHBvcnQgeyBpbmplY3QsIHRyYWNrLCBwYWdldmlldywgY29tcHV0ZVJvdXRlIH07XG5leHBvcnQgdHlwZSB7IEFuYWx5dGljc1Byb3BzLCBCZWZvcmVTZW5kLCBCZWZvcmVTZW5kRXZlbnQgfTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1kZWZhdWx0LWV4cG9ydCAtLSBEZWZhdWx0IGV4cG9ydCBpcyBpbnRlbnRpb25hbFxuZXhwb3J0IGRlZmF1bHQge1xuICBpbmplY3QsXG4gIHRyYWNrLFxuICBjb21wdXRlUm91dGUsXG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIm5hbWUiLCJ2ZXJzaW9uIiwiaW5pdFF1ZXVlIiwid2luZG93IiwidmEiLCJhIiwicGFyYW1zIiwidmFxIiwicHVzaCIsImlzQnJvd3NlciIsImRldGVjdEVudmlyb25tZW50IiwiZW52IiwiZSIsInNldE1vZGUiLCJtb2RlIiwidmFtIiwiZ2V0TW9kZSIsImlzUHJvZHVjdGlvbiIsImlzRGV2ZWxvcG1lbnQiLCJyZW1vdmVLZXkiLCJrZXkiLCJfIiwicmVzdCIsInBhcnNlUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJvcHRpb25zIiwicHJvcHMiLCJlcnJvclByb3BlcnRpZXMiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJzdHJpcCIsImxlbmd0aCIsIkVycm9yIiwiam9pbiIsIkRFVl9TQ1JJUFRfVVJMIiwiUFJPRF9TQ1JJUFRfVVJMIiwiaW5qZWN0IiwiZGVidWciLCJfYSIsImJlZm9yZVNlbmQiLCJjYWxsIiwic3JjIiwic2NyaXB0U3JjIiwiZG9jdW1lbnQiLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJkZWZlciIsImRhdGFzZXQiLCJzZGtuIiwiZnJhbWV3b3JrIiwic2RrdiIsImRpc2FibGVBdXRvVHJhY2siLCJlbmRwb2ludCIsImRzbiIsIm9uZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiYXBwZW5kQ2hpbGQiLCJ0cmFjayIsIl9iIiwibXNnIiwid2FybiIsImRhdGEiLCJlcnIiLCJlcnJvciIsInBhZ2V2aWV3Iiwicm91dGUiLCJwYXRoIiwiQW5hbHl0aWNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@vercel/analytics/dist/react/index.mjs\n");

/***/ }),

/***/ "(rsc)/./node_modules/@vercel/analytics/dist/react/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Analytics: () => (/* binding */ e0),
/* harmony export */   track: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Clones\portfolio-website\node_modules\@vercel\analytics\dist\react\index.mjs#Analytics`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Clones\portfolio-website\node_modules\@vercel\analytics\dist\react\index.mjs#track`);


/***/ })

};
;