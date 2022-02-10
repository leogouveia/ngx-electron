import * as Electron from "electron";
export interface ElectronWindow extends Window {
  require(module: string): any;
}

export interface ElectronRemote {
  getCurrentWebContents: () => Electron.WebContents;
  getCurrentWindow: () => Electron.BrowserWindow;
  getGlobal: (name: string) => any;
  process: NodeJS.Process;
  require: any;
}
