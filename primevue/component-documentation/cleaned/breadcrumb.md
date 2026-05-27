# Breadcrumb

## Import

```javascript
import Breadcrumb from 'primevue/breadcrumb';
```

## Basic

Breadcrumb requires a collection of menuitems as its model , the root item is defined with the home property.

```vue
<Breadcrumb :home="home" :model="items" />
```

## Template

Custom content can be placed inside the items using the item template. The divider between the items has its own separator template.

```vue
<Breadcrumb :home="home" :model="items">
    <template #item="{ item }">
        <a class="cursor-pointer" :href="item.url">
            <span :class="item.icon"></span>
        </a>
    </template>
    <template #separator> / </template>
</Breadcrumb>
```
