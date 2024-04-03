// let priceNah; 
// function withDraw(){
// let prices = document.getElementById('priceN').value
// priceNah = prices
// let userNames = document.getElementById('yourName').value
//   if (userNames === ""  || priceNah === "" ) {   
//     er.style.display="block"
//   } else  {
//     conti.style.display="none"
//     cont.style.display="block" 
//   }
//       document.getElementById('userName').innerHTML = `${userNames}`
//       document.getElementById('moneyS').innerHTML = `Available Money: ₦ ${priceNah}`
//     }
    
//     function auth() {
//       let totalPrices = Number(quantity.value * priceOne.value)
//       let priceOfItem = Number(totalPrices)
//       let newMoney = priceNah - priceOfItem
//       moneyS.innerHTML = "Available Money: ₦" + newMoney
//       priceNah =  newMoney
//     }
//     let money = priceNah
//     moneyS.innerHTML = "Available Money: ₦" + money
    
//     document.getElementById("daTe").innerHTML = Date()
    
    
    
//     function spend(){
//   if (productOne.value == ""  || priceOne.value == "" || quantity.value == "" ) {
//     error.style.display="block"
//     setTimeout(()=>{
//       error.style.display="none"
//     },3000)
//   } else if (Number(quantity.value * priceOne.value) > 0 && Number(quantity.value * priceOne.value) > priceNah){
//     mix.style.display="block"
//     setTimeout(()=>{
//       mix.style.display="none"
//     },3000)
//     document.getElementById('productOne').value =""
//     document.getElementById('quantity').value =""
//       document.getElementById('priceOne').value ="" 
//     }
//        else {
//         let showTable = `
//         <tr>
//         <td>${productOne.value}</td>
//         <td>₦ ${priceOne.value}</td>
//         <td>${quantity.value}</td>
//         <td>₦ ${priceOne.value * quantity.value }</td>
//         </tr>`
//         document.getElementById('showOne').innerHTML  += `${showTable}` 
//         auth()

//         document.getElementById('productOne').value =""
//         document.getElementById('priceOne').value ="" 
//         document.getElementById('quantity').value ="" 
//         setTimeout(()=>{
//           mix.style.display="none"
//           error.style.display="none" 
//         },3000)
//         }
          
//     }
let priceNah; 
function withDraw(){
let prices = document.getElementById('priceN').value
priceNah = prices
let userNames = document.getElementById('yourName').value
  if (userNames === ""  || priceNah === "" ) {   
    er.style.display="block"
  } else  {
    conti.style.display="none"
    cont.style.display="block" 
  }
      document.getElementById('userName').innerHTML = `${userNames}`
      document.getElementById('moneyS').innerHTML = `Available Money: ₦ ${priceNah}`
    }
    
    function auth() {
      let totalPrices = Number(quantity.value * priceOne.value)
      let priceOfItem = Number(totalPrices)
      let newMoney = priceNah - priceOfItem
      moneyS.innerHTML = "Available Money: ₦" + newMoney
      priceNah =  newMoney
    }
    let money = priceNah
    moneyS.innerHTML = "Available Money: ₦" + money
    
    document.getElementById("daTe").innerHTML = Date()
    

    
    function spend(){
  if (productOne.value == ""  || priceOne.value == "" || quantity.value == "" ) {
    error.style.display="block"
    setTimeout(()=>{
      error.style.display="none"
    },3000)
  } else if (Number(quantity.value * priceOne.value) > 0 && Number(quantity.value * priceOne.value) > priceNah){
    mix.style.display="block"
    setTimeout(()=>{
      mix.style.display="none"
    },3000)
    document.getElementById('productOne').value =""
    document.getElementById('quantity').value =""
      document.getElementById('priceOne').value ="" 
    }
       else {
        let showTable = `
        <tr>
        <td>${productOne.value}</td>
        <td>₦ ${priceOne.value}</td>
        <td>${quantity.value}</td>
        <td>₦ ${priceOne.value * quantity.value }</td>
        </tr>`
        document.getElementById('showOne').innerHTML  += `${showTable}` 

        const itemName = productOne.value;
        const itemCat = priceOne.value;
        const itemPri = quantity.value;
        
        const itemData = {
          item: itemName,
          quantity: itemCat,
          price: itemPri
        }
        let existingData = JSON.parse(localStorage.getItem('items')) || [] ;
        existingData.push(itemData);
        localStorage.setItem('items', JSON.stringify(existingData));
        auth()
        // const storedItems = localStorage.getItem('items');
        // if (storedItems) {
        //   const items = JSON.parse(storedItems)
        //   let showTable = `
        //   <tr>
        //   <td>${items.productOne.value}</td>
        //   <td>₦ ${items.quantity}</td>
        //   <td>${items.price}</td>
        //   <td>₦ ${priceOne.value * quantity.value}</td>
        //   </tr>`
        //   document.getElementById('showOne').innerHTML  += `${showTable}` 
        // }
        document.getElementById('productOne').value =""
        document.getElementById('priceOne').value ="" 
        document.getElementById('quantity').value ="" 
        setTimeout(()=>{
          mix.style.display="none"
          error.style.display="none" 
        },3000)
        }
          
    }


