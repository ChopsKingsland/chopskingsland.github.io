function createBlotterText() {
    container = document.getElementById("inner");

    var text = new Blotter.Text("Charlie Kingsland", {
        family: "'Unbounded', serif",
        fontWeight: 700,
        size: (200 * window.innerWidth) / 2560, // 200px for 2560px wide screen
        fill: "#ffffff",
        paddingLeft: 50,
        paddingRight: 50
});

    var material = new Blotter.LiquidDistortMaterial();
    material.uniforms.uSpeed.value = 0.1;
    material.uniforms.uVolatility.value = 0.05;
    material.uniforms.uSeed.value = 0.1;

    var blotter = new Blotter(material, {
        texts: text
    });

    var scope = blotter.forText(text);
    scope.appendTo(container);
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

document.fonts.ready.then(function () {
    createBlotterText();
}.bind(this));

window.onresize = function(event) {
    container = document.getElementById("inner");
    clearElement(container);
    createBlotterText();
};