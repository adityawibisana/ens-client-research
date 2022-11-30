// export const ensRegistrarAddr = '0x283Af0B28c62C092C9727F1Ee09c02CA627EB7F5' // Mainnet
export const ensRegistrarAddr = '0x283af0b28c62c092c9727f1ee09c02ca627eb7f5' // goerli

export const ensBaseRegistrarAddr = '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85'

export const ensRegistrarAbi = require('./ens-registrar-abi.json')
export const ensBaseRegistrarAbi = require('./ens-base-registrar-abi.json')

export const ensFairyVault = '0x481f50a5BdcCC0bc4322C4dca04301433dED50f0'

export const ensRegistrarConfig = {
  addressOrName: ensRegistrarAddr,
  contractInterface: ensRegistrarAbi,
}

export const ensResolver = '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41'
export const ensResolverGoerli = '0x840e870459a2c960d70ede14d6daf212c37429c6'
