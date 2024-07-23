import { BooleanNumber, LocaleType, SheetTypes } from "@univerjs/core";

export const DEFAULT_WORKBOOK_DATA = {
  id: "workbook-01",
  locale: LocaleType.ZH_CN,
  name: "universheet",
  sheetOrder: ["sheet-01", "sheet-02", "sheet-03"],
  appVersion: "3.0.0-alpha",
  sheets: {
    "sheet-01": {
      type: SheetTypes.GRID,
      id: "sheet-01",
      cellData: {
        0: {
          0: {
            v: "Hello World",
          },
        },
      },
      name: "sheet1",
      tabColor: "red",
      hidden: BooleanNumber.FALSE,
      rowCount: 10,
      columnCount: 5,
      zoomRatio: 1,
      scrollTop: 200,
      scrollLeft: 100,
      defaultColumnWidth: 93,
      defaultRowHeight: 27,
      status: 1,
      showGridlines: 1,
      hideRow: [],
      hideColumn: [],
      rowHeader: {
        width: 46,
        hidden: BooleanNumber.TRUE,
      },
      columnHeader: {
        height: 20,
        hidden: BooleanNumber.TRUE,
      },
      selections: ["A2"],
      rightToLeft: BooleanNumber.FALSE,
      pluginMeta: {},
    },
    "sheet-02": {
      type: SheetTypes.GRID,
      id: "sheet-02",
      name: "sheet2",
      cellData: {},
    },
    "sheet-03": {
      type: SheetTypes.GRID,
      id: "sheet-03",
      name: "sheet3",
      cellData: {},
    },
  },
};
