
var select = document.getElementById("speciality");

function alt() {
    alert("You clicked on it");
}

function exchange() {
    let temp = select.value;
}

$(document).ready(function () {
    $("#labelQuo").css("color", "green")
    $("#labelCon").css("color", "green")
    $("#labelCon").css("margin-left", "500px")
    $("#concession").css("margin-left", "45px")
    $("#quota").width("510px")
    $("#concession").width("510px")
    $("#quota").height("40px")
    $("#concession").height("40px")

    $("#test").click(function () {
        let error = "";
        if ($("#usename").val().length == 0) {
            error += "=>Please Type in your name\n";
        }
        else {
            for (let i = 0; i < $("#usename").val().length; i++) {
                if ($.isNumeric($("#usename").val()[i])) {
                    error += "=>Your Name cannot contain an Integer\n";
                    break;
                }
            }
        }
        if ($("#usepass").val().length < 7 || $("#usepass").val().length > 12) {
            error += "=>The Length of the password should always be between 7 and 12\n";
        }
        else {
            for (let i = 0; i < $("#usepass").val().length; i++) {
                if ($.isNumeric($("#usepass").val()[i])) {
                    break;
                }
                if (i == $("#usepass").val().length - 1) {
                    error += "=>Password should contain an Integer\n";
                }
            }
        }
        if ($('#speciality').children("option:selected").val() === "none") {
            error += "=>Please Select a Speciality\n";
        }
        if (!$('#Male').is(":checked") && !$('Female').is(":checked")) {
            error += "=>Please Select your gender\n";
        }
        if (error === "") {
            if (!$('#isAvblJobs').is(":checked")) {
                if (confirm("Please select the checkbox if are you open to job Offers!")) {
                    $("#isAvblJobs").prop("checked", true);
                }
            }
            $("#reset").fadeOut("slow", function () {
                alert("Searching results for the form:\nName:" + $("#usename").val() + "\nFrom:" + $('#from').val() + "\nTo:" + $('#to').val() + "\nFlexible:" + $("#isAvblJobs").prop("checked") + "\nQuota:" + $("#quota").val() + "\nConcession:" + $("#concession").val())
            });

        }
        else {
            alert(error);
        }
    });

    $('#reset').click(function () {
        $("#usename").val("")
        $("#usepass").val("")
        $("#Male").prop("checked", false);
        $("#Female").prop("checked", false);
        $("#isAvblJobs").prop("checked", false);
        $("#speciality").val("none")
    });
});
