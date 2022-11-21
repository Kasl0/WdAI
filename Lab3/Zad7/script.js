let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
let e = document.getElementById('e');
let f = document.getElementById('f');
let g = document.getElementById('g');

fetch("http://localhost:3000/cities")
    .then(response => {
        return response.json();
    })

    .then(data => {
        
        // a)
        let ulA = document.createElement('ul');
        ulA.innerText = "Miasta z województwa małopolskiego:";
        a.appendChild(ulA);

        data.map(function(city) {

            if (city.province == "małopolskie") {
                let li = document.createElement('li');
                li.innerText = city.name;
                ulA.appendChild(li);
            }
            
        });

        // b)
        let ulB = document.createElement('ul');
        ulB.innerText = "Miasta które w swojej nazwie posiadają dwa znaki 'a':";
        b.appendChild(ulB);

        data.map(function(city) {
            let aCount = 0;

            for (let i of city.name) {
                if (i == "a") aCount++;
            }

            if (aCount == 2) {
                let li = document.createElement('li');
                li.innerText = city.name;
                ulB.appendChild(li);
            }
            
        });

        // c)
        let dataCopy = JSON.parse(JSON.stringify(data));
        dataCopy.sort((a, b) => {
            return b.dentensity - a.dentensity
        })

        let ulC = document.createElement('ul');
        ulC.innerText = "Piąte pod kątem gęstości zaludnienia miasto w Polsce: " + dataCopy[4].name;
        c.appendChild(ulC);
            
        // d)
        let ulD = document.createElement('ul');
        ulD.innerText = "Dla wszystkich miast powyżej 100000 dodać (na końcu) city do nazwy:";
        d.appendChild(ulD);

        data.map(function(city) {

            let li = document.createElement('li');

            if (city.people > 100000) li.innerText = city.name + " city";
            else li.innerText = city.name;

            ulD.appendChild(li);

        });

        // e)
        let biggerCount = 0;
        let smallerCount = 0;

        data.map(function(city) {
            if (city.people > 80000) biggerCount++;
            if (city.people < 80000) smallerCount++;
        });

        let ul1E = document.createElement('ul');
        if (biggerCount > smallerCount) ul1E.innerText = "Więcej jest jest miast powyżej 80000 mieszkańców";
        ul1E.innerText = "Więcej jest jest miast poniżej 80000 mieszkańców";
        e.appendChild(ul1E);

        let ul2E = document.createElement('ul');
        ul2E.innerText = "Liczba miast powyżej 80000 mieszkańców: " + biggerCount;
        e.appendChild(ul2E);

        let ul3E = document.createElement('ul');
        ul3E.innerText = "Liczba miast poniżej 80000 mieszkańców: " + smallerCount;
        e.appendChild(ul3E);

        // f)
        let areaSum = 0;
        let citiesCount = 0;

        data.map(function(city) {
            if (city.township[0] = 'p') {
                citiesCount++;
                areaSum += city.area;
            }
        });

        let ulF = document.createElement('ul');
        ulF.innerText = "Średnia powierzchnia miast z powiatów zaczynających się na literkę 'P': " + areaSum/citiesCount;
        f.appendChild(ulF);

        // g)
        let bigger = 0;
        let smaller = 0;

        data.map(function(city) {
            if (city.province = "pomorskie") {
                if (city.people > 5000) bigger++;
                if (city.people < 5000) smaller++;
            }
        });

        let ul1G = document.createElement('ul');
        if (smaller == 0) ul1G.innerText = "Wszystkie miasta z województwa pomorskiego są większe od 5000 osób";
        else ul1G.innerText = "Nie wszystkie miasta z województwa pomorskiego są większe od 5000 osób";
        g.appendChild(ul1G);

        let ul2G = document.createElement('ul');
        ul2G.innerText = "Liczba miast powyżej 5000 mieszkańców: " + bigger;
        g.appendChild(ul2G);

        let ul3G = document.createElement('ul');
        ul3G.innerText = "Liczba miast poniżej 5000 mieszkańców: " + smaller;
        g.appendChild(ul3G);

    })
