<script>
import openSourceData from '../../data/openSource'

export default {
	props: ['relatedProject', 'categories','id'],
	data: function () {
		return {relatedProjects: openSourceData.filter((p) => p.categories.includes(this.categories)  && p.id != this.id)}
	}
};
</script>

<template>
	<div
		class="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
	>
		<p
			class="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"
		>
			{{ relatedProject.relatedProjectsHeading }}
		</p>

		<div class="grid grid-cols-1 sm:grid-cols-4 gap-10 ">
			<div v-for="item in relatedProject.relatedProjects" :key="item.id">
				<img
					:src="item.img"
					class="rounded-xl cursor-pointer"
					:alt="item.title"
				/>
			</div>
		</div>
	</div>
</template>
