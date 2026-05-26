# Radiobutton

## Import

```javascript
import RadioButton from 'primevue/radiobutton';
import RadioButtonGroup from 'primevue/radiobuttongroup';
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<RadioButton v-model="value" :value="1" disabled />
<RadioButton v-model="value" :value="2" disabled />
```

## Radio Button

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | any | - | Value of the checkbox. |
| modelValue | any | - | Value binding of the checkbox. |
| defaultValue | any | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | Name of the input element. |
| binary | boolean | - | Allows to select a boolean value. |
| size | HintedString<"small" \| "large"> | - | Defines the size of the component. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| variant | null \| HintedString<"outlined" \| "filled"> | null | Specifies the input variant of the component. |
| readonly | boolean | - | When present, it specifies that an input field is read-only. |
| tabindex | number | - | Index of the element in tabbing order. |
| inputId | string | - | Identifier of the underlying input element. |
| inputStyle | object | - | Inline style of the input field. |
| inputClass | string \| object | - | Style class of the input field. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | - | Establishes a string value that labels the component. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<RadioButtonPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
