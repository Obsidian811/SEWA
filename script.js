document.getElementById('searchForm').addEventListener('submit', function(event) 
{
  event.preventDefault(); 

  const searchTerm = document.getElementById('searchInput').value;
  console.log('Search term:', searchTerm); 
});
