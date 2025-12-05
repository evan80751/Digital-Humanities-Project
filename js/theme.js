// Apply saved theme preference before charts render
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// Theme and menu controls
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle for settings dropdown
    const hamburger = document.getElementById('hamburger');
    const settingsDropdown = document.getElementById('settings-dropdown');

    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            settingsDropdown.classList.toggle('active');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (settingsDropdown && !settingsDropdown.contains(e.target) && e.target !== hamburger) {
            hamburger.classList.remove('active');
            settingsDropdown.classList.remove('active');
        }
    });

    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');

            // Save preference
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }

            if (window.refreshChartThemes) {
                window.refreshChartThemes();
            }
        });
    }

    if (window.refreshChartThemes) {
        window.refreshChartThemes();
    }
});
