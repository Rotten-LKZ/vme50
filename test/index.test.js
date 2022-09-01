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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const data_1 = __importDefault(require("../src/data"));
const src_1 = __importStar(require("../src"));
describe('test vme50 function', () => {
    const isThursday = new Date().getDay() === 4;
    if (isThursday) {
        test('throw Error on Thursday', () => {
            expect(() => {
                (0, src_1.default)();
            }).toThrowError('Error: Crazy Thursday need ￥50');
        });
        test('return a string from data.ts with resultType=text', () => {
            expect(data_1.default.texts.includes((0, src_1.default)({ type: 'warn', resultType: 'text' }))).toBeTruthy();
        });
        test('return a string from data.ts with resultType=image', () => {
            expect(data_1.default.images.includes((0, src_1.default)({ type: 'warn', resultType: 'image' }))).toBeTruthy();
        });
    }
    else {
        test('return undefined when it is not Thursday', () => {
            expect((0, src_1.default)()).toBeUndefined();
        });
    }
});
describe('test vme50Text', () => {
    test('return a string from data.ts', () => {
        expect(data_1.default.texts.includes((0, src_1.vme50Text)())).toBeTruthy();
    });
});
describe('test vme50Image', () => {
    test('return a string from data.ts', () => {
        expect(data_1.default.images.includes((0, src_1.vme50Image)())).toBeTruthy();
    });
});
