# Design Documentation for Chemical Supplies Table

## 1. Overview

This document provides a detailed explanation of the design decisions and approaches used for the Chemical Supplies Table application. The table allows users to add, sort, edit, delete, and manage data related to chemical supplies.

## 2. File Structure

The project is structured into three main files:

- `index.html`: Contains the structure and layout of the table and modal.
- `styles.css`: Contains the styling for the table, controls, modal, and page layout.
- `script.js`: Contains the JavaScript code that handles table rendering, sorting, editing, row manipulation, and modal interactions.

## 3. Design Choices

### 3.1 HTML Design

The HTML file is structured to include:

- **Table Layout**: The table includes columns such as Chemical Name, Vendor, Density, and other properties.
- **Controls**: Buttons are provided for actions like adding a new row, sorting, moving rows, deleting, refreshing, and saving data.
- **Modal Window**: A modal is used for adding new chemical data, which allows for cleaner input handling without directly manipulating the table.

### 3.2 CSS Design

- **Responsive Layout**: Flexbox is used to align the header elements and buttons for better control of alignment and layout.
- **Minimalistic Design**: The design uses light backgrounds with subtle hover effects to enhance user interaction without overwhelming them.
- **Modal Styling**: The modal is designed to appear in the center of the page with a dimmed background to focus attention on the data input.

### 3.3 JavaScript Design

#### 3.3.1 Data Handling

- **jsonData.js**: This file serves as a separate data module that can be expanded or modified easily. It exports the initial set of chemical supplies as an array.
- **Dynamic Rendering**: The table data is dynamically rendered using JavaScript functions to loop through the dataset, allowing easy manipulation of rows without reloading the page.

#### 3.3.2 Sorting Mechanism

- The sorting function toggles between ascending and descending order based on a single button click. This reduces the clutter of having separate buttons for each sorting direction.

#### 3.3.3 Editing and Validation

- **Cell Editing**: When a table cell is clicked, an input field replaces the text, allowing the user to modify the value. Numeric fields have validation to ensure only numbers are entered.
- **Fixed Size on Edit**: The size of the cell no longer changes during editing, ensuring the table layout remains consistent.

#### 3.3.4 Row Manipulation

- **Moving Rows**: Rows can be moved up or down within the table, allowing for easy reordering of data.
- **Deleting Rows**: Multiple rows can be selected and deleted simultaneously.
- **Adding Rows**: New rows are added using a modal form where the user inputs the necessary data. The ID is auto-generated as a 4-character hash in uppercase letters.

#### 3.3.5 Data Persistence and Refreshing

- **Saving Data**: A save button is included to handle data persistence (e.g., saving the data to a local storage or backend service can be implemented in the future).
- **Refreshing Data**: The refresh button reloads the data, resetting any unsaved changes.

## 4. Future Improvements

- **Backend Integration**: The current implementation is entirely client-side. Future development can involve integrating a backend for data storage and retrieval.
- **Additional Validation**: While basic numeric validation is implemented, more sophisticated validation (e.g., range checks, required fields) could be added.
- **Sorting by Multiple Columns**: Currently, sorting is done on one column at a time. Multi-column sorting could be implemented for more complex datasets.

## 5. Conclusion

This table application was designed with user interaction in mind, making it easy to manage and manipulate chemical supply data. The modular design allows for scalability and future feature additions, such as backend integration and enhanced UI functionality.

---

You can modify or expand this documentation based on your specific project requirements.
