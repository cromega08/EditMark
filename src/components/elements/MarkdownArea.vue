<script>
export default {
	props: {
		content: String
	},
	data() {
		return {
			markdown: ""
		}
	},
	emits: ["markdown"],
	watch: {
		markdown(newContent) {
			this.$emit("markdown", newContent)
		}
	},
	beforeUpdate() {
		this.markdown = this.content
	}
}
</script>

<template>
	<textarea class="bg-grey-darken-3 text-blue-grey-lighten-5 px-7 py-5" name="markdown_editor" id="markdown_editor" v-model="markdown"></textarea>
</template>
