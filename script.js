// sample data
let chemicals = [
	{
		id: generateHashId(),
		chemicalName: "Ammonium Persulfate",
		vendor: "LG Chem",
		density: 3525.92,
		viscosity: 60.63,
		packaging: "Bag",
		packSize: 100,
		unit: "kg",
		quantity: 6495.18,
	},
	{
		id: generateHashId(),
		chemicalName: "Caustic Potash",
		vendor: "Formosa",
		density: 3172.15,
		viscosity: 48.22,
		packaging: "Bag",
		packSize: 100,
		unit: "kg",
		quantity: 8751.9,
	},
	{
		id: generateHashId(),
		chemicalName: "Dimethylaminopropylamino",
		vendor: "LG Chem",
		density: 8435.37,
		viscosity: 12.62,
		packaging: "Barrel",
		packSize: 75,
		unit: "L",
		quantity: 5964.61,
	},
	{
		id: generateHashId(),
		chemicalName: "Mono Ammonium Phosphate",
		vendor: "Sinopec",
		density: 1597.65,
		viscosity: 76.51,
		packaging: "Bag",
		packSize: 105,
		unit: "kg",
		quantity: 8183.73,
	},
	{
		id: generateHashId(),
		chemicalName: "Ferric Nitrate",
		vendor: "DowDuPont",
		density: 364.04,
		viscosity: 14.9,
		packaging: "Bag",
		packSize: 105,
		unit: "kg",
		quantity: 4154.33,
	},
	{
		id: generateHashId(),
		chemicalName: "n-Pentane",
		vendor: "Sinopec",
		density: 4535.26,
		viscosity: 66.76,
		packaging: "N/A",
		packSize: "N/A",
		unit: "t",
		quantity: 6272.34,
	},
	{
		id: generateHashId(),
		chemicalName: "Glycol Ether PM",
		vendor: "LG Chem",
		density: 6495.18,
		viscosity: 72.12,
		packaging: "Bag",
		packSize: 250,
		unit: "kg",
		quantity: 8749.54,
	},
	{
		id: generateHashId(),
		chemicalName: "Acetic Acid",
		vendor: "BASF",
		density: 1045.0,
		viscosity: 1.3,
		packaging: "Drum",
		packSize: 200,
		unit: "L",
		quantity: 1500.0,
	},
	{
		id: generateHashId(),
		chemicalName: "Sodium Chloride",
		vendor: "Cargill",
		density: 2160.0,
		viscosity: 0.89,
		packaging: "Bag",
		packSize: 50,
		unit: "kg",
		quantity: 5000.0,
	},
	{
		id: generateHashId(),
		chemicalName: "Potassium Hydroxide",
		vendor: "FMC",
		density: 2000.0,
		viscosity: 4.0,
		packaging: "Bottle",
		packSize: 25,
		unit: "kg",
		quantity: 3000.0,
	},
	{
		id: generateHashId(),
		chemicalName: "Hydrochloric Acid",
		vendor: "Solvay",
		density: 1185.0,
		viscosity: 1.0,
		packaging: "Drum",
		packSize: 200,
		unit: "L",
		quantity: 1200.0,
	},
	{
		id: generateHashId(),
		chemicalName: "Sulfuric Acid",
		vendor: "Dow",
		density: 1840.0,
		viscosity: 25.0,
		packaging: "Tank",
		packSize: 1000,
		unit: "L",
		quantity: 8000.0,
	},
	{
		id: generateHashId(),
		chemicalName: "Ethanol",
		vendor: "Mizuno",
		density: 789.0,
		viscosity: 1.2,
		packaging: "Bottle",
		packSize: 500,
		unit: "L",
		quantity: 2500.0,
	},
	{
		id: generateHashId(),
		chemicalName: "Methanol",
		vendor: "SABIC",
		density: 791.0,
		viscosity: 0.6,
		packaging: "Drum",
		packSize: 200,
		unit: "L",
		quantity: 4000.0,
	},
	{
		id: generateHashId(),
		chemicalName: "Sodium Bicarbonate",
		vendor: "Univar",
		density: 1680.0,
		viscosity: 5.0,
		packaging: "Bag",
		packSize: 25,
		unit: "kg",
		quantity: 6000.0,
	},
	{
		id: generateHashId(),
		chemicalName: "Calcium Carbonate",
		vendor: "Imerys",
		density: 2700.0,
		viscosity: 6.0,
		packaging: "Bag",
		packSize: 50,
		unit: "kg",
		quantity: 7000.0,
	},
];

// Numeric fields for validation
const numericFields = ["density", "viscosity", "packSize", "quantity"];

// Function to render the table rows
function renderTable() {
	const tbody = document.getElementById("tableBody");
	tbody.innerHTML = ""; // Clear the table body

	chemicals.forEach((chemical) => {
		const row = document.createElement("tr");

		// Creating the checkbox cell here
		const checkboxCell = document.createElement("td");
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.setAttribute("data-id", chemical.id); // Assigning a unique ID for each checkbox
		checkboxCell.appendChild(checkbox);
		row.appendChild(checkboxCell);

		// Populating the other cells
		Object.keys(chemical).forEach((key) => {
			const cell = document.createElement("td");
			cell.textContent = chemical[key];
			cell.onclick = () => enableEdit(cell, chemical, key);
			row.appendChild(cell);
		});

		tbody.appendChild(row);
	});
}

let ascending = true; // Variable to track the current sort order

// Function to toggle sorting
function toggleSort() {
	sortTable(ascending);
	ascending = !ascending;
}

// Function to sort the table
function sortTable(asc) {
	// Sorting logic for the table
	const tableBody = document.getElementById("tableBody");
	const rows = Array.from(tableBody.rows);

	rows.sort((a, b) => {
		const aText = a.cells[2].textContent;
		const bText = b.cells[2].textContent;

		return asc ? aText.localeCompare(bText) : bText.localeCompare(aText);
	});

	// Clear the existing rows and append the sorted rows
	tableBody.innerHTML = "";
	rows.forEach((row) => tableBody.appendChild(row));
}

// Editing the cells
function enableEdit(cell, chemical, key) {
	if (cell.querySelector("input")) return;

	const input = document.createElement("input");
	input.className = "edit-input";
	input.value = cell.textContent;

	// Numeric validation
	if (numericFields.includes(key)) {
		input.type = "number";
		input.min = "0";
	} else {
		input.type = "text";
	}

	cell.innerHTML = ""; // Clear cell content
	cell.appendChild(input);

	input.onblur = () => {
		const newValue = input.value;
		if (numericFields.includes(key) && isNaN(newValue)) {
			alert("Please enter a valid number.");
			cell.textContent = chemical[key];
		} else {
			cell.textContent = newValue;
			chemical[key] = newValue;
		}
	};

	input.focus();
}

// Function to delete selected rows
function deleteSelectedRows() {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
	checkboxes.forEach((checkbox) => {
		const id = checkbox.getAttribute("data-id");
		chemicals = chemicals.filter((chemical) => chemical.id !== id); // Remove selected chemicals from array
	});
	renderTable(); // Re-render the table after deletion
}

// Function to move rows up or down
function moveRows(direction) {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
	checkboxes.forEach((checkbox) => {
		const id = checkbox.getAttribute("data-id");
		const index = chemicals.findIndex((chemical) => chemical.id === id);
		if (index !== -1) {
			const newIndex = index + direction;
			if (newIndex >= 0 && newIndex < chemicals.length) {
				[chemicals[index], chemicals[newIndex]] = [chemicals[newIndex], chemicals[index]];
			}
		}
	});
	renderTable(); // Re-render the table after moving
}

// Function to refresh the table data
function refreshData() {
	renderTable(); // Re-render the table (could be expanded to fetch fresh data from a server)
}

// Function to save data. Not implemented fully due to lack of further info
function saveData() {
	console.log("Saving data...", chemicals);
}

// Function to open the add modal
function openAddModal() {
	document.getElementById("addModal").style.display = "block";
}

// Function to close the add modal
function closeAddModal() {
	document.getElementById("addModal").style.display = "none";
}

// Function to generate a hash ID for each chemical
function generateHashId() {
	return "id-" + Math.random().toString(36).substr(2, 9);
}

// Function to add a new chemical
function addChemical() {
	const newChemical = {
		id: generateHashId(),
		chemicalName: document.getElementById("chemicalName").value,
		vendor: document.getElementById("vendor").value,
		density: parseFloat(document.getElementById("density").value),
		viscosity: parseFloat(document.getElementById("viscosity").value),
		packaging: document.getElementById("packaging").value,
		packSize: parseFloat(document.getElementById("packSize").value),
		unit: document.getElementById("unit").value,
		quantity: parseFloat(document.getElementById("quantity").value),
	};

	chemicals.push(newChemical);
	renderTable();
	closeAddModal();
}

// Initial rendering of the table
renderTable();
