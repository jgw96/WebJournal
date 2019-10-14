import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-split-pane content-id="menu-content" when="sm">
          <ion-menu content-id="menu-content">
            <ion-header>
              <ion-toolbar color="primary">
                <ion-title>Menu</ion-title>
              </ion-toolbar>
            </ion-header>

            <ion-content>
              <ion-list>
                <ion-menu-toggle auto-hide="false">
                  <ion-item button>
                    <ion-icon slot="start" name='home'></ion-icon>
                    <ion-label>
                      Home
                    </ion-label>
                  </ion-item>
                </ion-menu-toggle>
              </ion-list>
            </ion-content>
          </ion-menu>

          <ion-router useHash={false}>
            <ion-route url="/" component="app-home" />
            <ion-route url="/profile/:name" component="app-profile" />
          </ion-router>
          <ion-router-outlet animated={false} id="menu-content"></ion-router-outlet>

        </ion-split-pane>
      </ion-app>
    );
  }
}
