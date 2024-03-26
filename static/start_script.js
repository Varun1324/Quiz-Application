function submitButton() {
    var name = document.getElementById("name").value;
    var branch = document.getElementById("branch").value;
    var rollno = document.getElementById("rollno").value;   
    if (name === "" || branch === "" || rollno === "") {
            alert("Please enter all details.");
    } else {
        document.getElementById("startQuiz").submit();
    }
};