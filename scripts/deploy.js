async function main() {
  const DustyTapes = await ethers.getContractFactory("DustyTapes")

  // Start deployment, returning a promise that resolves to a contract object
  const dustytapes = await DustyTapes.deploy()
  await dustytapes.deployed()
  console.log("Contract deployed to address:", dustytapes.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
