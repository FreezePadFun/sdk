export interface LockParams {

token: string
amount: number
duration: number

}

export function createTokenLock(params: LockParams){

const lockData = {

token: params.token,
amount: params.amount,
duration: params.duration,
timestamp: Date.now()

}

return lockData

}
