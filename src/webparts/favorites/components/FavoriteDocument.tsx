import * as React from 'react';
import styles from './Favorites.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

import { IFavoriteDocumentProps } from './IFavoriteDocumentProps';

export default class FavoriteDocument extends React.Component<IFavoriteDocumentProps, {}> {
  public render(): React.ReactElement<IFavoriteDocumentProps> {
    return (
      <div>
        <a href={`${this.props.Document.Uri}?Web=1`} target='_blank' data-interception='off' className={styles.document}>
          {escape(this.props.Document.Name)}
        </a>
      </div>
    );
  }
}
