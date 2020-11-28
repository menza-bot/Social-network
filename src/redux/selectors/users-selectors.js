import { createSelector } from "reselect"

export const getUsers = (state) => {
    return state.usersPage.users
}

export const getStateSelector = (state) => {
    return getUsers(state).filter(u => true)
}

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getCurretPage = (state) => {
    return state.usersPage.currentPage
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
} 

export const getToggleIsFollowing = (state) => {
    return state.usersPage.toggleIsFollowing
}