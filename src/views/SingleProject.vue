<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import opensourceData from '../data/openSource'


export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: function() {
		return opensourceData.find((e) => e.id == this.$route.params.id)
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :header="header" />

		<!-- Project gallery -->
		<ProjectGallery :images="images" />

		<!-- Project information -->
		<ProjectInfo :infos="infos" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :category="category" :id="this.$route.params.id" :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
