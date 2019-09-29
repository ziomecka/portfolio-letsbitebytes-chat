import * as React from 'react';
import { AppButton } from '../../AppButton/';
import texts from './texts';

export const OkButton: React.FunctionComponent<Partial<AppDialogProps>> = ({
  closeDialog,
}) => (
  <AppButton
    buttonProps={{
      onClick: closeDialog,
      variant: 'text',
      color: 'primary',
    }}
  >
    { texts.ok }
  </AppButton>
);
