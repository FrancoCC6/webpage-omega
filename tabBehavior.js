let 
	current_index 		= 0,
	all_content_panes 	= document.getElementsByClassName("content-pane"),
	all_tabs 			= document.getElementsByClassName("tab"),
	pane_container		= document.getElementsByClassName("pane-container"),
	timeout,
	collapsing,
	testing_features 	= false;


function collapseTab(event) {
	if (testing_features) console.log(`#${event.target.id}`);

	if (!collapsing) {
		all_content_panes[current_index].setAttribute("hidden", "true");
		all_tabs[current_index].classList.remove("selected");

		// ANIMAR ESCONDER PANE SALIENTE
		pane_container[0].classList.add("transitioning");
	}
	else {
		all_content_panes[event.target.id - 1].removeAttribute("hidden");
		all_tabs[event.target.id - 1].classList.add("selected");

		// ANIMAR MOSTRAR PANE ENTRANTE
		pane_container[0].classList.remove("transitioning");

		current_index = event.target.id - 1;
	}
	
	collapsing = !collapsing;

	if (collapsing) timeout = setTimeout(collapseTab(event), 500);
}
