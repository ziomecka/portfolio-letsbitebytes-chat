const { MongoDB } = require('../../databases/');
const { UserDatabase } = require('./index');

describe('UserDatabase', () => {
  it('stores first message in conversation', async () => {
    // given
    const save = sinon.stub().resolves(true);
    const userDocument = {
      login: 'someLogin',
      conversations: [],
      save,
    };

    const mongoDB = sinon.createStubInstance(MongoDB, {
      findOne: sinon.stub().resolves(userDocument),
    });
    const userDatabase = new UserDatabase(mongoDB);

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
    const save = sinon.stub().resolves(true);
    const userDocument = {
      login: 'someLogin',
      conversations: [],
      save,
    };

    const mongoDB = sinon.createStubInstance(MongoDB, {
      findOne: sinon.stub().resolves(userDocument),
    });
    const userDatabase = new UserDatabase(mongoDB);

    // when
    const statement = [ 'dddd', 'Foo<script>xss</script>Poo' ];
    await userDatabase.storeMessage('trainee', 'trainer', statement);

    // then
    expect(userDocument.conversations).toHaveLength(1);
    expect(userDocument.conversations[ 0 ].conversation[ 0 ])
      .toEqual([ 'dddd', 'Foo&lt;script&gt;xss&lt;/script&gt;Poo', undefined ]);
  });
});
