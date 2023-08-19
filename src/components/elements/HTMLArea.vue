<script>
export default {
	props: {
		content: String
	}
}
</script>

<template>
	<div class="bg-blue-grey-darken-4 text-deep-orange-lighten-5 overflow-x-hidden overflow-y-auto px-10 py-5" v-html="content"></div>
</template>