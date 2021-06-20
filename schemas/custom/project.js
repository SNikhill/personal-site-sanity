const project = {
	title: "Projects",
	name: "project",
	type: "document",
	fields: [
		{
			name: "projectImage",
			type: "image",
			title: "Project Image",
			description: "Main image for Project",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "alt",
					description: "Alternate Text for the Image",
					validation: (Rule) =>
						Rule.required().error(
							"Image Requires an Alternate Text"
						),
				},
			],
		},
		{
			title: "Project Name",
			name: "projectName",
			type: "string",
			validation: (Rule) =>
				Rule.required().error("Project Needs to have a title"),
		},
		{
			title: "Link to Project",
			name: "projectLink",
			type: "url",
		},
		{
			name: "projectDescription",
			title: "Project Description",
			type: "array",
			of: [{ type: "block" }],
			validation: (Rule) =>
				Rule.required().error(
					"Project Needs to have a description. Something to make the visitor check it out"
				),
		},
	],
};

export default project;
