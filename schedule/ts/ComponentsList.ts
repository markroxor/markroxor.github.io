import * as list from './list';
import ComponentsArray from './ComponentsArray'
import UiComponent from './UiComponent';

export default class ComponentsList implements UiComponent {
    constructor(private _componentsList: list.List<UiComponent>) {
    }

    appendTo(entry: HTMLElement | null): void {
        new ComponentsArray(this._componentsList.asArray()).appendTo(entry);
    }
}
