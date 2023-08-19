<script>
export default {
	props: {
		icon: String,
		title: String
	}
}
</script>

<template>
	<v-list-item class="d-flex justify-center pa-0" :title.attr="title">
		<v-icon size="large" color="grey darken-3" :icon="icon"/>
	</v-list-item>
</template>