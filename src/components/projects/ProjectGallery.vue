<script>
export default {
	props: ['images'],
};
</script>

<template>
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div
			class="mb-10 sm:mb-0"
			v-for="image in images"
			:key="image.id"
		>
			<img
				:src="image.img"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				alt="{{ image.title }}"
			/>
		</div>
	</div>
</template>
