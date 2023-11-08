<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of the brands I have worked with',
			clients: [
				{
					id: 1,
					title: 'Superhuman',
					img: require('@/assets/images/brands/superhuman_gray.png'),
				},
				{
					id: 2,
					title: 'Buzzer',
					img: require('@/assets/images/brands/buzzer_gray.png'),
				},
				{
					id: 3,
					title: 'Jusbrasil',
					img: require('@/assets/images/brands/jusbrasil_gray.png'),
				},
				{
					id: 4,
					title: 'Route',
					img: require('@/assets/images/brands/route_gray.jpeg'),
				},
				{
					id: 5,
					title: 'OLX',
					img: require('@/assets/images/brands/olx_gray.png'),
				},
				{
					id: 6,
					title: 'M4U',
					img: require('@/assets/images/brands/m4u_gray.png'),
				},
				{
					id: 7,
					title: 'Globo.com',
					img: require('@/assets/images/brands/globocom_gray.jpeg'),
				},
				{
					id: 7,
					title: 'PUMA',
					img: require('@/assets/images/brands/mar_mil_gray.jpeg'),
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
