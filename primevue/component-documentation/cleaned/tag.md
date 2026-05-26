# Tag

## Import

```javascript
import Tag from 'primevue/tag';
```

## Basic

Label of the tag is defined with the value property.

```vue
<Tag value="New"></Tag>
```

## Tag

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | any | - | Value to display inside the tag. |
| severity | HintedString<"secondary" \| "info" \| "success" \| "warn" \| "danger" \| "contrast"> | - | Severity type of the tag. |
| rounded | boolean | false | Whether the corners of the tag are rounded. |
| icon | string | - | Icon of the tag to display next to the value. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<TagPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
