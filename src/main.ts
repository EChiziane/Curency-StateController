import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHFqVVhkW1pFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9jT39QdkBmX3tbdnxdQQ==;Mgo+DSMBPh8sVXJ0S0d+XE9AcVRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xTcERgWXpbdnBQQWBeVg==;ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkNiWn9bdXJRQ2deVkM=;NjU1MjkzQDMyMzAyZTMxMmUzMEUrU3lLc1JoeWllUXJwejZCdDZGQWpvVitMRTI0ZGd1QmtjeWpSOENqK0k9;NjU1Mjk0QDMyMzAyZTMxMmUzMEN0STYvdFZYd28vRWZscllwN09SYzF1VmtncDVBVThGVE1SMjVQNExyRms9;NRAiBiAaIQQuGjN/V0Z+XU9EaFtFVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdEVlWHxedXFTQmVUUUBy;NjU1Mjk2QDMyMzAyZTMxMmUzMFhkbGpoZ3c1bDdpdHJtOEtwTUZuSGduNW9vR0c4ZzdaeEhCb3RhMnlSdDg9;NjU1Mjk3QDMyMzAyZTMxMmUzMEtFTGJ2dnZSS1lRM2pLOU10S0w4VnVIMDk0VUxqd0JWcm90cUFHTXY2Unc9;Mgo+DSMBMAY9C3t2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkNiWn9bdXJRQGFcUkU=;NjU1Mjk5QDMyMzAyZTMxMmUzME5zZ0xkbzhVSTVDdXozNnRsS0xUVzFnNHhMTXVGYkpERkoyLzlOa0xEcDA9;NjU1MzAwQDMyMzAyZTMxMmUzMGpxeVhaVHl0N25PYVBVYnI0eG8vbEIvbmRCTEZnMGlub202OHVqdk9oTFk9');
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
