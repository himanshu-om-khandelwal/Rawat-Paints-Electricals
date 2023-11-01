var _a, _b;
import { effectScope, reactive, hasInjectionContext, getCurrentInstance, version, unref, inject, ref, watchEffect, watch, toRef, h, isReadonly, isRef, isShallow, isReactive, toRaw, mergeProps, useSSRContext, defineAsyncComponent, provide, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, createApp } from "vue";
import Rt from "node:http";
import Ka from "node:https";
import nt from "node:zlib";
import se, { PassThrough, pipeline } from "node:stream";
import { Buffer as Buffer$1 } from "node:buffer";
import { promisify, deprecate, types } from "node:util";
import { format } from "node:url";
import { isIP } from "node:net";
import { statSync, promises, createReadStream } from "node:fs";
import { basename } from "node:path";
import { useRuntimeConfig as useRuntimeConfig$1 } from "#internal/nitro";
import { createHooks } from "hookable";
import { getContext } from "unctx";
import "devalue";
import { getActiveHead } from "unhead";
import { sanitizeStatusCode, createError as createError$1 } from "h3";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from "vue/server-renderer";
var Za = Object.defineProperty;
var n = (i, o2) => Za(i, "name", { value: o2, configurable: true });
var Ko = (i, o2, a2) => {
  if (!o2.has(i))
    throw TypeError("Cannot " + a2);
};
var k = (i, o2, a2) => (Ko(i, o2, "read from private field"), a2 ? a2.call(i) : o2.get(i)), ae = (i, o2, a2) => {
  if (o2.has(i))
    throw TypeError("Cannot add the same private member more than once");
  o2 instanceof WeakSet ? o2.add(i) : o2.set(i, a2);
}, Y = (i, o2, a2, l2) => (Ko(i, o2, "write to private field"), l2 ? l2.call(i, a2) : o2.set(i, a2), a2);
var me, vt, ct, wr, xe, Et, At, Wt, G, Bt, Ue, Ne, kt;
function os(i) {
  if (!/^data:/i.test(i))
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  i = i.replace(/\r?\n/g, "");
  const o2 = i.indexOf(",");
  if (o2 === -1 || o2 <= 4)
    throw new TypeError("malformed data: URI");
  const a2 = i.substring(5, o2).split(";");
  let l2 = "", u = false;
  const d2 = a2[0] || "text/plain";
  let p = d2;
  for (let I = 1; I < a2.length; I++)
    a2[I] === "base64" ? u = true : a2[I] && (p += `;${a2[I]}`, a2[I].indexOf("charset=") === 0 && (l2 = a2[I].substring(8)));
  !a2[0] && !l2.length && (p += ";charset=US-ASCII", l2 = "US-ASCII");
  const m = u ? "base64" : "ascii", C = unescape(i.substring(o2 + 1)), S = Buffer.from(C, m);
  return S.type = d2, S.typeFull = p, S.charset = l2, S;
}
n(os, "dataUriToBuffer");
var _n = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : {};
function is(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
n(is, "getDefaultExportFromCjs");
var cr = { exports: {} }, Xo;
function as() {
  return Xo || (Xo = 1, function(i, o2) {
    (function(a2, l2) {
      l2(o2);
    })(_n, function(a2) {
      const l2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol : (e) => `Symbol(${e})`;
      function u() {
      }
      n(u, "noop");
      function d2() {
        if (typeof self < "u")
          return self;
        if (typeof _n < "u")
          return _n;
      }
      n(d2, "getGlobals");
      const p = d2();
      function m(e) {
        return typeof e == "object" && e !== null || typeof e == "function";
      }
      n(m, "typeIsObject");
      const C = u, S = Promise, I = Promise.prototype.then, re = Promise.resolve.bind(S), L = Promise.reject.bind(S);
      function E(e) {
        return new S(e);
      }
      n(E, "newPromise");
      function b(e) {
        return re(e);
      }
      n(b, "promiseResolvedWith");
      function g2(e) {
        return L(e);
      }
      n(g2, "promiseRejectedWith");
      function A2(e, t2, r) {
        return I.call(e, t2, r);
      }
      n(A2, "PerformPromiseThen");
      function q(e, t2, r) {
        A2(A2(e, t2, r), void 0, C);
      }
      n(q, "uponPromise");
      function ne(e, t2) {
        q(e, t2);
      }
      n(ne, "uponFulfillment");
      function dt(e, t2) {
        q(e, void 0, t2);
      }
      n(dt, "uponRejection");
      function O(e, t2, r) {
        return A2(e, t2, r);
      }
      n(O, "transformPromiseWith");
      function $(e) {
        A2(e, void 0, C);
      }
      n($, "setPromiseIsHandledToTrue");
      const F = (() => {
        const e = p && p.queueMicrotask;
        if (typeof e == "function")
          return e;
        const t2 = b(void 0);
        return (r) => A2(t2, r);
      })();
      function ve(e, t2, r) {
        if (typeof e != "function")
          throw new TypeError("Argument is not a function");
        return Function.prototype.apply.call(e, t2, r);
      }
      n(ve, "reflectCall");
      function ue(e, t2, r) {
        try {
          return b(ve(e, t2, r));
        } catch (s2) {
          return g2(s2);
        }
      }
      n(ue, "promiseCall");
      const jn = 16384, rn = class rn {
        constructor() {
          this._cursor = 0, this._size = 0, this._front = { _elements: [], _next: void 0 }, this._back = this._front, this._cursor = 0, this._size = 0;
        }
        get length() {
          return this._size;
        }
        push(t2) {
          const r = this._back;
          let s2 = r;
          r._elements.length === jn - 1 && (s2 = { _elements: [], _next: void 0 }), r._elements.push(t2), s2 !== r && (this._back = s2, r._next = s2), ++this._size;
        }
        shift() {
          const t2 = this._front;
          let r = t2;
          const s2 = this._cursor;
          let f2 = s2 + 1;
          const c = t2._elements, h2 = c[s2];
          return f2 === jn && (r = t2._next, f2 = 0), --this._size, this._cursor = f2, t2 !== r && (this._front = r), c[s2] = void 0, h2;
        }
        forEach(t2) {
          let r = this._cursor, s2 = this._front, f2 = s2._elements;
          for (; (r !== f2.length || s2._next !== void 0) && !(r === f2.length && (s2 = s2._next, f2 = s2._elements, r = 0, f2.length === 0)); )
            t2(f2[r]), ++r;
        }
        peek() {
          const t2 = this._front, r = this._cursor;
          return t2._elements[r];
        }
      };
      n(rn, "SimpleQueue");
      let x = rn;
      function Fn(e, t2) {
        e._ownerReadableStream = t2, t2._reader = e, t2._state === "readable" ? vr(e) : t2._state === "closed" ? Pi(e) : In(e, t2._storedError);
      }
      n(Fn, "ReadableStreamReaderGenericInitialize");
      function Pr(e, t2) {
        const r = e._ownerReadableStream;
        return J(r, t2);
      }
      n(Pr, "ReadableStreamReaderGenericCancel");
      function fe(e) {
        e._ownerReadableStream._state === "readable" ? Er(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : vi(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), e._ownerReadableStream._reader = void 0, e._ownerReadableStream = void 0;
      }
      n(fe, "ReadableStreamReaderGenericRelease");
      function He(e) {
        return new TypeError("Cannot " + e + " a stream using a released reader");
      }
      n(He, "readerLockException");
      function vr(e) {
        e._closedPromise = E((t2, r) => {
          e._closedPromise_resolve = t2, e._closedPromise_reject = r;
        });
      }
      n(vr, "defaultReaderClosedPromiseInitialize");
      function In(e, t2) {
        vr(e), Er(e, t2);
      }
      n(In, "defaultReaderClosedPromiseInitializeAsRejected");
      function Pi(e) {
        vr(e), Ln(e);
      }
      n(Pi, "defaultReaderClosedPromiseInitializeAsResolved");
      function Er(e, t2) {
        e._closedPromise_reject !== void 0 && ($(e._closedPromise), e._closedPromise_reject(t2), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
      }
      n(Er, "defaultReaderClosedPromiseReject");
      function vi(e, t2) {
        In(e, t2);
      }
      n(vi, "defaultReaderClosedPromiseResetToRejected");
      function Ln(e) {
        e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
      }
      n(Ln, "defaultReaderClosedPromiseResolve");
      const $n = l2("[[AbortSteps]]"), Dn = l2("[[ErrorSteps]]"), Ar = l2("[[CancelSteps]]"), Wr = l2("[[PullSteps]]"), Mn = Number.isFinite || function(e) {
        return typeof e == "number" && isFinite(e);
      }, Ei = Math.trunc || function(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e);
      };
      function Ai(e) {
        return typeof e == "object" || typeof e == "function";
      }
      n(Ai, "isDictionary");
      function ce(e, t2) {
        if (e !== void 0 && !Ai(e))
          throw new TypeError(`${t2} is not an object.`);
      }
      n(ce, "assertDictionary");
      function Z(e, t2) {
        if (typeof e != "function")
          throw new TypeError(`${t2} is not a function.`);
      }
      n(Z, "assertFunction");
      function Wi(e) {
        return typeof e == "object" && e !== null || typeof e == "function";
      }
      n(Wi, "isObject");
      function Un(e, t2) {
        if (!Wi(e))
          throw new TypeError(`${t2} is not an object.`);
      }
      n(Un, "assertObject");
      function de(e, t2, r) {
        if (e === void 0)
          throw new TypeError(`Parameter ${t2} is required in '${r}'.`);
      }
      n(de, "assertRequiredArgument");
      function Br(e, t2, r) {
        if (e === void 0)
          throw new TypeError(`${t2} is required in '${r}'.`);
      }
      n(Br, "assertRequiredField");
      function kr(e) {
        return Number(e);
      }
      n(kr, "convertUnrestrictedDouble");
      function Nn(e) {
        return e === 0 ? 0 : e;
      }
      n(Nn, "censorNegativeZero");
      function Bi(e) {
        return Nn(Ei(e));
      }
      n(Bi, "integerPart");
      function xn(e, t2) {
        const s2 = Number.MAX_SAFE_INTEGER;
        let f2 = Number(e);
        if (f2 = Nn(f2), !Mn(f2))
          throw new TypeError(`${t2} is not a finite number`);
        if (f2 = Bi(f2), f2 < 0 || f2 > s2)
          throw new TypeError(`${t2} is outside the accepted range of 0 to ${s2}, inclusive`);
        return !Mn(f2) || f2 === 0 ? 0 : f2;
      }
      n(xn, "convertUnsignedLongLongWithEnforceRange");
      function Or(e, t2) {
        if (!Te(e))
          throw new TypeError(`${t2} is not a ReadableStream.`);
      }
      n(Or, "assertReadableStream");
      function Ve(e) {
        return new Ee(e);
      }
      n(Ve, "AcquireReadableStreamDefaultReader");
      function Hn(e, t2) {
        e._reader._readRequests.push(t2);
      }
      n(Hn, "ReadableStreamAddReadRequest");
      function qr(e, t2, r) {
        const f2 = e._reader._readRequests.shift();
        r ? f2._closeSteps() : f2._chunkSteps(t2);
      }
      n(qr, "ReadableStreamFulfillReadRequest");
      function Ot(e) {
        return e._reader._readRequests.length;
      }
      n(Ot, "ReadableStreamGetNumReadRequests");
      function Vn(e) {
        const t2 = e._reader;
        return !(t2 === void 0 || !ye(t2));
      }
      n(Vn, "ReadableStreamHasDefaultReader");
      const nn = class nn {
        constructor(t2) {
          if (de(t2, 1, "ReadableStreamDefaultReader"), Or(t2, "First parameter"), Ce(t2))
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          Fn(this, t2), this._readRequests = new x();
        }
        get closed() {
          return ye(this) ? this._closedPromise : g2(qt("closed"));
        }
        cancel(t2 = void 0) {
          return ye(this) ? this._ownerReadableStream === void 0 ? g2(He("cancel")) : Pr(this, t2) : g2(qt("cancel"));
        }
        read() {
          if (!ye(this))
            return g2(qt("read"));
          if (this._ownerReadableStream === void 0)
            return g2(He("read from"));
          let t2, r;
          const s2 = E((c, h2) => {
            t2 = c, r = h2;
          });
          return ht(this, { _chunkSteps: (c) => t2({ value: c, done: false }), _closeSteps: () => t2({ value: void 0, done: true }), _errorSteps: (c) => r(c) }), s2;
        }
        releaseLock() {
          if (!ye(this))
            throw qt("releaseLock");
          if (this._ownerReadableStream !== void 0) {
            if (this._readRequests.length > 0)
              throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            fe(this);
          }
        }
      };
      n(nn, "ReadableStreamDefaultReader");
      let Ee = nn;
      Object.defineProperties(Ee.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(Ee.prototype, l2.toStringTag, { value: "ReadableStreamDefaultReader", configurable: true });
      function ye(e) {
        return !m(e) || !Object.prototype.hasOwnProperty.call(e, "_readRequests") ? false : e instanceof Ee;
      }
      n(ye, "IsReadableStreamDefaultReader");
      function ht(e, t2) {
        const r = e._ownerReadableStream;
        r._disturbed = true, r._state === "closed" ? t2._closeSteps() : r._state === "errored" ? t2._errorSteps(r._storedError) : r._readableStreamController[Wr](t2);
      }
      n(ht, "ReadableStreamDefaultReaderRead");
      function qt(e) {
        return new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`);
      }
      n(qt, "defaultReaderBrandCheckException");
      const Qn = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
      }).prototype), on = class on {
        constructor(t2, r) {
          this._ongoingPromise = void 0, this._isFinished = false, this._reader = t2, this._preventCancel = r;
        }
        next() {
          const t2 = n(() => this._nextSteps(), "nextSteps");
          return this._ongoingPromise = this._ongoingPromise ? O(this._ongoingPromise, t2, t2) : t2(), this._ongoingPromise;
        }
        return(t2) {
          const r = n(() => this._returnSteps(t2), "returnSteps");
          return this._ongoingPromise ? O(this._ongoingPromise, r, r) : r();
        }
        _nextSteps() {
          if (this._isFinished)
            return Promise.resolve({ value: void 0, done: true });
          const t2 = this._reader;
          if (t2._ownerReadableStream === void 0)
            return g2(He("iterate"));
          let r, s2;
          const f2 = E((h2, y) => {
            r = h2, s2 = y;
          });
          return ht(t2, { _chunkSteps: (h2) => {
            this._ongoingPromise = void 0, F(() => r({ value: h2, done: false }));
          }, _closeSteps: () => {
            this._ongoingPromise = void 0, this._isFinished = true, fe(t2), r({ value: void 0, done: true });
          }, _errorSteps: (h2) => {
            this._ongoingPromise = void 0, this._isFinished = true, fe(t2), s2(h2);
          } }), f2;
        }
        _returnSteps(t2) {
          if (this._isFinished)
            return Promise.resolve({ value: t2, done: true });
          this._isFinished = true;
          const r = this._reader;
          if (r._ownerReadableStream === void 0)
            return g2(He("finish iterating"));
          if (!this._preventCancel) {
            const s2 = Pr(r, t2);
            return fe(r), O(s2, () => ({ value: t2, done: true }));
          }
          return fe(r), b({ value: t2, done: true });
        }
      };
      n(on, "ReadableStreamAsyncIteratorImpl");
      let zt = on;
      const Yn = { next() {
        return Gn(this) ? this._asyncIteratorImpl.next() : g2(Zn("next"));
      }, return(e) {
        return Gn(this) ? this._asyncIteratorImpl.return(e) : g2(Zn("return"));
      } };
      Qn !== void 0 && Object.setPrototypeOf(Yn, Qn);
      function ki(e, t2) {
        const r = Ve(e), s2 = new zt(r, t2), f2 = Object.create(Yn);
        return f2._asyncIteratorImpl = s2, f2;
      }
      n(ki, "AcquireReadableStreamAsyncIterator");
      function Gn(e) {
        if (!m(e) || !Object.prototype.hasOwnProperty.call(e, "_asyncIteratorImpl"))
          return false;
        try {
          return e._asyncIteratorImpl instanceof zt;
        } catch {
          return false;
        }
      }
      n(Gn, "IsReadableStreamAsyncIterator");
      function Zn(e) {
        return new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`);
      }
      n(Zn, "streamAsyncIteratorBrandCheckException");
      const Kn = Number.isNaN || function(e) {
        return e !== e;
      };
      function pt(e) {
        return e.slice();
      }
      n(pt, "CreateArrayFromList");
      function Jn(e, t2, r, s2, f2) {
        new Uint8Array(e).set(new Uint8Array(r, s2, f2), t2);
      }
      n(Jn, "CopyDataBlockBytes");
      function Ks(e) {
        return e;
      }
      n(Ks, "TransferArrayBuffer");
      function jt(e) {
        return false;
      }
      n(jt, "IsDetachedBuffer");
      function Xn(e, t2, r) {
        if (e.slice)
          return e.slice(t2, r);
        const s2 = r - t2, f2 = new ArrayBuffer(s2);
        return Jn(f2, 0, e, t2, s2), f2;
      }
      n(Xn, "ArrayBufferSlice");
      function Oi(e) {
        return !(typeof e != "number" || Kn(e) || e < 0);
      }
      n(Oi, "IsNonNegativeNumber");
      function eo(e) {
        const t2 = Xn(e.buffer, e.byteOffset, e.byteOffset + e.byteLength);
        return new Uint8Array(t2);
      }
      n(eo, "CloneAsUint8Array");
      function zr(e) {
        const t2 = e._queue.shift();
        return e._queueTotalSize -= t2.size, e._queueTotalSize < 0 && (e._queueTotalSize = 0), t2.value;
      }
      n(zr, "DequeueValue");
      function jr(e, t2, r) {
        if (!Oi(r) || r === 1 / 0)
          throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
        e._queue.push({ value: t2, size: r }), e._queueTotalSize += r;
      }
      n(jr, "EnqueueValueWithSize");
      function qi(e) {
        return e._queue.peek().value;
      }
      n(qi, "PeekQueueValue");
      function ge(e) {
        e._queue = new x(), e._queueTotalSize = 0;
      }
      n(ge, "ResetQueue");
      const an = class an {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get view() {
          if (!Fr(this))
            throw Dr("view");
          return this._view;
        }
        respond(t2) {
          if (!Fr(this))
            throw Dr("respond");
          if (de(t2, 1, "respond"), t2 = xn(t2, "First parameter"), this._associatedReadableByteStreamController === void 0)
            throw new TypeError("This BYOB request has been invalidated");
          jt(this._view.buffer), Dt(this._associatedReadableByteStreamController, t2);
        }
        respondWithNewView(t2) {
          if (!Fr(this))
            throw Dr("respondWithNewView");
          if (de(t2, 1, "respondWithNewView"), !ArrayBuffer.isView(t2))
            throw new TypeError("You can only respond with array buffer views");
          if (this._associatedReadableByteStreamController === void 0)
            throw new TypeError("This BYOB request has been invalidated");
          jt(t2.buffer), Mt(this._associatedReadableByteStreamController, t2);
        }
      };
      n(an, "ReadableStreamBYOBRequest");
      let Ae = an;
      Object.defineProperties(Ae.prototype, { respond: { enumerable: true }, respondWithNewView: { enumerable: true }, view: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(Ae.prototype, l2.toStringTag, { value: "ReadableStreamBYOBRequest", configurable: true });
      const sn = class sn {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get byobRequest() {
          if (!We(this))
            throw mt("byobRequest");
          return $r(this);
        }
        get desiredSize() {
          if (!We(this))
            throw mt("desiredSize");
          return lo(this);
        }
        close() {
          if (!We(this))
            throw mt("close");
          if (this._closeRequested)
            throw new TypeError("The stream has already been closed; do not close it again!");
          const t2 = this._controlledReadableByteStream._state;
          if (t2 !== "readable")
            throw new TypeError(`The stream (in ${t2} state) is not in the readable state and cannot be closed`);
          bt(this);
        }
        enqueue(t2) {
          if (!We(this))
            throw mt("enqueue");
          if (de(t2, 1, "enqueue"), !ArrayBuffer.isView(t2))
            throw new TypeError("chunk must be an array buffer view");
          if (t2.byteLength === 0)
            throw new TypeError("chunk must have non-zero byteLength");
          if (t2.buffer.byteLength === 0)
            throw new TypeError("chunk's buffer must have non-zero byteLength");
          if (this._closeRequested)
            throw new TypeError("stream is closed or draining");
          const r = this._controlledReadableByteStream._state;
          if (r !== "readable")
            throw new TypeError(`The stream (in ${r} state) is not in the readable state and cannot be enqueued to`);
          $t(this, t2);
        }
        error(t2 = void 0) {
          if (!We(this))
            throw mt("error");
          K(this, t2);
        }
        [Ar](t2) {
          to(this), ge(this);
          const r = this._cancelAlgorithm(t2);
          return Lt(this), r;
        }
        [Wr](t2) {
          const r = this._controlledReadableByteStream;
          if (this._queueTotalSize > 0) {
            const f2 = this._queue.shift();
            this._queueTotalSize -= f2.byteLength, io(this);
            const c = new Uint8Array(f2.buffer, f2.byteOffset, f2.byteLength);
            t2._chunkSteps(c);
            return;
          }
          const s2 = this._autoAllocateChunkSize;
          if (s2 !== void 0) {
            let f2;
            try {
              f2 = new ArrayBuffer(s2);
            } catch (h2) {
              t2._errorSteps(h2);
              return;
            }
            const c = { buffer: f2, bufferByteLength: s2, byteOffset: 0, byteLength: s2, bytesFilled: 0, elementSize: 1, viewConstructor: Uint8Array, readerType: "default" };
            this._pendingPullIntos.push(c);
          }
          Hn(r, t2), Be(this);
        }
      };
      n(sn, "ReadableByteStreamController");
      let _e = sn;
      Object.defineProperties(_e.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, byobRequest: { enumerable: true }, desiredSize: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(_e.prototype, l2.toStringTag, { value: "ReadableByteStreamController", configurable: true });
      function We(e) {
        return !m(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableByteStream") ? false : e instanceof _e;
      }
      n(We, "IsReadableByteStreamController");
      function Fr(e) {
        return !m(e) || !Object.prototype.hasOwnProperty.call(e, "_associatedReadableByteStreamController") ? false : e instanceof Ae;
      }
      n(Fr, "IsReadableStreamBYOBRequest");
      function Be(e) {
        if (!Ii(e))
          return;
        if (e._pulling) {
          e._pullAgain = true;
          return;
        }
        e._pulling = true;
        const r = e._pullAlgorithm();
        q(r, () => {
          e._pulling = false, e._pullAgain && (e._pullAgain = false, Be(e));
        }, (s2) => {
          K(e, s2);
        });
      }
      n(Be, "ReadableByteStreamControllerCallPullIfNeeded");
      function to(e) {
        Lr(e), e._pendingPullIntos = new x();
      }
      n(to, "ReadableByteStreamControllerClearPendingPullIntos");
      function Ir(e, t2) {
        let r = false;
        e._state === "closed" && (r = true);
        const s2 = ro(t2);
        t2.readerType === "default" ? qr(e, s2, r) : Di(e, s2, r);
      }
      n(Ir, "ReadableByteStreamControllerCommitPullIntoDescriptor");
      function ro(e) {
        const t2 = e.bytesFilled, r = e.elementSize;
        return new e.viewConstructor(e.buffer, e.byteOffset, t2 / r);
      }
      n(ro, "ReadableByteStreamControllerConvertPullIntoDescriptor");
      function Ft(e, t2, r, s2) {
        e._queue.push({ buffer: t2, byteOffset: r, byteLength: s2 }), e._queueTotalSize += s2;
      }
      n(Ft, "ReadableByteStreamControllerEnqueueChunkToQueue");
      function no(e, t2) {
        const r = t2.elementSize, s2 = t2.bytesFilled - t2.bytesFilled % r, f2 = Math.min(e._queueTotalSize, t2.byteLength - t2.bytesFilled), c = t2.bytesFilled + f2, h2 = c - c % r;
        let y = f2, w = false;
        h2 > s2 && (y = h2 - t2.bytesFilled, w = true);
        const T = e._queue;
        for (; y > 0; ) {
          const P = T.peek(), v = Math.min(y, P.byteLength), z = t2.byteOffset + t2.bytesFilled;
          Jn(t2.buffer, z, P.buffer, P.byteOffset, v), P.byteLength === v ? T.shift() : (P.byteOffset += v, P.byteLength -= v), e._queueTotalSize -= v, oo(e, v, t2), y -= v;
        }
        return w;
      }
      n(no, "ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");
      function oo(e, t2, r) {
        r.bytesFilled += t2;
      }
      n(oo, "ReadableByteStreamControllerFillHeadPullIntoDescriptor");
      function io(e) {
        e._queueTotalSize === 0 && e._closeRequested ? (Lt(e), wt(e._controlledReadableByteStream)) : Be(e);
      }
      n(io, "ReadableByteStreamControllerHandleQueueDrain");
      function Lr(e) {
        e._byobRequest !== null && (e._byobRequest._associatedReadableByteStreamController = void 0, e._byobRequest._view = null, e._byobRequest = null);
      }
      n(Lr, "ReadableByteStreamControllerInvalidateBYOBRequest");
      function ao(e) {
        for (; e._pendingPullIntos.length > 0; ) {
          if (e._queueTotalSize === 0)
            return;
          const t2 = e._pendingPullIntos.peek();
          no(e, t2) && (It(e), Ir(e._controlledReadableByteStream, t2));
        }
      }
      n(ao, "ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");
      function zi(e, t2, r) {
        const s2 = e._controlledReadableByteStream;
        let f2 = 1;
        t2.constructor !== DataView && (f2 = t2.constructor.BYTES_PER_ELEMENT);
        const c = t2.constructor, h2 = t2.buffer, y = { buffer: h2, bufferByteLength: h2.byteLength, byteOffset: t2.byteOffset, byteLength: t2.byteLength, bytesFilled: 0, elementSize: f2, viewConstructor: c, readerType: "byob" };
        if (e._pendingPullIntos.length > 0) {
          e._pendingPullIntos.push(y), co(s2, r);
          return;
        }
        if (s2._state === "closed") {
          const w = new c(y.buffer, y.byteOffset, 0);
          r._closeSteps(w);
          return;
        }
        if (e._queueTotalSize > 0) {
          if (no(e, y)) {
            const w = ro(y);
            io(e), r._chunkSteps(w);
            return;
          }
          if (e._closeRequested) {
            const w = new TypeError("Insufficient bytes to fill elements in the given buffer");
            K(e, w), r._errorSteps(w);
            return;
          }
        }
        e._pendingPullIntos.push(y), co(s2, r), Be(e);
      }
      n(zi, "ReadableByteStreamControllerPullInto");
      function ji(e, t2) {
        const r = e._controlledReadableByteStream;
        if (Mr(r))
          for (; ho(r) > 0; ) {
            const s2 = It(e);
            Ir(r, s2);
          }
      }
      n(ji, "ReadableByteStreamControllerRespondInClosedState");
      function Fi(e, t2, r) {
        if (oo(e, t2, r), r.bytesFilled < r.elementSize)
          return;
        It(e);
        const s2 = r.bytesFilled % r.elementSize;
        if (s2 > 0) {
          const f2 = r.byteOffset + r.bytesFilled, c = Xn(r.buffer, f2 - s2, f2);
          Ft(e, c, 0, c.byteLength);
        }
        r.bytesFilled -= s2, Ir(e._controlledReadableByteStream, r), ao(e);
      }
      n(Fi, "ReadableByteStreamControllerRespondInReadableState");
      function so(e, t2) {
        const r = e._pendingPullIntos.peek();
        Lr(e), e._controlledReadableByteStream._state === "closed" ? ji(e) : Fi(e, t2, r), Be(e);
      }
      n(so, "ReadableByteStreamControllerRespondInternal");
      function It(e) {
        return e._pendingPullIntos.shift();
      }
      n(It, "ReadableByteStreamControllerShiftPendingPullInto");
      function Ii(e) {
        const t2 = e._controlledReadableByteStream;
        return t2._state !== "readable" || e._closeRequested || !e._started ? false : !!(Vn(t2) && Ot(t2) > 0 || Mr(t2) && ho(t2) > 0 || lo(e) > 0);
      }
      n(Ii, "ReadableByteStreamControllerShouldCallPull");
      function Lt(e) {
        e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0;
      }
      n(Lt, "ReadableByteStreamControllerClearAlgorithms");
      function bt(e) {
        const t2 = e._controlledReadableByteStream;
        if (!(e._closeRequested || t2._state !== "readable")) {
          if (e._queueTotalSize > 0) {
            e._closeRequested = true;
            return;
          }
          if (e._pendingPullIntos.length > 0 && e._pendingPullIntos.peek().bytesFilled > 0) {
            const s2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            throw K(e, s2), s2;
          }
          Lt(e), wt(t2);
        }
      }
      n(bt, "ReadableByteStreamControllerClose");
      function $t(e, t2) {
        const r = e._controlledReadableByteStream;
        if (e._closeRequested || r._state !== "readable")
          return;
        const s2 = t2.buffer, f2 = t2.byteOffset, c = t2.byteLength, h2 = s2;
        if (e._pendingPullIntos.length > 0) {
          const y = e._pendingPullIntos.peek();
          jt(y.buffer), y.buffer = y.buffer;
        }
        if (Lr(e), Vn(r))
          if (Ot(r) === 0)
            Ft(e, h2, f2, c);
          else {
            e._pendingPullIntos.length > 0 && It(e);
            const y = new Uint8Array(h2, f2, c);
            qr(r, y, false);
          }
        else
          Mr(r) ? (Ft(e, h2, f2, c), ao(e)) : Ft(e, h2, f2, c);
        Be(e);
      }
      n($t, "ReadableByteStreamControllerEnqueue");
      function K(e, t2) {
        const r = e._controlledReadableByteStream;
        r._state === "readable" && (to(e), ge(e), Lt(e), Io(r, t2));
      }
      n(K, "ReadableByteStreamControllerError");
      function $r(e) {
        if (e._byobRequest === null && e._pendingPullIntos.length > 0) {
          const t2 = e._pendingPullIntos.peek(), r = new Uint8Array(t2.buffer, t2.byteOffset + t2.bytesFilled, t2.byteLength - t2.bytesFilled), s2 = Object.create(Ae.prototype);
          $i(s2, e, r), e._byobRequest = s2;
        }
        return e._byobRequest;
      }
      n($r, "ReadableByteStreamControllerGetBYOBRequest");
      function lo(e) {
        const t2 = e._controlledReadableByteStream._state;
        return t2 === "errored" ? null : t2 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
      }
      n(lo, "ReadableByteStreamControllerGetDesiredSize");
      function Dt(e, t2) {
        const r = e._pendingPullIntos.peek();
        if (e._controlledReadableByteStream._state === "closed") {
          if (t2 !== 0)
            throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
        } else {
          if (t2 === 0)
            throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
          if (r.bytesFilled + t2 > r.byteLength)
            throw new RangeError("bytesWritten out of range");
        }
        r.buffer = r.buffer, so(e, t2);
      }
      n(Dt, "ReadableByteStreamControllerRespond");
      function Mt(e, t2) {
        const r = e._pendingPullIntos.peek();
        if (e._controlledReadableByteStream._state === "closed") {
          if (t2.byteLength !== 0)
            throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
        } else if (t2.byteLength === 0)
          throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
        if (r.byteOffset + r.bytesFilled !== t2.byteOffset)
          throw new RangeError("The region specified by view does not match byobRequest");
        if (r.bufferByteLength !== t2.buffer.byteLength)
          throw new RangeError("The buffer of view has different capacity than byobRequest");
        if (r.bytesFilled + t2.byteLength > r.byteLength)
          throw new RangeError("The region specified by view is larger than byobRequest");
        const f2 = t2.byteLength;
        r.buffer = t2.buffer, so(e, f2);
      }
      n(Mt, "ReadableByteStreamControllerRespondWithNewView");
      function uo(e, t2, r, s2, f2, c, h2) {
        t2._controlledReadableByteStream = e, t2._pullAgain = false, t2._pulling = false, t2._byobRequest = null, t2._queue = t2._queueTotalSize = void 0, ge(t2), t2._closeRequested = false, t2._started = false, t2._strategyHWM = c, t2._pullAlgorithm = s2, t2._cancelAlgorithm = f2, t2._autoAllocateChunkSize = h2, t2._pendingPullIntos = new x(), e._readableStreamController = t2;
        const y = r();
        q(b(y), () => {
          t2._started = true, Be(t2);
        }, (w) => {
          K(t2, w);
        });
      }
      n(uo, "SetUpReadableByteStreamController");
      function Li(e, t2, r) {
        const s2 = Object.create(_e.prototype);
        let f2 = n(() => {
        }, "startAlgorithm"), c = n(() => b(void 0), "pullAlgorithm"), h2 = n(() => b(void 0), "cancelAlgorithm");
        t2.start !== void 0 && (f2 = n(() => t2.start(s2), "startAlgorithm")), t2.pull !== void 0 && (c = n(() => t2.pull(s2), "pullAlgorithm")), t2.cancel !== void 0 && (h2 = n((w) => t2.cancel(w), "cancelAlgorithm"));
        const y = t2.autoAllocateChunkSize;
        if (y === 0)
          throw new TypeError("autoAllocateChunkSize must be greater than 0");
        uo(e, s2, f2, c, h2, r, y);
      }
      n(Li, "SetUpReadableByteStreamControllerFromUnderlyingSource");
      function $i(e, t2, r) {
        e._associatedReadableByteStreamController = t2, e._view = r;
      }
      n($i, "SetUpReadableStreamBYOBRequest");
      function Dr(e) {
        return new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`);
      }
      n(Dr, "byobRequestBrandCheckException");
      function mt(e) {
        return new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`);
      }
      n(mt, "byteStreamControllerBrandCheckException");
      function fo(e) {
        return new ke(e);
      }
      n(fo, "AcquireReadableStreamBYOBReader");
      function co(e, t2) {
        e._reader._readIntoRequests.push(t2);
      }
      n(co, "ReadableStreamAddReadIntoRequest");
      function Di(e, t2, r) {
        const f2 = e._reader._readIntoRequests.shift();
        r ? f2._closeSteps(t2) : f2._chunkSteps(t2);
      }
      n(Di, "ReadableStreamFulfillReadIntoRequest");
      function ho(e) {
        return e._reader._readIntoRequests.length;
      }
      n(ho, "ReadableStreamGetNumReadIntoRequests");
      function Mr(e) {
        const t2 = e._reader;
        return !(t2 === void 0 || !Oe(t2));
      }
      n(Mr, "ReadableStreamHasBYOBReader");
      const ln = class ln {
        constructor(t2) {
          if (de(t2, 1, "ReadableStreamBYOBReader"), Or(t2, "First parameter"), Ce(t2))
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          if (!We(t2._readableStreamController))
            throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
          Fn(this, t2), this._readIntoRequests = new x();
        }
        get closed() {
          return Oe(this) ? this._closedPromise : g2(Ut("closed"));
        }
        cancel(t2 = void 0) {
          return Oe(this) ? this._ownerReadableStream === void 0 ? g2(He("cancel")) : Pr(this, t2) : g2(Ut("cancel"));
        }
        read(t2) {
          if (!Oe(this))
            return g2(Ut("read"));
          if (!ArrayBuffer.isView(t2))
            return g2(new TypeError("view must be an array buffer view"));
          if (t2.byteLength === 0)
            return g2(new TypeError("view must have non-zero byteLength"));
          if (t2.buffer.byteLength === 0)
            return g2(new TypeError("view's buffer must have non-zero byteLength"));
          if (jt(t2.buffer), this._ownerReadableStream === void 0)
            return g2(He("read from"));
          let r, s2;
          const f2 = E((h2, y) => {
            r = h2, s2 = y;
          });
          return po(this, t2, { _chunkSteps: (h2) => r({ value: h2, done: false }), _closeSteps: (h2) => r({ value: h2, done: true }), _errorSteps: (h2) => s2(h2) }), f2;
        }
        releaseLock() {
          if (!Oe(this))
            throw Ut("releaseLock");
          if (this._ownerReadableStream !== void 0) {
            if (this._readIntoRequests.length > 0)
              throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            fe(this);
          }
        }
      };
      n(ln, "ReadableStreamBYOBReader");
      let ke = ln;
      Object.defineProperties(ke.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(ke.prototype, l2.toStringTag, { value: "ReadableStreamBYOBReader", configurable: true });
      function Oe(e) {
        return !m(e) || !Object.prototype.hasOwnProperty.call(e, "_readIntoRequests") ? false : e instanceof ke;
      }
      n(Oe, "IsReadableStreamBYOBReader");
      function po(e, t2, r) {
        const s2 = e._ownerReadableStream;
        s2._disturbed = true, s2._state === "errored" ? r._errorSteps(s2._storedError) : zi(s2._readableStreamController, t2, r);
      }
      n(po, "ReadableStreamBYOBReaderRead");
      function Ut(e) {
        return new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`);
      }
      n(Ut, "byobReaderBrandCheckException");
      function yt(e, t2) {
        const { highWaterMark: r } = e;
        if (r === void 0)
          return t2;
        if (Kn(r) || r < 0)
          throw new RangeError("Invalid highWaterMark");
        return r;
      }
      n(yt, "ExtractHighWaterMark");
      function Nt(e) {
        const { size: t2 } = e;
        return t2 || (() => 1);
      }
      n(Nt, "ExtractSizeAlgorithm");
      function xt(e, t2) {
        ce(e, t2);
        const r = e == null ? void 0 : e.highWaterMark, s2 = e == null ? void 0 : e.size;
        return { highWaterMark: r === void 0 ? void 0 : kr(r), size: s2 === void 0 ? void 0 : Mi(s2, `${t2} has member 'size' that`) };
      }
      n(xt, "convertQueuingStrategy");
      function Mi(e, t2) {
        return Z(e, t2), (r) => kr(e(r));
      }
      n(Mi, "convertQueuingStrategySize");
      function Ui(e, t2) {
        ce(e, t2);
        const r = e == null ? void 0 : e.abort, s2 = e == null ? void 0 : e.close, f2 = e == null ? void 0 : e.start, c = e == null ? void 0 : e.type, h2 = e == null ? void 0 : e.write;
        return { abort: r === void 0 ? void 0 : Ni(r, e, `${t2} has member 'abort' that`), close: s2 === void 0 ? void 0 : xi(s2, e, `${t2} has member 'close' that`), start: f2 === void 0 ? void 0 : Hi(f2, e, `${t2} has member 'start' that`), write: h2 === void 0 ? void 0 : Vi(h2, e, `${t2} has member 'write' that`), type: c };
      }
      n(Ui, "convertUnderlyingSink");
      function Ni(e, t2, r) {
        return Z(e, r), (s2) => ue(e, t2, [s2]);
      }
      n(Ni, "convertUnderlyingSinkAbortCallback");
      function xi(e, t2, r) {
        return Z(e, r), () => ue(e, t2, []);
      }
      n(xi, "convertUnderlyingSinkCloseCallback");
      function Hi(e, t2, r) {
        return Z(e, r), (s2) => ve(e, t2, [s2]);
      }
      n(Hi, "convertUnderlyingSinkStartCallback");
      function Vi(e, t2, r) {
        return Z(e, r), (s2, f2) => ue(e, t2, [s2, f2]);
      }
      n(Vi, "convertUnderlyingSinkWriteCallback");
      function bo(e, t2) {
        if (!Qe(e))
          throw new TypeError(`${t2} is not a WritableStream.`);
      }
      n(bo, "assertWritableStream");
      function Qi(e) {
        if (typeof e != "object" || e === null)
          return false;
        try {
          return typeof e.aborted == "boolean";
        } catch {
          return false;
        }
      }
      n(Qi, "isAbortSignal");
      const Yi = typeof AbortController == "function";
      function Gi() {
        if (Yi)
          return new AbortController();
      }
      n(Gi, "createAbortController");
      const un = class un {
        constructor(t2 = {}, r = {}) {
          t2 === void 0 ? t2 = null : Un(t2, "First parameter");
          const s2 = xt(r, "Second parameter"), f2 = Ui(t2, "First parameter");
          if (yo(this), f2.type !== void 0)
            throw new RangeError("Invalid type is specified");
          const h2 = Nt(s2), y = yt(s2, 1);
          ua(this, f2, y, h2);
        }
        get locked() {
          if (!Qe(this))
            throw Gt("locked");
          return Ye(this);
        }
        abort(t2 = void 0) {
          return Qe(this) ? Ye(this) ? g2(new TypeError("Cannot abort a stream that already has a writer")) : Ht(this, t2) : g2(Gt("abort"));
        }
        close() {
          return Qe(this) ? Ye(this) ? g2(new TypeError("Cannot close a stream that already has a writer")) : oe(this) ? g2(new TypeError("Cannot close an already-closing stream")) : go(this) : g2(Gt("close"));
        }
        getWriter() {
          if (!Qe(this))
            throw Gt("getWriter");
          return mo(this);
        }
      };
      n(un, "WritableStream");
      let qe = un;
      Object.defineProperties(qe.prototype, { abort: { enumerable: true }, close: { enumerable: true }, getWriter: { enumerable: true }, locked: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(qe.prototype, l2.toStringTag, { value: "WritableStream", configurable: true });
      function mo(e) {
        return new ze(e);
      }
      n(mo, "AcquireWritableStreamDefaultWriter");
      function Zi(e, t2, r, s2, f2 = 1, c = () => 1) {
        const h2 = Object.create(qe.prototype);
        yo(h2);
        const y = Object.create(Se.prototype);
        return Co(h2, y, e, t2, r, s2, f2, c), h2;
      }
      n(Zi, "CreateWritableStream");
      function yo(e) {
        e._state = "writable", e._storedError = void 0, e._writer = void 0, e._writableStreamController = void 0, e._writeRequests = new x(), e._inFlightWriteRequest = void 0, e._closeRequest = void 0, e._inFlightCloseRequest = void 0, e._pendingAbortRequest = void 0, e._backpressure = false;
      }
      n(yo, "InitializeWritableStream");
      function Qe(e) {
        return !m(e) || !Object.prototype.hasOwnProperty.call(e, "_writableStreamController") ? false : e instanceof qe;
      }
      n(Qe, "IsWritableStream");
      function Ye(e) {
        return e._writer !== void 0;
      }
      n(Ye, "IsWritableStreamLocked");
      function Ht(e, t2) {
        var r;
        if (e._state === "closed" || e._state === "errored")
          return b(void 0);
        e._writableStreamController._abortReason = t2, (r = e._writableStreamController._abortController) === null || r === void 0 || r.abort();
        const s2 = e._state;
        if (s2 === "closed" || s2 === "errored")
          return b(void 0);
        if (e._pendingAbortRequest !== void 0)
          return e._pendingAbortRequest._promise;
        let f2 = false;
        s2 === "erroring" && (f2 = true, t2 = void 0);
        const c = E((h2, y) => {
          e._pendingAbortRequest = { _promise: void 0, _resolve: h2, _reject: y, _reason: t2, _wasAlreadyErroring: f2 };
        });
        return e._pendingAbortRequest._promise = c, f2 || Nr(e, t2), c;
      }
      n(Ht, "WritableStreamAbort");
      function go(e) {
        const t2 = e._state;
        if (t2 === "closed" || t2 === "errored")
          return g2(new TypeError(`The stream (in ${t2} state) is not in the writable state and cannot be closed`));
        const r = E((f2, c) => {
          const h2 = { _resolve: f2, _reject: c };
          e._closeRequest = h2;
        }), s2 = e._writer;
        return s2 !== void 0 && e._backpressure && t2 === "writable" && Jr(s2), fa(e._writableStreamController), r;
      }
      n(go, "WritableStreamClose");
      function Ki(e) {
        return E((r, s2) => {
          const f2 = { _resolve: r, _reject: s2 };
          e._writeRequests.push(f2);
        });
      }
      n(Ki, "WritableStreamAddWriteRequest");
      function Ur(e, t2) {
        if (e._state === "writable") {
          Nr(e, t2);
          return;
        }
        xr(e);
      }
      n(Ur, "WritableStreamDealWithRejection");
      function Nr(e, t2) {
        const r = e._writableStreamController;
        e._state = "erroring", e._storedError = t2;
        const s2 = e._writer;
        s2 !== void 0 && So(s2, t2), !ra(e) && r._started && xr(e);
      }
      n(Nr, "WritableStreamStartErroring");
      function xr(e) {
        e._state = "errored", e._writableStreamController[Dn]();
        const t2 = e._storedError;
        if (e._writeRequests.forEach((f2) => {
          f2._reject(t2);
        }), e._writeRequests = new x(), e._pendingAbortRequest === void 0) {
          Vt(e);
          return;
        }
        const r = e._pendingAbortRequest;
        if (e._pendingAbortRequest = void 0, r._wasAlreadyErroring) {
          r._reject(t2), Vt(e);
          return;
        }
        const s2 = e._writableStreamController[$n](r._reason);
        q(s2, () => {
          r._resolve(), Vt(e);
        }, (f2) => {
          r._reject(f2), Vt(e);
        });
      }
      n(xr, "WritableStreamFinishErroring");
      function Ji(e) {
        e._inFlightWriteRequest._resolve(void 0), e._inFlightWriteRequest = void 0;
      }
      n(Ji, "WritableStreamFinishInFlightWrite");
      function Xi(e, t2) {
        e._inFlightWriteRequest._reject(t2), e._inFlightWriteRequest = void 0, Ur(e, t2);
      }
      n(Xi, "WritableStreamFinishInFlightWriteWithError");
      function ea(e) {
        e._inFlightCloseRequest._resolve(void 0), e._inFlightCloseRequest = void 0, e._state === "erroring" && (e._storedError = void 0, e._pendingAbortRequest !== void 0 && (e._pendingAbortRequest._resolve(), e._pendingAbortRequest = void 0)), e._state = "closed";
        const r = e._writer;
        r !== void 0 && Ao(r);
      }
      n(ea, "WritableStreamFinishInFlightClose");
      function ta(e, t2) {
        e._inFlightCloseRequest._reject(t2), e._inFlightCloseRequest = void 0, e._pendingAbortRequest !== void 0 && (e._pendingAbortRequest._reject(t2), e._pendingAbortRequest = void 0), Ur(e, t2);
      }
      n(ta, "WritableStreamFinishInFlightCloseWithError");
      function oe(e) {
        return !(e._closeRequest === void 0 && e._inFlightCloseRequest === void 0);
      }
      n(oe, "WritableStreamCloseQueuedOrInFlight");
      function ra(e) {
        return !(e._inFlightWriteRequest === void 0 && e._inFlightCloseRequest === void 0);
      }
      n(ra, "WritableStreamHasOperationMarkedInFlight");
      function na(e) {
        e._inFlightCloseRequest = e._closeRequest, e._closeRequest = void 0;
      }
      n(na, "WritableStreamMarkCloseRequestInFlight");
      function oa(e) {
        e._inFlightWriteRequest = e._writeRequests.shift();
      }
      n(oa, "WritableStreamMarkFirstWriteRequestInFlight");
      function Vt(e) {
        e._closeRequest !== void 0 && (e._closeRequest._reject(e._storedError), e._closeRequest = void 0);
        const t2 = e._writer;
        t2 !== void 0 && Zr(t2, e._storedError);
      }
      n(Vt, "WritableStreamRejectCloseAndClosedPromiseIfNeeded");
      function Hr(e, t2) {
        const r = e._writer;
        r !== void 0 && t2 !== e._backpressure && (t2 ? ya(r) : Jr(r)), e._backpressure = t2;
      }
      n(Hr, "WritableStreamUpdateBackpressure");
      const fn = class fn {
        constructor(t2) {
          if (de(t2, 1, "WritableStreamDefaultWriter"), bo(t2, "First parameter"), Ye(t2))
            throw new TypeError("This stream has already been locked for exclusive writing by another writer");
          this._ownerWritableStream = t2, t2._writer = this;
          const r = t2._state;
          if (r === "writable")
            !oe(t2) && t2._backpressure ? Kt(this) : Wo(this), Zt(this);
          else if (r === "erroring")
            Kr(this, t2._storedError), Zt(this);
          else if (r === "closed")
            Wo(this), ba(this);
          else {
            const s2 = t2._storedError;
            Kr(this, s2), Eo(this, s2);
          }
        }
        get closed() {
          return je(this) ? this._closedPromise : g2(Fe("closed"));
        }
        get desiredSize() {
          if (!je(this))
            throw Fe("desiredSize");
          if (this._ownerWritableStream === void 0)
            throw gt("desiredSize");
          return la(this);
        }
        get ready() {
          return je(this) ? this._readyPromise : g2(Fe("ready"));
        }
        abort(t2 = void 0) {
          return je(this) ? this._ownerWritableStream === void 0 ? g2(gt("abort")) : ia(this, t2) : g2(Fe("abort"));
        }
        close() {
          if (!je(this))
            return g2(Fe("close"));
          const t2 = this._ownerWritableStream;
          return t2 === void 0 ? g2(gt("close")) : oe(t2) ? g2(new TypeError("Cannot close an already-closing stream")) : _o(this);
        }
        releaseLock() {
          if (!je(this))
            throw Fe("releaseLock");
          this._ownerWritableStream !== void 0 && wo(this);
        }
        write(t2 = void 0) {
          return je(this) ? this._ownerWritableStream === void 0 ? g2(gt("write to")) : Ro(this, t2) : g2(Fe("write"));
        }
      };
      n(fn, "WritableStreamDefaultWriter");
      let ze = fn;
      Object.defineProperties(ze.prototype, { abort: { enumerable: true }, close: { enumerable: true }, releaseLock: { enumerable: true }, write: { enumerable: true }, closed: { enumerable: true }, desiredSize: { enumerable: true }, ready: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(ze.prototype, l2.toStringTag, { value: "WritableStreamDefaultWriter", configurable: true });
      function je(e) {
        return !m(e) || !Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream") ? false : e instanceof ze;
      }
      n(je, "IsWritableStreamDefaultWriter");
      function ia(e, t2) {
        const r = e._ownerWritableStream;
        return Ht(r, t2);
      }
      n(ia, "WritableStreamDefaultWriterAbort");
      function _o(e) {
        const t2 = e._ownerWritableStream;
        return go(t2);
      }
      n(_o, "WritableStreamDefaultWriterClose");
      function aa(e) {
        const t2 = e._ownerWritableStream, r = t2._state;
        return oe(t2) || r === "closed" ? b(void 0) : r === "errored" ? g2(t2._storedError) : _o(e);
      }
      n(aa, "WritableStreamDefaultWriterCloseWithErrorPropagation");
      function sa(e, t2) {
        e._closedPromiseState === "pending" ? Zr(e, t2) : ma(e, t2);
      }
      n(sa, "WritableStreamDefaultWriterEnsureClosedPromiseRejected");
      function So(e, t2) {
        e._readyPromiseState === "pending" ? Bo(e, t2) : ga(e, t2);
      }
      n(So, "WritableStreamDefaultWriterEnsureReadyPromiseRejected");
      function la(e) {
        const t2 = e._ownerWritableStream, r = t2._state;
        return r === "errored" || r === "erroring" ? null : r === "closed" ? 0 : Po(t2._writableStreamController);
      }
      n(la, "WritableStreamDefaultWriterGetDesiredSize");
      function wo(e) {
        const t2 = e._ownerWritableStream, r = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
        So(e, r), sa(e, r), t2._writer = void 0, e._ownerWritableStream = void 0;
      }
      n(wo, "WritableStreamDefaultWriterRelease");
      function Ro(e, t2) {
        const r = e._ownerWritableStream, s2 = r._writableStreamController, f2 = ca(s2, t2);
        if (r !== e._ownerWritableStream)
          return g2(gt("write to"));
        const c = r._state;
        if (c === "errored")
          return g2(r._storedError);
        if (oe(r) || c === "closed")
          return g2(new TypeError("The stream is closing or closed and cannot be written to"));
        if (c === "erroring")
          return g2(r._storedError);
        const h2 = Ki(r);
        return da(s2, t2, f2), h2;
      }
      n(Ro, "WritableStreamDefaultWriterWrite");
      const To = {}, cn = class cn {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get abortReason() {
          if (!Vr(this))
            throw Gr("abortReason");
          return this._abortReason;
        }
        get signal() {
          if (!Vr(this))
            throw Gr("signal");
          if (this._abortController === void 0)
            throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
          return this._abortController.signal;
        }
        error(t2 = void 0) {
          if (!Vr(this))
            throw Gr("error");
          this._controlledWritableStream._state === "writable" && vo(this, t2);
        }
        [$n](t2) {
          const r = this._abortAlgorithm(t2);
          return Qt(this), r;
        }
        [Dn]() {
          ge(this);
        }
      };
      n(cn, "WritableStreamDefaultController");
      let Se = cn;
      Object.defineProperties(Se.prototype, { abortReason: { enumerable: true }, signal: { enumerable: true }, error: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(Se.prototype, l2.toStringTag, { value: "WritableStreamDefaultController", configurable: true });
      function Vr(e) {
        return !m(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledWritableStream") ? false : e instanceof Se;
      }
      n(Vr, "IsWritableStreamDefaultController");
      function Co(e, t2, r, s2, f2, c, h2, y) {
        t2._controlledWritableStream = e, e._writableStreamController = t2, t2._queue = void 0, t2._queueTotalSize = void 0, ge(t2), t2._abortReason = void 0, t2._abortController = Gi(), t2._started = false, t2._strategySizeAlgorithm = y, t2._strategyHWM = h2, t2._writeAlgorithm = s2, t2._closeAlgorithm = f2, t2._abortAlgorithm = c;
        const w = Yr(t2);
        Hr(e, w);
        const T = r(), P = b(T);
        q(P, () => {
          t2._started = true, Yt(t2);
        }, (v) => {
          t2._started = true, Ur(e, v);
        });
      }
      n(Co, "SetUpWritableStreamDefaultController");
      function ua(e, t2, r, s2) {
        const f2 = Object.create(Se.prototype);
        let c = n(() => {
        }, "startAlgorithm"), h2 = n(() => b(void 0), "writeAlgorithm"), y = n(() => b(void 0), "closeAlgorithm"), w = n(() => b(void 0), "abortAlgorithm");
        t2.start !== void 0 && (c = n(() => t2.start(f2), "startAlgorithm")), t2.write !== void 0 && (h2 = n((T) => t2.write(T, f2), "writeAlgorithm")), t2.close !== void 0 && (y = n(() => t2.close(), "closeAlgorithm")), t2.abort !== void 0 && (w = n((T) => t2.abort(T), "abortAlgorithm")), Co(e, f2, c, h2, y, w, r, s2);
      }
      n(ua, "SetUpWritableStreamDefaultControllerFromUnderlyingSink");
      function Qt(e) {
        e._writeAlgorithm = void 0, e._closeAlgorithm = void 0, e._abortAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
      }
      n(Qt, "WritableStreamDefaultControllerClearAlgorithms");
      function fa(e) {
        jr(e, To, 0), Yt(e);
      }
      n(fa, "WritableStreamDefaultControllerClose");
      function ca(e, t2) {
        try {
          return e._strategySizeAlgorithm(t2);
        } catch (r) {
          return Qr(e, r), 1;
        }
      }
      n(ca, "WritableStreamDefaultControllerGetChunkSize");
      function Po(e) {
        return e._strategyHWM - e._queueTotalSize;
      }
      n(Po, "WritableStreamDefaultControllerGetDesiredSize");
      function da(e, t2, r) {
        try {
          jr(e, t2, r);
        } catch (f2) {
          Qr(e, f2);
          return;
        }
        const s2 = e._controlledWritableStream;
        if (!oe(s2) && s2._state === "writable") {
          const f2 = Yr(e);
          Hr(s2, f2);
        }
        Yt(e);
      }
      n(da, "WritableStreamDefaultControllerWrite");
      function Yt(e) {
        const t2 = e._controlledWritableStream;
        if (!e._started || t2._inFlightWriteRequest !== void 0)
          return;
        if (t2._state === "erroring") {
          xr(t2);
          return;
        }
        if (e._queue.length === 0)
          return;
        const s2 = qi(e);
        s2 === To ? ha(e) : pa(e, s2);
      }
      n(Yt, "WritableStreamDefaultControllerAdvanceQueueIfNeeded");
      function Qr(e, t2) {
        e._controlledWritableStream._state === "writable" && vo(e, t2);
      }
      n(Qr, "WritableStreamDefaultControllerErrorIfNeeded");
      function ha(e) {
        const t2 = e._controlledWritableStream;
        na(t2), zr(e);
        const r = e._closeAlgorithm();
        Qt(e), q(r, () => {
          ea(t2);
        }, (s2) => {
          ta(t2, s2);
        });
      }
      n(ha, "WritableStreamDefaultControllerProcessClose");
      function pa(e, t2) {
        const r = e._controlledWritableStream;
        oa(r);
        const s2 = e._writeAlgorithm(t2);
        q(s2, () => {
          Ji(r);
          const f2 = r._state;
          if (zr(e), !oe(r) && f2 === "writable") {
            const c = Yr(e);
            Hr(r, c);
          }
          Yt(e);
        }, (f2) => {
          r._state === "writable" && Qt(e), Xi(r, f2);
        });
      }
      n(pa, "WritableStreamDefaultControllerProcessWrite");
      function Yr(e) {
        return Po(e) <= 0;
      }
      n(Yr, "WritableStreamDefaultControllerGetBackpressure");
      function vo(e, t2) {
        const r = e._controlledWritableStream;
        Qt(e), Nr(r, t2);
      }
      n(vo, "WritableStreamDefaultControllerError");
      function Gt(e) {
        return new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`);
      }
      n(Gt, "streamBrandCheckException$2");
      function Gr(e) {
        return new TypeError(`WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`);
      }
      n(Gr, "defaultControllerBrandCheckException$2");
      function Fe(e) {
        return new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`);
      }
      n(Fe, "defaultWriterBrandCheckException");
      function gt(e) {
        return new TypeError("Cannot " + e + " a stream using a released writer");
      }
      n(gt, "defaultWriterLockException");
      function Zt(e) {
        e._closedPromise = E((t2, r) => {
          e._closedPromise_resolve = t2, e._closedPromise_reject = r, e._closedPromiseState = "pending";
        });
      }
      n(Zt, "defaultWriterClosedPromiseInitialize");
      function Eo(e, t2) {
        Zt(e), Zr(e, t2);
      }
      n(Eo, "defaultWriterClosedPromiseInitializeAsRejected");
      function ba(e) {
        Zt(e), Ao(e);
      }
      n(ba, "defaultWriterClosedPromiseInitializeAsResolved");
      function Zr(e, t2) {
        e._closedPromise_reject !== void 0 && ($(e._closedPromise), e._closedPromise_reject(t2), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "rejected");
      }
      n(Zr, "defaultWriterClosedPromiseReject");
      function ma(e, t2) {
        Eo(e, t2);
      }
      n(ma, "defaultWriterClosedPromiseResetToRejected");
      function Ao(e) {
        e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "resolved");
      }
      n(Ao, "defaultWriterClosedPromiseResolve");
      function Kt(e) {
        e._readyPromise = E((t2, r) => {
          e._readyPromise_resolve = t2, e._readyPromise_reject = r;
        }), e._readyPromiseState = "pending";
      }
      n(Kt, "defaultWriterReadyPromiseInitialize");
      function Kr(e, t2) {
        Kt(e), Bo(e, t2);
      }
      n(Kr, "defaultWriterReadyPromiseInitializeAsRejected");
      function Wo(e) {
        Kt(e), Jr(e);
      }
      n(Wo, "defaultWriterReadyPromiseInitializeAsResolved");
      function Bo(e, t2) {
        e._readyPromise_reject !== void 0 && ($(e._readyPromise), e._readyPromise_reject(t2), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "rejected");
      }
      n(Bo, "defaultWriterReadyPromiseReject");
      function ya(e) {
        Kt(e);
      }
      n(ya, "defaultWriterReadyPromiseReset");
      function ga(e, t2) {
        Kr(e, t2);
      }
      n(ga, "defaultWriterReadyPromiseResetToRejected");
      function Jr(e) {
        e._readyPromise_resolve !== void 0 && (e._readyPromise_resolve(void 0), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "fulfilled");
      }
      n(Jr, "defaultWriterReadyPromiseResolve");
      const ko = typeof DOMException < "u" ? DOMException : void 0;
      function _a2(e) {
        if (!(typeof e == "function" || typeof e == "object"))
          return false;
        try {
          return new e(), true;
        } catch {
          return false;
        }
      }
      n(_a2, "isDOMExceptionConstructor");
      function Sa() {
        const e = n(function(r, s2) {
          this.message = r || "", this.name = s2 || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
        }, "DOMException");
        return e.prototype = Object.create(Error.prototype), Object.defineProperty(e.prototype, "constructor", { value: e, writable: true, configurable: true }), e;
      }
      n(Sa, "createDOMExceptionPolyfill");
      const wa = _a2(ko) ? ko : Sa();
      function Oo(e, t2, r, s2, f2, c) {
        const h2 = Ve(e), y = mo(t2);
        e._disturbed = true;
        let w = false, T = b(void 0);
        return E((P, v) => {
          let z;
          if (c !== void 0) {
            if (z = n(() => {
              const _ = new wa("Aborted", "AbortError"), R = [];
              s2 || R.push(() => t2._state === "writable" ? Ht(t2, _) : b(void 0)), f2 || R.push(() => e._state === "readable" ? J(e, _) : b(void 0)), U(() => Promise.all(R.map((W) => W())), true, _);
            }, "abortAlgorithm"), c.aborted) {
              z();
              return;
            }
            c.addEventListener("abort", z);
          }
          function X() {
            return E((_, R) => {
              function W(H) {
                H ? _() : A2(Xe(), W, R);
              }
              n(W, "next"), W(false);
            });
          }
          n(X, "pipeLoop");
          function Xe() {
            return w ? b(true) : A2(y._readyPromise, () => E((_, R) => {
              ht(h2, { _chunkSteps: (W) => {
                T = A2(Ro(y, W), void 0, u), _(false);
              }, _closeSteps: () => _(true), _errorSteps: R });
            }));
          }
          if (n(Xe, "pipeStep"), he(e, h2._closedPromise, (_) => {
            s2 ? Q(true, _) : U(() => Ht(t2, _), true, _);
          }), he(t2, y._closedPromise, (_) => {
            f2 ? Q(true, _) : U(() => J(e, _), true, _);
          }), M(e, h2._closedPromise, () => {
            r ? Q() : U(() => aa(y));
          }), oe(t2) || t2._state === "closed") {
            const _ = new TypeError("the destination writable stream closed before all data could be piped to it");
            f2 ? Q(true, _) : U(() => J(e, _), true, _);
          }
          $(X());
          function Pe() {
            const _ = T;
            return A2(T, () => _ !== T ? Pe() : void 0);
          }
          n(Pe, "waitForWritesToFinish");
          function he(_, R, W) {
            _._state === "errored" ? W(_._storedError) : dt(R, W);
          }
          n(he, "isOrBecomesErrored");
          function M(_, R, W) {
            _._state === "closed" ? W() : ne(R, W);
          }
          n(M, "isOrBecomesClosed");
          function U(_, R, W) {
            if (w)
              return;
            w = true, t2._state === "writable" && !oe(t2) ? ne(Pe(), H) : H();
            function H() {
              q(_(), () => pe(R, W), (et) => pe(true, et));
            }
            n(H, "doTheRest");
          }
          n(U, "shutdownWithAction");
          function Q(_, R) {
            w || (w = true, t2._state === "writable" && !oe(t2) ? ne(Pe(), () => pe(_, R)) : pe(_, R));
          }
          n(Q, "shutdown");
          function pe(_, R) {
            wo(y), fe(h2), c !== void 0 && c.removeEventListener("abort", z), _ ? v(R) : P(void 0);
          }
          n(pe, "finalize");
        });
      }
      n(Oo, "ReadableStreamPipeTo");
      const dn = class dn {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!Jt(this))
            throw tr("desiredSize");
          return Xr(this);
        }
        close() {
          if (!Jt(this))
            throw tr("close");
          if (!Ge(this))
            throw new TypeError("The stream is not in a state that permits close");
          St(this);
        }
        enqueue(t2 = void 0) {
          if (!Jt(this))
            throw tr("enqueue");
          if (!Ge(this))
            throw new TypeError("The stream is not in a state that permits enqueue");
          return er(this, t2);
        }
        error(t2 = void 0) {
          if (!Jt(this))
            throw tr("error");
          Re(this, t2);
        }
        [Ar](t2) {
          ge(this);
          const r = this._cancelAlgorithm(t2);
          return Xt(this), r;
        }
        [Wr](t2) {
          const r = this._controlledReadableStream;
          if (this._queue.length > 0) {
            const s2 = zr(this);
            this._closeRequested && this._queue.length === 0 ? (Xt(this), wt(r)) : _t(this), t2._chunkSteps(s2);
          } else
            Hn(r, t2), _t(this);
        }
      };
      n(dn, "ReadableStreamDefaultController");
      let we = dn;
      Object.defineProperties(we.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, desiredSize: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(we.prototype, l2.toStringTag, { value: "ReadableStreamDefaultController", configurable: true });
      function Jt(e) {
        return !m(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableStream") ? false : e instanceof we;
      }
      n(Jt, "IsReadableStreamDefaultController");
      function _t(e) {
        if (!qo(e))
          return;
        if (e._pulling) {
          e._pullAgain = true;
          return;
        }
        e._pulling = true;
        const r = e._pullAlgorithm();
        q(r, () => {
          e._pulling = false, e._pullAgain && (e._pullAgain = false, _t(e));
        }, (s2) => {
          Re(e, s2);
        });
      }
      n(_t, "ReadableStreamDefaultControllerCallPullIfNeeded");
      function qo(e) {
        const t2 = e._controlledReadableStream;
        return !Ge(e) || !e._started ? false : !!(Ce(t2) && Ot(t2) > 0 || Xr(e) > 0);
      }
      n(qo, "ReadableStreamDefaultControllerShouldCallPull");
      function Xt(e) {
        e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
      }
      n(Xt, "ReadableStreamDefaultControllerClearAlgorithms");
      function St(e) {
        if (!Ge(e))
          return;
        const t2 = e._controlledReadableStream;
        e._closeRequested = true, e._queue.length === 0 && (Xt(e), wt(t2));
      }
      n(St, "ReadableStreamDefaultControllerClose");
      function er(e, t2) {
        if (!Ge(e))
          return;
        const r = e._controlledReadableStream;
        if (Ce(r) && Ot(r) > 0)
          qr(r, t2, false);
        else {
          let s2;
          try {
            s2 = e._strategySizeAlgorithm(t2);
          } catch (f2) {
            throw Re(e, f2), f2;
          }
          try {
            jr(e, t2, s2);
          } catch (f2) {
            throw Re(e, f2), f2;
          }
        }
        _t(e);
      }
      n(er, "ReadableStreamDefaultControllerEnqueue");
      function Re(e, t2) {
        const r = e._controlledReadableStream;
        r._state === "readable" && (ge(e), Xt(e), Io(r, t2));
      }
      n(Re, "ReadableStreamDefaultControllerError");
      function Xr(e) {
        const t2 = e._controlledReadableStream._state;
        return t2 === "errored" ? null : t2 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
      }
      n(Xr, "ReadableStreamDefaultControllerGetDesiredSize");
      function Ra(e) {
        return !qo(e);
      }
      n(Ra, "ReadableStreamDefaultControllerHasBackpressure");
      function Ge(e) {
        const t2 = e._controlledReadableStream._state;
        return !e._closeRequested && t2 === "readable";
      }
      n(Ge, "ReadableStreamDefaultControllerCanCloseOrEnqueue");
      function zo(e, t2, r, s2, f2, c, h2) {
        t2._controlledReadableStream = e, t2._queue = void 0, t2._queueTotalSize = void 0, ge(t2), t2._started = false, t2._closeRequested = false, t2._pullAgain = false, t2._pulling = false, t2._strategySizeAlgorithm = h2, t2._strategyHWM = c, t2._pullAlgorithm = s2, t2._cancelAlgorithm = f2, e._readableStreamController = t2;
        const y = r();
        q(b(y), () => {
          t2._started = true, _t(t2);
        }, (w) => {
          Re(t2, w);
        });
      }
      n(zo, "SetUpReadableStreamDefaultController");
      function Ta(e, t2, r, s2) {
        const f2 = Object.create(we.prototype);
        let c = n(() => {
        }, "startAlgorithm"), h2 = n(() => b(void 0), "pullAlgorithm"), y = n(() => b(void 0), "cancelAlgorithm");
        t2.start !== void 0 && (c = n(() => t2.start(f2), "startAlgorithm")), t2.pull !== void 0 && (h2 = n(() => t2.pull(f2), "pullAlgorithm")), t2.cancel !== void 0 && (y = n((w) => t2.cancel(w), "cancelAlgorithm")), zo(e, f2, c, h2, y, r, s2);
      }
      n(Ta, "SetUpReadableStreamDefaultControllerFromUnderlyingSource");
      function tr(e) {
        return new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`);
      }
      n(tr, "defaultControllerBrandCheckException$1");
      function Ca(e, t2) {
        return We(e._readableStreamController) ? va(e) : Pa(e);
      }
      n(Ca, "ReadableStreamTee");
      function Pa(e, t2) {
        const r = Ve(e);
        let s2 = false, f2 = false, c = false, h2 = false, y, w, T, P, v;
        const z = E((M) => {
          v = M;
        });
        function X() {
          return s2 ? (f2 = true, b(void 0)) : (s2 = true, ht(r, { _chunkSteps: (U) => {
            F(() => {
              f2 = false;
              const Q = U, pe = U;
              c || er(T._readableStreamController, Q), h2 || er(P._readableStreamController, pe), s2 = false, f2 && X();
            });
          }, _closeSteps: () => {
            s2 = false, c || St(T._readableStreamController), h2 || St(P._readableStreamController), (!c || !h2) && v(void 0);
          }, _errorSteps: () => {
            s2 = false;
          } }), b(void 0));
        }
        n(X, "pullAlgorithm");
        function Xe(M) {
          if (c = true, y = M, h2) {
            const U = pt([y, w]), Q = J(e, U);
            v(Q);
          }
          return z;
        }
        n(Xe, "cancel1Algorithm");
        function Pe(M) {
          if (h2 = true, w = M, c) {
            const U = pt([y, w]), Q = J(e, U);
            v(Q);
          }
          return z;
        }
        n(Pe, "cancel2Algorithm");
        function he() {
        }
        return n(he, "startAlgorithm"), T = en(he, X, Xe), P = en(he, X, Pe), dt(r._closedPromise, (M) => {
          Re(T._readableStreamController, M), Re(P._readableStreamController, M), (!c || !h2) && v(void 0);
        }), [T, P];
      }
      n(Pa, "ReadableStreamDefaultTee");
      function va(e) {
        let t2 = Ve(e), r = false, s2 = false, f2 = false, c = false, h2 = false, y, w, T, P, v;
        const z = E((_) => {
          v = _;
        });
        function X(_) {
          dt(_._closedPromise, (R) => {
            _ === t2 && (K(T._readableStreamController, R), K(P._readableStreamController, R), (!c || !h2) && v(void 0));
          });
        }
        n(X, "forwardReaderError");
        function Xe() {
          Oe(t2) && (fe(t2), t2 = Ve(e), X(t2)), ht(t2, { _chunkSteps: (R) => {
            F(() => {
              s2 = false, f2 = false;
              const W = R;
              let H = R;
              if (!c && !h2)
                try {
                  H = eo(R);
                } catch (et) {
                  K(T._readableStreamController, et), K(P._readableStreamController, et), v(J(e, et));
                  return;
                }
              c || $t(T._readableStreamController, W), h2 || $t(P._readableStreamController, H), r = false, s2 ? he() : f2 && M();
            });
          }, _closeSteps: () => {
            r = false, c || bt(T._readableStreamController), h2 || bt(P._readableStreamController), T._readableStreamController._pendingPullIntos.length > 0 && Dt(T._readableStreamController, 0), P._readableStreamController._pendingPullIntos.length > 0 && Dt(P._readableStreamController, 0), (!c || !h2) && v(void 0);
          }, _errorSteps: () => {
            r = false;
          } });
        }
        n(Xe, "pullWithDefaultReader");
        function Pe(_, R) {
          ye(t2) && (fe(t2), t2 = fo(e), X(t2));
          const W = R ? P : T, H = R ? T : P;
          po(t2, _, { _chunkSteps: (tt) => {
            F(() => {
              s2 = false, f2 = false;
              const rt = R ? h2 : c;
              if (R ? c : h2)
                rt || Mt(W._readableStreamController, tt);
              else {
                let Zo;
                try {
                  Zo = eo(tt);
                } catch (gn) {
                  K(W._readableStreamController, gn), K(H._readableStreamController, gn), v(J(e, gn));
                  return;
                }
                rt || Mt(W._readableStreamController, tt), $t(H._readableStreamController, Zo);
              }
              r = false, s2 ? he() : f2 && M();
            });
          }, _closeSteps: (tt) => {
            r = false;
            const rt = R ? h2 : c, sr = R ? c : h2;
            rt || bt(W._readableStreamController), sr || bt(H._readableStreamController), tt !== void 0 && (rt || Mt(W._readableStreamController, tt), !sr && H._readableStreamController._pendingPullIntos.length > 0 && Dt(H._readableStreamController, 0)), (!rt || !sr) && v(void 0);
          }, _errorSteps: () => {
            r = false;
          } });
        }
        n(Pe, "pullWithBYOBReader");
        function he() {
          if (r)
            return s2 = true, b(void 0);
          r = true;
          const _ = $r(T._readableStreamController);
          return _ === null ? Xe() : Pe(_._view, false), b(void 0);
        }
        n(he, "pull1Algorithm");
        function M() {
          if (r)
            return f2 = true, b(void 0);
          r = true;
          const _ = $r(P._readableStreamController);
          return _ === null ? Xe() : Pe(_._view, true), b(void 0);
        }
        n(M, "pull2Algorithm");
        function U(_) {
          if (c = true, y = _, h2) {
            const R = pt([y, w]), W = J(e, R);
            v(W);
          }
          return z;
        }
        n(U, "cancel1Algorithm");
        function Q(_) {
          if (h2 = true, w = _, c) {
            const R = pt([y, w]), W = J(e, R);
            v(W);
          }
          return z;
        }
        n(Q, "cancel2Algorithm");
        function pe() {
        }
        return n(pe, "startAlgorithm"), T = Fo(pe, he, U), P = Fo(pe, M, Q), X(t2), [T, P];
      }
      n(va, "ReadableByteStreamTee");
      function Ea(e, t2) {
        ce(e, t2);
        const r = e, s2 = r == null ? void 0 : r.autoAllocateChunkSize, f2 = r == null ? void 0 : r.cancel, c = r == null ? void 0 : r.pull, h2 = r == null ? void 0 : r.start, y = r == null ? void 0 : r.type;
        return { autoAllocateChunkSize: s2 === void 0 ? void 0 : xn(s2, `${t2} has member 'autoAllocateChunkSize' that`), cancel: f2 === void 0 ? void 0 : Aa(f2, r, `${t2} has member 'cancel' that`), pull: c === void 0 ? void 0 : Wa(c, r, `${t2} has member 'pull' that`), start: h2 === void 0 ? void 0 : Ba(h2, r, `${t2} has member 'start' that`), type: y === void 0 ? void 0 : ka(y, `${t2} has member 'type' that`) };
      }
      n(Ea, "convertUnderlyingDefaultOrByteSource");
      function Aa(e, t2, r) {
        return Z(e, r), (s2) => ue(e, t2, [s2]);
      }
      n(Aa, "convertUnderlyingSourceCancelCallback");
      function Wa(e, t2, r) {
        return Z(e, r), (s2) => ue(e, t2, [s2]);
      }
      n(Wa, "convertUnderlyingSourcePullCallback");
      function Ba(e, t2, r) {
        return Z(e, r), (s2) => ve(e, t2, [s2]);
      }
      n(Ba, "convertUnderlyingSourceStartCallback");
      function ka(e, t2) {
        if (e = `${e}`, e !== "bytes")
          throw new TypeError(`${t2} '${e}' is not a valid enumeration value for ReadableStreamType`);
        return e;
      }
      n(ka, "convertReadableStreamType");
      function Oa(e, t2) {
        ce(e, t2);
        const r = e == null ? void 0 : e.mode;
        return { mode: r === void 0 ? void 0 : qa(r, `${t2} has member 'mode' that`) };
      }
      n(Oa, "convertReaderOptions");
      function qa(e, t2) {
        if (e = `${e}`, e !== "byob")
          throw new TypeError(`${t2} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);
        return e;
      }
      n(qa, "convertReadableStreamReaderMode");
      function za(e, t2) {
        return ce(e, t2), { preventCancel: !!(e == null ? void 0 : e.preventCancel) };
      }
      n(za, "convertIteratorOptions");
      function jo(e, t2) {
        ce(e, t2);
        const r = e == null ? void 0 : e.preventAbort, s2 = e == null ? void 0 : e.preventCancel, f2 = e == null ? void 0 : e.preventClose, c = e == null ? void 0 : e.signal;
        return c !== void 0 && ja(c, `${t2} has member 'signal' that`), { preventAbort: !!r, preventCancel: !!s2, preventClose: !!f2, signal: c };
      }
      n(jo, "convertPipeOptions");
      function ja(e, t2) {
        if (!Qi(e))
          throw new TypeError(`${t2} is not an AbortSignal.`);
      }
      n(ja, "assertAbortSignal");
      function Fa(e, t2) {
        ce(e, t2);
        const r = e == null ? void 0 : e.readable;
        Br(r, "readable", "ReadableWritablePair"), Or(r, `${t2} has member 'readable' that`);
        const s2 = e == null ? void 0 : e.writable;
        return Br(s2, "writable", "ReadableWritablePair"), bo(s2, `${t2} has member 'writable' that`), { readable: r, writable: s2 };
      }
      n(Fa, "convertReadableWritablePair");
      const hn = class hn {
        constructor(t2 = {}, r = {}) {
          t2 === void 0 ? t2 = null : Un(t2, "First parameter");
          const s2 = xt(r, "Second parameter"), f2 = Ea(t2, "First parameter");
          if (tn(this), f2.type === "bytes") {
            if (s2.size !== void 0)
              throw new RangeError("The strategy for a byte stream cannot have a size function");
            const c = yt(s2, 0);
            Li(this, f2, c);
          } else {
            const c = Nt(s2), h2 = yt(s2, 1);
            Ta(this, f2, h2, c);
          }
        }
        get locked() {
          if (!Te(this))
            throw Ie("locked");
          return Ce(this);
        }
        cancel(t2 = void 0) {
          return Te(this) ? Ce(this) ? g2(new TypeError("Cannot cancel a stream that already has a reader")) : J(this, t2) : g2(Ie("cancel"));
        }
        getReader(t2 = void 0) {
          if (!Te(this))
            throw Ie("getReader");
          return Oa(t2, "First parameter").mode === void 0 ? Ve(this) : fo(this);
        }
        pipeThrough(t2, r = {}) {
          if (!Te(this))
            throw Ie("pipeThrough");
          de(t2, 1, "pipeThrough");
          const s2 = Fa(t2, "First parameter"), f2 = jo(r, "Second parameter");
          if (Ce(this))
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
          if (Ye(s2.writable))
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
          const c = Oo(this, s2.writable, f2.preventClose, f2.preventAbort, f2.preventCancel, f2.signal);
          return $(c), s2.readable;
        }
        pipeTo(t2, r = {}) {
          if (!Te(this))
            return g2(Ie("pipeTo"));
          if (t2 === void 0)
            return g2("Parameter 1 is required in 'pipeTo'.");
          if (!Qe(t2))
            return g2(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
          let s2;
          try {
            s2 = jo(r, "Second parameter");
          } catch (f2) {
            return g2(f2);
          }
          return Ce(this) ? g2(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : Ye(t2) ? g2(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : Oo(this, t2, s2.preventClose, s2.preventAbort, s2.preventCancel, s2.signal);
        }
        tee() {
          if (!Te(this))
            throw Ie("tee");
          const t2 = Ca(this);
          return pt(t2);
        }
        values(t2 = void 0) {
          if (!Te(this))
            throw Ie("values");
          const r = za(t2, "First parameter");
          return ki(this, r.preventCancel);
        }
      };
      n(hn, "ReadableStream");
      let ie = hn;
      Object.defineProperties(ie.prototype, { cancel: { enumerable: true }, getReader: { enumerable: true }, pipeThrough: { enumerable: true }, pipeTo: { enumerable: true }, tee: { enumerable: true }, values: { enumerable: true }, locked: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(ie.prototype, l2.toStringTag, { value: "ReadableStream", configurable: true }), typeof l2.asyncIterator == "symbol" && Object.defineProperty(ie.prototype, l2.asyncIterator, { value: ie.prototype.values, writable: true, configurable: true });
      function en(e, t2, r, s2 = 1, f2 = () => 1) {
        const c = Object.create(ie.prototype);
        tn(c);
        const h2 = Object.create(we.prototype);
        return zo(c, h2, e, t2, r, s2, f2), c;
      }
      n(en, "CreateReadableStream");
      function Fo(e, t2, r) {
        const s2 = Object.create(ie.prototype);
        tn(s2);
        const f2 = Object.create(_e.prototype);
        return uo(s2, f2, e, t2, r, 0, void 0), s2;
      }
      n(Fo, "CreateReadableByteStream");
      function tn(e) {
        e._state = "readable", e._reader = void 0, e._storedError = void 0, e._disturbed = false;
      }
      n(tn, "InitializeReadableStream");
      function Te(e) {
        return !m(e) || !Object.prototype.hasOwnProperty.call(e, "_readableStreamController") ? false : e instanceof ie;
      }
      n(Te, "IsReadableStream");
      function Ce(e) {
        return e._reader !== void 0;
      }
      n(Ce, "IsReadableStreamLocked");
      function J(e, t2) {
        if (e._disturbed = true, e._state === "closed")
          return b(void 0);
        if (e._state === "errored")
          return g2(e._storedError);
        wt(e);
        const r = e._reader;
        r !== void 0 && Oe(r) && (r._readIntoRequests.forEach((f2) => {
          f2._closeSteps(void 0);
        }), r._readIntoRequests = new x());
        const s2 = e._readableStreamController[Ar](t2);
        return O(s2, u);
      }
      n(J, "ReadableStreamCancel");
      function wt(e) {
        e._state = "closed";
        const t2 = e._reader;
        t2 !== void 0 && (Ln(t2), ye(t2) && (t2._readRequests.forEach((r) => {
          r._closeSteps();
        }), t2._readRequests = new x()));
      }
      n(wt, "ReadableStreamClose");
      function Io(e, t2) {
        e._state = "errored", e._storedError = t2;
        const r = e._reader;
        r !== void 0 && (Er(r, t2), ye(r) ? (r._readRequests.forEach((s2) => {
          s2._errorSteps(t2);
        }), r._readRequests = new x()) : (r._readIntoRequests.forEach((s2) => {
          s2._errorSteps(t2);
        }), r._readIntoRequests = new x()));
      }
      n(Io, "ReadableStreamError");
      function Ie(e) {
        return new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`);
      }
      n(Ie, "streamBrandCheckException$1");
      function Lo(e, t2) {
        ce(e, t2);
        const r = e == null ? void 0 : e.highWaterMark;
        return Br(r, "highWaterMark", "QueuingStrategyInit"), { highWaterMark: kr(r) };
      }
      n(Lo, "convertQueuingStrategyInit");
      const $o = n((e) => e.byteLength, "byteLengthSizeFunction");
      try {
        Object.defineProperty($o, "name", { value: "size", configurable: true });
      } catch {
      }
      const pn = class pn {
        constructor(t2) {
          de(t2, 1, "ByteLengthQueuingStrategy"), t2 = Lo(t2, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = t2.highWaterMark;
        }
        get highWaterMark() {
          if (!Mo(this))
            throw Do("highWaterMark");
          return this._byteLengthQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!Mo(this))
            throw Do("size");
          return $o;
        }
      };
      n(pn, "ByteLengthQueuingStrategy");
      let Ze = pn;
      Object.defineProperties(Ze.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(Ze.prototype, l2.toStringTag, { value: "ByteLengthQueuingStrategy", configurable: true });
      function Do(e) {
        return new TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`);
      }
      n(Do, "byteLengthBrandCheckException");
      function Mo(e) {
        return !m(e) || !Object.prototype.hasOwnProperty.call(e, "_byteLengthQueuingStrategyHighWaterMark") ? false : e instanceof Ze;
      }
      n(Mo, "IsByteLengthQueuingStrategy");
      const Uo = n(() => 1, "countSizeFunction");
      try {
        Object.defineProperty(Uo, "name", { value: "size", configurable: true });
      } catch {
      }
      const bn = class bn {
        constructor(t2) {
          de(t2, 1, "CountQueuingStrategy"), t2 = Lo(t2, "First parameter"), this._countQueuingStrategyHighWaterMark = t2.highWaterMark;
        }
        get highWaterMark() {
          if (!xo(this))
            throw No("highWaterMark");
          return this._countQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!xo(this))
            throw No("size");
          return Uo;
        }
      };
      n(bn, "CountQueuingStrategy");
      let Ke = bn;
      Object.defineProperties(Ke.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(Ke.prototype, l2.toStringTag, { value: "CountQueuingStrategy", configurable: true });
      function No(e) {
        return new TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`);
      }
      n(No, "countBrandCheckException");
      function xo(e) {
        return !m(e) || !Object.prototype.hasOwnProperty.call(e, "_countQueuingStrategyHighWaterMark") ? false : e instanceof Ke;
      }
      n(xo, "IsCountQueuingStrategy");
      function Ia(e, t2) {
        ce(e, t2);
        const r = e == null ? void 0 : e.flush, s2 = e == null ? void 0 : e.readableType, f2 = e == null ? void 0 : e.start, c = e == null ? void 0 : e.transform, h2 = e == null ? void 0 : e.writableType;
        return { flush: r === void 0 ? void 0 : La(r, e, `${t2} has member 'flush' that`), readableType: s2, start: f2 === void 0 ? void 0 : $a(f2, e, `${t2} has member 'start' that`), transform: c === void 0 ? void 0 : Da(c, e, `${t2} has member 'transform' that`), writableType: h2 };
      }
      n(Ia, "convertTransformer");
      function La(e, t2, r) {
        return Z(e, r), (s2) => ue(e, t2, [s2]);
      }
      n(La, "convertTransformerFlushCallback");
      function $a(e, t2, r) {
        return Z(e, r), (s2) => ve(e, t2, [s2]);
      }
      n($a, "convertTransformerStartCallback");
      function Da(e, t2, r) {
        return Z(e, r), (s2, f2) => ue(e, t2, [s2, f2]);
      }
      n(Da, "convertTransformerTransformCallback");
      const mn = class mn {
        constructor(t2 = {}, r = {}, s2 = {}) {
          t2 === void 0 && (t2 = null);
          const f2 = xt(r, "Second parameter"), c = xt(s2, "Third parameter"), h2 = Ia(t2, "First parameter");
          if (h2.readableType !== void 0)
            throw new RangeError("Invalid readableType specified");
          if (h2.writableType !== void 0)
            throw new RangeError("Invalid writableType specified");
          const y = yt(c, 0), w = Nt(c), T = yt(f2, 1), P = Nt(f2);
          let v;
          const z = E((X) => {
            v = X;
          });
          Ma(this, z, T, P, y, w), Na(this, h2), h2.start !== void 0 ? v(h2.start(this._transformStreamController)) : v(void 0);
        }
        get readable() {
          if (!Ho(this))
            throw Go("readable");
          return this._readable;
        }
        get writable() {
          if (!Ho(this))
            throw Go("writable");
          return this._writable;
        }
      };
      n(mn, "TransformStream");
      let Je = mn;
      Object.defineProperties(Je.prototype, { readable: { enumerable: true }, writable: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(Je.prototype, l2.toStringTag, { value: "TransformStream", configurable: true });
      function Ma(e, t2, r, s2, f2, c) {
        function h2() {
          return t2;
        }
        n(h2, "startAlgorithm");
        function y(z) {
          return Va(e, z);
        }
        n(y, "writeAlgorithm");
        function w(z) {
          return Qa(e, z);
        }
        n(w, "abortAlgorithm");
        function T() {
          return Ya(e);
        }
        n(T, "closeAlgorithm"), e._writable = Zi(h2, y, T, w, r, s2);
        function P() {
          return Ga(e);
        }
        n(P, "pullAlgorithm");
        function v(z) {
          return nr(e, z), b(void 0);
        }
        n(v, "cancelAlgorithm"), e._readable = en(h2, P, v, f2, c), e._backpressure = void 0, e._backpressureChangePromise = void 0, e._backpressureChangePromise_resolve = void 0, or(e, true), e._transformStreamController = void 0;
      }
      n(Ma, "InitializeTransformStream");
      function Ho(e) {
        return !m(e) || !Object.prototype.hasOwnProperty.call(e, "_transformStreamController") ? false : e instanceof Je;
      }
      n(Ho, "IsTransformStream");
      function rr(e, t2) {
        Re(e._readable._readableStreamController, t2), nr(e, t2);
      }
      n(rr, "TransformStreamError");
      function nr(e, t2) {
        Vo(e._transformStreamController), Qr(e._writable._writableStreamController, t2), e._backpressure && or(e, false);
      }
      n(nr, "TransformStreamErrorWritableAndUnblockWrite");
      function or(e, t2) {
        e._backpressureChangePromise !== void 0 && e._backpressureChangePromise_resolve(), e._backpressureChangePromise = E((r) => {
          e._backpressureChangePromise_resolve = r;
        }), e._backpressure = t2;
      }
      n(or, "TransformStreamSetBackpressure");
      const yn = class yn {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!ir(this))
            throw ar("desiredSize");
          const t2 = this._controlledTransformStream._readable._readableStreamController;
          return Xr(t2);
        }
        enqueue(t2 = void 0) {
          if (!ir(this))
            throw ar("enqueue");
          Qo(this, t2);
        }
        error(t2 = void 0) {
          if (!ir(this))
            throw ar("error");
          xa(this, t2);
        }
        terminate() {
          if (!ir(this))
            throw ar("terminate");
          Ha(this);
        }
      };
      n(yn, "TransformStreamDefaultController");
      let Le = yn;
      Object.defineProperties(Le.prototype, { enqueue: { enumerable: true }, error: { enumerable: true }, terminate: { enumerable: true }, desiredSize: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(Le.prototype, l2.toStringTag, { value: "TransformStreamDefaultController", configurable: true });
      function ir(e) {
        return !m(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledTransformStream") ? false : e instanceof Le;
      }
      n(ir, "IsTransformStreamDefaultController");
      function Ua(e, t2, r, s2) {
        t2._controlledTransformStream = e, e._transformStreamController = t2, t2._transformAlgorithm = r, t2._flushAlgorithm = s2;
      }
      n(Ua, "SetUpTransformStreamDefaultController");
      function Na(e, t2) {
        const r = Object.create(Le.prototype);
        let s2 = n((c) => {
          try {
            return Qo(r, c), b(void 0);
          } catch (h2) {
            return g2(h2);
          }
        }, "transformAlgorithm"), f2 = n(() => b(void 0), "flushAlgorithm");
        t2.transform !== void 0 && (s2 = n((c) => t2.transform(c, r), "transformAlgorithm")), t2.flush !== void 0 && (f2 = n(() => t2.flush(r), "flushAlgorithm")), Ua(e, r, s2, f2);
      }
      n(Na, "SetUpTransformStreamDefaultControllerFromTransformer");
      function Vo(e) {
        e._transformAlgorithm = void 0, e._flushAlgorithm = void 0;
      }
      n(Vo, "TransformStreamDefaultControllerClearAlgorithms");
      function Qo(e, t2) {
        const r = e._controlledTransformStream, s2 = r._readable._readableStreamController;
        if (!Ge(s2))
          throw new TypeError("Readable side is not in a state that permits enqueue");
        try {
          er(s2, t2);
        } catch (c) {
          throw nr(r, c), r._readable._storedError;
        }
        Ra(s2) !== r._backpressure && or(r, true);
      }
      n(Qo, "TransformStreamDefaultControllerEnqueue");
      function xa(e, t2) {
        rr(e._controlledTransformStream, t2);
      }
      n(xa, "TransformStreamDefaultControllerError");
      function Yo(e, t2) {
        const r = e._transformAlgorithm(t2);
        return O(r, void 0, (s2) => {
          throw rr(e._controlledTransformStream, s2), s2;
        });
      }
      n(Yo, "TransformStreamDefaultControllerPerformTransform");
      function Ha(e) {
        const t2 = e._controlledTransformStream, r = t2._readable._readableStreamController;
        St(r);
        const s2 = new TypeError("TransformStream terminated");
        nr(t2, s2);
      }
      n(Ha, "TransformStreamDefaultControllerTerminate");
      function Va(e, t2) {
        const r = e._transformStreamController;
        if (e._backpressure) {
          const s2 = e._backpressureChangePromise;
          return O(s2, () => {
            const f2 = e._writable;
            if (f2._state === "erroring")
              throw f2._storedError;
            return Yo(r, t2);
          });
        }
        return Yo(r, t2);
      }
      n(Va, "TransformStreamDefaultSinkWriteAlgorithm");
      function Qa(e, t2) {
        return rr(e, t2), b(void 0);
      }
      n(Qa, "TransformStreamDefaultSinkAbortAlgorithm");
      function Ya(e) {
        const t2 = e._readable, r = e._transformStreamController, s2 = r._flushAlgorithm();
        return Vo(r), O(s2, () => {
          if (t2._state === "errored")
            throw t2._storedError;
          St(t2._readableStreamController);
        }, (f2) => {
          throw rr(e, f2), t2._storedError;
        });
      }
      n(Ya, "TransformStreamDefaultSinkCloseAlgorithm");
      function Ga(e) {
        return or(e, false), e._backpressureChangePromise;
      }
      n(Ga, "TransformStreamDefaultSourcePullAlgorithm");
      function ar(e) {
        return new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`);
      }
      n(ar, "defaultControllerBrandCheckException");
      function Go(e) {
        return new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`);
      }
      n(Go, "streamBrandCheckException"), a2.ByteLengthQueuingStrategy = Ze, a2.CountQueuingStrategy = Ke, a2.ReadableByteStreamController = _e, a2.ReadableStream = ie, a2.ReadableStreamBYOBReader = ke, a2.ReadableStreamBYOBRequest = Ae, a2.ReadableStreamDefaultController = we, a2.ReadableStreamDefaultReader = Ee, a2.TransformStream = Je, a2.TransformStreamDefaultController = Le, a2.WritableStream = qe, a2.WritableStreamDefaultController = Se, a2.WritableStreamDefaultWriter = ze, Object.defineProperty(a2, "__esModule", { value: true });
    });
  }(cr, cr.exports)), cr.exports;
}
n(as, "requirePonyfill_es2018");
const ss = 65536;
if (!globalThis.ReadableStream)
  try {
    const i = require("node:process"), { emitWarning: o2 } = i;
    try {
      i.emitWarning = () => {
      }, Object.assign(globalThis, require("node:stream/web")), i.emitWarning = o2;
    } catch (a2) {
      throw i.emitWarning = o2, a2;
    }
  } catch {
    Object.assign(globalThis, as());
  }
try {
  const { Blob: i } = require("buffer");
  i && !i.prototype.stream && (i.prototype.stream = n(function(a2) {
    let l2 = 0;
    const u = this;
    return new ReadableStream({ type: "bytes", async pull(d2) {
      const m = await u.slice(l2, Math.min(u.size, l2 + ss)).arrayBuffer();
      l2 += m.byteLength, d2.enqueue(new Uint8Array(m)), l2 === u.size && d2.close();
    } });
  }, "name"));
} catch {
}
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
const ei = 65536;
async function* Sn(i, o2 = true) {
  for (const a2 of i)
    if ("stream" in a2)
      yield* a2.stream();
    else if (ArrayBuffer.isView(a2))
      if (o2) {
        let l2 = a2.byteOffset;
        const u = a2.byteOffset + a2.byteLength;
        for (; l2 !== u; ) {
          const d2 = Math.min(u - l2, ei), p = a2.buffer.slice(l2, l2 + d2);
          l2 += p.byteLength, yield new Uint8Array(p);
        }
      } else
        yield a2;
    else {
      let l2 = 0, u = a2;
      for (; l2 !== u.size; ) {
        const p = await u.slice(l2, Math.min(u.size, l2 + ei)).arrayBuffer();
        l2 += p.byteLength, yield new Uint8Array(p);
      }
    }
}
n(Sn, "toIterator");
const ti = (xe = class {
  constructor(o2 = [], a2 = {}) {
    ae(this, me, []);
    ae(this, vt, "");
    ae(this, ct, 0);
    ae(this, wr, "transparent");
    if (typeof o2 != "object" || o2 === null)
      throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
    if (typeof o2[Symbol.iterator] != "function")
      throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
    if (typeof a2 != "object" && typeof a2 != "function")
      throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
    a2 === null && (a2 = {});
    const l2 = new TextEncoder();
    for (const d2 of o2) {
      let p;
      ArrayBuffer.isView(d2) ? p = new Uint8Array(d2.buffer.slice(d2.byteOffset, d2.byteOffset + d2.byteLength)) : d2 instanceof ArrayBuffer ? p = new Uint8Array(d2.slice(0)) : d2 instanceof xe ? p = d2 : p = l2.encode(`${d2}`), Y(this, ct, k(this, ct) + (ArrayBuffer.isView(p) ? p.byteLength : p.size)), k(this, me).push(p);
    }
    Y(this, wr, `${a2.endings === void 0 ? "transparent" : a2.endings}`);
    const u = a2.type === void 0 ? "" : String(a2.type);
    Y(this, vt, /^[\x20-\x7E]*$/.test(u) ? u : "");
  }
  get size() {
    return k(this, ct);
  }
  get type() {
    return k(this, vt);
  }
  async text() {
    const o2 = new TextDecoder();
    let a2 = "";
    for await (const l2 of Sn(k(this, me), false))
      a2 += o2.decode(l2, { stream: true });
    return a2 += o2.decode(), a2;
  }
  async arrayBuffer() {
    const o2 = new Uint8Array(this.size);
    let a2 = 0;
    for await (const l2 of Sn(k(this, me), false))
      o2.set(l2, a2), a2 += l2.length;
    return o2.buffer;
  }
  stream() {
    const o2 = Sn(k(this, me), true);
    return new globalThis.ReadableStream({ type: "bytes", async pull(a2) {
      const l2 = await o2.next();
      l2.done ? a2.close() : a2.enqueue(l2.value);
    }, async cancel() {
      await o2.return();
    } });
  }
  slice(o2 = 0, a2 = this.size, l2 = "") {
    const { size: u } = this;
    let d2 = o2 < 0 ? Math.max(u + o2, 0) : Math.min(o2, u), p = a2 < 0 ? Math.max(u + a2, 0) : Math.min(a2, u);
    const m = Math.max(p - d2, 0), C = k(this, me), S = [];
    let I = 0;
    for (const L of C) {
      if (I >= m)
        break;
      const E = ArrayBuffer.isView(L) ? L.byteLength : L.size;
      if (d2 && E <= d2)
        d2 -= E, p -= E;
      else {
        let b;
        ArrayBuffer.isView(L) ? (b = L.subarray(d2, Math.min(E, p)), I += b.byteLength) : (b = L.slice(d2, Math.min(E, p)), I += b.size), p -= E, S.push(b), d2 = 0;
      }
    }
    const re = new xe([], { type: String(l2).toLowerCase() });
    return Y(re, ct, m), Y(re, me, S), re;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](o2) {
    return o2 && typeof o2 == "object" && typeof o2.constructor == "function" && (typeof o2.stream == "function" || typeof o2.arrayBuffer == "function") && /^(Blob|File)$/.test(o2[Symbol.toStringTag]);
  }
}, me = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), n(xe, "Blob"), xe);
Object.defineProperties(ti.prototype, { size: { enumerable: true }, type: { enumerable: true }, slice: { enumerable: true } });
const ls = ti, it = ls, us = (Wt = class extends it {
  constructor(a2, l2, u = {}) {
    if (arguments.length < 2)
      throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
    super(a2, u);
    ae(this, Et, 0);
    ae(this, At, "");
    u === null && (u = {});
    const d2 = u.lastModified === void 0 ? Date.now() : Number(u.lastModified);
    Number.isNaN(d2) || Y(this, Et, d2), Y(this, At, String(l2));
  }
  get name() {
    return k(this, At);
  }
  get lastModified() {
    return k(this, Et);
  }
  get [Symbol.toStringTag]() {
    return "File";
  }
  static [Symbol.hasInstance](a2) {
    return !!a2 && a2 instanceof it && /^(File)$/.test(a2[Symbol.toStringTag]);
  }
}, Et = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), n(Wt, "File"), Wt), fs = us, wn = fs;
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
var { toStringTag: Tt, iterator: cs, hasInstance: ds } = Symbol, ri = Math.random, hs = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","), ni = n((i, o2, a2) => (i += "", /^(Blob|File)$/.test(o2 && o2[Tt]) ? [(a2 = a2 !== void 0 ? a2 + "" : o2[Tt] == "File" ? o2.name : "blob", i), o2.name !== a2 || o2[Tt] == "blob" ? new wn([o2], a2, o2) : o2] : [i, o2 + ""]), "f"), Rn = n((i, o2) => (o2 ? i : i.replace(/\r?\n|\r/g, `\r
`)).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), "e$1"), $e = n((i, o2, a2) => {
  if (o2.length < a2)
    throw new TypeError(`Failed to execute '${i}' on 'FormData': ${a2} arguments required, but only ${o2.length} present.`);
}, "x");
const dr = (Bt = class {
  constructor(...o2) {
    ae(this, G, []);
    if (o2.length)
      throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.");
  }
  get [Tt]() {
    return "FormData";
  }
  [cs]() {
    return this.entries();
  }
  static [ds](o2) {
    return o2 && typeof o2 == "object" && o2[Tt] === "FormData" && !hs.some((a2) => typeof o2[a2] != "function");
  }
  append(...o2) {
    $e("append", arguments, 2), k(this, G).push(ni(...o2));
  }
  delete(o2) {
    $e("delete", arguments, 1), o2 += "", Y(this, G, k(this, G).filter(([a2]) => a2 !== o2));
  }
  get(o2) {
    $e("get", arguments, 1), o2 += "";
    for (var a2 = k(this, G), l2 = a2.length, u = 0; u < l2; u++)
      if (a2[u][0] === o2)
        return a2[u][1];
    return null;
  }
  getAll(o2, a2) {
    return $e("getAll", arguments, 1), a2 = [], o2 += "", k(this, G).forEach((l2) => l2[0] === o2 && a2.push(l2[1])), a2;
  }
  has(o2) {
    return $e("has", arguments, 1), o2 += "", k(this, G).some((a2) => a2[0] === o2);
  }
  forEach(o2, a2) {
    $e("forEach", arguments, 1);
    for (var [l2, u] of this)
      o2.call(a2, u, l2, this);
  }
  set(...o2) {
    $e("set", arguments, 2);
    var a2 = [], l2 = true;
    o2 = ni(...o2), k(this, G).forEach((u) => {
      u[0] === o2[0] ? l2 && (l2 = !a2.push(o2)) : a2.push(u);
    }), l2 && a2.push(o2), Y(this, G, a2);
  }
  *entries() {
    yield* k(this, G);
  }
  *keys() {
    for (var [o2] of this)
      yield o2;
  }
  *values() {
    for (var [, o2] of this)
      yield o2;
  }
}, G = /* @__PURE__ */ new WeakMap(), n(Bt, "FormData"), Bt);
function ps(i, o2 = it) {
  var a2 = `${ri()}${ri()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), l2 = [], u = `--${a2}\r
Content-Disposition: form-data; name="`;
  return i.forEach((d2, p) => typeof d2 == "string" ? l2.push(u + Rn(p) + `"\r
\r
${d2.replace(new RegExp("\\r(?!\\n)|(?<!\\r)\\n", "g"), `\r
`)}\r
`) : l2.push(u + Rn(p) + `"; filename="${Rn(d2.name, 1)}"\r
Content-Type: ${d2.type || "application/octet-stream"}\r
\r
`, d2, `\r
`)), l2.push(`--${a2}--`), new o2(l2, { type: "multipart/form-data; boundary=" + a2 });
}
n(ps, "formDataToBlob");
const Bn = class Bn2 extends Error {
  constructor(o2, a2) {
    super(o2), Error.captureStackTrace(this, this.constructor), this.type = a2;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
n(Bn, "FetchBaseError");
let at = Bn;
const kn = class kn2 extends at {
  constructor(o2, a2, l2) {
    super(o2, a2), l2 && (this.code = this.errno = l2.code, this.erroredSysCall = l2.syscall);
  }
};
n(kn, "FetchError");
let V = kn;
const hr = Symbol.toStringTag, oi = n((i) => typeof i == "object" && typeof i.append == "function" && typeof i.delete == "function" && typeof i.get == "function" && typeof i.getAll == "function" && typeof i.has == "function" && typeof i.set == "function" && typeof i.sort == "function" && i[hr] === "URLSearchParams", "isURLSearchParameters"), pr = n((i) => i && typeof i == "object" && typeof i.arrayBuffer == "function" && typeof i.type == "string" && typeof i.stream == "function" && typeof i.constructor == "function" && /^(Blob|File)$/.test(i[hr]), "isBlob"), bs = n((i) => typeof i == "object" && (i[hr] === "AbortSignal" || i[hr] === "EventTarget"), "isAbortSignal"), ms = n((i, o2) => {
  const a2 = new URL(o2).hostname, l2 = new URL(i).hostname;
  return a2 === l2 || a2.endsWith(`.${l2}`);
}, "isDomainOrSubdomain"), ys = n((i, o2) => {
  const a2 = new URL(o2).protocol, l2 = new URL(i).protocol;
  return a2 === l2;
}, "isSameProtocol"), gs = promisify(se.pipeline), N = Symbol("Body internals"), On = class On2 {
  constructor(o2, { size: a2 = 0 } = {}) {
    let l2 = null;
    o2 === null ? o2 = null : oi(o2) ? o2 = Buffer$1.from(o2.toString()) : pr(o2) || Buffer$1.isBuffer(o2) || (types.isAnyArrayBuffer(o2) ? o2 = Buffer$1.from(o2) : ArrayBuffer.isView(o2) ? o2 = Buffer$1.from(o2.buffer, o2.byteOffset, o2.byteLength) : o2 instanceof se || (o2 instanceof dr ? (o2 = ps(o2), l2 = o2.type.split("=")[1]) : o2 = Buffer$1.from(String(o2))));
    let u = o2;
    Buffer$1.isBuffer(o2) ? u = se.Readable.from(o2) : pr(o2) && (u = se.Readable.from(o2.stream())), this[N] = { body: o2, stream: u, boundary: l2, disturbed: false, error: null }, this.size = a2, o2 instanceof se && o2.on("error", (d2) => {
      const p = d2 instanceof at ? d2 : new V(`Invalid response body while trying to fetch ${this.url}: ${d2.message}`, "system", d2);
      this[N].error = p;
    });
  }
  get body() {
    return this[N].stream;
  }
  get bodyUsed() {
    return this[N].disturbed;
  }
  async arrayBuffer() {
    const { buffer: o2, byteOffset: a2, byteLength: l2 } = await Tn(this);
    return o2.slice(a2, a2 + l2);
  }
  async formData() {
    const o2 = this.headers.get("content-type");
    if (o2.startsWith("application/x-www-form-urlencoded")) {
      const l2 = new dr(), u = new URLSearchParams(await this.text());
      for (const [d2, p] of u)
        l2.append(d2, p);
      return l2;
    }
    const { toFormData: a2 } = await import("./_nuxt/multipart-parser-b4126cfb.js");
    return a2(this.body, o2);
  }
  async blob() {
    const o2 = this.headers && this.headers.get("content-type") || this[N].body && this[N].body.type || "", a2 = await this.arrayBuffer();
    return new it([a2], { type: o2 });
  }
  async json() {
    const o2 = await this.text();
    return JSON.parse(o2);
  }
  async text() {
    const o2 = await Tn(this);
    return new TextDecoder().decode(o2);
  }
  buffer() {
    return Tn(this);
  }
};
n(On, "Body");
let De = On;
De.prototype.buffer = deprecate(De.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer"), Object.defineProperties(De.prototype, { body: { enumerable: true }, bodyUsed: { enumerable: true }, arrayBuffer: { enumerable: true }, blob: { enumerable: true }, json: { enumerable: true }, text: { enumerable: true }, data: { get: deprecate(() => {
}, "data doesn't exist, use json(), text(), arrayBuffer(), or body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (response)") } });
async function Tn(i) {
  if (i[N].disturbed)
    throw new TypeError(`body used already for: ${i.url}`);
  if (i[N].disturbed = true, i[N].error)
    throw i[N].error;
  const { body: o2 } = i;
  if (o2 === null)
    return Buffer$1.alloc(0);
  if (!(o2 instanceof se))
    return Buffer$1.alloc(0);
  const a2 = [];
  let l2 = 0;
  try {
    for await (const u of o2) {
      if (i.size > 0 && l2 + u.length > i.size) {
        const d2 = new V(`content size at ${i.url} over limit: ${i.size}`, "max-size");
        throw o2.destroy(d2), d2;
      }
      l2 += u.length, a2.push(u);
    }
  } catch (u) {
    throw u instanceof at ? u : new V(`Invalid response body while trying to fetch ${i.url}: ${u.message}`, "system", u);
  }
  if (o2.readableEnded === true || o2._readableState.ended === true)
    try {
      return a2.every((u) => typeof u == "string") ? Buffer$1.from(a2.join("")) : Buffer$1.concat(a2, l2);
    } catch (u) {
      throw new V(`Could not create Buffer from response body for ${i.url}: ${u.message}`, "system", u);
    }
  else
    throw new V(`Premature close of server response while trying to fetch ${i.url}`);
}
n(Tn, "consumeBody");
const Cn = n((i, o2) => {
  let a2, l2, { body: u } = i[N];
  if (i.bodyUsed)
    throw new Error("cannot clone body after it is used");
  return u instanceof se && typeof u.getBoundary != "function" && (a2 = new PassThrough({ highWaterMark: o2 }), l2 = new PassThrough({ highWaterMark: o2 }), u.pipe(a2), u.pipe(l2), i[N].stream = a2, u = l2), u;
}, "clone"), _s = deprecate((i) => i.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167"), ii = n((i, o2) => i === null ? null : typeof i == "string" ? "text/plain;charset=UTF-8" : oi(i) ? "application/x-www-form-urlencoded;charset=UTF-8" : pr(i) ? i.type || null : Buffer$1.isBuffer(i) || types.isAnyArrayBuffer(i) || ArrayBuffer.isView(i) ? null : i instanceof dr ? `multipart/form-data; boundary=${o2[N].boundary}` : i && typeof i.getBoundary == "function" ? `multipart/form-data;boundary=${_s(i)}` : i instanceof se ? null : "text/plain;charset=UTF-8", "extractContentType"), Ss = n((i) => {
  const { body: o2 } = i[N];
  return o2 === null ? 0 : pr(o2) ? o2.size : Buffer$1.isBuffer(o2) ? o2.length : o2 && typeof o2.getLengthSync == "function" && o2.hasKnownLength && o2.hasKnownLength() ? o2.getLengthSync() : null;
}, "getTotalBytes"), ws = n(async (i, { body: o2 }) => {
  o2 === null ? i.end() : await gs(o2, i);
}, "writeToStream"), br = typeof Rt.validateHeaderName == "function" ? Rt.validateHeaderName : (i) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(i)) {
    const o2 = new TypeError(`Header name must be a valid HTTP token [${i}]`);
    throw Object.defineProperty(o2, "code", { value: "ERR_INVALID_HTTP_TOKEN" }), o2;
  }
}, Pn = typeof Rt.validateHeaderValue == "function" ? Rt.validateHeaderValue : (i, o2) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(o2)) {
    const a2 = new TypeError(`Invalid character in header content ["${i}"]`);
    throw Object.defineProperty(a2, "code", { value: "ERR_INVALID_CHAR" }), a2;
  }
}, Rr = class Rr2 extends URLSearchParams {
  constructor(o2) {
    let a2 = [];
    if (o2 instanceof Rr2) {
      const l2 = o2.raw();
      for (const [u, d2] of Object.entries(l2))
        a2.push(...d2.map((p) => [u, p]));
    } else if (o2 != null)
      if (typeof o2 == "object" && !types.isBoxedPrimitive(o2)) {
        const l2 = o2[Symbol.iterator];
        if (l2 == null)
          a2.push(...Object.entries(o2));
        else {
          if (typeof l2 != "function")
            throw new TypeError("Header pairs must be iterable");
          a2 = [...o2].map((u) => {
            if (typeof u != "object" || types.isBoxedPrimitive(u))
              throw new TypeError("Each header pair must be an iterable object");
            return [...u];
          }).map((u) => {
            if (u.length !== 2)
              throw new TypeError("Each header pair must be a name/value tuple");
            return [...u];
          });
        }
      } else
        throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    return a2 = a2.length > 0 ? a2.map(([l2, u]) => (br(l2), Pn(l2, String(u)), [String(l2).toLowerCase(), String(u)])) : void 0, super(a2), new Proxy(this, { get(l2, u, d2) {
      switch (u) {
        case "append":
        case "set":
          return (p, m) => (br(p), Pn(p, String(m)), URLSearchParams.prototype[u].call(l2, String(p).toLowerCase(), String(m)));
        case "delete":
        case "has":
        case "getAll":
          return (p) => (br(p), URLSearchParams.prototype[u].call(l2, String(p).toLowerCase()));
        case "keys":
          return () => (l2.sort(), new Set(URLSearchParams.prototype.keys.call(l2)).keys());
        default:
          return Reflect.get(l2, u, d2);
      }
    } });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(o2) {
    const a2 = this.getAll(o2);
    if (a2.length === 0)
      return null;
    let l2 = a2.join(", ");
    return /^content-encoding$/i.test(o2) && (l2 = l2.toLowerCase()), l2;
  }
  forEach(o2, a2 = void 0) {
    for (const l2 of this.keys())
      Reflect.apply(o2, a2, [this.get(l2), l2, this]);
  }
  *values() {
    for (const o2 of this.keys())
      yield this.get(o2);
  }
  *entries() {
    for (const o2 of this.keys())
      yield [o2, this.get(o2)];
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((o2, a2) => (o2[a2] = this.getAll(a2), o2), {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((o2, a2) => {
      const l2 = this.getAll(a2);
      return a2 === "host" ? o2[a2] = l2[0] : o2[a2] = l2.length > 1 ? l2 : l2[0], o2;
    }, {});
  }
};
n(Rr, "Headers");
let le = Rr;
Object.defineProperties(le.prototype, ["get", "entries", "forEach", "values"].reduce((i, o2) => (i[o2] = { enumerable: true }, i), {}));
function Rs(i = []) {
  return new le(i.reduce((o2, a2, l2, u) => (l2 % 2 === 0 && o2.push(u.slice(l2, l2 + 2)), o2), []).filter(([o2, a2]) => {
    try {
      return br(o2), Pn(o2, String(a2)), true;
    } catch {
      return false;
    }
  }));
}
n(Rs, "fromRawHeaders");
const Ts = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), vn = n((i) => Ts.has(i), "isRedirect"), ee = Symbol("Response internals"), Me = class Me2 extends De {
  constructor(o2 = null, a2 = {}) {
    super(o2, a2);
    const l2 = a2.status != null ? a2.status : 200, u = new le(a2.headers);
    if (o2 !== null && !u.has("Content-Type")) {
      const d2 = ii(o2, this);
      d2 && u.append("Content-Type", d2);
    }
    this[ee] = { type: "default", url: a2.url, status: l2, statusText: a2.statusText || "", headers: u, counter: a2.counter, highWaterMark: a2.highWaterMark };
  }
  get type() {
    return this[ee].type;
  }
  get url() {
    return this[ee].url || "";
  }
  get status() {
    return this[ee].status;
  }
  get ok() {
    return this[ee].status >= 200 && this[ee].status < 300;
  }
  get redirected() {
    return this[ee].counter > 0;
  }
  get statusText() {
    return this[ee].statusText;
  }
  get headers() {
    return this[ee].headers;
  }
  get highWaterMark() {
    return this[ee].highWaterMark;
  }
  clone() {
    return new Me2(Cn(this, this.highWaterMark), { type: this.type, url: this.url, status: this.status, statusText: this.statusText, headers: this.headers, ok: this.ok, redirected: this.redirected, size: this.size, highWaterMark: this.highWaterMark });
  }
  static redirect(o2, a2 = 302) {
    if (!vn(a2))
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    return new Me2(null, { headers: { location: new URL(o2).toString() }, status: a2 });
  }
  static error() {
    const o2 = new Me2(null, { status: 0, statusText: "" });
    return o2[ee].type = "error", o2;
  }
  static json(o2 = void 0, a2 = {}) {
    const l2 = JSON.stringify(o2);
    if (l2 === void 0)
      throw new TypeError("data is not JSON serializable");
    const u = new le(a2 && a2.headers);
    return u.has("content-type") || u.set("content-type", "application/json"), new Me2(l2, { ...a2, headers: u });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
n(Me, "Response");
let te = Me;
Object.defineProperties(te.prototype, { type: { enumerable: true }, url: { enumerable: true }, status: { enumerable: true }, ok: { enumerable: true }, redirected: { enumerable: true }, statusText: { enumerable: true }, headers: { enumerable: true }, clone: { enumerable: true } });
const Cs = n((i) => {
  if (i.search)
    return i.search;
  const o2 = i.href.length - 1, a2 = i.hash || (i.href[o2] === "#" ? "#" : "");
  return i.href[o2 - a2.length] === "?" ? "?" : "";
}, "getSearch");
function ai(i, o2 = false) {
  return i == null || (i = new URL(i), /^(about|blob|data):$/.test(i.protocol)) ? "no-referrer" : (i.username = "", i.password = "", i.hash = "", o2 && (i.pathname = "", i.search = ""), i);
}
n(ai, "stripURLForUseAsAReferrer");
const si = /* @__PURE__ */ new Set(["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"]), Ps = "strict-origin-when-cross-origin";
function vs(i) {
  if (!si.has(i))
    throw new TypeError(`Invalid referrerPolicy: ${i}`);
  return i;
}
n(vs, "validateReferrerPolicy");
function Es(i) {
  if (/^(http|ws)s:$/.test(i.protocol))
    return true;
  const o2 = i.host.replace(/(^\[)|(]$)/g, ""), a2 = isIP(o2);
  return a2 === 4 && /^127\./.test(o2) || a2 === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(o2) ? true : i.host === "localhost" || i.host.endsWith(".localhost") ? false : i.protocol === "file:";
}
n(Es, "isOriginPotentiallyTrustworthy");
function st(i) {
  return /^about:(blank|srcdoc)$/.test(i) || i.protocol === "data:" || /^(blob|filesystem):$/.test(i.protocol) ? true : Es(i);
}
n(st, "isUrlPotentiallyTrustworthy");
function As(i, { referrerURLCallback: o2, referrerOriginCallback: a2 } = {}) {
  if (i.referrer === "no-referrer" || i.referrerPolicy === "")
    return null;
  const l2 = i.referrerPolicy;
  if (i.referrer === "about:client")
    return "no-referrer";
  const u = i.referrer;
  let d2 = ai(u), p = ai(u, true);
  d2.toString().length > 4096 && (d2 = p), o2 && (d2 = o2(d2)), a2 && (p = a2(p));
  const m = new URL(i.url);
  switch (l2) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return p;
    case "unsafe-url":
      return d2;
    case "strict-origin":
      return st(d2) && !st(m) ? "no-referrer" : p.toString();
    case "strict-origin-when-cross-origin":
      return d2.origin === m.origin ? d2 : st(d2) && !st(m) ? "no-referrer" : p;
    case "same-origin":
      return d2.origin === m.origin ? d2 : "no-referrer";
    case "origin-when-cross-origin":
      return d2.origin === m.origin ? d2 : p;
    case "no-referrer-when-downgrade":
      return st(d2) && !st(m) ? "no-referrer" : d2;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${l2}`);
  }
}
n(As, "determineRequestsReferrer");
function Ws(i) {
  const o2 = (i.get("referrer-policy") || "").split(/[,\s]+/);
  let a2 = "";
  for (const l2 of o2)
    l2 && si.has(l2) && (a2 = l2);
  return a2;
}
n(Ws, "parseReferrerPolicyFromHeader");
const j = Symbol("Request internals"), Ct = n((i) => typeof i == "object" && typeof i[j] == "object", "isRequest"), Bs = deprecate(() => {
}, ".data is not a valid RequestInit property, use .body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (request)"), Tr = class Tr2 extends De {
  constructor(o2, a2 = {}) {
    let l2;
    if (Ct(o2) ? l2 = new URL(o2.url) : (l2 = new URL(o2), o2 = {}), l2.username !== "" || l2.password !== "")
      throw new TypeError(`${l2} is an url with embedded credentials.`);
    let u = a2.method || o2.method || "GET";
    if (/^(delete|get|head|options|post|put)$/i.test(u) && (u = u.toUpperCase()), !Ct(a2) && "data" in a2 && Bs(), (a2.body != null || Ct(o2) && o2.body !== null) && (u === "GET" || u === "HEAD"))
      throw new TypeError("Request with GET/HEAD method cannot have body");
    const d2 = a2.body ? a2.body : Ct(o2) && o2.body !== null ? Cn(o2) : null;
    super(d2, { size: a2.size || o2.size || 0 });
    const p = new le(a2.headers || o2.headers || {});
    if (d2 !== null && !p.has("Content-Type")) {
      const S = ii(d2, this);
      S && p.set("Content-Type", S);
    }
    let m = Ct(o2) ? o2.signal : null;
    if ("signal" in a2 && (m = a2.signal), m != null && !bs(m))
      throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
    let C = a2.referrer == null ? o2.referrer : a2.referrer;
    if (C === "")
      C = "no-referrer";
    else if (C) {
      const S = new URL(C);
      C = /^about:(\/\/)?client$/.test(S) ? "client" : S;
    } else
      C = void 0;
    this[j] = { method: u, redirect: a2.redirect || o2.redirect || "follow", headers: p, parsedURL: l2, signal: m, referrer: C }, this.follow = a2.follow === void 0 ? o2.follow === void 0 ? 20 : o2.follow : a2.follow, this.compress = a2.compress === void 0 ? o2.compress === void 0 ? true : o2.compress : a2.compress, this.counter = a2.counter || o2.counter || 0, this.agent = a2.agent || o2.agent, this.highWaterMark = a2.highWaterMark || o2.highWaterMark || 16384, this.insecureHTTPParser = a2.insecureHTTPParser || o2.insecureHTTPParser || false, this.referrerPolicy = a2.referrerPolicy || o2.referrerPolicy || "";
  }
  get method() {
    return this[j].method;
  }
  get url() {
    return format(this[j].parsedURL);
  }
  get headers() {
    return this[j].headers;
  }
  get redirect() {
    return this[j].redirect;
  }
  get signal() {
    return this[j].signal;
  }
  get referrer() {
    if (this[j].referrer === "no-referrer")
      return "";
    if (this[j].referrer === "client")
      return "about:client";
    if (this[j].referrer)
      return this[j].referrer.toString();
  }
  get referrerPolicy() {
    return this[j].referrerPolicy;
  }
  set referrerPolicy(o2) {
    this[j].referrerPolicy = vs(o2);
  }
  clone() {
    return new Tr2(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
n(Tr, "Request");
let lt = Tr;
Object.defineProperties(lt.prototype, { method: { enumerable: true }, url: { enumerable: true }, headers: { enumerable: true }, redirect: { enumerable: true }, clone: { enumerable: true }, signal: { enumerable: true }, referrer: { enumerable: true }, referrerPolicy: { enumerable: true } });
const ks = n((i) => {
  const { parsedURL: o2 } = i[j], a2 = new le(i[j].headers);
  a2.has("Accept") || a2.set("Accept", "*/*");
  let l2 = null;
  if (i.body === null && /^(post|put)$/i.test(i.method) && (l2 = "0"), i.body !== null) {
    const m = Ss(i);
    typeof m == "number" && !Number.isNaN(m) && (l2 = String(m));
  }
  l2 && a2.set("Content-Length", l2), i.referrerPolicy === "" && (i.referrerPolicy = Ps), i.referrer && i.referrer !== "no-referrer" ? i[j].referrer = As(i) : i[j].referrer = "no-referrer", i[j].referrer instanceof URL && a2.set("Referer", i.referrer), a2.has("User-Agent") || a2.set("User-Agent", "node-fetch"), i.compress && !a2.has("Accept-Encoding") && a2.set("Accept-Encoding", "gzip, deflate, br");
  let { agent: u } = i;
  typeof u == "function" && (u = u(o2));
  const d2 = Cs(o2), p = { path: o2.pathname + d2, method: i.method, headers: a2[Symbol.for("nodejs.util.inspect.custom")](), insecureHTTPParser: i.insecureHTTPParser, agent: u };
  return { parsedURL: o2, options: p };
}, "getNodeRequestOptions"), qn = class qn2 extends at {
  constructor(o2, a2 = "aborted") {
    super(o2, a2);
  }
};
n(qn, "AbortError");
let mr = qn;
/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
if (!globalThis.DOMException)
  try {
    const { MessageChannel: i } = require("worker_threads"), o2 = new i().port1, a2 = new ArrayBuffer();
    o2.postMessage(a2, [a2, a2]);
  } catch (i) {
    i.constructor.name === "DOMException" && (globalThis.DOMException = i.constructor);
  }
var Os = globalThis.DOMException;
const qs = is(Os), { stat: En } = promises;
n((i, o2) => li(statSync(i), i, o2), "blobFromSync");
n((i, o2) => En(i).then((a2) => li(a2, i, o2)), "blobFrom");
n((i, o2) => En(i).then((a2) => ui(a2, i, o2)), "fileFrom");
n((i, o2) => ui(statSync(i), i, o2), "fileFromSync");
const li = n((i, o2, a2 = "") => new it([new yr({ path: o2, size: i.size, lastModified: i.mtimeMs, start: 0 })], { type: a2 }), "fromBlob"), ui = n((i, o2, a2 = "") => new wn([new yr({ path: o2, size: i.size, lastModified: i.mtimeMs, start: 0 })], basename(o2), { type: a2, lastModified: i.mtimeMs }), "fromFile"), Cr = class Cr2 {
  constructor(o2) {
    ae(this, Ue, void 0);
    ae(this, Ne, void 0);
    Y(this, Ue, o2.path), Y(this, Ne, o2.start), this.size = o2.size, this.lastModified = o2.lastModified;
  }
  slice(o2, a2) {
    return new Cr2({ path: k(this, Ue), lastModified: this.lastModified, size: a2 - o2, start: k(this, Ne) + o2 });
  }
  async *stream() {
    const { mtimeMs: o2 } = await En(k(this, Ue));
    if (o2 > this.lastModified)
      throw new qs("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
    yield* createReadStream(k(this, Ue), { start: k(this, Ne), end: k(this, Ne) + this.size - 1 });
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
};
Ue = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), n(Cr, "BlobDataItem");
let yr = Cr;
const Ls = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
async function fi(i, o2) {
  return new Promise((a2, l2) => {
    const u = new lt(i, o2), { parsedURL: d2, options: p } = ks(u);
    if (!Ls.has(d2.protocol))
      throw new TypeError(`node-fetch cannot load ${i}. URL scheme "${d2.protocol.replace(/:$/, "")}" is not supported.`);
    if (d2.protocol === "data:") {
      const b = os(u.url), g2 = new te(b, { headers: { "Content-Type": b.typeFull } });
      a2(g2);
      return;
    }
    const m = (d2.protocol === "https:" ? Ka : Rt).request, { signal: C } = u;
    let S = null;
    const I = n(() => {
      const b = new mr("The operation was aborted.");
      l2(b), u.body && u.body instanceof se.Readable && u.body.destroy(b), !(!S || !S.body) && S.body.emit("error", b);
    }, "abort");
    if (C && C.aborted) {
      I();
      return;
    }
    const re = n(() => {
      I(), E();
    }, "abortAndFinalize"), L = m(d2.toString(), p);
    C && C.addEventListener("abort", re);
    const E = n(() => {
      L.abort(), C && C.removeEventListener("abort", re);
    }, "finalize");
    L.on("error", (b) => {
      l2(new V(`request to ${u.url} failed, reason: ${b.message}`, "system", b)), E();
    }), $s(L, (b) => {
      S && S.body && S.body.destroy(b);
    }), process.version < "v14" && L.on("socket", (b) => {
      let g2;
      b.prependListener("end", () => {
        g2 = b._eventsCount;
      }), b.prependListener("close", (A2) => {
        if (S && g2 < b._eventsCount && !A2) {
          const q = new Error("Premature close");
          q.code = "ERR_STREAM_PREMATURE_CLOSE", S.body.emit("error", q);
        }
      });
    }), L.on("response", (b) => {
      L.setTimeout(0);
      const g2 = Rs(b.rawHeaders);
      if (vn(b.statusCode)) {
        const O = g2.get("Location");
        let $ = null;
        try {
          $ = O === null ? null : new URL(O, u.url);
        } catch {
          if (u.redirect !== "manual") {
            l2(new V(`uri requested responds with an invalid redirect URL: ${O}`, "invalid-redirect")), E();
            return;
          }
        }
        switch (u.redirect) {
          case "error":
            l2(new V(`uri requested responds with a redirect, redirect mode is set to error: ${u.url}`, "no-redirect")), E();
            return;
          case "manual":
            break;
          case "follow": {
            if ($ === null)
              break;
            if (u.counter >= u.follow) {
              l2(new V(`maximum redirect reached at: ${u.url}`, "max-redirect")), E();
              return;
            }
            const F = { headers: new le(u.headers), follow: u.follow, counter: u.counter + 1, agent: u.agent, compress: u.compress, method: u.method, body: Cn(u), signal: u.signal, size: u.size, referrer: u.referrer, referrerPolicy: u.referrerPolicy };
            if (!ms(u.url, $) || !ys(u.url, $))
              for (const ue of ["authorization", "www-authenticate", "cookie", "cookie2"])
                F.headers.delete(ue);
            if (b.statusCode !== 303 && u.body && o2.body instanceof se.Readable) {
              l2(new V("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), E();
              return;
            }
            (b.statusCode === 303 || (b.statusCode === 301 || b.statusCode === 302) && u.method === "POST") && (F.method = "GET", F.body = void 0, F.headers.delete("content-length"));
            const ve = Ws(g2);
            ve && (F.referrerPolicy = ve), a2(fi(new lt($, F))), E();
            return;
          }
          default:
            return l2(new TypeError(`Redirect option '${u.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      C && b.once("end", () => {
        C.removeEventListener("abort", re);
      });
      let A2 = pipeline(b, new PassThrough(), (O) => {
        O && l2(O);
      });
      process.version < "v12.10" && b.on("aborted", re);
      const q = { url: u.url, status: b.statusCode, statusText: b.statusMessage, headers: g2, size: u.size, counter: u.counter, highWaterMark: u.highWaterMark }, ne = g2.get("Content-Encoding");
      if (!u.compress || u.method === "HEAD" || ne === null || b.statusCode === 204 || b.statusCode === 304) {
        S = new te(A2, q), a2(S);
        return;
      }
      const dt = { flush: nt.Z_SYNC_FLUSH, finishFlush: nt.Z_SYNC_FLUSH };
      if (ne === "gzip" || ne === "x-gzip") {
        A2 = pipeline(A2, nt.createGunzip(dt), (O) => {
          O && l2(O);
        }), S = new te(A2, q), a2(S);
        return;
      }
      if (ne === "deflate" || ne === "x-deflate") {
        const O = pipeline(b, new PassThrough(), ($) => {
          $ && l2($);
        });
        O.once("data", ($) => {
          ($[0] & 15) === 8 ? A2 = pipeline(A2, nt.createInflate(), (F) => {
            F && l2(F);
          }) : A2 = pipeline(A2, nt.createInflateRaw(), (F) => {
            F && l2(F);
          }), S = new te(A2, q), a2(S);
        }), O.once("end", () => {
          S || (S = new te(A2, q), a2(S));
        });
        return;
      }
      if (ne === "br") {
        A2 = pipeline(A2, nt.createBrotliDecompress(), (O) => {
          O && l2(O);
        }), S = new te(A2, q), a2(S);
        return;
      }
      S = new te(A2, q), a2(S);
    }), ws(L, u).catch(l2);
  });
}
n(fi, "fetch$1");
function $s(i, o2) {
  const a2 = Buffer$1.from(`0\r
\r
`);
  let l2 = false, u = false, d2;
  i.on("response", (p) => {
    const { headers: m } = p;
    l2 = m["transfer-encoding"] === "chunked" && !m["content-length"];
  }), i.on("socket", (p) => {
    const m = n(() => {
      if (l2 && !u) {
        const S = new Error("Premature close");
        S.code = "ERR_STREAM_PREMATURE_CLOSE", o2(S);
      }
    }, "onSocketClose"), C = n((S) => {
      u = Buffer$1.compare(S.slice(-5), a2) === 0, !u && d2 && (u = Buffer$1.compare(d2.slice(-3), a2.slice(0, 3)) === 0 && Buffer$1.compare(S.slice(-2), a2.slice(3)) === 0), d2 = S;
    }, "onData");
    p.prependListener("close", m), p.on("data", C), i.on("close", () => {
      p.removeListener("close", m), p.removeListener("data", C);
    });
  });
}
n($s, "fixResponseChunkedTransferBadEnding");
const ci = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap();
function B(i) {
  const o2 = ci.get(i);
  return console.assert(o2 != null, "'this' is expected an Event object, but got", i), o2;
}
n(B, "pd");
function di(i) {
  if (i.passiveListener != null) {
    typeof console < "u" && typeof console.error == "function" && console.error("Unable to preventDefault inside passive event listener invocation.", i.passiveListener);
    return;
  }
  i.event.cancelable && (i.canceled = true, typeof i.event.preventDefault == "function" && i.event.preventDefault());
}
n(di, "setCancelFlag");
function ut(i, o2) {
  ci.set(this, { eventTarget: i, event: o2, eventPhase: 2, currentTarget: i, canceled: false, stopped: false, immediateStopped: false, passiveListener: null, timeStamp: o2.timeStamp || Date.now() }), Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
  const a2 = Object.keys(o2);
  for (let l2 = 0; l2 < a2.length; ++l2) {
    const u = a2[l2];
    u in this || Object.defineProperty(this, u, hi(u));
  }
}
n(ut, "Event"), ut.prototype = { get type() {
  return B(this).event.type;
}, get target() {
  return B(this).eventTarget;
}, get currentTarget() {
  return B(this).currentTarget;
}, composedPath() {
  const i = B(this).currentTarget;
  return i == null ? [] : [i];
}, get NONE() {
  return 0;
}, get CAPTURING_PHASE() {
  return 1;
}, get AT_TARGET() {
  return 2;
}, get BUBBLING_PHASE() {
  return 3;
}, get eventPhase() {
  return B(this).eventPhase;
}, stopPropagation() {
  const i = B(this);
  i.stopped = true, typeof i.event.stopPropagation == "function" && i.event.stopPropagation();
}, stopImmediatePropagation() {
  const i = B(this);
  i.stopped = true, i.immediateStopped = true, typeof i.event.stopImmediatePropagation == "function" && i.event.stopImmediatePropagation();
}, get bubbles() {
  return !!B(this).event.bubbles;
}, get cancelable() {
  return !!B(this).event.cancelable;
}, preventDefault() {
  di(B(this));
}, get defaultPrevented() {
  return B(this).canceled;
}, get composed() {
  return !!B(this).event.composed;
}, get timeStamp() {
  return B(this).timeStamp;
}, get srcElement() {
  return B(this).eventTarget;
}, get cancelBubble() {
  return B(this).stopped;
}, set cancelBubble(i) {
  if (!i)
    return;
  const o2 = B(this);
  o2.stopped = true, typeof o2.event.cancelBubble == "boolean" && (o2.event.cancelBubble = true);
}, get returnValue() {
  return !B(this).canceled;
}, set returnValue(i) {
  i || di(B(this));
}, initEvent() {
} }, Object.defineProperty(ut.prototype, "constructor", { value: ut, configurable: true, writable: true });
function hi(i) {
  return { get() {
    return B(this).event[i];
  }, set(o2) {
    B(this).event[i] = o2;
  }, configurable: true, enumerable: true };
}
n(hi, "defineRedirectDescriptor");
function Ds(i) {
  return { value() {
    const o2 = B(this).event;
    return o2[i].apply(o2, arguments);
  }, configurable: true, enumerable: true };
}
n(Ds, "defineCallDescriptor");
function Ms(i, o2) {
  const a2 = Object.keys(o2);
  if (a2.length === 0)
    return i;
  function l2(u, d2) {
    i.call(this, u, d2);
  }
  n(l2, "CustomEvent"), l2.prototype = Object.create(i.prototype, { constructor: { value: l2, configurable: true, writable: true } });
  for (let u = 0; u < a2.length; ++u) {
    const d2 = a2[u];
    if (!(d2 in i.prototype)) {
      const m = typeof Object.getOwnPropertyDescriptor(o2, d2).value == "function";
      Object.defineProperty(l2.prototype, d2, m ? Ds(d2) : hi(d2));
    }
  }
  return l2;
}
n(Ms, "defineWrapper");
function pi(i) {
  if (i == null || i === Object.prototype)
    return ut;
  let o2 = An.get(i);
  return o2 == null && (o2 = Ms(pi(Object.getPrototypeOf(i)), i), An.set(i, o2)), o2;
}
n(pi, "getWrapper");
function Us(i, o2) {
  const a2 = pi(Object.getPrototypeOf(o2));
  return new a2(i, o2);
}
n(Us, "wrapEvent");
function Ns(i) {
  return B(i).immediateStopped;
}
n(Ns, "isStopped");
function xs(i, o2) {
  B(i).eventPhase = o2;
}
n(xs, "setEventPhase");
function Hs(i, o2) {
  B(i).currentTarget = o2;
}
n(Hs, "setCurrentTarget");
function bi(i, o2) {
  B(i).passiveListener = o2;
}
n(bi, "setPassiveListener");
const mi = /* @__PURE__ */ new WeakMap(), yi = 1, gi = 2, gr = 3;
function _r(i) {
  return i !== null && typeof i == "object";
}
n(_r, "isObject");
function Pt(i) {
  const o2 = mi.get(i);
  if (o2 == null)
    throw new TypeError("'this' is expected an EventTarget object, but got another value.");
  return o2;
}
n(Pt, "getListeners");
function Vs(i) {
  return { get() {
    let a2 = Pt(this).get(i);
    for (; a2 != null; ) {
      if (a2.listenerType === gr)
        return a2.listener;
      a2 = a2.next;
    }
    return null;
  }, set(o2) {
    typeof o2 != "function" && !_r(o2) && (o2 = null);
    const a2 = Pt(this);
    let l2 = null, u = a2.get(i);
    for (; u != null; )
      u.listenerType === gr ? l2 !== null ? l2.next = u.next : u.next !== null ? a2.set(i, u.next) : a2.delete(i) : l2 = u, u = u.next;
    if (o2 !== null) {
      const d2 = { listener: o2, listenerType: gr, passive: false, once: false, next: null };
      l2 === null ? a2.set(i, d2) : l2.next = d2;
    }
  }, configurable: true, enumerable: true };
}
n(Vs, "defineEventAttributeDescriptor");
function _i(i, o2) {
  Object.defineProperty(i, `on${o2}`, Vs(o2));
}
n(_i, "defineEventAttribute");
function Si(i) {
  function o2() {
    be.call(this);
  }
  n(o2, "CustomEventTarget"), o2.prototype = Object.create(be.prototype, { constructor: { value: o2, configurable: true, writable: true } });
  for (let a2 = 0; a2 < i.length; ++a2)
    _i(o2.prototype, i[a2]);
  return o2;
}
n(Si, "defineCustomEventTarget");
function be() {
  if (this instanceof be) {
    mi.set(this, /* @__PURE__ */ new Map());
    return;
  }
  if (arguments.length === 1 && Array.isArray(arguments[0]))
    return Si(arguments[0]);
  if (arguments.length > 0) {
    const i = new Array(arguments.length);
    for (let o2 = 0; o2 < arguments.length; ++o2)
      i[o2] = arguments[o2];
    return Si(i);
  }
  throw new TypeError("Cannot call a class as a function");
}
n(be, "EventTarget"), be.prototype = { addEventListener(i, o2, a2) {
  if (o2 == null)
    return;
  if (typeof o2 != "function" && !_r(o2))
    throw new TypeError("'listener' should be a function or an object.");
  const l2 = Pt(this), u = _r(a2), p = (u ? !!a2.capture : !!a2) ? yi : gi, m = { listener: o2, listenerType: p, passive: u && !!a2.passive, once: u && !!a2.once, next: null };
  let C = l2.get(i);
  if (C === void 0) {
    l2.set(i, m);
    return;
  }
  let S = null;
  for (; C != null; ) {
    if (C.listener === o2 && C.listenerType === p)
      return;
    S = C, C = C.next;
  }
  S.next = m;
}, removeEventListener(i, o2, a2) {
  if (o2 == null)
    return;
  const l2 = Pt(this), d2 = (_r(a2) ? !!a2.capture : !!a2) ? yi : gi;
  let p = null, m = l2.get(i);
  for (; m != null; ) {
    if (m.listener === o2 && m.listenerType === d2) {
      p !== null ? p.next = m.next : m.next !== null ? l2.set(i, m.next) : l2.delete(i);
      return;
    }
    p = m, m = m.next;
  }
}, dispatchEvent(i) {
  if (i == null || typeof i.type != "string")
    throw new TypeError('"event.type" should be a string.');
  const o2 = Pt(this), a2 = i.type;
  let l2 = o2.get(a2);
  if (l2 == null)
    return true;
  const u = Us(this, i);
  let d2 = null;
  for (; l2 != null; ) {
    if (l2.once ? d2 !== null ? d2.next = l2.next : l2.next !== null ? o2.set(a2, l2.next) : o2.delete(a2) : d2 = l2, bi(u, l2.passive ? l2.listener : null), typeof l2.listener == "function")
      try {
        l2.listener.call(this, u);
      } catch (p) {
        typeof console < "u" && typeof console.error == "function" && console.error(p);
      }
    else
      l2.listenerType !== gr && typeof l2.listener.handleEvent == "function" && l2.listener.handleEvent(u);
    if (Ns(u))
      break;
    l2 = l2.next;
  }
  return bi(u, null), xs(u, 0), Hs(u, null), !u.defaultPrevented;
} }, Object.defineProperty(be.prototype, "constructor", { value: be, configurable: true, writable: true });
const zn = class zn2 extends be {
  constructor() {
    throw super(), new TypeError("AbortSignal cannot be constructed directly");
  }
  get aborted() {
    const o2 = Sr.get(this);
    if (typeof o2 != "boolean")
      throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
    return o2;
  }
};
n(zn, "AbortSignal");
let ft = zn;
_i(ft.prototype, "abort");
function Qs() {
  const i = Object.create(ft.prototype);
  return be.call(i), Sr.set(i, false), i;
}
n(Qs, "createAbortSignal");
function Ys(i) {
  Sr.get(i) === false && (Sr.set(i, true), i.dispatchEvent({ type: "abort" }));
}
n(Ys, "abortSignal");
const Sr = /* @__PURE__ */ new WeakMap();
Object.defineProperties(ft.prototype, { aborted: { enumerable: true } }), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ft.prototype, Symbol.toStringTag, { configurable: true, value: "AbortSignal" });
let Wn = (kt = class {
  constructor() {
    wi.set(this, Qs());
  }
  get signal() {
    return Ri(this);
  }
  abort() {
    Ys(Ri(this));
  }
}, n(kt, "AbortController"), kt);
const wi = /* @__PURE__ */ new WeakMap();
function Ri(i) {
  const o2 = wi.get(i);
  if (o2 == null)
    throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${i === null ? "null" : typeof i}`);
  return o2;
}
n(Ri, "getSignal"), Object.defineProperties(Wn.prototype, { signal: { enumerable: true }, abort: { enumerable: true } }), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Wn.prototype, Symbol.toStringTag, { configurable: true, value: "AbortController" });
var Gs = Object.defineProperty, Zs = n((i, o2) => Gs(i, "name", { value: o2, configurable: true }), "e");
const Ti = fi;
Ci();
function Ci() {
  var _a2, _b2, _c;
  !((_b2 = (_a2 = globalThis.process) == null ? void 0 : _a2.versions) == null ? void 0 : _b2.node) && !((_c = globalThis.process) == null ? void 0 : _c.env.DISABLE_NODE_FETCH_NATIVE_WARN) && console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");
}
n(Ci, "s"), Zs(Ci, "checkNodeEnvironment");
var a = Object.defineProperty;
var t = (e, r) => a(e, "name", { value: r, configurable: true });
var f = Object.defineProperty, g = t((e, r) => f(e, "name", { value: r, configurable: true }), "e");
const o = !!((_b = (_a = globalThis.process) == null ? void 0 : _a.env) == null ? void 0 : _b.FORCE_NODE_FETCH);
function l() {
  return !o && globalThis.fetch ? globalThis.fetch : Ti;
}
t(l, "p"), g(l, "_getFetch");
const s = l(), d = !o && globalThis.Headers || le, A = !o && globalThis.AbortController || Wn;
const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (value[0] === '"' && value[value.length - 1] === '"') {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s2 = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s2.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s2[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s2[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k2) => query[k2] !== void 0).map((k2) => encodeQueryItem(k2, query[k2])).filter(Boolean).join("&");
}
const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s2] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s2.length > 0 ? `?${s2.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s2] = input.split("?");
  return s0 + "/" + (s2.length > 0 ? `?${s2.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function isEqual(a2, b, options = {}) {
  if (!options.trailingSlash) {
    a2 = withTrailingSlash(a2);
    b = withTrailingSlash(b);
  }
  if (!options.leadingSlash) {
    a2 = withLeadingSlash(a2);
    b = withLeadingSlash(b);
  }
  if (!options.encoding) {
    a2 = decode(a2);
    b = decode(b);
  }
  return a2 === b;
}
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto,
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  const [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  const { pathname, search, hash } = parsePath(
    path.replace(/\/(?=[A-Za-z]:)/, "")
  );
  return {
    protocol,
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol ? parsed.protocol + "//" : "";
  return proto + auth + host + pathname + search + hash;
}
class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if ((opts == null ? void 0 : opts.cause) && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  var _a2, _b2, _c, _d, _e;
  const errorMessage = ((_a2 = ctx.error) == null ? void 0 : _a2.message) || ((_b2 = ctx.error) == null ? void 0 : _b2.toString()) || "";
  const method = ((_c = ctx.request) == null ? void 0 : _c.method) || ((_d = ctx.options) == null ? void 0 : _d.method) || "GET";
  const url = ((_e = ctx.request) == null ? void 0 : _e.url) || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}
const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t2 = typeof value;
  if (t2 === "string" || t2 === "number" || t2 === "boolean" || t2 === null) {
    return true;
  }
  if (t2 !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function mergeFetchOptions(input, defaults, Headers2 = globalThis.Headers) {
  const merged = {
    ...defaults,
    ...input
  };
  if ((defaults == null ? void 0 : defaults.params) && (input == null ? void 0 : input.params)) {
    merged.params = {
      ...defaults == null ? void 0 : defaults.params,
      ...input == null ? void 0 : input.params
    };
  }
  if ((defaults == null ? void 0 : defaults.query) && (input == null ? void 0 : input.query)) {
    merged.query = {
      ...defaults == null ? void 0 : defaults.query,
      ...input == null ? void 0 : input.query
    };
  }
  if ((defaults == null ? void 0 : defaults.headers) && (input == null ? void 0 : input.headers)) {
    merged.headers = new Headers2((defaults == null ? void 0 : defaults.headers) || {});
    for (const [key, value] of new Headers2((input == null ? void 0 : input.headers) || {})) {
      merged.headers.set(key, value);
    }
  }
  return merged;
}
const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch: fetch2 = globalThis.fetch,
    Headers: Headers2 = globalThis.Headers,
    AbortController: AbortController2 = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1,
          timeout: context.options.timeout
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    var _a2;
    const context = {
      request: _request,
      options: mergeFetchOptions(_options, globalOptions.defaults, Headers2),
      response: void 0,
      error: void 0
    };
    context.options.method = (_a2 = context.options.method) == null ? void 0 : _a2.toUpperCase();
    if (context.options.onRequest) {
      await context.options.onRequest(context);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query || context.options.params) {
        context.request = withQuery(context.request, {
          ...context.options.params,
          ...context.options.query
        });
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers2(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController2();
      setTimeout(() => controller.abort(), context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch2(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await context.options.onRequestError(context);
      }
      return await onError(context);
    }
    const hasBody = context.response.body && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await context.options.onResponse(context);
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await context.options.onResponseError(context);
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch2 = async function $fetch22(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch2.raw = $fetchRaw;
  $fetch2.native = (...args) => fetch2(...args);
  $fetch2.create = (defaultOptions = {}) => createFetch({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch2;
}
function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return s;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new Rt.Agent(agentOptions);
  const httpsAgent = new Ka.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return s(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch || createNodeFetch();
const Headers = globalThis.Headers || d;
const AbortController$1 = globalThis.AbortController || A;
const ofetch = createFetch({ fetch, Headers, AbortController: AbortController$1 });
const $fetch = ofetch;
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.8.0";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
  if (typeof plugin === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a2, _b2;
  const parallels = [];
  const errors = [];
  for (const plugin of plugins2) {
    if (((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext) && ((_b2 = plugin.env) == null ? void 0 : _b2.islands) === false) {
      continue;
    }
    const promise = applyPlugin(nuxtApp, plugin);
    if (plugin.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  var _a2;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a2 = getCurrentInstance()) == null ? void 0 : _a2.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig() {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k2, v]) => {
        if (k2 === "titleTemplate" || k2.startsWith("on"))
          return [k2, unref(v)];
        return [k2, resolveUnrefHeadInput(v, k2)];
      })
    );
  }
  return root;
}
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && process.env.NODE_ENV !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a2;
  return (_a2 = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a2.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      async function redirect(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error = useError();
    if (false)
      ;
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const clearError = async (options = {}) => {
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await useRouter().replace(options.redirect);
  }
  error.value = null;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const unhead_ouHrqEczRv = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  manifest_45route_45rule
];
function getRouteFromPath(fullPath) {
  if (typeof fullPath === "object") {
    fullPath = stringifyParsedURL({
      pathname: fullPath.path || "",
      search: stringifyQuery(fullPath.query || {}),
      hash: fullPath.hash || ""
    });
  }
  const url = parseURL(fullPath.toString());
  return {
    path: url.pathname,
    fullPath,
    query: parseQuery(url.search),
    hash: url.hash,
    // stub properties for compat with vue-router
    params: {},
    name: void 0,
    matched: [],
    redirectedFrom: void 0,
    meta: {},
    href: fullPath
  };
}
const router_emIp2eGO5q = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  setup(nuxtApp) {
    const initialURL = nuxtApp.ssrContext.url;
    const routes = [];
    const hooks = {
      "navigate:before": [],
      "resolve:before": [],
      "navigate:after": [],
      error: []
    };
    const registerHook = (hook, guard) => {
      hooks[hook].push(guard);
      return () => hooks[hook].splice(hooks[hook].indexOf(guard), 1);
    };
    const baseURL2 = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const route = reactive(getRouteFromPath(initialURL));
    async function handleNavigation(url, replace) {
      try {
        const to = getRouteFromPath(url);
        for (const middleware of hooks["navigate:before"]) {
          const result = await middleware(to, route);
          if (result === false || result instanceof Error) {
            return;
          }
          if (typeof result === "string" && result.length) {
            return handleNavigation(result, true);
          }
        }
        for (const handler of hooks["resolve:before"]) {
          await handler(to, route);
        }
        Object.assign(route, to);
        if (false)
          ;
        for (const middleware of hooks["navigate:after"]) {
          await middleware(to, route);
        }
      } catch (err) {
        for (const handler of hooks.error) {
          await handler(err);
        }
      }
    }
    const router = {
      currentRoute: route,
      isReady: () => Promise.resolve(),
      // These options provide a similar API to vue-router but have no effect
      options: {},
      install: () => Promise.resolve(),
      // Navigation
      push: (url) => handleNavigation(url, false),
      replace: (url) => handleNavigation(url, true),
      back: () => window.history.go(-1),
      go: (delta) => window.history.go(delta),
      forward: () => window.history.go(1),
      // Guards
      beforeResolve: (guard) => registerHook("resolve:before", guard),
      beforeEach: (guard) => registerHook("navigate:before", guard),
      afterEach: (guard) => registerHook("navigate:after", guard),
      onError: (handler) => registerHook("error", handler),
      // Routes
      resolve: getRouteFromPath,
      addRoute: (parentName, route2) => {
        routes.push(route2);
      },
      getRoutes: () => routes,
      hasRoute: (name) => routes.some((route2) => route2.name === name),
      removeRoute: (name) => {
        const index = routes.findIndex((route2) => route2.name === name);
        if (index !== -1) {
          routes.splice(index, 1);
        }
      }
    };
    nuxtApp.vueApp.component("RouterLink", {
      functional: true,
      props: {
        to: String,
        custom: Boolean,
        replace: Boolean,
        // Not implemented
        activeClass: String,
        exactActiveClass: String,
        ariaCurrentValue: String
      },
      setup: (props, { slots }) => {
        const navigate = () => handleNavigation(props.to, props.replace);
        return () => {
          var _a2;
          const route2 = router.resolve(props.to);
          return props.custom ? (_a2 = slots.default) == null ? void 0 : _a2.call(slots, { href: props.to, navigate, route: route2 }) : h("a", { href: props.to, onClick: (e) => {
            e.preventDefault();
            return navigate();
          } }, slots);
        };
      }
    });
    nuxtApp._route = route;
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    const initialLayout = nuxtApp.payload.state._layout;
    nuxtApp.hooks.hookOnce("app:created", async () => {
      router.beforeEach(async (to, from) => {
        var _a2;
        to.meta = reactive(to.meta || {});
        if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
          to.meta.layout = initialLayout;
        }
        nuxtApp._processingMiddleware = true;
        if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
          const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
          for (const middleware of middlewareEntries) {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            {
              if (result === false || result instanceof Error) {
                const error = result || createError$1({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                delete nuxtApp._processingMiddleware;
                return nuxtApp.runWithContext(() => showError(error));
              }
            }
            if (result === true) {
              continue;
            }
            if (result || result === false) {
              return result;
            }
          }
        }
      });
      router.afterEach(() => {
        delete nuxtApp._processingMiddleware;
      });
      await router.replace(initialURL);
      if (!isEqual(route.fullPath, initialURL)) {
        await nuxtApp.runWithContext(() => navigateTo(route.fullPath));
      }
    });
    return {
      provide: {
        route,
        router
      }
    };
  }
});
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_0vG4wTSY5Z = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const plugins = [
  unhead_ouHrqEczRv,
  router_emIp2eGO5q,
  revive_payload_server_0vG4wTSY5Z,
  components_plugin_KR1HBZs4kY
];
const welcome_vue_vue_type_style_index_0_scoped_f886b4dd_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {
  __name: "welcome",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "Welcome to Nuxt!"
    },
    readDocs: {
      type: String,
      default: "We highly recommend you take a look at the Nuxt documentation, whether you are new or have previous experience with the framework."
    },
    followTwitter: {
      type: String,
      default: "Follow the Nuxt Twitter account to get latest news about releases, new modules, tutorials and tips."
    },
    starGitHub: {
      type: String,
      default: "Nuxt is open source and the code is available on GitHub, feel free to star it, participate in discussions or dive into the source."
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.title}`,
      script: [],
      style: [
        {
          children: `@property --gradient-angle{syntax:'<angle>';inherits:false;initial-value:180deg}@keyframes gradient-rotate{0%{--gradient-angle:0deg}100%{--gradient-angle:360deg}}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,h2,h3{margin:0}h1,h2,h3{font-size:inherit;font-weight:inherit}img{border-style:solid;max-width:100%;height:auto}svg,img{display:block;vertical-align:middle}ul{list-style:none;margin:0;padding:0}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center text-sm sm:text-base" }, _attrs))} data-v-f886b4dd><div class="flex-1 flex flex-col gap-y-16 py-14" data-v-f886b4dd><div class="flex flex-col gap-y-4 items-center justify-center" data-v-f886b4dd><a href="https://nuxt.com" target="_blank" data-v-f886b4dd><svg width="61" height="42" viewBox="0 0 61 42" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f886b4dd><path d="M33.9869 41.2211H56.412C57.1243 41.2212 57.824 41.0336 58.4408 40.6772C59.0576 40.3209 59.5698 39.8083 59.9258 39.191C60.2818 38.5737 60.469 37.8736 60.4687 37.1609C60.4684 36.4482 60.2805 35.7482 59.924 35.1313L44.864 9.03129C44.508 8.41416 43.996 7.90168 43.3793 7.54537C42.7626 7.18906 42.063 7.00147 41.3509 7.00147C40.6387 7.00147 39.9391 7.18906 39.3225 7.54537C38.7058 7.90168 38.1937 8.41416 37.8377 9.03129L33.9869 15.7093L26.458 2.65061C26.1018 2.03354 25.5895 1.52113 24.9726 1.16489C24.3557 0.808639 23.656 0.621094 22.9438 0.621094C22.2316 0.621094 21.5318 0.808639 20.915 1.16489C20.2981 1.52113 19.7858 2.03354 19.4296 2.65061L0.689224 35.1313C0.332704 35.7482 0.144842 36.4482 0.144532 37.1609C0.144222 37.8736 0.331476 38.5737 0.687459 39.191C1.04344 39.8083 1.5556 40.3209 2.17243 40.6772C2.78925 41.0336 3.48899 41.2212 4.20126 41.2211H18.2778C23.8551 41.2211 27.9682 38.7699 30.7984 33.9876L37.6694 22.0813L41.3498 15.7093L52.3951 34.8492H37.6694L33.9869 41.2211ZM18.0484 34.8426L8.2247 34.8404L22.9504 9.32211L30.2979 22.0813L25.3784 30.6092C23.4989 33.7121 21.3637 34.8426 18.0484 34.8426Z" fill="#00DC82" data-v-f886b4dd></path></svg></a><h1 class="text-black dark:text-white text-4xl sm:text-5xl font-semibold text-center" data-v-f886b4dd>Welcome to Nuxt!</h1></div><div class="grid grid-cols-2 lg:grid-cols-10 gap-6 max-w-[960px] px-4" data-v-f886b4dd><div class="col-span-2 lg:col-span-10 relative get-started-gradient-border" data-v-f886b4dd><div class="get-started-gradient-left absolute left-0 inset-y-0 w-[20%] bg-gradient-to-r to-transparent from-green-400 rounded-xl z-1 transition-opacity duration-300" data-v-f886b4dd></div><div class="get-started-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-blue-400 rounded-xl z-1 transition-opacity duration-300" data-v-f886b4dd></div><div class="w-full absolute inset-x-0 flex justify-center -top-[58px]" data-v-f886b4dd><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22105%22%20height%3D%22116%22%20fill%3D%22none%22%3E%3Cg%20filter%3D%22url(%23a)%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%2318181B%22%20d%3D%22M17.203%2033.223%2046.9%2014.286a8.416%208.416%200%200%201%208.64-.18L87.38%2031.97c2.68%201.527%204.365%204.409%204.428%207.571l.191%2034.944c.063%203.151-1.491%206.104-4.091%207.776l-30.143%2019.383a8.417%208.417%200%200%201-8.75.251l-31.126-17.73C15.135%2082.595%2012.98%2079.6%2013%2076.35V40.828c.02-3.111%201.614-5.994%204.203-7.605Z%22%2F%3E%3Cpath%20stroke%3D%22url(%23b)%22%20stroke-width%3D%222%22%20d%3D%22M46.9%2014.286%2017.202%2033.223c-2.59%201.61-4.183%204.494-4.203%207.605V76.35m33.9-62.064a8.416%208.416%200%200%201%208.64-.18m-8.64.18a8.435%208.435%200%200%201%208.64-.18M13%2076.35c-.02%203.25%202.135%206.246%204.888%207.814M13%2076.35c-.02%203.233%202.136%206.247%204.888%207.814m0%200%2031.126%2017.731m0%200a8.417%208.417%200%200%200%208.75-.251m-8.75.251a8.438%208.438%200%200%200%208.75-.251m0%200%2030.143-19.383m0%200c2.598-1.67%204.154-4.627%204.091-7.776m-4.091%207.776c2.6-1.672%204.154-4.625%204.091-7.776m0%200-.19-34.944m0%200c-.064-3.162-1.75-6.044-4.43-7.571m4.43%207.571c-.063-3.147-1.75-6.045-4.43-7.571m0%200L55.54%2014.105%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22url(%23c)%22%20d%3D%22M48.669%2067.696c-.886%202.69-3.02%204.659-6.153%205.709-1.41.465-2.88.72-4.364.755a1.313%201.313%200%200%201-1.312-1.313c.035-1.484.29-2.954.754-4.364%201.05-3.133%203.02-5.266%205.71-6.152a1.312%201.312%200%201%201%20.836%202.477c-3.232%201.083-4.232%204.577-4.544%206.595%202.018-.311%205.512-1.312%206.595-4.544a1.313%201.313%200%200%201%202.477.837Zm16.39-12.486-1.46%201.477v10.057a2.657%202.657%200%200%201-.772%201.854l-5.316%205.3a2.559%202.559%200%200%201-1.853.77%202.413%202.413%200%200%201-.755-.115%202.624%202.624%200%200%201-1.821-2.001l-1.296-6.48-6.858-6.858-6.48-1.297a2.625%202.625%200%200%201-2.002-1.82%202.609%202.609%200%200%201%20.656-2.61l5.3-5.315a2.658%202.658%200%200%201%201.853-.771h10.057l1.477-1.46c4.692-4.692%209.499-4.561%2011.353-4.282a2.576%202.576%200%200%201%202.198%202.198c.28%201.854.41%206.661-4.282%2011.353Zm-26.103.132%206.185%201.23%206.546-6.546h-7.432l-5.299%205.316Zm8.482%202.657L53%2063.561l10.205-10.205c1.28-1.28%204.2-4.724%203.543-9.105-4.38-.656-7.826%202.264-9.105%203.544L47.438%2057.999Zm13.535%201.313-6.546%206.546%201.23%206.185%205.316-5.299v-7.432Z%22%20shape-rendering%3D%22geometricPrecision%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22b%22%20x1%3D%2257.994%22%20x2%3D%2292%22%20y1%3D%2258%22%20y2%3D%2258%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22c%22%20x1%3D%2255.197%22%20x2%3D%2269.453%22%20y1%3D%2258.107%22%20y2%3D%2258.107%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22a%22%20width%3D%22104.897%22%20height%3D%22115.897%22%20x%3D%22.052%22%20y%3D%22.052%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20result%3D%22hardAlpha%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%225.974%22%2F%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%3CfeColorMatrix%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%3CfeBlend%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2724_4091%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2724_4091%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E%0A" class="hidden dark:block" data-v-f886b4dd> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22105%22%20height%3D%22116%22%20fill%3D%22none%22%3E%3Cg%20filter%3D%22url(%23a)%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M17.203%2033.223%2046.9%2014.286a8.416%208.416%200%200%201%208.64-.18L87.38%2031.97c2.68%201.527%204.365%204.409%204.428%207.571l.191%2034.944c.063%203.151-1.491%206.104-4.091%207.776l-30.143%2019.383a8.417%208.417%200%200%201-8.75.251l-31.126-17.73C15.135%2082.595%2012.98%2079.6%2013%2076.35V40.828c.02-3.111%201.614-5.994%204.203-7.605Z%22%2F%3E%3Cpath%20stroke%3D%22url(%23b)%22%20stroke-width%3D%222%22%20d%3D%22M46.9%2014.286%2017.202%2033.223c-2.59%201.61-4.183%204.494-4.203%207.605V76.35m33.9-62.064a8.416%208.416%200%200%201%208.64-.18m-8.64.18a8.435%208.435%200%200%201%208.64-.18M13%2076.35c-.02%203.25%202.135%206.246%204.888%207.814M13%2076.35c-.02%203.233%202.136%206.247%204.888%207.814m0%200%2031.126%2017.731m0%200a8.417%208.417%200%200%200%208.75-.251m-8.75.251a8.438%208.438%200%200%200%208.75-.251m0%200%2030.143-19.383m0%200c2.598-1.67%204.154-4.627%204.091-7.776m-4.091%207.776c2.6-1.672%204.154-4.625%204.091-7.776m0%200-.19-34.944m0%200c-.064-3.162-1.75-6.044-4.43-7.571m4.43%207.571c-.063-3.147-1.75-6.045-4.43-7.571m0%200L55.54%2014.105%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M32%2037h42v42H32z%22%2F%3E%3Cpath%20fill%3D%22url(%23c)%22%20d%3D%22M48.669%2067.697c-.886%202.69-3.02%204.659-6.153%205.709-1.41.465-2.88.72-4.364.755a1.313%201.313%200%200%201-1.312-1.313c.035-1.484.29-2.954.754-4.364%201.05-3.134%203.02-5.266%205.71-6.152a1.314%201.314%200%201%201%20.836%202.477c-3.232%201.083-4.232%204.577-4.544%206.595%202.018-.311%205.512-1.312%206.595-4.544a1.313%201.313%200%200%201%202.477.837Zm16.39-12.486-1.46%201.477v10.057a2.657%202.657%200%200%201-.772%201.854l-5.316%205.3a2.559%202.559%200%200%201-1.853.77%202.413%202.413%200%200%201-.755-.115%202.626%202.626%200%200%201-1.821-2.001l-1.296-6.48-6.858-6.858-6.48-1.297a2.625%202.625%200%200%201-2.002-1.82%202.609%202.609%200%200%201%20.656-2.61l5.3-5.315a2.658%202.658%200%200%201%201.853-.771h10.057l1.477-1.46c4.692-4.692%209.499-4.561%2011.353-4.282a2.576%202.576%200%200%201%202.198%202.198c.28%201.854.41%206.661-4.282%2011.353Zm-26.103.132%206.185%201.23%206.546-6.546h-7.432l-5.299%205.316ZM47.438%2058%2053%2063.562l10.205-10.204c1.28-1.28%204.2-4.725%203.543-9.106-4.38-.656-7.826%202.264-9.105%203.544L47.438%2058Zm13.535%201.313-6.546%206.546%201.23%206.185%205.316-5.299v-7.432Z%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22b%22%20x1%3D%2257.994%22%20x2%3D%2292%22%20y1%3D%2258%22%20y2%3D%2258%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22c%22%20x1%3D%2255.197%22%20x2%3D%2269.453%22%20y1%3D%2258.108%22%20y2%3D%2258.108%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22a%22%20width%3D%22104.897%22%20height%3D%22115.897%22%20x%3D%22.052%22%20y%3D%22.052%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20result%3D%22hardAlpha%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%225.974%22%2F%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%3CfeColorMatrix%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%3CfeBlend%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2726_4054%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2726_4054%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E%0A" class="dark:hidden" data-v-f886b4dd></div><div class="flex flex-col rounded-xl items-center gap-y-4 pt-[58px] px-4 sm:px-28 pb-6 z-10" data-v-f886b4dd><h2 class="font-semibold text-2xl text-black dark:text-white" data-v-f886b4dd>Get started</h2><p class="mb-2 text-center" data-v-f886b4dd>Remove this welcome page by replacing <a class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-f886b4dd>&lt;NuxtWelcome /&gt;</a> in <a href="https://nuxt.com/docs/guide/directory-structure/app" target="_blank" rel="noopener" class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-f886b4dd>app.vue</a> with your own code.</p></div></div><div class="lg:min-h-min sm:min-h-[220px] md:min-h-[180px] col-span-2 sm:col-span-1 lg:col-span-6 text-black dark:text-white rounded-xl modules-container relative items-center justify-center border border-gray-200 dark:border-transparent hover:border-transparent" data-v-f886b4dd><div class="gradient-border gradient-border-modules gradient-border-rect" data-v-f886b4dd></div><div class="modules-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-yellow-400 rounded-xl z-1 transition-opacity duration-300" data-v-f886b4dd></div><a href="https://nuxt.com/modules" target="_blank" class="py-6 px-5 rounded-xl flex items-center justify-center gap-x-4 dark:border-none bg-white dark:bg-gray-900 sm:min-h-[220px] md:min-h-[180px] lg:min-h-min" data-v-f886b4dd><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2613_3853)%22%3E%0A%3Cpath%20d%3D%22M51.1519%2039.8821C51.154%2039.9844%2051.1527%2040.0863%2051.148%2040.1877C51.0782%2041.7091%2050.2566%2043.1165%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2613_3853)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2552H17.8193C16.7585%2042.2552%2015.7411%2041.8337%2014.9909%2041.0836C14.2408%2040.3334%2013.8193%2039.316%2013.8193%2038.2552V24.9218C13.8193%2023.861%2014.2408%2022.8435%2014.9909%2022.0934C15.7411%2021.3433%2016.7585%2020.9218%2017.8193%2020.9218H19.1527C19.1751%2019.792%2019.5558%2018.6985%2020.2399%2017.7991C20.924%2016.8996%2021.8761%2016.2407%2022.9589%2015.9173C24.0416%2015.594%2025.1992%2015.6229%2026.2644%2016C27.3297%2016.377%2028.2477%2017.0827%2028.886%2018.0152C29.4839%2018.8674%2029.8094%2019.8808%2029.8193%2020.9218H33.8193C34.173%2020.9218%2034.5121%2021.0623%2034.7621%2021.3124C35.0122%2021.5624%2035.1527%2021.9015%2035.1527%2022.2552V26.2552C36.2825%2026.2776%2037.376%2026.6583%2038.2754%2027.3424C39.1749%2028.0265%2039.8338%2028.9786%2040.1572%2030.0613C40.4805%2031.1441%2040.4516%2032.3016%2040.0745%2033.3669C39.6975%2034.4322%2038.9918%2035.3502%2038.0593%2035.9885C37.2071%2036.5864%2036.1937%2036.9118%2035.1527%2036.9218V36.9218V40.9218C35.1527%2041.2755%2035.0122%2041.6146%2034.7621%2041.8646C34.5121%2042.1147%2034.173%2042.2552%2033.8193%2042.2552ZM17.8193%2023.5885C17.4657%2023.5885%2017.1266%2023.729%2016.8765%2023.979C16.6265%2024.2291%2016.486%2024.5682%2016.486%2024.9218V38.2552C16.486%2038.6088%2016.6265%2038.9479%2016.8765%2039.198C17.1266%2039.448%2017.4657%2039.5885%2017.8193%2039.5885H32.486V35.3485C32.4849%2035.1347%2032.5351%2034.9238%2032.6326%2034.7335C32.7301%2034.5432%2032.8718%2034.3792%2033.046%2034.2552C33.2196%2034.1313%2033.4204%2034.051%2033.6316%2034.0208C33.8427%2033.9907%2034.058%2034.0116%2034.2593%2034.0818C34.6393%2034.2368%2035.0532%2034.2901%2035.46%2034.2363C35.8669%2034.1825%2036.2527%2034.0236%2036.5793%2033.7752C36.9045%2033.5769%2037.1834%2033.3113%2037.3973%2032.9962C37.6111%2032.6811%2037.7551%2032.3239%2037.8193%2031.9485C37.8708%2031.5699%2037.8402%2031.1847%2037.7298%2030.8189C37.6194%2030.4532%2037.4317%2030.1154%2037.1793%2029.8285C36.8381%2029.414%2036.3734%2029.1193%2035.8529%2028.9874C35.3325%2028.8555%2034.7835%2028.8932%2034.286%2029.0952C34.0846%2029.1654%2033.8694%2029.1863%2033.6582%2029.1562C33.4471%2029.126%2033.2463%2029.0457%2033.0727%2028.9218C32.8985%2028.7978%2032.7567%2028.6338%2032.6593%2028.4435C32.5618%2028.2532%2032.5115%2028.0423%2032.5127%2027.8285V23.5885H28.246C28.0269%2023.6009%2027.8081%2023.559%2027.609%2023.4666C27.4099%2023.3742%2027.2368%2023.234%2027.1049%2023.0586C26.973%2022.8832%2026.8864%2022.6779%2026.8529%2022.461C26.8194%2022.2441%2026.8399%2022.0222%2026.9127%2021.8152C27.0677%2021.4352%2027.1209%2021.0213%2027.0671%2020.6145C27.0134%2020.2076%2026.8544%2019.8218%2026.606%2019.4952C26.4091%2019.1607%2026.1395%2018.8749%2025.8172%2018.6588C25.4948%2018.4427%2025.128%2018.3019%2024.7438%2018.2468C24.3597%2018.1917%2023.9681%2018.2238%2023.598%2018.3407C23.2279%2018.4575%2022.8889%2018.6561%2022.606%2018.9218C22.3433%2019.1824%2022.1377%2019.4948%2022.0023%2019.8391C21.8668%2020.1834%2021.8045%2020.5521%2021.8193%2020.9218C21.8224%2021.2277%2021.8812%2021.5304%2021.9927%2021.8152C22.0632%2022.0168%2022.0842%2022.2324%2022.054%2022.4438C22.0237%2022.6553%2021.9432%2022.8564%2021.819%2023.0302C21.6949%2023.204%2021.5308%2023.3454%2021.3406%2023.4426C21.1504%2023.5397%2020.9396%2023.5898%2020.726%2023.5885H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2613_3853)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2613_3853%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2613_3853%22%20x1%3D%2213.7453%22%20y1%3D%2221.3705%22%20x2%3D%2240.3876%22%20y2%3D%2235.7024%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2613_3853%22%3E%0A%3Crect%20width%3D%2252%22%20height%3D%2257%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-color-light" data-v-f886b4dd> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5204%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7337)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2542H17.8193C16.7585%2042.2542%2015.7411%2041.8328%2014.9909%2041.0826C14.2408%2040.3325%2013.8193%2039.3151%2013.8193%2038.2542V24.9209C13.8193%2023.86%2014.2408%2022.8426%2014.9909%2022.0924C15.7411%2021.3423%2016.7585%2020.9209%2017.8193%2020.9209H19.1527C19.1751%2019.791%2019.5558%2018.6975%2020.2399%2017.7981C20.924%2016.8986%2021.8761%2016.2397%2022.9589%2015.9164C24.0416%2015.593%2025.1992%2015.6219%2026.2644%2015.999C27.3297%2016.376%2028.2477%2017.0817%2028.886%2018.0142C29.4839%2018.8664%2029.8094%2019.8799%2029.8193%2020.9209H33.8193C34.173%2020.9209%2034.5121%2021.0613%2034.7621%2021.3114C35.0122%2021.5614%2035.1527%2021.9006%2035.1527%2022.2542V26.2542C36.2825%2026.2766%2037.376%2026.6573%2038.2754%2027.3414C39.1749%2028.0255%2039.8338%2028.9776%2040.1572%2030.0604C40.4805%2031.1432%2040.4516%2032.3007%2040.0745%2033.366C39.6975%2034.4312%2038.9918%2035.3492%2038.0593%2035.9875C37.2071%2036.5854%2036.1937%2036.9109%2035.1527%2036.9209V40.9209C35.1527%2041.2745%2035.0122%2041.6136%2034.7621%2041.8637C34.5121%2042.1137%2034.173%2042.2542%2033.8193%2042.2542ZM17.8193%2023.5875C17.4657%2023.5875%2017.1266%2023.728%2016.8765%2023.978C16.6265%2024.2281%2016.486%2024.5672%2016.486%2024.9209V38.2542C16.486%2038.6078%2016.6265%2038.9469%2016.8765%2039.197C17.1266%2039.447%2017.4657%2039.5875%2017.8193%2039.5875H32.486V35.3475C32.4849%2035.1337%2032.5351%2034.9228%2032.6326%2034.7325C32.7301%2034.5422%2032.8718%2034.3782%2033.046%2034.2542C33.2196%2034.1304%2033.4205%2034.05%2033.6316%2034.0198C33.8427%2033.9897%2034.058%2034.0106%2034.2593%2034.0809C34.6393%2034.2359%2035.0532%2034.2891%2035.46%2034.2353C35.8669%2034.1816%2036.2527%2034.0226%2036.5793%2033.7742C36.9045%2033.5759%2037.1834%2033.3103%2037.3973%2032.9952C37.6111%2032.6801%2037.7551%2032.3229%2037.8193%2031.9475C37.8708%2031.5689%2037.8402%2031.1837%2037.7298%2030.8179C37.6194%2030.4522%2037.4317%2030.1144%2037.1793%2029.8275C36.8381%2029.413%2036.3734%2029.1183%2035.8529%2028.9864C35.3325%2028.8545%2034.7835%2028.8923%2034.286%2029.0942C34.0846%2029.1644%2033.8694%2029.1854%2033.6582%2029.1552C33.4471%2029.125%2033.2463%2029.0447%2033.0727%2028.9209C32.8985%2028.7969%2032.7567%2028.6328%2032.6593%2028.4425C32.5618%2028.2522%2032.5115%2028.0413%2032.5127%2027.8275V23.5875H28.246C28.0269%2023.5999%2027.8081%2023.5581%2027.609%2023.4656C27.4099%2023.3732%2027.2368%2023.233%2027.1049%2023.0576C26.973%2022.8822%2026.8864%2022.6769%2026.8529%2022.46C26.8194%2022.2431%2026.8399%2022.0213%2026.9127%2021.8142C27.0677%2021.4342%2027.1209%2021.0204%2027.0671%2020.6135C27.0134%2020.2066%2026.8544%2019.8208%2026.606%2019.4942C26.4091%2019.1597%2026.1395%2018.8739%2025.8172%2018.6578C25.4948%2018.4417%2025.128%2018.3009%2024.7438%2018.2458C24.3597%2018.1908%2023.9681%2018.2228%2023.598%2018.3397C23.2279%2018.4565%2022.8889%2018.6552%2022.606%2018.9209C22.3433%2019.1814%2022.1377%2019.4938%2022.0023%2019.8381C21.8668%2020.1824%2021.8045%2020.5512%2021.8193%2020.9209C21.8224%2021.2267%2021.8812%2021.5294%2021.9927%2021.8142C22.0632%2022.0158%2022.0842%2022.2314%2022.054%2022.4429C22.0237%2022.6543%2021.9432%2022.8554%2021.819%2023.0292C21.6949%2023.203%2021.5308%2023.3444%2021.3406%2023.4416C21.1504%2023.5388%2020.9396%2023.5888%2020.726%2023.5875H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2595_7337)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7337%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7337%22%20x1%3D%2213.7453%22%20y1%3D%2221.3695%22%20x2%3D%2240.3876%22%20y2%3D%2235.7015%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-color-dark" data-v-f886b4dd> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2691_4389)%22%3E%0A%3Cpath%20d%3D%22M51.1519%2039.8821C51.154%2039.9844%2051.1527%2040.0863%2051.148%2040.1877C51.0782%2041.7091%2050.2566%2043.1165%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2691_4389)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2542H17.8193C16.7585%2042.2542%2015.7411%2041.8328%2014.9909%2041.0826C14.2408%2040.3325%2013.8193%2039.3151%2013.8193%2038.2542V24.9209C13.8193%2023.86%2014.2408%2022.8426%2014.9909%2022.0924C15.7411%2021.3423%2016.7585%2020.9209%2017.8193%2020.9209H19.1527C19.1751%2019.791%2019.5558%2018.6975%2020.2399%2017.7981C20.924%2016.8986%2021.8761%2016.2397%2022.9589%2015.9164C24.0416%2015.593%2025.1992%2015.6219%2026.2644%2015.999C27.3297%2016.376%2028.2477%2017.0817%2028.886%2018.0142C29.4839%2018.8664%2029.8094%2019.8799%2029.8193%2020.9209H33.8193C34.173%2020.9209%2034.5121%2021.0613%2034.7621%2021.3114C35.0122%2021.5614%2035.1527%2021.9006%2035.1527%2022.2542V26.2542C36.2825%2026.2766%2037.376%2026.6573%2038.2754%2027.3414C39.1749%2028.0255%2039.8338%2028.9776%2040.1572%2030.0604C40.4805%2031.1432%2040.4516%2032.3007%2040.0745%2033.366C39.6975%2034.4312%2038.9918%2035.3492%2038.0593%2035.9875C37.2071%2036.5854%2036.1937%2036.9109%2035.1527%2036.9209V36.9209V40.9209C35.1527%2041.2745%2035.0122%2041.6136%2034.7621%2041.8637C34.5121%2042.1137%2034.173%2042.2542%2033.8193%2042.2542ZM17.8193%2023.5875C17.4657%2023.5875%2017.1266%2023.728%2016.8765%2023.978C16.6265%2024.2281%2016.486%2024.5672%2016.486%2024.9209V38.2542C16.486%2038.6078%2016.6265%2038.9469%2016.8765%2039.197C17.1266%2039.447%2017.4657%2039.5875%2017.8193%2039.5875H32.486V35.3475C32.4849%2035.1337%2032.5351%2034.9228%2032.6326%2034.7325C32.7301%2034.5422%2032.8718%2034.3782%2033.046%2034.2542C33.2196%2034.1304%2033.4204%2034.05%2033.6316%2034.0198C33.8427%2033.9897%2034.058%2034.0106%2034.2593%2034.0809C34.6393%2034.2359%2035.0532%2034.2891%2035.46%2034.2353C35.8669%2034.1816%2036.2527%2034.0226%2036.5793%2033.7742C36.9045%2033.5759%2037.1834%2033.3103%2037.3973%2032.9952C37.6111%2032.6801%2037.7551%2032.3229%2037.8193%2031.9475C37.8708%2031.5689%2037.8402%2031.1837%2037.7298%2030.8179C37.6194%2030.4522%2037.4317%2030.1144%2037.1793%2029.8275C36.8381%2029.413%2036.3734%2029.1183%2035.8529%2028.9864C35.3325%2028.8545%2034.7835%2028.8923%2034.286%2029.0942C34.0846%2029.1644%2033.8694%2029.1854%2033.6582%2029.1552C33.4471%2029.125%2033.2463%2029.0447%2033.0727%2028.9209C32.8985%2028.7969%2032.7567%2028.6328%2032.6593%2028.4425C32.5618%2028.2522%2032.5115%2028.0413%2032.5127%2027.8275V23.5875H28.246C28.0269%2023.5999%2027.8081%2023.5581%2027.609%2023.4656C27.4099%2023.3732%2027.2368%2023.233%2027.1049%2023.0576C26.973%2022.8822%2026.8864%2022.6769%2026.8529%2022.46C26.8194%2022.2431%2026.8399%2022.0213%2026.9127%2021.8142C27.0677%2021.4342%2027.1209%2021.0204%2027.0671%2020.6135C27.0134%2020.2066%2026.8544%2019.8208%2026.606%2019.4942C26.4091%2019.1597%2026.1395%2018.8739%2025.8172%2018.6578C25.4948%2018.4417%2025.128%2018.3009%2024.7438%2018.2458C24.3597%2018.1908%2023.9681%2018.2228%2023.598%2018.3397C23.2279%2018.4565%2022.8889%2018.6552%2022.606%2018.9209C22.3433%2019.1814%2022.1377%2019.4938%2022.0023%2019.8381C21.8668%2020.1824%2021.8045%2020.5512%2021.8193%2020.9209C21.8224%2021.2267%2021.8812%2021.5294%2021.9927%2021.8142C22.0632%2022.0158%2022.0842%2022.2314%2022.054%2022.4429C22.0237%2022.6543%2021.9432%2022.8554%2021.819%2023.0292C21.6949%2023.203%2021.5308%2023.3444%2021.3406%2023.4416C21.1504%2023.5388%2020.9396%2023.5888%2020.726%2023.5875H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2691_4389)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2691_4389%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2691_4389%22%20x1%3D%2213.7453%22%20y1%3D%2221.3695%22%20x2%3D%2240.3876%22%20y2%3D%2235.7015%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2691_4389%22%3E%0A%3Crect%20width%3D%2252%22%20height%3D%2257%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-light" data-v-f886b4dd> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5203%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7175)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2542H17.8193C16.7585%2042.2542%2015.7411%2041.8328%2014.9909%2041.0826C14.2408%2040.3325%2013.8193%2039.3151%2013.8193%2038.2542V24.9209C13.8193%2023.86%2014.2408%2022.8426%2014.9909%2022.0924C15.7411%2021.3423%2016.7585%2020.9209%2017.8193%2020.9209H19.1527C19.1751%2019.791%2019.5558%2018.6975%2020.2399%2017.7981C20.924%2016.8986%2021.8761%2016.2397%2022.9589%2015.9164C24.0416%2015.593%2025.1992%2015.6219%2026.2644%2015.999C27.3297%2016.376%2028.2477%2017.0817%2028.886%2018.0142C29.4839%2018.8664%2029.8094%2019.8799%2029.8193%2020.9209H33.8193C34.173%2020.9209%2034.5121%2021.0613%2034.7621%2021.3114C35.0122%2021.5614%2035.1527%2021.9006%2035.1527%2022.2542V26.2542C36.2825%2026.2766%2037.376%2026.6573%2038.2754%2027.3414C39.1749%2028.0255%2039.8338%2028.9776%2040.1572%2030.0604C40.4805%2031.1432%2040.4516%2032.3007%2040.0745%2033.366C39.6975%2034.4312%2038.9918%2035.3492%2038.0593%2035.9875C37.2071%2036.5854%2036.1937%2036.9109%2035.1527%2036.9209V40.9209C35.1527%2041.2745%2035.0122%2041.6136%2034.7621%2041.8637C34.5121%2042.1137%2034.173%2042.2542%2033.8193%2042.2542ZM17.8193%2023.5875C17.4657%2023.5875%2017.1266%2023.728%2016.8765%2023.978C16.6265%2024.2281%2016.486%2024.5672%2016.486%2024.9209V38.2542C16.486%2038.6078%2016.6265%2038.9469%2016.8765%2039.197C17.1266%2039.447%2017.4657%2039.5875%2017.8193%2039.5875H32.486V35.3475C32.4849%2035.1337%2032.5351%2034.9228%2032.6326%2034.7325C32.7301%2034.5422%2032.8718%2034.3782%2033.046%2034.2542C33.2196%2034.1304%2033.4205%2034.05%2033.6316%2034.0198C33.8427%2033.9897%2034.058%2034.0106%2034.2593%2034.0809C34.6393%2034.2359%2035.0532%2034.2891%2035.46%2034.2353C35.8669%2034.1816%2036.2527%2034.0226%2036.5793%2033.7742C36.9045%2033.5759%2037.1834%2033.3103%2037.3973%2032.9952C37.6111%2032.6801%2037.7551%2032.3229%2037.8193%2031.9475C37.8708%2031.5689%2037.8402%2031.1837%2037.7298%2030.8179C37.6194%2030.4522%2037.4317%2030.1144%2037.1793%2029.8275C36.8381%2029.413%2036.3734%2029.1183%2035.8529%2028.9864C35.3325%2028.8545%2034.7835%2028.8923%2034.286%2029.0942C34.0846%2029.1644%2033.8694%2029.1854%2033.6582%2029.1552C33.4471%2029.125%2033.2463%2029.0447%2033.0727%2028.9209C32.8985%2028.7969%2032.7567%2028.6328%2032.6593%2028.4425C32.5618%2028.2522%2032.5115%2028.0413%2032.5127%2027.8275V23.5875H28.246C28.0269%2023.5999%2027.8081%2023.5581%2027.609%2023.4656C27.4099%2023.3732%2027.2368%2023.233%2027.1049%2023.0576C26.973%2022.8822%2026.8864%2022.6769%2026.8529%2022.46C26.8194%2022.2431%2026.8399%2022.0213%2026.9127%2021.8142C27.0677%2021.4342%2027.1209%2021.0204%2027.0671%2020.6135C27.0134%2020.2066%2026.8544%2019.8208%2026.606%2019.4942C26.4091%2019.1597%2026.1395%2018.8739%2025.8172%2018.6578C25.4948%2018.4417%2025.128%2018.3009%2024.7438%2018.2458C24.3597%2018.1908%2023.9681%2018.2228%2023.598%2018.3397C23.2279%2018.4565%2022.8889%2018.6552%2022.606%2018.9209C22.3433%2019.1814%2022.1377%2019.4938%2022.0023%2019.8381C21.8668%2020.1824%2021.8045%2020.5512%2021.8193%2020.9209C21.8224%2021.2267%2021.8812%2021.5294%2021.9927%2021.8142C22.0632%2022.0158%2022.0842%2022.2314%2022.054%2022.4429C22.0237%2022.6543%2021.9432%2022.8554%2021.819%2023.0292C21.6949%2023.203%2021.5308%2023.3444%2021.3406%2023.4416C21.1504%2023.5388%2020.9396%2023.5888%2020.726%2023.5875H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2595_7175)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7175%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7175%22%20x1%3D%2213.7453%22%20y1%3D%2221.3695%22%20x2%3D%2240.3876%22%20y2%3D%2235.7015%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-dark" data-v-f886b4dd><div class="flex flex-col space-y text-black dark:text-white" data-v-f886b4dd><h3 class="font-semibold text-xl" data-v-f886b4dd>Modules</h3><p class="text-gray-700 dark:text-gray-300" data-v-f886b4dd>Discover our list of modules to supercharge your Nuxt project. Created by the Nuxt team and community.</p></div></a></div><div class="row-span-2 col-span-2 order-last lg:order-none lg:col-span-4 text-black dark:text-white documentation-container rounded-xl relative items-center justify-center border border-gray-200 dark:border-transparent hover:border-transparent" data-v-f886b4dd><div class="gradient-border gradient-border-square gradient-border-documentation" data-v-f886b4dd></div><a href="https://nuxt.com/docs" target="_blank" class="rounded-xl flex lg:flex-col items-center justify-center gap-y-4 bg-white dark:bg-gray-900" data-v-f886b4dd><div class="py-6 lg:py-7 px-5 rounded-xl flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-y-2" data-v-f886b4dd><div class="flex flex-col space-y text-black dark:text-white" data-v-f886b4dd><h3 class="font-semibold text-xl" data-v-f886b4dd>Documentation</h3><p class="text-gray-700 dark:text-gray-300" data-v-f886b4dd>We highly recommend you take a look at the Nuxt documentation to level up.</p></div><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2687_3947)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2687_3947)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M222.151%20104.393C222.22%20107.764%20220.487%20110.944%20217.571%20112.75C217.567%20112.753%20217.563%20112.755%20217.559%20112.758L176.733%20137.956C173.748%20139.798%20169.96%20139.907%20166.89%20138.229L124.733%20115.18C121.469%20113.395%20119.131%20110.069%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C164.101%2027.8047%20164.101%2027.8047%20164.101%2027.8047C164.106%2027.8022%20164.11%2027.7997%20164.114%2027.7972C167.078%2026.0385%20170.793%2025.9632%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8377%20216.938%2050.8387%20216.94%2050.8397C219.935%2052.4801%20221.817%2055.5878%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393Z%22%20stroke%3D%22url(%23paint0_linear_2687_3947)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7997%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158V96.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646V97.7646Z%22%20fill%3D%22url(%23paint1_linear_2687_3947)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2687_3947)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2687_3947)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2687_3947)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2687_3947)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2687_3947%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2687_3947%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2687_3947%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2687_3947%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2687_3947%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2687_3947%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2687_3947%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2687_3947%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2687_3947%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2687_3947%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-color-light h-32 sm:h-34" data-v-f886b4dd> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2595_7273)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2595_7273)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22%2318181B%22%2F%3E%0A%3Cpath%20d%3D%22M123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C167.083%2026.0291%20170.786%2025.9592%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8376%20216.938%2050.8386%20216.939%2050.8395C219.938%2052.4814%20221.817%2055.5694%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393C222.221%20107.772%20220.485%20110.952%20217.559%20112.758L176.733%20137.956C173.732%20139.808%20169.963%20139.909%20166.89%20138.229L124.733%20115.18C121.465%20113.393%20119.131%20110.089%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282Z%22%20stroke%3D%22url(%23paint0_linear_2595_7273)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7998%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646Z%22%20fill%3D%22url(%23paint1_linear_2595_7273)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2595_7273)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2595_7273)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2595_7273)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2595_7273)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2595_7273%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2595_7273%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2595_7273%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7273%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7273%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2595_7273%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2595_7273%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2595_7273%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2595_7273%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2595_7273%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-color-dark h-32 sm:h-34" data-v-f886b4dd> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2687_3977)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2687_3977)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M222.151%20104.393C222.22%20107.764%20220.487%20110.944%20217.571%20112.75C217.567%20112.753%20217.563%20112.755%20217.559%20112.758L176.733%20137.956C173.748%20139.798%20169.96%20139.907%20166.89%20138.229L124.733%20115.18C121.469%20113.395%20119.131%20110.069%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C164.101%2027.8047%20164.101%2027.8047%20164.101%2027.8047C164.106%2027.8022%20164.11%2027.7997%20164.114%2027.7972C167.078%2026.0385%20170.793%2025.9632%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8377%20216.938%2050.8387%20216.94%2050.8397C219.935%2052.4801%20221.817%2055.5878%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393Z%22%20stroke%3D%22url(%23paint0_linear_2687_3977)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7997%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158V96.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646V97.7646Z%22%20fill%3D%22url(%23paint1_linear_2687_3977)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2687_3977)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2687_3977)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2687_3977)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2687_3977)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2687_3977%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.831373%200%200%200%200%200.831373%200%200%200%200%200.847059%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2687_3977%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2687_3977%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2687_3977%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%233F3F46%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2687_3977%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%233F3F46%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2687_3977%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2687_3977%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2687_3977%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2687_3977%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2687_3977%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-light h-32 sm:h-34" data-v-f886b4dd> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2595_7193)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2595_7193)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22%2318181B%22%2F%3E%0A%3Cpath%20d%3D%22M123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C167.083%2026.0291%20170.786%2025.9592%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8376%20216.938%2050.8386%20216.939%2050.8395C219.938%2052.4814%20221.817%2055.5694%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393C222.221%20107.772%20220.485%20110.952%20217.559%20112.758L176.733%20137.956C173.732%20139.808%20169.963%20139.909%20166.89%20138.229L124.733%20115.18C121.465%20113.393%20119.131%20110.089%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282Z%22%20stroke%3D%22url(%23paint0_linear_2595_7193)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7998%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646Z%22%20fill%3D%22url(%23paint1_linear_2595_7193)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2595_7193)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2595_7193)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2595_7193)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2595_7193)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2595_7193%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2595_7193%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2595_7193%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7193%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7193%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2595_7193%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2595_7193%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2595_7193%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2595_7193%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2595_7193%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-dark h-32 sm:h-34" data-v-f886b4dd></div></a></div><div class="lg:min-h-min sm:min-h-[220px] md:min-h-[180px] col-span-2 sm:col-span-1 lg:col-span-6 text-black dark:text-white rounded-xl examples-container relative items-center justify-center border border-gray-200 dark:border-transparent hover:border-transparent" data-v-f886b4dd><div class="gradient-border gradient-border-examples gradient-border-rect" data-v-f886b4dd></div><div class="examples-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-blue-400 rounded-xl z-1 transition-opacity duration-300" data-v-f886b4dd></div><a href="https://nuxt.com/docs/examples" target="_blank" class="py-6 px-5 rounded-xl flex items-center justify-center gap-x-4 bg-white dark:bg-gray-900 sm:min-h-[220px] md:min-h-[180px] lg:min-h-min" data-v-f886b4dd><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M49.1971%2043.7595C49.1113%2043.8209%2049.0231%2043.8796%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1834%2041.4138%2050.4491%2042.8635%2049.1971%2043.7595Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2613_3941)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209V17.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2613_3941)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2613_3941%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2613_3941%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-color-light" data-v-f886b4dd> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5203%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7426)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2595_7426)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7426%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7426%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-color-dark" data-v-f886b4dd> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M49.1971%2043.7595C49.1113%2043.8209%2049.0231%2043.8796%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1834%2041.4138%2050.4491%2042.8635%2049.1971%2043.7595Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2691_4397)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209V17.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2691_4397)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2691_4397%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2691_4397%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-light" data-v-f886b4dd> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5203%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7182)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2595_7182)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7182%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7182%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-dark" data-v-f886b4dd><div class="flex flex-col space-y text-black dark:text-white" data-v-f886b4dd><h3 class="font-semibold text-xl" data-v-f886b4dd>Examples</h3><p class="text-gray-700 dark:text-gray-300" data-v-f886b4dd>Explore different way of using Nuxt features and get inspired with our list of examples.</p></div></a></div></div></div><footer class="relative border-t bg-white dark:bg-black border-gray-200 dark:border-gray-900 w-full h-[70px] flex items-center" data-v-f886b4dd><div class="absolute inset-x-0 flex items-center justify-center -top-3" data-v-f886b4dd><a href="https://nuxt.com" target="_blank" data-v-f886b4dd><svg width="70" height="20" viewBox="0 0 70 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f886b4dd><ellipse cx="34.6528" cy="10.4209" rx="34.5" ry="9.5" fill="white" class="dark:hidden" data-v-f886b4dd></ellipse><ellipse cx="34.6528" cy="10.4209" rx="34.5" ry="9.5" fill="black" class="hidden dark:block" data-v-f886b4dd></ellipse><path d="M36.0605 15.9209H42.6256C42.8341 15.9209 43.0389 15.8655 43.2195 15.7602C43.4001 15.6548 43.55 15.5033 43.6543 15.3209C43.7585 15.1384 43.8133 14.9315 43.8132 14.7208C43.8131 14.5102 43.7581 14.3033 43.6537 14.1209L39.2448 6.40667C39.1406 6.22427 38.9907 6.0728 38.8101 5.96748C38.6296 5.86217 38.4248 5.80672 38.2163 5.80672C38.0078 5.80672 37.803 5.86217 37.6225 5.96748C37.4419 6.0728 37.292 6.22427 37.1878 6.40667L36.0605 8.38048L33.8563 4.52076C33.752 4.33837 33.602 4.18692 33.4214 4.08163C33.2409 3.97633 33.036 3.9209 32.8275 3.9209C32.619 3.9209 32.4141 3.97633 32.2335 4.08163C32.053 4.18692 31.903 4.33837 31.7987 4.52076L26.3123 14.1209C26.2079 14.3033 26.1529 14.5102 26.1528 14.7208C26.1527 14.9315 26.2076 15.1384 26.3118 15.3209C26.416 15.5033 26.5659 15.6548 26.7465 15.7602C26.9271 15.8655 27.1319 15.9209 27.3405 15.9209H31.4615C33.0943 15.9209 34.2984 15.1964 35.127 13.7829L37.1385 10.2638L38.216 8.38048L41.4496 14.0376H37.1385L36.0605 15.9209ZM31.3943 14.0356L28.5184 14.035L32.8294 6.49263L34.9805 10.2638L33.5402 12.7844C32.99 13.7015 32.3649 14.0356 31.3943 14.0356Z" fill="#00DC82" data-v-f886b4dd></path></svg></a></div><div class="mx-auto sm:px-6 lg:px-8 px-4 w-full" data-v-f886b4dd><div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-between" data-v-f886b4dd><div class="flex flex-col-reverse items-center gap-3 sm:flex-row" data-v-f886b4dd><span class="text-sm text-gray-700 dark:text-gray-300" data-v-f886b4dd>© 2016-${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Nuxt - MIT License</span></div><ul class="flex items-center justify-end gap-3" data-v-f886b4dd><li data-v-f886b4dd><a href="https://chat.nuxt.dev" target="_blank" class="focus-visible:ring-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" data-v-f886b4dd><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f886b4dd><path d="M13.3705 1.07322C13.3663 1.06497 13.3594 1.05851 13.351 1.05499C12.3785 0.599487 11.3522 0.274675 10.2978 0.0886873C10.2882 0.0868693 10.2783 0.0881809 10.2695 0.0924354C10.2607 0.0966899 10.2534 0.103671 10.2487 0.112385C10.109 0.371315 9.98212 0.637279 9.86863 0.909263C8.73205 0.733138 7.57595 0.733138 6.43938 0.909263C6.32514 0.636589 6.19624 0.370559 6.05328 0.112385C6.04838 0.10386 6.04107 0.0970401 6.03232 0.0928132C6.02356 0.0885863 6.01377 0.0871486 6.0042 0.0886873C4.9497 0.274285 3.92333 0.599121 2.95092 1.05502C2.9426 1.05862 2.93558 1.06477 2.93082 1.07262C0.986197 4.03716 0.453491 6.92881 0.714819 9.78465C0.715554 9.79165 0.71766 9.79843 0.721013 9.80458C0.724365 9.81073 0.728896 9.81613 0.734334 9.82046C1.86667 10.6763 3.1332 11.3296 4.47988 11.7525C4.48937 11.7554 4.49949 11.7552 4.5089 11.7521C4.51831 11.7489 4.52655 11.7429 4.53251 11.7349C4.82175 11.3331 5.07803 10.9077 5.29876 10.4629C5.3018 10.4568 5.30353 10.4501 5.30384 10.4433C5.30416 10.4365 5.30305 10.4296 5.3006 10.4233C5.29814 10.4169 5.29439 10.4111 5.2896 10.4064C5.2848 10.4016 5.27906 10.3979 5.27277 10.3955C4.86862 10.2377 4.47736 10.0474 4.10266 9.82645C4.09586 9.82236 4.09014 9.81663 4.08602 9.80976C4.0819 9.80288 4.0795 9.79508 4.07903 9.78703C4.07856 9.77899 4.08004 9.77095 4.08334 9.76362C4.08664 9.7563 4.09166 9.74992 4.09794 9.74504C4.17657 9.68491 4.25524 9.62236 4.33032 9.55918C4.33699 9.55358 4.34506 9.54998 4.35362 9.5488C4.36218 9.54762 4.3709 9.54891 4.37879 9.55252C6.83362 10.6962 9.4913 10.6962 11.9171 9.55252C11.925 9.54868 11.9338 9.54721 11.9425 9.54829C11.9512 9.54936 11.9594 9.55293 11.9662 9.55858C12.0413 9.62176 12.1199 9.68491 12.1991 9.74504C12.2054 9.74987 12.2105 9.75621 12.2138 9.7635C12.2172 9.7708 12.2187 9.77882 12.2183 9.78687C12.2179 9.79492 12.2156 9.80274 12.2115 9.80964C12.2074 9.81654 12.2018 9.82232 12.195 9.82645C11.8211 10.0492 11.4295 10.2394 11.0243 10.3949C11.018 10.3974 11.0123 10.4012 11.0075 10.406C11.0028 10.4109 10.9991 10.4167 10.9967 10.4231C10.9943 10.4295 10.9932 10.4364 10.9936 10.4433C10.9939 10.4501 10.9957 10.4568 10.9988 10.4629C11.2232 10.9052 11.4791 11.3301 11.7645 11.7342C11.7703 11.7425 11.7785 11.7487 11.7879 11.7519C11.7974 11.7552 11.8076 11.7554 11.8171 11.7524C13.1662 11.331 14.4349 10.6776 15.5687 9.82046C15.5742 9.81635 15.5788 9.81108 15.5822 9.80501C15.5855 9.79893 15.5876 9.7922 15.5882 9.78525C15.9011 6.4836 15.0644 3.61565 13.3705 1.07322ZM5.66537 8.04574C4.92629 8.04574 4.31731 7.35337 4.31731 6.50305C4.31731 5.65274 4.91448 4.96032 5.66537 4.96032C6.42213 4.96032 7.02522 5.65875 7.01341 6.503C7.01341 7.35337 6.41622 8.04574 5.66537 8.04574ZM10.6496 8.04574C9.91051 8.04574 9.30153 7.35337 9.30153 6.50305C9.30153 5.65274 9.8987 4.96032 10.6496 4.96032C11.4064 4.96032 12.0094 5.65875 11.9976 6.503C11.9976 7.35337 11.4064 8.04574 10.6496 8.04574Z" fill="currentColor" data-v-f886b4dd></path></svg></a></li><li data-v-f886b4dd><a href="https://twitter.nuxt.dev" target="_blank" class="focus-visible:ring-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" data-v-f886b4dd><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f886b4dd><path d="M17.486 1.75441C16.8596 2.02615 16.1972 2.20579 15.5193 2.28774C16.2345 1.86051 16.7704 1.18839 17.0277 0.396073C16.3556 0.796126 15.62 1.07799 14.8527 1.22941C14.3398 0.673216 13.6568 0.302987 12.9108 0.176783C12.1649 0.0505786 11.3981 0.175539 10.7308 0.532064C10.0635 0.88859 9.53345 1.45652 9.2237 2.14677C8.91396 2.83702 8.84208 3.61056 9.01934 4.34607C7.66053 4.27734 6.33137 3.92353 5.11822 3.30762C3.90506 2.69171 2.83504 1.82748 1.97767 0.771073C1.67695 1.29621 1.51894 1.89093 1.51934 2.49607C1.51827 3.05806 1.65618 3.61159 1.9208 4.10738C2.18541 4.60317 2.56852 5.02583 3.036 5.33774C2.49265 5.32296 1.96091 5.17716 1.486 4.91274V4.95441C1.49008 5.74182 1.766 6.50365 2.2671 7.11104C2.7682 7.71844 3.46372 8.13411 4.236 8.28774C3.93872 8.37821 3.63007 8.42591 3.31934 8.42941C3.10424 8.42689 2.88969 8.40739 2.67767 8.37107C2.89759 9.04842 3.32319 9.64036 3.89523 10.0645C4.46728 10.4887 5.15732 10.724 5.86934 10.7377C4.66701 11.6838 3.18257 12.2001 1.65267 12.2044C1.37412 12.2053 1.09578 12.1886 0.819336 12.1544C2.38136 13.163 4.20168 13.6983 6.061 13.6961C7.34408 13.7094 8.61695 13.4669 9.80527 12.9828C10.9936 12.4987 12.0735 11.7826 12.982 10.8765C13.8905 9.97033 14.6093 8.89223 15.0965 7.70516C15.5836 6.51809 15.8294 5.24585 15.8193 3.96274C15.8193 3.82107 15.8193 3.67107 15.8193 3.52107C16.4732 3.03342 17.0372 2.43559 17.486 1.75441Z" fill="currentColor" data-v-f886b4dd></path></svg></a></li><li data-v-f886b4dd><a href="https://github.nuxt.dev" target="_blank" class="focus-visible:ring-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" data-v-f886b4dd><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f886b4dd><path d="M9.15269 0.792969C7.17392 0.793051 5.25974 1.49723 3.75266 2.77951C2.24558 4.06179 1.24394 5.83849 0.92697 7.7917C0.609997 9.74492 0.998373 11.7472 2.02261 13.4403C3.04684 15.1333 4.6401 16.4067 6.51729 17.0325C6.93396 17.1055 7.09021 16.8555 7.09021 16.6367C7.09021 16.4388 7.07978 15.7825 7.07978 15.0846C4.98603 15.47 4.44436 14.5742 4.27769 14.1055C4.09276 13.6496 3.79959 13.2456 3.42353 12.9284C3.13186 12.7721 2.71519 12.3867 3.4131 12.3763C3.67959 12.4052 3.93518 12.498 4.15822 12.6467C4.38125 12.7953 4.56516 12.9956 4.69436 13.2305C4.80833 13.4352 4.96159 13.6155 5.14535 13.7609C5.32911 13.9063 5.53975 14.014 5.76522 14.0779C5.99068 14.1418 6.22653 14.1605 6.45926 14.1331C6.69198 14.1056 6.917 14.0325 7.12143 13.918C7.1575 13.4943 7.34631 13.0982 7.65269 12.8034C5.79853 12.5951 3.86103 11.8763 3.86103 8.68883C3.84931 7.86062 4.15493 7.05931 4.71519 6.44924C4.46043 5.72943 4.49024 4.93948 4.79853 4.24091C4.79853 4.24091 5.49642 4.02215 7.09019 5.09508C8.45376 4.72005 9.89328 4.72005 11.2569 5.09508C12.8506 4.01174 13.5485 4.24091 13.5485 4.24091C13.8569 4.93947 13.8867 5.72943 13.6319 6.44924C14.1938 7.05826 14.4997 7.86027 14.486 8.68883C14.486 11.8867 12.5381 12.5951 10.6839 12.8034C10.8828 13.005 11.036 13.247 11.133 13.513C11.2301 13.779 11.2688 14.0628 11.2464 14.3451C11.2464 15.4597 11.236 16.3555 11.236 16.6367C11.236 16.8555 11.3923 17.1159 11.8089 17.0326C13.6828 16.4016 15.2715 15.1253 16.2914 13.4313C17.3112 11.7374 17.6959 9.73616 17.3768 7.78483C17.0576 5.83351 16.0553 4.05911 14.5489 2.77839C13.0425 1.49768 11.1299 0.793998 9.15269 0.792969Z" fill="currentColor" data-v-f886b4dd></path></svg></a></li></ul></div></div></footer></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-templates@1.3.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f886b4dd"]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    (_error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = /* @__PURE__ */ defineAsyncComponent(() => import("./_nuxt/error-404-5f3910cd.js").then((r) => r.default || r));
    const _Error = /* @__PURE__ */ defineAsyncComponent(() => import("./_nuxt/error-500-bcd1efe6.js").then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@3.8.0_vite@4.5.0/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = _sfc_main$1;
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import("./_nuxt/island-renderer-166ef1c1.js").then((r) => r.default || r));
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@3.8.0_vite@4.5.0/node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
export {
  _export_sfc as _,
  parseQuery as a,
  withoutTrailingSlash as b,
  createError as c,
  useHead as d,
  entry$1 as default,
  dr as e,
  wn as f,
  hasProtocol as h,
  navigateTo as n,
  parseURL as p,
  useRouter as u,
  withTrailingSlash as w
};
//# sourceMappingURL=server.mjs.map
