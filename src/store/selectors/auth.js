import { createSelector } from 'reselect'


const currentUserId = (state) => state.auth.currentUser;

const currentUserPermission = (state) => state.users[currentUserId(state)].permission;


export const permissionSelector = createSelector(
  currentUserPermission,
  permission => ({admin: permission.admin}),
)
