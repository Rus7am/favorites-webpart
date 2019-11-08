import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';

import Favorites from './components/Favorites';
import { IFavoritesProps } from './components/IFavoritesProps';

export interface IFavoritesWebPartProps { }

export default class FavoritesWebPart extends BaseClientSideWebPart<IFavoritesWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IFavoritesProps> = React.createElement(
      Favorites,
      {
        spHttpClient: this.context.spHttpClient,
        webUrl: this.context.pageContext.web.absoluteUrl.replace(/\/$/, '')
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return { pages: [] };
  }
}
