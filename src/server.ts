/**
 * the polyfills must be the first thing imported
 */
import './polyfills.ts';
import './__2.1.1.workaround.ts'; // temporary until 2.1.1 things are patched in Core
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
// import * as morgan from 'morgan';
import * as compression from 'compression';

import { createEngine } from 'angular2-express-engine';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.node.module';
import { environment } from './environments/environment';
import { routes } from './server.routes';


/**
 * enable prod mode for production environments
 */
enableProdMode();

const app  = express();
const ROOT = path.join(path.resolve(__dirname, '..'));
const port = process.env.PORT || 80;



/**
 * Express View
 */
app.engine('.html', createEngine({}));
app.set('views', path.join(ROOT, 'client'));
app.set('view engine', 'html');
app.set('json spaces', 2);

/**
 * Enable compression
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());
app.use(compression());

/**
 * serve static files
 */

// app.use(morgan('dev'));

function cacheControl(req, res, next) {
  // instruct browser to revalidate in 60 seconds
  res.header('Cache-Control', 'max-age=60');
  next();
}
// Serve static files
app.use('/assets', cacheControl, express.static(path.join(__dirname, 'assets'), {maxAge: 30}));
app.use(cacheControl, express.static(path.join(ROOT, 'client'), {index: false}));

/**
 * place your api routes here
 */
import { sforceApi } from './backend/api';
// app.use('/api', api);
app.use('/api', sforceApi());

/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req: any, res: any) {
  res.render('index', {
    req,
    res,
    ngModule: AppModule,
    preboot: false,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    hostname: req.hostname,
    originUrl: `http://${req.hostname}:${ app.get('port') }`
  });
}

/**
 * use universal for specific routes
 */
app.get('/', ngApp);
routes.forEach(route => {
  app.get(`/${route}`, ngApp);
  app.get(`/${route}/*`, ngApp);
});

/**
 * if you want to use universal for all routes, you can use the '*' wildcard
 */

app.get('*', function (req: any, res: any) {
  res.setHeader('Content-Type', 'application/json');
  const pojo = {status: 404, message: 'No Content'};
  const json = JSON.stringify(pojo, null, 2);
  res.status(404).send(json);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
