# Figma-JSON-Data Mapping to PrimeVue-Components

**=> massive reduction - fewer tokens / content for the same semantic information content.**

- [x] **Compare Content-length of the raw and cleaned version to show the reduction (Percentage reduction)**

## Types of Nodes

| Type     | Function                                     |
|----------|----------------------------------------------|
| INSTANCE | Main mapping-Goal -> PrimeVue-Components     |
| FRAME    | Layout-Container without Component reference |
| TEXT     | Text-Content with no Component reference     |

## Attribute of Nodes

### Universal for all Nodes

| Attribute | Function                      | Why needed?                                                                                                                |
|-----------|-------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| id        | Unique identifier / reference | To distinguish between different nodes                                                                                     |
| name      | Primary Mapping-Criteria      | To identify the node based on its name, which is crucial for mapping and analysis                                          |
| type      | Key Mapping-Criteria          | To identify the type of node (e.g., Frame, Group, Component) for mapping and analysis                                      |
| children  | Herarchical Structure         | To maintain the parent-child relationships between nodes, which is essential for understanding the structure of the design |
| visible   | Visibility                    | To determine whether the node is visible, which can affect how it is mapped to PrimeVue components and their properties    |

### Specific for INSTANCE Nodes

| Attribute                   | Function                                | Why needed?                                                                                                                |
|-----------------------------|-----------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| componentId                 | Mapping-Fallback                        | To identify the specific component being used for mapping to PrimeVue components                                           |
| componentProperties         | Different Properties of the Component   | To capture the various properties of the component for direct Props-Mapping                                                |
| componentPropertyReferences | Reference to other Nodes for Properties | To understand how different properties of the component are linked to other nodes                                          |
| isExposedInstance           | Mapping-Criteria for Exposed Instances  | To identify whether the instance is exposed, which can affect how it is mapped to PrimeVue components and their properties |

### Specific for FRAME Nodes

| Attribute                       | Function                                                    | Why needed?                                                                  |
|---------------------------------|-------------------------------------------------------------|------------------------------------------------------------------------------|
| layoutMode                      | Layout Direction (flex-direction)                           | To understand the layout direction (e.g., horizontal, vertical) of the frame |
| itemSpacing                     | Spacing between items in the layout (gap-{n})               | To capture the spacing between items in the frame                            |
| paddingLeft/Right/Top/Bottom    | Padding of the frame (p-{n})                                | To capture the padding of the frame,                                         |
| primaryAxisAlignItems           | Alignment of items along the primary axis (justify-content) | To understand how items are aligned along the primary axis                   |
| counterAxisAlignItems           | Alignment of items along the counter axis (align-items)     | To understand how items are aligned along the counter axis                   |
| layoutSizingHorizontal/Vertical | Sizing of items in the layout (fixed, hug, fill)            | To understand how items are sized in the layout                              |
| layoutWrap                      | Whether items wrap in the layout (flex-wrap)                | To understand whether items wrap in the layout                               |

### Specific for TEXT Nodes
| Attribute                   | Function                                           | Why needed?                                                 |
|-----------------------------|----------------------------------------------------|-------------------------------------------------------------|
| characters                  | Text content of the node                           | To capture the actual text content                          |
| componentPropertyReferences | Reference to other Nodes for Properties            | To understand how the text content is linked to other nodes |
| style                       | Text styling information (e.g., font size, weight) | To capture the styling of the text                          |

### Additional Style-Attributes
| Attribute    | Mapping                                             |
|--------------|-----------------------------------------------------|
| fills        | Background color, gradients, and patterns           |
| strokes      | Border color and width                              |
| cornerRadius | Border radius for rounded corners                   |
| boundingBox  | Position and size of the node (x, y, width, height) |

---

### Example

```json
{
  "id": "2:5",
  "name": "1 [Password-Eingabe]",
  "type": "FRAME",
  "layoutMode": "VERTICAL",
  "paddingLeft": 24, "paddingRight": 24, "paddingTop": 24, "paddingBottom": 24,
  "children": [{
    "id": "10:4938", "name": "Column", "type": "FRAME",
    "layoutMode": "VERTICAL", "itemSpacing": 24,
    "children": [
      {
        "id": "10:4744", "name": "password", "type": "INSTANCE",
        "componentId": "7:4468",
        "componentProperties": {
          "Toggle Mask": {"value": "True", "type": "VARIANT"},
          "Password Visible": {"value": "False", "type": "VARIANT"}
        },
        "children": [
          "<childrens>"
        ]
      },
      {
        "id": "10:4933", "name": "button", "type": "INSTANCE",
        "componentId": "7:2368",
        "componentProperties": {
          "Text#4293:477": {"value": "Anmelden", "type": "TEXT"},
          "Severity": {"value": "Primary", "type": "VARIANT"},
          "Disabled": {"value": "False", "type": "VARIANT"},
          "🔲 Outlined": {"value": "False", "type": "VARIANT"},
          "🔤 Text": {"value": "False", "type": "VARIANT"}
        }
      }
    ]
  }]
}
```