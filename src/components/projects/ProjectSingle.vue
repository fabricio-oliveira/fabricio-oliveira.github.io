<script>
export default {
	props: ['project'],
};
</script>

<template>
	<router-link :to="`/projects/single-project/${project.id}`"
		class="rounded-xl shadow-lg hover:shadow-xl flex flex-col cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark p-2"
		aria-label="Single Project">
		<div class=" flex justify-center h-4/5 p-low-2">
			<img :src="project.img" :alt="project.header.title" class="rounded-t-xl border-none" />
		</div>
		<div class="p-low-2 pt-2">
			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
				{{ project.header.title }}
			</p>
			<span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light mb-2">
				{{ project.category }}
			</span>
		</div>
	</router-link>
</template>

<style lang="scss" scoped></style>
