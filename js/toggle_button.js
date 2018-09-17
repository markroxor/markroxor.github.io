function toggle(div) {
    var list = document.getElementsByClassName(div);

    for (var i = 0; i < list.length; i++) {
        x = list[i]
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    
}

var buttons = document.getElementsByClassName('more btn');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        toggle(this.id);
    });
    toggle(buttons[i].id);
}