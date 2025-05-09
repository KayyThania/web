document.addEventListener('DOMContentLoaded', function() {
  // Menangani klik pada tombol "Read More" / "Baca Selengkapnya"
  const readMoreButtons = document.querySelectorAll('.read-more');
  
  readMoreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Dapatkan judul artikel dari elemen h3 terdekat
      const articleTitle = this.closest('article, .featured-content, .trending-card').querySelector('h3').textContent;
      
      // Buka modal dengan konten artikel
      openArticleModal(articleTitle);
    });
  });
  
  // Menangani klik pada tombol "Explore" / kategori
  const categoryLinks = document.querySelectorAll('.category-link');
  
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Dapatkan kategori dari judul
      const categoryTitle = this.closest('.category-card').querySelector('h3').textContent;
      
      // Buka modal dengan konten kategori
      openCategoryModal(categoryTitle);
    });
  });
  
  // Fungsi untuk membuka modal artikel
  // Fungsi untuk membuka artikel
  function openArticleModal(title) {
  // Konversi judul menjadi slug URL yang aman
  const slug = title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
  
  // Tentukan kategori berdasarkan judul
  let category = 'general';
  if (title.includes('Beauty') || title.includes('Makeup') || title.includes('Skincare')) {
    category = 'beauty';
  } else if (title.includes('Self-Growth') || title.includes('Potential')) {
    category = 'self-growth';
  }
  
  // Arahkan ke halaman artikel
  window.location.href = `/articles/${category}/${slug}.html`;
  }

  // Dapatkan konten artikel dari database
  articleContent = articles[title] || `
    <h2>${title}</h2>
    <p>Konten lengkap untuk artikel ini akan segera hadir. Silakan kembali lagi nanti.</p>
  `;
  
  // Buat dan tampilkan modal
  createModal(articleContent);
}

// Fungsi untuk membuka modal kategori
function openCategoryModal(category) {
  // Buat konten kategori berdasarkan judul
  let categoryContent = '';
  
  // Database kategori sederhana
  const categories = {
    "Skincare": `
      <h2>Skincare</h2>
      <p class="category-description">Temukan rutinitas, produk, dan tips untuk kulit yang sehat dan bercahaya.</p>
      <img src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da