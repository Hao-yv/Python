import './Button-05bf7cea.js';
import { c as copy } from './utils-8f25e669.js';
import { M as MarkdownCode } from './Example.svelte_svelte_type_style_lang-b83dcc5a.js';

const Markdown_svelte_svelte_type_style_lang = '';

/* home/runner/work/gradio/gradio/js/markdown/shared/Markdown.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
	action_destroyer,
	attr,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	toggle_class,
	transition_in,
	transition_out
} = window.__gradio__svelte__internal;
const { createEventDispatcher } = window.__gradio__svelte__internal;
function create_fragment(ctx) {
	let div;
	let markdowncode;
	let div_class_value;
	let div_dir_value;
	let current;
	let mounted;
	let dispose;

	markdowncode = new MarkdownCode({
			props: {
				message: /*value*/ ctx[2],
				latex_delimiters: /*latex_delimiters*/ ctx[7],
				sanitize_html: /*sanitize_html*/ ctx[5],
				line_breaks: /*line_breaks*/ ctx[6],
				chatbot: false
			}
		});

	return {
		c() {
			div = element("div");
			create_component(markdowncode.$$.fragment);
			attr(div, "class", div_class_value = "prose " + /*elem_classes*/ ctx[0].join(' ') + " svelte-aww9vd");
			attr(div, "data-testid", "markdown");
			attr(div, "dir", div_dir_value = /*rtl*/ ctx[4] ? "rtl" : "ltr");
			toggle_class(div, "min", /*min_height*/ ctx[3]);
			toggle_class(div, "hide", !/*visible*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(markdowncode, div, null);
			current = true;

			if (!mounted) {
				dispose = action_destroyer(copy.call(null, div));
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			const markdowncode_changes = {};
			if (dirty & /*value*/ 4) markdowncode_changes.message = /*value*/ ctx[2];
			if (dirty & /*latex_delimiters*/ 128) markdowncode_changes.latex_delimiters = /*latex_delimiters*/ ctx[7];
			if (dirty & /*sanitize_html*/ 32) markdowncode_changes.sanitize_html = /*sanitize_html*/ ctx[5];
			if (dirty & /*line_breaks*/ 64) markdowncode_changes.line_breaks = /*line_breaks*/ ctx[6];
			markdowncode.$set(markdowncode_changes);

			if (!current || dirty & /*elem_classes*/ 1 && div_class_value !== (div_class_value = "prose " + /*elem_classes*/ ctx[0].join(' ') + " svelte-aww9vd")) {
				attr(div, "class", div_class_value);
			}

			if (!current || dirty & /*rtl*/ 16 && div_dir_value !== (div_dir_value = /*rtl*/ ctx[4] ? "rtl" : "ltr")) {
				attr(div, "dir", div_dir_value);
			}

			if (!current || dirty & /*elem_classes, min_height*/ 9) {
				toggle_class(div, "min", /*min_height*/ ctx[3]);
			}

			if (!current || dirty & /*elem_classes, visible*/ 3) {
				toggle_class(div, "hide", !/*visible*/ ctx[1]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(markdowncode.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(markdowncode.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(div);
			}

			destroy_component(markdowncode);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { elem_classes = [] } = $$props;
	let { visible = true } = $$props;
	let { value } = $$props;
	let { min_height = false } = $$props;
	let { rtl = false } = $$props;
	let { sanitize_html = true } = $$props;
	let { line_breaks = false } = $$props;
	let { latex_delimiters } = $$props;
	const dispatch = createEventDispatcher();

	$$self.$$set = $$props => {
		if ('elem_classes' in $$props) $$invalidate(0, elem_classes = $$props.elem_classes);
		if ('visible' in $$props) $$invalidate(1, visible = $$props.visible);
		if ('value' in $$props) $$invalidate(2, value = $$props.value);
		if ('min_height' in $$props) $$invalidate(3, min_height = $$props.min_height);
		if ('rtl' in $$props) $$invalidate(4, rtl = $$props.rtl);
		if ('sanitize_html' in $$props) $$invalidate(5, sanitize_html = $$props.sanitize_html);
		if ('line_breaks' in $$props) $$invalidate(6, line_breaks = $$props.line_breaks);
		if ('latex_delimiters' in $$props) $$invalidate(7, latex_delimiters = $$props.latex_delimiters);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*value*/ 4) {
			(dispatch("change"));
		}
	};

	return [
		elem_classes,
		visible,
		value,
		min_height,
		rtl,
		sanitize_html,
		line_breaks,
		latex_delimiters
	];
}

class Markdown extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			elem_classes: 0,
			visible: 1,
			value: 2,
			min_height: 3,
			rtl: 4,
			sanitize_html: 5,
			line_breaks: 6,
			latex_delimiters: 7
		});
	}
}

const Markdown$1 = Markdown;

const Index_svelte_svelte_type_style_lang = '';

export { Markdown$1 as M };
//# sourceMappingURL=Index.svelte_svelte_type_style_lang-09b631ef.js.map
