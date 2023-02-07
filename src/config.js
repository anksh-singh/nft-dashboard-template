export const CONFIG = {
  TEMPLATE: {
    // 1. Set your NFT collection contract address
    "collection_address": "0xa16E73Fb873eBa0D0D79b5DC64c594C33bF33AA4",

    // "collection_address" : "0xa2d9ded6115b7b7208459450d676f0127418ae7a", 

    // 2. Set your blockchain chain ID where your NFT collection contract address is deployed (see below for value options)
    "block_chain_id": "250",

    // 3. Set the default title of your dashboard. If found, this template uses the NFT Collection name for the title.
    "title": "Cheap clusters of NFTs",

    // 4. Set your Covalent API Key
    //"api_key": "ckey_3bdabb7325ee47cc9bcc1e5f3d7",
    "api_key": "ckey_15f98bb4c7ff4f698b08af88031",

    // 5. (Optional) Display the floor price chart
    "timeseries_chart": true,

    // 6. (Optional) Set your banner image
    "banner_picture": "https://i.seadn.io/gae/OkVDhCjruEq7t0qnb4nPLUTMmuUqG3TF-_7L8_jObyUKpZolmduUl0nZqcL8PkAv9CvDuWd-L0xgnpEsWU9OikCi6Q9waBFprnZ1Dw?auto=format&w=3840",
  },

  // Supported networks - just for your reference
  FILTER_OPTIONS : [
    {name: "Ethereum", value: 1},
    {name: "Polygon", value: 137},
    {name: "Avalanche", value: 43114},
    {name: "Fantom", value: 250},
    {name: "Moonbeam", value: 1284},
    {name: "Moonriver", value: 1285},
    {name: "Arbitrum", value: 42161},
    {name: "Shiden", value: 336}  
    ],
  // Supported timeframes - just for your reference
  GRAPH_OPTIONS : [
    {name: "7 Days", value: 7},
    {name: "1 Month", value: 30},
    {name: "3 Month", value: 90},
    {name: "1 Year", value: 365},
      {name: "All time", value: 0},
    ],
}