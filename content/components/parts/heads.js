var heads = [
    <circle cx={500} cy={350} r={275} />,
    <ellipse
        cx={500} cy={350} rx={275} ry={300}
    />,
    <ellipse
        cx={500} cy={350} rx={275} ry={350}
    />,
    <g>
        <ellipse
            cx={500} cy={250}
            rx={450 / 2} ry={450 / 2}
        />
        <ellipse
            cx={500} cy={500}
            rx={450 / 2} ry={450 / 2}
        />
        <rect 
            width={450} height={250}
            x={500 - 450 / 2} y={250}
        />
    </g>
];

export default heads;