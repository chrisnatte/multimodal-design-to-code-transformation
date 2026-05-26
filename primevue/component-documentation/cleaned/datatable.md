# Datatable

## Import

```javascript
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
```

## Basic

DataTable requires a value as data to display and Column components as children for the representation.

```vue
<DataTable :value="products" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
```

## Data Table

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | null \| readonly T[] | - | An array of objects to display. |
| dataKey | keyof T \| Function | - | Name of the field that uniquely identifies the a record in the data. |
| rows | number | 0 | Number of rows to display per page. |
| first | number | 0 | Index of the first row to be displayed. |
| totalRecords | number | 0 | Number of total records, defaults to length of value when not defined. |
| paginator | boolean | false | When specified as true, enables the pagination. |
| paginatorPosition | HintedString<"top" \| "bottom" \| "both"> | bottom | Position of the paginator, options are 'top','bottom' or 'both'. |
| alwaysShowPaginator | boolean | true | Whether to show it even there is only one page. |
| paginatorTemplate | any | FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown | Template of the paginator. It can be customized using the template property using the predefined keys.  - FirstPageLink - PrevPageLink - PageLinks - NextPageLink - LastPageLink - RowsPerPageDropdown - JumpToPageDropdown - JumpToPageInput - CurrentPageReport |
| pageLinkSize | number | 5 | Number of page links to display. |
| rowsPerPageOptions | number[] | - | Array of integer values to display inside rows per page dropdown. |
| currentPageReportTemplate | string | '({currentPage} of {totalPages})' | Template of the current page report element. It displays information about the pagination state. Available placeholders are the following;  - {currentPage} - {totalPages} - {rows} - {first} - {last} - {totalRecords} |
| lazy | boolean | false | Defines if data is loaded and interacted with in lazy manner. |
| loading | boolean | false | Displays a loader to indicate data load is in progress. |
| loadingIcon | string | - | The icon to show while indicating data load is in progress. |
| sortField | keyof T \| Function | - | Property name or a getter function of a row data used for sorting by default |
| sortOrder | number | - | Order to sort the data by default. |
| nullSortOrder | number | 1 | Determines how null values are sorted. |
| defaultSortOrder | number | 1 | Default sort order of an unsorted column. |
| multiSortMeta | DataTableSortMeta[] | - | An array of SortMeta objects to sort the data. |
| sortMode | HintedString<"single" \| "multiple"> | single | Defines whether sorting works on single column or on multiple columns. |
| removableSort | boolean | false | When enabled, columns can have an un-sorted state. |
| filters | DataTableFilterMeta | - | Filters object with key-value pairs to define the filters. |
| filterDisplay | HintedString<"menu" \| "row"> | - | Layout of the filter elements. |
| globalFilterFields | (keyof T \| Function)[] | - | An array of fields as string or function to use in global filtering. |
| filterLocale | string | - | Locale to use in filtering. The default locale is the host environment's current locale. |
| selection | NoInfer<T> \| NoInfer<T>[] | - | Selected row in single mode or an array of values in multiple mode. |
| selectionMode | HintedString<"single" \| "multiple"> | - | Specifies the selection mode. |
| compareSelectionBy | HintedString<"equals" \| "deepEquals"> | deepEquals | Algorithm to define if a row is selected. |
| metaKeySelection | boolean | false | Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. |
| contextMenu | boolean | false | Enables context menu integration. |
| contextMenuSelection | NoInfer<T> \| NoInfer<T>[] | - | Selected row instance with the ContextMenu. |
| selectAll | Nullable<boolean> | - | Whether all data is selected. |
| rowHover | boolean | false | When enabled, background of the rows change on hover. |
| csvSeparator | string | , | Character to use as the csv separator. |
| exportFilename | string | download | Name of the exported file. |
| exportFunction | Function | - |  |
| resizableColumns | boolean | false | When enabled, columns can be resized using drag and drop. |
| columnResizeMode | HintedString<"fit" \| "expand"> | fit | Defines whether the overall table width. |
| reorderableColumns | boolean | false | When enabled, columns can be reordered using drag and drop. |
| expandedRows | null \| DataTableExpandedRows \| NoInfer<T>[] | - | A collection of row data display as expanded. |
| expandedRowIcon | string | - | Icon of the row toggler to display the row as expanded. |
| collapsedRowIcon | string | - | Icon of the row toggler to display the row as collapsed. |
| rowGroupMode | HintedString<"subheader" \| "rowspan"> | - | Defines the row group mode. |
| groupRowsBy | keyof T \| Function \| (keyof T)[] | - | One or more field names to use in row grouping. |
| expandableRowGroups | boolean | false | Whether the row groups can be expandable. |
| expandedRowGroups | DataTableExpandedRows \| NoInfer<T>[] | - | An array of group field values whose groups would be rendered as expanded. |
| stateStorage | HintedString<"session" \| "local"> | session | Defines where a stateful table keeps its state. |
| stateKey | string | - | Unique identifier of a stateful table to use in state storage. |
| editMode | HintedString<"row" \| "cell"> | - | Defines the incell editing mode. |
| editingRows | DataTableEditingRows \| NoInfer<T>[] | - | A collection of rows to represent the current editing data in row edit mode. |
| rowClass | Function | - |  |
| rowStyle | Function | - |  |
| scrollable | boolean | false | When specified, enables horizontal and/or vertical scrolling. |
| scrollHeight | HintedString<"flex"> | - | Height of the scroll viewport in fixed pixels or the 'flex' keyword for a dynamic size. |
| virtualScrollerOptions | any | - | Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it. Note: Currently only vertical orientation mode is supported. |
| frozenValue | null \| NoInfer<T>[] | - | Items of the frozen part in scrollable DataTable. |
| breakpoint | string | 960px | The breakpoint to define the maximum width boundary when using stack responsive layout. |
| showHeaders | boolean | true | Whether to display table headers |
| showGridlines | boolean | false | Whether to show grid lines between cells. |
| stripedRows | boolean | false | Whether to displays rows with alternating colors. |
| highlightOnSelect | boolean | false | Highlights automatically the first item. |
| size | HintedString<"small" \| "large"> | - | Defines the size of the table. |
| tableStyle | string \| object | - | Inline style of the table element. |
| tableClass | string \| object | - | Style class of the table element. |
| tableProps | TableHTMLAttributes | - | Used to pass all properties of the TableHTMLAttributes to table element inside the component. |
| filterInputProps | InputHTMLAttributes | - | Used to pass all properties of the HTMLInputElement to the focusable filter input element inside the component. |
| filterButtonProps | Partial<DataTableFilterButtonPropsOptions> | - | Used to pass all filter button property object |
| editButtonProps | DataTableEditButtonPropsOptions | - | Used to pass all edit button property object |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<DataTablePassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
