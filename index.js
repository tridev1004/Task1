

  document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('jobSearch');
    const jobListings = document.querySelectorAll('.job-listing');

    searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase().trim();

      jobListings.forEach(listing => {
        const title = listing.querySelector('h3').textContent.toLowerCase();
        const description = listing.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          listing.style.display = 'block'; 
        } else {
          listing.style.display = 'none'; 
        }
      });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
