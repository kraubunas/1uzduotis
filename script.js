var country = [
    {name: "Portugalija", pop: 10260000, area: 922121},
    {name: "Lietuva", pop: 2784279, area: 65300},
    {name: "JAV", pop: 331449281, area: 9833520},
    {name: "Japonija", pop: 125360000, area: 377975},
    {name: "Jungtinė Karalystė", pop: 67886004, area: 242495}    
]

function gyventojui(name, pop, area) {
    var kvadratai = ((area/pop) * 1000000).toFixed(2)

    console.log(`Šalis: ${name}, joje gyvena ${(pop/1000000).toFixed(2)} mln. gyventojų. Valstybės plotas: ${area} km2, plotas tenkantis vienam gyventojui: ${kvadratai} m2.`);
    console.log("=====================================");
}

for (var x of country) {
    gyventojui(x.name, x.pop, x.area)
}