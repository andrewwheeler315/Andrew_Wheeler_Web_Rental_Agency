function inputAlphabet(inputtext, alertMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        document.getElementById("firstname").innerText = alertMsg;
        inputtext.focus();
        return false;
    }
}

function textNumeric(inputtext, alertMsg) {
    var numericExpression = /^[0-9]+$/;
    if (inputtext.value.match(numericExpression)) {
        return true;
    } else {
        document.getElementById("phonenumber").innerText = alertMsg;
        inputtext.focus();
        return false;
    }
}

function emailValidation(inputtext, alertMsg) {
    var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
    if (inputtext.value.match(emailExp)) {
        return true;
    } else {
        document.getElementById("p3").innerText = alertMsg;
        inputtext.focus();
        return false;
    }
}



// var createAllErrors = function() {
//     var form = $(this),
//         errorList = $("ul.errorMessages", form);

//     var showAllErrorMessages = function() {
//         errorList.empty();

//         var invalidFields = form.find(":invalid").each(function(index, node) {
//             var label = $("label[for=" + node.id + "] "),
//                 message = node.validationMessage || "Invalid value.";

//             errorList
//                 .show()
//                 .append(
//                     "<li><span>" + label.html() + "</span> " + message + "</li>"
//                 );
//         });
//     };

//     form.on("submit", function(event) {
//         if (this.checkValidity && !this.checkValidity()) {
//             $(this)
//                 .find(":invalid")
//                 .first()
//                 .focus();
//             event.preventDefault();
//         }
//     });

//     $("input[type=submit], button:not([type=button])", form).on(
//         "click",
//         showAllErrorMessages
//     );

//     $("input", form).on("keypress", function(event) {
//         var type = $(this).attr("type");
//         if (
//             /date|email|month|number|search|tel|text|time|url|week/.test(
//                 type
//             ) &&
//             event.keyCode == 13
//         ) {
//             showAllErrorMessages();
//         }
//     });
// };

// $("form").each(createAllErrors);

// public class MainClass
// {
//     public static void main( String[] args )
//     {
//         System.out.printIn(validateFirstName("Tom"));
//         System.out.printIn(validateLastName("Tom"));
//     }
//     public static boolean validateFirstName( String firstName )
//     {
//         return firstName.matches( "[A-Z][a-zA-Z]*");
//     }
//     public static boolean validateLastName( String lastName )
//     {
//         return lastName.matches( "[a-zA-z]+([ '-][a-zA-Z]+)*")
//     }
// }
