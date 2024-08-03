// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"a0Wq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"vCxL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__addDisposableResource = __addDisposableResource;
exports.__assign = void 0;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncValues = __asyncValues;
exports.__await = __await;
exports.__awaiter = __awaiter;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldIn = __classPrivateFieldIn;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__createBinding = void 0;
exports.__decorate = __decorate;
exports.__disposeResources = __disposeResources;
exports.__esDecorate = __esDecorate;
exports.__exportStar = __exportStar;
exports.__extends = __extends;
exports.__generator = __generator;
exports.__importDefault = __importDefault;
exports.__importStar = __importStar;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__metadata = __metadata;
exports.__param = __param;
exports.__propKey = __propKey;
exports.__read = __read;
exports.__rest = __rest;
exports.__runInitializers = __runInitializers;
exports.__setFunctionName = __setFunctionName;
exports.__spread = __spread;
exports.__spreadArray = __spreadArray;
exports.__spreadArrays = __spreadArrays;
exports.__values = __values;
exports.default = void 0;
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
exports.__assign = __assign;
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind,
    key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _,
    done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function (f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? {
      get: descriptor.get,
      set: descriptor.set
    } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
;
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", {
    configurable: true,
    value: prefix ? "".concat(prefix, " ", name) : name
  });
}
;
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = exports.__createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function awaitReturn(f) {
    return function (v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function (v) {
        return new Promise(function (a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: false
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
    i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
;
var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function () {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({
      value: value,
      dispose: dispose,
      async: async
    });
  } else if (async) {
    env.stack.push({
      async: true
    });
  }
  return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function (e) {
          fail(e);
          return next();
        });
      } catch (e) {
        fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}
var _default = exports.default = {
  __extends: __extends,
  __assign: __assign,
  __rest: __rest,
  __decorate: __decorate,
  __param: __param,
  __metadata: __metadata,
  __awaiter: __awaiter,
  __generator: __generator,
  __createBinding: __createBinding,
  __exportStar: __exportStar,
  __values: __values,
  __read: __read,
  __spread: __spread,
  __spreadArrays: __spreadArrays,
  __spreadArray: __spreadArray,
  __await: __await,
  __asyncGenerator: __asyncGenerator,
  __asyncDelegator: __asyncDelegator,
  __asyncValues: __asyncValues,
  __makeTemplateObject: __makeTemplateObject,
  __importStar: __importStar,
  __importDefault: __importDefault,
  __classPrivateFieldGet: __classPrivateFieldGet,
  __classPrivateFieldSet: __classPrivateFieldSet,
  __classPrivateFieldIn: __classPrivateFieldIn,
  __addDisposableResource: __addDisposableResource,
  __disposeResources: __disposeResources
};
},{}],"uJAj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCFoundation = void 0;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = exports.MDCFoundation = /** @class */function () {
  function MDCFoundation(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }
    this.adapter = adapter;
  }
  Object.defineProperty(MDCFoundation, "cssClasses", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "strings", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "numbers", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "defaultAdapter", {
    get: function () {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    },
    enumerable: false,
    configurable: true
  });
  MDCFoundation.prototype.init = function () {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  };
  MDCFoundation.prototype.destroy = function () {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };
  return MDCFoundation;
}();
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = exports.default = MDCFoundation;
},{}],"EQDb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCComponent = void 0;
var _tslib = require("tslib");
var _foundation = require("./foundation");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCComponent = exports.MDCComponent = /** @class */function () {
  function MDCComponent(root, foundation) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    this.root = root;
    this.initialize.apply(this, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args)));
    // Note that we initialize foundation here and not within the constructor's
    // default param so that this.root is defined and can be used within the
    // foundation class.
    this.foundation = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation.init();
    this.initialSyncWithDOM();
  }
  MDCComponent.attachTo = function (root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new _foundation.MDCFoundation({}));
  };
  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
  MDCComponent.prototype.initialize = function () {
    var _args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    }
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
  };
  MDCComponent.prototype.getDefaultFoundation = function () {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };
  MDCComponent.prototype.initialSyncWithDOM = function () {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };
  MDCComponent.prototype.destroy = function () {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation.destroy();
  };
  MDCComponent.prototype.listen = function (evtType, handler, options) {
    this.root.addEventListener(evtType, handler, options);
  };
  MDCComponent.prototype.unlisten = function (evtType, handler, options) {
    this.root.removeEventListener(evtType, handler, options);
  };
  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */
  MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) {
      shouldBubble = false;
    }
    var evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        bubbles: shouldBubble,
        detail: evtData
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }
    this.root.dispatchEvent(evt);
  };
  return MDCComponent;
}();
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = exports.default = MDCComponent;
},{"tslib":"vCxL","./foundation":"uJAj"}],"QP7s":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closest = closest;
exports.estimateScrollWidth = estimateScrollWidth;
exports.matches = matches;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }
  var el = element;
  while (el) {
    if (matches(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */
function estimateScrollWidth(element) {
  // Check the offsetParent. If the element inherits display: none from any
  // parent, the offsetParent property will be null (see
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
  // This check ensures we only clone the node when necessary.
  var htmlEl = element;
  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }
  var clone = htmlEl.cloneNode(true);
  clone.style.setProperty('position', 'absolute');
  clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
  document.documentElement.appendChild(clone);
  var scrollWidth = clone.scrollWidth;
  document.documentElement.removeChild(clone);
  return scrollWidth;
}
},{}],"weL5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = exports.numbers = exports.evolutionClassNameMap = exports.evolutionAttribute = exports.deprecatedClassNameMap = exports.cssClasses = void 0;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var _a, _b;
var cssClasses = exports.cssClasses = {
  LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
  LIST_ITEM_CLASS: 'mdc-list-item',
  LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
  LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
  LIST_ITEM_TEXT_CLASS: 'mdc-list-item__text',
  LIST_ITEM_PRIMARY_TEXT_CLASS: 'mdc-list-item__primary-text',
  ROOT: 'mdc-list'
};
var evolutionClassNameMap = exports.evolutionClassNameMap = (_a = {}, _a["" + cssClasses.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-list-item--activated', _a["" + cssClasses.LIST_ITEM_CLASS] = 'mdc-list-item', _a["" + cssClasses.LIST_ITEM_DISABLED_CLASS] = 'mdc-list-item--disabled', _a["" + cssClasses.LIST_ITEM_SELECTED_CLASS] = 'mdc-list-item--selected', _a["" + cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-list-item__primary-text', _a["" + cssClasses.ROOT] = 'mdc-list', _a);
var deprecatedClassNameMap = exports.deprecatedClassNameMap = (_b = {}, _b["" + cssClasses.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-deprecated-list-item--activated', _b["" + cssClasses.LIST_ITEM_CLASS] = 'mdc-deprecated-list-item', _b["" + cssClasses.LIST_ITEM_DISABLED_CLASS] = 'mdc-deprecated-list-item--disabled', _b["" + cssClasses.LIST_ITEM_SELECTED_CLASS] = 'mdc-deprecated-list-item--selected', _b["" + cssClasses.LIST_ITEM_TEXT_CLASS] = 'mdc-deprecated-list-item__text', _b["" + cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-deprecated-list-item__primary-text', _b["" + cssClasses.ROOT] = 'mdc-deprecated-list', _b);
var strings = exports.strings = {
  ACTION_EVENT: 'MDCList:action',
  SELECTION_CHANGE_EVENT: 'MDCList:selectionChange',
  ARIA_CHECKED: 'aria-checked',
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: 'aria-current',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_ORIENTATION: 'aria-orientation',
  ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: 'aria-selected',
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " a\n  ",
  DEPRECATED_SELECTOR: '.mdc-deprecated-list',
  FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " input[type=\"radio\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " input[type=\"checkbox\"]:not(:disabled)\n  ",
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
};
var numbers = exports.numbers = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
var evolutionAttribute = exports.evolutionAttribute = 'evolution';
},{}],"JqaZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KEY = void 0;
exports.isNavigationEvent = isNavigationEvent;
exports.normalizeKey = normalizeKey;
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * KEY provides normalized string values for keys.
 */
var KEY = exports.KEY = {
  UNKNOWN: 'Unknown',
  BACKSPACE: 'Backspace',
  ENTER: 'Enter',
  SPACEBAR: 'Spacebar',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown',
  END: 'End',
  HOME: 'Home',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_UP: 'ArrowUp',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_DOWN: 'ArrowDown',
  DELETE: 'Delete',
  ESCAPE: 'Escape',
  TAB: 'Tab'
};
var normalizedKeys = new Set();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
normalizedKeys.add(KEY.TAB);
var KEY_CODE = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
};
var mappedKeyCodes = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
var navigationKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this
// by hand.
navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
/**
 * normalizeKey returns the normalized string for a navigational action.
 */
function normalizeKey(evt) {
  var key = evt.key;
  // If the event already has a normalized key, return it
  if (normalizedKeys.has(key)) {
    return key;
  }
  // tslint:disable-next-line:deprecation
  var mappedKey = mappedKeyCodes.get(evt.keyCode);
  if (mappedKey) {
    return mappedKey;
  }
  return KEY.UNKNOWN;
}
/**
 * isNavigationEvent returns whether the event is a navigation event
 */
function isNavigationEvent(evt) {
  return navigationKeys.has(normalizeKey(evt));
}
},{}],"AAdL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preventDefaultEvent = void 0;
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
/**
 * Ensures that preventDefault is only called if the containing element
 * doesn't consume the event, and it will cause an unintended scroll.
 *
 * @param evt keyboard event to be prevented.
 */
var preventDefaultEvent = function (evt) {
  var target = evt.target;
  if (!target) {
    return;
  }
  var tagName = ("" + target.tagName).toLowerCase();
  if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
    evt.preventDefault();
  }
};
exports.preventDefaultEvent = preventDefaultEvent;
},{}],"l7oj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearBuffer = clearBuffer;
exports.handleKeydown = handleKeydown;
exports.initSortedIndex = initSortedIndex;
exports.initState = initState;
exports.isTypingInProgress = isTypingInProgress;
exports.matchItem = matchItem;
var _keyboard = require("@material/dom/keyboard");
var _constants = require("./constants");
var _events = require("./events");
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Initializes a state object for typeahead. Use the same reference for calls to
 * typeahead functions.
 *
 * @return The current state of the typeahead process. Each state reference
 *     represents a typeahead instance as the reference is typically mutated
 *     in-place.
 */
function initState() {
  var state = {
    bufferClearTimeout: 0,
    currentFirstChar: '',
    sortedIndexCursor: 0,
    typeaheadBuffer: ''
  };
  return state;
}
/**
 * Initializes typeahead state by indexing the current list items by primary
 * text into the sortedIndexByFirstChar data structure.
 *
 * @param listItemCount numer of items in the list
 * @param getPrimaryTextByItemIndex function that returns the primary text at a
 *     given index
 *
 * @return Map that maps the first character of the primary text to the full
 *     list text and it's index
 */
function initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
  var sortedIndexByFirstChar = new Map();
  // Aggregate item text to index mapping
  for (var i = 0; i < listItemCount; i++) {
    var primaryText = getPrimaryTextByItemIndex(i).trim();
    if (!primaryText) {
      continue;
    }
    var firstChar = primaryText[0].toLowerCase();
    if (!sortedIndexByFirstChar.has(firstChar)) {
      sortedIndexByFirstChar.set(firstChar, []);
    }
    sortedIndexByFirstChar.get(firstChar).push({
      text: primaryText.toLowerCase(),
      index: i
    });
  }
  // Sort the mapping
  // TODO(b/157162694): Investigate replacing forEach with Map.values()
  sortedIndexByFirstChar.forEach(function (values) {
    values.sort(function (first, second) {
      return first.index - second.index;
    });
  });
  return sortedIndexByFirstChar;
}
/**
 * Given the next desired character from the user, it attempts to find the next
 * list option matching the buffer. Wraps around if at the end of options.
 *
 * @param opts Options and accessors
 *   - nextChar - the next character to match against items
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - skipFocus - whether or not to focus the matched item
 *   - isItemAtIndexDisabled - function that determines whether an item at a
 *        given index is disabled
 * @param state The typeahead state instance. See `initState`.
 *
 * @return The index of the matched item, or -1 if no match.
 */
function matchItem(opts, state) {
  var nextChar = opts.nextChar,
    focusItemAtIndex = opts.focusItemAtIndex,
    sortedIndexByFirstChar = opts.sortedIndexByFirstChar,
    focusedItemIndex = opts.focusedItemIndex,
    skipFocus = opts.skipFocus,
    isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
  clearTimeout(state.bufferClearTimeout);
  state.bufferClearTimeout = setTimeout(function () {
    clearBuffer(state);
  }, _constants.numbers.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
  state.typeaheadBuffer = state.typeaheadBuffer + nextChar;
  var index;
  if (state.typeaheadBuffer.length === 1) {
    index = matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state);
  } else {
    index = matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state);
  }
  if (index !== -1 && !skipFocus) {
    focusItemAtIndex(index);
  }
  return index;
}
/**
 * Matches the user's single input character in the buffer to the
 * next option that begins with such character. Wraps around if at
 * end of options. Returns -1 if no match is found.
 */
function matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) {
  var firstChar = state.typeaheadBuffer[0];
  var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
  if (!itemsMatchingFirstChar) {
    return -1;
  }
  // Has the same firstChar been recently matched?
  // Also, did starting index remain the same between key presses?
  // If both hold true, simply increment index.
  if (firstChar === state.currentFirstChar && itemsMatchingFirstChar[state.sortedIndexCursor].index === focusedItemIndex) {
    state.sortedIndexCursor = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
    var newIndex = itemsMatchingFirstChar[state.sortedIndexCursor].index;
    if (!isItemAtIndexDisabled(newIndex)) {
      return newIndex;
    }
  }
  // If we're here, it means one of the following happened:
  // - either firstChar or startingIndex has changed, invalidating the
  // cursor.
  // - The next item of typeahead is disabled, so we have to look further.
  state.currentFirstChar = firstChar;
  var newCursorPosition = -1;
  var cursorPosition;
  // Find the first non-disabled item as a fallback.
  for (cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
    if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
      newCursorPosition = cursorPosition;
      break;
    }
  }
  // Advance cursor to first item matching the firstChar that is positioned
  // after starting item. Cursor is unchanged from fallback if there's no
  // such item.
  for (; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
    if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex && !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
      newCursorPosition = cursorPosition;
      break;
    }
  }
  if (newCursorPosition !== -1) {
    state.sortedIndexCursor = newCursorPosition;
    return itemsMatchingFirstChar[state.sortedIndexCursor].index;
  }
  return -1;
}
/**
 * Attempts to find the next item that matches all of the typeahead buffer.
 * Wraps around if at end of options. Returns -1 if no match is found.
 */
function matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state) {
  var firstChar = state.typeaheadBuffer[0];
  var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
  if (!itemsMatchingFirstChar) {
    return -1;
  }
  // Do nothing if text already matches
  var startingItem = itemsMatchingFirstChar[state.sortedIndexCursor];
  if (startingItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0 && !isItemAtIndexDisabled(startingItem.index)) {
    return startingItem.index;
  }
  // Find next item that matches completely; if no match, we'll eventually
  // loop around to same position
  var cursorPosition = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
  var nextCursorPosition = -1;
  while (cursorPosition !== state.sortedIndexCursor) {
    var currentItem = itemsMatchingFirstChar[cursorPosition];
    var matches = currentItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0;
    var isEnabled = !isItemAtIndexDisabled(currentItem.index);
    if (matches && isEnabled) {
      nextCursorPosition = cursorPosition;
      break;
    }
    cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
  }
  if (nextCursorPosition !== -1) {
    state.sortedIndexCursor = nextCursorPosition;
    return itemsMatchingFirstChar[state.sortedIndexCursor].index;
  }
  return -1;
}
/**
 * Whether or not the given typeahead instaance state is currently typing.
 *
 * @param state The typeahead state instance. See `initState`.
 */
function isTypingInProgress(state) {
  return state.typeaheadBuffer.length > 0;
}
/**
 * Clears the typeahaed buffer so that it resets item matching to the first
 * character.
 *
 * @param state The typeahead state instance. See `initState`.
 */
function clearBuffer(state) {
  state.typeaheadBuffer = '';
}
/**
 * Given a keydown event, it calculates whether or not to automatically focus a
 * list item depending on what was typed mimicing the typeahead functionality of
 * a standard <select> element that is open.
 *
 * @param opts Options and accessors
 *   - event - the KeyboardEvent to handle and parse
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - isItemAtFocusedIndexDisabled - whether or not the currently focused item
 *      is disabled
 *   - isTargetListItem - whether or not the event target is a list item
 * @param state The typeahead state instance. See `initState`.
 *
 * @returns index of the item matched by the keydown. -1 if not matched.
 */
function handleKeydown(opts, state) {
  var event = opts.event,
    isTargetListItem = opts.isTargetListItem,
    focusedItemIndex = opts.focusedItemIndex,
    focusItemAtIndex = opts.focusItemAtIndex,
    sortedIndexByFirstChar = opts.sortedIndexByFirstChar,
    isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
  var isArrowLeft = (0, _keyboard.normalizeKey)(event) === 'ArrowLeft';
  var isArrowUp = (0, _keyboard.normalizeKey)(event) === 'ArrowUp';
  var isArrowRight = (0, _keyboard.normalizeKey)(event) === 'ArrowRight';
  var isArrowDown = (0, _keyboard.normalizeKey)(event) === 'ArrowDown';
  var isHome = (0, _keyboard.normalizeKey)(event) === 'Home';
  var isEnd = (0, _keyboard.normalizeKey)(event) === 'End';
  var isEnter = (0, _keyboard.normalizeKey)(event) === 'Enter';
  var isSpace = (0, _keyboard.normalizeKey)(event) === 'Spacebar';
  if (event.altKey || event.ctrlKey || event.metaKey || isArrowLeft || isArrowUp || isArrowRight || isArrowDown || isHome || isEnd || isEnter) {
    return -1;
  }
  var isCharacterKey = !isSpace && event.key.length === 1;
  if (isCharacterKey) {
    (0, _events.preventDefaultEvent)(event);
    var matchItemOpts = {
      focusItemAtIndex: focusItemAtIndex,
      focusedItemIndex: focusedItemIndex,
      nextChar: event.key.toLowerCase(),
      sortedIndexByFirstChar: sortedIndexByFirstChar,
      skipFocus: false,
      isItemAtIndexDisabled: isItemAtIndexDisabled
    };
    return matchItem(matchItemOpts, state);
  }
  if (!isSpace) {
    return -1;
  }
  if (isTargetListItem) {
    (0, _events.preventDefaultEvent)(event);
  }
  var typeaheadOnListItem = isTargetListItem && isTypingInProgress(state);
  if (typeaheadOnListItem) {
    var matchItemOpts = {
      focusItemAtIndex: focusItemAtIndex,
      focusedItemIndex: focusedItemIndex,
      nextChar: ' ',
      sortedIndexByFirstChar: sortedIndexByFirstChar,
      skipFocus: false,
      isItemAtIndexDisabled: isItemAtIndexDisabled
    };
    // space participates in typeahead matching if in rapid typing mode
    return matchItem(matchItemOpts, state);
  }
  return -1;
}
},{"@material/dom/keyboard":"JqaZ","./constants":"weL5","./events":"AAdL"}],"BGNM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCListFoundation = void 0;
var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _keyboard = require("@material/dom/keyboard");
var _constants = require("./constants");
var _events = require("./events");
var typeahead = _interopRequireWildcard(require("./typeahead"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

function isNumberArray(selectedIndex) {
  return selectedIndex instanceof Array;
}
/** List of modifier keys to consider while handling keyboard events. */
var handledModifierKeys = ['Alt', 'Control', 'Meta', 'Shift'];
/** Checks if the event has the given modifier keys. */
function createModifierChecker(event) {
  var eventModifiers = new Set(event ? handledModifierKeys.filter(function (m) {
    return event.getModifierState(m);
  }) : []);
  return function (modifiers) {
    return modifiers.every(function (m) {
      return eventModifiers.has(m);
    }) && modifiers.length === eventModifiers.size;
  };
}
var MDCListFoundation = exports.MDCListFoundation = /** @class */function (_super) {
  (0, _tslib.__extends)(MDCListFoundation, _super);
  function MDCListFoundation(adapter) {
    var _this = _super.call(this, (0, _tslib.__assign)((0, _tslib.__assign)({}, MDCListFoundation.defaultAdapter), adapter)) || this;
    _this.wrapFocus = false;
    _this.isVertical = true;
    _this.isSingleSelectionList = false;
    _this.areDisabledItemsFocusable = true;
    _this.selectedIndex = _constants.numbers.UNSET_INDEX;
    _this.focusedItemIndex = _constants.numbers.UNSET_INDEX;
    _this.useActivatedClass = false;
    _this.useSelectedAttr = false;
    _this.ariaCurrentAttrValue = null;
    _this.isCheckboxList = false;
    _this.isRadioList = false;
    _this.lastSelectedIndex = null;
    _this.hasTypeahead = false;
    // Transiently holds current typeahead prefix from user.
    _this.typeaheadState = typeahead.initState();
    _this.sortedIndexByFirstChar = new Map();
    return _this;
  }
  Object.defineProperty(MDCListFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "numbers", {
    get: function () {
      return _constants.numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClassForElementIndex: function () {
          return undefined;
        },
        focusItemAtIndex: function () {
          return undefined;
        },
        getAttributeForElementIndex: function () {
          return null;
        },
        getFocusedElementIndex: function () {
          return 0;
        },
        getListItemCount: function () {
          return 0;
        },
        hasCheckboxAtIndex: function () {
          return false;
        },
        hasRadioAtIndex: function () {
          return false;
        },
        isCheckboxCheckedAtIndex: function () {
          return false;
        },
        isFocusInsideList: function () {
          return false;
        },
        isRootFocused: function () {
          return false;
        },
        listItemAtIndexHasClass: function () {
          return false;
        },
        notifyAction: function () {
          return undefined;
        },
        notifySelectionChange: function () {},
        removeClassForElementIndex: function () {
          return undefined;
        },
        setAttributeForElementIndex: function () {
          return undefined;
        },
        setCheckedCheckboxOrRadioAtIndex: function () {
          return undefined;
        },
        setTabIndexForListItemChildren: function () {
          return undefined;
        },
        getPrimaryTextAtIndex: function () {
          return '';
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCListFoundation.prototype.layout = function () {
    if (this.adapter.getListItemCount() === 0) {
      return;
    }
    // TODO(b/172274142): consider all items when determining the list's type.
    if (this.adapter.hasCheckboxAtIndex(0)) {
      this.isCheckboxList = true;
    } else if (this.adapter.hasRadioAtIndex(0)) {
      this.isRadioList = true;
    } else {
      this.maybeInitializeSingleSelection();
    }
    if (this.hasTypeahead) {
      this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
    }
  };
  /** Returns the index of the item that was last focused. */
  MDCListFoundation.prototype.getFocusedItemIndex = function () {
    return this.focusedItemIndex;
  };
  /** Toggles focus wrapping with keyboard navigation. */
  MDCListFoundation.prototype.setWrapFocus = function (value) {
    this.wrapFocus = value;
  };
  /**
   * Toggles orientation direction for keyboard navigation (true for vertical,
   * false for horizontal).
   */
  MDCListFoundation.prototype.setVerticalOrientation = function (value) {
    this.isVertical = value;
  };
  /** Toggles single-selection behavior. */
  MDCListFoundation.prototype.setSingleSelection = function (value) {
    this.isSingleSelectionList = value;
    if (value) {
      this.maybeInitializeSingleSelection();
      this.selectedIndex = this.getSelectedIndexFromDOM();
    }
  };
  MDCListFoundation.prototype.setDisabledItemsFocusable = function (value) {
    this.areDisabledItemsFocusable = value;
  };
  /**
   * Automatically determines whether the list is single selection list. If so,
   * initializes the internal state to match the selected item.
   */
  MDCListFoundation.prototype.maybeInitializeSingleSelection = function () {
    var selectedItemIndex = this.getSelectedIndexFromDOM();
    if (selectedItemIndex === _constants.numbers.UNSET_INDEX) return;
    var hasActivatedClass = this.adapter.listItemAtIndexHasClass(selectedItemIndex, _constants.cssClasses.LIST_ITEM_ACTIVATED_CLASS);
    if (hasActivatedClass) {
      this.setUseActivatedClass(true);
    }
    this.isSingleSelectionList = true;
    this.selectedIndex = selectedItemIndex;
  };
  /** @return Index of the first selected item based on the DOM state. */
  MDCListFoundation.prototype.getSelectedIndexFromDOM = function () {
    var selectedIndex = _constants.numbers.UNSET_INDEX;
    var listItemsCount = this.adapter.getListItemCount();
    for (var i = 0; i < listItemsCount; i++) {
      var hasSelectedClass = this.adapter.listItemAtIndexHasClass(i, _constants.cssClasses.LIST_ITEM_SELECTED_CLASS);
      var hasActivatedClass = this.adapter.listItemAtIndexHasClass(i, _constants.cssClasses.LIST_ITEM_ACTIVATED_CLASS);
      if (!(hasSelectedClass || hasActivatedClass)) {
        continue;
      }
      selectedIndex = i;
      break;
    }
    return selectedIndex;
  };
  /**
   * Sets whether typeahead is enabled on the list.
   * @param hasTypeahead Whether typeahead is enabled.
   */
  MDCListFoundation.prototype.setHasTypeahead = function (hasTypeahead) {
    this.hasTypeahead = hasTypeahead;
    if (hasTypeahead) {
      this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
    }
  };
  /**
   * @return Whether typeahead is currently matching a user-specified prefix.
   */
  MDCListFoundation.prototype.isTypeaheadInProgress = function () {
    return this.hasTypeahead && typeahead.isTypingInProgress(this.typeaheadState);
  };
  /** Toggle use of the "activated" CSS class. */
  MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
    this.useActivatedClass = useActivated;
  };
  /**
   * Toggles use of the selected attribute (true for aria-selected, false for
   * aria-checked).
   */
  MDCListFoundation.prototype.setUseSelectedAttribute = function (useSelected) {
    this.useSelectedAttr = useSelected;
  };
  MDCListFoundation.prototype.getSelectedIndex = function () {
    return this.selectedIndex;
  };
  MDCListFoundation.prototype.setSelectedIndex = function (index, options) {
    if (options === void 0) {
      options = {};
    }
    if (!this.isIndexValid(index)) {
      return;
    }
    if (this.isCheckboxList) {
      this.setCheckboxAtIndex(index, options);
    } else if (this.isRadioList) {
      this.setRadioAtIndex(index, options);
    } else {
      this.setSingleSelectionAtIndex(index, options);
    }
  };
  /**
   * Focus in handler for the list items.
   */
  MDCListFoundation.prototype.handleFocusIn = function (listItemIndex) {
    if (listItemIndex >= 0) {
      this.focusedItemIndex = listItemIndex;
      this.adapter.setAttributeForElementIndex(listItemIndex, 'tabindex', '0');
      this.adapter.setTabIndexForListItemChildren(listItemIndex, '0');
    }
  };
  /**
   * Focus out handler for the list items.
   */
  MDCListFoundation.prototype.handleFocusOut = function (listItemIndex) {
    var _this = this;
    if (listItemIndex >= 0) {
      this.adapter.setAttributeForElementIndex(listItemIndex, 'tabindex', '-1');
      this.adapter.setTabIndexForListItemChildren(listItemIndex, '-1');
    }
    /**
     * Between Focusout & Focusin some browsers do not have focus on any
     * element. Setting a delay to wait till the focus is moved to next element.
     */
    setTimeout(function () {
      if (!_this.adapter.isFocusInsideList()) {
        _this.setTabindexToFirstSelectedOrFocusedItem();
      }
    }, 0);
  };
  MDCListFoundation.prototype.isIndexDisabled = function (index) {
    return this.adapter.listItemAtIndexHasClass(index, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS);
  };
  /**
   * Key handler for the list.
   */
  MDCListFoundation.prototype.handleKeydown = function (event, isRootListItem, listItemIndex) {
    var _this = this;
    var _a;
    var isArrowLeft = (0, _keyboard.normalizeKey)(event) === 'ArrowLeft';
    var isArrowUp = (0, _keyboard.normalizeKey)(event) === 'ArrowUp';
    var isArrowRight = (0, _keyboard.normalizeKey)(event) === 'ArrowRight';
    var isArrowDown = (0, _keyboard.normalizeKey)(event) === 'ArrowDown';
    var isHome = (0, _keyboard.normalizeKey)(event) === 'Home';
    var isEnd = (0, _keyboard.normalizeKey)(event) === 'End';
    var isEnter = (0, _keyboard.normalizeKey)(event) === 'Enter';
    var isSpace = (0, _keyboard.normalizeKey)(event) === 'Spacebar';
    // The keys for forward and back differ based on list orientation.
    var isForward = this.isVertical && isArrowDown || !this.isVertical && isArrowRight;
    var isBack = this.isVertical && isArrowUp || !this.isVertical && isArrowLeft;
    // Have to check both upper and lower case, because having caps lock on
    // affects the value.
    var isLetterA = event.key === 'A' || event.key === 'a';
    var eventHasModifiers = createModifierChecker(event);
    if (this.adapter.isRootFocused()) {
      if ((isBack || isEnd) && eventHasModifiers([])) {
        event.preventDefault();
        this.focusLastElement();
      } else if ((isForward || isHome) && eventHasModifiers([])) {
        event.preventDefault();
        this.focusFirstElement();
      } else if (isBack && eventHasModifiers(['Shift']) && this.isCheckboxList) {
        event.preventDefault();
        var focusedIndex = this.focusLastElement();
        if (focusedIndex !== -1) {
          this.setSelectedIndexOnAction(focusedIndex, false);
        }
      } else if (isForward && eventHasModifiers(['Shift']) && this.isCheckboxList) {
        event.preventDefault();
        var focusedIndex = this.focusFirstElement();
        if (focusedIndex !== -1) {
          this.setSelectedIndexOnAction(focusedIndex, false);
        }
      }
      if (this.hasTypeahead) {
        var handleKeydownOpts = {
          event: event,
          focusItemAtIndex: function (index) {
            _this.focusItemAtIndex(index);
          },
          focusedItemIndex: -1,
          isTargetListItem: isRootListItem,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: function (index) {
            return _this.isIndexDisabled(index);
          }
        };
        typeahead.handleKeydown(handleKeydownOpts, this.typeaheadState);
      }
      return;
    }
    var currentIndex = this.adapter.getFocusedElementIndex();
    if (currentIndex === -1) {
      currentIndex = listItemIndex;
      if (currentIndex < 0) {
        // If this event doesn't have a mdc-list-item ancestor from the
        // current list (not from a sublist), return early.
        return;
      }
    }
    if (isForward && eventHasModifiers([])) {
      (0, _events.preventDefaultEvent)(event);
      this.focusNextElement(currentIndex);
    } else if (isBack && eventHasModifiers([])) {
      (0, _events.preventDefaultEvent)(event);
      this.focusPrevElement(currentIndex);
    } else if (isForward && eventHasModifiers(['Shift']) && this.isCheckboxList) {
      (0, _events.preventDefaultEvent)(event);
      var focusedIndex = this.focusNextElement(currentIndex);
      if (focusedIndex !== -1) {
        this.setSelectedIndexOnAction(focusedIndex, false);
      }
    } else if (isBack && eventHasModifiers(['Shift']) && this.isCheckboxList) {
      (0, _events.preventDefaultEvent)(event);
      var focusedIndex = this.focusPrevElement(currentIndex);
      if (focusedIndex !== -1) {
        this.setSelectedIndexOnAction(focusedIndex, false);
      }
    } else if (isHome && eventHasModifiers([])) {
      (0, _events.preventDefaultEvent)(event);
      this.focusFirstElement();
    } else if (isEnd && eventHasModifiers([])) {
      (0, _events.preventDefaultEvent)(event);
      this.focusLastElement();
    } else if (isHome && eventHasModifiers(['Control', 'Shift']) && this.isCheckboxList) {
      (0, _events.preventDefaultEvent)(event);
      if (this.isIndexDisabled(currentIndex)) {
        return;
      }
      this.focusFirstElement();
      this.toggleCheckboxRange(0, currentIndex, currentIndex);
    } else if (isEnd && eventHasModifiers(['Control', 'Shift']) && this.isCheckboxList) {
      (0, _events.preventDefaultEvent)(event);
      if (this.isIndexDisabled(currentIndex)) {
        return;
      }
      this.focusLastElement();
      this.toggleCheckboxRange(currentIndex, this.adapter.getListItemCount() - 1, currentIndex);
    } else if (isLetterA && eventHasModifiers(['Control']) && this.isCheckboxList) {
      event.preventDefault();
      this.checkboxListToggleAll(this.selectedIndex === _constants.numbers.UNSET_INDEX ? [] : this.selectedIndex, true);
    } else if ((isEnter || isSpace) && eventHasModifiers([])) {
      if (isRootListItem) {
        // Return early if enter key is pressed on anchor element which triggers
        // synthetic MouseEvent event.
        var target = event.target;
        if (target && target.tagName === 'A' && isEnter) {
          return;
        }
        (0, _events.preventDefaultEvent)(event);
        if (this.isIndexDisabled(currentIndex)) {
          return;
        }
        if (!this.isTypeaheadInProgress()) {
          if (this.isSelectableList()) {
            this.setSelectedIndexOnAction(currentIndex, false);
          }
          this.adapter.notifyAction(currentIndex);
        }
      }
    } else if ((isEnter || isSpace) && eventHasModifiers(['Shift']) && this.isCheckboxList) {
      // Return early if enter key is pressed on anchor element which triggers
      // synthetic MouseEvent event.
      var target = event.target;
      if (target && target.tagName === 'A' && isEnter) {
        return;
      }
      (0, _events.preventDefaultEvent)(event);
      if (this.isIndexDisabled(currentIndex)) {
        return;
      }
      if (!this.isTypeaheadInProgress()) {
        this.toggleCheckboxRange((_a = this.lastSelectedIndex) !== null && _a !== void 0 ? _a : currentIndex, currentIndex, currentIndex);
        this.adapter.notifyAction(currentIndex);
      }
    }
    if (this.hasTypeahead) {
      var handleKeydownOpts = {
        event: event,
        focusItemAtIndex: function (index) {
          _this.focusItemAtIndex(index);
        },
        focusedItemIndex: this.focusedItemIndex,
        isTargetListItem: isRootListItem,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        isItemAtIndexDisabled: function (index) {
          return _this.isIndexDisabled(index);
        }
      };
      typeahead.handleKeydown(handleKeydownOpts, this.typeaheadState);
    }
  };
  /**
   * Click handler for the list.
   *
   * @param index Index for the item that has been clicked.
   * @param isCheckboxAlreadyUpdatedInAdapter Whether the checkbox for
   *   the list item has already been updated in the adapter. This attribute
   *   should be set to `true` when e.g. the click event directly landed on
   *   the underlying native checkbox element which would cause the checked
   *   state to be already toggled within `adapter.isCheckboxCheckedAtIndex`.
   */
  MDCListFoundation.prototype.handleClick = function (index, isCheckboxAlreadyUpdatedInAdapter, event) {
    var _a;
    var eventHasModifiers = createModifierChecker(event);
    if (index === _constants.numbers.UNSET_INDEX) {
      return;
    }
    if (this.isIndexDisabled(index)) {
      return;
    }
    if (eventHasModifiers([])) {
      if (this.isSelectableList()) {
        this.setSelectedIndexOnAction(index, isCheckboxAlreadyUpdatedInAdapter);
      }
      this.adapter.notifyAction(index);
    } else if (this.isCheckboxList && eventHasModifiers(['Shift'])) {
      this.toggleCheckboxRange((_a = this.lastSelectedIndex) !== null && _a !== void 0 ? _a : index, index, index);
      this.adapter.notifyAction(index);
    }
  };
  /**
   * Focuses the next element on the list.
   */
  MDCListFoundation.prototype.focusNextElement = function (index) {
    var count = this.adapter.getListItemCount();
    var nextIndex = index;
    var firstChecked = null;
    do {
      nextIndex++;
      if (nextIndex >= count) {
        if (this.wrapFocus) {
          nextIndex = 0;
        } else {
          // Return early because last item is already focused.
          return index;
        }
      }
      if (nextIndex === firstChecked) {
        return -1;
      }
      firstChecked = firstChecked !== null && firstChecked !== void 0 ? firstChecked : nextIndex;
    } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(nextIndex));
    this.focusItemAtIndex(nextIndex);
    return nextIndex;
  };
  /**
   * Focuses the previous element on the list.
   */
  MDCListFoundation.prototype.focusPrevElement = function (index) {
    var count = this.adapter.getListItemCount();
    var prevIndex = index;
    var firstChecked = null;
    do {
      prevIndex--;
      if (prevIndex < 0) {
        if (this.wrapFocus) {
          prevIndex = count - 1;
        } else {
          // Return early because first item is already focused.
          return index;
        }
      }
      if (prevIndex === firstChecked) {
        return -1;
      }
      firstChecked = firstChecked !== null && firstChecked !== void 0 ? firstChecked : prevIndex;
    } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(prevIndex));
    this.focusItemAtIndex(prevIndex);
    return prevIndex;
  };
  MDCListFoundation.prototype.focusFirstElement = function () {
    // Pass -1 to `focusNextElement`, since it will incremement to 0 and focus
    // the first element.
    return this.focusNextElement(-1);
  };
  MDCListFoundation.prototype.focusLastElement = function () {
    // Pass the length of the list to `focusNextElement` since it will decrement
    // to length - 1 and focus the last element.
    return this.focusPrevElement(this.adapter.getListItemCount());
  };
  MDCListFoundation.prototype.focusInitialElement = function () {
    var initialIndex = this.getFirstSelectedOrFocusedItemIndex();
    this.focusItemAtIndex(initialIndex);
    return initialIndex;
  };
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */
  MDCListFoundation.prototype.setEnabled = function (itemIndex, isEnabled) {
    if (!this.isIndexValid(itemIndex, false)) {
      return;
    }
    if (isEnabled) {
      this.adapter.removeClassForElementIndex(itemIndex, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS);
      this.adapter.setAttributeForElementIndex(itemIndex, _constants.strings.ARIA_DISABLED, 'false');
    } else {
      this.adapter.addClassForElementIndex(itemIndex, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS);
      this.adapter.setAttributeForElementIndex(itemIndex, _constants.strings.ARIA_DISABLED, 'true');
    }
  };
  MDCListFoundation.prototype.setSingleSelectionAtIndex = function (index, options) {
    if (options === void 0) {
      options = {};
    }
    if (this.selectedIndex === index && !options.forceUpdate) {
      return;
    }
    var selectedClassName = _constants.cssClasses.LIST_ITEM_SELECTED_CLASS;
    if (this.useActivatedClass) {
      selectedClassName = _constants.cssClasses.LIST_ITEM_ACTIVATED_CLASS;
    }
    if (this.selectedIndex !== _constants.numbers.UNSET_INDEX) {
      this.adapter.removeClassForElementIndex(this.selectedIndex, selectedClassName);
    }
    this.setAriaForSingleSelectionAtIndex(index);
    this.setTabindexAtIndex(index);
    if (index !== _constants.numbers.UNSET_INDEX) {
      this.adapter.addClassForElementIndex(index, selectedClassName);
    }
    this.selectedIndex = index;
    // If the selected value has changed through user interaction,
    // we want to notify the selection change to the adapter.
    if (options.isUserInteraction && !options.forceUpdate) {
      this.adapter.notifySelectionChange([index]);
    }
  };
  /**
   * Sets aria attribute for single selection at given index.
   */
  MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex = function (index) {
    // Detect the presence of aria-current and get the value only during list
    // initialization when it is in unset state.
    if (this.selectedIndex === _constants.numbers.UNSET_INDEX) {
      this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(index, _constants.strings.ARIA_CURRENT);
    }
    var isAriaCurrent = this.ariaCurrentAttrValue !== null;
    var ariaAttribute = isAriaCurrent ? _constants.strings.ARIA_CURRENT : _constants.strings.ARIA_SELECTED;
    if (this.selectedIndex !== _constants.numbers.UNSET_INDEX) {
      this.adapter.setAttributeForElementIndex(this.selectedIndex, ariaAttribute, 'false');
    }
    if (index !== _constants.numbers.UNSET_INDEX) {
      var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue : 'true';
      this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
    }
  };
  /**
   * Returns the attribute to use for indicating selection status.
   */
  MDCListFoundation.prototype.getSelectionAttribute = function () {
    return this.useSelectedAttr ? _constants.strings.ARIA_SELECTED : _constants.strings.ARIA_CHECKED;
  };
  /**
   * Toggles radio at give index. Radio doesn't change the checked state if it
   * is already checked.
   */
  MDCListFoundation.prototype.setRadioAtIndex = function (index, options) {
    if (options === void 0) {
      options = {};
    }
    var selectionAttribute = this.getSelectionAttribute();
    this.adapter.setCheckedCheckboxOrRadioAtIndex(index, true);
    if (this.selectedIndex === index && !options.forceUpdate) {
      return;
    }
    if (this.selectedIndex !== _constants.numbers.UNSET_INDEX) {
      this.adapter.setAttributeForElementIndex(this.selectedIndex, selectionAttribute, 'false');
    }
    this.adapter.setAttributeForElementIndex(index, selectionAttribute, 'true');
    this.selectedIndex = index;
    // If the selected value has changed through user interaction,
    // we want to notify the selection change to the adapter.
    if (options.isUserInteraction && !options.forceUpdate) {
      this.adapter.notifySelectionChange([index]);
    }
  };
  MDCListFoundation.prototype.setCheckboxAtIndex = function (index, options) {
    if (options === void 0) {
      options = {};
    }
    var currentIndex = this.selectedIndex;
    // If this update is not triggered by a user interaction, we do not
    // need to know about the currently selected indices and can avoid
    // constructing the `Set` for performance reasons.
    var currentlySelected = options.isUserInteraction ? new Set(currentIndex === _constants.numbers.UNSET_INDEX ? [] : currentIndex) : null;
    var selectionAttribute = this.getSelectionAttribute();
    var changedIndices = [];
    for (var i = 0; i < this.adapter.getListItemCount(); i++) {
      var previousIsChecked = currentlySelected === null || currentlySelected === void 0 ? void 0 : currentlySelected.has(i);
      var newIsChecked = index.indexOf(i) >= 0;
      // If the selection has changed for this item, we keep track of it
      // so that we can notify the adapter.
      if (newIsChecked !== previousIsChecked) {
        changedIndices.push(i);
      }
      this.adapter.setCheckedCheckboxOrRadioAtIndex(i, newIsChecked);
      this.adapter.setAttributeForElementIndex(i, selectionAttribute, newIsChecked ? 'true' : 'false');
    }
    this.selectedIndex = index;
    // If the selected value has changed through user interaction,
    // we want to notify the selection change to the adapter.
    if (options.isUserInteraction && changedIndices.length) {
      this.adapter.notifySelectionChange(changedIndices);
    }
  };
  /**
   * Toggles the state of all checkboxes in the given range (inclusive) based on
   * the state of the checkbox at the `toggleIndex`. To determine whether to set
   * the given range to checked or unchecked, read the value of the checkbox at
   * the `toggleIndex` and negate it. Then apply that new checked state to all
   * checkboxes in the range.
   * @param fromIndex The start of the range of checkboxes to toggle
   * @param toIndex The end of the range of checkboxes to toggle
   * @param toggleIndex The index that will be used to determine the new state
   *     of the given checkbox range.
   */
  MDCListFoundation.prototype.toggleCheckboxRange = function (fromIndex, toIndex, toggleIndex) {
    this.lastSelectedIndex = toggleIndex;
    var currentlySelected = new Set(this.selectedIndex === _constants.numbers.UNSET_INDEX ? [] : this.selectedIndex);
    var newIsChecked = !(currentlySelected === null || currentlySelected === void 0 ? void 0 : currentlySelected.has(toggleIndex));
    var _a = (0, _tslib.__read)([fromIndex, toIndex].sort(), 2),
      startIndex = _a[0],
      endIndex = _a[1];
    var selectionAttribute = this.getSelectionAttribute();
    var changedIndices = [];
    for (var i = startIndex; i <= endIndex; i++) {
      if (this.isIndexDisabled(i)) {
        continue;
      }
      var previousIsChecked = currentlySelected.has(i);
      // If the selection has changed for this item, we keep track of it
      // so that we can notify the adapter.
      if (newIsChecked !== previousIsChecked) {
        changedIndices.push(i);
        this.adapter.setCheckedCheckboxOrRadioAtIndex(i, newIsChecked);
        this.adapter.setAttributeForElementIndex(i, selectionAttribute, "" + newIsChecked);
        if (newIsChecked) {
          currentlySelected.add(i);
        } else {
          currentlySelected.delete(i);
        }
      }
    }
    // If the selected value has changed, update and notify the selection change
    // to the adapter.
    if (changedIndices.length) {
      this.selectedIndex = (0, _tslib.__spreadArray)([], (0, _tslib.__read)(currentlySelected));
      this.adapter.notifySelectionChange(changedIndices);
    }
  };
  MDCListFoundation.prototype.setTabindexAtIndex = function (index) {
    if (this.focusedItemIndex === _constants.numbers.UNSET_INDEX && index !== 0) {
      // If some list item was selected set first list item's tabindex to -1.
      // Generally, tabindex is set to 0 on first list item of list that has no
      // preselected items.
      this.adapter.setAttributeForElementIndex(0, 'tabindex', '-1');
    } else if (this.focusedItemIndex >= 0 && this.focusedItemIndex !== index) {
      this.adapter.setAttributeForElementIndex(this.focusedItemIndex, 'tabindex', '-1');
    }
    // Set the previous selection's tabindex to -1. We need this because
    // in selection menus that are not visible, programmatically setting an
    // option will not change focus but will change where tabindex should be 0.
    if (!(this.selectedIndex instanceof Array) && this.selectedIndex !== index) {
      this.adapter.setAttributeForElementIndex(this.selectedIndex, 'tabindex', '-1');
    }
    if (index !== _constants.numbers.UNSET_INDEX) {
      this.adapter.setAttributeForElementIndex(index, 'tabindex', '0');
    }
  };
  /**
   * @return Return true if it is single selectin list, checkbox list or radio
   *     list.
   */
  MDCListFoundation.prototype.isSelectableList = function () {
    return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
  };
  MDCListFoundation.prototype.setTabindexToFirstSelectedOrFocusedItem = function () {
    var targetIndex = this.getFirstSelectedOrFocusedItemIndex();
    this.setTabindexAtIndex(targetIndex);
  };
  MDCListFoundation.prototype.getFirstSelectedOrFocusedItemIndex = function () {
    // Action lists retain focus on the most recently focused item.
    if (!this.isSelectableList()) {
      return Math.max(this.focusedItemIndex, 0);
    }
    // Single-selection lists focus the selected item.
    if (typeof this.selectedIndex === 'number' && this.selectedIndex !== _constants.numbers.UNSET_INDEX) {
      return this.selectedIndex;
    }
    // Multiple-selection lists focus the first selected item.
    if (isNumberArray(this.selectedIndex) && this.selectedIndex.length > 0) {
      return this.selectedIndex.reduce(function (minIndex, currentIndex) {
        return Math.min(minIndex, currentIndex);
      });
    }
    // Selection lists without a selection focus the first item.
    return 0;
  };
  MDCListFoundation.prototype.isIndexValid = function (index, validateListType) {
    var _this = this;
    if (validateListType === void 0) {
      validateListType = true;
    }
    if (index instanceof Array) {
      if (!this.isCheckboxList && validateListType) {
        throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
      }
      if (index.length === 0) {
        return true;
      } else {
        return index.some(function (i) {
          return _this.isIndexInRange(i);
        });
      }
    } else if (typeof index === 'number') {
      if (this.isCheckboxList && validateListType) {
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
      }
      return this.isIndexInRange(index) || this.isSingleSelectionList && index === _constants.numbers.UNSET_INDEX;
    } else {
      return false;
    }
  };
  MDCListFoundation.prototype.isIndexInRange = function (index) {
    var listSize = this.adapter.getListItemCount();
    return index >= 0 && index < listSize;
  };
  /**
   * Sets selected index on user action, toggles checkboxes in checkbox lists
   * by default, unless `isCheckboxAlreadyUpdatedInAdapter` is set to `true`.
   *
   * In cases where `isCheckboxAlreadyUpdatedInAdapter` is set to `true`, the
   * UI is just updated to reflect the value returned by the adapter.
   *
   * When calling this, make sure user interaction does not toggle disabled
   * list items.
   */
  MDCListFoundation.prototype.setSelectedIndexOnAction = function (index, isCheckboxAlreadyUpdatedInAdapter) {
    this.lastSelectedIndex = index;
    if (this.isCheckboxList) {
      this.toggleCheckboxAtIndex(index, isCheckboxAlreadyUpdatedInAdapter);
      this.adapter.notifySelectionChange([index]);
    } else {
      this.setSelectedIndex(index, {
        isUserInteraction: true
      });
    }
  };
  MDCListFoundation.prototype.toggleCheckboxAtIndex = function (index, isCheckboxAlreadyUpdatedInAdapter) {
    var selectionAttribute = this.getSelectionAttribute();
    var adapterIsChecked = this.adapter.isCheckboxCheckedAtIndex(index);
    // By default the checked value from the adapter is toggled unless the
    // checked state in the adapter has already been updated beforehand.
    // This can be happen when the underlying native checkbox has already
    // been updated through the native click event.
    var newCheckedValue;
    if (isCheckboxAlreadyUpdatedInAdapter) {
      newCheckedValue = adapterIsChecked;
    } else {
      newCheckedValue = !adapterIsChecked;
      this.adapter.setCheckedCheckboxOrRadioAtIndex(index, newCheckedValue);
    }
    this.adapter.setAttributeForElementIndex(index, selectionAttribute, newCheckedValue ? 'true' : 'false');
    // If none of the checkbox items are selected and selectedIndex is not
    // initialized then provide a default value.
    var selectedIndexes = this.selectedIndex === _constants.numbers.UNSET_INDEX ? [] : this.selectedIndex.slice();
    if (newCheckedValue) {
      selectedIndexes.push(index);
    } else {
      selectedIndexes = selectedIndexes.filter(function (i) {
        return i !== index;
      });
    }
    this.selectedIndex = selectedIndexes;
  };
  MDCListFoundation.prototype.focusItemAtIndex = function (index) {
    this.adapter.focusItemAtIndex(index);
    this.focusedItemIndex = index;
  };
  MDCListFoundation.prototype.checkboxListToggleAll = function (currentlySelectedIndexes, isUserInteraction) {
    var count = this.adapter.getListItemCount();
    // If all items are selected, deselect everything.
    if (currentlySelectedIndexes.length === count) {
      this.setCheckboxAtIndex([], {
        isUserInteraction: isUserInteraction
      });
    } else {
      // Otherwise select all enabled options.
      var allIndexes = [];
      for (var i = 0; i < count; i++) {
        if (!this.isIndexDisabled(i) || currentlySelectedIndexes.indexOf(i) > -1) {
          allIndexes.push(i);
        }
      }
      this.setCheckboxAtIndex(allIndexes, {
        isUserInteraction: isUserInteraction
      });
    }
  };
  /**
   * Given the next desired character from the user, adds it to the typeahead
   * buffer. Then, attempts to find the next option matching the buffer. Wraps
   * around if at the end of options.
   *
   * @param nextChar The next character to add to the prefix buffer.
   * @param startingIndex The index from which to start matching. Only relevant
   *     when starting a new match sequence. To start a new match sequence,
   *     clear the buffer using `clearTypeaheadBuffer`, or wait for the buffer
   *     to clear after a set interval defined in list foundation. Defaults to
   *     the currently focused index.
   * @return The index of the matched item, or -1 if no match.
   */
  MDCListFoundation.prototype.typeaheadMatchItem = function (nextChar, startingIndex, skipFocus) {
    var _this = this;
    if (skipFocus === void 0) {
      skipFocus = false;
    }
    var opts = {
      focusItemAtIndex: function (index) {
        _this.focusItemAtIndex(index);
      },
      focusedItemIndex: startingIndex ? startingIndex : this.focusedItemIndex,
      nextChar: nextChar,
      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
      skipFocus: skipFocus,
      isItemAtIndexDisabled: function (index) {
        return _this.isIndexDisabled(index);
      }
    };
    return typeahead.matchItem(opts, this.typeaheadState);
  };
  /**
   * Initializes the MDCListTextAndIndex data structure by indexing the current
   * list items by primary text.
   *
   * @return The primary texts of all the list items sorted by first character.
   */
  MDCListFoundation.prototype.typeaheadInitSortedIndex = function () {
    return typeahead.initSortedIndex(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
  };
  /**
   * Clears the typeahead buffer.
   */
  MDCListFoundation.prototype.clearTypeaheadBuffer = function () {
    typeahead.clearBuffer(this.typeaheadState);
  };
  return MDCListFoundation;
}(_foundation.MDCFoundation);
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = exports.default = MDCListFoundation;
},{"tslib":"vCxL","@material/base/foundation":"uJAj","@material/dom/keyboard":"JqaZ","./constants":"weL5","./events":"AAdL","./typeahead":"l7oj"}],"dsA1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCList = void 0;
var _tslib = require("tslib");
var _component = require("@material/base/component");
var _ponyfill = require("@material/dom/ponyfill");
var _constants = require("./constants");
var _foundation = require("./foundation");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCList = exports.MDCList = /** @class */function (_super) {
  (0, _tslib.__extends)(MDCList, _super);
  function MDCList() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Object.defineProperty(MDCList.prototype, "vertical", {
    set: function (value) {
      this.foundation.setVerticalOrientation(value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "listElements", {
    get: function () {
      return Array.from(this.root.querySelectorAll("." + this.classNameMap[_constants.cssClasses.LIST_ITEM_CLASS]));
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "wrapFocus", {
    set: function (value) {
      this.foundation.setWrapFocus(value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "typeaheadInProgress", {
    /**
     * @return Whether typeahead is currently matching a user-specified prefix.
     */
    get: function () {
      return this.foundation.isTypeaheadInProgress();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "hasTypeahead", {
    /**
     * Sets whether typeahead functionality is enabled on the list.
     * @param hasTypeahead Whether typeahead is enabled.
     */
    set: function (hasTypeahead) {
      this.foundation.setHasTypeahead(hasTypeahead);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "singleSelection", {
    set: function (isSingleSelectionList) {
      this.foundation.setSingleSelection(isSingleSelectionList);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "disabledItemsFocusable", {
    set: function (areDisabledItemsFocusable) {
      this.foundation.setDisabledItemsFocusable(areDisabledItemsFocusable);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "selectedIndex", {
    get: function () {
      return this.foundation.getSelectedIndex();
    },
    set: function (index) {
      this.foundation.setSelectedIndex(index);
    },
    enumerable: false,
    configurable: true
  });
  MDCList.attachTo = function (root) {
    return new MDCList(root);
  };
  MDCList.prototype.initialSyncWithDOM = function () {
    this.isEvolutionEnabled = _constants.evolutionAttribute in this.root.dataset;
    if (this.isEvolutionEnabled) {
      this.classNameMap = _constants.evolutionClassNameMap;
    } else if ((0, _ponyfill.matches)(this.root, _constants.strings.DEPRECATED_SELECTOR)) {
      this.classNameMap = _constants.deprecatedClassNameMap;
    } else {
      this.classNameMap = Object.values(_constants.cssClasses).reduce(function (obj, className) {
        obj[className] = className;
        return obj;
      }, {});
    }
    this.handleClick = this.handleClickEvent.bind(this);
    this.handleKeydown = this.handleKeydownEvent.bind(this);
    this.focusInEventListener = this.handleFocusInEvent.bind(this);
    this.focusOutEventListener = this.handleFocusOutEvent.bind(this);
    this.listen('keydown', this.handleKeydown);
    this.listen('click', this.handleClick);
    this.listen('focusin', this.focusInEventListener);
    this.listen('focusout', this.focusOutEventListener);
    this.layout();
    this.initializeListType();
    this.ensureFocusable();
  };
  MDCList.prototype.destroy = function () {
    this.unlisten('keydown', this.handleKeydown);
    this.unlisten('click', this.handleClick);
    this.unlisten('focusin', this.focusInEventListener);
    this.unlisten('focusout', this.focusOutEventListener);
  };
  MDCList.prototype.layout = function () {
    var direction = this.root.getAttribute(_constants.strings.ARIA_ORIENTATION);
    this.vertical = direction !== _constants.strings.ARIA_ORIENTATION_HORIZONTAL;
    var itemSelector = "." + this.classNameMap[_constants.cssClasses.LIST_ITEM_CLASS] + ":not([tabindex])";
    var childSelector = _constants.strings.FOCUSABLE_CHILD_ELEMENTS;
    // List items need to have at least tabindex=-1 to be focusable.
    var itemEls = this.root.querySelectorAll(itemSelector);
    if (itemEls.length) {
      Array.prototype.forEach.call(itemEls, function (el) {
        el.setAttribute('tabindex', '-1');
      });
    }
    // Child button/a elements are not tabbable until the list item is focused.
    var focusableChildEls = this.root.querySelectorAll(childSelector);
    if (focusableChildEls.length) {
      Array.prototype.forEach.call(focusableChildEls, function (el) {
        el.setAttribute('tabindex', '-1');
      });
    }
    if (this.isEvolutionEnabled) {
      this.foundation.setUseSelectedAttribute(true);
    }
    this.foundation.layout();
  };
  /**
   * Extracts the primary text from a list item.
   * @param item The list item element.
   * @return The primary text in the element.
   */
  MDCList.prototype.getPrimaryText = function (item) {
    var _a;
    var primaryText = item.querySelector("." + this.classNameMap[_constants.cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS]);
    if (this.isEvolutionEnabled || primaryText) {
      return (_a = primaryText === null || primaryText === void 0 ? void 0 : primaryText.textContent) !== null && _a !== void 0 ? _a : '';
    }
    var singleLineText = item.querySelector("." + this.classNameMap[_constants.cssClasses.LIST_ITEM_TEXT_CLASS]);
    return singleLineText && singleLineText.textContent || '';
  };
  /**
   * Initialize selectedIndex value based on pre-selected list items.
   */
  MDCList.prototype.initializeListType = function () {
    var _this = this;
    this.isInteractive = (0, _ponyfill.matches)(this.root, _constants.strings.ARIA_INTERACTIVE_ROLES_SELECTOR);
    if (this.isEvolutionEnabled && this.isInteractive) {
      var selection = Array.from(this.root.querySelectorAll(_constants.strings.SELECTED_ITEM_SELECTOR), function (listItem) {
        return _this.listElements.indexOf(listItem);
      });
      if ((0, _ponyfill.matches)(this.root, _constants.strings.ARIA_MULTI_SELECTABLE_SELECTOR)) {
        this.selectedIndex = selection;
      } else if (selection.length > 0) {
        this.selectedIndex = selection[0];
      }
      return;
    }
    var checkboxListItems = this.root.querySelectorAll(_constants.strings.ARIA_ROLE_CHECKBOX_SELECTOR);
    var radioSelectedListItem = this.root.querySelector(_constants.strings.ARIA_CHECKED_RADIO_SELECTOR);
    if (checkboxListItems.length) {
      var preselectedItems = this.root.querySelectorAll(_constants.strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
      this.selectedIndex = Array.from(preselectedItems, function (listItem) {
        return _this.listElements.indexOf(listItem);
      });
    } else if (radioSelectedListItem) {
      this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
    }
  };
  /**
   * Updates the list item at itemIndex to the desired isEnabled state.
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */
  MDCList.prototype.setEnabled = function (itemIndex, isEnabled) {
    this.foundation.setEnabled(itemIndex, isEnabled);
  };
  /**
   * Given the next desired character from the user, adds it to the typeahead
   * buffer. Then, attempts to find the next option matching the buffer. Wraps
   * around if at the end of options.
   *
   * @param nextChar The next character to add to the prefix buffer.
   * @param startingIndex The index from which to start matching. Defaults to
   *     the currently focused index.
   * @return The index of the matched item.
   */
  MDCList.prototype.typeaheadMatchItem = function (nextChar, startingIndex) {
    return this.foundation.typeaheadMatchItem(nextChar, startingIndex, /** skipFocus */true);
  };
  MDCList.prototype.getDefaultFoundation = function () {
    var _this = this;
    // DO NOT INLINE this variable. For backward compatibility, foundations take
    // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
    // methods, we need a separate, strongly typed adapter variable.
    var adapter = {
      addClassForElementIndex: function (index, className) {
        var element = _this.listElements[index];
        if (element) {
          element.classList.add(_this.classNameMap[className]);
        }
      },
      focusItemAtIndex: function (index) {
        var element = _this.listElements[index];
        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: function (index, attr) {
        return _this.listElements[index].getAttribute(attr);
      },
      getFocusedElementIndex: function () {
        return _this.listElements.indexOf(document.activeElement);
      },
      getListItemCount: function () {
        return _this.listElements.length;
      },
      getPrimaryTextAtIndex: function (index) {
        return _this.getPrimaryText(_this.listElements[index]);
      },
      hasCheckboxAtIndex: function (index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(_constants.strings.CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: function (index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(_constants.strings.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: function (index) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(_constants.strings.CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },
      isFocusInsideList: function () {
        return _this.root !== document.activeElement && _this.root.contains(document.activeElement);
      },
      isRootFocused: function () {
        return document.activeElement === _this.root;
      },
      listItemAtIndexHasClass: function (index, className) {
        return _this.listElements[index].classList.contains(_this.classNameMap[className]);
      },
      notifyAction: function (index) {
        _this.emit(_constants.strings.ACTION_EVENT, {
          index: index
        }, /** shouldBubble */true);
      },
      notifySelectionChange: function (changedIndices) {
        _this.emit(_constants.strings.SELECTION_CHANGE_EVENT, {
          changedIndices: changedIndices
        }, /** shouldBubble */true);
      },
      removeClassForElementIndex: function (index, className) {
        var element = _this.listElements[index];
        if (element) {
          element.classList.remove(_this.classNameMap[className]);
        }
      },
      setAttributeForElementIndex: function (index, attr, value) {
        var element = _this.listElements[index];
        if (element) {
          element.setAttribute(attr, value);
        }
      },
      setCheckedCheckboxOrRadioAtIndex: function (index, isChecked) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(_constants.strings.CHECKBOX_RADIO_SELECTOR);
        toggleEl.checked = isChecked;
        var event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl.dispatchEvent(event);
      },
      setTabIndexForListItemChildren: function (listItemIndex, tabIndexValue) {
        var element = _this.listElements[listItemIndex];
        var selector = _constants.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;
        Array.prototype.forEach.call(element.querySelectorAll(selector), function (el) {
          el.setAttribute('tabindex', tabIndexValue);
        });
      }
    };
    return new _foundation.MDCListFoundation(adapter);
  };
  /**
   * Ensures that at least one item is focusable if the list is interactive and
   * doesn't specify a suitable tabindex.
   */
  MDCList.prototype.ensureFocusable = function () {
    if (this.isEvolutionEnabled && this.isInteractive) {
      if (!this.root.querySelector("." + this.classNameMap[_constants.cssClasses.LIST_ITEM_CLASS] + "[tabindex=\"0\"]")) {
        var index = this.initialFocusIndex();
        if (index !== -1) {
          this.listElements[index].tabIndex = 0;
        }
      }
    }
  };
  MDCList.prototype.initialFocusIndex = function () {
    if (this.selectedIndex instanceof Array && this.selectedIndex.length > 0) {
      return this.selectedIndex[0];
    }
    if (typeof this.selectedIndex === 'number' && this.selectedIndex !== _constants.numbers.UNSET_INDEX) {
      return this.selectedIndex;
    }
    var el = this.root.querySelector("." + this.classNameMap[_constants.cssClasses.LIST_ITEM_CLASS] + ":not(." + this.classNameMap[_constants.cssClasses.LIST_ITEM_DISABLED_CLASS] + ")");
    if (el === null) {
      return -1;
    }
    return this.getListItemIndex(el);
  };
  /**
   * Used to figure out which list item this event is targetting. Or returns -1
   * if there is no list item
   */
  MDCList.prototype.getListItemIndex = function (el) {
    var nearestParent = (0, _ponyfill.closest)(el, "." + this.classNameMap[_constants.cssClasses.LIST_ITEM_CLASS] + ", ." + this.classNameMap[_constants.cssClasses.ROOT]);
    // Get the index of the element if it is a list item.
    if (nearestParent && (0, _ponyfill.matches)(nearestParent, "." + this.classNameMap[_constants.cssClasses.LIST_ITEM_CLASS])) {
      return this.listElements.indexOf(nearestParent);
    }
    return -1;
  };
  /**
   * Used to figure out which element was clicked before sending the event to
   * the foundation.
   */
  MDCList.prototype.handleFocusInEvent = function (evt) {
    var index = this.getListItemIndex(evt.target);
    this.foundation.handleFocusIn(index);
  };
  /**
   * Used to figure out which element was clicked before sending the event to
   * the foundation.
   */
  MDCList.prototype.handleFocusOutEvent = function (evt) {
    var index = this.getListItemIndex(evt.target);
    this.foundation.handleFocusOut(index);
  };
  /**
   * Used to figure out which element was focused when keydown event occurred
   * before sending the event to the foundation.
   */
  MDCList.prototype.handleKeydownEvent = function (evt) {
    var index = this.getListItemIndex(evt.target);
    var target = evt.target;
    this.foundation.handleKeydown(evt, target.classList.contains(this.classNameMap[_constants.cssClasses.LIST_ITEM_CLASS]), index);
  };
  /**
   * Used to figure out which element was clicked before sending the event to
   * the foundation.
   */
  MDCList.prototype.handleClickEvent = function (evt) {
    var index = this.getListItemIndex(evt.target);
    var target = evt.target;
    // Toggle the checkbox only if it's not the target of the event, or the
    // checkbox will have 2 change events.
    var toggleCheckbox = !(0, _ponyfill.matches)(target, _constants.strings.CHECKBOX_RADIO_SELECTOR);
    this.foundation.handleClick(index, toggleCheckbox, evt);
  };
  return MDCList;
}(_component.MDCComponent);
},{"tslib":"vCxL","@material/base/component":"EQDb","@material/dom/ponyfill":"QP7s","./constants":"weL5","./foundation":"BGNM"}],"UkKm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _adapter = require("./adapter");
Object.keys(_adapter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _adapter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _adapter[key];
    }
  });
});
var _component = require("./component");
Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _component[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _component[key];
    }
  });
});
var _constants = require("./constants");
Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});
var _foundation = require("./foundation");
Object.keys(_foundation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _foundation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foundation[key];
    }
  });
});
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
},{"./adapter":"a0Wq","./component":"dsA1","./constants":"weL5","./foundation":"BGNM","./types":"a0Wq"}],"joOv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNormalizedEventCoords = getNormalizedEventCoords;
exports.supportsCssVariables = supportsCssVariables;
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }
  var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return false;
  }
  var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');
  supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }
  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return {
      x: 0,
      y: 0
    };
  }
  var x = pageOffset.x,
    y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY;
  // Determine touch point relative to the ripple container.
  if (evt.type === 'touchstart') {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }
  return {
    x: normalizedX,
    y: normalizedY
  };
}
},{}],"Hm44":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyPassive = applyPassive;
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  return supportsPassiveOption(globalObj) ? {
    passive: true
  } : false;
}
function supportsPassiveOption(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  // See
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  var passiveSupported = false;
  try {
    var options = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    var handler = function () {};
    globalObj.document.addEventListener('test', handler, options);
    globalObj.document.removeEventListener('test', handler, options);
  } catch (err) {
    passiveSupported = false;
  }
  return passiveSupported;
}
},{}],"NQRl":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = exports.numbers = exports.cssClasses = void 0;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = exports.cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings = exports.strings = {
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top'
};
var numbers = exports.numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};
},{}],"SIOS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCRippleFoundation = void 0;
var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _constants = require("./constants");
var _util = require("./util");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = exports.MDCRippleFoundation = /** @class */function (_super) {
  (0, _tslib.__extends)(MDCRippleFoundation, _super);
  function MDCRippleFoundation(adapter) {
    var _this = _super.call(this, (0, _tslib.__assign)((0, _tslib.__assign)({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
    _this.activationAnimationHasEnded = false;
    _this.activationTimer = 0;
    _this.fgDeactivationRemovalTimer = 0;
    _this.fgScale = '0';
    _this.frame = {
      width: 0,
      height: 0
    };
    _this.initialSize = 0;
    _this.layoutFrame = 0;
    _this.maxRadius = 0;
    _this.unboundedCoords = {
      left: 0,
      top: 0
    };
    _this.activationState = _this.defaultActivationState();
    _this.activationTimerCallback = function () {
      _this.activationAnimationHasEnded = true;
      _this.runDeactivationUXLogicIfReady();
    };
    _this.activateHandler = function (e) {
      _this.activateImpl(e);
    };
    _this.deactivateHandler = function () {
      _this.deactivateImpl();
    };
    _this.focusHandler = function () {
      _this.handleFocus();
    };
    _this.blurHandler = function () {
      _this.handleBlur();
    };
    _this.resizeHandler = function () {
      _this.layout();
    };
    return _this;
  }
  Object.defineProperty(MDCRippleFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "numbers", {
    get: function () {
      return _constants.numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        browserSupportsCssVars: function () {
          return true;
        },
        computeBoundingRect: function () {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        containsEventTarget: function () {
          return true;
        },
        deregisterDocumentInteractionHandler: function () {
          return undefined;
        },
        deregisterInteractionHandler: function () {
          return undefined;
        },
        deregisterResizeHandler: function () {
          return undefined;
        },
        getWindowPageOffset: function () {
          return {
            x: 0,
            y: 0
          };
        },
        isSurfaceActive: function () {
          return true;
        },
        isSurfaceDisabled: function () {
          return true;
        },
        isUnbounded: function () {
          return true;
        },
        registerDocumentInteractionHandler: function () {
          return undefined;
        },
        registerInteractionHandler: function () {
          return undefined;
        },
        registerResizeHandler: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        updateCssVariable: function () {
          return undefined;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCRippleFoundation.prototype.init = function () {
    var _this = this;
    var supportsPressRipple = this.supportsPressRipple();
    this.registerRootHandlers(supportsPressRipple);
    if (supportsPressRipple) {
      var _a = MDCRippleFoundation.cssClasses,
        ROOT_1 = _a.ROOT,
        UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter.addClass(ROOT_1);
        if (_this.adapter.isUnbounded()) {
          _this.adapter.addClass(UNBOUNDED_1);
          // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
          _this.layoutInternal();
        }
      });
    }
  };
  MDCRippleFoundation.prototype.destroy = function () {
    var _this = this;
    if (this.supportsPressRipple()) {
      if (this.activationTimer) {
        clearTimeout(this.activationTimer);
        this.activationTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }
      if (this.fgDeactivationRemovalTimer) {
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.fgDeactivationRemovalTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }
      var _a = MDCRippleFoundation.cssClasses,
        ROOT_2 = _a.ROOT,
        UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter.removeClass(ROOT_2);
        _this.adapter.removeClass(UNBOUNDED_2);
        _this.removeCssVars();
      });
    }
    this.deregisterRootHandlers();
    this.deregisterDeactivationHandlers();
  };
  /**
   * @param evt Optional event containing position information.
   */
  MDCRippleFoundation.prototype.activate = function (evt) {
    this.activateImpl(evt);
  };
  MDCRippleFoundation.prototype.deactivate = function () {
    this.deactivateImpl();
  };
  MDCRippleFoundation.prototype.layout = function () {
    var _this = this;
    if (this.layoutFrame) {
      cancelAnimationFrame(this.layoutFrame);
    }
    this.layoutFrame = requestAnimationFrame(function () {
      _this.layoutInternal();
      _this.layoutFrame = 0;
    });
  };
  MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
    if (unbounded) {
      this.adapter.addClass(UNBOUNDED);
    } else {
      this.adapter.removeClass(UNBOUNDED);
    }
  };
  MDCRippleFoundation.prototype.handleFocus = function () {
    var _this = this;
    requestAnimationFrame(function () {
      return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation.prototype.handleBlur = function () {
    var _this = this;
    requestAnimationFrame(function () {
      return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };
  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   */
  MDCRippleFoundation.prototype.supportsPressRipple = function () {
    return this.adapter.browserSupportsCssVars();
  };
  MDCRippleFoundation.prototype.defaultActivationState = function () {
    return {
      activationEvent: undefined,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  /**
   * supportsPressRipple Passed from init to save a redundant function call
   */
  MDCRippleFoundation.prototype.registerRootHandlers = function (supportsPressRipple) {
    var e_1, _a;
    if (supportsPressRipple) {
      try {
        for (var ACTIVATION_EVENT_TYPES_1 = (0, _tslib.__values)(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerInteractionHandler(evtType, this.activateHandler);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      if (this.adapter.isUnbounded()) {
        this.adapter.registerResizeHandler(this.resizeHandler);
      }
    }
    this.adapter.registerInteractionHandler('focus', this.focusHandler);
    this.adapter.registerInteractionHandler('blur', this.blurHandler);
  };
  MDCRippleFoundation.prototype.registerDeactivationHandlers = function (evt) {
    var e_2, _a;
    if (evt.type === 'keydown') {
      this.adapter.registerInteractionHandler('keyup', this.deactivateHandler);
    } else {
      try {
        for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = (0, _tslib.__values)(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }
  };
  MDCRippleFoundation.prototype.deregisterRootHandlers = function () {
    var e_3, _a;
    try {
      for (var ACTIVATION_EVENT_TYPES_2 = (0, _tslib.__values)(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_3) throw e_3.error;
      }
    }
    this.adapter.deregisterInteractionHandler('focus', this.focusHandler);
    this.adapter.deregisterInteractionHandler('blur', this.blurHandler);
    if (this.adapter.isUnbounded()) {
      this.adapter.deregisterResizeHandler(this.resizeHandler);
    }
  };
  MDCRippleFoundation.prototype.deregisterDeactivationHandlers = function () {
    var e_4, _a;
    this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler);
    try {
      for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = (0, _tslib.__values)(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_4) throw e_4.error;
      }
    }
  };
  MDCRippleFoundation.prototype.removeCssVars = function () {
    var _this = this;
    var rippleStrings = MDCRippleFoundation.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function (key) {
      if (key.indexOf('VAR_') === 0) {
        _this.adapter.updateCssVariable(rippleStrings[key], null);
      }
    });
  };
  MDCRippleFoundation.prototype.activateImpl = function (evt) {
    var _this = this;
    if (this.adapter.isSurfaceDisabled()) {
      return;
    }
    var activationState = this.activationState;
    if (activationState.isActivated) {
      return;
    }
    // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
    var previousActivationEvent = this.previousActivationEvent;
    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
    if (isSameInteraction) {
      return;
    }
    activationState.isActivated = true;
    activationState.isProgrammatic = evt === undefined;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
      return _this.adapter.containsEventTarget(target);
    });
    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState();
      return;
    }
    if (evt !== undefined) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers(evt);
    }
    activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
    if (activationState.wasElementMadeActive) {
      this.animateActivation();
    }
    requestAnimationFrame(function () {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];
      if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
          _this.animateActivation();
        }
      }
      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        _this.activationState = _this.defaultActivationState();
      }
    });
  };
  MDCRippleFoundation.prototype.checkElementMadeActive = function (evt) {
    return evt !== undefined && evt.type === 'keydown' ? this.adapter.isSurfaceActive() : true;
  };
  MDCRippleFoundation.prototype.animateActivation = function () {
    var _this = this;
    var _a = MDCRippleFoundation.strings,
      VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
      VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation.cssClasses,
      FG_DEACTIVATION = _b.FG_DEACTIVATION,
      FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal();
    var translateStart = '';
    var translateEnd = '';
    if (!this.adapter.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates(),
        startPoint = _c.startPoint,
        endPoint = _c.endPoint;
      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    // Cancel any ongoing activation/deactivation animations
    clearTimeout(this.activationTimer);
    clearTimeout(this.fgDeactivationRemovalTimer);
    this.rmBoundedActivationClasses();
    this.adapter.removeClass(FG_DEACTIVATION);
    // Force layout in order to re-trigger the animation.
    this.adapter.computeBoundingRect();
    this.adapter.addClass(FG_ACTIVATION);
    this.activationTimer = setTimeout(function () {
      _this.activationTimerCallback();
    }, DEACTIVATION_TIMEOUT_MS);
  };
  MDCRippleFoundation.prototype.getFgTranslationCoordinates = function () {
    var _a = this.activationState,
      activationEvent = _a.activationEvent,
      wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;
    if (wasActivatedByPointer) {
      startPoint = (0, _util.getNormalizedEventCoords)(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      };
    }
    // Center the element around the start point.
    startPoint = {
      x: startPoint.x - this.initialSize / 2,
      y: startPoint.y - this.initialSize / 2
    };
    var endPoint = {
      x: this.frame.width / 2 - this.initialSize / 2,
      y: this.frame.height / 2 - this.initialSize / 2
    };
    return {
      startPoint: startPoint,
      endPoint: endPoint
    };
  };
  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady = function () {
    var _this = this;
    // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.
    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState,
      hasDeactivationUXRun = _a.hasDeactivationUXRun,
      isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded) {
      this.rmBoundedActivationClasses();
      this.adapter.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer = setTimeout(function () {
        _this.adapter.removeClass(FG_DEACTIVATION);
      }, _constants.numbers.FG_DEACTIVATION_MS);
    }
  };
  MDCRippleFoundation.prototype.rmBoundedActivationClasses = function () {
    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded = false;
    this.adapter.computeBoundingRect();
  };
  MDCRippleFoundation.prototype.resetActivationState = function () {
    var _this = this;
    this.previousActivationEvent = this.activationState.activationEvent;
    this.activationState = this.defaultActivationState();
    // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.
    setTimeout(function () {
      return _this.previousActivationEvent = undefined;
    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  };
  MDCRippleFoundation.prototype.deactivateImpl = function () {
    var _this = this;
    var activationState = this.activationState;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.
    if (!activationState.isActivated) {
      return;
    }
    var state = (0, _tslib.__assign)({}, activationState);
    if (activationState.isProgrammatic) {
      requestAnimationFrame(function () {
        _this.animateDeactivation(state);
      });
      this.resetActivationState();
    } else {
      this.deregisterDeactivationHandlers();
      requestAnimationFrame(function () {
        _this.activationState.hasDeactivationUXRun = true;
        _this.animateDeactivation(state);
        _this.resetActivationState();
      });
    }
  };
  MDCRippleFoundation.prototype.animateDeactivation = function (_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer,
      wasElementMadeActive = _a.wasElementMadeActive;
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady();
    }
  };
  MDCRippleFoundation.prototype.layoutInternal = function () {
    var _this = this;
    this.frame = this.adapter.computeBoundingRect();
    var maxDim = Math.max(this.frame.height, this.frame.width);
    // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.
    var getBoundedRadius = function () {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };
    this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
    // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
    var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
    // Unbounded ripple size should always be even number to equally center align.
    if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize = initialSize - 1;
    } else {
      this.initialSize = initialSize;
    }
    this.fgScale = "" + this.maxRadius / this.initialSize;
    this.updateLayoutCssVars();
  };
  MDCRippleFoundation.prototype.updateLayoutCssVars = function () {
    var _a = MDCRippleFoundation.strings,
      VAR_FG_SIZE = _a.VAR_FG_SIZE,
      VAR_LEFT = _a.VAR_LEFT,
      VAR_TOP = _a.VAR_TOP,
      VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
    this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
    if (this.adapter.isUnbounded()) {
      this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      };
      this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
      this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
    }
  };
  return MDCRippleFoundation;
}(_foundation.MDCFoundation);
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = exports.default = MDCRippleFoundation;
},{"tslib":"vCxL","@material/base/foundation":"uJAj","./constants":"NQRl","./util":"joOv"}],"EOC7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCRipple = void 0;
var _tslib = require("tslib");
var _component = require("@material/base/component");
var _events = require("@material/dom/events");
var _ponyfill = require("@material/dom/ponyfill");
var _foundation = require("./foundation");
var util = _interopRequireWildcard(require("./util"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCRipple = exports.MDCRipple = /** @class */function (_super) {
  (0, _tslib.__extends)(MDCRipple, _super);
  function MDCRipple() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.disabled = false;
    return _this;
  }
  MDCRipple.attachTo = function (root, opts) {
    if (opts === void 0) {
      opts = {
        isUnbounded: undefined
      };
    }
    var ripple = new MDCRipple(root);
    // Only override unbounded behavior if option is explicitly specified
    if (opts.isUnbounded !== undefined) {
      ripple.unbounded = opts.isUnbounded;
    }
    return ripple;
  };
  MDCRipple.createAdapter = function (instance) {
    return {
      addClass: function (className) {
        return instance.root.classList.add(className);
      },
      browserSupportsCssVars: function () {
        return util.supportsCssVariables(window);
      },
      computeBoundingRect: function () {
        return instance.root.getBoundingClientRect();
      },
      containsEventTarget: function (target) {
        return instance.root.contains(target);
      },
      deregisterDocumentInteractionHandler: function (evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      deregisterInteractionHandler: function (evtType, handler) {
        return instance.root.removeEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      deregisterResizeHandler: function (handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function () {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function () {
        return (0, _ponyfill.matches)(instance.root, ':active');
      },
      isSurfaceDisabled: function () {
        return Boolean(instance.disabled);
      },
      isUnbounded: function () {
        return Boolean(instance.unbounded);
      },
      registerDocumentInteractionHandler: function (evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      registerInteractionHandler: function (evtType, handler) {
        return instance.root.addEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      registerResizeHandler: function (handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function (className) {
        return instance.root.classList.remove(className);
      },
      updateCssVariable: function (varName, value) {
        return instance.root.style.setProperty(varName, value);
      }
    };
  };
  Object.defineProperty(MDCRipple.prototype, "unbounded", {
    get: function () {
      return Boolean(this.isUnbounded);
    },
    set: function (unbounded) {
      this.isUnbounded = Boolean(unbounded);
      this.setUnbounded();
    },
    enumerable: false,
    configurable: true
  });
  MDCRipple.prototype.activate = function () {
    this.foundation.activate();
  };
  MDCRipple.prototype.deactivate = function () {
    this.foundation.deactivate();
  };
  MDCRipple.prototype.layout = function () {
    this.foundation.layout();
  };
  MDCRipple.prototype.getDefaultFoundation = function () {
    return new _foundation.MDCRippleFoundation(MDCRipple.createAdapter(this));
  };
  MDCRipple.prototype.initialSyncWithDOM = function () {
    var root = this.root;
    this.isUnbounded = 'mdcRippleIsUnbounded' in root.dataset;
  };
  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   */
  MDCRipple.prototype.setUnbounded = function () {
    this.foundation.setUnbounded(Boolean(this.isUnbounded));
  };
  return MDCRipple;
}(_component.MDCComponent);
},{"tslib":"vCxL","@material/base/component":"EQDb","@material/dom/events":"Hm44","@material/dom/ponyfill":"QP7s","./foundation":"SIOS","./util":"joOv"}],"vkNc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  util: true
};
exports.util = void 0;
var util = _interopRequireWildcard(require("./util"));
exports.util = util;
var _adapter = require("./adapter");
Object.keys(_adapter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _adapter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _adapter[key];
    }
  });
});
var _component = require("./component");
Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _component[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _component[key];
    }
  });
});
var _constants = require("./constants");
Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});
var _foundation = require("./foundation");
Object.keys(_foundation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _foundation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foundation[key];
    }
  });
});
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
},{"./util":"joOv","./adapter":"a0Wq","./component":"EOC7","./constants":"NQRl","./foundation":"SIOS","./types":"a0Wq"}],"Focm":[function(require,module,exports) {
"use strict";

var _list = require("@material/list");
var _ripple = require("@material/ripple");
var body = document.querySelector('body'),
  sidebar = body.querySelector('nav'),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");
toggle.addEventListener("click", function () {
  sidebar.classList.toggle("close");
});
searchBtn.addEventListener("click", function () {
  sidebar.classList.remove("close");
});
modeSwitch.addEventListener("click", function () {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});
var list = new _list.MDCList(document.querySelector('.mdc-deprecated-list'));
var listItemRipples = list.listElements.map(function (listItemEl) {
  return new _ripple.MDCRipple(listItemEl);
});
},{"@material/list":"UkKm","@material/ripple":"vkNc"}]},{},["Focm"], null)
//# sourceMappingURL=/src.f5ba537e.js.map