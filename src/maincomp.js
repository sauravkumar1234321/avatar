import './assets/scss/style.scss';
import React, { useState } from 'react';
import { reward_info } from "./assets/reward_info";



export default function MainComp() {
  
  // ATM you need to manually add new items and update the total values per item 
  const [dressupState, setDressupState] = useState({
    head: {current: reward_info.base_head_id, total: 5},
    bottom: {current: reward_info.base_bottom_id, total: 3},
    reward_head: {current: reward_info.base_head_offer},
    reward_bottom: {current: reward_info.base_bottom_offer},
    is_nft_head_applied: {current: false},
    is_nft_bottom_applied: {current: false},
    text1: {current: "Apply bottom NFT"},
    text2: {current: "Apply head NFT"},
    text3: {current: "Remove bottom NFT"},
    text4: {current: "Remove head NFT"},
  
  });

  function apply_reward(item){

    let new_current = dressupState[item].current + 1
    if(item === "bottom"){
      if(dressupState["is_nft_bottom_applied"].current === false){
        new_current = reward_info.reward_bottom_id
        updateDressUp("is_nft_bottom_applied", true);
        updateDressUp("text1", "Remove bottom NFT");
      } 
      
      else{
        new_current = reward_info.base_bottom_id  
        updateDressUp("is_nft_bottom_applied", false);
        updateDressUp("text1", "Apply bottom NFT");
      }
     
      console.log(dressupState["is_nft_bottom_applied"].current)
    }
    if(item === "head"){
        if(dressupState["is_nft_head_applied"].current === false){
          new_current = reward_info.reward_head_id
          updateDressUp("is_nft_head_applied", true);
          updateDressUp("text2", "Remove head NFT");
        } 
        
        else{
          new_current = reward_info.base_head_id  
          updateDressUp("is_nft_head_applied", false);
          updateDressUp("text2", "Apply head NFT");
        }
       
        console.log(dressupState["is_nft_head_applied"].current)
      }
  
  
    updateDressUp(item, new_current);
    
    
  }

  
  function updateDressUp(item,new_current){
    setDressupState({
      ...dressupState,
      [item]: {
        current: dressupState[item].current = new_current, 
        
      }
    })
  }

  function after_save()
  {
      alert("Avatar Saved");
  }
  
  return (
    <div className="App">
      
      <div id="container" >
      
        <div id="background" >
            <div id="body" ><center><h1>Your Avatar</h1></center></div>
            <div id="bottom" className={"bottom"+(dressupState["bottom"].current)} ></div>
            <div id="head"  className={"head"+(dressupState["head"].current)}></div>

            
            <input type="button"  value={dressupState["text1"].current} id="next1bottom" onClick={() => apply_reward("bottom")}/>
            <input type="button"  value={dressupState["text2"].current} id="next2bottom" onClick={() => apply_reward("head")}/>

            <input type="button"  value="Save Your Avatar" id="next4head"  onClick={() => after_save()} />

            <div id="next3head">

        <h1>Rewards Applied: {(dressupState["reward_bottom"].current)} <span id="myText"></span></h1>

      </div>


        </div>
        
      </div>

      
    </div>
  );
}
