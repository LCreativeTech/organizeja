import Chart from 'chart.js/auto';

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('tasksChart').getContext('2d');
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Trabalho', 'Faculdade', 'Social'],
            datasets: [{
                label: 'Tarefas por Categoria',
                data: [
                    tasks.filter(t => t.categoria === 'trabalho').length,
                    tasks.filter(t => t.categoria === 'faculdade').length,
                    tasks.filter(t => t.categoria === 'social').length
                ],
                backgroundColor: [
                    '#6a1b9a',
                    '#9c27b0',
                    '#ba68c8'
                ]
            }]
        }
    });
});
