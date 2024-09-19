const keyword=[
    {name:'Engineering Graphics'},
    {name:'ASIC Verification'},
    {name:'Mastering Cloud Computing'},
    {name:'Database Management Systems'},
    {name:'Semiconductor Devices'}
]
whateverElement.addEventListener("editing type" ,() =>{
}
                                )
function search_keyword() 
{
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('keywords');

    for (i = 0; i < x.length; i++) 
    {
        if (!x[i].innerHTML.toLowerCase().includes(input)) 
        {
            x[i].style.display = "none";
        }
        else 
        {
            x[i].style.display = "list-item";
        }
    }
}
