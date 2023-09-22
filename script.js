document.addEventListener("DOMContentLoaded", function () {
    const operationSelect = document.getElementById("operation");
    const fibonacciForm = document.getElementById("fibonacci-form");
    const volumeForm = document.getElementById("volume-form");

    operationSelect.addEventListener("change", function () {
        const selectedOperation = operationSelect.value;
        if (selectedOperation === "fibonacci") {
            fibonacciForm.style.display = "block";
            volumeForm.style.display = "none";
        } else if (selectedOperation === "volume") {
            fibonacciForm.style.display = "none";
            volumeForm.style.display = "block";
        }
    });

    const calculateFibonacciButton = document.getElementById("calculate-fibonacci");
    const fibonacciInput = document.getElementById("fibonacci-input");
    const fibonacciResult = document.getElementById("fibonacci-result");

    calculateFibonacciButton.addEventListener("click", function () {
        const n = parseInt(fibonacciInput.value);
        if (!isNaN(n) && n >= 1) {
            const result = calculateFibonacci(n);
            fibonacciResult.textContent = `Hasil: ${result}`;
        } else {
            fibonacciResult.textContent = "Masukkan n yang valid (minimal 1).";
        }
    });

    function calculateFibonacci(n) {
        if (n <= 1) {
            return n;
        }
        return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
    }

    const calculateVolumeButton = document.getElementById("calculate-volume");
    const shapeSelect = document.getElementById("shape");
    const lengthInput = document.getElementById("length");
    const widthInput = document.getElementById("width");
    const heightInput = document.getElementById("height");
    const volumeResult = document.getElementById("volume-result");

    calculateVolumeButton.addEventListener("click", function () {
        const selectedShape = shapeSelect.value;
        const length = parseFloat(lengthInput.value);
        const width = parseFloat(widthInput.value);
        const height = parseFloat(heightInput.value);

        if (!isNaN(length) && !isNaN(width) && !isNaN(height) && length >= 1 && width >= 1 && height >= 1) {
            const result = calculateVolume(selectedShape, length, width, height);
            volumeResult.textContent = `Volume: ${result}`;
        } else {
            volumeResult.textContent = "Masukkan data yang valid (minimal 1 untuk panjang, lebar, dan tinggi).";
        }
    });

    function calculateVolume(shape, length, width, height) {
        switch (shape) {
            case "kubus":
                return length ** 3;
            case "balok":
                return length * width * height;
            case "silinder":
                return Math.PI * (width / 2) ** 2 * height;
            default:
                return 0;
        }
    }
});
