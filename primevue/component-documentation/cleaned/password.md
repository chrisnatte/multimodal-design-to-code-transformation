# Password

## Import

```javascript
import Password from 'primevue/password';
```

## Basic

Password is used with the v-model property for two-way value binding.

```vue
<Password v-model="value" :feedback="false" />
```

## Password

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| aria-activedescendant | string | - | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. |
| aria-atomic | Booleanish | - | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. |
| aria-autocomplete | "none" \| "inline" \| "list" \| "both" | - | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made. |
| aria-busy | Booleanish | - | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. |
| aria-checked | Booleanish \| "mixed" | - | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets. |
| aria-colcount | Numberish | - | Defines the total number of columns in a table, grid, or treegrid. |
| aria-colindex | Numberish | - | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid. |
| aria-colspan | Numberish | - | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. |
| aria-controls | string | - | Identifies the element (or elements) whose contents or presence are controlled by the current element. |
| aria-current | Booleanish \| "page" \| "step" \| "location" \| "date" \| "time" | - | Indicates the element that represents the current item within a container or set of related elements. |
| aria-describedby | string | - | Identifies the element (or elements) that describes the object. |
| aria-details | string | - | Identifies the element that provides a detailed, extended description for the object. |
| aria-disabled | Booleanish | - | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. |
| aria-dropeffect | "link" \| "none" \| "copy" \| "execute" \| "move" \| "popup" | - | Indicates what functions can be performed when a dragged object is released on the drop target. |
| aria-errormessage | string | - | Identifies the element that provides an error message for the object. |
| aria-expanded | Booleanish | - | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. |
| aria-flowto | string | - | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order. |
| aria-grabbed | Booleanish | - | Indicates an element's "grabbed" state in a drag-and-drop operation. |
| aria-haspopup | Booleanish \| "menu" \| "listbox" \| "tree" \| "grid" \| "dialog" | - | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. |
| aria-hidden | Booleanish | - | Indicates whether the element is exposed to an accessibility API. |
| aria-invalid | Booleanish \| "grammar" \| "spelling" | - | Indicates the entered value does not conform to the format expected by the application. |
| aria-keyshortcuts | string | - | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. |
| aria-label | string | - | Defines a string value that labels the current element. |
| aria-labelledby | string | - | Identifies the element (or elements) that labels the current element. |
| aria-level | Numberish | - | Defines the hierarchical level of an element within a structure. |
| aria-live | "off" \| "assertive" \| "polite" | - | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. |
| aria-modal | Booleanish | - | Indicates whether an element is modal when displayed. |
| aria-multiline | Booleanish | - | Indicates whether a text box accepts multiple lines of input or only a single line. |
| aria-multiselectable | Booleanish | - | Indicates that the user may select more than one item from the current selectable descendants. |
| aria-orientation | "horizontal" \| "vertical" | - | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. |
| aria-owns | string | - | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship. |
| aria-placeholder | string | - | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format. |
| aria-posinset | Numberish | - | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. |
| aria-pressed | Booleanish \| "mixed" | - | Indicates the current "pressed" state of toggle buttons. |
| aria-readonly | Booleanish | - | Indicates that the element is not editable, but is otherwise operable. |
| aria-relevant | "text" \| "additions" \| "additions removals" \| "additions text" \| "all" \| "removals" \| "removals additions" \| "removals text" \| "text additions" \| "text removals" | - | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. |
| aria-required | Booleanish | - | Indicates that user input is required on the element before a form may be submitted. |
| aria-roledescription | string | - | Defines a human-readable, author-localized description for the role of an element. |
| aria-rowcount | Numberish | - | Defines the total number of rows in a table, grid, or treegrid. |
| aria-rowindex | Numberish | - | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid. |
| aria-rowspan | Numberish | - | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid. |
| aria-selected | Booleanish | - | Indicates the current "selected" state of various widgets. |
| aria-setsize | Numberish | - | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. |
| aria-sort | "none" \| "ascending" \| "descending" \| "other" | - | Indicates if items in a table or grid are sorted in ascending or descending order. |
| aria-valuemax | Numberish | - | Defines the maximum allowed value for a range widget. |
| aria-valuemin | Numberish | - | Defines the minimum allowed value for a range widget. |
| aria-valuenow | Numberish | - | Defines the current value for a range widget. |
| aria-valuetext | string | - | Defines the human readable text alternative of aria-valuenow for a range widget. |
| innerHTML | string | - |  |
| class | ClassValue | - |  |
| style | StyleValue | - |  |
| accesskey | string | - |  |
| contenteditable | Booleanish \| "inherit" \| "plaintext-only" | - |  |
| contextmenu | string | - |  |
| dir | string | - |  |
| draggable | Booleanish | - |  |
| enterkeyhint | "enter" \| "done" \| "go" \| "next" \| "previous" \| "search" \| "send" | - |  |
| enterKeyHint | "enter" \| "done" \| "go" \| "next" \| "previous" \| "search" \| "send" | - |  |
| hidden | "" \| Booleanish \| "hidden" \| "until-found" | - |  |
| id | string | - |  |
| inert | Booleanish | - |  |
| lang | string | - |  |
| spellcheck | Booleanish | - |  |
| tabindex | Numberish | - |  |
| title | string | - |  |
| translate | "yes" \| "no" | - |  |
| radiogroup | string | - |  |
| role | string | - |  |
| about | string | - |  |
| datatype | string | - |  |
| inlist | any | - |  |
| prefix | string | - |  |
| property | string | - |  |
| resource | string | - |  |
| typeof | string | - |  |
| vocab | string | - |  |
| autocapitalize | string | - |  |
| autocorrect | string | - |  |
| autosave | string | - |  |
| color | string | - |  |
| itemprop | string | - |  |
| itemscope | Booleanish | - |  |
| itemtype | string | - |  |
| itemid | string | - |  |
| itemref | string | - |  |
| results | Numberish | - |  |
| security | string | - |  |
| unselectable | "on" \| "off" | - |  |
| inputmode | "text" \| "search" \| "none" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal" | - | Hints at the type of data that might be entered by the user while editing the element or its contents |
| is | string | - | Specify that a standard HTML element should behave like a defined custom built-in element |
| exportparts | string | - |  |
| part | string | - |  |
| accept | string | - |  |
| alt | string | - |  |
| autocomplete | InputAutoCompleteAttribute | - |  |
| capture | boolean \| "user" \| "environment" | - |  |
| checked | any[] \| Set<any> \| Booleanish | - |  |
| crossorigin | string | - |  |
| form | string | - |  |
| formaction | string | - |  |
| formenctype | string | - |  |
| formmethod | string | - |  |
| formnovalidate | Booleanish | - |  |
| formtarget | string | - |  |
| height | Numberish | - |  |
| indeterminate | boolean | - |  |
| list | string | - |  |
| max | Numberish | - |  |
| maxlength | Numberish | - |  |
| min | Numberish | - |  |
| minlength | Numberish | - |  |
| multiple | Booleanish | - |  |
| pattern | string | - |  |
| readonly | Booleanish | - |  |
| src | string | - |  |
| step | Numberish | - |  |
| type | InputTypeHTMLAttribute | - |  |
| value | any | - |  |
| width | Numberish | - |  |
| onCancel | Function | - |  |
| onCopy | Function | - |  |
| onCut | Function | - |  |
| onPaste | Function | - |  |
| onCompositionend | Function | - |  |
| onCompositionstart | Function | - |  |
| onCompositionupdate | Function | - |  |
| onDrag | Function | - |  |
| onDragend | Function | - |  |
| onDragenter | Function | - |  |
| onDragexit | Function | - |  |
| onDragleave | Function | - |  |
| onDragover | Function | - |  |
| onDragstart | Function | - |  |
| onDrop | Function | - |  |
| onFocus | Function | - |  |
| onFocusin | Function | - |  |
| onFocusout | Function | - |  |
| onBlur | Function | - |  |
| onChange | Function | - |  |
| onBeforeinput | Function | - |  |
| onFormdata | Function | - |  |
| onInput | Function | - |  |
| onReset | Function | - |  |
| onSubmit | Function | - |  |
| onInvalid | Function | - |  |
| onFullscreenchange | Function | - |  |
| onFullscreenerror | Function | - |  |
| onLoad | Function | - |  |
| onError | Function | - |  |
| onKeydown | Function | - |  |
| onKeypress | Function | - |  |
| onKeyup | Function | - |  |
| onDblclick | Function | - |  |
| onMousedown | Function | - |  |
| onMouseenter | Function | - |  |
| onMouseleave | Function | - |  |
| onMousemove | Function | - |  |
| onMouseout | Function | - |  |
| onMouseover | Function | - |  |
| onMouseup | Function | - |  |
| onAbort | Function | - |  |
| onCanplay | Function | - |  |
| onCanplaythrough | Function | - |  |
| onDurationchange | Function | - |  |
| onEmptied | Function | - |  |
| onEncrypted | Function | - |  |
| onEnded | Function | - |  |
| onLoadeddata | Function | - |  |
| onLoadedmetadata | Function | - |  |
| onLoadstart | Function | - |  |
| onPause | Function | - |  |
| onPlay | Function | - |  |
| onPlaying | Function | - |  |
| onProgress | Function | - |  |
| onRatechange | Function | - |  |
| onSeeked | Function | - |  |
| onSeeking | Function | - |  |
| onStalled | Function | - |  |
| onSuspend | Function | - |  |
| onTimeupdate | Function | - |  |
| onVolumechange | Function | - |  |
| onWaiting | Function | - |  |
| onSelect | Function | - |  |
| onScroll | Function | - |  |
| onScrollend | Function | - |  |
| onTouchcancel | Function | - |  |
| onTouchend | Function | - |  |
| onTouchmove | Function | - |  |
| onTouchstart | Function | - |  |
| onAuxclick | Function | - |  |
| onClick | Function | - |  |
| onContextmenu | Function | - |  |
| onGotpointercapture | Function | - |  |
| onLostpointercapture | Function | - |  |
| onPointerdown | Function | - |  |
| onPointermove | Function | - |  |
| onPointerup | Function | - |  |
| onPointercancel | Function | - |  |
| onPointerenter | Function | - |  |
| onPointerleave | Function | - |  |
| onPointerover | Function | - |  |
| onPointerout | Function | - |  |
| onBeforetoggle | Function | - |  |
| onToggle | Function | - |  |
| onWheel | Function | - |  |
| onAnimationcancel | Function | - |  |
| onAnimationstart | Function | - |  |
| onAnimationend | Function | - |  |
| onAnimationiteration | Function | - |  |
| onSecuritypolicyviolation | Function | - |  |
| onTransitioncancel | Function | - |  |
| onTransitionend | Function | - |  |
| onTransitionrun | Function | - |  |
| onTransitionstart | Function | - |  |
| modelValue | Nullable<string> | - | Value of the component. |
| defaultValue | Nullable<string> | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| promptLabel | string | - | Text to prompt password entry. Defaults to PrimeVue Locale configuration. |
| mediumRegex | string \| RegExp | ^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}) | Regex for a medium level password. |
| strongRegex | string \| RegExp | ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}) | Regex for a strong level password. |
| weakLabel | string | - | Text for a weak password. Defaults to PrimeVue Locale configuration. |
| mediumLabel | string | - | Text for a medium password. Defaults to PrimeVue Locale configuration. |
| strongLabel | string | - | Text for a strong password. Defaults to PrimeVue Locale configuration. |
| feedback | boolean | true | Whether to show the strength indicator or not. |
| appendTo | HTMLElement \| HintedString<"body" \| "self"> | body | A valid query selector or an HTMLElement to specify where the overlay gets attached. |
| toggleMask | boolean | false | Whether to show an icon to display the password as plain text. |
| maskIcon | string | - | Icon to hide displaying the password as plain text. |
| unmaskIcon | string | - | Icon to show displaying the password as plain text. |
| showClear | boolean | false | When enabled, a clear icon is displayed to clear the value. |
| size | HintedString<"small" \| "large"> | - | Defines the size of the component. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| variant | null \| HintedString<"outlined" \| "filled"> | null | Specifies the input variant of the component. |
| placeholder | string | - | Placeholder text for the input. |
| required | boolean | false | When present, it specifies that an input field must be filled out before submitting the form. |
| fluid | boolean | null | Spans 100% width of the container when enabled. |
| autofocus | boolean | null | When present, it specifies that an input element should automatically get focus when the page loads. |
| inputId | string | - | Identifier of the underlying input element. |
| inputStyle | object | - | Inline style of the input field. |
| inputClass | string \| object | - | Style class of the input field. |
| inputProps | InputHTMLAttributes | - | Used to pass all properties of the HTMLInputElement to the focusable input element inside the component. |
| panelId | string | - | Identifier of the underlying overlay panel element. |
| panelClass | string \| object | - | Style class of the overlay panel. |
| panelStyle | object | - | Inline style of the overlay panel. |
| panelProps | HTMLAttributes | - | Used to pass all properties of the HTMLDivElement to the overlay panel inside the component. |
| overlayId | string | - | Identifier of the underlying overlay element. |
| overlayClass | string \| object | - | Style class of the overlay. |
| overlayStyle | object | - | Inline style of the overlay. |
| overlayProps | HTMLAttributes | - | Used to pass all properties of the HTMLDivElement to the overlay inside the component. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | - | Establishes a string value that labels the component. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<PasswordPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
