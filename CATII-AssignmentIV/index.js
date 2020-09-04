
function alt() {
    alert("You clicked on it");
}

$(document).ready(function () {
    $("#speciality").width("510px")
    $("#speciality").height("40px")

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
            if ($("#usepass").val().length == 0) {
                error += "=>Password Cannot be Empty\n";
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
                alert("Searching results for the form:\nName:" + $("#usename").val() + "\nSpeciality:" + $('#speciality').val() + "\nAvailable for Jobs?:" + $("#isAvblJobs").prop("checked"))
                var savedText = "<div> Profile Saved </div>";
                $("#hide").after(savedText);  
            });

        }
        else {
            alert(error);
        }
    });

    $('#reset').click(function () {
        $("#usename").val("")
        $("#usepass").val("")
        $("#Male").prop("checked", false)
        $("#Female").prop("checked", false)
        $("#isAvblJobs").prop("checked", false)
        $("#speciality").val("none")
    });

    let fadedElements = false;

    $('#hide').click(function () {
        if (!fadedElements) {
            $("#usename").val("").fadeOut("slow");
            $("#usepass").val("").fadeOut("slow");
            $("#Male").prop("checked", false).fadeOut("slow");
            $("#Female").prop("checked", false).fadeOut("slow");
            $("#isAvblJobs").prop("checked", false).fadeOut("slow");
            $("#speciality").val("none").fadeOut("slow");
            fadedElements = true;
        }

        else {
            $("#usename").val("").fadeIn("slow");
            $("#usepass").val("").fadeIn("slow");
            $("#Male").prop("checked", false).fadeIn("slow");
            $("#Female").prop("checked", false).fadeIn("slow");
            $("#isAvblJobs").prop("checked", false).fadeIn("slow");
            $("#speciality").val("none").fadeIn("slow");
        }

    });
});

