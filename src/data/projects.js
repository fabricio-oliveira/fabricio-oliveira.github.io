// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		category: 'Study Projects',
		img: require('@/assets/images/github-code-1.jpeg'),
		url: "https://github.com/fabricio-oliveira/gomysql",
		header: {
			title: 'gomysql',
			date: 'Aug 19, 2016',
			tag: 'Study Projects',
		},
		images: [
			{
				id: 1,
				title: 'Golang Project',
				img: require('@/assets/images/tech/golang-project-1.png'),
			},
			{
				id: 2,
				title: 'Mysql Database',
				img: require('@/assets/images/tech/mysql-logo-1.jpeg'),
			},
			{
				id: 3,
				title: 'Learning project',
				img: require('@/assets/images/tech/studing-projects-1.png'),
			},
		],
		infos: {
			clientHeading: 'Project',
			companyInfos: [
				{
					id: 1,
					title: 'Type',
					details: 'Code Snippet',
				},
				{
					id: 2,
					title: 'Github',
					details: 'https://github.com/fabricio-oliveira/gomysql',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'A project created for educational purposes to study golang and the functioning of the sqlx library.',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Go',
						'MySQL',
					],
				},
			],
			detailsHeading: 'Challenge',
			detailsBody: [
				{
					id: 1,
					detail:
						'A golang executable that connect a Mysql database to retrieve data from the table Person.',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
	{
		id: 2,
		category: 'Library',
		img: require('@/assets/images/library-logo-1.png'),
		url: "https://github.com/fabricio-oliveira/tp_healthcheck",
		header: {
			title: 'tp_healthcheck',
			date: 'Feb 21, 2017',
			tag: 'Library',
		},
		images: [
			{
				id: 1,
				title: 'Ruby Project',
				img: require('@/assets/images/tech/ruby-logo-1.png'),
			},
			{
				id: 2,
				title: 'Mysql Database',
				img: require('@/assets/images/tech/rails-logo-1.png'),
			},
			{
				id: 3,
				title: 'Code Snippet',
				img: require('@/assets/images/tech/ruby-logo-2.png'),
			},
		],
		infos: {
			clientHeading: 'Project',
			companyInfos: [
				{
					id: 1,
					title: 'Type',
					details: 'Code Snippet',
				},
				{
					id: 2,
					title: 'Github',
					details: 'https://github.com/fabricio-oliveira/tp_healthcheck',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'A project created for educational purposes to study golang and the functioning of the sqlx library.',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Go',
						'MySQL',
					],
				},
			],
			detailsHeading: 'Challenge',
			detailsBody: [
				{
					id: 1,
					detail:
						'A golang executable that connect a Mysql database to retrieve data from the table Person.',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
	{
		id: 3,
		category: 'Study Projects',
		img: require('@/assets/images/github-code-1.jpeg'),
		url: "https://github.com/fabricio-oliveira/example-golang-api",
		header: {
			title: 'example golang api',
			date: 'Mar 7, 2017',
			tag: 'Study Projects',
		},
		images: [
			{
				id: 1,
				title: 'Golang Project',
				img: require('@/assets/images/tech/golang-project-1.png'),
			},
			{
				id: 2,
				title: 'SQLite Database',
				img: require('@/assets/images/tech/sqlite-logo-1.jpeg'),
			},
			{
				id: 3,
				title: 'Learning project',
				img: require('@/assets/images/tech/studing-projects-1.png'),
			},
		],
		infos: {
			clientHeading: 'Project',
			companyInfos: [
				{
					id: 1,
					title: 'Type',
					details: 'Code Snippet',
				},
				{
					id: 2,
					title: 'Github',
					details: 'https://github.com/fabricio-oliveira/gomysql',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'A project created for educational purposes to study golang and the functioning of the sqlx library.',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Go',
						'MySQL',
					],
				},
			],
			detailsHeading: 'Challenge',
			detailsBody: [
				{
					id: 1,
					detail:
						'A golang executable that connect a Mysql database to retrieve data from the table Person.',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
];

export default projects;
