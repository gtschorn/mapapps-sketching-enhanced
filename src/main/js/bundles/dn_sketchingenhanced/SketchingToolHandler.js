/*
 * Copyright (C) 2020 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export default class SketchingToolHandler {

    activate() {
        this.activeTool = null;
    }

    activateSketching() {
        this._eventService.postEvent('dsa/crack_archive/STOPDRAWING', {});
        // if sketching widget is reopened -> activate last active tool
        this.activeTool && this._sketchingHandler.activateTool(this.activeTool);
    }

    deactivateSketching() {
        // if sketching widget is closed -> deactivate active sketching tool
        const viewModel = this._sketchingHandler.sketchViewModel;
        this.activeTool = viewModel.tool ? viewModel.tool : null;
        this.activeTool && this._sketchingHandler.deactivateTool(this.activeTool.tool ? this.activeTool.tool : this.activeTool);
    }
}