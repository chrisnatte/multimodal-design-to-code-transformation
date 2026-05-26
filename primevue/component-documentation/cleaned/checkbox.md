# Checkbox

## Import

```javascript
import Checkbox from 'primevue/checkbox';
import CheckboxGroup from 'primevue/checkboxgroup';
```

## Basic

Binary checkbox is used with the v-model for two-way value binding and the binary property.

```vue
<Checkbox v-model="checked" binary />
```

## Checkbox

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | any | - | Value of the checkbox. |
| modelValue | any | - | Value binding of the checkbox. |
| defaultValue | any | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | Name of the input element. |
| binary | boolean | - | Allows to select a boolean value instead of multiple values. |
| indeterminate | boolean | - | When present, it specifies input state as indeterminate. |
| size | "small" \| "large" | - | Defines the size of the component. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | - | When present, it specifies that the element should be disabled. |
| variant | null \| HintedString<"outlined" \| "filled"> | null | Specifies the input variant of the component. |
| readonly | boolean | - | When present, it specifies that an input field is read-only. |
| required | boolean | - | When present, it specifies that the element is required. |
| tabindex | number | - | Index of the element in tabbing order. |
| trueValue | any | - | Value in checked state. |
| falseValue | any | - | Value in unchecked state. |
| inputId | string | - | Identifier of the underlying input element. |
| inputClass | object | - | Style class of the input field. |
| inputStyle | string \| object | - | Inline style of the input field. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | - | Establishes a string value that labels the component. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<CheckboxPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
