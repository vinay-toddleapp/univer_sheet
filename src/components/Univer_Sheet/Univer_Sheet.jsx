import "@univerjs/design/lib/index.css";
import "@univerjs/ui/lib/index.css";
import "@univerjs/docs-ui/lib/index.css";
import "@univerjs/sheets-ui/lib/index.css";
import "@univerjs/sheets-formula/lib/index.css";

import { LocaleType, Univer, UniverInstanceType } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";

import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";

import { UniverUIPlugin } from "@univerjs/ui";

import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";

import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";

// import DesignEnUS from "@univerjs/design/locale/en-US";
// import UIEnUS from "@univerjs/ui/locale/en-US";
// import DocsUIEnUS from "@univerjs/docs-ui/locale/en-US";
// import SheetsEnUS from "@univerjs/sheets/locale/en-US";
// import SheetsUIEnUS from "@univerjs/sheets-ui/locale/en-US";
import { useEffect, useRef } from "react";

const Univer_Sheet = () => {
  const containerRef = useRef();
  const univerRef = useRef();
  const workbookRef = useRef();

  const init = (data = {}) => {
    if (!containerRef.current) {
      throw Error("container not initialized");
    }
    const univer = new Univer({
      theme: defaultTheme,
      locale: LocaleType.EN_US,
      locales: {
        // [LocaleType.ZH_CN]: zhCN,
        // [LocaleType.EN_US]: enUS,
      },
    });
    univerRef.current = univer;

    // core plugins
    univer.registerPlugin(UniverRenderEnginePlugin);
    univer.registerPlugin(UniverFormulaEnginePlugin);
    univer.registerPlugin(UniverUIPlugin, {
      container: containerRef.current,
    });

    // doc plugins
    univer.registerPlugin(UniverDocsPlugin, {
      hasScroll: false,
    });
    univer.registerPlugin(UniverDocsUIPlugin);

    // sheet plugins
    univer.registerPlugin(UniverSheetsPlugin);
    univer.registerPlugin(UniverSheetsUIPlugin);
    univer.registerPlugin(UniverSheetsFormulaPlugin);

    // create workbook instance
    workbookRef.current = univer.createUnit(
      UniverInstanceType.UNIVER_SHEET,
      data
    );
  };

  const destroyUniver = () => {
    // univerRef.current?.dispose();
    univerRef.current = null;
    workbookRef.current = null;
  };

  useEffect(() => {
    init();
    return () => {
      destroyUniver();
    };
  }, []);

  return <div ref={containerRef} className="univer-container" />;
};

export default Univer_Sheet;
