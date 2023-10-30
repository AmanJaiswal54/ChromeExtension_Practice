const submitBtn = document.getElementById('submit');
const amountInput=document.getElementById('amount');
const totalSpendH2 = document.getElementById('total');
const limitDiv = document.getElementById('limit');

submitBtn.addEventListener('click', (e) =>{
    chrome.storage.sync.get('total_result').then((result) => {
        let newTotal = 0;
        if(result.total_result){
            newTotal = newTotal + parseInt(result.total_result);
        }
        let amount = amountInput.value;
        if(amount) {
            newTotal = newTotal + parseInt(amount);
        }

        totalSpendH2.innerText = newTotal;
        amountInput.value = '';

      chrome.storage.sync.set({ 'total_result': newTotal });
      });
      
})

chrome.storage.sync.get('total_result').then((result)=>{
    totalSpendH2.innerText = result.total_result;
});

chrome.storage.sync.get('limit_threshold').then((result)=>{
    limitDiv.innerText= result.limit_threshold ? result.limit_threshold : 0;
});

