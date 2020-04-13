import { initialValue, setName, mergeUsers } from '../model';

const userMock = initialValue;

describe('App model', () => {
  it('should update a name of an user', () => {
    const fixture = 'Jakub';

    expect(setName(userMock, fixture)).toHaveProperty('firstName', fixture);
  });

  it('should merge users correctly, with deep merging of roles', () => {
    const newUser = {
      ...userMock,
      roles: ['user']
    };

    // main pitfall
    expect(mergeUsers(userMock, newUser)).toHaveProperty(
      'roles',
      [...(userMock.roles || []), ...newUser.roles]
    );
    // simplify testing all properties
    expect(mergeUsers(userMock, newUser)).toMatchSnapshot();
  });
});
