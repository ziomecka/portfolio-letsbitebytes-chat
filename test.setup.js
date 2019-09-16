/* eslint-disable */
const React = require('react');
const sinon = require('sinon');
const Adapter = require('enzyme-adapter-react-16');
const enzyme = require('enzyme');
const { mount, shallow } = enzyme;

enzyme.configure({ adapter: new Adapter() });

global.React = React;
global.mount = mount;
global.shallow = shallow;
global.sinon = sinon;
