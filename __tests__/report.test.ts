// import * as cp from "child_process";
import * as fs from "fs";
import * as path from "path";
import * as process from "process";

import { expect, test } from "@jest/globals";

import { formatDiffShell, formatDiffMarkdown } from "../src/format";
import { loadReports, computeDiff } from "../src/report";

describe("", () => {
  // shows how the runner will run a javascript action with env / stdout protocol
  // it("should run action", () => {
  //   const np = process.execPath;
  //   const ip = path.join(__dirname, "..", "dist", "index.js");
  //   console.log(
  //     cp
  //       .execFileSync(np, [ip], {
  //         env: {
  //           ...process.env,
  //           INPUT_WORKFLOWID: "test",
  //           INPUT_BASE: "base",
  //           INPUT_HEAD: "head",
  //           GITHUB_TOKEN: "token",
  //           INPUT_REPORT: "report",
  //         },
  //       })
  //       .toString()
  //   );
  // });

  it("should run action", () => {
    const srcContent = fs.readFileSync("__tests__/mocks/gas_report.1.ansi", "utf8");
    const cmpContent = fs.readFileSync("__tests__/mocks/gas_report.2.ansi", "utf8");
    console.log(formatDiffShell(computeDiff(loadReports(srcContent), loadReports(cmpContent))));
  });
});