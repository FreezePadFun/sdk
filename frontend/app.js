import { Connection, clusterApiUrl } from "@solana/web3.js";

let wallet = null;

const connectBtn = document.getElementById("connectWallet");

connectBtn.onclick = async () => {

if(window.solana){

wallet = await window.solana.connect();

alert("Wallet connected: " + wallet.publicKey);

}

};

const lockBtn = document.getElementById("lockBtn");

lockBtn.onclick = async () => {

const token = document.getElementById("tokenAddress").value;
const amount = document.getElementById("amount").value;
const duration = document.getElementById("duration").value;

console.log("Lock request:", token, amount, duration);

alert("Token lock submitted (demo)");

};
