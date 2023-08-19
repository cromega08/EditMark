<script>
import SideBar from './components/layout/SideBar.vue';
import Header from './components/layout/Header.vue';
import MarkdownArea from './components/elements/MarkdownArea.vue';
import HTMLArea from './components/elements/HTMLArea.vue';
import utils from "./utils/utils.js"

export default {
	components: {
		Header,
		SideBar,
		MarkdownArea,
		HTMLArea
	},
	data() {
		return {
			markdown: "# EditMark",
			html: ""
		}
	},
	watch: {
		markdown(newMarkdown) {
			this.html = utils.markdownToHTML(newMarkdown)
		}
	},
	computed: {
		isPortrait() {
			return this.$vuetify.display.mobile
		}
	},
	methods: {
		handleActions(action) {
			switch(action) {
				case "erase": this.markdown = ""; break;
				case "copy": utils.copyToClipBoard(this.markdown); break;
				case "pdf": utils.saveAsPDF(this.html);  break;
				case "markdown": utils.saveAsMarkdown(this.markdown); break;
				case "html": utils.saveAsHTML(this.html);  break;
				case "help": utils.redirectToMarkdown(); break;
				case "credits": utils.redirectToGithub(); break;
				case "project": utils.redirectToProject(); break;
			}
		}
	}
}
</script>

<template>
  	<v-app class="bg-grey-darken-4">
		<Header v-if="isPortrait" :horizontal="isPortrait" @action="(text) => {handleActions(text)}"/>
		<v-main class="overflow-hidden">
			<SideBar v-if="!isPortrait" :horizontal="isPortrait" @action="(text) => {handleActions(text)}"/>
			<section :class="{ render_section_horizontal:!isPortrait, render_section_vertical:isPortrait }">
				<MarkdownArea :class="{ edit_horizontal:!isPortrait, edit_vertical:isPortrait }" :content="markdown" @markdown="(text) => {markdown = text}"/>
				<HTMLArea :class="{ edit_horizontal:!isPortrait, edit_vertical:isPortrait }" :content="html" />
			</section>
		</v-main>
  	</v-app>
</template>

<style>

html::-webkit-scrollbar {
	display: none;
}

.edit_horizontal {
	width: 40vw;
	resize: none;
}

.edit_vertical {
	height: 40vh;
	resize: none;
}

.render_section_horizontal {
	height: 80vh;
	width: 85vw;
	margin: 5vh 5vw;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
}

.render_section_vertical {
	height: 90vh;
	width: 95vw;
	margin: 2vh 2vw;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}
</style>
