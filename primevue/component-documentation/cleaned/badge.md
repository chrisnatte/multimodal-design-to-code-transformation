# Badge

## Import

```javascript
// import as component
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';
```

## Basic

Content to display is defined with the value property or the default slot.

```vue
<Badge value="2"></Badge>
<Badge>10</Badge>
```

## Badge

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string \| number | - | Value to display inside the badge. |
| severity | null \| HintedString<"secondary" \| "info" \| "success" \| "warn" \| "danger" \| "contrast"> | - | Severity type of the badge. |
| size | null \| HintedString<"small" \| "large" \| "xlarge"> | - | Size of the badge, valid options are 'small', 'large', and 'xlarge'. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<BadgePassThroughOptions<any>> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
