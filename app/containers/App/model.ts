import { UserT } from './types';

export const initialValue: UserT = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  roles: ['admin']
};

export const setName = (state: UserT, firstName: string): UserT => ({
  ...state,
  firstName
});


export const mergeUsers = (currentUser: UserT, newUser: UserT): UserT => ({
  ...currentUser,
  ...newUser,
  ...((currentUser.roles || newUser.roles) && {
    roles: [
      ...(currentUser.roles || []),
      ...(newUser.roles || [])
    ]
  })
});

// *** 'a few time ago' area *** //

// const creatorProfileProperties = {
//   subscription: 'Medium',
//   roles: ['editor', 'subscriber']
// };

// export const mergeUsers = (currentUser: UserT, newUser: UserT): UserT => ({
//   ...currentUser,
//   ...newUser,
//   ...((currentUser.roles || newUser.roles) && {
//     roles: {
//       // ERROR: object instead of array
//       ...(currentUser.roles || []),
//       ...(newUser.roles || [])
//     }
//   })
//   // ...creatorProfileProperties
// });
