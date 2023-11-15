// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		categories: ['Study Projects'],
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
				title: 'Golang',
				img: require('@/assets/images/tech/golang-project-1.png'),
			},
			{
				id: 2,
				title: 'Mysql',
				img: require('@/assets/images/tech/mysql-logo-1.jpeg'),
			},
			{
				id: 3,
				title: 'Learning',
				img: require('@/assets/images/tech/studing-projects-1.png'),
			},
		],
		infos: {
			clientHeading: 'Project',
			companyInfos: [
				{
					id: 1,
					title: 'Type',
					details: 'Sample',
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
		categories: ['Study Projects'],
		img: require('@/assets/images/projects/simple-rails-app.png'),
		url: "https://github.com/fabricio-oliveira/simple-rails-app",
		header: {
			title: 'simple rails app',
			date: 'Nov 5, 2016',
			tag: 'Study Projects',
		},
		images: [
			{
				id: 1,
				title: 'Ruby',
				img: require('@/assets/images/tech/ruby-logo-1.png'),
			},
			{
				id: 2,
				title: 'Mysql',
				img: require('@/assets/images/tech/rails-logo-1.png'),
			},
			{
				id: 3,
				title: 'screenshot',
				img: require('@/assets/images/projects/simple-rails-app.png'),
			},
		],
		infos: {
			clientHeading: 'Project',
			companyInfos: [
				{
					id: 1,
					title: 'Type',
					details: 'Sample',
				},
				{
					id: 2,
					title: 'Github',
					details: 'https://github.com/fabricio-oliveira/simple-rails-app',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'A project created for educational purposes to study rails framework.',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Ruby',
						'Rail',
					],
				},
			],
			detailsHeading: 'Challenge',
			detailsBody: [
				{
					id: 1,
					detail:
						'A RoR project that was created as project of conclusion of curse at coursera',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
	{
		id: 3,
		categories: ['Library'],
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
				title: 'Ruby',
				img: require('@/assets/images/tech/ruby-logo-1.png'),
			},
			{
				id: 2,
				title: 'Rails',
				img: require('@/assets/images/tech/rails-logo-1.png'),
			},
			{
				id: 3,
				title: 'Gem',
				img: require('@/assets/images/tech/ruby-logo-2.png'),
			},
		],
		infos: {
			clientHeading: 'Project',
			companyInfos: [
				{
					id: 1,
					title: 'Type',
					details: 'Library',
				},
				{
					id: 2,
					title: 'Github',
					details: 'https://github.com/fabricio-oliveira/tp_healthcheck',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'A library created to be used in some of projects to reduce the healthcheck code created for each new rails project.',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Ruby',
						'Rails',
						'Gem',
					],
				},
			],
			detailsHeading: 'Challenge',
			detailsBody: [
				{
					id: 1,
					detail:
						'A ruby gem for rails to add some healthcheck endpoints in a rails application.',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
	{
		id: 4,
		categories: ['Study Projects'],
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
				title: 'Golang',
				img: require('@/assets/images/tech/golang-project-1.png'),
			},
			{
				id: 2,
				title: 'SQLite',
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
					details: 'Sample',
				},
				{
					id: 2,
					title: 'Github',
					details: 'https://github.com/fabricio-oliveira/example-golang-api',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				"I'm studying ways to organize packages in a Go (Golang) application.",
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Go',
						'SQLite',
					],
				},
			],
			detailsHeading: 'Challenge',
			detailsBody: [
				{
					id: 1,
					detail:
						'A golang API sample organized by type.',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
	{
		id: 5,
		categories: ['Library'],
		img: require('@/assets/images/library-logo-1.png'),
		url: "https://github.com/fabricio-oliveira/tp_record_optimistic",
		header: {
			title: 'tp_record_optimistic',
			date: 'May 17, 2017',
			tag: 'Library',
		},
		images: [
			{
				id: 1,
				title: 'Ruby',
				img: require('@/assets/images/tech/ruby-logo-1.png'),
			},
			{
				id: 2,
				title: 'Rails',
				img: require('@/assets/images/tech/rails-logo-1.png'),
			},
			{
				id: 3,
				title: 'Gem',
				img: require('@/assets/images/tech/ruby-logo-2.png'),
			},
		],
		infos: {
			clientHeading: 'Project',
			companyInfos: [
				{
					id: 1,
					title: 'Type',
					details: 'Library',
				},
				{
					id: 2,
					title: 'Github',
					details: 'https://github.com/fabricio-oliveira/tp_record_optimistic',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'A library created to improve the performance and accuracy of uniqueness validation of "Active Record" library.',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Ruby',
						'Rails',
						'ActiveRecord',
					],
				},
			],
			detailsHeading: 'Challenge',
			detailsBody: [
				{
					id: 1,
					detail:
						'A Ruby library (gem) that makes it possible to use optimistic uniqueness in "Active Record." This is achieved by capturing the unique constraint from the database.',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
];

export default projects;
