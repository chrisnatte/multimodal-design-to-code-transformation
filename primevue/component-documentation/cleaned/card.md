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

## Card

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<CardPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
