const Index_svelte_svelte_type_style_lang = '';

/* home/runner/work/gradio/gradio/js/row/Index.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
	attr,
	create_slot,
	detach,
	element,
	get_all_dirty_from_scope,
	get_slot_changes,
	init,
	insert,
	null_to_empty,
	safe_not_equal,
	toggle_class,
	transition_in,
	transition_out,
	update_slot_base
} = window.__gradio__svelte__internal;
function create_fragment(ctx) {
	let div;
	let div_class_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			attr(div, "id", /*elem_id*/ ctx[1]);
			attr(div, "class", div_class_value = "" + (null_to_empty(/*elem_classes*/ ctx[2].join(" ")) + " svelte-15lo0d8"));
			toggle_class(div, "compact", /*variant*/ ctx[4] === "compact");
			toggle_class(div, "panel", /*variant*/ ctx[4] === "panel");
			toggle_class(div, "unequal-height", /*equal_height*/ ctx[0] === false);
			toggle_class(div, "stretch", /*equal_height*/ ctx[0]);
			toggle_class(div, "hide", !/*visible*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[5],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*elem_id*/ 2) {
				attr(div, "id", /*elem_id*/ ctx[1]);
			}

			if (!current || dirty & /*elem_classes*/ 4 && div_class_value !== (div_class_value = "" + (null_to_empty(/*elem_classes*/ ctx[2].join(" ")) + " svelte-15lo0d8"))) {
				attr(div, "class", div_class_value);
			}

			if (!current || dirty & /*elem_classes, variant*/ 20) {
				toggle_class(div, "compact", /*variant*/ ctx[4] === "compact");
			}

			if (!current || dirty & /*elem_classes, variant*/ 20) {
				toggle_class(div, "panel", /*variant*/ ctx[4] === "panel");
			}

			if (!current || dirty & /*elem_classes, equal_height*/ 5) {
				toggle_class(div, "unequal-height", /*equal_height*/ ctx[0] === false);
			}

			if (!current || dirty & /*elem_classes, equal_height*/ 5) {
				toggle_class(div, "stretch", /*equal_height*/ ctx[0]);
			}

			if (!current || dirty & /*elem_classes, visible*/ 12) {
				toggle_class(div, "hide", !/*visible*/ ctx[3]);
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
				detach(div);
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { equal_height = true } = $$props;
	let { elem_id } = $$props;
	let { elem_classes = [] } = $$props;
	let { visible = true } = $$props;
	let { variant = "default" } = $$props;

	$$self.$$set = $$props => {
		if ('equal_height' in $$props) $$invalidate(0, equal_height = $$props.equal_height);
		if ('elem_id' in $$props) $$invalidate(1, elem_id = $$props.elem_id);
		if ('elem_classes' in $$props) $$invalidate(2, elem_classes = $$props.elem_classes);
		if ('visible' in $$props) $$invalidate(3, visible = $$props.visible);
		if ('variant' in $$props) $$invalidate(4, variant = $$props.variant);
		if ('$$scope' in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [equal_height, elem_id, elem_classes, visible, variant, $$scope, slots];
}

class Index extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			equal_height: 0,
			elem_id: 1,
			elem_classes: 2,
			visible: 3,
			variant: 4
		});
	}
}

export { Index as default };
//# sourceMappingURL=Index-7cbc3ec9.js.map
