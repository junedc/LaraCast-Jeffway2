/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("var Errors = function Errors() {\r\n    this.errors = {};\r\n};\r\n\r\n\r\n/**\r\n * Determine if an errors exists for the given field.\r\n *\r\n * @param {string} field\r\n */\r\nErrors.prototype.has = function has (field) {\r\n    return this.errors.hasOwnProperty(field);\r\n};\r\n\r\n\r\n/**\r\n * Determine if we have any errors.\r\n */\r\nErrors.prototype.any = function any () {\r\n    return Object.keys(this.errors).length > 0;\r\n};\r\n\r\n\r\n/**\r\n * Retrieve the error message for a field.\r\n *\r\n * @param {string} field\r\n */\r\nErrors.prototype.get = function get (field) {\r\n    if (this.errors[field]) {\r\n        return this.errors[field][0];\r\n    }\r\n};\r\n\r\n\r\n/**\r\n * Record the new errors.\r\n *\r\n * @param {object} errors\r\n */\r\nErrors.prototype.record = function record (errors) {\r\n    this.errors = errors;\r\n};\r\n\r\n\r\n/**\r\n * Clear one or all error fields.\r\n *\r\n * @param {string|null} field\r\n */\r\nErrors.prototype.clear = function clear (field) {\r\n    if (field) {\r\n        delete this.errors[field];\r\n\r\n        return;\r\n    }\r\n\r\n    this.errors = {};\r\n};\r\n\r\n\r\nvar Form = function Form(data) {\n    var this$1 = this;\n\r\n    this.originalData = data;\r\n\r\n    for (var field in data) {\r\n        this$1[field] = data[field];\r\n    }\r\n\r\n    this.errors = new Errors();\r\n};\r\n\r\n\r\n/**\r\n * Fetch all relevant data for the form.\r\n */\r\nForm.prototype.data = function data () {\n        var this$1 = this;\n\r\n    var data = {};\r\n\r\n    for (var property in this.originalData) {\r\n        data[property] = this$1[property];\r\n    }\r\n\r\n    return data;\r\n};\r\n\r\n\r\n/**\r\n * Reset the form fields.\r\n */\r\nForm.prototype.reset = function reset () {\n        var this$1 = this;\n\r\n    for (var field in this.originalData) {\r\n        this$1[field] = '';\r\n    }\r\n\r\n    this.errors.clear();\r\n};\r\n\r\n\r\n/**\r\n * Send a POST request to the given URL.\r\n * .\r\n * @param {string} url\r\n */\r\nForm.prototype.post = function post (url) {\r\n    return this.submit('post', url);\r\n};\r\n\r\n\r\n/**\r\n * Send a PUT request to the given URL.\r\n * .\r\n * @param {string} url\r\n */\r\nForm.prototype.put = function put (url) {\r\n    return this.submit('put', url);\r\n};\r\n\r\n\r\n/**\r\n * Send a PATCH request to the given URL.\r\n * .\r\n * @param {string} url\r\n */\r\nForm.prototype.patch = function patch (url) {\r\n    return this.submit('patch', url);\r\n};\r\n\r\n\r\n/**\r\n * Send a DELETE request to the given URL.\r\n * .\r\n * @param {string} url\r\n */\r\nForm.prototype.delete = function delete$1 (url) {\r\n    return this.submit('delete', url);\r\n};\r\n\r\n\r\n/**\r\n * Submit the form.\r\n *\r\n * @param {string} requestType\r\n * @param {string} url\r\n */\r\nForm.prototype.submit = function submit (requestType, url) {\n        var this$1 = this;\n\r\n    return new Promise(function (resolve, reject) {\r\n        axios[requestType](url, this$1.data())\r\n            .then(function (response) {\r\n                this$1.onSuccess(response.data);\r\n\r\n                resolve(response.data);\r\n            })\r\n            .catch(function (error) {\r\n                this$1.onFail(error.response.data);\r\n\r\n                reject(error.response.data);\r\n            });\r\n    });\r\n};\r\n\r\n\r\n/**\r\n * Handle a successful form submission.\r\n *\r\n * @param {object} data\r\n */\r\nForm.prototype.onSuccess = function onSuccess (data) {\r\n    alert(data.message); // temporary\r\n\r\n    this.reset();\r\n};\r\n\r\n\r\n/**\r\n * Handle a failed form submission.\r\n *\r\n * @param {object} errors\r\n */\r\nForm.prototype.onFail = function onFail (errors) {\r\n    this.errors.record(errors);\r\n};\r\n\r\n\r\nnew Vue({\r\n    el: '#app',\r\n\r\n    data: {\r\n        form: new Form({\r\n            name: '',\r\n            description: ''\r\n        })\r\n    },\r\n\r\n    methods: {\r\n        onSubmit: function onSubmit() {\r\n            this.form.post('/projects')\r\n                .then(function (response) { return alert('Wahoo!'); });\r\n        }\r\n    }\r\n});\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEVycm9ycyB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBFcnJvcnMgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0ge307XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIGFuIGVycm9ycyBleGlzdHMgZm9yIHRoZSBnaXZlbiBmaWVsZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRcclxuICAgICAqL1xyXG4gICAgaGFzKGZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgd2UgaGF2ZSBhbnkgZXJyb3JzLlxyXG4gICAgICovXHJcbiAgICBhbnkoKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlIHRoZSBlcnJvciBtZXNzYWdlIGZvciBhIGZpZWxkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxyXG4gICAgICovXHJcbiAgICBnZXQoZmllbGQpIHtcclxuICAgICAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlY29yZCB0aGUgbmV3IGVycm9ycy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXHJcbiAgICAgKi9cclxuICAgIHJlY29yZChlcnJvcnMpIHtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhciBvbmUgb3IgYWxsIGVycm9yIGZpZWxkcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBmaWVsZFxyXG4gICAgICovXHJcbiAgICBjbGVhcihmaWVsZCkge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEZvcm0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgRm9ybSBpbnN0YW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbERhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBmaWVsZCBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXNbZmllbGRdID0gZGF0YVtmaWVsZF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBFcnJvcnMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGZXRjaCBhbGwgcmVsZXZhbnQgZGF0YSBmb3IgdGhlIGZvcm0uXHJcbiAgICAgKi9cclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdGhpcy5vcmlnaW5hbERhdGEpIHtcclxuICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBmb3JtIGZpZWxkcy5cclxuICAgICAqL1xyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gdGhpcy5vcmlnaW5hbERhdGEpIHtcclxuICAgICAgICAgICAgdGhpc1tmaWVsZF0gPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBhIFBPU1QgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxyXG4gICAgICogLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxyXG4gICAgICovXHJcbiAgICBwb3N0KHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncG9zdCcsIHVybCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBhIFBVVCByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXHJcbiAgICAgKiAuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAgICAgKi9cclxuICAgIHB1dCh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3B1dCcsIHVybCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBhIFBBVENIIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cclxuICAgICAqIC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcclxuICAgICAqL1xyXG4gICAgcGF0Y2godXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwYXRjaCcsIHVybCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBhIERFTEVURSByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXHJcbiAgICAgKiAuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZSh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ2RlbGV0ZScsIHVybCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3VibWl0IHRoZSBmb3JtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0VHlwZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxyXG4gICAgICovXHJcbiAgICBzdWJtaXQocmVxdWVzdFR5cGUsIHVybCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGF4aW9zW3JlcXVlc3RUeXBlXSh1cmwsIHRoaXMuZGF0YSgpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZhaWwoZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBhIHN1Y2Nlc3NmdWwgZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXHJcbiAgICAgKi9cclxuICAgIG9uU3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKTsgLy8gdGVtcG9yYXJ5XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgYSBmYWlsZWQgZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvcnNcclxuICAgICAqL1xyXG4gICAgb25GYWlsKGVycm9ycykge1xyXG4gICAgICAgIHRoaXMuZXJyb3JzLnJlY29yZChlcnJvcnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxubmV3IFZ1ZSh7XHJcbiAgICBlbDogJyNhcHAnLFxyXG5cclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5wb3N0KCcvcHJvamVjdHMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gYWxlcnQoJ1dhaG9vIScpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);