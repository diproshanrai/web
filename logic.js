document.addEventListener("DOMContentLoaded", function () {
  const apiUrl =
    "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const newsContainer = document.getElementById("news-container");
      data.news.forEach((newsItem) => {
        const newsDiv = document.createElement("div");
        newsDiv.className = "news-card";
        newsDiv.innerHTML = `
                    <img src="${newsItem.image}" alt="news image">
                    <h3>${newsItem.title}</h3>
                    <p>${newsItem.content.substring(0, 100)}...</p>
                    <a href="#" class="read-more" data-id="${
                      newsItem.title
                    }">Read More ➔</a>
                `;
        newsContainer.appendChild(newsDiv);
      });

      document.querySelectorAll(".read-more").forEach((button) => {
        button.addEventListener("click", function (event) {
          event.preventDefault();
          const newsId = this.getAttribute("data-id");
          const news = data.news.find((item) => item.title === newsId);
          showModal(news);
        });
      });
    })
    .catch((error) => console.error("Error fetching data: ", error));

  const modal = document.getElementById("news-modal");
  const closeButton = document.querySelector(".close-button");

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  function showModal(news) {
    document.getElementById("modal-title").innerText = news.title;
    document.getElementById(
      "modal-author"
    ).innerText = `Author: ${news.author}`;
    document.getElementById("modal-date").innerText = `Date: ${news.date}`;
    document.getElementById(
      "modal-category"
    ).innerText = `Category: ${news.category}`;
    document.getElementById("modal-image").src = news.image;
    document.getElementById("modal-content").innerText = news.content;
    modal.style.display = "block";
  }
});



const searchBtn = document.getElementById('searchBtn');
  const searchBar = document.getElementById('searchBar');
  const closeBtn = document.getElementById('closeBtn');

  searchBtn.addEventListener('click', () => {
    searchBar.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    searchBar.style.display = 'none';
  });
