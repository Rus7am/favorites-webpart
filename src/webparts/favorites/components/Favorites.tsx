import * as React from 'react';
import { SPHttpClientResponse, SPHttpClient } from '@microsoft/sp-http';
import styles from './Favorites.module.scss';
import { IFavoritesProps } from './IFavoritesProps';
import { IFavoritesState } from './IFavoritesState';

import FavoriteDocument from './FavoriteDocument';
import { IFavoriteDocument } from '../IFavoriteDocument';

export default class Favorites extends React.Component<IFavoritesProps, IFavoritesState> {
  constructor(props: IFavoritesProps) {
    super(props);

    this.state = { documents: [] };
  }

  public async componentDidMount() {
    let spResponse = await this.props.spHttpClient.get(`${this.props.webUrl}/_api/social.following/my/followed(types=2)`, SPHttpClient.configurations.v1);
    let spResponseJson = await spResponse.json() as { value: IFavoriteDocument[] };
    this.setState({ documents: spResponseJson.value });
  }

  public render(): React.ReactElement<IFavoritesProps> {
    return (
      <div className={styles.favorites}>
        <div className={styles.container}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.column}>
                <span className={styles.title}>Favorite documents</span>
                {this.state.documents.map((document) => {
                  return <FavoriteDocument Document={document} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
