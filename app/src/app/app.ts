import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import ReverseViewControl from '../viewcontrols/reverse/reverse.vc'

export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: '/reverse/:theinput', view: ReverseViewControl}
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
} 

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);
