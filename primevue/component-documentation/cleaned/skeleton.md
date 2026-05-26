# Skeleton

## Import

```javascript
import Skeleton from 'primevue/skeleton';
```

## Card

Sample card implementation using different Skeleton components and Tailwind CSS utilities.

```vue
<div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
    <div class="flex mb-4">
        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
        <div>
            <Skeleton width="10rem" class="mb-2"></Skeleton>
            <Skeleton width="5rem" class="mb-2"></Skeleton>
            <Skeleton height=".5rem"></Skeleton>
        </div>
    </div>
    <Skeleton width="100%" height="150px"></Skeleton>
    <div class="flex justify-between mt-4">
        <Skeleton width="4rem" height="2rem"></Skeleton>
        <Skeleton width="4rem" height="2rem"></Skeleton>
    </div>
</div>
```

## Skeleton

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| shape | HintedString<"circle" \| "rectangle"> | rectangle | Shape of the element. |
| size | string | - | Size of the Circle or Square. |
| width | string | 100% | Width of the element. |
| height | string | 1rem | Height of the element. |
| borderRadius | string | - | Border radius of the element, defaults to value from theme. |
| animation | HintedString<"none" \| "wave"> | wave | Type of the animation. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<SkeletonPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
