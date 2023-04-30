window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas && canvas.getContext('2d');
    var simulation = new Simulation(context);
    simulation.start();
    console.log("TS included");
}