const sites = [
  "https://site1.example.com",
  "https://forum2.example.net",
  "https://arabicforum3.com"
];

document.getElementById('postBtn').addEventListener('click', () => {
  const link = document.getElementById('videoLink').value.trim();
  const results = document.getElementById('results');
  results.innerHTML = '';

  if (!link) {
    alert('الرجاء إدخال رابط فيديو صالح.');
    return;
  }

  sites.forEach(site => {
    const div = document.createElement('div');
    div.className = 'site';
    div.textContent = `تم نشر الرابط على: ${site}`;
    results.appendChild(div);
  });
});
