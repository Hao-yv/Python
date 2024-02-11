/* home/runner/work/gradio/gradio/js/icons/src/Upload.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
	append,
	attr,
	detach,
	init,
	insert,
	noop,
	safe_not_equal,
	svg_element
} = window.__gradio__svelte__internal;
function create_fragment(ctx) {
	let svg;
	let path;
	let polyline;
	let line;

	return {
		c() {
			svg = svg_element("svg");
			path = svg_element("path");
			polyline = svg_element("polyline");
			line = svg_element("line");
			attr(path, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4");
			attr(polyline, "points", "17 8 12 3 7 8");
			attr(line, "x1", "12");
			attr(line, "y1", "3");
			attr(line, "x2", "12");
			attr(line, "y2", "15");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "width", "90%");
			attr(svg, "height", "90%");
			attr(svg, "viewBox", "0 0 24 24");
			attr(svg, "fill", "none");
			attr(svg, "stroke", "currentColor");
			attr(svg, "stroke-width", "2");
			attr(svg, "stroke-linecap", "round");
			attr(svg, "stroke-linejoin", "round");
			attr(svg, "class", "feather feather-upload");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, path);
			append(svg, polyline);
			append(svg, line);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(svg);
			}
		}
	};
}

class Upload extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export { Upload as U };
//# sourceMappingURL=Upload-8f4bfd80.js.map
