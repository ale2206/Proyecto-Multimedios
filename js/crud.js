var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nombre"] = document.getElementById("nombre").value;
    formData["apellido"] = document.getElementById("apellido").value;
    formData["email"] = document.getElementById("email").value;
    formData["telefono"] = document.getElementById("telefono").value;
    formData["cedula"] = document.getElementById("cedula").value;
    formData["direccion"] = document.getElementById("direccion").value;
    formData["contrasenia"] = document.getElementById("contrasenia").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.apellido;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.telefono;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.cedula;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.direccion;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.contrasenia;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("cedula").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("contrasenia").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("apellido").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("telefono").value = selectedRow.cells[3].innerHTML;
    document.getElementById("cedula").value = selectedRow.cells[4].innerHTML;
    document.getElementById("direccion").value = selectedRow.cells[5].innerHTML;
    document.getElementById("contrasenia").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombre;
    selectedRow.cells[1].innerHTML = formData.apellido;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.telefono;
    selectedRow.cells[4].innerHTML = formData.cedula;
    selectedRow.cells[5].innerHTML = formData.direccion;
    selectedRow.cells[6].innerHTML = formData.contrasenia;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this user?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nombre").value == "") {
        isValid = false;
        document.getElementById("nombreValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nombreValidationError").classList.contains("hide"))
            document.getElementById("nombreValidationError").classList.add("hide");
    }
    return isValid;
}