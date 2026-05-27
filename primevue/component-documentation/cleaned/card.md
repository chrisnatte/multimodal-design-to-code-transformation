# Card

## Import

```javascript
import Card from 'primevue/card';
```

## Basic

A simple Card is created with a title property along with the content as children.

```vue
<Card>
    <template #title>Simple Card</template>
    <template #content>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
        </p>
    </template>
</Card>
```

## Advanced

Card provides header , title , subtitle , content and footer as the named templates to place content.

```vue
<Card style="width: 25rem; overflow: hidden">
    <template #header>
        <img alt="user header" src="/images/usercard.png" />
    </template>
    <template #title>Advanced Card</template>
    <template #subtitle>Card subtitle</template>
    <template #content>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
        </p>
    </template>
    <template #footer>
        <div class="flex gap-4 mt-1">
            <Button label="Cancel" severity="secondary" variant="outlined" class="w-full" />
            <Button label="Save" class="w-full" />
        </div>
    </template>
</Card>
```

## Card

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<CardPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
