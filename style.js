//create account - register a new account
function register(){
    //fetch the values from the html
    uname=reg_name.value
    acno=reg_acno.value
    
    pswd=reg_pswd.value
    console.log(acno,uname,pswd);

    //create acnddetails object

    accountDetails={
        uname,
        acno,
       
        pswd
    }
    //check if acno is alrdy present or not
     if(acno in localStorage){
        alert("user already registered")
     }
     else{
        localStorage.setItem(acno,JSON.stringify(accountDetails))
        alert("Registration successfully")
        window.location="./login.html"
     }
}


// login

function login(){
    //fetch details
    acno =login_acno.value
    pswd=login_pswd.value
    console.log(acno,pswd);


    //check if the account number is present in localstorage

    if(acno in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(acno));
        if(pswd==accountDetails.pswd){
            alert("login successful")
            window.location="./home.html";
        }else{
            alert("incorrect password")
        }
    }
}



//deposit

let balance =0;
let amount=0;
let withdraw =0;
let totalbalance =0;
let pswd ="";
counter=0;

function depositmoney(){
amount=deposit_amnt.value;
pswd=deposit_pswd.value;
amount=Math.floor(amount);
balance+=amount;


if(pswd in localStorage){
    accountDetails=JSON.parse(localStorage.getItem(pswd));
    if(pswd==accountDetails.pswd && amount<= 0){
        alert("invalid value")
    }else{
        alert("Amount added successfully")
        document.getElementById("balance_amount").innerHTML=`<div class="text-dark" style="font-weight:500">Your Current Balance ${balance}</div>`
    }
}
}


function withdrawmoney(){
    withdraw=withdraw_amnt.value;
    pswd=withdraw_pswd.value;
    withdraw=Math.floor(withdraw);
    balance-=withdraw;



    if(pswd in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(pswd));
        if(pswd==accountDetails.pswd && amount<= 0){
            alert("invalid value")
        }else{
            alert("Amount withdraw successfully")
            document.getElementById("balance_amount2").innerHTML=`<div class="text-dark" style="font-weight:500">Your Current Balance ${balance}</div>`
        }
    }
}


function getstarted(){
    window.location="./Register.html  "
}
 function signup(){
    window.location="./Register.html  "
 }

 function signin(){
    window.location="./login.html "
 }