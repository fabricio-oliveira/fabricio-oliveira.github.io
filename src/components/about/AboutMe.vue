<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						"I'm a seasoned Fullstack Engineer with over 12 years of experience in many industries such as oil and gas, broadcast media, payment, and e-commerce. I have a proven track record in designing, testing, and maintaining complex software systems. My expertise spans across multiple tools and technologies, including Elasticsearch, Golang, Kafka, JavaScript, Python, PostgreSQL, AWS, Docker, and GCP.",
				},
				{
					id: 2,
					bio:
						"What sets me apart is not only my extensive experience in back-end and infrastructure development but also my good knowledge in front-end and mobile development. This well-rounded skill set allows me to contribute effectively throughout the entire software development lifecycle.",
				},
				{
					id: 3,
					bio:
						"I thrive in Agile environments, where I have successfully managed projects and collaborated as part of highly productive teams. I am comfortable working in fast-paced, dynamic settings, and I have a strong focus on delivering high-quality results within strict deadlines.",
				},
				{
					id: 4,
					bio:
						"I am passionate about tackling new challenges and driving innovation. With my strong problem-solving abilities and dedication to continuous learning.",
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
