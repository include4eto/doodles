var Doodles = (function () {
	var currentPage = ko.observable('');

	function goToPage(page) {
		currentPage(page);
		$("iframe").focus();
	}

	function refreshFrame() {
		$("iframe")[0].contentWindow.location.reload();
		$("iframe").focus();
	}

	return {
		currentPage: currentPage,
		goToPage: goToPage,
		refreshFrame: refreshFrame
	};
}());

window.onload = function () {
	ko.applyBindings(Doodles);
}