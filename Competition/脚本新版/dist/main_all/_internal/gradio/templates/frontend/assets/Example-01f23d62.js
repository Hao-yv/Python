const Example_svelte_svelte_type_style_lang = '';

/* home/runner/work/gradio/gradio/js/audio/Example.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	text,
	toggle_class
} = window.__gradio__svelte__internal;
function create_fragment(ctx) {
	let div;
	let t;

	return {
		c() {
			div = element("div");
			t = text(/*value*/ ctx[0]);
			attr(div, "class", "svelte-1ayixqk");
			toggle_class(div, "table", /*type*/ ctx[1] === "table");
			toggle_class(div, "gallery", /*type*/ ctx[1] === "gallery");
			toggle_class(div, "selected", /*selected*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t);
		},
		p(ctx, [dirty]) {
			if (dirty & /*value*/ 1) set_data(t, /*value*/ ctx[0]);

			if (dirty & /*type*/ 2) {
				toggle_class(div, "table", /*type*/ ctx[1] === "table");
			}

			if (dirty & /*type*/ 2) {
				toggle_class(div, "gallery", /*type*/ ctx[1] === "gallery");
			}

			if (dirty & /*selected*/ 4) {
				toggle_class(div, "selected", /*selected*/ ctx[2]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(div);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { value } = $$props;
	let { type } = $$props;
	let { selected = false } = $$props;

	$$self.$$set = $$props => {
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('type' in $$props) $$invalidate(1, type = $$props.type);
		if ('selected' in $$props) $$invalidate(2, selected = $$props.selected);
	};

	return [value, type, selected];
}

class Example extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { value: 0, type: 1, selected: 2 });
	}
}

export { Example as default };
//# sourceMappingURL=Example-01f23d62.js.map
