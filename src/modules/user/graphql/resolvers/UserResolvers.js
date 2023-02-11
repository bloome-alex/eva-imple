import { createUser } from '../../service/userServices'

export default {
    Mutation: {
        createUser: async (_, {googleAuthenticated, firstname, surname, email, username, birthdate, password}) => {
            return await createUser({googleAuthenticated, firstname, surname, email, username, birthdate, password})
        }
    }
}