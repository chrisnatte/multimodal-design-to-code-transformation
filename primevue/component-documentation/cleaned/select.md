# Select

## Import

```javascript
import Select from 'primevue/select';
```

## Basic

Select is used with the v-model property for two-way value binding along with the options collection. Label and value of an option are defined with the optionLabel and optionValue properties respectively. Note that, when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary.

```vue
<Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
```

## Template

Select offers multiple slots for customization through templating.

```vue
<Select v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select a Country" class="w-full md:w-56">
    <template #value="slotProps">
        <div v-if="slotProps.value" class="flex items-center">
            <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.value.code.toLowerCase()}\`" style="width: 18px" />
            <div>{{ slotProps.value.name }}</div>
        </div>
        <span v-else>
            {{ slotProps.placeholder }}
        </span>
    </template>
    <template #option="slotProps">
        <div class="flex items-center">
            <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.option.code.toLowerCase()}\`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
        </div>
    </template>
    <template #dropdownicon>
        <i class="pi pi-map" />
    </template>
    <template #header>
        <div class="font-medium p-3">Available Countries</div>
    </template>
    <template #footer>
        <div class="p-3">
            <Button label="Add New" fluid severity="secondary" variant="text" size="small" icon="pi pi-plus" />
        </div>
    </template>
</Select>
```

## Select

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | any | - | Value of the component. |
| defaultValue | any | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| options | any[] | - | An array of select items to display as the available options. |
| optionLabel | string \| Function | - | Property name or getter function to use as the label of an option. |
| optionValue | string \| Function | - | Property name or getter function to use as the value of an option, defaults to the option itself when not defined. |
| optionDisabled | string \| Function | - | Property name or getter function to use as the disabled flag of an option, defaults to false when not defined. |
| optionGroupLabel | string \| Function | - | Property name or getter function to use as the label of an option group. |
| optionGroupChildren | string \| Function | - | Property name or getter function that refers to the children options of option group. |
| scrollHeight | string | 14rem | Height of the viewport, a scrollbar is defined if height of list exceeds this value. |
| filter | boolean | false | When specified, displays a filter input at header. |
| filterPlaceholder | string | - | Placeholder text to show when filter input is empty. |
| filterLocale | string | - | Locale to use in filtering. The default locale is the host environment's current locale. |
| filterMatchMode | HintedString<"startsWith" \| "contains" \| "endsWith"> | contains | Defines the filtering algorithm to use when searching the options. |
| filterFields | string[] | - | Fields used when filtering the options, defaults to optionLabel. |
| editable | boolean | false | When present, custom value instead of predefined options can be entered using the editable input field. |
| placeholder | string | - | Default text to display when no option is selected. |
| size | HintedString<"small" \| "large"> | - | Defines the size of the component. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| variant | null \| HintedString<"outlined" \| "filled"> | null | Specifies the input variant of the component. |
| dataKey | string | - | A property to uniquely identify an option. |
| showClear | boolean | false | When enabled, a clear icon is displayed to clear the value. |
| fluid | boolean | null | Spans 100% width of the container when enabled. |
| inputId | string | - |  |
| inputStyle | object | - |  |
| inputClass | string \| object | - |  |
| labelId | string | - | Identifier of the underlying label element. |
| labelStyle | object | - | Inline style of the label field. |
| labelClass | string \| object | - | Style class of the label field. |
| panelStyle | object | - |  |
| panelClass | string \| object | - |  |
| overlayStyle | object | - | Inline style of the overlay. |
| overlayClass | string \| object | - | Style class of the overlay. |
| appendTo | HTMLElement \| HintedString<"body" \| "self"> | body | A valid query selector or an HTMLElement to specify where the overlay gets attached. |
| loading | boolean | false | Whether the select is in loading state. |
| clearIcon | string | - | Icon to display in clear button. |
| dropdownIcon | string | - | Icon to display in the select. |
| filterIcon | string | - | Icon to display in filter input. |
| loadingIcon | string | - | Icon to display in loading state. |
| resetFilterOnHide | boolean | false | Clears the filter value when hiding the select. |
| resetFilterOnClear | boolean | false | Clears the filter value when clicking on the clear icon. |
| virtualScrollerOptions | any | - | Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it. |
| autoOptionFocus | boolean | false | Whether to focus on the first visible or selected element when the overlay panel is shown. |
| autoFilterFocus | boolean | false | Whether to focus on the filter element when the overlay panel is shown. |
| selectOnFocus | boolean | false | When enabled, the focused option is selected. |
| focusOnHover | boolean | true | When enabled, the focus is placed on the hovered option. |
| highlightOnSelect | boolean | true | Whether the selected option will be add highlight class. |
| checkmark | boolean | false | Whether the selected option will be shown with a check mark. |
| filterMessage | string | '{0} results are available' | Text to be displayed in hidden accessible field when filtering returns any results. Defaults to value from PrimeVue locale configuration. |
| selectionMessage | string | '{0} items selected' | Text to be displayed in hidden accessible field when options are selected. Defaults to value from PrimeVue locale configuration. |
| emptySelectionMessage | string | No selected item | Text to be displayed in hidden accessible field when any option is not selected. Defaults to value from PrimeVue locale configuration. |
| emptyFilterMessage | string | No results found | Text to display when filtering does not return any results. Defaults to value from PrimeVue locale configuration. |
| emptyMessage | string | No available options | Text to display when there are no options available. Defaults to value from PrimeVue locale configuration. |
| tabindex | string \| number | - | Index of the element in tabbing order. |
| ariaLabel | string | - | Defines a string value that labels an interactive element. |
| ariaLabelledby | string | - | Identifier of the underlying input element. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<SelectPassThroughOptions<any>> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
