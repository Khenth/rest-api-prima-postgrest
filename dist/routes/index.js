"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
//Users
__exportStar(require("./users/users"), exports);
__exportStar(require("../routes/users/usersgroup"), exports);
//Auth
__exportStar(require("../routes/auth"), exports);
//Navigation
__exportStar(require("../routes/navigation/mainmenu/mainmenu"), exports);
__exportStar(require("../routes/navigation/menu/menu"), exports);
__exportStar(require("../routes/navigation/submenu/submenu"), exports);
//Auth Navigation
__exportStar(require("./navigation/usergroupmenu/usergroupmenu"), exports);
//# sourceMappingURL=index.js.map