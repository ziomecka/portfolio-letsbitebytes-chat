require('regenerator-runtime/runtime');
import * as React from 'react';
import * as enzyme from 'enzyme';
import * as sinon from 'sinon';

const Adapter = require('enzyme-adapter-react-16');
enzyme.configure({ adapter: new Adapter() });

const { mount, shallow } = enzyme;

(global as Global).React = React;
(global as Global).mount = mount;
(global as Global).shallow = shallow;
(global as Global).sinon = sinon;
