const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const bnb = document.getElementById("binancecoin");
const xrp = document.getElementById("ripple");

const liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Cripple&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    bnb.innerHTML = response.binancecoin.usd;
    xrp.innerHTML = response.ripple.usd;

});