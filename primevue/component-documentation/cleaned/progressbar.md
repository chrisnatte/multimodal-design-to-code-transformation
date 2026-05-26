# Progressbar

## Import

```javascript
import ProgressBar from 'primevue/progressbar';
```

## Basic

ProgressBar is used with the value property.

```vue
<ProgressBar :value="50"></ProgressBar>
```

## Progress Bar

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | number | - | Current value of the progress. |
| mode | "indeterminate" \| "determinate" | determinate | Defines the mode of the progress |
| showValue | boolean | true | Whether to display the progress bar value. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<ProgressBarPassThroughOptions<any>> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
