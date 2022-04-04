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
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { translate } from 'sonar-ui-common/helpers/l10n';
import { getBaseUrl } from 'sonar-ui-common/helpers/urls';
import { OSs } from '../../types';

export interface DownloadBuildWrapperProps {
  os: OSs;
}

const filenames: { [x in OSs]: string } = {
  win: 'build-wrapper-win-x86.zip',
  linux: 'build-wrapper-linux-x86.zip',
  mac: 'build-wrapper-macosx-x86.zip'
};

export default function DownloadBuildWrapper(props: DownloadBuildWrapperProps) {
  const { os } = props;
  return (
    <div className="spacer-bottom">
      <h4 className="spacer-bottom">{translate('onboarding.analysis.build_wrapper.header', os)}</h4>
      <p className="spacer-bottom markdown">
        <FormattedMessage
          defaultMessage={translate('onboarding.analysis.build_wrapper.text')}
          id="onboarding.analysis.build_wrapper.text"
          values={{
            env_var: <code>{os === 'win' ? '%PATH%' : 'PATH'}</code>
          }}
        />
      </p>
      <p>
        <a
          className="button"
          download={filenames[os]}
          href={`${getBaseUrl()}/static/cpp/${filenames[os]}`}
          rel="noopener noreferrer"
          target="_blank">
          {translate('download_verb')}
        </a>
      </p>
    </div>
  );
}
