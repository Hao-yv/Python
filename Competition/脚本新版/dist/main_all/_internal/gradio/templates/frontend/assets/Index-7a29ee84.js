import { T as Textbox } from './Textbox-0f39cfc0.js';
import { B as Block } from './Button-05bf7cea.js';
import { S as Static } from './Index-2cec2c56.js';
export { default as BaseExample } from './Example-abcadb77.js';
import './BlockTitle-2fcd9935.js';
import './Info-8a698008.js';
import './Check-1d114215.js';
import './Copy-ea46e0bf.js';
import './index-5550136d.js';
import './svelte/svelte.js';
/* empty css                                                */
/* home/runner/work/gradio/gradio/js/textbox/Index.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
	add_flush_callback,
	assign,
	bind,
	binding_callbacks,
	check_outros,
	create_component,
	destroy_component,
	detach,
	flush,
	get_spread_object,
	get_spread_update,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} = window.__gradio__svelte__internal;
function create_if_block(ctx) {
	let statustracker;
	let current;

	const statustracker_spread_levels = [
		{ autoscroll: /*gradio*/ ctx[2].autoscroll },
		{ i18n: /*gradio*/ ctx[2].i18n },
		/*loading_status*/ ctx[17]
	];

	let statustracker_props = {};

	for (let i = 0; i < statustracker_spread_levels.length; i += 1) {
		statustracker_props = assign(statustracker_props, statustracker_spread_levels[i]);
	}

	statustracker = new Static({ props: statustracker_props });

	return {
		c() {
			create_component(statustracker.$$.fragment);
		},
		m(target, anchor) {
			mount_component(statustracker, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const statustracker_changes = (dirty[0] & /*gradio, loading_status*/ 131076)
			? get_spread_update(statustracker_spread_levels, [
					dirty[0] & /*gradio*/ 4 && { autoscroll: /*gradio*/ ctx[2].autoscroll },
					dirty[0] & /*gradio*/ 4 && { i18n: /*gradio*/ ctx[2].i18n },
					dirty[0] & /*loading_status*/ 131072 && get_spread_object(/*loading_status*/ ctx[17])
				])
			: {};

			statustracker.$set(statustracker_changes);
		},
		i(local) {
			if (current) return;
			transition_in(statustracker.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(statustracker.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(statustracker, detaching);
		}
	};
}

// (35:0) <Block  {visible}  {elem_id}  {elem_classes}  {scale}  {min_width}  allow_overflow={false}  padding={container} >
function create_default_slot(ctx) {
	let t;
	let textbox;
	let updating_value;
	let updating_value_is_output;
	let current;
	let if_block = /*loading_status*/ ctx[17] && create_if_block(ctx);

	function textbox_value_binding(value) {
		/*textbox_value_binding*/ ctx[23](value);
	}

	function textbox_value_is_output_binding(value) {
		/*textbox_value_is_output_binding*/ ctx[24](value);
	}

	let textbox_props = {
		label: /*label*/ ctx[3],
		info: /*info*/ ctx[4],
		show_label: /*show_label*/ ctx[10],
		lines: /*lines*/ ctx[8],
		type: /*type*/ ctx[12],
		rtl: /*rtl*/ ctx[18],
		text_align: /*text_align*/ ctx[19],
		max_lines: !/*max_lines*/ ctx[11]
		? /*lines*/ ctx[8] + 1
		: /*max_lines*/ ctx[11],
		placeholder: /*placeholder*/ ctx[9],
		show_copy_button: /*show_copy_button*/ ctx[16],
		autofocus: /*autofocus*/ ctx[20],
		container: /*container*/ ctx[13],
		autoscroll: /*autoscroll*/ ctx[21],
		disabled: !/*interactive*/ ctx[22]
	};

	if (/*value*/ ctx[0] !== void 0) {
		textbox_props.value = /*value*/ ctx[0];
	}

	if (/*value_is_output*/ ctx[1] !== void 0) {
		textbox_props.value_is_output = /*value_is_output*/ ctx[1];
	}

	textbox = new Textbox({ props: textbox_props });
	binding_callbacks.push(() => bind(textbox, 'value', textbox_value_binding));
	binding_callbacks.push(() => bind(textbox, 'value_is_output', textbox_value_is_output_binding));
	textbox.$on("change", /*change_handler*/ ctx[25]);
	textbox.$on("input", /*input_handler*/ ctx[26]);
	textbox.$on("submit", /*submit_handler*/ ctx[27]);
	textbox.$on("blur", /*blur_handler*/ ctx[28]);
	textbox.$on("select", /*select_handler*/ ctx[29]);
	textbox.$on("focus", /*focus_handler*/ ctx[30]);

	return {
		c() {
			if (if_block) if_block.c();
			t = space();
			create_component(textbox.$$.fragment);
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, t, anchor);
			mount_component(textbox, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (/*loading_status*/ ctx[17]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty[0] & /*loading_status*/ 131072) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(t.parentNode, t);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			const textbox_changes = {};
			if (dirty[0] & /*label*/ 8) textbox_changes.label = /*label*/ ctx[3];
			if (dirty[0] & /*info*/ 16) textbox_changes.info = /*info*/ ctx[4];
			if (dirty[0] & /*show_label*/ 1024) textbox_changes.show_label = /*show_label*/ ctx[10];
			if (dirty[0] & /*lines*/ 256) textbox_changes.lines = /*lines*/ ctx[8];
			if (dirty[0] & /*type*/ 4096) textbox_changes.type = /*type*/ ctx[12];
			if (dirty[0] & /*rtl*/ 262144) textbox_changes.rtl = /*rtl*/ ctx[18];
			if (dirty[0] & /*text_align*/ 524288) textbox_changes.text_align = /*text_align*/ ctx[19];

			if (dirty[0] & /*max_lines, lines*/ 2304) textbox_changes.max_lines = !/*max_lines*/ ctx[11]
			? /*lines*/ ctx[8] + 1
			: /*max_lines*/ ctx[11];

			if (dirty[0] & /*placeholder*/ 512) textbox_changes.placeholder = /*placeholder*/ ctx[9];
			if (dirty[0] & /*show_copy_button*/ 65536) textbox_changes.show_copy_button = /*show_copy_button*/ ctx[16];
			if (dirty[0] & /*autofocus*/ 1048576) textbox_changes.autofocus = /*autofocus*/ ctx[20];
			if (dirty[0] & /*container*/ 8192) textbox_changes.container = /*container*/ ctx[13];
			if (dirty[0] & /*autoscroll*/ 2097152) textbox_changes.autoscroll = /*autoscroll*/ ctx[21];
			if (dirty[0] & /*interactive*/ 4194304) textbox_changes.disabled = !/*interactive*/ ctx[22];

			if (!updating_value && dirty[0] & /*value*/ 1) {
				updating_value = true;
				textbox_changes.value = /*value*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			if (!updating_value_is_output && dirty[0] & /*value_is_output*/ 2) {
				updating_value_is_output = true;
				textbox_changes.value_is_output = /*value_is_output*/ ctx[1];
				add_flush_callback(() => updating_value_is_output = false);
			}

			textbox.$set(textbox_changes);
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			transition_in(textbox.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			transition_out(textbox.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(t);
			}

			if (if_block) if_block.d(detaching);
			destroy_component(textbox, detaching);
		}
	};
}

function create_fragment(ctx) {
	let block;
	let current;

	block = new Block({
			props: {
				visible: /*visible*/ ctx[7],
				elem_id: /*elem_id*/ ctx[5],
				elem_classes: /*elem_classes*/ ctx[6],
				scale: /*scale*/ ctx[14],
				min_width: /*min_width*/ ctx[15],
				allow_overflow: false,
				padding: /*container*/ ctx[13],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(block.$$.fragment);
		},
		m(target, anchor) {
			mount_component(block, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const block_changes = {};
			if (dirty[0] & /*visible*/ 128) block_changes.visible = /*visible*/ ctx[7];
			if (dirty[0] & /*elem_id*/ 32) block_changes.elem_id = /*elem_id*/ ctx[5];
			if (dirty[0] & /*elem_classes*/ 64) block_changes.elem_classes = /*elem_classes*/ ctx[6];
			if (dirty[0] & /*scale*/ 16384) block_changes.scale = /*scale*/ ctx[14];
			if (dirty[0] & /*min_width*/ 32768) block_changes.min_width = /*min_width*/ ctx[15];
			if (dirty[0] & /*container*/ 8192) block_changes.padding = /*container*/ ctx[13];

			if (dirty[0] & /*label, info, show_label, lines, type, rtl, text_align, max_lines, placeholder, show_copy_button, autofocus, container, autoscroll, interactive, value, value_is_output, gradio, loading_status*/ 8339231 | dirty[1] & /*$$scope*/ 1) {
				block_changes.$$scope = { dirty, ctx };
			}

			block.$set(block_changes);
		},
		i(local) {
			if (current) return;
			transition_in(block.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(block.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(block, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { gradio } = $$props;
	let { label = "Textbox" } = $$props;
	let { info = undefined } = $$props;
	let { elem_id = "" } = $$props;
	let { elem_classes = [] } = $$props;
	let { visible = true } = $$props;
	let { value = "" } = $$props;
	let { lines } = $$props;
	let { placeholder = "" } = $$props;
	let { show_label } = $$props;
	let { max_lines } = $$props;
	let { type = "text" } = $$props;
	let { container = true } = $$props;
	let { scale = null } = $$props;
	let { min_width = undefined } = $$props;
	let { show_copy_button = false } = $$props;
	let { loading_status = undefined } = $$props;
	let { value_is_output = false } = $$props;
	let { rtl = false } = $$props;
	let { text_align = undefined } = $$props;
	let { autofocus = false } = $$props;
	let { autoscroll = true } = $$props;
	let { interactive } = $$props;

	function textbox_value_binding(value$1) {
		value = value$1;
		$$invalidate(0, value);
	}

	function textbox_value_is_output_binding(value) {
		value_is_output = value;
		$$invalidate(1, value_is_output);
	}

	const change_handler = () => gradio.dispatch("change", value);
	const input_handler = () => gradio.dispatch("input");
	const submit_handler = () => gradio.dispatch("submit");
	const blur_handler = () => gradio.dispatch("blur");
	const select_handler = e => gradio.dispatch("select", e.detail);
	const focus_handler = () => gradio.dispatch("focus");

	$$self.$$set = $$props => {
		if ('gradio' in $$props) $$invalidate(2, gradio = $$props.gradio);
		if ('label' in $$props) $$invalidate(3, label = $$props.label);
		if ('info' in $$props) $$invalidate(4, info = $$props.info);
		if ('elem_id' in $$props) $$invalidate(5, elem_id = $$props.elem_id);
		if ('elem_classes' in $$props) $$invalidate(6, elem_classes = $$props.elem_classes);
		if ('visible' in $$props) $$invalidate(7, visible = $$props.visible);
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('lines' in $$props) $$invalidate(8, lines = $$props.lines);
		if ('placeholder' in $$props) $$invalidate(9, placeholder = $$props.placeholder);
		if ('show_label' in $$props) $$invalidate(10, show_label = $$props.show_label);
		if ('max_lines' in $$props) $$invalidate(11, max_lines = $$props.max_lines);
		if ('type' in $$props) $$invalidate(12, type = $$props.type);
		if ('container' in $$props) $$invalidate(13, container = $$props.container);
		if ('scale' in $$props) $$invalidate(14, scale = $$props.scale);
		if ('min_width' in $$props) $$invalidate(15, min_width = $$props.min_width);
		if ('show_copy_button' in $$props) $$invalidate(16, show_copy_button = $$props.show_copy_button);
		if ('loading_status' in $$props) $$invalidate(17, loading_status = $$props.loading_status);
		if ('value_is_output' in $$props) $$invalidate(1, value_is_output = $$props.value_is_output);
		if ('rtl' in $$props) $$invalidate(18, rtl = $$props.rtl);
		if ('text_align' in $$props) $$invalidate(19, text_align = $$props.text_align);
		if ('autofocus' in $$props) $$invalidate(20, autofocus = $$props.autofocus);
		if ('autoscroll' in $$props) $$invalidate(21, autoscroll = $$props.autoscroll);
		if ('interactive' in $$props) $$invalidate(22, interactive = $$props.interactive);
	};

	return [
		value,
		value_is_output,
		gradio,
		label,
		info,
		elem_id,
		elem_classes,
		visible,
		lines,
		placeholder,
		show_label,
		max_lines,
		type,
		container,
		scale,
		min_width,
		show_copy_button,
		loading_status,
		rtl,
		text_align,
		autofocus,
		autoscroll,
		interactive,
		textbox_value_binding,
		textbox_value_is_output_binding,
		change_handler,
		input_handler,
		submit_handler,
		blur_handler,
		select_handler,
		focus_handler
	];
}

class Index extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				gradio: 2,
				label: 3,
				info: 4,
				elem_id: 5,
				elem_classes: 6,
				visible: 7,
				value: 0,
				lines: 8,
				placeholder: 9,
				show_label: 10,
				max_lines: 11,
				type: 12,
				container: 13,
				scale: 14,
				min_width: 15,
				show_copy_button: 16,
				loading_status: 17,
				value_is_output: 1,
				rtl: 18,
				text_align: 19,
				autofocus: 20,
				autoscroll: 21,
				interactive: 22
			},
			null,
			[-1, -1]
		);
	}

	get gradio() {
		return this.$$.ctx[2];
	}

	set gradio(gradio) {
		this.$$set({ gradio });
		flush();
	}

	get label() {
		return this.$$.ctx[3];
	}

	set label(label) {
		this.$$set({ label });
		flush();
	}

	get info() {
		return this.$$.ctx[4];
	}

	set info(info) {
		this.$$set({ info });
		flush();
	}

	get elem_id() {
		return this.$$.ctx[5];
	}

	set elem_id(elem_id) {
		this.$$set({ elem_id });
		flush();
	}

	get elem_classes() {
		return this.$$.ctx[6];
	}

	set elem_classes(elem_classes) {
		this.$$set({ elem_classes });
		flush();
	}

	get visible() {
		return this.$$.ctx[7];
	}

	set visible(visible) {
		this.$$set({ visible });
		flush();
	}

	get value() {
		return this.$$.ctx[0];
	}

	set value(value) {
		this.$$set({ value });
		flush();
	}

	get lines() {
		return this.$$.ctx[8];
	}

	set lines(lines) {
		this.$$set({ lines });
		flush();
	}

	get placeholder() {
		return this.$$.ctx[9];
	}

	set placeholder(placeholder) {
		this.$$set({ placeholder });
		flush();
	}

	get show_label() {
		return this.$$.ctx[10];
	}

	set show_label(show_label) {
		this.$$set({ show_label });
		flush();
	}

	get max_lines() {
		return this.$$.ctx[11];
	}

	set max_lines(max_lines) {
		this.$$set({ max_lines });
		flush();
	}

	get type() {
		return this.$$.ctx[12];
	}

	set type(type) {
		this.$$set({ type });
		flush();
	}

	get container() {
		return this.$$.ctx[13];
	}

	set container(container) {
		this.$$set({ container });
		flush();
	}

	get scale() {
		return this.$$.ctx[14];
	}

	set scale(scale) {
		this.$$set({ scale });
		flush();
	}

	get min_width() {
		return this.$$.ctx[15];
	}

	set min_width(min_width) {
		this.$$set({ min_width });
		flush();
	}

	get show_copy_button() {
		return this.$$.ctx[16];
	}

	set show_copy_button(show_copy_button) {
		this.$$set({ show_copy_button });
		flush();
	}

	get loading_status() {
		return this.$$.ctx[17];
	}

	set loading_status(loading_status) {
		this.$$set({ loading_status });
		flush();
	}

	get value_is_output() {
		return this.$$.ctx[1];
	}

	set value_is_output(value_is_output) {
		this.$$set({ value_is_output });
		flush();
	}

	get rtl() {
		return this.$$.ctx[18];
	}

	set rtl(rtl) {
		this.$$set({ rtl });
		flush();
	}

	get text_align() {
		return this.$$.ctx[19];
	}

	set text_align(text_align) {
		this.$$set({ text_align });
		flush();
	}

	get autofocus() {
		return this.$$.ctx[20];
	}

	set autofocus(autofocus) {
		this.$$set({ autofocus });
		flush();
	}

	get autoscroll() {
		return this.$$.ctx[21];
	}

	set autoscroll(autoscroll) {
		this.$$set({ autoscroll });
		flush();
	}

	get interactive() {
		return this.$$.ctx[22];
	}

	set interactive(interactive) {
		this.$$set({ interactive });
		flush();
	}
}

export { Textbox as BaseTextbox, Index as default };
//# sourceMappingURL=Index-7a29ee84.js.map
