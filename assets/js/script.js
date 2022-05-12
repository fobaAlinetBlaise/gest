var titre = document.getElementById("titre");
console.log(titre);
console.log(titre.style);
titre.style.color = "yellow";
titre.style.backgroundColor = prompt("Veuillez entrer une coleur de la table de votre choix si vous voulez, en anglais");
console.log(titre.style);
var selectedRow = null;

function onFormSubmit() {
    console.log(formData);
    if (validate1() && validate2() && validate3() && validate4() && validate5() && validate6()) {
        var formData = readFormData();
        console.log(formData);
        if (selectedRow == null) {
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }

        resetForm();
    }
}


function readFormData() {

    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["fullName"] = document.getElementById("fullName").value;
    formData["code"] = document.getElementById("code").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["address"] = document.getElementById("address").value;
    formData["class"] = document.getElementById("class").value;
    formData["school"] = document.getElementById("school").value;


    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("emplist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell2 = newRow.insertCell(0);
    cell2.innerHTML = data.code;

    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.fullname;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gender;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.address;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.class;

    cell4 = newRow.insertCell(5);
    cell4.innerHTML = data.school;

    cell4 = newRow.insertCell(6);
    cell4.innerHTML = data.name1;

    cell4 = newRow.insertCell(7);
    cell4.innerHTML = `<a onClick="onEdit(this)">Modifier</a>
                        <a  onClick="onDelete(this)">Supprimer</a>`;
}

function resetForm() {
    document.getElementById('code').value = '';
    document.getElementById('name1').value = '';
    document.getElementById('fullname').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('address').value = '';
    document.getElementById('class').value = '';
    document.getElementById('school').value = '';
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('code').value = selectedRow.cells[0].innerHTML;
    document.getElementById('name1').value = selectedRow.cells[1].innerHTML;
    document.getElementById('fullname').value = selectedRow.cells[2].innerHTML;
    document.getElementById('gender').value = selectedRow.cells[3].innerHTML;
    document.getElementById('address').value = selectedRow.cells[4].innerHTML;
    document.getElementById('class').value = selectedRow.cells[5].innerHTML;
    document.getElementById('school').value = selectedRow.cells[6].innerHTML;
}

function updateRecord(formData) {

    selectedRow.cells[0].innerHTML = formData.code;
    selectedRow.cells[1].innerHTML = formData.name1;
    selectedRow.cells[2].innerHTML = formData.fullname;
    selectedRow.cells[3].innerHTML = formData.gender;
    selectedRow.cells[4].innerHTML = formData.address;
    selectedRow.cells[5].innerHTML = formData.class;
    selectedRow.cells[6].innerHTML = formData.school;

}

function onDelete(td) {
    if (confirm('Voulez vous réellement le supprimer?')) {
        row = td.parentElement.parentElement;
        document.getElementById("emplist").deleteRow(row.rowIndex);
        resetForm();
    }

}

function validate1() {
    isValid = true;
    if (document.getElementById('code').value == "") {
        isValid = false;
        document.getElementById('codeValidationError').classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById('codeValidationError').classList.remove("hide")) {
            document.getElementById('codeValidationError').classList.add("hide");
        }
    }

    return isValid;
}

function validate2() {
    isValid = true;
    if (document.getElementById('name').value == "") {
        isValid = false;
        document.getElementById('nameValidationError').classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById('nameValidationError').classList.remove("hide")) {
            document.getElementById('nameValidationError').classList.add("hide");
        }
    }

    return isValid;
}

function validate3() {
    isValid = true;
    if (document.getElementById('fullName').value == "") {
        isValid = false;
        document.getElementById('fullNameValidationError').classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById('fullNameValidationError').classList.remove("hide")) {
            document.getElementById('fullNameValidationError').classList.add("hide");
        }
    }

    return isValid;
}

function validate4() {
    isValid = true;
    if (document.getElementById('gender').value == "") {
        isValid = false;
        document.getElementById('genderValidationError').classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById('genderValidationError').classList.remove("hide")) {
            document.getElementById('genderValidationError').classList.add("hide");
        }
    }

    return isValid;
}

function validate5() {
    isValid = true;
    if (document.getElementById('address').value == "") {
        isValid = false;
        document.getElementById('addressValidationError').classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById('addressValidationError').classList.remove("hide")) {
            document.getElementById('addressValidationError').classList.add("hide");
        }
    }

    return isValid;
}

function validate6() {
    isValid = true;
    if (document.getElementById('class').value == "") {
        isValid = false;
        document.getElementById('classValidationError').classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById('classValidationError').classList.remove("hide")) {
            document.getElementById('classValidationError').classList.add("hide");
        }
    }

    return isValid;
}