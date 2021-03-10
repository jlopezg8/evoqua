const Plot = createPlotlyComponent(Plotly);

const plotMetric = metrica => ReactDOM.render(
    React.createElement(Plot, {
        data: [{
            x: metrica.versiones,
            y: metrica.valores,
            fill: 'tozeroy', // area chart
        }],
        layout: {
            autosize: true,
            title: { title: `${metrica.nombre} por versión` },
            xaxis: {
                title: { text: 'Versión' },
                type: 'category',
            },
            yaxis: { title: { text: metrica.nombre } },
        },
        config: {
            displayModeBar: true,
            locale: 'es',
        },
        useResizeHandler: true,
        style: { width: "100%", height: "100%" }
    }),
    document.getElementById('plot')
);