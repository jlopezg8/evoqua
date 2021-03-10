document.querySelector('input[type=file]')
        .addEventListener('change', plotMetricFromInputFile);

async function plotMetricFromInputFile() {
    const metric = await parseInputFile(this.files[0]);
    if (metric !== null) {
        plotMetric(metric);
    }
}

async function parseInputFile(file) {
    if (file === undefined) {
        return null;
    } else if (file.type !== 'application/json') {
        alert('ERROR: El archivo seleccionado debe tener formato JSON')
        return null;
    } else {
        const text = await file.text();
        return JSON.parse(text);
    }  
}