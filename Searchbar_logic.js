const keyword = [
    {name:'Engineering Graphics'},
    {name:'ASIC Verification'},
    {name:'Mastering Cloud Computing'},
    {name:'Database Management Systems'},
    {name:'Semiconductor Devices'}
];

const searchbar = document.getElementById('searchbar');
const results = document.getElementById('results');

searchbar.addEventListener('input', (event) => {
    const searchQuery = event.target.value.toLowerCase();

    // Debounce the search to avoid excessive updates
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        search(searchQuery);
    }, 500); // Adjust the delay as needed
});

function search(searchQuery) {
    results.innerHTML = '';

    keyword.forEach(item => {
        if (item.name.toLowerCase().includes(searchQuery)) {
            const resultItem = document.createElement('li');
            resultItem.textContent = item.name;
            results.appendChild(resultItem);
        }
    });
}
