function nbYear(population, percent, newInhabit, final) {
    let pop = population
    let growth = (percent / 100)
    let years = 0

    while (pop < final) {
        pop = Math.floor(pop + pop * growth + newInhabit)
        years += 1
    }
    console.log(pop)
    console.log(years)
}

nbYear(1000, 2, 50, 1200)
nbYear(1500, 5, 100, 5000)
nbYear(1500000, 2.5, 10000, 2000000)