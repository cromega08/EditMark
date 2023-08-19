<script>
import IconButton from "./IconButton"

export default {
	components: {
		IconButton
	},
	props: {
		horizontal: Boolean,
		markdown: String,
		html: String
	},
	computed: {
		listClasses() {
			return this.horizontal ? "d-flex flex-row bg-blue-grey-darken-4" : "bg-blue-grey-darken-4"
		}
	},
	emits: ["action"],
	methods: {
		action(action) {
			this.$emit("action", action)
		}
	}
}
</script>

<template>
	<v-list :class="listClasses" density="compact" nav>
		<IconButton icon="mdi-eraser" title="Delete Text" @click="action('erase')"/>
		<IconButton icon="mdi-content-copy" title="Copy Text" @click="action('copy')"/>
		<IconButton icon="mdi-file-pdf-box" title="Download PDF" @click="action('pdf')"/>
		<IconButton icon="mdi-language-markdown" title="Download Markdown" @click="action('markdown')"/>
		<IconButton icon="mdi-language-html5" title="Download HTML" @click="action('html')"/>
		<IconButton icon="mdi-help-circle" title="Help" @click="action('help')"/>
		<IconButton icon="mdi-creation" title="Credits" @click="action('credits')"/>
	</v-list>	
</template>