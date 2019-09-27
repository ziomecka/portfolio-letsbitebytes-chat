/* eslint-disable max-len */
import { SIGNATURE_CLASS } from '../../../common';
import { defaultUsers } from '../../maintenance/default-users';

const findByLogin =
(arr: { password: string, login: string }[], searchedLogin: string): { password: string } => (
  arr.find(({ login }) => login === searchedLogin) || { password: '' }
);

const { password: trainee } = findByLogin(defaultUsers, 'trainee');
const { password: trainer } = findByLogin(defaultUsers, 'trainer');

const signature = +
`<span class="${ SIGNATURE_CLASS }"><em>` +
'Katarzyna Ziomek-Zdanowicz,</em><em>Front end developer</em></span>';

const test = {
  open: false,
  title: [
    ['Welcome in the chat application'],
  ] as DialogTitle,
  content: [
    [
      signature,
    ],
  ] as DialogContent,
};

const welcome = {
  open: false,
  title: [
    ['First steps'],
  ] as DialogTitle,
  content: [
    [
      'If you want to test the application, you can log in as <strong>trainee</strong> or <strong>trainer</strong>.' +
      ` The passwords are: <strong>${ trainee }</strong> and <strong>${ trainer }</strong>, respectively.` +
      ' I suggest that you write them down, because after the message disappears you will not have access to them.',
    ],
    [
      'Feel free to chat with me. I\'m the user: <strong>ziomecka</strong>.',
    ],
    [
      'Have a nice chatting!',
    ],
    [
      signature,
    ],
  ] as DialogContent,
};

export default {
  test,
  welcome,
};


// In Future add to welcome:
// 'If you send me a message, I will receive an email notification and try to join the chat as soon as possible :-)'
