import { Color } from "../common/color";
import { IMenuItem } from "./menuitem";
import { Disposable } from "../common/lifecycle";
import { Event } from "../common/event";
export declare const MENU_MNEMONIC_REGEX: RegExp;
export declare const MENU_ESCAPED_MNEMONIC_REGEX: RegExp;
export interface IMenuOptions {
    ariaLabel?: string;
    enableMnemonics?: boolean;
}
export interface IMenuStyle {
    foregroundColor?: Color;
    backgroundColor?: Color;
    selectionForegroundColor?: Color;
    selectionBackgroundColor?: Color;
    separatorColor?: Color;
}
interface ISubMenuData {
    parent: Menu;
    submenu?: Menu;
}
export declare class Menu extends Disposable {
    items: IMenuItem[];
    private focusedItem?;
    private menuContainer;
    private mnemonics;
    private options;
    private closeSubMenu;
    private triggerKeys;
    parentData: ISubMenuData;
    private _onDidCancel;
    readonly onDidCancel: Event<void>;
    constructor(container: HTMLElement, options?: IMenuOptions, closeSubMenu?: () => void);
    setAriaLabel(label: string): void;
    private isTriggerKeyEvent;
    private updateFocusedItem;
    getContainer(): HTMLElement;
    createMenu(items: IMenuItem[]): void;
    focus(index?: number): void;
    focus(selectFirst?: boolean): void;
    private focusNext;
    private focusPrevious;
    private updateFocus;
    private doTrigger;
    private cancel;
    dispose(): void;
    style(style: IMenuStyle): void;
    private focusItemByElement;
    private setFocusedItem;
}
export declare function cleanMnemonic(label: string): string;
export {};
