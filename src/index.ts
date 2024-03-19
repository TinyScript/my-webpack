#!/usr/bin/env zx
/*
 * @Date: 2024-03-19 19:53:25
 * @LastEditors: TinyScript
 * @LastEditTime: 2024-03-19 20:59:06
 * @FilePath: /my-webpack/src/index.ts
 */
import { argv } from 'zx';

const { _: args } = argv;

console.log(args);