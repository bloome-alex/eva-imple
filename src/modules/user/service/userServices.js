import User from '../model/User'

export const createUser = async({googleAuthenticated, firstname, surname, email, username, birthdate, password}) => {
    const user = new User({googleAuthenticated, firstname, surname, email, username, birthdate, password})
    return await user.save()
}