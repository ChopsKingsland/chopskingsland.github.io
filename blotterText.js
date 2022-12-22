
document.fonts.ready.then(function () {
    container = document.getElementById("inner");

    var text = new Blotter.Text("Charlie Kingsland", {
        family: "'Unbounded', serif",
        fontWeight: 700,
        size: 100,
        fill: "#ffffff",
        paddingLeft: 50,
        paddingRight: 50,
        filter: "blur(5px)"
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
}.bind(this));