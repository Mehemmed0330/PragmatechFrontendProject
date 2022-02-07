// filterObjects('student');
// function filterObjects(c) {
//     var x, i;
//     x = document.getElementsByClassName('item');
//     if (c == 'student') c = '';
//     for (i = 0; i < x.length; i++) {
//         removeClass(x[i], "show");
//         if (x[i].className.indexOf(c) > -1) addClass(x[i], "show")
//     }
// }

// function addClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i] == -1)) {
//             element.className += " " + arr2[i]
//         }

//     }
// }

// function removeClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         while (arr1.indexOf(arr2[i] == -1)) {
//             arr1.splice(arr1.indexOf(arr2[i], 1))
//         }

//     }
//     element.className = arr1.join(" ")
// }

filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("item");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) >= 0) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) >= 0) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}