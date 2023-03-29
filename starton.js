require('dotenv').config()
// const axios = require("axios");
// const FormData = require("form-data");
// const fs = require("fs");

// const startonApi = axios.create({
//   baseURL: "https://api.starton.io",
//   headers: {
//     "x-api-key": process.env.STARTON_API_KEY,
//   },
// });
// // UPLOAD JSON TO IPFS.
// const uploadJsonToIpfs = async (json, name) => {
// const ipfsJson = await startonApi.post("/v3/ipfs/json", {
//   name: name,
//   content: json,
//   metadata: { your: "additionnal", meta: "data" },
// });
// return ipfsJson;
// };

// uploadJsonToIpfs({ "metadata": "data" }, "aassets/starton-nft-metadata.json")
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

const axios = require("axios")

const axiosInstance = axios.create({
	baseURL: "https://api.starton.io",
	headers: {
		"x-api-key": process.env.STARTON_API_KEY,
	},
})

axiosInstance.post(
	"/v3/smart-contract/polygon-mumbai/0xc8Df65C44DD00B40343d2859453330060811Afe2/call",
	{
		functionName: "mint(address,string)",
		params: [
			"0x08625c38F974deF745B1bC63B9fAfC0094c65fF7",
			"bafkreicuwxa3dxre573423xbbgqa6zukr2qpyzzaralecaaqtjqktz42dq"
		],
		signerWallet: "0x08625c38F974deF745B1bC63B9fAfC0094c65fF7",
		speed: "average"
	}
).then((response) => {
	console.log(response.data)
})