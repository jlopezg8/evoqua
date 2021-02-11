fetch('http://127.0.0.1:3000')
    .then(response => response.json())
    .then(data => {
        data.fill = 'tozeroy';
        const layout = {
            title: 'LOCs por versión',
            xaxis: {
                title: { text: 'Versión' },
                type: 'category',
            },
            yaxis: { title: { text: 'LOCs' } },
        };
        const config = {
            displayModeBar: true,
            responsive: true
        };
        Plotly.setPlotConfig({ locale: 'es' });
        Plotly.newPlot('plot', [data], layout, config);
    });