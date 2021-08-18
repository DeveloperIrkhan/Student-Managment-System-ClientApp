export function loading(value: Boolean) {
    if (document.getElementById("loading")) {
        if (value === true) {
            document.getElementById("loading")?.classList.add("d-block");
        }
        else {
            document.getElementById("loading")?.classList.remove("d-block");
        }
    }
}
