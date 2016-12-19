/**
 * Created by xwatson on 2016/12/14.
 */
import React from 'react'

export const post = (url, data, callback) => {
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
    };

    return fetch(url, fetchOptions)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            return Promise.reject(json)
        });
}
export const get = (url, data,callBack) => {
    const fetchOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        }
    };

    return fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((response) => {
        console.log(response)
            callBack(JSON.parse(response))
        })
        .catch((err) => {
            console.log(err)
            callBack(err)
        })
}