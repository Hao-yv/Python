import { i as identity, s as split_css_unit } from './Index-2cec2c56.js';
import { g as get_fetchable_url_or_file } from './index-5550136d.js';

/*
Adapted from https://github.com/mattdesl
Distributed under MIT License https://github.com/mattdesl/eases/blob/master/LICENSE.md
*/

/**
 * https://svelte.dev/docs/svelte-easing
 * @param {number} t
 * @returns {number}
 */
function cubicOut(t) {
	const f = t - 1.0;
	return f * f * f + 1.0;
}

/**
 * Animates the opacity of an element from 0 to the current opacity for `in` transitions and from the current opacity to 0 for `out` transitions.
 *
 * https://svelte.dev/docs/svelte-transition#fade
 * @param {Element} node
 * @param {import('./public').FadeParams} [params]
 * @returns {import('./public').TransitionConfig}
 */
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
	const o = +getComputedStyle(node).opacity;
	return {
		delay,
		duration,
		easing,
		css: (t) => `opacity: ${t * o}`
	};
}

/**
 * Animates the x and y positions and the opacity of an element. `in` transitions animate from the provided values, passed as parameters to the element's default values. `out` transitions animate from the element's default values to the provided values.
 *
 * https://svelte.dev/docs/svelte-transition#fly
 * @param {Element} node
 * @param {import('./public').FlyParams} [params]
 * @returns {import('./public').TransitionConfig}
 */
function fly(
	node,
	{ delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}
) {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const transform = style.transform === 'none' ? '' : style.transform;
	const od = target_opacity * (1 - opacity);
	const [xValue, xUnit] = split_css_unit(x);
	const [yValue, yUnit] = split_css_unit(y);
	return {
		delay,
		duration,
		easing,
		css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, ${(1 - t) * yValue}${yUnit});
			opacity: ${target_opacity - od * u}`
	};
}

const Block_svelte_svelte_type_style_lang = '';

/* home/runner/work/gradio/gradio/js/atoms/src/Block.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent: SvelteComponent$1,
	assign,
	create_slot: create_slot$1,
	detach: detach$1,
	element: element$1,
	get_all_dirty_from_scope: get_all_dirty_from_scope$1,
	get_slot_changes: get_slot_changes$1,
	get_spread_update,
	init: init$1,
	insert: insert$1,
	safe_not_equal: safe_not_equal$1,
	set_dynamic_element_data,
	set_style: set_style$1,
	toggle_class: toggle_class$1,
	transition_in: transition_in$1,
	transition_out: transition_out$1,
	update_slot_base: update_slot_base$1
} = window.__gradio__svelte__internal;
function create_dynamic_element(ctx) {
	let svelte_element;
	let svelte_element_class_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[17].default;
	const default_slot = create_slot$1(default_slot_template, ctx, /*$$scope*/ ctx[16], null);

	let svelte_element_levels = [
		{ "data-testid": /*test_id*/ ctx[7] },
		{ id: /*elem_id*/ ctx[2] },
		{
			class: svelte_element_class_value = "block " + /*elem_classes*/ ctx[3].join(' ') + " svelte-90oupt"
		}
	];

	let svelte_element_data = {};

	for (let i = 0; i < svelte_element_levels.length; i += 1) {
		svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
	}

	return {
		c() {
			svelte_element = element$1(/*tag*/ ctx[14]);
			if (default_slot) default_slot.c();
			set_dynamic_element_data(/*tag*/ ctx[14])(svelte_element, svelte_element_data);
			toggle_class$1(svelte_element, "hidden", /*visible*/ ctx[10] === false);
			toggle_class$1(svelte_element, "padded", /*padding*/ ctx[6]);
			toggle_class$1(svelte_element, "border_focus", /*border_mode*/ ctx[5] === "focus");
			toggle_class$1(svelte_element, "hide-container", !/*explicit_call*/ ctx[8] && !/*container*/ ctx[9]);

			set_style$1(svelte_element, "height", typeof /*height*/ ctx[0] === "number"
			? /*height*/ ctx[0] + "px"
			: undefined);

			set_style$1(svelte_element, "width", typeof /*width*/ ctx[1] === "number"
			? `calc(min(${/*width*/ ctx[1]}px, 100%))`
			: undefined);

			set_style$1(svelte_element, "border-style", /*variant*/ ctx[4]);
			set_style$1(svelte_element, "overflow", /*allow_overflow*/ ctx[11] ? "visible" : "hidden");
			set_style$1(svelte_element, "flex-grow", /*scale*/ ctx[12]);
			set_style$1(svelte_element, "min-width", `calc(min(${/*min_width*/ ctx[13]}px, 100%))`);
			set_style$1(svelte_element, "border-width", `var(--block-border-width)`);
		},
		m(target, anchor) {
			insert$1(target, svelte_element, anchor);

			if (default_slot) {
				default_slot.m(svelte_element, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 65536)) {
					update_slot_base$1(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[16],
						!current
						? get_all_dirty_from_scope$1(/*$$scope*/ ctx[16])
						: get_slot_changes$1(default_slot_template, /*$$scope*/ ctx[16], dirty, null),
						null
					);
				}
			}

			set_dynamic_element_data(/*tag*/ ctx[14])(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [
				(!current || dirty & /*test_id*/ 128) && { "data-testid": /*test_id*/ ctx[7] },
				(!current || dirty & /*elem_id*/ 4) && { id: /*elem_id*/ ctx[2] },
				(!current || dirty & /*elem_classes*/ 8 && svelte_element_class_value !== (svelte_element_class_value = "block " + /*elem_classes*/ ctx[3].join(' ') + " svelte-90oupt")) && { class: svelte_element_class_value }
			]));

			toggle_class$1(svelte_element, "hidden", /*visible*/ ctx[10] === false);
			toggle_class$1(svelte_element, "padded", /*padding*/ ctx[6]);
			toggle_class$1(svelte_element, "border_focus", /*border_mode*/ ctx[5] === "focus");
			toggle_class$1(svelte_element, "hide-container", !/*explicit_call*/ ctx[8] && !/*container*/ ctx[9]);

			if (dirty & /*height*/ 1) {
				set_style$1(svelte_element, "height", typeof /*height*/ ctx[0] === "number"
				? /*height*/ ctx[0] + "px"
				: undefined);
			}

			if (dirty & /*width*/ 2) {
				set_style$1(svelte_element, "width", typeof /*width*/ ctx[1] === "number"
				? `calc(min(${/*width*/ ctx[1]}px, 100%))`
				: undefined);
			}

			if (dirty & /*variant*/ 16) {
				set_style$1(svelte_element, "border-style", /*variant*/ ctx[4]);
			}

			if (dirty & /*allow_overflow*/ 2048) {
				set_style$1(svelte_element, "overflow", /*allow_overflow*/ ctx[11] ? "visible" : "hidden");
			}

			if (dirty & /*scale*/ 4096) {
				set_style$1(svelte_element, "flex-grow", /*scale*/ ctx[12]);
			}

			if (dirty & /*min_width*/ 8192) {
				set_style$1(svelte_element, "min-width", `calc(min(${/*min_width*/ ctx[13]}px, 100%))`);
			}
		},
		i(local) {
			if (current) return;
			transition_in$1(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out$1(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach$1(svelte_element);
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment$1(ctx) {
	let current;
	let svelte_element = /*tag*/ ctx[14] && create_dynamic_element(ctx);

	return {
		c() {
			if (svelte_element) svelte_element.c();
		},
		m(target, anchor) {
			if (svelte_element) svelte_element.m(target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*tag*/ ctx[14]) {
				svelte_element.p(ctx, dirty);
			}
		},
		i(local) {
			if (current) return;
			transition_in$1(svelte_element, local);
			current = true;
		},
		o(local) {
			transition_out$1(svelte_element, local);
			current = false;
		},
		d(detaching) {
			if (svelte_element) svelte_element.d(detaching);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { height = undefined } = $$props;
	let { width = undefined } = $$props;
	let { elem_id = "" } = $$props;
	let { elem_classes = [] } = $$props;
	let { variant = "solid" } = $$props;
	let { border_mode = "base" } = $$props;
	let { padding = true } = $$props;
	let { type = "normal" } = $$props;
	let { test_id = undefined } = $$props;
	let { explicit_call = false } = $$props;
	let { container = true } = $$props;
	let { visible = true } = $$props;
	let { allow_overflow = true } = $$props;
	let { scale = null } = $$props;
	let { min_width = 0 } = $$props;
	let tag = type === "fieldset" ? "fieldset" : "div";

	$$self.$$set = $$props => {
		if ('height' in $$props) $$invalidate(0, height = $$props.height);
		if ('width' in $$props) $$invalidate(1, width = $$props.width);
		if ('elem_id' in $$props) $$invalidate(2, elem_id = $$props.elem_id);
		if ('elem_classes' in $$props) $$invalidate(3, elem_classes = $$props.elem_classes);
		if ('variant' in $$props) $$invalidate(4, variant = $$props.variant);
		if ('border_mode' in $$props) $$invalidate(5, border_mode = $$props.border_mode);
		if ('padding' in $$props) $$invalidate(6, padding = $$props.padding);
		if ('type' in $$props) $$invalidate(15, type = $$props.type);
		if ('test_id' in $$props) $$invalidate(7, test_id = $$props.test_id);
		if ('explicit_call' in $$props) $$invalidate(8, explicit_call = $$props.explicit_call);
		if ('container' in $$props) $$invalidate(9, container = $$props.container);
		if ('visible' in $$props) $$invalidate(10, visible = $$props.visible);
		if ('allow_overflow' in $$props) $$invalidate(11, allow_overflow = $$props.allow_overflow);
		if ('scale' in $$props) $$invalidate(12, scale = $$props.scale);
		if ('min_width' in $$props) $$invalidate(13, min_width = $$props.min_width);
		if ('$$scope' in $$props) $$invalidate(16, $$scope = $$props.$$scope);
	};

	return [
		height,
		width,
		elem_id,
		elem_classes,
		variant,
		border_mode,
		padding,
		test_id,
		explicit_call,
		container,
		visible,
		allow_overflow,
		scale,
		min_width,
		tag,
		type,
		$$scope,
		slots
	];
}

class Block extends SvelteComponent$1 {
	constructor(options) {
		super();

		init$1(this, options, instance$1, create_fragment$1, safe_not_equal$1, {
			height: 0,
			width: 1,
			elem_id: 2,
			elem_classes: 3,
			variant: 4,
			border_mode: 5,
			padding: 6,
			type: 15,
			test_id: 7,
			explicit_call: 8,
			container: 9,
			visible: 10,
			allow_overflow: 11,
			scale: 12,
			min_width: 13
		});
	}
}

const Info_svelte_svelte_type_style_lang = '';

const BlockTitle_svelte_svelte_type_style_lang = '';

const BlockLabel_svelte_svelte_type_style_lang = '';

const IconButton_svelte_svelte_type_style_lang = '';

const Empty_svelte_svelte_type_style_lang = '';

const ordered_colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "teal",
  "orange",
  "cyan",
  "lime",
  "pink"
];
const color_values = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
];
const tw_colors = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
const colors = color_values.reduce(
  (acc, { color, primary, secondary }) => ({
    ...acc,
    [color]: {
      primary: tw_colors[color][primary],
      secondary: tw_colors[color][secondary]
    }
  }),
  {}
);

const UploadText_svelte_svelte_type_style_lang = '';

const Toolbar_svelte_svelte_type_style_lang = '';

const SelectSource_svelte_svelte_type_style_lang = '';

const Button_svelte_svelte_type_style_lang = '';

/* home/runner/work/gradio/gradio/js/button/shared/Button.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
	append,
	attr,
	bubble,
	check_outros,
	create_slot,
	detach,
	element,
	empty,
	get_all_dirty_from_scope,
	get_slot_changes,
	group_outros,
	init,
	insert,
	listen,
	safe_not_equal,
	set_style,
	space,
	src_url_equal,
	toggle_class,
	transition_in,
	transition_out,
	update_slot_base
} = window.__gradio__svelte__internal;
function create_else_block(ctx) {
	let button;
	let t;
	let button_class_value;
	let current;
	let mounted;
	let dispose;
	let if_block = /*icon*/ ctx[7] && create_if_block_2(ctx);
	const default_slot_template = /*#slots*/ ctx[15].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[14], null);

	return {
		c() {
			button = element("button");
			if (if_block) if_block.c();
			t = space();
			if (default_slot) default_slot.c();
			attr(button, "class", button_class_value = "" + (/*size*/ ctx[4] + " " + /*variant*/ ctx[3] + " " + /*elem_classes*/ ctx[1].join(' ') + " svelte-cmf5ev"));
			attr(button, "id", /*elem_id*/ ctx[0]);
			button.disabled = /*disabled*/ ctx[8];
			toggle_class(button, "hidden", !/*visible*/ ctx[2]);
			set_style(button, "flex-grow", /*scale*/ ctx[9]);
			set_style(button, "width", /*scale*/ ctx[9] === 0 ? "fit-content" : null);

			set_style(button, "min-width", typeof /*min_width*/ ctx[10] === "number"
			? `calc(min(${/*min_width*/ ctx[10]}px, 100%))`
			: null);
		},
		m(target, anchor) {
			insert(target, button, anchor);
			if (if_block) if_block.m(button, null);
			append(button, t);

			if (default_slot) {
				default_slot.m(button, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen(button, "click", /*click_handler*/ ctx[16]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (/*icon*/ ctx[7]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(button, t);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 16384)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[14],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[14])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[14], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*size, variant, elem_classes*/ 26 && button_class_value !== (button_class_value = "" + (/*size*/ ctx[4] + " " + /*variant*/ ctx[3] + " " + /*elem_classes*/ ctx[1].join(' ') + " svelte-cmf5ev"))) {
				attr(button, "class", button_class_value);
			}

			if (!current || dirty & /*elem_id*/ 1) {
				attr(button, "id", /*elem_id*/ ctx[0]);
			}

			if (!current || dirty & /*disabled*/ 256) {
				button.disabled = /*disabled*/ ctx[8];
			}

			if (!current || dirty & /*size, variant, elem_classes, visible*/ 30) {
				toggle_class(button, "hidden", !/*visible*/ ctx[2]);
			}

			if (dirty & /*scale*/ 512) {
				set_style(button, "flex-grow", /*scale*/ ctx[9]);
			}

			if (dirty & /*scale*/ 512) {
				set_style(button, "width", /*scale*/ ctx[9] === 0 ? "fit-content" : null);
			}

			if (dirty & /*min_width*/ 1024) {
				set_style(button, "min-width", typeof /*min_width*/ ctx[10] === "number"
				? `calc(min(${/*min_width*/ ctx[10]}px, 100%))`
				: null);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(button);
			}

			if (if_block) if_block.d();
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

// (18:0) {#if link && link.length > 0}
function create_if_block(ctx) {
	let a;
	let t;
	let a_class_value;
	let current;
	let if_block = /*icon*/ ctx[7] && create_if_block_1(ctx);
	const default_slot_template = /*#slots*/ ctx[15].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[14], null);

	return {
		c() {
			a = element("a");
			if (if_block) if_block.c();
			t = space();
			if (default_slot) default_slot.c();
			attr(a, "href", /*link*/ ctx[6]);
			attr(a, "rel", "noopener noreferrer");
			attr(a, "aria-disabled", /*disabled*/ ctx[8]);
			attr(a, "class", a_class_value = "" + (/*size*/ ctx[4] + " " + /*variant*/ ctx[3] + " " + /*elem_classes*/ ctx[1].join(' ') + " svelte-cmf5ev"));
			attr(a, "id", /*elem_id*/ ctx[0]);
			toggle_class(a, "hidden", !/*visible*/ ctx[2]);
			toggle_class(a, "disabled", /*disabled*/ ctx[8]);
			set_style(a, "flex-grow", /*scale*/ ctx[9]);
			set_style(a, "pointer-events", /*disabled*/ ctx[8] ? "none" : null);
			set_style(a, "width", /*scale*/ ctx[9] === 0 ? "fit-content" : null);

			set_style(a, "min-width", typeof /*min_width*/ ctx[10] === "number"
			? `calc(min(${/*min_width*/ ctx[10]}px, 100%))`
			: null);
		},
		m(target, anchor) {
			insert(target, a, anchor);
			if (if_block) if_block.m(a, null);
			append(a, t);

			if (default_slot) {
				default_slot.m(a, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (/*icon*/ ctx[7]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(a, t);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 16384)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[14],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[14])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[14], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*link*/ 64) {
				attr(a, "href", /*link*/ ctx[6]);
			}

			if (!current || dirty & /*disabled*/ 256) {
				attr(a, "aria-disabled", /*disabled*/ ctx[8]);
			}

			if (!current || dirty & /*size, variant, elem_classes*/ 26 && a_class_value !== (a_class_value = "" + (/*size*/ ctx[4] + " " + /*variant*/ ctx[3] + " " + /*elem_classes*/ ctx[1].join(' ') + " svelte-cmf5ev"))) {
				attr(a, "class", a_class_value);
			}

			if (!current || dirty & /*elem_id*/ 1) {
				attr(a, "id", /*elem_id*/ ctx[0]);
			}

			if (!current || dirty & /*size, variant, elem_classes, visible*/ 30) {
				toggle_class(a, "hidden", !/*visible*/ ctx[2]);
			}

			if (!current || dirty & /*size, variant, elem_classes, disabled*/ 282) {
				toggle_class(a, "disabled", /*disabled*/ ctx[8]);
			}

			if (dirty & /*scale*/ 512) {
				set_style(a, "flex-grow", /*scale*/ ctx[9]);
			}

			if (dirty & /*disabled*/ 256) {
				set_style(a, "pointer-events", /*disabled*/ ctx[8] ? "none" : null);
			}

			if (dirty & /*scale*/ 512) {
				set_style(a, "width", /*scale*/ ctx[9] === 0 ? "fit-content" : null);
			}

			if (dirty & /*min_width*/ 1024) {
				set_style(a, "min-width", typeof /*min_width*/ ctx[10] === "number"
				? `calc(min(${/*min_width*/ ctx[10]}px, 100%))`
				: null);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(a);
			}

			if (if_block) if_block.d();
			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (52:2) {#if icon}
function create_if_block_2(ctx) {
	let img;
	let img_src_value;
	let img_alt_value;

	return {
		c() {
			img = element("img");
			attr(img, "class", "button-icon svelte-cmf5ev");
			if (!src_url_equal(img.src, img_src_value = /*icon_path*/ ctx[11])) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = `${/*value*/ ctx[5]} icon`);
		},
		m(target, anchor) {
			insert(target, img, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*icon_path*/ 2048 && !src_url_equal(img.src, img_src_value = /*icon_path*/ ctx[11])) {
				attr(img, "src", img_src_value);
			}

			if (dirty & /*value*/ 32 && img_alt_value !== (img_alt_value = `${/*value*/ ctx[5]} icon`)) {
				attr(img, "alt", img_alt_value);
			}
		},
		d(detaching) {
			if (detaching) {
				detach(img);
			}
		}
	};
}

// (34:2) {#if icon}
function create_if_block_1(ctx) {
	let img;
	let img_src_value;
	let img_alt_value;

	return {
		c() {
			img = element("img");
			attr(img, "class", "button-icon svelte-cmf5ev");
			if (!src_url_equal(img.src, img_src_value = /*icon_path*/ ctx[11])) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = `${/*value*/ ctx[5]} icon`);
		},
		m(target, anchor) {
			insert(target, img, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*icon_path*/ 2048 && !src_url_equal(img.src, img_src_value = /*icon_path*/ ctx[11])) {
				attr(img, "src", img_src_value);
			}

			if (dirty & /*value*/ 32 && img_alt_value !== (img_alt_value = `${/*value*/ ctx[5]} icon`)) {
				attr(img, "alt", img_alt_value);
			}
		},
		d(detaching) {
			if (detaching) {
				detach(img);
			}
		}
	};
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*link*/ ctx[6] && /*link*/ ctx[6].length > 0) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(if_block_anchor);
			}

			if_blocks[current_block_type_index].d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let icon_path;
	let { $$slots: slots = {}, $$scope } = $$props;
	let { elem_id = "" } = $$props;
	let { elem_classes = [] } = $$props;
	let { visible = true } = $$props;
	let { variant = "secondary" } = $$props;
	let { size = "lg" } = $$props;
	let { value = null } = $$props;
	let { link = null } = $$props;
	let { icon = null } = $$props;
	let { disabled = false } = $$props;
	let { scale = null } = $$props;
	let { min_width = undefined } = $$props;
	let { root = "" } = $$props;
	let { proxy_url = null } = $$props;

	function click_handler(event) {
		bubble.call(this, $$self, event);
	}

	$$self.$$set = $$props => {
		if ('elem_id' in $$props) $$invalidate(0, elem_id = $$props.elem_id);
		if ('elem_classes' in $$props) $$invalidate(1, elem_classes = $$props.elem_classes);
		if ('visible' in $$props) $$invalidate(2, visible = $$props.visible);
		if ('variant' in $$props) $$invalidate(3, variant = $$props.variant);
		if ('size' in $$props) $$invalidate(4, size = $$props.size);
		if ('value' in $$props) $$invalidate(5, value = $$props.value);
		if ('link' in $$props) $$invalidate(6, link = $$props.link);
		if ('icon' in $$props) $$invalidate(7, icon = $$props.icon);
		if ('disabled' in $$props) $$invalidate(8, disabled = $$props.disabled);
		if ('scale' in $$props) $$invalidate(9, scale = $$props.scale);
		if ('min_width' in $$props) $$invalidate(10, min_width = $$props.min_width);
		if ('root' in $$props) $$invalidate(12, root = $$props.root);
		if ('proxy_url' in $$props) $$invalidate(13, proxy_url = $$props.proxy_url);
		if ('$$scope' in $$props) $$invalidate(14, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*icon, root, proxy_url*/ 12416) {
			$$invalidate(11, icon_path = get_fetchable_url_or_file(icon, root, proxy_url));
		}
	};

	return [
		elem_id,
		elem_classes,
		visible,
		variant,
		size,
		value,
		link,
		icon,
		disabled,
		scale,
		min_width,
		icon_path,
		root,
		proxy_url,
		$$scope,
		slots,
		click_handler
	];
}

class Button extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			elem_id: 0,
			elem_classes: 1,
			visible: 2,
			variant: 3,
			size: 4,
			value: 5,
			link: 6,
			icon: 7,
			disabled: 8,
			scale: 9,
			min_width: 10,
			root: 12,
			proxy_url: 13
		});
	}
}

export { Block as B, Button as a, fly as b, colors as c, cubicOut as d, fade as f, ordered_colors as o };
//# sourceMappingURL=Button-05bf7cea.js.map
