import { configure } from "@storybook/react";
import "../src/assets/styles/index.css"

const req = require.context("../stories", true, /\.stories\.tsx$/);
function loadStories() {
    req.keys().forEach(req);
}
configure(loadStories, module);