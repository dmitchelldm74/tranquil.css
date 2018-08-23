function multi_dismiss(selector, toggle_type) {
    var el = document.querySelector(selector);
    if (el.classList.contains(toggle_type)) el.classList.remove(toggle_type);
    else el.classList.add(toggle_type);
}
document.querySelectorAll('[data-toggle]').forEach(
    function (el) {
        el.setAttribute("onclick", "multi_dismiss(this.getAttribute('data-target'), this.getAttribute('data-toggle'))");
    }
);