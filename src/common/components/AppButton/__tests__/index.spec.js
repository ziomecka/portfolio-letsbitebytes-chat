const { AppButton } = require('../index');

describe('AppButton component', () => {
  const label = 'fooLabel';
  const defaultButtonProps = { onClick: () => {} };
  const boxClassName = 'AppButton-box';
  const touchRippleClassName = 'AppButton-adjustTouchRipple';
  const classNameRegExp = new RegExp(
    `[\\w\\s-]*${ boxClassName }[\\w\\s-]+${ touchRippleClassName }[\\w\\s-]*`
  );

  const build = (props = { buttonProps: defaultButtonProps }) => {
    const wrapper = mount(<AppButton {...props}>{label}</AppButton>);
    const component = wrapper.find(AppButton);
    const componentProps = component.props();

    return { wrapper, component, componentProps };
  };

  it('renders label', () => {
    // when
    const { componentProps } = build();

    // then
    expect(componentProps.children).toBe(label);
  });

  it('fires onClick callback', () => {
    // given
    const spy = sinon.spy();
    const { wrapper } = build({ buttonProps: { onClick: spy } });

    // when
    wrapper.find('button').first().simulate('click');

    // then
    expect(spy.calledOnce).toBe(true);
  });

  it('has default autofocus of false', () => {
    // given
    const { wrapper } = build({ buttonProps: {} });

    // then
    expect(wrapper.find('div').first().prop('autoFocus')).toEqual(false);
  });

  it('sets autofocus to true', () => {
    // given
    const { wrapper } = build({ autoFocus: true, buttonProps: {} });

    // then
    expect(wrapper.find('div').first().prop('autoFocus')).toEqual(true);
  });

  it('passes classnames to wrapper', () => {
    // given
    const { wrapper } = build({ buttonProps: {} });

    // then
    expect(wrapper.find('div').first().prop('className').match(classNameRegExp)).toHaveLength(1);
  });
});
