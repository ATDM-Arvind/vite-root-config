import { LifeCycles, registerApplication, start } from "single-spa";
import { bootstrap, mount, unmount } from './header/acc-header';

registerApplication(
  'root-app',
  () => import('./header/acc-header'),
  () => true,
  { bootstrap, mount, unmount }
);

registerApplication({
  name: "@acc/profile",
  app: () =>
    System.import<LifeCycles>(
      "@acc/profile"
    ),
  activeWhen: ["/"],
});


registerApplication({
  name: "@acc/contactus",
  app: () =>
    System.import<LifeCycles>(
      "@acc/contactus"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@acc/orders",
  app: () =>
    System.import<LifeCycles>(
      "@acc/orders"
    ),
  activeWhen: ["/orders/:id"]
});

setTimeout(() => {
  start({
    urlRerouteOnly: true,
  });
}, 1000);
