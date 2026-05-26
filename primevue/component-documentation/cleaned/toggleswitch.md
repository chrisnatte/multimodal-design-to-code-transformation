# Toggleswitch

## Import

```javascript
import ToggleSwitch from 'primevue/toggleswitch';
```

## Basic

ToggleSwitch is used with the v-model property for two-way value binding.

```vue
<ToggleSwitch v-model="checked" />
```

## Toggle Switch

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | string \| boolean | false | Specifies whether a toggleswitch should be checked or not. |
| defaultValue | string \| boolean | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| trueValue | any | true | Value in checked state. |
| falseValue | any | false | Value in unchecked state. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| readonly | boolean | - | When present, it specifies that an input field is read-only. |
| tabindex | number | - | Index of the element in tabbing order. |
| inputId | string | - | Identifier of the underlying input element. |
| inputClass | string \| object | - | Style class of the input field. |
| inputStyle | object | - | Inline style of the input field. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | - | Establishes a string value that labels the component. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<ToggleSwitchPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
