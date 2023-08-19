<script>
import IconButton from "../elements/IconButton"
import ListOfButtons from "../elements/ListOfButtons"

export default {
	components: {
		IconButton,
		ListOfButtons
	},
	props: {
		horizontal: Boolean,
		markdown: String,
		html: String
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
	<v-app-bar class="bg-blue-grey-darken-4" clipped-left clipped-right>
		<v-toolbar class="bg-blue-grey-darken-4" >
			<v-toolbar-items class="px-6" @click="action('project')">
				<IconButton icon="mdi-book-edit" title="EditMark"/>
			</v-toolbar-items>
			<v-spacer></v-spacer>
			<v-toolbar-items class="overflow-x-auto bg-blue-grey-darken-4">
				<ListOfButtons class="small-icons" :horizontal="horizontal" @action="(text) => {action(text)}"/>
			</v-toolbar-items>
		</v-toolbar>
	</v-app-bar>
</template>

<style >
.small-icons > div {
	margin: 0 1em;
}
</style>