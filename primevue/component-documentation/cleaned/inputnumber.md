# Inputnumber

## Import

```javascript
import InputNumber from 'primevue/inputnumber';
```

## Buttons

Spinner buttons are enabled using the showButtons property and layout is defined with the buttonLayout .

```vue
<InputNumber v-model="value1" inputId="stacked-buttons" showButtons mode="currency" currency="USD" fluid />
<InputNumber v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" fluid />
<InputNumber v-model="value3" inputId="horizontal-buttons" showButtons buttonLayout="horizontal" :step="0.25" mode="currency" currency="EUR" fluid>
    <template #incrementbuttonicon>
        <span class="pi pi-plus" />
    </template>
    <template #decrementbuttonicon>
        <span class="pi pi-minus" />
    </template>
</InputNumber>
```

## Input Number

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | Nullable<number> | - | Value of the component. |
| defaultValue | Nullable<number> | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| format | boolean | true | Whether to format the value. |
| showButtons | boolean | false | Displays spinner buttons. |
| buttonLayout | HintedString<"horizontal" \| "vertical" \| "stacked"> | stacked | Layout of the buttons. |
| incrementButtonClass | string | - | Style class of the increment button. |
| decrementButtonClass | string | - | Style class of the decrement button. |
| incrementButtonIcon | string | - | Style class of the increment icon. |
| incrementIcon | string | - | Style class of the increment icon. |
| decrementButtonIcon | string | - | Style class of the decrement icon. |
| decrementIcon | string | - | Style class of the decrement icon. |
| locale | string | - | Locale to be used in formatting. |
| localeMatcher | HintedString<"lookup" \| "best fit"> | best fit | The locale matching algorithm to use. Possible values are 'lookup' and 'best fit'; the default is 'best fit'. See [Locale Negotation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_negotiation) for details. |
| mode | HintedString<"decimal" \| "currency"> | decimal | Defines the behavior of the component. |
| prefix | string | - | Text to display before the value. |
| suffix | string | - | Text to display after the value. |
| currency | string | - | The currency to use in currency formatting. Possible values are the [ISO 4217 currency codes](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency), such as 'USD' for the US dollar, 'EUR' for the euro, or 'CNY' for the Chinese RMB. There is no default value; if the style is 'currency', the currency property must be provided. |
| currencyDisplay | string | symbol | How to display the currency in currency formatting. Possible values are 'symbol' to use a localized currency symbol such as €, 'code' to use the ISO currency code, 'name' to use a localized currency name such as 'dollar'. |
| useGrouping | boolean | true | Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators. |
| minFractionDigits | number | - | The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the [ISO 4217 currency code](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency) list (2 if the list doesn't provide that information). |
| maxFractionDigits | number | - | The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the [ISO 4217 currency code](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency) list (2 if the list doesn't provide that information). |
| roundingMode | RoundingMode | - | How decimals should be rounded. The default value is  `"halfExpand"` , [further information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). |
| min | number | - | Minimum boundary value. |
| max | number | - | Maximum boundary value. |
| step | number | 1 | Step factor to increment/decrement the value. |
| allowEmpty | boolean | true | Determines whether the input field is empty. |
| highlightOnFocus | boolean | false | Highlights automatically the input value. |
| showClear | boolean | false | When enabled, a clear icon is displayed to clear the value. |
| size | HintedString<"small" \| "large"> | - | Defines the size of the component. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| variant | null \| HintedString<"outlined" \| "filled"> | null | Specifies the input variant of the component. |
| readonly | boolean | false | When present, it specifies that an input field is read-only. |
| placeholder | string | - | Placeholder text for the input. |
| fluid | boolean | null | Spans 100% width of the container when enabled. |
| inputId | string | - | Identifier of the focus input to match a label defined for the chips. |
| inputClass | string \| object | - | Style class of the input field. |
| inputStyle | object | - | Inline style of the input field. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | - | Establishes a string value that labels the component. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<InputNumberPassThroughOptions<any>> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
