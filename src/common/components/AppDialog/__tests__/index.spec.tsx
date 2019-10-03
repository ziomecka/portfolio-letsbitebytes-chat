import {
  Button,
  DialogContentText,
  Typography,
} from '@material-ui/core';
import { AppDialog } from '../';

const {
  buildWrapper,
  sinon,
} = (global as Global);

describe('AppDialog', () => {
  const texts = {
    title: [
      ['Any title'],
    ] as DialogTitle,
    content: [
      ['First line'],
      [ 'Second line', 'h3' ],
      [ ],
      [ 'Third line', 'p' ],
      [''],
    ] as DialogContent,
    expectedContent: '<p>First line</p><h3>Second line</h3><p>Third line</p>',
  };

  const spy = sinon.spy();

  const props: Partial<AppDialogProps> = {
    open: true,
    closeDialog: spy,
    classes: {},
    buttonsVariant: ButtonsVariants.ok,
    DialogProps: { disablePortal: true },
    ...texts,
  };

  afterEach(sinon.reset);

  it('gets open', () => {
    // when
    const { componentProps, cleanUp } = buildWrapper({ Component: AppDialog, props });

    // then
    expect((componentProps as AppDialogProps).open).toEqual(true);
    expect((componentProps.DialogProps.disablePortal)).toEqual(true);

    cleanUp();
  });

  it('renders title', () => {
    // when
    const { wrapper, cleanUp } = buildWrapper({ Component: AppDialog, props });
    const title = wrapper.find(Typography).first().find(Typography).first();
    const renderedTitle = title.find('span').text();

    // then
    expect(title.props().variant).toEqual('h6');
    expect(title.props().component).toEqual('h2');
    expect(renderedTitle).toEqual(texts.title[ 0 ][ 0 ]);

    cleanUp();
  });

  it('renders content', () => {
    // when
    const { wrapper, cleanUp } = buildWrapper({ Component: AppDialog, props });
    const content = wrapper.find(DialogContentText).props().dangerouslySetInnerHTML.__html;

    // then
    expect(content).toEqual(texts.expectedContent);

    cleanUp();
  });

  it('renders default ok button', () => {
    // when
    const { wrapper, cleanUp } = buildWrapper({ Component: AppDialog, props });
    const buttons = wrapper.find(Button);

    // then
    expect(buttons).toHaveLength(1);
    expect(buttons.first().text()).toEqual('I understand');

    cleanUp();
  });

  it('fires close function on button click', () => {
    // given

    const { wrapper, cleanUp } = (
      buildWrapper({ Component: AppDialog, props })
    );

    // when
    wrapper.find(Button).first().simulate('click');

    // then
    expect(spy.calledOnce).toEqual(true);

    cleanUp();
  });
});
