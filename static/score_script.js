window.onload = function() {
    setTimeout(function() {
        window.location.href = 'https://i.pinimg.com/originals/81/7e/62/817e624abb70f40d81ba0ee4634ac0ea.gif';
    }, 5000);
    history.pushState(null, null, location.href);
            window.onpopstate = function(event) {
                history.go(1);
            };
};