import React from "react";
import Catagories from "../components/Catagories";
import {ethers} from 'ethers';
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import PropertyAgent from "./../components/PropertyAgent";
import Footer from "../components/Footer";
import Property from "../components/Property";
import Header from "../components/Header";
import {useState , useEffect } from "react";
import $ from 'jquery';
function Home() {
  useEffect(()=>{
    
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
  });
  const [account, setAccount] = useState();
  const loadBlockchainData = ()=>{
    window.ethereum.on('accountsChanged', async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = ethers.utils.getAddress(accounts[0])
      setAccount(account);
    })
  }
  useEffect(() => {
    loadBlockchainData();
  }, [])
  return (
    <>
      <div className="container-xxl bg-white p-0">
        <Navbar account={account} setAccount={setAccount} />
        {/* <PropertyAgent /> */}
        <Header/>
        <SearchBar />
        {/* <Catagories /> */}
        <Property/>
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default Home;
