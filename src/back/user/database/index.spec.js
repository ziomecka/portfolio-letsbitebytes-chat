const { MongoDB } = require('../../databases/');
const { UserDatabase } = require('./index');

describe('UserDatabase', () => {
  const buildUserDatabase = (conversations = [], login = 'fooLogin') => {
    const userDocument = {
      login,
      conversations,
      save: sinon.stub().resolves(true),
    };

    const mongoDB = sinon.createStubInstance(MongoDB, {
      findOne: sinon.stub().resolves(userDocument),
    });

    const userDatabase = new UserDatabase(mongoDB);

    return {
      userDatabase,
      userDocument,
    };
  };

  it('stores first message in conversation', async () => {
    // given
    const { userDatabase, userDocument } = buildUserDatabase();

    // when
    const statement = [ 'dddd', 'someMessage' ];
    await userDatabase.storeMessage('trainee', 'trainer', statement);

    // then
    expect(userDocument.conversations).toHaveLength(1);
    expect(userDocument.conversations[ 0 ].conversation[ 0 ])
      .toEqual([ 'dddd', 'someMessage', undefined ]);
  });

  it('stores message with escaped html', async () => {
    // given
    const { userDatabase, userDocument } = buildUserDatabase();

    // when
    const statement = [ 'dddd', 'Foo<script>xss</script>Poo' ];
    await userDatabase.storeMessage('trainee', 'trainer', statement);

    // then
    expect(userDocument.conversations).toHaveLength(1);
    expect(userDocument.conversations[ 0 ].conversation[ 0 ])
      .toEqual([ 'dddd', 'Foo&#x3C;script&#x3E;xss&#x3C;/script&#x3E;Poo', undefined ]);
  });

  it('stores message without double escaped html', async () => {
    // given
    const { userDatabase, userDocument } = buildUserDatabase();

    // when
    const statement = [ 'dddd', 'Foo&#x3C;script&#x3E;xss&#x3C;/script&#x3E;Poo' ];
    await userDatabase.storeMessage('trainee', 'trainer', statement);

    // then
    expect(userDocument.conversations).toHaveLength(1);
    expect(userDocument.conversations[ 0 ].conversation[ 0 ])
      .toEqual([ 'dddd', 'Foo&#x3C;script&#x3E;xss&#x3C;/script&#x3E;Poo', undefined ]);
  });

  it('stores first message in conversation', async () => {
    // given
    const { userDatabase, userDocument } = buildUserDatabase();

    // when
    const statement = [ 'dddd', 'someMessage' ];
    await userDatabase.storeMessage('trainee', 'trainer', statement);

    // then
    expect(userDocument.conversations).toHaveLength(1);
    expect(userDocument.conversations[ 0 ].conversation[ 0 ])
      .toEqual([ 'dddd', 'someMessage', undefined ]);
  });
});
