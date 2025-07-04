"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const up = () => {
    return (0, drizzle_orm_1.sql) `ALTER TABLE driztable RENAME TO Drizz;`;
};
exports.up = up;
const down = () => {
    return (0, drizzle_orm_1.sql) `ALTER TABLE Drizz RENAME TO driztable;`;
};
exports.down = down;
//# sourceMappingURL=rename_table.js.map