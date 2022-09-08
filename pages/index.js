
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Metaplex } from "@metaplex-foundation/js";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { useState } from "react";
import Image from 'next/image'

const connection =  new Connection(process.env.NEXT_PUBLIC_RPC);
const metaplex = Metaplex.make(connection);
const myNfts="test";



export default function Home() {
  const [address, setAddress] = useState("yootn8Kf22CQczC732psp7qEqxwPGSDQCFZHkzoXp25");
  const [searchNum,setSearchNum]=useState("#1");
  const[y00tClaimed,sety00tClaimed]=useState(true);
  const fetchNft = async () => {
  sety00tClaimed(true);
  y00tClaimed=true;
  document.getElementById("outText1").innerHTML="Result:";
  document.getElementById("outText2").innerHTML="Checking..."
  
  myNfts = await metaplex.nfts().findAllByOwner({ owner: address }).run();
  console.log("len:"+myNfts.length);
  //loop through each nft in the wallet and check to see if the number corrolates with the DeadGod
  for (var i=0 ; i <myNfts.length ; i++)
  {
    if(myNfts[i]["name"]===searchNum){
      y00tClaimed=false;
      console.log("found");
      console.log("searched(DG):"+searchNum);
      console.log("t00b"+myNfts[i]["name"]);
      
    }
  }
  console.log(y00tClaimed);
  if(y00tClaimed===true){
    console.log("updatedC");
    document.getElementById("outText1").innerHTML="Result:";
    document.getElementById("outText2").innerHTML="t00b already claimed.";
  }else{
    console.log("updatedNC");
    document.getElementById("outText1").innerHTML="Result:";
    document.getElementById("outText2").innerHTML="t00b NOT yet claimed.";
  }
  };

  return (
    <div>
      <Head>
        <title>t00b Check</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.App}>
        
        <div className={styles.container}>
        <h1 className={styles.h1}>
        DeadGod t00b Check
        </h1>
          <h1 className={styles.title}>DeadGod Number:</h1>
          <div className={styles.nftForm}>
            <input
              type="number"
              
              onChange={(event) => setSearchNum("y00ts: mint t00b #"+event.target.value)}
              

            />
            <button onClick={fetchNft}>Check</button>
          </div>
          <p id="outText1" className={styles.resText}>
            
          </p>
          <p id="outText2" className={styles.resText}>
            
          </p>
        </div>
      </div>
    </div>
  );
}
