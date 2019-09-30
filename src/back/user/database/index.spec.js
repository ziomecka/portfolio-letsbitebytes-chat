const { MongoDB } = require('../../databases/');
const { UsersDatabase } = require('./index');

describe('UsersDatabase', () => {
  const buildUserDatabase = (conversations = [], login = 'fooLogin') => {
    const userDocument = {
      login,
      conversations,
      save: sinon.stub().resolves(true),
    };

    const mongoDB = sinon.createStubInstance(MongoDB, {
      findOne: sinon.stub().resolves(userDocument),
    });

    const usersDatabase = new UsersDatabase(mongoDB);

    return {
      usersDatabase,
      userDocument,
    };
  };

  it('stores first message in conversation', async () => {
    // given
    const { usersDatabase, userDocument } = buildUserDatabase();

    // when
    const statement = [ 'dddd', 'someMessage' ];
    await usersDatabase.storeMessage('trainee', 'trainer', statement);

    // then
    expect(userDocument.conversations).toHaveLength(1);
    expect(userDocument.conversations[ 0 ].conversation[ 0 ])
      .toEqual([ 'dddd', 'someMessage', undefined ]);
  });

  it('stores message with escaped html', async () => {
    // given
    const { usersDatabase, userDocument } = buildUserDatabase();

    // when
    const statement = [ 'dddd', 'Foo<script>xss</script>Poo' ];
    await usersDatabase.storeMessage('trainee', 'trainer', statement);

    // then
    expect(userDocument.conversations).toHaveLength(1);
    expect(userDocument.conversations[ 0 ].conversation[ 0 ])
      .toEqual([ 'dddd', 'Foo&#x3C;script&#x3E;xss&#x3C;/script&#x3E;Poo', undefined ]);
  });

  it('stores message without double escaped html', async () => {
    // given
    const { usersDatabase, userDocument } = buildUserDatabase();

    // when
    const statement = [ 'dddd', 'Foo&#x3C;script&#x3E;xss&#x3C;/script&#x3E;Poo' ];
    await usersDatabase.storeMessage('trainee', 'trainer', statement);

    // then
    expect(userDocument.conversations).toHaveLength(1);
    expect(userDocument.conversations[ 0 ].conversation[ 0 ])
      .toEqual([ 'dddd', 'Foo&#x3C;script&#x3E;xss&#x3C;/script&#x3E;Poo', undefined ]);
  });

  it('stores first message in conversation', async () => {
    // given
    const { usersDatabase, userDocument } = buildUserDatabase();

    // when
    const statement = [ 'dddd', 'someMessage' ];
    await usersDatabase.storeMessage('trainee', 'trainer', statement);

    // then
    expect(userDocument.conversations).toHaveLength(1);
    expect(userDocument.conversations[ 0 ].conversation[ 0 ])
      .toEqual([ 'dddd', 'someMessage', undefined ]);
  });
});
