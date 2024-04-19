export const TokenDistributorABI = [
  {
    "contractName": "TokenDistributor",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "checkBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "returnTokensToOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address[]",
            "name": "addresses",
            "type": "address[]"
          }
        ],
        "name": "resetReceivedStatus",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address[]",
            "name": "addresses",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          }
        ],
        "name": "setTokenAllocations",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          }
        ],
        "name": "distributeTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          }
        ],
        "name": "hasReceivedTokens",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          }
        ],
        "name": "getTokenAllocation",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.21+commit.d9974bed\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"checkBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"}],\"name\":\"distributeTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getTokenAllocation\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"hasReceivedTokens\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"addresses\",\"type\":\"address[]\"}],\"name\":\"resetReceivedStatus\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"returnTokensToOwner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"addresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"name\":\"setTokenAllocations\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/TokenDistributor.sol\":\"TokenDistributor\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/TokenDistributor.sol\":{\"keccak256\":\"0x4972a1873c3f0c7830601766155f90d7d00f814117ba6e6ec6939493f2ca74f7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://10f7b91be9b83b479b38287c0b78464a2fe5748a3b246a27a2e4d70d3b45b4f1\",\"dweb:/ipfs/QmdLVBizNnQWyatpASaJVXvWVMXp9T9DQnzsH2AG89JEw7\"]}},\"version\":1}",
    "bytecode": "0x608060405234801562000010575f80fd5b50604051620015093803806200150983398181016040528101906200003691906200019a565b60015f819055505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a5906200024e565b60405180910390fd5b8060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503360025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200026e565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620001648262000139565b9050919050565b620001768162000158565b811462000181575f80fd5b50565b5f8151905062000194816200016b565b92915050565b5f60208284031215620001b257620001b162000135565b5b5f620001c18482850162000184565b91505092915050565b5f82825260208201905092915050565b7f546f6b656e4469737472696275746f723a20746f6b656e2061646472657373205f8201527f697320746865207a65726f206164647265737300000000000000000000000000602082015250565b5f62000236603383620001ca565b91506200024382620001da565b604082019050919050565b5f6020820190508181035f830152620002678162000228565b9050919050565b61128d806200027c5f395ff3fe608060405234801561000f575f80fd5b506004361061007b575f3560e01c80634ece48c1116100595780634ece48c1146100d55780638d0fac76146100f1578063b1d17c9814610121578063c71daccb1461013d5761007b565b806303694fa61461007f57806317ae867a1461009b5780632971e51d146100cb575b5f80fd5b61009960048036038101906100949190610b2f565b61015b565b005b6100b560048036038101906100b09190610c07565b6102db565b6040516100c29190610c4c565b60405180910390f35b6100d361032d565b005b6100ef60048036038101906100ea9190610c65565b61055b565b005b61010b60048036038101906101069190610c07565b61068a565b6040516101189190610cc8565b60405180910390f35b61013b60048036038101906101369190610c07565b6106d0565b005b6101456109d2565b6040516101529190610cc8565b60405180910390f35b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e190610d3b565b60405180910390fd5b818190508484905014610232576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022990610dc9565b60405180910390fd5b5f5b848490508110156102d45782828281811061025257610251610de7565b5b9050602002013560045f87878581811061026f5761026e610de7565b5b90506020020160208101906102849190610c07565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208190555080806102cc90610e41565b915050610234565b5050505050565b5f60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff169050919050565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b390610d3b565b60405180910390fd5b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104179190610e97565b602060405180830381865afa158015610432573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104569190610eda565b90505f811161049a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049190610f75565b60405180910390fd5b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b8152600401610517929190610f93565b6020604051808303815f875af1158015610533573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105579190610fe4565b5050565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e190610d3b565b60405180910390fd5b5f5b82829050811015610685575f60035f85858581811061060e5761060d610de7565b5b90506020020160208101906106239190610c07565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550808061067d90610e41565b9150506105ec565b505050565b5f60045f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b60035f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff161561075a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107519061107f565b60405180910390fd5b5f60045f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490505f81116107dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d49061110d565b60405180910390fd5b8060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108389190610e97565b602060405180830381865afa158015610853573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108779190610eda565b10156108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108af9061119b565b60405180910390fd5b5f6006670de0b6b3a7640000836108cf91906111b9565b6108d99190611227565b9050600160035f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84836040518363ffffffff1660e01b815260040161098c929190610f93565b6020604051808303815f875af11580156109a8573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109cc9190610fe4565b50505050565b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610a2d9190610e97565b602060405180830381865afa158015610a48573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a6c9190610eda565b905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f8083601f840112610a9a57610a99610a79565b5b8235905067ffffffffffffffff811115610ab757610ab6610a7d565b5b602083019150836020820283011115610ad357610ad2610a81565b5b9250929050565b5f8083601f840112610aef57610aee610a79565b5b8235905067ffffffffffffffff811115610b0c57610b0b610a7d565b5b602083019150836020820283011115610b2857610b27610a81565b5b9250929050565b5f805f8060408587031215610b4757610b46610a71565b5b5f85013567ffffffffffffffff811115610b6457610b63610a75565b5b610b7087828801610a85565b9450945050602085013567ffffffffffffffff811115610b9357610b92610a75565b5b610b9f87828801610ada565b925092505092959194509250565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610bd682610bad565b9050919050565b610be681610bcc565b8114610bf0575f80fd5b50565b5f81359050610c0181610bdd565b92915050565b5f60208284031215610c1c57610c1b610a71565b5b5f610c2984828501610bf3565b91505092915050565b5f8115159050919050565b610c4681610c32565b82525050565b5f602082019050610c5f5f830184610c3d565b92915050565b5f8060208385031215610c7b57610c7a610a71565b5b5f83013567ffffffffffffffff811115610c9857610c97610a75565b5b610ca485828601610a85565b92509250509250929050565b5f819050919050565b610cc281610cb0565b82525050565b5f602082019050610cdb5f830184610cb9565b92915050565b5f82825260208201905092915050565b7f4e6f7420746865206f776e6572000000000000000000000000000000000000005f82015250565b5f610d25600d83610ce1565b9150610d3082610cf1565b602082019050919050565b5f6020820190508181035f830152610d5281610d19565b9050919050565b7f546f6b656e4469737472696275746f723a2061646472657373657320616e64205f8201527f616d6f756e7473206c656e677468206d69736d61746368000000000000000000602082015250565b5f610db3603783610ce1565b9150610dbe82610d59565b604082019050919050565b5f6020820190508181035f830152610de081610da7565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610e4b82610cb0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610e7d57610e7c610e14565b5b600182019050919050565b610e9181610bcc565b82525050565b5f602082019050610eaa5f830184610e88565b92915050565b610eb981610cb0565b8114610ec3575f80fd5b50565b5f81519050610ed481610eb0565b92915050565b5f60208284031215610eef57610eee610a71565b5b5f610efc84828501610ec6565b91505092915050565b7f546f6b656e4469737472696275746f723a206e6f20746f6b656e7320746f20725f8201527f657475726e000000000000000000000000000000000000000000000000000000602082015250565b5f610f5f602583610ce1565b9150610f6a82610f05565b604082019050919050565b5f6020820190508181035f830152610f8c81610f53565b9050919050565b5f604082019050610fa65f830185610e88565b610fb36020830184610cb9565b9392505050565b610fc381610c32565b8114610fcd575f80fd5b50565b5f81519050610fde81610fba565b92915050565b5f60208284031215610ff957610ff8610a71565b5b5f61100684828501610fd0565b91505092915050565b7f546f6b656e4469737472696275746f723a20746f6b656e7320616c72656164795f8201527f2073656e7420746f207468697320616464726573730000000000000000000000602082015250565b5f611069603583610ce1565b91506110748261100f565b604082019050919050565b5f6020820190508181035f8301526110968161105d565b9050919050565b7f546f6b656e4469737472696275746f723a206e6f20746f6b656e7320616c6c6f5f8201527f636174656420746f207468697320616464726573730000000000000000000000602082015250565b5f6110f7603583610ce1565b91506111028261109d565b604082019050919050565b5f6020820190508181035f830152611124816110eb565b9050919050565b7f546f6b656e4469737472696275746f723a20696e73756666696369656e7420745f8201527f6f6b656e7320696e2074686520636f6e74726163740000000000000000000000602082015250565b5f611185603583610ce1565b91506111908261112b565b604082019050919050565b5f6020820190508181035f8301526111b281611179565b9050919050565b5f6111c382610cb0565b91506111ce83610cb0565b92508282026111dc81610cb0565b915082820484148315176111f3576111f2610e14565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f61123182610cb0565b915061123c83610cb0565b92508261124c5761124b6111fa565b5b82820490509291505056fea2646970667358221220547f3adfc6a2f13949e8d0d960e6c28cb0c68a2c40ffd4b51e6c50415ef7d3ec64736f6c63430008150033",
    "deployedBytecode": "0x608060405234801561000f575f80fd5b506004361061007b575f3560e01c80634ece48c1116100595780634ece48c1146100d55780638d0fac76146100f1578063b1d17c9814610121578063c71daccb1461013d5761007b565b806303694fa61461007f57806317ae867a1461009b5780632971e51d146100cb575b5f80fd5b61009960048036038101906100949190610b2f565b61015b565b005b6100b560048036038101906100b09190610c07565b6102db565b6040516100c29190610c4c565b60405180910390f35b6100d361032d565b005b6100ef60048036038101906100ea9190610c65565b61055b565b005b61010b60048036038101906101069190610c07565b61068a565b6040516101189190610cc8565b60405180910390f35b61013b60048036038101906101369190610c07565b6106d0565b005b6101456109d2565b6040516101529190610cc8565b60405180910390f35b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e190610d3b565b60405180910390fd5b818190508484905014610232576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022990610dc9565b60405180910390fd5b5f5b848490508110156102d45782828281811061025257610251610de7565b5b9050602002013560045f87878581811061026f5761026e610de7565b5b90506020020160208101906102849190610c07565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208190555080806102cc90610e41565b915050610234565b5050505050565b5f60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff169050919050565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b390610d3b565b60405180910390fd5b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104179190610e97565b602060405180830381865afa158015610432573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104569190610eda565b90505f811161049a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049190610f75565b60405180910390fd5b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b8152600401610517929190610f93565b6020604051808303815f875af1158015610533573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105579190610fe4565b5050565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e190610d3b565b60405180910390fd5b5f5b82829050811015610685575f60035f85858581811061060e5761060d610de7565b5b90506020020160208101906106239190610c07565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550808061067d90610e41565b9150506105ec565b505050565b5f60045f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b60035f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff161561075a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107519061107f565b60405180910390fd5b5f60045f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490505f81116107dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d49061110d565b60405180910390fd5b8060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108389190610e97565b602060405180830381865afa158015610853573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108779190610eda565b10156108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108af9061119b565b60405180910390fd5b5f6006670de0b6b3a7640000836108cf91906111b9565b6108d99190611227565b9050600160035f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84836040518363ffffffff1660e01b815260040161098c929190610f93565b6020604051808303815f875af11580156109a8573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109cc9190610fe4565b50505050565b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610a2d9190610e97565b602060405180830381865afa158015610a48573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a6c9190610eda565b905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f8083601f840112610a9a57610a99610a79565b5b8235905067ffffffffffffffff811115610ab757610ab6610a7d565b5b602083019150836020820283011115610ad357610ad2610a81565b5b9250929050565b5f8083601f840112610aef57610aee610a79565b5b8235905067ffffffffffffffff811115610b0c57610b0b610a7d565b5b602083019150836020820283011115610b2857610b27610a81565b5b9250929050565b5f805f8060408587031215610b4757610b46610a71565b5b5f85013567ffffffffffffffff811115610b6457610b63610a75565b5b610b7087828801610a85565b9450945050602085013567ffffffffffffffff811115610b9357610b92610a75565b5b610b9f87828801610ada565b925092505092959194509250565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610bd682610bad565b9050919050565b610be681610bcc565b8114610bf0575f80fd5b50565b5f81359050610c0181610bdd565b92915050565b5f60208284031215610c1c57610c1b610a71565b5b5f610c2984828501610bf3565b91505092915050565b5f8115159050919050565b610c4681610c32565b82525050565b5f602082019050610c5f5f830184610c3d565b92915050565b5f8060208385031215610c7b57610c7a610a71565b5b5f83013567ffffffffffffffff811115610c9857610c97610a75565b5b610ca485828601610a85565b92509250509250929050565b5f819050919050565b610cc281610cb0565b82525050565b5f602082019050610cdb5f830184610cb9565b92915050565b5f82825260208201905092915050565b7f4e6f7420746865206f776e6572000000000000000000000000000000000000005f82015250565b5f610d25600d83610ce1565b9150610d3082610cf1565b602082019050919050565b5f6020820190508181035f830152610d5281610d19565b9050919050565b7f546f6b656e4469737472696275746f723a2061646472657373657320616e64205f8201527f616d6f756e7473206c656e677468206d69736d61746368000000000000000000602082015250565b5f610db3603783610ce1565b9150610dbe82610d59565b604082019050919050565b5f6020820190508181035f830152610de081610da7565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610e4b82610cb0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610e7d57610e7c610e14565b5b600182019050919050565b610e9181610bcc565b82525050565b5f602082019050610eaa5f830184610e88565b92915050565b610eb981610cb0565b8114610ec3575f80fd5b50565b5f81519050610ed481610eb0565b92915050565b5f60208284031215610eef57610eee610a71565b5b5f610efc84828501610ec6565b91505092915050565b7f546f6b656e4469737472696275746f723a206e6f20746f6b656e7320746f20725f8201527f657475726e000000000000000000000000000000000000000000000000000000602082015250565b5f610f5f602583610ce1565b9150610f6a82610f05565b604082019050919050565b5f6020820190508181035f830152610f8c81610f53565b9050919050565b5f604082019050610fa65f830185610e88565b610fb36020830184610cb9565b9392505050565b610fc381610c32565b8114610fcd575f80fd5b50565b5f81519050610fde81610fba565b92915050565b5f60208284031215610ff957610ff8610a71565b5b5f61100684828501610fd0565b91505092915050565b7f546f6b656e4469737472696275746f723a20746f6b656e7320616c72656164795f8201527f2073656e7420746f207468697320616464726573730000000000000000000000602082015250565b5f611069603583610ce1565b91506110748261100f565b604082019050919050565b5f6020820190508181035f8301526110968161105d565b9050919050565b7f546f6b656e4469737472696275746f723a206e6f20746f6b656e7320616c6c6f5f8201527f636174656420746f207468697320616464726573730000000000000000000000602082015250565b5f6110f7603583610ce1565b91506111028261109d565b604082019050919050565b5f6020820190508181035f830152611124816110eb565b9050919050565b7f546f6b656e4469737472696275746f723a20696e73756666696369656e7420745f8201527f6f6b656e7320696e2074686520636f6e74726163740000000000000000000000602082015250565b5f611185603583610ce1565b91506111908261112b565b604082019050919050565b5f6020820190508181035f8301526111b281611179565b9050919050565b5f6111c382610cb0565b91506111ce83610cb0565b92508282026111dc81610cb0565b915082820484148315176111f3576111f2610e14565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f61123182610cb0565b915061123c83610cb0565b92508261124c5761124b6111fa565b5b82820490509291505056fea2646970667358221220547f3adfc6a2f13949e8d0d960e6c28cb0c68a2c40ffd4b51e6c50415ef7d3ec64736f6c63430008150033",
    "immutableReferences": {},
    "generatedSources": [
      {
        "ast": {
          "nativeSrc": "0:2415:1",
          "nodeType": "YulBlock",
          "src": "0:2415:1",
          "statements": [
            {
              "body": {
                "nativeSrc": "47:35:1",
                "nodeType": "YulBlock",
                "src": "47:35:1",
                "statements": [
                  {
                    "nativeSrc": "57:19:1",
                    "nodeType": "YulAssignment",
                    "src": "57:19:1",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "73:2:1",
                          "nodeType": "YulLiteral",
                          "src": "73:2:1",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nativeSrc": "67:5:1",
                        "nodeType": "YulIdentifier",
                        "src": "67:5:1"
                      },
                      "nativeSrc": "67:9:1",
                      "nodeType": "YulFunctionCall",
                      "src": "67:9:1"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nativeSrc": "57:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "57:6:1"
                      }
                    ]
                  }
                ]
              },
              "name": "allocate_unbounded",
              "nativeSrc": "7:75:1",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nativeSrc": "40:6:1",
                  "nodeType": "YulTypedName",
                  "src": "40:6:1",
                  "type": ""
                }
              ],
              "src": "7:75:1"
            },
            {
              "body": {
                "nativeSrc": "177:28:1",
                "nodeType": "YulBlock",
                "src": "177:28:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "194:1:1",
                          "nodeType": "YulLiteral",
                          "src": "194:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "197:1:1",
                          "nodeType": "YulLiteral",
                          "src": "197:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nativeSrc": "187:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "187:6:1"
                      },
                      "nativeSrc": "187:12:1",
                      "nodeType": "YulFunctionCall",
                      "src": "187:12:1"
                    },
                    "nativeSrc": "187:12:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "187:12:1"
                  }
                ]
              },
              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              "nativeSrc": "88:117:1",
              "nodeType": "YulFunctionDefinition",
              "src": "88:117:1"
            },
            {
              "body": {
                "nativeSrc": "300:28:1",
                "nodeType": "YulBlock",
                "src": "300:28:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "317:1:1",
                          "nodeType": "YulLiteral",
                          "src": "317:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "320:1:1",
                          "nodeType": "YulLiteral",
                          "src": "320:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nativeSrc": "310:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "310:6:1"
                      },
                      "nativeSrc": "310:12:1",
                      "nodeType": "YulFunctionCall",
                      "src": "310:12:1"
                    },
                    "nativeSrc": "310:12:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "310:12:1"
                  }
                ]
              },
              "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              "nativeSrc": "211:117:1",
              "nodeType": "YulFunctionDefinition",
              "src": "211:117:1"
            },
            {
              "body": {
                "nativeSrc": "379:81:1",
                "nodeType": "YulBlock",
                "src": "379:81:1",
                "statements": [
                  {
                    "nativeSrc": "389:65:1",
                    "nodeType": "YulAssignment",
                    "src": "389:65:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "404:5:1",
                          "nodeType": "YulIdentifier",
                          "src": "404:5:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "411:42:1",
                          "nodeType": "YulLiteral",
                          "src": "411:42:1",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nativeSrc": "400:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "400:3:1"
                      },
                      "nativeSrc": "400:54:1",
                      "nodeType": "YulFunctionCall",
                      "src": "400:54:1"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nativeSrc": "389:7:1",
                        "nodeType": "YulIdentifier",
                        "src": "389:7:1"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint160",
              "nativeSrc": "334:126:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "361:5:1",
                  "nodeType": "YulTypedName",
                  "src": "361:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nativeSrc": "371:7:1",
                  "nodeType": "YulTypedName",
                  "src": "371:7:1",
                  "type": ""
                }
              ],
              "src": "334:126:1"
            },
            {
              "body": {
                "nativeSrc": "511:51:1",
                "nodeType": "YulBlock",
                "src": "511:51:1",
                "statements": [
                  {
                    "nativeSrc": "521:35:1",
                    "nodeType": "YulAssignment",
                    "src": "521:35:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "550:5:1",
                          "nodeType": "YulIdentifier",
                          "src": "550:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nativeSrc": "532:17:1",
                        "nodeType": "YulIdentifier",
                        "src": "532:17:1"
                      },
                      "nativeSrc": "532:24:1",
                      "nodeType": "YulFunctionCall",
                      "src": "532:24:1"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nativeSrc": "521:7:1",
                        "nodeType": "YulIdentifier",
                        "src": "521:7:1"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address",
              "nativeSrc": "466:96:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "493:5:1",
                  "nodeType": "YulTypedName",
                  "src": "493:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nativeSrc": "503:7:1",
                  "nodeType": "YulTypedName",
                  "src": "503:7:1",
                  "type": ""
                }
              ],
              "src": "466:96:1"
            },
            {
              "body": {
                "nativeSrc": "611:79:1",
                "nodeType": "YulBlock",
                "src": "611:79:1",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "668:16:1",
                      "nodeType": "YulBlock",
                      "src": "668:16:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "677:1:1",
                                "nodeType": "YulLiteral",
                                "src": "677:1:1",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "680:1:1",
                                "nodeType": "YulLiteral",
                                "src": "680:1:1",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nativeSrc": "670:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "670:6:1"
                            },
                            "nativeSrc": "670:12:1",
                            "nodeType": "YulFunctionCall",
                            "src": "670:12:1"
                          },
                          "nativeSrc": "670:12:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "670:12:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "634:5:1",
                              "nodeType": "YulIdentifier",
                              "src": "634:5:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "659:5:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "659:5:1"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nativeSrc": "641:17:1",
                                "nodeType": "YulIdentifier",
                                "src": "641:17:1"
                              },
                              "nativeSrc": "641:24:1",
                              "nodeType": "YulFunctionCall",
                              "src": "641:24:1"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "631:2:1",
                            "nodeType": "YulIdentifier",
                            "src": "631:2:1"
                          },
                          "nativeSrc": "631:35:1",
                          "nodeType": "YulFunctionCall",
                          "src": "631:35:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nativeSrc": "624:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "624:6:1"
                      },
                      "nativeSrc": "624:43:1",
                      "nodeType": "YulFunctionCall",
                      "src": "624:43:1"
                    },
                    "nativeSrc": "621:63:1",
                    "nodeType": "YulIf",
                    "src": "621:63:1"
                  }
                ]
              },
              "name": "validator_revert_t_address",
              "nativeSrc": "568:122:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "604:5:1",
                  "nodeType": "YulTypedName",
                  "src": "604:5:1",
                  "type": ""
                }
              ],
              "src": "568:122:1"
            },
            {
              "body": {
                "nativeSrc": "759:80:1",
                "nodeType": "YulBlock",
                "src": "759:80:1",
                "statements": [
                  {
                    "nativeSrc": "769:22:1",
                    "nodeType": "YulAssignment",
                    "src": "769:22:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nativeSrc": "784:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "784:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nativeSrc": "778:5:1",
                        "nodeType": "YulIdentifier",
                        "src": "778:5:1"
                      },
                      "nativeSrc": "778:13:1",
                      "nodeType": "YulFunctionCall",
                      "src": "778:13:1"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nativeSrc": "769:5:1",
                        "nodeType": "YulIdentifier",
                        "src": "769:5:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "827:5:1",
                          "nodeType": "YulIdentifier",
                          "src": "827:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_address",
                        "nativeSrc": "800:26:1",
                        "nodeType": "YulIdentifier",
                        "src": "800:26:1"
                      },
                      "nativeSrc": "800:33:1",
                      "nodeType": "YulFunctionCall",
                      "src": "800:33:1"
                    },
                    "nativeSrc": "800:33:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "800:33:1"
                  }
                ]
              },
              "name": "abi_decode_t_address_fromMemory",
              "nativeSrc": "696:143:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nativeSrc": "737:6:1",
                  "nodeType": "YulTypedName",
                  "src": "737:6:1",
                  "type": ""
                },
                {
                  "name": "end",
                  "nativeSrc": "745:3:1",
                  "nodeType": "YulTypedName",
                  "src": "745:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nativeSrc": "753:5:1",
                  "nodeType": "YulTypedName",
                  "src": "753:5:1",
                  "type": ""
                }
              ],
              "src": "696:143:1"
            },
            {
              "body": {
                "nativeSrc": "922:274:1",
                "nodeType": "YulBlock",
                "src": "922:274:1",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "968:83:1",
                      "nodeType": "YulBlock",
                      "src": "968:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nativeSrc": "970:77:1",
                              "nodeType": "YulIdentifier",
                              "src": "970:77:1"
                            },
                            "nativeSrc": "970:79:1",
                            "nodeType": "YulFunctionCall",
                            "src": "970:79:1"
                          },
                          "nativeSrc": "970:79:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "970:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nativeSrc": "943:7:1",
                              "nodeType": "YulIdentifier",
                              "src": "943:7:1"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "952:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "952:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "939:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "939:3:1"
                          },
                          "nativeSrc": "939:23:1",
                          "nodeType": "YulFunctionCall",
                          "src": "939:23:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "964:2:1",
                          "nodeType": "YulLiteral",
                          "src": "964:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nativeSrc": "935:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "935:3:1"
                      },
                      "nativeSrc": "935:32:1",
                      "nodeType": "YulFunctionCall",
                      "src": "935:32:1"
                    },
                    "nativeSrc": "932:119:1",
                    "nodeType": "YulIf",
                    "src": "932:119:1"
                  },
                  {
                    "nativeSrc": "1061:128:1",
                    "nodeType": "YulBlock",
                    "src": "1061:128:1",
                    "statements": [
                      {
                        "nativeSrc": "1076:15:1",
                        "nodeType": "YulVariableDeclaration",
                        "src": "1076:15:1",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "1090:1:1",
                          "nodeType": "YulLiteral",
                          "src": "1090:1:1",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nativeSrc": "1080:6:1",
                            "nodeType": "YulTypedName",
                            "src": "1080:6:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "1105:74:1",
                        "nodeType": "YulAssignment",
                        "src": "1105:74:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "1151:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1151:9:1"
                                },
                                {
                                  "name": "offset",
                                  "nativeSrc": "1162:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1162:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "1147:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "1147:3:1"
                              },
                              "nativeSrc": "1147:22:1",
                              "nodeType": "YulFunctionCall",
                              "src": "1147:22:1"
                            },
                            {
                              "name": "dataEnd",
                              "nativeSrc": "1171:7:1",
                              "nodeType": "YulIdentifier",
                              "src": "1171:7:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address_fromMemory",
                            "nativeSrc": "1115:31:1",
                            "nodeType": "YulIdentifier",
                            "src": "1115:31:1"
                          },
                          "nativeSrc": "1115:64:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1115:64:1"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nativeSrc": "1105:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "1105:6:1"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_address_fromMemory",
              "nativeSrc": "845:351:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "892:9:1",
                  "nodeType": "YulTypedName",
                  "src": "892:9:1",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nativeSrc": "903:7:1",
                  "nodeType": "YulTypedName",
                  "src": "903:7:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nativeSrc": "915:6:1",
                  "nodeType": "YulTypedName",
                  "src": "915:6:1",
                  "type": ""
                }
              ],
              "src": "845:351:1"
            },
            {
              "body": {
                "nativeSrc": "1298:73:1",
                "nodeType": "YulBlock",
                "src": "1298:73:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "1315:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "1315:3:1"
                        },
                        {
                          "name": "length",
                          "nativeSrc": "1320:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "1320:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "1308:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "1308:6:1"
                      },
                      "nativeSrc": "1308:19:1",
                      "nodeType": "YulFunctionCall",
                      "src": "1308:19:1"
                    },
                    "nativeSrc": "1308:19:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "1308:19:1"
                  },
                  {
                    "nativeSrc": "1336:29:1",
                    "nodeType": "YulAssignment",
                    "src": "1336:29:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "1355:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "1355:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "1360:4:1",
                          "nodeType": "YulLiteral",
                          "src": "1360:4:1",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "1351:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "1351:3:1"
                      },
                      "nativeSrc": "1351:14:1",
                      "nodeType": "YulFunctionCall",
                      "src": "1351:14:1"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nativeSrc": "1336:11:1",
                        "nodeType": "YulIdentifier",
                        "src": "1336:11:1"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
              "nativeSrc": "1202:169:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "1270:3:1",
                  "nodeType": "YulTypedName",
                  "src": "1270:3:1",
                  "type": ""
                },
                {
                  "name": "length",
                  "nativeSrc": "1275:6:1",
                  "nodeType": "YulTypedName",
                  "src": "1275:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nativeSrc": "1286:11:1",
                  "nodeType": "YulTypedName",
                  "src": "1286:11:1",
                  "type": ""
                }
              ],
              "src": "1202:169:1"
            },
            {
              "body": {
                "nativeSrc": "1483:132:1",
                "nodeType": "YulBlock",
                "src": "1483:132:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "1505:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "1505:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1513:1:1",
                              "nodeType": "YulLiteral",
                              "src": "1513:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "1501:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "1501:3:1"
                          },
                          "nativeSrc": "1501:14:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1501:14:1"
                        },
                        {
                          "hexValue": "546f6b656e4469737472696275746f723a20746f6b656e206164647265737320",
                          "kind": "string",
                          "nativeSrc": "1517:34:1",
                          "nodeType": "YulLiteral",
                          "src": "1517:34:1",
                          "type": "",
                          "value": "TokenDistributor: token address "
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "1494:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "1494:6:1"
                      },
                      "nativeSrc": "1494:58:1",
                      "nodeType": "YulFunctionCall",
                      "src": "1494:58:1"
                    },
                    "nativeSrc": "1494:58:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "1494:58:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "1573:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "1573:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1581:2:1",
                              "nodeType": "YulLiteral",
                              "src": "1581:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "1569:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "1569:3:1"
                          },
                          "nativeSrc": "1569:15:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1569:15:1"
                        },
                        {
                          "hexValue": "697320746865207a65726f2061646472657373",
                          "kind": "string",
                          "nativeSrc": "1586:21:1",
                          "nodeType": "YulLiteral",
                          "src": "1586:21:1",
                          "type": "",
                          "value": "is the zero address"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "1562:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "1562:6:1"
                      },
                      "nativeSrc": "1562:46:1",
                      "nodeType": "YulFunctionCall",
                      "src": "1562:46:1"
                    },
                    "nativeSrc": "1562:46:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "1562:46:1"
                  }
                ]
              },
              "name": "store_literal_in_memory_b3803e2714944f069da02f5ef8a46d97be9c25b543873e310ec64a0de34762df",
              "nativeSrc": "1377:238:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nativeSrc": "1475:6:1",
                  "nodeType": "YulTypedName",
                  "src": "1475:6:1",
                  "type": ""
                }
              ],
              "src": "1377:238:1"
            },
            {
              "body": {
                "nativeSrc": "1767:220:1",
                "nodeType": "YulBlock",
                "src": "1767:220:1",
                "statements": [
                  {
                    "nativeSrc": "1777:74:1",
                    "nodeType": "YulAssignment",
                    "src": "1777:74:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "1843:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "1843:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "1848:2:1",
                          "nodeType": "YulLiteral",
                          "src": "1848:2:1",
                          "type": "",
                          "value": "51"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nativeSrc": "1784:58:1",
                        "nodeType": "YulIdentifier",
                        "src": "1784:58:1"
                      },
                      "nativeSrc": "1784:67:1",
                      "nodeType": "YulFunctionCall",
                      "src": "1784:67:1"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nativeSrc": "1777:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "1777:3:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "1949:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "1949:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_b3803e2714944f069da02f5ef8a46d97be9c25b543873e310ec64a0de34762df",
                        "nativeSrc": "1860:88:1",
                        "nodeType": "YulIdentifier",
                        "src": "1860:88:1"
                      },
                      "nativeSrc": "1860:93:1",
                      "nodeType": "YulFunctionCall",
                      "src": "1860:93:1"
                    },
                    "nativeSrc": "1860:93:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "1860:93:1"
                  },
                  {
                    "nativeSrc": "1962:19:1",
                    "nodeType": "YulAssignment",
                    "src": "1962:19:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "1973:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "1973:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "1978:2:1",
                          "nodeType": "YulLiteral",
                          "src": "1978:2:1",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "1969:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "1969:3:1"
                      },
                      "nativeSrc": "1969:12:1",
                      "nodeType": "YulFunctionCall",
                      "src": "1969:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nativeSrc": "1962:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "1962:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_b3803e2714944f069da02f5ef8a46d97be9c25b543873e310ec64a0de34762df_to_t_string_memory_ptr_fromStack",
              "nativeSrc": "1621:366:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "1755:3:1",
                  "nodeType": "YulTypedName",
                  "src": "1755:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nativeSrc": "1763:3:1",
                  "nodeType": "YulTypedName",
                  "src": "1763:3:1",
                  "type": ""
                }
              ],
              "src": "1621:366:1"
            },
            {
              "body": {
                "nativeSrc": "2164:248:1",
                "nodeType": "YulBlock",
                "src": "2164:248:1",
                "statements": [
                  {
                    "nativeSrc": "2174:26:1",
                    "nodeType": "YulAssignment",
                    "src": "2174:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "2186:9:1",
                          "nodeType": "YulIdentifier",
                          "src": "2186:9:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "2197:2:1",
                          "nodeType": "YulLiteral",
                          "src": "2197:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "2182:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "2182:3:1"
                      },
                      "nativeSrc": "2182:18:1",
                      "nodeType": "YulFunctionCall",
                      "src": "2182:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "2174:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "2174:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "2221:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "2221:9:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2232:1:1",
                              "nodeType": "YulLiteral",
                              "src": "2232:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "2217:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "2217:3:1"
                          },
                          "nativeSrc": "2217:17:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2217:17:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "2240:4:1",
                              "nodeType": "YulIdentifier",
                              "src": "2240:4:1"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "2246:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "2246:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "2236:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "2236:3:1"
                          },
                          "nativeSrc": "2236:20:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2236:20:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "2210:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "2210:6:1"
                      },
                      "nativeSrc": "2210:47:1",
                      "nodeType": "YulFunctionCall",
                      "src": "2210:47:1"
                    },
                    "nativeSrc": "2210:47:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "2210:47:1"
                  },
                  {
                    "nativeSrc": "2266:139:1",
                    "nodeType": "YulAssignment",
                    "src": "2266:139:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nativeSrc": "2400:4:1",
                          "nodeType": "YulIdentifier",
                          "src": "2400:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_b3803e2714944f069da02f5ef8a46d97be9c25b543873e310ec64a0de34762df_to_t_string_memory_ptr_fromStack",
                        "nativeSrc": "2274:124:1",
                        "nodeType": "YulIdentifier",
                        "src": "2274:124:1"
                      },
                      "nativeSrc": "2274:131:1",
                      "nodeType": "YulFunctionCall",
                      "src": "2274:131:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "2266:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "2266:4:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_b3803e2714944f069da02f5ef8a46d97be9c25b543873e310ec64a0de34762df__to_t_string_memory_ptr__fromStack_reversed",
              "nativeSrc": "1993:419:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "2144:9:1",
                  "nodeType": "YulTypedName",
                  "src": "2144:9:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "2159:4:1",
                  "nodeType": "YulTypedName",
                  "src": "2159:4:1",
                  "type": ""
                }
              ],
              "src": "1993:419:1"
            }
          ]
        },
        "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_b3803e2714944f069da02f5ef8a46d97be9c25b543873e310ec64a0de34762df(memPtr) {\n\n        mstore(add(memPtr, 0), \"TokenDistributor: token address \")\n\n        mstore(add(memPtr, 32), \"is the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_b3803e2714944f069da02f5ef8a46d97be9c25b543873e310ec64a0de34762df_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 51)\n        store_literal_in_memory_b3803e2714944f069da02f5ef8a46d97be9c25b543873e310ec64a0de34762df(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b3803e2714944f069da02f5ef8a46d97be9c25b543873e310ec64a0de34762df__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b3803e2714944f069da02f5ef8a46d97be9c25b543873e310ec64a0de34762df_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
        "id": 1,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nativeSrc": "0:14777:1",
          "nodeType": "YulBlock",
          "src": "0:14777:1",
          "statements": [
            {
              "body": {
                "nativeSrc": "47:35:1",
                "nodeType": "YulBlock",
                "src": "47:35:1",
                "statements": [
                  {
                    "nativeSrc": "57:19:1",
                    "nodeType": "YulAssignment",
                    "src": "57:19:1",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "73:2:1",
                          "nodeType": "YulLiteral",
                          "src": "73:2:1",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nativeSrc": "67:5:1",
                        "nodeType": "YulIdentifier",
                        "src": "67:5:1"
                      },
                      "nativeSrc": "67:9:1",
                      "nodeType": "YulFunctionCall",
                      "src": "67:9:1"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nativeSrc": "57:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "57:6:1"
                      }
                    ]
                  }
                ]
              },
              "name": "allocate_unbounded",
              "nativeSrc": "7:75:1",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nativeSrc": "40:6:1",
                  "nodeType": "YulTypedName",
                  "src": "40:6:1",
                  "type": ""
                }
              ],
              "src": "7:75:1"
            },
            {
              "body": {
                "nativeSrc": "177:28:1",
                "nodeType": "YulBlock",
                "src": "177:28:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "194:1:1",
                          "nodeType": "YulLiteral",
                          "src": "194:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "197:1:1",
                          "nodeType": "YulLiteral",
                          "src": "197:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nativeSrc": "187:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "187:6:1"
                      },
                      "nativeSrc": "187:12:1",
                      "nodeType": "YulFunctionCall",
                      "src": "187:12:1"
                    },
                    "nativeSrc": "187:12:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "187:12:1"
                  }
                ]
              },
              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              "nativeSrc": "88:117:1",
              "nodeType": "YulFunctionDefinition",
              "src": "88:117:1"
            },
            {
              "body": {
                "nativeSrc": "300:28:1",
                "nodeType": "YulBlock",
                "src": "300:28:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "317:1:1",
                          "nodeType": "YulLiteral",
                          "src": "317:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "320:1:1",
                          "nodeType": "YulLiteral",
                          "src": "320:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nativeSrc": "310:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "310:6:1"
                      },
                      "nativeSrc": "310:12:1",
                      "nodeType": "YulFunctionCall",
                      "src": "310:12:1"
                    },
                    "nativeSrc": "310:12:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "310:12:1"
                  }
                ]
              },
              "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              "nativeSrc": "211:117:1",
              "nodeType": "YulFunctionDefinition",
              "src": "211:117:1"
            },
            {
              "body": {
                "nativeSrc": "423:28:1",
                "nodeType": "YulBlock",
                "src": "423:28:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "440:1:1",
                          "nodeType": "YulLiteral",
                          "src": "440:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "443:1:1",
                          "nodeType": "YulLiteral",
                          "src": "443:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nativeSrc": "433:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "433:6:1"
                      },
                      "nativeSrc": "433:12:1",
                      "nodeType": "YulFunctionCall",
                      "src": "433:12:1"
                    },
                    "nativeSrc": "433:12:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "433:12:1"
                  }
                ]
              },
              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
              "nativeSrc": "334:117:1",
              "nodeType": "YulFunctionDefinition",
              "src": "334:117:1"
            },
            {
              "body": {
                "nativeSrc": "546:28:1",
                "nodeType": "YulBlock",
                "src": "546:28:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "563:1:1",
                          "nodeType": "YulLiteral",
                          "src": "563:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "566:1:1",
                          "nodeType": "YulLiteral",
                          "src": "566:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nativeSrc": "556:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "556:6:1"
                      },
                      "nativeSrc": "556:12:1",
                      "nodeType": "YulFunctionCall",
                      "src": "556:12:1"
                    },
                    "nativeSrc": "556:12:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "556:12:1"
                  }
                ]
              },
              "name": "revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490",
              "nativeSrc": "457:117:1",
              "nodeType": "YulFunctionDefinition",
              "src": "457:117:1"
            },
            {
              "body": {
                "nativeSrc": "669:28:1",
                "nodeType": "YulBlock",
                "src": "669:28:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "686:1:1",
                          "nodeType": "YulLiteral",
                          "src": "686:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "689:1:1",
                          "nodeType": "YulLiteral",
                          "src": "689:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nativeSrc": "679:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "679:6:1"
                      },
                      "nativeSrc": "679:12:1",
                      "nodeType": "YulFunctionCall",
                      "src": "679:12:1"
                    },
                    "nativeSrc": "679:12:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "679:12:1"
                  }
                ]
              },
              "name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
              "nativeSrc": "580:117:1",
              "nodeType": "YulFunctionDefinition",
              "src": "580:117:1"
            },
            {
              "body": {
                "nativeSrc": "810:478:1",
                "nodeType": "YulBlock",
                "src": "810:478:1",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "859:83:1",
                      "nodeType": "YulBlock",
                      "src": "859:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                              "nativeSrc": "861:77:1",
                              "nodeType": "YulIdentifier",
                              "src": "861:77:1"
                            },
                            "nativeSrc": "861:79:1",
                            "nodeType": "YulFunctionCall",
                            "src": "861:79:1"
                          },
                          "nativeSrc": "861:79:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "861:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nativeSrc": "838:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "838:6:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "846:4:1",
                                  "nodeType": "YulLiteral",
                                  "src": "846:4:1",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "834:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "834:3:1"
                              },
                              "nativeSrc": "834:17:1",
                              "nodeType": "YulFunctionCall",
                              "src": "834:17:1"
                            },
                            {
                              "name": "end",
                              "nativeSrc": "853:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "853:3:1"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nativeSrc": "830:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "830:3:1"
                          },
                          "nativeSrc": "830:27:1",
                          "nodeType": "YulFunctionCall",
                          "src": "830:27:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nativeSrc": "823:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "823:6:1"
                      },
                      "nativeSrc": "823:35:1",
                      "nodeType": "YulFunctionCall",
                      "src": "823:35:1"
                    },
                    "nativeSrc": "820:122:1",
                    "nodeType": "YulIf",
                    "src": "820:122:1"
                  },
                  {
                    "nativeSrc": "951:30:1",
                    "nodeType": "YulAssignment",
                    "src": "951:30:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nativeSrc": "974:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "974:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nativeSrc": "961:12:1",
                        "nodeType": "YulIdentifier",
                        "src": "961:12:1"
                      },
                      "nativeSrc": "961:20:1",
                      "nodeType": "YulFunctionCall",
                      "src": "961:20:1"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nativeSrc": "951:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "951:6:1"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nativeSrc": "1024:83:1",
                      "nodeType": "YulBlock",
                      "src": "1024:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490",
                              "nativeSrc": "1026:77:1",
                              "nodeType": "YulIdentifier",
                              "src": "1026:77:1"
                            },
                            "nativeSrc": "1026:79:1",
                            "nodeType": "YulFunctionCall",
                            "src": "1026:79:1"
                          },
                          "nativeSrc": "1026:79:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "1026:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "length",
                          "nativeSrc": "996:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "996:6:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "1004:18:1",
                          "nodeType": "YulLiteral",
                          "src": "1004:18:1",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nativeSrc": "993:2:1",
                        "nodeType": "YulIdentifier",
                        "src": "993:2:1"
                      },
                      "nativeSrc": "993:30:1",
                      "nodeType": "YulFunctionCall",
                      "src": "993:30:1"
                    },
                    "nativeSrc": "990:117:1",
                    "nodeType": "YulIf",
                    "src": "990:117:1"
                  },
                  {
                    "nativeSrc": "1116:29:1",
                    "nodeType": "YulAssignment",
                    "src": "1116:29:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nativeSrc": "1132:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "1132:6:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "1140:4:1",
                          "nodeType": "YulLiteral",
                          "src": "1140:4:1",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "1128:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "1128:3:1"
                      },
                      "nativeSrc": "1128:17:1",
                      "nodeType": "YulFunctionCall",
                      "src": "1128:17:1"
                    },
                    "variableNames": [
                      {
                        "name": "arrayPos",
                        "nativeSrc": "1116:8:1",
                        "nodeType": "YulIdentifier",
                        "src": "1116:8:1"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nativeSrc": "1199:83:1",
                      "nodeType": "YulBlock",
                      "src": "1199:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
                              "nativeSrc": "1201:77:1",
                              "nodeType": "YulIdentifier",
                              "src": "1201:77:1"
                            },
                            "nativeSrc": "1201:79:1",
                            "nodeType": "YulFunctionCall",
                            "src": "1201:79:1"
                          },
                          "nativeSrc": "1201:79:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "1201:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "arrayPos",
                              "nativeSrc": "1164:8:1",
                              "nodeType": "YulIdentifier",
                              "src": "1164:8:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nativeSrc": "1178:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1178:6:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1186:4:1",
                                  "nodeType": "YulLiteral",
                                  "src": "1186:4:1",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nativeSrc": "1174:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "1174:3:1"
                              },
                              "nativeSrc": "1174:17:1",
                              "nodeType": "YulFunctionCall",
                              "src": "1174:17:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "1160:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "1160:3:1"
                          },
                          "nativeSrc": "1160:32:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1160:32:1"
                        },
                        {
                          "name": "end",
                          "nativeSrc": "1194:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "1194:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nativeSrc": "1157:2:1",
                        "nodeType": "YulIdentifier",
                        "src": "1157:2:1"
                      },
                      "nativeSrc": "1157:41:1",
                      "nodeType": "YulFunctionCall",
                      "src": "1157:41:1"
                    },
                    "nativeSrc": "1154:128:1",
                    "nodeType": "YulIf",
                    "src": "1154:128:1"
                  }
                ]
              },
              "name": "abi_decode_t_array$_t_address_$dyn_calldata_ptr",
              "nativeSrc": "720:568:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nativeSrc": "777:6:1",
                  "nodeType": "YulTypedName",
                  "src": "777:6:1",
                  "type": ""
                },
                {
                  "name": "end",
                  "nativeSrc": "785:3:1",
                  "nodeType": "YulTypedName",
                  "src": "785:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "arrayPos",
                  "nativeSrc": "793:8:1",
                  "nodeType": "YulTypedName",
                  "src": "793:8:1",
                  "type": ""
                },
                {
                  "name": "length",
                  "nativeSrc": "803:6:1",
                  "nodeType": "YulTypedName",
                  "src": "803:6:1",
                  "type": ""
                }
              ],
              "src": "720:568:1"
            },
            {
              "body": {
                "nativeSrc": "1401:478:1",
                "nodeType": "YulBlock",
                "src": "1401:478:1",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "1450:83:1",
                      "nodeType": "YulBlock",
                      "src": "1450:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                              "nativeSrc": "1452:77:1",
                              "nodeType": "YulIdentifier",
                              "src": "1452:77:1"
                            },
                            "nativeSrc": "1452:79:1",
                            "nodeType": "YulFunctionCall",
                            "src": "1452:79:1"
                          },
                          "nativeSrc": "1452:79:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "1452:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nativeSrc": "1429:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1429:6:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1437:4:1",
                                  "nodeType": "YulLiteral",
                                  "src": "1437:4:1",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "1425:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "1425:3:1"
                              },
                              "nativeSrc": "1425:17:1",
                              "nodeType": "YulFunctionCall",
                              "src": "1425:17:1"
                            },
                            {
                              "name": "end",
                              "nativeSrc": "1444:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "1444:3:1"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nativeSrc": "1421:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "1421:3:1"
                          },
                          "nativeSrc": "1421:27:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1421:27:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nativeSrc": "1414:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "1414:6:1"
                      },
                      "nativeSrc": "1414:35:1",
                      "nodeType": "YulFunctionCall",
                      "src": "1414:35:1"
                    },
                    "nativeSrc": "1411:122:1",
                    "nodeType": "YulIf",
                    "src": "1411:122:1"
                  },
                  {
                    "nativeSrc": "1542:30:1",
                    "nodeType": "YulAssignment",
                    "src": "1542:30:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nativeSrc": "1565:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "1565:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nativeSrc": "1552:12:1",
                        "nodeType": "YulIdentifier",
                        "src": "1552:12:1"
                      },
                      "nativeSrc": "1552:20:1",
                      "nodeType": "YulFunctionCall",
                      "src": "1552:20:1"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nativeSrc": "1542:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "1542:6:1"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nativeSrc": "1615:83:1",
                      "nodeType": "YulBlock",
                      "src": "1615:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490",
                              "nativeSrc": "1617:77:1",
                              "nodeType": "YulIdentifier",
                              "src": "1617:77:1"
                            },
                            "nativeSrc": "1617:79:1",
                            "nodeType": "YulFunctionCall",
                            "src": "1617:79:1"
                          },
                          "nativeSrc": "1617:79:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "1617:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "length",
                          "nativeSrc": "1587:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "1587:6:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "1595:18:1",
                          "nodeType": "YulLiteral",
                          "src": "1595:18:1",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nativeSrc": "1584:2:1",
                        "nodeType": "YulIdentifier",
                        "src": "1584:2:1"
                      },
                      "nativeSrc": "1584:30:1",
                      "nodeType": "YulFunctionCall",
                      "src": "1584:30:1"
                    },
                    "nativeSrc": "1581:117:1",
                    "nodeType": "YulIf",
                    "src": "1581:117:1"
                  },
                  {
                    "nativeSrc": "1707:29:1",
                    "nodeType": "YulAssignment",
                    "src": "1707:29:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nativeSrc": "1723:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "1723:6:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "1731:4:1",
                          "nodeType": "YulLiteral",
                          "src": "1731:4:1",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "1719:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "1719:3:1"
                      },
                      "nativeSrc": "1719:17:1",
                      "nodeType": "YulFunctionCall",
                      "src": "1719:17:1"
                    },
                    "variableNames": [
                      {
                        "name": "arrayPos",
                        "nativeSrc": "1707:8:1",
                        "nodeType": "YulIdentifier",
                        "src": "1707:8:1"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nativeSrc": "1790:83:1",
                      "nodeType": "YulBlock",
                      "src": "1790:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
                              "nativeSrc": "1792:77:1",
                              "nodeType": "YulIdentifier",
                              "src": "1792:77:1"
                            },
                            "nativeSrc": "1792:79:1",
                            "nodeType": "YulFunctionCall",
                            "src": "1792:79:1"
                          },
                          "nativeSrc": "1792:79:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "1792:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "arrayPos",
                              "nativeSrc": "1755:8:1",
                              "nodeType": "YulIdentifier",
                              "src": "1755:8:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nativeSrc": "1769:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1769:6:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1777:4:1",
                                  "nodeType": "YulLiteral",
                                  "src": "1777:4:1",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nativeSrc": "1765:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "1765:3:1"
                              },
                              "nativeSrc": "1765:17:1",
                              "nodeType": "YulFunctionCall",
                              "src": "1765:17:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "1751:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "1751:3:1"
                          },
                          "nativeSrc": "1751:32:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1751:32:1"
                        },
                        {
                          "name": "end",
                          "nativeSrc": "1785:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "1785:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nativeSrc": "1748:2:1",
                        "nodeType": "YulIdentifier",
                        "src": "1748:2:1"
                      },
                      "nativeSrc": "1748:41:1",
                      "nodeType": "YulFunctionCall",
                      "src": "1748:41:1"
                    },
                    "nativeSrc": "1745:128:1",
                    "nodeType": "YulIf",
                    "src": "1745:128:1"
                  }
                ]
              },
              "name": "abi_decode_t_array$_t_uint256_$dyn_calldata_ptr",
              "nativeSrc": "1311:568:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nativeSrc": "1368:6:1",
                  "nodeType": "YulTypedName",
                  "src": "1368:6:1",
                  "type": ""
                },
                {
                  "name": "end",
                  "nativeSrc": "1376:3:1",
                  "nodeType": "YulTypedName",
                  "src": "1376:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "arrayPos",
                  "nativeSrc": "1384:8:1",
                  "nodeType": "YulTypedName",
                  "src": "1384:8:1",
                  "type": ""
                },
                {
                  "name": "length",
                  "nativeSrc": "1394:6:1",
                  "nodeType": "YulTypedName",
                  "src": "1394:6:1",
                  "type": ""
                }
              ],
              "src": "1311:568:1"
            },
            {
              "body": {
                "nativeSrc": "2038:781:1",
                "nodeType": "YulBlock",
                "src": "2038:781:1",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "2084:83:1",
                      "nodeType": "YulBlock",
                      "src": "2084:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nativeSrc": "2086:77:1",
                              "nodeType": "YulIdentifier",
                              "src": "2086:77:1"
                            },
                            "nativeSrc": "2086:79:1",
                            "nodeType": "YulFunctionCall",
                            "src": "2086:79:1"
                          },
                          "nativeSrc": "2086:79:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "2086:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nativeSrc": "2059:7:1",
                              "nodeType": "YulIdentifier",
                              "src": "2059:7:1"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "2068:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "2068:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "2055:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "2055:3:1"
                          },
                          "nativeSrc": "2055:23:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2055:23:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "2080:2:1",
                          "nodeType": "YulLiteral",
                          "src": "2080:2:1",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nativeSrc": "2051:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "2051:3:1"
                      },
                      "nativeSrc": "2051:32:1",
                      "nodeType": "YulFunctionCall",
                      "src": "2051:32:1"
                    },
                    "nativeSrc": "2048:119:1",
                    "nodeType": "YulIf",
                    "src": "2048:119:1"
                  },
                  {
                    "nativeSrc": "2177:312:1",
                    "nodeType": "YulBlock",
                    "src": "2177:312:1",
                    "statements": [
                      {
                        "nativeSrc": "2192:45:1",
                        "nodeType": "YulVariableDeclaration",
                        "src": "2192:45:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "2223:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2223:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "2234:1:1",
                                  "nodeType": "YulLiteral",
                                  "src": "2234:1:1",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "2219:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "2219:3:1"
                              },
                              "nativeSrc": "2219:17:1",
                              "nodeType": "YulFunctionCall",
                              "src": "2219:17:1"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nativeSrc": "2206:12:1",
                            "nodeType": "YulIdentifier",
                            "src": "2206:12:1"
                          },
                          "nativeSrc": "2206:31:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2206:31:1"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nativeSrc": "2196:6:1",
                            "nodeType": "YulTypedName",
                            "src": "2196:6:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "2284:83:1",
                          "nodeType": "YulBlock",
                          "src": "2284:83:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                  "nativeSrc": "2286:77:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2286:77:1"
                                },
                                "nativeSrc": "2286:79:1",
                                "nodeType": "YulFunctionCall",
                                "src": "2286:79:1"
                              },
                              "nativeSrc": "2286:79:1",
                              "nodeType": "YulExpressionStatement",
                              "src": "2286:79:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nativeSrc": "2256:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "2256:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2264:18:1",
                              "nodeType": "YulLiteral",
                              "src": "2264:18:1",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "2253:2:1",
                            "nodeType": "YulIdentifier",
                            "src": "2253:2:1"
                          },
                          "nativeSrc": "2253:30:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2253:30:1"
                        },
                        "nativeSrc": "2250:117:1",
                        "nodeType": "YulIf",
                        "src": "2250:117:1"
                      },
                      {
                        "nativeSrc": "2381:98:1",
                        "nodeType": "YulAssignment",
                        "src": "2381:98:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "2451:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2451:9:1"
                                },
                                {
                                  "name": "offset",
                                  "nativeSrc": "2462:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2462:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "2447:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "2447:3:1"
                              },
                              "nativeSrc": "2447:22:1",
                              "nodeType": "YulFunctionCall",
                              "src": "2447:22:1"
                            },
                            {
                              "name": "dataEnd",
                              "nativeSrc": "2471:7:1",
                              "nodeType": "YulIdentifier",
                              "src": "2471:7:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_array$_t_address_$dyn_calldata_ptr",
                            "nativeSrc": "2399:47:1",
                            "nodeType": "YulIdentifier",
                            "src": "2399:47:1"
                          },
                          "nativeSrc": "2399:80:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2399:80:1"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nativeSrc": "2381:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "2381:6:1"
                          },
                          {
                            "name": "value1",
                            "nativeSrc": "2389:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "2389:6:1"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nativeSrc": "2499:313:1",
                    "nodeType": "YulBlock",
                    "src": "2499:313:1",
                    "statements": [
                      {
                        "nativeSrc": "2514:46:1",
                        "nodeType": "YulVariableDeclaration",
                        "src": "2514:46:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "2545:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2545:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "2556:2:1",
                                  "nodeType": "YulLiteral",
                                  "src": "2556:2:1",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "2541:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "2541:3:1"
                              },
                              "nativeSrc": "2541:18:1",
                              "nodeType": "YulFunctionCall",
                              "src": "2541:18:1"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nativeSrc": "2528:12:1",
                            "nodeType": "YulIdentifier",
                            "src": "2528:12:1"
                          },
                          "nativeSrc": "2528:32:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2528:32:1"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nativeSrc": "2518:6:1",
                            "nodeType": "YulTypedName",
                            "src": "2518:6:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "2607:83:1",
                          "nodeType": "YulBlock",
                          "src": "2607:83:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                  "nativeSrc": "2609:77:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2609:77:1"
                                },
                                "nativeSrc": "2609:79:1",
                                "nodeType": "YulFunctionCall",
                                "src": "2609:79:1"
                              },
                              "nativeSrc": "2609:79:1",
                              "nodeType": "YulExpressionStatement",
                              "src": "2609:79:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nativeSrc": "2579:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "2579:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2587:18:1",
                              "nodeType": "YulLiteral",
                              "src": "2587:18:1",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "2576:2:1",
                            "nodeType": "YulIdentifier",
                            "src": "2576:2:1"
                          },
                          "nativeSrc": "2576:30:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2576:30:1"
                        },
                        "nativeSrc": "2573:117:1",
                        "nodeType": "YulIf",
                        "src": "2573:117:1"
                      },
                      {
                        "nativeSrc": "2704:98:1",
                        "nodeType": "YulAssignment",
                        "src": "2704:98:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "2774:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2774:9:1"
                                },
                                {
                                  "name": "offset",
                                  "nativeSrc": "2785:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2785:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "2770:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "2770:3:1"
                              },
                              "nativeSrc": "2770:22:1",
                              "nodeType": "YulFunctionCall",
                              "src": "2770:22:1"
                            },
                            {
                              "name": "dataEnd",
                              "nativeSrc": "2794:7:1",
                              "nodeType": "YulIdentifier",
                              "src": "2794:7:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_array$_t_uint256_$dyn_calldata_ptr",
                            "nativeSrc": "2722:47:1",
                            "nodeType": "YulIdentifier",
                            "src": "2722:47:1"
                          },
                          "nativeSrc": "2722:80:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2722:80:1"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nativeSrc": "2704:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "2704:6:1"
                          },
                          {
                            "name": "value3",
                            "nativeSrc": "2712:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "2712:6:1"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_array$_t_address_$dyn_calldata_ptrt_array$_t_uint256_$dyn_calldata_ptr",
              "nativeSrc": "1885:934:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "1984:9:1",
                  "nodeType": "YulTypedName",
                  "src": "1984:9:1",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nativeSrc": "1995:7:1",
                  "nodeType": "YulTypedName",
                  "src": "1995:7:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nativeSrc": "2007:6:1",
                  "nodeType": "YulTypedName",
                  "src": "2007:6:1",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nativeSrc": "2015:6:1",
                  "nodeType": "YulTypedName",
                  "src": "2015:6:1",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nativeSrc": "2023:6:1",
                  "nodeType": "YulTypedName",
                  "src": "2023:6:1",
                  "type": ""
                },
                {
                  "name": "value3",
                  "nativeSrc": "2031:6:1",
                  "nodeType": "YulTypedName",
                  "src": "2031:6:1",
                  "type": ""
                }
              ],
              "src": "1885:934:1"
            },
            {
              "body": {
                "nativeSrc": "2870:81:1",
                "nodeType": "YulBlock",
                "src": "2870:81:1",
                "statements": [
                  {
                    "nativeSrc": "2880:65:1",
                    "nodeType": "YulAssignment",
                    "src": "2880:65:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "2895:5:1",
                          "nodeType": "YulIdentifier",
                          "src": "2895:5:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "2902:42:1",
                          "nodeType": "YulLiteral",
                          "src": "2902:42:1",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nativeSrc": "2891:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "2891:3:1"
                      },
                      "nativeSrc": "2891:54:1",
                      "nodeType": "YulFunctionCall",
                      "src": "2891:54:1"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nativeSrc": "2880:7:1",
                        "nodeType": "YulIdentifier",
                        "src": "2880:7:1"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint160",
              "nativeSrc": "2825:126:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "2852:5:1",
                  "nodeType": "YulTypedName",
                  "src": "2852:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nativeSrc": "2862:7:1",
                  "nodeType": "YulTypedName",
                  "src": "2862:7:1",
                  "type": ""
                }
              ],
              "src": "2825:126:1"
            },
            {
              "body": {
                "nativeSrc": "3002:51:1",
                "nodeType": "YulBlock",
                "src": "3002:51:1",
                "statements": [
                  {
                    "nativeSrc": "3012:35:1",
                    "nodeType": "YulAssignment",
                    "src": "3012:35:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "3041:5:1",
                          "nodeType": "YulIdentifier",
                          "src": "3041:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nativeSrc": "3023:17:1",
                        "nodeType": "YulIdentifier",
                        "src": "3023:17:1"
                      },
                      "nativeSrc": "3023:24:1",
                      "nodeType": "YulFunctionCall",
                      "src": "3023:24:1"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nativeSrc": "3012:7:1",
                        "nodeType": "YulIdentifier",
                        "src": "3012:7:1"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address",
              "nativeSrc": "2957:96:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "2984:5:1",
                  "nodeType": "YulTypedName",
                  "src": "2984:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nativeSrc": "2994:7:1",
                  "nodeType": "YulTypedName",
                  "src": "2994:7:1",
                  "type": ""
                }
              ],
              "src": "2957:96:1"
            },
            {
              "body": {
                "nativeSrc": "3102:79:1",
                "nodeType": "YulBlock",
                "src": "3102:79:1",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "3159:16:1",
                      "nodeType": "YulBlock",
                      "src": "3159:16:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "3168:1:1",
                                "nodeType": "YulLiteral",
                                "src": "3168:1:1",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "3171:1:1",
                                "nodeType": "YulLiteral",
                                "src": "3171:1:1",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nativeSrc": "3161:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "3161:6:1"
                            },
                            "nativeSrc": "3161:12:1",
                            "nodeType": "YulFunctionCall",
                            "src": "3161:12:1"
                          },
                          "nativeSrc": "3161:12:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "3161:12:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "3125:5:1",
                              "nodeType": "YulIdentifier",
                              "src": "3125:5:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "3150:5:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3150:5:1"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nativeSrc": "3132:17:1",
                                "nodeType": "YulIdentifier",
                                "src": "3132:17:1"
                              },
                              "nativeSrc": "3132:24:1",
                              "nodeType": "YulFunctionCall",
                              "src": "3132:24:1"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "3122:2:1",
                            "nodeType": "YulIdentifier",
                            "src": "3122:2:1"
                          },
                          "nativeSrc": "3122:35:1",
                          "nodeType": "YulFunctionCall",
                          "src": "3122:35:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nativeSrc": "3115:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "3115:6:1"
                      },
                      "nativeSrc": "3115:43:1",
                      "nodeType": "YulFunctionCall",
                      "src": "3115:43:1"
                    },
                    "nativeSrc": "3112:63:1",
                    "nodeType": "YulIf",
                    "src": "3112:63:1"
                  }
                ]
              },
              "name": "validator_revert_t_address",
              "nativeSrc": "3059:122:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "3095:5:1",
                  "nodeType": "YulTypedName",
                  "src": "3095:5:1",
                  "type": ""
                }
              ],
              "src": "3059:122:1"
            },
            {
              "body": {
                "nativeSrc": "3239:87:1",
                "nodeType": "YulBlock",
                "src": "3239:87:1",
                "statements": [
                  {
                    "nativeSrc": "3249:29:1",
                    "nodeType": "YulAssignment",
                    "src": "3249:29:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nativeSrc": "3271:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "3271:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nativeSrc": "3258:12:1",
                        "nodeType": "YulIdentifier",
                        "src": "3258:12:1"
                      },
                      "nativeSrc": "3258:20:1",
                      "nodeType": "YulFunctionCall",
                      "src": "3258:20:1"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nativeSrc": "3249:5:1",
                        "nodeType": "YulIdentifier",
                        "src": "3249:5:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "3314:5:1",
                          "nodeType": "YulIdentifier",
                          "src": "3314:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_address",
                        "nativeSrc": "3287:26:1",
                        "nodeType": "YulIdentifier",
                        "src": "3287:26:1"
                      },
                      "nativeSrc": "3287:33:1",
                      "nodeType": "YulFunctionCall",
                      "src": "3287:33:1"
                    },
                    "nativeSrc": "3287:33:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "3287:33:1"
                  }
                ]
              },
              "name": "abi_decode_t_address",
              "nativeSrc": "3187:139:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nativeSrc": "3217:6:1",
                  "nodeType": "YulTypedName",
                  "src": "3217:6:1",
                  "type": ""
                },
                {
                  "name": "end",
                  "nativeSrc": "3225:3:1",
                  "nodeType": "YulTypedName",
                  "src": "3225:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nativeSrc": "3233:5:1",
                  "nodeType": "YulTypedName",
                  "src": "3233:5:1",
                  "type": ""
                }
              ],
              "src": "3187:139:1"
            },
            {
              "body": {
                "nativeSrc": "3398:263:1",
                "nodeType": "YulBlock",
                "src": "3398:263:1",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "3444:83:1",
                      "nodeType": "YulBlock",
                      "src": "3444:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nativeSrc": "3446:77:1",
                              "nodeType": "YulIdentifier",
                              "src": "3446:77:1"
                            },
                            "nativeSrc": "3446:79:1",
                            "nodeType": "YulFunctionCall",
                            "src": "3446:79:1"
                          },
                          "nativeSrc": "3446:79:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "3446:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nativeSrc": "3419:7:1",
                              "nodeType": "YulIdentifier",
                              "src": "3419:7:1"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "3428:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "3428:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "3415:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "3415:3:1"
                          },
                          "nativeSrc": "3415:23:1",
                          "nodeType": "YulFunctionCall",
                          "src": "3415:23:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "3440:2:1",
                          "nodeType": "YulLiteral",
                          "src": "3440:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nativeSrc": "3411:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "3411:3:1"
                      },
                      "nativeSrc": "3411:32:1",
                      "nodeType": "YulFunctionCall",
                      "src": "3411:32:1"
                    },
                    "nativeSrc": "3408:119:1",
                    "nodeType": "YulIf",
                    "src": "3408:119:1"
                  },
                  {
                    "nativeSrc": "3537:117:1",
                    "nodeType": "YulBlock",
                    "src": "3537:117:1",
                    "statements": [
                      {
                        "nativeSrc": "3552:15:1",
                        "nodeType": "YulVariableDeclaration",
                        "src": "3552:15:1",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "3566:1:1",
                          "nodeType": "YulLiteral",
                          "src": "3566:1:1",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nativeSrc": "3556:6:1",
                            "nodeType": "YulTypedName",
                            "src": "3556:6:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "3581:63:1",
                        "nodeType": "YulAssignment",
                        "src": "3581:63:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "3616:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3616:9:1"
                                },
                                {
                                  "name": "offset",
                                  "nativeSrc": "3627:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3627:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "3612:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "3612:3:1"
                              },
                              "nativeSrc": "3612:22:1",
                              "nodeType": "YulFunctionCall",
                              "src": "3612:22:1"
                            },
                            {
                              "name": "dataEnd",
                              "nativeSrc": "3636:7:1",
                              "nodeType": "YulIdentifier",
                              "src": "3636:7:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nativeSrc": "3591:20:1",
                            "nodeType": "YulIdentifier",
                            "src": "3591:20:1"
                          },
                          "nativeSrc": "3591:53:1",
                          "nodeType": "YulFunctionCall",
                          "src": "3591:53:1"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nativeSrc": "3581:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "3581:6:1"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_address",
              "nativeSrc": "3332:329:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "3368:9:1",
                  "nodeType": "YulTypedName",
                  "src": "3368:9:1",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nativeSrc": "3379:7:1",
                  "nodeType": "YulTypedName",
                  "src": "3379:7:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nativeSrc": "3391:6:1",
                  "nodeType": "YulTypedName",
                  "src": "3391:6:1",
                  "type": ""
                }
              ],
              "src": "3332:329:1"
            },
            {
              "body": {
                "nativeSrc": "3709:48:1",
                "nodeType": "YulBlock",
                "src": "3709:48:1",
                "statements": [
                  {
                    "nativeSrc": "3719:32:1",
                    "nodeType": "YulAssignment",
                    "src": "3719:32:1",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "3744:5:1",
                              "nodeType": "YulIdentifier",
                              "src": "3744:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "3737:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "3737:6:1"
                          },
                          "nativeSrc": "3737:13:1",
                          "nodeType": "YulFunctionCall",
                          "src": "3737:13:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nativeSrc": "3730:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "3730:6:1"
                      },
                      "nativeSrc": "3730:21:1",
                      "nodeType": "YulFunctionCall",
                      "src": "3730:21:1"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nativeSrc": "3719:7:1",
                        "nodeType": "YulIdentifier",
                        "src": "3719:7:1"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_bool",
              "nativeSrc": "3667:90:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "3691:5:1",
                  "nodeType": "YulTypedName",
                  "src": "3691:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nativeSrc": "3701:7:1",
                  "nodeType": "YulTypedName",
                  "src": "3701:7:1",
                  "type": ""
                }
              ],
              "src": "3667:90:1"
            },
            {
              "body": {
                "nativeSrc": "3822:50:1",
                "nodeType": "YulBlock",
                "src": "3822:50:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "3839:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "3839:3:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "3859:5:1",
                              "nodeType": "YulIdentifier",
                              "src": "3859:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_bool",
                            "nativeSrc": "3844:14:1",
                            "nodeType": "YulIdentifier",
                            "src": "3844:14:1"
                          },
                          "nativeSrc": "3844:21:1",
                          "nodeType": "YulFunctionCall",
                          "src": "3844:21:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "3832:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "3832:6:1"
                      },
                      "nativeSrc": "3832:34:1",
                      "nodeType": "YulFunctionCall",
                      "src": "3832:34:1"
                    },
                    "nativeSrc": "3832:34:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "3832:34:1"
                  }
                ]
              },
              "name": "abi_encode_t_bool_to_t_bool_fromStack",
              "nativeSrc": "3763:109:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "3810:5:1",
                  "nodeType": "YulTypedName",
                  "src": "3810:5:1",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nativeSrc": "3817:3:1",
                  "nodeType": "YulTypedName",
                  "src": "3817:3:1",
                  "type": ""
                }
              ],
              "src": "3763:109:1"
            },
            {
              "body": {
                "nativeSrc": "3970:118:1",
                "nodeType": "YulBlock",
                "src": "3970:118:1",
                "statements": [
                  {
                    "nativeSrc": "3980:26:1",
                    "nodeType": "YulAssignment",
                    "src": "3980:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "3992:9:1",
                          "nodeType": "YulIdentifier",
                          "src": "3992:9:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "4003:2:1",
                          "nodeType": "YulLiteral",
                          "src": "4003:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "3988:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "3988:3:1"
                      },
                      "nativeSrc": "3988:18:1",
                      "nodeType": "YulFunctionCall",
                      "src": "3988:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "3980:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "3980:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nativeSrc": "4054:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "4054:6:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "4067:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "4067:9:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4078:1:1",
                              "nodeType": "YulLiteral",
                              "src": "4078:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "4063:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "4063:3:1"
                          },
                          "nativeSrc": "4063:17:1",
                          "nodeType": "YulFunctionCall",
                          "src": "4063:17:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_bool_to_t_bool_fromStack",
                        "nativeSrc": "4016:37:1",
                        "nodeType": "YulIdentifier",
                        "src": "4016:37:1"
                      },
                      "nativeSrc": "4016:65:1",
                      "nodeType": "YulFunctionCall",
                      "src": "4016:65:1"
                    },
                    "nativeSrc": "4016:65:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "4016:65:1"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
              "nativeSrc": "3878:210:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "3942:9:1",
                  "nodeType": "YulTypedName",
                  "src": "3942:9:1",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nativeSrc": "3954:6:1",
                  "nodeType": "YulTypedName",
                  "src": "3954:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "3965:4:1",
                  "nodeType": "YulTypedName",
                  "src": "3965:4:1",
                  "type": ""
                }
              ],
              "src": "3878:210:1"
            },
            {
              "body": {
                "nativeSrc": "4195:458:1",
                "nodeType": "YulBlock",
                "src": "4195:458:1",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "4241:83:1",
                      "nodeType": "YulBlock",
                      "src": "4241:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nativeSrc": "4243:77:1",
                              "nodeType": "YulIdentifier",
                              "src": "4243:77:1"
                            },
                            "nativeSrc": "4243:79:1",
                            "nodeType": "YulFunctionCall",
                            "src": "4243:79:1"
                          },
                          "nativeSrc": "4243:79:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "4243:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nativeSrc": "4216:7:1",
                              "nodeType": "YulIdentifier",
                              "src": "4216:7:1"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "4225:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "4225:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "4212:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "4212:3:1"
                          },
                          "nativeSrc": "4212:23:1",
                          "nodeType": "YulFunctionCall",
                          "src": "4212:23:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "4237:2:1",
                          "nodeType": "YulLiteral",
                          "src": "4237:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nativeSrc": "4208:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "4208:3:1"
                      },
                      "nativeSrc": "4208:32:1",
                      "nodeType": "YulFunctionCall",
                      "src": "4208:32:1"
                    },
                    "nativeSrc": "4205:119:1",
                    "nodeType": "YulIf",
                    "src": "4205:119:1"
                  },
                  {
                    "nativeSrc": "4334:312:1",
                    "nodeType": "YulBlock",
                    "src": "4334:312:1",
                    "statements": [
                      {
                        "nativeSrc": "4349:45:1",
                        "nodeType": "YulVariableDeclaration",
                        "src": "4349:45:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "4380:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "4380:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4391:1:1",
                                  "nodeType": "YulLiteral",
                                  "src": "4391:1:1",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "4376:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "4376:3:1"
                              },
                              "nativeSrc": "4376:17:1",
                              "nodeType": "YulFunctionCall",
                              "src": "4376:17:1"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nativeSrc": "4363:12:1",
                            "nodeType": "YulIdentifier",
                            "src": "4363:12:1"
                          },
                          "nativeSrc": "4363:31:1",
                          "nodeType": "YulFunctionCall",
                          "src": "4363:31:1"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nativeSrc": "4353:6:1",
                            "nodeType": "YulTypedName",
                            "src": "4353:6:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "4441:83:1",
                          "nodeType": "YulBlock",
                          "src": "4441:83:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                  "nativeSrc": "4443:77:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "4443:77:1"
                                },
                                "nativeSrc": "4443:79:1",
                                "nodeType": "YulFunctionCall",
                                "src": "4443:79:1"
                              },
                              "nativeSrc": "4443:79:1",
                              "nodeType": "YulExpressionStatement",
                              "src": "4443:79:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nativeSrc": "4413:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "4413:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4421:18:1",
                              "nodeType": "YulLiteral",
                              "src": "4421:18:1",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "4410:2:1",
                            "nodeType": "YulIdentifier",
                            "src": "4410:2:1"
                          },
                          "nativeSrc": "4410:30:1",
                          "nodeType": "YulFunctionCall",
                          "src": "4410:30:1"
                        },
                        "nativeSrc": "4407:117:1",
                        "nodeType": "YulIf",
                        "src": "4407:117:1"
                      },
                      {
                        "nativeSrc": "4538:98:1",
                        "nodeType": "YulAssignment",
                        "src": "4538:98:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "4608:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "4608:9:1"
                                },
                                {
                                  "name": "offset",
                                  "nativeSrc": "4619:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "4619:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "4604:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "4604:3:1"
                              },
                              "nativeSrc": "4604:22:1",
                              "nodeType": "YulFunctionCall",
                              "src": "4604:22:1"
                            },
                            {
                              "name": "dataEnd",
                              "nativeSrc": "4628:7:1",
                              "nodeType": "YulIdentifier",
                              "src": "4628:7:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_array$_t_address_$dyn_calldata_ptr",
                            "nativeSrc": "4556:47:1",
                            "nodeType": "YulIdentifier",
                            "src": "4556:47:1"
                          },
                          "nativeSrc": "4556:80:1",
                          "nodeType": "YulFunctionCall",
                          "src": "4556:80:1"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nativeSrc": "4538:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "4538:6:1"
                          },
                          {
                            "name": "value1",
                            "nativeSrc": "4546:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "4546:6:1"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_array$_t_address_$dyn_calldata_ptr",
              "nativeSrc": "4094:559:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "4157:9:1",
                  "nodeType": "YulTypedName",
                  "src": "4157:9:1",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nativeSrc": "4168:7:1",
                  "nodeType": "YulTypedName",
                  "src": "4168:7:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nativeSrc": "4180:6:1",
                  "nodeType": "YulTypedName",
                  "src": "4180:6:1",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nativeSrc": "4188:6:1",
                  "nodeType": "YulTypedName",
                  "src": "4188:6:1",
                  "type": ""
                }
              ],
              "src": "4094:559:1"
            },
            {
              "body": {
                "nativeSrc": "4704:32:1",
                "nodeType": "YulBlock",
                "src": "4704:32:1",
                "statements": [
                  {
                    "nativeSrc": "4714:16:1",
                    "nodeType": "YulAssignment",
                    "src": "4714:16:1",
                    "value": {
                      "name": "value",
                      "nativeSrc": "4725:5:1",
                      "nodeType": "YulIdentifier",
                      "src": "4725:5:1"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nativeSrc": "4714:7:1",
                        "nodeType": "YulIdentifier",
                        "src": "4714:7:1"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nativeSrc": "4659:77:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "4686:5:1",
                  "nodeType": "YulTypedName",
                  "src": "4686:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nativeSrc": "4696:7:1",
                  "nodeType": "YulTypedName",
                  "src": "4696:7:1",
                  "type": ""
                }
              ],
              "src": "4659:77:1"
            },
            {
              "body": {
                "nativeSrc": "4807:53:1",
                "nodeType": "YulBlock",
                "src": "4807:53:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "4824:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "4824:3:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "4847:5:1",
                              "nodeType": "YulIdentifier",
                              "src": "4847:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nativeSrc": "4829:17:1",
                            "nodeType": "YulIdentifier",
                            "src": "4829:17:1"
                          },
                          "nativeSrc": "4829:24:1",
                          "nodeType": "YulFunctionCall",
                          "src": "4829:24:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "4817:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "4817:6:1"
                      },
                      "nativeSrc": "4817:37:1",
                      "nodeType": "YulFunctionCall",
                      "src": "4817:37:1"
                    },
                    "nativeSrc": "4817:37:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "4817:37:1"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nativeSrc": "4742:118:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "4795:5:1",
                  "nodeType": "YulTypedName",
                  "src": "4795:5:1",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nativeSrc": "4802:3:1",
                  "nodeType": "YulTypedName",
                  "src": "4802:3:1",
                  "type": ""
                }
              ],
              "src": "4742:118:1"
            },
            {
              "body": {
                "nativeSrc": "4964:124:1",
                "nodeType": "YulBlock",
                "src": "4964:124:1",
                "statements": [
                  {
                    "nativeSrc": "4974:26:1",
                    "nodeType": "YulAssignment",
                    "src": "4974:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "4986:9:1",
                          "nodeType": "YulIdentifier",
                          "src": "4986:9:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "4997:2:1",
                          "nodeType": "YulLiteral",
                          "src": "4997:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "4982:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "4982:3:1"
                      },
                      "nativeSrc": "4982:18:1",
                      "nodeType": "YulFunctionCall",
                      "src": "4982:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "4974:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "4974:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nativeSrc": "5054:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "5054:6:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "5067:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "5067:9:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "5078:1:1",
                              "nodeType": "YulLiteral",
                              "src": "5078:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "5063:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "5063:3:1"
                          },
                          "nativeSrc": "5063:17:1",
                          "nodeType": "YulFunctionCall",
                          "src": "5063:17:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nativeSrc": "5010:43:1",
                        "nodeType": "YulIdentifier",
                        "src": "5010:43:1"
                      },
                      "nativeSrc": "5010:71:1",
                      "nodeType": "YulFunctionCall",
                      "src": "5010:71:1"
                    },
                    "nativeSrc": "5010:71:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "5010:71:1"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nativeSrc": "4866:222:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "4936:9:1",
                  "nodeType": "YulTypedName",
                  "src": "4936:9:1",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nativeSrc": "4948:6:1",
                  "nodeType": "YulTypedName",
                  "src": "4948:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "4959:4:1",
                  "nodeType": "YulTypedName",
                  "src": "4959:4:1",
                  "type": ""
                }
              ],
              "src": "4866:222:1"
            },
            {
              "body": {
                "nativeSrc": "5190:73:1",
                "nodeType": "YulBlock",
                "src": "5190:73:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "5207:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "5207:3:1"
                        },
                        {
                          "name": "length",
                          "nativeSrc": "5212:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "5212:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "5200:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "5200:6:1"
                      },
                      "nativeSrc": "5200:19:1",
                      "nodeType": "YulFunctionCall",
                      "src": "5200:19:1"
                    },
                    "nativeSrc": "5200:19:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "5200:19:1"
                  },
                  {
                    "nativeSrc": "5228:29:1",
                    "nodeType": "YulAssignment",
                    "src": "5228:29:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "5247:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "5247:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "5252:4:1",
                          "nodeType": "YulLiteral",
                          "src": "5252:4:1",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "5243:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "5243:3:1"
                      },
                      "nativeSrc": "5243:14:1",
                      "nodeType": "YulFunctionCall",
                      "src": "5243:14:1"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nativeSrc": "5228:11:1",
                        "nodeType": "YulIdentifier",
                        "src": "5228:11:1"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
              "nativeSrc": "5094:169:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "5162:3:1",
                  "nodeType": "YulTypedName",
                  "src": "5162:3:1",
                  "type": ""
                },
                {
                  "name": "length",
                  "nativeSrc": "5167:6:1",
                  "nodeType": "YulTypedName",
                  "src": "5167:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nativeSrc": "5178:11:1",
                  "nodeType": "YulTypedName",
                  "src": "5178:11:1",
                  "type": ""
                }
              ],
              "src": "5094:169:1"
            },
            {
              "body": {
                "nativeSrc": "5375:57:1",
                "nodeType": "YulBlock",
                "src": "5375:57:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "5397:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "5397:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "5405:1:1",
                              "nodeType": "YulLiteral",
                              "src": "5405:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "5393:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "5393:3:1"
                          },
                          "nativeSrc": "5393:14:1",
                          "nodeType": "YulFunctionCall",
                          "src": "5393:14:1"
                        },
                        {
                          "hexValue": "4e6f7420746865206f776e6572",
                          "kind": "string",
                          "nativeSrc": "5409:15:1",
                          "nodeType": "YulLiteral",
                          "src": "5409:15:1",
                          "type": "",
                          "value": "Not the owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "5386:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "5386:6:1"
                      },
                      "nativeSrc": "5386:39:1",
                      "nodeType": "YulFunctionCall",
                      "src": "5386:39:1"
                    },
                    "nativeSrc": "5386:39:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "5386:39:1"
                  }
                ]
              },
              "name": "store_literal_in_memory_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5",
              "nativeSrc": "5269:163:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nativeSrc": "5367:6:1",
                  "nodeType": "YulTypedName",
                  "src": "5367:6:1",
                  "type": ""
                }
              ],
              "src": "5269:163:1"
            },
            {
              "body": {
                "nativeSrc": "5584:220:1",
                "nodeType": "YulBlock",
                "src": "5584:220:1",
                "statements": [
                  {
                    "nativeSrc": "5594:74:1",
                    "nodeType": "YulAssignment",
                    "src": "5594:74:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "5660:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "5660:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "5665:2:1",
                          "nodeType": "YulLiteral",
                          "src": "5665:2:1",
                          "type": "",
                          "value": "13"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nativeSrc": "5601:58:1",
                        "nodeType": "YulIdentifier",
                        "src": "5601:58:1"
                      },
                      "nativeSrc": "5601:67:1",
                      "nodeType": "YulFunctionCall",
                      "src": "5601:67:1"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nativeSrc": "5594:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "5594:3:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "5766:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "5766:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5",
                        "nativeSrc": "5677:88:1",
                        "nodeType": "YulIdentifier",
                        "src": "5677:88:1"
                      },
                      "nativeSrc": "5677:93:1",
                      "nodeType": "YulFunctionCall",
                      "src": "5677:93:1"
                    },
                    "nativeSrc": "5677:93:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "5677:93:1"
                  },
                  {
                    "nativeSrc": "5779:19:1",
                    "nodeType": "YulAssignment",
                    "src": "5779:19:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "5790:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "5790:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "5795:2:1",
                          "nodeType": "YulLiteral",
                          "src": "5795:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "5786:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "5786:3:1"
                      },
                      "nativeSrc": "5786:12:1",
                      "nodeType": "YulFunctionCall",
                      "src": "5786:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nativeSrc": "5779:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "5779:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5_to_t_string_memory_ptr_fromStack",
              "nativeSrc": "5438:366:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "5572:3:1",
                  "nodeType": "YulTypedName",
                  "src": "5572:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nativeSrc": "5580:3:1",
                  "nodeType": "YulTypedName",
                  "src": "5580:3:1",
                  "type": ""
                }
              ],
              "src": "5438:366:1"
            },
            {
              "body": {
                "nativeSrc": "5981:248:1",
                "nodeType": "YulBlock",
                "src": "5981:248:1",
                "statements": [
                  {
                    "nativeSrc": "5991:26:1",
                    "nodeType": "YulAssignment",
                    "src": "5991:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "6003:9:1",
                          "nodeType": "YulIdentifier",
                          "src": "6003:9:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "6014:2:1",
                          "nodeType": "YulLiteral",
                          "src": "6014:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "5999:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "5999:3:1"
                      },
                      "nativeSrc": "5999:18:1",
                      "nodeType": "YulFunctionCall",
                      "src": "5999:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "5991:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "5991:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "6038:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "6038:9:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6049:1:1",
                              "nodeType": "YulLiteral",
                              "src": "6049:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "6034:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "6034:3:1"
                          },
                          "nativeSrc": "6034:17:1",
                          "nodeType": "YulFunctionCall",
                          "src": "6034:17:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "6057:4:1",
                              "nodeType": "YulIdentifier",
                              "src": "6057:4:1"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "6063:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "6063:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "6053:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "6053:3:1"
                          },
                          "nativeSrc": "6053:20:1",
                          "nodeType": "YulFunctionCall",
                          "src": "6053:20:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "6027:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "6027:6:1"
                      },
                      "nativeSrc": "6027:47:1",
                      "nodeType": "YulFunctionCall",
                      "src": "6027:47:1"
                    },
                    "nativeSrc": "6027:47:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "6027:47:1"
                  },
                  {
                    "nativeSrc": "6083:139:1",
                    "nodeType": "YulAssignment",
                    "src": "6083:139:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nativeSrc": "6217:4:1",
                          "nodeType": "YulIdentifier",
                          "src": "6217:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5_to_t_string_memory_ptr_fromStack",
                        "nativeSrc": "6091:124:1",
                        "nodeType": "YulIdentifier",
                        "src": "6091:124:1"
                      },
                      "nativeSrc": "6091:131:1",
                      "nodeType": "YulFunctionCall",
                      "src": "6091:131:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "6083:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "6083:4:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5__to_t_string_memory_ptr__fromStack_reversed",
              "nativeSrc": "5810:419:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "5961:9:1",
                  "nodeType": "YulTypedName",
                  "src": "5961:9:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "5976:4:1",
                  "nodeType": "YulTypedName",
                  "src": "5976:4:1",
                  "type": ""
                }
              ],
              "src": "5810:419:1"
            },
            {
              "body": {
                "nativeSrc": "6341:136:1",
                "nodeType": "YulBlock",
                "src": "6341:136:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "6363:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "6363:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6371:1:1",
                              "nodeType": "YulLiteral",
                              "src": "6371:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "6359:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "6359:3:1"
                          },
                          "nativeSrc": "6359:14:1",
                          "nodeType": "YulFunctionCall",
                          "src": "6359:14:1"
                        },
                        {
                          "hexValue": "546f6b656e4469737472696275746f723a2061646472657373657320616e6420",
                          "kind": "string",
                          "nativeSrc": "6375:34:1",
                          "nodeType": "YulLiteral",
                          "src": "6375:34:1",
                          "type": "",
                          "value": "TokenDistributor: addresses and "
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "6352:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "6352:6:1"
                      },
                      "nativeSrc": "6352:58:1",
                      "nodeType": "YulFunctionCall",
                      "src": "6352:58:1"
                    },
                    "nativeSrc": "6352:58:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "6352:58:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "6431:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "6431:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6439:2:1",
                              "nodeType": "YulLiteral",
                              "src": "6439:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "6427:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "6427:3:1"
                          },
                          "nativeSrc": "6427:15:1",
                          "nodeType": "YulFunctionCall",
                          "src": "6427:15:1"
                        },
                        {
                          "hexValue": "616d6f756e7473206c656e677468206d69736d61746368",
                          "kind": "string",
                          "nativeSrc": "6444:25:1",
                          "nodeType": "YulLiteral",
                          "src": "6444:25:1",
                          "type": "",
                          "value": "amounts length mismatch"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "6420:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "6420:6:1"
                      },
                      "nativeSrc": "6420:50:1",
                      "nodeType": "YulFunctionCall",
                      "src": "6420:50:1"
                    },
                    "nativeSrc": "6420:50:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "6420:50:1"
                  }
                ]
              },
              "name": "store_literal_in_memory_deea682d4069074ada130bb3e477b3debc52696f1d608cd33e7018e3e7cbf043",
              "nativeSrc": "6235:242:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nativeSrc": "6333:6:1",
                  "nodeType": "YulTypedName",
                  "src": "6333:6:1",
                  "type": ""
                }
              ],
              "src": "6235:242:1"
            },
            {
              "body": {
                "nativeSrc": "6629:220:1",
                "nodeType": "YulBlock",
                "src": "6629:220:1",
                "statements": [
                  {
                    "nativeSrc": "6639:74:1",
                    "nodeType": "YulAssignment",
                    "src": "6639:74:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "6705:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "6705:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "6710:2:1",
                          "nodeType": "YulLiteral",
                          "src": "6710:2:1",
                          "type": "",
                          "value": "55"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nativeSrc": "6646:58:1",
                        "nodeType": "YulIdentifier",
                        "src": "6646:58:1"
                      },
                      "nativeSrc": "6646:67:1",
                      "nodeType": "YulFunctionCall",
                      "src": "6646:67:1"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nativeSrc": "6639:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "6639:3:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "6811:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "6811:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_deea682d4069074ada130bb3e477b3debc52696f1d608cd33e7018e3e7cbf043",
                        "nativeSrc": "6722:88:1",
                        "nodeType": "YulIdentifier",
                        "src": "6722:88:1"
                      },
                      "nativeSrc": "6722:93:1",
                      "nodeType": "YulFunctionCall",
                      "src": "6722:93:1"
                    },
                    "nativeSrc": "6722:93:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "6722:93:1"
                  },
                  {
                    "nativeSrc": "6824:19:1",
                    "nodeType": "YulAssignment",
                    "src": "6824:19:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "6835:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "6835:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "6840:2:1",
                          "nodeType": "YulLiteral",
                          "src": "6840:2:1",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "6831:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "6831:3:1"
                      },
                      "nativeSrc": "6831:12:1",
                      "nodeType": "YulFunctionCall",
                      "src": "6831:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nativeSrc": "6824:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "6824:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_deea682d4069074ada130bb3e477b3debc52696f1d608cd33e7018e3e7cbf043_to_t_string_memory_ptr_fromStack",
              "nativeSrc": "6483:366:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "6617:3:1",
                  "nodeType": "YulTypedName",
                  "src": "6617:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nativeSrc": "6625:3:1",
                  "nodeType": "YulTypedName",
                  "src": "6625:3:1",
                  "type": ""
                }
              ],
              "src": "6483:366:1"
            },
            {
              "body": {
                "nativeSrc": "7026:248:1",
                "nodeType": "YulBlock",
                "src": "7026:248:1",
                "statements": [
                  {
                    "nativeSrc": "7036:26:1",
                    "nodeType": "YulAssignment",
                    "src": "7036:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "7048:9:1",
                          "nodeType": "YulIdentifier",
                          "src": "7048:9:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "7059:2:1",
                          "nodeType": "YulLiteral",
                          "src": "7059:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "7044:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "7044:3:1"
                      },
                      "nativeSrc": "7044:18:1",
                      "nodeType": "YulFunctionCall",
                      "src": "7044:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "7036:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "7036:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "7083:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "7083:9:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "7094:1:1",
                              "nodeType": "YulLiteral",
                              "src": "7094:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "7079:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "7079:3:1"
                          },
                          "nativeSrc": "7079:17:1",
                          "nodeType": "YulFunctionCall",
                          "src": "7079:17:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "7102:4:1",
                              "nodeType": "YulIdentifier",
                              "src": "7102:4:1"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "7108:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "7108:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "7098:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "7098:3:1"
                          },
                          "nativeSrc": "7098:20:1",
                          "nodeType": "YulFunctionCall",
                          "src": "7098:20:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "7072:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "7072:6:1"
                      },
                      "nativeSrc": "7072:47:1",
                      "nodeType": "YulFunctionCall",
                      "src": "7072:47:1"
                    },
                    "nativeSrc": "7072:47:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "7072:47:1"
                  },
                  {
                    "nativeSrc": "7128:139:1",
                    "nodeType": "YulAssignment",
                    "src": "7128:139:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nativeSrc": "7262:4:1",
                          "nodeType": "YulIdentifier",
                          "src": "7262:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_deea682d4069074ada130bb3e477b3debc52696f1d608cd33e7018e3e7cbf043_to_t_string_memory_ptr_fromStack",
                        "nativeSrc": "7136:124:1",
                        "nodeType": "YulIdentifier",
                        "src": "7136:124:1"
                      },
                      "nativeSrc": "7136:131:1",
                      "nodeType": "YulFunctionCall",
                      "src": "7136:131:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "7128:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "7128:4:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_deea682d4069074ada130bb3e477b3debc52696f1d608cd33e7018e3e7cbf043__to_t_string_memory_ptr__fromStack_reversed",
              "nativeSrc": "6855:419:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "7006:9:1",
                  "nodeType": "YulTypedName",
                  "src": "7006:9:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "7021:4:1",
                  "nodeType": "YulTypedName",
                  "src": "7021:4:1",
                  "type": ""
                }
              ],
              "src": "6855:419:1"
            },
            {
              "body": {
                "nativeSrc": "7308:152:1",
                "nodeType": "YulBlock",
                "src": "7308:152:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "7325:1:1",
                          "nodeType": "YulLiteral",
                          "src": "7325:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "7328:77:1",
                          "nodeType": "YulLiteral",
                          "src": "7328:77:1",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "7318:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "7318:6:1"
                      },
                      "nativeSrc": "7318:88:1",
                      "nodeType": "YulFunctionCall",
                      "src": "7318:88:1"
                    },
                    "nativeSrc": "7318:88:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "7318:88:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "7422:1:1",
                          "nodeType": "YulLiteral",
                          "src": "7422:1:1",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "7425:4:1",
                          "nodeType": "YulLiteral",
                          "src": "7425:4:1",
                          "type": "",
                          "value": "0x32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "7415:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "7415:6:1"
                      },
                      "nativeSrc": "7415:15:1",
                      "nodeType": "YulFunctionCall",
                      "src": "7415:15:1"
                    },
                    "nativeSrc": "7415:15:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "7415:15:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "7446:1:1",
                          "nodeType": "YulLiteral",
                          "src": "7446:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "7449:4:1",
                          "nodeType": "YulLiteral",
                          "src": "7449:4:1",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nativeSrc": "7439:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "7439:6:1"
                      },
                      "nativeSrc": "7439:15:1",
                      "nodeType": "YulFunctionCall",
                      "src": "7439:15:1"
                    },
                    "nativeSrc": "7439:15:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "7439:15:1"
                  }
                ]
              },
              "name": "panic_error_0x32",
              "nativeSrc": "7280:180:1",
              "nodeType": "YulFunctionDefinition",
              "src": "7280:180:1"
            },
            {
              "body": {
                "nativeSrc": "7494:152:1",
                "nodeType": "YulBlock",
                "src": "7494:152:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "7511:1:1",
                          "nodeType": "YulLiteral",
                          "src": "7511:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "7514:77:1",
                          "nodeType": "YulLiteral",
                          "src": "7514:77:1",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "7504:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "7504:6:1"
                      },
                      "nativeSrc": "7504:88:1",
                      "nodeType": "YulFunctionCall",
                      "src": "7504:88:1"
                    },
                    "nativeSrc": "7504:88:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "7504:88:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "7608:1:1",
                          "nodeType": "YulLiteral",
                          "src": "7608:1:1",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "7611:4:1",
                          "nodeType": "YulLiteral",
                          "src": "7611:4:1",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "7601:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "7601:6:1"
                      },
                      "nativeSrc": "7601:15:1",
                      "nodeType": "YulFunctionCall",
                      "src": "7601:15:1"
                    },
                    "nativeSrc": "7601:15:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "7601:15:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "7632:1:1",
                          "nodeType": "YulLiteral",
                          "src": "7632:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "7635:4:1",
                          "nodeType": "YulLiteral",
                          "src": "7635:4:1",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nativeSrc": "7625:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "7625:6:1"
                      },
                      "nativeSrc": "7625:15:1",
                      "nodeType": "YulFunctionCall",
                      "src": "7625:15:1"
                    },
                    "nativeSrc": "7625:15:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "7625:15:1"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nativeSrc": "7466:180:1",
              "nodeType": "YulFunctionDefinition",
              "src": "7466:180:1"
            },
            {
              "body": {
                "nativeSrc": "7695:190:1",
                "nodeType": "YulBlock",
                "src": "7695:190:1",
                "statements": [
                  {
                    "nativeSrc": "7705:33:1",
                    "nodeType": "YulAssignment",
                    "src": "7705:33:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "7732:5:1",
                          "nodeType": "YulIdentifier",
                          "src": "7732:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nativeSrc": "7714:17:1",
                        "nodeType": "YulIdentifier",
                        "src": "7714:17:1"
                      },
                      "nativeSrc": "7714:24:1",
                      "nodeType": "YulFunctionCall",
                      "src": "7714:24:1"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nativeSrc": "7705:5:1",
                        "nodeType": "YulIdentifier",
                        "src": "7705:5:1"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nativeSrc": "7828:22:1",
                      "nodeType": "YulBlock",
                      "src": "7828:22:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nativeSrc": "7830:16:1",
                              "nodeType": "YulIdentifier",
                              "src": "7830:16:1"
                            },
                            "nativeSrc": "7830:18:1",
                            "nodeType": "YulFunctionCall",
                            "src": "7830:18:1"
                          },
                          "nativeSrc": "7830:18:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "7830:18:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "7753:5:1",
                          "nodeType": "YulIdentifier",
                          "src": "7753:5:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "7760:66:1",
                          "nodeType": "YulLiteral",
                          "src": "7760:66:1",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nativeSrc": "7750:2:1",
                        "nodeType": "YulIdentifier",
                        "src": "7750:2:1"
                      },
                      "nativeSrc": "7750:77:1",
                      "nodeType": "YulFunctionCall",
                      "src": "7750:77:1"
                    },
                    "nativeSrc": "7747:103:1",
                    "nodeType": "YulIf",
                    "src": "7747:103:1"
                  },
                  {
                    "nativeSrc": "7859:20:1",
                    "nodeType": "YulAssignment",
                    "src": "7859:20:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "7870:5:1",
                          "nodeType": "YulIdentifier",
                          "src": "7870:5:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "7877:1:1",
                          "nodeType": "YulLiteral",
                          "src": "7877:1:1",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "7866:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "7866:3:1"
                      },
                      "nativeSrc": "7866:13:1",
                      "nodeType": "YulFunctionCall",
                      "src": "7866:13:1"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nativeSrc": "7859:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "7859:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "increment_t_uint256",
              "nativeSrc": "7652:233:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "7681:5:1",
                  "nodeType": "YulTypedName",
                  "src": "7681:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nativeSrc": "7691:3:1",
                  "nodeType": "YulTypedName",
                  "src": "7691:3:1",
                  "type": ""
                }
              ],
              "src": "7652:233:1"
            },
            {
              "body": {
                "nativeSrc": "7956:53:1",
                "nodeType": "YulBlock",
                "src": "7956:53:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "7973:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "7973:3:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "7996:5:1",
                              "nodeType": "YulIdentifier",
                              "src": "7996:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_address",
                            "nativeSrc": "7978:17:1",
                            "nodeType": "YulIdentifier",
                            "src": "7978:17:1"
                          },
                          "nativeSrc": "7978:24:1",
                          "nodeType": "YulFunctionCall",
                          "src": "7978:24:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "7966:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "7966:6:1"
                      },
                      "nativeSrc": "7966:37:1",
                      "nodeType": "YulFunctionCall",
                      "src": "7966:37:1"
                    },
                    "nativeSrc": "7966:37:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "7966:37:1"
                  }
                ]
              },
              "name": "abi_encode_t_address_to_t_address_fromStack",
              "nativeSrc": "7891:118:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "7944:5:1",
                  "nodeType": "YulTypedName",
                  "src": "7944:5:1",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nativeSrc": "7951:3:1",
                  "nodeType": "YulTypedName",
                  "src": "7951:3:1",
                  "type": ""
                }
              ],
              "src": "7891:118:1"
            },
            {
              "body": {
                "nativeSrc": "8113:124:1",
                "nodeType": "YulBlock",
                "src": "8113:124:1",
                "statements": [
                  {
                    "nativeSrc": "8123:26:1",
                    "nodeType": "YulAssignment",
                    "src": "8123:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "8135:9:1",
                          "nodeType": "YulIdentifier",
                          "src": "8135:9:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "8146:2:1",
                          "nodeType": "YulLiteral",
                          "src": "8146:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "8131:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "8131:3:1"
                      },
                      "nativeSrc": "8131:18:1",
                      "nodeType": "YulFunctionCall",
                      "src": "8131:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "8123:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "8123:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nativeSrc": "8203:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "8203:6:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "8216:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "8216:9:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "8227:1:1",
                              "nodeType": "YulLiteral",
                              "src": "8227:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "8212:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "8212:3:1"
                          },
                          "nativeSrc": "8212:17:1",
                          "nodeType": "YulFunctionCall",
                          "src": "8212:17:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nativeSrc": "8159:43:1",
                        "nodeType": "YulIdentifier",
                        "src": "8159:43:1"
                      },
                      "nativeSrc": "8159:71:1",
                      "nodeType": "YulFunctionCall",
                      "src": "8159:71:1"
                    },
                    "nativeSrc": "8159:71:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "8159:71:1"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
              "nativeSrc": "8015:222:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "8085:9:1",
                  "nodeType": "YulTypedName",
                  "src": "8085:9:1",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nativeSrc": "8097:6:1",
                  "nodeType": "YulTypedName",
                  "src": "8097:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "8108:4:1",
                  "nodeType": "YulTypedName",
                  "src": "8108:4:1",
                  "type": ""
                }
              ],
              "src": "8015:222:1"
            },
            {
              "body": {
                "nativeSrc": "8286:79:1",
                "nodeType": "YulBlock",
                "src": "8286:79:1",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "8343:16:1",
                      "nodeType": "YulBlock",
                      "src": "8343:16:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "8352:1:1",
                                "nodeType": "YulLiteral",
                                "src": "8352:1:1",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "8355:1:1",
                                "nodeType": "YulLiteral",
                                "src": "8355:1:1",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nativeSrc": "8345:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "8345:6:1"
                            },
                            "nativeSrc": "8345:12:1",
                            "nodeType": "YulFunctionCall",
                            "src": "8345:12:1"
                          },
                          "nativeSrc": "8345:12:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "8345:12:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "8309:5:1",
                              "nodeType": "YulIdentifier",
                              "src": "8309:5:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "8334:5:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "8334:5:1"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nativeSrc": "8316:17:1",
                                "nodeType": "YulIdentifier",
                                "src": "8316:17:1"
                              },
                              "nativeSrc": "8316:24:1",
                              "nodeType": "YulFunctionCall",
                              "src": "8316:24:1"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "8306:2:1",
                            "nodeType": "YulIdentifier",
                            "src": "8306:2:1"
                          },
                          "nativeSrc": "8306:35:1",
                          "nodeType": "YulFunctionCall",
                          "src": "8306:35:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nativeSrc": "8299:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "8299:6:1"
                      },
                      "nativeSrc": "8299:43:1",
                      "nodeType": "YulFunctionCall",
                      "src": "8299:43:1"
                    },
                    "nativeSrc": "8296:63:1",
                    "nodeType": "YulIf",
                    "src": "8296:63:1"
                  }
                ]
              },
              "name": "validator_revert_t_uint256",
              "nativeSrc": "8243:122:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "8279:5:1",
                  "nodeType": "YulTypedName",
                  "src": "8279:5:1",
                  "type": ""
                }
              ],
              "src": "8243:122:1"
            },
            {
              "body": {
                "nativeSrc": "8434:80:1",
                "nodeType": "YulBlock",
                "src": "8434:80:1",
                "statements": [
                  {
                    "nativeSrc": "8444:22:1",
                    "nodeType": "YulAssignment",
                    "src": "8444:22:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nativeSrc": "8459:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "8459:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nativeSrc": "8453:5:1",
                        "nodeType": "YulIdentifier",
                        "src": "8453:5:1"
                      },
                      "nativeSrc": "8453:13:1",
                      "nodeType": "YulFunctionCall",
                      "src": "8453:13:1"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nativeSrc": "8444:5:1",
                        "nodeType": "YulIdentifier",
                        "src": "8444:5:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "8502:5:1",
                          "nodeType": "YulIdentifier",
                          "src": "8502:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_uint256",
                        "nativeSrc": "8475:26:1",
                        "nodeType": "YulIdentifier",
                        "src": "8475:26:1"
                      },
                      "nativeSrc": "8475:33:1",
                      "nodeType": "YulFunctionCall",
                      "src": "8475:33:1"
                    },
                    "nativeSrc": "8475:33:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "8475:33:1"
                  }
                ]
              },
              "name": "abi_decode_t_uint256_fromMemory",
              "nativeSrc": "8371:143:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nativeSrc": "8412:6:1",
                  "nodeType": "YulTypedName",
                  "src": "8412:6:1",
                  "type": ""
                },
                {
                  "name": "end",
                  "nativeSrc": "8420:3:1",
                  "nodeType": "YulTypedName",
                  "src": "8420:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nativeSrc": "8428:5:1",
                  "nodeType": "YulTypedName",
                  "src": "8428:5:1",
                  "type": ""
                }
              ],
              "src": "8371:143:1"
            },
            {
              "body": {
                "nativeSrc": "8597:274:1",
                "nodeType": "YulBlock",
                "src": "8597:274:1",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "8643:83:1",
                      "nodeType": "YulBlock",
                      "src": "8643:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nativeSrc": "8645:77:1",
                              "nodeType": "YulIdentifier",
                              "src": "8645:77:1"
                            },
                            "nativeSrc": "8645:79:1",
                            "nodeType": "YulFunctionCall",
                            "src": "8645:79:1"
                          },
                          "nativeSrc": "8645:79:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "8645:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nativeSrc": "8618:7:1",
                              "nodeType": "YulIdentifier",
                              "src": "8618:7:1"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "8627:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "8627:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "8614:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "8614:3:1"
                          },
                          "nativeSrc": "8614:23:1",
                          "nodeType": "YulFunctionCall",
                          "src": "8614:23:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "8639:2:1",
                          "nodeType": "YulLiteral",
                          "src": "8639:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nativeSrc": "8610:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "8610:3:1"
                      },
                      "nativeSrc": "8610:32:1",
                      "nodeType": "YulFunctionCall",
                      "src": "8610:32:1"
                    },
                    "nativeSrc": "8607:119:1",
                    "nodeType": "YulIf",
                    "src": "8607:119:1"
                  },
                  {
                    "nativeSrc": "8736:128:1",
                    "nodeType": "YulBlock",
                    "src": "8736:128:1",
                    "statements": [
                      {
                        "nativeSrc": "8751:15:1",
                        "nodeType": "YulVariableDeclaration",
                        "src": "8751:15:1",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "8765:1:1",
                          "nodeType": "YulLiteral",
                          "src": "8765:1:1",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nativeSrc": "8755:6:1",
                            "nodeType": "YulTypedName",
                            "src": "8755:6:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "8780:74:1",
                        "nodeType": "YulAssignment",
                        "src": "8780:74:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "8826:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "8826:9:1"
                                },
                                {
                                  "name": "offset",
                                  "nativeSrc": "8837:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "8837:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "8822:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "8822:3:1"
                              },
                              "nativeSrc": "8822:22:1",
                              "nodeType": "YulFunctionCall",
                              "src": "8822:22:1"
                            },
                            {
                              "name": "dataEnd",
                              "nativeSrc": "8846:7:1",
                              "nodeType": "YulIdentifier",
                              "src": "8846:7:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256_fromMemory",
                            "nativeSrc": "8790:31:1",
                            "nodeType": "YulIdentifier",
                            "src": "8790:31:1"
                          },
                          "nativeSrc": "8790:64:1",
                          "nodeType": "YulFunctionCall",
                          "src": "8790:64:1"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nativeSrc": "8780:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "8780:6:1"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256_fromMemory",
              "nativeSrc": "8520:351:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "8567:9:1",
                  "nodeType": "YulTypedName",
                  "src": "8567:9:1",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nativeSrc": "8578:7:1",
                  "nodeType": "YulTypedName",
                  "src": "8578:7:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nativeSrc": "8590:6:1",
                  "nodeType": "YulTypedName",
                  "src": "8590:6:1",
                  "type": ""
                }
              ],
              "src": "8520:351:1"
            },
            {
              "body": {
                "nativeSrc": "8983:118:1",
                "nodeType": "YulBlock",
                "src": "8983:118:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "9005:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "9005:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "9013:1:1",
                              "nodeType": "YulLiteral",
                              "src": "9013:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "9001:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "9001:3:1"
                          },
                          "nativeSrc": "9001:14:1",
                          "nodeType": "YulFunctionCall",
                          "src": "9001:14:1"
                        },
                        {
                          "hexValue": "546f6b656e4469737472696275746f723a206e6f20746f6b656e7320746f2072",
                          "kind": "string",
                          "nativeSrc": "9017:34:1",
                          "nodeType": "YulLiteral",
                          "src": "9017:34:1",
                          "type": "",
                          "value": "TokenDistributor: no tokens to r"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "8994:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "8994:6:1"
                      },
                      "nativeSrc": "8994:58:1",
                      "nodeType": "YulFunctionCall",
                      "src": "8994:58:1"
                    },
                    "nativeSrc": "8994:58:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "8994:58:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "9073:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "9073:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "9081:2:1",
                              "nodeType": "YulLiteral",
                              "src": "9081:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "9069:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "9069:3:1"
                          },
                          "nativeSrc": "9069:15:1",
                          "nodeType": "YulFunctionCall",
                          "src": "9069:15:1"
                        },
                        {
                          "hexValue": "657475726e",
                          "kind": "string",
                          "nativeSrc": "9086:7:1",
                          "nodeType": "YulLiteral",
                          "src": "9086:7:1",
                          "type": "",
                          "value": "eturn"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "9062:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "9062:6:1"
                      },
                      "nativeSrc": "9062:32:1",
                      "nodeType": "YulFunctionCall",
                      "src": "9062:32:1"
                    },
                    "nativeSrc": "9062:32:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "9062:32:1"
                  }
                ]
              },
              "name": "store_literal_in_memory_a3d102c74b83e3fc99e9e4a8e08d6ba6b9e8cff509fdc4c91a762ff5c4bf13c5",
              "nativeSrc": "8877:224:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nativeSrc": "8975:6:1",
                  "nodeType": "YulTypedName",
                  "src": "8975:6:1",
                  "type": ""
                }
              ],
              "src": "8877:224:1"
            },
            {
              "body": {
                "nativeSrc": "9253:220:1",
                "nodeType": "YulBlock",
                "src": "9253:220:1",
                "statements": [
                  {
                    "nativeSrc": "9263:74:1",
                    "nodeType": "YulAssignment",
                    "src": "9263:74:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "9329:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "9329:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "9334:2:1",
                          "nodeType": "YulLiteral",
                          "src": "9334:2:1",
                          "type": "",
                          "value": "37"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nativeSrc": "9270:58:1",
                        "nodeType": "YulIdentifier",
                        "src": "9270:58:1"
                      },
                      "nativeSrc": "9270:67:1",
                      "nodeType": "YulFunctionCall",
                      "src": "9270:67:1"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nativeSrc": "9263:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "9263:3:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "9435:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "9435:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_a3d102c74b83e3fc99e9e4a8e08d6ba6b9e8cff509fdc4c91a762ff5c4bf13c5",
                        "nativeSrc": "9346:88:1",
                        "nodeType": "YulIdentifier",
                        "src": "9346:88:1"
                      },
                      "nativeSrc": "9346:93:1",
                      "nodeType": "YulFunctionCall",
                      "src": "9346:93:1"
                    },
                    "nativeSrc": "9346:93:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "9346:93:1"
                  },
                  {
                    "nativeSrc": "9448:19:1",
                    "nodeType": "YulAssignment",
                    "src": "9448:19:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "9459:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "9459:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "9464:2:1",
                          "nodeType": "YulLiteral",
                          "src": "9464:2:1",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "9455:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "9455:3:1"
                      },
                      "nativeSrc": "9455:12:1",
                      "nodeType": "YulFunctionCall",
                      "src": "9455:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nativeSrc": "9448:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "9448:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_a3d102c74b83e3fc99e9e4a8e08d6ba6b9e8cff509fdc4c91a762ff5c4bf13c5_to_t_string_memory_ptr_fromStack",
              "nativeSrc": "9107:366:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "9241:3:1",
                  "nodeType": "YulTypedName",
                  "src": "9241:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nativeSrc": "9249:3:1",
                  "nodeType": "YulTypedName",
                  "src": "9249:3:1",
                  "type": ""
                }
              ],
              "src": "9107:366:1"
            },
            {
              "body": {
                "nativeSrc": "9650:248:1",
                "nodeType": "YulBlock",
                "src": "9650:248:1",
                "statements": [
                  {
                    "nativeSrc": "9660:26:1",
                    "nodeType": "YulAssignment",
                    "src": "9660:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "9672:9:1",
                          "nodeType": "YulIdentifier",
                          "src": "9672:9:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "9683:2:1",
                          "nodeType": "YulLiteral",
                          "src": "9683:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "9668:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "9668:3:1"
                      },
                      "nativeSrc": "9668:18:1",
                      "nodeType": "YulFunctionCall",
                      "src": "9668:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "9660:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "9660:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "9707:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "9707:9:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "9718:1:1",
                              "nodeType": "YulLiteral",
                              "src": "9718:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "9703:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "9703:3:1"
                          },
                          "nativeSrc": "9703:17:1",
                          "nodeType": "YulFunctionCall",
                          "src": "9703:17:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "9726:4:1",
                              "nodeType": "YulIdentifier",
                              "src": "9726:4:1"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "9732:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "9732:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "9722:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "9722:3:1"
                          },
                          "nativeSrc": "9722:20:1",
                          "nodeType": "YulFunctionCall",
                          "src": "9722:20:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "9696:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "9696:6:1"
                      },
                      "nativeSrc": "9696:47:1",
                      "nodeType": "YulFunctionCall",
                      "src": "9696:47:1"
                    },
                    "nativeSrc": "9696:47:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "9696:47:1"
                  },
                  {
                    "nativeSrc": "9752:139:1",
                    "nodeType": "YulAssignment",
                    "src": "9752:139:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nativeSrc": "9886:4:1",
                          "nodeType": "YulIdentifier",
                          "src": "9886:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_a3d102c74b83e3fc99e9e4a8e08d6ba6b9e8cff509fdc4c91a762ff5c4bf13c5_to_t_string_memory_ptr_fromStack",
                        "nativeSrc": "9760:124:1",
                        "nodeType": "YulIdentifier",
                        "src": "9760:124:1"
                      },
                      "nativeSrc": "9760:131:1",
                      "nodeType": "YulFunctionCall",
                      "src": "9760:131:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "9752:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "9752:4:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_a3d102c74b83e3fc99e9e4a8e08d6ba6b9e8cff509fdc4c91a762ff5c4bf13c5__to_t_string_memory_ptr__fromStack_reversed",
              "nativeSrc": "9479:419:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "9630:9:1",
                  "nodeType": "YulTypedName",
                  "src": "9630:9:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "9645:4:1",
                  "nodeType": "YulTypedName",
                  "src": "9645:4:1",
                  "type": ""
                }
              ],
              "src": "9479:419:1"
            },
            {
              "body": {
                "nativeSrc": "10030:206:1",
                "nodeType": "YulBlock",
                "src": "10030:206:1",
                "statements": [
                  {
                    "nativeSrc": "10040:26:1",
                    "nodeType": "YulAssignment",
                    "src": "10040:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "10052:9:1",
                          "nodeType": "YulIdentifier",
                          "src": "10052:9:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "10063:2:1",
                          "nodeType": "YulLiteral",
                          "src": "10063:2:1",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "10048:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "10048:3:1"
                      },
                      "nativeSrc": "10048:18:1",
                      "nodeType": "YulFunctionCall",
                      "src": "10048:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "10040:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "10040:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nativeSrc": "10120:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "10120:6:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "10133:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "10133:9:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10144:1:1",
                              "nodeType": "YulLiteral",
                              "src": "10144:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "10129:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "10129:3:1"
                          },
                          "nativeSrc": "10129:17:1",
                          "nodeType": "YulFunctionCall",
                          "src": "10129:17:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nativeSrc": "10076:43:1",
                        "nodeType": "YulIdentifier",
                        "src": "10076:43:1"
                      },
                      "nativeSrc": "10076:71:1",
                      "nodeType": "YulFunctionCall",
                      "src": "10076:71:1"
                    },
                    "nativeSrc": "10076:71:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "10076:71:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nativeSrc": "10201:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "10201:6:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "10214:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "10214:9:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10225:2:1",
                              "nodeType": "YulLiteral",
                              "src": "10225:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "10210:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "10210:3:1"
                          },
                          "nativeSrc": "10210:18:1",
                          "nodeType": "YulFunctionCall",
                          "src": "10210:18:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nativeSrc": "10157:43:1",
                        "nodeType": "YulIdentifier",
                        "src": "10157:43:1"
                      },
                      "nativeSrc": "10157:72:1",
                      "nodeType": "YulFunctionCall",
                      "src": "10157:72:1"
                    },
                    "nativeSrc": "10157:72:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "10157:72:1"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
              "nativeSrc": "9904:332:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "9994:9:1",
                  "nodeType": "YulTypedName",
                  "src": "9994:9:1",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nativeSrc": "10006:6:1",
                  "nodeType": "YulTypedName",
                  "src": "10006:6:1",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nativeSrc": "10014:6:1",
                  "nodeType": "YulTypedName",
                  "src": "10014:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "10025:4:1",
                  "nodeType": "YulTypedName",
                  "src": "10025:4:1",
                  "type": ""
                }
              ],
              "src": "9904:332:1"
            },
            {
              "body": {
                "nativeSrc": "10282:76:1",
                "nodeType": "YulBlock",
                "src": "10282:76:1",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "10336:16:1",
                      "nodeType": "YulBlock",
                      "src": "10336:16:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "10345:1:1",
                                "nodeType": "YulLiteral",
                                "src": "10345:1:1",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "10348:1:1",
                                "nodeType": "YulLiteral",
                                "src": "10348:1:1",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nativeSrc": "10338:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "10338:6:1"
                            },
                            "nativeSrc": "10338:12:1",
                            "nodeType": "YulFunctionCall",
                            "src": "10338:12:1"
                          },
                          "nativeSrc": "10338:12:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "10338:12:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "10305:5:1",
                              "nodeType": "YulIdentifier",
                              "src": "10305:5:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "10327:5:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "10327:5:1"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_bool",
                                "nativeSrc": "10312:14:1",
                                "nodeType": "YulIdentifier",
                                "src": "10312:14:1"
                              },
                              "nativeSrc": "10312:21:1",
                              "nodeType": "YulFunctionCall",
                              "src": "10312:21:1"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "10302:2:1",
                            "nodeType": "YulIdentifier",
                            "src": "10302:2:1"
                          },
                          "nativeSrc": "10302:32:1",
                          "nodeType": "YulFunctionCall",
                          "src": "10302:32:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nativeSrc": "10295:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "10295:6:1"
                      },
                      "nativeSrc": "10295:40:1",
                      "nodeType": "YulFunctionCall",
                      "src": "10295:40:1"
                    },
                    "nativeSrc": "10292:60:1",
                    "nodeType": "YulIf",
                    "src": "10292:60:1"
                  }
                ]
              },
              "name": "validator_revert_t_bool",
              "nativeSrc": "10242:116:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "10275:5:1",
                  "nodeType": "YulTypedName",
                  "src": "10275:5:1",
                  "type": ""
                }
              ],
              "src": "10242:116:1"
            },
            {
              "body": {
                "nativeSrc": "10424:77:1",
                "nodeType": "YulBlock",
                "src": "10424:77:1",
                "statements": [
                  {
                    "nativeSrc": "10434:22:1",
                    "nodeType": "YulAssignment",
                    "src": "10434:22:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nativeSrc": "10449:6:1",
                          "nodeType": "YulIdentifier",
                          "src": "10449:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nativeSrc": "10443:5:1",
                        "nodeType": "YulIdentifier",
                        "src": "10443:5:1"
                      },
                      "nativeSrc": "10443:13:1",
                      "nodeType": "YulFunctionCall",
                      "src": "10443:13:1"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nativeSrc": "10434:5:1",
                        "nodeType": "YulIdentifier",
                        "src": "10434:5:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "10489:5:1",
                          "nodeType": "YulIdentifier",
                          "src": "10489:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_bool",
                        "nativeSrc": "10465:23:1",
                        "nodeType": "YulIdentifier",
                        "src": "10465:23:1"
                      },
                      "nativeSrc": "10465:30:1",
                      "nodeType": "YulFunctionCall",
                      "src": "10465:30:1"
                    },
                    "nativeSrc": "10465:30:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "10465:30:1"
                  }
                ]
              },
              "name": "abi_decode_t_bool_fromMemory",
              "nativeSrc": "10364:137:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nativeSrc": "10402:6:1",
                  "nodeType": "YulTypedName",
                  "src": "10402:6:1",
                  "type": ""
                },
                {
                  "name": "end",
                  "nativeSrc": "10410:3:1",
                  "nodeType": "YulTypedName",
                  "src": "10410:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nativeSrc": "10418:5:1",
                  "nodeType": "YulTypedName",
                  "src": "10418:5:1",
                  "type": ""
                }
              ],
              "src": "10364:137:1"
            },
            {
              "body": {
                "nativeSrc": "10581:271:1",
                "nodeType": "YulBlock",
                "src": "10581:271:1",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "10627:83:1",
                      "nodeType": "YulBlock",
                      "src": "10627:83:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nativeSrc": "10629:77:1",
                              "nodeType": "YulIdentifier",
                              "src": "10629:77:1"
                            },
                            "nativeSrc": "10629:79:1",
                            "nodeType": "YulFunctionCall",
                            "src": "10629:79:1"
                          },
                          "nativeSrc": "10629:79:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "10629:79:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nativeSrc": "10602:7:1",
                              "nodeType": "YulIdentifier",
                              "src": "10602:7:1"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "10611:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "10611:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "10598:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "10598:3:1"
                          },
                          "nativeSrc": "10598:23:1",
                          "nodeType": "YulFunctionCall",
                          "src": "10598:23:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "10623:2:1",
                          "nodeType": "YulLiteral",
                          "src": "10623:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nativeSrc": "10594:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "10594:3:1"
                      },
                      "nativeSrc": "10594:32:1",
                      "nodeType": "YulFunctionCall",
                      "src": "10594:32:1"
                    },
                    "nativeSrc": "10591:119:1",
                    "nodeType": "YulIf",
                    "src": "10591:119:1"
                  },
                  {
                    "nativeSrc": "10720:125:1",
                    "nodeType": "YulBlock",
                    "src": "10720:125:1",
                    "statements": [
                      {
                        "nativeSrc": "10735:15:1",
                        "nodeType": "YulVariableDeclaration",
                        "src": "10735:15:1",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "10749:1:1",
                          "nodeType": "YulLiteral",
                          "src": "10749:1:1",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nativeSrc": "10739:6:1",
                            "nodeType": "YulTypedName",
                            "src": "10739:6:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "10764:71:1",
                        "nodeType": "YulAssignment",
                        "src": "10764:71:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "10807:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "10807:9:1"
                                },
                                {
                                  "name": "offset",
                                  "nativeSrc": "10818:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "10818:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "10803:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "10803:3:1"
                              },
                              "nativeSrc": "10803:22:1",
                              "nodeType": "YulFunctionCall",
                              "src": "10803:22:1"
                            },
                            {
                              "name": "dataEnd",
                              "nativeSrc": "10827:7:1",
                              "nodeType": "YulIdentifier",
                              "src": "10827:7:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bool_fromMemory",
                            "nativeSrc": "10774:28:1",
                            "nodeType": "YulIdentifier",
                            "src": "10774:28:1"
                          },
                          "nativeSrc": "10774:61:1",
                          "nodeType": "YulFunctionCall",
                          "src": "10774:61:1"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nativeSrc": "10764:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "10764:6:1"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_bool_fromMemory",
              "nativeSrc": "10507:345:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "10551:9:1",
                  "nodeType": "YulTypedName",
                  "src": "10551:9:1",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nativeSrc": "10562:7:1",
                  "nodeType": "YulTypedName",
                  "src": "10562:7:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nativeSrc": "10574:6:1",
                  "nodeType": "YulTypedName",
                  "src": "10574:6:1",
                  "type": ""
                }
              ],
              "src": "10507:345:1"
            },
            {
              "body": {
                "nativeSrc": "10964:134:1",
                "nodeType": "YulBlock",
                "src": "10964:134:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "10986:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "10986:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10994:1:1",
                              "nodeType": "YulLiteral",
                              "src": "10994:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "10982:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "10982:3:1"
                          },
                          "nativeSrc": "10982:14:1",
                          "nodeType": "YulFunctionCall",
                          "src": "10982:14:1"
                        },
                        {
                          "hexValue": "546f6b656e4469737472696275746f723a20746f6b656e7320616c7265616479",
                          "kind": "string",
                          "nativeSrc": "10998:34:1",
                          "nodeType": "YulLiteral",
                          "src": "10998:34:1",
                          "type": "",
                          "value": "TokenDistributor: tokens already"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "10975:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "10975:6:1"
                      },
                      "nativeSrc": "10975:58:1",
                      "nodeType": "YulFunctionCall",
                      "src": "10975:58:1"
                    },
                    "nativeSrc": "10975:58:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "10975:58:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "11054:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "11054:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "11062:2:1",
                              "nodeType": "YulLiteral",
                              "src": "11062:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "11050:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "11050:3:1"
                          },
                          "nativeSrc": "11050:15:1",
                          "nodeType": "YulFunctionCall",
                          "src": "11050:15:1"
                        },
                        {
                          "hexValue": "2073656e7420746f20746869732061646472657373",
                          "kind": "string",
                          "nativeSrc": "11067:23:1",
                          "nodeType": "YulLiteral",
                          "src": "11067:23:1",
                          "type": "",
                          "value": " sent to this address"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "11043:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "11043:6:1"
                      },
                      "nativeSrc": "11043:48:1",
                      "nodeType": "YulFunctionCall",
                      "src": "11043:48:1"
                    },
                    "nativeSrc": "11043:48:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "11043:48:1"
                  }
                ]
              },
              "name": "store_literal_in_memory_3f415129e2a0819b7377b039a5b879c223cd07c510ac2a7be70874e9657a5958",
              "nativeSrc": "10858:240:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nativeSrc": "10956:6:1",
                  "nodeType": "YulTypedName",
                  "src": "10956:6:1",
                  "type": ""
                }
              ],
              "src": "10858:240:1"
            },
            {
              "body": {
                "nativeSrc": "11250:220:1",
                "nodeType": "YulBlock",
                "src": "11250:220:1",
                "statements": [
                  {
                    "nativeSrc": "11260:74:1",
                    "nodeType": "YulAssignment",
                    "src": "11260:74:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "11326:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "11326:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "11331:2:1",
                          "nodeType": "YulLiteral",
                          "src": "11331:2:1",
                          "type": "",
                          "value": "53"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nativeSrc": "11267:58:1",
                        "nodeType": "YulIdentifier",
                        "src": "11267:58:1"
                      },
                      "nativeSrc": "11267:67:1",
                      "nodeType": "YulFunctionCall",
                      "src": "11267:67:1"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nativeSrc": "11260:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "11260:3:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "11432:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "11432:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_3f415129e2a0819b7377b039a5b879c223cd07c510ac2a7be70874e9657a5958",
                        "nativeSrc": "11343:88:1",
                        "nodeType": "YulIdentifier",
                        "src": "11343:88:1"
                      },
                      "nativeSrc": "11343:93:1",
                      "nodeType": "YulFunctionCall",
                      "src": "11343:93:1"
                    },
                    "nativeSrc": "11343:93:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "11343:93:1"
                  },
                  {
                    "nativeSrc": "11445:19:1",
                    "nodeType": "YulAssignment",
                    "src": "11445:19:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "11456:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "11456:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "11461:2:1",
                          "nodeType": "YulLiteral",
                          "src": "11461:2:1",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "11452:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "11452:3:1"
                      },
                      "nativeSrc": "11452:12:1",
                      "nodeType": "YulFunctionCall",
                      "src": "11452:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nativeSrc": "11445:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "11445:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_3f415129e2a0819b7377b039a5b879c223cd07c510ac2a7be70874e9657a5958_to_t_string_memory_ptr_fromStack",
              "nativeSrc": "11104:366:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "11238:3:1",
                  "nodeType": "YulTypedName",
                  "src": "11238:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nativeSrc": "11246:3:1",
                  "nodeType": "YulTypedName",
                  "src": "11246:3:1",
                  "type": ""
                }
              ],
              "src": "11104:366:1"
            },
            {
              "body": {
                "nativeSrc": "11647:248:1",
                "nodeType": "YulBlock",
                "src": "11647:248:1",
                "statements": [
                  {
                    "nativeSrc": "11657:26:1",
                    "nodeType": "YulAssignment",
                    "src": "11657:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "11669:9:1",
                          "nodeType": "YulIdentifier",
                          "src": "11669:9:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "11680:2:1",
                          "nodeType": "YulLiteral",
                          "src": "11680:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "11665:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "11665:3:1"
                      },
                      "nativeSrc": "11665:18:1",
                      "nodeType": "YulFunctionCall",
                      "src": "11665:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "11657:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "11657:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "11704:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "11704:9:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "11715:1:1",
                              "nodeType": "YulLiteral",
                              "src": "11715:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "11700:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "11700:3:1"
                          },
                          "nativeSrc": "11700:17:1",
                          "nodeType": "YulFunctionCall",
                          "src": "11700:17:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "11723:4:1",
                              "nodeType": "YulIdentifier",
                              "src": "11723:4:1"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "11729:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "11729:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "11719:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "11719:3:1"
                          },
                          "nativeSrc": "11719:20:1",
                          "nodeType": "YulFunctionCall",
                          "src": "11719:20:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "11693:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "11693:6:1"
                      },
                      "nativeSrc": "11693:47:1",
                      "nodeType": "YulFunctionCall",
                      "src": "11693:47:1"
                    },
                    "nativeSrc": "11693:47:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "11693:47:1"
                  },
                  {
                    "nativeSrc": "11749:139:1",
                    "nodeType": "YulAssignment",
                    "src": "11749:139:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nativeSrc": "11883:4:1",
                          "nodeType": "YulIdentifier",
                          "src": "11883:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_3f415129e2a0819b7377b039a5b879c223cd07c510ac2a7be70874e9657a5958_to_t_string_memory_ptr_fromStack",
                        "nativeSrc": "11757:124:1",
                        "nodeType": "YulIdentifier",
                        "src": "11757:124:1"
                      },
                      "nativeSrc": "11757:131:1",
                      "nodeType": "YulFunctionCall",
                      "src": "11757:131:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "11749:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "11749:4:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_3f415129e2a0819b7377b039a5b879c223cd07c510ac2a7be70874e9657a5958__to_t_string_memory_ptr__fromStack_reversed",
              "nativeSrc": "11476:419:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "11627:9:1",
                  "nodeType": "YulTypedName",
                  "src": "11627:9:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "11642:4:1",
                  "nodeType": "YulTypedName",
                  "src": "11642:4:1",
                  "type": ""
                }
              ],
              "src": "11476:419:1"
            },
            {
              "body": {
                "nativeSrc": "12007:134:1",
                "nodeType": "YulBlock",
                "src": "12007:134:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "12029:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "12029:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12037:1:1",
                              "nodeType": "YulLiteral",
                              "src": "12037:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "12025:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "12025:3:1"
                          },
                          "nativeSrc": "12025:14:1",
                          "nodeType": "YulFunctionCall",
                          "src": "12025:14:1"
                        },
                        {
                          "hexValue": "546f6b656e4469737472696275746f723a206e6f20746f6b656e7320616c6c6f",
                          "kind": "string",
                          "nativeSrc": "12041:34:1",
                          "nodeType": "YulLiteral",
                          "src": "12041:34:1",
                          "type": "",
                          "value": "TokenDistributor: no tokens allo"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "12018:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "12018:6:1"
                      },
                      "nativeSrc": "12018:58:1",
                      "nodeType": "YulFunctionCall",
                      "src": "12018:58:1"
                    },
                    "nativeSrc": "12018:58:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "12018:58:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "12097:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "12097:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12105:2:1",
                              "nodeType": "YulLiteral",
                              "src": "12105:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "12093:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "12093:3:1"
                          },
                          "nativeSrc": "12093:15:1",
                          "nodeType": "YulFunctionCall",
                          "src": "12093:15:1"
                        },
                        {
                          "hexValue": "636174656420746f20746869732061646472657373",
                          "kind": "string",
                          "nativeSrc": "12110:23:1",
                          "nodeType": "YulLiteral",
                          "src": "12110:23:1",
                          "type": "",
                          "value": "cated to this address"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "12086:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "12086:6:1"
                      },
                      "nativeSrc": "12086:48:1",
                      "nodeType": "YulFunctionCall",
                      "src": "12086:48:1"
                    },
                    "nativeSrc": "12086:48:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "12086:48:1"
                  }
                ]
              },
              "name": "store_literal_in_memory_10d25bf89d7180db683c670a203e0a5c32f506aa6852f6f488ab9eec754851e9",
              "nativeSrc": "11901:240:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nativeSrc": "11999:6:1",
                  "nodeType": "YulTypedName",
                  "src": "11999:6:1",
                  "type": ""
                }
              ],
              "src": "11901:240:1"
            },
            {
              "body": {
                "nativeSrc": "12293:220:1",
                "nodeType": "YulBlock",
                "src": "12293:220:1",
                "statements": [
                  {
                    "nativeSrc": "12303:74:1",
                    "nodeType": "YulAssignment",
                    "src": "12303:74:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "12369:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "12369:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "12374:2:1",
                          "nodeType": "YulLiteral",
                          "src": "12374:2:1",
                          "type": "",
                          "value": "53"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nativeSrc": "12310:58:1",
                        "nodeType": "YulIdentifier",
                        "src": "12310:58:1"
                      },
                      "nativeSrc": "12310:67:1",
                      "nodeType": "YulFunctionCall",
                      "src": "12310:67:1"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nativeSrc": "12303:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "12303:3:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "12475:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "12475:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_10d25bf89d7180db683c670a203e0a5c32f506aa6852f6f488ab9eec754851e9",
                        "nativeSrc": "12386:88:1",
                        "nodeType": "YulIdentifier",
                        "src": "12386:88:1"
                      },
                      "nativeSrc": "12386:93:1",
                      "nodeType": "YulFunctionCall",
                      "src": "12386:93:1"
                    },
                    "nativeSrc": "12386:93:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "12386:93:1"
                  },
                  {
                    "nativeSrc": "12488:19:1",
                    "nodeType": "YulAssignment",
                    "src": "12488:19:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "12499:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "12499:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "12504:2:1",
                          "nodeType": "YulLiteral",
                          "src": "12504:2:1",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "12495:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "12495:3:1"
                      },
                      "nativeSrc": "12495:12:1",
                      "nodeType": "YulFunctionCall",
                      "src": "12495:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nativeSrc": "12488:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "12488:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_10d25bf89d7180db683c670a203e0a5c32f506aa6852f6f488ab9eec754851e9_to_t_string_memory_ptr_fromStack",
              "nativeSrc": "12147:366:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "12281:3:1",
                  "nodeType": "YulTypedName",
                  "src": "12281:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nativeSrc": "12289:3:1",
                  "nodeType": "YulTypedName",
                  "src": "12289:3:1",
                  "type": ""
                }
              ],
              "src": "12147:366:1"
            },
            {
              "body": {
                "nativeSrc": "12690:248:1",
                "nodeType": "YulBlock",
                "src": "12690:248:1",
                "statements": [
                  {
                    "nativeSrc": "12700:26:1",
                    "nodeType": "YulAssignment",
                    "src": "12700:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "12712:9:1",
                          "nodeType": "YulIdentifier",
                          "src": "12712:9:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "12723:2:1",
                          "nodeType": "YulLiteral",
                          "src": "12723:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "12708:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "12708:3:1"
                      },
                      "nativeSrc": "12708:18:1",
                      "nodeType": "YulFunctionCall",
                      "src": "12708:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "12700:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "12700:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "12747:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "12747:9:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12758:1:1",
                              "nodeType": "YulLiteral",
                              "src": "12758:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "12743:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "12743:3:1"
                          },
                          "nativeSrc": "12743:17:1",
                          "nodeType": "YulFunctionCall",
                          "src": "12743:17:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "12766:4:1",
                              "nodeType": "YulIdentifier",
                              "src": "12766:4:1"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "12772:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "12772:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "12762:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "12762:3:1"
                          },
                          "nativeSrc": "12762:20:1",
                          "nodeType": "YulFunctionCall",
                          "src": "12762:20:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "12736:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "12736:6:1"
                      },
                      "nativeSrc": "12736:47:1",
                      "nodeType": "YulFunctionCall",
                      "src": "12736:47:1"
                    },
                    "nativeSrc": "12736:47:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "12736:47:1"
                  },
                  {
                    "nativeSrc": "12792:139:1",
                    "nodeType": "YulAssignment",
                    "src": "12792:139:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nativeSrc": "12926:4:1",
                          "nodeType": "YulIdentifier",
                          "src": "12926:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_10d25bf89d7180db683c670a203e0a5c32f506aa6852f6f488ab9eec754851e9_to_t_string_memory_ptr_fromStack",
                        "nativeSrc": "12800:124:1",
                        "nodeType": "YulIdentifier",
                        "src": "12800:124:1"
                      },
                      "nativeSrc": "12800:131:1",
                      "nodeType": "YulFunctionCall",
                      "src": "12800:131:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "12792:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "12792:4:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_10d25bf89d7180db683c670a203e0a5c32f506aa6852f6f488ab9eec754851e9__to_t_string_memory_ptr__fromStack_reversed",
              "nativeSrc": "12519:419:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "12670:9:1",
                  "nodeType": "YulTypedName",
                  "src": "12670:9:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "12685:4:1",
                  "nodeType": "YulTypedName",
                  "src": "12685:4:1",
                  "type": ""
                }
              ],
              "src": "12519:419:1"
            },
            {
              "body": {
                "nativeSrc": "13050:134:1",
                "nodeType": "YulBlock",
                "src": "13050:134:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "13072:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "13072:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "13080:1:1",
                              "nodeType": "YulLiteral",
                              "src": "13080:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "13068:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "13068:3:1"
                          },
                          "nativeSrc": "13068:14:1",
                          "nodeType": "YulFunctionCall",
                          "src": "13068:14:1"
                        },
                        {
                          "hexValue": "546f6b656e4469737472696275746f723a20696e73756666696369656e742074",
                          "kind": "string",
                          "nativeSrc": "13084:34:1",
                          "nodeType": "YulLiteral",
                          "src": "13084:34:1",
                          "type": "",
                          "value": "TokenDistributor: insufficient t"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "13061:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "13061:6:1"
                      },
                      "nativeSrc": "13061:58:1",
                      "nodeType": "YulFunctionCall",
                      "src": "13061:58:1"
                    },
                    "nativeSrc": "13061:58:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "13061:58:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "13140:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "13140:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "13148:2:1",
                              "nodeType": "YulLiteral",
                              "src": "13148:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "13136:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "13136:3:1"
                          },
                          "nativeSrc": "13136:15:1",
                          "nodeType": "YulFunctionCall",
                          "src": "13136:15:1"
                        },
                        {
                          "hexValue": "6f6b656e7320696e2074686520636f6e7472616374",
                          "kind": "string",
                          "nativeSrc": "13153:23:1",
                          "nodeType": "YulLiteral",
                          "src": "13153:23:1",
                          "type": "",
                          "value": "okens in the contract"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "13129:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "13129:6:1"
                      },
                      "nativeSrc": "13129:48:1",
                      "nodeType": "YulFunctionCall",
                      "src": "13129:48:1"
                    },
                    "nativeSrc": "13129:48:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "13129:48:1"
                  }
                ]
              },
              "name": "store_literal_in_memory_d152202eca8f55f5be1c54afa72c22cffdccb761976d9fd223e0b1838f5324f1",
              "nativeSrc": "12944:240:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nativeSrc": "13042:6:1",
                  "nodeType": "YulTypedName",
                  "src": "13042:6:1",
                  "type": ""
                }
              ],
              "src": "12944:240:1"
            },
            {
              "body": {
                "nativeSrc": "13336:220:1",
                "nodeType": "YulBlock",
                "src": "13336:220:1",
                "statements": [
                  {
                    "nativeSrc": "13346:74:1",
                    "nodeType": "YulAssignment",
                    "src": "13346:74:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "13412:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "13412:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "13417:2:1",
                          "nodeType": "YulLiteral",
                          "src": "13417:2:1",
                          "type": "",
                          "value": "53"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nativeSrc": "13353:58:1",
                        "nodeType": "YulIdentifier",
                        "src": "13353:58:1"
                      },
                      "nativeSrc": "13353:67:1",
                      "nodeType": "YulFunctionCall",
                      "src": "13353:67:1"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nativeSrc": "13346:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "13346:3:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "13518:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "13518:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_d152202eca8f55f5be1c54afa72c22cffdccb761976d9fd223e0b1838f5324f1",
                        "nativeSrc": "13429:88:1",
                        "nodeType": "YulIdentifier",
                        "src": "13429:88:1"
                      },
                      "nativeSrc": "13429:93:1",
                      "nodeType": "YulFunctionCall",
                      "src": "13429:93:1"
                    },
                    "nativeSrc": "13429:93:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "13429:93:1"
                  },
                  {
                    "nativeSrc": "13531:19:1",
                    "nodeType": "YulAssignment",
                    "src": "13531:19:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "13542:3:1",
                          "nodeType": "YulIdentifier",
                          "src": "13542:3:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "13547:2:1",
                          "nodeType": "YulLiteral",
                          "src": "13547:2:1",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "13538:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "13538:3:1"
                      },
                      "nativeSrc": "13538:12:1",
                      "nodeType": "YulFunctionCall",
                      "src": "13538:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nativeSrc": "13531:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "13531:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_d152202eca8f55f5be1c54afa72c22cffdccb761976d9fd223e0b1838f5324f1_to_t_string_memory_ptr_fromStack",
              "nativeSrc": "13190:366:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "13324:3:1",
                  "nodeType": "YulTypedName",
                  "src": "13324:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nativeSrc": "13332:3:1",
                  "nodeType": "YulTypedName",
                  "src": "13332:3:1",
                  "type": ""
                }
              ],
              "src": "13190:366:1"
            },
            {
              "body": {
                "nativeSrc": "13733:248:1",
                "nodeType": "YulBlock",
                "src": "13733:248:1",
                "statements": [
                  {
                    "nativeSrc": "13743:26:1",
                    "nodeType": "YulAssignment",
                    "src": "13743:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "13755:9:1",
                          "nodeType": "YulIdentifier",
                          "src": "13755:9:1"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "13766:2:1",
                          "nodeType": "YulLiteral",
                          "src": "13766:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "13751:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "13751:3:1"
                      },
                      "nativeSrc": "13751:18:1",
                      "nodeType": "YulFunctionCall",
                      "src": "13751:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "13743:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "13743:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "13790:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "13790:9:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "13801:1:1",
                              "nodeType": "YulLiteral",
                              "src": "13801:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "13786:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "13786:3:1"
                          },
                          "nativeSrc": "13786:17:1",
                          "nodeType": "YulFunctionCall",
                          "src": "13786:17:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "13809:4:1",
                              "nodeType": "YulIdentifier",
                              "src": "13809:4:1"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "13815:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "13815:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "13805:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "13805:3:1"
                          },
                          "nativeSrc": "13805:20:1",
                          "nodeType": "YulFunctionCall",
                          "src": "13805:20:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "13779:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "13779:6:1"
                      },
                      "nativeSrc": "13779:47:1",
                      "nodeType": "YulFunctionCall",
                      "src": "13779:47:1"
                    },
                    "nativeSrc": "13779:47:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "13779:47:1"
                  },
                  {
                    "nativeSrc": "13835:139:1",
                    "nodeType": "YulAssignment",
                    "src": "13835:139:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nativeSrc": "13969:4:1",
                          "nodeType": "YulIdentifier",
                          "src": "13969:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_d152202eca8f55f5be1c54afa72c22cffdccb761976d9fd223e0b1838f5324f1_to_t_string_memory_ptr_fromStack",
                        "nativeSrc": "13843:124:1",
                        "nodeType": "YulIdentifier",
                        "src": "13843:124:1"
                      },
                      "nativeSrc": "13843:131:1",
                      "nodeType": "YulFunctionCall",
                      "src": "13843:131:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "13835:4:1",
                        "nodeType": "YulIdentifier",
                        "src": "13835:4:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_d152202eca8f55f5be1c54afa72c22cffdccb761976d9fd223e0b1838f5324f1__to_t_string_memory_ptr__fromStack_reversed",
              "nativeSrc": "13562:419:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "13713:9:1",
                  "nodeType": "YulTypedName",
                  "src": "13713:9:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "13728:4:1",
                  "nodeType": "YulTypedName",
                  "src": "13728:4:1",
                  "type": ""
                }
              ],
              "src": "13562:419:1"
            },
            {
              "body": {
                "nativeSrc": "14035:362:1",
                "nodeType": "YulBlock",
                "src": "14035:362:1",
                "statements": [
                  {
                    "nativeSrc": "14045:25:1",
                    "nodeType": "YulAssignment",
                    "src": "14045:25:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nativeSrc": "14068:1:1",
                          "nodeType": "YulIdentifier",
                          "src": "14068:1:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nativeSrc": "14050:17:1",
                        "nodeType": "YulIdentifier",
                        "src": "14050:17:1"
                      },
                      "nativeSrc": "14050:20:1",
                      "nodeType": "YulFunctionCall",
                      "src": "14050:20:1"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nativeSrc": "14045:1:1",
                        "nodeType": "YulIdentifier",
                        "src": "14045:1:1"
                      }
                    ]
                  },
                  {
                    "nativeSrc": "14079:25:1",
                    "nodeType": "YulAssignment",
                    "src": "14079:25:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nativeSrc": "14102:1:1",
                          "nodeType": "YulIdentifier",
                          "src": "14102:1:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nativeSrc": "14084:17:1",
                        "nodeType": "YulIdentifier",
                        "src": "14084:17:1"
                      },
                      "nativeSrc": "14084:20:1",
                      "nodeType": "YulFunctionCall",
                      "src": "14084:20:1"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nativeSrc": "14079:1:1",
                        "nodeType": "YulIdentifier",
                        "src": "14079:1:1"
                      }
                    ]
                  },
                  {
                    "nativeSrc": "14113:28:1",
                    "nodeType": "YulVariableDeclaration",
                    "src": "14113:28:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nativeSrc": "14136:1:1",
                          "nodeType": "YulIdentifier",
                          "src": "14136:1:1"
                        },
                        {
                          "name": "y",
                          "nativeSrc": "14139:1:1",
                          "nodeType": "YulIdentifier",
                          "src": "14139:1:1"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nativeSrc": "14132:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "14132:3:1"
                      },
                      "nativeSrc": "14132:9:1",
                      "nodeType": "YulFunctionCall",
                      "src": "14132:9:1"
                    },
                    "variables": [
                      {
                        "name": "product_raw",
                        "nativeSrc": "14117:11:1",
                        "nodeType": "YulTypedName",
                        "src": "14117:11:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nativeSrc": "14150:41:1",
                    "nodeType": "YulAssignment",
                    "src": "14150:41:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "product_raw",
                          "nativeSrc": "14179:11:1",
                          "nodeType": "YulIdentifier",
                          "src": "14179:11:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nativeSrc": "14161:17:1",
                        "nodeType": "YulIdentifier",
                        "src": "14161:17:1"
                      },
                      "nativeSrc": "14161:30:1",
                      "nodeType": "YulFunctionCall",
                      "src": "14161:30:1"
                    },
                    "variableNames": [
                      {
                        "name": "product",
                        "nativeSrc": "14150:7:1",
                        "nodeType": "YulIdentifier",
                        "src": "14150:7:1"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nativeSrc": "14368:22:1",
                      "nodeType": "YulBlock",
                      "src": "14368:22:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nativeSrc": "14370:16:1",
                              "nodeType": "YulIdentifier",
                              "src": "14370:16:1"
                            },
                            "nativeSrc": "14370:18:1",
                            "nodeType": "YulFunctionCall",
                            "src": "14370:18:1"
                          },
                          "nativeSrc": "14370:18:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "14370:18:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nativeSrc": "14301:1:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "14301:1:1"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nativeSrc": "14294:6:1",
                                "nodeType": "YulIdentifier",
                                "src": "14294:6:1"
                              },
                              "nativeSrc": "14294:9:1",
                              "nodeType": "YulFunctionCall",
                              "src": "14294:9:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "y",
                                  "nativeSrc": "14324:1:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "14324:1:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "product",
                                      "nativeSrc": "14331:7:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "14331:7:1"
                                    },
                                    {
                                      "name": "x",
                                      "nativeSrc": "14340:1:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "14340:1:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nativeSrc": "14327:3:1",
                                    "nodeType": "YulIdentifier",
                                    "src": "14327:3:1"
                                  },
                                  "nativeSrc": "14327:15:1",
                                  "nodeType": "YulFunctionCall",
                                  "src": "14327:15:1"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nativeSrc": "14321:2:1",
                                "nodeType": "YulIdentifier",
                                "src": "14321:2:1"
                              },
                              "nativeSrc": "14321:22:1",
                              "nodeType": "YulFunctionCall",
                              "src": "14321:22:1"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nativeSrc": "14274:2:1",
                            "nodeType": "YulIdentifier",
                            "src": "14274:2:1"
                          },
                          "nativeSrc": "14274:83:1",
                          "nodeType": "YulFunctionCall",
                          "src": "14274:83:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nativeSrc": "14254:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "14254:6:1"
                      },
                      "nativeSrc": "14254:113:1",
                      "nodeType": "YulFunctionCall",
                      "src": "14254:113:1"
                    },
                    "nativeSrc": "14251:139:1",
                    "nodeType": "YulIf",
                    "src": "14251:139:1"
                  }
                ]
              },
              "name": "checked_mul_t_uint256",
              "nativeSrc": "13987:410:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nativeSrc": "14018:1:1",
                  "nodeType": "YulTypedName",
                  "src": "14018:1:1",
                  "type": ""
                },
                {
                  "name": "y",
                  "nativeSrc": "14021:1:1",
                  "nodeType": "YulTypedName",
                  "src": "14021:1:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "product",
                  "nativeSrc": "14027:7:1",
                  "nodeType": "YulTypedName",
                  "src": "14027:7:1",
                  "type": ""
                }
              ],
              "src": "13987:410:1"
            },
            {
              "body": {
                "nativeSrc": "14431:152:1",
                "nodeType": "YulBlock",
                "src": "14431:152:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "14448:1:1",
                          "nodeType": "YulLiteral",
                          "src": "14448:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "14451:77:1",
                          "nodeType": "YulLiteral",
                          "src": "14451:77:1",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "14441:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "14441:6:1"
                      },
                      "nativeSrc": "14441:88:1",
                      "nodeType": "YulFunctionCall",
                      "src": "14441:88:1"
                    },
                    "nativeSrc": "14441:88:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "14441:88:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "14545:1:1",
                          "nodeType": "YulLiteral",
                          "src": "14545:1:1",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "14548:4:1",
                          "nodeType": "YulLiteral",
                          "src": "14548:4:1",
                          "type": "",
                          "value": "0x12"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "14538:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "14538:6:1"
                      },
                      "nativeSrc": "14538:15:1",
                      "nodeType": "YulFunctionCall",
                      "src": "14538:15:1"
                    },
                    "nativeSrc": "14538:15:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "14538:15:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "14569:1:1",
                          "nodeType": "YulLiteral",
                          "src": "14569:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "14572:4:1",
                          "nodeType": "YulLiteral",
                          "src": "14572:4:1",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nativeSrc": "14562:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "14562:6:1"
                      },
                      "nativeSrc": "14562:15:1",
                      "nodeType": "YulFunctionCall",
                      "src": "14562:15:1"
                    },
                    "nativeSrc": "14562:15:1",
                    "nodeType": "YulExpressionStatement",
                    "src": "14562:15:1"
                  }
                ]
              },
              "name": "panic_error_0x12",
              "nativeSrc": "14403:180:1",
              "nodeType": "YulFunctionDefinition",
              "src": "14403:180:1"
            },
            {
              "body": {
                "nativeSrc": "14631:143:1",
                "nodeType": "YulBlock",
                "src": "14631:143:1",
                "statements": [
                  {
                    "nativeSrc": "14641:25:1",
                    "nodeType": "YulAssignment",
                    "src": "14641:25:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nativeSrc": "14664:1:1",
                          "nodeType": "YulIdentifier",
                          "src": "14664:1:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nativeSrc": "14646:17:1",
                        "nodeType": "YulIdentifier",
                        "src": "14646:17:1"
                      },
                      "nativeSrc": "14646:20:1",
                      "nodeType": "YulFunctionCall",
                      "src": "14646:20:1"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nativeSrc": "14641:1:1",
                        "nodeType": "YulIdentifier",
                        "src": "14641:1:1"
                      }
                    ]
                  },
                  {
                    "nativeSrc": "14675:25:1",
                    "nodeType": "YulAssignment",
                    "src": "14675:25:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nativeSrc": "14698:1:1",
                          "nodeType": "YulIdentifier",
                          "src": "14698:1:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nativeSrc": "14680:17:1",
                        "nodeType": "YulIdentifier",
                        "src": "14680:17:1"
                      },
                      "nativeSrc": "14680:20:1",
                      "nodeType": "YulFunctionCall",
                      "src": "14680:20:1"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nativeSrc": "14675:1:1",
                        "nodeType": "YulIdentifier",
                        "src": "14675:1:1"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nativeSrc": "14722:22:1",
                      "nodeType": "YulBlock",
                      "src": "14722:22:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x12",
                              "nativeSrc": "14724:16:1",
                              "nodeType": "YulIdentifier",
                              "src": "14724:16:1"
                            },
                            "nativeSrc": "14724:18:1",
                            "nodeType": "YulFunctionCall",
                            "src": "14724:18:1"
                          },
                          "nativeSrc": "14724:18:1",
                          "nodeType": "YulExpressionStatement",
                          "src": "14724:18:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "y",
                          "nativeSrc": "14719:1:1",
                          "nodeType": "YulIdentifier",
                          "src": "14719:1:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nativeSrc": "14712:6:1",
                        "nodeType": "YulIdentifier",
                        "src": "14712:6:1"
                      },
                      "nativeSrc": "14712:9:1",
                      "nodeType": "YulFunctionCall",
                      "src": "14712:9:1"
                    },
                    "nativeSrc": "14709:35:1",
                    "nodeType": "YulIf",
                    "src": "14709:35:1"
                  },
                  {
                    "nativeSrc": "14754:14:1",
                    "nodeType": "YulAssignment",
                    "src": "14754:14:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nativeSrc": "14763:1:1",
                          "nodeType": "YulIdentifier",
                          "src": "14763:1:1"
                        },
                        {
                          "name": "y",
                          "nativeSrc": "14766:1:1",
                          "nodeType": "YulIdentifier",
                          "src": "14766:1:1"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nativeSrc": "14759:3:1",
                        "nodeType": "YulIdentifier",
                        "src": "14759:3:1"
                      },
                      "nativeSrc": "14759:9:1",
                      "nodeType": "YulFunctionCall",
                      "src": "14759:9:1"
                    },
                    "variableNames": [
                      {
                        "name": "r",
                        "nativeSrc": "14754:1:1",
                        "nodeType": "YulIdentifier",
                        "src": "14754:1:1"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_div_t_uint256",
              "nativeSrc": "14589:185:1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nativeSrc": "14620:1:1",
                  "nodeType": "YulTypedName",
                  "src": "14620:1:1",
                  "type": ""
                },
                {
                  "name": "y",
                  "nativeSrc": "14623:1:1",
                  "nodeType": "YulTypedName",
                  "src": "14623:1:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "r",
                  "nativeSrc": "14629:1:1",
                  "nodeType": "YulTypedName",
                  "src": "14629:1:1",
                  "type": ""
                }
              ],
              "src": "14589:185:1"
            }
          ]
        },
        "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490() {\n        revert(0, 0)\n    }\n\n    function revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef() {\n        revert(0, 0)\n    }\n\n    // address[]\n    function abi_decode_t_array$_t_address_$dyn_calldata_ptr(offset, end) -> arrayPos, length {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        length := calldataload(offset)\n        if gt(length, 0xffffffffffffffff) { revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490() }\n        arrayPos := add(offset, 0x20)\n        if gt(add(arrayPos, mul(length, 0x20)), end) { revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef() }\n    }\n\n    // uint256[]\n    function abi_decode_t_array$_t_uint256_$dyn_calldata_ptr(offset, end) -> arrayPos, length {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        length := calldataload(offset)\n        if gt(length, 0xffffffffffffffff) { revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490() }\n        arrayPos := add(offset, 0x20)\n        if gt(add(arrayPos, mul(length, 0x20)), end) { revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef() }\n    }\n\n    function abi_decode_tuple_t_array$_t_address_$dyn_calldata_ptrt_array$_t_uint256_$dyn_calldata_ptr(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0, value1 := abi_decode_t_array$_t_address_$dyn_calldata_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value2, value3 := abi_decode_t_array$_t_uint256_$dyn_calldata_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_array$_t_address_$dyn_calldata_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0, value1 := abi_decode_t_array$_t_address_$dyn_calldata_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5(memPtr) {\n\n        mstore(add(memPtr, 0), \"Not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 13)\n        store_literal_in_memory_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_deea682d4069074ada130bb3e477b3debc52696f1d608cd33e7018e3e7cbf043(memPtr) {\n\n        mstore(add(memPtr, 0), \"TokenDistributor: addresses and \")\n\n        mstore(add(memPtr, 32), \"amounts length mismatch\")\n\n    }\n\n    function abi_encode_t_stringliteral_deea682d4069074ada130bb3e477b3debc52696f1d608cd33e7018e3e7cbf043_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 55)\n        store_literal_in_memory_deea682d4069074ada130bb3e477b3debc52696f1d608cd33e7018e3e7cbf043(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_deea682d4069074ada130bb3e477b3debc52696f1d608cd33e7018e3e7cbf043__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_deea682d4069074ada130bb3e477b3debc52696f1d608cd33e7018e3e7cbf043_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x32() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function store_literal_in_memory_a3d102c74b83e3fc99e9e4a8e08d6ba6b9e8cff509fdc4c91a762ff5c4bf13c5(memPtr) {\n\n        mstore(add(memPtr, 0), \"TokenDistributor: no tokens to r\")\n\n        mstore(add(memPtr, 32), \"eturn\")\n\n    }\n\n    function abi_encode_t_stringliteral_a3d102c74b83e3fc99e9e4a8e08d6ba6b9e8cff509fdc4c91a762ff5c4bf13c5_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_a3d102c74b83e3fc99e9e4a8e08d6ba6b9e8cff509fdc4c91a762ff5c4bf13c5(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_a3d102c74b83e3fc99e9e4a8e08d6ba6b9e8cff509fdc4c91a762ff5c4bf13c5__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_a3d102c74b83e3fc99e9e4a8e08d6ba6b9e8cff509fdc4c91a762ff5c4bf13c5_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bool_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bool_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function store_literal_in_memory_3f415129e2a0819b7377b039a5b879c223cd07c510ac2a7be70874e9657a5958(memPtr) {\n\n        mstore(add(memPtr, 0), \"TokenDistributor: tokens already\")\n\n        mstore(add(memPtr, 32), \" sent to this address\")\n\n    }\n\n    function abi_encode_t_stringliteral_3f415129e2a0819b7377b039a5b879c223cd07c510ac2a7be70874e9657a5958_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 53)\n        store_literal_in_memory_3f415129e2a0819b7377b039a5b879c223cd07c510ac2a7be70874e9657a5958(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_3f415129e2a0819b7377b039a5b879c223cd07c510ac2a7be70874e9657a5958__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_3f415129e2a0819b7377b039a5b879c223cd07c510ac2a7be70874e9657a5958_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_10d25bf89d7180db683c670a203e0a5c32f506aa6852f6f488ab9eec754851e9(memPtr) {\n\n        mstore(add(memPtr, 0), \"TokenDistributor: no tokens allo\")\n\n        mstore(add(memPtr, 32), \"cated to this address\")\n\n    }\n\n    function abi_encode_t_stringliteral_10d25bf89d7180db683c670a203e0a5c32f506aa6852f6f488ab9eec754851e9_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 53)\n        store_literal_in_memory_10d25bf89d7180db683c670a203e0a5c32f506aa6852f6f488ab9eec754851e9(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_10d25bf89d7180db683c670a203e0a5c32f506aa6852f6f488ab9eec754851e9__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_10d25bf89d7180db683c670a203e0a5c32f506aa6852f6f488ab9eec754851e9_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_d152202eca8f55f5be1c54afa72c22cffdccb761976d9fd223e0b1838f5324f1(memPtr) {\n\n        mstore(add(memPtr, 0), \"TokenDistributor: insufficient t\")\n\n        mstore(add(memPtr, 32), \"okens in the contract\")\n\n    }\n\n    function abi_encode_t_stringliteral_d152202eca8f55f5be1c54afa72c22cffdccb761976d9fd223e0b1838f5324f1_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 53)\n        store_literal_in_memory_d152202eca8f55f5be1c54afa72c22cffdccb761976d9fd223e0b1838f5324f1(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_d152202eca8f55f5be1c54afa72c22cffdccb761976d9fd223e0b1838f5324f1__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_d152202eca8f55f5be1c54afa72c22cffdccb761976d9fd223e0b1838f5324f1_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        let product_raw := mul(x, y)\n        product := cleanup_t_uint256(product_raw)\n\n        // overflow, if x != 0 and y != product/x\n        if iszero(\n            or(\n                iszero(x),\n                eq(y, div(product, x))\n            )\n        ) { panic_error_0x11() }\n\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n}\n",
        "id": 1,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "10440:2884:0:-:0;;;10776:213;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1818:1;1929:7;:22;;;;10853:1;10829:26;;:12;:26;;;10821:90;;;;;;;;;;;;:::i;:::-;;;;;;;;;10938:12;10922:6;;:29;;;;;;;;;;;;;;;;;;10971:10;10962:6;;:19;;;;;;;;;;;;;;;;;;10776:213;10440:2884;;88:117:1;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:351::-;915:6;964:2;952:9;943:7;939:23;935:32;932:119;;;970:79;;:::i;:::-;932:119;1090:1;1115:64;1171:7;1162:6;1151:9;1147:22;1115:64;:::i;:::-;1105:74;;1061:128;845:351;;;;:::o;1202:169::-;1286:11;1320:6;1315:3;1308:19;1360:4;1355:3;1351:14;1336:29;;1202:169;;;;:::o;1377:238::-;1517:34;1513:1;1505:6;1501:14;1494:58;1586:21;1581:2;1573:6;1569:15;1562:46;1377:238;:::o;1621:366::-;1763:3;1784:67;1848:2;1843:3;1784:67;:::i;:::-;1777:74;;1860:93;1949:3;1860:93;:::i;:::-;1978:2;1973:3;1969:12;1962:19;;1621:366;;;:::o;1993:419::-;2159:4;2197:2;2186:9;2182:18;2174:26;;2246:9;2240:4;2236:20;2232:1;2221:9;2217:17;2210:47;2274:131;2400:4;2274:131;:::i;:::-;2266:139;;1993:419;;;:::o;10440:2884:0:-;;;;;;;",
    "deployedSourceMap": "10440:2884:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11835:350;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;12999:120;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;11242:231;;;:::i;:::-;;11553:205;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;13198:123;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;12274:639;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;11058:111;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;11835:350;10724:6;;;;;;;;;;;10710:20;;:10;:20;;;10702:46;;;;;;;;;;;;:::i;:::-;;;;;;;;;11978:7:::1;;:14;;11958:9;;:16;;:34;11950:102;;;;;;;;;;;;:::i;:::-;;;;;;;;;12068:6;12063:115;12084:9;;:16;;12080:1;:20;12063:115;;;12156:7;;12164:1;12156:10;;;;;;;:::i;:::-;;;;;;;;12122:17;:31;12140:9;;12150:1;12140:12;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;12122:31;;;;;;;;;;;;;;;:44;;;;12102:3;;;;;:::i;:::-;;;;12063:115;;;;11835:350:::0;;;;:::o;12999:120::-;13063:4;13087:18;:24;13106:4;13087:24;;;;;;;;;;;;;;;;;;;;;;;;;13080:31;;12999:120;;;:::o;11242:231::-;10724:6;;;;;;;;;;;10710:20;;:10;:20;;;10702:46;;;;;;;;;;;;:::i;:::-;;;;;;;;;11301:15:::1;11319:6;;;;;;;;;;;:16;;;11344:4;11319:31;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;11301:49;;11379:1;11369:7;:11;11361:61;;;;;;;;;;;;:::i;:::-;;;;;;;;;11433:6;;;;;;;;;;;:15;;;11449:6;;;;;;;;;;;11457:7;11433:32;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;11290:183;11242:231::o:0;11553:205::-;10724:6;;;;;;;;;;;10710:20;;:10;:20;;;10702:46;;;;;;;;;;;;:::i;:::-;;;;;;;;;11645:6:::1;11640:111;11661:9;;:16;;11657:1;:20;11640:111;;;11734:5;11699:18;:32;11718:9;;11728:1;11718:12;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;11699:32;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;11679:3;;;;;:::i;:::-;;;;11640:111;;;;11553:205:::0;;:::o;13198:123::-;13263:7;13290:17;:23;13308:4;13290:23;;;;;;;;;;;;;;;;13283:30;;13198:123;;;:::o;12274:639::-;12346:18;:29;12365:9;12346:29;;;;;;;;;;;;;;;;;;;;;;;;;12345:30;12337:96;;;;;;;;;;;;:::i;:::-;;;;;;;;;12444:14;12461:17;:28;12479:9;12461:28;;;;;;;;;;;;;;;;12444:45;;12517:1;12508:6;:10;12500:76;;;;;;;;;;;;:::i;:::-;;;;;;;;;12630:6;12595;;;;;;;;;;;:16;;;12620:4;12595:31;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:41;;12587:107;;;;;;;;;;;;:::i;:::-;;;;;;;;;12707:20;12751:1;12740:7;12731:6;:16;;;;:::i;:::-;12730:22;;;;:::i;:::-;12707:45;;12850:4;12818:18;:29;12837:9;12818:29;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;;;;;;;12865:6;;;;;;;;;;;:15;;;12881:9;12892:12;12865:40;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;12326:587;;12274:639;:::o;11058:111::-;11103:7;11130:6;;;;;;;;;;;:16;;;11155:4;11130:31;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;11123:38;;11058:111;:::o;88:117:1:-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:117;566:1;563;556:12;580:117;689:1;686;679:12;720:568;793:8;803:6;853:3;846:4;838:6;834:17;830:27;820:122;;861:79;;:::i;:::-;820:122;974:6;961:20;951:30;;1004:18;996:6;993:30;990:117;;;1026:79;;:::i;:::-;990:117;1140:4;1132:6;1128:17;1116:29;;1194:3;1186:4;1178:6;1174:17;1164:8;1160:32;1157:41;1154:128;;;1201:79;;:::i;:::-;1154:128;720:568;;;;;:::o;1311:::-;1384:8;1394:6;1444:3;1437:4;1429:6;1425:17;1421:27;1411:122;;1452:79;;:::i;:::-;1411:122;1565:6;1552:20;1542:30;;1595:18;1587:6;1584:30;1581:117;;;1617:79;;:::i;:::-;1581:117;1731:4;1723:6;1719:17;1707:29;;1785:3;1777:4;1769:6;1765:17;1755:8;1751:32;1748:41;1745:128;;;1792:79;;:::i;:::-;1745:128;1311:568;;;;;:::o;1885:934::-;2007:6;2015;2023;2031;2080:2;2068:9;2059:7;2055:23;2051:32;2048:119;;;2086:79;;:::i;:::-;2048:119;2234:1;2223:9;2219:17;2206:31;2264:18;2256:6;2253:30;2250:117;;;2286:79;;:::i;:::-;2250:117;2399:80;2471:7;2462:6;2451:9;2447:22;2399:80;:::i;:::-;2381:98;;;;2177:312;2556:2;2545:9;2541:18;2528:32;2587:18;2579:6;2576:30;2573:117;;;2609:79;;:::i;:::-;2573:117;2722:80;2794:7;2785:6;2774:9;2770:22;2722:80;:::i;:::-;2704:98;;;;2499:313;1885:934;;;;;;;:::o;2825:126::-;2862:7;2902:42;2895:5;2891:54;2880:65;;2825:126;;;:::o;2957:96::-;2994:7;3023:24;3041:5;3023:24;:::i;:::-;3012:35;;2957:96;;;:::o;3059:122::-;3132:24;3150:5;3132:24;:::i;:::-;3125:5;3122:35;3112:63;;3171:1;3168;3161:12;3112:63;3059:122;:::o;3187:139::-;3233:5;3271:6;3258:20;3249:29;;3287:33;3314:5;3287:33;:::i;:::-;3187:139;;;;:::o;3332:329::-;3391:6;3440:2;3428:9;3419:7;3415:23;3411:32;3408:119;;;3446:79;;:::i;:::-;3408:119;3566:1;3591:53;3636:7;3627:6;3616:9;3612:22;3591:53;:::i;:::-;3581:63;;3537:117;3332:329;;;;:::o;3667:90::-;3701:7;3744:5;3737:13;3730:21;3719:32;;3667:90;;;:::o;3763:109::-;3844:21;3859:5;3844:21;:::i;:::-;3839:3;3832:34;3763:109;;:::o;3878:210::-;3965:4;4003:2;3992:9;3988:18;3980:26;;4016:65;4078:1;4067:9;4063:17;4054:6;4016:65;:::i;:::-;3878:210;;;;:::o;4094:559::-;4180:6;4188;4237:2;4225:9;4216:7;4212:23;4208:32;4205:119;;;4243:79;;:::i;:::-;4205:119;4391:1;4380:9;4376:17;4363:31;4421:18;4413:6;4410:30;4407:117;;;4443:79;;:::i;:::-;4407:117;4556:80;4628:7;4619:6;4608:9;4604:22;4556:80;:::i;:::-;4538:98;;;;4334:312;4094:559;;;;;:::o;4659:77::-;4696:7;4725:5;4714:16;;4659:77;;;:::o;4742:118::-;4829:24;4847:5;4829:24;:::i;:::-;4824:3;4817:37;4742:118;;:::o;4866:222::-;4959:4;4997:2;4986:9;4982:18;4974:26;;5010:71;5078:1;5067:9;5063:17;5054:6;5010:71;:::i;:::-;4866:222;;;;:::o;5094:169::-;5178:11;5212:6;5207:3;5200:19;5252:4;5247:3;5243:14;5228:29;;5094:169;;;;:::o;5269:163::-;5409:15;5405:1;5397:6;5393:14;5386:39;5269:163;:::o;5438:366::-;5580:3;5601:67;5665:2;5660:3;5601:67;:::i;:::-;5594:74;;5677:93;5766:3;5677:93;:::i;:::-;5795:2;5790:3;5786:12;5779:19;;5438:366;;;:::o;5810:419::-;5976:4;6014:2;6003:9;5999:18;5991:26;;6063:9;6057:4;6053:20;6049:1;6038:9;6034:17;6027:47;6091:131;6217:4;6091:131;:::i;:::-;6083:139;;5810:419;;;:::o;6235:242::-;6375:34;6371:1;6363:6;6359:14;6352:58;6444:25;6439:2;6431:6;6427:15;6420:50;6235:242;:::o;6483:366::-;6625:3;6646:67;6710:2;6705:3;6646:67;:::i;:::-;6639:74;;6722:93;6811:3;6722:93;:::i;:::-;6840:2;6835:3;6831:12;6824:19;;6483:366;;;:::o;6855:419::-;7021:4;7059:2;7048:9;7044:18;7036:26;;7108:9;7102:4;7098:20;7094:1;7083:9;7079:17;7072:47;7136:131;7262:4;7136:131;:::i;:::-;7128:139;;6855:419;;;:::o;7280:180::-;7328:77;7325:1;7318:88;7425:4;7422:1;7415:15;7449:4;7446:1;7439:15;7466:180;7514:77;7511:1;7504:88;7611:4;7608:1;7601:15;7635:4;7632:1;7625:15;7652:233;7691:3;7714:24;7732:5;7714:24;:::i;:::-;7705:33;;7760:66;7753:5;7750:77;7747:103;;7830:18;;:::i;:::-;7747:103;7877:1;7870:5;7866:13;7859:20;;7652:233;;;:::o;7891:118::-;7978:24;7996:5;7978:24;:::i;:::-;7973:3;7966:37;7891:118;;:::o;8015:222::-;8108:4;8146:2;8135:9;8131:18;8123:26;;8159:71;8227:1;8216:9;8212:17;8203:6;8159:71;:::i;:::-;8015:222;;;;:::o;8243:122::-;8316:24;8334:5;8316:24;:::i;:::-;8309:5;8306:35;8296:63;;8355:1;8352;8345:12;8296:63;8243:122;:::o;8371:143::-;8428:5;8459:6;8453:13;8444:22;;8475:33;8502:5;8475:33;:::i;:::-;8371:143;;;;:::o;8520:351::-;8590:6;8639:2;8627:9;8618:7;8614:23;8610:32;8607:119;;;8645:79;;:::i;:::-;8607:119;8765:1;8790:64;8846:7;8837:6;8826:9;8822:22;8790:64;:::i;:::-;8780:74;;8736:128;8520:351;;;;:::o;8877:224::-;9017:34;9013:1;9005:6;9001:14;8994:58;9086:7;9081:2;9073:6;9069:15;9062:32;8877:224;:::o;9107:366::-;9249:3;9270:67;9334:2;9329:3;9270:67;:::i;:::-;9263:74;;9346:93;9435:3;9346:93;:::i;:::-;9464:2;9459:3;9455:12;9448:19;;9107:366;;;:::o;9479:419::-;9645:4;9683:2;9672:9;9668:18;9660:26;;9732:9;9726:4;9722:20;9718:1;9707:9;9703:17;9696:47;9760:131;9886:4;9760:131;:::i;:::-;9752:139;;9479:419;;;:::o;9904:332::-;10025:4;10063:2;10052:9;10048:18;10040:26;;10076:71;10144:1;10133:9;10129:17;10120:6;10076:71;:::i;:::-;10157:72;10225:2;10214:9;10210:18;10201:6;10157:72;:::i;:::-;9904:332;;;;;:::o;10242:116::-;10312:21;10327:5;10312:21;:::i;:::-;10305:5;10302:32;10292:60;;10348:1;10345;10338:12;10292:60;10242:116;:::o;10364:137::-;10418:5;10449:6;10443:13;10434:22;;10465:30;10489:5;10465:30;:::i;:::-;10364:137;;;;:::o;10507:345::-;10574:6;10623:2;10611:9;10602:7;10598:23;10594:32;10591:119;;;10629:79;;:::i;:::-;10591:119;10749:1;10774:61;10827:7;10818:6;10807:9;10803:22;10774:61;:::i;:::-;10764:71;;10720:125;10507:345;;;;:::o;10858:240::-;10998:34;10994:1;10986:6;10982:14;10975:58;11067:23;11062:2;11054:6;11050:15;11043:48;10858:240;:::o;11104:366::-;11246:3;11267:67;11331:2;11326:3;11267:67;:::i;:::-;11260:74;;11343:93;11432:3;11343:93;:::i;:::-;11461:2;11456:3;11452:12;11445:19;;11104:366;;;:::o;11476:419::-;11642:4;11680:2;11669:9;11665:18;11657:26;;11729:9;11723:4;11719:20;11715:1;11704:9;11700:17;11693:47;11757:131;11883:4;11757:131;:::i;:::-;11749:139;;11476:419;;;:::o;11901:240::-;12041:34;12037:1;12029:6;12025:14;12018:58;12110:23;12105:2;12097:6;12093:15;12086:48;11901:240;:::o;12147:366::-;12289:3;12310:67;12374:2;12369:3;12310:67;:::i;:::-;12303:74;;12386:93;12475:3;12386:93;:::i;:::-;12504:2;12499:3;12495:12;12488:19;;12147:366;;;:::o;12519:419::-;12685:4;12723:2;12712:9;12708:18;12700:26;;12772:9;12766:4;12762:20;12758:1;12747:9;12743:17;12736:47;12800:131;12926:4;12800:131;:::i;:::-;12792:139;;12519:419;;;:::o;12944:240::-;13084:34;13080:1;13072:6;13068:14;13061:58;13153:23;13148:2;13140:6;13136:15;13129:48;12944:240;:::o;13190:366::-;13332:3;13353:67;13417:2;13412:3;13353:67;:::i;:::-;13346:74;;13429:93;13518:3;13429:93;:::i;:::-;13547:2;13542:3;13538:12;13531:19;;13190:366;;;:::o;13562:419::-;13728:4;13766:2;13755:9;13751:18;13743:26;;13815:9;13809:4;13805:20;13801:1;13790:9;13786:17;13779:47;13843:131;13969:4;13843:131;:::i;:::-;13835:139;;13562:419;;;:::o;13987:410::-;14027:7;14050:20;14068:1;14050:20;:::i;:::-;14045:25;;14084:20;14102:1;14084:20;:::i;:::-;14079:25;;14139:1;14136;14132:9;14161:30;14179:11;14161:30;:::i;:::-;14150:41;;14340:1;14331:7;14327:15;14324:1;14321:22;14301:1;14294:9;14274:83;14251:139;;14370:18;;:::i;:::-;14251:139;14035:362;13987:410;;;;:::o;14403:180::-;14451:77;14448:1;14441:88;14548:4;14545:1;14538:15;14572:4;14569:1;14562:15;14589:185;14629:1;14646:20;14664:1;14646:20;:::i;:::-;14641:25;;14680:20;14698:1;14680:20;:::i;:::-;14675:25;;14719:1;14709:35;;14724:18;;:::i;:::-;14709:35;14766:1;14763;14759:9;14754:14;;14589:185;;;;:::o",
    "source": "// SPDX-License-Identifier: MIT\r\n\r\n// File: @openzeppelin/contracts/security/ReentrancyGuard.sol\r\n\r\n\r\n// OpenZeppelin Contracts (last updated v4.9.0) (security/ReentrancyGuard.sol)\r\n\r\npragma solidity ^0.8.0;\r\n\r\n/**\r\n * @dev Contract module that helps prevent reentrant calls to a function.\r\n *\r\n * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\r\n * available, which can be applied to functions to make sure there are no nested\r\n * (reentrant) calls to them.\r\n *\r\n * Note that because there is a single `nonReentrant` guard, functions marked as\r\n * `nonReentrant` may not call one another. This can be worked around by making\r\n * those functions `private`, and then adding `external` `nonReentrant` entry\r\n * points to them.\r\n *\r\n * TIP: If you would like to learn more about reentrancy and alternative ways\r\n * to protect against it, check out our blog post\r\n * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\r\n */\r\nabstract contract ReentrancyGuard {\r\n    // Booleans are more expensive than uint256 or any type that takes up a full\r\n    // word because each write operation emits an extra SLOAD to first read the\r\n    // slot's contents, replace the bits taken up by the boolean, and then write\r\n    // back. This is the compiler's defense against contract upgrades and\r\n    // pointer aliasing, and it cannot be disabled.\r\n\r\n    // The values being non-zero value makes deployment a bit more expensive,\r\n    // but in exchange the refund on every call to nonReentrant will be lower in\r\n    // amount. Since refunds are capped to a percentage of the total\r\n    // transaction's gas, it is best to keep them low in cases like this one, to\r\n    // increase the likelihood of the full refund coming into effect.\r\n    uint256 private constant _NOT_ENTERED = 1;\r\n    uint256 private constant _ENTERED = 2;\r\n\r\n    uint256 private _status;\r\n\r\n    constructor() {\r\n        _status = _NOT_ENTERED;\r\n    }\r\n\r\n    /**\r\n     * @dev Prevents a contract from calling itself, directly or indirectly.\r\n     * Calling a `nonReentrant` function from another `nonReentrant`\r\n     * function is not supported. It is possible to prevent this from happening\r\n     * by making the `nonReentrant` function external, and making it call a\r\n     * `private` function that does the actual work.\r\n     */\r\n    modifier nonReentrant() {\r\n        _nonReentrantBefore();\r\n        _;\r\n        _nonReentrantAfter();\r\n    }\r\n\r\n    function _nonReentrantBefore() private {\r\n        // On the first call to nonReentrant, _status will be _NOT_ENTERED\r\n        require(_status != _ENTERED, \"ReentrancyGuard: reentrant call\");\r\n\r\n        // Any calls to nonReentrant after this point will fail\r\n        _status = _ENTERED;\r\n    }\r\n\r\n    function _nonReentrantAfter() private {\r\n        // By storing the original value once again, a refund is triggered (see\r\n        // https://eips.ethereum.org/EIPS/eip-2200)\r\n        _status = _NOT_ENTERED;\r\n    }\r\n\r\n    /**\r\n     * @dev Returns true if the reentrancy guard is currently set to \"entered\", which indicates there is a\r\n     * `nonReentrant` function in the call stack.\r\n     */\r\n    function _reentrancyGuardEntered() internal view returns (bool) {\r\n        return _status == _ENTERED;\r\n    }\r\n}\r\n\r\n// File: @openzeppelin/contracts/utils/Context.sol\r\n\r\n\r\n// OpenZeppelin Contracts (last updated v5.0.1) (utils/Context.sol)\r\n\r\npragma solidity ^0.8.20;\r\n\r\n/**\r\n * @dev Provides information about the current execution context, including the\r\n * sender of the transaction and its data. While these are generally available\r\n * via msg.sender and msg.data, they should not be accessed in such a direct\r\n * manner, since when dealing with meta-transactions the account sending and\r\n * paying for execution may not be the actual sender (as far as an application\r\n * is concerned).\r\n *\r\n * This contract is only required for intermediate, library-like contracts.\r\n */\r\nabstract contract Context {\r\n    function _msgSender() internal view virtual returns (address) {\r\n        return msg.sender;\r\n    }\r\n\r\n    function _msgData() internal view virtual returns (bytes calldata) {\r\n        return msg.data;\r\n    }\r\n\r\n    function _contextSuffixLength() internal view virtual returns (uint256) {\r\n        return 0;\r\n    }\r\n}\r\n\r\n// File: @openzeppelin/contracts/access/Ownable.sol\r\n\r\n\r\n// OpenZeppelin Contracts (last updated v5.0.0) (access/Ownable.sol)\r\n\r\npragma solidity ^0.8.20;\r\n\r\n\r\n/**\r\n * @dev Contract module which provides a basic access control mechanism, where\r\n * there is an account (an owner) that can be granted exclusive access to\r\n * specific functions.\r\n *\r\n * The initial owner is set to the address provided by the deployer. This can\r\n * later be changed with {transferOwnership}.\r\n *\r\n * This module is used through inheritance. It will make available the modifier\r\n * `onlyOwner`, which can be applied to your functions to restrict their use to\r\n * the owner.\r\n */\r\nabstract contract Ownable is Context {\r\n    address private _owner;\r\n\r\n    /**\r\n     * @dev The caller account is not authorized to perform an operation.\r\n     */\r\n    error OwnableUnauthorizedAccount(address account);\r\n\r\n    /**\r\n     * @dev The owner is not a valid owner account. (eg. `address(0)`)\r\n     */\r\n    error OwnableInvalidOwner(address owner);\r\n\r\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\r\n\r\n    /**\r\n     * @dev Initializes the contract setting the address provided by the deployer as the initial owner.\r\n     */\r\n    constructor(address initialOwner) {\r\n        if (initialOwner == address(0)) {\r\n            revert OwnableInvalidOwner(address(0));\r\n        }\r\n        _transferOwnership(initialOwner);\r\n    }\r\n\r\n    /**\r\n     * @dev Throws if called by any account other than the owner.\r\n     */\r\n    modifier onlyOwner() {\r\n        _checkOwner();\r\n        _;\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the address of the current owner.\r\n     */\r\n    function owner() public view virtual returns (address) {\r\n        return _owner;\r\n    }\r\n\r\n    /**\r\n     * @dev Throws if the sender is not the owner.\r\n     */\r\n    function _checkOwner() internal view virtual {\r\n        if (owner() != _msgSender()) {\r\n            revert OwnableUnauthorizedAccount(_msgSender());\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @dev Leaves the contract without owner. It will not be possible to call\r\n     * `onlyOwner` functions. Can only be called by the current owner.\r\n     *\r\n     * NOTE: Renouncing ownership will leave the contract without an owner,\r\n     * thereby disabling any functionality that is only available to the owner.\r\n     */\r\n    function renounceOwnership() public virtual onlyOwner {\r\n        _transferOwnership(address(0));\r\n    }\r\n\r\n    /**\r\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\r\n     * Can only be called by the current owner.\r\n     */\r\n    function transferOwnership(address newOwner) public virtual onlyOwner {\r\n        if (newOwner == address(0)) {\r\n            revert OwnableInvalidOwner(address(0));\r\n        }\r\n        _transferOwnership(newOwner);\r\n    }\r\n\r\n    /**\r\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\r\n     * Internal function without access restriction.\r\n     */\r\n    function _transferOwnership(address newOwner) internal virtual {\r\n        address oldOwner = _owner;\r\n        _owner = newOwner;\r\n        emit OwnershipTransferred(oldOwner, newOwner);\r\n    }\r\n}\r\n\r\n// File: @openzeppelin/contracts/token/ERC20/IERC20.sol\r\n\r\n\r\n// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/IERC20.sol)\r\n\r\npragma solidity ^0.8.20;\r\n\r\n/**\r\n * @dev Interface of the ERC20 standard as defined in the EIP.\r\n */\r\ninterface IERC20 {\r\n    /**\r\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\r\n     * another (`to`).\r\n     *\r\n     * Note that `value` may be zero.\r\n     */\r\n    event Transfer(address indexed from, address indexed to, uint256 value);\r\n\r\n    /**\r\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\r\n     * a call to {approve}. `value` is the new allowance.\r\n     */\r\n    event Approval(address indexed owner, address indexed spender, uint256 value);\r\n\r\n    /**\r\n     * @dev Returns the value of tokens in existence.\r\n     */\r\n    function totalSupply() external view returns (uint256);\r\n\r\n    /**\r\n     * @dev Returns the value of tokens owned by `account`.\r\n     */\r\n    function balanceOf(address account) external view returns (uint256);\r\n\r\n    /**\r\n     * @dev Moves a `value` amount of tokens from the caller's account to `to`.\r\n     *\r\n     * Returns a boolean value indicating whether the operation succeeded.\r\n     *\r\n     * Emits a {Transfer} event.\r\n     */\r\n    function transfer(address to, uint256 value) external returns (bool);\r\n\r\n    /**\r\n     * @dev Returns the remaining number of tokens that `spender` will be\r\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\r\n     * zero by default.\r\n     *\r\n     * This value changes when {approve} or {transferFrom} are called.\r\n     */\r\n    function allowance(address owner, address spender) external view returns (uint256);\r\n\r\n    /**\r\n     * @dev Sets a `value` amount of tokens as the allowance of `spender` over the\r\n     * caller's tokens.\r\n     *\r\n     * Returns a boolean value indicating whether the operation succeeded.\r\n     *\r\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\r\n     * that someone may use both the old and the new allowance by unfortunate\r\n     * transaction ordering. One possible solution to mitigate this race\r\n     * condition is to first reduce the spender's allowance to 0 and set the\r\n     * desired value afterwards:\r\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\r\n     *\r\n     * Emits an {Approval} event.\r\n     */\r\n    function approve(address spender, uint256 value) external returns (bool);\r\n\r\n    /**\r\n     * @dev Moves a `value` amount of tokens from `from` to `to` using the\r\n     * allowance mechanism. `value` is then deducted from the caller's\r\n     * allowance.\r\n     *\r\n     * Returns a boolean value indicating whether the operation succeeded.\r\n     *\r\n     * Emits a {Transfer} event.\r\n     */\r\n    function transferFrom(address from, address to, uint256 value) external returns (bool);\r\n}\r\n\r\n// File: BSCClaimApp/TokenDistributor.sol\r\n\r\n\r\npragma solidity ^0.8.0;\r\n\r\n\r\n\r\n\r\ncontract TokenDistributor is ReentrancyGuard{\r\n    IERC20 private _token;\r\n    address private _owner;\r\n\r\n    mapping(address => bool) private _hasReceivedTokens;\r\n    mapping(address => uint256) private _tokenAllocations;\r\n\r\n    modifier onlyOwner() {\r\n        require(msg.sender == _owner, \"Not the owner\");\r\n        _;\r\n    }\r\n\r\n    constructor(address tokenAddress) {\r\n        require(tokenAddress != address(0), \"TokenDistributor: token address is the zero address\");\r\n        _token = IERC20(tokenAddress);\r\n        _owner = msg.sender;\r\n    }\r\n\r\n    // Function to check the token balance of this contract\r\n    function checkBalance() public view returns (uint256) {\r\n        return _token.balanceOf(address(this));\r\n    }\r\n\r\n    // Only owner can call to send all tokens back to the owner\r\n    function returnTokensToOwner() public onlyOwner {\r\n        uint256 balance = _token.balanceOf(address(this));\r\n        require(balance > 0, \"TokenDistributor: no tokens to return\");\r\n        _token.transfer(_owner, balance);\r\n    }\r\n\r\n    // Only owner can reset the received status of a list of addresses\r\n    function resetReceivedStatus(address[] calldata addresses) public onlyOwner {\r\n        for (uint i = 0; i < addresses.length; i++) {\r\n            _hasReceivedTokens[addresses[i]] = false;\r\n        }\r\n    }\r\n\r\n    // Only owner can set token allocations for a list of addresses\r\n    function setTokenAllocations(address[] calldata addresses, uint256[] calldata amounts) public onlyOwner {\r\n        require(addresses.length == amounts.length, \"TokenDistributor: addresses and amounts length mismatch\");\r\n        for (uint i = 0; i < addresses.length; i++) {\r\n            _tokenAllocations[addresses[i]] = amounts[i];\r\n        }\r\n    }\r\n\r\n    // Function to distribute tokens to an address if they haven't received yet\r\n    function distributeTokens(address recipient) public {\r\n        require(!_hasReceivedTokens[recipient], \"TokenDistributor: tokens already sent to this address\");\r\n        uint256 amount = _tokenAllocations[recipient];\r\n        require(amount > 0, \"TokenDistributor: no tokens allocated to this address\");\r\n        require(_token.balanceOf(address(this)) >= amount, \"TokenDistributor: insufficient tokens in the contract\");\r\n\r\n        uint256 amountToSend = (amount * 1 ether) / 6;  // Dividing the amount by six and converting to wei\r\n\r\n        _hasReceivedTokens[recipient] = true;\r\n        _token.transfer(recipient, amountToSend);\r\n    }\r\n\r\n    // External function to check if tokens have been received by an address\r\n    function hasReceivedTokens(address addr) external view returns (bool) {\r\n        return _hasReceivedTokens[addr];\r\n    }\r\n\r\n    // External function to check the token allocation for an address\r\n    function getTokenAllocation(address addr) external view returns (uint256) {\r\n        return _tokenAllocations[addr];\r\n    }\r\n}\r\n",
    "sourcePath": "C:\\Users\\eugen\\Documents\\BSCClaimApp\\web3things\\contracts\\TokenDistributor.sol",
    "ast": {
      "absolutePath": "project:/contracts/TokenDistributor.sol",
      "exportedSymbols": {
        "Context": [
          93
        ],
        "IERC20": [
          315
        ],
        "Ownable": [
          238
        ],
        "ReentrancyGuard": [
          64
        ],
        "TokenDistributor": [
          575
        ]
      },
      "id": 576,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "184:23:0"
        },
        {
          "abstract": true,
          "baseContracts": [],
          "canonicalName": "ReentrancyGuard",
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": {
            "id": 2,
            "nodeType": "StructuredDocumentation",
            "src": "211:765:0",
            "text": " @dev Contract module that helps prevent reentrant calls to a function.\n Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\n available, which can be applied to functions to make sure there are no nested\n (reentrant) calls to them.\n Note that because there is a single `nonReentrant` guard, functions marked as\n `nonReentrant` may not call one another. This can be worked around by making\n those functions `private`, and then adding `external` `nonReentrant` entry\n points to them.\n TIP: If you would like to learn more about reentrancy and alternative ways\n to protect against it, check out our blog post\n https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul]."
          },
          "fullyImplemented": true,
          "id": 64,
          "linearizedBaseContracts": [
            64
          ],
          "name": "ReentrancyGuard",
          "nameLocation": "996:15:0",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": true,
              "id": 5,
              "mutability": "constant",
              "name": "_NOT_ENTERED",
              "nameLocation": "1803:12:0",
              "nodeType": "VariableDeclaration",
              "scope": 64,
              "src": "1778:41:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 3,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1778:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "hexValue": "31",
                "id": 4,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "1818:1:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "visibility": "private"
            },
            {
              "constant": true,
              "id": 8,
              "mutability": "constant",
              "name": "_ENTERED",
              "nameLocation": "1851:8:0",
              "nodeType": "VariableDeclaration",
              "scope": 64,
              "src": "1826:37:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 6,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1826:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "hexValue": "32",
                "id": 7,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "1862:1:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_2_by_1",
                  "typeString": "int_const 2"
                },
                "value": "2"
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 10,
              "mutability": "mutable",
              "name": "_status",
              "nameLocation": "1888:7:0",
              "nodeType": "VariableDeclaration",
              "scope": 64,
              "src": "1872:23:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 9,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1872:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "private"
            },
            {
              "body": {
                "id": 17,
                "nodeType": "Block",
                "src": "1918:41:0",
                "statements": [
                  {
                    "expression": {
                      "id": 15,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 13,
                        "name": "_status",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "1929:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 14,
                        "name": "_NOT_ENTERED",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "1939:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1929:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 16,
                    "nodeType": "ExpressionStatement",
                    "src": "1929:22:0"
                  }
                ]
              },
              "id": 18,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 11,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1915:2:0"
              },
              "returnParameters": {
                "id": 12,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1918:0:0"
              },
              "scope": 64,
              "src": "1904:55:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 28,
                "nodeType": "Block",
                "src": "2369:83:0",
                "statements": [
                  {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 21,
                        "name": "_nonReentrantBefore",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "2380:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 22,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2380:21:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 23,
                    "nodeType": "ExpressionStatement",
                    "src": "2380:21:0"
                  },
                  {
                    "id": 24,
                    "nodeType": "PlaceholderStatement",
                    "src": "2412:1:0"
                  },
                  {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 25,
                        "name": "_nonReentrantAfter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52,
                        "src": "2424:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 26,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2424:20:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 27,
                    "nodeType": "ExpressionStatement",
                    "src": "2424:20:0"
                  }
                ]
              },
              "documentation": {
                "id": 19,
                "nodeType": "StructuredDocumentation",
                "src": "1967:372:0",
                "text": " @dev Prevents a contract from calling itself, directly or indirectly.\n Calling a `nonReentrant` function from another `nonReentrant`\n function is not supported. It is possible to prevent this from happening\n by making the `nonReentrant` function external, and making it call a\n `private` function that does the actual work."
              },
              "id": 29,
              "name": "nonReentrant",
              "nameLocation": "2354:12:0",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 20,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2366:2:0"
              },
              "src": "2345:107:0",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 43,
                "nodeType": "Block",
                "src": "2499:254:0",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 35,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 33,
                            "name": "_status",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10,
                            "src": "2594:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "id": 34,
                            "name": "_ENTERED",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8,
                            "src": "2605:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2594:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "5265656e7472616e637947756172643a207265656e7472616e742063616c6c",
                          "id": 36,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2615:33:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ebf73bba305590e4764d5cb53b69bffd6d4d092d1a67551cb346f8cfcdab8619",
                            "typeString": "literal_string \"ReentrancyGuard: reentrant call\""
                          },
                          "value": "ReentrancyGuard: reentrant call"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_ebf73bba305590e4764d5cb53b69bffd6d4d092d1a67551cb346f8cfcdab8619",
                            "typeString": "literal_string \"ReentrancyGuard: reentrant call\""
                          }
                        ],
                        "id": 32,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "2586:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 37,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2586:63:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 38,
                    "nodeType": "ExpressionStatement",
                    "src": "2586:63:0"
                  },
                  {
                    "expression": {
                      "id": 41,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 39,
                        "name": "_status",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "2727:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 40,
                        "name": "_ENTERED",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8,
                        "src": "2737:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2727:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 42,
                    "nodeType": "ExpressionStatement",
                    "src": "2727:18:0"
                  }
                ]
              },
              "id": 44,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_nonReentrantBefore",
              "nameLocation": "2469:19:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 30,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2488:2:0"
              },
              "returnParameters": {
                "id": 31,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2499:0:0"
              },
              "scope": 64,
              "src": "2460:293:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "private"
            },
            {
              "body": {
                "id": 51,
                "nodeType": "Block",
                "src": "2799:175:0",
                "statements": [
                  {
                    "expression": {
                      "id": 49,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 47,
                        "name": "_status",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "2944:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 48,
                        "name": "_NOT_ENTERED",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "2954:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2944:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 50,
                    "nodeType": "ExpressionStatement",
                    "src": "2944:22:0"
                  }
                ]
              },
              "id": 52,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_nonReentrantAfter",
              "nameLocation": "2770:18:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 45,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2788:2:0"
              },
              "returnParameters": {
                "id": 46,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2799:0:0"
              },
              "scope": 64,
              "src": "2761:213:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "private"
            },
            {
              "body": {
                "id": 62,
                "nodeType": "Block",
                "src": "3223:45:0",
                "statements": [
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 60,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 58,
                        "name": "_status",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "3241:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "id": 59,
                        "name": "_ENTERED",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8,
                        "src": "3252:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3241:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 57,
                    "id": 61,
                    "nodeType": "Return",
                    "src": "3234:26:0"
                  }
                ]
              },
              "documentation": {
                "id": 53,
                "nodeType": "StructuredDocumentation",
                "src": "2982:171:0",
                "text": " @dev Returns true if the reentrancy guard is currently set to \"entered\", which indicates there is a\n `nonReentrant` function in the call stack."
              },
              "id": 63,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_reentrancyGuardEntered",
              "nameLocation": "3168:23:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 54,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3191:2:0"
              },
              "returnParameters": {
                "id": 57,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 56,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 63,
                    "src": "3217:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 55,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "3217:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3216:6:0"
              },
              "scope": 64,
              "src": "3159:109:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "internal"
            }
          ],
          "scope": 576,
          "src": "978:2293:0",
          "usedErrors": [],
          "usedEvents": []
        },
        {
          "id": 65,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".20"
          ],
          "nodeType": "PragmaDirective",
          "src": "3402:24:0"
        },
        {
          "abstract": true,
          "baseContracts": [],
          "canonicalName": "Context",
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": {
            "id": 66,
            "nodeType": "StructuredDocumentation",
            "src": "3430:505:0",
            "text": " @dev Provides information about the current execution context, including the\n sender of the transaction and its data. While these are generally available\n via msg.sender and msg.data, they should not be accessed in such a direct\n manner, since when dealing with meta-transactions the account sending and\n paying for execution may not be the actual sender (as far as an application\n is concerned).\n This contract is only required for intermediate, library-like contracts."
          },
          "fullyImplemented": true,
          "id": 93,
          "linearizedBaseContracts": [
            93
          ],
          "name": "Context",
          "nameLocation": "3955:7:0",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "body": {
                "id": 74,
                "nodeType": "Block",
                "src": "4032:36:0",
                "statements": [
                  {
                    "expression": {
                      "expression": {
                        "id": 71,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "4050:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 72,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4054:6:0",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "4050:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 70,
                    "id": 73,
                    "nodeType": "Return",
                    "src": "4043:17:0"
                  }
                ]
              },
              "id": 75,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_msgSender",
              "nameLocation": "3979:10:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 67,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3989:2:0"
              },
              "returnParameters": {
                "id": 70,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 69,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 75,
                    "src": "4023:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 68,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4023:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4022:9:0"
              },
              "scope": 93,
              "src": "3970:98:0",
              "stateMutability": "view",
              "virtual": true,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 83,
                "nodeType": "Block",
                "src": "4143:34:0",
                "statements": [
                  {
                    "expression": {
                      "expression": {
                        "id": 80,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "4161:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 81,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4165:4:0",
                      "memberName": "data",
                      "nodeType": "MemberAccess",
                      "src": "4161:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_calldata_ptr",
                        "typeString": "bytes calldata"
                      }
                    },
                    "functionReturnParameters": 79,
                    "id": 82,
                    "nodeType": "Return",
                    "src": "4154:15:0"
                  }
                ]
              },
              "id": 84,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_msgData",
              "nameLocation": "4085:8:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 76,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4093:2:0"
              },
              "returnParameters": {
                "id": 79,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 78,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 84,
                    "src": "4127:14:0",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 77,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "4127:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4126:16:0"
              },
              "scope": 93,
              "src": "4076:101:0",
              "stateMutability": "view",
              "virtual": true,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 91,
                "nodeType": "Block",
                "src": "4257:27:0",
                "statements": [
                  {
                    "expression": {
                      "hexValue": "30",
                      "id": 89,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4275:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "functionReturnParameters": 88,
                    "id": 90,
                    "nodeType": "Return",
                    "src": "4268:8:0"
                  }
                ]
              },
              "id": 92,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_contextSuffixLength",
              "nameLocation": "4194:20:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 85,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4214:2:0"
              },
              "returnParameters": {
                "id": 88,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 87,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 92,
                    "src": "4248:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 86,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4248:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4247:9:0"
              },
              "scope": 93,
              "src": "4185:99:0",
              "stateMutability": "view",
              "virtual": true,
              "visibility": "internal"
            }
          ],
          "scope": 576,
          "src": "3937:350:0",
          "usedErrors": [],
          "usedEvents": []
        },
        {
          "id": 94,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".20"
          ],
          "nodeType": "PragmaDirective",
          "src": "4420:24:0"
        },
        {
          "abstract": true,
          "baseContracts": [
            {
              "baseName": {
                "id": 96,
                "name": "Context",
                "nameLocations": [
                  "4979:7:0"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 93,
                "src": "4979:7:0"
              },
              "id": 97,
              "nodeType": "InheritanceSpecifier",
              "src": "4979:7:0"
            }
          ],
          "canonicalName": "Ownable",
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": {
            "id": 95,
            "nodeType": "StructuredDocumentation",
            "src": "4450:498:0",
            "text": " @dev Contract module which provides a basic access control mechanism, where\n there is an account (an owner) that can be granted exclusive access to\n specific functions.\n The initial owner is set to the address provided by the deployer. This can\n later be changed with {transferOwnership}.\n This module is used through inheritance. It will make available the modifier\n `onlyOwner`, which can be applied to your functions to restrict their use to\n the owner."
          },
          "fullyImplemented": true,
          "id": 238,
          "linearizedBaseContracts": [
            238,
            93
          ],
          "name": "Ownable",
          "nameLocation": "4968:7:0",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 99,
              "mutability": "mutable",
              "name": "_owner",
              "nameLocation": "5010:6:0",
              "nodeType": "VariableDeclaration",
              "scope": 238,
              "src": "4994:22:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 98,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "4994:7:0",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "private"
            },
            {
              "documentation": {
                "id": 100,
                "nodeType": "StructuredDocumentation",
                "src": "5025:87:0",
                "text": " @dev The caller account is not authorized to perform an operation."
              },
              "errorSelector": "118cdaa7",
              "id": 104,
              "name": "OwnableUnauthorizedAccount",
              "nameLocation": "5124:26:0",
              "nodeType": "ErrorDefinition",
              "parameters": {
                "id": 103,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 102,
                    "mutability": "mutable",
                    "name": "account",
                    "nameLocation": "5159:7:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 104,
                    "src": "5151:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 101,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5151:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5150:17:0"
              },
              "src": "5118:50:0"
            },
            {
              "documentation": {
                "id": 105,
                "nodeType": "StructuredDocumentation",
                "src": "5176:84:0",
                "text": " @dev The owner is not a valid owner account. (eg. `address(0)`)"
              },
              "errorSelector": "1e4fbdf7",
              "id": 109,
              "name": "OwnableInvalidOwner",
              "nameLocation": "5272:19:0",
              "nodeType": "ErrorDefinition",
              "parameters": {
                "id": 108,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 107,
                    "mutability": "mutable",
                    "name": "owner",
                    "nameLocation": "5300:5:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 109,
                    "src": "5292:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 106,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5292:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5291:15:0"
              },
              "src": "5266:41:0"
            },
            {
              "anonymous": false,
              "eventSelector": "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
              "id": 115,
              "name": "OwnershipTransferred",
              "nameLocation": "5321:20:0",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 114,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 111,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "previousOwner",
                    "nameLocation": "5358:13:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 115,
                    "src": "5342:29:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 110,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5342:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 113,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "newOwner",
                    "nameLocation": "5389:8:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 115,
                    "src": "5373:24:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 112,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5373:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5341:57:0"
              },
              "src": "5315:84:0"
            },
            {
              "body": {
                "id": 140,
                "nodeType": "Block",
                "src": "5564:158:0",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 126,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 121,
                        "name": "initialOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 118,
                        "src": "5579:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 124,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5603:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 123,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5595:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 122,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "5595:7:0",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5595:10:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "5579:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 135,
                    "nodeType": "IfStatement",
                    "src": "5575:97:0",
                    "trueBody": {
                      "id": 134,
                      "nodeType": "Block",
                      "src": "5607:65:0",
                      "statements": [
                        {
                          "errorCall": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "hexValue": "30",
                                    "id": 130,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "5657:1:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    },
                                    "value": "0"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "id": 129,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "5649:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 128,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "5649:7:0",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 131,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5649:10:0",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 127,
                              "name": "OwnableInvalidOwner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 109,
                              "src": "5629:19:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                "typeString": "function (address) pure"
                              }
                            },
                            "id": 132,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5629:31:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 133,
                          "nodeType": "RevertStatement",
                          "src": "5622:38:0"
                        }
                      ]
                    }
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 137,
                          "name": "initialOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118,
                          "src": "5701:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 136,
                        "name": "_transferOwnership",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 237,
                        "src": "5682:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                          "typeString": "function (address)"
                        }
                      },
                      "id": 138,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5682:32:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 139,
                    "nodeType": "ExpressionStatement",
                    "src": "5682:32:0"
                  }
                ]
              },
              "documentation": {
                "id": 116,
                "nodeType": "StructuredDocumentation",
                "src": "5407:117:0",
                "text": " @dev Initializes the contract setting the address provided by the deployer as the initial owner."
              },
              "id": 141,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 119,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 118,
                    "mutability": "mutable",
                    "name": "initialOwner",
                    "nameLocation": "5550:12:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 141,
                    "src": "5542:20:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 117,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5542:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5541:22:0"
              },
              "returnParameters": {
                "id": 120,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "5564:0:0"
              },
              "scope": 238,
              "src": "5530:192:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 148,
                "nodeType": "Block",
                "src": "5836:44:0",
                "statements": [
                  {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 144,
                        "name": "_checkOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 175,
                        "src": "5847:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$__$",
                          "typeString": "function () view"
                        }
                      },
                      "id": 145,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5847:13:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 146,
                    "nodeType": "ExpressionStatement",
                    "src": "5847:13:0"
                  },
                  {
                    "id": 147,
                    "nodeType": "PlaceholderStatement",
                    "src": "5871:1:0"
                  }
                ]
              },
              "documentation": {
                "id": 142,
                "nodeType": "StructuredDocumentation",
                "src": "5730:79:0",
                "text": " @dev Throws if called by any account other than the owner."
              },
              "id": 149,
              "name": "onlyOwner",
              "nameLocation": "5824:9:0",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 143,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "5833:2:0"
              },
              "src": "5815:65:0",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 157,
                "nodeType": "Block",
                "src": "6016:32:0",
                "statements": [
                  {
                    "expression": {
                      "id": 155,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 99,
                      "src": "6034:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 154,
                    "id": 156,
                    "nodeType": "Return",
                    "src": "6027:13:0"
                  }
                ]
              },
              "documentation": {
                "id": 150,
                "nodeType": "StructuredDocumentation",
                "src": "5888:67:0",
                "text": " @dev Returns the address of the current owner."
              },
              "functionSelector": "8da5cb5b",
              "id": 158,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "owner",
              "nameLocation": "5970:5:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 151,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "5975:2:0"
              },
              "returnParameters": {
                "id": 154,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 153,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 158,
                    "src": "6007:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 152,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "6007:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "6006:9:0"
              },
              "scope": 238,
              "src": "5961:87:0",
              "stateMutability": "view",
              "virtual": true,
              "visibility": "public"
            },
            {
              "body": {
                "id": 174,
                "nodeType": "Block",
                "src": "6171:121:0",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 166,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 162,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 158,
                          "src": "6186:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 163,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6186:7:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 164,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 75,
                          "src": "6197:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 165,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6197:12:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "6186:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 173,
                    "nodeType": "IfStatement",
                    "src": "6182:103:0",
                    "trueBody": {
                      "id": 172,
                      "nodeType": "Block",
                      "src": "6211:74:0",
                      "statements": [
                        {
                          "errorCall": {
                            "arguments": [
                              {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 168,
                                  "name": "_msgSender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 75,
                                  "src": "6260:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                    "typeString": "function () view returns (address)"
                                  }
                                },
                                "id": 169,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6260:12:0",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 167,
                              "name": "OwnableUnauthorizedAccount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 104,
                              "src": "6233:26:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                "typeString": "function (address) pure"
                              }
                            },
                            "id": 170,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6233:40:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 171,
                          "nodeType": "RevertStatement",
                          "src": "6226:47:0"
                        }
                      ]
                    }
                  }
                ]
              },
              "documentation": {
                "id": 159,
                "nodeType": "StructuredDocumentation",
                "src": "6056:64:0",
                "text": " @dev Throws if the sender is not the owner."
              },
              "id": 175,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_checkOwner",
              "nameLocation": "6135:11:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 160,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "6146:2:0"
              },
              "returnParameters": {
                "id": 161,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "6171:0:0"
              },
              "scope": 238,
              "src": "6126:166:0",
              "stateMutability": "view",
              "virtual": true,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 188,
                "nodeType": "Block",
                "src": "6690:49:0",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 184,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6728:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 183,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6720:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 182,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "6720:7:0",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 185,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6720:10:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 181,
                        "name": "_transferOwnership",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 237,
                        "src": "6701:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                          "typeString": "function (address)"
                        }
                      },
                      "id": 186,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6701:30:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 187,
                    "nodeType": "ExpressionStatement",
                    "src": "6701:30:0"
                  }
                ]
              },
              "documentation": {
                "id": 176,
                "nodeType": "StructuredDocumentation",
                "src": "6300:330:0",
                "text": " @dev Leaves the contract without owner. It will not be possible to call\n `onlyOwner` functions. Can only be called by the current owner.\n NOTE: Renouncing ownership will leave the contract without an owner,\n thereby disabling any functionality that is only available to the owner."
              },
              "functionSelector": "715018a6",
              "id": 189,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 179,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 178,
                    "name": "onlyOwner",
                    "nameLocations": [
                      "6680:9:0"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 149,
                    "src": "6680:9:0"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "6680:9:0"
                }
              ],
              "name": "renounceOwnership",
              "nameLocation": "6645:17:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 177,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "6662:2:0"
              },
              "returnParameters": {
                "id": 180,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "6690:0:0"
              },
              "scope": 238,
              "src": "6636:103:0",
              "stateMutability": "nonpayable",
              "virtual": true,
              "visibility": "public"
            },
            {
              "body": {
                "id": 216,
                "nodeType": "Block",
                "src": "6964:150:0",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 202,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 197,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 192,
                        "src": "6979:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 200,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6999:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 199,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6991:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 198,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "6991:7:0",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6991:10:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "6979:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 211,
                    "nodeType": "IfStatement",
                    "src": "6975:93:0",
                    "trueBody": {
                      "id": 210,
                      "nodeType": "Block",
                      "src": "7003:65:0",
                      "statements": [
                        {
                          "errorCall": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "hexValue": "30",
                                    "id": 206,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "7053:1:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    },
                                    "value": "0"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "id": 205,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "7045:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 204,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "7045:7:0",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 207,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7045:10:0",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 203,
                              "name": "OwnableInvalidOwner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 109,
                              "src": "7025:19:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                "typeString": "function (address) pure"
                              }
                            },
                            "id": 208,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7025:31:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 209,
                          "nodeType": "RevertStatement",
                          "src": "7018:38:0"
                        }
                      ]
                    }
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 213,
                          "name": "newOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 192,
                          "src": "7097:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 212,
                        "name": "_transferOwnership",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 237,
                        "src": "7078:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                          "typeString": "function (address)"
                        }
                      },
                      "id": 214,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7078:28:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 215,
                    "nodeType": "ExpressionStatement",
                    "src": "7078:28:0"
                  }
                ]
              },
              "documentation": {
                "id": 190,
                "nodeType": "StructuredDocumentation",
                "src": "6747:141:0",
                "text": " @dev Transfers ownership of the contract to a new account (`newOwner`).\n Can only be called by the current owner."
              },
              "functionSelector": "f2fde38b",
              "id": 217,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 195,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 194,
                    "name": "onlyOwner",
                    "nameLocations": [
                      "6954:9:0"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 149,
                    "src": "6954:9:0"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "6954:9:0"
                }
              ],
              "name": "transferOwnership",
              "nameLocation": "6903:17:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 193,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 192,
                    "mutability": "mutable",
                    "name": "newOwner",
                    "nameLocation": "6929:8:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 217,
                    "src": "6921:16:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 191,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "6921:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "6920:18:0"
              },
              "returnParameters": {
                "id": 196,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "6964:0:0"
              },
              "scope": 238,
              "src": "6894:220:0",
              "stateMutability": "nonpayable",
              "virtual": true,
              "visibility": "public"
            },
            {
              "body": {
                "id": 236,
                "nodeType": "Block",
                "src": "7337:128:0",
                "statements": [
                  {
                    "assignments": [
                      224
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 224,
                        "mutability": "mutable",
                        "name": "oldOwner",
                        "nameLocation": "7356:8:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 236,
                        "src": "7348:16:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 223,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "7348:7:0",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 226,
                    "initialValue": {
                      "id": 225,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 99,
                      "src": "7367:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "7348:25:0"
                  },
                  {
                    "expression": {
                      "id": 229,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 227,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 99,
                        "src": "7384:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 228,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 220,
                        "src": "7393:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "7384:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 230,
                    "nodeType": "ExpressionStatement",
                    "src": "7384:17:0"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "id": 232,
                          "name": "oldOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 224,
                          "src": "7438:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 233,
                          "name": "newOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 220,
                          "src": "7448:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 231,
                        "name": "OwnershipTransferred",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "7417:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                          "typeString": "function (address,address)"
                        }
                      },
                      "id": 234,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7417:40:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 235,
                    "nodeType": "EmitStatement",
                    "src": "7412:45:0"
                  }
                ]
              },
              "documentation": {
                "id": 218,
                "nodeType": "StructuredDocumentation",
                "src": "7122:146:0",
                "text": " @dev Transfers ownership of the contract to a new account (`newOwner`).\n Internal function without access restriction."
              },
              "id": 237,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_transferOwnership",
              "nameLocation": "7283:18:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 221,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 220,
                    "mutability": "mutable",
                    "name": "newOwner",
                    "nameLocation": "7310:8:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 237,
                    "src": "7302:16:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 219,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7302:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "7301:18:0"
              },
              "returnParameters": {
                "id": 222,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "7337:0:0"
              },
              "scope": 238,
              "src": "7274:191:0",
              "stateMutability": "nonpayable",
              "virtual": true,
              "visibility": "internal"
            }
          ],
          "scope": 576,
          "src": "4950:2518:0",
          "usedErrors": [
            104,
            109
          ],
          "usedEvents": [
            115
          ]
        },
        {
          "id": 239,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".20"
          ],
          "nodeType": "PragmaDirective",
          "src": "7609:24:0"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "canonicalName": "IERC20",
          "contractDependencies": [],
          "contractKind": "interface",
          "documentation": {
            "id": 240,
            "nodeType": "StructuredDocumentation",
            "src": "7637:72:0",
            "text": " @dev Interface of the ERC20 standard as defined in the EIP."
          },
          "fullyImplemented": false,
          "id": 315,
          "linearizedBaseContracts": [
            315
          ],
          "name": "IERC20",
          "nameLocation": "7721:6:0",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "anonymous": false,
              "documentation": {
                "id": 241,
                "nodeType": "StructuredDocumentation",
                "src": "7735:163:0",
                "text": " @dev Emitted when `value` tokens are moved from one account (`from`) to\n another (`to`).\n Note that `value` may be zero."
              },
              "eventSelector": "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
              "id": 249,
              "name": "Transfer",
              "nameLocation": "7910:8:0",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 248,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 243,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "from",
                    "nameLocation": "7935:4:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 249,
                    "src": "7919:20:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 242,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7919:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 245,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "to",
                    "nameLocation": "7957:2:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 249,
                    "src": "7941:18:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 244,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7941:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 247,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "value",
                    "nameLocation": "7969:5:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 249,
                    "src": "7961:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 246,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "7961:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "7918:57:0"
              },
              "src": "7904:72:0"
            },
            {
              "anonymous": false,
              "documentation": {
                "id": 250,
                "nodeType": "StructuredDocumentation",
                "src": "7984:151:0",
                "text": " @dev Emitted when the allowance of a `spender` for an `owner` is set by\n a call to {approve}. `value` is the new allowance."
              },
              "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
              "id": 258,
              "name": "Approval",
              "nameLocation": "8147:8:0",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 257,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 252,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "owner",
                    "nameLocation": "8172:5:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 258,
                    "src": "8156:21:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 251,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "8156:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 254,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "spender",
                    "nameLocation": "8195:7:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 258,
                    "src": "8179:23:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 253,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "8179:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 256,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "value",
                    "nameLocation": "8212:5:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 258,
                    "src": "8204:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 255,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8204:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "8155:63:0"
              },
              "src": "8141:78:0"
            },
            {
              "documentation": {
                "id": 259,
                "nodeType": "StructuredDocumentation",
                "src": "8227:67:0",
                "text": " @dev Returns the value of tokens in existence."
              },
              "functionSelector": "18160ddd",
              "id": 264,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "totalSupply",
              "nameLocation": "8309:11:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 260,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "8320:2:0"
              },
              "returnParameters": {
                "id": 263,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 262,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 264,
                    "src": "8346:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 261,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8346:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "8345:9:0"
              },
              "scope": 315,
              "src": "8300:55:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "documentation": {
                "id": 265,
                "nodeType": "StructuredDocumentation",
                "src": "8363:73:0",
                "text": " @dev Returns the value of tokens owned by `account`."
              },
              "functionSelector": "70a08231",
              "id": 272,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "balanceOf",
              "nameLocation": "8451:9:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 268,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 267,
                    "mutability": "mutable",
                    "name": "account",
                    "nameLocation": "8469:7:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 272,
                    "src": "8461:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 266,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "8461:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "8460:17:0"
              },
              "returnParameters": {
                "id": 271,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 270,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 272,
                    "src": "8501:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 269,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8501:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "8500:9:0"
              },
              "scope": 315,
              "src": "8442:68:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "documentation": {
                "id": 273,
                "nodeType": "StructuredDocumentation",
                "src": "8518:219:0",
                "text": " @dev Moves a `value` amount of tokens from the caller's account to `to`.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
              },
              "functionSelector": "a9059cbb",
              "id": 282,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "transfer",
              "nameLocation": "8752:8:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 278,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 275,
                    "mutability": "mutable",
                    "name": "to",
                    "nameLocation": "8769:2:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 282,
                    "src": "8761:10:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 274,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "8761:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 277,
                    "mutability": "mutable",
                    "name": "value",
                    "nameLocation": "8781:5:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 282,
                    "src": "8773:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 276,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8773:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "8760:27:0"
              },
              "returnParameters": {
                "id": 281,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 280,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 282,
                    "src": "8806:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 279,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "8806:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "8805:6:0"
              },
              "scope": 315,
              "src": "8743:69:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "documentation": {
                "id": 283,
                "nodeType": "StructuredDocumentation",
                "src": "8820:270:0",
                "text": " @dev Returns the remaining number of tokens that `spender` will be\n allowed to spend on behalf of `owner` through {transferFrom}. This is\n zero by default.\n This value changes when {approve} or {transferFrom} are called."
              },
              "functionSelector": "dd62ed3e",
              "id": 292,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "allowance",
              "nameLocation": "9105:9:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 288,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 285,
                    "mutability": "mutable",
                    "name": "owner",
                    "nameLocation": "9123:5:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 292,
                    "src": "9115:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 284,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "9115:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 287,
                    "mutability": "mutable",
                    "name": "spender",
                    "nameLocation": "9138:7:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 292,
                    "src": "9130:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 286,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "9130:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "9114:32:0"
              },
              "returnParameters": {
                "id": 291,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 290,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 292,
                    "src": "9170:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 289,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "9170:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "9169:9:0"
              },
              "scope": 315,
              "src": "9096:83:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "documentation": {
                "id": 293,
                "nodeType": "StructuredDocumentation",
                "src": "9187:681:0",
                "text": " @dev Sets a `value` amount of tokens as the allowance of `spender` over the\n caller's tokens.\n Returns a boolean value indicating whether the operation succeeded.\n IMPORTANT: Beware that changing an allowance with this method brings the risk\n that someone may use both the old and the new allowance by unfortunate\n transaction ordering. One possible solution to mitigate this race\n condition is to first reduce the spender's allowance to 0 and set the\n desired value afterwards:\n https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n Emits an {Approval} event."
              },
              "functionSelector": "095ea7b3",
              "id": 302,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "approve",
              "nameLocation": "9883:7:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 298,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 295,
                    "mutability": "mutable",
                    "name": "spender",
                    "nameLocation": "9899:7:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 302,
                    "src": "9891:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 294,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "9891:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 297,
                    "mutability": "mutable",
                    "name": "value",
                    "nameLocation": "9916:5:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 302,
                    "src": "9908:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 296,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "9908:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "9890:32:0"
              },
              "returnParameters": {
                "id": 301,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 300,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 302,
                    "src": "9941:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 299,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "9941:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "9940:6:0"
              },
              "scope": 315,
              "src": "9874:73:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "documentation": {
                "id": 303,
                "nodeType": "StructuredDocumentation",
                "src": "9955:305:0",
                "text": " @dev Moves a `value` amount of tokens from `from` to `to` using the\n allowance mechanism. `value` is then deducted from the caller's\n allowance.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
              },
              "functionSelector": "23b872dd",
              "id": 314,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "transferFrom",
              "nameLocation": "10275:12:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 310,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 305,
                    "mutability": "mutable",
                    "name": "from",
                    "nameLocation": "10296:4:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 314,
                    "src": "10288:12:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 304,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10288:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 307,
                    "mutability": "mutable",
                    "name": "to",
                    "nameLocation": "10310:2:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 314,
                    "src": "10302:10:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 306,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10302:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 309,
                    "mutability": "mutable",
                    "name": "value",
                    "nameLocation": "10322:5:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 314,
                    "src": "10314:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 308,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "10314:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "10287:41:0"
              },
              "returnParameters": {
                "id": 313,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 312,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 314,
                    "src": "10347:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 311,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "10347:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "10346:6:0"
              },
              "scope": 315,
              "src": "10266:87:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            }
          ],
          "scope": 576,
          "src": "7711:2645:0",
          "usedErrors": [],
          "usedEvents": [
            249,
            258
          ]
        },
        {
          "id": 316,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "10407:23:0"
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 317,
                "name": "ReentrancyGuard",
                "nameLocations": [
                  "10469:15:0"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 64,
                "src": "10469:15:0"
              },
              "id": 318,
              "nodeType": "InheritanceSpecifier",
              "src": "10469:15:0"
            }
          ],
          "canonicalName": "TokenDistributor",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 575,
          "linearizedBaseContracts": [
            575,
            64
          ],
          "name": "TokenDistributor",
          "nameLocation": "10449:16:0",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 321,
              "mutability": "mutable",
              "name": "_token",
              "nameLocation": "10506:6:0",
              "nodeType": "VariableDeclaration",
              "scope": 575,
              "src": "10491:21:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$315",
                "typeString": "contract IERC20"
              },
              "typeName": {
                "id": 320,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 319,
                  "name": "IERC20",
                  "nameLocations": [
                    "10491:6:0"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 315,
                  "src": "10491:6:0"
                },
                "referencedDeclaration": 315,
                "src": "10491:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IERC20_$315",
                  "typeString": "contract IERC20"
                }
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 323,
              "mutability": "mutable",
              "name": "_owner",
              "nameLocation": "10535:6:0",
              "nodeType": "VariableDeclaration",
              "scope": 575,
              "src": "10519:22:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 322,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "10519:7:0",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 327,
              "mutability": "mutable",
              "name": "_hasReceivedTokens",
              "nameLocation": "10583:18:0",
              "nodeType": "VariableDeclaration",
              "scope": 575,
              "src": "10550:51:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 326,
                "keyName": "",
                "keyNameLocation": "-1:-1:-1",
                "keyType": {
                  "id": 324,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "10558:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "10550:24:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 325,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "10569:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 331,
              "mutability": "mutable",
              "name": "_tokenAllocations",
              "nameLocation": "10644:17:0",
              "nodeType": "VariableDeclaration",
              "scope": 575,
              "src": "10608:53:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "typeName": {
                "id": 330,
                "keyName": "",
                "keyNameLocation": "-1:-1:-1",
                "keyType": {
                  "id": 328,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "10616:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "10608:27:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 329,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "10627:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "visibility": "private"
            },
            {
              "body": {
                "id": 342,
                "nodeType": "Block",
                "src": "10691:77:0",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 337,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 334,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "10710:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 335,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10714:6:0",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "10710:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 336,
                            "name": "_owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 323,
                            "src": "10724:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "10710:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4e6f7420746865206f776e6572",
                          "id": 338,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10732:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5",
                            "typeString": "literal_string \"Not the owner\""
                          },
                          "value": "Not the owner"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5",
                            "typeString": "literal_string \"Not the owner\""
                          }
                        ],
                        "id": 333,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "10702:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 339,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10702:46:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 340,
                    "nodeType": "ExpressionStatement",
                    "src": "10702:46:0"
                  },
                  {
                    "id": 341,
                    "nodeType": "PlaceholderStatement",
                    "src": "10759:1:0"
                  }
                ]
              },
              "id": 343,
              "name": "onlyOwner",
              "nameLocation": "10679:9:0",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 332,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "10688:2:0"
              },
              "src": "10670:98:0",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 369,
                "nodeType": "Block",
                "src": "10810:179:0",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 354,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 349,
                            "name": "tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 345,
                            "src": "10829:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "arguments": [
                              {
                                "hexValue": "30",
                                "id": 352,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10853:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 351,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "10845:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 350,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "10845:7:0",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 353,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10845:10:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "10829:26:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546f6b656e4469737472696275746f723a20746f6b656e206164647265737320697320746865207a65726f2061646472657373",
                          "id": 355,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10857:53:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_b3803e2714944f069da02f5ef8a46d97be9c25b543873e310ec64a0de34762df",
                            "typeString": "literal_string \"TokenDistributor: token address is the zero address\""
                          },
                          "value": "TokenDistributor: token address is the zero address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_b3803e2714944f069da02f5ef8a46d97be9c25b543873e310ec64a0de34762df",
                            "typeString": "literal_string \"TokenDistributor: token address is the zero address\""
                          }
                        ],
                        "id": 348,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "10821:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 356,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10821:90:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 357,
                    "nodeType": "ExpressionStatement",
                    "src": "10821:90:0"
                  },
                  {
                    "expression": {
                      "id": 362,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 358,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 321,
                        "src": "10922:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$315",
                          "typeString": "contract IERC20"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "id": 360,
                            "name": "tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 345,
                            "src": "10938:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 359,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 315,
                          "src": "10931:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$315_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 361,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10931:20:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$315",
                          "typeString": "contract IERC20"
                        }
                      },
                      "src": "10922:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$315",
                        "typeString": "contract IERC20"
                      }
                    },
                    "id": 363,
                    "nodeType": "ExpressionStatement",
                    "src": "10922:29:0"
                  },
                  {
                    "expression": {
                      "id": 367,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 364,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 323,
                        "src": "10962:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 365,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "10971:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 366,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10975:6:0",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "10971:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "10962:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 368,
                    "nodeType": "ExpressionStatement",
                    "src": "10962:19:0"
                  }
                ]
              },
              "id": 370,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 346,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 345,
                    "mutability": "mutable",
                    "name": "tokenAddress",
                    "nameLocation": "10796:12:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 370,
                    "src": "10788:20:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 344,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10788:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "10787:22:0"
              },
              "returnParameters": {
                "id": 347,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "10810:0:0"
              },
              "scope": 575,
              "src": "10776:213:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 383,
                "nodeType": "Block",
                "src": "11112:57:0",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 379,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "11155:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TokenDistributor_$575",
                                "typeString": "contract TokenDistributor"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_TokenDistributor_$575",
                                "typeString": "contract TokenDistributor"
                              }
                            ],
                            "id": 378,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "11147:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 377,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "11147:7:0",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 380,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11147:13:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "id": 375,
                          "name": "_token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 321,
                          "src": "11130:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$315",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 376,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11137:9:0",
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 272,
                        "src": "11130:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 381,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11130:31:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 374,
                    "id": 382,
                    "nodeType": "Return",
                    "src": "11123:38:0"
                  }
                ]
              },
              "functionSelector": "c71daccb",
              "id": 384,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "checkBalance",
              "nameLocation": "11067:12:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 371,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "11079:2:0"
              },
              "returnParameters": {
                "id": 374,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 373,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 384,
                    "src": "11103:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 372,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "11103:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "11102:9:0"
              },
              "scope": 575,
              "src": "11058:111:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 413,
                "nodeType": "Block",
                "src": "11290:183:0",
                "statements": [
                  {
                    "assignments": [
                      390
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 390,
                        "mutability": "mutable",
                        "name": "balance",
                        "nameLocation": "11309:7:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 413,
                        "src": "11301:15:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 389,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11301:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 398,
                    "initialValue": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 395,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "11344:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TokenDistributor_$575",
                                "typeString": "contract TokenDistributor"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_TokenDistributor_$575",
                                "typeString": "contract TokenDistributor"
                              }
                            ],
                            "id": 394,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "11336:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 393,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "11336:7:0",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 396,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11336:13:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "id": 391,
                          "name": "_token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 321,
                          "src": "11319:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$315",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 392,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11326:9:0",
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 272,
                        "src": "11319:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 397,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11319:31:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "11301:49:0"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 402,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 400,
                            "name": "balance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 390,
                            "src": "11369:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 401,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11379:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "11369:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546f6b656e4469737472696275746f723a206e6f20746f6b656e7320746f2072657475726e",
                          "id": 403,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11382:39:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_a3d102c74b83e3fc99e9e4a8e08d6ba6b9e8cff509fdc4c91a762ff5c4bf13c5",
                            "typeString": "literal_string \"TokenDistributor: no tokens to return\""
                          },
                          "value": "TokenDistributor: no tokens to return"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_a3d102c74b83e3fc99e9e4a8e08d6ba6b9e8cff509fdc4c91a762ff5c4bf13c5",
                            "typeString": "literal_string \"TokenDistributor: no tokens to return\""
                          }
                        ],
                        "id": 399,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "11361:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 404,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11361:61:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 405,
                    "nodeType": "ExpressionStatement",
                    "src": "11361:61:0"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 409,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 323,
                          "src": "11449:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 410,
                          "name": "balance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 390,
                          "src": "11457:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 406,
                          "name": "_token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 321,
                          "src": "11433:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$315",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 408,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11440:8:0",
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 282,
                        "src": "11433:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 411,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11433:32:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 412,
                    "nodeType": "ExpressionStatement",
                    "src": "11433:32:0"
                  }
                ]
              },
              "functionSelector": "2971e51d",
              "id": 414,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 387,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 386,
                    "name": "onlyOwner",
                    "nameLocations": [
                      "11280:9:0"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 343,
                    "src": "11280:9:0"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "11280:9:0"
                }
              ],
              "name": "returnTokensToOwner",
              "nameLocation": "11251:19:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 385,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "11270:2:0"
              },
              "returnParameters": {
                "id": 388,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "11290:0:0"
              },
              "scope": 575,
              "src": "11242:231:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 443,
                "nodeType": "Block",
                "src": "11629:129:0",
                "statements": [
                  {
                    "body": {
                      "id": 441,
                      "nodeType": "Block",
                      "src": "11684:67:0",
                      "statements": [
                        {
                          "expression": {
                            "id": 439,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "baseExpression": {
                                "id": 433,
                                "name": "_hasReceivedTokens",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 327,
                                "src": "11699:18:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                  "typeString": "mapping(address => bool)"
                                }
                              },
                              "id": 437,
                              "indexExpression": {
                                "baseExpression": {
                                  "id": 434,
                                  "name": "addresses",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 417,
                                  "src": "11718:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                    "typeString": "address[] calldata"
                                  }
                                },
                                "id": 436,
                                "indexExpression": {
                                  "id": 435,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 423,
                                  "src": "11728:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "11718:12:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "11699:32:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "hexValue": "66616c7365",
                              "id": 438,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11734:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            },
                            "src": "11699:40:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 440,
                          "nodeType": "ExpressionStatement",
                          "src": "11699:40:0"
                        }
                      ]
                    },
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 429,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 426,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 423,
                        "src": "11657:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "expression": {
                          "id": 427,
                          "name": "addresses",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 417,
                          "src": "11661:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                            "typeString": "address[] calldata"
                          }
                        },
                        "id": 428,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11671:6:0",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "11661:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "11657:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 442,
                    "initializationExpression": {
                      "assignments": [
                        423
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 423,
                          "mutability": "mutable",
                          "name": "i",
                          "nameLocation": "11650:1:0",
                          "nodeType": "VariableDeclaration",
                          "scope": 442,
                          "src": "11645:6:0",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 422,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "11645:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 425,
                      "initialValue": {
                        "hexValue": "30",
                        "id": 424,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11654:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "11645:10:0"
                    },
                    "loopExpression": {
                      "expression": {
                        "id": 431,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "11679:3:0",
                        "subExpression": {
                          "id": 430,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 423,
                          "src": "11679:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 432,
                      "nodeType": "ExpressionStatement",
                      "src": "11679:3:0"
                    },
                    "nodeType": "ForStatement",
                    "src": "11640:111:0"
                  }
                ]
              },
              "functionSelector": "4ece48c1",
              "id": 444,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 420,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 419,
                    "name": "onlyOwner",
                    "nameLocations": [
                      "11619:9:0"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 343,
                    "src": "11619:9:0"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "11619:9:0"
                }
              ],
              "name": "resetReceivedStatus",
              "nameLocation": "11562:19:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 418,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 417,
                    "mutability": "mutable",
                    "name": "addresses",
                    "nameLocation": "11601:9:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 444,
                    "src": "11582:28:0",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                      "typeString": "address[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 415,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "11582:7:0",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 416,
                      "nodeType": "ArrayTypeName",
                      "src": "11582:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                        "typeString": "address[]"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "11581:30:0"
              },
              "returnParameters": {
                "id": 421,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "11629:0:0"
              },
              "scope": 575,
              "src": "11553:205:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 487,
                "nodeType": "Block",
                "src": "11939:246:0",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 460,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 456,
                              "name": "addresses",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 447,
                              "src": "11958:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                "typeString": "address[] calldata"
                              }
                            },
                            "id": 457,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11968:6:0",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "11958:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 458,
                              "name": "amounts",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 450,
                              "src": "11978:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                "typeString": "uint256[] calldata"
                              }
                            },
                            "id": 459,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11986:6:0",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "11978:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "11958:34:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546f6b656e4469737472696275746f723a2061646472657373657320616e6420616d6f756e7473206c656e677468206d69736d61746368",
                          "id": 461,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11994:57:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_deea682d4069074ada130bb3e477b3debc52696f1d608cd33e7018e3e7cbf043",
                            "typeString": "literal_string \"TokenDistributor: addresses and amounts length mismatch\""
                          },
                          "value": "TokenDistributor: addresses and amounts length mismatch"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_deea682d4069074ada130bb3e477b3debc52696f1d608cd33e7018e3e7cbf043",
                            "typeString": "literal_string \"TokenDistributor: addresses and amounts length mismatch\""
                          }
                        ],
                        "id": 455,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "11950:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 462,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11950:102:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 463,
                    "nodeType": "ExpressionStatement",
                    "src": "11950:102:0"
                  },
                  {
                    "body": {
                      "id": 485,
                      "nodeType": "Block",
                      "src": "12107:71:0",
                      "statements": [
                        {
                          "expression": {
                            "id": 483,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "baseExpression": {
                                "id": 475,
                                "name": "_tokenAllocations",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 331,
                                "src": "12122:17:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 479,
                              "indexExpression": {
                                "baseExpression": {
                                  "id": 476,
                                  "name": "addresses",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 447,
                                  "src": "12140:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                    "typeString": "address[] calldata"
                                  }
                                },
                                "id": 478,
                                "indexExpression": {
                                  "id": 477,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 465,
                                  "src": "12150:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "12140:12:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "12122:31:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "baseExpression": {
                                "id": 480,
                                "name": "amounts",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 450,
                                "src": "12156:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                }
                              },
                              "id": 482,
                              "indexExpression": {
                                "id": 481,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 465,
                                "src": "12164:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "12156:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "12122:44:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 484,
                          "nodeType": "ExpressionStatement",
                          "src": "12122:44:0"
                        }
                      ]
                    },
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 471,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 468,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 465,
                        "src": "12080:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "expression": {
                          "id": 469,
                          "name": "addresses",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 447,
                          "src": "12084:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                            "typeString": "address[] calldata"
                          }
                        },
                        "id": 470,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "12094:6:0",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "12084:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "12080:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 486,
                    "initializationExpression": {
                      "assignments": [
                        465
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 465,
                          "mutability": "mutable",
                          "name": "i",
                          "nameLocation": "12073:1:0",
                          "nodeType": "VariableDeclaration",
                          "scope": 486,
                          "src": "12068:6:0",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 464,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "12068:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 467,
                      "initialValue": {
                        "hexValue": "30",
                        "id": 466,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12077:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "12068:10:0"
                    },
                    "loopExpression": {
                      "expression": {
                        "id": 473,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "12102:3:0",
                        "subExpression": {
                          "id": 472,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 465,
                          "src": "12102:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 474,
                      "nodeType": "ExpressionStatement",
                      "src": "12102:3:0"
                    },
                    "nodeType": "ForStatement",
                    "src": "12063:115:0"
                  }
                ]
              },
              "functionSelector": "03694fa6",
              "id": 488,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 453,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 452,
                    "name": "onlyOwner",
                    "nameLocations": [
                      "11929:9:0"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 343,
                    "src": "11929:9:0"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "11929:9:0"
                }
              ],
              "name": "setTokenAllocations",
              "nameLocation": "11844:19:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 451,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 447,
                    "mutability": "mutable",
                    "name": "addresses",
                    "nameLocation": "11883:9:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 488,
                    "src": "11864:28:0",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                      "typeString": "address[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 445,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "11864:7:0",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 446,
                      "nodeType": "ArrayTypeName",
                      "src": "11864:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                        "typeString": "address[]"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 450,
                    "mutability": "mutable",
                    "name": "amounts",
                    "nameLocation": "11913:7:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 488,
                    "src": "11894:26:0",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 448,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11894:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 449,
                      "nodeType": "ArrayTypeName",
                      "src": "11894:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "11863:58:0"
              },
              "returnParameters": {
                "id": 454,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "11939:0:0"
              },
              "scope": 575,
              "src": "11835:350:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 549,
                "nodeType": "Block",
                "src": "12326:587:0",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 497,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "12345:30:0",
                          "subExpression": {
                            "baseExpression": {
                              "id": 494,
                              "name": "_hasReceivedTokens",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 327,
                              "src": "12346:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 496,
                            "indexExpression": {
                              "id": 495,
                              "name": "recipient",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 490,
                              "src": "12365:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "12346:29:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546f6b656e4469737472696275746f723a20746f6b656e7320616c72656164792073656e7420746f20746869732061646472657373",
                          "id": 498,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12377:55:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_3f415129e2a0819b7377b039a5b879c223cd07c510ac2a7be70874e9657a5958",
                            "typeString": "literal_string \"TokenDistributor: tokens already sent to this address\""
                          },
                          "value": "TokenDistributor: tokens already sent to this address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_3f415129e2a0819b7377b039a5b879c223cd07c510ac2a7be70874e9657a5958",
                            "typeString": "literal_string \"TokenDistributor: tokens already sent to this address\""
                          }
                        ],
                        "id": 493,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "12337:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 499,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12337:96:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 500,
                    "nodeType": "ExpressionStatement",
                    "src": "12337:96:0"
                  },
                  {
                    "assignments": [
                      502
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 502,
                        "mutability": "mutable",
                        "name": "amount",
                        "nameLocation": "12452:6:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 549,
                        "src": "12444:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 501,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "12444:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 506,
                    "initialValue": {
                      "baseExpression": {
                        "id": 503,
                        "name": "_tokenAllocations",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 331,
                        "src": "12461:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 505,
                      "indexExpression": {
                        "id": 504,
                        "name": "recipient",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 490,
                        "src": "12479:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "12461:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "12444:45:0"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 510,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 508,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 502,
                            "src": "12508:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 509,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12517:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "12508:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546f6b656e4469737472696275746f723a206e6f20746f6b656e7320616c6c6f636174656420746f20746869732061646472657373",
                          "id": 511,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12520:55:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_10d25bf89d7180db683c670a203e0a5c32f506aa6852f6f488ab9eec754851e9",
                            "typeString": "literal_string \"TokenDistributor: no tokens allocated to this address\""
                          },
                          "value": "TokenDistributor: no tokens allocated to this address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_10d25bf89d7180db683c670a203e0a5c32f506aa6852f6f488ab9eec754851e9",
                            "typeString": "literal_string \"TokenDistributor: no tokens allocated to this address\""
                          }
                        ],
                        "id": 507,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "12500:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 512,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12500:76:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 513,
                    "nodeType": "ExpressionStatement",
                    "src": "12500:76:0"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 523,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 519,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967268,
                                    "src": "12620:4:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_TokenDistributor_$575",
                                      "typeString": "contract TokenDistributor"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_TokenDistributor_$575",
                                      "typeString": "contract TokenDistributor"
                                    }
                                  ],
                                  "id": 518,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "12612:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 517,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "12612:7:0",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 520,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "12612:13:0",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "id": 515,
                                "name": "_token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 321,
                                "src": "12595:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$315",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 516,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "12602:9:0",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 272,
                              "src": "12595:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 521,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "12595:31:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "id": 522,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 502,
                            "src": "12630:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "12595:41:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546f6b656e4469737472696275746f723a20696e73756666696369656e7420746f6b656e7320696e2074686520636f6e7472616374",
                          "id": 524,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12638:55:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_d152202eca8f55f5be1c54afa72c22cffdccb761976d9fd223e0b1838f5324f1",
                            "typeString": "literal_string \"TokenDistributor: insufficient tokens in the contract\""
                          },
                          "value": "TokenDistributor: insufficient tokens in the contract"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_d152202eca8f55f5be1c54afa72c22cffdccb761976d9fd223e0b1838f5324f1",
                            "typeString": "literal_string \"TokenDistributor: insufficient tokens in the contract\""
                          }
                        ],
                        "id": 514,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "12587:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 525,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12587:107:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 526,
                    "nodeType": "ExpressionStatement",
                    "src": "12587:107:0"
                  },
                  {
                    "assignments": [
                      528
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 528,
                        "mutability": "mutable",
                        "name": "amountToSend",
                        "nameLocation": "12715:12:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 549,
                        "src": "12707:20:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 527,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "12707:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 535,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 534,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 531,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 529,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 502,
                              "src": "12731:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "hexValue": "31",
                              "id": 530,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "12740:7:0",
                              "subdenomination": "ether",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                "typeString": "int_const 1000000000000000000"
                              },
                              "value": "1"
                            },
                            "src": "12731:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 532,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "12730:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "36",
                        "id": 533,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12751:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_6_by_1",
                          "typeString": "int_const 6"
                        },
                        "value": "6"
                      },
                      "src": "12730:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "12707:45:0"
                  },
                  {
                    "expression": {
                      "id": 540,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 536,
                          "name": "_hasReceivedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 327,
                          "src": "12818:18:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 538,
                        "indexExpression": {
                          "id": 537,
                          "name": "recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 490,
                          "src": "12837:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "12818:29:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "74727565",
                        "id": 539,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12850:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "12818:36:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 541,
                    "nodeType": "ExpressionStatement",
                    "src": "12818:36:0"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 545,
                          "name": "recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 490,
                          "src": "12881:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 546,
                          "name": "amountToSend",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 528,
                          "src": "12892:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 542,
                          "name": "_token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 321,
                          "src": "12865:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$315",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 544,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "12872:8:0",
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 282,
                        "src": "12865:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 547,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12865:40:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 548,
                    "nodeType": "ExpressionStatement",
                    "src": "12865:40:0"
                  }
                ]
              },
              "functionSelector": "b1d17c98",
              "id": 550,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "distributeTokens",
              "nameLocation": "12283:16:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 491,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 490,
                    "mutability": "mutable",
                    "name": "recipient",
                    "nameLocation": "12308:9:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 550,
                    "src": "12300:17:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 489,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "12300:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "12299:19:0"
              },
              "returnParameters": {
                "id": 492,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "12326:0:0"
              },
              "scope": 575,
              "src": "12274:639:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 561,
                "nodeType": "Block",
                "src": "13069:50:0",
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "id": 557,
                        "name": "_hasReceivedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 327,
                        "src": "13087:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 559,
                      "indexExpression": {
                        "id": 558,
                        "name": "addr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 552,
                        "src": "13106:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "13087:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 556,
                    "id": 560,
                    "nodeType": "Return",
                    "src": "13080:31:0"
                  }
                ]
              },
              "functionSelector": "17ae867a",
              "id": 562,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "hasReceivedTokens",
              "nameLocation": "13008:17:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 553,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 552,
                    "mutability": "mutable",
                    "name": "addr",
                    "nameLocation": "13034:4:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 562,
                    "src": "13026:12:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 551,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "13026:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "13025:14:0"
              },
              "returnParameters": {
                "id": 556,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 555,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 562,
                    "src": "13063:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 554,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "13063:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "13062:6:0"
              },
              "scope": 575,
              "src": "12999:120:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 573,
                "nodeType": "Block",
                "src": "13272:49:0",
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "id": 569,
                        "name": "_tokenAllocations",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 331,
                        "src": "13290:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 571,
                      "indexExpression": {
                        "id": 570,
                        "name": "addr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 564,
                        "src": "13308:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "13290:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 568,
                    "id": 572,
                    "nodeType": "Return",
                    "src": "13283:30:0"
                  }
                ]
              },
              "functionSelector": "8d0fac76",
              "id": 574,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getTokenAllocation",
              "nameLocation": "13207:18:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 565,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 564,
                    "mutability": "mutable",
                    "name": "addr",
                    "nameLocation": "13234:4:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 574,
                    "src": "13226:12:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 563,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "13226:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "13225:14:0"
              },
              "returnParameters": {
                "id": 568,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 567,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 574,
                    "src": "13263:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 566,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "13263:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "13262:9:0"
              },
              "scope": 575,
              "src": "13198:123:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            }
          ],
          "scope": 576,
          "src": "10440:2884:0",
          "usedErrors": [],
          "usedEvents": []
        }
      ],
      "src": "184:13142:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.21+commit.d9974bed.Emscripten.clang"
    },
    "networks": {
      "56": {
        "events": {},
        "links": {},
        "address": "0x1ad6edff1cd085e8e0121938902890970b455dac",
        "transactionHash": "0xe8a6496befd651a267950bf102ff9a2798cbbdaffb3f525fa350b80b72b4e74e"
      }
    },
    "schemaVersion": "3.4.16",
    "updatedAt": "2024-04-19T08:41:17.922Z",
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }
]
