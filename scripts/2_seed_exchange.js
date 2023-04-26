const { ethers } = require("hardhat");
const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), "ether")
}

const wait = (seconds) => {
    const milliseconds = seconds * 1000
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function main() {

    // Fetch accounts from wallet - these are unlocked
    const accounts = await ethers.getSigners()

    // Fetch the deployed contract or tokens
    const Finix = await ethers.getContractAt("Token", "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0")
    console.log(`Finix fetched: ${Finix.address}`)

    const Auriga = await ethers.getContractAt("Token", "0x5FbDB2315678afecb367f032d93F642f64180aa3")
    console.log(`Auriga fetched: ${Auriga.address}`)

    const Empyrean = await ethers.getContractAt("Token", "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512")
    console.log(`Empyrean fetched: ${Empyrean.address}`)

    const Helix = await ethers.getContractAt("Token", "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9")
    console.log(`Helix fetched: ${Helix.address}`)

    const Quantum = await ethers.getContractAt("Token", "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9")
    console.log(`Quantum fetched: ${Quantum.address}`)

    const Sirius = await ethers.getContractAt("Token", "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707")
    console.log(`Sirius fetched: ${Sirius.address}`)

    const Zeroconium = await ethers.getContractAt("Token", "0x0165878A594ca255338adfa4d48449f69242Eb8F")
    console.log(`Zeroconium fetched: ${Zeroconium.address}`)

    //Fetch the deployed DecentralizedExchange
    const decentralizedexchange = await ethers.getContractAt("DecentralizedExchange", "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853")
    console.log(`Decentralized Exchange fetched: ${decentralizedexchange.address}\n`)

    //Give tokens to account
    const sender = accounts[0]
    const receiver = accounts[1]
    let amount = tokens(10000)

    let transaction, result
    //user1 transfers 10,000 Finix
    transaction = await Finix.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} tokens from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Auriga
    transaction = await Auriga.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} tokens from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Empyrean
    transaction = await Empyrean.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} tokens from ${sender.address} to ${receiver.address}\n`)
    //user11 transfers 10,000 Helix
    transaction = await Helix.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} tokens from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Quantum
    transaction = await Quantum.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} tokens from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Sirius
    transaction = await Sirius.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} tokens from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Zeroconium
    transaction = await Zeroconium.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} tokens from ${sender.address} to ${receiver.address}\n`)


    //Set up exchange users
    const user1 = accounts[0]
    const user2 = accounts[1]
    amount = tokens(10000)

    //APPROVES AND DEPOSITS OF 100,000 TOKENs

    //FINIX TOKENs
    //User1 approves
    transaction = await Finix.connect(user1).approve(decentralizedexchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} Finix tokens from ${user1.address}`)

    //User1 deposit
    transaction = await decentralizedexchange.connect(user1).depositToken(Finix.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} Finix tokens from ${user1.address}\n`)

    //AURIGA TOKENs
    //User2 approves 10,000 Auriga tokens
    transaction = await Auriga.connect(user2).approve(decentralizedexchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} Auriga tokens from ${user2.address}`)

    //user2  deposits 10,000 Auriga tokens
    transaction = await decentralizedexchange.connect(user2).depositToken(Auriga.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} Auriga tokens from ${user2.address}\n`)

    //EMPYREAN TOKENs
    // User1 approves
    transaction = await Empyrean.connect(user1).approve(decentralizedexchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} Empyrean tokens from ${user1.address}`)

    // User1 deposit
    transaction = await decentralizedexchange.connect(user1).depositToken(Empyrean.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} Empyrean tokens from ${user1.address}\n`)

    // HELIX TOKENS
    // User2 approves 10,000 Helix tokens
    transaction = await Helix.connect(user2).approve(decentralizedexchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} Helix tokens from ${user2.address}`)

    // User2 deposits 10,000 Helix tokens
    transaction = await decentralizedexchange.connect(user2).depositToken(Helix.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} Helix tokens from ${user2.address}\n`)

    // QUANTUM TOKENS
    // User1 approves
    transaction = await Quantum.connect(user1).approve(decentralizedexchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} Quantum tokens from ${user1.address}`)

    // User1 deposit
    transaction = await decentralizedexchange.connect(user1).depositToken(Quantum.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} Quantum tokens from ${user1.address}\n`)

    // SIRIUS TOKENS
    // User2 approves 10,000 Sirius tokens
    transaction = await Sirius.connect(user2).approve(decentralizedexchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} Sirius tokens from ${user2.address}`)

    // User2 deposits 10,000 Sirius tokens
    transaction = await decentralizedexchange.connect(user2).depositToken(Sirius.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} Sirius tokens from ${user2.address}\n`)

    // ZEROCONIUM TOKENS
    // User1 approves
    transaction = await Zeroconium.connect(user1).approve(decentralizedexchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} Zeroconium tokens from ${user1.address}`)

    // User1 deposit
    transaction = await decentralizedexchange.connect(user1).depositToken(Zeroconium.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} Zeroconium tokens from ${user1.address}\n`)

    //MAKE AND CANCEL ORDERS
    let orderId
    //user1 Makes Order using Auriga to get Finix
    transaction = await decentralizedexchange.connect(user1).makeOrder(Auriga.address, tokens(100), Finix.address, tokens(10))
    result = await transaction.wait()
    console.log(`Made order from ${user1.address}`)

    //Cancel Orders
    //user1 cancels order
    orderId = result.events[0].args.id
    transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
    console.log(result.events);
    result = await transaction.wait()
    console.log(`Cancelled order from ${user1.address}\n`)
    //wait 1 seconds
    await wait(1)

    //Fill Orders
    //user1 makes order to get tokens
    transaction = await decentralizedexchange.connect(user1).makeOrder(Auriga.address, tokens(100), Finix.address, tokens(10))
    result = await transaction.wait()
    console.log(`Made order from ${user1.address}`)

    //user2 fills order
    orderId = result.events[0].args.id
    transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
    result = await transaction.wait()
    console.log(`Filled order from ${user1.address}\n`)
    //wait 1 seconds
    await wait(1)

    //user1 makes another order
    transaction = await decentralizedexchange.makeOrder(Auriga.address, tokens(50), Finix.address, tokens(15))
    result = await transaction.wait()
    console.log(`Made order from ${user1.address}`)

    //user2 fills the another order
    orderId = result.events[0].args.id
    transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
    result = await transaction.wait()
    console.log(`Filled order from ${user1.address}\n`)

    //wait 1 seconds
    await wait(1)

    //users1 makes final order
    transaction = await decentralizedexchange.connect(user1).makeOrder(Auriga.address, tokens(200), Finix.address, tokens(20))
    result = await transaction.wait()
    console.log(`Made order from ${user1.address}`)

    //user2 fills final order
    orderId = result.events[0].args.id
    transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
    result = await transaction.wait()
    console.log(`Filled order from ${user1.address}\n`)
    //wait 1 seconds
    await wait(1)












//
//
// ///NEW CODE
// //MAKE AND CANCEL ORDERS
//     let orderId
//
// // AURIGA TOKENS
// //user1 Makes Order1 get EMPYREAN Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Auriga.address, tokens(50), Empyrean.address, tokens(10))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //Fill Orders
// //user1 makes Order2 to get FINIX  Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Auriga.address, tokens(78), Finix.address, tokens(13))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fulfills Order2
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 makes Order3 to get HELIX Tokens
//     transaction = await decentralizedexchange.makeOrder(Auriga.address, tokens(50), Helix.address, tokens(15))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order3
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order4 to get QUANTUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Auriga.address, tokens(200), Quantum.address, tokens(20))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order4
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 Makes Order5 to get SIRIUS Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Auriga.address, tokens(30), Sirius.address, tokens(5))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order6 to get ZEROCONIUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Auriga.address, tokens(200), Zeroconium.address, tokens(20))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order6
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
//
// // EMPYREAN TOKENS
// //user1 Makes Order1 get AURIGA Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Empyrean.address, tokens(5), Auriga.address, tokens(10))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //Fill Orders
// //user1 makes Order2 to get FINIX  Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Empyrean.address, tokens(7), Finix.address, tokens(14))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fulfills Order2
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 makes Order3 to get HELIX Tokens
//     transaction = await decentralizedexchange.makeOrder(Empyrean.address, tokens(50), Helix.address, tokens(100))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order3
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order4 to get QUANTUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Empyrean.address, tokens(10), Quantum.address, tokens(20))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order4
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 Makes Order5 to get SIRIUS Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Empyrean.address, tokens(14), Sirius.address, tokens(28))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order6 to get ZEROCONIUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Empyrean.address, tokens(65), Zeroconium.address, tokens(130))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order6
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
//
// // FINIX TOKENS
// //user1 Makes Order1 get AURIGA Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Finix.address, tokens(88), Auriga.address, tokens(88))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //Fill Orders
// //user1 makes Order2 to get EMPYREAN  Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Finix.address, tokens(48), Empyrean.address, tokens(48))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fulfills Order2
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 makes Order3 to get HELIX Tokens
//     transaction = await decentralizedexchange.makeOrder(Finix.address, tokens(6), Helix.address, tokens(6))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order3
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order4 to get QUANTUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Finix.address, tokens(80), Quantum.address, tokens(80))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order4
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 Makes Order5 to get SIRIUS Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Finix.address, tokens(70), Sirius.address, tokens(70))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order6 to get ZEROCONIUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Finix.address, tokens(100), Zeroconium.address, tokens(100))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order6
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
//
// // HELIX TOKENS
// //user1 Makes Order1 get AURIGA Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Finix.address, tokens(5), Auriga.address, tokens(10))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //Fill Orders
// //user1 makes Order2 to get EMPYREAN  Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Finix.address, tokens(7), Empyrean.address, tokens(14))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fulfills Order2
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 makes Order3 to get HELIX Tokens
//     transaction = await decentralizedexchange.makeOrder(Finix.address, tokens(50), Helix.address, tokens(100))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order3
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order4 to get QUANTUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Finix.address, tokens(10), Quantum.address, tokens(20))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order4
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 Makes Order5 to get SIRIUS Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Finix.address, tokens(14), Sirius.address, tokens(28))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order6 to get ZEROCONIUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Finix.address, tokens(65), Zeroconium.address, tokens(130))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order6
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
//
//
// // FINIX TOKENS
// //user1 Makes Order1 get AURIGA Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Finix.address, tokens(88), Auriga.address, tokens(88))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //Fill Orders
// //user1 makes Order2 to get EMPYREAN  Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Finix.address, tokens(48), Empyrean.address, tokens(48))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fulfills Order2
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 makes Order3 to get HELIX Tokens
//     transaction = await decentralizedexchange.makeOrder(Finix.address, tokens(6), Helix.address, tokens(6))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order3
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order4 to get QUANTUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Finix.address, tokens(80), Quantum.address, tokens(80))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order4
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 Makes Order5 to get SIRIUS Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Finix.address, tokens(70), Sirius.address, tokens(70))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order6 to get ZEROCONIUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Finix.address, tokens(100), Zeroconium.address, tokens(100))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order6
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
//
// // HELIX TOKENS
// //user1 Makes Order1 get AURIGA Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Helix.address, tokens(300), Auriga.address, tokens(100))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //Fill Orders
// //user1 makes Order2 to get EMPYREAN  Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Helix.address, tokens(28), Empyrean.address, tokens(14))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fulfills Order2
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 makes Order3 to get FINIX Tokens
//     transaction = await decentralizedexchange.makeOrder(Helix.address, tokens(22), Finix.address, tokens(11))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order3
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order4 to get QUANTUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Helix.address, tokens(64), Quantum.address, tokens(32))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order4
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 Makes Order5 to get SIRIUS Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Helix.address, tokens(32), Sirius.address, tokens(16))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order6 to get ZEROCONIUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Helix.address, tokens(16), Zeroconium.address, tokens(8))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order6
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// // QUANTUM TOKENS
// //user1 Makes Order1 get AURIGA Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Quantum.address, tokens(30), Auriga.address, tokens(10))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //Fill Orders
// //user1 makes Order2 to get EMPYREAN  Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Quantum.address, tokens(2), Empyrean.address, tokens(1))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fulfills Order2
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 makes Order3 to get FINIX Tokens
//     transaction = await decentralizedexchange.makeOrder(Quantum.address, tokens(24), Finix.address, tokens(15))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order3
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order4 to get HELIX Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Quantum.address, tokens(6), Helix.address, tokens(3))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order4
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 Makes Order5 to get SIRIUS Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Quantum.address, tokens(52), Sirius.address, tokens(26))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order6 to get ZEROCONIUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Quantum.address, tokens(160), Zeroconium.address, tokens(8))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order6
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
//
// // SIRIUS TOKENS
// //user1 Makes Order1 get AURIGA Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Sirius.address, tokens(300), Auriga.address, tokens(100))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //Fill Orders
// //user1 makes Order2 to get EMPYREAN  Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Sirius.address, tokens(150), Empyrean.address, tokens(50))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fulfills Order2
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 makes Order3 to get FINIX Tokens
//     transaction = await decentralizedexchange.makeOrder(Sirius.address, tokens(75), Finix.address, tokens(15))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order3
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order4 to get HELIX Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Sirius.address, tokens(125), Helix.address, tokens(25))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order4
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 Makes Order5 to get QUANTUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Sirius.address, tokens(30), Quantum.address, tokens(6))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order6 to get ZEROCONIUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Sirius.address, tokens(55), Zeroconium.address, tokens(10))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order6
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// // ZEROCONIUM TOKENS
// //user1 Makes Order1 get AURIGA Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Zeroconium.address, tokens(12), Auriga.address, tokens(108))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //Fill Orders
// //user1 makes Order2 to get EMPYREAN  Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Zeroconium.address, tokens(20), Empyrean.address, tokens(180))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fulfills Order2
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 makes Order3 to get FINIX Tokens
//     transaction = await decentralizedexchange.makeOrder(Zeroconium.address, tokens(6), Finix.address, tokens(54))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order3
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order4 to get HELIX Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Zeroconium.address, tokens(9), Helix.address, tokens(81))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order4
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //user1 Makes Order5 to get QUANTUM Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Zeroconium.address, tokens(7), Quantum.address, tokens(63))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //Cancel Orders
// //user1 cancels Order1
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user1).cancelOrder(orderId)
//     console.log(result.events);
//     result = await transaction.wait()
//     console.log(`Cancelled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
// //users1 makes Order6 to get SIRIUS Tokens
//     transaction = await decentralizedexchange.connect(user1).makeOrder(Zeroconium.address, tokens(5), Sirius.address, tokens(45))
//     result = await transaction.wait()
//     console.log(`Made order from ${user1.address}`)
//
// //user2 fills Order6
//     orderId = result.events[0].args.id
//     transaction = await decentralizedexchange.connect(user2).fillOrder(orderId)
//     result = await transaction.wait()
//     console.log(`Filled order from ${user1.address}\n`)
// //wait 1 seconds
//     await wait(1)
//
//
//





    //SEED OPEN ORDERs
    //user1 makes 10 orders
    for (let i = 1; i <= 10; i++) {
        transaction = await decentralizedexchange.connect(user1).makeOrder(Auriga.address, tokens(10 * i), Finix.address, tokens(10))
        result = await transaction.wait()

        console.log(`Made order from ${user1.address}`)

        // Wait 1 second
        await wait(1)
    }
    //user2 makes 10 orders
    for (let i = 1; i <= 10; i++) {
        transaction = await decentralizedexchange.connect(user2).makeOrder(Finix.address, tokens(10), Auriga.address, tokens(10 * i))
        result = await transaction.wait()

        console.log(`Made order from ${user2.address}`)

        // Wait 1 second
        await wait(1)
    }

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});