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
			tag: 'Study Projects, Go, Code Snippet',
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
				'A project created for educational purposes to explore Golang and understand the functionality of the sqlx library.',
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
						"A Golang executable designed to connect to a MySQL database and retrieve data from the 'Person' table.",
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
	{
		id: 2,
		categories: ['Web Application', 'Study Projects'],
		img: require('@/assets/images/projects/simple-rails-app.png'),
		url: "https://github.com/fabricio-oliveira/simple-rails-app",
		header: {
			title: 'ruby on rails recipe catalog',
			date: 'Nov 5, 2016',
			tag: 'Study Projects, Rails, Ruby',
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
				img: require('@/assets/images/tech/ruby-logo-2.png'),
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
				'A project created for educational purposes to explore the Rails framework.',
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
						'A Ruby on Rails (RoR) project developed as a course completion assignment on Coursera. The application retrieves culinary recipes based on a given keyword.',
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
			title: 'tp healthcheck',
			date: 'Feb 21, 2017',
			tag: 'Library, Rails, Ruby, Healcheck',
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
				'A library created for use in various projects to streamline the health check code, reducing the need to recreate it for each new Rails project.',
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
						'A Ruby gem for Rails designed to add health check endpoints to a Rails application.',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
	{
		id: 4,
		categories: ['API','Study Projects'],
		img: require('@/assets/images/github-code-1.jpeg'),
		url: "https://github.com/fabricio-oliveira/example-golang-api",
		header: {
			title: 'example golang api',
			date: 'Mar 7, 2017',
			tag: 'Study Projects, Go, API, Static Server, SQLite',
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
				"I'm exploring different methods to organize packages in a Go (Golang) application.",
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
						'A Golang API sample organized by type.',
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
			title: 'tp optimistic lock',
			date: 'May 17, 2017',
			tag: 'Library, Rails, Ruby, ActiveRecord',
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
				"A library created to enhance the performance and accuracy of the uniqueness validation in the 'Active Record' library.",
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
						"A Ruby library (gem) enabling the use of optimistic uniqueness in 'Active Record' by capturing the unique constraint from the database.",
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
	{
		id: 6,
		categories: ['API','Study Projects'],
		img: require('@/assets/images/github-code-1.jpeg'),
		url: "https://github.com/fabricio-oliveira/other_go_program",
		header: {
			title: 'other golang api',
			date: 'Aug 11, 2017',
			tag:  'Study Projects, Go, API, SQLite3',
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
					details: 'https://github.com/fabricio-oliveira/other_go_program',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				"I'm exploring methods for organizing packages in a Go (Golang) application.",
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
						'A Golang API sample organized by features.',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
	{
		id: 7,
		categories: ['Library'],
		img: require('@/assets/images/library-logo-1.png'),
		url: "https://github.com/fabricio-oliveira/tp_cached_record",
		header: {
			title: 'tp cache record',
			date: 'Jun 24, 2018',
			tag: 'Library, Rails, Ruby, ActiveRecord, Redis',
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
				title: 'Redis',
				img: require('@/assets/images/tech/redis-logo-1.png'),
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
					details: 'https://github.com/fabricio-oliveira/tp_cached_record',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				"A library created to enhance the performance of 'Active Record' by caching some data.",
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Ruby',
						'Rails',
						'ActiveRecord',
						'Redis'
					],
				},
			],
			detailsHeading: 'Challenge',
			detailsBody: [
				{
					id: 1,
					detail:
						"A Ruby library (gem) enabling the use of optimistic uniqueness in 'Active Record' by capturing the unique constraint from the database.",
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
	{
		id: 8,
		categories: ['API', 'Study Projects'],
		img: require('@/assets/images/github-code-1.jpeg'),
		url: "https://github.com/fabricio-oliveira/FinancialAPI",
		header: {
			title: 'Financial API',
			date: 'Jul 22, 2018',
			tag:  'Study Projects, C#, API, MS SQL, RabbitMQ',
		},
		images: [
			{
				id: 1,
				title: 'C#',
				img: require('@/assets/images/tech/c-sharp-logo-1.jpeg'),
			},
			{
				id: 2,
				title: 'RabbitMQ',
				img: require('@/assets/images/tech/rabbitmq-logo-1.jpeg'),
			},
			{
				id: 3,
				title: 'docker',
				img: require('@/assets/images/tech/docker-logo-1.png'),
			},
			{
				id: 4,
				title: 'MS SQL',
				img: require('@/assets/images/tech/ms-sql-logo-1.jpeg'),
			},
		],
		infos: {
			clientHeading: 'Project',
			companyInfos: [
				{
					id: 1,
					title: 'Type',
					details: 'API',
				},
				{
					id: 2,
					title: 'Github',
					details: 'https://github.com/fabricio-oliveira/other_go_program',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				"An API developed in C# to manage financial services.",
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'C#',
						'Rabbit MQ',
						'MS sql',
						'Docker'
					],
				},
			],
			detailsHeading: 'Challenge',
			detailsBody: [
				{
					id: 1,
					detail:
						'A C# API project designed to handle financial services.',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
	{
		id: 9,
		categories: ['Mobile Application', 'Study Projects'],
		img: require('@/assets/images/projects/firebase-chat.png'),
		url: "https://github.com/fabricio-oliveira/firebase-chat",
		header: {
			title: 'Firebase chat',
			date: 'Sep 28, 2018',
			tag:  'Study Projects, Kotlin, Mobile, Android, Firebase',
		},
		images: [
			{
				id: 1,
				title: 'Kotlin',
				img: require('@/assets/images/tech/kotlin-logo-1.jpeg'),
			},
			{
				id: 2,
				title: 'Android',
				img: require('@/assets/images/tech/android-logo-1.png'),
			},
			{
				id: 3,
				title: 'firebase',
				img: require('@/assets/images/tech/firebase-logo-1.png'),
			},
		],
		infos: {
			clientHeading: 'Project',
			companyInfos: [
				{
					id: 1,
					title: 'Type',
					details: 'Android APP',
				},
				{
					id: 2,
					title: 'Github',
					details: 'https://github.com/fabricio-oliveira/firebase-chat',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				"An chat app fro android created in kotlin with firebase realtime database",
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Kotlin',
						'Android',
						'Gradle',
						'Firebase'
					],
				},
			],
			detailsHeading: 'Challenge',
			detailsBody: [
				{
					id: 1,
					detail:
						'A study of case of firebase realtime database',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
	{
		id: 10,
		categories: ['API', 'Study Projects'],
		img: require('@/assets/images/github-code-1.jpeg'),
		url: "https://github.com/fabricio-oliveira/crud-service-golang",
		header: {
			title: 'CRUD in go',
			date: 'Aug 31, 2022',
			tag:  'Study Projects, golang, API, backend, dynamoDB',
		},
		images: [
			{
				id: 1,
				title: 'Go',
				img: require('@/assets/images/tech/golang-project-1.png'),
			},
			{
				id: 2,
				title: 'DynamoDB',
				img: require('@/assets/images/tech/dynamo-db-logo-1.png'),
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
					details: 'API',
				},
				{
					id: 2,
					title: 'Github',
					details: 'https://github.com/fabricio-oliveira/firebase-chat',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				"A straightforward approach to implementing CRUD operations using DynamoDB.",
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Go',
						'Docker',
						'DynamoDB'
					],
				},
			],
			detailsHeading: 'Challenge',
			detailsBody: [
				{
					id: 1,
					detail:
						'A case study on DynamoDB.',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
	{
		id: 11,
		categories: ['API', 'Study Projects'],
		img: require('@/assets/images/github-code-1.jpeg'),
		url: "https://github.com/fabricio-oliveira/grpc-service",
		header: {
			title: 'GRPC service',
			date: 'May 31, 2023',
			tag:  'Study Projects, Python, API, backend, GRPC',
		},
		images: [
			{
				id: 1,
				title: 'Python',
				img: require('@/assets/images/tech/python-logo-1.png'),
			},
			{
				id: 2,
				title: 'GRPC',
				img: require('@/assets/images/tech/grpc-logo-1.png'),
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
					details: 'API',
				},
				{
					id: 2,
					title: 'Github',
					details: 'https://github.com/fabricio-oliveira/grpc-service',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				"A case study on designing an API using gRPC.",
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'GRPC'
					],
				},
			],
			detailsHeading: 'Challenge',
			detailsBody: [
				{
					id: 1,
					detail:
						'A case study on GRPC.',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
		},
	},
];

export default projects;
