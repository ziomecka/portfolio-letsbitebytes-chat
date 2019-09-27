import { defaultUsers } from '../../maintenance/default-users';

const findByLogin =
(arr: { password: string, login: string }[], searchedLogin: string): { password: string } => (
  arr.find(({ login }) => login === searchedLogin) || { password: '' }
);

const { password: trainee } = findByLogin(defaultUsers, 'trainee');
const { password: trainer } = findByLogin(defaultUsers, 'trainer');

const test = {
  open: false,
  title: 'Welcome in the chat application',
  content: 'Kasia Ziomek-Zdanowicz, the front end developer :-)',
};

const welcome = {
  open: false,
  title: 'First steps',
  // content: [
  //   '<p>If you want to test the application, you can log in as trainee or trainer.</p>',
  //   `<p>The passwords are: ${ trainee } and ${ trainer }, respectively</p>`,
  //   '<p>I suggest that you write it down, because after the message disappears you will not have access to it.</p>',
  //   '<p>Feel free to chat with me. I\'m the user: ziomecka. </p>',
  //   '<p>Have a nice chatting!</p>',
  //   '<p>Kasia Ziomek-Zdanowicz,</p>',
  //   '<p>Front end developer</p>',
  // ],
  content: '' +
  'If you want to test the application, you can log in as trainee or trainer.' +
  '\n' +
  `The passwords are: ${ trainee } and ${ trainer }, respectively` +
  '\n' +
  'I suggest that you write it down, ' +
  'because after the message disappears you will not have access to it.' +
  '\n\n' +
  'Feel free to chat with me. I\'m the user: ziomecka. ' +
  '\n\n' +
  'Have a nice chatting!' +
  '\n\n' +
  'Kasia Ziomek-Zdanowicz,' +
  '\n' +
  'Front end developer',
};

export default {
  test,
  welcome,
};


// In Future add to welcome:

//'\n' +
// 'If you send me a message, ' +
// 'I will receive an email notification and try to join the chat as soon as possible :-)' +