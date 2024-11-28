import * as create from './Create'
import * as GetByUsername from './GetByUsername'

export const UserProvider = {
    ...create,
    ...GetByUsername
}