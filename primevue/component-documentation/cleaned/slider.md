# Slider

## Import

```javascript
import Slider from 'primevue/slider';
```

## Basic

Slider is used with the v-model property for two-way value binding.

```vue
<Slider v-model="value" class="w-56" />
```

## Slider

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | number \| number[] | - | Value of the component. |
| defaultValue | number \| number[] | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| min | number | 0 | Mininum boundary value. |
| max | number | 100 | Maximum boundary value. |
| orientation | HintedString<"horizontal" \| "vertical"> | horizontal | Orientation of the slider. |
| step | number | 1 | Step factor to increment/decrement the value. |
| range | boolean | false | When speficed, allows two boundary values to be picked. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| tabindex | number | - | Index of the element in tabbing order. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | - | Used to define a string that labels the element. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<SliderPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
