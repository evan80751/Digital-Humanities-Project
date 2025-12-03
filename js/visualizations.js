// Wait for page to load before running the scripts
document.addEventListener('DOMContentLoaded', function() {
    initializePopulationChart();
    initializeSugarBeetChart();
    initializeBusinessChart();
    initializeTimeline();
    initializeFilters();
});

// Population chart - shows the boom/bust cycles
function initializePopulationChart() {
    const ctx = document.getElementById('populationChart').getContext('2d');

    // Create a gradient fill for the chart
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(218, 165, 32, 0.6)');
    gradient.addColorStop(0.5, 'rgba(193, 154, 107, 0.4)');
    gradient.addColorStop(1, 'rgba(107, 107, 107, 0.2)');

    const populationChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: populationData.years,
            datasets: [{
                label: 'Population',
                data: populationData.population,
                borderColor: '#8B7355',
                backgroundColor: gradient,
                borderWidth: 3,
                pointBackgroundColor: '#DAA520',
                pointBorderColor: '#5C4742',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(92, 71, 66, 0.9)',
                    titleColor: '#F5F1E8',
                    bodyColor: '#F5F1E8',
                    borderColor: '#D4A574',
                    borderWidth: 2,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        // Custom tooltip to show population and percent change
                        label: function(context) {
                            const index = context.dataIndex;
                            const population = context.parsed.y;
                            const percentChange = populationData.percentChange[index];

                            let label = `Population: ${population}`;
                            if (percentChange !== null) {
                                const changeSymbol = percentChange > 0 ? '+' : '';
                                label += `\nChange: ${changeSymbol}${percentChange}%`;
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Population',
                        font: {
                            size: 14,
                            weight: '600'
                        },
                        color: '#5C4742'
                    },
                    ticks: {
                        color: '#4A4238'
                    },
                    grid: {
                        color: 'rgba(139, 115, 85, 0.1)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year',
                        font: {
                            size: 14,
                            weight: '600'
                        },
                        color: '#5C4742'
                    },
                    ticks: {
                        color: '#4A4238'
                    },
                    grid: {
                        color: 'rgba(139, 115, 85, 0.1)'
                    }
                }
            }
        }
    });
}

// Sugar beet chart - bar chart showing the industry rise and fall
function initializeSugarBeetChart() {
    const ctx = document.getElementById('sugarBeetChart').getContext('2d');

    const sugarBeetChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1910', '1929', '1985'],
            datasets: [{
                label: 'Acreage',
                data: sugarBeetData.acreage,
                backgroundColor: [
                    'rgba(139, 157, 131, 0.8)',  // green for beginning
                    'rgba(218, 165, 32, 0.9)',   // gold for peak
                    'rgba(107, 107, 107, 0.7)'   // gray for collapse
                ],
                borderColor: [
                    '#8B9D83',
                    '#DAA520',
                    '#6B6B6B'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(92, 71, 66, 0.9)',
                    titleColor: '#F5F1E8',
                    bodyColor: '#F5F1E8',
                    borderColor: '#D4A574',
                    borderWidth: 2,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed.y;
                            if (value === 0) {
                                return 'Industry Collapsed';
                            }
                            return `${value.toLocaleString()} acres`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Acreage',
                        font: {
                            size: 12,
                            weight: '600'
                        },
                        color: '#5C4742'
                    },
                    ticks: {
                        color: '#4A4238',
                        callback: function(value) {
                            return value.toLocaleString();
                        }
                    },
                    grid: {
                        color: 'rgba(139, 115, 85, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#4A4238'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Business chart - area chart showing decline
function initializeBusinessChart() {
    const ctx = document.getElementById('businessChart').getContext('2d');

    // Create gradient for business decline
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(218, 165, 32, 0.6)');
    gradient.addColorStop(1, 'rgba(107, 107, 107, 0.3)');

    const businessChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: businessData.years,
            datasets: [{
                label: 'Number of Businesses',
                data: businessData.businesses,
                borderColor: '#8B7355',
                backgroundColor: gradient,
                borderWidth: 3,
                pointBackgroundColor: '#DAA520',
                pointBorderColor: '#5C4742',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(92, 71, 66, 0.9)',
                    titleColor: '#F5F1E8',
                    bodyColor: '#F5F1E8',
                    borderColor: '#D4A574',
                    borderWidth: 2,
                    padding: 12,
                    displayColors: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Businesses',
                        font: {
                            size: 12,
                            weight: '600'
                        },
                        color: '#5C4742'
                    },
                    ticks: {
                        color: '#4A4238',
                        stepSize: 2
                    },
                    grid: {
                        color: 'rgba(139, 115, 85, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#4A4238'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Build the interactive timeline from the events data
function initializeTimeline() {
    const container = document.getElementById('timeline-container');

    // Loop through each event and create HTML for it
    timelineEvents.forEach((event, index) => {
        const eventDiv = document.createElement('div');
        eventDiv.className = `timeline-event ${event.category}`;
        eventDiv.setAttribute('data-index', index);
        eventDiv.setAttribute('data-category', event.category);

        eventDiv.innerHTML = `
            <div class="timeline-date">
                ${event.date}
                <span class="timeline-category ${event.category}">${event.category}</span>
            </div>
            <h3 class="timeline-title">${event.title}</h3>
            <p class="timeline-description">${event.description}</p>
            <div class="timeline-impact">
                <strong>Impact:</strong> ${event.impact}
            </div>
        `;

        // Make events clickable to show/hide impact details
        eventDiv.addEventListener('click', function() {
            // Close other open events
            document.querySelectorAll('.timeline-event').forEach(el => {
                if (el !== eventDiv) {
                    el.classList.remove('active');
                }
            });

            // Toggle this event
            eventDiv.classList.toggle('active');
        });

        container.appendChild(eventDiv);
    });
}

// Initialize filter buttons
function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const timelineEvents = document.querySelectorAll('.timeline-event');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Show/hide timeline events based on filter
            timelineEvents.forEach(event => {
                if (filter === 'all') {
                    event.classList.remove('hidden');
                } else {
                    const category = event.getAttribute('data-category');
                    if (category === filter) {
                        event.classList.remove('hidden');
                    } else {
                        event.classList.add('hidden');
                    }
                }
            });
        });
    });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Keyboard accessibility for timeline events
document.addEventListener('keydown', function(e) {
    const activeElement = document.activeElement;
    if (activeElement.classList.contains('timeline-event')) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            activeElement.click();
        }
    }
});

// Make timeline events accessible with keyboard
setTimeout(() => {
    document.querySelectorAll('.timeline-event').forEach(event => {
        event.setAttribute('tabindex', '0');
        event.setAttribute('role', 'button');
        event.setAttribute('aria-expanded', 'false');

        event.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            this.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });
    });
}, 100);
