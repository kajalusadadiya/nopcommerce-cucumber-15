$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/computer.feature");
formatter.feature({
  "line": 1,
  "name": "ComputerPageTest",
  "description": "As a User I want to order computer",
  "id": "computerpagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4906833400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computerpagetest;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Verify \"Computers\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 114784000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1181788200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iVerifyText(String)"
});
formatter.result({
  "duration": 51731000,
  "status": "passed"
});
formatter.after({
  "duration": 709905000,
  "status": "passed"
});
formatter.before({
  "duration": 2911873200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computerpagetest;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Verify \"Desktops\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 97600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1062075500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 415109600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 10
    }
  ],
  "location": "DesktopPageTest.iVerifyPage(String)"
});
formatter.result({
  "duration": 51481400,
  "status": "passed"
});
formatter.after({
  "duration": 705770500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 32,
      "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 34,
      "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 35,
      "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2928498100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 66400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1105381600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 1071371100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "DesktopPageTest.iClickOnProductName(String)"
});
formatter.result({
  "duration": 1703837600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 18
    }
  ],
  "location": "DesktopPageTest.selectProcessor(String)"
});
formatter.result({
  "duration": 80504900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectRAM(String)"
});
formatter.result({
  "duration": 71417800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectHDD(String)"
});
formatter.result({
  "duration": 68293200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 11
    }
  ],
  "location": "DesktopPageTest.selectOS(String)"
});
formatter.result({
  "duration": 64720600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 17
    }
  ],
  "location": "DesktopPageTest.selectSoftware(String)"
});
formatter.result({
  "duration": 64708700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageTest.clickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 57172300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 16
    }
  ],
  "location": "DesktopPageTest.verifyMessage(String)"
});
formatter.result({
  "duration": 856821800,
  "status": "passed"
});
formatter.after({
  "duration": 705779900,
  "status": "passed"
});
formatter.before({
  "duration": 2787167300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 49500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1146970100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 991510500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "DesktopPageTest.iClickOnProductName(String)"
});
formatter.result({
  "duration": 835140000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 18
    }
  ],
  "location": "DesktopPageTest.selectProcessor(String)"
});
formatter.result({
  "duration": 43258000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectRAM(String)"
});
formatter.result({
  "duration": 78743100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectHDD(String)"
});
formatter.result({
  "duration": 80369000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 11
    }
  ],
  "location": "DesktopPageTest.selectOS(String)"
});
formatter.result({
  "duration": 79696700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 17
    }
  ],
  "location": "DesktopPageTest.selectSoftware(String)"
});
formatter.result({
  "duration": 79199800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageTest.clickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 50579800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 16
    }
  ],
  "location": "DesktopPageTest.verifyMessage(String)"
});
formatter.result({
  "duration": 863003600,
  "status": "passed"
});
formatter.after({
  "duration": 706457700,
  "status": "passed"
});
formatter.before({
  "duration": 2934921600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 67600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 523560500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 1036034600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "DesktopPageTest.iClickOnProductName(String)"
});
formatter.result({
  "duration": 748799500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 18
    }
  ],
  "location": "DesktopPageTest.selectProcessor(String)"
});
formatter.result({
  "duration": 44205300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectRAM(String)"
});
formatter.result({
  "duration": 66696600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectHDD(String)"
});
formatter.result({
  "duration": 65129300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 11
    }
  ],
  "location": "DesktopPageTest.selectOS(String)"
});
formatter.result({
  "duration": 61994000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 17
    }
  ],
  "location": "DesktopPageTest.selectSoftware(String)"
});
formatter.result({
  "duration": 77321300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageTest.clickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 46112800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 16
    }
  ],
  "location": "DesktopPageTest.verifyMessage(String)"
});
formatter.result({
  "duration": 852562500,
  "status": "passed"
});
formatter.after({
  "duration": 702446200,
  "status": "passed"
});
});