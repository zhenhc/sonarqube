/*
 * SonarQube
 * Copyright (C) 2009-2022 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { shallow } from 'enzyme';
import * as React from 'react';
import handleRequiredAuthentication from 'sonar-ui-common/helpers/handleRequiredAuthentication';
import { mockProjectAzureBindingResponse } from '../../../../helpers/mocks/alm-settings';
import { mockComponent, mockCurrentUser, mockLoggedInUser } from '../../../../helpers/testMocks';
import { TutorialsApp, TutorialsAppProps } from '../TutorialsApp';

jest.mock('sonar-ui-common/helpers/handleRequiredAuthentication', () => ({ default: jest.fn() }));

it('should render correctly', () => {
  expect(shallowRender()).toMatchSnapshot();
  expect(shallowRender({ projectBinding: mockProjectAzureBindingResponse() })).toMatchSnapshot();
});

it('should redirect if user is not logged in', () => {
  shallowRender({ currentUser: mockCurrentUser() });
  expect(handleRequiredAuthentication).toHaveBeenCalled();
});

function shallowRender(overrides: Partial<TutorialsAppProps> = {}) {
  return shallow(
    <TutorialsApp component={mockComponent()} currentUser={mockLoggedInUser()} {...overrides} />
  );
}
