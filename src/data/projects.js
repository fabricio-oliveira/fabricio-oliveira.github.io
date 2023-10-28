// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		category: 'Code snippet',
		img: require('@/assets/images/web-project-2.jpg'),
		url: "https://github.com/fabricio-oliveira/gomysql",
		header: {
			title: 'gomysql',
			date: 'Aug 19, 2016',
			tag: 'API',
		},
		images: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
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
					id: 3,
					title: 'Github',
					details: 'https://github.com/fabricio-oliveira/gomysql',
					url: null,
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
						'Markdown'
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
			socialSharingsHeading: 'Share This',
			socialSharings: [
				{
					id: 1,
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/fabricio-oliveira-b2b88873/',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},

];

export default projects;
