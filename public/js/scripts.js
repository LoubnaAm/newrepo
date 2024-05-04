
function toggleTheme() {

    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');

    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeIcon.name = 'moon-outline';
    } else {
        themeIcon.name = 'sunny-outline';
    }
}

document.addEventListener('DOMContentLoaded', function () {

    const spinner = document.getElementById("spinner");
    spinner.style.display = "block";
    var ctx = document.getElementById('myChart').getContext('2d');


    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Users',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: false, // Empêche le graphique de s'adapter à la taille du conteneur
            maintainAspectRatio: false, // Empêche le graphique de conserver son aspect ratio
            width: 800,
            height: 150
        }
    });


    const pourcentageReponsesTrouvees = {
        trouvees: 70,
        nonTrouvees: 30
    };


    var ctxpie = document.getElementById('pieChart').getContext('2d');


    var pieChart = new Chart(ctxpie, {
        type: 'pie',
        data: {
            labels: ['Réponses Trouvées', 'Réponses Non Trouvées'],
            datasets: [{
                label: 'Pourcentage de Réponses Trouvées',
                data: [pourcentageReponsesTrouvees.trouvees, pourcentageReponsesTrouvees.nonTrouvees],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 99, 132, 0.5)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Pourcentage de Réponses Trouvées dans le Chat de Support'
            }
        }
    });


    let list = document.querySelectorAll(".navigation li");
    //console.log("Navigation sélectionnée :", navigation);
    function activeLink() {
        list.forEach((item) => {
            item.classList.remove("hovered");
        });
        this.classList.add("hovered");
    }


    list.forEach((item) => item.addEventListener("mouseover", activeLink));


    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");


    toggle.onclick = function () {
        navigation.classList.toggle("active");
        main.classList.toggle("active");
    };

});
window.addEventListener("load", function () {
    spinner.style.display = "none";
    console.log('hello');
});
