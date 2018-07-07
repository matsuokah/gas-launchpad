import {hello} from "./core/hello";
import {world} from "./core/world";

declare namespace glFunctions {
    interface global {
        main(): void;
    }
}

declare var global: glFunctions.global;

global.main = () => {
    hello();
    world();
};
