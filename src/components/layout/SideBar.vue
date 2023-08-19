<script>
import IconButton from "../elements/IconButton"
import ListOfButtons from "../elements/ListOfButtons"

export default {
	components: {
		IconButton,
		ListOfButtons
	},
	props: {
		horizontal: Boolean
	},
	data() {
		return {
			rail: true
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
	<v-navigation-drawer class="bg-blue-grey-darken-4" :rail="rail" permanent>
		<IconButton icon="mdi-book-edit" title="EditMark" @click="action('project')"/>
		<v-divider/>
		<ListOfButtons :horizontal="horizontal" @action="(text) => {action(text)}"/>
	</v-navigation-drawer>
</template>