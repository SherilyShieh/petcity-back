/*
 * @Author: Sherily Shieh 
 * @Date: 2021-01-Sa 06:04:03 
 * @Last Modified by:   Sherily Shieh 
 * @Last Modified time: 2021-01-Sa 06:04:03 
 */
'use strict';

const fs = require('fs');
const cps = require('child_process');

async function fileExists(filepath) {
    return new Promise((res, rej) => {
        fs.stat(filepath, err => {
            if (err) {
                if (err.code === 'ENOENT') {
                    return res(false);
                }
                console.log(err);
                return rej(err);
            }
            return res(true);
        });
    });
}

async function mkdir(dirpath) {
    return new Promise((res, rej) => {
        fs.mkdir(dirpath, err => {
            if (err) {
                return rej(err);
            }
            return res(true);
        });

    });
}

async function unlink(filepath) {
    return new Promise(res => {
        fs.unlink(filepath, err => {
            if (err) {
                console.log(err);
                return res(false);
            }
            return res(true);
        });
    });
}

async function readdir(filepath) {
    return new Promise((res, rej) => {
        fs.readdir(filepath, (err, files) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    return res([]);
                }
                return rej(err);
            }
            return res(files);
        });
    });
}

async function isDirectory(path) {
    return new Promise(res => {
        fs.stat(path, (err, stat) => {
            if (err) {
                return res(false);
            }
            return res(stat.isDirectory());
        });
    });
}

async function rmdir(path) {
    return new Promise((res, rej) => {
        fs.rmdir(path, err => {
            if (err) {
                return rej(err);
            }
            return res(true);
        });
    });
}

async function forceRmdir(path) {
    return new Promise((res, rej) => {
        cps.exec(`rm -fr ${path}`, (err, stdout, stderr) => {
            if (err) {
                return rej(stderr);
            }
            return res(true);
        });
    });
}

async function rename(oldPath, newPath) {
    return new Promise((res, rej) => {
        fs.rename(oldPath, newPath, err => {
            if (err) {
                return rej(err);
            }
            return res(true);
        });
    });
}

module.exports = {
    fileExists,
    mkdir,
    unlink,
    readdir,
    isDirectory,
    rmdir,
    forceRmdir,
    rename,
};