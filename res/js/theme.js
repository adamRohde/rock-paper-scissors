let root = document.querySelector(":root");

document.getElementById("dark-mode").onclick = () => {
    root.style.setProperty("--theme-color-nav", "rgb(19, 13, 13)");
    root.style.setProperty("--theme-color-back", "rgb(59, 52, 52)");
    root.style.setProperty("--theme-color-scoreBars", "rgb(255, 0, 0)");
    root.style.setProperty("--theme-color-text", "rgb(255, 255, 255)");
    root.style.setProperty("--theme-color-burger", "rgb(255, 255, 255)");
    root.style.setProperty("--theme-color-buttons", "rgb(230, 230, 233)");
};

document.getElementById("light-mode").onclick = () => {
    root.style.setProperty("--theme-color-nav", "rgb(213, 213, 213)");
    root.style.setProperty("--theme-color-back", "rgb(255, 255, 255)");
    root.style.setProperty("--theme-color-scoreBars", "rgb(255, 0, 0)");
    root.style.setProperty("--theme-color-text", "rgb(0, 0, 0)");
    root.style.setProperty("--theme-color-burger", "rgb(64, 64, 64)");
    root.style.setProperty("--theme-color-buttons", "lightgray");
};

document.getElementById("select-tone-6").onclick = () => {
    console.log("skin tone 6");
    root.style.setProperty("--theme-color-hands", "#604437");
};
document.getElementById("select-tone-5").onclick = () => {
    console.log("skin tone 5");
    root.style.setProperty("--theme-color-hands", "#a3602f");
};
document.getElementById("select-tone-4").onclick = () => {
    console.log("skin tone 4");
    root.style.setProperty("--theme-color-hands", "#ca9062");
};
document.getElementById("select-tone-3").onclick = () => {
    console.log("skin tone 3");
    root.style.setProperty("--theme-color-hands", "#e2b084");
};
document.getElementById("select-tone-2").onclick = () => {
    console.log("skin tone 2");
    root.style.setProperty("--theme-color-hands", "#ffddb9");
};
document.getElementById("select-tone-1").onclick = () => {
    console.log("skin tone 1");
    root.style.setProperty("--theme-color-hands", "#ffce02");
};

const customThemeBackgroundColor = document.querySelector(".custom-theme-bg-color[type=color]");
//const lightThemeBackgroundColor = document.querySelector(".light-theme-bg-color[type=color]");

customThemeBackgroundColor.addEventListener("change", (e) => {
    console.log("Custom " + e.target.value);
    root.style.setProperty("--theme-color-back", e.target.value);
    //document.documentElement.style.setProperty(colorVariable, e.target.value);
});

function saveLocalStorage() {
    console.log("save local storage");
}

// Dark Theme Colors
//     --theme-color-nav: rgb(19, 13, 13);
//     --theme-color-back: rgb(59, 52, 52);
//     --theme-color-scoreBars: rgb(255, 0, 0);
//     --theme-color-keys-secondary: rgb(191, 191, 191);
//     --theme-color-text: rgb(255, 255, 255);
//     --theme-color-burger: rgb(255, 255, 255);
//     --theme-color-hands: tan;
//     --theme-color-buttons: rgb(230, 230, 233);

// Light Theme Colors
//      --theme-color-nav: rgb(213, 213, 213);
//      --theme-color-back: rgb(245, 245, 245);
//      --theme-color-scoreBars: rgb(255, 0, 0);
//      --theme-color-keys-secondary: rgb(191, 191, 191);
//      --theme-color-text: rgb(0, 0, 0);
//      --theme-color-burger: rgb(64, 64, 64);
//      --theme-color-hands: tan;
//      --theme-color-buttons: lightgray;

// --skin-tone-6: #604437;
// --skin-tone-5: #a3602f;
// --skin-tone-4: #ca9062;
// --skin-tone-3: #e2b084;
// --skin-tone-2: #ffddb9;
// --skin-tone-1: #ffce02;
