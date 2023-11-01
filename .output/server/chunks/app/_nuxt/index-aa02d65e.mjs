import { useSSRContext, defineComponent, onMounted, onUnmounted, ref, unref, computed, provide, inject, watch, h, Fragment, cloneVNode, watchEffect, toRef, mergeProps, isRef, useAttrs, toValue as toValue$1, resolveComponent, withCtx, createVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { m as mergeConfig, l as appConfig, _ as _export_sfc, t as twJoin, i as createTailwindMerge, j as getDefaultConfig, k as useAppConfig } from '../server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../../nitro/node-server.mjs';
import 'fs';
import 'path';
import 'unhead';
import 'vue-router';

var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
function omit(object, keysToOmit) {
  const result = { ...object };
  for (const key of keysToOmit) {
    delete result[key];
  }
  return result;
}
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-r from-green-600 via-yellow-600 to-orange-600 min-h-25 grid content-center grid-flow-col" }, _attrs))}><div class="mx-5 my-auto"><h3 class="text-4xl text-white">Rawat Paints &amp; Electricals</h3></div><div class="ml-auto mr-5 my-3 grid grid-flow-row"><div class="justify-self-center"><span class="text-2xl">Mukesh Rawat: <b><a href="tel:6377136015">6377136015</a></b></span></div><div class="grid grid-flow-col"><img src="https://cdn.iconscout.com/icon/free/png-512/free-whatsapp-43-189795.png?f=webp&amp;w=256" alt="" class="h-7 w-7 my-auto"><span class="text-2xl ml-3"><b>: <a href="tel:9461105921">9461105921</a> / <a href="tel:9530354256">9530354256</a></b></span></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WebHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.name }, _attrs))}></span>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.9.0_vue@3.3.4_webpack@5.89.0/node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
function u(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u), t2;
}
var N = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N || {}), S$1 = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S$1 || {});
function H({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i }) {
  var a2;
  let n2 = j(o2, e2), l = Object.assign(i, { props: n2 });
  if (r2 || t2 & 2 && n2.static)
    return y(l);
  if (t2 & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u(d2, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l);
}
function y({ props: r2, attrs: t2, slots: e2, slot: o2, name: i }) {
  var m, h$1;
  let { as: n2, ...l } = T(r2, ["unmount", "static"]), a2 = (m = e2.default) == null ? void 0 : m.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c = [];
    for (let [p2, f2] of Object.entries(o2))
      typeof f2 == "boolean" && (u2 = true), f2 === true && c.push(p2);
    u2 && (d2["data-headlessui-state"] = c.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b$2(a2 != null ? a2 : []), Object.keys(l).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c] = a2 != null ? a2 : [];
      if (!v(u2) || c.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t2)).map((s) => s.trim()).filter((s, g, R) => R.indexOf(s) === g).sort((s, g) => s.localeCompare(g)).map((s) => `  - ${s}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s) => `  - ${s}`).join(`
`)].join(`
`));
      let p2 = j((h$1 = u2.props) != null ? h$1 : {}, l), f2 = cloneVNode(u2, p2);
      for (let s in p2)
        s.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s] = p2[s]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h(n2, Object.assign({}, l, d2), { default: () => a2 });
}
function b$2(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b$2(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e2 = {};
  for (let i of r2)
    for (let n2 in i)
      n2.startsWith("on") && typeof i[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i[n2])) : t2[n2] = i[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i) => [i, void 0])));
  for (let i in e2)
    Object.assign(t2, { [i](n2, ...l) {
      let a2 = e2[i];
      for (let d2 of a2) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d2(n2, ...l);
      }
    } });
  return t2;
}
function K$1(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2)
    t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function T(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2)
    o2 in e2 && delete e2[o2];
  return e2;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
let e = 0;
function n() {
  return ++e;
}
function t() {
  return n();
}
var o$1 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$1 || {});
function o(n2) {
  var l;
  return n2 == null || n2.value == null ? null : (l = n2.value.$el) != null ? l : n2.value;
}
function r(t2, e2) {
  if (t2)
    return t2;
  let n2 = e2 != null ? e2 : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button")
    return "button";
}
function b$1(t2, e2) {
  let n2 = ref(r(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var o$12;
    n2.value || o(e2) && o(e2) instanceof HTMLButtonElement && !((o$12 = o(e2)) != null && o$12.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
var a$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(a$1 || {});
let f = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(r2, { slots: t2, attrs: d2 }) {
  return () => {
    let { features: e2, ...o2 } = r2, n2 = { "aria-hidden": (e2 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return H({ ourProps: n2, theirProps: o2, slot: {}, attrs: d2, slots: t2, name: "Hidden" });
  };
} });
function p$1(i) {
  var t2, r2;
  let s = (t2 = i == null ? void 0 : i.form) != null ? t2 : i.closest("form");
  if (s) {
    for (let n2 of s.elements)
      if (n2 !== i && (n2.tagName === "INPUT" && n2.type === "submit" || n2.tagName === "BUTTON" && n2.type === "submit" || n2.nodeName === "INPUT" && n2.type === "image")) {
        n2.click();
        return;
      }
    (r2 = s.requestSubmit) == null || r2.call(s);
  }
}
function d$1(u2, e2, r2) {
  let i = ref(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i.value), function(t2) {
    return f2.value || (i.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
let p = Symbol("DescriptionContext");
function b() {
  let t2 = inject(p, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function M({ slot: t2 = ref({}), name: i = "Description", props: o2 = {} } = {}) {
  let e2 = ref([]);
  function s(n2) {
    return e2.value.push(n2), () => {
      let r2 = e2.value.indexOf(n2);
      r2 !== -1 && e2.value.splice(r2, 1);
    };
  }
  return provide(p, { register: s, slot: t2, name: i, props: o2 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${t()}` } }, setup(t2, { attrs: i, slots: o2 }) {
  let e2 = b();
  return onMounted(() => onUnmounted(e2.register(t2.id))), () => {
    let { name: s = "Description", slot: n2 = ref({}), props: r2 = {} } = e2, { id: d2, ...l } = t2, c = { ...Object.entries(r2).reduce((f2, [a2, g]) => Object.assign(f2, { [a2]: unref(g) }), {}), id: d2 };
    return H({ ourProps: c, theirProps: l, slot: n2.value, attrs: i, slots: o2, name: s });
  };
} });
let a = Symbol("LabelContext");
function d() {
  let t2 = inject(a, null);
  if (t2 === null) {
    let n2 = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n2, d), n2;
  }
  return t2;
}
function K({ slot: t2 = {}, name: n2 = "Label", props: i = {} } = {}) {
  let e2 = ref([]);
  function l(r2) {
    return e2.value.push(r2), () => {
      let o2 = e2.value.indexOf(r2);
      o2 !== -1 && e2.value.splice(o2, 1);
    };
  }
  return provide(a, { register: l, slot: t2, name: n2, props: i }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-label-${t()}` } }, setup(t2, { slots: n2, attrs: i }) {
  let e2 = d();
  return onMounted(() => onUnmounted(e2.register(t2.id))), () => {
    let { name: l = "Label", slot: r2 = {}, props: o2 = {} } = e2, { id: p2, passive: c, ...u2 } = t2, s = { ...Object.entries(o2).reduce((f2, [b2, g]) => Object.assign(f2, { [b2]: unref(g) }), {}), id: p2 };
    return c && (delete s.onClick, delete s.htmlFor, delete u2.onClick), H({ ourProps: s, theirProps: u2, slot: r2, attrs: i, slots: n2, name: l });
  };
} });
let S = Symbol("GroupContext");
defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l, { slots: p2, attrs: a2 }) {
  let o2 = ref(null), f2 = K({ name: "SwitchLabel", props: { htmlFor: computed(() => {
    var r2;
    return (r2 = o2.value) == null ? void 0 : r2.id;
  }), onClick(r2) {
    o2.value && (r2.currentTarget.tagName === "LABEL" && r2.preventDefault(), o2.value.click(), o2.value.focus({ preventScroll: true }));
  } } }), t2 = M({ name: "SwitchDescription" });
  return provide(S, { switchRef: o2, labelledby: f2, describedby: t2 }), () => H({ theirProps: l, ourProps: {}, slot: {}, slots: p2, attrs: a2, name: "SwitchGroup" });
} });
let ue = defineComponent({ name: "Switch", emits: { "update:modelValue": (l) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, form: { type: String, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: () => `headlessui-switch-${t()}` } }, inheritAttrs: false, setup(l, { emit: p2, attrs: a2, slots: o$2, expose: f$1 }) {
  let t2 = inject(S, null), [i, r2] = d$1(computed(() => l.modelValue), (e2) => p2("update:modelValue", e2), computed(() => l.defaultChecked));
  function s() {
    r2(!i.value);
  }
  let w = ref(null), u2 = t2 === null ? w : t2.switchRef, g = b$1(computed(() => ({ as: l.as, type: a2.type })), u2);
  f$1({ el: u2, $el: u2 });
  function k(e2) {
    e2.preventDefault(), s();
  }
  function C(e2) {
    e2.key === o$1.Space ? (e2.preventDefault(), s()) : e2.key === o$1.Enter && p$1(e2.currentTarget);
  }
  function E(e2) {
    e2.preventDefault();
  }
  let c = computed(() => {
    var e2, n2;
    return (n2 = (e2 = o(u2)) == null ? void 0 : e2.closest) == null ? void 0 : n2.call(e2, "form");
  });
  return onMounted(() => {
    watch([c], () => {
      if (!c.value || l.defaultChecked === void 0)
        return;
      function e2() {
        r2(l.defaultChecked);
      }
      return c.value.addEventListener("reset", e2), () => {
        var n2;
        (n2 = c.value) == null || n2.removeEventListener("reset", e2);
      };
    }, { immediate: true });
  }), () => {
    let { id: e2, name: n2, value: L, form: D, ...R } = l, K2 = { checked: i.value }, x = { id: e2, ref: u2, role: "switch", type: g.value, tabIndex: 0, "aria-checked": i.value, "aria-labelledby": t2 == null ? void 0 : t2.labelledby.value, "aria-describedby": t2 == null ? void 0 : t2.describedby.value, onClick: k, onKeyup: C, onKeypress: E };
    return h(Fragment, [n2 != null && i.value != null ? h(f, K$1({ features: a$1.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: i.value, form: D, name: n2, value: L })) : null, H({ ourProps: x, theirProps: { ...a2, ...T(R, ["modelValue", "defaultChecked"]) }, slot: K2, attrs: a2, slots: o$2, name: "Switch" })]);
  };
} });
const useUI = (key, $ui, $config, $wrapperClass) => {
  const $attrs = useAttrs();
  const appConfig2 = useAppConfig();
  const ui = computed(() => {
    var _a;
    const _ui = toValue$1($ui);
    const _config = toValue$1($config);
    const _wrapperClass = toValue$1($wrapperClass);
    return mergeConfig(
      (_ui == null ? void 0 : _ui.strategy) || ((_a = appConfig2.ui) == null ? void 0 : _a.strategy),
      _wrapperClass ? { wrapper: _wrapperClass } : {},
      _ui || {},
      {},
      _config || {}
    );
  });
  const attrs = computed(() => omit($attrs, ["class"]));
  return {
    ui,
    attrs
  };
};
function toValue(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}
const useFormGroup = (inputProps, config2) => {
  var _a;
  const formBus = inject("form-events", void 0);
  const formGroup = inject("form-group", void 0);
  if (formGroup) {
    formGroup.inputId.value = (_a = inputProps == null ? void 0 : inputProps.id) != null ? _a : formGroup == null ? void 0 : formGroup.inputId.value;
  }
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup == null ? void 0 : formGroup.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup == null ? void 0 : formGroup.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value) {
      emitFormEvent("input", formGroup == null ? void 0 : formGroup.name.value);
    }
  }, 300);
  return {
    inputId: computed(() => {
      var _a2;
      return (_a2 = inputProps.id) != null ? _a2 : formGroup == null ? void 0 : formGroup.inputId.value;
    }),
    name: computed(() => {
      var _a2;
      return (_a2 = inputProps == null ? void 0 : inputProps.name) != null ? _a2 : formGroup == null ? void 0 : formGroup.name.value;
    }),
    size: computed(() => {
      var _a3, _b;
      var _a2;
      return (_b = (_a3 = inputProps == null ? void 0 : inputProps.size) != null ? _a3 : formGroup == null ? void 0 : formGroup.size.value) != null ? _b : (_a2 = config2 == null ? void 0 : config2.default) == null ? void 0 : _a2.size;
    }),
    color: computed(() => {
      var _a2;
      return ((_a2 = formGroup == null ? void 0 : formGroup.error) == null ? void 0 : _a2.value) ? "red" : inputProps == null ? void 0 : inputProps.color;
    }),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};
const toggle = {
  base: "relative inline-flex h-5 w-9 flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
  rounded: "rounded-full",
  ring: "focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
  active: "bg-{color}-500 dark:bg-{color}-400",
  inactive: "bg-gray-200 dark:bg-gray-700",
  container: {
    base: "pointer-events-none relative inline-block h-4 w-4 rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200",
    active: "translate-x-4 rtl:-translate-x-4",
    inactive: "translate-x-0 rtl:-translate-x-0"
  },
  icon: {
    base: "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",
    active: "opacity-100 ease-in duration-200",
    inactive: "opacity-0 ease-out duration-100",
    on: "h-3 w-3 text-{color}-500 dark:text-{color}-400",
    off: "h-3 w-3 text-gray-400 dark:text-gray-500"
  },
  default: {
    onIcon: null,
    offIcon: null,
    color: "primary"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.toggle, toggle);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  components: {
    HSwitch: ue,
    UIcon: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onIcon: {
      type: String,
      default: () => config.default.onIcon
    },
    offIcon: {
      type: String,
      default: () => config.default.offIcon
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: void 0
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("toggle", toRef(props, "ui"), config);
    const { emitFormChange, color, inputId, name } = useFormGroup(props);
    const active = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
        emitFormChange();
      }
    });
    const switchClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.ring.replaceAll("{color}", color.value),
        (active.value ? ui.value.active : ui.value.inactive).replaceAll("{color}", color.value)
      ), props.class);
    });
    const onIconClass = computed(() => {
      return twJoin(
        ui.value.icon.on.replaceAll("{color}", color.value)
      );
    });
    const offIconClass = computed(() => {
      return twJoin(
        ui.value.icon.off.replaceAll("{color}", color.value)
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      active,
      switchClass,
      onIconClass,
      offIconClass
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HSwitch = resolveComponent("HSwitch");
  const _component_UIcon = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_HSwitch, mergeProps({
    id: _ctx.inputId,
    modelValue: _ctx.active,
    "onUpdate:modelValue": ($event) => _ctx.active = $event,
    name: _ctx.name,
    disabled: _ctx.disabled,
    class: _ctx.switchClass
  }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="${ssrRenderClass([_ctx.active ? _ctx.ui.container.active : _ctx.ui.container.inactive, _ctx.ui.container.base])}"${_scopeId}>`);
        if (_ctx.onIcon) {
          _push2(`<span class="${ssrRenderClass([_ctx.active ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.onIcon,
            class: _ctx.onIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.offIcon) {
          _push2(`<span class="${ssrRenderClass([_ctx.active ? _ctx.ui.icon.inactive : _ctx.ui.icon.active, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.offIcon,
            class: _ctx.offIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</span>`);
      } else {
        return [
          createVNode("span", {
            class: [_ctx.active ? _ctx.ui.container.active : _ctx.ui.container.inactive, _ctx.ui.container.base]
          }, [
            _ctx.onIcon ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.active ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.onIcon,
                class: _ctx.onIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true),
            _ctx.offIcon ? (openBlock(), createBlock("span", {
              key: 1,
              class: [_ctx.active ? _ctx.ui.icon.inactive : _ctx.ui.icon.active, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.offIcon,
                class: _ctx.offIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true)
          ], 2)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.9.0_vue@3.3.4_webpack@5.89.0/node_modules/@nuxt/ui/dist/runtime/components/forms/Toggle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LangToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const isHindiEnabled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UToggle = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-10 max-w-fit mx-auto flex flex-grow-col gap-3" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_UToggle, {
        modelValue: unref(isHindiEnabled),
        "onUpdate:modelValue": ($event) => isRef(isHindiEnabled) ? isHindiEnabled.value = $event : null
      }, null, _parent));
      _push(`</div><div><span>\u0939\u093F\u0928\u094D\u0926\u0940</span></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LangToggle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "product",
  __ssrInlineRender: true,
  props: {
    img: {},
    title: {},
    titleHindi: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-96 bg-gradient-to-r from-green-600 via-yellow-600 to-orange-600 flex justify-center flex-col" }, _attrs))}><div class="h-64 m-2 flex justify-center"><img${ssrRenderAttr("src", _ctx.img)} class="max-w-full max-h-full"></div><div class="h-36 bg-gradient-to-r from-red-400 via-violet-300 to-red-400 flex justify-center items-center"><div class="bg-yellow-300 text-black rounded-lg p-2"><span class="text-3xl">${ssrInterpolate(_ctx.title)}</span><span class="text-3xl">${ssrInterpolate(_ctx.titleHindi)}</span></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "products",
  __ssrInlineRender: true,
  setup(__props) {
    const products = ref([
      {
        img: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-uno-asian-paints.png",
        title: "Distemper",
        titleHindi: ""
      },
      {
        img: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-sparc-advanced-packshot-asian-paints.png",
        title: "Tractor Sparc Advanced",
        titleHindi: ""
      },
      {
        img: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/exterior-walls-ace-sparc-advanced-asian-paints.png",
        title: "Ace Sparc Advanced",
        titleHindi: ""
      },
      {
        img: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/exterior-walls-ace-shyne-asian-paints.png",
        title: "Ace Shyne",
        titleHindi: ""
      },
      {
        img: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/metals-trucare-red-oxide-metal-primer-asian-paints.png",
        title: "Red Oxide Metal Primer",
        titleHindi: ""
      },
      {
        img: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/exterior-walls-ace-exterior-emulsion-asian-paints.png",
        title: "Ace Exterior Emulsion",
        titleHindi: ""
      },
      {
        img: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/exterior-walls-apex-shyne-dust-proof-packshot-asian-paints.png",
        title: "Apex Shyne",
        titleHindi: ""
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Product = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap gap-5 p-3 justify-center" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(products), (product) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Product, {
          img: product.img,
          title: product.title,
          titleHindi: product.titleHindi
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/products.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_WebHeader = __nuxt_component_0$2;
  const _component_LangToggle = _sfc_main$3;
  const _component_Products = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
  _push(ssrRenderComponent(_component_WebHeader, null, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_LangToggle, null, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_Products, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-aa02d65e.mjs.map
