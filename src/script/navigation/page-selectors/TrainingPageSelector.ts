import PageSelectorStrategy from "../PageSelectorStrategy";
import ContentViewNavigator from "../ContentViewNavigator";
import TrainingPage from "../../../pages/training/TrainingPage.svelte";
import Menus from "../Menus";

class TrainingPageSelector extends PageSelectorStrategy {
	navigate(contentViewNavigation: ContentViewNavigator) {
		contentViewNavigation.setContentComponent(TrainingPage);
		Menus.openMenu(1);
	}
}

export default TrainingPageSelector;