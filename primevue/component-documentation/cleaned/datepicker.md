# Datepicker

## Import

```javascript
import DatePicker from 'primevue/datepicker';
```

## Basic

DatePicker is used with the v-model property for two-way value binding.

```vue
<DatePicker v-model="date" />
```

## Date Picker

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | null \| Date \| Date[] \| (null \| Date)[] | null | Value of the component. |
| defaultValue | null \| Date \| Date[] \| (null \| Date)[] | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| selectionMode | HintedString<"single" \| "multiple" \| "range"> | single | Defines the quantity of the selection. |
| dateFormat | string | - | Format of the date. Defaults to PrimeVue Locale configuration. |
| updateModelType | HintedString<"string" \| "date"> | date | Type of the value to write back to modelValue. |
| inline | boolean | false | When enabled, displays the datepicker as inline instead of an overlay. |
| showOtherMonths | boolean | true | Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option. |
| selectOtherMonths | boolean | false | Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true. |
| showIcon | boolean | false | When enabled, displays a button with icon next to input. |
| iconDisplay | HintedString<"button" \| "input"> | 'button' | Icon position of the component. This only applies if the showIcon option is set to true. |
| icon | string | - | Icon of the datepicker button. |
| prevIcon | string | - | Icon to show in the previous button. |
| nextIcon | string | - | Icon to show in the next button. |
| incrementIcon | string | - | Icon to show in each of the increment buttons. |
| decrementIcon | string | - | Icon to show in each of the decrement buttons. |
| numberOfMonths | number | 1 | Number of months to display. |
| responsiveOptions | DatePickerResponsiveOptions[] | - | An array of options for responsive design. |
| breakpoint | string | 769px | The breakpoint to define the maximum width boundary for datepicker panel. |
| view | HintedString<"date" \| "month" \| "year"> | date | Type of view to display. |
| minDate | Date | - | The minimum selectable date. |
| maxDate | Date | - | The maximum selectable date. |
| disabledDates | Date[] | - | Array with dates to disable. |
| disabledDays | number[] | - | Array with disabled weekday numbers. |
| maxDateCount | number | - | Maximum number of selectable dates in multiple mode. |
| showOnFocus | boolean | true | When disabled, datepicker will not be visible with input focus. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| showButtonBar | boolean | false | Whether to display today and clear buttons at the footer. |
| shortYearCutoff | string | +10 | The cutoff year for determining the century for a date. |
| showTime | boolean | false | Whether to display timepicker. |
| timeOnly | boolean | false | Whether to display timepicker only. |
| hourFormat | HintedString<"12" \| "24"> | 24 | Specifies hour format. |
| stepHour | number | 1 | Hours to change per step. |
| stepMinute | number | 1 | Minutes to change per step. |
| stepSecond | number | 1 | Seconds to change per step. |
| showSeconds | boolean | false | Whether to show the seconds in time picker. |
| hideOnDateTimeSelect | boolean | false | Whether to hide the overlay on date selection when showTime is enabled. |
| hideOnRangeSelection | boolean | false | Whether to hide the overlay on date selection is completed when selectionMode is range. |
| timeSeparator | string | : | Separator of time selector. |
| showWeek | boolean | false | When enabled, datepicker will show week numbers. |
| manualInput | boolean | true | Whether to allow entering the date manually via typing. |
| showClear | boolean | false | When enabled, a clear icon is displayed to clear the value. |
| size | HintedString<"small" \| "large"> | - | Defines the size of the component. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| variant | null \| HintedString<"outlined" \| "filled"> | null | Specifies the input variant of the component. |
| readonly | boolean | false | When present, it specifies that an input field is read-only. |
| placeholder | string | - | Placeholder text for the input. |
| required | boolean | - |  |
| appendTo | HTMLElement \| HintedString<"body" \| "self"> | body | A valid query selector or an HTMLElement to specify where the overlay gets attached. |
| inputId | string | - | Identifier of the underlying input element. |
| inputStyle | object | - | Inline style of the input field. |
| inputClass | string \| object | - | Style class of the input field. |
| panelStyle | object | - | Inline style of the overlay panel. |
| panelClass | string \| object | - | Style class of the overlay panel. |
| todayButtonProps | object | - | Used to pass all properties of the ButtonProps to the today button component. |
| clearButtonProps | object | - | Used to pass all properties of the ButtonProps to the clear button component. |
| navigatorButtonProps | object | - | Used to pass all properties of the ButtonProps to the navigator button component. |
| timepickerButtonProps | object | - | Used to pass all properties of the ButtonProps to the timepicker button component. |
| fluid | boolean | null | Spans 100% width of the container when enabled. |
| ariaLabelledby | string | - | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel | string | - | Establishes a string value that labels the component. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<DatePickerPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
