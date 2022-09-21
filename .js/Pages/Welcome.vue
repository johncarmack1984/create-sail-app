<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import Welcome from '@/Components/Welcome.vue';

defineProps({
	canLogin: Boolean,
	canRegister: Boolean,
	laravelVersion: String,
	phpVersion: String,
});
</script>

<template>
	<Head title="Welcome" />

	<div class="">
		<div
			v-if="canLogin"
			class="fixed top-0 right-0 hidden px-6 py-4 sm:block"
		>
			<Link
				v-if="$page.props.user"
				:href="route('dashboard')"
				class="text-sm text-gray-700 underline dark:text-gray-500"
			>
				Dashboard
			</Link>

			<template v-else>
				<Link
					:href="route('login')"
					class="text-sm text-gray-700 underline dark:text-gray-500"
				>
					Log in
				</Link>

				<Link
					v-if="canRegister"
					:href="route('register')"
					class="ml-4 text-sm text-gray-700 underline dark:text-gray-500"
				>
					Register
				</Link>
			</template>
		</div>
		<Welcome />
	</div>
</template>
