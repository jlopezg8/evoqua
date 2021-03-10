fetch('http://127.0.0.1:3000/')
    .then(response => response.json())
    .then(metrica => {
        data = {
            x: metrica.versiones,
            y: metrica.valores,
            fill: 'tozeroy', // area chart
        }
        const layout = {
            title: { title: `${metrica.nombre} por versión` },
            xaxis: {
                title: { text: 'Versión' },
                type: 'category',
            },
            yaxis: { title: { text: metrica.nombre } },
        };
        const config = {
            displayModeBar: true,
            responsive: true
        };
        Plotly.setPlotConfig({ locale: 'es' });
        Plotly.newPlot('plot', [data], layout, config);
    })
    .catch(error => alert(error));