import "htmx.org";
import Alpine from "alpinejs";
import morph from '@alpinejs/morph';
import "./layout.scss";
import "./tailwind.css"

declare global {
    interface Window {
        htmx: any;
        Alpine: any;
    }
}

const htmx = import("htmx.org");

window.htmx = htmx;
window.Alpine = Alpine;
Alpine.plugin(morph);

Alpine.start();