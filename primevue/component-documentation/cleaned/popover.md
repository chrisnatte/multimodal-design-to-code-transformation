# Popover

## Import

```javascript
import Popover from 'primevue/popover';
```

## Basic

Popover is accessed via its ref and visibility is controlled using toggle , show and hide functions with an event of the target.

```vue
<Button type="button" icon="pi pi-share-alt" label="Share" @click="toggle" />

<Popover ref="op">
    <div class="flex flex-col gap-4 w-[25rem]">
        <div>
            <span class="font-medium block mb-2">Share this document</span>
            <InputGroup>
                <InputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-[25rem]"></InputText>
                <InputGroupAddon>
                    <i class="pi pi-copy"></i>
                </InputGroupAddon>
            </InputGroup>
        </div>
        <div>
            <span class="font-medium block mb-2">Invite Member</span>
            <InputGroup>
                <InputText disabled />
                <Button label="Invite" icon="pi pi-users"></Button>
            </InputGroup>
        </div>
        <div>
            <span class="font-medium block mb-2">Team Members</span>
            <ul class="list-none p-0 m-0 flex flex-col gap-4">
                <li v-for="member in members" :key="member.name" class="flex items-center gap-2">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${member.image}\`" style="width: 32px" />
                    <div>
                        <span class="font-medium">{{ member.name }}</span>
                        <div class="text-sm text-surface-500 dark:text-surface-400">{{ member.email }}</div>
                    </div>
                    <div class="flex items-center gap-2 text-surface-500 dark:text-surface-400 ml-auto text-sm">
                        <span>{{ member.role }}</span>
                        <i class="pi pi-angle-down"></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</Popover>
```

## Popover

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dismissable | boolean | true | Enables to hide the overlay when outside is clicked. |
| appendTo | HTMLElement \| HintedString<"body" \| "self"> | body | A valid query selector or an HTMLElement to specify where the overlay gets attached. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| breakpoints | PopoverBreakpoints | - | Object literal to define widths per screen size. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<PopoverPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
| closeOnEscape | boolean | true | Specifies if pressing escape key should hide the dialog. |
