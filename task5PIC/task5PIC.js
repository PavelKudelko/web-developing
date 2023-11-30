function first_check() {
    const value_for_check_letter = "0123456789ABCDEFHJKLMNPRSTUVWXY";
    const id_code = document.getElementById("input1").value;
    const sliced_id = id_code.slice(0, 6) + id_code.slice(7, 10);
    const valid_check = sliced_id % 31;
    let gender;
    const day = parseInt(sliced_id.slice(0, 2));
    const month = parseInt(sliced_id.slice(2, 4));
    const year = parseInt(sliced_id.slice(4, 6));
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (id_code.length === 11) {
        if (valid_check === value_for_check_letter.indexOf(id_code.slice(-1))) {

            if (id_code.slice(7, 10) % 2 !== 0) {
                gender = "male";
            } else {
                gender = "female";
            }

            if (id_code.slice(6, 7) === "A") {
                age = age - 100;
            }
            if (id_code.slice(6, 7) === "+") {
                age = age + 100
            }

            document.getElementById("result1").textContent = "Result: Valid";
            document.getElementById("result2").textContent = "Sex: " + gender;
            document.getElementById("result3").textContent = "Age: " + age;

        } else {
            if (parseInt(id_code.slice(0, 2)) > 31) {
                document.getElementById("result1").textContent = "Result: Not valid! Day is incorrect";
            } else {
                document.getElementById("result1").textContent = "Result: Not valid! Year is incorrect";
            }
        }
    } else {
        document.getElementById("result1").textContent = "Wrong input!";
    }
}

function second_check() {
    const value_for_check_letter = "0123456789ABCDEFHJKLMNPRSTUVWXY";
    const id_code = document.getElementById("input2").value;
    const sliced_id = id_code.slice(0, 6) + id_code.slice(7, 10);
    const valid_check = sliced_id % 31;

    if (id_code.length === 10) {
            document.getElementById("result4").textContent = "Result: " + value_for_check_letter.slice(valid_check, valid_check+1);
    } else {
        document.getElementById("result4").textContent = "Wrong input!";
    }
}
