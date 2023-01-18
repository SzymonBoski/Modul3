{
    const welcome = () => {
        console.log("Witam w świecie siatkówki");
    };

    welcome();

    const changeBackgroundColor = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("dark");

        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", changeBackgroundColor);
    };

    init();

}