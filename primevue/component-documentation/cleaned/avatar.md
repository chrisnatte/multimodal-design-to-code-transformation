# Avatar

## Import

```javascript
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';   //Optional for grouping
```

## AvatarGroup

Grouping is available by wrapping multiple Avatar components inside an AvatarGroup.

```vue
<AvatarGroup>
    <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
    <Avatar image="/images/avatar/asiyajavayant.png" shape="circle" />
    <Avatar image="/images/avatar/onyamalimba.png" shape="circle" />
    <Avatar image="/images/avatar/ionibowcher.png" shape="circle" />
    <Avatar image="/images/avatar/xuxuefeng.png" shape="circle" />
    <Avatar label="+2" shape="circle" />
</AvatarGroup>
```

## Avatar

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Defines the text to display. |
| icon | string | - | Defines the icon to display. |
| image | string | - | Defines the image to display. |
| size | HintedString<"large" \| "normal" \| "xlarge"> | normal | Size of the element. |
| shape | HintedString<"square" \| "circle"> | square | Shape of the element. |
| ariaLabel | string | - | Establishes a string value that labels the component. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<AvatarPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
