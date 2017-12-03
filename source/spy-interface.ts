/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */

import { Observable } from "rxjs/Observable";
import { PartialLogger } from "./logger";
import { Match } from "./match";
import { Deck, Notification, Plugin } from "./plugin";

export interface Ctor<T> {
    new (...args: any[]): T;
}

export interface Teardown {
    (): void;
}

export interface Spy {
    readonly tick: number;
    debug(match: Match, ...notifications: Notification[]): Teardown;
    find<T extends Plugin>(ctor: Ctor<T>): T | undefined;
    findAll<T extends Plugin>(ctor: Ctor<T>): T[];
    findAll(): Plugin[];
    flush(): void;
    ignore<R>(block: () => R): R;
    let(match: Match, select: (source: Observable<any>) => Observable<any>): Teardown;
    log(partialLogger?: PartialLogger): Teardown;
    log(match: Match, partialLogger?: PartialLogger): Teardown;
    pause(match: Match): Deck;
    plug(...plugins: Plugin[]): Teardown;
    show(partialLogger?: PartialLogger): void;
    show(match: Match, partialLogger?: PartialLogger): void;
    stats(partialLogger?: PartialLogger): void;
    teardown(): void;
    unplug(...plugins: Plugin[]): void;
}