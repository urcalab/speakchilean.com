import "$styles/index.css";
import "$styles/syntax-highlighting.css";

// Import all JavaScript & CSS files from src/_components
// import components from "$components/**/*.{js,jsx,js.rb,css}";

import { Application } from "stimulus";

// Crear una nueva aplicación Stimulus
const application = Application.start();

import event_controller from "./controllers/event_controller";
application.register("event", event_controller);
