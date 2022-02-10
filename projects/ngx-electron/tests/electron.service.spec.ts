import { Injector } from "@angular/core";
import { getTestBed, TestBed } from "@angular/core/testing";
import {} from "jasmine";
import { ElectronService } from "../src/lib/electron.service";
import { NgxElectronModule } from "../src/public_api";
import { ElectronServiceRef } from "../src/lib/electron.service.ref";

describe("ElectronService", () => {
  let _injector: Injector;
  let _electronService: ElectronService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxElectronModule],
    });
    _injector = getTestBed();
    _electronService = _injector.get(ElectronService);
  });

  afterEach(() => {
    _injector = undefined;
    _electronService = undefined;
  });

  it("is defined", () => {
    expect(ElectronService).toBeDefined();
    expect(_electronService).toBeDefined();
    expect(_electronService instanceof ElectronService).toBeTruthy();
    expect(_electronService instanceof ElectronServiceRef).toBeTruthy();
  });

  it("should not expose electron directly", () => {
    expect(_electronService).not.hasOwnProperty("electron");
  });

  describe("isElectronApp", () => {
    it("should provide isElectronApp as an instance-property", () => {
      expect(_electronService).hasOwnProperty("isElectronApp");
    });

    it("should return a boolean", () => {
      expect(typeof _electronService.isElectronApp).toEqual("boolean");
    });

    it("should return false if not running in electron", () => {
      expect(_electronService.isElectronApp).toBeFalsy();
    });

    it("should return true if running in electron", () => {
      let original = navigator.userAgent;

      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return "foo Electron";
      });

      expect(_electronService.isElectronApp).toBeTruthy();

      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return original;
      });
    });
  });

  describe("isWindows", () => {
    it("should provide isElectronApp as an instance-property", () => {
      expect(_electronService).hasOwnProperty("isWindows");
    });

    it("should return a boolean", () => {
      expect(typeof _electronService.isWindows).toEqual("boolean");
    });

    it("should return false if isElectronApp is false", () => {
      expect(_electronService.isWindows).toBeFalsy();
    });

    it("should return true if running in electron", () => {
      let originalPlatform = process.platform;
      let originalUserAgent = navigator.userAgent;
      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return "foo Electron";
      });
      (<any>process).__defineGetter__("platform", (): string => {
        return "win32";
      });

      expect(_electronService.isWindows).toBeTruthy();

      (<any>process).__defineGetter__("platform", (): string => {
        return originalPlatform;
      });

      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return originalUserAgent;
      });
    });
  });

  describe("isLinux", () => {
    it("should provide isLinux as an instance-property", () => {
      expect(_electronService).hasOwnProperty("isLinux");
    });

    it("should return a boolean", () => {
      expect(typeof _electronService.isLinux).toEqual("boolean");
    });

    it("should return false if isElectronApp is false", () => {
      expect(_electronService.isLinux).toBeFalsy();
    });

    it("should return true if running in electron", () => {
      let originalPlatform = process.platform;
      let originalUserAgent = navigator.userAgent;
      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return "foo Electron";
      });
      (<any>process).__defineGetter__("platform", (): string => {
        return "linux";
      });

      expect(_electronService.isLinux).toBeTruthy();

      (<any>process).__defineGetter__("platform", (): string => {
        return originalPlatform;
      });

      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return originalUserAgent;
      });
    });
  });

  describe("isMacOS", () => {
    it("should provide isMacOS as an instance-property", () => {
      expect(_electronService).hasOwnProperty("isMacOS");
    });

    it("should return a boolean", () => {
      expect(typeof _electronService.isMacOS).toEqual("boolean");
    });

    it("should return false if isElectronApp is false", () => {
      expect(_electronService.isMacOS).toBeFalsy();
    });

    it("should return true if running in electron", () => {
      let originalPlatform = process.platform;
      let originalUserAgent = navigator.userAgent;
      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return "foo Electron";
      });
      (<any>process).__defineGetter__("platform", (): string => {
        return "darwin";
      });

      expect(_electronService.isMacOS).toBeTruthy();

      (<any>process).__defineGetter__("platform", (): string => {
        return originalPlatform;
      });

      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return originalUserAgent;
      });
    });
  });

  describe("isX86", () => {
    it("should provide isX86 as an instance-property", () => {
      expect(_electronService).hasOwnProperty("isX86");
    });

    it("should return a boolean", () => {
      expect(typeof _electronService.isX86).toEqual("boolean");
    });

    it("should return false if isElectronApp is false", () => {
      expect(_electronService.isX86).toBeFalsy();
    });

    it("should return true if running in electron with 32bit arch", () => {
      let originalArch = process.arch;
      let originalUserAgent = navigator.userAgent;
      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return "foo Electron";
      });
      (<any>process).__defineGetter__("arch", (): string => {
        return "ia32";
      });

      expect(_electronService.isX86).toBeTruthy();

      (<any>process).__defineGetter__("arch", (): string => {
        return originalArch;
      });

      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return originalUserAgent;
      });
    });

    it("should return false if running in electron with x64 arch", () => {
      let originalArch = process.arch;
      let originalUserAgent = navigator.userAgent;
      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return "foo Electron";
      });
      (<any>process).__defineGetter__("arch", (): string => {
        return "x64";
      });

      expect(_electronService.isX86).toBeFalsy();

      (<any>process).__defineGetter__("arch", (): string => {
        return originalArch;
      });

      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return originalUserAgent;
      });
    });
  });

  describe("isX64", () => {
    it("should provide isX64 as an instance-property", () => {
      expect(_electronService).hasOwnProperty("isX64");
    });

    it("should return a boolean", () => {
      expect(typeof _electronService.isX64).toEqual("boolean");
    });

    it("should return false if isElectronApp is false", () => {
      expect(_electronService.isX64).toBeFalsy();
    });

    it("should return true if running in electron with x64 arch", () => {
      let originalArch = process.arch;
      let originalUserAgent = navigator.userAgent;
      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return "foo Electron";
      });
      (<any>process).__defineGetter__("arch", (): string => {
        return "x64";
      });

      expect(_electronService.isX64).toBeTruthy();

      (<any>process).__defineGetter__("arch", (): string => {
        return originalArch;
      });

      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return originalUserAgent;
      });
    });

    it("should return false if running in electron with 32bit arch", () => {
      let originalArch = process.arch;
      let originalUserAgent = navigator.userAgent;
      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return "foo Electron";
      });
      (<any>process).__defineGetter__("arch", (): string => {
        return "ia32";
      });

      expect(_electronService.isX64).toBeFalsy();

      (<any>process).__defineGetter__("arch", (): string => {
        return originalArch;
      });

      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return originalUserAgent;
      });
    });
  });

  describe("isArm", () => {
    it("should provide isArm as an instance-property", () => {
      expect(_electronService).hasOwnProperty("isArm");
    });

    it("should return a boolean", () => {
      expect(typeof _electronService.isArm).toEqual("boolean");
    });

    it("should return false if isElectronApp is false", () => {
      expect(_electronService.isArm).toBeFalsy();
    });

    it("should return true if running in electron with arm arch", () => {
      let originalArch = process.arch;
      let originalUserAgent = navigator.userAgent;
      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return "foo Electron";
      });
      (<any>process).__defineGetter__("arch", (): string => {
        return "arm";
      });

      expect(_electronService.isArm).toBeTruthy();

      (<any>process).__defineGetter__("arch", (): string => {
        return originalArch;
      });

      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return originalUserAgent;
      });
    });
  });

  describe("api", () => {
    it("should expose desktopCapturer", () => {
      expect(_electronService.hasOwnProperty("desktopCapturer"));
    });

    it("should expose clipboard", () => {
      expect(_electronService.hasOwnProperty("clipboard"));
    });

    it("should expose crashReporter", () => {
      expect(_electronService.hasOwnProperty("crashReporter"));
    });

    it("should expose ipcRenderer", () => {
      expect(_electronService.hasOwnProperty("ipcRenderer"));
    });

    it("should expose process", () => {
      expect(_electronService.hasOwnProperty("process"));
    });

    it("should expose remote", () => {
      expect(_electronService.hasOwnProperty("remote"));
    });

    it("should expose shell", () => {
      expect(_electronService.hasOwnProperty("shell"));
    });

    it("should expose remote", () => {
      expect(_electronService.hasOwnProperty("remote"));
    });

    it("should expose webFrame", () => {
      expect(_electronService.hasOwnProperty("webFrame"));
    });

    it("should expose screen", () => {
      expect(_electronService.hasOwnProperty("screen"));
    });

    it("should expose nativeImage", () => {
      expect(_electronService.hasOwnProperty("nativeImage"));
    });
  });

  describe("if not in Electron", () => {
    it("should return null for desktopCapturer", () => {
      expect(_electronService.desktopCapturer).toBeUndefined();
    });

    it("should return null for clipboard", () => {
      expect(Object.keys(_electronService.clipboard).length).toBe(0);
    });

    it("should return null for crashReporter", () => {
      expect(_electronService.crashReporter).toBeNull();
    });

    it("should return null for ipcRenderer", () => {
      expect(Object.keys(_electronService.ipcRenderer).length).toBe(0);
    });

    it("should return null for process", () => {
      expect(_electronService.process).toBeNull();
    });

    it("should return null for remote", () => {
      expect(_electronService.remote).toBeNull();
    });

    it("should return null for shell", () => {
      expect(_electronService.shell).toBeUndefined();
    });

    it("should return null for nativeImage", () => {
      expect(_electronService.nativeImage).toBeNull();
    });

    it("should return null for remote", () => {
      expect(_electronService.remote).toBeUndefined();
    });

    it("should return null for webFrame", () => {
      expect(_electronService.webFrame).toBeUndefined();
    });

    it("should return null for screen", () => {
      expect(_electronService.screen).toBeUndefined();
    });
  });

  describe("if in Electron", () => {
    const original = navigator.userAgent;

    beforeEach(() => {
      (<any>window).require = () => {
        return {
          desktopCapturer: {},
          clipboard: {},
          crashReporter: {},
          ipcRenderer: {},
          remote: {
            process: {},
          },
        };
      };

      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return "foo Electron";
      });
    });
    afterEach(() => {
      (<any>navigator).__defineGetter__("userAgent", (): string => {
        return original;
      });
    });
    it("should return object for desktopCapturer", () => {
      expect(_electronService.desktopCapturer).not.toBeNull();
    });

    it("should return object for clipboard", () => {
      expect(_electronService.clipboard).not.toBeNull();
    });

    it("should return object for crashReporter", () => {
      expect(_electronService.crashReporter).not.toBeNull();
    });

    it("should return object for ipcRenderer", () => {
      expect(_electronService.ipcRenderer).not.toBeNull();
    });

    it("should return object for process", () => {
      expect(_electronService.process).not.toBeNull();
    });

    it("should return object for remote", () => {
      expect(_electronService.remote).not.toBeNull();
    });

    it("should return object for shell", () => {
      expect(_electronService.shell).not.toBeNull();
    });

    it("should return object for remote", () => {
      expect(_electronService.remote).not.toBeNull();
    });

    it("should return object for webFrame", () => {
      expect(_electronService.webFrame).not.toBeNull();
    });

    it("should return object for screen", () => {
      expect(_electronService.screen).not.toBeNull();
    });
  });
});
