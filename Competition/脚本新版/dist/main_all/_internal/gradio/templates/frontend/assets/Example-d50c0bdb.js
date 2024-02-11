import './ImageUploader-0e8da2b3.js';
import './Button-05bf7cea.js';
import './Index-2cec2c56.js';
import './index-5550136d.js';
import { I as Image } from './Example.svelte_svelte_type_style_lang-6aeed26b.js';
import './utils-8f25e669.js';
import './BlockLabel-09bb0248.js';
import './IconButton-fb69b8dd.js';
import './Empty-2eeff83e.js';
import './ShareButton-b044e1b5.js';
import './Download-ea83bae3.js';
import './Image-6cbf81d1.js';
import './Upload-8f4bfd80.js';
import './DropdownArrow-ebaf45e0.js';
import './Upload-02e4db12.js';
/* empty css                                                     */import './Clear-9760deed.js';
import './svelte/svelte.js';
import './file-url-1a9970c0.js';

const Example_svelte_svelte_type_style_lang = '';

/* home/runner/work/gradio/gradio/js/imageeditor/Example.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
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
function create_fragment(ctx) {
	let div;
	let image;
	let current;

	image = new Image({
			props: {
				src: /*samples_dir*/ ctx[1] + /*value*/ ctx[0],
				alt: ""
			}
		});

	return {
		c() {
			div = element("div");
			create_component(image.$$.fragment);
			attr(div, "class", "container svelte-5cqjmr");
			toggle_class(div, "table", /*type*/ ctx[2] === "table");
			toggle_class(div, "gallery", /*type*/ ctx[2] === "gallery");
			toggle_class(div, "selected", /*selected*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(image, div, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const image_changes = {};
			if (dirty & /*samples_dir, value*/ 3) image_changes.src = /*samples_dir*/ ctx[1] + /*value*/ ctx[0];
			image.$set(image_changes);

			if (!current || dirty & /*type*/ 4) {
				toggle_class(div, "table", /*type*/ ctx[2] === "table");
			}

			if (!current || dirty & /*type*/ 4) {
				toggle_class(div, "gallery", /*type*/ ctx[2] === "gallery");
			}

			if (!current || dirty & /*selected*/ 8) {
				toggle_class(div, "selected", /*selected*/ ctx[3]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(image.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(image.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(div);
			}

			destroy_component(image);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { value } = $$props;
	let { samples_dir } = $$props;
	let { type } = $$props;
	let { selected = false } = $$props;

	$$self.$$set = $$props => {
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('samples_dir' in $$props) $$invalidate(1, samples_dir = $$props.samples_dir);
		if ('type' in $$props) $$invalidate(2, type = $$props.type);
		if ('selected' in $$props) $$invalidate(3, selected = $$props.selected);
	};

	return [value, samples_dir, type, selected];
}

class Example extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			value: 0,
			samples_dir: 1,
			type: 2,
			selected: 3
		});
	}
}

export { Example as default };
//# sourceMappingURL=Example-d50c0bdb.js.map
