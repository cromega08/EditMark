import { marked } from "marked"
import jsPDF from "jspdf"

function markdownToHTML(markdown) {
	return marked(markdown)
}

function copyToClipBoard(text) {
	navigator.clipboard.writeText(text)
		.then(() => alert("Text copy to Clipboard"))
		.catch(() => alert("Error copying text to Clipboard"))
}

function saveAsPDF(html) {
	const jspdf = new jsPDF()
	jspdf.html(
		html,
		{
			callback: () => {
				jspdf.save("document.pdf")
			}
		}
	)
}

function saveAsMarkdown(markdown) {
	const downloader = createHyperLink("data:text/markdown;charset=utf-8", markdown)
	downloader.setAttribute("download", "document.md")
	singleCallToHyper(downloader)
}

function saveAsHTML(html) {
	const downloader = createHyperLink("data:text/html;charset=utf-8", html)
	downloader.setAttribute("download", "document.html")
	singleCallToHyper(downloader)
}

function redirectToMarkdown() {
	const redirect = createHyperLink("https://www.markdownguide.org/")
	redirect.setAttribute("target", "_blank")
	redirect.setAttribute("rel", "noopener noreferrer")
	singleCallToHyper(redirect)
}

function redirectToGithub() {
	const redirect = createHyperLink("https://github.com/cromega08")
	redirect.setAttribute("target", "_blank")
	redirect.setAttribute("rel", "noopener noreferrer")
	singleCallToHyper(redirect)
}

function redirectToProject() {
	const redirect = createHyperLink("https://github.com/cromega08/EditMark")
	redirect.setAttribute("target", "_blank")
	redirect.setAttribute("rel", "noopener noreferrer")
	singleCallToHyper(redirect)
}

function createHyperLink(header, content) {
	const hasContent = [
		(content !== undefined),
		(content !== null)
	].every((validation) => validation === true)
	const hyperlink = document.createElement("a")
		
	hyperlink.setAttribute("href", header + (hasContent ? `,${encodeURIComponent(content)}` : ""))
	hyperlink.style.display = "none"

	return hyperlink
}

function singleCallToHyper(hyperlink) {
	document.body.appendChild(hyperlink)
	hyperlink.click()
	document.body.removeChild(hyperlink)
}

export default {
	markdownToHTML,
	copyToClipBoard,
	saveAsPDF,
	saveAsMarkdown,
	saveAsHTML,
	redirectToMarkdown,
	redirectToGithub,
	redirectToProject
}
