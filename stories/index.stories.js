import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '../src/components/component';

storiesOf('Component', module).add('Simple storybook', () => <Component title="Simple component" />);
