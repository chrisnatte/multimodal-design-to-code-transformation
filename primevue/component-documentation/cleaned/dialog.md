# Dialog

## Import

```javascript
import Dialog from 'primevue/dialog';
```

## Basic

Dialog is used as a container and visibility is controlled with a binding to visible property.

```vue
<Button label="Show" @click="visible = true" />

<Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <InputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Save" @click="visible = false"></Button>
    </div>
</Dialog>
```

## Dialog

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| header | string | - | Title content of the dialog. |
| footer | string | - | Footer content of the dialog. |
| visible | boolean | false | Specifies the visibility of the dialog. |
| modal | boolean | false | Defines if background should be blocked when dialog is displayed. |
| contentStyle | any | - | Style of the content section. |
| contentClass | any | - | Style class of the content section. |
| contentProps | HTMLAttributes | - | Used to pass all properties of the HTMLDivElement to the overlay Dialog inside the component. |
| closable | boolean | true | Adds a close icon to the header to hide the dialog. |
| dismissableMask | boolean | false | Specifies if clicking the modal background should hide the dialog. |
| closeOnEscape | boolean | true | Specifies if pressing escape key should hide the dialog. |
| showHeader | boolean | true | Whether to show the header or not. |
| blockScroll | boolean | false | Whether background scroll should be blocked when dialog is visible. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| position | HintedString<"left" \| "right" \| "top" \| "bottom" \| "center" \| "topleft" \| "topright" \| "bottomleft" \| "bottomright"> | center | Position of the dialog. |
| maximizable | boolean | false | Whether the dialog can be displayed full screen. |
| breakpoints | DialogBreakpoints | - | Object literal to define widths per screen size. |
| draggable | boolean | true | Enables dragging to change the position using header. |
| keepInViewport | boolean | true | Keeps dialog in the viewport when dragging. |
| minX | number | 0. | Minimum value for the left coordinate of dialog in dragging. |
| minY | number | 0 | Minimum value for the top coordinate of dialog in dragging. |
| appendTo | HTMLElement \| HintedString<"body" \| "self"> | body | A valid query selector or an HTMLElement to specify where the dialog gets attached. |
| style | any | - | Style of the dynamic dialog. |
| closeIcon | string | - | Icon to display in the dialog close button. |
| maximizeIcon | string | - | Icon to display in the dialog maximize button when dialog is not maximized. |
| minimizeIcon | string | - | Icon to display in the dialog maximize button when dialog is minimized. |
| closeButtonProps | object | - | Used to pass all properties of the ButtonProps to the Button component. |
| maximizeButtonProps | object | - | Used to pass all properties of the ButtonProps to the Button component. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<DialogPassThroughOptions<any>> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
