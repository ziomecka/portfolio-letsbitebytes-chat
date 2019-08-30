import * as React from 'react';
// import { Users } from '../Users/';
import { Conversation } from '../Conversation/';

const Conversations: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      {/* <Users /> */}
      <Conversation />
    </React.Fragment>
  )
}

export { Conversations };